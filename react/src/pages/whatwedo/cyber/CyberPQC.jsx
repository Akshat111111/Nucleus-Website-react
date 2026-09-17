import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function CyberPQC() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Cybersecurity &amp; Compliance · 09</div>
            <h1 className="svc-h1 reveal">Post-Quantum Cryptography (PQC)</h1>
            <p className="svc-lede reveal">
              Quantum computers will eventually break the public-key cryptography that secures the global internet. The threat is not theoretical; adversaries are actively executing "Harvest Now, Decrypt Later" attacks. We deliver PQC readiness assessments and migration roadmaps using the Nucleus Post-Quantum Cryptography Framework (N3-PQCF) — transitioning your infrastructure to quantum-resistant algorithms before the cryptographic deadline.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Quantum Threat</span>
              <h2>Q-Day is coming. Your encrypted data is already exposed.</h2>
              <p>When a cryptographically relevant quantum computer (CRQC) is built, algorithms like RSA, Diffie-Hellman, and ECC will be broken instantly. For data with a long shelf-life (e.g., state secrets, intellectual property, health records), the threat is present today: attackers are harvesting encrypted data traffic now to decrypt it when quantum computing matures.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Harvest Now, Decrypt Later (HNDL)', desc: 'Adversaries are siphoning encrypted TLS traffic from the internet and storing it. Once they possess a CRQC, they will decrypt this historical data. If your data must remain secret for 10+ years, it is vulnerable today.' },
                { title: 'Cryptographic opacity', desc: 'Most organisations do not know where cryptography is used within their enterprise. It is embedded in legacy applications, third-party libraries, hardware appliances, and network protocols. You cannot migrate what you cannot see.' },
                { title: 'The migration timeline', desc: 'Transitioning an enterprise to PQC is not a patch; it is a fundamental re-architecture. The transition to ECC took over a decade. Organisations that delay PQC migration will not complete it before Q-Day.' },
                { title: 'Regulatory pressure', desc: 'Government agencies and critical infrastructure providers are already facing mandates (e.g., US National Security Memorandum 10) to discover vulnerable cryptography and plan their PQC migrations.' },
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
            <h2>Post-Quantum Cryptography — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Cryptographic Discovery', desc: 'Deploying automated scanning tools and conducting code reviews to discover where vulnerable cryptography (RSA, ECC, DH) is used across applications, network appliances, and data stores.' },
              { num: '02', title: 'PQC Risk Assessment', desc: 'Evaluating the discovered cryptography against data shelf-life requirements (HNDL risk) to prioritise systems that must migrate immediately versus those that can wait.' },
              { num: '03', title: 'Cryptographic Bill of Materials (CBOM)', desc: 'Generating a comprehensive CBOM that indexes all cryptographic assets, providing a foundational inventory required for regulatory compliance and migration planning.' },
              { num: '04', title: 'PQC Migration Roadmap', desc: 'Developing a multi-year transition plan. Designing architectures that support cryptographic agility — the ability to seamlessly swap algorithms without breaking the application.' },
              { num: '05', title: 'NIST PQC Algorithm Integration', desc: 'Advising on the integration of newly standardised NIST PQC algorithms (e.g., ML-KEM, ML-DSA) into enterprise applications, VPNs, and PKI infrastructure.' },
              { num: '06', title: 'Hybrid Cryptography Implementation', desc: 'Designing hybrid cryptographic architectures that combine classical algorithms (for compliance) with quantum-resistant algorithms (for future-proofing) during the transition period.' },
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
            <h2>PQC methodologies.</h2>
          </div>
          <div className="standards-grid">
            {['NIST PQC Standards (FIPS 203, 204, 205)', 'NSA CNSA Suite 2.0', 'CISA PQC Guidance', 'IETF PQC Drafts', 'N3-PQCF'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Connected Cyber &amp; Platform services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/platform/secure-architecture"><h4>Secure Architecture Review</h4><p>Building cryptographic agility into the foundation of new software platforms.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/data-privacy"><h4>Data Privacy &amp; Protection</h4><p>Understanding which data possesses the shelf-life to warrant immediate PQC migration.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/sectors/government-public-sector"><h4>Government &amp; Public Sector</h4><p>Navigating federal mandates for post-quantum cryptographic migration.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>The cryptographic migration of our generation has begun.</h2>
            <p>Speak with specialists who are translating theoretical quantum threats into actionable enterprise migration roadmaps.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/cybersecurity-compliance">All Cyber Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
