import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const AI_CHAIN = [
  { code: 'N3-AIGF v1.0', name: 'AI Governance Framework', tagline: 'Accountable AI governance satisfying EU AI Act, ISO 42001 & NIST AI RMF — one assessment, one evidence set.', stats: '60 controls · 7 domains · L1→L5 maturity', standards: ['EU AI Act', 'ISO 42001', 'NIST AI RMF'], link: '/what-we-do/ai/governance', accent: '#7c3aed' },
  { code: 'N3 AI-UAF v1.0', name: 'AI Usage Assurance Framework', tagline: 'Safe, ethical and compliant use of AI tools across the enterprise — from copilots to automated decision systems.', stats: 'Safe usage governance · Policy · Risk controls', standards: ['Safe Usage', 'ISO 23894', 'NIST AI RMF'], link: '/what-we-do/ai/usage-assurance', accent: '#7c3aed' },
  { code: 'N3 AISCA v1.0', name: 'AI Security Controls Architecture', tagline: 'Purpose-built AI security architecture covering every attack surface — model, prompt, RAG, agent, supply chain, runtime.', stats: '108 controls · 12 domains · 5-grade evidence', standards: ['LLM', 'RAG', 'Agentic AI', 'ML SecOps'], link: '/what-we-do/ai/security-architecture', accent: '#7c3aed' },
  { code: 'N3 PAISAF v1.0', name: 'Physical AI & Safety Assurance Framework', tagline: 'Assurance for AI systems operating in physical environments — robotics, autonomous systems and safety-critical deployments.', stats: 'Physical safety · TrustOps · Assurance scoring', standards: ['Physical AI', 'OT/ICS', 'TEVV'], link: '/what-we-do/ai/physical-ai', accent: '#7c3aed' },
  { code: 'N3 AI² SecOps v1.0', name: 'AI² Security Operations Framework', tagline: 'Continuous AI security operations — the only bidirectional AI SecOps framework. Secure AI. Use AI for defence.', stats: '88 controls · 8 domains · ASOps-1→4 certification', standards: ['AI SecOps', 'Adversarial Testing', 'ASOps'], link: '/what-we-do/ai/secops', accent: '#7c3aed' },
]

const DIGITAL_CHAIN = [
  { code: 'N3-SSAF v1.0', name: 'Secure Software Architecture Framework', tagline: 'End-to-end secure software architecture assurance — from design principles to implementation standards and architecture review.', stats: 'Architecture review · Design patterns · Risk scoring', standards: ['ISO/IEC 27034', 'NIST SP 800-160'], link: '/what-we-do/platform/secure-architecture', accent: '#f97316' },
  { code: 'N3-CTAF v1.0', name: 'Code Trust Assurance Framework', tagline: 'Cryptographically verifiable software supply-chain trust — identity, build integrity, secure development, dependencies, runtime.', stats: '86 controls · 6 domains · CTA-1→4 certification', standards: ['SLSA', 'NIST SSDF', 'S/CBOM', 'CRA'], link: '/what-we-do/platform/code-trust', accent: '#f97316' },
  { code: 'N3-SSDOF v1.0', name: 'Secure Software Deployment & Operations Framework', tagline: 'Operational security assurance for software deployment pipelines — runtime controls, configuration hardening and continuous compliance.', stats: 'Deployment controls · Runtime assurance · Ops hardening', standards: ['NIST SP 800-53', 'CIS CSC 8', 'SAMM'], link: '/what-we-do/platform/deployment', accent: '#f97316' },
]

const CYBER_CHAIN = [
  { code: 'N3-CMMF v1.0', name: 'Cybersecurity Maturity Management Framework', tagline: 'Unified cybersecurity maturity measurement — evidence-based scoring across 32 standards, financial gap quantification, board-ready reporting.', stats: '188 controls · 6 domains · 32 frameworks mapped', standards: ['NIST CSF', 'ISO 27001', 'DORA', 'NIS2'], link: '/what-we-do/cyber/maturity', accent: '#4f8ef7' },
  { code: 'N3-PQCF v1.0', name: 'Post-Quantum Cryptography Framework', tagline: 'Structured readiness for the post-quantum era — cryptographic inventory, algorithm migration, crypto-agility and supplier readiness assessment.', stats: 'Crypto discovery · CBOM · Migration roadmap', standards: ['NIST PQC', 'IETF', 'ETSI', 'ENISA', 'CNSA'], link: '/what-we-do/cyber/pqc', accent: '#4f8ef7' },
]

function ChainCard({ fw }) {
  return (
    <Link to={fw.link} className="fw-card reveal" style={{ textDecoration: 'none' }}>
      <div className="fw-card-accent" style={{ background: fw.accent }} />
      <div className="fw-card-body">
        <div className="fw-card-code" style={{ color: fw.accent }}>{fw.code}</div>
        <h3 className="fw-card-name">{fw.name}</h3>
        <p className="fw-card-tagline">{fw.tagline}</p>
        <div className="fw-card-stats">{fw.stats}</div>
        <div className="fw-card-standards">
          {fw.standards.map((s, i) => (
            <span className="fw-std-tag" key={i}>{s}</span>
          ))}
        </div>
      </div>
      <div className="fw-card-foot">
        <span className="fw-card-link" style={{ color: fw.accent }}>See related service →</span>
      </div>
    </Link>
  )
}

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
            Ten proprietary frameworks are the evidence-based delivery engine behind every Nucleus Systems engagement. Structured, independently assessable, and built to produce board-ready evidence — not documentation theatre. Each framework operationalises a specific pillar of digital trust.
          </p>
          <div className="fw-hero-meta reveal">
            <span>10 proprietary frameworks</span>
            <span>3 trust pillars</span>
            <span>L1→L5 maturity scoring across all frameworks</span>
            <span>Board-ready evidence built in</span>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO vs HOW WE DO IT ── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="svc-problem-grid reveal">
            <div style={{ padding: '36px', background: 'var(--grey)', borderRadius: '16px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue)', display: 'block', marginBottom: '12px' }}>What We Do</span>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--navy)', marginBottom: '12px' }}>Three Trust Capabilities</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--slate)', lineHeight: 1.75, marginBottom: '20px' }}>We deliver AI Governance &amp; Security, Digital Platform Trust &amp; Assurance, and Cybersecurity &amp; Compliance Maturity Management across nine service domains each.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link to="/what-we-do/ai-governance-security" style={{ fontSize: '12px', fontWeight: 700, color: '#7c3aed', textDecoration: 'none' }}>01 — AI Governance &amp; Security →</Link>
                <Link to="/what-we-do/digital-platform-trust" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--orange)', textDecoration: 'none' }}>02 — Digital Platform Trust &amp; Assurance →</Link>
                <Link to="/what-we-do/cybersecurity-compliance" style={{ fontSize: '12px', fontWeight: 700, color: '#4f8ef7', textDecoration: 'none' }}>03 — Cybersecurity &amp; Compliance Maturity →</Link>
              </div>
            </div>
            <div style={{ padding: '36px', background: 'var(--navy)', borderRadius: '16px' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--orange)', display: 'block', marginBottom: '12px' }}>How We Do It</span>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--white)', marginBottom: '12px' }}>Ten Proprietary Frameworks</h3>
              <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,.6)', lineHeight: 1.75, marginBottom: '20px' }}>Our frameworks are the structured methodologies, control architectures and evidence instruments behind every engagement. Applied proportionately — from a focused assessment to a continuous assurance programme.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['N3-AIGF', 'N3 AI-UAF', 'N3 AISCA', 'N3 PAISAF', 'N3 AI² SecOps', 'N3-SSAF', 'N3-CTAF', 'N3-SSDOF', 'N3-CMMF', 'N3-PQCF'].map(f => (
                  <span key={f} style={{ fontSize: '9.5px', fontFamily: 'var(--mono)', background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.7)', borderRadius: '5px', padding: '3px 8px', fontWeight: 600 }}>{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 AI Trust Chain ── */}
      <section className="fw-group section">
        <div className="wrap">
          <div className="fw-group-header reveal" style={{ borderLeftColor: '#7c3aed' }}>
            <span className="fw-group-label" style={{ color: '#7c3aed' }}>01 — AI Governance &amp; Security</span>
            <h2 className="fw-group-title">The AI Trust Chain — Five Frameworks in Sequence</h2>
            <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.7, maxWidth: '640px', marginTop: '10px' }}>
              Govern AI. Control how it is used. Secure its attack surface. Assure physical safety. Operate it continuously. Five frameworks that address the full lifecycle of AI trust — applied sequentially or selectively based on your maturity position.
            </p>
          </div>

          {/* Chain visual */}
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0', flexWrap: 'wrap', rowGap: '10px', marginBottom: '36px', padding: '20px', background: 'var(--grey)', borderRadius: '12px' }}>
            {['N3-AIGF', 'N3 AI-UAF', 'N3 AISCA', 'N3 PAISAF', 'N3 AI² SecOps'].map((f, i, arr) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', fontFamily: 'var(--mono)', fontWeight: 700, color: '#7c3aed', background: 'rgba(124,58,237,.1)', border: '1px solid rgba(124,58,237,.2)', borderRadius: '6px', padding: '5px 10px' }}>{f}</span>
                {i < arr.length - 1 && <span style={{ margin: '0 6px', color: 'var(--slate)', fontSize: '12px' }}>→</span>}
              </div>
            ))}
          </div>

          <div className="fw-cards">
            {AI_CHAIN.map((fw, i) => <ChainCard fw={fw} key={i} />)}
          </div>
        </div>
      </section>

      {/* ── 02 Digital Platform Trust Chain ── */}
      <section className="fw-group section">
        <div className="wrap">
          <div className="fw-group-header reveal" style={{ borderLeftColor: '#f97316' }}>
            <span className="fw-group-label" style={{ color: '#f97316' }}>02 — Digital Platform Trust &amp; Assurance</span>
            <h2 className="fw-group-title">The Digital Platform Trust Chain — Three Frameworks in Sequence</h2>
            <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.7, maxWidth: '640px', marginTop: '10px' }}>
              Design it securely. Build it with verifiable trust. Deploy it with operational assurance. Three frameworks that cover the full secure software lifecycle — from architecture through to runtime operations.
            </p>
          </div>

          {/* Chain visual */}
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0', flexWrap: 'wrap', rowGap: '10px', marginBottom: '36px', padding: '20px', background: 'var(--grey)', borderRadius: '12px' }}>
            {['N3-SSAF', 'N3-CTAF', 'N3-SSDOF'].map((f, i, arr) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', fontFamily: 'var(--mono)', fontWeight: 700, color: '#f97316', background: 'rgba(249,115,22,.1)', border: '1px solid rgba(249,115,22,.2)', borderRadius: '6px', padding: '5px 10px' }}>{f}</span>
                {i < arr.length - 1 && <span style={{ margin: '0 6px', color: 'var(--slate)', fontSize: '12px' }}>→</span>}
              </div>
            ))}
          </div>

          <div className="fw-cards">
            {DIGITAL_CHAIN.map((fw, i) => <ChainCard fw={fw} key={i} />)}
          </div>
        </div>
      </section>

      {/* ── 03 Cyber & Compliance Chain ── */}
      <section className="fw-group section">
        <div className="wrap">
          <div className="fw-group-header reveal" style={{ borderLeftColor: '#4f8ef7' }}>
            <span className="fw-group-label" style={{ color: '#4f8ef7' }}>03 — Cybersecurity &amp; Compliance Maturity Management</span>
            <h2 className="fw-group-title">The Cyber &amp; Compliance Chain — Two Frameworks in Sequence</h2>
            <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.7, maxWidth: '640px', marginTop: '10px' }}>
              Measure and improve cybersecurity maturity. Prepare for the post-quantum transition. Two frameworks that address the present-state maturity gap and the forward-looking cryptographic risk simultaneously.
            </p>
          </div>

          {/* Chain visual */}
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '0', flexWrap: 'wrap', rowGap: '10px', marginBottom: '36px', padding: '20px', background: 'var(--grey)', borderRadius: '12px' }}>
            {['N3-CMMF', 'N3-PQCF'].map((f, i, arr) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', fontFamily: 'var(--mono)', fontWeight: 700, color: '#4f8ef7', background: 'rgba(79,142,247,.1)', border: '1px solid rgba(79,142,247,.2)', borderRadius: '6px', padding: '5px 10px' }}>{f}</span>
                {i < arr.length - 1 && <span style={{ margin: '0 6px', color: 'var(--slate)', fontSize: '12px' }}>→</span>}
              </div>
            ))}
          </div>

          <div className="fw-cards">
            {CYBER_CHAIN.map((fw, i) => <ChainCard fw={fw} key={i} />)}
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
