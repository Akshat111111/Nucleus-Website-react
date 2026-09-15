import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function IndGovt() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Industries · Government &amp; Public Sector</div>
            <h1 className="svc-h1 reveal">Where digital trust is foundational to governance itself.</h1>
            <p className="svc-lede reveal">
              Governments, ministries, public agencies and multilateral organisations face a fundamentally different threat model to commercial organisations — nation-state adversaries, politically motivated disruption, and the consequence that a breach of public sector systems undermines not just an organisation, but citizen confidence in the state. We have delivered security advisory across national digital identity programmes, public financial management systems, e-government platforms and development institution operations across Africa, the Middle East, Asia and Europe.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/industries">All Industries <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why This Sector Is Different</span>
              <h2>Nation-state threats. Citizen trust. Operational continuity that governments cannot outsource.</h2>
              <p>Public sector digital transformation is accelerating — but so is the attack surface. Government systems now underpin citizen services, benefit delivery, tax collection, and national security functions. The consequence of failure is not a revenue loss; it is a governance crisis.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Nation-state threat actors', desc: 'Government digital systems are primary targets for nation-state adversaries — espionage, disruptive attack and supply-chain compromise targeting defence, foreign affairs, finance and critical public services.' },
                { title: 'Citizen data at population scale', desc: 'Government systems hold biometric data, tax records, health data, benefit information and national identity credentials for entire populations. A breach is a national event — legally, politically and diplomatically.' },
                { title: 'Procurement and governance complexity', desc: 'Public sector procurement processes, multi-vendor architectures, legacy infrastructure and inter-agency data sharing create security governance complexity that specialist advisory is required to navigate.' },
                { title: 'Digital public goods and open-source risk', desc: 'Governments deploying open-source DPI platforms — MOSIP, Mojaloop, OpenG2P — face specific security challenges: community governance, patch cadence, deployment variation and insider risk in government implementation teams.' },
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
            <h2>What we bring to government and public sector clients.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Cybersecurity Strategy & Maturity Assessment', desc: 'Government-specific maturity assessment aligned to NIST CSF, ISO 27001, NIS2 national implementation, and country-specific CERT/cybersecurity authority frameworks. Board and minister-ready reporting.', link: '/services/cybersecurity-advisory' },
              { num: '02', title: 'Digital Public Infrastructure Security', desc: 'Security architecture, threat modelling and assurance for government digital platforms — e-government portals, national ID, tax administration systems, public financial management and inter-agency data exchanges.', link: '/services/digital-infrastructure' },
              { num: '03', title: 'Penetration Testing', desc: 'Technical security testing of government digital systems — web applications, APIs, network infrastructure and cloud environments. Delivered with government classification sensitivity and appropriate security clearance protocols.', link: '/services/penetration-testing' },
              { num: '04', title: 'Operational Resilience & Incident Response', desc: 'Government incident response planning, national CERT alignment, crisis communication protocols, and BCP/DR for critical public services where continuity of service is a constitutional obligation.', link: '/services/operational-resilience' },
              { num: '05', title: 'AI Governance for Public Sector', desc: 'EU AI Act compliance for public sector AI deployments — government AI risk assessment, high-risk AI system requirements, procurement AI governance and public sector algorithmic transparency obligations.', link: '/services/ai-governance' },
              { num: '06', title: 'Supply Chain & Third-Party Risk', desc: 'Government technology supply chain security — vendor risk assessment, procurement security requirements, shared-service environment security governance and critical supplier assurance programmes.', link: '/services/cybersecurity-advisory' },
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

      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Relevant Frameworks</span>
            <h2>Standards we work to in government.</h2>
          </div>
          <div className="standards-grid">
            {['NIST CSF 2.0', 'ISO/IEC 27001:2022', 'NIS2 Directive', 'EU AI Act', 'GDPR / Government Data Protection', 'ISO 22301 (BCMS)', 'G20 DPI Security Principles', 'GovStack Security Building Blocks', 'DPGA Privacy Guidelines', 'Country CERT Frameworks'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Sectors</span>
            <h2>Adjacent to government</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/industries/dpi-digital-public-goods"><h4>Digital Public Infrastructure</h4><p>National DPI deployment security — the platforms governments are building.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/industries/critical-infrastructure"><h4>Critical Infrastructure</h4><p>Government-regulated critical systems — energy, water, transport, telecoms.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/industries/financial-services"><h4>Financial Services</h4><p>Central banks and public financial management systems.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Governments build trust. We help protect it.</h2>
            <p>Speak with a practitioner who has delivered security advisory across national digital transformation programmes.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/industries">All Industries</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
