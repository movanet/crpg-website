# Visual Design Patterns Guide for Think Tank Websites

**Quick Reference for CRPG Website Design Implementation**

## Color Palette Analysis

### Primary Colors Observed Across Leading Think Tanks:

**Brookings Institution:**
- Primary: Deep blue (#003366 range)
- Accent: Orange/gold highlights
- Background: Clean whites with subtle grays

**Council on Foreign Relations:**
- Primary: Navy blue (#1f4e79 range)
- Accent: Orange (#f47920 range) 
- Background: White with light gray sections

**CSIS:**
- Primary: Dark blue (#2c3e50 range)
- Accent: Red accents for highlights
- Background: White with subtle blue tints

**Carnegie Endowment:**
- Primary: Sophisticated blue palette
- Accent: Restrained neutral tones
- Background: Clean whites with careful contrast

**Heritage Foundation:**
- Primary: Conservative blue (#1e3a8a range)
- Accent: Red for American flag associations
- Background: Predominantly white

### Recommended CRPG Color Strategy:
```css
Primary Blue: #1e3a8a (trust, stability, professionalism)
Secondary Blue: #3b82f6 (accessibility, contrast)
Accent Color: #f59e0b (warmth, highlighting)
Text Primary: #1f2937 (high contrast, readability)
Text Secondary: #6b7280 (hierarchy, metadata)
Background: #ffffff (clean, academic)
Light Gray: #f9fafb (section breaks, cards)
```

## Typography Patterns

### Heading Hierarchies:
1. **H1 (Main Headlines)**: 32-40px, Bold, Serif or Strong Sans-serif
2. **H2 (Section Headers)**: 24-28px, Semi-bold, Consistent with H1 family
3. **H3 (Subsections)**: 20-24px, Semi-bold, May contrast with H1/H2
4. **H4 (Article Titles)**: 18-20px, Medium weight
5. **Body Text**: 16-18px, Regular weight, High readability

### Font Family Strategies:
- **Academic Authority**: Serif for headlines (Georgia, Times, Custom serif)
- **Modern Professional**: Sans-serif throughout (Inter, Source Sans, System fonts)
- **Hybrid Approach**: Serif headlines, sans-serif body (Most common pattern)

### Recommended CRPG Typography:
```css
Font Stack Primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
Font Stack Headings: 'Merriweather', Georgia, Times, serif
Line Height Body: 1.6-1.7 (optimal readability)
Line Height Headings: 1.2-1.3 (tight, impactful)
```

## Layout Patterns

### Homepage Structures (Common Elements):

1. **Hero Section** (Above fold):
   - Large headline with mission/value proposition
   - Featured research or current priority
   - Navigation breadcrumbs or topic highlights
   - Call-to-action (newsletter, latest report)

2. **Featured Content Grid**:
   - 2-3 column layout on desktop
   - Card-based design with consistent formatting
   - Thumbnail images + headline + summary + metadata
   - Clear hierarchy and visual separation

3. **Topic/Category Navigation**:
   - Horizontal or grid-based topic display
   - Icon + text combinations
   - Consistent sizing and spacing
   - Hover states for interactivity

4. **Secondary Content Sections**:
   - Expert spotlights
   - Upcoming events
   - Recent media coverage
   - Newsletter signup

### Content Page Layouts:

**Research Paper/Article Pages:**
```
[ Breadcrumb Navigation ]
[ Article Title + Metadata ]
[ Author Info + Credentials ]
[ Article Content with Typography Hierarchy ]
[ Related Content Suggestions ]
[ Social Sharing Tools ]
[ Newsletter/Follow CTAs ]
```

**Expert Profile Pages:**
```
[ Expert Photo + Name + Title ]
[ Bio Summary + Credentials ]
[ Areas of Expertise Tags ]
[ Recent Publications Grid ]
[ Contact Information ]
[ Social Media Links ]
```

## Component Design Patterns

### Content Cards:
```
┌─────────────────────────────┐
│ [Thumbnail Image]           │
│ Article Title (H3)          │
│ Brief summary text...       │
│ Author • Date • Topic       │
│ [Read More] →               │
└─────────────────────────────┘
```

### Navigation Mega Menu:
```
┌─ Topics ──────────────────────────────────┐
│ Economy        │ Security       │ Global  │
│ • Trade        │ • Defense      │ • Asia  │
│ • Policy       │ • Cyber        │ • Europe│
│ • Markets      │ • Intelligence │ • Africa│
└─────────────────────────────────────────────┘
```

### Expert Directory Card:
```
┌─────────────────────────────┐
│ [Photo] Dr. Jane Smith      │
│         Senior Fellow       │
│         Economic Policy     │
│                             │
│ Bio preview text here...    │
│ [View Profile] [Contact]    │
└─────────────────────────────┘
```

## Interactive Elements

### Button Styles (Observed Patterns):
- **Primary CTA**: Solid background, white text, rounded corners
- **Secondary**: Outline style, colored border, transparent background  
- **Text Links**: Underlined or colored, hover state changes
- **Navigation**: Clean, minimal hover effects

### Form Elements:
- **Search Bars**: Prominent placement, autocomplete functionality
- **Newsletter Signup**: Inline forms with single email field
- **Contact Forms**: Multi-field with clear labels and validation

### Hover States:
- **Subtle Transitions**: 0.2-0.3s ease-in-out
- **Color Changes**: Slight darkening or lightening
- **Shadow Effects**: Gentle elevation for cards and buttons
- **Scale Effects**: Minor scaling (1.02-1.05) for interactive elements

## Mobile-Responsive Patterns

### Breakpoint Strategy:
```css
Mobile: 320px - 768px
Tablet: 768px - 1024px  
Desktop: 1024px+
Large Desktop: 1440px+
```

### Mobile Adaptations:
- **Hamburger Menu**: Collapsible main navigation
- **Stacked Layouts**: Single column content flow
- **Touch-Friendly**: Minimum 44px touch targets
- **Condensed Headers**: Reduced padding and font sizes
- **Simplified Cards**: Vertical layout for content cards

## Accessibility Design Considerations

### Color Contrast Requirements:
- **Normal Text**: 4.5:1 minimum ratio
- **Large Text**: 3:1 minimum ratio (18px+ or 14px+ bold)
- **UI Elements**: 3:1 for buttons, form elements, focus indicators

### Focus States:
- **Visible Outline**: 2px solid outline with contrasting color
- **Skip to Content**: Hidden link for keyboard users
- **Tab Order**: Logical progression through interactive elements

### Typography Accessibility:
- **Font Size**: Minimum 16px for body text
- **Line Spacing**: 1.5x font size minimum
- **Paragraph Spacing**: 2x font size minimum
- **Character Limit**: 45-75 characters per line optimal

## Image and Media Guidelines

### Photography Style:
- **Professional Headshots**: High-quality, consistent lighting
- **Event Photography**: Conference, meeting, and discussion images
- **Stock Photography**: Diverse, authentic, professional imagery
- **Infographics**: Clean, data-driven visualizations

### Image Specifications:
- **Hero Images**: 1920x1080px minimum, optimized for web
- **Card Thumbnails**: 400x225px (16:9 ratio)
- **Profile Photos**: 300x300px minimum, square crop
- **Logo/Graphics**: SVG format preferred for scalability

### Alternative Text Standards:
- **Descriptive**: Convey meaning and context, not just appearance
- **Concise**: Under 125 characters when possible
- **Contextual**: Relevant to surrounding content and purpose
- **Functional**: Describe action for interactive images

## Performance Optimization Patterns

### Loading Strategies:
- **Critical CSS**: Inline above-the-fold styles
- **Lazy Loading**: Images load as they enter viewport
- **Font Loading**: Use font-display: swap for custom fonts
- **Code Splitting**: Load JavaScript modules as needed

### Image Optimization:
- **Modern Formats**: WebP with JPEG fallbacks
- **Responsive Images**: Multiple sizes for different screen densities
- **Compression**: Balanced quality vs. file size
- **CDN Delivery**: Fast global content delivery

## Content Strategy Visual Hierarchy

### Information Prioritization:
1. **Primary Message**: Institution mission and current focus
2. **Latest Research**: Most recent and important publications
3. **Expert Authority**: Researcher credentials and expertise
4. **Topic Organization**: Clear categorical structure
5. **Contact/Engagement**: Ways to connect and follow

### Scanning Patterns (F-Pattern Design):
- **Top Horizontal**: Main navigation and key messaging
- **Left Vertical**: Navigation, topic lists, sidebar content
- **Second Horizontal**: Featured content, calls-to-action
- **Content Flow**: Articles follow inverted pyramid structure

---

*This visual design patterns guide provides specific implementation guidance based on research of leading think tank websites. Use as reference for maintaining consistency with established patterns while implementing CRPG's unique brand identity.*