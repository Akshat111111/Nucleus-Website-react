import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function AISecOps() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">AI Governance &amp; Security · 08</div>
            <h1 className="svc-h1 reveal">AI Security Operations (AI SecOps)</h1>
            <p className="svc-lede reveal">
              Security operations must adapt to defend AI systems and leverage AI for defence. We deliver bidirectional AI SecOps using our N3 AI² SecOps framework: establishing continuous monitoring and incident response for your AI assets, while safely integrating AI-assisted capabilities into your SOC to accelerate threat detection and response.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Operations Gap</span>
              <h2>Your SOC cannot see AI attacks. And it's not using AI effectively to defend.</h2>
              <p>Traditional SIEMs and SOC playbooks are blind to adversarial machine learning attacks like prompt injection, model evasion, and data poisoning. Simultaneously, security teams are hesitant to deploy AI-assisted SOC tools due to data privacy concerns and hallucination risks. The result is a dual vulnerability: undefended AI systems and under-equipped defenders.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Lack of AI telemetry', desc: 'Standard endpoint and network logs do not capture the context required to detect AI-specific attacks. You cannot detect a sophisticated prompt injection attack using traditional WAF logs.' },
                { title: 'Model drift and degradation', desc: 'AI models degrade over time as real-world data drifts from training data. Security operations must monitor for operational degradation that could indicate data poisoning or systemic failure.' },
                { title: 'AI incident response immaturity', desc: 'When an AI system is compromised, standard IR playbooks fail. Responding to an AI incident requires specific procedures for model isolation, prompt rollback, and data contamination assessment.' },
                { title: 'Unsafe AI SOC integration', desc: 'Integrating LLMs into the SOC for log analysis or threat intelligence without proper safeguards exposes sensitive security data to third-party models and introduces the risk of AI hallucinations leading to false positives.' },
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
            <h2>AI Security Operations — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'AI Asset Discovery & Telemetry', desc: 'Implementing continuous discovery of AI assets and configuring specific telemetry (e.g., prompt logging, inference monitoring) required to detect adversarial attacks against AI systems.' },
              { num: '02', title: 'AI Threat Detection Engineering', desc: 'Developing SIEM/SOAR use cases and detection rules specifically designed to identify prompt injection, data poisoning attempts, model evasion, and anomalous AI usage.' },
              { num: '03', title: 'Continuous Adversarial Testing', desc: 'Establishing automated, continuous adversarial testing pipelines that constantly probe AI deployments for vulnerabilities and regression, feeding results back into defensive controls.' },
              { num: '04', title: 'AI Incident Response Playbooks', desc: 'Developing specialised IR playbooks for AI compromises — detailing procedures for isolating models, investigating prompt attacks, assessing data contamination, and executing model recovery.' },
              { num: '05', title: 'Secure AI-Assisted SOC Design', desc: 'Architecting secure deployments of AI within the SOC — evaluating enterprise Copilots, designing private LLM deployments for log analysis, and implementing safeguards against hallucination-driven alerts.' },
              { num: '06', title: 'ASOps Programme Delivery', desc: 'Full implementation of the N3 AI² SecOps framework, maturing your organisation from ad-hoc AI monitoring to a certified ASOps capability.' },
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
            <span className="eyebrow">Framework: N3 AI² SecOps v1.0</span>
            <h2>The Nucleus AI² Security Operations Framework.</h2>
            <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.75 }}>88 controls · 8 domains · Bidirectional AI SecOps · ASOps-1→4 maturity certification</p>
          </div>
          <div className="standards-grid">
            {['MITRE ATLAS', 'NIST SP 800-61 (IR applied to AI)', 'OWASP AI Security', 'N3 AI² SecOps', 'AI Incident Sharing (AIID)'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Connected AI &amp; Cyber services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/cyber/managed-security"><h4>Managed Security &amp; MDR</h4><p>Integrating AI telemetry into our 24/7 managed detection and response services.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/resilience"><h4>Operational Resilience</h4><p>Extending broader incident response planning to cover AI-specific compromises.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/assurance"><h4>AI Assurance &amp; Red Teaming</h4><p>Validating the effectiveness of your AI SecOps detection capabilities.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Defend your AI. Defend with AI.</h2>
            <p>Speak with specialists who build bidirectional AI security operations capabilities that actually detect adversarial attacks.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">N3 AI² SecOps Framework</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
