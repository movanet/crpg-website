# Git Branching Strategy

## Overview

This document defines the Git branching strategy for the CRPG website project, following a modified Git Flow approach optimized for continuous deployment and content management workflows.

## Branch Structure

### Permanent Branches

#### `main`
- **Purpose**: Production-ready code
- **Protection**: Protected branch with required reviews
- **Deployment**: Auto-deploys to production (crpgweb.netlify.app)
- **Merge Policy**: Only from `develop` or `hotfix/*` branches
- **CI/CD**: Full test suite runs on every push

#### `develop`
- **Purpose**: Integration branch for ongoing development
- **Protection**: Protected branch with required reviews
- **Deployment**: Auto-deploys to staging environment
- **Merge Policy**: From `feature/*` branches and to `main`
- **CI/CD**: Full test suite + additional integration tests

### Temporary Branches

#### `feature/*`
- **Purpose**: New features and enhancements
- **Naming**: `feature/short-description` (e.g., `feature/contact-form`)
- **Lifecycle**: Created from `develop`, merged back to `develop`
- **Protection**: No special protection
- **CI/CD**: Build validation and basic tests

#### `hotfix/*`
- **Purpose**: Critical production fixes
- **Naming**: `hotfix/issue-description` (e.g., `hotfix/broken-navigation`)
- **Lifecycle**: Created from `main`, merged to both `main` and `develop`
- **Protection**: Fast-track review process
- **CI/CD**: Full test suite with expedited deployment

#### `content/*`
- **Purpose**: Content updates and additions
- **Naming**: `content/content-type-description` (e.g., `content/blog-post-sustainability`)
- **Lifecycle**: Created from `develop`, merged back to `develop`
- **Protection**: Content review required
- **CI/CD**: Build validation + accessibility checks

## Workflow Processes

### Feature Development Workflow

```bash
# 1. Start from develop
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/new-feature-name

# 3. Develop and commit changes
git add .
git commit -m "feat: add new feature functionality"

# 4. Push and create pull request
git push origin feature/new-feature-name
# Create PR via GitHub web interface

# 5. After review and approval, merge to develop
# Delete feature branch after merge
```

### Content Update Workflow

```bash
# 1. Start from develop
git checkout develop
git pull origin develop

# 2. Create content branch
git checkout -b content/blog-post-title

# 3. Add content and assets
git add content/blog/new-post.md
git add static/images/new-post-image.jpg
git commit -m "content: add blog post about sustainability"

# 4. Push and create pull request
git push origin content/blog-post-title
# Create PR with content review template
```

### Hotfix Workflow

```bash
# 1. Start from main
git checkout main
git pull origin main

# 2. Create hotfix branch
git checkout -b hotfix/critical-issue

# 3. Fix the issue
git add .
git commit -m "fix: resolve critical navigation issue"

# 4. Push and create urgent PR
git push origin hotfix/critical-issue
# Create PR with hotfix template

# 5. After approval, merge to main
# Then merge main into develop to sync changes
```

### Release Workflow

```bash
# 1. Ensure develop is ready for release
git checkout develop
git pull origin develop

# 2. Create pull request from develop to main
# Include release notes in PR description

# 3. After approval and merge, tag the release
git checkout main
git pull origin main
git tag -a v1.2.0 -m "Release version 1.2.0"
git push origin v1.2.0
```

## Branch Protection Rules

### `main` Branch
- Require pull request reviews (minimum 2)
- Require status checks to pass
- Include administrators in restrictions
- Require up-to-date branches before merging
- Require conversation resolution before merging

### `develop` Branch
- Require pull request reviews (minimum 1)
- Require status checks to pass
- Allow administrators to bypass requirements
- Require up-to-date branches before merging

## Naming Conventions

### Branch Names
- Use lowercase with hyphens
- Include branch type prefix
- Keep descriptions concise but descriptive
- Avoid special characters and spaces

### Examples
```bash
feature/user-authentication
feature/responsive-navigation
content/annual-report-2024
content/team-member-bio-update
hotfix/security-vulnerability
hotfix/mobile-layout-fix
```

### Commit Messages
Follow conventional commit format:
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `content`: Content updates
- `style`: Styling changes
- `refactor`: Code refactoring
- `test`: Test additions or updates
- `docs`: Documentation updates
- `ci`: CI/CD changes

## Review Requirements

### Feature Branches → Develop
- **Reviewers**: 1 developer
- **Checks**: Build success, tests pass
- **Timeline**: 2-3 business days
- **Approval**: Required before merge

### Content Branches → Develop
- **Reviewers**: 1 content editor + 1 developer
- **Checks**: Build success, accessibility tests
- **Timeline**: 1-2 business days
- **Approval**: Content accuracy and technical implementation

### Develop → Main (Release)
- **Reviewers**: 2 senior developers or team leads
- **Checks**: Full test suite, security scan, performance tests
- **Timeline**: 1 week for major releases, 2 days for minor
- **Approval**: Required from both reviewers

### Hotfix → Main
- **Reviewers**: 1 senior developer (emergency exceptions allowed)
- **Checks**: Critical tests only
- **Timeline**: Same day for critical issues
- **Approval**: Can be bypassed in emergencies with post-approval

## Automation Rules

### Auto-merge Conditions
- All required checks pass
- All required reviews approved
- No merge conflicts
- Branch is up-to-date with target

### Auto-delete Branches
- Feature branches deleted after merge
- Content branches deleted after merge
- Hotfix branches retained for 30 days

### Automated Testing
- Build validation on all branches
- Full test suite on `main` and `develop`
- Accessibility tests on content changes
- Security scans on release candidates

## Emergency Procedures

### Critical Production Issues
1. Create hotfix branch from `main`
2. Implement fix with minimal changes
3. Test fix in hotfix branch environment
4. Create expedited PR with detailed description
5. Merge to `main` after single approval
6. Monitor deployment and verify fix
7. Merge `main` back to `develop`

### Rollback Procedures
1. Identify last known good commit
2. Create hotfix branch from that commit
3. Cherry-pick essential fixes if needed
4. Deploy through normal hotfix process
5. Plan proper fix for next regular release

## Best Practices

### General Guidelines
1. Keep branches focused and small
2. Regular commits with descriptive messages
3. Rebase feature branches before merging
4. Delete merged branches promptly
5. Tag releases with semantic versioning

### Content Management
1. Preview content in develop environment
2. Optimize images before committing
3. Test content on multiple devices
4. Verify accessibility of new content
5. Update navigation and menus as needed

### Code Quality
1. Run tests locally before pushing
2. Follow established coding standards
3. Document significant changes
4. Review own PRs before requesting review
5. Address feedback promptly and thoroughly

## Troubleshooting

### Common Issues

#### Merge Conflicts
```bash
# Update your branch with latest changes
git checkout your-branch
git fetch origin
git rebase origin/develop

# Resolve conflicts in your editor
# Add resolved files
git add .
git rebase --continue
```

#### Accidental Commits to Wrong Branch
```bash
# Move commits to correct branch
git log --oneline  # Find commit hashes
git checkout correct-branch
git cherry-pick <commit-hash>
git checkout wrong-branch
git reset --hard HEAD~1  # Remove from wrong branch
```

#### Need to Update Branch Protection
Contact DevOps team or repository administrators to update branch protection rules through GitHub settings.

## Monitoring and Metrics

### Branch Health Metrics
- Average PR review time
- Build success rate by branch type
- Merge frequency to main/develop
- Hotfix frequency (should be low)

### Quality Metrics
- Test coverage on merged code
- Accessibility compliance rate
- Build failure reasons
- Time from feature start to production

## Training Resources

### Git Commands Reference
- [Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)

### GitHub Features
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Pull Request Best Practices](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/)

### Internal Training
- Monthly Git workshops
- Pair programming sessions
- Code review best practices training