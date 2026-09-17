import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function Sectors() {
  useReveal()
  const sectors = [
    {
      num: '01', title: 'Financial Services', sub: 'Banks · Insurers · Asset Managers · Central Banks',
      desc: 'Banks, insurers and asset managers where a trust failure triggers systemic regulatory action. Tier-one banking, insurance capital modelling, asset management operational resilience and central bank digital infrastructure.',
      link: '/sectors/financial-services',
      icon: <svg viewBox="0 0 24 24"><rect x="3" y="10" width="18" height="11" rx="1"/><path d="M3 10l9-7 9 7"/><path d="M9 21V13h6v8"/></svg>,
    },
    {
      num: '02', title: 'Government & Public Sector', sub: 'Ministries · Agencies · Multilaterals · Development Banks',
      desc: 'Public institutions where digital trust is foundational to governance and citizen confidence. National digital transformation, cross-agency data governance and multilateral programme security.',
      link: '/sectors/government-public-sector',
      icon: <svg viewBox="0 0 24 24"><path d="M3 21h18M4 18V9.5M20 18V9.5M12 3l9 6.5H3L12 3z"/><rect x="9" y="13" width="6" height="5"/></svg>,
    },
    {
      num: '03', title: 'Digital Public Infrastructure', sub: 'National Identity · Payment Rails · DPGs · Open-Source Platforms',
      desc: 'National payment rails, digital identity programmes and open-source Digital Public Goods that underpin entire economies. Mojaloop, MOSIP, OpenG2P, Tazama, COMESA — built by our practitioners.',
      link: '/sectors/digital-platforms',
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18"/></svg>,
    },
    {
      num: '04', title: 'Private Equity & Investment', sub: 'PE Houses · Family Offices · Deal Teams · Portfolio Companies',
      desc: 'Deal teams and portfolio companies managing cyber risk through M&A and ownership cycles. 250+ transactions — buy-side diligence, sell-side preparation, post-deal improvement and portfolio governance.',
      link: '/sectors/private-equity',
      icon: <svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    },
    {
      num: '05', title: 'Technology & SaaS', sub: 'Platforms · SaaS · Scale-ups · Enterprise Software',
      desc: 'Platforms, SaaS and technology companies proving security posture to enterprise buyers, boards and investors. Enterprise sales unblocked, ISO 27001 achieved, board-level accountability established.',
      link: '/sectors/software-saas',
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 0 0 4.93 4.93M4.93 19.07A10 10 0 0 0 19.07 19.07M12 2v2M12 20v2M2 12h2M20 12h2"/></svg>,
    },
    {
      num: '06', title: 'Fintech & Payments', sub: 'Fintechs · Payment Operators · Mobile Money · Neobanks',
      desc: 'Regulated disruptors building trust at speed — PCI DSS, FCA, PRA, DORA and emerging market central bank requirements. From seed-stage compliance to tier-one payment operator assurance.',
      link: '/industries/fintech-payments',
      icon: <svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20M6 15h4"/></svg>,
    },
    {
      num: '07', title: 'AI Product Companies', sub: 'AI Startups · Foundation Model Labs · Enterprise AI · Agentic AI',
      desc: 'AI product companies navigating EU AI Act, AI governance and the security architecture of LLM, RAG and agentic AI systems — proving trustworthiness to enterprise buyers and regulators.',
      link: '/industries/ai-product-companies',
      icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    },
    {
      num: '08', title: 'Critical Infrastructure', sub: 'Energy · Water · Transport · Telecoms',
      desc: 'Energy, water, transport and telecommunications operators where a breach carries national consequences. ICS/SCADA security, OT/IT convergence and NIS2/DORA critical infrastructure compliance.',
      link: '/industries/critical-infrastructure',
      icon: <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    },
  ]

  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Sector Experience</div>
            <h1 className="svc-h1 reveal">Securing the most demanding sectors.</h1>
            <p className="svc-lede reveal">
              Different sectors face fundamentally different threat profiles and regulatory mandates. We tailor our AI governance, platform trust, and cybersecurity capabilities to the specific operational realities of the industries we serve.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/about">About Nucleus Systems <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="reach-strip">
        <div className="rs-inner">
          <div className="rs-stats">
            <div className="rs-stat reveal"><span className="rs-num">600<span className="rs-plus">+</span></span><span className="rs-label">Engagements</span></div>
            <div className="rs-divider" aria-hidden="true"></div>
            <div className="rs-stat reveal"><span className="rs-num">40<span className="rs-plus">+</span></span><span className="rs-label">Countries</span></div>
            <div className="rs-divider" aria-hidden="true"></div>
            <div className="rs-stat reveal"><span className="rs-num">250<span className="rs-plus">+</span></span><span className="rs-label">M&amp;A transactions</span></div>
            <div className="rs-divider" aria-hidden="true"></div>
            <div className="rs-stat reveal"><span className="rs-num">8</span><span className="rs-label">Sectors covered</span></div>
          </div>
          <p className="rs-tagline reveal">Practitioner-led. Evidence-based. Outcome-focused.</p>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">Sectors We Serve</span>
            <h2>Depth where it counts.</h2>
            <p>Each sector page covers why that sector faces distinct trust and cyber risk challenges, which services we bring to it, and the track record that backs the claim.</p>
          </div>
          <div className="svc-what-grid">
            {sectors.map((s, i) => (
              <Link className="svc-what-card reveal" to={s.link} key={i} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title">{s.title}</h3>
                <p className="svc-what-desc" style={{ fontSize: '12px', color: 'var(--blue)', marginBottom: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em' }}>{s.sub}</p>
                <p className="svc-what-desc">{s.desc}</p>
                <span className="arr-link" style={{ marginTop: '12px', display: 'block' }}>Explore sector →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Cross-Sector Services</span>
            <h2>Services applied across all sectors</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/cyber/maturity">
              <h4>Cybersecurity Strategy &amp; Leadership</h4>
              <p>Sector-specific maturity assessment and security improvement programmes.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/ma">
              <h4>M&amp;A &amp; Investor Services</h4>
              <p>Cyber due diligence, sell-side preparation and portfolio programmes across all sectors.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/fractional-ciso">
              <h4>Fractional / Interim CISO</h4>
              <p>Senior security leadership for regulated organisations at every stage.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Your sector has specific requirements. So do we.</h2>
            <p>Book a briefing with a practitioner who has worked in your sector — not a generalist who has read about it.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/about">About Nucleus Systems</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
