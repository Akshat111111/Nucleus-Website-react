# Nucleus Systems Website — Deployment Guide

> **Primary target: GitHub Pages** — the `gh-pages` package is already installed and `npm run deploy` is pre-configured.

---

## Quick Reference

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server — `http://localhost:5173/` |
| `npm run build` | Production build — output to `dist/` |
| `npm run preview` | Preview production build locally at `http://localhost:4173/` |
| `npm run deploy` | Build **and** push to `gh-pages` branch (GitHub Pages) |

---

## Local Development

```bash
cd react/
npm install       # first time only
npm run dev
```

The dev server starts at **http://localhost:5173/** with hot module replacement (HMR). All JSX and CSS changes are reflected instantly.

---

## Production Build

```bash
cd react/
npm run build
```

Output: `react/dist/` — fully static, hashed asset filenames for cache-busting.

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

Verify locally before deploying:

```bash
npm run preview
# Opens at http://localhost:4173/
```

---

## Hosting Notes — HashRouter

The site uses **`HashRouter`** (`/#/path` URLs). This is intentional and critical for static hosting:

- **No server-side URL rewriting is needed.** The hash fragment is handled entirely client-side.
- Works natively on GitHub Pages, Netlify, Vercel, S3, cPanel — without any redirect config.
- Direct deep-link navigation (e.g. `/#/services/fractional-ciso`) works on all hosts without `_redirects` or `nginx.conf`.

---

## GitHub Pages Deployment

### Prerequisites

- The repository must be on GitHub.
- You need push access to the repo.
- The `gh-pages` package is already installed (`"gh-pages": "^6.3.0"` in `package.json`).

---

### Step 1 — Configure the `base` URL in `vite.config.js`

This is the most common source of broken deployments. The value depends on **where** the site will be hosted:

#### Option A — Custom domain (e.g. `nucleussystems.com`) ✅ Recommended

No change needed. The current config already works:

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: './',   // relative paths — works with custom domain
})
```

#### Option B — GitHub's default subdomain (e.g. `https://username.github.io/repo-name/`)

Change `base` to the exact repository name (with leading and trailing slashes):

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/Nucleus-Website-react/',   // ← replace with your actual repo name
})
```

> **Why?** GitHub Pages serves project sites at a sub-path. Without this, all JS/CSS asset paths will be wrong (404s on assets).

---

### Step 2 — Add `homepage` to `package.json`

The `gh-pages` package reads the `homepage` field to determine the correct URL. Add it to `react/package.json`:

```json
{
  "name": "nucleus-systems-react",
  "homepage": "https://username.github.io/Nucleus-Website-react",
  ...
}
```

For a custom domain, set it to your domain:

```json
"homepage": "https://nucleussystems.com"
```

---

### Step 3 — Configure GitHub Pages source in repository settings

1. Go to your GitHub repository → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Set the branch to **`gh-pages`** and folder to **`/ (root)`**
4. Click **Save**

---

### Step 4 — Deploy

From the `react/` directory:

```bash
npm run deploy
```

This runs `predeploy` → `npm run build` automatically, then pushes `dist/` to the `gh-pages` branch.

**First deploy takes ~30–60 seconds.** GitHub then takes up to 5 minutes to propagate the site.

Your site will be live at:
- `https://username.github.io/Nucleus-Website-react/` (without custom domain)
- `https://nucleussystems.com/` (with custom domain configured)

---

### Automated Deployment via GitHub Actions

If you prefer CI/CD (auto-deploy on every push to `main`), replace `.github/workflows/deploy.yml` with:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: ./react/package-lock.json

      - name: Install dependencies
        run: npm ci
        working-directory: ./react

      - name: Build
        run: npm run build
        working-directory: ./react

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./react/dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> **Note:** When using this workflow, change the GitHub Pages **Source** in repository Settings → Pages to **GitHub Actions** (not the `gh-pages` branch).

---

### Custom Domain Setup

1. In your DNS provider, add a **CNAME** record:
   ```
   CNAME  www  username.github.io
   ```
   Or for the apex domain, add **A records** pointing to GitHub's IPs:
   ```
   A  @  185.199.108.153
   A  @  185.199.109.153
   A  @  185.199.110.153
   A  @  185.199.111.153
   ```

2. In repository Settings → Pages → **Custom domain**, enter your domain and click **Save**.

3. Add a `CNAME` file to `react/public/` containing just your domain:
   ```
   nucleussystems.com
   ```
   Vite copies everything in `public/` to `dist/` at build time, so the `CNAME` file is preserved on every deploy automatically.

4. Tick **Enforce HTTPS** once the certificate has been issued (~15 minutes).

5. Keep `vite.config.js` `base` as `'./'` and update `homepage` in `package.json` to your domain.

---

## Troubleshooting

| Problem | Cause | Fix |
|---|---|---|
| Blank page after deploy | Wrong `base` in `vite.config.js` | Set `base: '/repo-name/'` for project pages, or `'./'` for custom domain |
| Assets 404 (JS/CSS not loading) | `base` mismatch | Check DevTools → Network — asset path prefix must match your Pages URL |
| Routes work on home but 404 on hard refresh | Only occurs with `BrowserRouter` | Site uses `HashRouter` — this should not happen |
| `npm run deploy` fails: `spawn git ENOENT` | Git not on PATH in terminal | Ensure Git is installed and accessible |
| CNAME wiped on every deploy | `CNAME` file not in `public/` | Add `react/public/CNAME` with your domain — Vite copies it to `dist/` |
| PDF thumbnails broken after base change | Worker path outdated | Rebuild after updating `base` — Vite re-hashes the worker automatically |
| GitHub Actions deploy fails with 403 | Missing Pages permissions | Ensure workflow has `permissions: pages: write, id-token: write` |

---

## Other Deployment Options

These are supported but GitHub Pages is the recommended target:

| Platform | Build command | Output directory | Special config |
|---|---|---|---|
| **Netlify** | `npm run build` | `react/dist` | No redirect rules needed (HashRouter) |
| **Vercel** | `npm run build` | `dist` (root: `react/`) | `vercel.json` already present in `react/` |
| **AWS S3 + CloudFront** | `npm run build` | sync `dist/` to S3 | No Lambda@Edge needed |
| **cPanel / shared host** | `npm run build` | upload `dist/` to `public_html/` | `.htaccess` in repo root handles fallback |

---

## Environment

No environment variables required. The site is entirely static — no API keys, no backend, no `.env` file needed.

---

## PDF Assets

Insight article PDFs live in `public/pdfs/`. They are **not bundled by Vite** — copied directly to `dist/pdfs/` at build time.

To add a new insight:
1. Drop the PDF into `public/pdfs/`
2. Add an entry to the `INSIGHTS` array at the top of `src/pages/Insights.jsx`
3. Run `npm run deploy`

The `pdfjs-dist` worker (`pdf.worker.mjs`) is bundled and hashed automatically by Vite — no manual steps needed on any host.

---

## Favicon & Browser Tab

- **Favicon:** `public/favicon-ns.png` — Nucleus Systems shield mark
- **Title:** `Nucleus Systems | Digital Trust Assurance` (set in `index.html`)
- **Theme colour:** `#0a0f1e` (navy) — `<meta name="theme-color">`

---

## Post-Deployment Checklist

After every deploy, verify the following:

- [ ] Homepage loads at root URL
- [ ] Browser tab shows "Nucleus Systems | Digital Trust Assurance" and the shield favicon
- [ ] All JS and CSS assets load (no 404s in DevTools → Network)
- [ ] Navbar dropdowns: Services · Solutions · M&A & Investors · Industries · Experience · About — all expand correctly
- [ ] At least one Services page: `/#/services/fractional-ciso`
- [ ] At least one Solutions page: `/#/services/ai-governance`
- [ ] At least one M&A page: `/#/ma/due-diligence`
- [ ] At least one Industries page: `/#/industries/financial-services`
- [ ] At least one Experience page: `/#/experience/engagements`
- [ ] Legacy redirect: `/#/sol-mdr` → `/#/services/operational-resilience`
- [ ] Insights page loads and PDF thumbnails render
- [ ] Contact form renders (no backend — integrate Formspree or Netlify Forms for submissions)
- [ ] Mobile menu opens and collapses correctly
- [ ] Custom domain (if configured): HTTPS enforced, no mixed-content warnings

---

## Build Health

Current status: **clean** — `✓ built in ~700ms, zero errors`

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
