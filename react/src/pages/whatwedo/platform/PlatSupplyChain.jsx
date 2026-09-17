import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function PlatSupplyChain() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Digital Platform Trust · 04</div>
            <h1 className="svc-h1 reveal">Software Supply Chain Security</h1>
            <p className="svc-lede reveal">
              Modern applications are overwhelmingly assembled from open-source components, not written from scratch. This means you inherit the security posture, maintenance habits, and licensing risks of thousands of external developers. We provide comprehensive Software Supply Chain Security — extending beyond simple vulnerability scanning to manage the true operational risk of your dependencies.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Dependency Gap</span>
              <h2>Vulnerability scanning is not supply chain security.</h2>
              <p>Most organisations rely on basic Software Composition Analysis (SCA) tools that alert on known CVEs. But an unmaintained library without known CVEs is often more dangerous than an actively maintained library with a patched vulnerability. Supply chain security requires assessing the health, provenance, and licensing of the ecosystem you rely upon.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'The maintenance burden', desc: 'Libraries are often abandoned by their creators. Continuing to use "dead" open-source projects creates accumulating technical and security debt that a simple CVE scanner will not flag.' },
                { title: 'Licensing contamination', desc: 'Open-source is not always "free." Incorporating components with restrictive licences (e.g., GPL) into proprietary software can trigger "copyleft" clauses, forcing organisations to release their own source code.' },
                { title: 'Dependency confusion', desc: 'Attackers publish malicious packages to public registries using the same names as internal, private packages. If package managers are misconfigured, they download the malicious external package instead.' },
                { title: 'The Log4j lesson', desc: 'When a critical vulnerability hits a ubiquitous dependency, most organisations spend weeks just trying to determine where they are using it. Lack of component visibility paralyzes incident response.' },
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
            <h2>Software Supply Chain Security — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Advanced SCA & Dependency Health', desc: 'Implementing SCA tooling tuned to identify not just CVEs, but also project health metrics (commit frequency, maintainer activity, issue resolution times) to assess true dependency risk.' },
              { num: '02', title: 'Open Source Licence Compliance', desc: 'Scanning dependencies for restrictive licensing (GPL, AGPL, etc.) and establishing policies to prevent licence contamination that threatens proprietary intellectual property.' },
              { num: '03', title: 'Internal Registry Hardening', desc: 'Configuring private package registries (e.g., Artifactory, Nexus) to prevent dependency confusion attacks and enforce policies on which external packages can be pulled into the build environment.' },
              { num: '04', title: 'SBOM Operationalisation', desc: 'Moving beyond simply generating SBOMs to actually using them — integrating SBOM data into vulnerability management workflows and incident response playbooks for rapid querying.' },
              { num: '05', title: 'Vulnerability Exploitability eXchange (VEX)', desc: 'Implementing VEX to drastically reduce false positives. Documenting when a vulnerable component is present but not actually exploitable due to how it is used in the specific application context.' },
              { num: '06', title: 'Supplier Risk Assessments', desc: 'Evaluating the security posture and software development practices of commercial third-party software vendors to ensure they meet your enterprise security standards.' },
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
            <h2>Supply chain security methodologies.</h2>
          </div>
          <div className="standards-grid">
            {['OpenSSF Scorecard', 'CycloneDX', 'SPDX', 'VEX (Vulnerability Exploitability eXchange)', 'NIST SSDF', 'CIS Software Supply Chain Security Guide'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/platform/code-trust"><h4>Code Trust &amp; Supply Chain</h4><p>The cryptographic verification mechanisms (SLSA) that secure the build process.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/paxley"><h4>Paxley Technology</h4><p>Automated ingestion of SBOMs and VEX data for continuous supply chain monitoring.</p><span className="arr-link">Explore Paxley →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/devsecops"><h4>DevSecOps Transformation</h4><p>Integrating dependency scanning directly into developer workflows and IDEs.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>You are responsible for the code you didn't write.</h2>
            <p>Speak with specialists who manage open-source risk comprehensively, beyond simple CVE scanning.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/platform/code-trust">NS-CTAF Framework</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
