import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import { useSEO } from '../../hooks/useSEO'

export default function Sectors() {
  useReveal()
  useSEO({
    title: 'Sectors We Serve | Financial Services, Government, Private Equity — Nucleus Systems',
    description: 'Nucleus Systems serves financial services, government, digital public infrastructure, private equity, technology & SaaS, fintech, AI product companies and critical infrastructure across 40+ countries.',
    canonical: 'https://www.nucleussystems.com/sectors',
  })
  const sectors = [
    {
      num: '01', title: 'Financial Services', sub: 'Banks · Insurers · Asset Managers · Central Banks',
      desc: 'Banks, insurers and asset managers where a trust failure triggers systemic regulatory action. Tier-one banking, insurance capital modelling, asset management operational resilience and central bank digital infrastructure.',
      link: '/sectors/financial-services',
      img: '/images/sector_financial.jpg',
    },
    {
      num: '02', title: 'Government & Public Sector', sub: 'Ministries · Agencies · Multilaterals · Development Banks',
      desc: 'Public institutions where digital trust is foundational to governance and citizen confidence. National digital transformation, cross-agency data governance and multilateral programme security.',
      link: '/sectors/government-public-sector',
      img: '/images/sector_government.jpg',
    },
    {
      num: '03', title: 'Digital Public Infrastructure', sub: 'National Identity · Payment Rails · DPGs · Open-Source Platforms',
      desc: 'National payment rails, digital identity programmes and open-source Digital Public Goods that underpin entire economies. Mojaloop, MOSIP, OpenG2P, Tazama, COMESA — built by our practitioners.',
      link: '/sectors/digital-platforms',
      img: '/images/sector_dpi.jpg',
    },
    {
      num: '04', title: 'Private Equity & Investment', sub: 'PE Houses · Family Offices · Deal Teams · Portfolio Companies',
      desc: 'Deal teams and portfolio companies managing cyber risk through M&A and ownership cycles. 250+ transactions — buy-side diligence, sell-side preparation, post-deal improvement and portfolio governance.',
      link: '/sectors/private-equity',
      img: '/images/sector_pe.jpg',
    },
    {
      num: '05', title: 'Technology & SaaS', sub: 'Platforms · SaaS · Scale-ups · Enterprise Software',
      desc: 'Platforms, SaaS and technology companies proving security posture to enterprise buyers, boards and investors. Enterprise sales unblocked, ISO 27001 achieved, board-level accountability established.',
      link: '/sectors/software-saas',
      img: '/images/sector_tech.jpg',
    },
    {
      num: '06', title: 'Fintech & Payments', sub: 'Fintechs · Payment Operators · Mobile Money · Neobanks',
      desc: 'Regulated disruptors building trust at speed — PCI DSS, FCA, PRA, DORA and emerging market central bank requirements. From seed-stage compliance to tier-one payment operator assurance.',
      link: '/industries/fintech-payments',
      img: '/images/sector_fintech.jpg',
    },
    {
      num: '07', title: 'AI Product Companies', sub: 'AI Startups · Foundation Model Labs · Enterprise AI · Agentic AI',
      desc: 'AI product companies navigating EU AI Act, AI governance and the security architecture of LLM, RAG and agentic AI systems — proving trustworthiness to enterprise buyers and regulators.',
      link: '/industries/ai-product-companies',
      img: '/images/sector_ai.jpg',
    },
    {
      num: '08', title: 'Critical Infrastructure', sub: 'Energy · Water · Transport · Telecoms',
      desc: 'Energy, water, transport and telecommunications operators where a breach carries national consequences. ICS/SCADA security, OT/IT convergence and NIS2/DORA critical infrastructure compliance.',
      link: '/industries/critical-infrastructure',
      img: '/images/sector_critical.jpg',
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
              <h1 className="wm-h1 reveal">Securing the most demanding industries.</h1>
              <p className="wm-lede reveal">
                Different industries face fundamentally different threat profiles and regulatory mandates. We tailor our AI governance, platform trust, and cybersecurity capabilities to the specific operational realities of the industries we serve.
              </p>
              <div className="reveal">
                <Link className="wm-pill-btn" to="/contact">Book a Briefing</Link>
              </div>
            </div>
            <div className="wm-hero-img-box reveal">
              <img src="/images/sector_financial.jpg" alt="Industries" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
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
              <Link to={s.link} key={i} className="wm-card reveal" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'var(--wm-pink)', color: '#fff', fontWeight: 800, fontSize: '11px', letterSpacing: '.08em', padding: '4px 10px', borderRadius: '4px' }}>{s.num}</div>
                </div>
                <div style={{ padding: '20px 24px 24px' }}>
                  <h3 style={{ marginBottom: '6px' }}>{s.title}</h3>
                  <div style={{ fontSize: '12px', color: 'var(--wm-pink)', marginBottom: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em' }}>{s.sub}</div>
                  <p>{s.desc}</p>
                  <div className="wm-card-link">Explore industry</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Services block */}
      <section className="wm-section">
        <div className="wrap">
          <div className="wm-result-block reveal">
            <div className="wm-result-img" style={{ overflow: 'hidden' }}>
              <img src="/images/sector_cross_industry.jpg" alt="Cross-Industry Services" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
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
