# 📦 cPanel Deployment Guide for Portfolio

## Overview
Your portfolio is built with **Next.js**, which needs to be compiled into static HTML/CSS/JS files before uploading to cPanel.

## 🚨 Prerequisites
You need Node.js installed to build the site. Since it's not currently installed on your system, here's how to get it:

### Install Node.js (Choose one method):

#### Option 1: Using Homebrew (Recommended for Mac)
```bash
brew install node
```

#### Option 2: Download from nodejs.org
Visit: https://nodejs.org/en/download/
Download and install the LTS version for macOS

## 📋 Step-by-Step Deployment Process

### 1️⃣ Install Dependencies
```bash
cd "/Users/timi10x/Desktop/my portfolio/timmyCoder.github.io/portfolio-v2"
npm install
```

### 2️⃣ Build Static Files
```bash
npm run build
```

This will create an `out` folder with all your static files.

### 3️⃣ Files to Upload to cPanel

After building, you'll find these in the `portfolio-v2/out` folder:
```
out/
├── index.html          # Entry point (home page)
├── 404.html            # 404 error page
├── _next/              # Contains CSS, JS, and other assets
│   ├── static/         # CSS and JS files
│   └── ...
└── img/                # Your images folder
    ├── AppImages/      # App screenshots
    └── [logos]         # Company logos
```

### 4️⃣ Upload to cPanel

1. **Login to your cPanel**
2. **Open File Manager**
3. **Navigate to** `public_html` (or your domain's root folder)
4. **Upload the contents** of the `out` folder (NOT the folder itself, just its contents)
   - Upload `index.html`
   - Upload `404.html` 
   - Upload the `_next` folder
   - Upload the `img` folder

### 5️⃣ Important cPanel Settings

#### Add .htaccess file for proper routing:
Create a `.htaccess` file in your `public_html` folder with:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  
  # Redirect www to non-www (optional)
  RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
  RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
  
  # Handle Next.js routing
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /index.html [L]
  
  # Enable compression
  <IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
  </IfModule>
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## 🌐 Domain Configuration

If you're using your new domain `timi10x.com`:

1. **In cPanel**, go to "Domains" or "Addon Domains"
2. **Add your domain** if not already added
3. **Point it to** your `public_html` folder
4. **Update nameservers** at your domain registrar to point to your hosting provider

## 📁 File Structure After Upload

Your cPanel's `public_html` should look like:
```
public_html/
├── index.html          # Your site's entry point
├── 404.html
├── .htaccess          # Routing configuration
├── _next/             # Next.js assets
│   ├── static/
│   └── ...
└── img/               # Your images
```

## ✅ Verification

After uploading:
1. Visit your domain
2. Check that all pages load
3. Test the project modals
4. Verify images are displaying

## 🔧 Troubleshooting

**If site doesn't load:**
- Ensure all files from `out` folder are uploaded
- Check file permissions (typically 644 for files, 755 for folders)
- Clear browser cache

**If images don't show:**
- Verify the `img` folder is uploaded
- Check image paths are correct

**If styling is broken:**
- Ensure `_next` folder is completely uploaded
- Check for any upload errors

## 🚀 Quick Commands Summary

```bash
# 1. Install Node.js first (if not installed)
brew install node

# 2. Navigate to project
cd "/Users/timi10x/Desktop/my portfolio/timmyCoder.github.io/portfolio-v2"

# 3. Install dependencies
npm install

# 4. Build for production
npm run build

# 5. Your static files will be in:
# portfolio-v2/out/

# Upload everything inside 'out' folder to cPanel's public_html
```

## 📌 Note
The entry point for your site is `index.html` which will be generated in the `out` folder after building. This is what cPanel will serve when someone visits your domain.
