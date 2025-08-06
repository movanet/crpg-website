# Design Consistency Recommendations for CRPG Website

## Executive Summary

The main page has a polished Material Design interface, but secondary pages lack basic navigation and consistent styling. This creates a jarring user experience and makes the site difficult to navigate.

## Critical Issues to Fix

### 1. **Missing Navigation on Secondary Pages** 🚨
- **Problem**: Navigation is hardcoded in index.html, not available on other pages
- **Impact**: Users cannot navigate once they leave the homepage
- **Solution**: Extract navigation into a reusable partial

### 2. **No Visual Hierarchy**
- **Problem**: Secondary pages jump straight to content without headers
- **Impact**: Disorienting transition from styled homepage
- **Solution**: Add page headers with consistent branding

### 3. **Inconsistent Styling**
- **Problem**: Mix of Tachyons (from Ananke theme) and Material Design
- **Impact**: Typography, spacing, and colors vary between pages
- **Solution**: Standardize on Material Design system

## Recommended Implementation Plan

### Phase 1: Navigation Fix (Immediate)

1. **Create Navigation Partial**
   ```
   layouts/partials/site-navigation.html
   ```
   - Extract navigation code from index.html
   - Include logo, menu, search, and mobile menu

2. **Create Page Header Partial**
   ```
   layouts/partials/page-header.html
   ```
   - Smaller hero section for secondary pages
   - Page title with gradient background
   - Breadcrumb navigation

3. **Update Base Template**
   ```
   layouts/_default/baseof.html
   ```
   - Include theme toggle
   - Include navigation partial
   - Add page header block

### Phase 2: Visual Consistency

1. **Typography System**
   - Remove Tachyons classes (f1, f4, etc.)
   - Use consistent Material Design scale
   - Apply proper heading hierarchy

2. **Layout Standardization**
   - Consistent max-width containers
   - Material Design spacing (8px grid)
   - Card-based content sections

3. **Color Application**
   - Use brand colors (red/orange) for accents
   - Consistent backgrounds (white/light gray sections)
   - Proper contrast for accessibility

### Phase 3: Enhanced Features

1. **Sidebar Navigation**
   - Table of contents for long pages
   - Related links section
   - Sticky positioning on desktop

2. **Call-to-Action Sections**
   - Bottom of page CTAs
   - Related content cards
   - Newsletter signup

3. **Responsive Improvements**
   - Better mobile navigation
   - Touch-friendly buttons
   - Improved readability

## Quick Wins (Can implement today)

1. **Extract Navigation**
   - Move navigation HTML to partial
   - Include in baseof.html
   - Test on all page types

2. **Add Page Headers**
   - Create simple header with page title
   - Use brand gradient background
   - 30vh height instead of 80vh

3. **Fix Theme Toggle**
   - Move to baseof.html
   - Ensure it appears on all pages
   - Consistent positioning

## Visual Examples

### Current Profile Page Structure:
```
[No Navigation]
[White Background]
  > Content starts immediately
  > Tachyons typography
  > No visual hierarchy
[Footer]
```

### Proposed Profile Page Structure:
```
[Navigation Bar - Same as homepage]
[Page Header - 30vh]
  > "Our Profile" title
  > Gradient background
  > Breadcrumbs: Home > Profile
[Content Section - White]
  > Consistent typography
  > Proper spacing
  > Material Design elements
[Related Links - Light gray]
  > Team Members
  > Publications
  > Contact
[Footer - Same as homepage]
```

## CSS Updates Needed

1. **Override Ananke Defaults**
   ```css
   /* Remove Tachyons conflicts */
   .f1 { font-size: var(--h1-size) !important; }
   .f4 { font-size: var(--body-size) !important; }
   
   /* Apply Material spacing */
   .ph3 { padding-left: var(--space-3); padding-right: var(--space-3); }
   .pv5 { padding-top: var(--space-5); padding-bottom: var(--space-5); }
   ```

2. **Page Header Styles**
   ```css
   .page-header {
     background: linear-gradient(135deg, #E53935 0%, #FB8C00 100%);
     min-height: 30vh;
     display: flex;
     align-items: center;
     color: white;
   }
   ```

3. **Content Container**
   ```css
   .content-container {
     max-width: 1200px;
     margin: 0 auto;
     padding: var(--space-5) var(--space-3);
   }
   ```

## Testing Checklist

- [ ] Navigation appears on all pages
- [ ] Theme toggle works everywhere
- [ ] Mobile menu functions properly
- [ ] Page headers display correctly
- [ ] Typography is consistent
- [ ] Links use proper colors
- [ ] Spacing follows 8px grid
- [ ] Footer is consistent

## Priority Order

1. **Today**: Fix navigation (users can't navigate!)
2. **This Week**: Add page headers and consistent styling
3. **Next Week**: Enhanced features and refinements

## Expected Impact

- **User Experience**: Seamless navigation, clear hierarchy
- **Brand Consistency**: Professional appearance across all pages
- **Accessibility**: Better structure for screen readers
- **Maintenance**: Easier to update with reusable components

## Next Steps

1. Create the navigation partial
2. Update baseof.html
3. Test on profile page
4. Roll out to all secondary pages
5. Refine based on feedback

The most critical issue is the missing navigation - this should be fixed immediately as it's preventing basic site functionality.