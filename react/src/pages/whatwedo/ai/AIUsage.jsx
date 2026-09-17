import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function AIUsage() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">AI Governance &amp; Security · 03</div>
            <h1 className="svc-h1 reveal">AI Usage Assurance</h1>
            <p className="svc-lede reveal">
              Your employees are already using AI. Without a usage assurance framework, that usage constitutes shadow IT, unquantified data exposure, and unregulated decision support. We design and implement enterprise AI acceptable use governance, GenAI controls, and shadow AI detection programmes that enable safe adoption rather than futile prohibition.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Usage Gap</span>
              <h2>Shadow AI is the new Shadow IT — but with data exposure built in.</h2>
              <p>Employees use GenAI tools to write code, draft proposals, analyse financial data, and summarise meeting notes. If an organisation does not provide a governed, secure AI environment, employees will use consumer-grade tools that use enterprise data for model training. Blanket bans fail; governed adoption succeeds.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Data exposure through prompt leakage', desc: 'When employees paste PII, intellectual property, or financial data into public LLMs, that data often becomes part of the training corpus. Once ingested, it cannot be reliably removed.' },
                { title: 'Unregulated decision support', desc: 'When AI tools are used to evaluate CVs, assess credit risk, or triage support tickets without governance, the organisation inherits the liability for the model\'s bias and hallucinations.' },
                { title: 'The illusion of prohibition', desc: 'Blocking access to ChatGPT at the firewall does not work. Employees access AI tools on personal devices or via browser extensions. You cannot govern what you refuse to acknowledge.' },
                { title: 'AI tooling sprawl', desc: 'Every SaaS application now includes an "AI Copilot" feature. Without a framework to evaluate and approve these features, enterprise data flows into opaque third-party AI systems by default.' },
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
            <h2>AI Usage Assurance — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Shadow AI Discovery & Remediation', desc: 'Deployment of CASB and network monitoring use-cases to identify unsanctioned AI tool usage across the enterprise, quantify the data exposure risk, and guide the remediation strategy.' },
              { num: '02', title: 'AI Acceptable Use Policy (AUP)', desc: 'Development of enforceable AI acceptable use policies that define permitted tools, prohibited use-cases (e.g., code generation, PII processing), and consequences for non-compliance.' },
              { num: '03', title: 'AI Tool Risk Tiering Framework', desc: 'A structured evaluation framework for assessing third-party AI tools and SaaS "Copilot" features, categorising them into approved, restricted, or prohibited tiers based on data handling and security controls.' },
              { num: '04', title: 'Secure Enclave Design', desc: 'Architecture and governance design for enterprise-grade, private AI deployments (e.g., Azure OpenAI, private LLMs) that provide employees with safe AI capabilities without data leakage.' },
              { num: '05', title: 'Data Loss Prevention (DLP) Tuning', desc: 'Configuration of DLP solutions and API gateways to monitor prompts for sensitive data, block policy violations, and provide real-time coaching to users.' },
              { num: '06', title: 'AI Literacy & Awareness Training', desc: 'Role-based training programmes that educate employees on AI hallucination risks, prompt security, bias recognition, and the organisation\'s acceptable use guidelines.' },
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
            <span className="eyebrow">Framework: N3 AI-UAF v1.0</span>
            <h2>The Nucleus AI Usage Assurance Framework.</h2>
            <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.75 }}>Safe usage governance · Policy controls · Risk assessment · Continuous monitoring</p>
          </div>
          <div className="standards-grid">
            {['ISO/IEC 23894', 'NIST AI RMF 1.0', 'OWASP AI Security & Privacy Guide', 'CIS Controls (Data Protection)', 'EU AI Act (Deployer Obligations)'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/ai/governance"><h4>AI Governance Strategy</h4><p>The overarching governance framework that mandates acceptable use policies.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/genai-security"><h4>GenAI &amp; LLM Security</h4><p>Security assurance for the enterprise GenAI deployments your staff are authorised to use.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/governance"><h4>Cybersecurity Governance</h4><p>Integrating AI acceptable use into broader enterprise security governance.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>You cannot govern AI usage by pretending it isn't happening.</h2>
            <p>Speak with a practitioner who implements practical AI usage controls that balance productivity with security and compliance.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">N3 AI-UAF Framework</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
