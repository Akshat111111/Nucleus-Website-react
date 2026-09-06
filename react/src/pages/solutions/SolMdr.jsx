import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function SolMdr() {
  useReveal()

  return (
    <div id="view-sol-mdr">
      

  <div className="pillar-hero">
    <div className="wrap ph-inner">
      <div className="ph-eyebrow"><span className="ph-pill">Domain-Specific Solution · S1</span></div>
      <h1 className="ph-h1">Managed Detection &amp; Response</h1>
      <p className="ph-sub">24/7 managed detection, investigation and response delivered in partnership with CyberOne — one of Africa's leading MSSPs. Every engagement is anchored to NS-CMMF, so detection events feed directly into the client's cybersecurity maturity programme rather than sitting in isolation.</p>
      <div className="pillar-fw-stats">
        <div className="pfs-item"><span className="pfs-val">24/7</span><span className="pfs-lab">SOC Coverage</span></div>
        <div className="pfs-item"><span className="pfs-val">NS-CMMF</span><span className="pfs-lab">Framework Anchored</span></div>
        <div className="pfs-item"><span className="pfs-val">SIEM</span><span className="pfs-lab">SOAR · EDR · XDR</span></div>
        <div className="pfs-item"><span className="pfs-val">MITRE</span><span className="pfs-lab">ATT&amp;CK Aligned</span></div>
        <div className="pfs-item"><span className="pfs-val">IR</span><span className="pfs-lab">Retainer Included</span></div>
      </div>
    </div>

    <div className="page-ticker">
      <div className="page-ticker-track">
        <span className="page-ticker-item"><span className="t-cat">Coverage</span> 24/7 SOC · SIEM · SOAR · EDR · XDR · Threat Intelligence</span>
        <span className="page-ticker-item"><span className="t-cat">Framework</span> NS-CMMF Anchored · MITRE ATT&amp;CK Aligned · Detect &amp; Respond</span>
        <span className="page-ticker-item"><span className="t-cat">Hunting</span> Proactive Threat Hunting · Adversary Simulation · Purple Team</span>
        <span className="page-ticker-item"><span className="t-cat">Response</span> Incident Response · Containment · Forensics · Recovery</span>
        <span className="page-ticker-item"><span className="t-cat">Delivery</span> Fractional SOC · Managed SIEM · 24x7 Alert Triage</span>
        <span className="page-ticker-item"><span className="t-cat">Standards</span> ISO 27035 · NIST SP 800-61 · SANS Incident Response Process</span>
        <span className="page-ticker-item"><span className="t-cat">Regions</span> Africa · Middle East · Asia · Europe · Multi-Jurisdiction Coverage</span>
        <span className="page-ticker-item"><span className="t-cat">Coverage</span> 24/7 SOC · SIEM · SOAR · EDR · XDR · Threat Intelligence</span>
        <span className="page-ticker-item"><span className="t-cat">Framework</span> NS-CMMF Anchored · MITRE ATT&amp;CK Aligned · Detect &amp; Respond</span>
        <span className="page-ticker-item"><span className="t-cat">Hunting</span> Proactive Threat Hunting · Adversary Simulation · Purple Team</span>
        <span className="page-ticker-item"><span className="t-cat">Response</span> Incident Response · Containment · Forensics · Recovery</span>
        <span className="page-ticker-item"><span className="t-cat">Delivery</span> Fractional SOC · Managed SIEM · 24x7 Alert Triage</span>
        <span className="page-ticker-item"><span className="t-cat">Standards</span> ISO 27035 · NIST SP 800-61 · SANS Incident Response Process</span>
        <span className="page-ticker-item"><span className="t-cat">Regions</span> Africa · Middle East · Asia · Europe · Multi-Jurisdiction Coverage</span>
      </div>
    </div>
  </div>

  {/* Intro */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <div className="pg-2col reveal">
        <div>
          <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>Detection that feeds maturity</div>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>Standard MSSP tooling detects threats and generates alerts. What it doesn't do is connect those alerts to the client's underlying security maturity — which gaps in policy, process or technology made the incident possible, and what needs to change to prevent recurrence. Without that connection, detection and maturity improvement remain parallel programmes that never inform each other.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>Nucleus Systems partners with CyberOne to deliver MDR services that break that separation. Every engagement is anchored to NS-CMMF, so when a threat is detected and investigated, the findings are contextualised against the client's actual maturity posture across the eight domains. A detected credential attack maps to D3 Identity &amp; Access Management maturity gaps. A ransomware event maps to D5 Resilience &amp; Recovery readiness. Detection events become evidence in the maturity programme, not isolated tickets.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8"}}>This integration produces a continuous feedback loop: the maturity assessment identifies where detection coverage is weakest; the MDR service monitors those areas most closely; incidents and near-misses update the maturity picture and reprioritise the remediation roadmap. Security operations and security improvement become one programme.</p>
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"20px"}}>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"24px 26px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--blue)","marginBottom":"8px"}}>The Partnership</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>CyberOne MSSP · Nucleus Systems frameworks</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.65"}}>CyberOne brings deep SOC operations, SIEM/SOAR infrastructure, EDR/XDR tooling and 24/7 analyst coverage. Nucleus Systems brings NS-CMMF framework integration, maturity context, and the programme management layer that connects detection events to security improvement.</div>
          </div>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"24px 26px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>The Differentiator</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>Incidents become maturity evidence, not just closed tickets</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.65"}}>Every investigated incident generates findings that are mapped back to NS-CMMF control gaps. Over time the incident record builds a maturity evidence base that supplements formal assessment cycles — giving boards a continuously updated picture of security posture, not a once-a-year snapshot.</div>
          </div>
          <div style={{"background":"var(--navy)","borderRadius":"14px","padding":"24px 26px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>The Alignment</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"#fff","marginBottom":"6px"}}>MITRE ATT&amp;CK mapped across all detection content</div>
            <div style={{"fontSize":"12.5px","color":"rgba(255,255,255,.65)","lineHeight":"1.65"}}>Detection rules, alert triage and threat hunting playbooks are mapped to MITRE ATT&amp;CK tactics and techniques. Threat reporting gives clients visibility into which adversary techniques are being actively used against their environment — not just which alerts fired.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Services */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">What's Included</h2>
      <p className="pg-sub reveal">Full-spectrum managed detection and response — from 24/7 SOC coverage and threat hunting through to NS-CMMF maturity integration and board reporting.</p>
      <div className="svc2-grid reveal">
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
          <h4>24/7 Managed SOC</h4>
          <p>Round-the-clock security operations centre coverage. Trained analysts monitor, triage and escalate alerts across your environment — no after-hours blind spots, no analyst fatigue gaps.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
          <h4>Threat Detection &amp; Correlation</h4>
          <p>SIEM/SOAR-driven detection with cross-source correlation. Alerts are enriched with threat intelligence and MITRE ATT&amp;CK context before reaching the analyst queue — reducing noise and improving response quality.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
          <h4>Endpoint Detection &amp; Response</h4>
          <p>EDR/XDR deployment and management across endpoints, servers and cloud workloads. Behavioural detection, lateral movement identification and automated containment of confirmed threats.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
          <h4>Threat Hunting</h4>
          <p>Proactive, hypothesis-driven hunting for threats that evade automated detection. Hunting cadence aligned to the client's threat model — sector-specific adversary TTPs, supply chain risk areas and NS-CMMF gaps most likely to be exploited.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <h4>Incident Management &amp; Response</h4>
          <p>Structured incident response from initial triage through containment, eradication and recovery. Post-incident reviews produce findings mapped to NS-CMMF control gaps — closing the loop between detection and maturity improvement.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
          <h4>Vulnerability Management</h4>
          <p>Continuous vulnerability scanning, risk-based prioritisation and remediation tracking. Vulnerabilities are prioritised by exploitability, asset criticality and NS-CMMF domain risk weighting — not just CVSS score.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></div>
          <h4>Threat Intelligence Integration</h4>
          <p>Curated threat intelligence feeds mapped to the client's sector and geography. Intelligence is operationalised into detection rules, hunting hypotheses and client-facing threat briefings — not raw feeds sitting unused in a portal.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
          <h4>Monthly Threat &amp; Posture Reporting</h4>
          <p>Monthly reporting covering threats detected, incidents investigated, vulnerabilities remediated, and NS-CMMF maturity impact. Board-ready format with trend indicators — designed to go directly into governance and risk reporting cycles.</p>
        </div>
      </div>
    </div>
  </div>

  {/* NS-CMMF integration callout */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">NS-CMMF Integration</h2>
      <p className="pg-sub reveal" style={{"marginBottom":"8px"}}>The integration between MDR operations and NS-CMMF maturity is what separates this service from standard MSSP delivery — every detection event informs the maturity programme.</p>
      <div style={{"overflowX":"auto"}} className="reveal">
        <table className="spec-tbl"><tbody>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><span className="spec-tbl-label">Detection Coverage Mapping</span></div></td>
            <td>Detection coverage gaps are mapped to NS-CMMF domains at onboarding. D4 Threat Intelligence coverage, D6 SOC &amp; Monitoring maturity, and D7 Incident Response readiness all feed directly into the MDR service configuration — ensuring the SOC is watching the areas the maturity assessment identified as weakest.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><span className="spec-tbl-label">Incident-to-Maturity Feedback</span></div></td>
            <td>Every investigated incident generates a post-incident finding mapped to one or more NS-CMMF control gaps. These findings accumulate as evidence between formal assessment cycles — so the next NS-CMMF assessment starts with a richer, more current picture of control effectiveness than a standalone interview-based assessment would produce.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/></svg></div><span className="spec-tbl-label">Maturity-Informed Prioritisation</span></div></td>
            <td>Vulnerability remediation, threat hunting priorities and detection rule tuning are all informed by the client's NS-CMMF maturity profile. Low-maturity domains get higher-intensity coverage — the MDR service concentrates where the organisation is most exposed, not where the tooling is easiest to deploy.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><span className="spec-tbl-label">Board Reporting Integration</span></div></td>
            <td>Monthly MDR reports are formatted to feed directly into board and audit committee reporting cycles. Threat and incident data is presented alongside NS-CMMF maturity trend data — giving boards a unified view of security posture, not separate operational and governance reports that tell different stories.</td>
          </tr>
        </tbody></table>
      </div>
    </div>
  </div>

  {/* Cross-links */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <div className="xlink-row reveal">
        <div className="xlink-card" data-go="pillar-cyber">
          <div className="xlink-label">Parent Pillar</div>
          <div className="xlink-name">Cybersecurity Trust &amp; Resilience</div>
          <div className="xlink-desc">The full Pillar 1 service model — of which MDR is the continuous operational component.</div>
          <div className="xlink-go">Explore Pillar 1 →</div>
        </div>
        <div className="xlink-card" data-go="fw-cmmf">
          <div className="xlink-label">Underlying Framework</div>
          <div className="xlink-name">NS-CMMF</div>
          <div className="xlink-desc">The 188-control maturity framework that every MDR engagement is anchored to for detection context and maturity feedback.</div>
          <div className="xlink-go">Explore NS-CMMF →</div>
        </div>
        <div className="xlink-card" data-go="plat-cyber">
          <div className="xlink-label">Related Platform</div>
          <div className="xlink-name">Cybersecurity Maturity Platform</div>
          <div className="xlink-desc">The assessment and scoring platform that MDR incident findings feed back into between formal assessment cycles.</div>
          <div className="xlink-go">Explore Platform →</div>
        </div>
      </div>
    </div>
  </div>

  <div className="page-cta-band">
    <div className="wrap pcb-inner">
      <h2>Get 24/7 threat detection that strengthens your security programme — not just your alert queue</h2>
      <p>Book a scoping call to define your MDR coverage requirements and how the engagement integrates with your NS-CMMF maturity programme.</p>
      <div className="pcb-row"><Link className="btn btn-primary" to="/contact">Book a scoping call <span className="arr">→</span></Link><Link className="btn btn-ghost" to="/pillar-cyber" style={{"background":"transparent","color":"#fff","borderColor":"rgba(255,255,255,.3)"}}>Explore Pillar 1 →</Link></div>
    </div>
  </div>


    </div>
  )
}

