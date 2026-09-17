import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function AIAssurance() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">AI Governance &amp; Security · 09</div>
            <h1 className="svc-h1 reveal">AI Assurance &amp; Red Teaming</h1>
            <p className="svc-lede reveal">
              Trust in AI systems must be evidenced, not assumed. We deliver independent AI assurance reporting and specialist AI red teaming — rigorously testing your AI models, applications, and governance frameworks against adversarial threats and regulatory standards to produce verifiable proof of security and compliance.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Assurance Gap</span>
              <h2>You built it securely. Can you prove it to a regulator? Or an attacker?</h2>
              <p>Designing secure AI is only half the challenge. Proving its resilience against adversarial attacks and demonstrating compliance with frameworks like the EU AI Act requires independent validation. Traditional penetration testing does not adequately stress-test machine learning models, and standard audits fail to capture the probabilistic risks of AI.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'The need for adversarial validation', desc: 'AI models are uniquely susceptible to adversarial manipulation — inputs specifically crafted to cause the model to make a mistake or bypass its safety constraints. Only specialised AI red teaming can uncover these vulnerabilities.' },
                { title: 'Regulatory demand for independent proof', desc: 'Under the EU AI Act and ISO 42001, self-attestation is insufficient for high-risk systems. Organisations must produce independent, verifiable evidence of conformity, risk management, and robustness.' },
                { title: 'The limits of automated scanning', desc: 'While automated tools exist for traditional software vulnerabilities, assessing the semantic safety, bias, and alignment of an LLM requires structured, human-led adversarial testing methodologies.' },
                { title: 'Translating technical findings to board risk', desc: 'A successful prompt injection attack is a technical finding; the resulting data exposure is a business risk. Assurance requires translating complex AI vulnerabilities into clear, actionable reporting for leadership.' },
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
            <h2>AI Assurance &amp; Red Teaming — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'AI Red Teaming (LLMs & GenAI)', desc: 'Specialist adversarial testing against Generative AI applications. Attempting jailbreaks, prompt injection, extraction of training data, and safety filter bypasses to validate the robustness of the system.' },
              { num: '02', title: 'Adversarial Machine Learning (AML) Testing', desc: 'Testing traditional ML models (e.g., classification, regression) against evasion attacks, data poisoning, and model inversion techniques to ensure resilience in adversarial environments.' },
              { num: '03', title: 'AI Governance Maturity Assessment', desc: 'Independent assessment of your AI governance programme against the N3-AIGF framework (and by extension, the EU AI Act and ISO 42001), producing a quantified maturity score and gap analysis.' },
              { num: '04', title: 'TrustOps Metrics & Reporting', desc: 'Developing continuous TrustOps metrics that quantify the security, privacy, and fairness of your AI systems over time, providing leadership with a dashboard of AI trustworthiness.' },
              { num: '05', title: 'Pre-Deployment Assurance Certification', desc: 'Independent security and compliance certification of AI systems prior to production deployment, providing stakeholders with a formal "go/no-go" assurance report.' },
              { num: '06', title: 'Bias & Fairness Testing', desc: 'Structured evaluation of AI models to identify and quantify unintended bias or discriminatory outcomes, ensuring compliance with responsible AI principles and regulatory requirements.' },
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
            <h2>AI assurance methodologies.</h2>
          </div>
          <div className="standards-grid">
            {['MITRE ATLAS', 'OWASP Top 10 for LLMs', 'NIST AI RMF (Measure Function)', 'ISO/IEC 42001 (Auditing)', 'N3-AIGF', 'N3 AISCA'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/ai/genai-security"><h4>GenAI &amp; LLM Security</h4><p>Implementing the controls that our red teaming exercises seek to validate.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/regulatory"><h4>AI Regulatory Compliance</h4><p>Using assurance reports as technical documentation for EU AI Act compliance.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/secops"><h4>AI Security Operations</h4><p>Feeding red team findings back into AI SecOps to improve threat detection.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Trust in AI requires independent verification.</h2>
            <p>Speak with specialists who test AI systems like attackers, but report like auditors.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">Our Assessment Frameworks</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
