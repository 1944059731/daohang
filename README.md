# 机场导航站

一个采用玻璃拟态（Glassmorphism）设计风格的机场导航站，纯静态页面，可直接部署到 Cloudflare Pages。

## ✨ 特性

- 🎨 玻璃拟态现代设计风格
- 📱 响应式布局，完美适配移动端
- 🔍 实时搜索过滤功能
- 🌓 支持暗色模式（跟随系统）
- ⚡ 纯静态，加载迅速
- 🚀 一键部署到 Cloudflare Pages

## 📁 项目结构

```
导航站/
├── index.html    # 主页面
├── style.css     # 自定义样式
├── script.js     # 交互逻辑
└── README.md     # 本文件
```

## 🛠️ 本地预览

方式一：直接打开
- 双击 `index.html` 文件即可在浏览器中查看

方式二：使用本地服务器
```bash
# 使用 Node.js 的 serve
npx -y serve ./

# 或使用 Python
python -m http.server 8080

# 或使用 VS Code Live Server 插件
```

## ☁️ 部署到 Cloudflare Pages

### 方式一：通过 GitHub 部署（推荐）

1. **创建 GitHub 仓库**
   - 登录 GitHub，点击 "New repository"
   - 填写仓库名称（如 `airport-nav`）
   - 选择 Public 或 Private
   - 点击 "Create repository"

2. **上传代码到 GitHub**
   ```bash
   # 初始化 Git 仓库
   git init
   
   # 添加所有文件
   git add .
   
   # 提交代码
   git commit -m "Initial commit"
   
   # 添加远程仓库（替换为你的仓库地址）
   git remote add origin https://github.com/你的用户名/airport-nav.git
   
   # 推送代码
   git push -u origin main
   ```

3. **连接 Cloudflare Pages**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
   - 进入 **Workers & Pages** 
   - 点击 **Create application**
   - 选择 **Pages** 标签
   - 点击 **Connect to Git**
   - 授权 GitHub 并选择刚创建的仓库

4. **配置构建设置**
   - **Project name**: 填写项目名称（会成为子域名前缀）
   - **Production branch**: `main`
   - **Build command**: 留空（纯静态无需构建）
   - **Build output directory**: `/`（根目录）

5. **部署**
   - 点击 **Save and Deploy**
   - 等待部署完成（通常1-2分钟）
   - 获得 `项目名.pages.dev` 域名

### 方式二：直接上传部署

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Workers & Pages**
3. 点击 **Create application** → **Pages**
4. 选择 **Upload assets**
5. 拖拽整个项目文件夹或选择文件上传
6. 点击 **Deploy site**

### 🌐 绑定自定义域名（可选）

1. 在 Pages 项目页面，点击 **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入你的域名（如 `nav.example.com`）
4. 根据提示添加 DNS 记录
5. 等待 SSL 证书自动配置完成

## 📝 自定义内容

### 修改导航数据

编辑 `script.js` 文件中的 `siteData` 对象：

```javascript
const siteData = {
    tier1: [
        {
            name: "网站名称",
            desc: "网站描述",
            url: "https://example.com",
            domain: "example.com",
            icon: "🚀",  // emoji 图标
            color: "bg-blue-100 dark:bg-blue-900/30"  // Tailwind 颜色类
        },
        // 添加更多...
    ],
    // 其他分类...
};
```

### 修改网站标题

编辑 `index.html` 中的 `<title>` 和 `<h1>` 标签。

### 修改配色主题

编辑 `index.html` 中的 `body` 类名，调整渐变背景颜色。

## 📄 许可证

MIT License - 自由使用和修改
