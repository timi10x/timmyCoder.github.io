# .htaccess Troubleshooting Guide

## 🚨 Potential Issues with Full .htaccess

Your current `.htaccess` (187 lines) might be too complex for some cPanel hosts. Common problems:

### **Problematic Features:**

1. **Security Headers (lines 33-48)**
   - Requires `mod_headers` module
   - Some hosts disable this for shared hosting

2. **Extensive Compression (lines 53-83)**
   - Requires `mod_deflate` module
   - Many compression rules that might conflict

3. **Complex Caching Rules (lines 88-144)**
   - Requires both `mod_expires` AND `mod_headers`
   - Might conflict with cPanel's own caching

4. **Old Apache Syntax (line 160-161)**
   ```apache
   Order allow,deny
   Deny from all
   ```
   - This is Apache 2.2 syntax
   - Modern servers use Apache 2.4 which needs different syntax

## 📋 Testing Strategy

Try these `.htaccess` files in order:

### **1. Start with `.htaccess-test`** (Ultra Minimal)
```apache
DirectoryIndex index.html
Options -Indexes
```
- If this fails → Server/upload issue, not .htaccess

### **2. Try `.htaccess-minimal`** (Just Routing)
- Adds Next.js routing
- Basic MIME types
- If this works but next one fails → Rewrite module issue

### **3. Try `.htaccess-basic`** (With HTTPS & Caching)
- Adds HTTPS redirect
- Simple caching
- If this fails → HTTPS redirect or caching module issue

### **4. Use Full Version** (All Features)
- Only if all others work
- Has all optimizations

## 🔧 How to Test

1. **Upload `.htaccess-test` as `.htaccess`**
   ```bash
   # In cPanel File Manager:
   1. Delete or rename current .htaccess
   2. Upload .htaccess-test
   3. Rename it to .htaccess
   4. Visit your site
   ```

2. **If site loads:** Progress to next version
3. **If site shows error:** Previous version is your maximum

## 🎯 Common Error Codes

- **500 Internal Server Error** → .htaccess syntax error or unsupported module
- **403 Forbidden** → Permission issue or wrong directory
- **404 Not Found** → Files not in correct location
- **"The content cannot be displayed"** → Generic cPanel error, check error logs

## 💡 Quick Fixes

### If HTTPS redirect causes issues:
Remove these lines:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
```

### If www removal causes issues:
Remove these lines:
```apache
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
```

### If routing doesn't work:
Make sure these lines are present:
```apache
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

## ✅ Recommended for Most cPanel Hosts

Use **`.htaccess-basic`** - it has:
- ✅ Next.js routing (essential)
- ✅ HTTPS redirect (recommended)
- ✅ Basic caching (improves speed)
- ❌ No advanced features that might break

## 🔍 Check Your cPanel

In cPanel, look for:
- **"Apache Handlers"** or **"MIME Types"** → Verify file types
- **"Error Logs"** → See exact error messages
- **"Select PHP Version"** → Make sure it's not interfering

## 📝 Final Note

Most cPanel hosts support:
- ✅ `mod_rewrite` (URL rewriting)
- ✅ `mod_mime` (file types)
- ✅ Basic `mod_expires` (caching)
- ❓ `mod_headers` (varies by host)
- ❓ `mod_deflate` (varies by host)

Start with minimal and add features until something breaks!
