import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function IndPE() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Industries · Private Equity &amp; Investment</div>
            <h1 className="svc-h1 reveal">Cyber risk across the full investment lifecycle — not just at diligence.</h1>
            <p className="svc-lede reveal">
              Private equity deals carry cyber risk that affects deal price, warranty and indemnity exposure, post-close integration cost and exit value. 250+ transactions have made us one of the most experienced cyber due diligence advisors in the market — across buy-side, sell-side, post-deal improvement and portfolio-wide governance programmes for PE houses and their deal teams.
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
            <div className="rs-stat reveal"><span className="rs-num">250<span className="rs-plus">+</span></span><span className="rs-label">Transactions</span></div>
            <div className="rs-divider"></div>
            <div className="rs-stat reveal"><span className="rs-num">13<span className="rs-plus">+</span></span><span className="rs-label">Years M&amp;A experience</span></div>
            <div className="rs-divider"></div>
            <div className="rs-stat reveal"><span className="rs-num">PE</span><span className="rs-label">Specialist advisors</span></div>
            <div className="rs-divider"></div>
            <div className="rs-stat reveal"><span className="rs-num">40<span className="rs-plus">+</span></span><span className="rs-label">Countries</span></div>
          </div>
          <p className="rs-tagline reveal">Buy-side. Sell-side. Post-deal. Portfolio. Full lifecycle coverage.</p>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why This Sector Is Different</span>
              <h2>Cyber risk that affects deal economics — not just security posture.</h2>
              <p>PE cyber risk is fundamentally different from enterprise cyber risk. The timeline is compressed. The stakeholders are financial. The output must be investment-grade, not just technically accurate. And the findings must be translated into deal terms — price, escrow, W&I exclusions, post-close obligations — not security recommendations.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Buy-side diligence — price and structure risk', desc: 'Material cyber findings affect deal price, warranty and indemnity coverage, escrow requirements and post-close obligations. The diligence report must be written for investment decision-making, not just technical record.' },
                { title: 'Sell-side preparation — pre-process remediation', desc: 'Cyber debt found in buyer diligence reduces deal value or kills deals. Identifying and remediating material findings before the process starts — and building the evidence pack for the data room — protects exit value.' },
                { title: 'Post-deal — 30/90/180 day value creation', desc: 'The deal findings are only valuable if they are actioned. Post-close improvement programmes implement what diligence found, build a defensible security posture, and track progress against the hold-period value creation plan.' },
                { title: 'Portfolio — consistent governance at scale', desc: 'PE houses with 10, 20, 50 portfolio companies need a consistent, comparable methodology — not a different assessment every time. Portfolio baselining, comparative scoring and systematic improvement governance.' },
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
            <span className="eyebrow">Services Most Relevant to This Sector</span>
            <h2>Full lifecycle coverage for PE and investment.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'M&A Cyber Due Diligence', desc: 'Buy-side cyber, privacy, cloud, software and AI risk — translated into investment-grade findings. Deal-sensitive format with W&I, price and post-close obligation recommendations.', link: '/ma/due-diligence' },
              { num: '02', title: 'Sell-Side & Exit Readiness', desc: 'Pre-process cyber remediation and evidence pack — find and close material findings before buyers do, build the data room section, and prepare the management team to answer diligence questions.', link: '/ma/sell-side' },
              { num: '03', title: 'Post-Deal Cybersecurity', desc: '30/90/180-day improvement programme implementing deal findings, building the security programme, and tracking progress against the PE board operating plan and hold-period milestones.', link: '/ma/post-deal' },
              { num: '04', title: 'Portfolio Cybersecurity', desc: 'Consistent maturity baselining across the entire portfolio — comparable scoring, portfolio-level risk reporting for the PE board, and systematic improvement governance for portfolio CISOs.', link: '/ma/portfolio' },
              { num: '05', title: 'Fractional CISO for Portfolio Companies', desc: 'Senior security leadership for portfolio companies that need CISO accountability — post-acquisition, pre-exit, or throughout the hold period. Structured to integrate with PE board reporting.', link: '/services/fractional-ciso' },
              { num: '06', title: 'Start-up & Growth Readiness', desc: 'Cyber readiness for growth-stage investments — Series A/B/C companies preparing enterprise sales security requirements, investor diligence and pre-exit preparation.', link: '/ma/startup-growth' },
            ].map((s, i) => (
              <Link className="svc-what-card reveal" to={s.link} key={i} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title">{s.title}</h3>
                <p className="svc-what-desc">{s.desc}</p>
                <span className="arr-link" style={{ marginTop: '12px', display: 'block' }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>250+ transactions. Practitioner-led. Investment-grade output.</h2>
            <p>Speak with an M&A cyber specialist who understands deal mechanics as well as security risk.</p>
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
