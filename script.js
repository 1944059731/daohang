// 导航站数据 - 默认数据（API 不可用时的降级方案）
const defaultSiteData = {
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
    tier1: [
        {
            name: "Nexitally",
            desc: "奶昔机场，公认业内第一机场，全IPLC线路，游戏加速首选",
            url: "https://naiixi.com/signupbyemail.aspx?MemberCode=9e84723f3edd4196aea8e5fd42c4ca3520251218171520",
            domain: "naiixi.com",
            icon: "🍦",
            color: "bg-pink-100 dark:bg-pink-900/30"
        },
        {
            name: "老头vpn",
            desc: "老头VPN源自2016年，是华语地区老牌的个人VPN加速器厂商，凭借多年的技术积累及低调的发展在国际华语市场上一直保持着优良的口碑。",
            url: "https://letusgolang.com/#/register?code=gLMk1GVK",
            domain: "letusgolang.com",
            icon: "☁️",
            iconUrl: "https://www.ffq.la/wp-content/uploads/2025/09/1757062587-3a4e760536d08334ca2cf7e980a29cb1.webp",
            color: "bg-sky-100 dark:bg-sky-900/30"
        },
        {
            name: " dlercloud",
            desc: "墙洞，企业套餐比奶昔还猛",
            url: "https://dler.pro/auth/register?affid=218408",
            domain: "dler.pro",
            icon: "🏷️",
            color: "bg-blue-100 dark:bg-blue-900/30"
        },
        {
            name: "ouo",
            desc: "10元100G",
            url: "https://login.ouonetwork.com/register?i=recycOhA",
            domain: "login.ouonetwork.com",
            icon: "🚀",
            iconUrl: "https://login.ouonetwork.com/favicon.ico",
            color: "bg-indigo-100 dark:bg-indigo-900/30"
        },
        {
            name: "WestData",
            desc: "WestData（西部数据）",
            url: "https://wd-gold.com/aff.php?aff=12378",
            domain: "wd-gold.com",
            icon: "🔗",
            iconUrl: "https://wd-gold.com/favicon.ico",
            color: "bg-blue-100 dark:bg-blue-900/30"
        }
    ],
    tier2: [
        {
            name: "大哥云",
            desc: "性价比之选，中转线路稳定，月付9.9起，※海外团队※支持V2ray 专线节点：有专属安卓APP和Windows电脑客户端 IPLC解锁流媒体：美日港台Netflix ※高峰期不卡",
            url: "https://aff02.dgy02.com/#/register?code=AyThmyJP",
            domain: "aff02.dgy02.com",
            icon: "👨",
            color: "bg-orange-100 dark:bg-orange-900/30"
        },
        {
            name: "飞鸟机场",
            desc: "优质中转，全平台支持，新用户优惠",
            url: "https://fbinv02.fbaff.cc/auth/register?code=F7JaZbBh",
            domain: "fbinv02.fbaff.cc",
            icon: "🐦",
            iconUrl: "https://aa.duangks.com/icon/FlyingBird.webp",
            color: ""
        },
        {
            name: "tkv",
            desc: "20块100G 跟随时间调整动态倍率，一般来说都能用200G起步",
            url: "https://portal.tkv.one/aff.php?aff=1184",
            domain: "portal.tkv.one",
            icon: "🔗",
            iconUrl: "https://aa.duangks.com/icon/TKV.png",
            color: "bg-blue-100 dark:bg-blue-900/30"
        },
        {
            name: "ssrdog",
            desc: " 一家不在TG宣传的机场",
            url: "https://dog2.ssrdog7.com/",
            domain: "dog2.ssrdog7.com",
            icon: "🔗",
            iconUrl: "https://aa.duangks.com/icon/ssrdog.png",
            color: "bg-blue-100 dark:bg-blue-900/30"
        }
    ],
    stable: [
        {
            name: "STC-SERVER",
            desc: "老牌稳定机场，运营5年+，企业级SLA保障",
            url: "http://acad.stc-spadesdns.com/auth/register?code=zVge",
            domain: "acad.stc-spadesdns.com",
            icon: "🏢",
            iconUrl: "https://stc-spades.com/cn/img/logo.png",
            color: "bg-slate-100 dark:bg-slate-700/30"
        },
        {
            name: "魔戒",
            desc: " 中转，不限时套餐15元130G，稳定高速",
            url: "https://mojie.app/register?aff=uf9Oqm5Q",
            domain: "mojie.app",
            icon: "💍",
            color: ""
        },
        {
            name: "一元中转",
            desc: " 中转机场，12元每年每月50G，10元100G，15元200G",
            url: "https://yyzz.ink/#/register?code=kgh0NI7T",
            domain: "yyzz.ink",
            icon: "🔗",
            color: "bg-blue-100 dark:bg-blue-900/30"
        }
    ],
    budget: [
        {
            name: "一元机场",
            desc: "性价比神器，适合轻度用户，月付低至1元",
            url: "https://xn--4gq62f52gdss.top/#/register?code=SlpDmOCq",
            domain: "xn--4gq62f52gdss.top",
            icon: "💰",
            color: ""
        },
        {
            name: "流量光",
            desc: "低价稳定，适合长期使用",
            url: "https://llg01.com/#/register?code=6z8IDW3n",
            domain: "llg01.com",
            icon: "🆓",
            color: "bg-fuchsia-100 dark:bg-fuchsia-900/30"
        }
    ],
    friendLinks: [
        { name: "毒奶导航", url: "https://limbopro.com/" },
        { name: "机场推荐", url: "https://jichangtuijian.com/" },
        { name: "流媒体解锁", url: "https://github.com/" }
    ]
};

// 当前使用的数据（从 API 加载或使用默认值）
let siteData = null;

// 从 API 加载数据
async function loadSiteData() {
    try {
        const response = await fetch('/api/sites');
        if (response.ok) {
            siteData = await response.json();
            console.log('✅ 数据已从 API 加载');
        } else {
            throw new Error('API 响应错误');
        }
    } catch (error) {
        console.warn('⚠️ API 不可用，使用默认数据:', error.message);
        siteData = defaultSiteData;
    }

    // 数据加载完成后初始化页面
    initPage();
}

// 获取网站 favicon 的 URL（使用 Google Favicon API）
function getFaviconUrl(url, size = 32) {
    try {
        const domain = new URL(url).hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
    } catch {
        return null;
    }
}

// 生成卡片 HTML
function createCard(item) {
    const faviconUrl = getFaviconUrl(item.url);
    const customIconUrl = item.iconUrl || ''; // 自定义图标URL
    const emojiIcon = item.icon || '🔗';

    // 优先级：自定义图标URL（如有）→ Google Favicon → Emoji
    let iconHtml;

    // 生成图片加载失败时的回退处理代码
    const fallbackHandler = `onerror="this.style.display='none';this.nextElementSibling.style.display='inline';" onload="if(this.naturalWidth<2||this.naturalHeight<2){this.style.display='none';this.nextElementSibling.style.display='inline';}"`;

    // 更具描述性的 alt 文本
    const altText = `${item.name} 网站图标`;

    if (customIconUrl) {
        // 有自定义图标URL时，优先使用自定义图标，失败时显示Emoji
        iconHtml = `<img src="${customIconUrl}" alt="${altText}" title="${item.name}" class="w-6 h-6 rounded" loading="lazy" decoding="async" width="24" height="24" ${fallbackHandler}>
           <span class="text-2xl" style="display:none" aria-hidden="true">${emojiIcon}</span>`;
    } else if (faviconUrl) {
        // 没有自定义图标时，使用 Google Favicon，失败时显示Emoji
        iconHtml = `<img src="${faviconUrl}" alt="${altText}" title="${item.name}" class="w-6 h-6 rounded" loading="lazy" decoding="async" width="24" height="24" ${fallbackHandler}>
           <span class="text-2xl" style="display:none" aria-hidden="true">${emojiIcon}</span>`;
    } else {
        // 都没有，直接显示 Emoji
        iconHtml = `<span class="text-2xl" role="img" aria-label="${item.name}">${emojiIcon}</span>`;
    }

    return `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" 
           class="site-card desc-tooltip block p-4 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/70 dark:border-slate-700/70 hover:bg-white dark:hover:bg-slate-700/90"
           data-name="${item.name}" data-desc="${item.desc}" data-domain="${item.domain}" data-tooltip="${item.desc}">
            <div class="flex items-start gap-3">
                <div class="icon-container ${item.color}">
                    ${iconHtml}
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2">
                        <h3 class="font-semibold text-slate-800 dark:text-white truncate">${item.name}</h3>
                        <svg class="external-icon w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </div>
                    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">${item.desc}</p>
                    <p class="text-xs text-slate-400 dark:text-slate-500 mt-2">${item.domain}</p>
                </div>
            </div>
        </a>
    `;
}

// 生成友链 HTML
function createFriendLink(item) {
    return `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" 
           class="friend-link px-4 py-2 rounded-xl bg-white/50 dark:bg-slate-700/50 border border-slate-200/50 dark:border-slate-600/50 text-slate-700 dark:text-slate-300 text-sm hover:text-purple-600 dark:hover:text-purple-400"
           data-name="${item.name}">
            ${item.name}
        </a>
    `;
}

// 初始化页面
function initPage() {
    // 渲染各分类卡片
    document.getElementById('common-cards').innerHTML = siteData.common.map(createCard).join('');
    document.getElementById('tier1-cards').innerHTML = siteData.tier1.map(createCard).join('');
    document.getElementById('tier2-cards').innerHTML = siteData.tier2.map(createCard).join('');
    document.getElementById('stable-cards').innerHTML = siteData.stable.map(createCard).join('');
    document.getElementById('budget-cards').innerHTML = siteData.budget.map(createCard).join('');
    document.getElementById('friend-links').innerHTML = siteData.friendLinks.map(createFriendLink).join('');

    // 页面加载完成，添加过渡动画类
    requestAnimationFrame(() => {
        document.body.classList.add('page-loaded');
    });
}

// 防抖函数
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

// 搜索过滤逻辑
function performSearch(query) {
    const allCards = document.querySelectorAll('.site-card');
    const allSections = document.querySelectorAll('main > section');

    if (!query) {
        // 显示所有内容
        allCards.forEach(card => card.style.display = '');
        allSections.forEach(section => section.style.display = '');
        return;
    }

    // 过滤卡片
    allCards.forEach(card => {
        const name = card.dataset.name?.toLowerCase() || '';
        const desc = card.dataset.desc?.toLowerCase() || '';
        const domain = card.dataset.domain?.toLowerCase() || '';

        const matches = name.includes(query) || desc.includes(query) || domain.includes(query);
        card.style.display = matches ? '' : 'none';
    });

    // 隐藏空分类（友链除外）
    allSections.forEach(section => {
        if (section.id === 'links') return;
        const cards = section.querySelectorAll('.site-card');
        const visibleCards = Array.from(cards).filter(card => card.style.display !== 'none');
        section.style.display = visibleCards.length > 0 ? '' : 'none';
    });
}

// 搜索过滤功能（带防抖）
function initSearch() {
    const searchInput = document.getElementById('searchInput');

    // 使用防抖优化搜索性能（150ms 延迟）
    const debouncedSearch = debounce((e) => {
        const query = e.target.value.toLowerCase().trim();
        performSearch(query);
    }, 150);

    searchInput.addEventListener('input', debouncedSearch);

    // 支持 ESC 键清空搜索
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            performSearch('');
            searchInput.blur();
        }
    });
}

// 主题切换功能
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // 更新主题色 meta 标签
        const themeColor = isDark ? '#1e1b4b' : '#8b5cf6';
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
    });

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // 仅在用户没有手动设置主题时跟随系统
        if (!localStorage.getItem('theme')) {
            document.documentElement.classList.toggle('dark', e.matches);
        }
    });
}

// 平滑滚动并高亮导航
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');

    // 页面加载时默认激活第一个导航按钮（常用工具）
    function setFirstButtonActive() {
        navButtons.forEach(b => b.classList.remove('active'));
        if (navButtons.length > 0) {
            navButtons[0].classList.add('active');
        }
    }

    // 初始化时激活第一个按钮
    setFirstButtonActive();

    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // 移除所有激活状态
            navButtons.forEach(b => b.classList.remove('active'));
            // 添加当前激活状态
            btn.classList.add('active');
        });
    });

    // 滚动监听，自动更新导航状态
    const sections = document.querySelectorAll('main > section');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        // 当页面在顶部时，始终激活第一个按钮
        if (window.scrollY < 100) {
            setFirstButtonActive();
            return;
        }

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navButtons.forEach(btn => {
                    const href = btn.getAttribute('href');
                    if (href === `#${id}`) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // 添加滚动监听，确保页面回到顶部时激活第一个按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY < 100) {
            setFirstButtonActive();
        }
    }, { passive: true });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 先从 API 加载数据，加载完成后自动调用 initPage
    loadSiteData();
    initSearch();
    initNavigation();
    initThemeToggle();
});
