# AquaTherma — Premium Home Water Heater Installation & Repair Service

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript ES6+](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![ThemeForest Ready](https://img.shields.io/badge/Template-ThemeForest_Ready-82B440?style=flat)](https://themeforest.net/)

**AquaTherma** is a modern, high-converting, fully responsive frontend website designed specifically for residential **Home Water Heater Installation, Repair, Replacement, and Tankless Engineering** businesses.

Built with clean semantic HTML5, modern Tailwind CSS, pure ES6+ JavaScript, Lucide icons, and Swiper.js, this template is 100% self-contained and ready for commercial distribution and rapid customization.

---

## 🚀 Key Highlights & Architecture

- **Specialized Industry Focus:** 100% focused on residential water heating (Atmospheric Tanks, Condensing Tankless, Power-Vent Gas, 240V Electric, and Hybrid Heat Pumps).
- **Strict Section Limit:** Every page contains **at most 7 major content sections** (excluding header and footer) for optimal visual pacing and high conversion rates.
- **Dual Homepage Variants:**
  - `index.html`: Main landing page focusing on core residential water heating, repairs, traditional vs. tankless comparisons, and emergency callouts.
  - `home-02.html`: Genuinely distinct layout focused on high-efficiency tankless retrofits, tax rebate guidance, and an interactive GPM & bathroom sizing calculator.
- **Dynamic & Accessible Detail Pages:**
  - `service-detail.html`: Dynamically loads any service via `?id=...` with dedicated technical scopes, 5-step workflows, pricing guides, FAQs, and dual-image showcases.
  - `project-detail.html`: Dynamically loads detailed case studies with spec matrices, challenges, solutions, outcomes, and dual-image showcases.
  - `blog-detail.html`: Educational guide layout with key takeaways checklists, caution banners, recent posts sidebar, and related articles.
- **Strict Image Uniqueness Rule:**
  - Exactly **two distinct mechanical photos** per service and project detail page.
  - 3-second autoplay interval with auto-pause on hover, interaction, off-screen visibility (via `IntersectionObserver`), and `prefers-reduced-motion` support.
  - Zero reused or duplicated images across unrelated cards.
- **Light & Dark Theme Engine:**
  - Built with semantic design tokens (`--bg-primary`, `--bg-surface`, `--color-blue`, `--color-navy`, `--color-orange`).
  - Automatic system preference detection with persistent `localStorage` toggle.
- **RTL Compatibility:**
  - Built-in `dir="rtl"` support with mirrored arrows, reversed layouts, and aligned typography.
- **Honest Frontend Validation:**
  - Standard service booking and 24/7 emergency forms feature accessible client-side validation.
  - Transparent demonstration notices clearly state no fake dispatches or backend database transmissions occur in demo mode.

---

## 📂 Project Directory Structure

```text
WaterHeater-Installation/
├── index.html                     # Home Page 01 (Premium Water Heater Services) [7 sections]
├── home-02.html                   # Home Page 02 (Tankless & Energy-Efficient Solutions) [7 sections]
├── about.html                     # About Us (Heritage, Team, Values, Safety Audit) [7 sections]
├── services.html                  # Services Listing (Filterable Catalog & Symptoms) [7 sections]
├── service-detail.html            # Individual Service Detail (Dynamic loader & 2-image slider) [7 sections]
├── projects.html                  # Projects Portfolio (9 Distinct Case Studies) [7 sections]
├── project-detail.html            # Project Detail Page (Specs Matrix & 2-image slider) [7 sections]
├── blog.html                      # Knowledge Hub (Search, Category Filters, 9 Guides) [7 sections]
├── blog-detail.html               # Blog Details (Takeaways, Caution Box, Sidebar) [7 sections]
├── pricing.html                   # Pricing Guide (Tiers, 15-Yr Comparison, Factors, FAQs) [7 sections]
├── contact.html                   # Contact & Emergency Dispatch (Forms & Zip Checker) [7 sections]
├── 404.html                       # Custom 404 Error Page
├── coming-soon.html               # Coming Soon Page with Live Countdown Timer
├── maintenance.html               # Scheduled Maintenance Page with Urgent Callout
├── privacy-policy.html            # Privacy Policy
├── terms.html                     # Terms of Service
│
├── assets/
│   ├── css/
│   │   └── style.css              # Custom tokens, fluid typography, dark mode, RTL, animations
│   ├── js/
│   │   ├── main.js                # Theme toggle, RTL toggle, mobile nav, accordions
│   │   ├── data.js                # Complete database of services, projects, blogs, pricing & testimonials
│   │   ├── detail-loader.js       # Dynamic router & 3s slider controller
│   │   └── forms.js               # Accessible form validators & sizing calculator
│   └── images/
│       ├── brand/                 # SVG logos (light, dark) and favicon
│       ├── home/                  # Authentic hero and comparison photos
│       ├── about/                 # Team portraits and workshop imagery
│       ├── services/              # 12 distinct service card photos
│       ├── service-details/       # Verified distinct dual-image assets
│       ├── projects/              # 9 distinct project cover photos
│       ├── project-details/       # Verified distinct dual-image project galleries
│       ├── blog/                  # 9 distinct educational article banners
│       └── contact/               # Fleet vehicle & office photos
│
└── scripts/
    ├── download-images.js         # Curated asset fetcher
    └── check-links.js             # Automated link & asset integrity verifier
```

---

## 🎨 Color Palette & Typography

| Token | Hex Code | Usage |
| :--- | :--- | :--- |
| **Deep Navy** | `#102A43` | Primary brand strength, dark mode surfaces, headers |
| **Professional Blue** | `#147DB3` | Primary action buttons, brand accents, links |
| **Accent Aqua** | `#21B6C7` | High-efficiency tags, secondary accents, highlights |
| **Warm Orange** | `#F28C45` | Emergency callouts, priority repairs, phone badges |
| **Soft Background** | `#F5F8FB` | Alternating section backgrounds, card surfaces |
| **Main Text** | `#162B3D` | High-contrast light mode body text |
| **Secondary Text**| `#64748B` | Subtext, specifications, captions |

### Typography
- **Headings:** [Manrope](https://fonts.google.com/specimen/Manrope) (600, 700, 800) with fluid `clamp()` sizing
- **Body:** [Inter](https://fonts.google.com/specimen/Inter) (300, 400, 500, 600, 700)

---

## 🛠️ Getting Started & Local Preview

Because this is a pure static frontend project, no build tools or package managers are required!

### Option 1: Direct File Opening
Double-click `index.html` in your favorite web browser (Chrome, Firefox, Safari, Edge).

### Option 2: Local HTTP Server (Recommended)
Using Python:
```bash
python -m http.server 8080
```
Or using Node:
```bash
npx serve .
```
Then visit `http://localhost:8080` in your browser.

---

## 🧪 Quality Assurance & Integrity Verification

Run the built-in integrity auditor to verify 100% of internal links, images, and detail pairs:

```bash
node scripts/check-links.js
```

Expected output:
```text
Checked references: 574
Broken links/assets count: 0
>>> 100% INTERNAL LINKS AND STATIC ASSETS VERIFIED (ZERO BROKEN LINKS)!
```

---

## 📄 License & Distribution
Designed as a production-grade commercial HTML template suitable for theme marketplaces, digital agencies, and plumbing/HVAC contractor deployments.
