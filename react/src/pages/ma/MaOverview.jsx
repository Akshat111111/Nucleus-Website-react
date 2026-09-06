import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function MaOverview() {
  useReveal()
  return (
    <div id="view-svc">

      <section className="svc-hero svc-hero--ma">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">M&amp;A Cyber &amp; Compliance</div>
            <h1 className="svc-h1 reveal">Cyber risk across the full investment lifecycle.</h1>
            <p className="svc-lede reveal">
              Cyber, privacy, cloud, software and AI risk — translated into investment decisions. We support deal teams, portfolio companies and corporate acquirers from initial buy-side diligence through to sell-side exit preparation, post-deal improvement and ongoing portfolio cybersecurity.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/ma/due-diligence">Cyber Due Diligence <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <section className="reach-strip">
        <div className="rs-inner">
          <div className="rs-stats">
            <div className="rs-stat reveal">
              <span className="rs-num">250<span className="rs-plus">+</span></span>
              <span className="rs-label">M&amp;A transactions</span>
            </div>
            <div className="rs-divider" aria-hidden="true"></div>
            <div className="rs-stat reveal">
              <span className="rs-num">13<span className="rs-plus">+</span></span>
              <span className="rs-label">Years M&amp;A experience</span>
            </div>
            <div className="rs-divider" aria-hidden="true"></div>
            <div className="rs-stat reveal">
              <span className="rs-num">40<span className="rs-plus">+</span></span>
              <span className="rs-label">Countries delivered</span>
            </div>
            <div className="rs-divider" aria-hidden="true"></div>
            <div className="rs-stat reveal">
              <span className="rs-num">PE</span>
              <span className="rs-label">Private equity specialists</span>
            </div>
          </div>
          <p className="rs-tagline reveal">From buy-side diligence through exit — cyber risk translated into investment decisions.</p>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">The Full Deal Lifecycle</span>
            <h2>Buy-side. Sell-side. Post-deal. Portfolio.</h2>
            <p>We support every stage of the investment and ownership lifecycle — from the first diligence request to the final exit preparation.</p>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'M&amp;A Cyber Due Diligence', desc: 'Buy-side cyber, privacy, cloud, software and AI risk assessment — translating technical risk into investment-grade findings, deal price adjustments, warranty and indemnity considerations and post-close obligations.', link: '/ma/due-diligence' },
              { num: '02', title: 'Technical Validation', desc: 'Go beyond management questionnaires and vendor-provided documentation through penetration testing, code analysis, exposure testing and independent technical evidence of the actual security posture.', link: '/ma/due-diligence' },
              { num: '03', title: 'Sell-Side &amp; Exit Readiness', desc: 'Find and reduce material cyber debt before buyer diligence begins. Preparing the cybersecurity position, evidence pack and regulatory compliance documentation that sophisticated buyers will require.', link: '/ma/sell-side' },
              { num: '04', title: 'Post-Deal Cybersecurity', desc: '30/90/180-day improvement and value-creation programme implementing the deal findings and building a defensible cybersecurity posture aligned to the new ownership structure and growth plan.', link: '/ma/post-deal' },
              { num: '05', title: 'Portfolio Cybersecurity', desc: 'Repeatable portfolio-company baselining and improvement — consistent maturity assessment methodology, comparative scoring across the portfolio and systematic improvement governance.', link: '/ma/portfolio' },
              { num: '06', title: 'Start-up &amp; Growth Readiness', desc: 'Seed-to-Series C cybersecurity readiness — preparing early-stage companies for enterprise sales security requirements, investor due diligence questions and future exit preparation.', link: '/contact' },
            ].map((s, i) => (
              <Link className="svc-what-card reveal" to={s.link} key={i} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="svc-what-desc">{s.desc}</p>
                <span className="arr-link" style={{ marginTop: '12px', display: 'block' }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What we assess */}
      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>What We Assess</span>
              <h2>Cyber, privacy, cloud, software and AI risk — in one integrated assessment.</h2>
              <p>Modern technology transactions require a multi-dimensional view of cyber risk. A standalone IT security review is no longer sufficient when AI systems, cloud architecture, software supply chains and data privacy create overlapping risk that affects deal value.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Cybersecurity Posture', desc: 'Security governance, control effectiveness, vulnerability exposure, incident history, regulatory compliance status and security investment adequacy.' },
                { title: 'Privacy & Data Risk', desc: 'GDPR and sector privacy compliance, data mapping, breach history, privacy programme maturity and regulatory exposure in target jurisdictions.' },
                { title: 'Cloud & Architecture Risk', desc: 'Cloud security configuration, IAM architecture, misconfigurations, vendor lock-in, architecture scalability and cloud cost risk.' },
                { title: 'Software & Supply Chain', desc: 'SDLC security maturity, open source dependency risk, third-party software security, SBOM availability and code security evidence.' },
                { title: 'AI Risk', desc: 'AI system inventory, EU AI Act compliance exposure, AI governance maturity, LLM and agentic AI security assessment and AI supply chain risk.' },
                { title: 'Technology Debt', desc: 'Legacy system exposure, unpatched infrastructure, end-of-life technology risk and the cost of remediation as a factor in deal pricing.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <span className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(255,255,255,.5)' }}>M&amp;A cyber advisory</span>
            <h2>Active transaction or preparing for exit? Speak with us.</h2>
            <p>Nucleus Systems practitioners have delivered cyber diligence across 250+ transactions globally. We will tell you what we look for, what it tells us, and how we translate it into investment-grade decisions.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/ma/due-diligence">Explore Cyber Due Diligence</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
