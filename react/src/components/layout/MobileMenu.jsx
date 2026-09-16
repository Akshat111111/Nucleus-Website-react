import { useState } from 'react'
import { Link } from 'react-router-dom'

const PILLARS = [
  {
    title: 'AI Governance and Security Services',
    links: [
      { label: 'AI Governance \u0026 Regulatory Readiness', to: '/services/ai-governance' },
      { label: 'AI Security, LLM, RAG \u0026 Agentic AI', to: '/services/ai-security' },
    ],
  },
  {
    title: 'Digital Platform Trust and Security Assurance',
    links: [
      { label: 'Secure Software \u0026 DevSecOps', to: '/services/secure-software' },
      { label: 'Digital Infrastructure \u0026 Critical Systems', to: '/services/digital-infrastructure' },
      { label: 'Post-Quantum \u0026 Emerging Technology', to: '/services/post-quantum' },
      { label: 'Paxley — DevSecOps Platform', to: '/paxley' },
    ],
  },
  {
    title: 'Cybersecurity and Compliance Maturity Management',
    links: [
      { label: 'Cybersecurity Strategy \u0026 Leadership', to: '/services/cybersecurity-advisory' },
      { label: 'Fractional / Interim CISO', to: '/services/fractional-ciso' },
      { label: 'Penetration Testing \u0026 Technical Assurance', to: '/services/penetration-testing' },
      { label: 'Operational Resilience \u0026 Managed Security', to: '/services/operational-resilience' },
    ],
  },
  {
    title: 'Cyber and Compliance M\u0026A Risk Advisory',
    links: [
      { label: 'M\u0026A Cyber Due Diligence', to: '/ma/due-diligence' },
      { label: 'Sell-Side \u0026 Exit Readiness', to: '/ma/sell-side' },
      { label: 'Post-Deal Cybersecurity', to: '/ma/post-deal' },
      { label: 'Portfolio Cybersecurity', to: '/ma/portfolio' },
      { label: 'Start-up \u0026 Growth Readiness', to: '/ma/startup-growth' },
    ],
  },
]

const OTHER_GROUPS = [
  {
    id: 'industries',
    label: 'Industries',
    links: [
      { label: 'Financial Services', to: '/industries/financial-services' },
      { label: 'Government \u0026 Public Sector', to: '/industries/government-public-sector' },
      { label: 'Digital Public Infrastructure', to: '/industries/dpi-digital-public-goods' },
      { label: 'Private Equity \u0026 Investment', to: '/industries/private-equity' },
      { label: 'Technology \u0026 SaaS', to: '/industries/technology-saas' },
      { label: 'Fintech \u0026 Payments', to: '/industries/fintech-payments' },
      { label: 'AI Product Companies', to: '/industries/ai-product-companies' },
      { label: 'Critical Infrastructure', to: '/industries/critical-infrastructure' },
    ],
  },
  {
    id: 'experience',
    label: 'Experience',
    links: [
      { label: 'M\u0026A Experience', to: '/experience/ma' },
      { label: 'DPI \u0026 Digital Public Goods', to: '/experience/dpi-dpg' },
      { label: 'Global Delivery', to: '/experience/global-delivery' },
    ],
  },
  {
    id: 'about',
    label: 'About',
    links: [
      { label: 'Nucleus Systems', to: '/about' },
      { label: 'Leadership \u0026 Team', to: '/team' },
      { label: 'Our Frameworks', to: '/frameworks' },
      { label: 'Careers', to: '/careers' },
    ],
  },
]

export default function MobileMenu({ isOpen, onClose }) {
  const [openGroup, setOpenGroup] = useState(null)

  const toggleGroup = (id) => {
    setOpenGroup(prev => (prev === id ? null : id))
  }

  const handleLinkClick = () => {
    onClose()
    setOpenGroup(null)
  }

  return (
    <div className={`mobile-menu${isOpen ? ' open' : ''}`} id="mobileMenu" aria-hidden={!isOpen}>
      <div className="mm-top">
        <span className="logo">
          <span className="brand-logo nuc-l foot" role="img" aria-label="Nucleus Systems" />
        </span>
        <button className="menu-toggle" id="menuClose" aria-label="Close menu" onClick={onClose}>✕</button>
      </div>

      <Link className="mm-direct" to="/" onClick={handleLinkClick}>Home</Link>

      {/* Services — 4 pillar sub-groups */}
      <div className={`mm-group${openGroup === 'services' ? ' open' : ''}`} id="mmg-services">
        <div className="mm-group-hd" onClick={() => toggleGroup('services')}>
          Services <span className="mm-arrow">▾</span>
        </div>
        <div className="mm-group-body">
          {PILLARS.map((pillar, pi) => (
            <div key={pi} className="mm-pillar-group">
              <div className="mm-pillar-label">{pillar.title}</div>
              {pillar.links.map(link => (
                <Link key={link.to} to={link.to} onClick={handleLinkClick}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Other nav groups */}
      {OTHER_GROUPS.map(group => (
        <div key={group.id} className={`mm-group${openGroup === group.id ? ' open' : ''}`} id={`mmg-${group.id}`}>
          <div className="mm-group-hd" onClick={() => toggleGroup(group.id)}>
            {group.label} <span className="mm-arrow">▾</span>
          </div>
          <div className="mm-group-body">
            {group.links.map(link => (
              <Link key={link.to} to={link.to} onClick={handleLinkClick}>{link.label}</Link>
            ))}
          </div>
        </div>
      ))}

      <Link className="mm-direct" to="/insights" onClick={handleLinkClick}>Insights</Link>
      <Link className="mm-direct" to="/contact" onClick={handleLinkClick}>Contact</Link>

      <div style={{ padding: '16px 20px' }}>
        <Link className="btn btn-primary" to="/contact" onClick={handleLinkClick} style={{ display: 'block', textAlign: 'center' }}>
          Book a Briefing →
        </Link>
      </div>
    </div>
  )
}
