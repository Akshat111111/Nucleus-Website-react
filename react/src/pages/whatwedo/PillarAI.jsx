import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

const AI_CHAIN = [
  { code: 'N3-AIGF v1.0', short: 'AI Governance Framework', step: '01' },
  { code: 'N3 AI-UAF v1.0', short: 'AI Usage Assurance', step: '02' },
  { code: 'N3 AISCA v1.0', short: 'AI Security Controls', step: '03' },
  { code: 'N3 PAISAF v1.0', short: 'Physical AI Safety', step: '04' },
  { code: 'N3 AI² SecOps v1.0', short: 'AI² SecOps', step: '05' },
]

const SERVICES = [
  {
    num: '01',
    title: 'AI Governance Strategy',
    desc: 'Enterprise AI governance programmes — AI policy, AI inventory, risk classification, responsible AI principles, board reporting and cross-function accountability frameworks.',
    link: '/what-we-do/ai/governance',
    tags: ['EU AI Act', 'ISO 42001', 'NIST AI RMF'],
  },
  {
    num: '02',
    title: 'AI Regulatory Compliance',
    desc: 'EU AI Act compliance assessment and programme delivery — high-risk AI classification, conformity obligations, technical documentation, audit evidence and notified body readiness.',
    link: '/what-we-do/ai/regulatory',
    tags: ['EU AI Act', 'ISO 42001', 'AI Audit'],
  },
  {
    num: '03',
    title: 'AI Usage Assurance',
    desc: 'Enterprise AI acceptable use governance — shadow AI detection, GenAI controls, staff policy, AI tool risk tiering and monitoring frameworks for enterprise AI deployments.',
    link: '/what-we-do/ai/usage-assurance',
    tags: ['AI-UAF', 'Shadow AI', 'GenAI Controls'],
  },
  {
    num: '04',
    title: 'AI Security Architecture',
    desc: 'Threat modelling and security architecture for AI systems — model attack surface, adversarial input controls, inference security, model access controls and AI-specific security design.',
    link: '/what-we-do/ai/security-architecture',
    tags: ['AI Threat Modelling', 'AISCA', 'Model Security'],
  },
  {
    num: '05',
    title: 'GenAI & LLM Security',
    desc: 'Security assurance for GenAI deployments — LLM prompt injection, RAG security, vector database protection, agentic AI controls, MCP security and multi-model architecture review.',
    link: '/what-we-do/ai/genai-security',
    tags: ['LLM Security', 'RAG', 'Agentic AI', 'MCP'],
  },
  {
    num: '06',
    title: 'AI Supply Chain Security',
    desc: 'AI model provenance, AI SBOM construction, MLSecOps pipeline security, model signing, third-party model risk and AI dependency management across the full model lifecycle.',
    link: '/what-we-do/ai/supply-chain',
    tags: ['AI SBOM', 'MLSecOps', 'Model Provenance'],
  },
  {
    num: '07',
    title: 'Physical AI & Safety Assurance',
    desc: 'Security assurance for AI operating in physical environments — robotics, autonomous systems, OT/ICS-adjacent AI, TEVV frameworks and safety-critical AI deployment assurance.',
    link: '/what-we-do/ai/physical-ai',
    tags: ['PAISAF', 'Robotics', 'OT/ICS', 'TEVV'],
  },
  {
    num: '08',
    title: 'AI Security Operations',
    desc: 'Continuous AI security operations — AI asset discovery, adversarial testing pipelines, model drift monitoring, AI-assisted SOC capabilities and ASOps programme delivery.',
    link: '/what-we-do/ai/secops',
    tags: ['ASOps', 'AI SecOps', 'Adversarial Testing'],
  },
  {
    num: '09',
    title: 'AI Assurance & Red Teaming',
    desc: 'AI red teaming, maturity assessment against NS-AIGF controls, TrustOps metrics and independent assurance reporting — the evidence that AI systems are secure and trustworthy.',
    link: '/what-we-do/ai/assurance',
    tags: ['AI Red Team', 'TrustOps', 'Maturity Assessment'],
  },
]

export default function PillarAI() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">What We Do · 01</div>
            <h1 className="svc-h1 reveal">AI Governance &amp; Security</h1>
            <p className="svc-lede reveal">
              Organisations deploying AI — from enterprise copilots to autonomous decision systems — face a dual challenge: governing AI responsibly under an accelerating regulatory framework, and securing AI systems against a rapidly evolving threat landscape. We deliver both, simultaneously, using five proprietary frameworks built specifically for AI assurance.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">Our Frameworks <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Trust Chain */}
      <section className="reach-strip">
        <div className="rs-inner">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--orange)' }}>
              The AI Trust Chain — Five Frameworks in Sequence
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', flexWrap: 'wrap', rowGap: '12px' }}>
            {AI_CHAIN.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="reveal" style={{ textAlign: 'center', padding: '14px 18px', background: 'rgba(255,255,255,.06)', borderRadius: '10px', minWidth: '130px' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '8.5px', fontWeight: 700, color: '#7c3aed', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '5px' }}>{f.step}</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--white)', marginBottom: '4px' }}>{f.short}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '8px', color: 'rgba(255,255,255,.45)', letterSpacing: '.06em' }}>{f.code}</div>
                </div>
                {i < AI_CHAIN.length - 1 && (
                  <div style={{ padding: '0 8px', color: 'rgba(255,255,255,.25)', fontSize: '16px', fontWeight: 300 }}>→</div>
                )}
              </div>
            ))}
          </div>
          <p className="rs-tagline reveal" style={{ marginTop: '24px' }}>Govern it. Control how it's used. Secure it. Assure physical safety. Operate it continuously.</p>
        </div>
      </section>

      {/* Problem */}
      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why AI Requires Specialist Advisory</span>
              <h2>Governance obligations and security threats are converging — faster than most AI programmes anticipated.</h2>
              <p>The EU AI Act is live. ISO 42001 is the certification standard. NIST AI RMF is the US baseline. Meanwhile, LLM prompt injection, model theft, adversarial inputs and AI supply chain compromise are active attack vectors — not hypothetical risks. Most organisations are navigating both simultaneously with general-purpose advisory support that was never designed for AI.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Regulatory acceleration', desc: 'EU AI Act enforcement begins. ISO 42001 certification is underway. NIST AI RMF is embedded in US government procurement. Organisations without structured AI governance programmes are already non-compliant.' },
                { title: 'AI-specific attack surfaces', desc: 'LLMs, RAG pipelines, agentic systems and multi-model architectures introduce attack surfaces that conventional security controls do not address. Prompt injection, model extraction and data poisoning require purpose-built security architecture.' },
                { title: 'Supply chain opacity', desc: 'Third-party foundation models, fine-tuned model weights, AI tooling and ML pipeline dependencies create supply chain risk that is invisible to standard TPRM programmes. AI SBOM and model provenance are emerging requirements.' },
                { title: 'Board-level accountability gap', desc: 'AI governance requires documented accountability, risk registers, incident response procedures and audit trails that demonstrate oversight. Most AI programmes cannot produce this evidence on demand.' },
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
            <h2>AI Governance &amp; Security — what we deliver.</h2>
            <p>From governance strategy through to continuous AI security operations — nine specialist service domains covering every dimension of AI assurance.</p>
          </div>
          <div className="svc-what-grid">
            {SERVICES.map((s, i) => (
              <Link className="svc-what-card reveal" to={s.link} key={i} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title">{s.title}</h3>
                <p className="svc-what-desc">{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '12px' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontSize: '9.5px', background: 'rgba(124,58,237,.12)', color: '#7c3aed', border: '1px solid rgba(124,58,237,.25)', borderRadius: '5px', padding: '2px 7px', fontWeight: 700, letterSpacing: '.04em' }}>{t}</span>
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
            <h2>The regulatory and technical frameworks we work to.</h2>
          </div>
          <div className="standards-grid">
            {['EU AI Act', 'ISO/IEC 42001:2023', 'NIST AI RMF', 'ISO/IEC 23894', 'OWASP LLM Top 10', 'MITRE ATLAS', 'NIST SP 800-218A', 'CRA (Cyber Resilience Act)', 'ENISA AI Threat Landscape', 'ETSI SAI', 'IEEE 7000 Series', 'SLSA Framework'].map(s => (
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
            <h2>AI Governance &amp; Security connects to</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/digital-platform-trust"><h4>Digital Platform Trust</h4><p>Secure software architecture and code trust — the platform AI runs on.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cybersecurity-compliance"><h4>Cybersecurity &amp; Compliance</h4><p>Maturity, governance and resilience — the organisational security foundation.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/how-we-do-it"><h4>How We Do It</h4><p>Five proprietary AI frameworks — the delivery engine behind this pillar.</p><span className="arr-link">Explore frameworks →</span></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>AI is being deployed. The governance and security programmes are catching up.</h2>
            <p>Speak with a practitioner who has delivered AI governance and AI security programmes — not a generalist who has read the regulations.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">Our AI Frameworks</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
