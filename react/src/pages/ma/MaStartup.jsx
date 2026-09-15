import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function MaStartup() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero svc-hero--ma">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Start-up &amp; Growth Cyber Readiness</div>
            <h1 className="svc-h1 reveal">From seed round to enterprise sale — build cyber trust at every stage.</h1>
            <p className="svc-lede reveal">
              Enterprise customers now run security questionnaires before they sign. Institutional investors conduct cyber diligence before they close. Growth-stage companies that cannot demonstrate a credible security posture lose deals, fail onboarding, and enter exit processes carrying avoidable cyber debt. We help seed-to-Series C companies build the cyber evidence they need — at each stage of growth.
            </p>
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
            <h2>Start-up &amp; Growth Cyber Readiness Services</h2>
            <p>Staged cyber readiness programmes aligned to your funding and growth milestones — not enterprise-scale programmes that would slow you down.</p>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Cyber Baseline Assessment', desc: 'An honest assessment of your current security posture — what you have, what you are missing, and what matters most at your current stage. Delivered as a practical gap report, not a compliance checklist, with a prioritised roadmap that maps to your growth trajectory.' },
              { num: '02', title: 'Enterprise Sales Cyber Evidence Pack', desc: 'Preparation of the security documentation that enterprise procurement teams and vendor security assessors request — security questionnaire responses, penetration test report, data processing records, policies and certifications. Structured to pass, not just to file.' },
              { num: '03', title: 'Investor Cyber Readiness Review', desc: 'Pre-investment cyber posture review from the investor\'s perspective — identifying what a Series A/B/C investor or strategic acquirer will find during diligence, what will be flagged, and what can be remediated ahead of the process.' },
              { num: '04', title: 'ISO 27001 &amp; SOC 2 Readiness', desc: 'Structured readiness programme for ISO 27001 certification or SOC 2 Type II — scoped to your actual environment, not a generic 200-control programme. Gap assessment, control implementation, evidence management and audit preparation.' },
              { num: '05', title: 'Pre-Exit Sell-Side Preparation', desc: 'Cyber readiness programme for growth-stage companies preparing for a strategic sale — identifying and remediating material cyber debt before buyer diligence, building the compliance evidence pack for the data room, and preparing the security narrative.' },
              { num: '06', title: 'Fractional CISO for Growth Companies', desc: 'Senior security leadership structured for growth-stage companies — providing the CISO accountability that enterprise customers and investors expect, without the cost or delay of a permanent hire. Scales with your funding and headcount trajectory.' },
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
              <li>Cyber maturity gap report (investor and buyer ready)</li>
              <li>Penetration test report (most recent, scoped to your product)</li>
              <li>Security questionnaire response pack (standard enterprise formats)</li>
              <li>ISO 27001 or SOC 2 readiness roadmap</li>
              <li>Board-ready security summary (1-page posture overview)</li>
              <li>Data processing and privacy compliance evidence</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>Enterprise sales process not blocked by security questionnaires</li>
              <li>Investor diligence on cyber cleared without surprises</li>
              <li>Exit cyber story prepared early — not scrambled at deal signing</li>
              <li>ISO 27001 / SOC 2 achieved at the milestone that unlocks the next customer tier</li>
              <li>Cyber posture presented as a value story, not a liability</li>
              <li>Material findings identified and remediated before they affect deal terms</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>When You Need This</h3>
            <ul className="svc-list">
              <li>First enterprise customer security questionnaire received</li>
              <li>Series A/B/C — investor asking about security posture</li>
              <li>Strategic sale process starting — 6–12 months lead time needed</li>
              <li>Regulatory licence application requiring demonstrated security</li>
              <li>Enterprise customer requiring annual penetration test evidence</li>
              <li>Building a product for a regulated sector (financial services, healthcare, government)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="svc-triggers section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Growth Stage Coverage</span>
            <h2>Security at every funding milestone.</h2>
          </div>
          <div className="triggers-grid">
            {[
              'Pre-seed / Seed — basic security hygiene, data protection, first customer security questionnaire',
              'Series A — penetration test, privacy programme, first enterprise customer security review',
              'Series B — ISO 27001 or SOC 2, vendor security programme, board-level cyber reporting',
              'Series C — enterprise-grade security programme, Fractional CISO, investor-ready cyber posture',
              'Pre-exit — sell-side readiness assessment, compliance evidence pack, data room cyber section',
              'Regulatory authorisation — FCA, PRA, DORA, NIS2 or sector-specific security requirements',
            ].map((t, i) => (
              <div className="trigger-item reveal" key={i}>
                <span className="trigger-dot">▸</span>
                <span>{t}</span>
              </div>
            ))}
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
              <p>Full sell-side preparation when the strategic sale process is imminent.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/penetration-testing">
              <h4>Penetration Testing</h4>
              <p>The annual pen test report that enterprise sales and investor diligence require.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/fractional-ciso">
              <h4>Fractional / Interim CISO</h4>
              <p>Senior security leadership without the permanent headcount cost.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>At what stage of growth is your cyber posture?</h2>
            <p>Speak with a Nucleus Systems practitioner about where you are, where your next investor or enterprise customer will look, and what a practical readiness programme looks like at your stage.</p>
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
