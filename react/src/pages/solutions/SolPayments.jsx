import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function SolPayments() {
  useReveal()

  return (
    <div id="view-sol-payments">
      

  <div className="pillar-hero">
    <div className="wrap ph-inner">
      <div className="ph-eyebrow"><span className="ph-pill">Domain-Specific Solution · S2</span></div>
      <h1 className="ph-h1">Payment Security &amp; Digital Public Infrastructure</h1>
      <p className="ph-sub">Security advisory and assurance for payment systems, real-time payment infrastructure and digital public infrastructure — with practitioner-level expertise in Mojaloop, Tazama, COMESA, PCI DSS, SWIFT CSP and CBDC deployments across Africa, Asia and the Middle East.</p>
      <div className="pillar-fw-stats">
        <div className="pfs-item"><span className="pfs-val">Mojaloop</span><span className="pfs-lab">Tazama · COMESA</span></div>
        <div className="pfs-item"><span className="pfs-val">PCI DSS</span><span className="pfs-lab">v4 Certified</span></div>
        <div className="pfs-item"><span className="pfs-val">SWIFT</span><span className="pfs-lab">CSP Advisory</span></div>
        <div className="pfs-item"><span className="pfs-val">CBDC</span><span className="pfs-lab">Security Advisory</span></div>
        <div className="pfs-item"><span className="pfs-val">DPI</span><span className="pfs-lab">Standards Coverage</span></div>
      </div>
    </div>

    <div className="page-ticker">
      <div className="page-ticker-track">
        <span className="page-ticker-item"><span className="t-cat">Platforms</span> Mojaloop · Tazama · COMESA · OpenG2P · Instant Payment Rails</span>
        <span className="page-ticker-item"><span className="t-cat">Standards</span> PCI DSS v4 · SWIFT CSP · ISO 20022 · Open Banking Security</span>
        <span className="page-ticker-item"><span className="t-cat">Coverage</span> CBDC Security Advisory · RTGS · Cross-Border Payments · DPI</span>
        <span className="page-ticker-item"><span className="t-cat">Regions</span> Africa · Asia · Middle East · Pacific · Emerging Market DPI</span>
        <span className="page-ticker-item"><span className="t-cat">Testing</span> Penetration Testing · Threat Modelling · API Security · HSM Review</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> BIS CPMI · FSB · FATF · Central Bank Payment Regulations</span>
        <span className="page-ticker-item"><span className="t-cat">Delivery</span> Founder-Led · Practitioner-Experienced in Live Payment Systems</span>
        <span className="page-ticker-item"><span className="t-cat">Platforms</span> Mojaloop · Tazama · COMESA · OpenG2P · Instant Payment Rails</span>
        <span className="page-ticker-item"><span className="t-cat">Standards</span> PCI DSS v4 · SWIFT CSP · ISO 20022 · Open Banking Security</span>
        <span className="page-ticker-item"><span className="t-cat">Coverage</span> CBDC Security Advisory · RTGS · Cross-Border Payments · DPI</span>
        <span className="page-ticker-item"><span className="t-cat">Regions</span> Africa · Asia · Middle East · Pacific · Emerging Market DPI</span>
        <span className="page-ticker-item"><span className="t-cat">Testing</span> Penetration Testing · Threat Modelling · API Security · HSM Review</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> BIS CPMI · FSB · FATF · Central Bank Payment Regulations</span>
        <span className="page-ticker-item"><span className="t-cat">Delivery</span> Founder-Led · Practitioner-Experienced in Live Payment Systems</span>
      </div>
    </div>
  </div>

  {/* Intro */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <div className="pg-2col reveal">
        <div>
          <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>Security at the payment infrastructure layer</div>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>Most payment security engagements focus on the application layer — PCI DSS compliance, penetration testing of payment portals, API security reviews. What they rarely address is the infrastructure layer: the real-time settlement rails, the transaction monitoring platforms, the interoperability frameworks and the central bank digital infrastructure that modern payment systems are built on. Those layers carry systemic risk that application-layer security cannot mitigate.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>Nucleus Systems has practitioner-level expertise in the open-source DPI payment stack deployed across Africa, Asia and the Middle East — including direct experience with Mojaloop (the Level One Project real-time payments platform), Tazama (open-source transaction monitoring for financial crime detection), and the COMESA regional payment framework. Our practitioners have worked inside these systems, not just assessed them from the outside.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8"}}>We combine that infrastructure expertise with NS-CMMF maturity methodology and PCI DSS, ISO 20022, and SWIFT CSP compliance advisory — delivering security programmes that address both the technical architecture of the payment system and the institutional governance that regulates it.</p>
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"20px"}}>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"24px 26px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--blue)","marginBottom":"8px"}}>Open-Source DPI Expertise</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>Mojaloop · Tazama · COMESA — inside knowledge</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.65"}}>Our practitioners have direct, hands-on experience with the open-source payment infrastructure frameworks being deployed at scale across Africa and Asia. We know their architecture, their trust boundaries, and their specific threat model — not from documentation, but from working in and around these systems.</div>
          </div>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"24px 26px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>Regulatory Breadth</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>PCI DSS v4 · ISO 20022 · SWIFT CSP · CBDC guidance</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.65"}}>Payment infrastructure sits at the intersection of multiple overlapping regulatory frameworks. We advise across PCI DSS v4, ISO 20022 security requirements, SWIFT Customer Security Programme, central bank digital currency security standards, and the emerging DPI regulatory frameworks being developed by regional bodies.</div>
          </div>
          <div style={{"background":"var(--navy)","borderRadius":"14px","padding":"24px 26px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>Regional Focus</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"#fff","marginBottom":"6px"}}>Africa · Asia · Middle East payment ecosystems</div>
            <div style={{"fontSize":"12.5px","color":"rgba(255,255,255,.65)","lineHeight":"1.65"}}>We operate where the DPI payment transformation is actually happening — sub-Saharan Africa, East Africa, West Africa, South Asia and the Gulf. Our team understands the regulatory environment, the threat landscape, and the operational constraints of payment operators in these markets.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Services */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">Services</h2>
      <p className="pg-sub reveal">From PCI DSS compliance programmes to central bank CBDC security architecture — covering the full payment security landscape at both the system and infrastructure layer.</p>
      <div className="svc2-grid reveal">
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
          <h4>Payment System Security Assessment</h4>
          <p>Comprehensive security assessment of payment system architecture against PCI DSS v4, ISO 20022 security requirements, and applicable regulatory frameworks. Covers application, API, infrastructure and governance layers.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>
          <h4>Mojaloop Platform Security Review</h4>
          <p>Purpose-built security assessment for Mojaloop deployments — covering the switch architecture, participant API security, settlement layer, account lookup service, and operator governance controls. Based on direct platform expertise, not generic API security tooling.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
          <h4>Tazama Transaction Monitoring Security</h4>
          <p>Security assessment of Tazama deployments for financial crime detection infrastructure — covering data ingestion pipelines, rule engine security, alert management, and integration with core payment platforms. Threat model focused on insider risk and data integrity.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
          <h4>Digital Public Infrastructure Security Advisory</h4>
          <p>Security advisory for DPI deployments — payment rails, identity systems, and data exchange infrastructure. Architecture review, threat modelling, and governance framework design for government and central bank DPI programmes.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
          <h4>Real-Time Payment Security Architecture</h4>
          <p>Security architecture review and design for real-time payment systems — including settlement finality controls, fraud detection integration, participant onboarding security, and API gateway hardening for high-throughput payment rails.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
          <h4>Financial Crime &amp; Fraud Risk Assessment</h4>
          <p>Risk assessment of financial crime controls — AML transaction monitoring effectiveness, fraud detection coverage gaps, sanctions screening, and correspondent banking risk. Aligned to FATF recommendations and regional regulatory requirements.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <h4>SWIFT Customer Security Programme (CSP)</h4>
          <p>Assessment and advisory for SWIFT CSP compliance — covering all mandatory and advisory controls in the Customer Security Controls Framework (CSCF). Deliverables include self-attestation evidence packages and gap remediation roadmaps.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
          <h4>Central Bank Digital Currency (CBDC) Security Advisory</h4>
          <p>Security architecture and risk advisory for CBDC programmes — covering wholesale and retail CBDC models, distributed ledger security, participant access controls, privacy-preserving design, and the regulatory security obligations emerging from BIS and IMF CBDC guidance.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Spec table */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">Standards &amp; Framework Coverage</h2>
      <p className="pg-sub reveal" style={{"marginBottom":"8px"}}>Every engagement is scoped against the regulatory and standards obligations applicable to the specific payment infrastructure and jurisdiction.</p>
      <div style={{"overflowX":"auto"}} className="reveal">
        <table className="spec-tbl"><tbody>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div><span className="spec-tbl-label">PCI DSS v4</span></div></td>
            <td>Full PCI DSS v4 assessment capability — Requirements 1–12, SAQ and ROC scoping, compensating controls design, and QSA-ready evidence packages. Aligned to the v4 shift toward customised implementation and continuous compliance monitoring.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><span className="spec-tbl-label">SWIFT CSCF</span></div></td>
            <td>SWIFT Customer Security Controls Framework (CSCF) advisory for banks and payment operators — mandatory controls (Objectives 1–3) and advisory controls (Objectives 4–7). Self-attestation preparation, evidence management, and independent assessment advisory.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M2 17l10 5 10-5M2 12l10 5 10-5M12 2l10 5-10 5L2 7z"/></svg></div><span className="spec-tbl-label">ISO 20022 Security</span></div></td>
            <td>ISO 20022 migration security advisory — covering the security implications of the SWIFT MT to MX migration, structured data validation, richer payment data governance, and the fraud risk changes that accompany ISO 20022 adoption.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></div><span className="spec-tbl-label">DPI &amp; Regional Frameworks</span></div></td>
            <td>Coverage of DPI security standards including G20 DPI principles, GovStack security building blocks, GSMA mobile money security guidelines, and regional frameworks including COMESA payment system requirements and East African Community financial integration security standards.</td>
          </tr>
        </tbody></table>
      </div>
    </div>
  </div>

  {/* Cross-links */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <div className="xlink-row reveal">
        <div className="xlink-card" data-go="pillar-cyber">
          <div className="xlink-label">Parent Pillar</div>
          <div className="xlink-name">Cybersecurity Trust &amp; Resilience</div>
          <div className="xlink-desc">The full Pillar 1 service model, of which payment security is a specialist domain application.</div>
          <div className="xlink-go">Explore Pillar 1 →</div>
        </div>
        <div className="xlink-card" data-go="fw-cmmf">
          <div className="xlink-label">Underlying Framework</div>
          <div className="xlink-name">NS-CMMF</div>
          <div className="xlink-desc">Payment security assessments are anchored to NS-CMMF for maturity context and institutional governance gap analysis.</div>
          <div className="xlink-go">Explore NS-CMMF →</div>
        </div>
        <div className="xlink-card" data-go="sol-identity">
          <div className="xlink-label">Related Solution</div>
          <div className="xlink-name">Verifiable Credentials &amp; Digital Identity</div>
          <div className="xlink-desc">Digital identity security is the adjacent domain — payment systems increasingly depend on verifiable credential infrastructure.</div>
          <div className="xlink-go">Explore Digital Identity →</div>
        </div>
      </div>
    </div>
  </div>

  <div className="page-cta-band">
    <div className="wrap pcb-inner">
      <h2>Speak with a practitioner who knows your payment infrastructure from the inside</h2>
      <p>Whether you're running Mojaloop, preparing for PCI DSS v4, deploying a CBDC programme, or assessing SWIFT CSP compliance — book a call with a specialist who has worked in and around these systems.</p>
      <div className="pcb-row"><Link className="btn btn-primary" to="/contact">Book a specialist call <span className="arr">→</span></Link><Link className="btn btn-ghost" to="/pillar-cyber" style={{"background":"transparent","color":"#fff","borderColor":"rgba(255,255,255,.3)"}}>Explore Pillar 1 →</Link></div>
    </div>
  </div>


    </div>
  )
}

