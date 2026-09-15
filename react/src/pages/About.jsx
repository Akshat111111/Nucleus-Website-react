import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  useReveal()

  return (
    <div id="view-about">
      {/* Hero */}
      <section className="about-hero">
        <div className="wrap ph-inner">
          <div className="ph-eyebrow">Company Overview</div>
          <h1 className="ph-h1" style={{ maxWidth: '800px' }}>
            We make digital trust measurable, verifiable, and operational.
          </h1>
          <p className="ph-sub">
            Nucleus Systems is a specialised technical advisory and assurance firm. We help enterprise leaders, boards, and investors move beyond compliance to continuously prove the security and resilience of their critical digital infrastructure.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="pg-section wwa-section">
        <div className="wrap">
          <div className="wwa-grid">
            <div className="reveal">
              <div className="ti-eyebrow">Who We Are</div>
              <h2 className="wwa-h2">A founder-led firm built on practitioner expertise.</h2>
              <p className="wwa-p">
                Founded in 2014 by seasoned cybersecurity architects, Nucleus Systems was built to bridge the gap between abstract risk management and ground-truth technical realities.
              </p>
              <p className="wwa-p">
                We believe that trust in digital systems cannot be assumed—it must be engineered, measured, and continuously proven. Our team comprises industry veterans who have designed, attacked, and defended some of the most critical financial and enterprise networks across emerging markets and global tech hubs.
              </p>
              <div className="ti-cta">
                <Link to="/team" className="btn btn-ghost" style={{ background: '#fff' }}>
                  Meet our leadership team <span className="arr">→</span>
                </Link>
              </div>
            </div>
            <div className="wwa-facts reveal">
              <div className="wwa-fact">
                <div className="wwa-fact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4>Practitioner-First Advisory</h4>
                  <p>Our consultants are active engineers, researchers, and CISOs—not just auditors. We bring hands-on experience to boardroom strategy.</p>
                </div>
              </div>
              <div className="wwa-fact">
                <div className="wwa-fact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div>
                  <h4>Evidence-Based Assurance</h4>
                  <p>We don't just review policies. We validate controls through technical assessment, producing verifiable proof of operational resilience.</p>
                </div>
              </div>
              <div className="wwa-fact">
                <div className="wwa-fact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <h4>Global Context, Local Nuance</h4>
                  <p>With deep experience in emerging markets (Africa, Middle East, APAC), we understand how to secure high-growth digital ecosystems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference Table */}
      <div className="pg-section" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="section-head reveal">
            <h2>The Nucleus Systems Difference</h2>
            <p>How our model contrasts with traditional consulting approaches.</p>
          </div>
          <div className="reveal" style={{ overflowX: 'auto', paddingBottom: '10px' }}>
            <table className="spec-table" style={{ minWidth: '700px' }}>
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>Capability Area</th>
                  <th style={{ width: '25%' }}>Traditional Firms</th>
                  <th style={{ width: '25%' }}>Niche Boutiques</th>
                  <th style={{ width: '25%', background: 'var(--blue-soft)', color: 'var(--blue)' }}>Nucleus Systems</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Assessment Depth</td>
                  <td className="col-mgmt">Focus on policy review, documentation, and compliance checkboxes</td>
                  <td className="col-boutique">Deep technical testing, but often lack board-level business context</td>
                  <td className="col-ns">Full-stack assurance integrating technical reality with governance and business risk</td>
                </tr>
                <tr>
                  <td>Frameworks & IP</td>
                  <td className="col-mgmt">Generic applications of ISO/NIST, often requiring high adaptation effort</td>
                  <td className="col-boutique">Ad-hoc methodologies relying on individual consultant expertise</td>
                  <td className="col-ns">Structured delivery methodology designed for rapid, measurable maturity scoring — aligned to NIST, ISO and DORA without requiring framework translation by the client</td>
                </tr>
                <tr>
                  <td>Speed of Execution</td>
                  <td className="col-mgmt">Large-scale mobilisation models with extended onboarding cycles</td>
                  <td className="col-boutique">Faster delivery, but narrower in operational scope</td>
                  <td className="col-ns">Rapid onboarding with automated findings and structured maturity assessments in days</td>
                </tr>
                <tr>
                  <td>Operational Continuity</td>
                  <td className="col-mgmt">Engagements conclude with reports and client-owned implementation</td>
                  <td className="col-boutique">Advisory follow-through available but resource-constrained</td>
                  <td className="col-ns">End-to-end support including Fractional CISO, DevSecOps, and CyberOne MSSP</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Summary + Pull Quote */}
      <div className="pg-section grey">
        <div className="wrap">
          <div className="about-summary-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
            <div className="reveal">
              <div className="ti-eyebrow">Our Approach</div>
              <h2 className="ti-h2">Governance, engineering, and operational evidence — integrated.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
                <div style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--blue)' }}>▸</span> Proprietarty IP rather than adapted public methodologies</div>
                <div style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--blue)' }}>▸</span> Founder-led engagements with deep practitioner expertise</div>
                <div style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--blue)' }}>▸</span> Attacker-informed, evidence-based assurance</div>
                <div style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--blue)' }}>▸</span> Trust Infrastructure Platforms for continuous validations</div>
                <div style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--blue)' }}>▸</span> End-to-end support from assessment to managed operations</div>
              </div>
            </div>
            <div className="reveal">
              <div style={{ padding: '32px', background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
                <p style={{ fontSize: '18px', color: 'var(--navy)', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '20px' }}>
                  "Big digital transformation consulting and auditing firms describe how you should have secure systems. Nucleus Systems measures how secure you actually are and produces the evidence that proves it, with a clear maturity measurement and improvement roadmap."
                </p>
                <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  — Nucleus Systems Position Statement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Numbers */}
      <div className="pg-section">
        <div className="wrap">
          <h2 className="pg-sh" style={{ textAlign: 'center', marginBottom: '40px' }}>The numbers behind the practice</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px' }}>
            <div className="reveal" style={{ padding: '32px 24px', background: 'var(--grey)', borderRadius: '14px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: '42px', fontWeight: '800', color: 'var(--navy)' }}>600<span style={{ color: 'var(--orange)' }}>+</span></div>
              <div style={{ fontSize: '14px', fontWeight: '700', margin: '4px 0 8px' }}>Engagements</div>
              <div style={{ fontSize: '13px', color: 'var(--slate)' }}>Across enterprise, government and financial sectors</div>
            </div>
            <div className="reveal" style={{ padding: '32px 24px', background: 'var(--grey)', borderRadius: '14px', textAlign: 'center', transitionDelay: '0.1s' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: '42px', fontWeight: '800', color: 'var(--navy)' }}>250<span style={{ color: 'var(--orange)' }}>+</span></div>
              <div style={{ fontSize: '14px', fontWeight: '700', margin: '4px 0 8px' }}>M&amp;A Deals</div>
              <div style={{ fontSize: '13px', color: 'var(--slate)' }}>Cyber diligence transactions across private equity</div>
            </div>
            <div className="reveal" style={{ padding: '32px 24px', background: 'var(--grey)', borderRadius: '14px', textAlign: 'center', transitionDelay: '0.2s' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: '42px', fontWeight: '800', color: 'var(--navy)' }}>40<span style={{ color: 'var(--orange)' }}>+</span></div>
              <div style={{ fontSize: '14px', fontWeight: '700', margin: '4px 0 8px' }}>Countries</div>
              <div style={{ fontSize: '13px', color: 'var(--slate)' }}>Active in Africa, Middle East, Asia-Pacific, Europe</div>
            </div>
            <div className="reveal" style={{ padding: '32px 24px', background: 'var(--grey)', borderRadius: '14px', textAlign: 'center', transitionDelay: '0.3s' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: '42px', fontWeight: '800', color: 'var(--navy)' }}>13<span style={{ color: 'var(--orange)' }}>+</span></div>
              <div style={{ fontSize: '14px', fontWeight: '700', margin: '4px 0 8px' }}>Years</div>
              <div style={{ fontSize: '13px', color: 'var(--slate)' }}>Operating history, founded 2014</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Band */}
      <div className="page-cta-band">
        <div className="wrap pcb-inner">
          <h2>Ready to make trust measurable?</h2>
          <p>Speak with a Nucleus Systems practitioner about your specific environment and objectives.</p>
          <div className="pcb-row">
            <Link className="btn btn-primary" to="/contact">Request a briefing <span className="arr">→</span></Link>
            <Link className="btn btn-ghost" to="/team" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,.3)' }}>Meet the team</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
