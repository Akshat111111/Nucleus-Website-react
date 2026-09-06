import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo-stack">
              <span className="brand-logo nuc-l foot" role="img" aria-label="Nucleus Systems" />
            </div>
            <div style={{ marginTop: '16px' }}>
              <a
                href="https://www.linkedin.com/company/nucleussystems/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nucleus Systems on LinkedIn"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.08)', color: 'var(--slate)',
                  transition: 'background .2s,color .2s',
                }}
                onMouseOver={e => { e.currentTarget.style.background = '#0A66C2'; e.currentTarget.style.color = '#fff' }}
                onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--slate)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="fcol">
            <h4>Services</h4>
            <Link to="/services/cybersecurity-advisory">Cybersecurity Strategy &amp; Leadership</Link>
            <Link to="/services/ai-governance">AI Governance &amp; Regulatory Readiness</Link>
            <Link to="/services/ai-security">AI Security &amp; Agentic AI</Link>
            <Link to="/services/secure-software">Secure Software &amp; DevSecOps</Link>
            <Link to="/services/penetration-testing">Penetration Testing</Link>
            <Link to="/services/operational-resilience">Operational Resilience</Link>
            <Link to="/services/digital-infrastructure">Digital Infrastructure</Link>
            <Link to="/services/post-quantum">Post-Quantum Security</Link>
          </div>

          <div className="fcol">
            <h4>M&amp;A &amp; Investors</h4>
            <Link to="/ma">M&amp;A Overview</Link>
            <Link to="/ma/due-diligence">Cyber Due Diligence</Link>
            <Link to="/ma/sell-side">Sell-Side &amp; Exit Readiness</Link>
            <Link to="/ma/post-deal">Post-Deal Cybersecurity</Link>
            <Link to="/ma/portfolio">Portfolio Cybersecurity</Link>
          </div>

          <div className="fcol">
            <h4>Company</h4>
            <Link to="/about">About Nucleus Systems</Link>
            <Link to="/team">Leadership &amp; Team</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://www.paxleysoftware.com" target="_blank" rel="noopener noreferrer">Paxley Software ↗</a>
          </div>
        </div>

        <div className="foot-bottom">
          <div className="thesis">
            Cybersecurity, AI trust and technology risk — <b>assessed, improved and independently validated.</b>
          </div>
          <small>© 2026 Nucleus Systems · Digital Trust Assurance · <a href="https://www.paxleysoftware.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', opacity: 0.6 }}>Paxley Software</a> is a related venture</small>
        </div>
      </div>
    </footer>
  )
}
