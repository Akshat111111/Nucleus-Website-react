import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function ExpDPI() {
  useReveal()

  const platforms = [
    {
      name: 'Mojaloop', tag: 'Real-Time Payments',
      desc: 'Mojaloop is the open-source interoperable real-time payments platform developed by the Level One Project, deployed across multiple African and Asian markets. Our practitioners have contributed to security architecture, threat modelling and implementation advisory for Mojaloop operators and hub deployments — covering the switch architecture, participant API security, settlement layer, account lookup service (ALS), and operator governance.',
      work: ['Switch security architecture review', 'Participant API security assessment', 'Settlement layer integrity analysis', 'ALS security and anti-fraud design', 'Operator governance framework', 'Hub deployment hardening advisory'],
    },
    {
      name: 'MOSIP', tag: 'National Digital Identity',
      desc: 'MOSIP — the Modular Open Source Identity Platform — is deployed by governments across Africa, Asia and the Pacific as the foundational identity infrastructure for populations of tens of millions. Our practitioners have delivered MOSIP-specific security assessments covering the full platform stack, including biometric subsystem security, PKI architecture and partner management security for live national deployments.',
      work: ['Registration client security assessment', 'Kernel services security review', 'ID repository security architecture', 'Authentication server assessment', 'Resident portal penetration testing', 'Partner management security review', 'Biometric security and liveness detection', 'PKI architecture and key management'],
    },
    {
      name: 'OpenG2P', tag: 'Social Protection Delivery',
      desc: 'OpenG2P is the open-source platform for government-to-person payment and social protection delivery — used by governments to deliver cash transfers, benefits and social protection to populations at scale. Our practitioners have advised on OpenG2P security for national social protection programmes, with specific focus on the integrity of ID-to-payment linkage and the fraud risks specific to benefit delivery at population scale.',
      work: ['Beneficiary registry security assessment', 'Payment disbursement controls review', 'ID-to-payment linkage integrity', 'Social protection fraud risk assessment', 'Data governance for beneficiary data', 'Integration security with MOSIP and payment rails'],
    },
    {
      name: 'Tazama', tag: 'Financial Crime Detection',
      desc: 'Tazama is the open-source real-time financial crime detection platform built for low- and middle-income markets — processing transaction data in real time to detect fraud, money laundering and financial crime across mobile money and payment platforms. Our practitioners have advised on Tazama security architecture, data integrity and integration security for regional deployments.',
      work: ['Data ingestion pipeline security', 'Rule engine security review', 'Alert management security', 'Integration security with Mojaloop', 'Data integrity and tamper prevention', 'Insider risk controls for financial crime detection'],
    },
    {
      name: 'COMESA', tag: 'Regional Payment Framework',
      desc: 'The Common Market for Eastern and Southern Africa digital payment and trade infrastructure. Our practitioners have advised on payment security architecture and digital trade system security across the COMESA regional framework — covering cross-border payment rails, regulatory compliance across member states and the security architecture of regional interoperability.',
      work: ['Regional payment security architecture', 'Cross-border payment rail security', 'Multi-jurisdiction regulatory compliance', 'Digital trade system security advisory', 'Regional interoperability trust framework'],
    },
    {
      name: 'GovStack & DPGs', tag: 'Government Building Blocks',
      desc: 'GovStack building blocks, DPGA-aligned Digital Public Goods and multilateral DPI programmes supported by development institutions (World Bank, UNDP, BMGF, digital impact alliance). Our practitioners have advised on security for GovStack implementations and broader DPG ecosystem security.',
      work: ['GovStack security building block alignment', 'DPG security architecture advisory', 'DPGA privacy guidelines implementation', 'Multilateral programme security governance', 'Development institution programme security'],
    },
  ]

  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Experience · DPI &amp; Digital Public Goods</div>
            <h1 className="svc-h1 reveal">The platforms that digital economies run on — assessed from the inside.</h1>
            <p className="svc-lede reveal">
              Our practitioners have contributed directly to Mojaloop, MOSIP, OpenG2P, Tazama, COMESA and GovStack deployments across Africa, Asia and the Middle East. We assess these systems with platform-specific expertise — not generic security methodology applied to systems we have never worked in.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/digital-infrastructure">Digital Infrastructure Services <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="reach-strip">
        <div className="rs-inner">
          <div className="rs-stats">
            <div className="rs-stat reveal"><span className="rs-num">6</span><span className="rs-label">DPI platforms</span></div>
            <div className="rs-divider"></div>
            <div className="rs-stat reveal"><span className="rs-num">40<span className="rs-plus">+</span></span><span className="rs-label">Countries</span></div>
            <div className="rs-divider"></div>
            <div className="rs-stat reveal"><span className="rs-num">DPG</span><span className="rs-label">Open-source contributor</span></div>
            <div className="rs-divider"></div>
            <div className="rs-stat reveal"><span className="rs-num">3</span><span className="rs-label">Continents active</span></div>
          </div>
          <p className="rs-tagline reveal">Inside knowledge — not outside assessment.</p>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">Platform Experience</span>
            <h2>Six DPI platforms. Hands-on practitioner expertise.</h2>
            <p>For each platform below, we describe our specific experience and what we have delivered — not general capability claims.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {platforms.map((p, i) => (
              <div className="reveal" key={i} style={{
                background: i % 2 === 0 ? 'var(--grey)' : '#fff',
                border: '1px solid rgba(0,0,0,.07)',
                borderRadius: '16px', padding: '36px',
                display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '40px',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '8px' }}>Platform</div>
                  <h3 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--navy)', marginBottom: '6px' }}>{p.name}</h3>
                  <div style={{ fontSize: '11px', background: 'var(--orange)', color: '#fff', borderRadius: '6px', padding: '3px 10px', display: 'inline-block', marginBottom: '20px', fontWeight: 700 }}>{p.tag}</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--slate)', lineHeight: 1.75 }}>{p.desc}</p>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '14px' }}>What We Have Delivered</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {p.work.map((w, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: 'var(--slate)', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--orange)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>▸</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Building or securing DPI? The people who helped build it are available to help you.</h2>
            <p>Book a briefing with a practitioner who has worked on Mojaloop, MOSIP, OpenG2P, Tazama or COMESA — in the specific deployment context you are working in.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/industries/dpi-digital-public-goods">DPI Industry Page</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
