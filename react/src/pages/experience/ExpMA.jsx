import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function ExpMA() {
  useReveal()

  const stats = [
    { val: '250+', lab: 'Transactions advised' },
    { val: '13+', lab: 'Years M&A cyber experience' },
    { val: 'PE', lab: 'Private equity specialists' },
    { val: '40+', lab: 'Countries' },
  ]

  const types = [
    { title: 'Buy-Side Cyber Due Diligence', desc: 'The majority of our M&A work is buy-side — advising PE houses, strategic acquirers and corporate development teams on cyber, privacy, cloud, software and AI risk in target companies. Findings are translated into investment-grade output: deal price implications, W&I coverage considerations, post-close obligations and 100-day programme design.' },
    { title: 'Sell-Side & Exit Preparation', desc: 'Sell-side cyber readiness for companies preparing for strategic sale — identifying and remediating material cyber debt before buyer diligence begins, building the data room cyber section, preparing the management team for diligence interviews, and constructing the security narrative for acquirer presentations.' },
    { title: 'Technical Validation & Penetration Testing', desc: 'Independent technical validation beyond management questionnaires — penetration testing, code review, exposure scanning, cloud configuration assessment and infrastructure analysis. Delivering the evidence layer that investment committee reports require.' },
    { title: 'Post-Deal Improvement', desc: '30/90/180-day post-close improvement programmes implementing deal findings, building the security programme under new ownership, and tracking progress against the PE board operating plan. The programme that turns a diligence report into a value-creation deliverable.' },
    { title: 'Portfolio Cybersecurity Governance', desc: 'Consistent maturity baselining across PE portfolios — standardised methodology, comparative scoring, portfolio-level risk reporting for PE boards, and systematic improvement governance. Converting ad-hoc company-level security into a managed portfolio-level risk.' },
    { title: 'Warranty & Indemnity Advisory', desc: 'Specialist input to W&I insurance processes — cyber risk warranty review, materiality assessment, exclusion analysis and post-close claim support. Advising both buyers and W&I insurers on cyber risk as part of deal coverage structures.' },
  ]

  const sectors = [
    'Financial Services & Fintech', 'Technology & SaaS', 'Healthcare & Life Sciences',
    'Media & Entertainment', 'Retail & eCommerce', 'Professional Services',
    'Industrial & Manufacturing', 'Government & Defence', 'Education Technology',
    'Energy & Utilities', 'Real Estate Technology', 'AI & Deep Tech',
  ]

  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Experience · M&amp;A</div>
            <h1 className="svc-h1 reveal">250+ transactions. 13+ years. Investment-grade cyber due diligence.</h1>
            <p className="svc-lede reveal">
              Nucleus Systems is one of the most experienced specialist cyber due diligence advisors in the market. Our M&A practice covers buy-side diligence, sell-side preparation, technical validation, post-deal improvement and portfolio governance — for private equity, strategic acquirers and growth-stage investment across financial services, technology, healthcare and beyond.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/ma">M&amp;A Services <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="reach-strip">
        <div className="rs-inner">
          <div className="rs-stats">
            {stats.map((s, i) => (
              <>
                <div className="rs-stat reveal" key={i}><span className="rs-num">{s.val}</span><span className="rs-label">{s.lab}</span></div>
                {i < stats.length - 1 && <div className="rs-divider" aria-hidden="true"></div>}
              </>
            ))}
          </div>
          <p className="rs-tagline reveal">Buy-side. Sell-side. Post-deal. Portfolio. Full lifecycle M&amp;A cyber coverage.</p>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">M&amp;A Cyber Advisory</span>
            <h2>Six engagement types across the full deal lifecycle.</h2>
          </div>
          <div className="svc-what-grid">
            {types.map((t, i) => (
              <div className="svc-what-card reveal" key={i}>
                <div className="svc-what-num">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="svc-what-title">{t.title}</h3>
                <p className="svc-what-desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>What Makes Our M&amp;A Practice Different</span>
              <h2>Investment-grade output. Deal-timeline delivery. Sector depth.</h2>
              <p>M&A cyber due diligence is not a security assessment with a different cover page. The output must be written for investment decision-making. The timeline is non-negotiable. The findings must translate into deal terms — price, escrow, W&I exclusions, post-close programme — not security recommendations.</p>
              <p style={{ marginTop: '12px' }}>Our practitioners have worked on 250+ transactions. We know what material looks like, how findings affect deal mechanics, and how to write reports that investment committees act on. We also know what does not matter — and say so.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Deal-sensitive format', desc: 'Reports are written for investment committees, deal teams and W&I insurers — not technical teams. Findings are structured by materiality, deal impact and post-close obligation — not by vulnerability type.' },
                { title: 'Timeline-compatible delivery', desc: 'We have delivered material cyber assessments in 5 business days. We know how to scope, prioritise and deliver under deal timeline constraints without sacrificing the quality of findings that matter.' },
                { title: '150+ PE transactions', desc: 'Our lead M&A practitioner has personally led 150+ M&A cyber due diligence engagements across PE and strategic M&A. That depth of pattern recognition is what separates practitioner M&A advisory from advisory firms doing their tenth deal.' },
                { title: 'Cross-sector sector depth', desc: 'M&A transactions span every sector. Our practitioners bring sector-specific expertise to each engagement — financial services regulatory risk, AI governance risk, healthcare data obligations — not a generic assessment template.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}><h4>{p.title}</h4><p>{p.desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Sectors We Have Advised In</span>
            <h2>M&amp;A transactions across 12+ sectors.</h2>
          </div>
          <div className="standards-grid">
            {sectors.map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">M&amp;A Services</span>
            <h2>The full M&amp;A service range</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/ma/due-diligence"><h4>M&amp;A Cyber Due Diligence</h4><p>Buy-side cyber, privacy, cloud, software and AI risk assessment.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/ma/sell-side"><h4>Sell-Side &amp; Exit Readiness</h4><p>Pre-process cyber remediation and evidence pack.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/ma/post-deal"><h4>Post-Deal Cybersecurity</h4><p>30/90/180-day improvement programme implementing deal findings.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>250+ transactions. Ask about your deal.</h2>
            <p>Book a briefing with our M&A lead — a practitioner who has personally led over 150 cyber due diligence engagements.</p>
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
