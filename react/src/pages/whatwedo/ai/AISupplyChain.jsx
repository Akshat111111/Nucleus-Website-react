import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function AISupplyChain() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">AI Governance &amp; Security · 06</div>
            <h1 className="svc-h1 reveal">AI Supply Chain Security</h1>
            <p className="svc-lede reveal">
              The AI supply chain is opaque. Organisations are deploying foundation models, fine-tuned weights, and AI tooling without understanding their provenance or security posture. We bring visibility and control to the AI supply chain — implementing MLSecOps, AI SBOMs, model signing, and third-party risk management to ensure the AI components you consume are as secure as the code you write.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Supply Chain Gap</span>
              <h2>You know what is in your software. Do you know what is in your AI?</h2>
              <p>Software supply chain security is mature. AI supply chain security is not. Foundation models are trained on undocumented datasets, fine-tuned by third parties, and distributed via repositories (like Hugging Face) that lack enterprise-grade provenance controls. When you integrate an AI model, you inherit its entire training history, biases, and vulnerabilities.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Model provenance and tampering', desc: 'Pre-trained models can be maliciously modified (e.g., poisoned weights, backdoors) before they are uploaded to public repositories. Without cryptographic verification, you cannot guarantee the integrity of the model.' },
                { title: 'Training data opacity', desc: 'Understanding what data a foundation model was trained on is critical for compliance (e.g., copyright infringement, PII exposure). Lack of transparency creates legal and regulatory risk.' },
                { title: 'MLSecOps immaturity', desc: 'Traditional DevSecOps pipelines do not secure the ML lifecycle (data collection, preprocessing, training, evaluation, deployment). MLSecOps requires specific tooling and processes.' },
                { title: 'Third-party API reliance', desc: 'Using third-party AI APIs (like OpenAI or Anthropic) introduces data privacy and continuity risks. Understanding the provider\'s data retention and security controls is essential.' },
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
            <h2>AI Supply Chain Security — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'AI SBOM Construction', desc: 'Development of AI Software Bill of Materials (AI SBOMs) that detail model provenance, training datasets, hyperparameters, and dependencies — providing transparency for compliance and risk management.' },
              { num: '02', title: 'Model Integrity & Signing', desc: 'Implementation of cryptographic model signing and verification processes to ensure that model weights have not been tampered with during distribution or deployment.' },
              { num: '03', title: 'MLSecOps Pipeline Security', desc: 'Securing the machine learning lifecycle. Integrating security controls into MLOps pipelines — securing data stores, managing model registries, and automating security testing for AI artifacts.' },
              { num: '04', title: 'Third-Party AI Risk Assessment', desc: 'Specialist assessment of third-party AI providers (APIs and foundation models). Evaluating data privacy controls, model training practices, and security posture against enterprise requirements.' },
              { num: '05', title: 'Open-Source AI Governance', desc: 'Establishing policies and technical controls for the safe consumption of open-source models from platforms like Hugging Face, including automated scanning for known vulnerabilities in model formats.' },
              { num: '06', title: 'Dependency Vulnerability Management', desc: 'Extending traditional SCA (Software Composition Analysis) to cover AI-specific libraries (PyTorch, TensorFlow, Transformers) and managing vulnerabilities in the AI software stack.' },
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
            <h2>AI supply chain methodologies.</h2>
          </div>
          <div className="standards-grid">
            {['SLSA for ML', 'CycloneDX (AI SBOM Profile)', 'SPDX', 'NIST SP 800-218A', 'OWASP Top 10 for LLMs (Supply Chain)', 'N3 AISCA Framework'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/platform/supply-chain"><h4>Software Supply Chain</h4><p>Extending standard supply chain security practices to encompass AI artifacts.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/security-architecture"><h4>AI Security Architecture</h4><p>Integrating secure supply chain practices into the broader AI architecture.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/regulatory"><h4>AI Regulatory Compliance</h4><p>Using AI SBOMs to satisfy transparency requirements under the EU AI Act.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>You cannot secure an AI system if you don't know where it came from.</h2>
            <p>Speak with specialists who secure ML pipelines and build verifiable trust into the AI supply chain.</p>
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
