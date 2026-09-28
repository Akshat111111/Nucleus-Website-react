import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const FRAMEWORKS_DATA = [
  {
    framework: <><strong>NS-CMMF</strong><br/>Cybersecurity Maturity Management Framework v1.0</>,
    focus: 'Cyber maturity, board-level cyber risk, M&A risk',
    standards: 'NIST CSF, ISO 27001, DORA, NIS 2',
    serviceLine: 'Cybersecurity Maturity Management & M&A Risk',
    role: 'Fractional CISO and board cyber risk, cyber diligence and post-deal improvement, and cloud/resilience work',
    product: 'Cyber Maturity Management Platform: SaaS for board, M&A and post-deal maturity assessment, with roadmap, control owners and evidence tracking',
    detail: 'High-level only'
  },
  {
    framework: <><strong>NS-AIGF</strong><br/>AI Governance Framework v1.0</>,
    focus: 'AI governance and risk management',
    standards: 'EU AI Act, ISO 42001, NIST AI RMF',
    serviceLine: 'AI Governance & AI Security',
    role: <><strong>Govern:</strong> AI policy, ownership, risk classification, approval, oversight and board evidence. Outcome: governance assurance</>,
    product: 'AI Governance Intelligence: AI inventory, risk classification, EU AI Act / ISO 42001 readiness, continuous reporting',
    detail: 'Medium'
  },
  {
    framework: <><strong>NS AI-UAF</strong><br/>AI Usage Assurance Framework v1.0</>,
    focus: 'How employees, contractors, developers and business teams actually use enterprise AI, including approved copilots, shadow AI, embedded SaaS AI and agents',
    standards: '15+ sources, including EU AI Act, ISO 42001, ISO 23894, NIST AI RMF and privacy/security baselines',
    serviceLine: 'AI Governance & AI Security',
    role: <><strong>Usage assurance:</strong> Proves users, tools and agents use AI safely. Outcome: Safe workforce and enterprise AI use</>,
    product: 'Not stated as a separate product track',
    detail: <><strong>High:</strong> 96 controls, 8 domains, L1→L5 maturity, 0–100 Trust Score, 5 evidence grades, assurance levels AUA-1 to AUA-4</>
  },
  {
    framework: <><strong>NS AISCA</strong><br/>AI Security Controls Architecture v1.0</>,
    focus: 'AI security architecture for LLM, RAG, agentic AI, MLSecOps',
    standards: 'OWASP LLM Top 10, MITRE ATLAS, NIST AI 100-2, Google SAIF, ISO/IEC 27001',
    serviceLine: 'AI Governance & AI Security',
    role: <><strong>Design:</strong> security domains and controls for models, agents, data, identity, infrastructure and runtime. Outcome: control architecture</>,
    product: 'AI Security Controls Platform: controls assessment, attack-surface scoring, evidence, AI security roadmap',
    detail: 'Medium'
  },
  {
    framework: <><strong>NS PAISAF</strong><br/>Physical AI &amp; Safety Assurance Framework v1.0</>,
    focus: 'AI that senses, decides, recommends or acts where failure can affect people, equipment, infrastructure, services or the physical world',
    standards: '20+ standards and sources',
    serviceLine: 'AI Governance & AI Security',
    role: <><strong>Safety assurance:</strong> Constrains physical AI and validates fail-safe operation. Outcome: Cyber-physical safety and resilience</>,
    product: 'Not stated as a separate product track',
    detail: <><strong>High:</strong> 130 controls, 10 domains, L1→L5 maturity, 0–100 Trust Score, 5-axis scoring, assurance levels PSA-1 to PSA-4</>
  },
  {
    framework: <><strong>NS AI² SecOps</strong><br/>AI² Security Operations Framework</>,
    focus: 'Secure AI, TrustOps, assurance ("Secure AI. Secure with AI.")',
    standards: 'NIST AI RMF, ISO 42001, MITRE ATLAS, OWASP LLM Top 10; supporting: NIST CSF 2.0, MITRE ATT&CK, NIST SSDF/SLSA',
    serviceLine: 'AI Governance & AI Security',
    role: <><strong>Operate:</strong> runs controls via Paxley, DevSecOps scanning, IaC tools, SOC workflows, AI runtime telemetry, evidence ledgers. Outcome: continuous operations</>,
    product: 'AI Security Operations Platform: SOC integration, TrustOps dashboards, runtime evidence, assurance metrics',
    detail: 'Medium'
  },
  {
    framework: <><strong>NS-CTAF</strong><br/>Code Trust Assurance Framework v1.0</>,
    focus: 'Software supply-chain security and code trust',
    standards: 'SLSA, NIST SSDF, SBOM, EU CRA, OWASP SAMM, EO 14028',
    serviceLine: 'Code Trust & Platform Assurance (with Paxley)',
    role: 'Secure SDLC, DevSecOps, AppSec, SBOM and supply-chain evidence, with Paxley as the evidence layer',
    product: 'Independent Code Trust Assurance Entity: CTA certification, trust scores, supply-chain evidence',
    detail: <><strong>High:</strong> 86 controls, 6 domains (D1–D6), 5 maturity levels, 0–100 Trust Score, evidence tiers T1–T4, certification levels CTA-1 to CTA-4</>
  },
  {
    framework: <><strong>NS-PQCF</strong><br/>Post Quantum Cryptography Framework v1.0</>,
    focus: 'Post-quantum cryptography readiness',
    standards: 'NIST, IETF, ETSI, ENISA, CNSA',
    serviceLine: 'Cybersecurity Maturity Management & M&A Risk',
    role: 'PQC readiness within cloud, resilience and critical infrastructure work',
    product: 'PQC Readiness Platform: cryptographic inventory, quantum-risk maturity, migration roadmap, board readiness evidence',
    detail: 'High-level only'
  }
]

export default function Frameworks() {
  useReveal()

  return (
    <div id="view-frameworks">

      {/* ── Hero ── */}
      <section className="fw-hero">
        <div className="wrap fw-hero-inner">
          <div className="fw-hero-eyebrow reveal">How We Deliver</div>
          <h1 className="fw-hero-h1 reveal">The Nucleus Digital Trust Assurance Architecture</h1>
          <p className="fw-hero-lede reveal">
            Eight proprietary frameworks are the evidence-based delivery engine behind every Nucleus Systems engagement. Structured, independently assessable, and built to produce board-ready evidence — not documentation theatre. Each framework operationalises a specific pillar of digital trust.
          </p>
          <div className="fw-hero-meta reveal">
            <span>8 proprietary frameworks</span>
            <span>3 trust pillars</span>
            <span>L1→L5 maturity scoring across all frameworks</span>
            <span>Board-ready evidence built in</span>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO vs HOW WE DO IT ── */}
      <section className="section" style={{ paddingBottom: '32px' }}>
        <div className="wrap">
          <div className="svc-problem-grid reveal">
            <div style={{ padding: '36px', background: 'var(--grey)', borderRadius: '16px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue)', display: 'block', marginBottom: '12px' }}>Services</span>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--navy)', marginBottom: '12px' }}>Three Trust Capabilities</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--slate)', lineHeight: 1.75, marginBottom: '20px' }}>We deliver AI Governance &amp; Security, Digital Platform Trust &amp; Security Assurance, and Cybersecurity Maturity Management &amp; M&amp;A Risk across nine service domains each.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link to="/what-we-do/ai-governance-security" style={{ fontSize: '12px', fontWeight: 700, color: '#7c3aed', textDecoration: 'none' }}>01 — AI Governance &amp; Security →</Link>
                <Link to="/what-we-do/digital-platform-trust" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--orange)', textDecoration: 'none' }}>02 — Digital Platform Trust &amp; Security Assurance →</Link>
                <Link to="/what-we-do/cybersecurity-compliance" style={{ fontSize: '12px', fontWeight: 700, color: '#4f8ef7', textDecoration: 'none' }}>03 — Cybersecurity Maturity Management &amp; M&amp;A Risk →</Link>
              </div>
            </div>
            <div style={{ padding: '36px', background: 'var(--navy)', borderRadius: '16px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', display: 'block', marginBottom: '12px' }}>Impact</span>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--white)', marginBottom: '12px' }}>Eight Proprietary Frameworks</h3>
              <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,.6)', lineHeight: 1.75, marginBottom: '20px' }}>Our frameworks are the structured methodologies, control architectures and evidence instruments behind every engagement. Applied proportionately — from a focused assessment to a continuous assurance programme.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['NS-CMMF', 'NS-AIGF', 'NS AI-UAF', 'NS AISCA', 'NS PAISAF', 'NS AI² SecOps', 'NS-CTAF', 'NS-PQCF'].map(f => (
                  <span key={f} style={{ fontSize: '9.5px', fontFamily: 'var(--mono)', background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.7)', borderRadius: '5px', padding: '3px 8px', fontWeight: 600 }}>{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Framework Matrix Table ── */}
      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="wrap">
          <div className="reveal" style={{ overflowX: 'auto', background: '#fff', borderRadius: '12px', border: '1px solid var(--line-2)' }}>
            <table style={{ width: '100%', minWidth: '960px', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' }}>
              <thead>
                <tr style={{ background: 'var(--grey)', color: 'var(--navy)', borderBottom: '2px solid var(--line-2)' }}>
                  <th style={{ padding: '16px', fontWeight: 800, whiteSpace: 'nowrap' }}>Framework</th>
                  <th style={{ padding: '16px', fontWeight: 800 }}>Focus</th>
                  <th style={{ padding: '16px', fontWeight: 800 }}>Aligned standards</th>
                  <th style={{ padding: '16px', fontWeight: 800 }}>Service line</th>
                  <th style={{ padding: '16px', fontWeight: 800 }}>Role / what it does in practice</th>
                  <th style={{ padding: '16px', fontWeight: 800 }}>Product track</th>
                </tr>
              </thead>
              <tbody>
                {FRAMEWORKS_DATA.map((r, i) => (
                  <tr key={i} style={{ borderBottom: i === FRAMEWORKS_DATA.length - 1 ? 'none' : '1px solid var(--line)' }}>
                    <td style={{ padding: '16px', verticalAlign: 'top', color: 'var(--ink)' }}>{r.framework}</td>
                    <td style={{ padding: '16px', verticalAlign: 'top', color: 'var(--slate)' }}>{r.focus}</td>
                    <td style={{ padding: '16px', verticalAlign: 'top', color: 'var(--slate)' }}>{r.standards}</td>
                    <td style={{ padding: '16px', verticalAlign: 'top', color: 'var(--slate)' }}>{r.serviceLine}</td>
                    <td style={{ padding: '16px', verticalAlign: 'top', color: 'var(--slate)' }}>{r.role}</td>
                    <td style={{ padding: '16px', verticalAlign: 'top', color: 'var(--slate)' }}>{r.product}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Assessment & Assurance Methods ── */}
      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Assessment &amp; Assurance Methods</span>
              <h2>How frameworks are applied in practice.</h2>
              <p>Our frameworks are not theoretical maturity models — they are delivery instruments. Each framework includes a defined assessment methodology, evidence collection protocol, scoring rubric and reporting format designed for the specific context in which it operates.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Evidence-based scoring', desc: 'Every control is scored against a defined evidence standard — L1 (documented policy) through L5 (continuous automated assurance). Scoring is objective, auditable and defensible to regulators and boards.' },
                { title: 'Gap quantification', desc: 'We translate maturity gaps into financial exposure estimates, regulatory non-compliance risk, and operational impact ranges — giving boards the context to make investment decisions, not just understand technical findings.' },
                { title: 'Board-ready reporting', desc: 'Every framework produces reporting formats designed for non-technical audiences: executive summaries, heatmap visualisations, investment-grade gap analysis and prioritised remediation roadmaps.' },
                { title: 'Multi-framework alignment', desc: 'NS-CMMF maps to 32 standards simultaneously. A single assessment produces evidence for NIST CSF, ISO 27001, DORA, NIS2, PCI DSS and more — eliminating the duplication that plagues multi-standard compliance programmes.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}><h4>{p.title}</h4><p>{p.desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Continuous Evidence & Maturity Measurement ── */}
      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">Continuous Evidence &amp; Maturity Measurement</span>
            <h2>From point-in-time assessment to continuous assurance.</h2>
            <p>Assessment is the starting point, not the destination. Our frameworks are designed to transition from point-in-time assessment to continuous evidence collection and maturity tracking — giving organisations a live view of their security posture rather than an annual snapshot.</p>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'TrustOps Metrics', desc: 'Continuous measurement of trust across the three pillars — AI trustworthiness scores, code trust ratings and cybersecurity maturity indices updated on a defined cadence.' },
              { num: '02', title: 'Paxley Integration', desc: 'NS-CTAF controls are operationalised continuously through Paxley — SBOM tracking, VEX monitoring and code trust scoring in production environments.' },
              { num: '03', title: 'ASOps Programme', desc: 'NS-AI² SecOps framework operationalises continuous AI security — adversarial testing pipelines, model drift monitoring and AI asset discovery running continuously.' },
              { num: '04', title: 'Evidence Retention', desc: 'Framework evidence is structured for audit retention — timestamped, version-controlled and formatted for regulatory examination, M&A due diligence and certification body review.' },
            ].map((s, i) => (
              <div className="svc-what-card reveal" key={i}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title">{s.title}</h3>
                <p className="svc-what-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="fw-cta-band section">
        <div className="wrap fw-cta-inner reveal">
          <h2 className="fw-cta-h2">Want to understand how our frameworks apply to your situation?</h2>
          <p className="fw-cta-sub">
            Every engagement begins with a scoping conversation. Our frameworks are applied proportionately — from a focused assessment to a continuous assurance programme.
          </p>
          <Link className="btn btn-orange" to="/contact">
            Book a Briefing <span className="arr">→</span>
          </Link>
        </div>
      </section>

    </div>
  )
}
