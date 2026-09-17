import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function PlatDPI() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Digital Platform Trust · 08</div>
            <h1 className="svc-h1 reveal">DPI &amp; Digital Identity Security</h1>
            <p className="svc-lede reveal">
              Digital Public Infrastructure (DPI) — national identity systems, payment rails, and data exchange platforms — forms the critical digital backbone of modern societies. Compromise of these systems undermines national security and citizen trust. We deliver specialist security architecture, threat modelling, and deployment assurance for population-scale DPI projects, including MOSIP, Mojaloop, and OpenG2P, across global deployments.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/sectors/digital-platforms">DPI Sector Experience <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Population-Scale Challenge</span>
              <h2>Securing systems where the impact of a breach is measured in millions of citizens.</h2>
              <p>DPI projects differ fundamentally from enterprise software. They operate at population scale, process highly sensitive demographic and biometric data, integrate with legacy government systems, and are primary targets for nation-state adversaries. Standard enterprise security frameworks are insufficient for the threat model and regulatory complexity of national digital infrastructure.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Nation-state threat actors', desc: 'National identity systems and payment rails attract Advanced Persistent Threats (APTs) seeking to conduct espionage, disrupt economies, or manipulate citizen data.' },
                { title: 'Biometric and demographic data risk', desc: 'The aggregation of population-scale biometric data (fingerprints, iris scans) creates an unprecedented privacy and security risk. Compromised biometrics cannot be re-issued like a password.' },
                { title: 'Open-source governance at scale', desc: 'Deploying open-source DPI platforms (like MOSIP) requires rigorous supply chain security, secure configuration management, and ongoing vulnerability management to safely adapt open-source code for sovereign use.' },
                { title: 'Ecosystem interoperability risk', desc: 'DPI relies on interoperability between government agencies, financial institutions, and private sector relying parties. Each integration point expands the attack surface and requires robust trust frameworks.' },
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
            <h2>DPI Security Assurance — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'MOSIP Security Architecture', desc: 'Specialist security design and assurance for MOSIP (Modular Open Source Identity Platform) deployments. Securing the registration client, kernel services, ABIS integration, and ID repository.' },
              { num: '02', title: 'Payment Rail & Mojaloop Security', desc: 'Security architecture and compliance assessments for national payment switches, mobile money interoperability platforms, and Mojaloop deployments against central bank and PCI-DSS standards.' },
              { num: '03', title: 'DPI Threat Modelling', desc: 'Conducting comprehensive threat modelling tailored to the DPI context, addressing insider threats during registration, biometric spoofing, and advanced persistent threats targeting core infrastructure.' },
              { num: '04', title: 'Data Privacy & Encryption Design', desc: 'Architecting robust data protection mechanisms. Implementing end-to-end encryption, tokenisation of demographic data, and secure biometric template storage to ensure citizen privacy.' },
              { num: '05', title: 'Open-Source DPI Supply Chain Security', desc: 'Assuring the software supply chain of open-source DPI components. Conducting source code reviews, managing dependencies, and establishing secure build pipelines for sovereign deployments.' },
              { num: '06', title: 'Relying Party Trust Frameworks', desc: 'Designing the security and authentication protocols (e.g., OIDC, mutual TLS) for integrating third-party relying parties (banks, telcos, government portals) securely into the DPI ecosystem.' },
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
            <h2>DPI security methodologies.</h2>
          </div>
          <div className="standards-grid">
            {['GovStack Security Building Blocks', 'G20 DPI Safeguards', 'DPGA (Digital Public Goods Alliance) Standards', 'ISO/IEC 27001', 'NIST SP 800-63 (Digital Identity Guidelines)', 'MOSIP Security Guidelines'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Connected sectors &amp; services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/sectors/digital-platforms"><h4>DPI Sector Experience</h4><p>Our track record delivering security advisory across global DPI programmes.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/secure-architecture"><h4>Secure Architecture Review</h4><p>Applying fundamental secure design principles to population-scale platforms.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/sectors/government-public-sector"><h4>Government &amp; Public Sector</h4><p>Navigating the regulatory and governance context of public sector deployments.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>DPI secures citizen trust. We secure the DPI.</h2>
            <p>Speak with practitioners who have secured MOSIP and national identity deployments across Africa, Asia, and the Pacific.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/sectors/digital-platforms">DPI Sector Experience</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
