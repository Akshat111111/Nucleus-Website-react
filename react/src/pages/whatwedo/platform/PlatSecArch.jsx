import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function PlatSecArch() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Digital Platform Trust · 01</div>
            <h1 className="svc-h1 reveal">Secure Architecture Review</h1>
            <p className="svc-lede reveal">
              Security debt incurred during the design phase is the most expensive to remediate in production. We deliver threat-informed architecture reviews and security design advisory using our N3-SSAF framework — ensuring your platforms are built on zero-trust principles, resilient by design, and aligned with enterprise security standards before a single line of code is written.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Architecture Gap</span>
              <h2>You cannot patch your way out of a fundamentally flawed architecture.</h2>
              <p>Most critical vulnerabilities are not coding errors; they are design flaws. Insufficient isolation, implicit trust between microservices, weak authentication flows, and flawed data models cannot be fixed with a firewall or a Web Application Firewall (WAF). They require architectural remediation, which is exponentially more costly post-deployment.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Implicit trust models', desc: 'Legacy architectures often assume trust once inside the network perimeter. Modern platforms require Zero Trust architectures, where every service-to-service communication is authenticated and authorised.' },
                { title: 'Microservice complexity', desc: 'Transitioning to microservices increases the attack surface. Without proper architectural patterns (e.g., API gateways, service meshes, mutual TLS), distributed systems become distributed liabilities.' },
                { title: 'Data exposure by design', desc: 'Failing to implement data classification, segregation, and encryption at the architectural level means a single compromise can lead to catastrophic data loss.' },
                { title: 'The cost of late remediation', desc: 'Identifying a fundamental security flaw during a pre-release penetration test often causes release delays and requires significant engineering rework. Security must shift entirely left to the design phase.' },
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
            <h2>Secure Architecture — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Threat Modelling', desc: 'Structured threat modelling (e.g., STRIDE) conducted during the design phase to identify potential attack vectors, enumerate threats, and define required security controls before development begins.' },
              { num: '02', title: 'Architecture Security Review', desc: 'Comprehensive review of existing or proposed architectures against the N3-SSAF framework. Evaluating authentication flows, network segmentation, data protection, and resilience.' },
              { num: '03', title: 'Zero Trust Design Advisory', desc: 'Designing architectures based on Zero Trust principles — implementing least privilege, continuous authentication, micro-segmentation, and secure service-to-service communication.' },
              { num: '04', title: 'Cloud-Native Security Architecture', desc: 'Specialist advisory for securing cloud-native architectures (containers, Kubernetes, serverless) across AWS, Azure, and GCP, ensuring the infrastructure aligns with the application\'s security needs.' },
              { num: '05', title: 'Identity & Access Architecture', desc: 'Designing robust identity fabrics — integrating SSO, MFA, OAuth 2.0/OIDC, and RBAC/ABAC models to ensure secure access for users, APIs, and microservices.' },
              { num: '06', title: 'Security Pattern Library Development', desc: 'Creating reusable, approved security design patterns (e.g., secure authentication, data encryption, logging) that development teams can readily implement, accelerating secure development.' },
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
            <span className="eyebrow">Framework: N3-SSAF v1.0</span>
            <h2>The Nucleus Secure Software Architecture Framework.</h2>
            <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.75 }}>End-to-end architecture assurance · Design patterns · Risk scoring · Threat-informed</p>
          </div>
          <div className="standards-grid">
            {['ISO/IEC 27034 (Application Security)', 'NIST SP 800-160 v1', 'OWASP SAMM (Design)', 'Zero Trust Architecture (NIST SP 800-207)', 'SABSA Framework'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/platform/devsecops"><h4>DevSecOps Transformation</h4><p>Translating secure architecture into secure coding practices and CI/CD pipelines.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/cloud-infra"><h4>Cloud &amp; Infrastructure Security</h4><p>Securing the underlying cloud environments where the architecture is deployed.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/security-testing"><h4>Security Testing</h4><p>Validating that the implemented system actually adheres to the secure design.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Secure design is the ultimate shift-left.</h2>
            <p>Speak with an architect who designs platforms resilient to both current threats and future scale.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">N3-SSAF Framework</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
