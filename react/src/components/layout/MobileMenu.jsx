import { useState } from 'react'
import { Link } from 'react-router-dom'

const MM_GROUPS = [
  {
    id: 'services',
    label: 'Services',
    links: [
      { label: 'Cybersecurity Strategy & Leadership', to: '/services/cybersecurity-advisory' },
      { label: 'AI Governance & Regulatory Readiness', to: '/services/ai-governance' },
      { label: 'AI Security, LLM, RAG & Agentic AI', to: '/services/ai-security' },
      { label: 'Secure Software & DevSecOps', to: '/services/secure-software' },
      { label: 'Penetration Testing & Vulnerability Assessment', to: '/services/penetration-testing' },
      { label: 'Operational Resilience & Managed Security', to: '/services/operational-resilience' },
      { label: 'Digital Infrastructure & Critical Systems', to: '/services/digital-infrastructure' },
      { label: 'Post-Quantum & Emerging Technology', to: '/services/post-quantum' },
    ],
  },
  {
    id: 'ma',
    label: 'M&A & Investors',
    links: [
      { label: 'M&A Overview', to: '/ma' },
      { label: 'Cyber Due Diligence', to: '/ma/due-diligence' },
      { label: 'Sell-Side & Exit Readiness', to: '/ma/sell-side' },
      { label: 'Post-Deal Cybersecurity', to: '/ma/post-deal' },
      { label: 'Portfolio Cybersecurity', to: '/ma/portfolio' },
    ],
  },
  {
    id: 'about',
    label: 'About',
    links: [
      { label: 'Nucleus Systems', to: '/about' },
      { label: 'Leadership & Team', to: '/team' },
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
          <span className="brand-logo nuc-l" role="img" aria-label="Nucleus Systems" />
        </span>
        <button className="menu-toggle" id="menuClose" aria-label="Close menu" onClick={onClose}>✕</button>
      </div>

      <Link className="mm-direct" to="/" onClick={handleLinkClick}>Home</Link>

      {MM_GROUPS.map(group => (
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
