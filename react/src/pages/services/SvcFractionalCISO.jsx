import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function SvcFractionalCISO() {
  useReveal()
  return (
    <div id="view-svc">

      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Fractional / Interim / Virtual CISO</div>
            <h1 className="svc-h1 reveal">Expert CISO leadership on the terms that fit your organisation.</h1>
            <p className="svc-lede reveal">
              Boards and regulators now expect demonstrable CISO-level accountability. Not every organisation needs — or can justify — a full-time hire. A Fractional, Interim or Virtual CISO from Nucleus Systems gives you senior practitioner leadership, regulatory credibility and a working security programme, without the cost or delay of a permanent appointment.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/cybersecurity-advisory">See Cybersecurity Advisory <span className="arr">→</span></Link>
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
              <h2>CISO accountability without the permanent headcount.</h2>
              <p>Regulators, boards and major enterprise customers increasingly expect a named, qualified CISO. The security leadership gap — between what compliance and governance require and what internal teams can provide — is where most mid-market and growth-stage organisations are most exposed.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'No CISO — but regulators expect one', desc: 'NIS2, DORA, FCA, PRA and sector-specific frameworks increasingly expect demonstrable CISO-level accountability at board level. The absence of a named security leader is itself a compliance finding.' },
                { title: 'CISO departure or leave', desc: 'Planned or unplanned CISO vacancy — sabbatical, resignation, maternity leave — creates an immediate leadership and accountability gap that cannot wait for a 4-month permanent recruitment process.' },
                { title: 'Growth requires it — budget does not support it yet', desc: 'Series A/B companies, scale-ups and mid-market organisations passing enterprise security questionnaires or preparing for regulatory authorisation need senior CISO input without a full-time cost structure.' },
                { title: 'Post-acquisition security leadership', desc: 'Post-deal integration requires experienced security leadership to build the programme, report to the PE board and prepare for the next milestone — often before a permanent CISO is hired.' },
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
            <h2>Three engagement models. One senior practitioner.</h2>
            <p>All three models deliver a qualified, practitioner-level security leader who operates as a genuine extension of your team — not an advisory relationship at arm's length.</p>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Fractional CISO', desc: 'An experienced CISO operating as part of your leadership team for an agreed portion of their time — typically 2–4 days per month. Owns the security programme, reports to the board, manages the team and maintains regulatory relationships. Structured for continuity, not episodic advisory.' },
              { num: '02', title: 'Interim CISO', desc: 'Full-time interim CISO cover for a defined period — vacancy cover, maternity/sabbatical, or transformation delivery. Fully accountable, fully embedded. Typically 3–12 months. Transitions to your permanent hire with a structured handover and programme documentation.' },
              { num: '03', title: 'Virtual CISO (vCISO)', desc: 'Remote-delivered senior security leadership for organisations that need CISO-level expertise but operate in a single location or with distributed teams. Combines monthly advisory sessions, board reporting support, and on-call incident command with async programme management.' },
              { num: '04', title: 'Board Cyber Advisor', desc: 'Non-executive level cyber risk advisory to the board or audit committee — providing independent technical challenge, risk appetite validation and regulatory posture review. Distinct from the operational CISO role. Particularly suited to regulated sectors and PE-backed businesses.' },
              { num: '05', title: 'Post-Deal Security Leadership', desc: 'Fractional CISO specifically structured for PE portfolio companies post-acquisition — building the programme from baseline assessment, reporting to the deal team and operating board, and preparing the company for the next hold-period milestone or exit.' },
              { num: '06', title: 'Regulatory Compliance Leadership', desc: 'CISO leadership scoped specifically for regulatory authorisation or compliance milestones — FCA/PRA permissions, DORA designation, NIS2 registration, ISO 27001 certification — with programme ownership, evidence management and regulator liaison included.' },
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

      <section className="svc-scope section">
        <div className="wrap svc-scope-grid">
          <div className="svc-scope-col reveal">
            <h3>What You Receive</h3>
            <ul className="svc-list">
              <li>Named, qualified CISO accountable to your board</li>
              <li>Monthly board and committee cyber reporting pack</li>
              <li>Regulatory evidence file maintained continuously</li>
              <li>Security programme ownership and roadmap</li>
              <li>Vendor and supplier security governance</li>
              <li>Incident command and crisis management</li>
              <li>Team mentoring and capability development</li>
              <li>Structured handover to permanent hire when ready</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>Board-ready cyber accountability — named, qualified, defensible</li>
              <li>Regulatory requirements demonstrably satisfied</li>
              <li>Security programme running and improving — not paused</li>
              <li>Major enterprise customer security questionnaires passed</li>
              <li>Post-acquisition security programme built and tracked</li>
              <li>Permanent hire onboarded into a working programme</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>When You Need This</h3>
            <ul className="svc-list">
              <li>No current CISO — regulatory or enterprise pressure is building</li>
              <li>CISO departure — vacancy cover needed immediately</li>
              <li>Series A/B — first enterprise customers require CISO engagement</li>
              <li>Regulatory authorisation — FCA, DORA, NIS2, PRA</li>
              <li>Post-acquisition — programme leadership needed before permanent hire</li>
              <li>PE exit preparation — security programme needs to be boardroom-ready</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="svc-triggers section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Buying Triggers</span>
            <h2>When organisations engage us.</h2>
          </div>
          <div className="triggers-grid">
            {[
              'Regulator has asked who your CISO is — and the answer is currently "no one"',
              'CISO resignation received — programme needs continuity immediately',
              'PE deal closing — board expects a security leadership appointment within 30 days',
              'Enterprise customer onboarding requires named CISO contact and quarterly security review',
              'ISO 27001 or SOC 2 certification programme requires programme ownership',
              'DORA or NIS2 designation — ICT risk management function needs a named owner',
              'Board has been told cyber risk is material — and currently nobody owns it',
              'Growth-stage company preparing for Series C or strategic sale requires a credible CISO story',
            ].map((t, i) => (
              <div className="trigger-item reveal" key={i}>
                <span className="trigger-dot">▸</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Relevant Standards</span>
            <h2>Regulatory expectations we work to.</h2>
          </div>
          <div className="standards-grid">
            {['NIST CSF 2.0', 'ISO/IEC 27001:2022', 'DORA (EU 2022/2554)', 'NIS2 Directive', 'FCA SYSC / DORA', 'PRA Operational Resilience', 'GDPR Article 37–39', 'PCI DSS v4.0', 'EU AI Act (AI governance)', 'SOC 2 Type II'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Often engaged together</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/services/cybersecurity-advisory">
              <h4>Cybersecurity Strategy &amp; Maturity</h4>
              <p>The maturity assessment and improvement programme that the Fractional CISO owns and delivers.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/penetration-testing">
              <h4>Penetration Testing &amp; Technical Validation</h4>
              <p>Independent technical assurance the CISO commissions to validate control effectiveness.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/ma/post-deal">
              <h4>Post-Deal Cybersecurity</h4>
              <p>Fractional CISO structured specifically for PE portfolio post-acquisition programmes.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <span className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(255,255,255,.5)' }}>CISO leadership</span>
            <h2>Who is your CISO — and what are they building?</h2>
            <p>Speak with a senior Nucleus Systems practitioner about your security leadership gap, your regulatory obligations, and what a Fractional or Interim CISO engagement looks like in practice.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/cybersecurity-advisory">Explore Cybersecurity Advisory</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
