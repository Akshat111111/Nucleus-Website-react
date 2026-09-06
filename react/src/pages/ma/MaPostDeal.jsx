import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function MaPostDeal() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero svc-hero--ma">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Post-Deal Cybersecurity</div>
            <h1 className="svc-h1 reveal">Turn diligence findings into value creation — in the first 30, 90 and 180 days.</h1>
            <p className="svc-lede reveal">The diligence is done. The deal is closed. Now the real work begins. Post-deal cybersecurity is where the risk identified in diligence is actually reduced — and where security becomes a value creation lever for the new ownership structure.</p>
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
            <h2>Post-Deal Cybersecurity Improvement</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: '30-Day Rapid Assessment', desc: 'Immediate post-close security posture baseline — validating diligence findings against the actual environment, identifying any changes since diligence and establishing the priority order for the first 90 days.' },
              { num: '02', title: '90-Day Remediation Programme', desc: 'Structured remediation of material findings from diligence — prioritised by risk and business impact, with clear ownership, timeline and evidence of remediation progress reported to the new ownership structure.' },
              { num: '03', title: '180-Day Improvement Programme', desc: 'Sustained security improvement programme building on the 90-day remediation — implementing the security roadmap, building governance structures and measuring maturity improvement against the deal investment thesis.' },
              { num: '04', title: 'Integration Security', desc: 'Security architecture for system integration between acquiring and acquired entities — network connectivity, identity federation, data sharing governance and security baseline harmonisation.' },
              { num: '05', title: 'Fractional CISO (Post-Deal)', desc: 'Experienced CISO leadership through the post-deal transition — reporting to the PE board, managing the management team, building the security programme and preparing for the next milestone.' },
              { num: '06', title: 'Ongoing Portfolio Governance', desc: 'Transition from post-deal remediation to continuous portfolio cybersecurity governance — baseline maturity scoring, quarterly assessment and board-level reporting across the portfolio company.', link: '/ma/portfolio' },
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
              <li>30-day post-close security baseline report</li>
              <li>90-day remediation plan with ownership and milestones</li>
              <li>180-day improvement programme and maturity roadmap</li>
              <li>Integration security architecture documentation</li>
              <li>Monthly progress reports to PE board</li>
              <li>Maturity improvement evidence for exit preparation</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>Diligence findings remediated within the planned timeline</li>
              <li>Security posture measurably improved against the deal thesis</li>
              <li>Integration risk managed without security incidents</li>
              <li>PE board has continuous visibility into security improvement</li>
              <li>Exit preparation — maturity improvement documented and evidenced</li>
              <li>Portfolio company ready for continuous security governance</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>When You Need This</h3>
            <ul className="svc-list">
              <li>Immediately post-close to implement diligence remediation commitments</li>
              <li>PE firm with a security improvement commitment to the deal</li>
              <li>Material cyber risk identified in diligence requiring active programme</li>
              <li>Integration creating security architecture decisions</li>
              <li>New ownership structure needing CISO-level security leadership</li>
              <li>Hold period during which security must improve for exit value</li>
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
              <h4>M&amp;A Cyber Due Diligence</h4>
              <p>The foundation for the post-deal remediation programme.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/ma/portfolio">
              <h4>Portfolio Cybersecurity</h4>
              <p>Transition from post-deal to continuous portfolio governance.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/cybersecurity-advisory">
              <h4>Fractional CISO</h4>
              <p>Senior security leadership through the post-deal transition period.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Deal recently closed? Let us help you implement what diligence found.</h2>
            <p>Nucleus Systems post-deal teams mobilise quickly and work alongside your management team to implement the remediation programme and build the security posture your investment thesis requires.</p>
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
