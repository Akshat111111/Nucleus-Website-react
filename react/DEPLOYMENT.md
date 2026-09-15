# Nucleus Systems Website — Deployment Guide

---

## Quick Reference

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server — `http://localhost:5173/` |
| `npm run build` | Production build — output to `dist/` |
| `npm run preview` | Preview production build locally |

---

## Local Development

```bash
cd react/
npm install       # first time only
npm run dev
```

The dev server starts at **http://localhost:5173/** with hot module replacement (HMR). All changes to JSX and CSS are reflected instantly without a page reload.

---

## Production Build

```bash
cd react/
npm run build
```

Output: `react/dist/` — a fully static site with hashed asset filenames for cache busting.

**Expected output:**
```
✓ built in ~700ms
dist/
  index.html
  assets/
    index-[hash].js
    index-[hash].css
    pdf.worker-[hash].mjs
```

### Verify the build locally before deploying

```bash
npm run preview
# Opens at http://localhost:4173/
```

---

## Hosting Requirements

The site uses **`HashRouter`** (`/#/path` URLs), which means:

- **No server-side URL rewriting is required.** All routing is handled client-side via the URL hash fragment.
- The server only ever needs to serve `index.html` for any URL — the React app handles everything else.
- This makes the site compatible with any static host: GitHub Pages, Netlify, Vercel, S3 + CloudFront, Azure Static Web Apps, cPanel shared hosting, etc.

---

## Deployment Options

### Option 1 — GitHub Pages

```bash
npm run build
# Copy dist/ contents to the gh-pages branch root, or use gh-pages package:
npx gh-pages -d dist
```

Set GitHub Pages source to the `gh-pages` branch root.

No `_redirects` or `nginx.conf` needed — HashRouter works on GitHub Pages without any config.

### Option 2 — Netlify

1. Connect the repo to Netlify.
2. Set build command: `npm run build`
3. Set publish directory: `react/dist`
4. No redirect rules needed (HashRouter).

Or deploy manually:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Option 3 — Vercel

```bash
npm run build
vercel --prod
```

Or connect the repo and set:
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `react`

### Option 4 — Static File Server / cPanel

```bash
npm run build
```

Upload the contents of `react/dist/` to the web root (e.g. `public_html/`). The `.htaccess` file in the project root already handles any non-hash URL fallback if needed.

### Option 5 — AWS S3 + CloudFront

1. Build: `npm run build`
2. Sync to S3: `aws s3 sync dist/ s3://your-bucket-name --delete`
3. Invalidate CloudFront: `aws cloudfront create-invalidation --distribution-id XXXX --paths "/*"`

S3 static website hosting + CloudFront works natively with HashRouter — no Lambda@Edge needed.

---

## Environment

No environment variables are required. The site is entirely static — no API keys, no backend, no `.env` file needed for production.

---

## PDF Assets

Insight article PDFs live in `public/pdfs/`. They are **not bundled by Vite** — they are served as static files from `dist/pdfs/` at build time.

To add a new insight:
1. Drop the PDF into `public/pdfs/`
2. Add an entry to the `INSIGHTS` array at the top of `src/pages/Insights.jsx`
3. Rebuild and deploy

---

## Favicon & Browser Tab

- **Favicon:** `public/favicon-ns.png` — the Nucleus Systems shield mark
- **Title:** `Nucleus Systems | Digital Trust Assurance` (set in `index.html`)
- **Theme colour:** `#0a0f1e` (navy) — set via `<meta name="theme-color">`

---

## Post-Deployment Checks

After deploying, verify:

- [ ] Homepage loads at root URL
- [ ] Browser tab shows "Nucleus Systems | Digital Trust Assurance" and the shield favicon
- [ ] Navbar: Services · Solutions · M&A & Investors · Industries · Experience · About all dropdown correctly
- [ ] At least one Services page loads (e.g. `/#/services/fractional-ciso`)
- [ ] At least one Industries page loads (e.g. `/#/industries/financial-services`)
- [ ] At least one Experience page loads (e.g. `/#/experience/ma`)
- [ ] Legacy redirect works: `/#/sol-mdr` → redirects to `/#/services/operational-resilience`
- [ ] Insights page loads and PDF thumbnails render
- [ ] Contact form renders (note: no backend — form submission requires integration with Formspree, Netlify Forms, or similar)
- [ ] Mobile menu opens and collapses correctly

---

## Build Health

Current build status: **clean** — `✓ built in ~700ms, zero errors`

Total routed pages: **37**

| Section | Count |
|---|---|
| Core pages | 7 |
| Services | 4 |
| Solutions | 5 |
| M&A & Investors | 6 |
| Industries | 9 |
| Experience | 5 |
| **Total** | **37** |
