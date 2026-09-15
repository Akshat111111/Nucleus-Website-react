import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function IndFintech() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Industries · Fintech &amp; Payments</div>
            <h1 className="svc-h1 reveal">Regulated disruptors building trust at speed — in markets that demand it.</h1>
            <p className="svc-lede reveal">
              Fintechs, payment operators, mobile money platforms and neobanks face the full weight of financial services regulation — PCI DSS, FCA, PRA, DORA, AML/CTF — while moving at the speed of a technology company. In emerging markets, they also face GSMA mobile money security requirements, central bank DFS frameworks, and the specific risks of serving the next billion users through agent banking networks and last-mile digital financial services.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/industries">All Industries <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why This Sector Is Different</span>
              <h2>Financial services regulation at technology company speed — with emerging market complexity.</h2>
              <p>Fintechs and payment operators carry a double burden: the full regulatory obligation of a financial institution, and the delivery pace expectations of a technology business. In emerging markets, this is compounded by fragmented regulatory environments, last-mile infrastructure risk, and the novel threat landscape of mobile money and agent banking at scale.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'PCI DSS v4 — payment card data obligations', desc: 'PCI DSS v4 introduces new continuous compliance monitoring, customised implementation and targeted risk analysis requirements. Fintech payment processors and facilitators face complex scoping decisions and evidence obligations.' },
                { title: 'FCA/PRA & EMI authorisation', desc: 'Electronic money institutions and payment service providers need FCA/PRA authorisation with demonstrable SYSC and operational resilience capability. Security is a regulatory prerequisite, not an operational choice.' },
                { title: 'GSMA mobile money security — emerging markets', desc: 'GSMA Mobile Money Security Guidelines cover 10 security domains critical for mobile money operators serving last-mile users through agent networks in Africa, Asia and the Pacific. Most security advisors have not worked in these markets.' },
                { title: 'Financial crime and AML exposure', desc: 'Fintechs operating at transaction scale face significant AML/CTF exposure — especially in emerging markets with high cash dependency, agent network fraud vectors, and evolving FATF R.15 digital asset requirements.' },
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
            <h2>What we bring to fintech and payment operators.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'PCI DSS v4 Compliance Programme', desc: 'Scoping, gap assessment, control implementation and QSA-ready evidence package for PCI DSS v4. Covers customised implementation pathway, continuous monitoring requirements, and SAQ/ROC preparation for payment facilitators and processors.', link: '/services/cybersecurity-advisory' },
              { num: '02', title: 'Payment Security Architecture', desc: 'Security architecture review for payment products — API security, tokenisation, HSM integration, fraud detection architecture, 3DS implementation and open banking API security for FCA-regulated payment services.', link: '/services/digital-infrastructure' },
              { num: '03', title: 'FCA/PRA Regulatory Readiness', desc: 'SYSC operational resilience, CASS safeguarding controls, payment system access risk management and FCA/PRA authorisation security evidence pack. EMI and PSP regulatory readiness from a practitioner security perspective.', link: '/services/cybersecurity-advisory' },
              { num: '04', title: 'Mobile Money & Agent Banking Security', desc: 'GSMA Mobile Money Security Guidelines assessment across all 10 security domains. Specific coverage for agent network fraud controls, KYC security, mobile channel encryption and last-mile DFS risk in emerging markets.', link: '/services/digital-infrastructure' },
              { num: '05', title: 'Penetration Testing', desc: 'Application, API and infrastructure penetration testing for fintech products — producing the current test report that banking partners, enterprise customers and FCA/PRA regulatory applications require.', link: '/services/penetration-testing' },
              { num: '06', title: 'M&A for Fintech', desc: 'Cyber due diligence for fintech transactions — regulatory licence risk, payment system security, PCI DSS cardholder data exposure and open banking API security risk. Buy-side and sell-side expertise.', link: '/ma/due-diligence' },
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

      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Regulatory Frameworks</span>
            <h2>Fintech and payments standards we work to.</h2>
          </div>
          <div className="standards-grid">
            {['PCI DSS v4.0', 'FCA SYSC / Operational Resilience', 'PRA Rules', 'DORA', 'GSMA Mobile Money Security', 'ISO 20022', 'SWIFT CSP', 'FATF R.15 / R.16', 'Central Bank DFS Frameworks', 'Open Banking / PSD2 Security'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Fintech security that keeps pace with your growth — and your regulators.</h2>
            <p>Speak with a practitioner who has worked across regulated fintech, payment operators and mobile money platforms in developed and emerging markets.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/industries">All Industries</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
