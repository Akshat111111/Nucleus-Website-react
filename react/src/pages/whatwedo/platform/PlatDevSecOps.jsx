import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function PlatDevSecOps() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Digital Platform Trust · 02</div>
            <h1 className="svc-h1 reveal">DevSecOps Transformation</h1>
            <p className="svc-lede reveal">
              Security should not be a gatekeeper at the end of the deployment pipeline; it must be an invisible guardrail embedded throughout. We transform engineering cultures and CI/CD pipelines — implementing secure coding standards, automating security testing (SAST/DAST), building security champions programmes, and turning security into a developer enabler rather than a blocker.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The DevSecOps Gap</span>
              <h2>Tooling alone does not create DevSecOps.</h2>
              <p>Buying a SAST tool and turning on every rule does not improve security; it creates alert fatigue, alienates the development team, and causes security scans to be bypassed. True DevSecOps requires aligning security tooling with developer workflows, tuning rules for relevance, and building a culture where developers understand and own security outcomes.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Friction in the pipeline', desc: 'When security scans take hours to run or produce thousands of false positives, they break the CI/CD flow. Security must operate at the speed of development to be effective.' },
                { title: 'The developer/security disconnect', desc: 'Security teams often mandate requirements without understanding the engineering context. This creates an adversarial relationship where security is seen as a compliance hurdle rather than a quality metric.' },
                { title: 'Lack of secure coding knowledge', desc: 'Developers are measured on feature delivery, not secure coding. Without context-specific training and easily accessible secure coding guidelines, vulnerabilities are continuously re-introduced.' },
                { title: 'Inconsistent security practices', desc: 'Without automated guardrails, security relies on manual code reviews, leading to inconsistent application of security standards across different teams and microservices.' },
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
            <h2>DevSecOps Transformation — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'CI/CD Pipeline Integration', desc: 'Integrating and tuning automated security testing (SAST, DAST, SCA, IAST) seamlessly into CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins), ensuring fast feedback loops for developers.' },
              { num: '02', title: 'Security Champions Programme', desc: 'Designing and launching Security Champions programmes that empower developers to act as security advocates within their squads, scaling the reach of the central security team.' },
              { num: '03', title: 'Secure Coding Standards', desc: 'Developing practical, language-specific secure coding guidelines (e.g., for React, Node, Java, Go) aligned to OWASP standards, providing developers with clear "how-to" security guidance.' },
              { num: '04', title: 'DevSecOps Maturity Assessment', desc: 'Assessing your current SDLC against frameworks like OWASP SAMM or BSIMM, identifying friction points, and defining a roadmap for DevSecOps maturity.' },
              { num: '05', title: 'Developer Security Training', desc: 'Delivering hands-on, context-specific security training for engineering teams — moving beyond compliance videos to practical exercises on mitigating vulnerabilities in their specific tech stack.' },
              { num: '06', title: 'Threat Modelling as Code', desc: 'Implementing lightweight, developer-friendly threat modelling processes that fit into Agile sprints, allowing teams to identify risks during feature planning rather than post-release.' },
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
            <h2>DevSecOps methodologies.</h2>
          </div>
          <div className="standards-grid">
            {['OWASP SAMM', 'BSIMM', 'NIST SSDF', 'OWASP Top 10', 'OWASP ASVS', 'GitOps Security Principles'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/platform/code-trust"><h4>Code Trust &amp; Supply Chain</h4><p>Securing the integrity of the build process and dependencies within the pipeline.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/deployment"><h4>Secure Deployment &amp; Ops</h4><p>Extending DevSecOps practices into the runtime and deployment environments.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/security-testing"><h4>Security Testing</h4><p>Complementing automated pipeline checks with deep-dive manual penetration testing.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Make security the path of least resistance for developers.</h2>
            <p>Speak with specialists who build DevSecOps pipelines that engineers actually want to use.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">Our Platform Frameworks</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
