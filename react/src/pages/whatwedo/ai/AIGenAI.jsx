import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function AIGenAI() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">AI Governance &amp; Security · 05</div>
            <h1 className="svc-h1 reveal">GenAI &amp; LLM Security</h1>
            <p className="svc-lede reveal">
              Large Language Models and Generative AI introduce fundamentally new security paradigms. Inputs are executable. Outputs are unpredictable. Architectures like RAG (Retrieval-Augmented Generation) and Agentic workflows blur the lines between data access, reasoning, and action. We deliver security assurance specifically designed for GenAI deployments — addressing prompt injection, data leakage, insecure output handling, and agent privilege escalation.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/ai-governance-security">All AI Services <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The GenAI Security Challenge</span>
              <h2>When language is code, traditional input validation fails.</h2>
              <p>GenAI systems process natural language instructions. This means users (or attackers) can use language to bypass instructions, extract underlying training data, or force the model to execute unauthorised commands. Standard security controls are insufficient when the boundary between data and executable instruction is entirely semantic.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Prompt injection & jailbreaking', desc: 'Attackers craft inputs that manipulate the LLM into ignoring its system prompt and executing malicious instructions. This can lead to data exfiltration, unauthorised actions, or reputational damage.' },
                { title: 'RAG architecture vulnerabilities', desc: 'Retrieval-Augmented Generation connects LLMs to enterprise data stores. If not secured correctly, an LLM can bypass access controls, exposing sensitive data to unauthorised users via inference.' },
                { title: 'Agentic AI privilege escalation', desc: 'AI Agents are granted autonomy to interact with APIs and execute tasks. An exploited agent (e.g., via indirect prompt injection) can be hijacked to perform actions using its granted privileges.' },
                { title: 'Model inversion and data extraction', desc: 'Techniques designed to extract sensitive data memorised by the model during training or fine-tuning, posing significant privacy and confidentiality risks.' },
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
            <span className="eyebrow">What We Deliver</span>
            <h2>GenAI &amp; LLM Security — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'GenAI Security Architecture Review', desc: 'Assessment of GenAI architectures (standalone LLMs, RAG, multi-agent systems) against the OWASP Top 10 for LLMs. Identification of architectural flaws and control design recommendations.' },
              { num: '02', title: 'RAG Security & Data Governance', desc: 'Securing Retrieval-Augmented Generation pipelines. Implementing vector database security, enforcing row-level access controls during retrieval, and ensuring semantic search does not bypass IAM.' },
              { num: '03', title: 'Prompt Defence Engineering', desc: 'Designing and implementing prompt security controls — system prompt hardening, input/output filtering, semantic guardrails, and adversarial query detection to mitigate injection attacks.' },
              { num: '04', title: 'Agentic AI Security Controls', desc: 'Security design for autonomous AI agents. Implementing least-privilege API access, human-in-the-loop approvals for critical actions, and containment strategies to prevent lateral movement.' },
              { num: '05', title: 'LLM Penetration Testing', desc: 'Specialist red teaming of LLM applications. Attempting jailbreaks, prompt injection, data extraction, and indirect prompt injection (e.g., via poisoned web content) to validate controls.' },
              { num: '06', title: 'Model Control Plane Protocol (MCP) Security', desc: 'Security assessment of MCP implementations and agent communication protocols, ensuring secure context sharing and tool execution across multi-model deployments.' },
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

      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Frameworks &amp; Standards</span>
            <h2>GenAI security methodologies.</h2>
          </div>
          <div className="standards-grid">
            {['OWASP Top 10 for LLMs', 'MITRE ATLAS', 'NIST SP 800-218A (GenAI Profile)', 'N3 AISCA Framework', 'Cloud Security Alliance GenAI Guidelines'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Connected AI services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/ai/security-architecture"><h4>AI Security Architecture</h4><p>The broader architectural framework that encompasses GenAI and LLM deployments.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/assurance"><h4>AI Assurance &amp; Red Teaming</h4><p>Executing adversarial tests against GenAI applications to validate security controls.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/usage-assurance"><h4>AI Usage Assurance</h4><p>Governing how employees interact with enterprise GenAI tools.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Building with LLMs? You need security designed for semantic threats.</h2>
            <p>Speak with specialists who test, break, and secure GenAI applications — from RAG pipelines to autonomous agents.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">N3 AISCA Framework</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
