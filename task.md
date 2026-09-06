# Task List — Nucleus Systems HTML → React

## Phase 1 — Scaffold & CSS
- [x] Scaffold Vite React project in `react/`
- [x] Install dependencies (react-router-dom, gh-pages)
- [x] Configure vite.config.js (base: './')
- [x] Port inline CSS → src/index.css (updated with current index.html CSS)
- [x] Copy styles.css → src/styles.css
- [x] Copy images → react/public/images/
- [x] Copy globe-home.js → react/public/js/
- [x] Copy pdfs → react/public/pdfs/
- [x] Build App.jsx (HashRouter + all routes)
- [x] Build Navbar.jsx (dropdowns, mobile toggle)
- [x] Build MobileMenu.jsx (accordion groups)
- [x] Build Footer.jsx

## Phase 2 — Page Components
- [x] Home.jsx (rewritten to match current index.html: pax-hero, ns-about, reach-strip, hww2, tt2, cp-stack, fw-teaser, plat-teaser, sol2-section, industries, ssp, CTA)
- [x] About.jsx
- [x] Team.jsx
- [x] Careers.jsx (CV modal)
- [x] Contact.jsx (form, globe)
- [x] Insights.jsx
- [x] Paxley.jsx
- [x] PillarCyber.jsx
- [x] PillarAIGov.jsx
- [x] PillarAISec.jsx
- [x] PillarCode.jsx
- [x] FwCmmf.jsx
- [x] FwAigf.jsx
- [x] FwAisca.jsx
- [x] FwCtaf.jsx
- [x] PlatCyber.jsx
- [x] PlatAISec.jsx
- [x] SolMdr.jsx
- [x] SolPayments.jsx
- [x] SolIdentity.jsx
- [x] SolFintech.jsx
- [x] SolPqc.jsx

## Phase 3 — Polish & Deploy Config
- [x] Add useReveal hook (updated to handle both 'visible' and 'in' class patterns)
- [x] Add useScrollTop hook
- [x] ScrollToTop + EmailFab components
- [x] Add gh-pages deploy script
- [x] Verify build compiles ✅ (build passes, only chunk-size warnings)
- [x] Fix JSX errors: PlatCyber.jsx </p> → </div>, SolPqc.jsx double tbody
- [x] Fix <table> missing <tbody> across 14 files
- [x] Fix ns-about-left text invisible (CSS opacity:0 needed 'in' class — added via useEffect)

## Phase 4 — Cleanup (After Verification)
- [x] Remove old .html files (23 files deleted)
- [x] Remove old css/ and js/ folders

## Phase 5 — Final Fixes
- [x] Fix careers page only (Everything else is perfect)
