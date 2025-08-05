# CRPG Website Site Structure Map

## Primary Navigation Structure

```
CRPG.info
│
├── 🏠 HOME (/)
│   ├── Hero Section with Mission Statement
│   ├── About CRPG Overview  
│   ├── Recent Research Highlights
│   ├── Partner Organizations Grid
│   └── Contact Information
│
├── 👥 PROFILE (/profile/)
│   ├── Organization Overview
│   ├── Legal Entity Information
│   ├── Mission & Vision
│   ├── Core Values
│   └── Organizational Structure
│
├── 📋 PROGRAM (/program/)
│   ├── SWA-MAM Catalytic Program (/swa-mam-catalytic-program/)
│   ├── EHRDD Program (/ehrdd/)
│   ├── KONEKSI Workshops
│   ├── Policy Research Initiatives
│   └── Environmental Governance Projects
│
├── 🔬 RESEARCH (/research/)
│   ├── Research Areas Overview
│   ├── Constitutional Law Studies
│   ├── Environmental Policy Research
│   ├── Water Governance Studies
│   ├── Climate Change Policy
│   └── Regulatory Analysis
│
├── 📚 PUBLICATIONS (/publications/)
│   ├── Research Papers (2021-2024)
│   ├── Policy Briefs
│   ├── Academic Presentations
│   ├── Corporate Documents
│   └── Partnership Reports
│
├── 📅 EVENTS (/events/)
│   ├── Workshop Documentation
│   ├── Conference Presentations
│   ├── Stakeholder Meetings
│   └── Academic Forums
│
├── 🖼️ GALLERY (/gallery/)
│   ├── Event Photography
│   ├── Workshop Images
│   ├── Team Activities
│   └── Partnership Events
│
└── 👤 TEAM MEMBERS
    ├── 👨‍💼 Mohamad Mova (/mohamad-mova/)
    ├── 👩‍💼 Dyah Paramita (/dyah-paramita/)
    ├── 👨‍💼 Aftaf Muhajir (/aftaf-muhajir/)
    ├── 👨‍💼 Feril Hariat (/feril-hariat/)
    ├── 👨‍💼 Jibriel Avessina (/jibriel-avessina/)
    ├── 👩‍💼 Lina Rospita (/lina-rospita/)
    ├── 👨‍💼 Muhammad Maulana (/muhammad-maulana/)
    ├── 👨‍💼 Mulia Nurhasan (/mulia-nurhasan/)
    ├── 👩‍💼 Nishrin (/nishrin/)
    ├── 👨‍💼 Richo Wibowo (/richo-wibowo/)
    ├── 👨‍💼 Budi Susety (/budi-susety/)
    └── 👨‍💼 Andi Mariyasa Septiari (/andi-mariyasa-septiari/)
```

## Content Hierarchy Analysis

### Level 1: Main Sections (6 primary areas)
- **Profile:** Organizational information and credentials
- **Program:** Active initiatives and projects  
- **Research:** Academic research focus areas
- **Publications:** Research outputs and documents
- **Events:** Activities and workshops
- **Gallery:** Visual documentation

### Level 2: Team Structure (12+ individual profiles)
- Each team member has dedicated biographical page
- Individual research interests and expertise
- Personal RSS feeds for some members
- Academic and professional backgrounds

### Level 3: Program-Specific Pages
- **SWA-MAM:** Water and sanitation program
- **EHRDD:** Environmental human rights initiative  
- **KONEKSI:** Workshop and networking program

## URL Structure Pattern

```
Primary Pages:     /[section]/
Team Members:      /[first-name-last-name]/
Programs:          /[program-name]/
Feeds:            /[section]/feed/
Archives:          /[year]/[month]/
```

## WordPress-Specific Structure

### Technical Pages
- `/wp-json/` - REST API endpoints
- `/wp-content/` - Media and asset storage
- `/wp-includes/` - WordPress core files
- `/xmlrpc.php` - XML-RPC interface
- `/robots.txt` - Search engine directives

### Feed Structure
- `/feed/` - Main RSS feed
- `/comments/feed/` - Comments feed  
- `/[page]/feed/` - Individual page feeds
- `/?p=[id]` - Post ID-based URLs

### Asset Organization
```
/wp-content/uploads/
├── 2018/ - Branding and logos
├── 2019/ - Initial partner content
├── 2021/ - Policy briefs and partnerships
├── 2022/ - Research papers and presentations  
├── 2023/ - Reports and workshop materials
└── 2024/ - Latest research and climate papers
```

## Navigation Flow

### Primary User Journeys
1. **Researcher Path:** Home → Research → Publications → Specific Papers
2. **Partnership Path:** Home → Profile → Team Members → Contact  
3. **Program Path:** Home → Program → Specific Initiative → Publications
4. **Academic Path:** Research → Team Members → Publications → Events

### Information Architecture
- **Top-level:** 6 main sections provide clear categorization
- **Team-focused:** Strong emphasis on individual researcher profiles
- **Research-centered:** Multiple pathways to academic content
- **Partnership-oriented:** Clear organizational credibility signals

## Content Relationships

### Cross-linking Patterns
- Team members linked to their research areas
- Programs connected to relevant publications
- Events tied to specific research initiatives
- Publications categorized by program area

### Content Dependencies
- **Profile pages** establish organizational credibility
- **Team pages** provide research expertise context
- **Program pages** explain active initiatives  
- **Publications** deliver core research value
- **Events** demonstrate active engagement
- **Gallery** provides visual proof of activities

## Mobile and Responsive Considerations

### WordPress Theme: OceanWP
- Responsive design implemented
- Mobile-first navigation structure
- Touch-friendly interface elements
- Optimized image loading

### Performance Optimization
- WP Fastest Cache implementation
- Minified CSS and JavaScript
- Cloudflare CDN integration
- Compressed image formats

This structure map provides the foundation for recreating the site architecture in the new Hugo-based system while preserving the logical content organization and user experience patterns.