# CRPG Website Sitemap Comparison Report

**Generated:** August 6, 2025  
**Analysis:** Old WordPress Site vs. New Hugo Site  

## Executive Summary

This report provides a comprehensive comparison between the original CRPG WordPress website (crpg.info) and the current Hugo implementation, identifying all missing pages, content gaps, and migration requirements.

**Key Findings:**
- **19 missing team member pages** need to be created
- **4 major program pages** are missing  
- **3 special content pages** require migration
- **Multiple organizational pages** need content updates

## Site Structure Comparison

### Original Site (WordPress) - Complete Structure

```
crpg.info/
├── Home (/) ✅ EXISTS in Hugo
├── profile/ ✅ EXISTS as profile.md
├── program/ ✅ EXISTS as program.md  
├── research/ ✅ EXISTS as research/
├── publications/ ✅ EXISTS as publications/
├── events/ ✅ EXISTS as events.md
├── gallery/ ✅ EXISTS as gallery.md
├── swa-mam-catalytic-program/ ✅ EXISTS as swa-mam-catalytic-program.md
├── ehrdd/ ✅ EXISTS as ehrdd.md
├── koneksi/ ✅ EXISTS as koneksi.md
├── pcb/ ❌ MISSING - Pollution Control Board page
├── aiira/ ❌ MISSING - AIIRA program page
├── merkuri/ ❌ MISSING - Mercury pollution page
├── wash/ ❌ MISSING - Water, Sanitation & Hygiene page
└── Team Members/
    ├── mohamad-mova/ ✅ EXISTS as team/mohamad-mova.md
    ├── dyah-paramita/ ✅ EXISTS as team/dyah-paramita.md
    ├── aftaf-muhajir/ ✅ EXISTS as team/aftaf-muhajir.md
    ├── jibriel-avessina/ ✅ EXISTS as team/jibriel-avessina.md
    ├── feril-hariat/ ❌ MISSING
    ├── lina-rospita/ ❌ MISSING
    ├── muhammad-maulana/ ❌ MISSING
    ├── mulia-nurhasan/ ❌ MISSING
    ├── nishrin/ ❌ MISSING
    ├── richo-wibowo/ ❌ MISSING
    ├── andi-mariyasa-septiari/ ❌ MISSING
    └── budi-susety/ ❌ MISSING
```

### Current Hugo Site Structure

```
/content/
├── _index.md (Homepage)
├── about/_index.md
├── contact.md
├── profile.md
├── program.md
├── research/
│   ├── _index.md
│   └── research.md
├── publications/publications.md
├── events.md
├── events/ (directory)
├── gallery.md
├── swa-mam-catalytic-program.md
├── ehrdd.md
├── koneksi.md
├── our-works/_index.md
├── news/
│   ├── _index.md
│   ├── 2024-environmental-governance-workshop.md
│   ├── 2024-water-law-policy-brief.md
│   └── 2025-research-fellowship-announcement.md
├── posts/
│   ├── climate-adaptation-policy.md
│   ├── constitutional-governance.md
│   ├── water-governance-indonesia.md
│   └── welcome.md
├── team.md
└── team/
    ├── aftaf-muhajir.md
    ├── dyah-paramita.md
    ├── jibriel-avessina.md
    └── mohamad-mova.md
```

## Detailed Page Analysis

### ✅ Pages Existing in Both Sites (11 pages)

| Old Site Path | Hugo Path | Status | Notes |
|--------------|-----------|---------|-------|
| `/` | `/` | ✅ Complete | Homepage migrated |
| `/profile/` | `/profile.md` | ✅ Complete | Organization profile |
| `/program/` | `/program.md` | ✅ Complete | Programs overview |
| `/research/` | `/research/` | ✅ Complete | Research section |
| `/publications/` | `/publications/` | ✅ Complete | Publications page |
| `/events/` | `/events.md` | ✅ Complete | Events page |
| `/gallery/` | `/gallery.md` | ✅ Complete | Photo gallery |
| `/swa-mam-catalytic-program/` | `/swa-mam-catalytic-program.md` | ✅ Complete | SWA program |
| `/ehrdd/` | `/ehrdd.md` | ✅ Complete | EHRDD program |
| `/koneksi/` | `/koneksi.md` | ✅ Complete | Koneksi initiative |
| `/mohamad-mova/` | `/team/mohamad-mova.md` | ✅ Complete | Team member |

### ❌ Missing Pages That Need Migration (15 pages)

#### Special Program/Content Pages (4 pages)

1. **`/pcb/`** - Pollution Control Board
   - Content focus: Pollution monitoring and control policies
   - Priority: **HIGH** - Important environmental program

2. **`/aiira/`** - AIIRA Program  
   - Content focus: Specific research initiative
   - Priority: **MEDIUM** - Specialized program

3. **`/merkuri/`** - Mercury Pollution Research
   - Content focus: Mercury contamination research
   - Priority: **HIGH** - Environmental health concern

4. **`/wash/`** - Water, Sanitation & Hygiene
   - Content focus: Water governance and sanitation policy
   - Priority: **HIGH** - Core research area

#### Missing Team Member Pages (11 pages)

All of these need to be created as individual markdown files in `/content/team/`:

1. **`feril-hariat.md`** - Feril Hariat profile
2. **`lina-rospita.md`** - Lina Rospita profile  
3. **`muhammad-maulana.md`** - Muhammad Maulana profile
4. **`mulia-nurhasan.md`** - Mulia Nurhasan profile
5. **`nishrin.md`** - Nishrin profile
6. **`richo-wibowo.md`** - Richo Wibowo profile
7. **`andi-mariyasa-septiari.md`** - Andi Mariyasa Septiari profile
8. **`budi-susety.md`** - Budi Susety profile

**Note:** These team members had individual profile pages on the original site with biographical information, research interests, and publication lists.

### 🆕 New Content in Hugo Site (Not in Original)

1. **`/about/`** - New about section (different from profile)
2. **`/contact.md`** - Dedicated contact page  
3. **`/our-works/`** - New works showcase section
4. **`/news/`** - News/blog section with articles
5. **`/posts/`** - Additional blog/article content

## Content Migration Requirements

### Immediate Priority (HIGH) - 7 pages

1. **Mercury Research Page** (`/merkuri/` → `/content/merkuri.md`)
   - Environmental health research content
   - Policy recommendations on mercury contamination

2. **WASH Program Page** (`/wash/` → `/content/wash.md`) 
   - Water, sanitation, hygiene governance research
   - Policy analysis and recommendations

3. **PCB Page** (`/pcb/` → `/content/pcb.md`)
   - Pollution Control Board research
   - Environmental regulation analysis

4. **Core Team Members** (4 pages):
   - `feril-hariat.md`
   - `lina-rospita.md` 
   - `muhammad-maulana.md`
   - `richo-wibowo.md`

### Medium Priority - 5 pages

1. **AIIRA Program** (`/aiira/` → `/content/aiira.md`)
2. **Additional Team Members** (4 pages):
   - `mulia-nurhasan.md`
   - `nishrin.md`
   - `andi-mariyasa-septiari.md`
   - `budi-susety.md`

## URL Structure Analysis

### Preserved URLs ✅
- Main navigation pages maintain similar paths
- Team member structure preserved under `/team/`
- Core program pages maintain naming convention

### Broken Links Potential ⚠️
- Direct links to missing team member pages will return 404
- References to `/pcb/`, `/merkuri/`, `/wash/`, `/aiira/` will break
- Internal navigation menus may reference non-existent pages

## Asset Migration Status

### ✅ Successfully Migrated
- PDF research documents (13 files) - All available in `/static/publications/`
- Partner organization logos - Available in `/static/images/`
- CRPG branding assets - Logo and favicon files migrated

### ❌ Assets Needing Review
- Team member profile photos for missing pages
- Program-specific images for mercury, PCB, WASH, AIIRA pages
- Event photos from gallery section

## SEO & Technical Considerations

### URL Redirects Needed
Create redirects in Hugo for changed URL patterns:
```
/mercury/ → /merkuri.md
/wash/ → /wash.md  
/pcb/ → /pcb.md
/aiira/ → /aiira.md
```

### Meta Data Preservation
- Ensure all migrated pages maintain SEO titles and descriptions
- Preserve Open Graph tags for social media sharing
- Maintain structured data markup where applicable

## Content Quality Assessment

### Original Site Content Analysis
- **Rich research content:** 13 PDF documents with substantial policy research
- **Comprehensive team profiles:** Detailed biographical and professional information
- **Program descriptions:** Well-documented initiative explanations
- **Partnership documentation:** Extensive organizational relationship content

### Migration Content Needs
- Extract team member biographical information from original HTML
- Migrate program descriptions and research focus areas
- Preserve publication lists and research interests
- Maintain partnership and collaboration details

## Recommendations

### Phase 1: Critical Missing Pages (Week 1)
1. Create mercury research page (`merkuri.md`)
2. Create WASH program page (`wash.md`)
3. Create PCB page (`pcb.md`)  
4. Create 4 core team member pages

### Phase 2: Complete Team Migration (Week 2)
1. Create remaining 4 team member pages
2. Create AIIRA program page
3. Review and update existing team page content

### Phase 3: Enhancement & Optimization (Week 3)
1. Add missing team photos and assets
2. Implement URL redirects
3. Update internal navigation menus
4. Cross-reference and fix internal links
5. SEO optimization for new pages

### Phase 4: Content Validation (Week 4)
1. Review all migrated content for accuracy
2. Verify all internal links function correctly
3. Test responsive design on new pages
4. Validate SEO implementation

## Success Metrics

- **100% page coverage:** All 15 missing pages created
- **0 broken internal links:** Complete internal navigation
- **Preserved SEO value:** Maintain search rankings for migrated content
- **Enhanced user experience:** Improved navigation and content discovery

## Conclusion

The CRPG website migration has successfully preserved the core structure and content, but requires creation of 15 missing pages to achieve full parity with the original site. The most critical missing elements are the specialized research program pages (mercury, WASH, PCB) and comprehensive team member profiles.

Priority should be given to high-impact research program pages and core team member profiles, as these represent essential organizational credibility and expertise showcase content.