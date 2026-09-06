import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function MaDueDiligence() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero svc-hero--ma">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">M&amp;A Cyber Due Diligence</div>
            <h1 className="svc-h1 reveal">Translate cyber risk into investment decisions — before it affects deal value.</h1>
            <p className="svc-lede reveal">Cyber, privacy, cloud, software and AI risk identified and quantified during the diligence window — so deal teams can negotiate informed, not surprised. Our practitioners have delivered buy-side cyber diligence across 250+ transactions globally.</p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/ma">M&amp;A Overview <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">What We Do</span>
            <h2>Buy-side Cyber Due Diligence</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Cyber Risk Assessment', desc: 'Security governance, control effectiveness, vulnerability management, incident history, regulatory compliance status and security programme maturity — scored, prioritised and translated into deal-relevant risk language.' },
              { num: '02', title: 'Technical Validation', desc: 'Penetration testing, vulnerability assessment, code analysis, business exposure testing and infrastructure review — independent technical evidence beyond what management questionnaires and vendor documentation provide.' },
              { num: '03', title: 'Privacy &amp; Data Risk', desc: 'GDPR and applicable privacy law compliance, data mapping, breach history, consent management, cross-border data transfer risk and the privacy programme maturity of the target organisation.' },
              { num: '04', title: 'Cloud &amp; Architecture Review', desc: 'Cloud security posture assessment, IAM architecture risk, misconfiguration exposure, vendor lock-in risk and the architecture scalability implications for the planned business plan.' },
              { num: '05', title: 'AI Risk Evaluation', desc: 'AI system inventory, EU AI Act compliance exposure, AI governance maturity assessment, LLM and agentic AI security and AI supply chain risk — as AI becomes a material asset in technology transactions.' },
              { num: '06', title: 'Findings Translation', desc: 'Technical findings translated into: deal price adjustment recommendations, warranty and indemnity considerations, post-close conditions, remediation cost estimates and material risk flags for investment committee.' },
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
              <li>Cyber due diligence report (technical and executive)</li>
              <li>Risk-rated findings with deal-impact translation</li>
              <li>Deal price adjustment and W&amp;I recommendations</li>
              <li>Post-close remediation priority list and cost estimate</li>
              <li>Regulatory compliance gap report</li>
              <li>Technical validation evidence package</li>
              <li>Investment committee summary and red flags briefing</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>Material cyber risk identified within the diligence window</li>
              <li>Deal pricing informed by actual risk, not assumed security</li>
              <li>W&amp;I and indemnity positions informed by technical evidence</li>
              <li>Post-close conditions structured around material findings</li>
              <li>Integration planning informed by actual technology and security debt</li>
              <li>Investment committee confidence in the technical risk position</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>When You Need This</h3>
            <ul className="svc-list">
              <li>Buy-side diligence on a technology company acquisition</li>
              <li>PE firm investing in a regulated or technology business</li>
              <li>Strategic M&amp;A where the target holds sensitive data or regulated systems</li>
              <li>Technical validation required beyond management questionnaire</li>
              <li>AI-enabled business where AI risk is material to deal value</li>
              <li>Vendor due diligence where cyber posture affects supply chain risk</li>
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
            <Link className="related-card reveal" to="/ma/sell-side">
              <h4>Sell-Side &amp; Exit Readiness</h4>
              <p>Preparing the cybersecurity position before buyers conduct their own diligence.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/ma/post-deal">
              <h4>Post-Deal Cybersecurity</h4>
              <p>Implementing the diligence findings in the first 30/90/180 days after close.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/penetration-testing">
              <h4>Technical Validation</h4>
              <p>Penetration testing and technical assurance as part of the diligence process.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Active transaction? We can mobilise quickly.</h2>
            <p>Nucleus Systems practitioners have delivered cyber diligence across 250+ transactions. We understand deal timelines and deliver findings that investment committees can act on.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/ma">M&amp;A Overview</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
