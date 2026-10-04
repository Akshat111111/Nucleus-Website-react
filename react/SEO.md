# SEO Documentation — Nucleus Systems Website

> Last updated: October 2026  
> Maintainer: Development Team

---

## Overview

This document covers the full SEO implementation for the Nucleus Systems React SPA. The site is built with **Vite + React Router v7** and deployed on **Vercel**.

---

## Architecture

### Router: BrowserRouter

The app uses `BrowserRouter` (clean URLs) rather than `HashRouter`.

| | HashRouter | BrowserRouter |
|---|---|---|
| URL format | `nucleussystems.com/#/about` | `nucleussystems.com/about` |
| Crawlable by Google | No | Yes |
| Social sharing | Broken | Works |
| Canonical URLs | Impossible | Supported |

**Vercel rewrite** in `vercel.json` handles SPA routing so deep-links work on refresh:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Per-Page SEO: `useSEO` Hook

Located at `src/hooks/useSEO.js`.

This lightweight hook uses direct DOM manipulation (no external library) to update all relevant meta tags on every route change:

```js
import { useSEO } from '../hooks/useSEO'

export default function MyPage() {
  useSEO({
    title: 'Page Title | Nucleus Systems',
    description: '150-char description for Google search results.',
    canonical: 'https://www.nucleussystems.com/path',
  })
  // ...
}
```

**Tags updated by `useSEO`:**
- `document.title`
- `<meta name="description">`
- `<link rel="canonical">`
- `<meta property="og:title">`
- `<meta property="og:description">`
- `<meta property="og:url">`
- `<meta name="twitter:title">`
- `<meta name="twitter:description">`

---

## Static Files

### `public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://www.nucleussystems.com/sitemap.xml
```

### `public/sitemap.xml`

Full XML sitemap covering all 50+ routes. Priority tiers:

| Priority | Pages |
|---|---|
| `1.0` | Homepage |
| `0.9` | About, Contact, Pillar hubs |
| `0.85` | Key service pages (Fractional CISO, DevSecOps, M&A Due Diligence, etc.) |
| `0.8` | All other service & sector pages |
| `0.75` | Supporting experience & sub-pages |
| `0.7` | Deep experience pages |

> **Action required after deploy:** Submit `https://www.nucleussystems.com/sitemap.xml` in Google Search Console.

---

## `index.html` — Global Defaults

Located at `index.html`. Contains global fallback metadata loaded on every page before React hydrates.

### Tags Configured

| Tag | Value |
|---|---|
| `<title>` | `Nucleus Systems | Digital Trust Assurance` |
| `meta description` | 230-char global description |
| `meta keywords` | 13 high-value cybersecurity / AI terms |
| `meta author` | `Nucleus Systems` |
| `meta robots` | `index, follow` |
| `link canonical` | `https://www.nucleussystems.com/` |
| `og:type` | `website` |
| `og:image` | `https://www.nucleussystems.com/images/og-social.png` |
| `og:image:dimensions` | `1200 x 630` |
| `twitter:card` | `summary_large_image` |
| `meta theme-color` | `#0a0f1e` |
| `JSON-LD Organization` | Full structured data schema |
| `JSON-LD WebSite` | Site-level schema |

### OG Social Image

> **Action required:** Create `public/images/og-social.png` at **1200 x 630px**.  
> This image appears when sharing any page on LinkedIn, X (Twitter), WhatsApp, etc.  
> Suggested design: Nucleus Systems logo + "Digital Trust Assurance" tagline on dark background.

---

## Per-Page Metadata Inventory

### Core Pages

| Page | Route | Title |
|---|---|---|
| Home | `/` | `Nucleus Systems | Digital Trust Assurance — Cybersecurity, AI Governance & Technology Risk` |
| About | `/about` | `About Nucleus Systems | Founder-Led Digital Trust Assurance Firm` |
| Team | `/team` | `Our Team | Nucleus Systems — Senior Cybersecurity Practitioners` |
| Contact | `/contact` | `Contact Nucleus Systems | Book a Cybersecurity Briefing` |
| Careers | `/careers` | `Careers at Nucleus Systems | Join Our Cybersecurity & AI Team` |
| Insights | `/insights` | `Insights | Cybersecurity & AI Trust Research — Nucleus Systems` |
| Paxley | `/paxley` | `Paxley | Continuous Software Supply Chain Trust — Nucleus Systems` |
| Frameworks | `/impact` | `Nucleus Digital Trust Assurance Architecture | Proprietary Frameworks` |

### What We Do — Pillar Hubs

| Page | Route | Title |
|---|---|---|
| AI Governance & Security | `/what-we-do/ai-governance-security` | `AI Governance & Security Services | 9-Service AI Trust Programme — Nucleus Systems` |
| Digital Platform Trust | `/what-we-do/digital-platform-trust` | `Digital Platform Trust & Security Assurance | Nucleus Systems` |
| Cybersecurity & Compliance | `/what-we-do/cybersecurity-compliance` | `Cybersecurity Maturity Management & M&A Risk | Nucleus Systems` |

### What We Do — AI Governance & Security

| Page | Route | Key Keywords |
|---|---|---|
| AI Governance | `/what-we-do/ai/governance` | EU AI Act, ISO 42001, NIST AI RMF |
| AI Regulatory | `/what-we-do/ai/regulatory` | EU AI Act compliance, conformity assessment |
| AI Usage Assurance | `/what-we-do/ai/usage-assurance` | Shadow AI, GenAI controls |
| AI Security Architecture | `/what-we-do/ai/security-architecture` | NS-AISCA, prompt injection, zero-trust AI |
| GenAI & LLM Security | `/what-we-do/ai/genai-security` | RAG security, agentic AI, LLM assurance |
| AI Supply Chain | `/what-we-do/ai/supply-chain` | MLSecOps, AI SBOM, model signing |
| Physical AI | `/what-we-do/ai/physical-ai` | Cyber-physical AI, robotics, OT |
| AI SecOps | `/what-we-do/ai/secops` | NS AI2 SecOps, AI-assisted SOC |
| AI Assurance | `/what-we-do/ai/assurance` | AI red teaming, MITRE ATLAS |

### What We Do — Digital Platform Trust

| Page | Route | Key Keywords |
|---|---|---|
| Secure Architecture | `/what-we-do/platform/secure-architecture` | NS-SSAF, zero-trust design |
| DevSecOps | `/what-we-do/platform/devsecops` | SAST/DAST, CI/CD security |
| Code Trust | `/what-we-do/platform/code-trust` | NS-CTAF, SBOM, software signing |
| Supply Chain | `/what-we-do/platform/supply-chain` | Open-source risk, dependency governance |
| Security Testing | `/what-we-do/platform/security-testing` | Penetration testing, web, API, mobile |
| Deployment | `/what-we-do/platform/deployment` | NS-SSDOF, IaC, Kubernetes |
| Cloud & Infra | `/what-we-do/platform/cloud-infra` | AWS, Azure, GCP, IAM |
| DPI Security | `/what-we-do/platform/dpi-security` | MOSIP, Mojaloop, digital identity |
| Paxley Platform | `/what-we-do/platform/paxley` | Continuous trust, SBOM, VEX |

### What We Do — Cybersecurity & Compliance

| Page | Route | Key Keywords |
|---|---|---|
| Maturity | `/what-we-do/cyber/maturity` | NS-CMMF, ISO 27001, NIST CSF |
| Governance | `/what-we-do/cyber/governance` | Security strategy, RACI |
| Fractional CISO | `/what-we-do/cyber/fractional-ciso` | vCISO, board presentation |
| Compliance | `/what-we-do/cyber/compliance` | ISO 27001, DORA, NIS2, SOC 2, PCI DSS |
| Resilience | `/what-we-do/cyber/resilience` | DORA, ransomware, incident response |
| TVEM | `/what-we-do/cyber/tvem` | Vulnerability management, threat intelligence |
| Managed Security | `/what-we-do/cyber/managed-security` | MDR, 24/7 detection and response |
| PQC | `/what-we-do/cyber/pqc` | Post-quantum cryptography, NS-PQCF |
| M&A Cyber | `/what-we-do/cyber/ma` | M&A due diligence, cyber risk |

### Sectors

| Page | Route | Key Audience |
|---|---|---|
| Sectors Hub | `/sectors` | All |
| Financial Services | `/sectors/financial-services` | Banks, insurers, asset managers |
| Government | `/sectors/government-public-sector` | Public institutions |
| Digital Platforms / DPI | `/sectors/digital-platforms` | National infrastructure |
| Private Equity | `/sectors/private-equity` | PE deal teams, portfolio |
| Technology & SaaS | `/sectors/software-saas` | Tech companies |
| Fintech & Payments | `/sectors/fintech-payments` | Regulated fintechs |
| AI Product Companies | `/sectors/ai-product-companies` | AI vendors |
| Critical Infrastructure | `/sectors/critical-infrastructure` | Energy, water, transport |

### M&A

| Page | Route |
|---|---|
| Due Diligence | `/ma/due-diligence` |
| Technical Validation | `/ma/technical-validation` |
| Sell-Side | `/ma/sell-side` |
| Post-Deal | `/ma/post-deal` |
| Portfolio | `/ma/portfolio` |
| Startup & Growth | `/ma/startup-growth` |

### Experience

| Page | Route |
|---|---|
| Experience Hub | `/experience` |
| M&A Experience | `/experience/ma` |
| DPI & DPG | `/experience/dpi-dpg` |
| Global Delivery | `/experience/global-delivery` |
| Engagements | `/experience/engagements` |

---

## SEO Best Practices Reference

### Title Tag Rules
- Format: `Primary Keyword | Brand Name` or `Primary Keyword — Brand Name`
- Length: **50–60 characters** (Google truncates beyond ~60)
- Must be unique per page
- Include the most important keyword for that page first

### Meta Description Rules
- Length: **140–160 characters** (Google truncates beyond ~160)
- Must be unique per page
- Should read naturally and include a call to action
- Not a ranking factor, but affects click-through rate (CTR)

### Canonical URL Rules
- Always use full absolute URL: `https://www.nucleussystems.com/path`
- No trailing slash inconsistencies
- Matches the route in `sitemap.xml`

### Keyword Strategy

Core focus keywords for Nucleus Systems:

```
cybersecurity advisory
AI governance
digital trust assurance
M&A cyber due diligence
fractional CISO / vCISO
ISO 42001
EU AI Act compliance
DORA compliance
NIS2
penetration testing
DevSecOps
post-quantum cryptography
Digital Public Infrastructure security
operational resilience
```

---

## Adding SEO to a New Page

When creating a new page component, add `useSEO` as the **first hook call**:

```jsx
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'

export default function MyNewPage() {
  useReveal()
  useSEO({
    title: 'Descriptive Page Title | Nucleus Systems',           // 50-60 chars
    description: 'Compelling description of this specific page.', // 140-160 chars
    canonical: 'https://www.nucleussystems.com/my-new-page',
  })

  return (...)
}
```

Then add the route to `public/sitemap.xml`:

```xml
<url>
  <loc>https://www.nucleussystems.com/my-new-page</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## Post-Deploy Checklist

- [ ] **Google Search Console** — Add property for `nucleussystems.com`
- [ ] **Submit sitemap** — `https://www.nucleussystems.com/sitemap.xml`
- [ ] **Request indexing** — Submit homepage URL for crawling
- [ ] **Create OG image** — `public/images/og-social.png` at 1200x630px
- [ ] **Verify robots.txt** — Visit `https://www.nucleussystems.com/robots.txt`
- [ ] **Test meta tags** — Use https://metatags.io or Facebook Open Graph Debugger
- [ ] **Test structured data** — Use https://search.google.com/test/rich-results
- [ ] **Check canonical tags** — Use browser DevTools > Elements to verify per page
- [ ] **Lighthouse audit** — Run `npm run build && npx serve dist` then test in Chrome
- [ ] **Bing Webmaster Tools** — Submit sitemap at https://www.bing.com/webmasters

---

## Files Modified / Created

| File | Purpose |
|---|---|
| `src/hooks/useSEO.js` | Per-page SEO hook |
| `src/App.jsx` | Switched HashRouter to BrowserRouter |
| `index.html` | Global meta, OG tags, JSON-LD structured data |
| `public/robots.txt` | Crawler directives + sitemap reference |
| `public/sitemap.xml` | All 50+ canonical URLs |
| `src/pages/**/*.jsx` (40+ files) | Per-page `useSEO` hook calls |
