# 🚀 Ready to Deploy - Final Steps

## Your Configuration

- **GitHub Username:** ramirez-benmar
- **Domain:** ihd-mnl.com (DNS already configured ✓)
- **All files ready:** ✓

---

## Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `ihd-philippines` (or your choice)
3. Keep it **Public**
4. **DO NOT** initialize with README
5. Click **Create repository**

---

## Step 2: Deploy Your Code

Copy and paste these commands one by one:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Deploy IHD Philippines website"

# Connect to GitHub (replace REPO-NAME with your actual repo name)
git remote add origin https://github.com/ramirez-benmar/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

**Example if your repo is "ihd-philippines":**
```bash
git remote add origin https://github.com/ramirez-benmar/ihd-philippines.git
```

---

## Step 3: Enable Custom Domain on GitHub

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Custom domain**, enter: `ihd-mnl.com`
4. Click **Save**
5. Wait 2-5 minutes for DNS verification
6. Check the **Enforce HTTPS** box when it becomes available

---

## Step 4: Verify It's Live

After 5-10 minutes, visit:
- ✅ https://ihd-mnl.com
- ✅ https://www.ihd-mnl.com

Both should work and show your website!

---

## 🔄 Future Updates

Whenever you make changes:

```bash
git add .
git commit -m "Update website"
git push
npm run deploy
```

---

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Ran git commands (init, add, commit, remote, push)
- [ ] Ran `npm run deploy`
- [ ] Added custom domain in GitHub Pages settings
- [ ] Waited for DNS verification
- [ ] Enabled HTTPS
- [ ] Tested https://ihd-mnl.com
- [ ] Tested contact forms work
- [ ] Confirmed email goes to design@ihd-mnl.com

---

## 📞 If You Need Help

**DNS Not Verifying:**
- Wait 10-30 minutes (DNS propagation takes time)
- Check your GoDaddy DNS records match [DNS_SETUP_GUIDE.md](DNS_SETUP_GUIDE.md)
- Verify CNAME points to: `ramirez-benmar.github.io`

**Deploy Failed:**
- Make sure you pushed to GitHub first (`git push`)
- Check repository name is correct in remote URL
- Try running `npm run deploy` again

**Site Shows 404:**
- Wait 2-3 minutes after first deploy
- Clear browser cache (Ctrl+Shift+Del)
- Check GitHub Pages is enabled in Settings

---

## 🎯 You're All Set!

Your website is configured to deploy to:
- **Primary:** https://ihd-mnl.com
- **GitHub:** https://ramirez-benmar.github.io/REPO-NAME/

Everything is ready - just run the commands above! 🎉
