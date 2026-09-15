import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function ExpGlobal() {
  useReveal()

  const regions = [
    {
      name: 'Sub-Saharan Africa', highlight: 'Primary delivery region',
      countries: ['Kenya', 'Nigeria', 'Ghana', 'Tanzania', 'Uganda', 'Ethiopia', 'Rwanda', 'South Africa', 'Mozambique', 'Zambia', 'Malawi', 'Côte d\'Ivoire', 'Senegal', 'Cameroon'],
      desc: 'Our largest delivery region — financial services, DPI, mobile money, government and critical infrastructure across East, West and Southern Africa. Direct practitioner presence and established regulatory relationships across the COMESA and EAC regions.',
      sectors: ['Mobile money & DFS', 'National digital identity (MOSIP)', 'Payment rail security', 'Central bank advisory', 'PE portfolio', 'Government DPI'],
    },
    {
      name: 'Middle East & Gulf', highlight: 'CBDC, banking, government',
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Kuwait', 'Jordan', 'Egypt', 'Oman'],
      desc: 'Financial services, government digital transformation and critical infrastructure across the GCC and Levant. Strong track record in tier-one banking, CBDC advisory and government cybersecurity programme delivery for regional sovereign entities.',
      sectors: ['Tier-one banking', 'CBDC security advisory', 'Government digital transformation', 'Critical infrastructure', 'Sovereign wealth & investment'],
    },
    {
      name: 'South & South-East Asia', highlight: 'DPI, payments, fintech',
      countries: ['India', 'Bangladesh', 'Pakistan', 'Sri Lanka', 'Philippines', 'Indonesia', 'Vietnam', 'Thailand', 'Malaysia', 'Myanmar'],
      desc: 'DPI, payment infrastructure and fintech across South and South-East Asia. Strong DPI track record — MOSIP national identity programmes, regional payment rail security, and mobile money security for populations deploying digital financial services at scale.',
      sectors: ['National digital identity', 'Payment system security', 'Mobile money & DFS', 'Regulatory compliance', 'Development bank programmes'],
    },
    {
      name: 'Europe', highlight: 'Financial services, M&A',
      countries: ['United Kingdom', 'Germany', 'France', 'Netherlands', 'Ireland', 'Luxembourg', 'Sweden', 'Spain', 'Italy', 'Belgium', 'Switzerland'],
      desc: 'M&A cyber due diligence, regulated financial services and AI governance across Western Europe. Strong M&A practice serving PE houses and strategic acquirers in UK, Benelux and DACH markets. Growing EU AI Act and DORA compliance advisory practice.',
      sectors: ['M&A cyber due diligence', 'DORA & NIS2 compliance', 'FCA/PRA regulated firms', 'AI governance (EU AI Act)', 'PE portfolio cybersecurity'],
    },
    {
      name: 'Pacific', highlight: 'DPI, government, development',
      countries: ['Papua New Guinea', 'Fiji', 'Vanuatu', 'Solomon Islands', 'Samoa', 'Tonga', 'Marshall Islands'],
      desc: 'Digital public infrastructure, government digital services and development institution programme security across the Pacific. Supporting national digital transformation programmes funded by development banks and bilateral development partners.',
      sectors: ['Government DPI', 'National identity systems', 'Payment infrastructure', 'Development bank programmes', 'Regulatory capacity building'],
    },
    {
      name: 'North America', highlight: 'M&A, technology, AI',
      countries: ['United States', 'Canada'],
      desc: 'M&A cyber due diligence for cross-border transactions (US/UK, US/Europe), AI governance advisory and technology sector security for US-listed and pre-IPO companies operating across our global coverage markets.',
      sectors: ['Cross-border M&A diligence', 'Technology & SaaS', 'AI product governance', 'Pre-IPO security readiness'],
    },
  ]

  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Experience · Global Delivery</div>
            <h1 className="svc-h1 reveal">40+ countries. Six continents. Delivery in markets where most advisors have no footprint.</h1>
            <p className="svc-lede reveal">
              Nucleus Systems delivers across markets where the combination of digital infrastructure deployment, financial services development and regulatory complexity creates the most demanding security advisory environment in the world. Our practitioners operate in these markets — not visit them.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/experience">Experience Overview <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="reach-strip">
        <div className="rs-inner">
          <div className="rs-stats">
            <div className="rs-stat reveal"><span className="rs-num">40<span className="rs-plus">+</span></span><span className="rs-label">Countries</span></div>
            <div className="rs-divider"></div>
            <div className="rs-stat reveal"><span className="rs-num">6</span><span className="rs-label">Regions</span></div>
            <div className="rs-divider"></div>
            <div className="rs-stat reveal"><span className="rs-num">600<span className="rs-plus">+</span></span><span className="rs-label">Engagements</span></div>
            <div className="rs-divider"></div>
            <div className="rs-stat reveal"><span className="rs-num">8</span><span className="rs-label">Sectors</span></div>
          </div>
          <p className="rs-tagline reveal">Where the digital transformation is actually happening — that is where we work.</p>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">Delivery by Region</span>
            <h2>Six regions. Practitioner presence — not occasional travel.</h2>
            <p>For each region we describe what we actually deliver, which sectors we operate in, and which countries our practitioners have worked in. Not where we are willing to go — where we have been.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {regions.map((r, i) => (
              <div className="reveal" key={i} style={{
                background: 'var(--grey)', borderRadius: '16px', padding: '36px',
                display: 'grid', gridTemplateColumns: '240px 1fr', gap: '40px',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '8px' }}>Region</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--navy)', marginBottom: '6px' }}>{r.name}</h3>
                  <div style={{ fontSize: '10.5px', background: 'var(--orange)', color: '#fff', borderRadius: '6px', padding: '3px 10px', display: 'inline-block', marginBottom: '20px', fontWeight: 700 }}>{r.highlight}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--slate)', marginBottom: '8px' }}>Countries</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {r.countries.map(c => (
                      <span key={c} style={{ fontSize: '10.5px', background: 'rgba(0,0,0,.07)', borderRadius: '5px', padding: '2px 7px', color: 'var(--navy)', fontWeight: 500 }}>{c}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: '13.5px', color: 'var(--slate)', lineHeight: 1.75, marginBottom: '20px' }}>{r.desc}</p>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '10px' }}>Sectors Active In</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {r.sectors.map(s => (
                      <li key={s} style={{ fontSize: '11.5px', background: '#fff', border: '1px solid rgba(0,0,0,.1)', borderRadius: '6px', padding: '4px 10px', color: 'var(--navy)', fontWeight: 600 }}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why Global Delivery Is Different</span>
              <h2>Regulatory knowledge, local network, and understanding of the actual threat landscape.</h2>
              <p>Global security advisory requires more than a passport. It requires regulatory knowledge of each jurisdiction, understanding of the specific threat actors active in that market, and a local network that enables rapid deployment and trusted engagement with regulators, central banks and government counterparts.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Regulatory environment knowledge', desc: 'Central bank frameworks, national CERT requirements, data protection obligations and sector-specific regulations differ significantly across 40+ countries. Our practitioners know these environments from working in them.' },
                { title: 'Local threat landscape understanding', desc: 'The threat actors targeting East African mobile money operators, GCC financial institutions and South Asian government digital infrastructure are different from those targeting European enterprises. Regional threat intelligence matters.' },
                { title: 'Development institution relationships', desc: 'Much of our global delivery involves programmes funded or governed by World Bank, UNDP, GSMA, Gates Foundation and bilateral development partners. We understand their governance frameworks, procurement requirements and accountability structures.' },
                { title: 'Multi-jurisdiction delivery capability', desc: 'COMESA region engagements span 21 member states. Regional DPI programmes involve 10+ country deployments. We have the capability and experience to coordinate delivery across multi-jurisdiction programmes under a single governance framework.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}><h4>{p.title}</h4><p>{p.desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Delivering in a market where most advisors do not have a footprint?</h2>
            <p>Book a briefing to discuss your geography, regulatory environment and delivery requirements with a practitioner who has worked in the region.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/experience">Experience Overview</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
