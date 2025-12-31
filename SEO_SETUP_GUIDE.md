# SEO & Google Search Console Setup Guide

## ✅ Completed Setup Status

### 1. Sitemap (public/sitemap.xml)
- **Location**: `public/sitemap.xml`
- **Purpose**: Helps search engines discover and index all pages
- **Status**: ✅ **COMPLETED** - All routes configured with ihd-mnl.com domain
- **Includes**: Homepage, about, projects, services, contact, partners, and all 8 service detail pages
- **Last Updated**: 2025-12-16

### 2. Robots.txt (public/robots.txt)
- **Location**: `public/robots.txt`
- **Purpose**: Instructs search engine crawlers on what to index
- **Status**: ✅ **COMPLETED** - Allows all bots with crawl-delay of 1 second
- **Sitemap URL**: https://www.ihd-mnl.com/sitemap.xml

### 3. Meta Tags & Structured Data (index.html)
- **Location**: `index.html`
- **Status**: ✅ **COMPLETED** with ihd-mnl.com domain
- **Configured**:
  - ✅ Primary meta tags (title, description, keywords, robots)
  - ✅ Canonical URL: https://www.ihd-mnl.com/
  - ✅ Open Graph tags (Facebook sharing)
  - ✅ Twitter Card tags
  - ✅ Schema.org structured data (ProfessionalService type)
  - ✅ Logo and images configured
  - ✅ Contact email: design@ihd-mnl.com
- **Action Required**: 
  - ⚠️ Add real phone number (currently: +63-000-000-0000)
  - ⚠️ Add social media links to `sameAs` array (Facebook, LinkedIn removed from site)

### 4. Custom Domain Setup
- **Domain**: ihd-mnl.com ✅ **CONFIGURED**
- **DNS**: ✅ Configured in GoDaddy
- **GitHub Pages**: ✅ Deployed via GitHub Actions
- **CNAME**: ✅ Created in public/CNAME
- **HTTPS**: Will be enabled automatically by GitHub after DNS verification

### 5. GitHub Pages Deployment
- **Method**: ✅ GitHub Actions (automated)
- **Workflow**: ✅ .github/workflows/deploy.yml created
- **Repository**: ramirez-benmar/IHD-FINAL
- **Live URL**: https://ihd-mnl.com (once DNS propagates)

## ⏭️ Next Steps - After Site Goes Live

### 1. Verify HTTPS is Working
- Visit https://ihd-mnl.com (may take 10-30 minutes after DNS propagates)
- Ensure green padlock appears in browser
- GitHub automatically provisions SSL certificate

### 2. Submit to Google Search Console
**Step A: Verify Domain Ownership**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add property" → Select "Domain" property
3. Enter: `ihd-mnl.com`
4. Copy the TXT record provided
5. Add to GoDaddy DNS settings:
   - Type: TXT
   - Name: @
   - Value: [paste from Google]
   - TTL: 1 Hour
6. Wait 5-10 minutes, then click Verify in Google Search Console

**Step B: Submit Sitemap**
1. Once verified, go to "Sitemaps" in left menu
2. Enter: `sitemap.xml`
3. Click Submit
4. Google will begin crawling within 24-48 hours

**Step C: Request Indexing (Optional - for faster results)**
1. Use "URL Inspection" tool
2. Enter: https://ihd-mnl.com
3. Click "Request Indexing"
4. Repeat for important pages like /services, /projects

### 3. Monitor Performance
- Check "Coverage" report weekly for indexing issues
- Review "Performance" report for search analytics after 7-14 days
- Fix any errors in "Core Web Vitals" (if any appear)

### 4. Test Social Sharing
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

## 🎯 Current Status Summary

### ✅ Completed
- [x] Domain configured: ihd-mnl.com
- [x] DNS records added in GoDaddy
- [x] GitHub Pages deployment configured
- [x] GitHub Actions workflow created
- [x] Sitemap with all pages
- [x] Robots.txt configured
- [x] Meta tags (Open Graph, Twitter Cards)
- [x] Schema.org structured data
- [x] Custom domain CNAME file
- [x] Contact forms with validation
- [x] EmailJS configured (design@ihd-mnl.com)
- [x] Logo as share image
- [x] Mobile responsive design

### ⚠️ To Do (Optional/Later)
- [ ] Add real phone number to Schema.org (currently placeholder)
- [ ] Test contact forms after site goes live
- [ ] Submit to Google Search Console (after DNS propagates)
- [ ] Add Google Analytics tracking code (optional)
- [ ] Request indexing for main pages
- [ ] Monitor for 404 errors
- [ ] Set up Google My Business (if applicable)

### Ongoing Maintenance
- Update sitemap lastmod dates when pages change
- Add new pages to sitemap.xml
- Keep meta descriptions accurate and under 160 characters
- Monitor Google Search Console for crawl errors

## Quick Test Commands

Test robots.txt accessibility:
```
curl https://yourdomain.com/robots.txt
```

Test sitemap accessibility:
```
curl https://yourdomain.com/sitemap.xml
```

Validate XML sitemap:
```
https://www.xml-sitemaps.com/validate-xml-sitemap.html
```
