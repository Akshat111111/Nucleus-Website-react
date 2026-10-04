import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import { useSEO } from '../../hooks/useSEO'
import { useState } from 'react'
import heroCyber from '../../assets/hero_cyber.jpg'

const CYBER_CHAIN = [
  { code: 'NS-CMMF v1.0', short: 'Cybersecurity Maturity Management', step: '01' },
  { code: 'NS-PQCF v1.0', short: 'Post-Quantum Cryptography', step: '02' },
]

const SERVICES = [
  {
    title: 'Cybersecurity Maturity Assessment',
    desc: 'Structured maturity assessment aligned to NS-CMMF — 188 controls across 6 domains, evidence-based scoring, financial gap quantification, board-ready reporting and 3-year improvement roadmap.',
    link: '/what-we-do/cyber/maturity',
  },
  {
    title: 'Cybersecurity Governance',
    desc: 'Cybersecurity strategy, governance model design, policy frameworks, security committee structures, RACI and accountability frameworks — the governance layer that makes security programmes work.',
    link: '/what-we-do/cyber/governance',
  },
  {
    title: 'Fractional / Virtual CISO',
    desc: 'CISO-level security leadership without a full-time appointment — fractional CISO, virtual CISO and interim CISO roles for organisations requiring experienced security leadership at board and executive level.',
    link: '/what-we-do/cyber/fractional-ciso',
  },
  {
    title: 'Compliance Programme Management',
    desc: 'Regulatory compliance programme delivery — ISO 27001 certification, SOC 2 readiness, PCI DSS compliance, NIS2 implementation, DORA operational resilience, GDPR and Cyber Resilience Act preparation.',
    link: '/what-we-do/cyber/compliance',
  },
  {
    title: 'Operational Resilience',
    desc: 'Business continuity, disaster recovery, incident response planning and tabletop exercises — ensuring organisations can withstand, respond to and recover from security incidents and operational disruptions.',
    link: '/what-we-do/cyber/resilience',
  },
  {
    title: 'Threat & Vulnerability Management',
    desc: 'Continuous attack surface management — vulnerability assessments, threat intelligence, dark web monitoring, adversary simulation and exposure prioritisation across enterprise environments.',
    link: '/what-we-do/cyber/tvem',
  },
  {
    title: 'Managed Security & MDR',
    desc: 'Managed Detection and Response, MXDR, managed SOC and endpoint security management — delivering 24/7 monitoring and response for organisations that need more than periodic assessment.',
    link: '/what-we-do/cyber/managed-security',
  },
  {
    title: 'Post-Quantum Cryptography',
    desc: 'Structured PQC readiness aligned to NS-PQCF — cryptographic inventory, CBOM construction, algorithm migration roadmap, crypto-agility assessment and supplier PQC readiness programme.',
    link: '/what-we-do/cyber/pqc',
  },
  {
    title: 'M&A Cyber Advisory',
    desc: 'Specialist cyber due diligence across the M&A lifecycle — buy-side technical validation, sell-side cyber readiness, post-close remediation and PE portfolio cybersecurity management across 250+ transactions.',
    link: '/what-we-do/cyber/ma',
  },
]

const PROBLEMS = [
  {
    title: 'Regulatory convergence and overlap',
    desc: 'DORA, NIS2, ISO 27001, PCI DSS and CRA overlap significantly — but require separate evidence sets, different audit formats and distinct governance obligations. Without a unified maturity framework, organisations duplicate effort and still have gaps.',
  },
  {
    title: 'Board accountability without board understanding',
    desc: 'Regulators require board-level cybersecurity governance and accountability. Boards require evidence they can understand and act on. Translating technical security posture into investment-grade governance reporting is a specialist skill.',
  },
  {
    title: 'Post-quantum timeline compression',
    desc: 'Harvest-now, decrypt-later attacks mean cryptographic migration to post-quantum algorithms is already urgent — not a 2030 problem. Organisations without a cryptographic inventory cannot assess their exposure or plan their migration.',
  },
  {
    title: 'M&A creating cybersecurity liability',
    desc: 'Acquisitions without structured cyber due diligence routinely create post-close cybersecurity liabilities that exceed the cost of the diligence itself. 250+ M&A transactions have given us a precise view of where cyber risk hides in deal processes.',
  },
]

const FAQS = [
  {
    q: 'What is cybersecurity maturity management?',
    a: 'Cybersecurity maturity management is a structured approach to measuring, improving and governing an organisation\'s security controls against a defined framework — such as our proprietary NS-CMMF, which assesses 188 controls across 6 domains. Maturity programmes produce evidence-based scores, financial gap quantification and board-ready roadmaps.',
  },
  {
    q: 'How does compliance differ from maturity?',
    a: 'Compliance validates that specific controls are present at a point in time. Maturity management continuously measures how well those controls are implemented, sustained and improved. Compliance is the floor; maturity is the ceiling. Organisations that pursue compliance without maturity often fail audits because they cannot demonstrate sustained operation of controls.',
  },
  {
    q: 'What is a fractional CISO and when does it make sense?',
    a: 'A fractional CISO provides board-level cybersecurity leadership on a part-time or interim basis — typically 2–4 days per week. It makes sense for organisations that need CISO-calibre oversight but cannot justify or afford a full-time appointment, or who need experienced leadership during a transition period.',
  },
  {
    q: 'How long does a cybersecurity maturity assessment take?',
    a: 'Our NS-CMMF assessments typically run 4–6 weeks for a standard enterprise scope — covering evidence review, control interviews, technical validation and board report production. Specific scopes can be scoped and delivered faster for focused engagements.',
  },
]

function FAQ({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className={`wm-faq-item${open === i ? ' open' : ''}`}>
          <button className="wm-faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <span className="wm-faq-icon">{open === i ? '−' : '+'}</span>
          </button>
          <div className="wm-faq-answer"><p>{item.a}</p></div>
        </div>
      ))}
    </div>
  )
}

export default function PillarCyber() {
  useReveal()
  useSEO({
    title: 'Cybersecurity Maturity Management & M&A Risk | Nucleus Systems',
    description: 'Measure, improve and prove cybersecurity, compliance and operational resilience. Maturity assessments, governance, fractional CISO, DORA, NIS2, TVEM, MDR, PQC and M&A cyber risk services.',
    canonical: 'https://www.nucleussystems.com/what-we-do/cybersecurity-compliance',
  })
  return (
    <div className="wm-page">

      {/* ── Hero ── */}
      <section className="wm-hero">
        <div className="wrap">
          <div className="wm-hero-inner">
            <div>
              <span className="wm-eyebrow reveal">Services · 03</span>
              <h1 className="wm-h1 reveal">Cybersecurity &amp; Compliance <mark>Maturity Management</mark></h1>
              <p className="wm-lede reveal">
                Organisations face escalating regulatory obligations — DORA, NIS2, ISO 27001, PCI DSS, and the Cyber Resilience Act — while managing a threat environment that rewards maturity gaps. We deliver structured cybersecurity maturity programmes, compliance frameworks and specialist advisory services using two proprietary frameworks.
              </p>
              <div className="reveal" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link className="wm-pill-btn" to="/contact">Book a Briefing</Link>
                <Link className="wm-pill-btn wm-pill-btn-outline" to="/impact">Our Frameworks</Link>
              </div>
            </div>
            <div className="wm-hero-img-box reveal">
              <img src="/images/cyber_hero.jpg" alt="Cybersecurity and Maturity" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="wm-stats">
        <div className="wm-stat reveal">
          <div className="wm-stat-num">250+</div>
          <div className="wm-stat-label">M&amp;A Transactions Advised</div>
        </div>
        <div className="wm-stat reveal">
          <div className="wm-stat-num">188</div>
          <div className="wm-stat-label">NS-CMMF Controls Assessed</div>
        </div>
        <div className="wm-stat reveal">
          <div className="wm-stat-num">6</div>
          <div className="wm-stat-label">Compliance Frameworks Covered</div>
        </div>
      </div>

      {/* ── Framework Chain ── */}
      <section className="wm-section-alt">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '48px' }} className="reveal">
            <span className="wm-eyebrow" style={{ color: 'var(--wm-pink)' }}>The Cyber &amp; Compliance Chain — Two Frameworks in Sequence</span>
            <h2 className="wm-h2" style={{ marginBottom: '8px' }}>Measure maturity. <mark>Close compliance gaps.</mark> Prepare for post-quantum.</h2>
          </div>
          <div className="wm-chain">
            {CYBER_CHAIN.map((f, i) => (
              <div key={i} className="wm-chain-node reveal">
                <div className="wm-chain-step">{f.step}</div>
                <div className="wm-chain-short">{f.short}</div>
                <div className="wm-chain-code">{f.code}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem ZigZag ── */}
      <section className="wm-section">
        <div className="wrap">
          <div className="wm-zigzag">
            <div className="wm-zz-content reveal">
              <span className="wm-eyebrow">Why Cybersecurity Maturity Is the Foundation</span>
              <h2 className="wm-h2">Compliance is a floor, not a ceiling — <mark>but most organisations cannot demonstrate they've reached it.</mark></h2>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#555', marginBottom: '28px' }}>
                DORA, NIS2, ISO 27001, PCI DSS and the Cyber Resilience Act create overlapping regulatory obligations for organisations operating in regulated sectors. Meeting them requires structured maturity measurement, documented evidence, and a governance framework that translates security controls into board-level accountability.
              </p>
              <ul className="wm-problem-list">
                {PROBLEMS.map((p, i) => (
                  <li key={i}><strong>{p.title}</strong>{p.desc}</li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <div className="wm-zz-placeholder" style={{ overflow: 'hidden' }}>
                <img src="/images/cyber_hero.jpg" alt="Cyber abstract" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="wm-section-alt">
        <div className="wrap">
          <div className="wm-services-header reveal">
            <div>
              <h2>How We Can Help with Cybersecurity &amp; Compliance</h2>
              <p>Nine service domains covering every dimension of enterprise cybersecurity — from maturity measurement to 24/7 managed security operations.</p>
            </div>
          </div>
          <div className="wm-grid">
            {SERVICES.map((s, i) => (
              <Link to={s.link} key={i} className="wm-card reveal">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="wm-card-link">Learn More</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standards block ── */}
      <section className="wm-section">
        <div className="wrap">
          <div className="wm-result-block reveal">
            <div className="wm-result-img" style={{ minHeight: 380, overflow: 'hidden' }}>
              <img src="/images/cyber_hero.jpg" alt="Cyber Frameworks" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="wm-result-content">
              <div className="wm-result-eyebrow">Frameworks &amp; Standards</div>
              <h3 className="wm-result-h3">The regulatory and security frameworks we work to.</h3>
              <p className="wm-result-p">
                {['NIST CSF 2.0', 'ISO/IEC 27001:2022', 'DORA (EU)', 'NIS2 Directive', 'PCI DSS v4.0', 'SOC 2 Type II', 'ISO 22301', 'CIS CSC v8', 'NIST SP 800-53', 'Cyber Resilience Act', 'NIST PQC Standards', 'ETSI Quantum-Safe'].join(' · ')}
              </p>
              <Link to="/impact" className="wm-pill-btn">View Our Cyber Frameworks</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="wm-section-alt">
        <div className="wrap">
          <div className="wm-faq-header reveal" style={{ marginBottom: '0' }}>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="reveal">
            <FAQ items={FAQS} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="wm-section" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <div className="reveal">
            <span className="wm-eyebrow">Connected Capabilities</span>
            <h2 className="wm-h2">Cybersecurity &amp; Compliance <mark>connects to</mark></h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', margin: '32px 0 56px' }}>
              <Link to="/what-we-do/ai-governance-security" className="wm-pill-btn wm-pill-btn-outline">AI Governance &amp; Security</Link>
              <Link to="/what-we-do/digital-platform-trust" className="wm-pill-btn wm-pill-btn-outline">Digital Platform Trust &amp; Assurance</Link>
            </div>
            <h2 className="wm-h2" style={{ fontSize: '26px' }}>Compliance is a floor, not a destination. Maturity is the goal.</h2>
            <p style={{ margin: '16px auto 36px', maxWidth: '600px', color: '#555', fontSize: '16px' }}>
              Speak with a practitioner who has delivered cybersecurity maturity programmes across financial services, government, DPI and private equity.
            </p>
            <Link className="wm-pill-btn" to="/contact">Book a Briefing</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
