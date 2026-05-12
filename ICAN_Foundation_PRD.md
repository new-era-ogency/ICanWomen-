# Product Requirements Document
## ICAN Women Foundation — Complete Website Redesign
**Version:** 1.0  
**Date:** May 2026  
**Prepared by:** New Era Agency — Senior Product Management Division  
**Client:** ICAN Women Foundation (icanwomen.org)  
**Prepared for:** Rodion Oleksandrovych, Founder, New Era Agency & ICAN Foundation Stakeholders  
**Classification:** Confidential — Client Deliverable

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Project Vision & Strategic Goals](#2-project-vision--strategic-goals)
3. [Stakeholder Map](#3-stakeholder-map)
4. [Architecture Constraints & Technical Philosophy](#4-architecture-constraints--technical-philosophy)
5. [Information Architecture & Page Structure](#5-information-architecture--page-structure)
6. [Core Functionality Specifications](#6-core-functionality-specifications)
7. [Design System & UI/UX Requirements](#7-design-system--uiux-requirements)
8. [Content Strategy](#8-content-strategy)
9. [Performance & Quality Standards](#9-performance--quality-standards)
10. [Accessibility & Compliance](#10-accessibility--compliance)
11. [Delivery & Handoff Protocol](#11-delivery--handoff-protocol)
12. [Success Metrics & KPIs](#12-success-metrics--kpis)
13. [Appendix: Data Schemas](#13-appendix-data-schemas)

---

## 1. Executive Summary

The ICAN Women Foundation requires a complete architectural and visual rebuild of its web presence. The current implementation — a WordPress/Elementor stack exceeding 1,000 files — carries significant technical debt: slow load times, maintenance overhead, and a visual identity that fails to communicate the organisation's gravity and credibility to international donors and partners.

**The mandate is clear:** replace the existing installation with a precision-engineered, two-file static website that is faster, leaner, more emotionally compelling, and fully maintainable by non-technical staff via a simple JSON configuration.

This PRD defines every functional requirement, design decision, and technical constraint needed to build that product from zero — using only `index.html` and `app.js`.

---

## 2. Project Vision & Strategic Goals

### 2.1 Vision Statement

> *"A digital space that feels as honest and purposeful as the work ICAN does — clean, direct, and impossible to ignore."*

The redesigned ICAN website should function as the organisation's primary trust-building instrument. Within 8 seconds of landing, a visitor — whether a Ukrainian donor in Kharkiv or an international grant manager in Berlin — must understand:

- **Who ICAN is** and the specific communities they serve
- **What impact** their support creates (expressed in human, not bureaucratic terms)
- **How to give** with zero friction

### 2.2 Strategic Goals

| # | Goal | Business Rationale |
|---|------|--------------------|
| G-01 | Increase donation conversion rate by 40% | Current flow is buried 3+ clicks deep; redesign brings it above the fold |
| G-02 | Achieve Google PageSpeed score ≥ 95 (mobile & desktop) | Faster sites rank higher and retain visitors — critical for SEO and international reach |
| G-03 | Enable non-developer content updates via JSON | Reduces agency dependency; client can update partner logos, stats, and text independently |
| G-04 | Establish dual-language presence (UA/EN) | Unlocks access to international donor networks, NGO partners, and diaspora communities |
| G-05 | Reduce site maintenance overhead by 90% | From 1,000+ files to 2 files — no plugin updates, no security patches, no hosting complexity |

### 2.3 Out of Scope

- Blog / editorial system (static pages only in this phase)
- CMS integration (Phase 2, if required)
- E-commerce or merchandise
- Reporting / accountability document viewer (link to external PDF host)

---

## 3. Stakeholder Map

| Stakeholder | Role | Primary Concern |
|-------------|------|----------------|
| ICAN Foundation Owners | Client | Mission representation, donor trust, operational simplicity |
| Rodion Oleksandrovych | Agency Lead / PM | Technical quality, delivery velocity, client satisfaction |
| Ukrainian Donors | End User | Emotional resonance, payment ease, trust signals |
| International Donors / Grantmakers | End User | Credibility, transparency, English-language clarity |
| Volunteers | End User | Clear application path, understanding of how they contribute |
| ICAN Staff | Content Maintainers | Ability to update content without developer assistance |
| AI Code Editor (Cursor) | Builder | Precise, unambiguous specifications; no interpretive gaps |

---

## 4. Architecture Constraints & Technical Philosophy

### 4.1 The Two-File Rule

This is a **non-negotiable architectural constraint**, not a preference.

```
/
├── index.html      ← All markup + <style> block (all CSS embedded)
└── app.js          ← All logic: i18n engine, donation module, form validation, animations
```

**No exceptions.** No `styles.css`. No `utils.js`. No `/assets/js/` folder. External assets (images, SVGs) may be referenced via URLs or embedded as base64 data URIs within the HTML.

**Rationale:** Zero build steps. Zero dependency trees. Deploy anywhere — GitHub Pages, Netlify, a single Apache server — by uploading two files.

### 4.2 Zero Dependency Rule

| Prohibited | Permitted Alternative |
|------------|----------------------|
| jQuery | Native DOM API (`querySelector`, `addEventListener`) |
| Bootstrap / Tailwind | CSS Custom Properties + Grid + Flexbox |
| React / Vue / Angular | Vanilla JS with data-attribute binding |
| GSAP | CSS `@keyframes` + `transition` + `IntersectionObserver` |
| Axios / Fetch polyfills | Native `fetch()` API |
| Font Awesome | SVG icons inline or via `<symbol>` |

### 4.3 Browser Support Targets

- Chrome/Edge ≥ 90
- Firefox ≥ 88
- Safari ≥ 14
- Mobile Safari (iOS ≥ 14), Chrome for Android ≥ 90

No IE11 support required.

### 4.4 Hosting Assumptions

The site will be deployable to any static hosting provider. The build artefact is exactly two files. No server-side rendering, no APIs (donation redirects go to external payment gateways via query parameters).

---

## 5. Information Architecture & Page Structure

The entire site is a **single-page application (SPA)** with anchor-based navigation. All sections exist within `index.html`.

### 5.1 Section Map

```
[HEADER / NAV]          ← Fixed, glassmorphism, language toggle, CTA button
    │
    ├── #hero           ← Full-viewport, headline, subheading, two CTAs
    ├── #impact         ← Animated counter stats (2300 women, 900+ events, 32 communities)
    ├── #about          ← Mission narrative, two-column layout
    ├── #programs       ← Key support directions (6 cards)
    ├── #how-we-work    ← 4-step methodology / principles
    ├── #projects       ← Showcase of key initiatives
    ├── #donate         ← The Smart Donation Module (full specification in §6.2)
    ├── #partners       ← Dynamic partner grid (specification in §6.3)
    ├── #volunteer      ← Volunteer application form (specification in §6.4)
    ├── #contact        ← Contact form + social links
    └── [FOOTER]        ← Registration info, links, legal
```

### 5.2 Navigation Behaviour

- **Desktop:** Horizontal nav bar with smooth-scroll anchor links. Active link highlighted based on `IntersectionObserver` section tracking.
- **Mobile:** Hamburger menu. On tap, a full-screen overlay slides in from the right with navigation links. Closes on link click or outside tap.
- **Header state:** On scroll past 80px, header background transitions from fully transparent to `rgba(255,255,255,0.85)` with `backdrop-filter: blur(12px)` (glassmorphism). Transition: `0.3s ease`.

---

## 6. Core Functionality Specifications

### 6.1 Bilingual System (UA / EN)

#### 6.1.1 Architecture

The i18n system lives entirely within `app.js`. It operates on a **data-attribute binding** model — no virtual DOM, no re-renders, just direct text swapping.

**HTML Markup Convention:**
```html
<h1 data-i18n="hero.headline"></h1>
<p data-i18n="hero.subheading"></p>
<button data-i18n="nav.donate"></button>
```

**Translation Object Structure in `app.js`:**
```javascript
const translations = {
  ua: {
    nav: {
      home: "Головна",
      about: "Про нас",
      partners: "Співпраця",
      contact: "Контакти",
      donate: "Підтримати"
    },
    hero: {
      headline: "ICAN: Підтримка для жінок і дітей, які живуть поруч із війною",
      subheading: "Психологічна, юридична та соціальна допомога у громадах Харківщини",
      cta_donate: "Хочу допомогти",
      cta_help: "Отримати допомогу"
    },
    impact: {
      stat1_number: "2300+",
      stat1_label: "жінок і дітей отримали допомогу",
      stat2_number: "900+",
      stat2_label: "заходів з профілактики насильства",
      stat3_number: "32",
      stat3_label: "громади Харківщини"
    }
    // ... full translation tree
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      partners: "Partners",
      contact: "Contact",
      donate: "Donate"
    },
    hero: {
      headline: "ICAN: Support for Women and Children Living Beside War",
      subheading: "Psychological, legal and social assistance in Kharkiv region communities",
      cta_donate: "I Want to Help",
      cta_help: "Get Support"
    },
    impact: {
      stat1_number: "2,300+",
      stat1_label: "women and children supported",
      stat2_number: "900+",
      stat2_label: "violence prevention events held",
      stat3_number: "32",
      stat3_label: "communities in Kharkiv region"
    }
    // ... full translation tree
  }
};
```

#### 6.1.2 Language Switch Logic

```javascript
// Core i18n engine
let currentLang = localStorage.getItem('ican_lang') || 'ua';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ican_lang', lang);
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getNestedValue(translations[lang], key);
    if (text) el.textContent = text;
  });

  // Update placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = getNestedValue(translations[lang], key);
    if (text) el.placeholder = text;
  });

  // Update lang attribute for accessibility
  document.documentElement.lang = lang;
  
  // Update toggle button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}
```

#### 6.1.3 Language Toggle UI

```html
<div class="lang-toggle" role="group" aria-label="Language selector">
  <button class="lang-btn active" data-lang="ua" onclick="setLanguage('ua')">UA</button>
  <span class="lang-divider">|</span>
  <button class="lang-btn" data-lang="en" onclick="setLanguage('en')">EN</button>
</div>
```

**Behaviour:** 
- Language preference persists via `localStorage`.
- On first visit, default is `ua`.
- Toggle is visible in both desktop header and mobile menu.

---

### 6.2 The Smart Donation Module

This is the **highest-priority conversion element** on the entire site. It must be above the fold on desktop and reachable within one scroll on mobile.

#### 6.2.1 Visual Layout

```
┌──────────────────────────────────────────────────────┐
│  Ваш внесок рятує життя                              │
│  ─────────────────────────────────────────────────   │
│                                                      │
│  ┌────────┐  ┌────────┐  ┌────────┐                 │
│  │ 200₴   │  │ 500₴   │  │ 1000₴  │                 │
│  └────────┘  └────────┘  └────────┘                 │
│                                                      │
│  ┌─────────────────────────────────────────┐         │
│  │  Інша сума (грн)                        │         │
│  └─────────────────────────────────────────┘         │
│                                                      │
│  [●] WayForPay   [ ] LiqPay                          │
│                                                      │
│  ┌─────────────────────────────────────────┐         │
│  │      ❤  ПІДТРИМАТИ ЗАРАЗ               │         │
│  └─────────────────────────────────────────┘         │
│                                                      │
│  🔒 Безпечна оплата · Офіційний статус БФ            │
└──────────────────────────────────────────────────────┘
```

#### 6.2.2 Functional Specification

**State Variables (managed in JS):**
```javascript
const donationState = {
  selectedAmount: null,       // 200 | 500 | 1000 | null (custom)
  customAmount: '',           // string from input
  gateway: 'wayforpay',       // 'wayforpay' | 'liqpay'
};
```

**Preset Amount Buttons:**
- Three buttons: 200, 500, 1000 UAH
- On click: button receives `.selected` class (bold border + accent background), `selectedAmount` is updated, `customAmount` is cleared
- Clicking a selected button deselects it (toggle behaviour)

**Custom Amount Input:**
- `type="number"`, `min="10"`, `max="999999"`, `step="1"`
- On input: clears preset selection, updates `customAmount`
- Placeholder: "Інша сума / Other amount"
- Only digits; decimals blocked via `input` event

**Gateway Selection:**
- Radio-button style custom UI (styled radio inputs, not native)
- Default: WayForPay
- Options: WayForPay, LiqPay

**Submit Button:**
```javascript
function handleDonate() {
  const amount = donationState.selectedAmount || parseInt(donationState.customAmount);
  
  // Validation
  if (!amount || amount < 10) {
    showDonationError(translations[currentLang].donate.error_amount);
    return;
  }

  // Gateway redirect
  const gateways = {
    wayforpay: `https://secure.wayforpay.com/pay?merchantAccount=MERCHANT_ID&amount=${amount}&currency=UAH&orderReference=ICAN-${Date.now()}`,
    liqpay: `https://www.liqpay.ua/api/3/checkout?amount=${amount}&currency=UAH&description=ICAN+Donation`
  };

  window.location.href = gateways[donationState.gateway];
}
```

> **Note for Developer:** Replace `MERCHANT_ID` and LiqPay parameters with live credentials provided by ICAN. These are environment values, not hardcoded secrets — document them in a `CONFIG` object at the top of `app.js`.

**Error State:**
- If amount < 10 or empty on submit: input border turns `#FF4D4D`, inline error message appears below input, input is focused
- Error clears on next valid input event

**Success State:**
- The redirect itself is the success indicator
- On button click, briefly show a loading spinner inside the button (300ms) before redirect

**Trust Indicators (below the button):**
- Lock icon + "Безпечна оплата / Secure Payment"
- Official NGO registration badge text
- These are static HTML, not dynamic

---

### 6.3 Partner Ecosystem

Partners are rendered from a JavaScript array — zero HTML changes required to add/remove partners.

#### 6.3.1 Data Structure

```javascript
// In app.js — edit this array to manage partners
const partners = [
  {
    id: 'partner-01',
    name: 'USAID Ukraine',
    logo: 'https://icanwomen.org/assets/partners/usaid.svg', // or base64
    url: 'https://www.usaid.gov/ukraine',
    category: 'international' // 'international' | 'national' | 'media'
  },
  {
    id: 'partner-02',
    name: 'UN Women Ukraine',
    logo: 'https://icanwomen.org/assets/partners/unwomen.svg',
    url: 'https://ukraine.unwomen.org/',
    category: 'international'
  },
  // ... additional partners
];
```

#### 6.3.2 Render Function

```javascript
function renderPartners() {
  const grid = document.getElementById('partners-grid');
  grid.innerHTML = partners.map(p => `
    <a href="${p.url}" 
       target="_blank" 
       rel="noopener noreferrer"
       class="partner-card" 
       aria-label="${p.name}"
       data-category="${p.category}">
      <img src="${p.logo}" alt="${p.name}" loading="lazy" />
    </a>
  `).join('');
}
```

#### 6.3.3 Hover Effect (CSS)

```css
.partner-card img {
  filter: grayscale(100%);
  opacity: 0.6;
  transition: filter 0.4s ease, opacity 0.4s ease, transform 0.3s ease;
}

.partner-card:hover img,
.partner-card:focus-within img {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}
```

#### 6.3.4 Grid Layout

```css
#partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 2rem;
  align-items: center;
  justify-items: center;
}
```

---

### 6.4 Contact & Volunteer Forms

Both forms share the same validation engine. They differ only in their field sets and submission endpoints.

#### 6.4.1 Volunteer Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Full Name | `text` | Yes | Min 2 chars, letters only |
| Email | `email` | Yes | RFC 5322 regex |
| Phone | `tel` | Optional | Ukrainian format: `+380XXXXXXXXX` |
| City / Region | `text` | Yes | Min 2 chars |
| How can you help? | `textarea` | Yes | Min 20 chars |
| Consent checkbox | `checkbox` | Yes | Must be checked |

#### 6.4.2 Contact Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Name | `text` | Yes | Min 2 chars |
| Email | `email` | Yes | RFC 5322 regex |
| Subject | `select` | Yes | Dropdown: General / Media / Partnership / Help Request |
| Message | `textarea` | Yes | Min 10 chars |

#### 6.4.3 Validation Engine

```javascript
const validators = {
  name: (v) => v.trim().length >= 2,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  phone: (v) => !v || /^\+380\d{9}$/.test(v.replace(/\s/g, '')),
  message: (v) => v.trim().length >= 10,
  consent: (v) => v === true
};

function validateField(name, value) {
  return validators[name] ? validators[name](value) : true;
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  let isValid = true;
  
  form.querySelectorAll('[data-validate]').forEach(field => {
    const rule = field.getAttribute('data-validate');
    const value = field.type === 'checkbox' ? field.checked : field.value;
    const valid = validateField(rule, value);
    
    toggleFieldError(field, !valid);
    if (!valid) isValid = false;
  });
  
  return isValid;
}
```

#### 6.4.4 Form States

**Default:** Standard appearance, no error indicators.

**Error State (per field):**
- Red bottom border (`border-bottom: 2px solid #FF4D4D`)
- Error message appears below the field (from `data-error` attribute, localised via i18n)
- Shake animation on submit attempt: `@keyframes shake`

**Loading State (on submit):**
- Submit button shows spinner, text changes to "Надсилаємо..." / "Sending..."
- All inputs disabled
- Duration: until `fetch()` resolves

**Success State:**
- Form fades out
- A success card slides in:
  - Green checkmark icon (SVG, inline)
  - Localised success message
  - "Send another message" link that resets state

**Error State (server/network):**
- Form remains visible
- Banner above form: "Щось пішло не так. Спробуйте ще раз." / "Something went wrong. Please try again."

#### 6.4.5 Submission

Forms submit via `fetch()` POST to a Formspree endpoint (or equivalent), which requires no backend:

```javascript
async function submitForm(formId, endpoint) {
  if (!validateForm(formId)) return;
  
  setFormState(formId, 'loading');
  
  const data = new FormData(document.getElementById(formId));
  
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    
    if (res.ok) {
      setFormState(formId, 'success');
    } else {
      setFormState(formId, 'error');
    }
  } catch {
    setFormState(formId, 'error');
  }
}
```

> **Configuration:** Formspree endpoint URLs go into the `CONFIG` object at the top of `app.js`.

---

### 6.5 Impact Counter Animation

The stats section (`#impact`) uses an `IntersectionObserver` to trigger animated number counters when the section enters the viewport. Numbers count up from 0 to their target value over 1.8 seconds using an ease-out curve.

```javascript
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const isFloat = target % 1 !== 0;
  
  function update(time) {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.floor(eased * target);
    
    el.textContent = current.toLocaleString(currentLang === 'ua' ? 'uk-UA' : 'en-US');
    
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString(currentLang === 'ua' ? 'uk-UA' : 'en-US');
  }
  
  requestAnimationFrame(update);
}
```

Animation fires **once** per page load (observer disconnects after trigger).

---

### 6.6 Scroll & Entrance Animations

Elements with `data-animate` attribute are observed by `IntersectionObserver` and receive `.visible` class when they enter the viewport (threshold: 15%).

```css
[data-animate] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

[data-animate].visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger for grid children */
[data-animate-stagger] > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

[data-animate-stagger].visible > *:nth-child(1) { transition-delay: 0.05s; }
[data-animate-stagger].visible > *:nth-child(2) { transition-delay: 0.10s; }
[data-animate-stagger].visible > *:nth-child(3) { transition-delay: 0.15s; }
/* ...up to 8 children */
```

**`prefers-reduced-motion` must be respected:**
```css
@media (prefers-reduced-motion: reduce) {
  [data-animate], [data-animate-stagger] > * {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

---

## 7. Design System & UI/UX Requirements

### 7.1 Visual Identity

#### 7.1.1 Colour Palette

```css
:root {
  /* Primary */
  --color-accent:        #FF4D4D;  /* Compassion / Action — all CTAs, hover states, highlights */
  --color-accent-hover:  #E63E3E;  /* Pressed / hovered accent */
  --color-accent-soft:   #FFF0F0;  /* Tinted backgrounds for donation module, callouts */

  /* Neutrals */
  --color-dark:          #1A1A1A;  /* Primary text, headings */
  --color-mid:           #4A4A4A;  /* Body text, secondary content */
  --color-muted:         #8A8A8A;  /* Captions, labels, meta */
  --color-border:        #E8E8E8;  /* Dividers, card borders */
  --color-surface:       #F9F9F9;  /* Section backgrounds */
  --color-white:         #FFFFFF;

  /* Status */
  --color-success:       #22C55E;
  --color-error:         #FF4D4D; /* Reuse accent — unified signal for urgency */
  --color-warning:       #F59E0B;
}
```

#### 7.1.2 Typography

| Role | Font | Weight | Size (desktop) | Size (mobile) |
|------|------|--------|----------------|---------------|
| Display headline | Onest | 700 | 56–72px | 36–44px |
| Section headline | Onest | 600 | 36–44px | 28–32px |
| Subheading | Onest | 500 | 22–28px | 18–22px |
| Body | Inter | 400 | 16–18px | 15–16px |
| Label / Caption | Inter | 500 | 13–14px | 12–13px |
| Button | Onest | 600 | 15–16px | 14–15px |

**Font Loading:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Onest:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Font Subsetting note:** Load only characters needed. For Ukrainian + Latin, use `&subset=latin,cyrillic`.

#### 7.1.3 Spacing Scale

```css
:root {
  --space-xs:   0.25rem;  /*  4px */
  --space-sm:   0.5rem;   /*  8px */
  --space-md:   1rem;     /* 16px */
  --space-lg:   1.5rem;   /* 24px */
  --space-xl:   2rem;     /* 32px */
  --space-2xl:  3rem;     /* 48px */
  --space-3xl:  4.5rem;   /* 72px */
  --space-4xl:  6rem;     /* 96px */
}
```

#### 7.1.4 Border Radius

```css
:root {
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   20px;
  --radius-xl:   32px;
  --radius-full: 9999px;
}
```

#### 7.1.5 Shadow System

```css
:root {
  --shadow-sm:  0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md:  0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.05);
  --shadow-lg:  0 12px 40px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06);
  --shadow-accent: 0 8px 32px rgba(255,77,77,0.25); /* Donation button glow */
}
```

---

### 7.2 Component Specifications

#### 7.2.1 Header / Navigation

```
Height (desktop):       68px
Height (mobile):        56px
Background (default):   transparent
Background (scrolled):  rgba(255,255,255,0.85) + backdrop-filter: blur(12px)
Border-bottom:          1px solid rgba(0,0,0,0.06) on scroll
Position:               fixed, top: 0, z-index: 100
Transition:             background 0.3s ease, box-shadow 0.3s ease
```

Logo: SVG, max-height 36px. Links: `font-family: Onest`, 15px, weight 500, `color: var(--color-dark)`, hover `color: var(--color-accent)`.

Donate CTA Button (in nav): Accent background, white text, `border-radius: var(--radius-full)`, `padding: 10px 22px`, hover: darken + `box-shadow: var(--shadow-accent)`.

#### 7.2.2 Hero Section

- Full viewport height (`min-height: 100svh`)
- Background: White with a **subtle diagonal pattern** (SVG noise or repeating-gradient) — never a photo behind text
- Headline: `font-size: clamp(2.5rem, 6vw, 4.5rem)`, Onest 700, `color: var(--color-dark)`
- The word "ICAN" or the core mission phrase should visually break from the rest with `color: var(--color-accent)`
- Two CTA buttons: Primary (accent fill) + Secondary (ghost/outline)
- Hero image: positioned right side on desktop, full width below text on mobile. High-quality photo of real ICAN beneficiaries (not stock imagery — coordinate with client).
- Scroll indicator: Animated down-chevron, fades after first scroll

#### 7.2.3 Primary Button

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 14px 28px;
  background: var(--color-accent);
  color: #fff;
  font-family: 'Onest', sans-serif;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
}

.btn-primary:hover {
  background: var(--color-accent-hover);
  box-shadow: var(--shadow-accent);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: none;
}
```

#### 7.2.4 Program / Service Cards

```css
.program-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
}

.program-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: var(--color-accent);
}

.program-card .card-icon {
  width: 48px;
  height: 48px;
  background: var(--color-accent-soft);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-lg);
  color: var(--color-accent);
}
```

---

### 7.3 Responsive Breakpoints

```css
/* Mobile first */
/* xs: 0–480px   (default styles) */
/* sm: 481–768px */
@media (min-width: 481px) { ... }

/* md: 769–1024px */
@media (min-width: 769px) { ... }

/* lg: 1025–1280px */
@media (min-width: 1025px) { ... }

/* xl: 1281px+ */
@media (min-width: 1281px) { ... }
```

**Key responsive rules:**
- Navigation collapses to hamburger at `< 769px`
- Two-column layouts become single-column at `< 769px`
- Hero image stacks below text at `< 769px`
- Partner grid: 2 columns at xs, 3 at sm, 4–5 at md+
- Donation buttons: full-width row at xs, inline at sm+
- Font sizes scale with `clamp()` wherever possible

---

## 8. Content Strategy

### 8.1 Copy Tone

| Attribute | Do | Don't |
|-----------|----|----|
| Voice | Direct, warm, human | Bureaucratic, formal, cold |
| Perspective | Second person: "Your support" / "You can help" | Third-person distance |
| Urgency | Factual urgency (real impact numbers) | Manipulative guilt-tripping |
| Language level | B2 English / standard Ukrainian | Overly academic or colloquial |

### 8.2 Key Microcopy

**Donation module headline:**
- UA: "Ваш внесок — це реальна допомога"
- EN: "Your contribution is real help"

**Donation CTA:**
- UA: "Підтримати зараз"
- EN: "Support Now"

**Trust line:**
- UA: "🔒 Безпечна оплата · Благодійний фонд, зареєстрований в Україні"
- EN: "🔒 Secure payment · Officially registered charitable foundation in Ukraine"

**Volunteer form CTA:**
- UA: "Приєднатися до команди"
- EN: "Join Our Team"

### 8.3 Impact Statistics (Seed Data)

These values populate the `#impact` section and counters. Update quarterly:

```javascript
const impactStats = [
  { value: 2300, suffix: '+', key: 'women_helped' },
  { value: 900,  suffix: '+', key: 'events_held' },
  { value: 32,   suffix: '',  key: 'communities' },
  { value: 2500, suffix: '+', key: 'hygiene_kits' }
];
```

---

## 9. Performance & Quality Standards

### 9.1 PageSpeed Targets

| Metric | Target | Priority |
|--------|--------|----------|
| Lighthouse Performance (mobile) | ≥ 95 | P0 |
| Lighthouse Performance (desktop) | ≥ 98 | P0 |
| Largest Contentful Paint (LCP) | ≤ 1.8s | P0 |
| First Contentful Paint (FCP) | ≤ 0.9s | P0 |
| Cumulative Layout Shift (CLS) | ≤ 0.05 | P0 |
| Total Blocking Time (TBT) | ≤ 150ms | P1 |
| Total page size (gzipped) | ≤ 200KB | P1 |

### 9.2 Image Optimisation Requirements

- All images: WebP format with JPEG fallback via `<picture>` element
- Hero image: `loading="eager"`, `fetchpriority="high"`, explicit `width` and `height` attributes
- All other images: `loading="lazy"`
- Partner logos: SVG preferred; PNG fallback max 10KB each
- No images above 200KB uncompressed

### 9.3 HTML/CSS/JS Quality

- HTML validates against W3C validator with zero errors
- Zero `!important` declarations except in reset layer
- CSS custom properties for all design tokens (no hardcoded hex values in component CSS)
- `app.js`: no `var` declarations; `const`/`let` only; no global namespace pollution (wrap in IIFE or use module pattern)
- No `console.log()` in production build

### 9.4 SEO Requirements

```html
<!-- Required meta tags in <head> -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="ICAN Women Foundation — psychological, legal and social support for women and children in Kharkiv region communities affected by war.">
<meta property="og:title" content="ICAN Women Foundation">
<meta property="og:description" content="Supporting women and children living beside war in Ukraine.">
<meta property="og:image" content="[og-image-url]">
<meta property="og:url" content="https://icanwomen.org/">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://icanwomen.org/">
```

Structured data: `Organization` schema (JSON-LD), inline in `<head>`.

---

## 10. Accessibility & Compliance

### 10.1 WCAG 2.1 AA Compliance

| Requirement | Implementation |
|-------------|----------------|
| Colour contrast ≥ 4.5:1 (text) | `#1A1A1A` on `#FFFFFF` = 16.1:1 ✓; `#FF4D4D` on `#FFFFFF` = 4.6:1 ✓ |
| Focus indicators visible | Custom `focus-visible` outline: `2px solid var(--color-accent)`, offset 3px |
| All images have `alt` text | Required for all `<img>` tags; decorative images use `alt=""` |
| Keyboard navigation | All interactive elements reachable via Tab; modals trap focus |
| Form labels | All inputs have associated `<label>` elements; never `placeholder`-only |
| Skip link | `<a href="#main-content" class="skip-link">Skip to main content</a>` as first DOM element |
| ARIA roles | `role="navigation"`, `aria-label` on nav, `aria-expanded` on mobile toggle |
| Language attribute | `<html lang="uk">` (switches to `lang="en"` via JS on language change) |
| `prefers-reduced-motion` | All animations disabled when OS setting is active (see §6.6) |

---

## 11. Delivery & Handoff Protocol

### 11.1 File Deliverables

```
ican-redesign/
├── index.html          ← Production-ready HTML (all CSS embedded in <style>)
├── app.js              ← All JavaScript logic
└── README.md           ← Config guide: how to update partners, translations, 
                           payment gateway credentials, Formspree endpoints
```

### 11.2 `app.js` Top-Level Configuration Block

All client-configurable values must live at the top of `app.js` in a single `CONFIG` object:

```javascript
const CONFIG = {
  // Payment gateways
  wayforpay: {
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    merchantDomainName: 'icanwomen.org',
    baseUrl: 'https://secure.wayforpay.com/pay'
  },
  liqpay: {
    publicKey: 'YOUR_PUBLIC_KEY',
    baseUrl: 'https://www.liqpay.ua/api/3/checkout'
  },
  
  // Form endpoints (Formspree)
  forms: {
    contact: 'https://formspree.io/f/YOUR_CONTACT_FORM_ID',
    volunteer: 'https://formspree.io/f/YOUR_VOLUNTEER_FORM_ID'
  },
  
  // Telegram (Get Help button)
  telegramBot: 'https://t.me/bo_bf_ican',
  
  // Default language
  defaultLang: 'ua'
};
```

### 11.3 README Requirements

The README must include:
1. How to update partner logos and links (edit `partners` array in `app.js`)
2. How to update statistics (edit `impactStats` array in `app.js`)
3. How to update translations (edit `translations` object in `app.js`)
4. How to update payment gateway credentials (edit `CONFIG` object)
5. How to deploy (copy both files to any static host; no build step required)

### 11.4 Acceptance Criteria

| Check | Pass Condition |
|-------|---------------|
| PageSpeed Mobile | Score ≥ 95 |
| PageSpeed Desktop | Score ≥ 98 |
| W3C HTML Validation | Zero errors |
| Language switching | Full UI updates in < 100ms, persists on reload |
| Donation redirect | Correct amount passed to gateway URL, both gateways functional |
| Contact form | Submits, shows success state, validates all fields |
| Volunteer form | Submits, shows success state, validates all fields |
| Mobile hamburger | Opens/closes, all links functional, smooth animation |
| Partner hover | Grayscale → colour transition works on all partners |
| Counter animation | Fires once on scroll, smooth ease-out |
| Zero broken links | All anchors and external links resolve |
| Keyboard navigation | Full Tab navigation through all interactive elements |
| Screen reader test | VoiceOver (iOS) + NVDA (Windows): all content readable |

---

## 12. Success Metrics & KPIs

### 12.1 Technical KPIs (measurable at launch)

| KPI | Baseline (current) | Target (post-launch) | Measurement |
|-----|-------------------|----------------------|-------------|
| PageSpeed Mobile | ~45–55 (estimated) | ≥ 95 | Google PageSpeed Insights |
| Total page size | ~3–5MB (WordPress) | ≤ 200KB | Chrome DevTools |
| Time to Interactive | ~5–8s | ≤ 1.5s | Lighthouse |
| Number of HTTP requests | 60+ | ≤ 10 | Chrome DevTools Network tab |

### 12.2 Business KPIs (measurable within 90 days post-launch)

| KPI | Target | Measurement |
|-----|--------|-------------|
| Donation page conversion rate | +40% vs baseline | Google Analytics 4 goal tracking |
| Average session duration | +25% | GA4 |
| Bounce rate | -30% | GA4 |
| Volunteer form submissions | +50% | Formspree dashboard |
| International traffic share | +20% | GA4 geo report |

---

## 13. Appendix: Data Schemas

### A. Full Translation Keys Reference

```
nav.home, nav.about, nav.partners, nav.contact, nav.donate, nav.reports
hero.headline, hero.subheading, hero.cta_donate, hero.cta_help
impact.stat1_number, impact.stat1_label, impact.stat2_number, impact.stat2_label,
impact.stat3_number, impact.stat3_label, impact.stat4_number, impact.stat4_label
about.headline, about.body1, about.body2, about.cta_report, about.cta_donate
programs.headline, programs.subheading
programs.psy.title, programs.psy.body
programs.legal.title, programs.legal.body
programs.education.title, programs.education.body
programs.humanitarian.title, programs.humanitarian.body
programs.p2p.title, programs.p2p.body
programs.retreats.title, programs.retreats.body
how.headline, how.step1.title, how.step1.body, ...
donate.headline, donate.subheading, donate.amount_label, donate.custom_placeholder,
donate.gateway_label, donate.cta, donate.trust, donate.error_amount
partners.headline, partners.subheading
volunteer.headline, volunteer.subheading, volunteer.field_name, volunteer.field_email,
volunteer.field_phone, volunteer.field_city, volunteer.field_message,
volunteer.field_consent, volunteer.cta, volunteer.success, volunteer.error
contact.headline, contact.field_name, contact.field_email, contact.field_subject,
contact.field_message, contact.cta, contact.success, contact.error
footer.registration, footer.rights, footer.privacy
```

### B. Program Card Data Structure

```javascript
const programs = [
  {
    id: 'psychosocial',
    icon: '<svg>...</svg>',  // inline SVG icon
    titleKey: 'programs.psy.title',
    bodyKey: 'programs.psy.body'
  },
  // ... 5 more entries
];
```

### C. `app.js` Initialisation Sequence

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // 1. Apply saved language preference
  setLanguage(localStorage.getItem('ican_lang') || CONFIG.defaultLang);

  // 2. Render dynamic content
  renderPartners();
  renderPrograms();

  // 3. Set up intersection observers
  initScrollAnimations();
  initCounterAnimations();
  initActiveNavTracking();

  // 4. Set up event listeners
  initMobileMenu();
  initDonationModule();
  initForms();

  // 5. Header scroll behaviour
  initHeaderScroll();
});
```

---

*End of Document*

---
**Document Control**  
Prepared by: New Era Agency, Senior Product Management Division  
Version: 1.0 — Initial Release  
Next Review: Upon client sign-off or scope change request  
Contact: Available through ICAN Foundation project channel
