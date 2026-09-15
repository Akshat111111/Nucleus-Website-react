import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function SvcDigitalInfra() {
  useReveal()
  return (
    <div id="view-svc">

      <section className="svc-hero svc-hero--dpi">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Digital Infrastructure &amp; Critical Systems</div>
            <h1 className="svc-h1 reveal">Secure the digital systems that economies depend on.</h1>
            <p className="svc-lede reveal">
              Digital Public Infrastructure, national payment rails, digital identity systems and critical infrastructure operate at a scale and sensitivity where a security failure is a systemic event. We bring specialist practitioner experience from deployments across Africa, the Middle East and Asia — where much of this infrastructure is being built for the first time.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/cybersecurity-advisory">See Cybersecurity Advisory <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">What We Do</span>
            <h2>Digital Infrastructure &amp; Critical Systems Services</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'DPI &amp; DPG Security', desc: 'Security architecture, threat modelling and assurance for Digital Public Infrastructure and Digital Public Goods — Mojaloop, MOSIP, OpenG2P, Tazama, iHRIS and similar open-source government platforms deployed at population scale.' },
              { num: '02', title: 'Payment Security', desc: 'Security architecture and assurance for payment rails, real-time gross settlement systems, mobile money platforms and agent banking networks. PCI DSS, ISO 20022, COMESA and SWIFT CSP expertise.' },
              { num: '03', title: 'Digital Identity &amp; Verifiable Credentials', desc: 'Security assurance for national identity programmes and verifiable credential infrastructure. MOSIP, OpenG2P, W3C VC, DID ecosystem and biometric system security — securing identity at population scale.' },
              { num: '04', title: 'Critical Infrastructure Security', desc: 'Cybersecurity assessment and advisory for energy, water, transport and telecommunications operators — ICS/SCADA security, OT/IT convergence, sector-specific regulatory compliance and resilience validation.' },
              { num: '05', title: 'Cloud &amp; Platform Architecture Assurance', desc: 'Security architecture review for cloud and hybrid platforms underpinning critical services — cloud security posture management, IAM architecture, network segmentation and platform-level threat modelling.' },
              { num: '06', title: 'Public Sector Digital Systems', desc: 'Government digital transformation security advisory — new service delivery platforms, inter-agency data sharing, citizen identity and government cloud migration security architecture.' },
            ].map((s, i) => (
              <div className="svc-what-card reveal" key={i}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="svc-what-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Our Experience</span>
              <h2>Deployed where this infrastructure is being built for the first time.</h2>
              <p>Our practitioners have contributed to some of the most significant DPI deployments in the world — Mojaloop payment infrastructure, MOSIP national identity, OpenG2P social protection systems and Tazama fraud management — across Africa, the Middle East, Asia and the Pacific.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Mojaloop Payment Infrastructure', desc: 'Security architecture contributions and implementation advisory for the open-source interoperable payment platform deployed across multiple African markets.' },
                { title: 'MOSIP Digital Identity', desc: 'Security assurance for the Modular Open Source Identity Platform — biometric systems, credential management and national ID infrastructure at population scale.' },
                { title: 'Tazama Fraud Management', desc: 'Security advisory for the open-source real-time fraud management system for financial services across low- and middle-income markets.' },
                { title: 'COMESA Digital Trade', desc: 'Payment and digital trade security architecture advisory across the Common Market for Eastern and Southern Africa member states.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAYMENT SECURITY DEEP-DIVE ── */}
      <section className="svc-problem section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">Payment Security</span>
            <h2>Infrastructure-layer expertise — not just application security.</h2>
            <p>Most payment security engagements focus on PCI DSS and API penetration testing. Our practitioners have worked inside the real-time settlement rails, open-source DPI payment stacks and central bank digital infrastructure where systemic risk actually lives — Mojaloop, Tazama, COMESA, SWIFT CSP, CBDC programmes.</p>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Payment System Security Assessment', desc: 'Comprehensive security assessment of payment system architecture against PCI DSS v4, ISO 20022 security requirements, and applicable regulatory frameworks. Covers application, API, infrastructure and governance layers.' },
              { num: '02', title: 'Mojaloop Platform Security Review', desc: 'Purpose-built security assessment for Mojaloop deployments — covering the switch architecture, participant API security, settlement layer, account lookup service, and operator governance controls. Based on direct platform expertise.' },
              { num: '03', title: 'Tazama Transaction Monitoring Security', desc: 'Security assessment of Tazama deployments for financial crime detection infrastructure — covering data ingestion pipelines, rule engine security, alert management, and integration with core payment platforms.' },
              { num: '04', title: 'Real-Time Payment Security Architecture', desc: 'Security architecture review and design for real-time payment systems — settlement finality controls, fraud detection integration, participant onboarding security, and API gateway hardening for high-throughput payment rails.' },
              { num: '05', title: 'SWIFT Customer Security Programme (CSP)', desc: 'Assessment and advisory for SWIFT CSP compliance — all mandatory and advisory controls in the CSCF. Self-attestation evidence packages and gap remediation roadmaps for banks and payment operators.' },
              { num: '06', title: 'Central Bank Digital Currency (CBDC) Security Advisory', desc: 'Security architecture and risk advisory for CBDC programmes — wholesale and retail CBDC models, distributed ledger security, participant access controls, privacy-preserving design, and BIS/IMF CBDC security guidance alignment.' },
              { num: '07', title: 'Financial Crime &amp; Fraud Risk Assessment', desc: 'Risk assessment of financial crime controls — AML transaction monitoring effectiveness, fraud detection coverage gaps, sanctions screening, and correspondent banking risk aligned to FATF recommendations.' },
              { num: '08', title: 'Digital Public Infrastructure Security Advisory', desc: 'Security advisory for DPI payment programmes — payment rails, interoperability frameworks, and data exchange infrastructure for government and central bank DPI deployments across Africa, Asia and the Middle East.' },
            ].map((s, i) => (
              <div className="svc-what-card reveal" key={i}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="svc-what-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIGITAL IDENTITY DEEP-DIVE ── */}
      <section className="svc-problem section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">Digital Identity &amp; Verifiable Credentials</span>
            <h2>The highest-stakes DPI programme any government runs.</h2>
            <p>National digital identity consolidates biometrics, demographic records and financial account linkages into a single foundational infrastructure. A breach is not a data incident — it can undermine public trust in the entire programme. Our practitioners have worked inside MOSIP, OpenG2P and GovStack deployments, not assessed them from the outside.</p>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Digital Identity Security Architecture Review', desc: 'End-to-end security architecture assessment covering registration, biometric capture, deduplication, authentication, credential issuance, and relying party integration. Threat model built to the specific programme context and deployment environment.' },
              { num: '02', title: 'MOSIP Platform Security Assessment', desc: 'Purpose-built security assessment for MOSIP deployments — registration client, kernel services, ID repository, authentication server, resident portal, and partner management. Based on direct platform expertise covering MOSIP-specific threat classes.' },
              { num: '03', title: 'OpenG2P Security Review', desc: 'Security assessment of OpenG2P deployments for social protection delivery — beneficiary registry security, payment disbursement controls, ID-to-payment linkage integrity, and fraud and exclusion risks in social protection digital delivery.' },
              { num: '04', title: 'Verifiable Credential System Assessment', desc: 'Security assessment of VC issuance, presentation and verification infrastructure — W3C VC data model, DID resolution and key management, credential status mechanisms, selective disclosure (SD-JWT, BBS+), and holder binding security.' },
              { num: '05', title: 'eIDAS 2.0 &amp; European Digital Identity Wallet', desc: 'Advisory for EUDIW implementation — wallet security architecture, issuer/verifier integration, attribute attestation, selective disclosure, and eIDAS 2.0 technical compliance requirements.' },
              { num: '06', title: 'Biometric Security Assessment', desc: 'Security assessment of biometric subsystems — capture device security, template protection, liveness detection, deduplication engine integrity, and the specific fraud attacks on biometric-based identity proofing at population scale.' },
            ].map((s, i) => (
              <div className="svc-what-card reveal" key={i}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="svc-what-desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="svc-problem-grid" style={{ marginTop: '48px' }}>
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Platform Coverage</span>
              <h2>MOSIP · OpenG2P · GovStack · W3C VC · DID · eIDAS 2.0</h2>
              <p>We advise issuers, verifiers and wallet providers on secure implementation of verifiable credential ecosystems — including privacy-preserving design that builds accountability without creating surveillance infrastructure. Aligned to GDPR, POPIA and regional data protection frameworks across Africa and Asia.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Open-source DPI platforms — inside knowledge', desc: 'MOSIP, OpenG2P, GovStack, Inji, OpenCRVS, eSignet — we know their architecture, trust boundaries, and specific threat model from working in and around these deployments.' },
                { title: 'Privacy by design — not surveillance infrastructure', desc: 'Identity systems without privacy controls become surveillance infrastructure. We advise on minimal disclosure, biometric data protection, and audit trail design that supports accountability.' },
                { title: 'Standards: W3C VC · DID · OpenID Connect · eIDAS 2.0 · ISO 18013-5', desc: 'Full coverage of the emerging digital identity standards stack across both government and commercial identity ecosystems.' },
                { title: 'World Bank ID4D · UNDP Digital Identity aligned', desc: 'Aligned to leading development community frameworks and the DPGA privacy expert guidance for DPI identity deployments.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="svc-scope section">
        <div className="wrap svc-scope-grid">
          <div className="svc-scope-col reveal">
            <h3>Scope</h3>
            <ul className="svc-list">
              <li>DPI/DPG security architecture assessment and advisory</li>
              <li>Payment rail security review (PCI DSS, ISO 20022)</li>
              <li>Digital identity security assurance (MOSIP, W3C VC, DID)</li>
              <li>Critical infrastructure cybersecurity assessment</li>
              <li>ICS/SCADA and OT security review</li>
              <li>Cloud platform security architecture review</li>
              <li>Threat modelling for critical digital systems</li>
              <li>Regulatory compliance (sector-specific)</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>What You Receive</h3>
            <ul className="svc-list">
              <li>Security architecture assessment report</li>
              <li>Threat model documentation per system</li>
              <li>Regulatory gap report (sector-specific)</li>
              <li>Remediation roadmap with prioritised recommendations</li>
              <li>Board and executive summary report</li>
              <li>Security architecture design documentation</li>
              <li>Implementation advisory support</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>Critical digital systems secured to international standards</li>
              <li>Regulatory compliance evidence across sector-specific obligations</li>
              <li>DPI security architecture aligned to global best practice</li>
              <li>Population-scale digital identity systems assurance</li>
              <li>Payment rail security validated and continuously monitored</li>
              <li>Government digital transformation delivered securely</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Relevant Standards</span>
            <h2>Aligned to critical infrastructure requirements.</h2>
          </div>
          <div className="standards-grid">
            {['PCI DSS v4.0', 'ISO 20022', 'SWIFT CSP', 'IEC 62443 (ICS/OT)', 'NIST SP 800-82', 'W3C Verifiable Credentials', 'DID Core Specification', 'MOSIP Security Standards', 'COMESA Digital Trade', 'NIS2 Critical Infrastructure'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Often engaged together</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/services/penetration-testing">
              <h4>Penetration Testing &amp; Technical Validation</h4>
              <p>Technical security testing of DPI, payment and identity systems.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/post-quantum">
              <h4>Post-Quantum &amp; Emerging Technology Security</h4>
              <p>Cryptographic readiness for long-lived digital infrastructure.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/operational-resilience">
              <h4>Operational Resilience</h4>
              <p>Resilience validation for critical digital systems and infrastructure operators.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <span className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(255,255,255,.5)' }}>Digital infrastructure security</span>
            <h2>Building or securing critical digital infrastructure?</h2>
            <p>Speak with a Nucleus Systems practitioner who has worked on the systems you are building — from payment rails to national identity to digital public goods.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/about">About Nucleus Systems</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
