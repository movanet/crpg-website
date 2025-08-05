# Data Structures and Content Examples

**Project:** CRPG Website Redesign  
**Date:** August 5, 2025  
**Scope:** Data file structures and content examples for Hugo implementation

## Data File Structure

### File: `data/research/featured.yaml`
```yaml
# Featured Research for Homepage
featured_research:
  - id: "water-governance-2025"
    title: "Water Governance Framework for Indonesia 2025"
    summary: "A comprehensive analysis of multi-stakeholder governance approaches for sustainable water resource management in Indonesia's rapidly urbanizing regions."
    url: "/research/water-governance-framework-2025/"
    thumbnail: "/images/research/water-governance-2025-thumb.jpg"
    thumbnail_alt: "Aerial view of Indonesian river system with urban development"
    author: "Dr. Mohamad Mova Al'Afghani"
    date: "2025-03-15"
    tags: ["water-policy", "governance", "sustainability"]
    featured: true
    category: "policy-brief"
    
  - id: "constitutional-reform-2025"
    title: "Constitutional Reform and Democratic Strengthening"
    summary: "An evidence-based assessment of constitutional amendment processes and their impact on democratic institutions in Southeast Asian contexts."
    url: "/research/constitutional-reform-democratic-strengthening/"
    thumbnail: "/images/research/constitutional-reform-2025-thumb.jpg"
    thumbnail_alt: "Indonesian Parliament building with constitutional documents"
    author: "Dr. Lina Rospita Sari"
    date: "2025-02-28"
    tags: ["constitutional-law", "democracy", "institutions"]
    featured: true
    category: "research-paper"
    
  - id: "environmental-policy-assessment"
    title: "Environmental Policy Impact Assessment 2024"
    summary: "Evaluating the effectiveness of Indonesia's environmental protection policies through quantitative analysis and stakeholder engagement methodologies."
    url: "/research/environmental-policy-impact-assessment-2024/"
    thumbnail: "/images/research/environmental-policy-2024-thumb.jpg"
    thumbnail_alt: "Indonesian forest landscape with policy implementation graphics"
    author: "Dr. Andi Mariyasa Septiari"
    date: "2025-01-20"
    tags: ["environmental-policy", "impact-assessment", "climate-change"]
    featured: true
    category: "research-paper"
    
  - id: "regulatory-analysis-framework"
    title: "Evidence-Based Regulatory Analysis Framework"
    summary: "Developing systematic approaches for regulatory impact assessment in Indonesian policy contexts with focus on stakeholder engagement and data-driven decision making."
    url: "/research/regulatory-analysis-framework/"
    thumbnail: "/images/research/regulatory-framework-thumb.jpg"
    thumbnail_alt: "Regulatory documents and data visualization charts"
    author: "Dr. Feril Hariat"
    date: "2024-12-15"
    tags: ["regulatory-analysis", "policy-framework", "evidence-based"]
    featured: true
    category: "working-paper"
```

### File: `data/focus_areas.yaml`
```yaml
# CRPG Focus Areas
focus_areas:
  - id: "constitutional-law"
    title: "Constitutional Law & Governance"
    short_title: "Constitutional Law"
    description: "Strengthening democratic institutions and governance frameworks through constitutional analysis and reform recommendations."
    detailed_description: |
      Our constitutional law research focuses on analyzing the effectiveness of democratic institutions, 
      constitutional reform processes, and governance frameworks. We examine how constitutional provisions 
      translate into practical governance outcomes and provide evidence-based recommendations for institutional 
      strengthening.
    icon: "balance-scale"
    color: "#1e3a8a"
    url: "/research/constitutional-law/"
    research_count: 25
    recent_publications:
      - "Constitutional Reform and Democratic Strengthening"
      - "Judicial Review Mechanisms in Indonesia"
      - "Parliamentary Oversight and Accountability"
    key_researchers:
      - "Dr. Mohamad Mova Al'Afghani"
      - "Dr. Lina Rospita Sari"
    
  - id: "environmental-policy"
    title: "Environmental Policy & Climate Change"
    short_title: "Environmental Policy"
    description: "Climate change adaptation and mitigation strategies through evidence-based environmental policy analysis."
    detailed_description: |
      We conduct comprehensive research on environmental policy effectiveness, climate change impacts, 
      and sustainable development strategies. Our work includes policy impact assessments, stakeholder 
      engagement analysis, and recommendations for climate adaptation and mitigation policies.
    icon: "leaf"
    color: "#059669"
    url: "/research/environmental-policy/"
    research_count: 32
    recent_publications:
      - "Environmental Policy Impact Assessment 2024"
      - "Climate Adaptation Strategies for Indonesian Cities"
      - "Biodiversity Conservation Policy Framework"
    key_researchers:
      - "Dr. Andi Mariyasa Septiari"
      - "Dr. Dyah Paramita"
    
  - id: "water-resources"
    title: "Water Resources Management"
    short_title: "Water Resources"
    description: "Sustainable water governance solutions and policy frameworks for resource management."
    detailed_description: |
      Our water resources research addresses governance challenges in water management, sustainable 
      usage policies, and multi-stakeholder coordination mechanisms. We focus on evidence-based 
      approaches to water resource planning and management in both urban and rural contexts.
    icon: "droplet"
    color: "#0891b2"
    url: "/research/water-resources/"
    research_count: 18
    recent_publications:
      - "Water Governance Framework for Indonesia 2025"
      - "Urban Water Management Policy Analysis"
      - "Rural Water Access and Governance"
    key_researchers:
      - "Dr. Mohamad Mova Al'Afghani"
      - "Dr. Mulia Nurhasan"
    
  - id: "regulatory-analysis"
    title: "Regulatory Analysis"
    short_title: "Regulatory Analysis"
    description: "Evidence-based regulatory frameworks for sustainable development and good governance."
    detailed_description: |
      We develop systematic approaches for regulatory impact assessment, stakeholder engagement in 
      regulatory processes, and evidence-based policy development. Our research supports government 
      agencies in creating more effective and efficient regulatory frameworks.
    icon: "chart-bar"
    color: "#7c3aed"
    url: "/research/regulatory-analysis/"
    research_count: 28
    recent_publications:
      - "Evidence-Based Regulatory Analysis Framework"
      - "Regulatory Impact Assessment Methodologies"
      - "Stakeholder Engagement in Regulatory Processes"
    key_researchers:
      - "Dr. Feril Hariat"
      - "Dr. Jibriel Avessina"
    
  - id: "multi-stakeholder"
    title: "Multi-stakeholder Engagement"
    short_title: "Multi-stakeholder"
    description: "Facilitating inclusive policy development processes through multi-stakeholder collaboration."
    detailed_description: |
      Our multi-stakeholder engagement research focuses on developing effective collaboration mechanisms 
      between government, civil society, private sector, and academic institutions. We study and promote 
      inclusive approaches to policy development and implementation.
    icon: "users"
    color: "#dc2626"
    url: "/research/multi-stakeholder/"
    research_count: 22
    recent_publications:
      - "Multi-stakeholder Governance Models"
      - "Civil Society Participation in Policy Making"
      - "Public-Private Partnership Frameworks"
    key_researchers:
      - "Dr. Richo Wibowo"
      - "Dr. Nishrin Ismail"
```

### File: `data/partners.yaml`
```yaml
# Partner Organizations
partners:
  international:
    - name: "World Wildlife Fund Indonesia"
      short_name: "WWF Indonesia"
      logo: "/images/partners/wwf-indonesia.svg"
      url: "https://www.wwf.id/"
      description: "Environmental conservation and sustainable development partnership"
      partnership_type: "Research Collaboration"
      active_since: "2019"
      joint_projects:
        - "Environmental Policy Impact Assessment"
        - "Biodiversity Conservation Framework"
      
    - name: "UN-Habitat Indonesia"
      short_name: "UN-Habitat"
      logo: "/images/partners/un-habitat.svg"
      url: "https://unhabitat.org/indonesia"
      description: "Urban development and governance research partnership"
      partnership_type: "Technical Assistance"
      active_since: "2020"
      joint_projects:
        - "Urban Water Management Policy"
        - "Sustainable Cities Initiative"
      
    - name: "World Bank Group"
      short_name: "World Bank"
      logo: "/images/partners/world-bank.svg"
      url: "https://www.worldbank.org/en/country/indonesia"
      description: "Development finance and policy research collaboration"
      partnership_type: "Research & Advisory"
      active_since: "2018"
      joint_projects:
        - "Regulatory Analysis Framework"
        - "Governance Indicators Study"
      
    - name: "Ford Foundation"
      short_name: "Ford Foundation"
      logo: "/images/partners/ford-foundation.svg"
      url: "https://www.fordfoundation.org/"
      description: "Social justice and democratic governance research support"
      partnership_type: "Grant Partnership"
      active_since: "2019"
      joint_projects:
        - "Constitutional Reform Analysis"
        - "Civil Society Engagement Study"
  
  national:
    - name: "Government of Jakarta"
      short_name: "Jakarta Government"
      logo: "/images/partners/jakarta-government.svg"
      url: "https://jakarta.go.id/"
      description: "Urban governance and policy implementation research"
      partnership_type: "Government Partnership"
      active_since: "2018"
      joint_projects:
        - "Urban Water Governance"
        - "Jakarta Smart City Policy"
      
    - name: "Ministry of Environment and Forestry"
      short_name: "KLHK"
      logo: "/images/partners/klhk.svg"
      url: "https://www.menlhk.go.id/"
      description: "Environmental policy development and implementation"
      partnership_type: "Government Advisory"
      active_since: "2017"
      joint_projects:
        - "Environmental Impact Assessment Framework"
        - "Climate Policy Implementation"
      
    - name: "University of Indonesia"
      short_name: "UI"
      logo: "/images/partners/university-indonesia.svg"
      url: "https://www.ui.ac.id/"
      description: "Academic research collaboration and student exchange"
      partnership_type: "Academic Partnership"
      active_since: "2018"
      joint_projects:
        - "Constitutional Law Research Program"
        - "Graduate Student Research Initiative"
      
    - name: "Universitas Gadjah Mada"
      short_name: "UGM"
      logo: "/images/partners/ugm.svg"
      url: "https://ugm.ac.id/"
      description: "Policy research and academic collaboration"
      partnership_type: "Academic Partnership"
      active_since: "2019"
      joint_projects:
        - "Rural Governance Study"
        - "Policy Analysis Training Program"
```

### File: `data/team/experts.yaml`
```yaml
# Expert Team Members
experts:
  - id: "mova-alafghani"
    name: "Dr. Mohamad Mova Al'Afghani"
    title: "Director & Senior Fellow"
    photo: "/images/team/mova-alafghani.jpg"
    bio_short: "Constitutional law expert with 15+ years experience in governance research and policy analysis."
    bio_full: |
      Dr. Mohamad Mova Al'Afghani is the Director and a Senior Fellow at CRPG. He holds a Ph.D. in 
      Constitutional Law from the University of Indonesia and has over 15 years of experience in 
      governance research, policy analysis, and institutional development. His research focuses on 
      constitutional reform, democratic institutions, and water governance frameworks.
    expertise:
      - "Constitutional Law"
      - "Democratic Governance"
      - "Water Policy"
      - "Institutional Analysis"
    education:
      - degree: "Ph.D. in Constitutional Law"
        institution: "University of Indonesia"
        year: "2010"
      - degree: "LL.M. in Public Law"
        institution: "University of Indonesia"
        year: "2005"
      - degree: "LL.B. in Law"
        institution: "University of Indonesia"
        year: "2003"
    contact:
      email: "mova@crpg.info"
      linkedin: "https://linkedin.com/in/mova-alafghani"
      twitter: "@mova_alafghani"
    recent_publications:
      - title: "Water Governance Framework for Indonesia 2025"
        url: "/research/water-governance-framework-2025/"
        date: "2025-03-15"
      - title: "Constitutional Reform and Democratic Strengthening"
        url: "/research/constitutional-reform-democratic-strengthening/"
        date: "2024-11-20"
    featured_quote: "Our research demonstrates that effective governance requires both strong institutions and meaningful multi-stakeholder engagement. Indonesia's sustainable development goals can only be achieved through evidence-based policy frameworks."
    languages: ["Indonesian", "English", "Arabic"]
    
  - id: "lina-rospita"
    name: "Dr. Lina Rospita Sari"
    title: "Senior Fellow"
    photo: "/images/team/lina-rospita.jpg"
    bio_short: "Expert in constitutional law and judicial systems with focus on democratic institution strengthening."
    bio_full: |
      Dr. Lina Rospita Sari is a Senior Fellow at CRPG specializing in constitutional law, judicial 
      reform, and democratic institutions. She has extensive experience in comparative constitutional 
      analysis and has advised government agencies on judicial system improvements and constitutional 
      reform processes.
    expertise:
      - "Constitutional Law"
      - "Judicial Systems"
      - "Democratic Institutions"
      - "Comparative Law"
    education:
      - degree: "Ph.D. in Constitutional Law"
        institution: "Universitas Gadjah Mada"
        year: "2012"
      - degree: "LL.M. in Constitutional Law"
        institution: "Universitas Gadjah Mada"
        year: "2008"
    contact:
      email: "lina@crpg.info"
      linkedin: "https://linkedin.com/in/lina-rospita"
    recent_publications:
      - title: "Constitutional Reform and Democratic Strengthening"
        url: "/research/constitutional-reform-democratic-strengthening/"
        date: "2025-02-28"
      - title: "Judicial Review Mechanisms in Indonesia"
        url: "/research/judicial-review-mechanisms/"
        date: "2024-12-10"
    languages: ["Indonesian", "English"]
    
  - id: "andi-septiari"
    name: "Dr. Andi Mariyasa Septiari"
    title: "Senior Fellow"
    photo: "/images/team/andi-septiari.jpg"
    bio_short: "Environmental policy specialist with expertise in climate change adaptation and biodiversity conservation."
    bio_full: |
      Dr. Andi Mariyasa Septiari is a Senior Fellow at CRPG focusing on environmental policy, climate 
      change adaptation, and biodiversity conservation. He has worked with various international 
      organizations on environmental impact assessments and sustainable development policy frameworks.
    expertise:
      - "Environmental Policy"
      - "Climate Change"
      - "Biodiversity Conservation"
      - "Impact Assessment"
    education:
      - degree: "Ph.D. in Environmental Science"
        institution: "Bogor Agricultural University"
        year: "2014"
      - degree: "M.Sc. in Environmental Management"
        institution: "Bogor Agricultural University"
        year: "2010"
    contact:
      email: "andi@crpg.info"
      linkedin: "https://linkedin.com/in/andi-septiari"
    recent_publications:
      - title: "Environmental Policy Impact Assessment 2024"
        url: "/research/environmental-policy-impact-assessment-2024/"
        date: "2025-01-20"
      - title: "Climate Adaptation Strategies for Indonesian Cities"
        url: "/research/climate-adaptation-strategies/"
        date: "2024-10-15"
    languages: ["Indonesian", "English"]
```

### File: `data/news.yaml`
```yaml
# Recent News and Updates
news:
  - id: "policy-brief-water-governance"
    title: "New Policy Brief Released on Water Governance Framework"
    summary: "CRPG releases comprehensive policy brief on multi-stakeholder water governance approaches for Indonesia's urban regions."
    content: |
      The Center for Regulation, Policy and Governance (CRPG) has released a new policy brief titled 
      "Water Governance Framework for Indonesia 2025" that provides comprehensive recommendations for 
      sustainable water resource management in rapidly urbanizing areas. The brief, authored by 
      Dr. Mohamad Mova Al'Afghani, synthesizes research findings from extensive stakeholder engagement 
      and comparative policy analysis.
    date: "2025-03-15"
    type: "publication"
    thumbnail: "/images/news/water-governance-policy-brief-thumb.jpg"
    url: "/news/policy-brief-water-governance-framework/"
    tags: ["policy-brief", "water-governance", "urban-policy"]
    
  - id: "international-conference-climate"
    title: "CRPG Researcher Speaks at International Climate Policy Conference"
    summary: "Dr. Andi Mariyasa Septiari presents research findings on climate adaptation strategies at the 2025 Asia-Pacific Climate Policy Summit."
    content: |
      Dr. Andi Mariyasa Septiari, Senior Fellow at CRPG, delivered a keynote presentation on 
      "Climate Adaptation Strategies for Indonesian Cities" at the 2025 Asia-Pacific Climate Policy 
      Summit held in Singapore. The presentation highlighted CRPG's research on urban climate 
      resilience and policy implementation challenges in Southeast Asian contexts.
    date: "2025-03-12"
    type: "event"
    thumbnail: "/images/news/climate-conference-presentation-thumb.jpg"
    url: "/news/international-climate-policy-conference/"
    tags: ["climate-policy", "international-conference", "research-presentation"]
    
  - id: "partnership-ministry-environment"
    title: "Partnership Announced with Ministry of Environment and Forestry"
    summary: "CRPG and the Ministry of Environment and Forestry sign new agreement for collaborative research on environmental impact assessment frameworks."
    content: |
      CRPG has announced a new partnership with Indonesia's Ministry of Environment and Forestry 
      (KLHK) to develop improved environmental impact assessment frameworks. The collaboration will 
      focus on strengthening evidence-based approaches to environmental policy development and 
      implementation monitoring.
    date: "2025-03-08"
    type: "partnership"
    thumbnail: "/images/news/ministry-partnership-thumb.jpg"
    url: "/news/partnership-ministry-environment-forestry/"
    tags: ["partnership", "government-collaboration", "environmental-policy"]
    
  - id: "jakarta-post-constitutional-analysis"
    title: "Constitutional Reform Analysis Featured in Jakarta Post"
    summary: "CRPG's research on constitutional reform processes gains national attention through Jakarta Post editorial coverage."
    content: |
      The Jakarta Post featured CRPG's constitutional reform research in a comprehensive editorial 
      discussing democratic institution strengthening in Indonesia. The coverage highlighted key 
      findings from Dr. Lina Rospita Sari's research on judicial review mechanisms and parliamentary 
      oversight.
    date: "2025-03-05"
    type: "media"
    thumbnail: "/images/news/jakarta-post-feature-thumb.jpg"
    url: "/news/jakarta-post-constitutional-analysis/"
    tags: ["media-coverage", "constitutional-law", "democratic-institutions"]
    
  - id: "workshop-multi-stakeholder-governance"
    title: "Upcoming Workshop: Multi-stakeholder Governance in Practice"
    summary: "CRPG will host a two-day workshop on multi-stakeholder governance approaches, bringing together government officials, civil society leaders, and academics."
    content: |
      CRPG will host "Multi-stakeholder Governance in Practice: Lessons from Indonesian Policy 
      Development" on April 2-3, 2025, in Jakarta. The workshop will bring together government 
      officials, civil society representatives, private sector leaders, and academic researchers 
      to share experiences and develop best practices for inclusive policy development.
    date: "2025-03-01"
    type: "upcoming-event"
    thumbnail: "/images/news/multi-stakeholder-workshop-thumb.jpg"
    url: "/events/multi-stakeholder-governance-workshop/"
    tags: ["workshop", "multi-stakeholder", "governance", "capacity-building"]
```

## Content Front Matter Examples

### Research Paper Front Matter
```yaml
---
title: "Water Governance Framework for Indonesia 2025"
date: 2025-03-15
author: "Dr. Mohamad Mova Al'Afghani"
authors: 
  - "Dr. Mohamad Mova Al'Afghani"
  - "Dr. Mulia Nurhasan"
type: "research"
categories: 
  - "policy-brief"
tags: 
  - "water-governance"
  - "urban-policy" 
  - "multi-stakeholder"
  - "sustainability"
focus_areas:
  - "water-resources"
  - "multi-stakeholder"
description: "A comprehensive analysis of multi-stakeholder governance approaches for sustainable water resource management in Indonesia's rapidly urbanizing regions."
summary: "This policy brief examines water governance challenges in Indonesian urban areas and proposes evidence-based frameworks for multi-stakeholder coordination in water resource management."
thumbnail: "/images/research/water-governance-2025-thumb.jpg"
thumbnail_alt: "Aerial view of Indonesian river system with urban development"
featured: true
draft: false
toc: true
citation: "Al'Afghani, M.M. (2025). Water Governance Framework for Indonesia 2025. CRPG Policy Brief No. 15."
doi: "10.47476/crpg.2025.pb.15"
pdf_url: "/pdfs/water-governance-framework-2025.pdf"
publication_type: "Policy Brief"
partner_organizations:
  - "WWF Indonesia"
  - "UN-Habitat Indonesia"
funding: "Ford Foundation Grant #2024-0892"
keywords: 
  - "water governance"
  - "urban management"
  - "stakeholder engagement"
  - "policy framework"
  - "Indonesia"
related_research:
  - "/research/urban-water-management-policy/"
  - "/research/multi-stakeholder-governance-models/"
media_coverage:
  - title: "New Framework Addresses Urban Water Challenges"
    outlet: "Jakarta Globe"
    url: "https://jakartaglobe.id/water-framework-crpg"
    date: "2025-03-16"
---
```

### Team Member Page Front Matter
```yaml
---
title: "Dr. Mohamad Mova Al'Afghani"
date: 2025-01-01
type: "team"
role: "Director & Senior Fellow"
photo: "/images/team/mova-alafghani.jpg"
bio_short: "Constitutional law expert with 15+ years experience in governance research and policy analysis."
expertise:
  - "Constitutional Law"
  - "Democratic Governance"
  - "Water Policy"
  - "Institutional Analysis"
education:
  - degree: "Ph.D. in Constitutional Law"
    institution: "University of Indonesia"
    year: "2010"
  - degree: "LL.M. in Public Law"
    institution: "University of Indonesia"
    year: "2005"
contact:
  email: "mova@crpg.info"
  linkedin: "https://linkedin.com/in/mova-alafghani"
  twitter: "@mova_alafghani"
languages: 
  - "Indonesian"
  - "English" 
  - "Arabic"
publications_count: 42
active_projects:
  - "Constitutional Reform Analysis Project"
  - "Water Governance Framework Development"
  - "Multi-stakeholder Engagement Study"
profile_order: 1
featured: true
---
```

### News Article Front Matter
```yaml
---
title: "New Policy Brief Released on Water Governance Framework"
date: 2025-03-15
type: "news"
categories:
  - "publications"
tags:
  - "policy-brief"
  - "water-governance"
  - "urban-policy"
summary: "CRPG releases comprehensive policy brief on multi-stakeholder water governance approaches for Indonesia's urban regions."
thumbnail: "/images/news/water-governance-policy-brief-thumb.jpg"
thumbnail_alt: "CRPG policy brief cover showing water management infographics"
related_research:
  - "/research/water-governance-framework-2025/"
related_team:
  - "/team/mova-alafghani/"
media_type: "press-release"
featured: true
---
```

## Hugo Shortcode Examples

### Research Card Shortcode
```html
<!-- Usage: {{< research-card id="water-governance-2025" >}} -->
{{ $research := index .Site.Data.research.featured_research (int (.Get "id")) }}
<article class="research-card shortcode" role="article">
  <a href="{{ $research.url }}" class="card-link">
    <div class="card-image">
      <img src="{{ $research.thumbnail }}" alt="{{ $research.thumbnail_alt }}" loading="lazy">
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ $research.title }}</h3>
      <p class="card-summary">{{ $research.summary }}</p>
      <div class="card-meta">
        <span class="card-author">{{ $research.author }}</span>
        <span class="card-separator">•</span>
        <time datetime="{{ $research.date }}">{{ dateFormat "January 2006" $research.date }}</time>
      </div>
      <div class="card-tags">
        {{ range $research.tags }}
        <span class="tag">#{{ . }}</span>
        {{ end }}
      </div>
    </div>
  </a>
</article>
```

### Focus Area Shortcode
```html
<!-- Usage: {{< focus-area id="constitutional-law" >}} -->
{{ $area := index .Site.Data.focus_areas (int (.Get "id")) }}
<div class="focus-area-card shortcode">
  <div class="focus-icon">
    <svg class="icon-{{ $area.icon }}">
      <use href="#{{ $area.icon }}"></use>
    </svg>
  </div>
  <h3 class="focus-title">{{ $area.title }}</h3>
  <p class="focus-description">{{ $area.description }}</p>
  <div class="focus-stats">
    <span class="stat">{{ $area.research_count }} publications</span>
  </div>
  <a href="{{ $area.url }}" class="btn btn-outline btn-sm">
    <svg class="btn-icon">
      <use href="#explore"></use>
    </svg>
    Explore
  </a>
</div>
```

This comprehensive data structure provides a solid foundation for the CRPG website content management, ensuring consistency and maintainability across all sections of the site.