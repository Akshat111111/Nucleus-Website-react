import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function SvcCybersecurity() {
  useReveal()
  return (
    <div id="view-svc">

      {/* Hero */}
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Cybersecurity Strategy, Maturity &amp; Leadership</div>
            <h1 className="svc-h1 reveal">Build a defensible, board-ready cybersecurity posture.</h1>
            <p className="svc-lede reveal">
              We assess how controls operate in practice, score maturity, validate evidence and convert material gaps into a prioritised improvement roadmap — aligned to your regulator, your board and your risk appetite.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/penetration-testing">See Technical Assurance <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Problem */}
      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Problem</span>
              <h2>Most organisations cannot answer the question boards are now asking.</h2>
              <p>Regulators and boards no longer accept a compliance report as evidence of security. They need a measurable, defensible answer to: how mature is our security posture, where are the material gaps, and what is the improvement trajectory?</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Controls exist on paper, not in practice', desc: 'Policies and procedures are documented but controls are not tested, not consistently applied, and not evidenced across 100% of the asset population.' },
                { title: 'No measurable posture', desc: 'Security investment decisions are made without a current-state baseline, making it impossible to demonstrate improvement or prioritise spend against material risk.' },
                { title: 'Board and regulatory blind spots', desc: 'Boards cannot answer: what is our current maturity level, which gaps are material, and what is being done about them?' },
                { title: 'Fragmented compliance programmes', desc: 'Multiple frameworks — NIST CSF, ISO 27001, NIS2, DORA, GDPR — running separately with duplicate evidence and inconsistent findings.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">What We Do</span>
            <h2>Cybersecurity Strategy, Maturity &amp; Leadership</h2>
            <p>We deliver across the full cybersecurity leadership lifecycle — from baseline assessment through to continuous advisory, fractional CISO leadership and managed improvement programmes.</p>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Cybersecurity Maturity Assessment', desc: 'Structured assessment of how controls operate in practice across governance, asset management, protection, detection, response and recovery. Findings scored by maturity level with a prioritised improvement roadmap.' },
              { num: '02', title: 'Security Strategy &amp; Roadmap', desc: 'Three-year security strategy aligned to your risk appetite, regulatory obligations and business objectives. Board-ready roadmap with prioritised investment recommendations.' },
              { num: '03', title: 'Fractional / Virtual / Interim CISO', desc: 'Experienced CISO leadership without the full-time cost. Our practitioners provide strategic security leadership, board reporting, programme oversight and regulatory engagement on a fractional or interim basis.' },
              { num: '04', title: 'Board Cyber Reporting', desc: 'Structured, repeatable board cyber reporting that translates technical posture into business-language risk intelligence. Boards receive what they need: current posture, material gaps and improvement trajectory.' },
              { num: '05', title: 'Regulatory Readiness', desc: 'Gap assessment and remediation planning across NIS2, DORA, ISO 27001, GDPR, PCI DSS and sector-specific regulatory obligations. Single evidence set, not parallel compliance programmes.' },
              { num: '06', title: 'Security Improvement Programmes', desc: 'Structured 90/180/365-day improvement programmes that implement the roadmap, remediate material gaps and build measurable improvement evidence for board and regulatory review.' },
            ].map((s, i) => (
              <div className="svc-what-card reveal" key={i}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="svc-what-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope & Deliverables */}
      <section className="svc-scope section">
        <div className="wrap svc-scope-grid">
          <div className="svc-scope-col reveal">
            <h3>Scope</h3>
            <ul className="svc-list">
              <li>Current-state security posture assessment</li>
              <li>Control effectiveness testing across 6 domains</li>
              <li>Regulatory gap analysis (NIS2, DORA, ISO 27001, GDPR, PCI DSS)</li>
              <li>Risk appetite definition and board alignment</li>
              <li>CISO programme oversight and stakeholder management</li>
              <li>Security policy and governance framework review</li>
              <li>Third-party and supply chain risk assessment</li>
              <li>Vendor and technology strategy advisory</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>What You Receive</h3>
            <ul className="svc-list">
              <li>Maturity score and current-state posture report</li>
              <li>Executive summary and board presentation</li>
              <li>Prioritised improvement roadmap (90-day, 1-year, 3-year)</li>
              <li>Regulatory gap report with remediation priorities</li>
              <li>CISO programme charter and governance documentation</li>
              <li>Quarterly board cyber report (ongoing engagements)</li>
              <li>Evidence register for audit and regulatory review</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>Boards can answer: what is our current maturity and what are the material gaps?</li>
              <li>Demonstrable improvement trajectory for regulators</li>
              <li>Security investment aligned to material risk, not compliance checklists</li>
              <li>CISO-level leadership without full-time cost</li>
              <li>Reduced regulatory finding risk through proactive gap closure</li>
              <li>Single evidence set satisfying multiple framework obligations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Buying triggers */}
      <section className="svc-triggers section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">When You Need This</span>
            <h2>Buying triggers</h2>
          </div>
          <div className="triggers-grid">
            {[
              'Board or regulator has asked for a current-state security posture report',
              'No CISO in post or CISO capacity gap during a transition',
              'Regulatory audit, NIS2 / DORA / ISO 27001 certification approaching',
              'Significant technology or business change requiring security architecture review',
              'Post-incident review and remediation programme required',
              'Security investment decisions needed without clear current-state baseline',
              'M&A — buyer or seller requires cybersecurity posture evidence',
              'Board wants measurable proof of security improvement trajectory',
            ].map((t, i) => (
              <div className="trigger-item reveal" key={i}>
                <span className="trigger-dot">▸</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Relevant Standards</span>
            <h2>Aligned to what regulators require.</h2>
          </div>
          <div className="standards-grid">
            {['NIST CSF 2.0', 'ISO/IEC 27001:2022', 'NIS2 Directive', 'DORA', 'GDPR', 'PCI DSS v4.0', 'CIS Controls v8', 'NIST SP 800-53', 'SOC 2', 'Cyber Essentials+'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Often engaged together</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/services/penetration-testing">
              <h4>Penetration Testing &amp; Vulnerability Assessment</h4>
              <p>Technical validation of controls through adversarial testing.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/operational-resilience">
              <h4>Operational Resilience &amp; Managed Security</h4>
              <p>Incident readiness, tabletop exercises and managed detection.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/ma/due-diligence">
              <h4>M&amp;A Cyber Due Diligence</h4>
              <p>Cybersecurity risk translated into investment decisions.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <span className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(255,255,255,.5)' }}>Start with an assessment</span>
            <h2>Ready to make your security posture measurable and defensible?</h2>
            <p>Speak with a senior Nucleus Systems practitioner about your current security posture, board obligations and where to start.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/about">About Nucleus Systems</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
