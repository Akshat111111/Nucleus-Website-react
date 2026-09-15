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
              { num: '05', title: 'Managed Detection &amp; Response (MDR)', desc: '24/7 threat detection, investigation and response delivered through our specialist MSSP partnership with CyberOne — with detection findings contextualised against your security maturity programme, not treated as isolated tickets.' },
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

      {/* ── MDR DEEP-DIVE ── */}
      <section className="svc-problem section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">Managed Detection &amp; Response</span>
            <h2>24/7 MDR that connects detection to security improvement.</h2>
            <p>Delivered through our specialist MSSP partnership with CyberOne — detection events are contextualised against your security posture, so incidents become evidence in your improvement programme rather than isolated closed tickets.</p>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: '24/7 Managed SOC', desc: 'Round-the-clock security operations centre coverage. Trained analysts monitor, triage and escalate alerts across your environment — no after-hours blind spots, no analyst fatigue gaps.' },
              { num: '02', title: 'Threat Detection &amp; Correlation', desc: 'SIEM/SOAR-driven detection with cross-source correlation. Alerts are enriched with threat intelligence and MITRE ATT&CK context before reaching the analyst queue — reducing noise and improving response quality.' },
              { num: '03', title: 'Endpoint Detection &amp; Response (EDR/XDR)', desc: 'EDR/XDR deployment and management across endpoints, servers and cloud workloads. Behavioural detection, lateral movement identification and automated containment of confirmed threats.' },
              { num: '04', title: 'Threat Hunting', desc: 'Proactive, hypothesis-driven hunting for threats that evade automated detection. Hunting cadence aligned to your sector-specific threat model and the areas of your environment carrying the most material exposure.' },
              { num: '05', title: 'Incident Management &amp; Response', desc: 'Structured incident response from initial triage through containment, eradication and recovery. Post-incident reviews identify control gaps — closing the loop between detection and security improvement.' },
              { num: '06', title: 'Vulnerability Management', desc: 'Continuous vulnerability scanning, risk-based prioritisation and remediation tracking — prioritised by exploitability, asset criticality and business impact, not just raw CVSS score.' },
              { num: '07', title: 'Threat Intelligence Integration', desc: 'Curated threat intelligence feeds mapped to your sector and geography. Intelligence is operationalised into detection rules, hunting hypotheses and client-facing threat briefings — not raw feeds sitting unused in a portal.' },
              { num: '08', title: 'Monthly Threat &amp; Posture Reporting', desc: 'Monthly reporting covering threats detected, incidents investigated and vulnerabilities remediated — in board-ready format with trend indicators designed to feed directly into governance and risk reporting cycles.' },
            ].map((s, i) => (
              <div className="svc-what-card reveal" key={i}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="svc-what-desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="svc-problem-grid" style={{ marginTop: '48px' }}>
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Partnership</span>
              <h2>CyberOne MSSP · Nucleus Systems delivery</h2>
              <p>CyberOne brings deep SOC operations, SIEM/SOAR infrastructure, EDR/XDR tooling and 24/7 analyst coverage. Nucleus Systems provides the security programme layer — connecting detection events to security improvement, and ensuring MDR output feeds directly into your board and regulator reporting.</p>
              <p style={{ marginTop: '12px' }}>Detection rules, alert triage and threat hunting playbooks are mapped to MITRE ATT&CK tactics and techniques — giving you visibility into which adversary techniques are actively being used against your environment, not just which alerts fired.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Incidents become improvement evidence', desc: 'Every investigated incident generates findings mapped back to security control gaps — over time building a continuously updated picture of posture, not a once-a-year snapshot.' },
                { title: 'MITRE ATT&CK aligned', desc: 'All detection content maps to ATT&CK tactics and techniques. Threat reporting shows which adversary TTPs are active against your environment.' },
                { title: 'Maturity-informed prioritisation', desc: 'Vulnerability remediation, threat hunting priorities and detection rule tuning concentrate where your organisation carries the most material exposure.' },
                { title: 'Board reporting integration', desc: 'Monthly MDR reports formatted to feed directly into board and audit committee cycles — threat and incident data alongside security posture trend data.' },
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
