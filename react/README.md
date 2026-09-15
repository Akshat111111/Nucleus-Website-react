# Nucleus Systems Website

**The Digital Trust Assurance Company** — corporate website for Nucleus Systems, built with React + Vite.

> Cybersecurity, AI Trust and Technology Risk — Assessed, Improved and Independently Validated.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev) |
| Build tool | [Vite](https://vite.dev) |
| Routing | `react-router-dom` v6 — `HashRouter` |
| Styling | Vanilla CSS (`index.css`, `styles.css`, `styles-gtm.css`) |
| 3D / Globe | Custom `Globe` component (canvas-based) |
| PDF rendering | [`pdfjs-dist`](https://www.npmjs.com/package/pdfjs-dist) — renders PDF page 1 as canvas thumbnails |
| Linting | [Oxlint](https://oxc.rs) |

No Tailwind. No component library. No TypeScript (plain JSX).

---

## Getting Started

```bash
# From the react/ directory
npm install
npm run dev       # dev server -> http://localhost:5173/
npm run build     # production build -> dist/
npm run preview   # preview production build locally
```

---

## Project Structure

```
react/
├── src/
│   ├── App.jsx                  # Router — all 37 routes defined here
│   ├── main.jsx                 # Entry point — imports CSS in order
│   ├── index.css                # Design tokens, base reset, component styles
│   ├── styles.css               # Additional global styles
│   ├── styles-gtm.css           # GTM repositioning styles (Aug 2026)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Desktop nav — Services / Solutions / M&A / Industries / Experience / About
│   │   │   ├── MobileMenu.jsx   # Mobile nav — accordion groups
│   │   │   └── Footer.jsx       # Multi-column footer
│   │   └── common/
│   │       ├── Globe.jsx        # Interactive 3D globe
│   │       ├── ScrollTopBtn.jsx
│   │       └── EmailFab.jsx
│   │
│   ├── hooks/
│   │   └── useReveal.js         # IntersectionObserver fade-in animations
│   │
│   └── pages/
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Team.jsx
│       ├── Careers.jsx
│       ├── Contact.jsx
│       ├── Insights.jsx
│       ├── Paxley.jsx           # Related venture (footer access only)
│       │
│       ├── services/            # Service + Solution pages (9 total)
│       │   ├── SvcFractionalCISO.jsx  -> /services/fractional-ciso
│       │   ├── SvcCybersecurity.jsx   -> /services/cybersecurity-advisory
│       │   ├── SvcPenTest.jsx         -> /services/penetration-testing
│       │   ├── SvcResilience.jsx      -> /services/operational-resilience
│       │   ├── SvcAIGovernance.jsx    -> /services/ai-governance
│       │   ├── SvcAISecurity.jsx      -> /services/ai-security
│       │   ├── SvcSecureSoftware.jsx  -> /services/secure-software
│       │   ├── SvcDigitalInfra.jsx    -> /services/digital-infrastructure
│       │   └── SvcPQC.jsx             -> /services/post-quantum
│       │
│       ├── ma/                  # M&A & Investors pages (6)
│       │   ├── MaOverview.jsx         -> /ma
│       │   ├── MaDueDiligence.jsx     -> /ma/due-diligence
│       │   ├── MaSellSide.jsx         -> /ma/sell-side
│       │   ├── MaPostDeal.jsx         -> /ma/post-deal
│       │   ├── MaPortfolio.jsx        -> /ma/portfolio
│       │   └── MaStartup.jsx          -> /ma/startup-growth
│       │
│       ├── industries/          # Industry pages (9)
│       │   ├── Industries.jsx         -> /industries
│       │   ├── IndFinancial.jsx       -> /industries/financial-services
│       │   ├── IndGovt.jsx            -> /industries/government-public-sector
│       │   ├── IndDPI.jsx             -> /industries/dpi-digital-public-goods
│       │   ├── IndPE.jsx              -> /industries/private-equity
│       │   ├── IndTech.jsx            -> /industries/technology-saas
│       │   ├── IndFintech.jsx         -> /industries/fintech-payments
│       │   ├── IndAI.jsx              -> /industries/ai-product-companies
│       │   └── IndCritical.jsx        -> /industries/critical-infrastructure
│       │
│       └── experience/          # Experience pages (5)
│           ├── Experience.jsx         -> /experience
│           ├── ExpEngagements.jsx     -> /experience/engagements
│           ├── ExpMA.jsx              -> /experience/ma
│           ├── ExpDPI.jsx             -> /experience/dpi-dpg
│           └── ExpGlobal.jsx          -> /experience/global-delivery
│
├── public/
│   ├── images/                  # Static images (team photos)
│   ├── pdfs/                    # Insight publications (PDF)
│   └── favicon-ns.png           # Nucleus Systems shield favicon
│
├── index.html                   # Title: "Nucleus Systems | Digital Trust Assurance"
├── vite.config.js
└── package.json
```

---

## Routing

All routes are in [`src/App.jsx`](src/App.jsx) using `HashRouter`. All routing is client-side via the URL hash — no server-side rewrites needed.

### Core Pages

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About Nucleus Systems |
| `/team` | Leadership & Team |
| `/careers` | Careers |
| `/contact` | Contact |
| `/insights` | Insights hub |
| `/paxley` | Paxley Software (related venture) |

### Services (nav: Services)

| Path | Page |
|---|---|
| `/services/fractional-ciso` | Fractional / Interim CISO |
| `/services/cybersecurity-advisory` | Cybersecurity Strategy & Leadership |
| `/services/penetration-testing` | Penetration Testing |
| `/services/operational-resilience` | Operational Resilience & Managed Security |

### Solutions (nav: Solutions)

| Path | Page |
|---|---|
| `/services/ai-governance` | AI Governance & Regulatory Readiness |
| `/services/ai-security` | AI Security & Agentic AI |
| `/services/secure-software` | Secure Software & DevSecOps |
| `/services/digital-infrastructure` | Digital Infrastructure & Critical Systems |
| `/services/post-quantum` | Post-Quantum & Emerging Technology |

### M&A & Investors

| Path | Page |
|---|---|
| `/ma` | M&A Overview |
| `/ma/due-diligence` | Cyber Due Diligence |
| `/ma/sell-side` | Sell-Side & Exit Readiness |
| `/ma/post-deal` | Post-Deal Cybersecurity |
| `/ma/portfolio` | Portfolio Cybersecurity |
| `/ma/startup-growth` | Start-up & Growth Readiness |

### Industries

| Path | Page |
|---|---|
| `/industries` | Industries Overview |
| `/industries/financial-services` | Financial Services |
| `/industries/government-public-sector` | Government & Public Sector |
| `/industries/dpi-digital-public-goods` | Digital Public Infrastructure |
| `/industries/private-equity` | Private Equity & Investment |
| `/industries/technology-saas` | Technology & SaaS |
| `/industries/fintech-payments` | Fintech & Payments |
| `/industries/ai-product-companies` | AI Product Companies |
| `/industries/critical-infrastructure` | Critical Infrastructure |

### Experience

| Path | Page |
|---|---|
| `/experience` | Experience Overview |
| `/experience/engagements` | Selected Engagements |
| `/experience/ma` | M&A Experience |
| `/experience/dpi-dpg` | DPI & Digital Public Goods Experience |
| `/experience/global-delivery` | Global Delivery |

### Legacy Redirects

| Old path | Redirects to |
|---|---|
| `/sol-mdr` | `/services/operational-resilience` |
| `/sol-payments` | `/services/digital-infrastructure` |
| `/sol-identity` | `/services/digital-infrastructure` |
| `/sol-fintech` | `/services/digital-infrastructure` |
| `/sol-pqc` | `/services/post-quantum` |
| `/pillar-cyber` | `/services/cybersecurity-advisory` |
| `/pillar-aigov` | `/services/ai-governance` |
| `/pillar-aisec` | `/services/ai-security` |
| `/pillar-code` | `/services/secure-software` |
| `/fw-cmmf` | `/services/cybersecurity-advisory` |
| `/fw-aigf` | `/services/ai-governance` |
| `/fw-aisca` | `/services/ai-security` |
| `/fw-ctaf` | `/services/secure-software` |
| `/plat-cyber` | `/services/cybersecurity-advisory` |
| `/plat-aisec` | `/services/ai-security` |

---

## Navigation Structure

```
Services ▾
  ├─ Fractional / Interim CISO
  ├─ Cybersecurity Strategy & Leadership
  ├─ Penetration Testing
  └─ Operational Resilience

Solutions ▾
  ├─ AI Governance & Regulatory Readiness
  ├─ AI Security & Agentic AI
  ├─ Secure Software & DevSecOps
  ├─ Digital Infrastructure
  └─ Post-Quantum Security

M&A & Investors ▾
  ├─ M&A Cyber Due Diligence
  ├─ Sell-Side & Exit Readiness
  ├─ Post-Deal Cybersecurity
  ├─ Portfolio Cybersecurity
  ├─ Start-up & Growth Readiness
  └─ M&A Overview

Industries ▾
  ├─ Financial Services
  ├─ Government & Public Sector
  ├─ Digital Public Infrastructure
  ├─ Private Equity & Investment
  ├─ Technology & SaaS
  ├─ Fintech & Payments
  ├─ AI Product Companies
  ├─ Critical Infrastructure
  └─ All Industries

Experience ▾
  ├─ Selected Engagements
  ├─ M&A Experience
  ├─ DPI & Digital Public Goods
  ├─ Global Delivery
  └─ Experience Overview

About ▾
  ├─ Nucleus Systems
  ├─ Leadership & Team
  └─ Careers

Insights        (direct link)
Contact         (direct link)
[Book a Briefing]  (CTA button)
```

---

## CSS Architecture

| File | Purpose |
|---|---|
| `index.css` | Design tokens, base reset, primary component styles |
| `styles.css` | Additional global styles — cards, animations, page-specific |
| `styles-gtm.css` | Service page templates, homepage sections, M&A layouts |

### Key Design Tokens

```css
--navy:   #010B1D   /* Primary dark background */
--blue:   #0B50C8   /* Primary accent */
--orange: #EA580C   /* Secondary accent / CTA */
--slate:  #64748B   /* Body text */
--grey:   #F8FAFC   /* Light section background */
--line:   #E2E8F0   /* Border / divider */
--mono:   'JetBrains Mono', monospace
--pad:    clamp(20px, 4vw, 80px)
```

---

## Page Template

All 9 service/solution pages and 6 M&A pages follow a consistent section structure:

1. **Hero** — eyebrow, H1, lede, dual CTA
2. **Client Problem** — 2-col grid: framing text + 4 problem cards
3. **What We Do** — numbered card grid
4. **Scope / Deliverables / Outcomes** — 3-col list columns
5. **Buying Triggers** — trigger grid
6. **Relevant Standards** — pill badges
7. **Related Services** — 3-col link cards
8. **Closing CTA band**

---

## Insights

`Insights.jsx` manages all publications in a single `INSIGHTS` array (no CMS).

To add a new article: prepend an entry to the `INSIGHTS` array and drop the PDF into `public/pdfs/`.

**Categories:** `thought-leadership` · `ai-trust` · `digital-infra` · `regulation` · `services` · `framework` · `product`

PDF thumbnails render the first page of each PDF lazily (only when in viewport) via `pdfjs-dist`.

---

## Animations

`useReveal` hook — add `className="reveal"` to any element for scroll-triggered fade-up:

```jsx
useReveal()
<div className="reveal">Fades in when scrolled into view</div>
```

---

## Key Content Decisions (August 2026 GTM Repositioning)

- **Services vs Solutions split:** Advisory engagements (Fractional CISO, Cybersecurity Strategy, Pen Testing, Operational Resilience) live under **Services**. Technology-area solutions (AI Governance, AI Security, Secure Software, Digital Infrastructure, Post-Quantum) live under **Solutions**.
- **No proprietary acronyms on commercial surfaces.** NS-CMMF, NS-AIGF, NS-AISCA, NS-CTAF appear only within Insights article titles (reflecting published PDF titles).
- **Client outcomes first** — service pages lead with the client's problem, not methodology.
- **Paxley Software** is positioned as a related venture (footer link only).
- **M&A** is a first-class commercial section with 6 dedicated pages.
- **Industries** section: 9 pages covering 8 sectors with dedicated content per sector.
- **Experience** section: 5 pages (engagements, M&A track record, DPI/DPG expertise, global delivery).
- **All pages** are fully routed, building clean at `npm run build`.
