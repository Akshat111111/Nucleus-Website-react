import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function CyberFCISO() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Cybersecurity &amp; Compliance · 03</div>
            <h1 className="svc-h1 reveal">Fractional &amp; Virtual CISO</h1>
            <p className="svc-lede reveal">
              Executive security leadership is critical, but not every organisation requires—or can attract—a full-time Chief Information Security Officer. We provide Fractional CISO (vCISO) services that embed seasoned security executives into your leadership team. From defining strategy and presenting to the board, to mentoring internal teams and managing regulatory relationships, we deliver senior leadership on a flexible engagement model.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Leadership Gap</span>
              <h2>You cannot delegate executive accountability to an IT manager.</h2>
              <p>When an organisation lacks a dedicated CISO, security responsibilities usually fall to the CIO, CTO, or IT Director. This creates a fundamental conflict of interest (availability vs. confidentiality) and leaves the board without an independent voice on security risk. Regulators and enterprise clients increasingly demand that organisations have formally appointed security leadership.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'The talent shortage', desc: 'Experienced CISOs who can bridge the gap between deep technical knowledge and board-level business strategy are rare and expensive. Recruiting one takes months; retaining them is harder.' },
                { title: 'The interim vacuum', desc: 'When a CISO departs, the resulting leadership vacuum often halts strategic security initiatives and leaves the organisation vulnerable during the transition period.' },
                { title: 'Misaligned scale', desc: 'Mid-market organisations and growth-stage scale-ups face the same regulatory and threat landscape as enterprises, but do not yet have the scale to justify a full-time, high-compensation executive.' },
                { title: 'Vendor management without leverage', desc: 'Without experienced leadership, organisations often overspend on security tooling pushed by vendors, rather than investing strategically in capabilities that reduce actual business risk.' },
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
            <h2>Fractional CISO — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Board & Executive Advisory', desc: 'Acting as the face of security to the board and executive committee. Translating technical risks into business impact, presenting maturity metrics, and justifying security budgets.' },
              { num: '02', title: 'Security Strategy Execution', desc: 'Taking ownership of the cybersecurity roadmap. Driving the execution of strategic initiatives, managing cross-functional security projects, and ensuring alignment with business goals.' },
              { num: '03', title: 'Regulatory & Client Representation', desc: 'Serving as the named security executive for regulatory inquiries, compliance audits, and critical client due diligence processes to demonstrate mature security leadership.' },
              { num: '04', title: 'Team Mentoring & Capability Building', desc: 'Mentoring existing IT and security staff. Developing internal talent, establishing operational cadences, and building the organisation\'s capacity to eventually support a full-time CISO.' },
              { num: '05', title: 'Vendor & Budget Management', desc: 'Rationalising the security tool stack. Negotiating with vendors from a position of experience to eliminate redundant tooling and optimise the security budget.' },
              { num: '06', title: 'Incident Response Leadership', desc: 'Providing executive leadership during critical security incidents. Directing the crisis response, managing external counsel and forensics teams, and handling executive communications.' },
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
            <span className="eyebrow">Engagement Models</span>
            <h2>How we embed into your organisation.</h2>
          </div>
          <div className="standards-grid">
            {['Fractional (Retained part-time)', 'Interim (Full-time transition)', 'Virtual (Advisory / On-demand)', 'Board Advisor (Non-executive)', 'M&A Integration Lead'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/cyber/maturity"><h4>Cybersecurity Maturity Assessment</h4><p>The baseline assessment our CISOs use to build your security roadmap.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/governance"><h4>Cybersecurity Governance</h4><p>The framework our CISOs implement to establish accountability and policy.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/compliance"><h4>Compliance Programmes</h4><p>The regulatory mandates our CISOs guide your organisation through.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Don't wait until a breach to appoint a CISO.</h2>
            <p>Speak with a practitioner who has served as CISO for regulated financial institutions and global enterprises.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/team">View Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
