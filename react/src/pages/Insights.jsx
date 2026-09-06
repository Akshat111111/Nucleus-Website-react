import { useState, useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import * as pdfjsLib from 'pdfjs-dist'

// Point the worker at the bundled worker file
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url,
).toString()

// Renders page 1 of a PDF onto a <canvas> when the element enters the viewport
function PdfThumb({ file, grad, className = 'ins-thumb' }) {
  const canvasRef = useRef(null)
  const wrapRef  = useRef(null)
  const rendered = useRef(false)

  useEffect(() => {
    if (!wrapRef.current) return
    const el = wrapRef.current

    const render = async () => {
      if (rendered.current) return
      rendered.current = true
      try {
        const loadTask = pdfjsLib.getDocument(file)
        const pdf = await loadTask.promise
        const page = await pdf.getPage(1)

        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        // Scale to fill the container width at 2× device pixel ratio for sharpness
        const container = canvas.parentElement
        const cssW = container ? container.clientWidth  || 320 : 320
        const dpr  = window.devicePixelRatio || 1
        const vp0  = page.getViewport({ scale: 1 })
        const scale = (cssW / vp0.width) * dpr
        const vp   = page.getViewport({ scale })

        canvas.width  = vp.width
        canvas.height = vp.height
        canvas.style.width  = cssW + 'px'
        canvas.style.height = (vp.height / dpr) + 'px'

        await page.render({ canvasContext: ctx, viewport: vp }).promise
        // Fade in
        canvas.style.opacity = '1'
        // Hide placeholder
        const ph = el.querySelector('.thumb-ph')
        if (ph) ph.style.opacity = '0'
      } catch (e) {
        console.warn('PDF thumb error:', file, e)
      }
    }

    const obs = new IntersectionObserver(
      entries => { if (entries[0].isIntersecting) { render(); obs.disconnect() } },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [file])

  return (
    <div ref={wrapRef} className={className} style={{ background: grad, position: 'relative', overflow: 'hidden' }}>
      {/* Gradient placeholder shown while PDF loads */}
      <div className="thumb-ph" style={{ transition: 'opacity .4s ease' }}>
        <svg viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="13" y2="17" />
        </svg>
      </div>
      {/* PDF canvas — fades in once rendered */}
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, display: 'block', opacity: 0, transition: 'opacity .5s ease', zIndex: 2 }} />
    </div>
  )
}

const INSIGHTS = [
  {
    id: 'nucleus-systems-cybersecurity-structural-reset',
    file: 'pdfs/nucleus-systems-cybersecurity-structural-reset.pdf',
    title: 'Nucleus Systems Cybersecurity Structural Reset',
    author: 'Godfrey Kutumela',
    role: 'CEO & Lead Cybersecurity Practitioner, Nucleus Systems',
    date: '06 September 2026',
    pages: 20, readMins: 25,
    category: 'thought-leadership', categoryLabel: 'Thought Leadership',
    description: 'A comprehensive structural reset of cybersecurity strategy — redefining how organisations must rethink their security posture, governance frameworks, and operational resilience from the ground up in the face of evolving threats.',
  },
  {
    id: 'ns-cmmf-article-3-five-axis-maturity',
    file: 'pdfs/ns-cmmf-article-3-five-axis-maturity.pdf',
    title: 'The 5-Axis Maturity Model: Beyond Superficial Scoring (NS-CMMF v1.0, Article 3 of 5)',
    author: 'Nucleus Systems',
    role: 'Research & Frameworks Team',
    date: '27 August 2026',
    pages: 4, readMins: 6,
    category: 'framework', categoryLabel: 'Framework',
    description: 'Article 3 of the NS-CMMF v1.0 series - how the 5-axis maturity model measures policy, process, technology, people, and measurement to replace superficial scoring with evidence-based maturity.',
  },
  {
    id: 'ns-aigf-article-3-beyond-checkbox-maturity',
    file: 'pdfs/ns-aigf-article-3-beyond-checkbox-maturity.pdf',
    title: 'Beyond Checkbox Maturity (NS-AIGF v1.0, Article 3 of 5)',
    author: 'Nucleus Systems',
    role: 'Research & Frameworks Team',
    date: '27 August 2026',
    pages: 4, readMins: 6,
    category: 'framework', categoryLabel: 'Framework',
    description: 'Article 3 of the NS-AIGF v1.0 series - moving AI governance beyond checkbox compliance to a measurable, evidence-based maturity model for continuous accountability.',
  },
  {
    id: 'the-budget-was-never-denied',
    file: 'pdfs/the-budget-was-never-denied.pdf',
    title: "The Budget Was Never Denied: How Cybersecurity's Communication Crisis Turns Prevention into Catastrophe",
    author: 'Godfrey Kutumela',
    role: 'CEO & Lead Cybersecurity Practitioner, Nucleus Systems',
    date: '06 July 2026',
    pages: 22, readMins: 27,
    category: 'thought-leadership', categoryLabel: 'Thought Leadership',
    description: 'A position paper on why organisations keep underfunding prevention and overspending on recovery - arguing the root cause is not a budget problem but a communication and governance failure that must be solved at board level.',
  },
  {
    id: 'fighting-yesterdays-attack-paths',
    file: 'pdfs/fighting-yesterdays-attack-paths.pdf',
    title: "We Are Still Fighting Yesterday's Attack Paths",
    author: 'Godfrey Kutumela',
    role: 'CEO & Lead Cybersecurity Practitioner, Nucleus Systems',
    date: '21 June 2026',
    pages: 14, readMins: 18,
    category: 'thought-leadership', categoryLabel: 'Thought Leadership',
    description: 'The cost of protecting where attackers were instead of where they are now, an in-depth analysis of identity governance, endpoint visibility, and modern cyber risk governance strategies.',
  },
  {
    id: 'ns-cmmf-article-1-checkbox-security',
    file: 'pdfs/ns-cmmf-article-1-checkbox-security.pdf',
    title: 'The End of Checkbox Security (NS-CMMF v1.0, Article 1 of 5)',
    author: 'Nucleus Systems',
    role: 'Research & Frameworks Team',
    date: '20 July 2026',
    pages: 4, readMins: 6,
    category: 'framework', categoryLabel: 'Framework',
    description: 'Article 1 of the NS-CMMF v1.0 market introduction series - why cybersecurity maturity needs fundamental reinvention, and what a modern, continuously measured framework actually looks like.',
  },
  {
    id: 'ns-cmmf-article-2-unified-control-intelligence',
    file: 'pdfs/ns-cmmf-article-2-unified-control-intelligence.pdf',
    title: 'From Framework Proliferation to Unified Control Intelligence (NS-CMMF v1.0, Article 2 of 5)',
    author: 'Nucleus Systems',
    role: 'Research & Frameworks Team',
    date: '30 July 2026',
    pages: 4, readMins: 6,
    category: 'framework', categoryLabel: 'Framework',
    description: 'Article 2 of the NS-CMMF v1.0 series - how a single unified control set replaces the proliferation of overlapping frameworks with one coherent, measurable source of control intelligence.',
  },
  {
    id: 'ns-aigf-article-1-governance-theatre',
    file: 'pdfs/ns-aigf-article-1-governance-theatre.pdf',
    title: 'The End of AI Governance Theatre (NS-AIGF v1.0, Article 1 of 5)',
    author: 'Nucleus Systems',
    role: 'Research & Frameworks Team',
    date: '20 July 2026',
    pages: 4, readMins: 6,
    category: 'framework', categoryLabel: 'Framework',
    description: 'Article 1 of the NS-AIGF v1.0 market introduction series - why AI accountability needs a new standard, and why most organisations are still producing compliance on paper while running AI risk in practice.',
  },
  {
    id: 'ns-aigf-article-2-three-frameworks',
    file: 'pdfs/ns-aigf-article-2-three-frameworks.pdf',
    title: 'Three Frameworks, One Assessment (NS-AIGF v1.0, Article 2 of 5)',
    author: 'Nucleus Systems',
    role: 'Research & Frameworks Team',
    date: '30 July 2026',
    pages: 4, readMins: 6,
    category: 'framework', categoryLabel: 'Framework',
    description: 'Article 2 of the NS-AIGF v1.0 series - ending AI compliance fragmentation by satisfying the EU AI Act, ISO/IEC 42001, and NIST AI RMF through a single unified assessment.',
  },
  {
    id: 'reframing-critical-infrastructure-risk',
    file: 'pdfs/reframing-critical-infrastructure-risk.pdf',
    title: 'Reframing Critical Infrastructure Risk in the Age of Cyberwar',
    author: 'Godfrey Kutumela',
    role: 'CEO & Lead Cybersecurity Practitioner, Nucleus Systems',
    date: 'May 2026',
    pages: 7, readMins: 20,
    category: 'thought-leadership', categoryLabel: 'Thought Leadership',
    description: 'Water, energy, code, and the new frontline of systemic risk. Why geography and obscurity no longer protect critical infrastructure once its operational core migrates into software, industrial control systems, and AI-assisted decision layers.',
  },
  {
    id: 'protecting-core-banking',
    file: 'pdfs/protecting-core-banking.pdf',
    title: 'Protecting Core Banking: From Implementation to Operations',
    author: 'Godfrey Kutumela',
    role: 'CEO & Lead Cybersecurity Practitioner, Nucleus Systems',
    date: '21 June 2026',
    pages: 21, readMins: 26,
    category: 'thought-leadership', categoryLabel: 'Thought Leadership',
    description: 'Three disciplines that decide whether the banking ledger survives day one and every day after, covering implementation risk, operational security, and continuous assurance for core banking platforms.',
  },
  {
    id: 'cyberwar-dpi-national-security',
    file: 'pdfs/cyberwar-dpi-national-security.pdf',
    title: 'Cyberwar, DPI and the New Frontline of National Security',
    author: 'Godfrey Kutumela',
    role: 'CEO & Lead Cybersecurity Practitioner, Nucleus Systems',
    date: '21 June 2026',
    pages: 22, readMins: 28,
    category: 'thought-leadership', categoryLabel: 'Thought Leadership',
    description: 'A position paper defining a new global risk category and the strategic responses required to strengthen Digital Public Infrastructure security in an era of persistent, cyber-assisted conflict.',
  },
  {
    id: 'threat-modelling-cybersecurity',
    file: 'pdfs/threat-modelling-cybersecurity.pdf',
    title: "Revisiting Cybersecurity's Most Effective Yet Overlooked Practice",
    author: 'Godfrey Kutumela',
    role: 'CEO & Lead Cybersecurity Practitioner, Nucleus Systems',
    date: '21 June 2026',
    pages: 13, readMins: 16,
    category: 'thought-leadership', categoryLabel: 'Thought Leadership',
    description: "Threat modelling for the identification, prioritisation, and resolution of threats, when and where it matters most. A practical re-examination of one of security's most underused disciplines.",
  },
  {
    id: 'open-trust-open-futures',
    file: 'pdfs/open-trust-open-futures.pdf',
    title: 'Open Trust, Open Futures: How Open Source and AI Are Redefining Digital Innovation',
    author: 'Nucleus Systems',
    role: 'Research Team',
    date: '21 June 2026',
    pages: 4, readMins: 5,
    category: 'thought-leadership', categoryLabel: 'Thought Leadership',
    description: 'How nations and organisations are rethinking digital transformation through open source collaboration and AI, and what this shift means for trust, sovereignty, and global digital infrastructure.',
  },
  {
    id: 'ns-aisca-framework',
    file: 'pdfs/ns-aisca-framework.pdf',
    title: 'NS-AISCA v1.0: AI Security Controls Architecture (Full Framework)',
    author: 'Nucleus Systems',
    role: 'Research & Frameworks Team',
    date: '21 June 2026',
    pages: 47, readMins: 55,
    category: 'framework', categoryLabel: 'Framework',
    description: 'The complete NS-AISCA v1.0 framework — 108 AI security controls across 12 security domains, covering adversarial ML, data poisoning, model extraction, prompt injection, GenAI and agentic AI attack surfaces. The technical security counterpart to NS-AIGF.',
  },
  {
    id: 'nucleus-systems-business-profile',
    file: 'pdfs/nucleus-systems-business-profile.pdf',
    title: 'Nucleus Systems Business Profile',
    author: 'Nucleus Systems',
    role: 'Company',
    date: '21 June 2026',
    pages: 20, readMins: 15,
    category: 'services', categoryLabel: 'Services',
    description: 'An overview of Nucleus Systems — our service pillars, frameworks, platforms and solutions across cybersecurity, AI governance and AI security. Covers our advisory, managed detection, and technology offerings for enterprise and government clients.',
  },
  {
    id: 'business-exposure-assessment',
    file: 'pdfs/business-exposure-assessment.pdf',
    title: 'Business Exposure Assessment & Threat Intelligence Services',
    author: 'Nucleus Systems',
    role: 'Services Team',
    date: '21 June 2026',
    pages: 9, readMins: 11,
    category: 'services', categoryLabel: 'Services',
    description: 'DarkOwl-powered dark web monitoring, threat intelligence feeds, and business exposure assessments that give organisations visibility into their external attack surface and emerging threat landscape.',
  },
  {
    id: 'penetration-testing-services',
    file: 'pdfs/penetration-testing-services.pdf',
    title: 'Penetration Testing Services: A Certified, Experience-Led Approach',
    author: 'Nucleus Systems',
    role: 'Services Team',
    date: '21 June 2026',
    pages: 9, readMins: 11,
    category: 'services', categoryLabel: 'Services',
    description: 'CISSP, CSSP, CSSLP and CompTIA Pentest+ certified team with 60+ years combined experience, delivering tool-aided, expert-led penetration testing across network, application, and cloud environments.',
  },
  {
    id: 'paxley-perspectives-securing-software',
    file: 'pdfs/paxley-perspectives-securing-software.pdf',
    title: 'Paxley Perspectives: Why Securing Modern Software the Old Way Risks Obsolescence',
    author: 'Paxley / Nucleus Systems',
    role: 'Product & Engineering Team',
    date: '21 June 2026',
    pages: 8, readMins: 10,
    category: 'product', categoryLabel: 'Product',
    description: "Ten shifts modern engineering teams need to make, and how the Paxley Code Security Platform supports each one. A practitioner's guide to escaping the security modernisation trap.",
  },
]

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'thought-leadership', label: 'Cybersecurity Leadership' },
  { key: 'ai-trust', label: 'AI Trust & Security' },
  { key: 'digital-infra', label: 'Digital Infrastructure' },
  { key: 'regulation', label: 'Regulation & Resilience' },
  { key: 'services', label: 'Services' },
  { key: 'framework', label: 'Research' },
  { key: 'product', label: 'Software & Tools' },
]

// Category accent colours
const CAT_COLORS = {
  'thought-leadership': 'var(--blue)',
  'ai-trust': '#7C3AED',
  'digital-infra': '#00C281',
  'regulation': '#0891B2',
  'framework': 'var(--orange)',
  'services': '#0891B2',
  'product': '#00C281',
}

// Category-specific gradient backgrounds for thumbnails
const THUMB_GRADIENTS = {
  'thought-leadership': 'linear-gradient(135deg, #0B50C8 0%, #1e3a8a 60%, #0a2560 100%)',
  'ai-trust':           'linear-gradient(135deg, #7c3aed 0%, #5b21b6 60%, #3b0764 100%)',
  'digital-infra':      'linear-gradient(135deg, #059669 0%, #047857 60%, #064e3b 100%)',
  'regulation':         'linear-gradient(135deg, #0891B2 0%, #0e7490 60%, #164e63 100%)',
  'framework':          'linear-gradient(135deg, #EA580C 0%, #c2410c 60%, #7c2d12 100%)',
  'services':           'linear-gradient(135deg, #0891B2 0%, #0e7490 60%, #164e63 100%)',
  'product':            'linear-gradient(135deg, #059669 0%, #047857 60%, #064e3b 100%)',
}

// Decorative dot-grid SVG overlay for thumbnails
function ThumbGrid({ uid }) {
  const pid = `tg-${uid}`
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={pid} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pid})`} />
    </svg>
  )
}

function CardThumb({ article }) {
  const grad = THUMB_GRADIENTS[article.category] || THUMB_GRADIENTS['thought-leadership']
  return (
    <>
      <PdfThumb file={article.file} grad={grad} className="ins-thumb" />
      {/* Hover overlay */}
      <div className="ins-thumb-overlay">
        <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
        Read · {article.readMins} min
      </div>
    </>
  )
}

// Sort helper — parses dates like "27 August 2026", "06 July 2026", "May 2026"
function parseDate(str) {
  const d = new Date(str)
  return isNaN(d.getTime()) ? 0 : d.getTime()
}

const SORTED_RECENT = [...INSIGHTS].sort((a, b) => parseDate(b.date) - parseDate(a.date))

// Adds card-visible class via IntersectionObserver so the opacity:0 → animation plays
function useCardReveal(dep) {
  const gridRef = useRef(null)
  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.ins-card:not(.card-visible)')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('card-visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.08 })
    cards.forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [dep])
  return gridRef
}

function InsightCard({ article }) {
  return (
    <a
      className="ins-card"
      href={article.file}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <CardThumb article={article} />
      <div className="ins-body">
        <span className={`ins-cat ${article.category}`}>{article.categoryLabel}</span>
        <h3>{article.title}</h3>
        <p className="ins-desc">{article.description}</p>
        <div className="ins-meta">
          <span>{article.author}</span>
          <span className="dot" />
          <span>{article.date}</span>
          <span className="dot" />
          <span>{article.readMins} min read</span>
        </div>
      </div>
    </a>
  )
}

function FeaturedCard({ article }) {
  const color = CAT_COLORS[article.category] || 'var(--blue)'
  const grad = THUMB_GRADIENTS[article.category] || THUMB_GRADIENTS['thought-leadership']
  const initials = article.author.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
  return (
    <a
      id="insFeatured"
      className="ins-featured"
      href={article.file}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', borderTop: `3px solid ${color}` }}
    >
      {/* Left: thumb — PDF page 1 preview */}
      <PdfThumb file={article.file} grad={grad} className="if-thumb" />
      {/* Right: body */}
      <div className="if-body">
        <div className="if-top">
          <div className="if-cat" style={{ color }}>{article.categoryLabel}</div>
          <div className="if-title">{article.title}</div>
          <p className="if-desc">{article.description}</p>
        </div>
        <div className="if-bottom">
          <div className="if-author-row">
            <div className="if-avatar">{initials}</div>
            <div className="if-author-info">
              <span className="if-author">{article.author}</span>
              <span className="if-date">{article.date}</span>
            </div>
          </div>
          <div className="if-meta">
            <div className="if-meta-pill">
              <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/></svg>
              {article.pages} pages
            </div>
            <div className="if-meta-pill">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {article.readMins} min read
            </div>
          </div>
          <div className="if-read-btn">
            Read publication <span className="arr">→</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default function Insights() {
  useReveal()
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? INSIGHTS
    : INSIGHTS.filter(a => a.category === activeCategory)

  const countFor = (cat) => cat === 'all' ? INSIGHTS.length : INSIGHTS.filter(a => a.category === cat).length

  const featured = filtered[0]
  const rest = filtered.slice(1)

  // Re-run card reveal observer whenever the filter changes
  const gridRef = useCardReveal(activeCategory)

  return (
    <div id="view-insights">

      {/* Masthead */}
      <div className="ins-mast">
        <div className="wrap ins-mast-inner">
          <div>
            <span className="eyebrow">Nucleus Systems Insights</span>
            <h1>The trust frontier, in writing.</h1>
            <p>Research, field notes and practitioner perspectives on cybersecurity, AI trust, M&amp;A risk and digital infrastructure — organised around buyer issues, not proprietary taxonomy.</p>
          </div>
          <div className="ins-mast-stats">
            <div className="ms"><b>{INSIGHTS.length}</b><span>Publications</span></div>
            <div className="ms"><b>{CATEGORIES.length - 1}</b><span>Categories</span></div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="ins-filters">
        <div className="wrap">
          <div className="ins-filters-inner" role="tablist">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                className={`ins-fchip${activeCategory === cat.key ? ' on' : ''}`}
                role="tab"
                aria-selected={activeCategory === cat.key}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label} <span className="fc-count">{countFor(cat.key)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="ins-layout">

        {/* Left: featured + grid */}
        <div>
          {featured && (
            <div style={{ marginBottom: '32px' }}>
              <div className="ins-section-head" style={{ marginBottom: '16px' }}>
                <h2>Featured</h2>
              </div>
              <FeaturedCard article={featured} />
            </div>
          )}

          {rest.length > 0 && (
            <>
              <div className="ins-section-head"><h2>All Publications</h2></div>
              <div className="ins-grid" ref={gridRef}>
                {rest.map(article => (
                  <InsightCard key={article.id} article={article} />
                ))}
              </div>
            </>
          )}

          {filtered.length === 0 && (
            <div className="ins-empty"><p>No publications in this category yet.</p></div>
          )}
        </div>

        {/* Right sidebar */}
        <aside className="ins-sidebar">
          <div className="ins-sidebar-box">
            <h4>Most Recent</h4>
            <div className="ins-sidebar-list">
              {SORTED_RECENT.slice(0, 5).map(a => (
                <a
                  key={a.id}
                  href={a.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ins-sidebar-item"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="sli-cat">{a.categoryLabel}</div>
                  <div className="sli-title">{a.title}</div>
                  <div className="sli-meta">{a.date} · {a.readMins} min</div>
                </a>
              ))}
            </div>
          </div>
          <div className="ins-sidebar-box">
            <h4>Browse by Category</h4>
            <div className="ins-cat-list">
              {CATEGORIES.filter(c => c.key !== 'all').map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`ins-cat-row${activeCategory === cat.key ? ' active' : ''}`}
                >
                  <span>{cat.label}</span>
                  <span className="cr-count">{countFor(cat.key)}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>

    </div>
  )
}

