# Dead Links Analysis Report - CRPG Website
**Date**: 2025-08-05
**Deployed URL**: https://movanet.github.io/crpg-website/
**Analysis Type**: Dead links inventory and sitemap comparison

## Executive Summary
Critical path issues detected: The deployed site has incorrect path references causing multiple 404 errors. Some resources use `/images/` instead of `/crpg-website/images/`.

## 1. CONFIRMED DEAD LINKS (404 Errors)

### A. Broken Image Links
These images are referenced with wrong paths (missing `/crpg-website` prefix):

1. **https://movanet.github.io/images/research-water-law.svg** ❌
   - Should be: `/crpg-website/images/research-water-law.svg`
   - Used in: Research card on homepage
   
2. **https://movanet.github.io/images/research-climate.svg** ❌
   - Should be: `/crpg-website/images/research-climate.svg`
   - Used in: Research card on homepage

### B. Broken Internal Page Links
These navigation links are missing the `/crpg-website` prefix:

1. **/research/** ❌ → Should be `/crpg-website/research/`
2. **/publications/** ❌ → Should be `/crpg-website/publications/`
3. **/profile/** ❌ → Should be `/crpg-website/profile/`
4. **/program/** ❌ → Should be `/crpg-website/program/`
5. **/events/** ❌ → Should be `/crpg-website/events/`
6. **/gallery/** ❌ → Should be `/crpg-website/gallery/`
7. **/posts/** ❌ → Should be `/crpg-website/posts/`
8. **/swa-mam-catalytic-program/** ❌ → Should be `/crpg-website/swa-mam-catalytic-program/`
9. **/ehrdd/** ❌ → Should be `/crpg-website/ehrdd/`
10. **/koneksi/** ❌ → Should be `/crpg-website/koneksi/`

### C. Missing Team Member Pages (from sitemap comparison)
These pages exist in the old site but are missing in the new site:

1. **/team/feril-hariat/** ❌
2. **/team/lina-rospita/** ❌
3. **/team/muhammad-maulana/** ❌
4. **/team/richo-wibowo/** ❌
5. **/team/nishrin/** ❌
6. **/team/budi-susety/** ❌
7. **/team/mulia-nurhasan/** ❌
8. **/team/andi-mariyasa-septiari/** ❌

### D. Missing Program Pages (from sitemap comparison)
1. **/merkuri/** (Mercury research) ❌
2. **/wash/** (WASH program) ❌
3. **/pcb/** (PCB research) ❌
4. **/aiira/** (AIIRA program) ❌

## 2. WORKING LINKS (Correct Paths)

### Images with Correct Paths ✅
- `/crpg-website/images/crpg-logo.png`
- `/crpg-website/images/WRI-300x193.png`
- `/crpg-website/images/SWA-Logo.png`
- All partner logos use correct paths

### Pages with Correct Paths ✅
- `/crpg-website/2025/08/welcome-to-our-new-website/`
- `/crpg-website/2024/11/multi-stakeholder-position-paper-on-indonesia-water-law-draft/`
- `/crpg-website/2024/10/climate-change-adaptation-strategies-for-indonesian-coastal-communities/`

## 3. SITEMAP COMPARISON

### OLD SITE (crpg.info) Structure:
```
/
├── /profile/
├── /program/
├── /research/
├── /publications/
├── /events/
├── /gallery/
├── /team/
│   ├── /mohamad-mova/
│   ├── /dyah-paramita/
│   ├── /aftaf-muhajir/
│   ├── /jibriel-avessina/
│   ├── /feril-hariat/
│   ├── /lina-rospita/
│   ├── /muhammad-maulana/
│   ├── /richo-wibowo/
│   ├── /nishrin/
│   ├── /budi-susety/
│   ├── /mulia-nurhasan/
│   └── /andi-mariyasa-septiari/
├── /koneksi/
├── /merkuri/
├── /wash/
├── /pcb/
├── /aiira/
├── /swa-mam-catalytic-program/
└── /ehrdd/
```

### NEW SITE (GitHub Pages) Structure:
```
/crpg-website/
├── /crpg-website/profile/
├── /crpg-website/program/
├── /crpg-website/research/
├── /crpg-website/publications/
├── /crpg-website/events/
├── /crpg-website/gallery/
├── /crpg-website/team/
│   ├── /crpg-website/team/mohamad-mova/
│   ├── /crpg-website/team/dyah-paramita/
│   ├── /crpg-website/team/aftaf-muhajir/
│   └── /crpg-website/team/jibriel-avessina/
├── /crpg-website/koneksi/
├── /crpg-website/swa-mam-catalytic-program/
├── /crpg-website/ehrdd/
├── /crpg-website/posts/
└── /crpg-website/news/
```

## 4. ROOT CAUSE ANALYSIS

### Issue 1: BaseURL Configuration
The Hugo `baseURL` in `config.toml` is set to `https://crpg.info/` instead of `https://movanet.github.io/crpg-website/`, causing:
- Some links to use root paths (`/images/`) instead of subdirectory paths
- Inconsistent path generation

### Issue 2: Mixed Path Usage
- Some templates use `{{ "images/..." | relURL }}` (correct)
- Others use hardcoded paths like `/images/...` (incorrect)

### Issue 3: Missing Content
- 8 team member pages not created
- 4 program pages not migrated

## 5. SUMMARY STATISTICS

- **Total Dead Links Found**: 22
  - Broken navigation links: 10
  - Broken image links: 2
  - Missing team pages: 8
  - Missing program pages: 4
  
- **Path Issues**: 12 (incorrect root paths)
- **Content Gaps**: 12 (missing pages)

## 6. PRIORITY FIXES NEEDED

1. **Critical**: Update `baseURL` in config.toml
2. **Critical**: Fix all hardcoded paths to use `relURL`
3. **High**: Create missing team member pages
4. **High**: Create missing program pages
5. **Medium**: Add redirects for old URLs