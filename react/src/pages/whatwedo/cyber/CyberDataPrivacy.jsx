import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function CyberDataPrivacy() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Cybersecurity &amp; Compliance · 07</div>
            <h1 className="svc-h1 reveal">Data Privacy &amp; Protection</h1>
            <p className="svc-lede reveal">
              Privacy is no longer just a legal obligation; it is a fundamental engineering requirement. We bridge the gap between legal privacy mandates (GDPR, CCPA) and technical implementation. We deliver data discovery, privacy-by-design architecture, and technical data protection controls to ensure personal data is safeguarded throughout its lifecycle.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/cybersecurity-compliance">All Cyber Services <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Privacy Gap</span>
              <h2>Legal policies do not protect data. Technical controls do.</h2>
              <p>Many organisations believe they are privacy-compliant because they have a Privacy Policy on their website and standard contractual clauses in place. However, if engineering teams are copying production databases containing PII into lower environments for testing, or if marketing is feeding customer data into public AI models, the organisation is non-compliant and highly exposed.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'The data sprawl', desc: 'You cannot protect what you cannot find. Sensitive data proliferates across cloud storage, SaaS applications, developer workstations, and shadow IT, making it impossible to enforce retention policies or fulfill DSARs.' },
                { title: 'Privacy as an afterthought', desc: 'When privacy is treated as a compliance check just before a product launches, retrofitting controls (like data anonymisation or consent management) is expensive and often degrades functionality.' },
                { title: 'The AI privacy collision', desc: 'The demand for massive datasets to train and fine-tune AI models fundamentally collides with data minimisation and purpose limitation principles, requiring new approaches to data sanitisation.' },
                { title: 'Cross-border data complexity', desc: 'Navigating data localization laws and cross-border transfer mechanisms (e.g., EU-US Data Privacy Framework) requires architectural planning regarding where data is stored and processed.' },
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
            <h2>Data Privacy &amp; Protection — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Data Discovery & Classification', desc: 'Deploying automated tools to scan structured and unstructured data repositories across the enterprise, identifying PII, PHI, and PCI data, and applying persistent classification tags.' },
              { num: '02', title: 'Privacy by Design Architecture', desc: 'Embedding privacy into the SDLC. Architecting systems to enforce data minimisation, purpose limitation, and consent management at the data model and API levels.' },
              { num: '03', title: 'Data Protection & Anonymisation', desc: 'Implementing technical controls to protect data in use and at rest. Deploying tokenisation, format-preserving encryption, and dynamic data masking to secure sensitive information.' },
              { num: '04', title: 'DPIA & RoPA Development', desc: 'Conducting Data Protection Impact Assessments (DPIAs) for high-risk processing activities and building comprehensive Records of Processing Activities (RoPA) to satisfy regulatory requirements.' },
              { num: '05', title: 'DSAR Automation', desc: 'Designing workflows and implementing technology to automate the fulfillment of Data Subject Access Requests (DSARs), ensuring rapid and accurate responses to consumer requests.' },
              { num: '06', title: 'AI Data Governance', desc: 'Establishing data governance controls specifically for AI. Implementing procedures to sanitize data before model training and ensuring RAG architectures enforce underlying data access controls.' },
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
            <span className="eyebrow">Frameworks &amp; Regulations</span>
            <h2>Privacy frameworks we implement.</h2>
          </div>
          <div className="standards-grid">
            {['GDPR & UK GDPR', 'CCPA / CPRA', 'ISO/IEC 27701 (Privacy Information Management)', 'NIST Privacy Framework', 'PbD (Privacy by Design Principles)'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Connected Cyber &amp; AI services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/cyber/compliance"><h4>Compliance Programmes</h4><p>Integrating privacy requirements into broader ISO 27001 or SOC 2 compliance efforts.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/governance"><h4>AI Governance Strategy</h4><p>Aligning data privacy controls with AI model training and deployment governance.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/secure-architecture"><h4>Secure Architecture Review</h4><p>Ensuring privacy-by-design principles are embedded into the core platform architecture.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Privacy requires engineering, not just lawyering.</h2>
            <p>Speak with privacy engineers who translate legal obligations into technical data protection controls.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/cyber/compliance">Explore Compliance</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
