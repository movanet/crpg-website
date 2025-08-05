# CRPG Website

A modern, accessible website for the Center for Regulation, Policy and Governance (CRPG) built with Hugo static site generator and deployed on Netlify.

## Quick Start

### Prerequisites
- Hugo Extended v0.140.2 or later
- Git
- Node.js 18+ (for asset processing, if applicable)

### Local Development
```bash
# Clone the repository
git clone https://github.com/your-org/crpgweb.git
cd crpgweb

# Start development server
hugo server -D

# Build for production
hugo --gc --minify
```

## Project Structure

```
crpgweb/
├── content/                 # Site content (Markdown files)
├── static/                  # Static assets (images, files)
├── themes/                  # Hugo themes
├── layouts/                 # Custom layouts (if any)
├── data/                    # Data files (YAML, JSON, TOML)
├── assets/                  # Asset pipeline files
├── config/                  # Hugo configuration
├── devops/                  # DevOps documentation and configs
├── .github/                 # GitHub Actions workflows
├── netlify.toml            # Netlify configuration
└── README.md              # This file
```

## Features

- **Modern Static Site**: Built with Hugo for fast performance
- **Responsive Design**: Mobile-first, accessible design
- **Content Management**: Markdown-based content system
- **SEO Optimized**: Built-in SEO best practices
- **Security**: HTTPS, security headers, CSP
- **Performance**: Optimized assets, CDN delivery
- **Accessibility**: WCAG 2.1 AA compliant

## Development Workflow

### Branching Strategy
- `main`: Production branch (auto-deploys)
- `develop`: Integration branch
- `feature/*`: Feature development
- `content/*`: Content updates
- `hotfix/*`: Emergency fixes

See [branching strategy documentation](devops/docs/branching-strategy.md) for details.

### Making Changes

#### Content Updates
```bash
# Create content branch
git checkout develop
git pull origin develop
git checkout -b content/new-blog-post

# Add content
# Edit files in content/ directory
hugo new blog/my-new-post.md

# Commit and push
git add .
git commit -m "content: add new blog post about sustainability"
git push origin content/new-blog-post

# Create pull request to develop branch
```

#### Feature Development
```bash
# Create feature branch
git checkout develop
git pull origin develop
git checkout -b feature/contact-form

# Develop feature
# Make changes to layouts, assets, etc.

# Test locally
hugo server -D

# Commit and push
git add .
git commit -m "feat: add contact form functionality"
git push origin feature/contact-form

# Create pull request to develop branch
```

## Deployment

### Automatic Deployment
- **Production**: Push to `main` branch → deploys to https://crpgweb.netlify.app
- **Staging**: Push to `develop` branch → deploys to staging environment
- **Preview**: Create PR → generates preview deployment

### Manual Deployment
```bash
# Build site
hugo --gc --minify

# Deploy with Netlify CLI (if installed)
netlify deploy --prod --dir public
```

## Testing

### Local Testing
```bash
# Start development server
hugo server -D

# Build and test
hugo --gc --minify
```

### Automated Testing
- **Build Validation**: Runs on every push/PR
- **Link Checking**: Weekly and on main branch pushes
- **Accessibility Testing**: WCAG 2.1 AA compliance
- **HTML Validation**: Validates generated HTML

## Content Guidelines

### Creating Content
```bash
# Create new blog post
hugo new blog/post-title.md

# Create new page
hugo new page-name.md

# Create new team member
hugo new team/member-name.md
```

### Content Structure
- Use descriptive filenames
- Include proper front matter
- Optimize images before adding
- Add alt text to all images
- Use proper heading hierarchy

### SEO Best Practices
- Write descriptive titles and descriptions
- Use appropriate heading tags (H1, H2, H3)
- Add structured data where applicable
- Optimize images with descriptive names
- Create meaningful URLs

## Contributing

### Code of Conduct
Please read and follow our Code of Conduct.

### Pull Request Process
1. Fork the repository
2. Create feature branch from `develop`
3. Make your changes
4. Test locally
5. Submit pull request
6. Address review feedback
7. Merge after approval

### Review Checklist
- [ ] Code follows project standards
- [ ] Changes are tested locally
- [ ] Documentation updated if needed
- [ ] Accessibility guidelines followed
- [ ] SEO best practices applied

## Monitoring and Maintenance

### Performance Monitoring
- Netlify Analytics (included)
- Core Web Vitals tracking
- Build time monitoring
- Asset optimization

### Content Quality
- Weekly link checking
- Accessibility testing
- HTML validation
- SEO audit tools

### Security
- Automated dependency updates
- Security header validation
- SSL certificate monitoring
- Content Security Policy enforcement

## Support

### Documentation
- [Deployment Guide](devops/docs/deployment-guide.md)
- [Branching Strategy](devops/docs/branching-strategy.md)
- [GitHub Setup](devops/docs/github-setup.md)

### Resources
- [Hugo Documentation](https://gohugo.io/documentation/)
- [Netlify Documentation](https://docs.netlify.com/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Getting Help
- Create an issue for bugs or feature requests
- Contact the development team for urgent issues
- Review existing documentation before asking questions

## License

This project is licensed under [LICENSE_TYPE] - see the LICENSE file for details.

## Acknowledgments

- Hugo static site generator
- Netlify hosting platform
- GitHub Actions CI/CD
- Open source community contributors

---

**Built with ❤️ for CRPG**