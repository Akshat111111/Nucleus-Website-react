import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function SvcAISecurity() {
  useReveal()
  return (
    <div id="view-svc">

      {/* Hero */}
      <section className="svc-hero svc-hero--ai">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">AI Security, LLM, RAG &amp; Agentic AI</div>
            <h1 className="svc-h1 reveal">Secure AI from model to runtime — before attackers find the gaps you can't see.</h1>
            <p className="svc-lede reveal">
              AI has created an attack surface that conventional security cannot protect. Prompt injection, training data poisoning, model theft, agentic AI excessive autonomy and RAG authorisation failures are invisible to traditional SAST, WAF and penetration testing. Our AI security assessments use a structured, evidence-based control methodology covering models, prompts, RAG, agents, tools, supply chains, runtime environments and monitoring.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/ai-governance">See AI Governance <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Attack Surface */}
      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The New AI Attack Surface</span>
              <h2>AI threats that existing security tools cannot detect.</h2>
              <p>Traditional SAST tests code — not model behaviour, prompt manipulation or RAG authorisation. WAF filters known attack patterns — not LLM-specific attacks like indirect prompt injection. A penetration test of the model today is not valid for the fine-tuned model deployed tomorrow.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Prompt Injection & Jailbreaks', desc: 'Malicious inputs override model behaviour, exfiltrate data, or trigger unsafe tool calls — invisible to traditional WAF and SAST tools.' },
                { title: 'Training Data Poisoning', desc: 'Adversarially crafted training data corrupts model behaviour at inference time — weeks or months after the attack was inserted.' },
                { title: 'Model Theft & Inversion', desc: 'Attackers reconstruct model weights or extract training data through repeated API queries — IP and privacy violation simultaneously.' },
                { title: 'Agentic AI Excessive Autonomy', desc: 'Autonomous agents with over-permissioned tool access create lateral movement paths that no network segmentation controls.' },
                { title: 'RAG Store Authorisation Failures', desc: 'Vector database authorisation failures allow cross-tenant data leakage that bypasses application-layer security controls.' },
                { title: 'AI Supply Chain Compromise', desc: 'Foundation models from third-party providers carry inherited risks invisible to organisations that treat them as trusted black boxes.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Attack Domains */}
      <section className="svc-domains section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow" style={{ color: '#7c9eff' }}>12 AI Security Domains</span>
            <h2>Full AI attack surface coverage.</h2>
            <p>Our AI security assessments cover every layer from governance to model to agent to runtime — with evidence-graded controls, maturity scoring and a prioritised remediation roadmap.</p>
          </div>
          <div className="domain-grid">
            {[
              { id: 'D1', label: 'AI Security Governance' },
              { id: 'D2', label: 'Asset Inventory & Classification' },
              { id: 'D3', label: 'Threat Modelling & Secure Design' },
              { id: 'D4', label: 'Data, Privacy & Training-Set Security' },
              { id: 'D5', label: 'Model, Artifact & IP Security' },
              { id: 'D6', label: 'LLM, Prompt, RAG & GenAI Security' },
              { id: 'D7', label: 'Agentic AI, Tool & Autonomy Security' },
              { id: 'D8', label: 'MLOps, MLSecOps & AI Supply Chain' },
              { id: 'D9', label: 'Runtime, Cloud, API & Platform Security' },
              { id: 'D10', label: 'AI Security Monitoring & Detection' },
              { id: 'D11', label: 'AI Assurance, Red Teaming & Validation' },
              { id: 'D12', label: 'AI Incident Response & Resilience' },
            ].map(d => (
              <div className="domain-card reveal" key={d.id}>
                <span className="domain-id">{d.id}</span>
                <span className="domain-label">{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">What We Do</span>
            <h2>AI Security Services</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'AI Security Architecture Assessment', desc: 'Structured assessment of AI security controls across all 12 domains — from governance through to runtime. Maturity scored by domain with a prioritised remediation roadmap and board-ready evidence report.' },
              { num: '02', title: 'LLM &amp; GenAI Security', desc: 'Prompt injection prevention assessment, system prompt confidentiality controls, RAG retrieval authorisation testing, output filtering and validation, indirect injection detection and LLM-specific threat modelling.' },
              { num: '03', title: 'Agentic AI &amp; Tool Security', desc: 'Agent permission scoping, tool call validation, autonomy level governance, MCP server security controls, agent memory boundary controls and agentic workflow threat modelling.' },
              { num: '04', title: 'AI Red Teaming &amp; Adversarial Testing', desc: 'Automated adversarial testing, LLM red teaming using industry tools, MITRE ATLAS TTP coverage, independent validation programme design and continuous assurance cadence establishment.' },
              { num: '05', title: 'AI Security Operations', desc: 'Continuous AI security operations implementation — toolchain-native integration into existing DevSecOps environments, AI-specific SIEM detections, adversarial input monitoring, model drift alerting and audit log integrity controls.' },
              { num: '06', title: 'AI Incident Preparedness', desc: 'Structured AI incident response playbooks covering model compromise, prompt injection, data poisoning, agentic AI misbehaviour and AI supply chain compromise — tested through tabletop exercises.' },
            ].map((s, i) => (
              <div className="svc-what-card reveal" key={i}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="svc-what-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Priority Domains */}
      <section className="svc-scope section">
        <div className="wrap svc-scope-grid">
          <div className="svc-scope-col reveal">
            <h3>Scope</h3>
            <ul className="svc-list">
              <li>AI asset inventory and attack surface mapping</li>
              <li>Threat model per AI use case and trust boundary mapping</li>
              <li>Prompt injection and jailbreak assessment</li>
              <li>RAG store authorisation and retrieval security</li>
              <li>Agentic AI permission and tool call validation</li>
              <li>MLOps pipeline and AI supply chain security</li>
              <li>AI runtime monitoring and detection capability review</li>
              <li>Red teaming and adversarial testing programme</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>What You Receive</h3>
            <ul className="svc-list">
              <li>AI security assessment report with maturity scoring by domain</li>
              <li>Prioritised findings with severity ratings and remediation guidance</li>
              <li>Board and executive summary report</li>
              <li>Red team findings and adversarial test evidence</li>
              <li>AI security roadmap (90-day and 12-month)</li>
              <li>Evidence register for regulatory submission</li>
              <li>Toolchain integration recommendations</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>AI attack surface understood and controlled across all 12 domains</li>
              <li>Prompt injection and agentic AI risks materially reduced</li>
              <li>EU AI Act technical security obligations evidenced</li>
              <li>Regulatory evidence trail for AI security posture</li>
              <li>SOC capability extended to cover AI-specific threats</li>
              <li>AI red teaming and continuous assurance embedded</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Triggers */}
      <section className="svc-triggers section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">When You Need This</span>
            <h2>Buying triggers</h2>
          </div>
          <div className="triggers-grid">
            {[
              'LLMs or AI agents deployed in production without security assessment',
              'Agentic AI workflows with tool access and automated decision-making in scope',
              'RAG-based AI applications handling sensitive or regulated data',
              'Board or CISO requires AI security posture evidence for regulators or investors',
              'EU AI Act technical security documentation required for high-risk AI',
              'Existing pen testing and SAST not covering AI-specific attack vectors',
              'AI red teaming programme required before product launch or enterprise sale',
              'AI incident response capability needed for model compromise or data poisoning scenarios',
            ].map((t, i) => (
              <div className="trigger-item reveal" key={i}>
                <span className="trigger-dot">▸</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Relevant Standards</span>
            <h2>Aligned to AI security requirements.</h2>
          </div>
          <div className="standards-grid">
            {['EU AI Act (2024/1689)', 'NIST AI RMF v1.0', 'MITRE ATLAS', 'OWASP LLM Top 10', 'OWASP Agentic AI Top 10', 'ISO/IEC 42001', 'ISO/IEC 27001', 'NIST SP 800-218A', 'CIS AI Controls', 'ENISA AI Threat Landscape'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Often engaged together</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/services/ai-governance">
              <h4>AI Governance &amp; Regulatory Readiness</h4>
              <p>Board-level AI governance and EU AI Act compliance alongside technical security.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/penetration-testing">
              <h4>Penetration Testing &amp; Technical Validation</h4>
              <p>Broader technical assurance including AI-specific attack surface testing.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/secure-software">
              <h4>Secure Software &amp; DevSecOps</h4>
              <p>DevSecOps toolchain integration including AI model security in CI/CD pipelines.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <span className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(255,255,255,.5)' }}>AI security assessment</span>
            <h2>What is your AI attack surface — and who is testing it?</h2>
            <p>Speak with a senior Nucleus Systems AI security practitioner about your LLM, RAG and agentic AI environment and where the gaps are.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/ai-governance">Explore AI Governance</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
