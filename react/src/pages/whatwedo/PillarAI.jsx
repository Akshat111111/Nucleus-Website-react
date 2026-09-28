import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import { useState } from 'react'
import heroAI from '../../assets/hero_ai.jpg'

const AI_CHAIN = [
  { code: 'NS-AIGF v1.0', short: 'AI Governance Framework', step: '01' },
  { code: 'NS AI-UAF v1.0', short: 'AI Usage Assurance', step: '02' },
  { code: 'NS AISCA v1.0', short: 'AI Security Controls', step: '03' },
  { code: 'NS PAISAF v1.0', short: 'Physical AI Safety', step: '04' },
  { code: 'NS AI² SecOps v1.0', short: 'AI² SecOps', step: '05' },
]

const SERVICES = [
  {
    title: 'AI Governance Strategy',
    desc: 'Enterprise AI governance programmes — AI policy, AI inventory, risk classification, responsible AI principles, board reporting and cross-function accountability frameworks.',
    link: '/what-we-do/ai/governance',
  },
  {
    title: 'AI Regulatory Compliance',
    desc: 'EU AI Act compliance assessment and programme delivery — high-risk AI classification, conformity obligations, technical documentation, audit evidence and notified body readiness.',
    link: '/what-we-do/ai/regulatory',
  },
  {
    title: 'AI Usage Assurance',
    desc: 'Enterprise AI acceptable use governance — shadow AI detection, GenAI controls, staff policy, AI tool risk tiering and monitoring frameworks for enterprise AI deployments.',
    link: '/what-we-do/ai/usage-assurance',
  },
  {
    title: 'AI Security Architecture',
    desc: 'Threat modelling and security architecture for AI systems — model attack surface, adversarial input controls, inference security, model access controls and AI-specific security design.',
    link: '/what-we-do/ai/security-architecture',
  },
  {
    title: 'GenAI & LLM Security',
    desc: 'Security assurance for GenAI deployments — LLM prompt injection, RAG security, vector database protection, agentic AI controls, MCP security and multi-model architecture review.',
    link: '/what-we-do/ai/genai-security',
  },
  {
    title: 'AI Supply Chain Security',
    desc: 'AI model provenance, AI SBOM construction, MLSecOps pipeline security, model signing, third-party model risk and AI dependency management across the full model lifecycle.',
    link: '/what-we-do/ai/supply-chain',
  },
  {
    title: 'Physical AI & Safety Assurance',
    desc: 'Security assurance for AI operating in physical environments — robotics, autonomous systems, OT/ICS-adjacent AI, TEVV frameworks and safety-critical AI deployment assurance.',
    link: '/what-we-do/ai/physical-ai',
  },
  {
    title: 'AI Security Operations',
    desc: 'Continuous AI security operations — AI asset discovery, adversarial testing pipelines, model drift monitoring, AI-assisted SOC capabilities and ASOps programme delivery.',
    link: '/what-we-do/ai/secops',
  },
  {
    title: 'AI Assurance & Red Teaming',
    desc: 'AI red teaming, maturity assessment against NS-AIGF controls, TrustOps metrics and independent assurance reporting — the evidence that AI systems are secure and trustworthy.',
    link: '/what-we-do/ai/assurance',
  },
]

const PROBLEMS = [
  {
    title: 'Regulatory acceleration',
    desc: 'EU AI Act enforcement begins. ISO 42001 certification is underway. NIST AI RMF is embedded in US government procurement. Organisations without structured AI governance programmes are already non-compliant.',
  },
  {
    title: 'AI-specific attack surfaces',
    desc: 'LLMs, RAG pipelines, agentic systems and multi-model architectures introduce attack surfaces that conventional security controls do not address. Prompt injection, model extraction and data poisoning require purpose-built security architecture.',
  },
  {
    title: 'Supply chain opacity',
    desc: 'Third-party foundation models, fine-tuned model weights, AI tooling and ML pipeline dependencies create supply chain risk that is invisible to standard TPRM programmes. AI SBOM and model provenance are emerging requirements.',
  },
  {
    title: 'Board-level accountability gap',
    desc: 'AI governance requires documented accountability, risk registers, incident response procedures and audit trails that demonstrate oversight. Most AI programmes cannot produce this evidence on demand.',
  },
]

const FAQS = [
  {
    q: 'What is the EU AI Act and who does it affect?',
    a: 'The EU AI Act is the world\'s first comprehensive legal framework for AI. It applies to any organisation deploying AI systems within the EU, classifying systems by risk level (unacceptable, high, limited, minimal). High-risk AI systems face conformity assessments, technical documentation requirements and notified body audits. Enforcement began in August 2024 for the highest-risk categories.',
  },
  {
    q: 'What is AI red teaming?',
    a: 'AI red teaming is adversarial testing of AI systems — systematically attempting to elicit harmful, unsafe or unintended outputs through prompt injection, jailbreaking, adversarial inputs, and exploitation of model-specific vulnerabilities. Our AI red teaming practice uses the MITRE ATLAS framework and our proprietary NS-AIGF assurance controls.',
  },
  {
    q: 'What is an AI SBOM and why does it matter?',
    a: 'An AI Software Bill of Materials (AI SBOM) is a structured inventory of all components in an AI system — foundation models, training datasets, fine-tuning pipelines, inference frameworks and third-party dependencies. It is the foundational document for AI supply chain security, regulatory compliance and incident response.',
  },
  {
    q: 'How do you approach AI governance for non-technical boards?',
    a: 'We translate AI risk into financial and strategic terms that boards can act on — quantified risk exposure, investment-grade governance reporting, clear accountability frameworks and audit-ready documentation. Our NS-AIGF framework is specifically designed to bridge the gap between technical AI risk and board-level oversight.',
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

export default function PillarAI() {
  useReveal()
  return (
    <div className="wm-page">

      {/* ── Hero ── */}
      <section className="wm-hero">
        <div className="wrap">
          <div className="wm-hero-inner">
            <div>
              <span className="wm-eyebrow reveal">Services · 01</span>
              <h1 className="wm-h1 reveal">AI Governance &amp; <mark>Security</mark></h1>
              <p className="wm-lede reveal">
                Organisations deploying AI — from enterprise copilots to autonomous decision systems — face a dual challenge: governing AI responsibly under an accelerating regulatory framework, and securing AI systems against a rapidly evolving threat landscape. We deliver both, using five proprietary frameworks built specifically for AI assurance.
              </p>
              <div className="reveal" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link className="wm-pill-btn" to="/contact">Book a Briefing</Link>
                <Link className="wm-pill-btn wm-pill-btn-outline" to="/impact">Our AI Frameworks</Link>
              </div>
            </div>
            <div className="wm-hero-img-box reveal">
              <img src="/images/ai_hero.jpg" alt="AI Governance and Security" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="wm-stats">
        <div className="wm-stat reveal">
          <div className="wm-stat-num">5</div>
          <div className="wm-stat-label">Proprietary AI Frameworks</div>
        </div>
        <div className="wm-stat reveal">
          <div className="wm-stat-num">9</div>
          <div className="wm-stat-label">Specialist Service Domains</div>
        </div>
        <div className="wm-stat reveal">
          <div className="wm-stat-num">EU AI Act</div>
          <div className="wm-stat-label">Compliance Ready</div>
        </div>
      </div>

      {/* ── Framework Chain ── */}
      <section className="wm-section-alt">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '48px' }} className="reveal">
            <span className="wm-eyebrow" style={{ color: 'var(--wm-pink)' }}>The AI Trust Chain — Five Frameworks in Sequence</span>
            <h2 className="wm-h2" style={{ marginBottom: '8px' }}>Govern it. Secure it. <mark>Assure it continuously.</mark></h2>
          </div>
          <div className="wm-chain">
            {AI_CHAIN.map((f, i) => (
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
              <span className="wm-eyebrow">Why AI Requires Specialist Advisory</span>
              <h2 className="wm-h2">Governance obligations and security threats are converging — <mark>faster than anticipated.</mark></h2>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#555', marginBottom: '28px' }}>
                The EU AI Act is live. ISO 42001 is the certification standard. NIST AI RMF is the US baseline. Meanwhile, LLM prompt injection, model theft, adversarial inputs and AI supply chain compromise are active attack vectors — not hypothetical risks. Most organisations are navigating both simultaneously with general-purpose advisory support that was never designed for AI.
              </p>
              <ul className="wm-problem-list">
                {PROBLEMS.map((p, i) => (
                  <li key={i}><strong>{p.title}</strong>{p.desc}</li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <div className="wm-zz-placeholder" style={{ overflow: 'hidden' }}>
                <img src="/images/ai_hero.jpg" alt="AI abstract" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              <h2>How We Can Help with AI Governance &amp; Security</h2>
              <p>Nine specialist service domains covering every dimension of AI assurance — from governance strategy through to continuous AI security operations.</p>
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
              <img src="/images/ai_hero.jpg" alt="AI Frameworks" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="wm-result-content">
              <div className="wm-result-eyebrow">Frameworks &amp; Standards</div>
              <h3 className="wm-result-h3">The regulatory and technical frameworks we work to.</h3>
              <p className="wm-result-p">
                {['EU AI Act', 'ISO/IEC 42001:2023', 'NIST AI RMF', 'ISO/IEC 23894', 'OWASP LLM Top 10', 'MITRE ATLAS', 'NIST SP 800-218A', 'Cyber Resilience Act', 'ENISA AI Threat Landscape', 'ETSI SAI', 'IEEE 7000 Series', 'SLSA Framework'].join(' · ')}
              </p>
              <Link to="/impact" className="wm-pill-btn">View Our AI Frameworks</Link>
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
            <h2 className="wm-h2">AI Governance &amp; Security <mark>connects to</mark></h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', margin: '32px 0 56px' }}>
              <Link to="/what-we-do/digital-platform-trust" className="wm-pill-btn wm-pill-btn-outline">Digital Platform Trust &amp; Assurance</Link>
              <Link to="/what-we-do/cybersecurity-compliance" className="wm-pill-btn wm-pill-btn-outline">Cybersecurity &amp; Compliance</Link>
            </div>
            <h2 className="wm-h2" style={{ fontSize: '26px' }}>AI is being deployed. The governance and security programmes are catching up.</h2>
            <p style={{ margin: '16px auto 36px', maxWidth: '600px', color: '#555', fontSize: '16px' }}>
              Speak with a practitioner who has delivered AI governance and AI security programmes — not a generalist who has read the regulations.
            </p>
            <Link className="wm-pill-btn" to="/contact">Book a Briefing</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
