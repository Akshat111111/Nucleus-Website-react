import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function CyberMA() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Cybersecurity &amp; Compliance · 09</div>
            <h1 className="svc-h1 reveal">M&amp;A Security Due Diligence</h1>
            <p className="svc-lede reveal">
              When you acquire a company, you acquire its cyber risk. We provide specialised M&amp;A Security Due Diligence for private equity, venture capital, and corporate development teams. From pre-acquisition risk assessments that inform valuation to post-acquisition integration strategies, we ensure that cybersecurity liabilities do not destroy deal value.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Transaction Gap</span>
              <h2>Cyber risk is financial risk. It must be quantified before the deal closes.</h2>
              <p>Traditional technical due diligence focuses on software architecture, scalability, and technical debt. It rarely uncovers deep security vulnerabilities, ongoing compromises, or systemic compliance failures. Discovering a major breach or a fundamental architectural flaw after the transaction closes can lead to massive remediation costs, regulatory fines, and reputational damage that undermines the investment thesis.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'The hidden breach', desc: 'It is not uncommon for a target company to be actively compromised during the due diligence phase without their knowledge. Acquiring a compromised network means the attacker now has a bridge into the parent company.' },
                { title: 'Underestimated remediation costs', desc: 'A target company may appear profitable because they have chronically underinvested in security. Post-acquisition, the buyer must spend millions to bring the company up to minimum security standards.' },
                { title: 'Compliance liabilities', desc: 'If the target company has been misrepresenting its compliance posture (e.g., falsely claiming GDPR compliance or SOC 2 readiness), the acquirer inherits the regulatory liability and potential fines.' },
                { title: 'Integration risks', desc: 'Merging two disparate IT environments creates massive security vulnerabilities. Connecting a mature network to an immature, acquired network expands the attack surface dramatically.' },
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
            <h2>M&amp;A Due Diligence — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Pre-Acquisition Security Assessment', desc: 'Rapid, non-intrusive evaluation of the target\'s security posture. Assessing governance, architecture, compliance, and historical breach data to inform the investment decision and valuation.' },
              { num: '02', title: 'Compromise Assessments', desc: 'Deploying advanced forensic tools (often under NDA) to determine if the target environment is currently compromised or has suffered an undisclosed breach in the past.' },
              { num: '03', title: 'Code & Architecture Review', desc: 'Deep-dive assessment of the target\'s software products. Identifying critical vulnerabilities, architectural flaws, and open-source licensing risks that could impact product viability.' },
              { num: '04', title: 'Remediation Cost Modeling', desc: 'Quantifying the security debt. We provide a detailed financial estimate of the investment required to bring the target company up to the acquirer\'s security and compliance standards.' },
              { num: '05', title: 'Post-Acquisition Integration Strategy', desc: 'Developing a phased security integration plan for Day 1, Day 30, and Day 100. Ensuring that connecting networks, migrating identities, and aligning policies are done securely.' },
              { num: '06', title: 'Portfolio Company Security Programmes', desc: 'For PE/VC firms, we develop standardized security baseline programmes that can be rolled out across the entire portfolio to protect aggregate value.' },
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
            <span className="eyebrow">Frameworks &amp; Focus Areas</span>
            <h2>M&amp;A assessment methodologies.</h2>
          </div>
          <div className="standards-grid">
            {['N3-CMMF (Maturity Assessment)', 'CIS Critical Security Controls', 'OWASP SAMM', 'Data Privacy (GDPR/CCPA)', 'Open Source Licensing Analysis'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/cyber/maturity"><h4>Cybersecurity Maturity Assessment</h4><p>The core methodology used to evaluate the target company's security posture.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/secure-architecture"><h4>Secure Architecture Review</h4><p>Assessing the fundamental security design of the target's technology stack.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/fractional-ciso"><h4>Fractional CISO</h4><p>Providing the leadership to drive the post-acquisition security integration.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Don't buy a breach. Quantify the risk before you close.</h2>
            <p>Speak with specialists who have conducted cyber due diligence on transactions ranging from seed-stage startups to multi-billion dollar acquisitions.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/cyber/maturity">Assessment Methodology</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
