import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function MaTechVal() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero svc-hero--ma">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">M&amp;A Technical Validation</div>
            <h1 className="svc-h1 reveal">Go beyond management questionnaires with independent technical evidence.</h1>
            <p className="svc-lede reveal">Our technical validation services provide hard evidence of a target's actual security posture. Through penetration testing, source code review, and cloud architecture assessment, we uncover the critical flaws that policies and questionnaires miss.</p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/cyber/ma">M&amp;A Overview <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">Services</span>
            <h2>Technical Validation</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Pre-Close Penetration Testing', desc: 'Time-boxed, objective-based penetration testing of the target\'s external perimeter and flagship web applications to identify critical vulnerabilities before they become your problem.' },
              { num: '02', title: 'Source Code Security Review', desc: 'Automated and manual review of the target\'s proprietary source code to identify insecure coding practices, embedded credentials, and architectural flaws.' },
              { num: '03', title: 'Open Source &amp; Supply Chain Risk', desc: 'Software Composition Analysis (SCA) to identify vulnerable open-source dependencies and restrictive licensing (e.g., GPL) that could affect the commercial viability of the product.' },
              { num: '04', title: 'Cloud Configuration Assessment', desc: 'Deep-dive review of the target\'s AWS, Azure, or GCP environments to identify misconfigurations, excessive permissions, and data exposure risks.' },
              { num: '05', title: 'Compromise Assessments', desc: 'Deploying forensic tools to determine if the target network is currently compromised or has been breached in the past, ensuring you don\'t buy an active incident.' },
              { num: '06', title: 'Technical Debt Quantification', desc: 'Translating the findings from the technical assessments into a quantified estimate of the remediation cost and effort required post-close.' },
            ].map((s, i) => (
              <div className="svc-what-card reveal" key={i}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="svc-what-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-scope section">
        <div className="wrap svc-scope-grid">
          <div className="svc-scope-col reveal">
            <h3>What You Receive</h3>
            <ul className="svc-list">
              <li>Detailed technical vulnerability reports</li>
              <li>Proof of exploitation (where authorized)</li>
              <li>Open source dependency and license inventory (SBOM)</li>
              <li>Cloud security posture score and misconfiguration list</li>
              <li>Remediation cost and effort estimates</li>
              <li>Executive summary for the deal team</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>Independent verification of management's security claims</li>
              <li>Identification of critical issues that could delay or derail the deal</li>
              <li>Quantified technical debt for price negotiation</li>
              <li>Clear visibility into IP risks from open source licenses</li>
              <li>Assurance that you are not acquiring an actively compromised network</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>When You Need This</h3>
            <ul className="svc-list">
              <li>Acquiring a software or technology company</li>
              <li>The target has a history of security incidents</li>
              <li>Management's security responses lack evidence or detail</li>
              <li>The target operates in a highly regulated industry</li>
              <li>Preparing for a carve-out or complex technical integration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Often engaged together</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/ma/due-diligence">
              <h4>Buy-Side Due Diligence</h4>
              <p>Comprehensive evaluation of the target's security governance, architecture, and compliance.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/ma/post-deal">
              <h4>Post-Deal Value Creation</h4>
              <p>Implementing the remediation roadmap based on the technical validation findings.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Trust, but technically verify.</h2>
            <p>Our offensive security team operates at the speed of M&amp;A to provide the technical evidence you need to close the deal with confidence.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/cyber/ma">M&amp;A Overview</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
