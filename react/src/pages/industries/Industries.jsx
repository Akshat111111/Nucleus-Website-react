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
    <div className="wm-page">
      {/* Hero */}
      <section className="wm-hero">
        <div className="wrap">
          <div className="wm-hero-inner">
            <div>
              <span className="wm-eyebrow reveal">Industry Experience</span>
              <h1 className="wm-h1 reveal">Securing the most <mark>demanding industries.</mark></h1>
              <p className="wm-lede reveal">
                Different industries face fundamentally different threat profiles and regulatory mandates. We tailor our AI governance, platform trust, and cybersecurity capabilities to the specific operational realities of the industries we serve.
              </p>
              <div className="reveal">
                <Link className="wm-pill-btn" to="/contact">Book a Briefing</Link>
              </div>
            </div>
            <div className="wm-hero-img-box reveal">
              <div style={{ width: '100%', aspectRatio: '4/3', background: 'linear-gradient(135deg, #1e293b, #0f172a)', boxShadow: '16px 16px 0 0 rgba(10,9,61,0.05)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="wm-section wm-section-dotted">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '40px' }} className="reveal">
            <span className="wm-eyebrow" style={{ color: 'var(--wm-pink)' }}>Practitioner-led. Evidence-based. Outcome-focused.</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
            {[
              { num: '600+', label: 'Engagements' },
              { num: '40+', label: 'Countries' },
              { num: '250+', label: 'M&A transactions' },
              { num: '8', label: 'Industries covered' }
            ].map((stat, i) => (
              <div key={i} className="reveal" style={{ background: '#fff', padding: '24px', border: '1px solid #eee', minWidth: '200px', textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
                <div style={{ color: 'var(--wm-pink)', fontWeight: 900, fontSize: '32px', marginBottom: '8px' }}>{stat.num}</div>
                <div style={{ fontWeight: 800, color: 'var(--wm-navy)', fontSize: '14px', textTransform: 'uppercase' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="wm-section">
        <div className="wrap">
          <div className="wm-services-header reveal">
            <h2>INDUSTRIES WE SERVE: DEPTH WHERE IT COUNTS</h2>
            <p style={{ marginTop: '16px', fontSize: '16px', color: '#555' }}>Each industry page covers why that industry faces distinct trust and cyber risk challenges, which services we bring to it, and the track record that backs the claim.</p>
          </div>
          <div className="wm-grid">
            {sectors.map((s, i) => (
              <Link to={s.link} key={i} className="wm-card reveal">
                <h3>{s.title}</h3>
                <div style={{ fontSize: '12px', color: 'var(--wm-pink)', marginBottom: '8px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em' }}>{s.sub}</div>
                <p>{s.desc}</p>
                <div className="wm-card-link">Explore industry</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Services block */}
      <section className="wm-section">
        <div className="wrap">
          <div className="wm-result-block reveal">
            <div className="wm-result-img" style={{ background: 'linear-gradient(135deg, #be185d, #831843)' }}></div>
            <div className="wm-result-content">
              <div className="wm-result-eyebrow">Cross-Industry Services</div>
              <h3 className="wm-result-h3">Services applied across all industries</h3>
              <p className="wm-result-p">
                Cybersecurity Strategy & Leadership • M&A & Investor Services • Fractional / Interim CISO
              </p>
              <Link to="/what-we-do/cybersecurity-compliance" className="wm-pill-btn">View Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wm-section wm-section-dotted">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <span className="wm-eyebrow">Contact Us</span>
            <h2 className="wm-h2">Your industry has specific requirements. <mark>So do we.</mark></h2>
            <p style={{ margin: '16px auto 32px', maxWidth: '600px', color: '#555' }}>Book a briefing with a practitioner who has worked in your industry — not a generalist who has read about it.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <Link className="wm-pill-btn" to="/contact" style={{ background: 'var(--wm-navy)', color: '#fff' }}>Book a Briefing</Link>
              <Link className="wm-pill-btn" to="/about">About Nucleus Systems</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
