# Deployment Guide

This guide covers how to deploy the Nucleus Systems React + Vite application to **GitHub Pages**, **Netlify**, and **Vercel**. 

Since this project uses `HashRouter`, it is extremely simple to deploy as a static site without needing to configure complex server-side redirect rules (like you would need for `BrowserRouter`).

---

## 1. Deploying to GitHub Pages

GitHub Pages is a great, free hosting option, especially since the repository is already on GitHub.

### Step 1: Update `vite.config.js`

If you are deploying to a repository page (e.g., `https://username.github.io/repo-name/`), you need to set the `base` path in your `vite.config.js` to match the repository name.

Open `vite.config.js` and add the `base` property:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Add this line if deploying to https://github.com/Akshat111111/Nucleus-Website-react
  base: '/Nucleus-Website-react/', 
})
```
*(Note: If you are using a custom domain, you can omit the `base` property or set it to `'/'`.)*

### Step 2: Use GitHub Actions (Recommended)

GitHub provides a streamlined way to build and deploy Vite apps using GitHub Actions.

1. Go to your repository on GitHub.
2. Click on the **Settings** tab.
3. In the left sidebar, click on **Pages**.
4. Under **Build and deployment**, change the **Source** dropdown to **GitHub Actions**.
5. GitHub will suggest some workflows. Click **configure** on the **Static HTML** workflow (or create a new workflow file at `.github/workflows/deploy.yml` with the following content):

```yaml
# .github/workflows/deploy.yml
name: Deploy static content to Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
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
          cache: 'npm'
          # Make sure to update the path if your package.json is in a subdirectory like /react
          cache-dependency-path: './react/package-lock.json' 
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
          path: './react/dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

6. Commit this file. GitHub Actions will automatically trigger a build and deploy your site to `https://Akshat111111.github.io/Nucleus-Website-react/`.

---

## 2. Deploying to Netlify

Netlify is one of the easiest ways to deploy a Vite React app. 

### Method 1: Using the Netlify Dashboard (Simplest)

1. Go to [Netlify](https://app.netlify.com/) and log in.
2. Click **Add new site** > **Import an existing project**.
3. Connect your GitHub account and select the `Nucleus-Website-react` repository.
4. Configure the build settings:
   - **Base directory**: `react` *(Since the React app is inside the `react` folder)*
   - **Build command**: `npm run build`
   - **Publish directory**: `react/dist`
5. Click **Deploy site**.
6. Netlify will build and publish your site automatically on every push to the `main` branch.

*(Optional)* Because you are using `HashRouter`, you don't strictly need a `_redirects` file. However, if you switch to `BrowserRouter` in the future, you must create a `public/_redirects` file containing: `/* /index.html 200`.

---

## 3. Deploying to Vercel

Vercel provides a seamless experience for Vite applications.

### Method 1: Using the Vercel Dashboard (Simplest)

1. Go to [Vercel](https://vercel.com/) and log in with GitHub.
2. Click **Add New...** > **Project**.
3. Import the `Nucleus-Website-react` repository.
4. In the **Configure Project** section:
   - **Framework Preset**: Select **Vite**.
   - **Root Directory**: Click "Edit" and select the `react` folder.
   - The Build and Output settings should auto-fill correctly:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
5. Click **Deploy**.
6. Vercel will give you a live URL and automatically redeploy whenever you push to `main`.

*(Optional)* Like Netlify, Vercel natively handles SPA routing if configured properly, but `HashRouter` works out-of-the-box everywhere without special config. If you ever switch to `BrowserRouter`, you'll need a `vercel.json` file in the root to handle rewrites.

---

## Summary of Build Settings across platforms

No matter where you deploy, the fundamental build settings for this repository are:

* **Framework**: Vite / React
* **Root Directory**: `react/` *(This is important because your package.json is not in the very top folder)*
* **Build Command**: `npm run build`
* **Output / Publish Directory**: `dist` (or `react/dist` relative to the root)

---

## Note: PDF.js Worker (pdfjs-dist)

The Insights page uses `pdfjs-dist` to render PDF page-1 thumbnails. The worker file (`pdf.worker.mjs`) is resolved at build time via `import.meta.url` in `Insights.jsx`:

```js
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url,
).toString()
```

Vite automatically bundles and hashes the worker file into `dist/assets/` during `npm run build`. **No manual copying or extra config is needed** on GitHub Pages, Netlify, or Vercel — it works out of the box with the standard build settings above.

