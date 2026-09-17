import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function PlatCodeTrust() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Digital Platform Trust · 03</div>
            <h1 className="svc-h1 reveal">Code Trust &amp; Supply Chain</h1>
            <p className="svc-lede reveal">
              In a landscape where supply chain compromises are the primary vector for advanced adversaries, trust in code must be verifiable, not assumed. We implement the Nucleus Code Trust Assurance Framework (N3-CTAF) to establish cryptographically verifiable provenance across your entire software lifecycle — ensuring that what is deployed is exactly what was built, and what was built is exactly what was committed.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/digital-platform-trust">All Platform Services <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Trust Gap</span>
              <h2>If you cannot cryptographically verify your build, you cannot trust your software.</h2>
              <p>The SolarWinds and XZ Utils compromises demonstrated that adversaries are shifting their focus from exploiting vulnerabilities in production to injecting malicious code during the build process. If an attacker compromises your CI/CD pipeline or a third-party dependency, traditional SAST and DAST tools will not detect the intrusion. Trust requires cryptographic proof of provenance.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Build environment compromise', desc: 'Attackers targeting build servers or CI runners can modify source code during compilation. Without reproducible builds and cryptographic signing, these modifications go undetected into production.' },
                { title: 'Dependency poisoning', desc: 'Typosquatting, dependency confusion, and account takeovers of open-source maintainers allow attackers to inject malicious code via trusted third-party libraries.' },
                { title: 'Lack of provenance', desc: 'Most organisations cannot definitively prove where a specific binary running in production originated, who built it, or what dependencies it contains. This violates zero-trust principles.' },
                { title: 'Regulatory pressure (CRA & SBOM)', desc: 'The EU Cyber Resilience Act (CRA) and US Executive Orders mandate Software Bill of Materials (SBOM) and verifiable supply chain security for critical software providers.' },
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
            <h2>Code Trust Assurance — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'N3-CTAF Implementation', desc: 'End-to-end implementation of the Code Trust Assurance Framework (SLSA aligned). Establishing verifiable trust boundaries across source, build, and deployment environments.' },
              { num: '02', title: 'Cryptographic Code Signing', desc: 'Implementing robust code signing architectures using tools like Sigstore, enabling developers to sign commits and CI pipelines to sign artifacts with ephemeral, verifiable keys.' },
              { num: '03', title: 'SBOM & VEX Generation', desc: 'Automating the generation, validation, and storage of Software Bill of Materials (SBOM) and Vulnerability Exploitability eXchange (VEX) documents for every build.' },
              { num: '04', title: 'Build Integrity Controls', desc: 'Hardening CI/CD environments. Implementing ephemeral build runners, secure secret management, build provenance attestation, and steps towards reproducible builds.' },
              { num: '05', title: 'Dependency Risk Management', desc: 'Establishing policies and technical controls (e.g., internal registries, automated dependency updating, SCA tooling) to mitigate the risk of consuming compromised open-source components.' },
              { num: '06', title: 'Paxley Integration', desc: 'Deploying Paxley — our continuous platform trust technology — to monitor SBOMs, process VEX data, and provide continuous trust scoring for your software portfolio.' },
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
            <span className="eyebrow">Framework: N3-CTAF v1.0</span>
            <h2>The Nucleus Code Trust Assurance Framework.</h2>
            <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.75 }}>86 controls · 6 domains · CTA-1→4 certification · Cryptographically verifiable</p>
          </div>
          <div className="standards-grid">
            {['SLSA (Supply-chain Levels for Software Artifacts)', 'NIST SSDF (SP 800-218)', 'Sigstore', 'CycloneDX / SPDX', 'Cyber Resilience Act (CRA)', 'CIS Software Supply Chain Security Guide'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Connected Platform services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/platform/paxley"><h4>Paxley Technology</h4><p>Continuous monitoring of code trust, SBOMs, and supply chain integrity.</p><span className="arr-link">Explore Paxley →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/supply-chain"><h4>Software Supply Chain Security</h4><p>Managing the operational risks of open-source and third-party dependencies.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/deployment"><h4>Secure Deployment &amp; Ops</h4><p>Validating signatures and provenance before allowing execution in production.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Trust in software should not require faith. It requires cryptographic proof.</h2>
            <p>Speak with specialists who build SLSA-aligned pipelines and implement verifiable code trust.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">N3-CTAF Framework</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
