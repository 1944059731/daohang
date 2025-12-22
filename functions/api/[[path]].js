/**
 * 导航站 API - Cloudflare Pages Functions
 * 
 * API 端点:
 * - GET  /api/sites  - 获取网站数据
 * - POST /api/sites  - 更新网站数据（需认证）
 * - POST /api/auth   - 管理员登录
 */

// 默认数据（首次初始化或 KV 不可用时的降级数据）
const defaultData = {
    common: [
        {
            name: "clash-android",
            desc: "安卓客户端",
            url: "https://download.client.clashnews.org/proxy-clients-latest/android/clashforandroid-latest.apk",
            domain: "download.client.clashnews.org",
            icon: "🔗",
            iconUrl: "https://raw.githubusercontent.com/clash-verge-rev/clash-verge-rev/dev/src-tauri/icons/icon.png",
            color: "bg-purple-100 dark:bg-purple-900/30"
        },
        {
            name: "clash-win安装包",
            desc: "Windows版本",
            url: "https://ghproxy.com/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/autobuild/Clash.Verge_2.4.5+autobuild.1220.5afe11e_x64-setup.exe",
            domain: "ghproxy.com",
            icon: "🔗",
            iconUrl: "https://raw.githubusercontent.com/clash-verge-rev/clash-verge-rev/dev/src-tauri/icons/icon.png",
            color: "bg-blue-100 dark:bg-blue-900/30"
        },
        {
            name: "clash-Linux安装包",
            desc: "Linux 64位",
            url: "https://ghproxy.com/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/autobuild/Clash.Verge_2.4.5+autobuild.1220.5afe11e_amd64.deb",
            domain: "ghproxy.com",
            icon: "⚡",
            iconUrl: "https://raw.githubusercontent.com/clash-verge-rev/clash-verge-rev/dev/src-tauri/icons/icon.png",
            color: "bg-yellow-100 dark:bg-yellow-900/30"
        }
    ],
    tier1: [],
    tier2: [],
    stable: [],
    budget: [],
    friendLinks: []
};

// CORS 响应头
const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400'
};

// 创建 JSON 响应
function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
        }
    });
}

// 生成简单的 Token（基于时间戳和密码哈希）
async function generateToken(password) {
    const timestamp = Date.now();
    const data = `${password}-${timestamp}`;
    const encoder = new TextEncoder();
    const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(data));
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return `${timestamp}.${hash.substring(0, 32)}`;
}

// 验证 Token（1小时有效期）
async function verifyToken(token, password) {
    if (!token) return false;

    const parts = token.split('.');
    if (parts.length !== 2) return false;

    const timestamp = parseInt(parts[0], 10);
    const providedHash = parts[1];

    // 检查是否过期（1小时 = 3600000ms）
    if (Date.now() - timestamp > 3600000) return false;

    // 重新计算 hash 验证
    const data = `${password}-${timestamp}`;
    const encoder = new TextEncoder();
    const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(data));
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const expectedHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 32);

    return providedHash === expectedHash;
}

// 主请求处理
export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname;

    // 处理 CORS 预检请求
    if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    // 管理员密码（从环境变量读取，默认使用用户设置的密码）
    const ADMIN_PASSWORD = env.ADMIN_PASSWORD || '218192436';

    // API 路由
    try {
        // GET /api/sites - 获取网站数据
        if (path === '/api/sites' && request.method === 'GET') {
            let data = defaultData;

            // 尝试从 KV 读取
            if (env.SITE_DATA) {
                const kvData = await env.SITE_DATA.get('sites', { type: 'json' });
                if (kvData) {
                    data = kvData;
                }
            }

            return jsonResponse(data);
        }

        // POST /api/sites - 更新网站数据
        if (path === '/api/sites' && request.method === 'POST') {
            // 验证 Token
            const authHeader = request.headers.get('Authorization');
            const token = authHeader?.replace('Bearer ', '');

            if (!await verifyToken(token, ADMIN_PASSWORD)) {
                return jsonResponse({ error: '未授权，请先登录' }, 401);
            }

            // 解析请求体
            const newData = await request.json();

            // 验证数据格式
            if (!newData || typeof newData !== 'object') {
                return jsonResponse({ error: '无效的数据格式' }, 400);
            }

            // 保存到 KV
            if (env.SITE_DATA) {
                await env.SITE_DATA.put('sites', JSON.stringify(newData));
                return jsonResponse({ success: true, message: '数据已保存' });
            } else {
                return jsonResponse({ error: 'KV 存储未配置' }, 500);
            }
        }

        // POST /api/auth - 管理员登录
        if (path === '/api/auth' && request.method === 'POST') {
            const body = await request.json();
            const { password } = body;

            if (password === ADMIN_PASSWORD) {
                const token = await generateToken(ADMIN_PASSWORD);
                return jsonResponse({
                    success: true,
                    token,
                    expiresIn: 3600 // 1小时
                });
            } else {
                return jsonResponse({ error: '密码错误' }, 401);
            }
        }

        // 未匹配的 API 路径
        return jsonResponse({ error: '未找到该接口' }, 404);

    } catch (error) {
        console.error('API Error:', error);
        return jsonResponse({ error: '服务器内部错误' }, 500);
    }
}
