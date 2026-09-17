import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

const CYBER_CHAIN = [
  { code: 'N3-CMMF v1.0', short: 'Cybersecurity Maturity Management', step: '01' },
  { code: 'N3-PQCF v1.0', short: 'Post-Quantum Cryptography', step: '02' },
]

const SERVICES = [
  {
    num: '01',
    title: 'Cybersecurity Maturity Assessment',
    desc: 'Structured maturity assessment aligned to NS-CMMF — 188 controls across 6 domains, evidence-based scoring, financial gap quantification, board-ready reporting and 3-year improvement roadmap.',
    link: '/what-we-do/cyber/maturity',
    tags: ['NS-CMMF', 'Maturity Assessment', 'Board Reporting'],
  },
  {
    num: '02',
    title: 'Cybersecurity Governance',
    desc: 'Cybersecurity strategy, governance model design, policy frameworks, security committee structures, RACI and accountability frameworks — the governance layer that makes security programmes work.',
    link: '/what-we-do/cyber/governance',
    tags: ['Governance', 'CISO Advisory', 'Policy Frameworks'],
  },
  {
    num: '03',
    title: 'Fractional / Virtual CISO',
    desc: 'CISO-level security leadership without a full-time appointment — fractional CISO, virtual CISO and interim CISO roles for organisations requiring experienced security leadership at board and executive level.',
    link: '/what-we-do/cyber/fractional-ciso',
    tags: ['Fractional CISO', 'vCISO', 'Interim CISO'],
  },
  {
    num: '04',
    title: 'Compliance Programme Management',
    desc: 'Regulatory compliance programme delivery — ISO 27001 certification, SOC 2 readiness, PCI DSS compliance, NIS2 implementation, DORA operational resilience, GDPR and Cyber Resilience Act preparation.',
    link: '/what-we-do/cyber/compliance',
    tags: ['ISO 27001', 'DORA', 'NIS2', 'SOC 2', 'PCI DSS'],
  },
  {
    num: '05',
    title: 'Operational Resilience',
    desc: 'Business continuity, disaster recovery, incident response planning and tabletop exercises — ensuring organisations can withstand, respond to and recover from security incidents and operational disruptions.',
    link: '/what-we-do/cyber/resilience',
    tags: ['BCP', 'Disaster Recovery', 'IR Planning', 'Tabletop'],
  },
  {
    num: '06',
    title: 'Threat & Vulnerability Management',
    desc: 'Continuous attack surface management — vulnerability assessments, threat intelligence, dark web monitoring, adversary simulation and exposure prioritisation across enterprise environments.',
    link: '/what-we-do/cyber/tvem',
    tags: ['Vulnerability Management', 'Attack Surface', 'Dark Web'],
  },
  {
    num: '07',
    title: 'Managed Security & MDR',
    desc: 'Managed Detection and Response, MXDR, managed SOC and endpoint security management — the CyberOne managed security capability delivering 24/7 monitoring and response for organisations that need more than periodic assessment.',
    link: '/what-we-do/cyber/managed-security',
    tags: ['MDR', 'SOC', 'CyberOne', 'Zero Trust'],
  },
  {
    num: '08',
    title: 'Post-Quantum Cryptography',
    desc: 'Structured PQC readiness aligned to NS-PQCF — cryptographic inventory, CBOM construction, algorithm migration roadmap, crypto-agility assessment and supplier PQC readiness programme.',
    link: '/what-we-do/cyber/pqc',
    tags: ['NS-PQCF', 'PQC Migration', 'CBOM', 'Crypto-Agility'],
  },
  {
    num: '09',
    title: 'M&A Cyber Advisory',
    desc: 'Specialist cyber due diligence across the M&A lifecycle — buy-side technical validation, sell-side cyber readiness, post-close remediation and PE portfolio cybersecurity management across 250+ transactions.',
    link: '/what-we-do/cyber/ma',
    tags: ['M&A Due Diligence', 'Buy-Side DD', 'Sell-Side', 'PE Portfolio'],
  },
]

export default function PillarCyber() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">What We Do · 03</div>
            <h1 className="svc-h1 reveal">Cybersecurity &amp; Compliance Maturity Management</h1>
            <p className="svc-lede reveal">
              Organisations face escalating regulatory obligations — DORA, NIS2, ISO 27001, PCI DSS, and now the Cyber Resilience Act — while simultaneously managing a threat environment that rewards maturity gaps. We deliver structured cybersecurity maturity programmes, compliance frameworks and specialist advisory services — from board-level governance through to 24/7 managed security operations — using two proprietary frameworks.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">Our Frameworks <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber & Compliance Chain */}
      <section className="reach-strip">
        <div className="rs-inner">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--orange)' }}>
              The Cyber & Compliance Chain — Two Frameworks in Sequence
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', flexWrap: 'wrap', rowGap: '12px' }}>
            {CYBER_CHAIN.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="reveal" style={{ textAlign: 'center', padding: '14px 28px', background: 'rgba(255,255,255,.06)', borderRadius: '10px', minWidth: '190px' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '8.5px', fontWeight: 700, color: '#4f8ef7', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '5px' }}>{f.step}</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--white)', marginBottom: '4px' }}>{f.short}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '8px', color: 'rgba(255,255,255,.45)', letterSpacing: '.06em' }}>{f.code}</div>
                </div>
                {i < CYBER_CHAIN.length - 1 && (
                  <div style={{ padding: '0 10px', color: 'rgba(255,255,255,.25)', fontSize: '16px', fontWeight: 300 }}>→</div>
                )}
              </div>
            ))}
          </div>
          <p className="rs-tagline reveal" style={{ marginTop: '24px' }}>Measure maturity. Close compliance gaps. Prepare for post-quantum. Build continuously.</p>
        </div>
      </section>

      {/* Problem */}
      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why Cybersecurity Maturity Is the Foundation</span>
              <h2>Compliance is a floor, not a ceiling — but most organisations cannot demonstrate they've reached it.</h2>
              <p>DORA, NIS2, ISO 27001, PCI DSS and the Cyber Resilience Act create overlapping regulatory obligations for organisations operating in regulated sectors. Meeting them requires structured maturity measurement, documented evidence, and a governance framework that translates security controls into board-level accountability. Most organisations attempt compliance without the underlying maturity programme — and fail both.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Regulatory convergence and overlap', desc: 'DORA, NIS2, ISO 27001, PCI DSS and CRA overlap significantly — but require separate evidence sets, different audit formats and distinct governance obligations. Without a unified maturity framework, organisations duplicate effort and still have gaps.' },
                { title: 'Board accountability without board understanding', desc: 'Regulators require board-level cybersecurity governance and accountability. Boards require evidence they can understand and act on. Translating technical security posture into investment-grade governance reporting is a specialist skill.' },
                { title: 'Post-quantum timeline compression', desc: 'Harvest-now, decrypt-later attacks mean cryptographic migration to post-quantum algorithms is already urgent — not a 2030 problem. Organisations without a cryptographic inventory cannot assess their exposure or plan their migration.' },
                { title: 'M&A creating cybersecurity liability', desc: 'Acquisitions without structured cyber due diligence routinely create post-close cybersecurity liabilities that exceed the cost of the diligence itself. 250+ M&A transactions have given us a precise view of where cyber risk hides in deal processes.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}><h4>{p.title}</h4><p>{p.desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">Nine Service Domains</span>
            <h2>Cybersecurity &amp; Compliance Maturity Management — what we deliver.</h2>
            <p>From maturity measurement to managed security operations — nine service domains covering every dimension of enterprise cybersecurity and compliance.</p>
          </div>
          <div className="svc-what-grid">
            {SERVICES.map((s, i) => (
              <Link className="svc-what-card reveal" to={s.link} key={i} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title">{s.title}</h3>
                <p className="svc-what-desc">{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '12px' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontSize: '9.5px', background: 'rgba(79,142,247,.1)', color: '#4f8ef7', border: '1px solid rgba(79,142,247,.25)', borderRadius: '5px', padding: '2px 7px', fontWeight: 700, letterSpacing: '.04em' }}>{t}</span>
                  ))}
                </div>
                <span className="arr-link" style={{ marginTop: '12px', display: 'block' }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Frameworks &amp; Standards</span>
            <h2>The regulatory and security frameworks we work to.</h2>
          </div>
          <div className="standards-grid">
            {['NIST CSF 2.0', 'ISO/IEC 27001:2022', 'DORA (EU)', 'NIS2 Directive', 'PCI DSS v4.0', 'SOC 2 Type II', 'ISO 22301 (BCMS)', 'CIS CSC v8', 'NIST SP 800-53', 'Cyber Resilience Act', 'NIST PQC Standards', 'ETSI Quantum-Safe'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Connected Capabilities</span>
            <h2>Cybersecurity &amp; Compliance connects to</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/ai-governance-security"><h4>AI Governance &amp; Security</h4><p>AI governance adds an AI-specific compliance layer on top of enterprise cybersecurity maturity.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/digital-platform-trust"><h4>Digital Platform Trust</h4><p>Platform security and code trust — the technical controls that underpin compliance evidence.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/experience/ma"><h4>M&amp;A Experience</h4><p>250+ M&amp;A transactions — buy-side, sell-side, post-deal and portfolio cybersecurity advisory.</p><span className="arr-link">Explore →</span></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Compliance is a floor, not a destination. Maturity is the goal.</h2>
            <p>Speak with a practitioner who has delivered cybersecurity maturity programmes across financial services, government, DPI and private equity — not a generalist running a checklist.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">Our Cyber Frameworks</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
