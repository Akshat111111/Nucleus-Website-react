import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function CyberMaturity() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Cybersecurity &amp; Compliance · 01</div>
            <h1 className="svc-h1 reveal">Cybersecurity Maturity Assessment</h1>
            <p className="svc-lede reveal">
              Security cannot be managed if it cannot be measured. We deliver structured, evidence-based cybersecurity maturity assessments using the Nucleus Cybersecurity Maturity Management Framework (N3-CMMF). We evaluate 188 controls across 6 domains, producing quantified maturity scores, financial gap analysis, and board-ready reporting that translates technical risk into business context.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Measurement Gap</span>
              <h2>"Are we secure?" is the wrong question. "How mature are we?" is the right one.</h2>
              <p>When boards ask about cybersecurity, they usually receive technical metrics — numbers of attacks blocked, vulnerabilities patched, or phishing emails caught. These metrics do not indicate whether the organisation is secure. They only indicate that the security tools are turned on. Assessing true security posture requires measuring the maturity of the underlying capabilities, not just the volume of alerts.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'The illusion of compliance', desc: 'An organisation can be compliant with a regulation on the day of the audit and compromised the next. Compliance is a binary checklist; maturity measures the sustainability and effectiveness of a control over time.' },
                { title: 'The communication disconnect', desc: 'Technical security teams struggle to secure budget because they report in technical terms. Maturity assessments bridge this gap by translating security gaps into financial risk and operational impact.' },
                { title: 'The lack of objective baselining', desc: 'Without a structured framework, security posture assessments are subjective opinions based on the assessor\'s experience. Objective measurement requires a defined rubric (e.g., CMMI levels 1-5).' },
                { title: 'Reactive spending', desc: 'Organisations without a maturity baseline buy security tools reactively based on the latest threat trend, rather than strategically investing to close defined capability gaps.' },
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
            <h2>Cybersecurity Maturity Assessment — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'N3-CMMF Assessment', desc: 'Comprehensive evaluation of 188 security controls across 6 domains. Every control is scored from Level 1 (Initial/Ad-hoc) to Level 5 (Optimised) based on documented, verifiable evidence.' },
              { num: '02', title: 'Target State Definition', desc: 'Collaborating with leadership to define an appropriate target maturity level for each domain based on the organisation\'s threat profile, regulatory obligations, and risk appetite. Not every control needs to be Level 5.' },
              { num: '03', title: 'Gap Quantification & Financial Modelling', desc: 'Translating maturity gaps into quantified business risk. Estimating the financial impact of a breach given the current maturity state versus the target state to justify security investments.' },
              { num: '04', title: 'Prioritised Remediation Roadmap', desc: 'Developing a structured, multi-phase improvement roadmap (e.g., 1-3 years). Prioritising initiatives that deliver the highest risk reduction for the lowest cost and effort.' },
              { num: '05', title: 'Board-Ready Reporting', desc: 'Producing investment-grade executive summaries, heatmap visualisations, and maturity dashboards designed specifically for board members and non-technical executives.' },
              { num: '06', title: 'Continuous Maturity Tracking', desc: 'Establishing the processes and metrics (TrustOps) to transition from a point-in-time assessment to continuous maturity measurement, allowing the organisation to track progress against the roadmap.' },
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
            <span className="eyebrow">Framework: N3-CMMF v1.0</span>
            <h2>The Nucleus Cybersecurity Maturity Management Framework.</h2>
            <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.75 }}>188 controls · 6 domains · L1→L5 maturity scoring · Maps to 32 industry standards</p>
          </div>
          <div className="standards-grid">
            {['NIST CSF (Core Mapping)', 'CMMI (Maturity Model)', 'ISO/IEC 27001 (Control Mapping)', 'CIS Critical Security Controls', 'FFIEC CAT', 'N3-CMMF'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Connected Cyber services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/cyber/governance"><h4>Cybersecurity Governance</h4><p>Implementing the governance structures required to drive maturity improvements.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/compliance"><h4>Compliance Programmes</h4><p>Using the N3-CMMF assessment to simultaneously identify compliance gaps.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/fractional-ciso"><h4>Fractional CISO</h4><p>Providing the leadership to execute the remediation roadmap identified in the assessment.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Stop guessing about your security posture. Start measuring it.</h2>
            <p>Speak with practitioners who have delivered maturity assessments for central banks, government agencies, and tier-one enterprises.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">N3-CMMF Framework</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
