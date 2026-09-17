import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function CyberResilience() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Cybersecurity &amp; Compliance · 05</div>
            <h1 className="svc-h1 reveal">Operational Resilience &amp; Incident Response</h1>
            <p className="svc-lede reveal">
              The assumption of compromise is the foundation of modern cybersecurity. We build operational resilience capabilities that ensure your business can withstand, adapt to, and rapidly recover from a catastrophic cyber event. From developing ransomware playbooks and facilitating board-level wargames to orchestrating live incident response, we prepare you for the inevitable.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/cybersecurity-compliance">All Cyber Services <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Resilience Gap</span>
              <h2>Security aims to stop the breach. Resilience ensures you survive it.</h2>
              <p>Most organisations invest heavily in preventative security controls but severely underinvest in resilience. When a ransomware attack encrypts core systems, technical teams often discover that backups are also encrypted, communication channels are down, and executives have no playbook for managing the crisis. Survival requires prepared resilience.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'The backup illusion', desc: 'Ransomware operators actively target backup infrastructure before deploying encryption. If backups are not immutable, air-gapped, or mathematically verified, they will not save the organisation during an attack.' },
                { title: 'Untested incident response plans', desc: 'Incident response plans that exist only as a dusty PDF are useless in a crisis. Without regular simulation and wargaming, teams will fail to execute when under the intense pressure of a live breach.' },
                { title: 'Executive paralysis', desc: 'During a breach, technical teams look to the board for decisions on ransom payment, public disclosure, and service shutdown. If executives have not rehearsed these decisions, paralysis delays recovery.' },
                { title: 'DORA and regulatory mandates', desc: 'Regulations like DORA now explicitly mandate that financial entities demonstrate operational resilience, including ICT continuity plans, response and recovery capabilities, and regular resilience testing.' },
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
            <h2>Operational Resilience — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Incident Response Planning', desc: 'Developing actionable, scenario-specific IR playbooks (Ransomware, Data Exfiltration, Insider Threat, Supply Chain Compromise) tailored to your environment and team capabilities.' },
              { num: '02', title: 'Executive Crisis Wargaming', desc: 'Facilitating immersive tabletop exercises for the C-suite and board. Simulating the business, legal, and reputational pressures of a major breach to forge executive muscle memory.' },
              { num: '03', title: 'Technical IR Simulations', desc: 'Conducting deep-dive technical simulations for SOC and IT teams. E.g. executing "purple team" exercises where we simulate an attack and evaluate the team\'s detection and response capabilities in real-time.' },
              { num: '04', title: 'Business Continuity & Disaster Recovery', desc: 'Aligning BCP/DR plans with cyber threat scenarios. Ensuring RTO (Recovery Time Objective) and RPO (Recovery Point Objective) metrics are achievable under active cyber-attack conditions.' },
              { num: '05', title: 'Ransomware Readiness Assessment', desc: 'Evaluating the organisation\'s specific resilience to ransomware. Auditing backup immutability, network segmentation, active directory security, and privileged access management.' },
              { num: '06', title: 'Live Incident Response / Retainer', desc: 'Providing guaranteed SLAs for live incident response. When a breach occurs, our digital forensics and incident response (DFIR) specialists deploy to contain the threat and orchestrate recovery.' },
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
            <h2>Resilience methodologies.</h2>
          </div>
          <div className="standards-grid">
            {['NIST SP 800-61 Rev. 2 (Incident Response)', 'ISO/IEC 27035 (Information Security Incident Management)', 'DORA (Operational Resilience)', 'NIST CSF (Respond & Recover)', 'BCI Good Practice Guidelines (BCM)'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Connected Cyber services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/cyber/fractional-ciso"><h4>Fractional CISO</h4><p>The executive leadership required to direct the crisis response during a breach.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/managed-security"><h4>Managed Security &amp; MDR</h4><p>The 24/7 monitoring capabilities that detect the incident in the first place.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/compliance"><h4>Compliance Programmes</h4><p>Meeting the operational resilience requirements mandated by DORA and NIS2.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Do not meet your incident response plan for the first time during a breach.</h2>
            <p>Speak with DFIR specialists who build resilience plans and test them under fire.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/cyber/compliance">Explore DORA Readiness</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
