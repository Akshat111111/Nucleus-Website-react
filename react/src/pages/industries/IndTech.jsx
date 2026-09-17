import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function IndTech() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Industries · Technology &amp; SaaS</div>
            <h1 className="svc-h1 reveal">Security posture that enterprise buyers, boards and investors can trust.</h1>
            <p className="svc-lede reveal">
              Technology and SaaS companies face a unique security challenge: proving trustworthiness to enterprise customers who run detailed vendor security assessments, to investors who conduct technical diligence, and to regulators who treat software supply chain risk as a systemic concern. The security story must be credible — and the evidence must be real.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/sectors">All Sectors <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why This Sector Is Different</span>
              <h2>Trust is a product feature — and your largest customers know how to test it.</h2>
              <p>Enterprise software buyers now run detailed vendor security assessments as a standard procurement step. Failing a security questionnaire, not having a current penetration test report, or lacking ISO 27001 certification blocks deals that took months to develop. Security is no longer optional infrastructure — it is a sales-critical capability.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Enterprise sales blocked by security questionnaires', desc: 'Bank, insurer, government and large enterprise procurement processes include mandatory security vendor assessments. Companies without documented security programmes, penetration test reports, and ISO 27001 or SOC 2 routinely fail.' },
                { title: 'Investor diligence on security architecture', desc: 'Series B+ investors and strategic acquirers conduct technical security diligence as standard. Poor security architecture, technical debt, and absence of a security programme are material findings that affect valuation and deal terms.' },
                { title: 'Software supply chain regulation', desc: 'NIS2, DORA and the EU Cyber Resilience Act impose security obligations on software vendors whose products are used in critical or regulated environments. SaaS providers selling into financial services and government face regulatory obligations they may not yet track.' },
                { title: 'AI product security and governance', desc: 'AI product companies face compounding requirements: EU AI Act high-risk classification, enterprise buyer AI procurement requirements, and the specific security architecture challenges of LLM, RAG and agentic AI products.' },
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
            <span className="eyebrow">Services Most Relevant to This Sector</span>
            <h2>What we bring to technology and SaaS companies.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Penetration Testing & Technical Validation', desc: 'Application, API, cloud and infrastructure penetration testing — producing the current test report that enterprise procurement requires. Scoped to your product architecture, not a generic template.', link: '/services/penetration-testing' },
              { num: '02', title: 'ISO 27001 & SOC 2 Readiness', desc: 'Readiness programme scoped to your actual environment. Gap assessment, control implementation, evidence management and certification preparation — not a 200-control generic programme.', link: '/services/cybersecurity-advisory' },
              { num: '03', title: 'Secure Software & DevSecOps', desc: 'SAST, SCA, DAST, IaC security, container security and secrets management — integrated into your development pipeline, not bolted on at the end. DevSecOps maturity assessment and programme development.', link: '/services/secure-software' },
              { num: '04', title: 'AI Security Architecture', desc: 'Security architecture for AI and LLM products — prompt injection, RAG pipeline security, model supply chain risk, agentic AI trust boundaries and the EU AI Act security requirements for high-risk AI systems.', link: '/services/ai-security' },
              { num: '05', title: 'Fractional CISO', desc: 'Senior security leadership providing the CISO accountability that enterprise customers and investors expect — without the permanent headcount cost. Structured to scale with your growth trajectory.', link: '/services/fractional-ciso' },
              { num: '06', title: 'M&A Sell-Side Preparation', desc: 'Pre-acquisition security preparation — identifying and remediating technical debt before buyer diligence, building the evidence pack, and preparing the security narrative for a strategic sale process.', link: '/ma/sell-side' },
            ].map((s, i) => (
              <Link className="svc-what-card reveal" to={s.link} key={i} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title">{s.title}</h3>
                <p className="svc-what-desc">{s.desc}</p>
                <span className="arr-link" style={{ marginTop: '12px', display: 'block' }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Security that unblocks growth — not just protects the perimeter.</h2>
            <p>Speak with a practitioner who understands the commercial reality of building security into a technology business at scale.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/sectors">All Sectors</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
