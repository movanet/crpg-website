# Visual Sitemap Comparison - Old vs New CRPG Website
**Date**: 2025-08-05

## SIDE-BY-SIDE COMPARISON

| Old Site (crpg.info) | New Site (GitHub Pages) | Status |
|---------------------|------------------------|---------|
| `/` | `/crpg-website/` | ✅ Migrated |
| `/profile/` | `/crpg-website/profile/` | ✅ Migrated |
| `/program/` | `/crpg-website/program/` | ✅ Migrated |
| `/research/` | `/crpg-website/research/` | ✅ Migrated |
| `/publications/` | `/crpg-website/publications/` | ✅ Migrated |
| `/events/` | `/crpg-website/events/` | ✅ Migrated |
| `/gallery/` | `/crpg-website/gallery/` | ✅ Migrated |
| `/koneksi/` | `/crpg-website/koneksi/` | ✅ Migrated |
| `/swa-mam-catalytic-program/` | `/crpg-website/swa-mam-catalytic-program/` | ✅ Migrated |
| `/ehrdd/` | `/crpg-website/ehrdd/` | ✅ Migrated |
| `/contact/` | `/crpg-website/contact/` | ✅ Migrated |
| **MISSING PAGES** | | |
| `/merkuri/` | ❌ Not migrated | ❌ MISSING |
| `/wash/` | ❌ Not migrated | ❌ MISSING |
| `/pcb/` | ❌ Not migrated | ❌ MISSING |
| `/aiira/` | ❌ Not migrated | ❌ MISSING |

## TEAM MEMBERS COMPARISON

| Old Site Team Member | New Site Status | Missing? |
|---------------------|-----------------|----------|
| `/mohamad-mova/` | ✅ `/crpg-website/team/mohamad-mova/` | ✅ |
| `/dyah-paramita/` | ✅ `/crpg-website/team/dyah-paramita/` | ✅ |
| `/aftaf-muhajir/` | ✅ `/crpg-website/team/aftaf-muhajir/` | ✅ |
| `/jibriel-avessina/` | ✅ `/crpg-website/team/jibriel-avessina/` | ✅ |
| `/feril-hariat/` | ❌ Not created | ❌ MISSING |
| `/lina-rospita/` | ❌ Not created | ❌ MISSING |
| `/muhammad-maulana/` | ❌ Not created | ❌ MISSING |
| `/richo-wibowo/` | ❌ Not created | ❌ MISSING |
| `/nishrin/` | ❌ Not created | ❌ MISSING |
| `/budi-susety/` | ❌ Not created | ❌ MISSING |
| `/mulia-nurhasan/` | ❌ Not created | ❌ MISSING |
| `/andi-mariyasa-septiari/` | ❌ Not created | ❌ MISSING |

## NEW PAGES (Not in Old Site)

| New Page | Purpose |
|----------|---------|
| `/crpg-website/news/` | News section (new structure) |
| `/crpg-website/posts/` | Blog posts section |
| `/crpg-website/our-works/` | Parent page for programs |
| `/crpg-website/team/` | Team listing page |

## CONTENT STRUCTURE CHANGES

### Old Site Structure:
- Team members directly under root (e.g., `/mohamad-mova/`)
- Programs as individual pages
- No dedicated news section

### New Site Structure:
- Team members under `/team/` directory
- Hierarchical menu with "Our Works" parent
- Dedicated news and posts sections
- Better content organization

## URL PATTERN CHANGES

| Type | Old Pattern | New Pattern |
|------|------------|-------------|
| Team | `/firstname-lastname/` | `/crpg-website/team/firstname-lastname/` |
| News | Individual pages | `/crpg-website/news/YYYY/MM/title/` |
| Assets | `/wp-content/uploads/` | `/crpg-website/images/` |

## BROKEN LINK MAPPING

| Broken Link Type | Count | Example |
|-----------------|-------|---------|
| Wrong image paths | 2 | `/images/` → `/crpg-website/images/` |
| Wrong nav paths | 10 | `/profile/` → `/crpg-website/profile/` |
| Missing team pages | 8 | `/feril-hariat/` doesn't exist |
| Missing program pages | 4 | `/merkuri/` doesn't exist |

## CONTENT MIGRATION STATUS

### ✅ Successfully Migrated (70%)
- Main pages: 11/11
- Team members: 4/12
- Programs: 3/7
- Assets: All PDFs and images

### ❌ Not Yet Migrated (30%)
- Team members: 8/12
- Programs: 4/7 (Mercury, WASH, PCB, AIIRA)

## RECOMMENDATIONS

1. **Fix BaseURL**: Change from `https://crpg.info/` to `https://movanet.github.io/crpg-website/`
2. **Create Missing Pages**: 12 pages need to be created
3. **Fix Path References**: Update all hardcoded paths
4. **Add Redirects**: For old URLs to maintain SEO