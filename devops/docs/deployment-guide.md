# CRPG Website Deployment Guide

## Overview

This document outlines the complete deployment process for the CRPG website using Hugo static site generator and Netlify hosting platform.

## Architecture

- **Static Site Generator**: Hugo v0.140.2
- **Hosting Platform**: Netlify Pro
- **Version Control**: Git with GitHub
- **CI/CD**: GitHub Actions + Netlify Build

## Branching Strategy

### Branch Structure
- `main`: Production branch (auto-deploys to production)
- `develop`: Integration branch for feature development
- `feature/*`: Feature branches for new development
- `hotfix/*`: Emergency fixes for production issues

### Workflow
1. Create feature branches from `develop`
2. Submit pull requests to `develop` for integration
3. Merge `develop` to `main` for production releases
4. Use `hotfix/*` branches for urgent production fixes

## Environment Setup

### Prerequisites
- Hugo Extended v0.140.2 or later
- Git
- GitHub account with repository access
- Netlify account with Pro subscription

### Local Development
```bash
# Clone the repository
git clone https://github.com/your-org/crpgweb.git
cd crpgweb

# Install Hugo (macOS with Homebrew)
brew install hugo

# Install Hugo (Ubuntu/Debian)
sudo apt-get install hugo

# Start development server
hugo server -D --bind 0.0.0.0
```

## Deployment Process

### Automatic Deployment (Recommended)

#### Production Deployment
1. Push changes to `main` branch
2. Netlify automatically triggers build
3. Site deploys to https://crpgweb.netlify.app
4. Build status available in GitHub and Netlify dashboards

#### Preview Deployment
1. Create pull request to `main` branch
2. Netlify creates deploy preview
3. Preview URL posted as comment on PR
4. Accessibility and link checks run automatically

### Manual Deployment

```bash
# Build site locally
hugo --gc --minify

# Deploy via Netlify CLI (if installed)
netlify deploy --prod --dir public
```

## CI/CD Pipeline

### GitHub Actions Workflows

#### 1. Hugo Build Test (`hugo-build-test.yml`)
- **Trigger**: Push/PR to main/develop
- **Purpose**: Validates Hugo build process
- **Steps**:
  - Checkout code with submodules
  - Setup Hugo environment
  - Build site with minification
  - Validate HTML output
  - Upload build artifacts

#### 2. Link Checker (`link-checker.yml`)
- **Trigger**: Weekly schedule + manual dispatch + main branch push
- **Purpose**: Validates internal and external links
- **Steps**:
  - Build site
  - Check internal links (blocking)
  - Check external links (non-blocking)
  - Generate reports

#### 3. Accessibility Testing (`accessibility-test.yml`)
- **Trigger**: Push/PR to main/develop + weekly schedule
- **Purpose**: WCAG 2.1 AA compliance testing
- **Steps**:
  - Build site
  - Run axe-core tests
  - Run pa11y tests
  - Generate accessibility reports

#### 4. Deploy Preview (`deploy-preview.yml`)
- **Trigger**: Pull requests to main
- **Purpose**: Generate preview deployments
- **Steps**:
  - Build site with preview URL
  - Deploy to Netlify preview
  - Quick accessibility check

### Required GitHub Secrets
- `NETLIFY_AUTH_TOKEN`: Netlify personal access token
- `NETLIFY_SITE_ID`: Netlify site ID

## Netlify Configuration

### Build Settings
- **Build Command**: `hugo --gc --minify`
- **Publish Directory**: `public`
- **Hugo Version**: 0.140.2
- **Environment**: Production

### Security Headers
Configured in `netlify.toml`:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Content Security Policy: Strict policy defined
- Referrer-Policy: strict-origin-when-cross-origin

### Asset Optimization
- CSS/JS minification and bundling
- Image compression
- Long-term caching for static assets
- Pretty URLs enabled

## Monitoring and Maintenance

### Build Monitoring
- GitHub Actions provide build status
- Netlify dashboard shows deployment history
- Email notifications for failed builds

### Performance Monitoring
- Netlify Analytics (included with Pro plan)
- Core Web Vitals tracking
- Form submission analytics

### Security Monitoring
- Automated dependency updates via Dependabot
- Security headers validation
- SSL certificate auto-renewal

### Content Quality
- Weekly link checking
- Automated accessibility testing
- HTML validation on every build

## Troubleshooting

### Common Build Issues

#### Hugo Version Mismatch
```bash
# Check Hugo version
hugo version

# Update to required version
# See Hugo installation guide for your OS
```

#### Submodule Issues
```bash
# Initialize submodules
git submodule update --init --recursive

# Update submodules
git submodule update --remote
```

#### Build Timeout
- Increase Netlify build timeout (Pro plan: 15 minutes)
- Optimize content processing
- Review large asset files

### Deployment Issues

#### Netlify Build Fails
1. Check build logs in Netlify dashboard
2. Verify environment variables
3. Test build locally with same Hugo version
4. Check for breaking changes in dependencies

#### Preview Deploy Issues
1. Verify GitHub secrets are set
2. Check Netlify permissions
3. Review PR branch differences

## Rollback Procedures

### Netlify Rollback
1. Navigate to Netlify dashboard
2. Go to "Deploys" section
3. Find previous successful deployment
4. Click "Publish deploy"

### Git Rollback
```bash
# Revert to previous commit
git revert HEAD

# Or reset to specific commit (use carefully)
git reset --hard <commit-hash>
git push --force-with-lease
```

## Performance Optimization

### Build Optimization
- Use `--gc` flag for garbage collection
- Enable `--minify` for smaller assets
- Implement image processing pipeline
- Use Hugo's built-in asset bundling

### Content Delivery
- Leverage Netlify's global CDN
- Implement proper caching headers
- Optimize images before upload
- Use modern image formats (WebP, AVIF)

## Best Practices

### Content Management
1. Use descriptive commit messages
2. Test changes in develop branch first
3. Review accessibility impact of content changes
4. Optimize images before committing

### Security
1. Keep Hugo and dependencies updated
2. Review and update security headers regularly
3. Monitor for vulnerable dependencies
4. Use branch protection rules

### Performance
1. Monitor Core Web Vitals
2. Regularly audit and optimize assets
3. Implement lazy loading for images
4. Use efficient Hugo templating

## Support and Resources

### Documentation
- [Hugo Documentation](https://gohugo.io/documentation/)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

### Community
- Hugo Community Forum
- Netlify Community Forum
- GitHub Discussions

### Internal Contacts
- DevOps Team: devops@crpg.info
- Content Team: content@crpg.info
- Emergency: emergency@crpg.info