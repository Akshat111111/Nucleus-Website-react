import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function SvcResilience() {
  useReveal()
  return (
    <div id="view-svc">

      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Operational Resilience &amp; Managed Security</div>
            <h1 className="svc-h1 reveal">Prepare for incidents before they happen. Detect threats as they emerge.</h1>
            <p className="svc-lede reveal">
              Operational resilience is no longer optional — DORA, NIS2 and sector-specific regulation mandate demonstrable incident response, business continuity and recovery capabilities. We help organisations build, test and continuously validate resilience, and extend detection capability through managed security partnerships.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/cybersecurity-advisory">See Cybersecurity Advisory <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">What We Do</span>
            <h2>Operational Resilience &amp; Managed Security Services</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Incident Response Readiness Assessment', desc: 'Assessment of your current incident response capability against DORA (4-hour notification), NIS2 (24-hour) and GDPR (72-hour) obligations. Playbook review, team readiness, tooling and escalation path validation.' },
              { num: '02', title: 'Incident Response Playbook Development', desc: 'Structured incident response playbooks covering ransomware, data breach, DDoS, insider threat, supply chain compromise and AI-specific scenarios — tested through tabletop exercises before a real incident occurs.' },
              { num: '03', title: 'Tabletop Exercises &amp; Simulation', desc: 'Facilitated tabletop exercises and red team simulations that test whether your response plans work under realistic attack conditions — not as documented procedures, but as lived experience.' },
              { num: '04', title: 'Business Continuity &amp; Disaster Recovery', desc: 'BCP and DR programme review, RTO/RPO validation, tested recovery programme design and cyber insurance alignment — building demonstrable recovery capability for regulators and insurers.' },
              { num: '05', title: 'Managed Detection &amp; Response (MDR)', desc: '24/7 MDR delivered in partnership with specialist MSSP partners — threat detection, investigation and response with cybersecurity maturity context built in. Selecting, configuring and governing your MDR provider.' },
              { num: '06', title: 'SOC Advisory &amp; Improvement', desc: 'SOC capability maturity assessment, technology stack review, detection engineering improvement, SIEM optimisation, UEBA configuration and threat hunting programme development.' },
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
            <h3>Scope</h3>
            <ul className="svc-list">
              <li>Incident response capability maturity assessment</li>
              <li>IR playbook development and documentation</li>
              <li>Tabletop exercise design and facilitation</li>
              <li>BCP/DR capability review and gap analysis</li>
              <li>RTO/RPO validation testing</li>
              <li>MDR provider selection and governance</li>
              <li>SOC maturity assessment and improvement programme</li>
              <li>DORA, NIS2 and GDPR notification compliance review</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>What You Receive</h3>
            <ul className="svc-list">
              <li>Incident response readiness assessment report</li>
              <li>Documented IR playbooks (scenario-specific)</li>
              <li>Tabletop exercise report and lessons learned</li>
              <li>BCP/DR gap report and remediation roadmap</li>
              <li>MDR selection report and governance framework</li>
              <li>SOC improvement roadmap</li>
              <li>Board resilience posture report</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>DORA, NIS2 and GDPR notification obligations demonstrably met</li>
              <li>Board confident in response capability before incident occurs</li>
              <li>Recovery capability tested and validated, not assumed</li>
              <li>MDR providing continuous detection aligned to security posture</li>
              <li>SOC detecting AI-specific and advanced threats as they emerge</li>
              <li>Cyber insurance premiums and coverage aligned to actual capability</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="svc-triggers section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">When You Need This</span>
            <h2>Buying triggers</h2>
          </div>
          <div className="triggers-grid">
            {[
              'DORA operational resilience requirements applying — 4-hour notification, incident testing mandated',
              'NIS2 Directive now applying — 24-hour early warning, 72-hour notification required',
              'No tested incident response playbooks — response plans not validated under realistic conditions',
              'Recent incident exposed gaps in detection, response or recovery capability',
              'BCP/DR procedures not tested against cyber-specific attack scenarios',
              'Board or regulator has asked: can you prove your recovery capability works?',
              'MDR provider selection or current provider governance review needed',
              'SOC not detecting threats — too many alerts, not enough signal',
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
            <h2>Aligned to resilience regulation.</h2>
          </div>
          <div className="standards-grid">
            {['DORA (EU Regulation 2022/2554)', 'NIS2 Directive (2022/2555)', 'GDPR Article 33/34', 'ISO/IEC 27001:2022', 'ISO 22301 (BCMS)', 'NIST CSF 2.0 (Respond/Recover)', 'NIST SP 800-61r3', 'PCI DSS v4.0 IR', 'TIBER-EU', 'CBEST'].map(s => (
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
            <Link className="related-card reveal" to="/services/penetration-testing">
              <h4>Penetration Testing &amp; Technical Validation</h4>
              <p>Technical testing of the vulnerabilities your incident response will need to handle.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/cybersecurity-advisory">
              <h4>Cybersecurity Strategy &amp; Leadership</h4>
              <p>Resilience embedded in a broader cybersecurity maturity and improvement programme.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/ai-security">
              <h4>AI Security Operations</h4>
              <p>AI-specific incident response playbooks and SOC capability for AI threats.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <span className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(255,255,255,.5)' }}>Resilience assessment</span>
            <h2>Are you prepared to respond before an incident forces the question?</h2>
            <p>Speak with a Nucleus Systems practitioner about your current resilience posture, regulatory obligations and what tested incident response looks like.</p>
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
