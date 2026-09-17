import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// ── 01 AI Governance & Security — 9 sub-services ─────────────────────────────
const PILLAR_AI = {
  num: '01',
  title: 'AI Governance & Security',
  subtitle: 'Govern, secure and continuously assure AI across its lifecycle.',
  accent: '#7c3aed',
  hub: '/what-we-do/ai-governance-security',
  links: [
    { label: 'AI Governance & Responsible AI',          to: '/what-we-do/ai/governance' },
    { label: 'AI Regulatory & Compliance Readiness',    to: '/what-we-do/ai/regulatory' },
    { label: 'AI Usage Assurance',                      to: '/what-we-do/ai/usage-assurance' },
    { label: 'AI Security Architecture',                to: '/what-we-do/ai/security-architecture' },
    { label: 'GenAI, LLM, RAG & Agentic AI Security',  to: '/what-we-do/ai/genai-security' },
    { label: 'AI Supply Chain & MLSecOps',              to: '/what-we-do/ai/supply-chain' },
    { label: 'Physical AI & Safety Assurance',          to: '/what-we-do/ai/physical-ai' },
    { label: 'AI Security Operations',                  to: '/what-we-do/ai/secops' },
    { label: 'AI Assurance, Red Teaming & Trust',       to: '/what-we-do/ai/assurance' },
  ],
}

// ── 02 Digital Platform Trust & Assurance — 9 sub-services ───────────────────
const PILLAR_DIGITAL = {
  num: '02',
  title: 'Digital Platform Trust & Assurance',
  subtitle: 'Engineer trust into software, cloud platforms, digital infrastructure and the software supply chain.',
  accent: '#0891b2',
  hub: '/what-we-do/digital-platform-trust',
  links: [
    { label: 'Secure Architecture & Trust-by-Design',   to: '/what-we-do/platform/secure-architecture' },
    { label: 'Secure SDLC & DevSecOps',                 to: '/what-we-do/platform/devsecops' },
    { label: 'Code Trust Assurance',                    to: '/what-we-do/platform/code-trust' },
    { label: 'Software Supply Chain & SBOM',            to: '/what-we-do/platform/supply-chain' },
    { label: 'Application & Platform Security Testing', to: '/what-we-do/platform/security-testing' },
    { label: 'Secure Deployment & Platform Operations', to: '/what-we-do/platform/deployment' },
    { label: 'Cloud & Infrastructure Security',         to: '/what-we-do/platform/cloud-infra' },
    { label: 'DPI, Payments & Digital Infrastructure',  to: '/what-we-do/platform/dpi-security' },
    { label: 'Continuous Platform Trust — Paxley',      to: '/what-we-do/platform/paxley' },
  ],
}

// ── 03 Cybersecurity & Compliance Maturity Management — 9 sub-services ────────
const PILLAR_CYBER = {
  num: '03',
  title: 'Cybersecurity & Compliance Maturity Management',
  subtitle: 'Measure, improve and continuously demonstrate cybersecurity, compliance and operational resilience.',
  accent: '#059669',
  hub: '/what-we-do/cybersecurity-compliance',
  links: [
    { label: 'Cybersecurity Maturity Assessment',       to: '/what-we-do/cyber/maturity' },
    { label: 'Cybersecurity Governance & Strategy',     to: '/what-we-do/cyber/governance' },
    { label: 'Fractional / Virtual CISO',               to: '/what-we-do/cyber/fractional-ciso' },
    { label: 'Cybersecurity Compliance & Regulatory',   to: '/what-we-do/cyber/compliance' },
    { label: 'Operational Resilience & Incident Readiness', to: '/what-we-do/cyber/resilience' },
    { label: 'Threat, Vulnerability & Exposure Mgmt',  to: '/what-we-do/cyber/tvem' },
    { label: 'Managed Security / MDR / SOC',            to: '/what-we-do/cyber/managed-security' },
    { label: 'Post-Quantum Cryptography Readiness',     to: '/what-we-do/cyber/pqc' },
    { label: 'M&A Cyber & Compliance Assurance',        to: '/what-we-do/cyber/ma' },
  ],
}

const PILLARS = [PILLAR_AI, PILLAR_DIGITAL, PILLAR_CYBER]

// ── Sectors dropdown ──────────────────────────────────────────────────────────
const SECTORS = [
  { label: 'Large Enterprises',         to: '/sectors/large-enterprises' },
  { label: 'Financial Services',        to: '/sectors/financial-services' },
  { label: 'Government & Public Sector',to: '/sectors/government-public-sector' },
  { label: 'Software Companies / SaaS', to: '/sectors/software-saas' },
  { label: 'Digital Platform Providers',to: '/sectors/digital-platforms' },
  { label: 'Private Equity / Investors',to: '/sectors/private-equity' },
  { isDivider: true },
  { label: 'All Sectors',               to: '/sectors' },
]

// ── About dropdown ────────────────────────────────────────────────────────────
const ABOUT = [
  { label: 'Nucleus Systems',          to: '/about' },
  { label: 'Leadership & Team',        to: '/team' },
  { label: 'Careers',                  to: '/careers' },
  { isDivider: true },
  { label: 'Our Frameworks',           to: '/how-we-do-it' },
  { isDivider: true },
  { label: 'Experience',               to: '/experience' },
  { label: 'M&A Experience',          to: '/experience/ma' },
  { label: 'DPI / DPG Experience',     to: '/experience/dpi-dpg' },
]

const NAV_ITEMS = [
  { id: 'what-we-do', label: 'What We Do', isMega: true },
  { id: 'sectors',    label: 'Sectors',    children: SECTORS },
  { id: 'about',      label: 'About',      children: ABOUT },
]

export default function Navbar({ onMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [openId, setOpenId] = useState(null)
  const closeTimers = useRef({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = () => setOpenId(null)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const openItem = (id) => {
    clearTimeout(closeTimers.current[id])
    setOpenId(id)
  }

  const closeItem = (id) => {
    closeTimers.current[id] = setTimeout(() => {
      setOpenId(prev => (prev === id ? null : prev))
    }, 150)
  }

  const handleParentClick = (e, id) => {
    e.stopPropagation()
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="wrap nav-inner">
        {/* Logo */}
        <Link className="logo" to="/" aria-label="Nucleus Systems home">
          <span className="brand-logo nuc-l" role="img" aria-label="Nucleus Systems" />
        </Link>

        {/* Desktop nav */}
        <nav className="links" aria-label="Primary">
          {NAV_ITEMS.map(item => (
            <div
              key={item.id}
              className={`nav-item${item.isMega ? ' nav-item--mega' : ''}${openId === item.id ? ' open' : ''}`}
              id={`dd-${item.id}`}
              onMouseEnter={() => openItem(item.id)}
              onMouseLeave={() => closeItem(item.id)}
            >
              <span className="nav-parent" onClick={(e) => handleParentClick(e, item.id)}>
                {item.label} <span className="dd-arrow">▾</span>
              </span>

              {item.isMega ? (
                /* ── THREE-PILLAR MEGA-MENU ── */
                <div className="mega-panel mega-panel--3col" onClick={e => e.stopPropagation()}>
                  <div className="mega-panel-header">
                    <p className="mega-panel-tagline">GOVERN THE AI · TRUST THE PLATFORM · PROVE THE ENTERPRISE</p>
                  </div>
                  <div className="mega-cols">
                    {PILLARS.map((pillar, pi) => (
                      <div
                        className="mega-col"
                        key={pi}
                        style={{ borderTopColor: pillar.accent }}
                      >
                        <Link
                          className="mega-col-header"
                          to={pillar.hub}
                          onClick={() => setOpenId(null)}
                        >
                          <span className="mega-col-num" style={{ color: pillar.accent }}>{pillar.num}</span>
                          <span className="mega-col-title">{pillar.title}</span>
                          <span className="mega-col-arrow" style={{ color: pillar.accent }}>→</span>
                        </Link>
                        <div className="mega-col-links">
                          {pillar.links.map((link, li) => (
                            <Link
                              key={li}
                              to={link.to}
                              onClick={() => setOpenId(null)}
                              className="mega-col-link"
                            >
                              <span className="mega-link-dot" style={{ background: pillar.accent }} />
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* ── REGULAR DROPDOWN ── */
                <div className="dropdown-menu" onClick={e => e.stopPropagation()}>
                  {item.children.map((child, idx) => {
                    if (child.isDivider) return <div key={idx} className="dd-div" />
                    return (
                      <Link
                        key={idx}
                        to={child.to}
                        onClick={() => setOpenId(null)}
                      >
                        {child.label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          ))}

          {/* Direct links */}
          <Link className="nav-direct" to="/how-we-do-it">How We Do It</Link>
          <Link className="nav-direct" to="/paxley">Technology</Link>
          <Link className="nav-direct" to="/insights">Insights</Link>
          <Link className="nav-direct" to="/contact">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="nav-cta">
          <Link className="btn btn-primary" to="/contact">
            Book a Briefing <span className="arr">→</span>
          </Link>
          <button
            className="menu-toggle"
            id="menuBtn"
            aria-label="Open menu"
            onClick={onMenuOpen}
          >
            ≡
          </button>
        </div>
      </div>
    </header>
  )
}
