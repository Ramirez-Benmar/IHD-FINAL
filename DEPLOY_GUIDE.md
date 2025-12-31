# 🚀 Deploy to GitHub Pages - 3 Simple Steps

## Prerequisites
✅ GitHub account
✅ Your code in a GitHub repository

---

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `ihd-philippines` (or any name you want)
3. Keep it **Public**
4. Click **"Create repository"**

---

## Step 2: Push Your Code to GitHub

Open terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
If your GitHub username is `simramirez` and repo is `ihd-philippines`:
```bash
git remote add origin https://github.com/simramirez/ihd-philippines.git
```

---

## Step 3: Deploy to GitHub Pages

Simply run:

```bash
npm run deploy
```

That's it! This command will:
1. Build your project (`npm run build`)
2. Deploy to GitHub Pages automatically
3. Your site will be live at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

**Example:**
- If username: `simramirez` and repo: `ihd-philippines`
- Your site will be at: `https://simramirez.github.io/ihd-philippines/`

---

## ⚙️ If Using Custom Domain (Optional)

### For Custom Domain (e.g., ihd-mnl.com):

1. **Create CNAME file** in `public/` folder with your domain:
```
ihd-mnl.com
```

2. **Update vite.config.ts** - Change base to `/`:
```typescript
base: '/', // Already set!
```

3. **Configure DNS** in GoDaddy:
```
Type: A
Name: @
Value: 185.199.108.153

Type: A  
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

4. **In GitHub:** Settings → Pages → Custom domain: `ihd-mnl.com`

5. **Deploy:**
```bash
npm run deploy
```

---

## 🔄 Update Your Live Site

Whenever you make changes:

```bash
git add .
git commit -m "Update website"
git push
npm run deploy
```

---

## 🐛 Troubleshooting

### "Failed to deploy"
- Make sure you've pushed to GitHub first
- Check repository name is correct in git remote

### Site shows 404
- Wait 2-3 minutes after first deploy
- Check GitHub Pages is enabled: Settings → Pages

### If using repo as subdirectory (username.github.io/repo-name)
Update `vite.config.ts`:
```typescript
base: '/repo-name/', // Replace repo-name with your actual repo name
```

Then redeploy:
```bash
npm run deploy
```

---

## ✅ You're Live!

After `npm run deploy` completes:
- ✅ Site is live on GitHub Pages
- ✅ Updates automatically when you run deploy again
- ✅ Free hosting forever
- ✅ HTTPS enabled automatically

**Your site:** `https://YOUR-USERNAME.github.io/REPO-NAME/`

---

## 📝 Quick Reference

```bash
# First time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
npm run deploy

# Future updates
git add .
git commit -m "Your update message"
git push
npm run deploy
```

That's all! 🎉
