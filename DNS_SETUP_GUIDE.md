# 🌐 DNS Setup for ihd-mnl.com on GoDaddy

## ✅ Current Configuration

Your website is configured for: **ihd-mnl.com**
- CNAME file: ✅ Already set to `ihd-mnl.com`
- Meta tags: ✅ Already using `www.ihd-mnl.com`
- Sitemap: ✅ Already using `www.ihd-mnl.com`

---

## 📋 GoDaddy DNS Configuration

After deploying to GitHub Pages, configure your DNS:

### Step 1: Login to GoDaddy
1. Go to https://dcc.godaddy.com/
2. Find your domain `ihd-mnl.com`
3. Click **DNS** or **Manage DNS**

### Step 2: Add A Records

Add these **4 A Records** pointing to GitHub Pages:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 seconds |
| A | @ | 185.199.109.153 | 600 seconds |
| A | @ | 185.199.110.153 | 600 seconds |
| A | @ | 185.199.111.153 | 600 seconds |

**How to add:**
1. Click **Add** button
2. Select **Type: A**
3. Name: **@** (this means root domain)
4. Value: Enter each IP address above (one at a time)
5. TTL: 600 seconds (or default)
6. Save

### Step 3: Add CNAME Record for WWW

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | YOUR-USERNAME.github.io | 1 Hour |

**Replace `YOUR-USERNAME`** with your actual GitHub username

**Example:**
- If your GitHub is `simramirez`, use: `simramirez.github.io`

**How to add:**
1. Click **Add** button
2. Select **Type: CNAME**
3. Name: **www**
4. Value: **YOUR-USERNAME.github.io** (without repo name)
5. TTL: 1 Hour
6. Save

### Step 4: Remove Conflicting Records

⚠️ **Important:** Delete any existing A or CNAME records that conflict:
- Delete old A records pointing to different IPs
- Delete Parking Page records
- Keep only the records you just added

---

## 🚀 Enable Custom Domain on GitHub

### After DNS is configured:

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Custom domain**, enter: **ihd-mnl.com**
4. Click **Save**
5. Wait 2-5 minutes for DNS check
6. Enable **Enforce HTTPS** (checkbox will appear after DNS verifies)

---

## ⏱️ DNS Propagation

DNS changes take time to propagate:
- **Minimum:** 10-30 minutes
- **Maximum:** 24-48 hours
- **Usually:** 1-2 hours

Check propagation status: https://www.whatsmydns.net/#A/ihd-mnl.com

---

## ✅ Verification Checklist

After DNS propagation:

- [ ] http://ihd-mnl.com redirects to https://ihd-mnl.com ✓
- [ ] http://www.ihd-mnl.com works ✓
- [ ] https://www.ihd-mnl.com works ✓
- [ ] HTTPS enforced (green padlock in browser) ✓
- [ ] All pages load correctly ✓
- [ ] Contact forms work ✓

---

## 🐛 Troubleshooting

### "Domain's DNS record could not be retrieved"
- Wait 10-30 minutes after adding DNS records
- Verify A records are correct (4 GitHub IPs)
- Check for typos in DNS settings

### "www.ihd-mnl.com" not working
- Verify CNAME record: `www` → `YOUR-USERNAME.github.io`
- Don't include `/repo-name/` in CNAME value
- Wait for DNS propagation

### Site shows but no HTTPS
- Wait for GitHub to provision SSL certificate (can take up to 24 hours)
- Make sure "Enforce HTTPS" is checked in GitHub Pages settings

### Old site still showing
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private browsing
- Check different device/network

---

## 📝 Complete Setup Summary

1. ✅ **Code Ready:** Already configured for ihd-mnl.com
2. 🚀 **Deploy:** Run `npm run deploy` 
3. 🌐 **DNS:** Configure GoDaddy with records above
4. ⚙️ **GitHub:** Set custom domain to ihd-mnl.com
5. ⏱️ **Wait:** 1-2 hours for DNS propagation
6. 🔒 **HTTPS:** Enable after DNS verifies
7. ✨ **Live:** Visit https://ihd-mnl.com

---

## 🎯 Quick Deploy Command

```bash
npm run deploy
```

Then configure DNS and you're done! 🎉
