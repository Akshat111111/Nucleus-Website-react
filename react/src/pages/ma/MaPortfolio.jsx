import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function MaPortfolio() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero svc-hero--ma">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Portfolio Cybersecurity</div>
            <h1 className="svc-h1 reveal">Systematic cybersecurity across your entire portfolio — not company by company.</h1>
            <p className="svc-lede reveal">Portfolio cybersecurity is not a series of individual company engagements. It is a repeatable, consistent programme — baselining each company, comparing posture across the portfolio, identifying systemic gaps and driving systematic improvement under PE governance.</p>
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
            <h2>Portfolio Cybersecurity Programme</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Portfolio Baseline Assessment', desc: 'Consistent security maturity assessment methodology applied across every portfolio company — producing comparable, portfolio-wide risk intelligence rather than a series of independent reports in different formats.' },
              { num: '02', title: 'Portfolio Risk Dashboard', desc: 'Comparative security posture across the portfolio — scoring each company, identifying outliers, tracking improvement over time and providing the GP with a single view of portfolio cyber risk.' },
              { num: '03', title: 'Systematic Improvement Programme', desc: 'Shared services and repeatable improvement playbooks — deploying consistent security controls, policies and governance across portfolio companies without reinventing the programme at each company.' },
              { num: '04', title: 'Exit Preparation', desc: 'Systematic exit preparation programme — raising each portfolio company to a defensible security posture before buyer diligence, building the evidence base and maximising valuation support from the security position.' },
              { num: '05', title: 'Incident Response Across Portfolio', desc: 'Portfolio-level incident response capability — shared playbooks, cross-company threat intelligence, coordinated response for systemic incidents affecting multiple portfolio companies simultaneously.' },
              { num: '06', title: 'New Investment Onboarding', desc: 'Standard 90-day onboarding programme for new acquisitions — immediate baseline assessment, material gap identification, integration into the portfolio cyber programme and CISO-level briefing for the deal team.' },
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
              <li>Portfolio-wide security maturity baseline</li>
              <li>Comparative portfolio risk dashboard</li>
              <li>Company-by-company improvement roadmaps</li>
              <li>Quarterly portfolio cyber risk report for LP reporting</li>
              <li>Shared security policy and governance framework</li>
              <li>Exit readiness assessment per company</li>
              <li>New investment onboarding assessment report</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>GP has portfolio-wide cyber risk visibility for the first time</li>
              <li>Security posture improvement tracked and evidenced across hold period</li>
              <li>Exit valuation supported by documented security improvement</li>
              <li>Systemic portfolio risks identified before they create incidents</li>
              <li>LP reporting on portfolio cyber risk credibly supported</li>
              <li>New acquisitions onboarded consistently and quickly</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>When You Need This</h3>
            <ul className="svc-list">
              <li>PE firm with 3+ portfolio companies and no consistent cyber oversight</li>
              <li>Portfolio cyber incident has highlighted systemic gaps across companies</li>
              <li>LP or investor requiring portfolio-level cyber risk reporting</li>
              <li>Multiple portfolio companies approaching exit requiring exit preparation</li>
              <li>Regulated sector portfolio where compliance evidence is required</li>
              <li>Rapid acquisition strategy requiring consistent security onboarding</li>
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
              <p>New acquisition cyber diligence before onboarding into the portfolio programme.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/ma/post-deal">
              <h4>Post-Deal Cybersecurity</h4>
              <p>Post-close improvement programme before transition to portfolio governance.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/ma/sell-side">
              <h4>Sell-Side &amp; Exit Readiness</h4>
              <p>Exit preparation for individual portfolio companies within the programme.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Managing a portfolio? Let us build the cyber programme across it.</h2>
            <p>Nucleus Systems works with PE firms and their portfolio companies to build consistent, comparable and improvement-evidenced cybersecurity programmes — from first baseline to exit.</p>
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
