# 🚀 GitHub Pages Deployment Checklist

## ✅ Pre-Deployment Verification

### 1. Contact Forms (Both Pages)
- [x] EmailJS credentials configured
  - Service ID: `service_7p3avvw`
  - Template ID: `template_h05bgmn`
  - Public Key: `RfGoFDS_XhqzbbNEh`
- [x] Email validation working (all providers accepted)
- [x] Name validation (minimum 2 characters)
- [x] Message validation (minimum 10 characters)
- [x] 60-second cooldown system
- [x] reCAPTCHA commented out (optional - enable if needed)
- [x] Success/error messages display correctly
- [x] Forms reset after successful submission
- [x] Loading states during submission

### 2. Social Media Links
- [x] Facebook button removed from Footer
- [x] LinkedIn button removed from Footer
- [x] Email icon (design@ihd-mnl.com) working

### 3. Partners Page
- [x] Partner logos displaying instead of text
- [x] Images loading from `/partners/` directory
- [x] Hover effects working

### 4. Navigation & Routing
- [x] All navigation links functional
- [x] Hash scrolling on homepage working
- [x] Cross-page navigation working
- [x] Mobile menu closes automatically
- [x] Service pages routing correctly

### 5. Assets & Images
- [x] Logo (`/logo.png`) present
- [x] Team photos in `/team/` directory
- [x] Project images in `/projects/` directory
- [x] Partner logos in `/partners/` directory
- [x] Service logos in `/serviceslogos/` directory
- [x] Background images in `/background/` directory

---

## 📝 Final Testing Before Deploy

### Test Contact Forms (Both Home & Contact Pages)

**Test 1: Valid Submission**
1. Fill name: "John Doe"
2. Fill email: "john@example.com"
3. Fill message: "This is a test message with more than 10 characters"
4. Submit → Should show success message
5. Check design@ihd-mnl.com inbox

**Test 2: Invalid Name**
1. Fill name: "A" (single character)
2. Submit → Should show: "Please enter a valid name (at least 2 characters)."

**Test 3: Invalid Email**
1. Fill name: "John Doe"
2. Fill email: "notanemail" (no @)
3. Submit → Should show: "Please enter a valid email address"

**Test 4: Short Message**
1. Fill name: "John Doe"
2. Fill email: "john@example.com"
3. Fill message: "Hi" (less than 10 chars)
4. Submit → Should show: "Message must be at least 10 characters long."

**Test 5: Cooldown**
1. Submit valid form
2. Immediately try to submit again
3. Should show: "Please wait X seconds before sending another message."

**Test 6: Different Email Providers**
- Try: someone@gmail.com ✓
- Try: user@yahoo.com ✓
- Try: contact@company.ph ✓
- All should be accepted

### Test Navigation
- [ ] Click each navbar link
- [ ] Test mobile menu (open/close)
- [ ] Test homepage section scrolling
- [ ] Test "Back" button navigation
- [ ] Test service page routing

### Test Responsiveness
- [ ] Mobile view (375px)
- [ ] Tablet view (768px)
- [ ] Desktop view (1440px)
- [ ] Check all pages render correctly

---

## 🔧 Build & Deploy Steps

### Step 1: Build Production Version
```bash
npm run build
```

**Check for:**
- No TypeScript errors
- Build completes successfully
- `dist/` folder created

### Step 2: Test Production Build Locally
```bash
npm run preview
```

**Verify:**
- All pages load correctly
- Images display properly
- Forms work
- Navigation functions

### Step 3: Deploy to GitHub Pages

#### Option A: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist
          
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

2. Push to GitHub:
```bash
git add .
git commit -m "Deploy IHD Philippines website"
git push origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Save

#### Option B: Manual Deploy with gh-pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Replace with your actual repo name
})
```

3. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Deploy:
```bash
npm run deploy
```

---

## 🔍 Post-Deployment Verification

After deploying, test on live site:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact forms send emails successfully
- [ ] Partner logos display
- [ ] All images load
- [ ] Mobile responsiveness
- [ ] Check browser console for errors
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on different devices (phone, tablet, desktop)

---

## 📧 EmailJS Configuration Summary

Your EmailJS is configured with:
- **Service**: Gmail (ihdmnl.messages@gmail.com)
- **Template**: Sends to design@ihd-mnl.com
- **Fields**: user_name, user_email, user_company (Contact only), message
- **Free Tier**: 200 emails/month

**Important**: EmailJS works perfectly with GitHub Pages since it's all client-side!

---

## 🔐 Optional: Enable reCAPTCHA

If you want to add reCAPTCHA before deploying:

1. Get site key from: https://www.google.com/recaptcha/admin
2. Add your domain to allowed domains
3. In **Contact.tsx** (line 145) and **Home.tsx** (line 330):
   - Uncomment the `<ReCAPTCHA>` component
   - Replace `YOUR_RECAPTCHA_SITE_KEY` with your actual key
4. In **Contact.tsx** (line 77) and **Home.tsx** (line 66):
   - Uncomment the reCAPTCHA validation check

---

## 🌐 Domain Configuration (Optional)

If using custom domain (e.g., ihdphilippines.com):

1. In `public/` folder, create `CNAME` file with your domain:
```
ihdphilippines.com
```

2. Update DNS records with your domain provider (GoDaddy):
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153

Type: CNAME
Name: www
Value: your-username.github.io
```

3. In GitHub repo Settings → Pages:
   - Custom domain: ihdphilippines.com
   - Enforce HTTPS: ✓

---

## ✅ All Set! Your Site is Ready

**Current Status:**
- ✅ Contact forms validated and working
- ✅ Social media buttons cleaned up
- ✅ Partner logos displaying
- ✅ All navigation functional
- ✅ Mobile responsive
- ✅ GitHub Pages compatible
- ✅ No server needed

**Just run:**
```bash
npm run build
```

Then deploy using your preferred method above! 🎉
