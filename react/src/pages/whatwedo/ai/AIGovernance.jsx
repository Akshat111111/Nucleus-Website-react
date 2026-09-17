import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function AIGovernance() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">AI Governance &amp; Security · 01</div>
            <h1 className="svc-h1 reveal">AI Governance Strategy &amp; Responsible AI</h1>
            <p className="svc-lede reveal">
              Deploying AI without a governance programme is deploying liability. We build enterprise AI governance frameworks that satisfy EU AI Act obligations, ISO 42001 certification requirements and NIST AI RMF baseline simultaneously — using our N3-AIGF proprietary framework. From AI inventory and risk classification through to board accountability structures and responsible AI principles.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Governance Gap</span>
              <h2>AI is being deployed. AI governance programmes are not keeping pace.</h2>
              <p>The EU AI Act is in force. ISO 42001 is the certification standard regulators and procurement teams are referencing. NIST AI RMF is embedded in US federal procurement. Organisations deploying AI without a structured governance programme face regulatory non-compliance, reputational risk and — increasingly — contractual barriers to enterprise sales.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'AI inventory opacity', desc: 'Most organisations cannot enumerate every AI system in use — including shadow AI tools used without IT approval. An AI governance programme starts with complete, accurate AI inventory and risk classification.' },
                { title: 'EU AI Act high-risk obligations', desc: 'High-risk AI systems under the EU AI Act require conformity assessments, technical documentation, human oversight measures, accuracy monitoring and registration. Most organisations have not assessed which of their AI deployments qualify.' },
                { title: 'Board accountability structures', desc: 'AI governance requires documented accountability at board and executive level — an AI governance committee, defined RACI, AI risk register and incident response procedures that demonstrate effective oversight.' },
                { title: 'Multi-framework evidence duplication', desc: 'EU AI Act, ISO 42001 and NIST AI RMF overlap significantly but require different evidence formats. Without a unified framework, organisations duplicate work and still have evidence gaps.' },
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
            <h2>AI Governance Strategy — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'AI Inventory & Risk Classification', desc: 'Complete enumeration of AI systems in use — including shadow AI — risk-classified against EU AI Act categories and organisational risk appetite. The foundation of every AI governance programme.' },
              { num: '02', title: 'AI Governance Framework Design', desc: 'Bespoke AI governance framework aligned to N3-AIGF — committee structures, policy hierarchy, RACI, escalation procedures and accountability assignments across business units.' },
              { num: '03', title: 'Responsible AI Principles', desc: 'Operationalised responsible AI principles — not aspirational statements. Fairness controls, bias assessment procedures, explainability requirements and human oversight mechanisms built into AI deployment processes.' },
              { num: '04', title: 'EU AI Act Compliance Programme', desc: 'Full EU AI Act compliance programme delivery — high-risk AI classification, conformity assessment, technical documentation, quality management system alignment and registration obligation management.' },
              { num: '05', title: 'ISO 42001 Certification Readiness', desc: 'Gap assessment and programme delivery for ISO/IEC 42001:2023 AI management system certification — from initial gap analysis through to certification body readiness.' },
              { num: '06', title: 'Board AI Governance Reporting', desc: 'Board-ready AI governance reporting — AI risk register, governance maturity dashboards, incident reporting templates and board-level briefing materials that satisfy regulatory expectations for senior oversight.' },
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
            <span className="eyebrow">Framework: N3-AIGF v1.0</span>
            <h2>The Nucleus AI Governance Framework.</h2>
            <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.75 }}>60 controls · 7 domains · L1→L5 maturity scoring · Maps simultaneously to EU AI Act, ISO 42001 and NIST AI RMF</p>
          </div>
          <div className="standards-grid">
            {['EU AI Act (All Articles)', 'ISO/IEC 42001:2023', 'NIST AI RMF 1.0', 'ISO/IEC 23894', 'OECD AI Principles', 'UK AI Safety Framework', 'US Executive Order on AI', 'G7 AI Code of Conduct', 'IEEE 7000 Series', 'UNESCO AI Ethics'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/ai/regulatory"><h4>AI Regulatory Compliance</h4><p>EU AI Act conformity assessment, technical documentation and audit evidence.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/usage-assurance"><h4>AI Usage Assurance</h4><p>Enterprise AI acceptable use governance — shadow AI, GenAI controls and policy.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/assurance"><h4>AI Assurance &amp; Red Teaming</h4><p>Independent AI assurance reporting and red team exercises against AI systems.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>AI governance is not optional. It is an operational requirement.</h2>
            <p>Speak with a practitioner who has delivered AI governance programmes under EU AI Act, ISO 42001 and NIST AI RMF — not a consultant who has read the documentation.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">N3-AIGF Framework</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
