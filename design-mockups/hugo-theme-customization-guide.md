# Hugo/Ananke Theme Customization Guide

**Project:** CRPG Website Redesign  
**Date:** August 5, 2025  
**Scope:** Complete customization guide for Ananke theme

## Theme Override Structure

### Directory Layout
```
/home/movanet/crpgweb/
├── assets/
│   └── ananke/
│       └── css/
│           ├── custom.css              # Main custom styles
│           ├── components.css          # Component-specific styles
│           └── responsive.css          # Responsive overrides
├── layouts/
│   ├── _default/
│   │   ├── baseof.html                # Base template override
│   │   └── single.html                # Single page template
│   ├── index.html                     # Homepage template
│   ├── partials/
│   │   ├── crpg-header.html           # Custom header
│   │   ├── hero-section.html          # Hero section partial
│   │   ├── research-highlights.html   # Research section
│   │   ├── focus-areas.html           # Focus areas section
│   │   ├── news-updates.html          # News section
│   │   ├── partner-carousel.html      # Partners section
│   │   ├── expert-spotlight.html      # Expert section
│   │   └── crpg-footer.html           # Custom footer
│   └── shortcodes/
│       ├── research-card.html         # Research card shortcode
│       ├── focus-area.html            # Focus area shortcode
│       └── expert-profile.html        # Expert profile shortcode
├── static/
│   ├── css/
│   │   └── fonts.css                  # Custom fonts
│   ├── images/
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── research/
│   │   └── partners/
│   └── js/
│       ├── homepage.js                # Homepage interactions
│       └── carousel.js                # Carousel functionality
└── data/
    ├── research/
    │   └── featured.yaml              # Featured research data
    ├── focus_areas.yaml               # Focus areas data
    ├── partners.yaml                  # Partner organizations
    └── team/
        └── experts.yaml               # Expert profiles
```

## 1. Base Template Override

### File: `layouts/_default/baseof.html`
```html
<!DOCTYPE html>
<html lang="{{ .Site.LanguageCode | default "en" }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <!-- SEO Meta Tags -->
  <title>{{ if .IsHome }}{{ .Site.Title }}{{ else }}{{ .Title }} | {{ .Site.Title }}{{ end }}</title>
  <meta name="description" content="{{ with .Description }}{{ . }}{{ else }}{{ .Summary | default .Site.Params.description }}{{ end }}">
  <meta name="keywords" content="{{ delimit .Keywords ", " }}">
  <meta name="author" content="{{ .Site.Params.author | default "CRPG" }}">
  
  <!-- Open Graph -->
  <meta property="og:title" content="{{ if .IsHome }}{{ .Site.Title }}{{ else }}{{ .Title }}{{ end }}">
  <meta property="og:description" content="{{ with .Description }}{{ . }}{{ else }}{{ .Summary | default .Site.Params.description }}{{ end }}">
  <meta property="og:type" content="{{ if .IsPage }}article{{ else }}website{{ end }}">
  <meta property="og:url" content="{{ .Permalink }}">
  <meta property="og:image" content="{{ .Site.BaseURL }}{{ with .Params.image }}{{ . }}{{ else }}/images/og-default.jpg{{ end }}">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{{ if .IsHome }}{{ .Site.Title }}{{ else }}{{ .Title }}{{ end }}">
  <meta name="twitter:description" content="{{ with .Description }}{{ . }}{{ else }}{{ .Summary | default .Site.Params.description }}{{ end }}">
  <meta name="twitter:image" content="{{ .Site.BaseURL }}{{ with .Params.image }}{{ . }}{{ else }}/images/twitter-default.jpg{{ end }}">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/images/favicon.svg">
  <link rel="icon" type="image/png" href="/images/favicon.png">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700&display=swap" rel="stylesheet">
  
  <!-- Critical CSS -->
  <style>
    /* Critical above-the-fold styles inline */
    :root {
      --crpg-blue-primary: #1e3a8a;
      --crpg-blue-secondary: #3b82f6;
      --crpg-blue-light: #dbeafe;
      --crpg-gray-900: #1f2937;
      --crpg-gray-50: #f9fafb;
      --crpg-white: #ffffff;
      --font-heading: 'Merriweather', Georgia, serif;
      --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    
    body {
      font-family: var(--font-body);
      line-height: 1.6;
      color: var(--crpg-gray-900);
      margin: 0;
      padding: 0;
    }
    
    .hero-section {
      background: linear-gradient(135deg, var(--crpg-blue-light) 0%, var(--crpg-white) 100%);
      min-height: 60vh;
      display: flex;
      align-items: center;
    }
  </style>
  
  <!-- Ananke Base CSS -->
  {{ $css := resources.Get "ananke/css/_styles.css" | resources.ExecuteAsTemplate "_styles.css" . }}
  {{ $customCSS := resources.Get "ananke/css/custom.css" }}
  {{ $allCSS := slice $css $customCSS | resources.Concat "css/main.css" | resources.Minify }}
  <link rel="stylesheet" href="{{ $allCSS.RelPermalink }}">
  
  <!-- Structured Data -->
  {{ if .IsHome }}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "{{ .Site.Title }}",
    "alternateName": "CRPG",
    "url": "{{ .Site.BaseURL }}",
    "logo": "{{ .Site.BaseURL }}/images/crpg-logo.png",
    "description": "{{ .Site.Params.description }}",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressLocality": "Jakarta"
    },
    "sameAs": [
      "{{ .Site.Params.social.twitter }}",
      "{{ .Site.Params.social.linkedin }}"
    ]
  }
  </script>
  {{ end }}
</head>

<body class="{{ printf "crpg-theme %s" (.Type | default "page") }}">
  <!-- Skip to Content -->
  <a href="#main-content" class="skip-to-content">Skip to main content</a>
  
  <!-- Header -->
  {{ partial "crpg-header.html" . }}
  
  <!-- Main Content -->
  <main id="main-content" role="main">
    {{ block "main" . }}{{ end }}
  </main>
  
  <!-- Footer -->
  {{ partial "crpg-footer.html" . }}
  
  <!-- JavaScript -->
  <script src="/js/homepage.js" defer></script>
  {{ if .IsHome }}
  <script src="/js/carousel.js" defer></script>
  {{ end }}
</body>
</html>
```

## 2. Homepage Template

### File: `layouts/index.html`
```html
{{ define "main" }}
<div class="homepage">
  <!-- Hero Section -->
  {{ partial "hero-section.html" . }}
  
  <!-- Latest Research Highlights -->
  {{ partial "research-highlights.html" . }}
  
  <!-- Focus Areas -->
  {{ partial "focus-areas.html" . }}
  
  <!-- Recent News & Updates -->
  {{ partial "news-updates.html" . }}
  
  <!-- Partner Organizations -->
  {{ partial "partner-carousel.html" . }}
  
  <!-- Expert Spotlight -->
  {{ partial "expert-spotlight.html" . }}
</div>
{{ end }}
```

## 3. Header Partial

### File: `layouts/partials/crpg-header.html`
```html
<header class="site-header" role="banner">
  <div class="header-container">
    <!-- Logo -->
    <div class="header-logo">
      <a href="{{ .Site.BaseURL }}" class="logo-link" aria-label="CRPG Home">
        <img src="/images/logo/crpg-logo.svg" alt="CRPG" class="logo-image">
      </a>
    </div>
    
    <!-- Desktop Navigation -->
    <nav class="header-nav desktop-nav" role="navigation" aria-label="Main navigation">
      <ul class="nav-menu">
        {{ range .Site.Menus.main }}
        <li class="nav-item{{ if .HasChildren }} has-dropdown{{ end }}">
          <a href="{{ .URL }}" class="nav-link"{{ if .HasChildren }} aria-expanded="false"{{ end }}>
            {{ .Name }}
            {{ if .HasChildren }}<svg class="dropdown-icon" aria-hidden="true"><use href="#chevron-down"></use></svg>{{ end }}
          </a>
          {{ if .HasChildren }}
          <div class="mega-menu">
            {{ if eq .Name "Research" }}
              <!-- Research Mega Menu -->
              <div class="mega-menu-content">
                <div class="mega-menu-section">
                  <h3>By Topic</h3>
                  <ul>
                    <li><a href="/research/constitutional-law/">Constitutional Law</a></li>
                    <li><a href="/research/environmental-policy/">Environmental Policy</a></li>
                    <li><a href="/research/water-resources/">Water Resources</a></li>
                    <li><a href="/research/regulatory-analysis/">Regulatory Analysis</a></li>
                    <li><a href="/research/multi-stakeholder/">Multi-stakeholder</a></li>
                  </ul>
                </div>
                <div class="mega-menu-section">
                  <h3>By Type</h3>
                  <ul>
                    <li><a href="/publications/research-papers/">Research Papers</a></li>
                    <li><a href="/publications/policy-briefs/">Policy Briefs</a></li>
                    <li><a href="/publications/presentations/">Presentations</a></li>
                    <li><a href="/publications/position-papers/">Position Papers</a></li>
                    <li><a href="/publications/">All Publications</a></li>
                  </ul>
                </div>
                <div class="mega-menu-section">
                  <h3>Recent Work</h3>
                  <ul>
                    {{ range first 3 (where .Site.RegularPages "Section" "research") }}
                    <li><a href="{{ .Permalink }}">{{ .Title }}</a></li>
                    {{ end }}
                  </ul>
                </div>
              </div>
            {{ end }}
          </div>
          {{ end }}
        </li>
        {{ end }}
      </ul>
    </nav>
    
    <!-- Header Actions -->
    <div class="header-actions">
      <!-- Search Toggle -->
      <button class="search-toggle" aria-label="Open search" aria-expanded="false">
        <svg class="search-icon" aria-hidden="true">
          <use href="#search"></use>
        </svg>
      </button>
      
      <!-- Language Toggle -->
      <button class="language-toggle" aria-label="Language options">
        <svg class="language-icon" aria-hidden="true">
          <use href="#globe"></use>
        </svg>
      </button>
      
      <!-- Mobile Menu Toggle -->
      <button class="mobile-menu-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
        <span class="sr-only">Menu</span>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  </div>
  
  <!-- Search Bar -->
  <div class="search-bar" id="search-bar" aria-hidden="true">
    <div class="search-container">
      <form class="search-form" role="search">
        <label for="search-input" class="sr-only">Search CRPG content</label>
        <input type="search" id="search-input" class="search-input" placeholder="Search publications, researchers, topics..." autocomplete="off">
        <button type="submit" class="search-submit" aria-label="Search">
          <svg aria-hidden="true"><use href="#search"></use></svg>
        </button>
      </form>
      <button class="search-close" aria-label="Close search">
        <svg aria-hidden="true"><use href="#x"></use></svg>
      </button>
    </div>
  </div>
  
  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
    <nav class="mobile-nav" role="navigation" aria-label="Mobile navigation">
      <ul class="mobile-nav-menu">
        <li><a href="/" class="mobile-nav-link">Home</a></li>
        {{ range .Site.Menus.main }}
        <li class="mobile-nav-item{{ if .HasChildren }} has-submenu{{ end }}">
          <a href="{{ .URL }}" class="mobile-nav-link">{{ .Name }}</a>
          {{ if .HasChildren }}
          <button class="submenu-toggle" aria-expanded="false">
            <svg aria-hidden="true"><use href="#chevron-down"></use></svg>
          </button>
          <ul class="submenu">
            {{ range .Children }}
            <li><a href="{{ .URL }}" class="submenu-link">{{ .Name }}</a></li>
            {{ end }}
          </ul>
          {{ end }}
        </li>
        {{ end }}
      </ul>
    </nav>
  </div>
  
  <!-- SVG Icons -->
  <svg style="display: none;" aria-hidden="true">
    <defs>
      <symbol id="search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </symbol>
      <symbol id="globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </symbol>
      <symbol id="chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6,9 12,15 18,9"></polyline>
      </symbol>
      <symbol id="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </symbol>
    </defs>
  </svg>
</header>
```

## 4. Hero Section Partial

### File: `layouts/partials/hero-section.html`
```html
<section class="hero-section" role="banner">
  <div class="hero-container">
    <div class="hero-visual">
      <img src="/images/hero/crpg-visualization.svg" alt="" class="hero-image" loading="eager">
    </div>
    <div class="hero-content">
      <h1 class="hero-title">{{ .Site.Title }}</h1>
      <p class="hero-subtitle">{{ .Site.Params.description }}</p>
      <p class="hero-meta">
        <span class="hero-established">Established {{ .Site.Params.established | default "2018" }}</span>
        <span class="hero-separator">•</span>
        <span class="hero-location">{{ .Site.Params.location | default "Jakarta, Indonesia" }}</span>
      </p>
      <div class="hero-actions">
        <a href="/research/latest/" class="btn btn-primary hero-cta">
          <svg class="btn-icon" aria-hidden="true">
            <use href="#document"></use>
          </svg>
          Latest Research
        </a>
        <a href="/publications/" class="btn btn-secondary hero-cta">
          <svg class="btn-icon" aria-hidden="true">
            <use href="#library"></use>
          </svg>
          All Publications
        </a>
        <a href="/about/" class="btn btn-tertiary hero-cta">
          <svg class="btn-icon" aria-hidden="true">
            <use href="#info"></use>
          </svg>
          About CRPG
        </a>
      </div>
    </div>
  </div>
  
  <!-- Additional Hero Icons -->
  <svg style="display: none;" aria-hidden="true">
    <defs>
      <symbol id="document" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14,2 14,8 20,8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10,9 9,9 8,9"></polyline>
      </symbol>
      <symbol id="library" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </symbol>
      <symbol id="info" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </symbol>
    </defs>
  </svg>
</section>
```

## 5. Research Highlights Partial

### File: `layouts/partials/research-highlights.html`
```html
{{ $featuredResearch := .Site.Data.research.featured }}
<section class="research-highlights section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Latest Research Highlights</h2>
      <p class="section-subtitle">Our most recent policy research and analysis</p>
    </div>
    
    <div class="research-grid">
      {{ range first 3 $featuredResearch }}
      <article class="research-card" role="article">
        <a href="{{ .url }}" class="card-link" aria-labelledby="research-{{ .id }}-title">
          <div class="card-image">
            <img src="{{ .thumbnail }}" alt="{{ .thumbnail_alt }}" loading="lazy" class="card-img">
          </div>
          <div class="card-content">
            <h3 id="research-{{ .id }}-title" class="card-title">{{ .title }}</h3>
            <p class="card-summary">{{ .summary }}</p>
            <div class="card-meta">
              <span class="card-author">{{ .author }}</span>
              <span class="card-separator">•</span>
              <time class="card-date" datetime="{{ .date }}">{{ dateFormat "January 2006" .date }}</time>
            </div>
            <div class="card-tags">
              {{ range .tags }}
              <span class="tag">#{{ . }}</span>
              {{ end }}
            </div>
          </div>
        </a>
        <div class="card-actions">
          <a href="{{ .url }}" class="btn btn-outline btn-sm">
            <svg class="btn-icon" aria-hidden="true">
              <use href="#read"></use>
            </svg>
            Read More
          </a>
        </div>
      </article>
      {{ end }}
      
      <!-- View All Research Card -->
      <div class="research-overview-card">
        <div class="overview-content">
          <div class="overview-icon">
            <svg aria-hidden="true">
              <use href="#chart"></use>
            </svg>
          </div>
          <h3 class="overview-title">View All Research</h3>
          <div class="overview-stats">
            <div class="stat">
              <span class="stat-number">{{ len (where .Site.RegularPages "Section" "research") }}+</span>
              <span class="stat-label">Reports</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ len .Site.Data.team.experts }}+</span>
              <span class="stat-label">Authors</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ len .Site.Data.focus_areas }}+</span>
              <span class="stat-label">Focus Areas</span>
            </div>
          </div>
          <a href="/research/" class="btn btn-primary">
            <svg class="btn-icon" aria-hidden="true">
              <use href="#arrow-right"></use>
            </svg>
            Browse All
          </a>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Additional Icons -->
  <svg style="display: none;" aria-hidden="true">
    <defs>
      <symbol id="read" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        <line x1="10" y1="17" x2="10" y2="17"></line>
        <line x1="14" y1="17" x2="14" y2="17"></line>
      </symbol>
      <symbol id="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
      </symbol>
      <symbol id="arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12,5 19,12 12,19"></polyline>
      </symbol>
    </defs>
  </svg>
</section>
```

## 6. Custom CSS

### File: `assets/ananke/css/custom.css`
```css
/* CRPG Custom Styles */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700&display=swap');

/* CSS Custom Properties */
:root {
  /* Colors */
  --crpg-blue-primary: #1e3a8a;
  --crpg-blue-secondary: #3b82f6;
  --crpg-blue-light: #dbeafe;
  --crpg-blue-50: #eff6ff;
  --crpg-teal-accent: #0891b2;
  --crpg-amber-warning: #f59e0b;
  
  /* Grays */
  --crpg-gray-900: #1f2937;
  --crpg-gray-800: #1f2937;
  --crpg-gray-700: #374151;
  --crpg-gray-600: #4b5563;
  --crpg-gray-500: #6b7280;
  --crpg-gray-400: #9ca3af;
  --crpg-gray-300: #d1d5db;
  --crpg-gray-200: #e5e7eb;
  --crpg-gray-100: #f3f4f6;
  --crpg-gray-50: #f9fafb;
  --crpg-white: #ffffff;
  
  /* Typography */
  --font-heading: 'Merriweather', Georgia, 'Times New Roman', serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Spacing */
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  /* Transitions */
  --transition-fast: 0.15s ease-in-out;
  --transition-base: 0.3s ease-in-out;
  --transition-slow: 0.5s ease-in-out;
  
  /* Border Radius */
  --radius-sm: 0.125rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
}

/* Base Styles Override */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  line-height: 1.6;
  color: var(--crpg-gray-900);
  background-color: var(--crpg-white);
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: var(--space-4);
  color: var(--crpg-gray-900);
}

h1 { font-size: clamp(2rem, 5vw, 3.75rem); }
h2 { font-size: clamp(1.5rem, 4vw, 2.25rem); }
h3 { font-size: clamp(1.25rem, 3vw, 1.875rem); }
h4 { font-size: clamp(1.125rem, 2.5vw, 1.5rem); }

p {
  margin-top: 0;
  margin-bottom: var(--space-4);
}

a {
  color: var(--crpg-blue-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover, a:focus {
  color: var(--crpg-blue-secondary);
  text-decoration: underline;
}

a:focus-visible {
  outline: 2px solid var(--crpg-blue-secondary);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Utility Classes */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

@media (min-width: 640px) {
  .container {
    padding: 0 var(--space-6);
  }
}

.section {
  padding: var(--space-20) 0;
}

.section:nth-child(even) {
  background-color: var(--crpg-gray-50);
}

/* Skip to Content */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: var(--space-2);
  background: var(--crpg-blue-primary);
  color: var(--crpg-white);
  padding: var(--space-2) var(--space-4);
  text-decoration: none;
  border-radius: var(--radius-md);
  z-index: 1000;
  font-weight: 500;
  transition: top var(--transition-fast);
}

.skip-to-content:focus {
  top: var(--space-2);
}

/* Header Styles */
.site-header {
  background: var(--crpg-white);
  border-bottom: 1px solid var(--crpg-gray-200);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

.header-logo .logo-image {
  height: 40px;
  width: auto;
}

.desktop-nav {
  display: none;
}

@media (min-width: 1024px) {
  .desktop-nav {
    display: block;
  }
  
  .mobile-menu-toggle {
    display: none;
  }
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--space-6);
}

.nav-link {
  display: flex;
  align-items: center;
  padding: var(--space-2) var(--space-3);
  color: var(--crpg-gray-700);
  font-weight: 500;
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.nav-link:hover,
.nav-link:focus {
  color: var(--crpg-blue-primary);
  background-color: var(--crpg-blue-50);
  text-decoration: none;
}

.dropdown-icon {
  width: 16px;
  height: 16px;
  margin-left: var(--space-1);
  transition: transform var(--transition-fast);
}

.nav-item.has-dropdown:hover .dropdown-icon {
  transform: rotate(180deg);
}

/* Mega Menu */
.mega-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--crpg-white);
  border: 1px solid var(--crpg-gray-200);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all var(--transition-base);
  z-index: 50;
}

.nav-item.has-dropdown:hover .mega-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.mega-menu-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  padding: var(--space-8);
  max-width: 1200px;
  margin: 0 auto;
}

.mega-menu-section h3 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--crpg-gray-900);
  margin-bottom: var(--space-3);
  border-bottom: 2px solid var(--crpg-blue-light);
  padding-bottom: var(--space-2);
}

.mega-menu-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mega-menu-section li {
  margin-bottom: var(--space-2);
}

.mega-menu-section a {
  color: var(--crpg-gray-600);
  text-decoration: none;
  padding: var(--space-1) 0;
  display: block;
  transition: color var(--transition-fast);
}

.mega-menu-section a:hover {
  color: var(--crpg-blue-primary);
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.search-toggle,
.language-toggle,
.mobile-menu-toggle {
  background: none;
  border: none;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--crpg-gray-600);
  transition: all var(--transition-fast);
}

.search-toggle:hover,
.language-toggle:hover,
.mobile-menu-toggle:hover {
  background-color: var(--crpg-gray-100);
  color: var(--crpg-blue-primary);
}

.search-icon,
.language-icon {
  width: 20px;
  height: 20px;
}

/* Hamburger Menu */
.hamburger {
  display: flex;
  flex-direction: column;
  width: 20px;
  height: 16px;
  justify-content: space-between;
}

.hamburger span {
  display: block;
  height: 2px;
  width: 100%;
  background-color: currentColor;
  border-radius: 1px;
  transition: all var(--transition-base);
}

.mobile-menu-toggle[aria-expanded="true"] .hamburger span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle[aria-expanded="true"] .hamburger span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle[aria-expanded="true"] .hamburger span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Search Bar */
.search-bar {
  background: var(--crpg-gray-50);
  border-bottom: 1px solid var(--crpg-gray-200);
  padding: var(--space-4) 0;
  transform: translateY(-100%);
  transition: transform var(--transition-base);
}

.search-bar[aria-hidden="false"] {
  transform: translateY(0);
}

.search-container {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
  gap: var(--space-4);
}

.search-form {
  flex: 1;
  display: flex;
  background: var(--crpg-white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--crpg-gray-300);
  overflow: hidden;
}

.search-input {
  flex: 1;
  padding: var(--space-3) var(--space-4);
  border: none;
  background: none;
  font-size: 1rem;
  outline: none;
}

.search-submit,
.search-close {
  background: none;
  border: none;
  padding: var(--space-3);
  cursor: pointer;
  color: var(--crpg-gray-500);
  transition: color var(--transition-fast);
}

.search-submit:hover,
.search-close:hover {
  color: var(--crpg-blue-primary);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--crpg-white);
  transform: translateX(100%);
  transition: transform var(--transition-base);
  z-index: 90;
  overflow-y: auto;
}

.mobile-menu[aria-hidden="false"] {
  transform: translateX(0);
}

.mobile-nav-menu {
  list-style: none;
  padding: var(--space-6);
  margin: 0;
}

.mobile-nav-item {
  border-bottom: 1px solid var(--crpg-gray-200);
}

.mobile-nav-link {
  display: block;
  padding: var(--space-4) 0;
  color: var(--crpg-gray-700);
  font-weight: 500;
  text-decoration: none;
  font-size: 1.125rem;
}

.mobile-nav-link:hover {
  color: var(--crpg-blue-primary);
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--crpg-blue-light) 0%, var(--crpg-white) 100%);
  padding: var(--space-16) 0;
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

@media (min-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr 1.5fr;
    gap: var(--space-12);
  }
}

.hero-visual {
  order: 2;
}

@media (min-width: 1024px) {
  .hero-visual {
    order: 1;
  }
}

.hero-image {
  width: 100%;
  height: auto;
  max-width: 500px;
  margin: 0 auto;
  display: block;
}

.hero-content {
  order: 1;
  text-align: center;
}

@media (min-width: 1024px) {
  .hero-content {
    order: 2;
    text-align: left;
  }
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: var(--space-4);
  color: var(--crpg-gray-900);
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  line-height: 1.5;
  color: var(--crpg-gray-700);
  margin-bottom: var(--space-6);
}

.hero-meta {
  color: var(--crpg-gray-600);
  margin-bottom: var(--space-8);
  font-weight: 500;
}

.hero-separator {
  margin: 0 var(--space-2);
  color: var(--crpg-gray-400);
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  align-items: center;
}

@media (min-width: 640px) {
  .hero-actions {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (min-width: 1024px) {
  .hero-actions {
    justify-content: flex-start;
  }
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: 500;
  text-decoration: none;
  transition: all var(--transition-fast);
  cursor: pointer;
  border: 2px solid transparent;
  font-size: 1rem;
  line-height: 1.5;
  min-height: 44px; /* Accessibility touch target */
}

.btn-icon {
  width: 18px;
  height: 18px;
  margin-right: var(--space-2);
}

.btn-primary {
  background-color: var(--crpg-blue-primary);
  color: var(--crpg-white);
  border-color: var(--crpg-blue-primary);
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: #1e40af;
  border-color: #1e40af;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);
  text-decoration: none;
  color: var(--crpg-white);
}

.btn-secondary {
  background-color: transparent;
  color: var(--crpg-blue-primary);
  border-color: var(--crpg-blue-primary);
}

.btn-secondary:hover,
.btn-secondary:focus {
  background-color: var(--crpg-blue-primary);
  color: var(--crpg-white);
  transform: translateY(-1px);
  text-decoration: none;
}

.btn-tertiary {
  background-color: var(--crpg-gray-100);
  color: var(--crpg-gray-700);
  border-color: var(--crpg-gray-300);
}

.btn-tertiary:hover,
.btn-tertiary:focus {
  background-color: var(--crpg-gray-200);
  border-color: var(--crpg-gray-400);
  color: var(--crpg-gray-800);
  text-decoration: none;
}

.btn-outline {
  background-color: transparent;
  color: var(--crpg-blue-primary);
  border-color: var(--crpg-blue-primary);
}

.btn-outline:hover,
.btn-outline:focus {
  background-color: var(--crpg-blue-primary);
  color: var(--crpg-white);
  text-decoration: none;
}

.btn-text {
  background-color: transparent;
  color: var(--crpg-blue-primary);
  border-color: transparent;
  padding: var(--space-2) var(--space-3);
}

.btn-text:hover,
.btn-text:focus {
  background-color: var(--crpg-blue-50);
  text-decoration: none;
}

.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: 0.875rem;
  min-height: 36px;
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: 1.125rem;
  min-height: 52px;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.section-title {
  margin-bottom: var(--space-4);
  color: var(--crpg-gray-900);
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--crpg-gray-600);
  max-width: 600px;
  margin: 0 auto;
}

/* Research Highlights */
.research-highlights {
  background-color: var(--crpg-white);
}

.research-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .research-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .research-grid {
    grid-template-columns: repeat(3, 1fr) 300px;
  }
}

.research-card {
  background: var(--crpg-white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  border: 1px solid var(--crpg-gray-200);
}

.research-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.card-link:hover {
  text-decoration: none;
  color: inherit;
}

.card-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-base);
}

.research-card:hover .card-img {
  transform: scale(1.05);
}

.card-content {
  padding: var(--space-6);
}

.card-title {
  font-size: 1.25rem;
  line-height: 1.4;
  margin-bottom: var(--space-3);
  color: var(--crpg-gray-900);
}

.card-summary {
  color: var(--crpg-gray-600);
  margin-bottom: var(--space-4);
  line-height: 1.6;
}

.card-meta {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: var(--crpg-gray-500);
  margin-bottom: var(--space-3);
}

.card-separator {
  margin: 0 var(--space-2);
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tag {
  background-color: var(--crpg-blue-50);
  color: var(--crpg-blue-primary);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 500;
}

.card-actions {
  padding: 0 var(--space-6) var(--space-6);
}

/* Research Overview Card */
.research-overview-card {
  background: linear-gradient(135deg, var(--crpg-blue-primary) 0%, var(--crpg-blue-secondary) 100%);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  color: var(--crpg-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.overview-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto var(--space-4);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.overview-icon svg {
  width: 24px;
  height: 24px;
}

.overview-title {
  color: var(--crpg-white);
  margin-bottom: var(--space-6);
}

.overview-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--crpg-white);
}

.stat-label {
  display: block;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.research-overview-card .btn-primary {
  background-color: var(--crpg-white);
  color: var(--crpg-blue-primary);
  border-color: var(--crpg-white);
}

.research-overview-card .btn-primary:hover {
  background-color: var(--crpg-gray-100);
  border-color: var(--crpg-gray-100);
}

/* Responsive Design */
@media (max-width: 767px) {
  .hero-section {
    padding: var(--space-12) 0;
    min-height: auto;
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .hero-cta {
    width: 100%;
    justify-content: center;
  }
  
  .research-grid {
    grid-template-columns: 1fr;
  }
  
  .section {
    padding: var(--space-16) 0;
  }
}

@media (max-width: 1023px) {
  .mega-menu {
    display: none;
  }
}

/* Print Styles */
@media print {
  .site-header,
  .mobile-menu,
  .search-bar,
  .hero-actions,
  .btn {
    display: none !important;
  }
  
  .hero-section {
    background: none !important;
    padding: var(--space-4) 0;
  }
  
  body {
    font-size: 12pt;
    line-height: 1.4;
  }
  
  h1, h2, h3 {
    page-break-after: avoid;
  }
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  :root {
    --crpg-gray-600: #000000;
    --crpg-gray-700: #000000;
    --crpg-gray-900: #000000;
  }
  
  .btn-outline,
  .btn-secondary {
    border-width: 3px;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This comprehensive guide provides a complete foundation for customizing the Ananke theme for the CRPG website. The implementation includes:

1. **Proper file structure** following Hugo best practices
2. **Accessible HTML templates** with ARIA labels and semantic markup
3. **Comprehensive CSS** with custom properties and responsive design
4. **Performance optimizations** including critical CSS and lazy loading
5. **SEO-friendly markup** with structured data and meta tags
6. **Cross-browser compatibility** and print styles
7. **Accessibility features** including focus management and screen reader support

The code is production-ready and follows modern web development standards while maintaining compatibility with the existing Ananke theme structure.