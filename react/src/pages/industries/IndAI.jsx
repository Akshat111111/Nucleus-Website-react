import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function IndAI() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Industries · AI Product Companies</div>
            <h1 className="svc-h1 reveal">AI products that enterprise buyers and regulators can trust.</h1>
            <p className="svc-lede reveal">
              AI product companies face a rapidly closing window to establish the governance, security architecture and regulatory compliance evidence that enterprise buyers and regulators now require. The EU AI Act is in force. Enterprise AI procurement teams are running detailed security and governance assessments. LLM, RAG and agentic AI products carry attack surfaces that general security assessment methodologies were not designed to evaluate.
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
              <h2>Regulation and enterprise procurement are moving faster than most AI companies expected.</h2>
              <p>AI products are being deployed into regulated environments — financial services, healthcare, government, legal — where buyers now expect EU AI Act compliance, security architecture documentation, and independent third-party validation. The companies that have this evidence close deals. The companies that do not, lose them.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'EU AI Act — high-risk AI system requirements', desc: 'EU AI Act is in force from August 2024. High-risk AI systems deployed in credit scoring, employment, education, law enforcement and critical infrastructure face mandatory conformity assessment, risk management, data governance and human oversight requirements.' },
                { title: 'Enterprise AI procurement assessments', desc: 'Fortune 500 and large enterprise buyers now run detailed AI governance and security assessments before deploying AI products. Vendors without documented risk management, data governance and bias testing frameworks fail procurement.' },
                { title: 'LLM and agentic AI attack surfaces', desc: 'Prompt injection, indirect prompt injection, jailbreaking, data extraction via LLM, supply chain risk in fine-tuning datasets, and agentic AI privilege escalation are attack vectors that general penetration testing methodologies do not cover.' },
                { title: 'AI supply chain and model governance', desc: 'Third-party model risk, open-source model provenance, training data poisoning, and model backdoor insertion represent supply chain risks specific to AI products that must be assessed and documented for enterprise buyers.' },
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
            <h2>What we bring to AI product companies.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'EU AI Act Compliance Programme', desc: 'Risk classification assessment, conformity assessment preparation for high-risk AI systems, risk management system implementation, data governance framework, transparency obligation design and technical documentation for CE marking.', link: '/services/ai-governance' },
              { num: '02', title: 'AI Security Architecture Review', desc: 'Security architecture assessment for LLM, RAG and agentic AI products — covering prompt injection defence, data isolation, retrieval pipeline security, model access controls, output filtering and API security for AI inference endpoints.', link: '/services/ai-security' },
              { num: '03', title: 'LLM & Agentic AI Red Teaming', desc: 'Adversarial testing of LLM products — prompt injection, indirect prompt injection, jailbreaking, data extraction, privilege escalation in agentic architectures, and tool-use security for AI agents with real-world integrations.', link: '/services/ai-security' },
              { num: '04', title: 'AI Governance Framework', desc: 'Internal AI governance framework design — risk appetite, model registry, use-case approval process, model monitoring, bias and fairness assessment, and the internal governance evidence that enterprise buyers and regulators require.', link: '/services/ai-governance' },
              { num: '05', title: 'Penetration Testing for AI Products', desc: 'Technical security testing of AI product infrastructure — web application, API, cloud and ML pipeline security testing — producing the independent technical validation evidence that enterprise procurement requires.', link: '/services/penetration-testing' },
              { num: '06', title: 'Enterprise Sales Security Evidence Pack', desc: 'Security and governance documentation package for enterprise sales — security questionnaire responses, EU AI Act compliance evidence, penetration test reports, data processing agreements and governance framework documentation.', link: '/ma/startup-growth' },
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
            <h2>AI governance and security standards we work to.</h2>
          </div>
          <div className="standards-grid">
            {['EU AI Act (2024/1689)', 'NIST AI RMF 1.0', 'ISO/IEC 42001 (AI Mgmt)', 'OWASP LLM Top 10', 'OWASP ML Security Top 10', 'MITRE ATLAS', 'ISO/IEC 27001:2022', 'GDPR / AI data governance', 'FCA AI Governance Guidance', 'UK AI Safety Framework'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>AI products that enterprise buyers and regulators trust — not just internal teams.</h2>
            <p>Speak with a practitioner who has assessed LLM, RAG and agentic AI security and built EU AI Act compliance programmes for AI product companies.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/ai-governance">AI Governance Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
