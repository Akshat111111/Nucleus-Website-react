import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function AIRegulatory() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">AI Governance &amp; Security · 02</div>
            <h1 className="svc-h1 reveal">AI Regulatory Compliance</h1>
            <p className="svc-lede reveal">
              The EU AI Act is the first comprehensive AI regulation in the world — and it applies to any organisation placing AI systems on the EU market or using them within the EU, regardless of where they are headquartered. ISO 42001 is the AI management system certification standard. We deliver structured compliance programmes across both, producing audit-ready evidence that satisfies regulatory examination and certification body requirements.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Regulatory Reality</span>
              <h2>The EU AI Act is in force. ISO 42001 certification is underway. Most organisations are not ready.</h2>
              <p>EU AI Act obligations apply to providers, deployers and importers of AI systems used within the EU. High-risk AI systems require conformity assessments, technical documentation, quality management systems and registration in the EU AI database. General-purpose AI model providers face additional transparency and capability thresholds. Most organisations have not completed the foundational AI classification step that determines which obligations apply to them.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'High-risk AI classification complexity', desc: 'The EU AI Act\'s Annex III list of high-risk AI applications is specific and context-dependent. Classification requires legal, technical and sector-specific analysis — and misclassification creates both regulatory exposure and unnecessary compliance cost.' },
                { title: 'Technical documentation obligations', desc: 'High-risk AI providers must maintain technical documentation demonstrating compliance across design, development, testing, monitoring and post-market phases. Most AI development teams have not been capturing this evidence during development.' },
                { title: 'ISO 42001 certification readiness', desc: 'ISO/IEC 42001:2023 defines requirements for an AI management system. Certification requires a documented AIMS, risk management process, AI impact assessment methodology and evidence of operational control.' },
                { title: 'NIST AI RMF alignment', desc: 'NIST AI RMF is now referenced in US federal procurement and adopted voluntarily by enterprise AI programmes. Aligning EU AI Act compliance with NIST AI RMF produces a unified evidence base for international AI governance.' },
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
            <h2>AI Regulatory Compliance — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'EU AI Act Classification Assessment', desc: 'Systematic assessment of all AI systems against EU AI Act prohibited practice lists, high-risk Annex III categories, general-purpose AI thresholds and transparency obligations — producing a compliance obligation map.' },
              { num: '02', title: 'Conformity Assessment Programme', desc: 'End-to-end conformity assessment for high-risk AI systems — technical documentation, risk management system, data governance measures, human oversight design, accuracy monitoring and logging requirements.' },
              { num: '03', title: 'Technical Documentation Development', desc: 'Building the technical documentation required for high-risk AI conformity — system description, design specifications, training data governance, testing methodology, monitoring procedures and post-market surveillance plan.' },
              { num: '04', title: 'ISO 42001 Certification Programme', desc: 'Gap assessment against ISO/IEC 42001:2023, AI management system design, AI impact assessment process, operational control procedures and certification body readiness — from gap to audit-ready.' },
              { num: '05', title: 'AI Audit Evidence Pack', desc: 'Structured audit evidence packages for regulatory examination — control evidence, testing records, incident logs, governance meeting records and monitoring data assembled in examination-ready format.' },
              { num: '06', title: 'GPAI Model Obligations', desc: 'General-purpose AI model compliance — capability threshold assessment, transparency obligation mapping, systemic risk assessment for high-capability models and EU AI Office engagement preparation.' },
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
            <span className="eyebrow">Regulations &amp; Standards</span>
            <h2>The AI regulatory landscape we navigate.</h2>
          </div>
          <div className="standards-grid">
            {['EU AI Act (Regulation 2024/1689)', 'ISO/IEC 42001:2023', 'NIST AI RMF 1.0', 'EU AI Act Delegated Acts', 'CEN-CENELEC AI Standards', 'ENISA AI Cybersecurity', 'UK AI Code of Practice', 'US AI Executive Order', 'G7 Hiroshima AI Process', 'OECD AI Policy Observatory'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/ai/governance"><h4>AI Governance Strategy</h4><p>The governance framework that operationalises regulatory compliance obligations.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/assurance"><h4>AI Assurance &amp; Red Teaming</h4><p>Independent assurance that AI systems perform as documented in conformity assessments.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/sectors/government-public-sector"><h4>Government &amp; Public Sector</h4><p>Public sector AI deployments face the most stringent EU AI Act obligations.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>The EU AI Act has enforcement teeth. ISO 42001 is now a procurement requirement.</h2>
            <p>Speak with a practitioner who has delivered AI regulatory compliance programmes — and who knows the difference between a conformity assessment and a paper exercise.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/ai/governance">AI Governance Strategy</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
