import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function CyberTVEM() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Cybersecurity &amp; Compliance · 06</div>
            <h1 className="svc-h1 reveal">Threat &amp; Vulnerability Management (TVEM)</h1>
            <p className="svc-lede reveal">
              Vulnerability scanning produces lists; vulnerability management reduces risk. We deliver comprehensive Threat &amp; Vulnerability Exposure Management (TVEM) programmes that move beyond CVSS scores. By correlating threat intelligence, business context, and attack surface discovery, we help organisations prioritise and remediate the vulnerabilities that actually matter before they can be exploited.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Vulnerability Gap</span>
              <h2>If everything is critical, nothing is.</h2>
              <p>Most organisations are drowning in vulnerability reports. A standard enterprise scan can reveal tens of thousands of vulnerabilities, many with "Critical" CVSS scores. IT teams cannot patch everything. Without context — is the asset internet-facing? Is there an active exploit in the wild? Does the system hold sensitive data? — remediation is a guessing game.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'The CVSS illusion', desc: 'The Common Vulnerability Scoring System (CVSS) measures severity, not risk. A critical vulnerability on an isolated, air-gapped system poses less risk than a medium vulnerability on a public-facing web server.' },
                { title: 'Shadow IT and unknown assets', desc: 'You cannot patch what you do not know exists. Rapid cloud adoption and decentralized procurement create a sprawling attack surface of unmanaged assets.' },
                { title: 'The speed of exploitation', desc: 'The window between a vulnerability being announced (CVE publication) and adversaries actively exploiting it has shrunk from weeks to hours. Monthly scanning cycles are too slow to defend against modern threats.' },
                { title: 'Friction between Security and IT', desc: 'Security teams throw massive PDF reports over the fence to IT operations, expecting immediate patching without considering system uptime or testing requirements. This creates operational friction.' },
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
            <h2>Threat &amp; Vulnerability Management — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Attack Surface Management (ASM)', desc: 'Continuous discovery and monitoring of your external attack surface (domains, IPs, cloud storage, exposed APIs, leaked credentials) to identify shadow IT and exposed assets before attackers do.' },
              { num: '02', title: 'Risk-Based Prioritisation', desc: 'Implementing Risk-Based Vulnerability Management (RBVM). Correlating vulnerabilities with Exploit Prediction Scoring System (EPSS) data, threat intelligence, and asset criticality to prioritise remediation.' },
              { num: '03', title: 'Continuous Vulnerability Scanning', desc: 'Deploying and configuring continuous scanning architectures (credentialed internal scans, external scans, agent-based cloud monitoring) to provide real-time visibility into the vulnerability landscape.' },
              { num: '04', title: 'Patch Management Integration', desc: 'Bridging the gap between Security and IT Operations. Integrating vulnerability data directly into IT ticketing systems (e.g., Jira, ServiceNow) and establishing SLA-driven patching workflows.' },
              { num: '05', title: 'Zero-Day Response Playbooks', desc: 'Developing rapid-response procedures for handling critical zero-day vulnerabilities (e.g., Log4j, MOVEit). Defining processes for immediate triage, temporary mitigation, and emergency patching.' },
              { num: '06', title: 'Penetration Testing Integration', desc: 'Combining automated vulnerability scanning with manual penetration testing (Validation) to confirm whether identified vulnerabilities are actually exploitable in your specific environment.' },
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
            <h2>Vulnerability management methodologies.</h2>
          </div>
          <div className="standards-grid">
            {['CIS Critical Security Control 7 (Continuous Vulnerability Management)', 'EPSS (Exploit Prediction Scoring System)', 'CVSS v4.0', 'NIST SP 800-40 Rev. 4', 'CTI (Cyber Threat Intelligence) Integration'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/platform/security-testing"><h4>Penetration Testing</h4><p>Validating whether the vulnerabilities identified by TVEM can actually be exploited.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/managed-security"><h4>Managed Security &amp; MDR</h4><p>Monitoring the network for exploitation attempts against known unpatched vulnerabilities.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/supply-chain"><h4>Software Supply Chain Security</h4><p>Extending vulnerability management into the application dependencies (SCA).</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Stop patching everything. Start patching what matters.</h2>
            <p>Speak with specialists who build vulnerability management programmes driven by threat intelligence, not just CVSS scores.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/platform/security-testing">Penetration Testing Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
