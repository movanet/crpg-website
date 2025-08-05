# GitHub Pages Temporary Hosting Setup

## Overview
Using GitHub Pages as a FREE temporary hosting solution while evaluating the full implementation.

## Advantages for Temporary Use
- ✅ **Free hosting** with 100GB bandwidth/month
- ✅ **HTTPS included** automatically
- ✅ **Custom domain support** (crpg.info)
- ✅ **Automated deployment** on git push
- ✅ **No credit card required**

## Limitations to Consider
- ⚠️ **No server-side processing** (static only)
- ⚠️ **1GB site size limit**
- ⚠️ **100GB bandwidth/month** (usually sufficient)
- ⚠️ **No built-in CMS** (edit via Git)
- ⚠️ **Basic analytics only**

## Quick Setup Steps

### 1. Create GitHub Repository
```bash
# Create new repository named 'crpg-website' on GitHub
# Can be public or private (GitHub Pages works with both)
```

### 2. Push Existing Code
```bash
cd /home/movanet/crpgweb
git remote add origin https://github.com/[YOUR-ORG]/crpg-website.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to Settings → Pages in your repository
2. Source: Deploy from a branch
3. Branch: Select `main` and `/root`
4. Save

### 4. Access Your Site
- Temporary URL: `https://[YOUR-ORG].github.io/crpg-website/`
- Custom domain: Add `crpg.info` in Pages settings

## Custom Domain Setup

### A. Add Custom Domain in GitHub
1. Settings → Pages → Custom domain
2. Enter: `crpg.info`
3. Enforce HTTPS: ✓ (check this)

### B. Configure DNS
Add these records at your domain registrar:
```
Type: CNAME
Name: www
Value: [YOUR-ORG].github.io

Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### C. Create CNAME File
```bash
echo "crpg.info" > static/CNAME
git add static/CNAME
git commit -m "Add custom domain"
git push
```

## Hugo Configuration for GitHub Pages

### config.toml Updates
```toml
baseURL = "https://crpg.info/"  # or https://[YOUR-ORG].github.io/crpg-website/
languageCode = "en-us"
title = "Center for Regulation, Policy and Governance"

[deployment]
[[deployment.targets]]
name = "github"
URL = "github://[YOUR-ORG]/crpg-website"

[outputs]
home = ["HTML", "RSS", "JSON"]
```

## Workflow Already Created
The `.github/workflows/github-pages-deploy.yml` file is ready and will:
- Build Hugo site on every push to main
- Deploy to GitHub Pages automatically
- Handle baseURL configuration
- Minify assets for performance

## Content Management Options

### Option 1: Direct Git Editing
- Edit markdown files locally
- Commit and push to deploy
- Good for technical users

### Option 2: GitHub Web Interface
- Edit files directly on GitHub.com
- Immediate preview
- Simple for small edits

### Option 3: Prose.io (Free)
- Connect to GitHub repository
- Web-based markdown editor
- Better than raw GitHub editing

### Option 4: Forestry.io Alternative
Since Forestry is discontinued, consider:
- **Tina Cloud** (limited free tier)
- **Decap CMS** (formerly Netlify CMS)
- Can be added later

## Migration Path

### Phase 1: GitHub Pages (Current)
- Free hosting for testing
- Validate Hugo setup
- Test with real content
- Gather user feedback

### Phase 2: Evaluate Performance
- Monitor bandwidth usage
- Check page load times
- Test global accessibility
- Assess CMS needs

### Phase 3: Upgrade if Needed
Easy migration to:
- **Netlify**: Better performance, CMS options
- **Vercel**: Faster builds, better analytics
- **CloudFlare Pages**: Best CDN, unlimited bandwidth

## Getting Started Commands

```bash
# 1. Initialize Hugo site (if not done)
hugo new site . --force

# 2. Add theme (example with Ananke)
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke themes/ananke
echo 'theme = "ananke"' >> config.toml

# 3. Create first content
hugo new posts/welcome.md

# 4. Test locally
hugo server -D

# 5. Build and deploy
git add .
git commit -m "Initial Hugo setup"
git push origin main
```

## Monitoring & Analytics

### Free Options for GitHub Pages
1. **Google Analytics 4** - Add to Hugo theme
2. **Plausible Analytics** - Privacy-focused (free tier)
3. **GoatCounter** - Open source, privacy-friendly
4. **GitHub Insights** - Basic traffic data

## Summary

GitHub Pages provides an excellent **free, temporary hosting solution** that:
- Allows immediate deployment and testing
- Requires no financial commitment
- Provides production-grade features
- Enables easy migration later

Perfect for:
- Testing Hugo implementation
- Validating design choices
- Getting stakeholder feedback
- Learning the new workflow

The automated deployment is already configured and ready to use!