# DevOps Configuration Files

This directory contains configuration files and templates for the CRPG website DevOps infrastructure.

## Directory Structure

```
devops/
├── configs/
│   ├── README.md                 # This file
│   ├── netlify-config-template.toml
│   ├── github-secrets-template.md
│   └── monitoring-config.yml
├── docs/
│   ├── deployment-guide.md       # Complete deployment documentation
│   ├── branching-strategy.md     # Git workflow documentation
│   └── troubleshooting.md        # Common issues and solutions
└── ci-cd/
    ├── github-actions/           # GitHub Actions workflow templates
    └── netlify/                  # Netlify-specific configurations
```

## Configuration Files

### Root Configuration Files
- `netlify.toml` - Main Netlify configuration (in project root)
- `.gitignore` - Git ignore rules for Hugo projects (in project root)

### GitHub Actions Workflows
Located in `.github/workflows/`:
- `hugo-build-test.yml` - Build validation and testing
- `link-checker.yml` - Internal and external link validation
- `accessibility-test.yml` - WCAG 2.1 AA compliance testing
- `deploy-preview.yml` - Pull request preview deployments

### Environment Variables Required

#### GitHub Secrets
Set these in GitHub repository settings → Secrets and variables → Actions:

```
NETLIFY_AUTH_TOKEN=your_netlify_personal_access_token
NETLIFY_SITE_ID=your_netlify_site_id
```

#### Netlify Environment Variables
Set these in Netlify dashboard → Site settings → Environment variables:

```
HUGO_VERSION=0.140.2
HUGO_ENV=production
HUGO_ENABLEGITINFO=true
```

## Quick Setup Checklist

### GitHub Repository Setup
- [ ] Repository created with appropriate permissions
- [ ] Branch protection rules configured for `main` and `develop`
- [ ] Required secrets added (NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID)
- [ ] GitHub Actions enabled
- [ ] Repository topics and description set

### Netlify Setup
- [ ] Site connected to GitHub repository
- [ ] Build settings configured (hugo --gc --minify)
- [ ] Environment variables set
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate enabled
- [ ] Forms handling configured (if needed)

### Local Development Setup
- [ ] Hugo Extended installed (version 0.140.2 or later)
- [ ] Git repository cloned
- [ ] Submodules initialized (if any)
- [ ] Local development server working (`hugo server`)

## Monitoring and Alerts

### Available Monitoring
- Netlify build notifications
- GitHub Actions workflow notifications
- Uptime monitoring (configure external service)
- Performance monitoring via Netlify Analytics

### Recommended External Services
- UptimeRobot for uptime monitoring
- Google Analytics for traffic analysis
- Google Search Console for SEO monitoring
- Lighthouse CI for performance regression testing

## Security Considerations

### Implemented Security Measures
- Security headers via netlify.toml
- Branch protection rules
- Required code reviews
- Automated dependency updates
- SSL/TLS encryption

### Additional Recommendations
- Regular security audits
- Content Security Policy tuning
- Access log monitoring
- Backup strategy implementation

## Backup and Recovery

### Automated Backups
- Git repository serves as primary backup
- Netlify maintains deployment history
- GitHub Actions artifacts retained for 90 days

### Recovery Procedures
- Site rollback via Netlify dashboard
- Git history for content recovery
- Database backups (if applicable for future features)

## Performance Optimization

### Implemented Optimizations
- Asset minification and bundling
- Image compression
- CDN delivery via Netlify
- Caching headers optimization

### Monitoring Tools
- Netlify Analytics (included)
- Core Web Vitals monitoring
- Build time tracking
- Bundle size analysis

## Maintenance Schedule

### Daily
- Monitor build status
- Check deployment notifications

### Weekly
- Review link checker results
- Analyze accessibility test reports
- Monitor performance metrics

### Monthly
- Review and update dependencies
- Audit security headers
- Performance optimization review
- Documentation updates

### Quarterly
- Security audit
- Backup procedure testing
- DevOps process review
- Tool and service evaluation

## Support Contacts

### Internal Team
- DevOps Lead: [contact information]
- Frontend Developer: [contact information]
- Content Manager: [contact information]

### External Services
- Netlify Support: support.netlify.com
- GitHub Support: support.github.com
- Hugo Community: discourse.gohugo.io

## Change Log

Track major configuration changes here:

### 2024-08-05
- Initial DevOps setup
- GitHub Actions workflows configured
- Netlify deployment configured
- Documentation created