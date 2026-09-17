import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function PlatPaxley() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Digital Platform Trust · Technology</div>
            <h1 className="svc-h1 reveal">Paxley — Continuous Platform Trust</h1>
            <p className="svc-lede reveal">
              Paxley is the Nucleus Systems technology product for continuous code-security monitoring and supply chain assurance. Built to operationalise the N3-CTAF framework, Paxley automates the ingestion of SBOMs, processes VEX data, integrates vulnerability intelligence, and delivers continuous trust scoring for your entire software portfolio — turning static compliance artifacts into dynamic operational security.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Request a Paxley Demo <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/platform/code-trust">The CTAF Methodology <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Automation Gap</span>
              <h2>An SBOM in a PDF does not secure your supply chain.</h2>
              <p>Regulatory frameworks like the Cyber Resilience Act mandate Software Bill of Materials (SBOM) generation. Most organisations treat this as a compliance tick-box, generating static JSON or PDF files that sit unread. Without a technology platform to ingest, analyse, and operationalise these artifacts against real-time threat intelligence, the security value of supply chain transparency is entirely lost.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Artifact scale and complexity', desc: 'A modern enterprise portfolio generates thousands of SBOMs, each containing thousands of dependencies. Manually parsing these for a newly announced critical vulnerability (like Log4j) is impossible.' },
                { title: 'The false positive avalanche', desc: 'Basic SCA tools flag every known CVE in a dependency tree. However, a vulnerability is often not exploitable in the specific context of the application. Alert fatigue paralyzes remediation teams.' },
                { title: 'Point-in-time limitations', desc: 'An SBOM represents the state of software at the moment it was built. Vulnerability intelligence changes daily. Continuous monitoring is required to match static builds against emerging threats.' },
                { title: 'Lack of quantified trust', desc: 'Without a unified platform, security leadership cannot answer a simple question: "What is the quantified supply chain risk of our most critical application today?"' },
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
            <span className="eyebrow">Paxley Capabilities</span>
            <h2>Operationalising supply chain security.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Automated Artifact Ingestion', desc: 'Seamless API integration with CI/CD pipelines to automatically ingest standard SBOM formats (CycloneDX, SPDX) and VEX data at build time, maintaining a live inventory of all software components.' },
              { num: '02', title: 'Continuous Vulnerability Mapping', desc: 'Continuous correlation of ingested SBOM data against global vulnerability databases (NVD, OSV, proprietary feeds). When a new CVE is published, Paxley identifies exposed applications instantly.' },
              { num: '03', title: 'VEX-Driven Risk Prioritisation', desc: 'Ingestion and processing of Vulnerability Exploitability eXchange (VEX) data to suppress false positives. Paxley filters out vulnerabilities that are present but not exploitable, focusing remediation efforts.' },
              { num: '04', title: 'Dynamic Code Trust Scoring', desc: 'Algorithmic calculation of trust scores based on the N3-CTAF methodology. Scoring incorporates vulnerability severity, dependency health, license risk, and SLSA provenance levels.' },
              { num: '05', title: 'Compliance & Audit Reporting', desc: 'Automated generation of compliance reports aligned with the EU Cyber Resilience Act (CRA) and US Executive Order requirements, providing verifiable proof of supply chain monitoring.' },
              { num: '06', title: 'Incident Response Acceleration', desc: 'In the event of a zero-day supply chain attack, Paxley provides IR teams with immediate, enterprise-wide visibility into which applications contain the compromised dependency.' },
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
            <span className="eyebrow">Supported Standards</span>
            <h2>Built on open standards.</h2>
          </div>
          <div className="standards-grid">
            {['CycloneDX (SBOM & VEX)', 'SPDX', 'CSAF (Common Security Advisory Framework)', 'Open Source Vulnerability (OSV)', 'SLSA Provenance Attestations', 'N3-CTAF'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Services that implement Paxley</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/platform/code-trust"><h4>Code Trust Assurance Framework</h4><p>The strategic framework (N3-CTAF) that Paxley operationalises in software.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/supply-chain"><h4>Software Supply Chain Security</h4><p>The broader advisory service that guides the deployment and use of Paxley.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/paxley"><h4>Paxley Product Page</h4><p>Detailed technical specifications and integration capabilities of the platform.</p><span className="arr-link">View Paxley details →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Turn compliance artifacts into operational security intelligence.</h2>
            <p>Request a demonstration to see how Paxley provides continuous visibility and trust scoring across your software portfolio.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Request a Demo <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/platform/code-trust">Explore N3-CTAF</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
