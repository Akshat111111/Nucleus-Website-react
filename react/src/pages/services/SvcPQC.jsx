import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function SvcPQC() {
  useReveal()
  return (
    <div id="view-svc">

      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Post-Quantum &amp; Emerging Technology Security</div>
            <h1 className="svc-h1 reveal">The cryptography protecting your data today may not protect it tomorrow.</h1>
            <p className="svc-lede reveal">
              NIST has finalised post-quantum cryptography standards. Harvest-now-decrypt-later attacks are already occurring. Long-lived systems — financial infrastructure, national identity, healthcare records, critical operational systems — face quantum computing risk within the planning horizon of decisions being made today.
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
            <h2>Post-Quantum &amp; Emerging Technology Security Services</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'PQC Readiness Assessment', desc: 'Structured assessment of your cryptographic risk exposure — identifying which algorithms are quantum-vulnerable, which systems rely on them, and the priority order for migration based on data sensitivity and system longevity.' },
              { num: '02', title: 'Cryptographic Discovery (CBOM)', desc: 'Cryptographic Bill of Materials (CBOM) — a complete inventory of cryptographic assets across your codebase, infrastructure and third-party dependencies. The foundation for any PQC migration programme.' },
              { num: '03', title: 'Crypto-Agility Architecture', desc: 'Design of cryptographic agility into your systems — enabling algorithm upgrades without full system re-engineering. This is the architectural capability that makes PQC migration manageable as standards evolve.' },
              { num: '04', title: 'NIST PQC Migration Planning', desc: 'Structured migration roadmap to NIST-finalised post-quantum algorithms (ML-KEM, ML-DSA, SLH-DSA) — phased by risk priority, system architecture and operational constraints.' },
              { num: '05', title: 'Supplier &amp; Supply Chain PQC Readiness', desc: 'Assessment of third-party and supply chain cryptographic exposure — understanding the PQC readiness of your critical suppliers and the inherited quantum risk in your technology ecosystem.' },
              { num: '06', title: 'Emerging Technology Security Advisory', desc: 'Security advisory for other emerging technologies with long-term implications — AI supply chain security, quantum-safe communication protocols, homomorphic encryption and confidential computing.' },
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

      <section className="svc-scope section">
        <div className="wrap svc-scope-grid">
          <div className="svc-scope-col reveal">
            <h3>Scope</h3>
            <ul className="svc-list">
              <li>Cryptographic asset discovery and CBOM generation</li>
              <li>Quantum vulnerability risk classification by system</li>
              <li>Algorithm risk assessment (RSA, ECC, DH, symmetric)</li>
              <li>Crypto-agility architectural review and design</li>
              <li>NIST PQC algorithm selection and migration planning</li>
              <li>Hybrid classical/post-quantum transition architecture</li>
              <li>Third-party and supply chain PQC readiness assessment</li>
              <li>Regulatory compliance (NIST, ETSI, BSI PQC guidance)</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>What You Receive</h3>
            <ul className="svc-list">
              <li>PQC readiness assessment and risk report</li>
              <li>Cryptographic Bill of Materials (CBOM)</li>
              <li>Quantum vulnerability risk register by system</li>
              <li>Crypto-agility architecture design document</li>
              <li>NIST PQC migration roadmap (phased by priority)</li>
              <li>Board and executive PQC risk summary</li>
              <li>Supplier PQC readiness assessment report</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>Quantum-vulnerable cryptographic assets identified and prioritised</li>
              <li>PQC migration roadmap aligned to NIST-finalised standards</li>
              <li>Crypto-agility designed in — future algorithm changes manageable</li>
              <li>Harvest-now-decrypt-later risk to sensitive data materially reduced</li>
              <li>Regulatory and compliance readiness for PQC mandates</li>
              <li>Supply chain quantum risk understood and governed</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="svc-triggers section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">When You Need This</span>
            <h2>Buying triggers</h2>
          </div>
          <div className="triggers-grid">
            {[
              'Long-lived systems protecting sensitive data beyond a 5-10 year horizon',
              'Financial infrastructure, national security or healthcare systems with quantum exposure',
              'NIST PQC standards finalised — migration planning now on the board agenda',
              'Regulatory enquiry or investor due diligence question on quantum readiness',
              'No cryptographic asset inventory — unable to assess PQC exposure',
              'Third-party suppliers unable to provide PQC readiness assurance',
              'Harvest-now-decrypt-later risk identified for highly sensitive encrypted data',
              'Architecture decisions being made today that will be expensive to reverse post-quantum',
            ].map((t, i) => (
              <div className="trigger-item reveal" key={i}>
                <span className="trigger-dot">▸</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Relevant Standards</span>
            <h2>Aligned to PQC standards and guidance.</h2>
          </div>
          <div className="standards-grid">
            {['NIST FIPS 203 (ML-KEM)', 'NIST FIPS 204 (ML-DSA)', 'NIST FIPS 205 (SLH-DSA)', 'ETSI QSC Technical Reports', 'BSI PQC Migration Guidance', 'NCSC PQC Guidance (UK)', 'NSA CNSA 2.0', 'IETF PQC Working Groups', 'CycloneDX CBOM', 'ISO/IEC 18033 (Encryption)'].map(s => (
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
            <Link className="related-card reveal" to="/services/cybersecurity-advisory">
              <h4>Cybersecurity Strategy &amp; Leadership</h4>
              <p>PQC readiness embedded in the broader security strategy and roadmap.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/digital-infrastructure">
              <h4>Digital Infrastructure &amp; Critical Systems</h4>
              <p>PQC migration planning for long-lived DPI, payment and identity systems.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/secure-software">
              <h4>Secure Software &amp; DevSecOps</h4>
              <p>CBOM integrated with SBOM for complete software trust and cryptographic inventory.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <span className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(255,255,255,.5)' }}>PQC readiness</span>
            <h2>Do you know which systems are quantum-vulnerable and when they need to migrate?</h2>
            <p>Speak with a Nucleus Systems practitioner about your cryptographic exposure and what a practical PQC readiness programme looks like for your environment.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/cybersecurity-advisory">Explore Cybersecurity Advisory</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
