import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function CyberGovernance() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Cybersecurity &amp; Compliance · 02</div>
            <h1 className="svc-h1 reveal">Cybersecurity Governance</h1>
            <p className="svc-lede reveal">
              Technology controls fail when the governance framework above them is broken. We design and implement robust cybersecurity governance structures — aligning security strategy with business objectives, defining clear accountability (RACI), establishing security committees, and creating policy frameworks that actually dictate operational behaviour.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/cybersecurity-compliance">All Cyber Services <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Governance Gap</span>
              <h2>When everyone is responsible for security, no one is accountable.</h2>
              <p>A firewall rule does not define an organisation's risk appetite; a board directive does. Yet in many organisations, critical risk decisions are made implicitly by engineers configuring systems because explicit governance structures do not exist. Without a clear governance framework, security becomes a series of disjointed technical tasks rather than a strategic business function.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'The policy-to-practice disconnect', desc: 'Organisations often have hundreds of pages of security policies that no one reads and that do not reflect actual operational reality. This creates massive audit and liability risk.' },
                { title: 'Lack of board oversight', desc: 'Regulators increasingly hold boards personally accountable for cybersecurity failures. Boards cannot exercise oversight without structured reporting and a defined risk appetite framework.' },
                { title: 'Unclear accountability (RACI)', desc: 'When a critical vulnerability requires patching, who decides if the system can be taken offline? Without a defined RACI (Responsible, Accountable, Consulted, Informed) matrix, incident response paralyzes.' },
                { title: 'Security as a silo', desc: 'When cybersecurity operates independently of enterprise risk management, privacy, and legal functions, the organisation suffers from conflicting priorities and duplicated effort.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}><h4>{p.title}</h4><p>{p.desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">What We Deliver</span>
            <h2>Cybersecurity Governance — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Security Strategy & Vision', desc: 'Developing a multi-year cybersecurity strategy aligned to the organisation\'s business objectives, threat profile, and regulatory landscape, providing a clear "North Star" for the security function.' },
              { num: '02', title: 'Governance Target Operating Model (TOM)', desc: 'Designing the optimal organisational structure for the security team. Defining roles, reporting lines (e.g., CISO reporting to CEO vs. CIO), and integration points with the broader business.' },
              { num: '03', title: 'Policy Framework Redesign', desc: 'Overhauling bloated policy documentation into a lean, enforceable policy hierarchy (Policies → Standards → Guidelines → Procedures) that reflects operational reality and regulatory requirements.' },
              { num: '04', title: 'Security Committee Charters', desc: 'Establishing Information Security Steering Committees (ISSC). Drafting committee charters, defining membership, establishing meeting cadences, and creating standard reporting agendas.' },
              { num: '05', title: 'RACI & Accountability Matrices', desc: 'Developing detailed RACI matrices for critical security processes (e.g., incident response, vulnerability patching, third-party onboarding) to eliminate ambiguity during crises.' },
              { num: '06', title: 'Risk Appetite & Tolerance Definition', desc: 'Working with executive leadership to formally define and document the organisation\'s cybersecurity risk appetite, translating abstract risk tolerance into actionable thresholds.' },
            ].map((s, i) => (
              <div className="svc-what-card reveal" key={i}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title">{s.title}</h3>
                <p className="svc-what-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Frameworks &amp; Standards</span>
            <h2>Governance methodologies.</h2>
          </div>
          <div className="standards-grid">
            {['ISO/IEC 27014 (Governance of Information Security)', 'COBIT 2019', 'NIST CSF (Govern Function)', 'King IV (IT Governance)', 'CIS Controls (IG1-3)'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Connected Cyber services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/cyber/maturity"><h4>Cybersecurity Maturity Assessment</h4><p>Measuring the effectiveness of the governance framework across the organisation.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/compliance"><h4>Compliance Programmes</h4><p>Using the governance structure to maintain continuous compliance with regulations.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/fractional-ciso"><h4>Fractional CISO</h4><p>Deploying executive leadership to chair committees and drive the strategy.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Good security is a byproduct of good governance.</h2>
            <p>Speak with a practitioner who has designed governance models for regulated financial institutions and global enterprises.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/cyber/maturity">N3-CMMF Framework</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
