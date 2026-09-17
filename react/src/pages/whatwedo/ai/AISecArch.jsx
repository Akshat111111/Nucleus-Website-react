import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function AISecArch() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">AI Governance &amp; Security · 04</div>
            <h1 className="svc-h1 reveal">AI Security Architecture</h1>
            <p className="svc-lede reveal">
              AI systems introduce attack surfaces that traditional security architectures do not cover. Threat modelling must account for prompt injection, data poisoning, model evasion, and supply chain compromise. We design purpose-built AI security architectures using our N3-AISCA framework — ensuring AI systems are secure by design, resilient to adversarial attack, and aligned with enterprise security patterns.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Architecture Gap</span>
              <h2>Traditional security controls do not protect AI models.</h2>
              <p>A Web Application Firewall cannot stop prompt injection. Network segmentation does not prevent data poisoning. Role-based access control does not stop an LLM from hallucinating sensitive data. Securing AI requires an architecture that understands the probabilistic nature of machine learning and the specific attack vectors targeting it.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'The expanded attack surface', desc: 'AI architectures include training data pipelines, feature stores, model registries, inference APIs, and prompt orchestration layers. Each represents a new attack surface requiring specific security controls.' },
                { title: 'Adversarial machine learning', desc: 'Threat actors use adversarial techniques — evasion attacks, model inversion, data poisoning, and prompt injection — to manipulate AI behaviour. Traditional security tools are blind to these attacks.' },
                { title: 'Data gravity and privacy', desc: 'AI models require massive datasets. Architectural decisions regarding where models are trained, where inference occurs, and how data is tokenized fundamentally dictate the privacy and compliance posture of the system.' },
                { title: 'Integration vulnerabilities', desc: 'When AI systems are integrated with enterprise applications (e.g., an LLM with access to a CRM via a plugin), the AI becomes a vector for privilege escalation and unauthorized data access.' },
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
            <h2>AI Security Architecture — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'AI Threat Modelling', desc: 'Structured threat modelling using MITRE ATLAS and OWASP methodologies to identify AI-specific vulnerabilities across the system lifecycle — from data ingestion to inference.' },
              { num: '02', title: 'Secure AI Architecture Design', desc: 'Design of robust AI architectures aligned to N3-AISCA. Defining security boundaries, data flow controls, model access management, and integration patterns for enterprise deployment.' },
              { num: '03', title: 'Inference Security Controls', desc: 'Implementation of controls to secure model inference — input validation (prompt filtering), output sanitisation, rate limiting, and anomaly detection to identify adversarial queries.' },
              { num: '04', title: 'Model Protection & Access Control', desc: 'Architecture for protecting intellectual property (model weights) and controlling access to inference APIs. Strategies for secure deployment in edge, cloud, and on-premises environments.' },
              { num: '05', title: 'Training Data Security', desc: 'Design of secure data pipelines for model training and fine-tuning. Implementing data anonymisation, access controls, and integrity checks to prevent data poisoning and privacy violations.' },
              { num: '06', title: 'Zero Trust AI Integration', desc: 'Architecting secure integrations between AI systems and enterprise applications. Implementing strict least-privilege access for AI agents and plugins to prevent privilege escalation.' },
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
            <span className="eyebrow">Framework: N3 AISCA v1.0</span>
            <h2>The Nucleus AI Security Controls Architecture.</h2>
            <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.75 }}>108 controls · 12 domains · Model Security · Prompt Architecture · Integration Controls</p>
          </div>
          <div className="standards-grid">
            {['MITRE ATLAS', 'OWASP Top 10 for LLMs', 'OWASP Machine Learning Security Top 10', 'NIST SP 800-218A', 'ENISA Securing Machine Learning', 'Google SAIF (Secure AI Framework)'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/ai/genai-security"><h4>GenAI &amp; LLM Security</h4><p>Applying security architecture specifically to Generative AI and LLM deployments.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/supply-chain"><h4>AI Supply Chain Security</h4><p>Securing the ML pipeline and third-party models that feed into the architecture.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/secure-architecture"><h4>Secure Software Architecture</h4><p>Integrating AI security architecture into broader enterprise software design.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Secure AI starts at the design phase, not in production.</h2>
            <p>Speak with an architect who understands how to secure probabilistic systems and defend against adversarial machine learning.</p>
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
