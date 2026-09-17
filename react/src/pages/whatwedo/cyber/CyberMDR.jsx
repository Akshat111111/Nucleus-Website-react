import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function CyberMDR() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Cybersecurity &amp; Compliance · 08</div>
            <h1 className="svc-h1 reveal">Managed Security &amp; MDR</h1>
            <p className="svc-lede reveal">
              Adversaries do not operate on a 9-to-5 schedule; your defence cannot either. We provide 24/7/365 Managed Detection and Response (MDR) services, acting as an extension of your internal team. We ingest telemetry across endpoints, networks, cloud, and identity, applying threat intelligence and expert human analysis to detect, investigate, and contain threats before they become breaches.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Operations Gap</span>
              <h2>Building an internal 24/7 SOC is prohibitively expensive and difficult to staff.</h2>
              <p>Establishing an effective internal Security Operations Centre requires hiring a minimum of 8-12 analysts to cover 24/7 shifts, investing heavily in SIEM/SOAR technology, and constantly developing detection engineering rules. For most organisations, this model is financially unviable and leads to analyst burnout, alert fatigue, and missed critical threats.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Alert fatigue', desc: 'Security tools generate thousands of alerts daily. Without fine-tuned correlation and expert triage, analysts suffer from alert fatigue, increasing the likelihood that a true positive is ignored.' },
                { title: 'The dwell time danger', desc: 'The time between an initial compromise and detection (dwell time) often averages weeks or months. Every day an attacker remains undetected increases the severity of the data exfiltration and damage.' },
                { title: 'Detection vs. Response', desc: 'Many MSSPs only offer "Managed Detection"—they alert you that you are under attack but leave the response to you. Effective MDR requires the provider to take active steps to contain the threat (e.g., isolating a host).' },
                { title: 'Cloud and Identity blind spots', desc: 'Traditional SOCs focus heavily on endpoint and network logs, but modern attacks frequently target identity providers (e.g., Azure AD) and cloud APIs. Comprehensive MDR must ingest this telemetry.' },
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
            <h2>Managed Security &amp; MDR — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: '24/7 Continuous Monitoring', desc: 'Eyes-on-glass monitoring by expert security analysts around the clock. We ingest logs from your existing EDR, firewall, cloud, and identity solutions into our advanced analytics platform.' },
              { num: '02', title: 'Active Threat Containment', desc: 'We do not just send alerts. Based on pre-agreed rules of engagement, our analysts will take active steps to contain threats — isolating infected endpoints, disabling compromised accounts, or blocking malicious IPs.' },
              { num: '03', title: 'Threat Intelligence Integration', desc: 'Enriching your telemetry with global threat intelligence feeds. We detect indicators of compromise (IoCs) associated with known APTs, ransomware gangs, and emerging threat campaigns.' },
              { num: '04', title: 'Proactive Threat Hunting', desc: 'Our analysts don\'t wait for alerts to trigger. We conduct proactive threat hunts through your environment, looking for subtle anomalies and "living off the land" techniques that evade automated detection.' },
              { num: '05', title: 'Custom Detection Engineering', desc: 'Developing and tuning detection rules specific to your environment and business risks, ensuring high-fidelity alerts and drastically reducing false positives.' },
              { num: '06', title: 'Incident Response Integration', desc: 'Seamless escalation from MDR to full Incident Response. If a major breach is confirmed, our DFIR team is already engaged, armed with the forensic data needed to accelerate recovery.' },
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
            <span className="eyebrow">Technology &amp; Standards</span>
            <h2>SOC methodologies.</h2>
          </div>
          <div className="standards-grid">
            {['MITRE ATT&CK Framework', 'NIST SP 800-137 (Continuous Monitoring)', 'SIEM / SOAR / XDR', 'EDR Integration (CrowdStrike, Defender, SentinelOne)', 'Threat Intelligence Platforms (TIP)'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/cyber/resilience"><h4>Operational Resilience &amp; IR</h4><p>The incident response capabilities that engage when MDR escalates a major breach.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/tvem"><h4>Threat &amp; Vulnerability Management</h4><p>Identifying the vulnerabilities that our SOC monitors for exploitation attempts.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/ai/secops"><h4>AI Security Operations</h4><p>Extending our MDR capabilities to monitor attacks against your AI systems.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Don't wait until Monday morning to find out you were breached on Friday night.</h2>
            <p>Speak with our SOC leadership about establishing 24/7 detection and response for your organisation.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/cyber/resilience">Explore Incident Response</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
