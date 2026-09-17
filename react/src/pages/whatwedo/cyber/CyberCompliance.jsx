import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function CyberCompliance() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Cybersecurity &amp; Compliance · 04</div>
            <h1 className="svc-h1 reveal">Compliance Programme Management</h1>
            <p className="svc-lede reveal">
              Regulatory compliance is no longer a localized IT requirement; it is a prerequisite for market access. We deliver end-to-end compliance programme management — guiding organisations through ISO 27001 certification, SOC 2 readiness, PCI DSS compliance, and the complex new landscape of EU regulations including DORA, NIS2, and the Cyber Resilience Act (CRA).
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Compliance Gap</span>
              <h2>Multiple regulations. Disjointed efforts. Audit fatigue.</h2>
              <p>As organisations expand geographically and operationally, they fall under overlapping regulatory regimes. Running a separate programme for ISO 27001, another for GDPR, and a third for DORA creates massive inefficiency. Without a unified compliance architecture (like our N3-CMMF), organisations suffer from audit fatigue, duplicated evidence collection, and inconsistent policy enforcement.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'The EU regulatory wave', desc: 'DORA (Digital Operational Resilience Act), NIS2, and the CRA impose stringent new requirements on financial entities, critical infrastructure, and software providers, complete with severe financial penalties for non-compliance.' },
                { title: 'Evidence scattered across silos', desc: 'When auditors request proof of access control reviews, the evidence is often scattered across Jira tickets, emails, and spreadsheets. Gathering evidence becomes a frantic, manual exercise before every audit.' },
                { title: 'The "checkbox" mentality', desc: 'Treating compliance as a checkbox exercise rather than a reflection of operational maturity leads to a brittle security posture that passes the audit but fails to stop the breach.' },
                { title: 'Supply chain compliance burdens', desc: 'Regulations now mandate that organisations ensure their third-party suppliers are also compliant. Managing third-party compliance attestations is a scaling challenge most procurement teams cannot handle.' },
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
            <h2>Compliance Programme Management — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'ISO/IEC 27001:2022 Certification', desc: 'End-to-end ISMS implementation. Gap analysis, risk assessment, Statement of Applicability (SoA) development, internal audit, and full support through Stage 1 and Stage 2 certification audits.' },
              { num: '02', title: 'DORA & NIS2 Readiness', desc: 'Assessing operational resilience against DORA requirements for financial entities and ICT providers. Establishing ICT risk management frameworks, incident reporting protocols, and third-party risk management.' },
              { num: '03', title: 'SOC 2 Type I & II Readiness', desc: 'Preparing service organisations for SOC 2 attestation. Defining system boundaries, mapping Trust Services Criteria (Security, Availability, Confidentiality), and remediating control gaps prior to the CPA audit.' },
              { num: '04', title: 'Cyber Resilience Act (CRA) Compliance', desc: 'Assisting software and hardware manufacturers in meeting EU CRA obligations. Implementing secure-by-design processes, vulnerability handling procedures, and CE marking readiness.' },
              { num: '05', title: 'Unified Compliance Mapping (N3-CMMF)', desc: 'Utilising our N3-CMMF framework to map controls across multiple standards simultaneously. Collect evidence once; apply it to ISO 27001, SOC 2, and DORA audits concurrently.' },
              { num: '06', title: 'Virtual Data Protection Officer (vDPO)', desc: 'Providing expert GDPR/CCPA compliance advisory. Conducting Data Protection Impact Assessments (DPIAs), managing Data Subject Access Requests (DSARs), and advising on cross-border data transfers.' },
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
            <h2>The standards we implement.</h2>
          </div>
          <div className="standards-grid">
            {['ISO/IEC 27001:2022', 'SOC 2 (Trust Services Criteria)', 'DORA (Regulation (EU) 2022/2554)', 'NIS2 Directive (EU)', 'Cyber Resilience Act (CRA)', 'PCI DSS v4.0', 'GDPR / UK GDPR', 'HIPAA / HITECH'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/cyber/maturity"><h4>Cybersecurity Maturity Assessment</h4><p>The initial gap analysis that forms the foundation of any compliance programme.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/regulatory"><h4>AI Regulatory Compliance</h4><p>Specific compliance programmes for the EU AI Act and ISO 42001.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/resilience"><h4>Operational Resilience</h4><p>The technical implementation of the resilience capabilities required by DORA.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Compliance is a byproduct of good security, not the other way around.</h2>
            <p>Speak with compliance specialists who build unified frameworks that reduce audit fatigue and improve actual security posture.</p>
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
