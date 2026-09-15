import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NAV_ITEMS = [
  {
    id: 'services',
    label: 'Services',
    children: [
      { label: 'Fractional / Interim CISO', to: '/services/fractional-ciso' },
      { label: 'Cybersecurity Strategy \u0026 Leadership', to: '/services/cybersecurity-advisory' },
      { label: 'Penetration Testing', to: '/services/penetration-testing' },
      { label: 'Operational Resilience', to: '/services/operational-resilience' },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    children: [
      { label: 'AI Governance \u0026 Regulatory Readiness', to: '/services/ai-governance' },
      { label: 'AI Security \u0026 Agentic AI', to: '/services/ai-security' },
      { label: 'Secure Software \u0026 DevSecOps', to: '/services/secure-software' },
      { label: 'Digital Infrastructure', to: '/services/digital-infrastructure' },
      { label: 'Post-Quantum Security', to: '/services/post-quantum' },
    ],
  },
  {
    id: 'ma',
    label: 'M\u0026A \u0026 Investors',
    children: [
      { label: 'M\u0026A Cyber Due Diligence', to: '/ma/due-diligence' },
      { label: 'Sell-Side \u0026 Exit Readiness', to: '/ma/sell-side' },
      { label: 'Post-Deal Cybersecurity', to: '/ma/post-deal' },
      { label: 'Portfolio Cybersecurity', to: '/ma/portfolio' },
      { label: 'Start-up \u0026 Growth Readiness', to: '/ma/startup-growth' },
      { isDivider: true },
      { label: 'M\u0026A Overview', to: '/ma' },
    ],
  },
  {
    id: 'industries',
    label: 'Industries',
    children: [
      { label: 'Financial Services', to: '/industries/financial-services' },
      { label: 'Government \u0026 Public Sector', to: '/industries/government-public-sector' },
      { label: 'Digital Public Infrastructure', to: '/industries/dpi-digital-public-goods' },
      { label: 'Private Equity \u0026 Investment', to: '/industries/private-equity' },
      { label: 'Technology \u0026 SaaS', to: '/industries/technology-saas' },
      { label: 'Fintech \u0026 Payments', to: '/industries/fintech-payments' },
      { label: 'AI Product Companies', to: '/industries/ai-product-companies' },
      { label: 'Critical Infrastructure', to: '/industries/critical-infrastructure' },
      { isDivider: true },
      { label: 'All Industries', to: '/industries' },
    ],
  },
  {
    id: 'experience',
    label: 'Experience',
    children: [
      { label: 'Selected Engagements', to: '/experience/engagements' },
      { label: 'M\u0026A Experience', to: '/experience/ma' },
      { label: 'DPI \u0026 Digital Public Goods', to: '/experience/dpi-dpg' },
      { label: 'Global Delivery', to: '/experience/global-delivery' },
      { isDivider: true },
      { label: 'Experience Overview', to: '/experience' },
    ],
  },
  {
    id: 'about',
    label: 'About',
    children: [
      { label: 'Nucleus Systems', to: '/about' },
      { label: 'Leadership \u0026 Team', to: '/team' },
      { label: 'Careers', to: '/careers' },
    ],
  },
]

export default function Navbar({ onMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [openId, setOpenId] = useState(null)
  const closeTimers = useRef({})
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown when clicking outside
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
    }, 120)
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
              className={`nav-item${openId === item.id ? ' open' : ''}`}
              id={`dd-${item.id}`}
              onMouseEnter={() => openItem(item.id)}
              onMouseLeave={() => closeItem(item.id)}
            >
              <span
                className="nav-parent"
                onClick={(e) => handleParentClick(e, item.id)}
              >
                {item.label} <span className="dd-arrow">▾</span>
              </span>
              <div className="dropdown-menu">
                {item.children.map((child, idx) => {
                  if (child.isDivider) return <div key={idx} className="dd-div" />
                  if (child.isLabel) return <div key={idx} className="dd-label">{child.label}</div>
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
            </div>
          ))}
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
