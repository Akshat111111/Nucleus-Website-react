import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function PlatCyber() {
  useReveal()

  return (
    <div id="view-plat-cyber">
      

  <div className="pillar-hero">
    <div className="wrap ph-inner">
      <div className="ph-eyebrow"><span className="ph-pill">Platform · Pillar 1</span></div>
      <h1 className="ph-h1">Cybersecurity Maturity Platform</h1>
      <p className="ph-sub">The operational engine for delivering, scoring and continuously tracking NS-CMMF cybersecurity maturity programmes at enterprise scale. Built around the framework from the ground up — not adapted from a generic GRC tool.</p>
      <div className="pillar-fw-stats">
        <div className="pfs-item"><span className="pfs-val">188</span><span className="pfs-lab">NS-CMMF Controls</span></div>
        <div className="pfs-item"><span className="pfs-val">8</span><span className="pfs-lab">Maturity Domains</span></div>
        <div className="pfs-item"><span className="pfs-val">5-Axis</span><span className="pfs-lab">Scoring Model</span></div>
        <div className="pfs-item"><span className="pfs-val">L1→L5</span><span className="pfs-lab">Maturity Levels</span></div>
        <div className="pfs-item"><span className="pfs-val">Board</span><span className="pfs-lab">Ready Reports</span></div>
      </div>
    </div>

    <div className="page-ticker">
      <div className="page-ticker-track">
        <span className="page-ticker-item"><span className="t-cat">Platform</span> 188 NS-CMMF Controls · Structured Assessment Modules</span>
        <span className="page-ticker-item"><span className="t-cat">Scoring</span> 5-Axis Per Control · Domain-Weighted Aggregate Trust Score</span>
        <span className="page-ticker-item"><span className="t-cat">Maturity</span> L1 Initial → L5 Optimised · Evidence Captured Per Level</span>
        <span className="page-ticker-item"><span className="t-cat">Output</span> Board-Ready Reports · Regulatory Evidence Packs · Gap Analysis</span>
        <span className="page-ticker-item"><span className="t-cat">Tracking</span> Continuous Maturity Tracking · Trend Dashboards · Remediation Plans</span>
        <span className="page-ticker-item"><span className="t-cat">Delivery</span> Practitioner-Led Assessment · Not Self-Reported Checkboxes</span>
        <span className="page-ticker-item"><span className="t-cat">Standards</span> ISO 27001 · NIST CSF · CIS Controls · SOC 2 · DORA Aligned</span>
        <span className="page-ticker-item"><span className="t-cat">Platform</span> 188 NS-CMMF Controls · Structured Assessment Modules</span>
        <span className="page-ticker-item"><span className="t-cat">Scoring</span> 5-Axis Per Control · Domain-Weighted Aggregate Trust Score</span>
        <span className="page-ticker-item"><span className="t-cat">Maturity</span> L1 Initial → L5 Optimised · Evidence Captured Per Level</span>
        <span className="page-ticker-item"><span className="t-cat">Output</span> Board-Ready Reports · Regulatory Evidence Packs · Gap Analysis</span>
        <span className="page-ticker-item"><span className="t-cat">Tracking</span> Continuous Maturity Tracking · Trend Dashboards · Remediation Plans</span>
        <span className="page-ticker-item"><span className="t-cat">Delivery</span> Practitioner-Led Assessment · Not Self-Reported Checkboxes</span>
        <span className="page-ticker-item"><span className="t-cat">Standards</span> ISO 27001 · NIST CSF · CIS Controls · SOC 2 · DORA Aligned</span>
      </div>
    </div>
  </div>

  {/* Intro */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <div className="pg-2col reveal">
        <div>
          <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>Purpose-built, not adapted</div>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>Most GRC platforms treat cybersecurity maturity as a checkbox exercise. They were designed for compliance tracking — yes/no controls, traffic-light dashboards — not for the nuanced, domain-weighted, 5-axis scoring model that NS-CMMF is built on. Adapting them to the framework means losing the framework's precision.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>The Cybersecurity Maturity Platform implements all 188 NS-CMMF controls as structured, guided assessment modules. Every control is scored across Policy, Process, Technology, People and Measurement — each axis with its own evidence requirements per maturity level. Domain scores and aggregate trust scores are calculated from this structured input, not from self-reported checkboxes.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8"}}>The result is a maturity picture that reflects how an organisation actually operates — not how it believes it operates. That distinction is what makes the output meaningful to boards, regulators and procurement counterparties who need to verify posture, not just receive attestations.</p>
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"20px"}}>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"24px 26px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--blue)","marginBottom":"8px"}}>5-Axis Scoring</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>Policy · Process · Technology · People · Measurement</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.65"}}>Each of the 188 controls is evaluated across all five axes independently. A control can have mature technology but weak governance — the platform captures that gap rather than averaging it away.</div>
          </div>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"24px 26px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>Continuous Tracking</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>Maturity progression, not point-in-time snapshots</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.65"}}>Multi-period tracking lets organisations monitor maturity improvement between assessments, catch regression risks early, and report progress to boards with evidence rather than assertions.</div>
          </div>
          <div style={{"background":"var(--navy)","borderRadius":"14px","padding":"24px 26px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>Automated Output</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"#fff","marginBottom":"6px"}}>Remediation roadmaps generated from findings</div>
            <div style={{"fontSize":"12.5px","color":"rgba(255,255,255,.65)","lineHeight":"1.65"}}>Control gaps are ranked by domain criticality and implementation effort and sequenced into a prioritised roadmap — so teams know what to fix first, not just what is broken.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Capabilities */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">Platform Capabilities</h2>
      <p className="pg-sub reveal">Every capability is built around NS-CMMF's assessment methodology — not configured into a generic GRC template.</p>
      <div className="svc2-grid reveal">
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <h4>188-Control Assessment Engine</h4>
          <p>All 188 NS-CMMF controls implemented as structured, guided modules. Assessors are prompted for evidence at each axis and level — rigour is enforced by the platform, not left to the assessor.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/></svg></div>
          <h4>Domain Trust Score Calculation</h4>
          <p>Domain scores calculated from 5-axis control scores using NS-CMMF's weighted model. Aggregate trust scores roll up from domains, reflecting the framework's architecture — not a simple average.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
          <h4>Multi-Period Trend Tracking</h4>
          <p>Results stored longitudinally. Organisations track domain maturity progression across assessment periods, identify where maturity has improved or regressed, and report improvement with quantified evidence.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
          <h4>Industry Benchmark Comparison</h4>
          <p>Client scores benchmarked against sector-specific maturity targets and anonymised peer data. Boards see not just "where we are" but "where we are relative to organisations like us."</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div>
          <h4>Automated Remediation Roadmap</h4>
          <p>Gaps ranked by domain criticality, NS-CMMF weighting and implementation effort. Output is a prioritised, sequenced roadmap that programme managers can work from directly.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
          <h4>Board-Level Reporting Suite</h4>
          <p>Executive reports generated automatically: domain scorecards, aggregate trust score, maturity progression, benchmark comparison and top remediation priorities — formatted for board and audit committee presentation.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
          <h4>Evidence Management &amp; Audit Trail</h4>
          <p>Structured evidence collection per control and axis. Assessor notes, uploaded evidence and scoring rationale stored with version history. Supports regulatory inquiries and second-opinion reviews.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
          <h4>Multi-Engagement Management</h4>
          <p>Support for multiple concurrent client engagements with role-based access. Nucleus practitioners, client stakeholders and reviewers get appropriate access to individual engagements without cross-contamination.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Spec table */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">Assessment Deliverables</h2>
      <p className="pg-sub reveal" style={{"marginBottom":"8px"}}>Standard outputs from a completed NS-CMMF assessment engagement — structured for both technical and executive audiences.</p>
      <div style={{"overflowX":"auto"}} className="reveal">
        <table className="spec-tbl"><tbody>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><span className="spec-tbl-label">Executive Summary</span></div></td>
            <td>Board-ready 8–12 page summary covering aggregate trust score, domain-level ratings, benchmark comparison against sector peers, key risk areas and top remediation priorities. Formatted for board and audit committee presentation without requiring cybersecurity expertise to interpret.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/></svg></div><span className="spec-tbl-label">Domain Scorecard</span></div></td>
            <td>All 8 NS-CMMF domains scored with 5-axis breakdowns per domain. Each axis (Policy, Process, Technology, People, Measurement) rated independently at L1–L5 with evidence references. Gaps between current and target maturity highlighted per axis and domain.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div><span className="spec-tbl-label">Prioritised Roadmap</span></div></td>
            <td>All control gaps sequenced into a prioritised, effort-weighted remediation roadmap. Controls ranked by domain criticality and implementation effort — quick wins (configuration, policy) separated from structural remediation (architecture, tooling). Designed for direct use by programme managers and CISOs.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><span className="spec-tbl-label">Reassessment Baseline</span></div></td>
            <td>Assessment results locked as a baseline for the next engagement period. Multi-period trend charts generated automatically at reassessment. Organisations can demonstrate maturity improvement with before/after domain scores and evidence — not narrative assertions.</td>
          </tr>
        </tbody></table>
      </div>
    </div>
  </div>

  {/* Cross-links */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <div className="xlink-row reveal">
        <div className="xlink-card" data-go="fw-cmmf">
          <div className="xlink-label">Underlying Framework</div>
          <div className="xlink-name">NS-CMMF</div>
          <div className="xlink-desc">The 188-control, 8-domain cybersecurity maturity framework that this platform fully implements.</div>
          <div className="xlink-go">Explore NS-CMMF →</div>
        </div>
        <div className="xlink-card" data-go="pillar-cyber">
          <div className="xlink-label">Parent Pillar</div>
          <div className="xlink-name">Cybersecurity Trust &amp; Resilience</div>
          <div className="xlink-desc">The full service model, methodology and engagement outcomes for Core Pillar 1.</div>
          <div className="xlink-go">Explore Pillar 1 →</div>
        </div>
        <div className="xlink-card" data-go="sol-mdr">
          <div className="xlink-label">Related Solution</div>
          <div className="xlink-name">Managed Detection &amp; Response</div>
          <div className="xlink-desc">MDR services anchored to NS-CMMF maturity — detection events feed back into the maturity programme.</div>
          <div className="xlink-go">Explore MDR →</div>
        </div>
      </div>
    </div>
  </div>

  <div className="page-cta-band">
    <div className="wrap pcb-inner">
      <h2>See what your cybersecurity maturity actually looks like</h2>
      <p>Book a scoping call to define which NS-CMMF domains are most relevant to your sector and risk profile. We'll agree evidence requirements and a timeline before any assessment begins.</p>
      <div className="pcb-row"><Link className="btn btn-primary" to="/contact">Request a scoping call <span className="arr">→</span></Link><Link className="btn btn-ghost" to="/fw-cmmf" style={{"background":"transparent","color":"#fff","borderColor":"rgba(255,255,255,.3)"}}>Explore NS-CMMF →</Link></div>
    </div>
  </div>


    </div>
  )
}

