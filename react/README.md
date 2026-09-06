# Nucleus Systems Website

**The Digital Trust Assurance Company** — corporate website for Nucleus Systems, built with React + Vite.

> Cybersecurity, AI Trust and Technology Risk — Assessed, Improved and Independently Validated.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev) |
| Build tool | [Vite](https://vite.dev) (with Oxlint) |
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
npm run dev       # dev server → http://localhost:5173/
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

---

## Project Structure

```
react/
├── src/
│   ├── App.jsx                  # Router — all routes defined here
│   ├── main.jsx                 # Entry point — imports CSS in order
│   ├── index.css                # Primary design system & component styles
│   ├── styles.css               # Additional global styles
│   ├── styles-gtm.css           # GTM repositioning styles (Aug 2026)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Desktop nav — Services / M&A / About dropdowns
│   │   │   ├── MobileMenu.jsx   # Mobile nav — accordion groups
│   │   │   └── Footer.jsx       # 4-column footer
│   │   └── common/
│   │       ├── Globe.jsx        # Interactive 3D globe
│   │       ├── ScrollTopBtn.jsx
│   │       └── EmailFab.jsx
│   │
│   ├── hooks/
│   │   └── useReveal.js         # IntersectionObserver fade-in animations
│   │
│   └── pages/
│       ├── Home.jsx             # Homepage
│       ├── About.jsx
│       ├── Team.jsx
│       ├── Careers.jsx
│       ├── Contact.jsx
│       ├── Insights.jsx         # Articles & research hub
│       ├── Paxley.jsx           # Related venture (footer access only)
│       │
│       ├── services/            # Service pages (8)
│       │   ├── SvcCybersecurity.jsx   → /services/cybersecurity-advisory
│       │   ├── SvcAIGovernance.jsx    → /services/ai-governance
│       │   ├── SvcAISecurity.jsx      → /services/ai-security
│       │   ├── SvcSecureSoftware.jsx  → /services/secure-software
│       │   ├── SvcPenTest.jsx         → /services/penetration-testing
│       │   ├── SvcResilience.jsx      → /services/operational-resilience
│       │   ├── SvcDigitalInfra.jsx    → /services/digital-infrastructure
│       │   └── SvcPQC.jsx             → /services/post-quantum
│       │
│       ├── ma/                  # M&A & Investors pages (5)
│       │   ├── MaOverview.jsx         → /ma
│       │   ├── MaDueDiligence.jsx     → /ma/due-diligence
│       │   ├── MaSellSide.jsx         → /ma/sell-side
│       │   ├── MaPostDeal.jsx         → /ma/post-deal
│       │   └── MaPortfolio.jsx        → /ma/portfolio
│       │
│       └── solutions/           # Deep-dive solution pages (direct URL only)
│           ├── SolMdr.jsx
│           ├── SolPayments.jsx
│           ├── SolIdentity.jsx
│           ├── SolFintech.jsx
│           └── SolPqc.jsx
│
├── public/
│   ├── images/                  # Static images (team photos, logos)
│   └── pdfs/                    # Insight publications (PDF)
│
├── index.html
├── vite.config.js
└── package.json
```

---

## Routing

All routes are defined in [`src/App.jsx`](src/App.jsx) using `HashRouter`. URL hash routing (`/#/path`) is used to support static hosting without server-side rewrites.

### Active Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About Nucleus Systems |
| `/team` | Leadership & Team |
| `/careers` | Careers |
| `/contact` | Contact |
| `/insights` | Insights hub |
| `/paxley` | Paxley (related venture) |
| `/services/cybersecurity-advisory` | Cybersecurity Strategy & Leadership |
| `/services/ai-governance` | AI Governance & Regulatory Readiness |
| `/services/ai-security` | AI Security, LLM, RAG & Agentic AI |
| `/services/secure-software` | Secure Software & DevSecOps |
| `/services/penetration-testing` | Penetration Testing & Technical Assurance |
| `/services/operational-resilience` | Operational Resilience & Managed Security |
| `/services/digital-infrastructure` | Digital Infrastructure & Critical Systems |
| `/services/post-quantum` | Post-Quantum & Emerging Technology |
| `/ma` | M&A & Investors overview |
| `/ma/due-diligence` | Cyber Due Diligence |
| `/ma/sell-side` | Sell-Side & Exit Readiness |
| `/ma/post-deal` | Post-Deal Cybersecurity |
| `/ma/portfolio` | Portfolio Cybersecurity |
| `/sol-mdr` | Managed Detection & Response (deep-dive) |
| `/sol-payments` | Payments Security (deep-dive) |
| `/sol-identity` | Identity Security (deep-dive) |
| `/sol-fintech` | Fintech Security (deep-dive) |
| `/sol-pqc` | Post-Quantum (deep-dive) |

### Legacy Redirects

Old URLs from the previous pillar/framework/platform architecture are redirected via `<Navigate replace>`:

| Old path | Redirects to |
|---|---|
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
  ├─ Cybersecurity Strategy & Leadership
  ├─ AI Governance & Regulatory Readiness
  ├─ AI Security, LLM, RAG & Agentic AI
  ├─ Secure Software & DevSecOps
  ├─ ─────────────────────────
  ├─ Penetration Testing & Vulnerability Assessment
  ├─ Operational Resilience & Managed Security
  ├─ Digital Infrastructure & Critical Systems
  └─ Post-Quantum & Emerging Technology

M&A & Investors ▾
  ├─ M&A Cyber Due Diligence
  ├─ Sell-Side & Exit Readiness
  ├─ Post-Deal Cybersecurity
  ├─ Portfolio Cybersecurity
  └─ M&A Overview

About ▾
  ├─ Nucleus Systems
  ├─ Leadership & Team
  └─ Careers

Insights     (direct link)
Contact      (direct link)
[Book a Briefing]  (CTA button)
```

---

## CSS Architecture

Styles are split across three files, imported in order in `main.jsx`:

| File | Purpose |
|---|---|
| `index.css` | Design tokens (CSS variables), base reset, primary component styles, legacy sections |
| `styles.css` | Additional global styles — cards, animations, page-specific components |
| `styles-gtm.css` | New GTM components — service page templates, homepage sections, M&A layouts |

### Key Design Tokens

```css
--navy:   #010B1D   /* Primary dark background */
--blue:   #0B50C8   /* Primary accent */
--orange: #EA580C   /* Secondary accent / CTA */
--slate:  #64748B   /* Body text */
--line:   #E2E8F0   /* Border / divider */
--mono:   'JetBrains Mono', monospace
--pad:    clamp(20px, 4vw, 80px)  /* Responsive horizontal padding */
```

---

## Service Page Template

All 8 service pages and 5 M&A pages follow a consistent section structure:

1. **Hero** — eyebrow label, H1, lede, dual CTA
2. **Client Problem** — 2-col grid: framing text + 4 problem cards
3. **What We Do** — 3-col card grid of service offerings
4. **Scope / Deliverables / Outcomes** — 3-col list columns
5. **Buying Triggers** — 2-col trigger grid
6. **Relevant Standards** — pill badges
7. **Related Services** — 3-col link cards
8. **Closing CTA band**

CSS classes: `svc-hero`, `svc-problem`, `svc-what`, `svc-scope`, `svc-triggers`, `svc-standards`, `svc-related`

---

## Insights

`Insights.jsx` manages all publications in a single `INSIGHTS` array (no CMS). Each article has:

```js
{
  id: 'unique-slug',
  file: 'pdfs/filename.pdf',
  title: '...',
  author: '...',
  role: '...',
  date: 'DD Month YYYY',
  pages: 12,
  readMins: 15,
  category: 'thought-leadership',   // see categories below
  categoryLabel: 'Cybersecurity Leadership',
  description: '...',
}
```

**Categories:** `thought-leadership` · `ai-trust` · `digital-infra` · `regulation` · `services` · `framework` · `product`

To add a new article: add an entry to the top of the `INSIGHTS` array (newest first) and drop the PDF into `public/pdfs/`.

### PDF Thumbnails

Card and featured-article thumbnails render the **actual first page** of each PDF as a `<canvas>` element using `pdfjs-dist`. This is handled by the `PdfThumb` component inside `Insights.jsx`.

**How it works:**
- An `IntersectionObserver` triggers rendering only when the card enters the viewport (lazy — no wasted work off-screen).
- A gradient placeholder (`.thumb-ph`) is shown while the PDF loads, then fades out.
- The canvas fades in via `opacity: 0 → 1` CSS transition once page 1 is rendered.
- The PDF.js worker is resolved at build time using `import.meta.url` — Vite bundles `pdf.worker.mjs` automatically, so **no manual worker file copying is needed**.

```jsx
// Worker setup at top of Insights.jsx
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url,
).toString()
```

---

## Animations

The `useReveal` hook (`src/hooks/useReveal.js`) uses `IntersectionObserver` to add the `in` class to any element with `className="reveal"`, triggering a CSS fade-up animation.

```jsx
// In any page component:
useReveal()

// In JSX:
<div className="reveal">Fades in when scrolled into view</div>
```

---

## Deployment

The site is deployed as a static build. Run:

```bash
npm run build
```

Output goes to `dist/`. Because `HashRouter` is used, no server-side URL rewriting is needed — all routing is handled client-side via the URL hash.

---

## Key Content Decisions (August 2026 GTM Repositioning)

- **Core Pillars, Frameworks, and Platforms** are not exposed in navigation, homepage, or page headings. They exist as internal delivery methodology only.
- **Client outcomes first** — every service page leads with the client's problem, not Nucleus Systems' methodology.
- **Paxley Software** is positioned as a related venture (footer link) — not a Nucleus Systems product or service category.
- **M&A** is a first-class commercial section with its own nav group and 5 dedicated pages.
- The site organising structure is: **Services → M&A & Investors → Industries → Insights → About → Contact**.
