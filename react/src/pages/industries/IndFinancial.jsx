import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function IndFinancial() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Industries · Financial Services</div>
            <h1 className="svc-h1 reveal">Where a trust failure triggers systemic regulatory action.</h1>
            <p className="svc-lede reveal">
              Banks, insurers, asset managers and central banks operate under the most demanding cyber and operational resilience frameworks in the world — DORA, NIS2, FCA, PRA, PCI DSS and sector-specific central bank requirements. A single material incident is not just a security event; it is a regulatory, reputational and capital event. We bring practitioners who have worked inside tier-one financial institutions, not advisors who assess them from the outside.
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
              <h2>Regulatory failure is the primary consequence — not just a breach.</h2>
              <p>Financial services organisations face a unique risk profile: regulatory sanction, licence revocation, capital impact and reputational damage can each flow from a single cyber incident, independently of the operational harm. The regulatory framework is the risk — and it is tightening.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'DORA — operational resilience obligation', desc: 'EU DORA applies from January 2025 across EU financial entities. ICT risk management, incident reporting (4-hour initial), TLPT testing and third-party risk governance are all mandatory — and NCA-supervised.' },
                { title: 'FCA & PRA — senior manager accountability', desc: 'Senior Manager accountability under SMCR means a named individual is personally liable for operational resilience and cyber risk management. The regulator expects demonstrable CISO-level accountability.' },
                { title: 'PCI DSS v4 — payment card data obligations', desc: 'PCI DSS v4 introduces significant new requirements — customised implementation, continuous monitoring, targeted risk analysis. Compliance evidence must now be continuous, not point-in-time.' },
                { title: 'M&A — cyber risk in financial sector transactions', desc: 'Financial services M&A carries sector-specific cyber risk: regulatory licence transfer, PII data obligations on acquisition, and technology integration risk in core banking and payment systems.' },
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
            <h2>What we bring to financial services organisations.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'DORA Compliance Programme', desc: 'ICT risk management framework, incident classification and reporting (4h/24h/72h), TLPT preparation, third-party ICT risk register, and regulatory evidence package. Scoped to your DORA designation and NCA requirements.', link: '/services/operational-resilience' },
              { num: '02', title: 'Cybersecurity Maturity Assessment', desc: 'Structured maturity assessment against financial sector standards — FCA/PRA expectations, DORA ICT risk management, NIS2, ISO 27001. Gap report and improvement roadmap in board-ready format.', link: '/services/cybersecurity-advisory' },
              { num: '03', title: 'Fractional / Interim CISO', desc: 'Senior security leadership with FCA/PRA regulatory experience — providing named CISO accountability, board reporting, and regulator liaison for firms without a full-time CISO appointment.', link: '/services/fractional-ciso' },
              { num: '04', title: 'Penetration Testing & TLPT', desc: 'Intelligence-led penetration testing aligned to TIBER-EU and CBEST frameworks for systemically important institutions. Standard penetration testing for all other financial services firms.', link: '/services/penetration-testing' },
              { num: '05', title: 'M&A Cyber Due Diligence', desc: 'Buy-side diligence for financial services acquisitions — regulatory licence risk, core banking and payment system security, PII obligations, and technology integration risk assessment.', link: '/ma/due-diligence' },
              { num: '06', title: 'Operational Resilience & Incident Response', desc: 'DORA incident response capability, NIS2 notification preparation, BCP/DR testing and SOC advisory for financial services environments with strict regulatory notification obligations.', link: '/services/operational-resilience' },
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
            <h2>Financial sector standards we work to.</h2>
          </div>
          <div className="standards-grid">
            {['DORA (EU 2022/2554)', 'NIS2 Directive', 'FCA SYSC / Operational Resilience', 'PRA SS1/21', 'PCI DSS v4.0', 'ISO/IEC 27001:2022', 'TIBER-EU / CBEST', 'SWIFT CSP (CSCF)', 'EBA ICT Risk Guidelines', 'Basel III Op Risk'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Sectors</span>
            <h2>Adjacent to financial services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/sectors/fintech-payments"><h4>Fintech &amp; Payments</h4><p>Regulated disruptors and payment operators in the financial services ecosystem.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/sectors/private-equity"><h4>Private Equity &amp; Investment</h4><p>Deal teams and portfolio companies managing cyber risk through investment cycles.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/sectors/dpi-digital-public-goods"><h4>Digital Public Infrastructure</h4><p>Central bank payment infrastructure and national digital financial systems.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Speak with a practitioner who has worked in financial services — not one who has read about it.</h2>
            <p>Book a briefing to discuss your DORA obligations, FCA/PRA expectations, or security maturity programme.</p>
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
