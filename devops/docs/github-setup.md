# GitHub Repository Setup Guide

## Initial Repository Configuration

### 1. Repository Creation
```bash
# If creating new repository on GitHub
# Use GitHub web interface or GitHub CLI
gh repo create your-org/crpgweb --public --description "CRPG Website - Hugo Static Site"

# Clone and setup locally
git clone https://github.com/your-org/crpgweb.git
cd crpgweb
```

### 2. Branch Protection Rules

#### Main Branch Protection
Navigate to: Repository → Settings → Branches → Add rule

**Branch name pattern**: `main`

Settings to enable:
- [x] Require a pull request before merging
  - [x] Require approvals (2)
  - [x] Dismiss stale PR approvals when new commits are pushed
  - [x] Require review from code owners
- [x] Require status checks to pass before merging
  - [x] Require branches to be up to date before merging
  - Required status checks:
    - `build-test (ubuntu-latest)`
    - `accessibility-test (ubuntu-latest)`
- [x] Require conversation resolution before merging
- [x] Include administrators
- [x] Allow force pushes (disable)
- [x] Allow deletions (disable)

#### Develop Branch Protection
**Branch name pattern**: `develop`

Settings to enable:
- [x] Require a pull request before merging
  - [x] Require approvals (1)
  - [x] Dismiss stale PR approvals when new commits are pushed
- [x] Require status checks to pass before merging
  - [x] Require branches to be up to date before merging
  - Required status checks:
    - `build-test (ubuntu-latest)`
- [x] Require conversation resolution before merging
- [ ] Include administrators (allow bypass for emergency)

### 3. Required Secrets Configuration

Navigate to: Repository → Settings → Secrets and variables → Actions

#### Secrets to Add
```bash
# Netlify Authentication Token
NETLIFY_AUTH_TOKEN=your_personal_access_token_from_netlify

# Netlify Site ID
NETLIFY_SITE_ID=your_site_id_from_netlify
```

#### How to Get Netlify Credentials

**Netlify Auth Token:**
1. Go to Netlify → User settings → Personal access tokens
2. Click "New access token"
3. Give it a descriptive name: "CRPG Website GitHub Actions"
4. Copy the generated token

**Netlify Site ID:**
1. Go to your site in Netlify dashboard
2. Navigate to Site settings → General
3. Copy the "Site ID" (looks like: 12345678-1234-1234-1234-123456789012)

### 4. Repository Settings

#### General Settings
- **Repository name**: crpgweb
- **Description**: CRPG Website - Hugo Static Site Generator
- **Website**: https://crpgweb.netlify.app
- **Topics**: `hugo`, `static-site`, `netlify`, `crpg`, `website`
- **Include in the home page**: ✓

#### Features
- [x] Wikis (disable if not needed)
- [x] Issues
- [x] Sponsorships (if applicable)
- [x] Preserve this repository (for important projects)
- [x] Projects
- [x] Discussions (optional)

#### Merge button
- [x] Allow merge commits
- [x] Allow squash merging (recommended for feature branches)
- [x] Allow rebase merging
- [x] Always suggest updating pull request branches
- [x] Allow auto-merge
- [x] Automatically delete head branches

### 5. GitHub Actions Configuration

#### Workflow Permissions
Navigate to: Repository → Settings → Actions → General

**Actions permissions:**
- Allow enterprise, and select non-enterprise, actions and reusable workflows

**Workflow permissions:**
- Read and write permissions
- Allow GitHub Actions to create and approve pull requests

#### Required Workflows Status
The following workflows must pass before merging:
- Hugo Build Test
- Accessibility Test
- Link Checker (for main branch only)

### 6. Code Owners Setup

Create `.github/CODEOWNERS` file:
```bash
# Global code owners
* @your-org/dev-team

# Content owners
/content/ @your-org/content-team

# Configuration owners
netlify.toml @your-org/devops-team
.github/ @your-org/devops-team
/devops/ @your-org/devops-team

# Theme and assets
/themes/ @your-org/frontend-team
/static/ @your-org/frontend-team
/assets/ @your-org/frontend-team
```

### 7. Issue and PR Templates

#### Pull Request Template
Create `.github/pull_request_template.md`:
```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Content update (new content or content modifications)
- [ ] Documentation update

## Testing
- [ ] Local testing completed
- [ ] Build passes
- [ ] Accessibility testing completed (if applicable)
- [ ] Cross-browser testing (if applicable)

## Content Checklist (if applicable)
- [ ] Content is accurate and up-to-date
- [ ] Images are optimized and have alt text
- [ ] Links are working and relevant
- [ ] SEO metadata is included

## Accessibility Checklist (if applicable)
- [ ] Color contrast meets WCAG AA standards
- [ ] Focusable elements have visible focus indicators
- [ ] Images have appropriate alt text
- [ ] Headings follow logical hierarchy
- [ ] Forms have proper labels

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Additional Notes
Any additional information that reviewers should know.
```

#### Bug Report Template
Create `.github/ISSUE_TEMPLATE/bug_report.md`:
```markdown
---
name: Bug report
about: Create a report to help us improve
title: '[BUG] '
labels: bug
assignees: ''
---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. iOS]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Smartphone (please complete the following information):**
 - Device: [e.g. iPhone6]
 - OS: [e.g. iOS8.1]
 - Browser [e.g. stock browser, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.
```

#### Feature Request Template
Create `.github/ISSUE_TEMPLATE/feature_request.md`:
```markdown
---
name: Feature request
about: Suggest an idea for this project
title: '[FEATURE] '
labels: enhancement
assignees: ''
---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is. Ex. I'm always frustrated when [...]

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

### 8. Security Configuration

#### Dependabot Setup
Create `.github/dependabot.yml`:
```yaml
version: 2
updates:
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
    labels:
      - "dependencies"
      - "github-actions"
    
  # Add npm if using Node.js for asset processing
  # - package-ecosystem: "npm"
  #   directory: "/"
  #   schedule:
  #     interval: "weekly"
  #   labels:
  #     - "dependencies"
  #     - "npm"
```

#### Security Advisories
Enable in: Repository → Settings → Security & analysis
- [x] Dependency graph
- [x] Dependabot alerts
- [x] Dependabot security updates
- [x] Dependabot version updates

### 9. Notifications Setup

#### Webhook Configuration (Optional)
For Slack/Discord integration:
1. Go to Repository → Settings → Webhooks
2. Add webhook URL for your communication platform
3. Select events: Push, Pull request, Issues, etc.

#### Email Notifications
Team members should configure their GitHub notification preferences:
- Repository watching settings
- Email preferences for mentions, reviews, etc.

### 10. Repository Insights Configuration

#### Traffic Analytics
Enable in: Repository → Insights → Traffic
- Monitor page views, unique visitors
- Track clone activity
- Analyze referrer sources

#### Community Standards
Check: Repository → Insights → Community
Ensure you have:
- [x] Description
- [x] README
- [x] Code of conduct
- [x] Contributing guidelines
- [x] License
- [x] Issue templates
- [x] Pull request template

### 11. Verification Steps

After setup, verify:
```bash
# 1. Clone repository
git clone https://github.com/your-org/crpgweb.git
cd crpgweb

# 2. Check branch protection
git push origin main  # Should be rejected without PR

# 3. Test workflow
git checkout -b test/github-setup
echo "Test file" > test.txt
git add test.txt
git commit -m "test: verify GitHub Actions workflow"
git push origin test/github-setup

# 4. Create PR and verify:
# - Required checks run
# - Review requirements enforced
# - Status checks must pass
```

### 12. Troubleshooting

#### Common Issues

**Actions not running:**
- Check Actions permissions in repository settings
- Verify workflow files are in `.github/workflows/`
- Check for YAML syntax errors

**Branch protection not working:**
- Verify branch name pattern matches exactly
- Check if administrators are included in restrictions
- Confirm required status checks are spelled correctly

**Secrets not available:**
- Verify secrets are set at repository level (not organization level unless intended)
- Check secret names match exactly in workflow files
- Ensure repository has access to organization secrets if applicable

**Build failures:**
- Check Hugo version compatibility
- Verify all required files are committed
- Review build logs for specific error messages

### 13. Maintenance Tasks

#### Weekly
- [ ] Review open pull requests
- [ ] Check failed workflow runs
- [ ] Monitor repository insights

#### Monthly
- [ ] Review and update branch protection rules
- [ ] Audit repository access permissions
- [ ] Update issue and PR templates if needed
- [ ] Review security advisories and dependabot alerts

#### Quarterly
- [ ] Review and update CODEOWNERS
- [ ] Audit webhook configurations
- [ ] Update documentation
- [ ] Review repository settings for changes