# CMS Implementation Guide
## Technical Setup Instructions for CRPG Think Tank Hugo CMS

**Document Version:** 1.0  
**Last Updated:** August 5, 2025  
**For:** CRPG Think Tank Website Migration Project

## CloudCannon Implementation (Recommended)

### Prerequisites
- Hugo site repository on GitHub/GitLab
- CloudCannon account (Team plan recommended)
- Domain management access

### Step 1: Account Setup and Site Connection (Week 1)

#### Initial Setup
```bash
# Ensure your Hugo site is properly configured
hugo version  # Verify Hugo installation
hugo server   # Test local development

# Commit all changes to your Git repository
git add .
git commit -m "Prepare for CloudCannon integration"
git push origin main
```

#### CloudCannon Configuration
1. **Create CloudCannon Account**
   - Sign up at cloudcannon.com
   - Choose Team plan for editorial workflow features
   - Connect GitHub/GitLab repository

2. **Site Configuration**
   ```yaml
   # Create cloudcannon.config.yml in site root
   source: ""
   timezone: "Asia/Jakarta"
   
   collections_config:
     research-papers:
       path: "content/research"
       name: "Research Papers"
       icon: "article"
       output: true
       
     policy-briefs:
       path: "content/policy"
       name: "Policy Briefs"
       icon: "description"
       output: true
       
     team:
       path: "content/team"
       name: "Team Members"
       icon: "people"
       output: true
       
     posts:
       path: "content/posts"
       name: "Blog Posts"
       icon: "edit"
       output: true
   ```

### Step 2: Content Type Configuration (Week 1-2)

#### Research Papers Schema
```yaml
# content/research/_index.md front matter schema
_schema:
  type: object
  properties:
    title:
      type: string
      description: "Research paper title"
    authors:
      type: array
      items:
        type: string
      description: "List of authors"
    abstract:
      type: string
      description: "Research abstract"
    keywords:
      type: array
      items:
        type: string
      description: "Research keywords"
    publication_date:
      type: string
      format: date
      description: "Publication date"
    research_area:
      type: string
      enum: ["Constitutional Law", "Environmental Policy", "Water Resources", "Regulatory Analysis", "Sustainable Development"]
    pdf_file:
      type: string
      description: "Path to PDF file"
    status:
      type: string
      enum: ["draft", "under_review", "published"]
      default: "draft"
```

#### Team Member Schema
```yaml
# content/team/_index.md front matter schema
_schema:
  type: object
  properties:
    name:
      type: string
      description: "Full name"
    position:
      type: string
      description: "Job title/position"
    expertise:
      type: array
      items:
        type: string
      description: "Areas of expertise"
    bio:
      type: string
      description: "Professional biography"
    education:
      type: array
      items:
        type: object
        properties:
          degree:
            type: string
          institution:
            type: string
          year:
            type: number
    photo:
      type: string
      description: "Profile photo path"
    email:
      type: string
      format: email
    social_links:
      type: object
      properties:
        linkedin:
          type: string
        twitter:
          type: string
        orcid:
          type: string
```

### Step 3: Editorial Workflow Setup (Week 2)

#### Publishing Workflow Configuration
```yaml
# Add to cloudcannon.config.yml
publishing:
  branch: "main"
  
editor:
  default_path: "/content/"
  
paths:
  dam: "static/uploads"
  
workflow:
  review_required: true
  reviewers:
    - "senior-researcher@crpg.info"
    - "editor@crpg.info"
  
notifications:
  email: true
  webhooks:
    - url: "https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK"
      events: ["publish", "review_requested"]
```

#### User Roles Configuration
```yaml
# User management in CloudCannon dashboard
roles:
  researcher:
    permissions:
      - "edit_own_content"
      - "create_draft"
      - "upload_media"
    collections: ["research-papers", "policy-briefs", "posts"]
    
  editor:
    permissions:
      - "edit_all_content"
      - "publish_content"
      - "manage_media"
      - "review_submissions"
    collections: ["all"]
    
  administrator:
    permissions:
      - "full_access"
    collections: ["all"]
```

### Step 4: Content Migration (Week 2-3)

#### Automated Migration Script
```bash
#!/bin/bash
# migrate-content.sh - Migrate WordPress content to Hugo format

# Create directory structure
mkdir -p content/{research,policy,team,posts}
mkdir -p static/uploads/{pdfs,images}

# Convert existing PDFs to proper structure
for pdf in /path/to/archive/assets/pdfs/*.pdf; do
    filename=$(basename "$pdf")
    cp "$pdf" "static/uploads/pdfs/$filename"
    
    # Create corresponding markdown file
    cat > "content/research/${filename%.pdf}.md" << EOF
---
title: "$(echo ${filename%.pdf} | tr '-' ' ')"
authors: ["CRPG Team"]
publication_date: $(date -I)
pdf_file: "/uploads/pdfs/$filename"
status: "published"
---

Research content migrated from WordPress archive.
EOF
done

echo "Content migration completed"
```

## DecapCMS Implementation (Budget Alternative)

### Prerequisites
- Hugo site with NetlifyCMS/DecapCMS support
- Git repository (GitHub recommended for OAuth)
- Static hosting (Netlify/Vercel recommended)

### Step 1: DecapCMS Installation

#### Add DecapCMS to Hugo Site
```bash
# Create admin directory
mkdir -p static/admin

# Create DecapCMS configuration
cat > static/admin/config.yml << 'EOF'
backend:
  name: github
  repo: crpg-org/website  # Replace with your repo
  branch: main
  
media_folder: "static/uploads"
public_folder: "/uploads"

publish_mode: editorial_workflow

collections:
  - name: "research"
    label: "Research Papers"
    folder: "content/research"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    editor:
      preview: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Authors", name: "authors", widget: "list"}
      - {label: "Abstract", name: "abstract", widget: "text"}
      - {label: "Keywords", name: "keywords", widget: "list"}
      - {label: "Publication Date", name: "date", widget: "datetime"}
      - {label: "Research Area", name: "research_area", widget: "select", 
         options: ["Constitutional Law", "Environmental Policy", "Water Resources", "Regulatory Analysis"]}
      - {label: "PDF File", name: "pdf_file", widget: "file"}
      - {label: "Status", name: "status", widget: "select", 
         options: ["draft", "under_review", "published"], default: "draft"}
      - {label: "Body", name: "body", widget: "markdown"}
      
  - name: "team"
    label: "Team Members"
    folder: "content/team"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Name", name: "title", widget: "string"}
      - {label: "Position", name: "position", widget: "string"}
      - {label: "Expertise", name: "expertise", widget: "list"}
      - {label: "Biography", name: "bio", widget: "text"}
      - {label: "Photo", name: "photo", widget: "image"}
      - {label: "Email", name: "email", widget: "string"}
      - {label: "LinkedIn", name: "linkedin", widget: "string", required: false}
      - {label: "Body", name: "body", widget: "markdown"}
EOF

# Create admin index file
cat > static/admin/index.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CRPG Content Management</title>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</head>
<body>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  <script>
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  </script>
</body>
</html>
EOF
```

### Step 2: Authentication Setup

#### GitHub OAuth Application
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create new OAuth App:
   - Application name: "CRPG CMS"
   - Homepage URL: "https://your-domain.com"
   - Authorization callback URL: "https://api.netlify.com/auth/done"

#### Netlify Identity Configuration
```bash
# If using Netlify, enable Identity in site settings
# Add environment variables in Netlify dashboard:
# GITHUB_CLIENT_ID=your_github_client_id
# GITHUB_CLIENT_SECRET=your_github_client_secret
```

### Step 3: Editorial Workflow Setup

#### Pull Request Based Workflow
```yaml
# In config.yml, ensure publish_mode is set
publish_mode: editorial_workflow

# Configure automatic deployments
# In Netlify: Settings > Build & deploy > Deploy contexts
# Branch deploys: Deploy only the production branch
# Deploy previews: Any pull request against your production branch
```

#### User Management
```bash
# Invite users via Netlify Identity
# Set user roles:
# - Editor: Can publish content
# - Contributor: Can create drafts only

# Add role-based access in config.yml
collections:
  - name: "research"
    # ... other config
    editor:
      preview: true
    publish: false  # Requires editor approval
```

## Training Materials and Documentation

### Quick Start Guide for Researchers

#### CloudCannon Editing Process
1. **Access:** Login to CloudCannon dashboard
2. **Create:** Click "New" in Research Papers collection
3. **Edit:** Use visual editor or content editor as preferred
4. **Preview:** Review content using live preview
5. **Submit:** Save as draft and request review
6. **Publish:** Content goes live after editor approval

#### DecapCMS Editing Process
1. **Access:** Navigate to yoursite.com/admin
2. **Login:** Authenticate with GitHub
3. **Create:** Select collection and create new entry
4. **Edit:** Fill out form fields and markdown content
5. **Save:** Save as draft (creates branch)
6. **Review:** Editor reviews pull request
7. **Publish:** Merge to main branch publishes content

### User Training Checklist

#### Week 3: Training Sessions
- [ ] **Day 1:** Admin training (2 hours)
  - CMS overview and navigation
  - Content type structure
  - User management and roles
  
- [ ] **Day 2:** Editor training (3 hours)
  - Content creation workflow
  - Review and approval process
  - Media management
  
- [ ] **Day 3:** Researcher training (2 hours)
  - Creating research papers and policy briefs
  - Adding team member profiles
  - Blog post creation

#### Documentation Deliverables
- [ ] Video tutorials for each content type
- [ ] Written step-by-step guides
- [ ] Troubleshooting FAQ
- [ ] Style guide for consistent formatting

## Maintenance and Support

### Regular Maintenance Tasks

#### Monthly
- [ ] Review user access and permissions
- [ ] Check content backup integrity
- [ ] Monitor site performance and build times
- [ ] Update Hugo version if needed

#### Quarterly
- [ ] CMS platform updates (CloudCannon auto-updates)
- [ ] Security review of user accounts
- [ ] Content audit and cleanup
- [ ] Training refreshers for new users

### Support Resources

#### CloudCannon Support
- Professional support included with Team plan
- Documentation: docs.cloudcannon.com
- Email support with SLA guarantee

#### DecapCMS Support
- Community support: GitHub issues and discussions
- Documentation: decapcms.org/docs
- Stack Overflow community

## Migration Timeline Summary

### CloudCannon (2-3 weeks)
- **Week 1:** Setup, configuration, basic content types
- **Week 2:** Editorial workflow, advanced features, content migration
- **Week 3:** Training, testing, go-live preparation

### DecapCMS (3-4 weeks)
- **Week 1-2:** Technical setup, authentication, configuration
- **Week 3:** Content migration, workflow testing
- **Week 4:** User training, documentation, launch

## Success Metrics

### Key Performance Indicators
- **Content Creation Speed:** Time from draft to publication
- **User Adoption:** Number of active content creators
- **Content Quality:** Reduction in formatting errors
- **Workflow Efficiency:** Review and approval cycle time
- **User Satisfaction:** Training feedback and ongoing usage

### Monitoring and Evaluation
- Monthly usage reports
- Quarterly user feedback surveys
- Annual CMS performance review
- Content analytics and engagement metrics

---

**Technical implementation guide for CRPG Think Tank CMS migration**  
**Prepared for Hugo static site generator integration**  
**Updated August 2025**