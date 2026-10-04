import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PILLARS = [
  {
    title: 'AI Governance & Security',
    icon: '🤖',
    hub: '/what-we-do/ai-governance-security',
    items: [
      { label: 'AI Governance & Responsible AI',          desc: 'Ethical AI frameworks & policies',            to: '/what-we-do/ai/governance' },
      { label: 'AI Regulatory & Compliance Readiness',    desc: 'Navigate AI laws & regulations',              to: '/what-we-do/ai/regulatory' },
      { label: 'AI Usage Assurance',                      desc: 'Validate AI usage across your org',           to: '/what-we-do/ai/usage-assurance' },
      { label: 'AI Security Architecture',                desc: 'Secure-by-design AI systems',                 to: '/what-we-do/ai/security-architecture' },
      { label: 'GenAI, LLM, RAG & Agentic AI Security',   desc: 'Secure generative & agentic AI stacks',      to: '/what-we-do/ai/genai-security' },
      { label: 'AI Supply Chain & MLSecOps',              desc: 'Model provenance & pipeline security',        to: '/what-we-do/ai/supply-chain' },
      { label: 'Physical AI & Safety Assurance',          desc: 'Safety assurance for physical AI systems',    to: '/what-we-do/ai/physical-ai' },
      { label: 'AI Security Operations',                  desc: 'Continuous AI threat monitoring',             to: '/what-we-do/ai/secops' },
      { label: 'AI Assurance, Red Teaming & Trust',       desc: 'Adversarial testing for AI reliability',      to: '/what-we-do/ai/assurance' },
    ],
  },
  {
    title: 'Digital Platform Trust & Assurance',
    icon: '🛡️',
    hub: '/what-we-do/digital-platform-trust',
    items: [
      { label: 'Secure Architecture & Trust-by-Design',   desc: 'Security built into platform foundations',    to: '/what-we-do/platform/secure-architecture' },
      { label: 'Secure SDLC & DevSecOps',                 desc: 'Security embedded in development lifecycle',  to: '/what-we-do/platform/devsecops' },
      { label: 'Code Trust Assurance',                    desc: 'Assurance for code integrity & quality',      to: '/what-we-do/platform/code-trust' },
      { label: 'Software Supply Chain & SBOM',            desc: 'Visibility into software dependencies',       to: '/what-we-do/platform/supply-chain' },
      { label: 'Application & Platform Security Testing', desc: 'Deep-dive security testing & pen tests',      to: '/what-we-do/platform/security-testing' },
      { label: 'Secure Deployment & Platform Operations', desc: 'Safe and resilient platform operations',      to: '/what-we-do/platform/deployment' },
      { label: 'Cloud & Infrastructure Security',         desc: 'Cloud-native security architecture',          to: '/what-we-do/platform/cloud-infra' },
      { label: 'DPI, Payments & Digital Infra Security',  desc: 'Security for critical digital infrastructure',to: '/what-we-do/platform/dpi-security' },
      { label: 'Continuous Platform Trust — Paxley',      desc: 'Real-time platform trust monitoring',         to: '/what-we-do/platform/paxley' },
    ],
  },
  {
    title: 'Cybersecurity & Compliance',
    icon: '🔐',
    hub: '/what-we-do/cybersecurity-compliance',
    items: [
      { label: 'Cybersecurity Maturity Assessment',        desc: 'Benchmark your security posture',             to: '/what-we-do/cyber/maturity' },
      { label: 'Cybersecurity Governance & Strategy',      desc: 'Board-level security governance',             to: '/what-we-do/cyber/governance' },
      { label: 'Fractional / Virtual CISO',                desc: 'On-demand senior security leadership',        to: '/what-we-do/cyber/fractional-ciso' },
      { label: 'Cybersecurity Compliance & Regulatory',    desc: 'Meet your regulatory obligations',            to: '/what-we-do/cyber/compliance' },
      { label: 'Operational Resilience & Incident Readiness', desc: 'Prepare for and recover from incidents',  to: '/what-we-do/cyber/resilience' },
      { label: 'Threat, Vulnerability & Exposure Mgmt',   desc: 'Identify and prioritise exposures',           to: '/what-we-do/cyber/tvem' },
      { label: 'Managed Security / MDR / SOC',             desc: '24/7 managed detection & response',          to: '/what-we-do/cyber/managed-security' },
      { label: 'Post-Quantum Cryptography Readiness',      desc: 'Prepare for quantum-era threats',             to: '/what-we-do/cyber/pqc' },
    ],
  },
  {
    title: 'M&A Cyber & Compliance Assurance',
    icon: '📊',
    hub: '/what-we-do/cyber/ma',
    items: [
      { label: 'Buy-Side Due Diligence',                   desc: 'Cyber risk assessment before acquisition',    to: '/ma/due-diligence' },
      { label: 'Technical Validation',                     desc: 'Validate technology & security claims',       to: '/ma/technical-validation' },
      { label: 'Sell-Side / Exit Readiness',               desc: 'Maximise value through security posture',     to: '/ma/sell-side' },
      { label: 'Post-Deal Value Creation',                 desc: 'Realise security synergies post-deal',        to: '/ma/post-deal' },
      { label: 'Start-up & Portfolio Investment Assurance',desc: 'Security assurance for portfolio companies',  to: '/ma/startup-growth' },
    ],
  }
]

// ── Industries dropdown ──────────────────────────────────────────────────────────
const SECTORS = [
  { label: 'Large Enterprises',         to: '/sectors/large-enterprises' },
  { label: 'Financial Services',        to: '/sectors/financial-services' },
  { label: 'Government & Public Sector',to: '/sectors/government-public-sector' },
  { label: 'Software Companies / SaaS', to: '/sectors/software-saas' },
  { label: 'Digital Platform Providers',to: '/sectors/digital-platforms' },
  { label: 'Private Equity / Investors',to: '/sectors/private-equity' },
  { isDivider: true },
  { label: 'All Industries',               to: '/sectors' },
]

// ── About dropdown ────────────────────────────────────────────────────────────
const ABOUT = [
  { label: 'Nucleus Systems',          to: '/about' },
  { label: 'Leadership & Team',        to: '/team' },
  { label: 'Careers',                  to: '/careers' },
  { label: 'Experience',               to: '/experience' },
  { label: 'M&A Experience',           to: '/experience/ma' },
  { label: 'DPI / DPG Experience',     to: '/experience/dpi-dpg' },
]

const WHAT_WE_DO = [
  { label: 'AI Governance & Security', to: '/what-we-do/ai-governance-security' },
  { label: 'Digital Platform Trust & Assurance', to: '/what-we-do/digital-platform-trust' },
  { label: 'Cybersecurity & Compliance Maturity Management', to: '/what-we-do/cybersecurity-compliance' },
  { label: 'M&A Cyber, Technology & Compliance Assurance', to: '/what-we-do/cyber/ma' },
]

const NAV_ITEMS = [
  { id: 'what-we-do', label: 'Services',   isMega: true,           children: WHAT_WE_DO },
  { id: 'sectors',    label: 'Industries', isMegaIndustries: true, children: SECTORS },
  { id: 'about',      label: 'About Us',   isMegaAbout: true,      children: ABOUT },
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
              className={`nav-item${(item.isMega || item.isMegaIndustries || item.isMegaAbout) ? ' nav-item--mega' : ''}${openId === item.id ? ' open' : ''}`}
              id={`dd-${item.id}`}
              onMouseEnter={() => openItem(item.id)}
              onMouseLeave={() => closeItem(item.id)}
            >
              <span className="nav-parent" onClick={(e) => handleParentClick(e, item.id)}>
                {item.label} <span className="dd-arrow">▾</span>
              </span>

              {item.isMega ? (
                /* ── SERVICES MEGA-MENU — 4-column adaptive layout ── */
                <div
                  className="svc-mega"
                  onMouseEnter={() => openItem(item.id)}
                  onMouseLeave={() => closeItem(item.id)}
                  onClick={e => e.stopPropagation()}
                >
                  <div className="svc-mega-inner">
                    {PILLARS.map((pillar, pi) => (
                      <div key={pi} className="svc-mega-col">
                        <Link
                          className="svc-mega-col-header"
                          to={pillar.hub}
                          onClick={() => setOpenId(null)}
                        >
                          <span className="svc-mega-col-icon">{pillar.icon}</span>
                          <span className="svc-mega-col-title">{pillar.title}</span>
                        </Link>
                        <ul className="svc-mega-list">
                          {pillar.items.map((sub, si) => (
                            <li key={si}>
                              <Link
                                className="svc-mega-link"
                                to={sub.to}
                                onClick={() => setOpenId(null)}
                              >
                                <span className="svc-mega-link-label">{sub.label}</span>
                                {sub.desc && <span className="svc-mega-link-desc">{sub.desc}</span>}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

              ) : item.isMegaIndustries ? (
                /* ── INDUSTRIES MEGA-MENU — WM style list ── */
                <div
                  className="wm-mega wm-mega--industries"
                  onMouseEnter={() => openItem(item.id)}
                  onMouseLeave={() => closeItem(item.id)}
                  onClick={e => e.stopPropagation()}
                >
                  <div className="wm-mega-label">
                    <span className="wm-mega-title">INDUSTRIES</span>
                    <p className="wm-mega-sub">Industry expertise</p>
                  </div>
                  <div className="wm-mega-ind-items">
                    {SECTORS.filter(s => !s.isDivider).map((sector, si) => (
                      <Link key={si} className="wm-mega-ind-item" to={sector.to} onClick={() => setOpenId(null)}>
                        {sector.label}
                      </Link>
                    ))}
                  </div>
                </div>

              ) : item.isMegaAbout ? (
                /* ── ABOUT MEGA-MENU — same structure as Industries ── */
                <div
                  className="wm-mega wm-mega--about"
                  onMouseEnter={() => openItem(item.id)}
                  onMouseLeave={() => closeItem(item.id)}
                  onClick={e => e.stopPropagation()}
                >
                  <div className="wm-mega-label">
                    <span className="wm-mega-title">ABOUT</span>
                    <p className="wm-mega-sub">We're a global cybersecurity &amp; digital trust advisory company.</p>
                  </div>
                  <div className="wm-mega-about-items">
                    {item.children.map((child, idx) => (
                      <Link
                        key={idx}
                        className="wm-mega-about-item"
                        to={child.to}
                        onClick={() => setOpenId(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>

              ) : (
                /* ── REGULAR DROPDOWN ── */
                <div className="dropdown-menu" onClick={e => e.stopPropagation()}>
                  {item.children.map((child, idx) => {
                    if (child.isDivider) return <div key={idx} className="dd-div" />
                    return (
                      <Link key={idx} to={child.to} onClick={() => setOpenId(null)}>
                        {child.label}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          ))}

          {/* Direct links */}
          <Link className="nav-direct" to="/impact">Impact</Link>
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
