import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'
import { useState } from 'react'

const SERVICES = [
  {
    title: 'Buy-Side Due Diligence',
    desc: 'Rapid, non-intrusive evaluation of the target\'s security posture. Assessing governance, architecture, compliance, and historical breach data to inform the investment decision and valuation.',
    link: '/ma/due-diligence',
  },
  {
    title: 'Technical Validation',
    desc: 'Deep-dive assessment of the target\'s software products and infrastructure. Identifying critical vulnerabilities, architectural flaws, and open-source licensing risks.',
    link: '/ma/technical-validation',
  },
  {
    title: 'Sell-Side / Exit Readiness',
    desc: 'Proactive security assessments and remediation to prepare a company for acquisition. We identify and fix issues before the buyer\'s diligence team finds them, protecting the valuation.',
    link: '/ma/sell-side',
  },
  {
    title: 'Post-Deal Value Creation',
    desc: 'Developing and executing a phased security integration plan for Day 1, Day 30, and Day 100. Ensuring secure network merging and identity migration without disrupting operations.',
    link: '/ma/post-deal',
  },
  {
    title: 'Start-up & Portfolio Investment Assurance',
    desc: 'For PE/VC firms, we develop standardized security baseline programmes that can be rolled out and tracked across the entire portfolio to protect aggregate value.',
    link: '/ma/portfolio',
  },
]

const PROBLEMS = [
  {
    title: 'The hidden breach',
    desc: 'It is not uncommon for a target company to be actively compromised during due diligence. Acquiring a compromised network means the attacker now has a bridge into the parent company.',
  },
  {
    title: 'Underestimated remediation costs',
    desc: 'A target company may appear profitable because they have underinvested in security. Post-acquisition, the buyer must spend millions to bring the company up to minimum standards.',
  },
  {
    title: 'Compliance liabilities',
    desc: 'If the target company has been misrepresenting its compliance posture (e.g., falsely claiming GDPR compliance), the acquirer inherits the regulatory liability and potential fines.',
  },
  {
    title: 'Integration risks',
    desc: 'Merging two disparate IT environments creates massive security vulnerabilities. Connecting a mature network to an immature, acquired network expands the attack surface dramatically.',
  },
]

const FAQS = [
  {
    q: 'Why is traditional IT due diligence not enough?',
    a: 'Traditional IT due diligence focuses on software architecture, scalability, and technical debt. It rarely uncovers deep security vulnerabilities, ongoing compromises, or systemic compliance failures.',
  },
  {
    q: 'How long does a cyber due diligence assessment take?',
    a: 'Our pre-acquisition assessments are designed to move at the speed of the deal, typically taking 2-3 weeks. We deploy rapid, non-intrusive evaluation methods that do not disrupt the target\'s operations.',
  },
  {
    q: 'What happens if you find a critical vulnerability during diligence?',
    a: 'We immediately escalate critical findings to the deal team, quantifying the financial cost to remediate the vulnerability. This allows the acquirer to negotiate a reduction in the purchase price or require remediation prior to closing.',
  },
]

function FAQ({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className={`wm-faq-item${open === i ? ' open' : ''}`}>
          <button className="wm-faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <span className="wm-faq-icon">{open === i ? '−' : '+'}</span>
          </button>
          <div className="wm-faq-answer"><p>{item.a}</p></div>
        </div>
      ))}
    </div>
  )
}

export default function CyberMA() {
  useReveal()
  return (
    <div className="wm-page">

      {/* ── Hero ── */}
      <section className="wm-hero">
        <div className="wrap">
          <div className="wm-hero-inner">
            <div>
              <span className="wm-eyebrow reveal">Services · 04</span>
              <h1 className="wm-h1 reveal">M&amp;A Cyber, Technology &amp; <mark>Compliance Assurance</mark></h1>
              <p className="wm-lede reveal">
                When you acquire a company, you acquire its cyber risk. We provide specialised M&amp;A Security Due Diligence for private equity, venture capital, and corporate development teams to ensure cybersecurity liabilities do not destroy deal value.
              </p>
              <div className="reveal" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link className="wm-pill-btn" to="/contact">Book a Briefing</Link>
                <Link className="wm-pill-btn wm-pill-btn-outline" to="/what-we-do/cybersecurity-compliance">All Cyber Services</Link>
              </div>
            </div>
            <div className="wm-hero-img-box reveal">
              <img src="/images/ma_hero.jpg" alt="M&amp;A Cybersecurity" style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover', borderRadius: '4px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="wm-stats">
        <div className="wm-stat reveal">
          <div className="wm-stat-num">250+</div>
          <div className="wm-stat-label">M&amp;A Transactions Advised</div>
        </div>
        <div className="wm-stat reveal">
          <div className="wm-stat-num">$12B+</div>
          <div className="wm-stat-label">Deal Value Protected</div>
        </div>
        <div className="wm-stat reveal">
          <div className="wm-stat-num">100%</div>
          <div className="wm-stat-label">Pre-Close Visibility</div>
        </div>
      </div>

      {/* ── Problem ZigZag ── */}
      <section className="wm-section">
        <div className="wrap">
          <div className="wm-zigzag">
            <div className="wm-zz-content reveal">
              <span className="wm-eyebrow">The Transaction Gap</span>
              <h2 className="wm-h2">Cyber risk is financial risk. <mark>It must be quantified before the deal closes.</mark></h2>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#555', marginBottom: '28px' }}>
                Discovering a major breach or a fundamental architectural flaw after the transaction closes can lead to massive remediation costs, regulatory fines, and reputational damage that undermines the investment thesis.
              </p>
              <ul className="wm-problem-list">
                {PROBLEMS.map((p, i) => (
                  <li key={i}><strong>{p.title}</strong>{p.desc}</li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <div className="wm-zz-placeholder" style={{ overflow: 'hidden' }}>
                <img src="/images/ma_hero.jpg" alt="M&amp;A abstract" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="wm-section-alt">
        <div className="wrap">
          <div className="wm-services-header reveal">
            <div>
              <h2>How We Can Help with M&amp;A Security</h2>
              <p>Five service domains covering every dimension of M&amp;A cybersecurity — from pre-acquisition diligence to post-deal integration.</p>
            </div>
          </div>
          <div className="wm-grid">
            {SERVICES.map((s, i) => (
              <Link to={s.link} key={i} className="wm-card reveal">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="wm-card-link">Learn More</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standards block ── */}
      <section className="wm-section">
        <div className="wrap">
          <div className="wm-result-block reveal">
            <div className="wm-result-img" style={{ minHeight: 380, overflow: 'hidden' }}>
              <img src="/images/ma_hero.jpg" alt="M&amp;A Frameworks" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="wm-result-content">
              <div className="wm-result-eyebrow">Frameworks &amp; Focus Areas</div>
              <h3 className="wm-result-h3">M&amp;A assessment methodologies.</h3>
              <p className="wm-result-p">
                {['NS-CMMF (Maturity Assessment)', 'CIS Critical Security Controls', 'OWASP SAMM', 'Data Privacy (GDPR/CCPA)', 'Open Source Licensing Analysis'].join(' · ')}
              </p>
              <Link to="/impact" className="wm-pill-btn">View Our Cyber Frameworks</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="wm-section-alt">
        <div className="wrap">
          <div className="wm-faq-header reveal" style={{ marginBottom: '0' }}>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="reveal">
            <FAQ items={FAQS} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="wm-section" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <div className="reveal">
            <span className="wm-eyebrow">Connected Capabilities</span>
            <h2 className="wm-h2">M&amp;A Security <mark>connects to</mark></h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', margin: '32px 0 56px' }}>
              <Link to="/what-we-do/ai-governance-security" className="wm-pill-btn wm-pill-btn-outline">AI Governance &amp; Security</Link>
              <Link to="/what-we-do/cybersecurity-compliance" className="wm-pill-btn wm-pill-btn-outline">Cybersecurity Maturity</Link>
            </div>
            <h2 className="wm-h2" style={{ fontSize: '26px' }}>Don't buy a breach. Quantify the risk before you close.</h2>
            <p style={{ margin: '16px auto 36px', maxWidth: '600px', color: '#555', fontSize: '16px' }}>
              Speak with specialists who have conducted cyber due diligence on transactions ranging from seed-stage startups to multi-billion dollar acquisitions.
            </p>
            <Link className="wm-pill-btn" to="/contact">Book a Briefing</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
