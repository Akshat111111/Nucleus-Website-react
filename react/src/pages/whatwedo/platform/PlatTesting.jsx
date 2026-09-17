import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function PlatTesting() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Digital Platform Trust · 05</div>
            <h1 className="svc-h1 reveal">Security Testing &amp; Penetration Testing</h1>
            <p className="svc-lede reveal">
              Automated scanners find known vulnerabilities; human intelligence finds complex logic flaws. We deliver rigorous, intelligence-led penetration testing across web applications, APIs, mobile platforms, and network infrastructure. Our assessments move beyond compliance checklists to simulate real-world adversarial attacks, validating the true resilience of your digital platforms.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Testing Gap</span>
              <h2>A vulnerability scan is not a penetration test.</h2>
              <p>Many organisations confuse automated scanning with penetration testing. Scanners are essential for catching low-hanging fruit, but they cannot chain vulnerabilities together, understand business logic flaws, or assess the impact of a multi-stage attack. True security testing requires the creativity and methodology of an experienced attacker.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Business logic flaws', desc: 'Automated tools cannot understand the context of an application. They cannot tell if a user modifying a parameter to alter the price of an item in a shopping cart is a valid action or a critical exploit.' },
                { title: 'API abuse and blind spots', desc: 'Modern applications are API-driven. Traditional web scanners often fail to properly authenticate, discover hidden endpoints, or identify complex Broken Object Level Authorization (BOLA) vulnerabilities.' },
                { title: 'Vulnerability chaining', desc: 'A low-severity information disclosure combined with a medium-severity misconfiguration can lead to a critical remote code execution. Only human testers identify these complex exploit chains.' },
                { title: 'Commoditised reporting', desc: 'Penetration testing reports that simply regurgitate scanner outputs fail to provide actionable context, risk ratings aligned to business impact, or practical remediation advice for developers.' },
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
            <h2>Security Testing — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Web Application Penetration Testing', desc: 'Deep-dive manual testing of web applications against OWASP Top 10 and beyond. Focusing on complex logic flaws, authentication bypasses, and injection vulnerabilities that scanners miss.' },
              { num: '02', title: 'API Security Testing', desc: 'Specialist assessment of REST, GraphQL, and SOAP APIs. Rigorous testing for authorization failures (BOLA/IDOR), rate limiting bypasses, and data exposure across complex microservice architectures.' },
              { num: '03', title: 'Mobile Application Penetration Testing', desc: 'Comprehensive testing of iOS and Android applications. Assessing local data storage, IPC mechanisms, certificate pinning, and backend API interactions.' },
              { num: '04', title: 'Network Infrastructure Testing', desc: 'Internal and external penetration testing of network infrastructure. Identifying misconfigurations, unpatched systems, and weak protocols to prevent lateral movement and privilege escalation.' },
              { num: '05', title: 'Cloud Configuration Review', desc: 'Detailed security assessment of AWS, Azure, and GCP environments. Identifying permissive IAM roles, exposed storage buckets, and architectural flaws using CIS Benchmarks.' },
              { num: '06', title: 'Actionable Remediation Reporting', desc: 'Clear, developer-friendly reporting. We provide precise reproduction steps, risk ratings contextualised to your business, and practical remediation guidance, followed by a re-test phase to verify fixes.' },
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
            <h2>Testing methodologies we employ.</h2>
          </div>
          <div className="standards-grid">
            {['OWASP Web Security Testing Guide (WSTG)', 'OWASP API Security Top 10', 'OWASP Mobile Security Testing Guide (MASTG)', 'PTES (Penetration Testing Execution Standard)', 'OSSTMM', 'CIS Benchmarks'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Connected Platform &amp; Cyber services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/platform/devsecops"><h4>DevSecOps Transformation</h4><p>Integrating automated testing to catch low-hanging fruit before manual pentesting.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/tvem"><h4>Threat &amp; Vulnerability Management</h4><p>Continuous attack surface monitoring between point-in-time penetration tests.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/secure-architecture"><h4>Secure Architecture Review</h4><p>Addressing the root causes of vulnerabilities identified during penetration testing.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Find the flaws before the adversaries do.</h2>
            <p>Speak with a testing team that moves beyond automated scans to uncover complex, high-impact vulnerabilities.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/cyber/tvem">Continuous Vulnerability Management</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
