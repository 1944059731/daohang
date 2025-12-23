# Airport Navigation

[🇨🇳 中文](README.md) | **🇬🇧 English**

A glassmorphism-styled airport navigation site. Pure static pages with dynamic data management, deployable to Cloudflare Pages.

## 📸 Preview

![Preview](preview.png)

## ✨ Features

- 🎨 **Glassmorphism Design** - Modern frosted glass effect
- 📱 **Responsive Layout** - Perfect for desktop and mobile
- 🔍 **Real-time Search** - Search by name/description/domain
- 🌓 **Dark Mode** - System-following or manual toggle
- ⚡ **Fast Loading** - Static pages + CDN acceleration
- 🛠️ **Admin Panel** - Visual data editing with live sync
- 📊 **SEO Tool** - Built-in SEO analysis diagnostics
- 🔗 **Link Checker** - One-click broken link detection
- 🚀 **One-click Deploy** - Cloudflare Pages support

## 📁 Project Structure

```
navigation/
├── index.html        # Main page
├── admin.html        # Admin panel
├── seo-tool.html     # SEO analysis tool
├── style.css         # Custom styles
├── script.js         # Interaction logic & data
├── manifest.json     # PWA configuration
├── robots.txt        # Search engine config
├── sitemap.xml       # Sitemap
├── llms.txt          # AI description file
├── functions/        # Cloudflare Pages Functions
│   └── api/
│       └── [[path]].js
├── wrangler.toml     # Cloudflare config
└── README.md         # This file
```

## 🛠️ Local Preview

**Option 1: Direct Open**
- Double-click `index.html` to view in browser

**Option 2: Local Server**
```bash
# Using Node.js serve
npx -y serve ./

# Or Python
python -m http.server 8080

# Or VS Code Live Server extension
```

## ☁️ Deploy to Cloudflare Pages

### Option 1: GitHub Deployment (Recommended)

1. **Create GitHub Repository**
   - Login to GitHub, click "New repository"
   - Enter repository name (e.g., `airport-nav`)
   
2. **Upload Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/airport-nav.git
   git push -u origin main
   ```

3. **Connect to Cloudflare Pages**
   - Login to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Go to **Workers & Pages** 
   - Click **Create application** → **Pages** → **Connect to Git**
   - Authorize GitHub and select repository

4. **Configure Build Settings**
   - **Build command**: Leave empty
   - **Build output directory**: `/`

5. **Environment Variables (Important)**
   - Add `ADMIN_PASSWORD`: your admin password
   - Bind KV namespace `SITE_DATA` for data storage

### Option 2: Direct Upload

1. Go to Cloudflare Dashboard → **Workers & Pages**
2. Create application → Select **Upload assets**
3. Drag and drop project folder

### 🌐 Bind Custom Domain

1. In Pages project, click **Custom domains**
2. Add your domain (e.g., `nav.example.com`)
3. Configure DNS records as instructed

## 📝 Customization

### Edit Navigation Data

**Option 1: Use Admin Panel (Recommended)**
- Visit `/admin.html`
- Login to visually edit data

**Option 2: Edit Code**

Edit `siteData` object in `script.js`:

```javascript
const siteData = {
    tier1: [
        {
            name: "Site Name",
            desc: "Site Description",
            url: "https://example.com",
            domain: "example.com",
            icon: "🚀"
        },
    ],
    // Other categories...
};
```

### Modify Site Info

- **Title**: Edit `<title>` and `<h1>` in `index.html`
- **Colors**: Edit body gradient background classes
- **Categories**: Modify `categories` array in `script.js`

## 🔧 Tech Stack

| Category | Technology |
|---|---|
| Frontend | Tailwind CSS (CDN) |
| Backend | Cloudflare Pages Functions |
| Storage | Cloudflare KV |
| Deployment | Cloudflare Pages |

## 📊 SEO Checklist

- [x] Responsive design
- [x] Semantic HTML
- [x] Complete meta tags
- [x] Open Graph for social sharing
- [x] Schema.org structured data
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Dark mode support
- [x] Icon alt attribute optimization

## 📄 License

MIT License - Free to use and modify
