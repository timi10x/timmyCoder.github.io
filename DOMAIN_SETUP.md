# Domain Setup Guide for timi10x.com

## ✅ GitHub Repository Changes (Completed)
1. **CNAME file updated** - Changed from `timmycoder.me` to `timi10x.com`
2. **Domain references updated** - All references to old domains have been updated throughout the codebase

## 🌐 DNS Configuration Required (Action Needed)

To complete the setup, you need to configure DNS settings with your domain registrar (where you bought timi10x.com).

### Option 1: Apex Domain Setup (Recommended for timi10x.com)

Add these **A records** to your DNS settings:

| Type | Name/Host | Value/Points to |
|------|-----------|-----------------|
| A    | @         | 185.199.108.153 |
| A    | @         | 185.199.109.153 |
| A    | @         | 185.199.110.153 |
| A    | @         | 185.199.111.153 |

### Option 2: WWW Subdomain Setup (for www.timi10x.com)

If you want to use www.timi10x.com:

| Type  | Name/Host | Value/Points to |
|-------|-----------|-----------------|
| CNAME | www       | timi10x.github.io |

Then update the CNAME file to `www.timi10x.com`

### Option 3: Both Apex and WWW (Best User Experience)

1. Set up the A records as in Option 1
2. Add a CNAME record for www:
   - Type: CNAME
   - Name: www
   - Value: timi10x.com

## 🕐 DNS Propagation

After updating DNS settings:
- Changes can take 10 minutes to 48 hours to propagate globally
- You can check propagation status at: https://www.whatsmydns.net/
- GitHub will automatically provision an SSL certificate once DNS is configured

## ✅ Verification Steps

1. **Check DNS Configuration**
   - Visit: https://timi10x.com
   - Should redirect to your GitHub Pages site

2. **Check GitHub Pages Settings**
   - Go to: https://github.com/timi10x/timmyCoder.github.io/settings/pages
   - Custom domain should show: timi10x.com
   - Should show "✅ Your site is published at https://timi10x.com"

3. **SSL Certificate**
   - GitHub automatically provisions SSL
   - May take up to 24 hours after DNS configuration
   - Force HTTPS should be enabled in GitHub Pages settings

## 🔧 Troubleshooting

If the site doesn't load after DNS configuration:

1. **Clear browser cache** and try incognito/private mode
2. **Check CNAME file** - Should only contain: `timi10x.com`
3. **Verify DNS records** using: `dig timi10x.com` or `nslookup timi10x.com`
4. **Wait for propagation** - Can take up to 48 hours in rare cases

## 📝 Notes

- The repository name should remain as `timmyCoder.github.io` (or be renamed to `timi10x.github.io`)
- GitHub Pages will handle redirects from the old .github.io URL to your custom domain
- The portfolio-v2 Next.js app will need separate deployment (Vercel/Netlify) if you want to use it

## Popular Domain Registrars DNS Settings Location

- **GoDaddy**: My Products → DNS → Manage DNS
- **Namecheap**: Domain List → Manage → Advanced DNS
- **Google Domains**: My domains → DNS
- **Cloudflare**: DNS → Records
- **Name.com**: My Domains → Click domain → DNS Records

---
Last Updated: December 2024
