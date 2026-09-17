import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function IndDPI() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Industries · Digital Public Infrastructure</div>
            <h1 className="svc-h1 reveal">The infrastructure that economies run on — secured by practitioners who helped build it.</h1>
            <p className="svc-lede reveal">
              National payment rails, digital identity programmes, open-source Digital Public Goods and government data exchange platforms form the digital nervous system of modern economies. A failure at this layer is not a data incident — it is an economic event. Our practitioners have contributed directly to Mojaloop, MOSIP, OpenG2P, Tazama and COMESA deployments across Africa, Asia and the Middle East. We assess these systems from the inside.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/sectors">All Sectors <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why This Sector Is Different</span>
              <h2>Systemic risk at population scale — with open-source attack surfaces.</h2>
              <p>DPI is being built at speed, often with open-source platforms, multi-stakeholder governance, and implementation teams spanning governments, development banks and private operators. The attack surface is novel. The threat model is specific. Most security advisors have never worked inside these systems.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Open-source platform specificity', desc: 'Mojaloop, MOSIP, OpenG2P, Tazama and GovStack have distinct architectures, trust boundaries and vulnerability classes that general-purpose security assessments cannot address. Platform-specific expertise is essential.' },
                { title: 'Multi-stakeholder governance risk', desc: 'DPI deployments involve central banks, ministries, development partners, private operators and open-source communities — each with different risk tolerances, patch governance and incident response capabilities.' },
                { title: 'Population-scale breach consequences', desc: 'A breach of national identity, payment or social protection infrastructure affects millions of citizens simultaneously — with identity fraud, financial exclusion and loss of public trust as direct consequences.' },
                { title: 'Novel regulatory environment', desc: 'DPI security is governed by emerging frameworks — G20 DPI principles, GovStack building blocks, DPGA privacy guidance, BIS CPMI payment security, and evolving national DPI legislation — that most advisors are not tracking.' },
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
            <h2>Platform-specific DPI security advisory.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Mojaloop Payment Security Review', desc: 'Purpose-built security assessment for Mojaloop deployments — switch architecture, participant API security, settlement layer, account lookup service, and operator governance. Based on direct contributor expertise.', link: '/services/digital-infrastructure' },
              { num: '02', title: 'MOSIP Digital Identity Security Assessment', desc: 'Security assurance for MOSIP national identity deployments — registration client, kernel, ID repository, authentication server, resident portal and partner management. MOSIP-specific threat model and vulnerability classes.', link: '/services/digital-infrastructure' },
              { num: '03', title: 'Tazama & Financial Crime Infrastructure', desc: 'Security assessment of Tazama fraud management deployments — data ingestion pipeline security, rule engine integrity, alert management and integration with core payment platforms.', link: '/services/digital-infrastructure' },
              { num: '04', title: 'OpenG2P & Social Protection Delivery', desc: 'Security for social protection digital delivery programmes — beneficiary registry security, payment disbursement controls, ID-to-payment linkage integrity and exclusion risk in OpenG2P deployments.', link: '/services/digital-infrastructure' },
              { num: '05', title: 'DPI Security Architecture Advisory', desc: 'Security architecture design and review for new DPI programmes — payment rails, identity systems, data exchanges. From concept through to deployment security for government and development bank programmes.', link: '/services/digital-infrastructure' },
              { num: '06', title: 'Post-Quantum Readiness for DPI', desc: 'Cryptographic inventory and PQC migration roadmap for long-lived DPI systems — payment infrastructure, national identity and digital credential systems that will operate past the quantum threat timeline.', link: '/services/post-quantum' },
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

      <section className="svc-scope section">
        <div className="wrap svc-scope-grid">
          <div className="svc-scope-col reveal">
            <h3>Platforms We Work On</h3>
            <ul className="svc-list">
              <li>Mojaloop — open-source interoperable payments</li>
              <li>MOSIP — modular open-source identity platform</li>
              <li>OpenG2P — social protection delivery</li>
              <li>Tazama — open-source fraud management</li>
              <li>COMESA — regional payment framework</li>
              <li>GovStack — government building blocks</li>
              <li>OpenCRVS — civil registration and vital statistics</li>
              <li>Inji — verifiable credential wallet</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Standards Coverage</h3>
            <ul className="svc-list">
              <li>G20 DPI Principles (security dimension)</li>
              <li>DPGA Privacy Expert Guidelines</li>
              <li>BIS CPMI Payment Security</li>
              <li>W3C Verifiable Credentials</li>
              <li>DID Core / OpenID Connect</li>
              <li>ISO 20022 security requirements</li>
              <li>PCI DSS v4 (payment DPI)</li>
              <li>GSMA Mobile Money Security</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Regions We Operate In</h3>
            <ul className="svc-list">
              <li>Sub-Saharan Africa</li>
              <li>East Africa (COMESA region)</li>
              <li>West Africa</li>
              <li>South Asia</li>
              <li>South-East Asia</li>
              <li>Middle East & Gulf</li>
              <li>Pacific</li>
              <li>Multilateral global programmes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Building or securing DPI? Talk to someone who has already done it.</h2>
            <p>Our practitioners have contributed to Mojaloop, MOSIP, OpenG2P and Tazama deployments across Africa and Asia. We bring inside knowledge, not outside assessment.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/digital-infrastructure">Digital Infrastructure Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
