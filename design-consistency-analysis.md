# Design Consistency Analysis: Main Page vs Secondary Pages

## Current State Analysis

### Main Page Design Elements
1. **Hero Section**
   - Full-width hero with gradient background (red to orange)
   - Centered white text with title and subtitle
   - Three CTA buttons (filled and outlined styles)
   - Min-height: 80vh

2. **Navigation**
   - Material Design navigation bar with logo
   - Horizontal menu items
   - Search widget with modal
   - Mobile menu with hamburger

3. **Theme Toggle**
   - Fixed position (top-right)
   - Circular button with sun/moon icon
   - Works across all pages

4. **Content Sections**
   - Card-based layout for research/programs
   - Section titles with consistent styling
   - Alternating background colors (white/light gray)
   - Material Design chips for focus areas
   - Partner grid with logos

5. **Typography**
   - System fonts (-apple-system, BlinkMacSystemFont)
   - Consistent heading hierarchy
   - Material Design spacing

### Secondary Pages (Profile) Design Elements
1. **No Hero Section**
   - Direct content display
   - Plain white background
   - No visual hierarchy entry point

2. **Navigation**
   - Missing! No visible navigation bar
   - No logo or menu
   - No search functionality
   - No mobile menu

3. **Theme Toggle**
   - Present (consistent)

4. **Content Layout**
   - Basic article layout from Ananke theme
   - Tachyons CSS classes (f1, nested-copy-line-height)
   - No Material Design elements
   - Inconsistent typography scale

5. **Visual Issues**
   - No consistent header/branding
   - Different font sizes and spacing
   - Missing visual hierarchy
   - No section backgrounds

## Key Inconsistencies

### 1. Navigation Missing
- **Issue**: Secondary pages have no navigation
- **Impact**: Users can't navigate back or to other sections
- **Priority**: CRITICAL

### 2. Visual Hierarchy
- **Issue**: No hero or page header on secondary pages
- **Impact**: Jarring transition from main page
- **Priority**: HIGH

### 3. Typography Mismatch
- **Issue**: Different font systems (Material vs Tachyons)
- **Impact**: Inconsistent reading experience
- **Priority**: MEDIUM

### 4. Layout System
- **Issue**: Grid/card system not used on secondary pages
- **Impact**: Content feels disconnected
- **Priority**: MEDIUM

### 5. Color Scheme
- **Issue**: No use of brand colors on secondary pages
- **Impact**: Loss of visual identity
- **Priority**: MEDIUM

## Recommendations

### Immediate Fixes (Priority 1)

1. **Add Navigation to All Pages**
   - Create a partial template for consistent navigation
   - Include logo, menu items, and search
   - Ensure mobile responsiveness

2. **Page Header Component**
   - Create a smaller hero variant for secondary pages
   - Use brand gradient but reduced height (30-40vh)
   - Include page title and breadcrumbs

3. **Base Template Update**
   - Modify `layouts/_default/baseof.html`
   - Include navigation and header partials
   - Ensure theme toggle is consistent

### Design System Implementation (Priority 2)

1. **Typography Standardization**
   ```css
   /* Heading scales */
   --h1-size: 2.5rem;
   --h2-size: 2rem;
   --h3-size: 1.5rem;
   --h4-size: 1.25rem;
   --body-size: 1rem;
   
   /* Line heights */
   --heading-line-height: 1.2;
   --body-line-height: 1.6;
   ```

2. **Spacing System**
   ```css
   /* Material Design spacing scale */
   --space-1: 0.25rem;
   --space-2: 0.5rem;
   --space-3: 1rem;
   --space-4: 1.5rem;
   --space-5: 2rem;
   --space-6: 3rem;
   ```

3. **Color Application**
   - Use brand colors for accents
   - Apply consistent backgrounds
   - Implement hover states

### Layout Enhancements (Priority 3)

1. **Content Container**
   - Max-width: 1200px for readability
   - Consistent padding: 2rem on mobile, 3rem on desktop
   - Card-based sections where appropriate

2. **Sidebar Support**
   - Table of contents for long pages
   - Related links section
   - Consistent with main page grid

3. **Call-to-Action Areas**
   - Bottom of page CTAs
   - Related content cards
   - Newsletter signup consistency

## Implementation Steps

1. **Create Shared Partials**
   - `partials/site-nav.html` (from main page)
   - `partials/page-header.html` (new component)
   - `partials/content-wrapper.html` (consistent container)

2. **Update Base Template**
   - Include navigation on all pages
   - Add page header logic
   - Ensure consistent footer

3. **CSS Consolidation**
   - Merge Material Design styles
   - Override Tachyons where needed
   - Create page-specific styles

4. **Test Across Pages**
   - Profile page
   - Team pages
   - Research/Publications
   - Programs

## Expected Outcome

- Seamless navigation experience
- Consistent visual language
- Clear page hierarchy
- Improved user orientation
- Professional, cohesive appearance

## Visual Mockup Structure

```
[Navigation Bar - Fixed]
[Page Hero - 30vh with gradient]
  > Page Title
  > Breadcrumbs
[Content Area - White bg]
  > Main Content (with proper typography)
  > Sidebar (optional)
[Related Content - Light gray bg]
[Footer - Dark gray]
```