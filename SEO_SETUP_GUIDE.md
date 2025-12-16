# SEO & Google Search Console Setup Guide

## Files Created/Modified for Search Engine Optimization

### 1. Sitemap (public/sitemap.xml)
- **Location**: `public/sitemap.xml`
- **Purpose**: Helps search engines discover and index all pages
- **Status**: ✅ Created with all routes (homepage, projects, services, and 8 service detail pages)
- **Action Required**: Update domain from `ihdphilippines.com` to actual production domain

### 2. Robots.txt (public/robots.txt)
- **Location**: `public/robots.txt`
- **Purpose**: Instructs search engine crawlers on what to index
- **Status**: ✅ Created - allows all bots with crawl-delay of 1 second
- **Action Required**: Update sitemap URL in robots.txt to match production domain

### 3. Meta Tags & Structured Data (index.html)
- **Location**: `index.html`
- **Added**:
  - Primary meta tags (title, description, keywords, robots)
  - Canonical URL
  - Open Graph tags (Facebook sharing)
  - Twitter Card tags
  - Schema.org structured data (ProfessionalService type)
- **Action Required**: 
  - Update all URLs from `ihdphilippines.com` to actual domain
  - Replace placeholder phone number and add real contact info
  - Add social media links to `sameAs` array in Schema.org data
  - Update logo path if different

## Google Search Console Submission Steps

### 1. Verify Domain Ownership
**Option A: DNS Verification (Recommended)**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property → Domain property
3. Copy the TXT record provided
4. Add to your domain's DNS settings
5. Click Verify

**Option B: HTML Tag Verification**
1. Choose "URL prefix" property type
2. Copy the meta tag provided
3. Add to `<head>` section of index.html before other meta tags
4. Deploy and verify

### 2. Submit Sitemap
1. Once verified, go to Sitemaps section in left menu
2. Enter: `sitemap.xml`
3. Click Submit
4. Google will begin crawling your pages

### 3. Request Indexing (Optional - for faster indexing)
1. Use URL Inspection tool in left menu
2. Enter each important URL
3. Click "Request Indexing" for priority pages

### 4. Monitor Performance
- Check Coverage report weekly for indexing issues
- Review Performance report for search analytics
- Fix any errors shown in Core Web Vitals

## Additional SEO Recommendations

### Before Launch Checklist
- [ ] Replace all `ihdphilippines.com` URLs with actual domain
- [ ] Add real phone number and address to Schema.org data
- [ ] Update lastmod dates in sitemap.xml
- [ ] Add favicon (currently references /logo.svg - ensure it exists)
- [ ] Test all meta tags with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Ensure HTTPS is configured (required for good SEO)
- [ ] Set up Google Analytics (optional but recommended)

### Content Optimization
- Each service page should have unique, descriptive content (currently using i18n placeholders)
- Add alt text to all images (partially done - verify completeness)
- Ensure mobile-friendly design (responsive breakpoints already configured)
- Optimize page load speed (check with PageSpeed Insights)

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
