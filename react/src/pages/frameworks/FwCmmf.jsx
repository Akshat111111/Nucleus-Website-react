import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function FwCmmf() {
  useReveal()

  return (
    <div id="view-fw-cmmf">
      

  {/* Hero */}
  <div className="pillar-hero">
    <div className="wrap ph-inner">
      <div className="ph-eyebrow"><span className="ph-pill">Proprietary Framework · Cybersecurity Maturity</span></div>
      <h1 className="ph-h1">Cybersecurity Maturity Management Framework (NS-CMMF v1.0)</h1>
      <p className="ph-sub">The most comprehensive, consultable, and regulatory-aligned cybersecurity maturity framework available — replacing fragmented compliance checklists and opaque maturity ratings with a single, evidence-based instrument for measurement and continuous improvement.</p>
      <div className="pillar-fw-stats">
        <div className="pfs-item"><span className="pfs-val">270</span><span className="pfs-lab">Re-Engineered Controls</span></div>
        <div className="pfs-item"><span className="pfs-val">5-Axis</span><span className="pfs-lab">Scoring Model</span></div>
        <div className="pfs-item"><span className="pfs-val">32</span><span className="pfs-lab">Frameworks &amp; Regs Mapped</span></div>
        <div className="pfs-item"><span className="pfs-val">6</span><span className="pfs-lab">NIST CSF Domains</span></div>
        <div className="pfs-item"><span className="pfs-val">L1–L5</span><span className="pfs-lab">Maturity Progression</span></div>
      </div>
    </div>

    <div className="page-ticker">
      <div className="page-ticker-track">
        <span className="page-ticker-item"><span className="t-cat">Controls</span> 270 Fully Re-Engineered Cybersecurity Controls</span>
        <span className="page-ticker-item"><span className="t-cat">Scoring</span> 5-Axis Model · Policy · Process · Technology · People · Measurement</span>
        <span className="page-ticker-item"><span className="t-cat">Mapped</span> 32 Frameworks &amp; Regulations at Article and Clause Level</span>
        <span className="page-ticker-item"><span className="t-cat">Standards</span> ISO 27001 · NIST CSF 2.0 · CIS Controls · SOC 2 · DORA · NIS2 · GDPR</span>
        <span className="page-ticker-item"><span className="t-cat">Maturity</span> L1 Initial → L5 Optimised · Domain-Weighted Aggregate Scoring</span>
        <span className="page-ticker-item"><span className="t-cat">Output</span> Board-Ready Posture Reports · Regulatory Evidence Packs</span>
        <span className="page-ticker-item"><span className="t-cat">Platform</span> Cybersecurity Maturity Platform · Continuous Maturity Tracking</span>
        <span className="page-ticker-item"><span className="t-cat">Controls</span> 270 Fully Re-Engineered Cybersecurity Controls</span>
        <span className="page-ticker-item"><span className="t-cat">Scoring</span> 5-Axis Model · Policy · Process · Technology · People · Measurement</span>
        <span className="page-ticker-item"><span className="t-cat">Mapped</span> 32 Frameworks &amp; Regulations at Article and Clause Level</span>
        <span className="page-ticker-item"><span className="t-cat">Standards</span> ISO 27001 · NIST CSF 2.0 · CIS Controls · SOC 2 · DORA · NIS2 · GDPR</span>
        <span className="page-ticker-item"><span className="t-cat">Maturity</span> L1 Initial → L5 Optimised · Domain-Weighted Aggregate Scoring</span>
        <span className="page-ticker-item"><span className="t-cat">Output</span> Board-Ready Posture Reports · Regulatory Evidence Packs</span>
        <span className="page-ticker-item"><span className="t-cat">Platform</span> Cybersecurity Maturity Platform · Continuous Maturity Tracking</span>
      </div>
    </div>
  </div>

  {/* What Is NS-CMMF */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <div className="pg-2col reveal">
        <div>
          <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>Why NS-CMMF Was Built</div>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>Ask any experienced CISO whether their organisation is <em>compliant</em>, and you'll hear <strong style={{"color":"var(--navy)"}}>'yes'</strong>. Ask them whether it is <em>secure</em>, and the conversation becomes considerably more nuanced. This gap is a structural failure of frameworks relied on for more than two decades.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>A single Level 3 rating for 'Endpoint Protection' can conceal an enormous range of operational realities — full-coverage behavioural EDR, automated patch management, and application allowlisting scores identically to legacy antivirus on 70% of endpoints with no formal patch process. The difference is the difference between containing a ransomware attack and losing 60% of systems before detection.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8"}}>NS-CMMF addresses this through <strong style={{"color":"var(--navy)"}}>Cybersecurity Maturity Intelligence</strong> — 270 specific, auditable controls replacing broad categories, with control-level regulatory mapping at article granularity, and financial quantification of every finding.</p>
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"16px"}}>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"26px 28px","borderLeft":"4px solid #DC2626"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#DC2626","marginBottom":"8px"}}>Problem 1 — Specificity</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"4px"}}>Controls are too imprecise to be useful</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>Where a legacy framework has one 'Endpoint Protection' control, NS-CMMF has 14 distinct, auditable sub-controls each with binary-verifiable requirements at every maturity level.</div>
          </div>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"26px 28px","borderLeft":"4px solid #D97706"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#D97706","marginBottom":"8px"}}>Problem 2 — Fragmentation</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"4px"}}>Compliance runs as a separate programme</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>Parallel ISO 27001, DORA, NIS2, and PCI DSS programmes generate five separate evidence packages from a single operational control. NS-CMMF collapses this into one.</div>
          </div>
          <div style={{"background":"var(--navy)","borderRadius":"14px","padding":"26px 28px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>Problem 3 — Communication</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"#fff","marginBottom":"4px"}}>Boards cannot act on what they receive</div>
            <div style={{"fontSize":"12.5px","color":"rgba(255,255,255,.65)","lineHeight":"1.6"}}>NS-CMMF produces a weighted score, auto-generated Board Report, and financial quantification — replacing traffic-light dashboards with governance-grade maturity intelligence.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Domain Allocation */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <div className="reveal">
        <div style={{"display":"flex","alignItems":"flex-end","justifyContent":"space-between","flexWrap":"wrap","gap":"16px","marginBottom":"32px"}}>
          <div>
            <div className="about-intro-eyebrow" style={{"marginBottom":"12px"}}>Framework Architecture</div>
            <h2 style={{"fontSize":"clamp(24px,2.8vw,34px)","fontWeight":"800","color":"var(--navy)","letterSpacing":"-.03em","lineHeight":"1.1","margin":"0"}}>Domain Weights &amp; Coverage</h2>
          </div>
          <p style={{"fontSize":"14px","color":"var(--slate)","maxWidth":"480px","lineHeight":"1.65","margin":"0"}}>NS-CMMF maps to the 6 NIST CSF 2.0 domains. Domain weights reflect empirical observation of where organisations actually fail under regulatory scrutiny — PROTECT carries the highest weight at 27%.</p>
        </div>
        <div className="alloc-bar">
          <div className="alloc-seg seg-gv" style={{"flex":"16"}} title="GV — Govern 16%"><span className="alloc-seg-code">GV</span><span className="alloc-seg-pct">16%</span></div>
          <div className="alloc-seg seg-id" style={{"flex":"10"}} title="ID — Identify 10%"><span className="alloc-seg-code">ID</span><span className="alloc-seg-pct">10%</span></div>
          <div className="alloc-seg seg-pr" style={{"flex":"27"}} title="PR — Protect 27%"><span className="alloc-seg-code">PR</span><span className="alloc-seg-pct">27%</span></div>
          <div className="alloc-seg seg-de" style={{"flex":"14"}} title="DE — Detect 14%"><span className="alloc-seg-code">DE</span><span className="alloc-seg-pct">14%</span></div>
          <div className="alloc-seg seg-rs" style={{"flex":"13"}} title="RS — Respond 13%"><span className="alloc-seg-code">RS</span><span className="alloc-seg-pct">13%</span></div>
          <div className="alloc-seg seg-rc" style={{"flex":"10"}} title="RC — Recover 10%"><span className="alloc-seg-code">RC</span><span className="alloc-seg-pct">10%</span></div>
        </div>
        <div className="alloc-legend">
          <div className="alloc-row alloc-gv">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">GV — Govern</span>
                <span className="alloc-name">Governance &amp; Organisational Context</span>
                <span className="alloc-desc">AI governance, risk management strategy, roles and responsibilities, policy framework, supply chain risk governance, and regulatory compliance programme management — including 7 dedicated AI governance controls.</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">16%</span><span className="alloc-ctrl">GOVERNANCE LAYER</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"16%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-id">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">ID — Identify</span>
                <span className="alloc-name">Asset Management &amp; Risk Assessment</span>
                <span className="alloc-desc">Asset inventory (IT, cloud, OT/ICS), vulnerability management, third-party risk identification, business environment mapping, and risk assessment methodology — including dedicated OT/ICS asset inventory control ID-08.</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">10%</span><span className="alloc-ctrl">IDENTIFY LAYER</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"10%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-pr">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">PR — Protect</span>
                <span className="alloc-name">Protective Controls &amp; Safeguards</span>
                <span className="alloc-desc">The largest domain at 27% — covering identity and access management, endpoint security (14 controls), network security, data protection, cloud security (13 controls), AI security (10 technical controls), and OT/ICS network security. Where organisations most commonly fail under attack.</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">27%</span><span className="alloc-ctrl">HIGHEST WEIGHT</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"27%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-de">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">DE — Detect</span>
                <span className="alloc-name">Threat Detection &amp; Monitoring</span>
                <span className="alloc-desc">SIEM log ingestion and coverage, anomaly and behavioural detection, threat intelligence integration, OT/ICS threat detection, and continuous security monitoring — with control-level mapping to PCI DSS, DORA, NIS2, SOX, HIPAA, GDPR, ISO 27001, and FedRAMP.</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">14%</span><span className="alloc-ctrl">DETECT LAYER</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"14%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-rs">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">RS — Respond</span>
                <span className="alloc-name">Incident Response &amp; Regulatory Notification</span>
                <span className="alloc-desc">Incident response planning and execution, NIS2 three-stage notification process (RS-18), DORA major incident reporting (RS-19), OT/ICS incident response with engineering involvement, and crisis communication governance.</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">13%</span><span className="alloc-ctrl">RESPOND LAYER</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"13%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-rc">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">RC — Recover</span>
                <span className="alloc-name">Recovery &amp; Resilience</span>
                <span className="alloc-desc">Business continuity and disaster recovery planning, backup integrity and restoration testing, OT/ICS safety validation before operational resumption (RC-15), lessons learned integration, and resilience maturity measurement.</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">10%</span><span className="alloc-ctrl">RECOVER LAYER</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"10%"}}></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* 5-Axis Scoring */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">Framework Specification</h2>
      <p className="pg-sub reveal" style={{"marginBottom":"8px"}}>NS-CMMF scores every control across five independent dimensions, applies seven non-negotiable hard gates, and maps each finding to its applicable regulatory obligations at the article level — producing an assessment that is simultaneously board-ready, audit-ready, and investment-grade.</p>
      <div style={{"overflowX":"auto"}} className="reveal">
        <table className="spec-tbl"><tbody>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon" style={{"background":"rgba(220,38,38,.08)"}}><svg viewBox="0 0 24 24" style={{"stroke":"#DC2626"}}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><span className="spec-tbl-label">Design · 20%</span></div></td>
            <td>Is the control well-designed for its intended purpose? Policy documented and reviewed within 12 months; regulatory mapping explicit; design addresses the specific threat scenario; approved by the appropriate authority.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon" style={{"background":"rgba(234,88,12,.08)"}}><svg viewBox="0 0 24 24" style={{"stroke":"#EA580C"}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><span className="spec-tbl-label">Coverage · 25%</span></div></td>
            <td>Is the control deployed across 100% of the in-scope population? Coverage ≥ 95% of in-scope assets; exceptions formally documented with named owner and expiry; scope confirmed through automated discovery.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon" style={{"background":"rgba(217,119,6,.08)"}}><svg viewBox="0 0 24 24" style={{"stroke":"#D97706"}}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><span className="spec-tbl-label">Operating · 25%</span></div></td>
            <td>Does the control operate consistently in production? 3-month operational evidence available; SLA adherence ≥ 95%; exceptions trigger formal exception process; no evidence of control bypassing or workarounds.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon" style={{"background":"rgba(22,163,74,.08)"}}><svg viewBox="0 0 24 24" style={{"stroke":"#16A34A"}}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><span className="spec-tbl-label">Monitoring · 20%</span></div></td>
            <td>Is the control independently tested and validated? KPI or KRI defined and measured; annual independent test; exceptions trigger formal escalation; trend reporting active.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon" style={{"background":"rgba(8,145,178,.08)"}}><svg viewBox="0 0 24 24" style={{"stroke":"#0891B2"}}><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><span className="spec-tbl-label">Automation · 10%</span></div></td>
            <td>Is the control automated, self-healing, and continuously evidenced? Partial automation of evidence generation; alert on control failure; evidence does not rely entirely on manual collection.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></div><span className="spec-tbl-label">Framework Alignment</span></div></td>
            <td><strong>32 frameworks and regulations</strong> mapped at article and section level — NIST CSF 2.0 · ISO/IEC 27001:2022 · CIS Controls v8 · GDPR · NIS2 · DORA · Cyber Resilience Act · HIPAA · SOX · PCI DSS v4 · FedRAMP · EU AI Act · NIST AI RMF · ISO 42001 · OWASP LLM Top 10 · IEC 62443 and more.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><span className="spec-tbl-label">Hard Scoring Gates</span></div></td>
            <td>Seven non-negotiable ceiling constraints prevent any composite score from exceeding a defined level regardless of the five-axis score:
              <div className="maturity-levels" style={{"marginTop":"10px"}}>
                <span className="ml-chip ml-1">No owner → Max L2</span>
                <span className="ml-chip ml-2">No 3-month evidence → Max L3</span>
                <span className="ml-chip ml-3">No KPI/KRI → Max L4</span>
                <span className="ml-chip ml-4">No automation → Max L5</span>
                <span className="ml-chip ml-1">Reg obligation unmet → Max L2</span>
                <span className="ml-chip ml-1">Interview-only evidence → Max L2</span>
                <span className="ml-chip ml-5">Attestation-only → Max L1.5</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div><span className="spec-tbl-label">Assessment Tool</span></div></td>
            <td>Excel-native workbook with auto-scoring, <strong>1,350 auto-generated recommendations</strong> (5 per control × 270 controls), priority roadmap auto-sorted by <em>Gap × Domain Weight</em>, 32-framework filter for instant regulatory evidence packaging, 44-row assessment history for longitudinal tracking, and 200-row evidence register with expiry management.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><span className="spec-tbl-label">Delivery Model</span></div></td>
            <td>10–12 business day engagement from scoping to final delivery. 188+ stakeholder interviews across CISO, CTO, DPO, Head of IT, AppSec, Cloud, and OT leads. Deliverables: scored assessment tool, regulatory exposure matrix, prioritised 12-month roadmap, board presentation, and 32-framework compliance reports.</td>
          </tr>
        </tbody></table>
      </div>
    </div>
  </div>

  {/* AI, Cloud & OT */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <div className="reveal" style={{"marginBottom":"36px"}}>
        <div className="about-intro-eyebrow" style={{"marginBottom":"12px"}}>Built for 2026's Threat Landscape</div>
        <h2 style={{"fontSize":"clamp(22px,2.6vw,32px)","fontWeight":"800","color":"var(--navy)","letterSpacing":"-.03em","lineHeight":"1.1","marginBottom":"12px"}}>AI, Cloud &amp; OT — Natively Addressed</h2>
        <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.75","maxWidth":"720px"}}>Legacy frameworks respond to new threats at the pace of their governance committees — typically 3–5 years between major updates. NS-CMMF was built from the ground up for today's attack landscape, not retrofitted from a 2018 baseline.</p>
      </div>
      <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr 1fr","gap":"16px"}} className="reveal">
        <div style={{"background":"#fff","border":"1px solid var(--line)","borderRadius":"16px","overflow":"hidden"}}>
          <div style={{"background":"linear-gradient(135deg,#7C3AED,#4F46E5)","padding":"24px 24px 20px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"rgba(255,255,255,.65)","marginBottom":"8px"}}>Artificial Intelligence</div>
            <div style={{"fontSize":"20px","fontWeight":"800","color":"#fff","lineHeight":"1.2"}}>17 AI Controls</div>
            <div style={{"fontSize":"12px","color":"rgba(255,255,255,.7)","marginTop":"4px"}}>7 GV governance + 10 PR technical</div>
          </div>
          <div style={{"padding":"20px 24px","display":"flex","flexDirection":"column","gap":"9px"}}>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.5"}}><strong style={{"color":"var(--navy)"}}>GV-29–35:</strong> AI Governance Committee, Risk Classification, Acceptable Use Policy, Shadow AI Detection, Ethics, Model Lifecycle, GenAI/LLM Risk</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.5"}}><strong style={{"color":"var(--navy)"}}>PR-86–95:</strong> Prompt injection prevention, model access control, output monitoring, training data provenance, adversarial testing, model supply chain security, RAG security, agentic system security, deepfake detection</div>
            <div style={{"fontSize":"11px","color":"#7C3AED","fontWeight":"700","fontFamily":"var(--mono)","letterSpacing":".08em","marginTop":"4px"}}>EU AI ACT · NIST AI RMF · ISO 42001 · OWASP LLM TOP 10</div>
          </div>
        </div>
        <div style={{"background":"#fff","border":"1px solid var(--line)","borderRadius":"16px","overflow":"hidden"}}>
          <div style={{"background":"linear-gradient(135deg,#0891B2,#2563EB)","padding":"24px 24px 20px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"rgba(255,255,255,.65)","marginBottom":"8px"}}>Cloud-Native Security</div>
            <div style={{"fontSize":"20px","fontWeight":"800","color":"#fff","lineHeight":"1.2"}}>13 Cloud Controls</div>
            <div style={{"fontSize":"12px","color":"rgba(255,255,255,.7)","marginTop":"4px"}}>5 new in v1.0 for multi-cloud reality</div>
          </div>
          <div style={{"padding":"20px 24px","display":"flex","flexDirection":"column","gap":"8px"}}>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.5"}}><strong style={{"color":"var(--navy)"}}>PR-81:</strong> Configuration Drift Prevention — IaC enforcement, drift detection ≤15 min</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.5"}}><strong style={{"color":"var(--navy)"}}>PR-82:</strong> Kubernetes Security — CIS benchmark, network policies, RBAC hardened</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.5"}}><strong style={{"color":"var(--navy)"}}>PR-83:</strong> Cloud Workload Protection — VMs, containers, serverless</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.5"}}><strong style={{"color":"var(--navy)"}}>PR-84:</strong> Multi-Cloud Identity Federation — unified governance across all CSPs</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.5"}}><strong style={{"color":"var(--navy)"}}>PR-85:</strong> FinSec — cost anomaly detection correlated with security events</div>
          </div>
        </div>
        <div style={{"background":"#fff","border":"1px solid var(--line)","borderRadius":"16px","overflow":"hidden"}}>
          <div style={{"background":"linear-gradient(135deg,#16A34A,#0D9488)","padding":"24px 24px 20px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"rgba(255,255,255,.65)","marginBottom":"8px"}}>Operational Technology</div>
            <div style={{"fontSize":"20px","fontWeight":"800","color":"#fff","lineHeight":"1.2"}}>5 OT/ICS Controls</div>
            <div style={{"fontSize":"12px","color":"rgba(255,255,255,.7)","marginTop":"4px"}}>First systematic OT coverage in a general-purpose framework</div>
          </div>
          <div style={{"padding":"20px 24px","display":"flex","flexDirection":"column","gap":"8px"}}>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.5"}}><strong style={{"color":"var(--navy)"}}>ID-08:</strong> OT/ICS Asset Inventory — protocol mapping and security zone classification</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.5"}}><strong style={{"color":"var(--navy)"}}>PR-58:</strong> OT/ICS Network Security — IT/OT boundary firewall, unidirectional gateways</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.5"}}><strong style={{"color":"var(--navy)"}}>DE-25:</strong> OT/ICS Threat Detection — OT-native IDS, industrial protocol monitoring</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.5"}}><strong style={{"color":"var(--navy)"}}>RS-17:</strong> OT/ICS Incident Response — engineering involvement mandatory</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.5"}}><strong style={{"color":"var(--navy)"}}>RC-15:</strong> OT/ICS Recovery — engineering safety validation before resumption</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* What the assessment produces */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">What an NS-CMMF Assessment Produces</h2>
      <p className="pg-sub reveal">The output is not a report — it is an evidence base, a precision roadmap, and a financial model that any board member, regulator, or investor committee can act on directly.</p>
      <div className="svc2-grid">
        <div className="svc2-card reveal">
          <span className="svc2-card-num">01</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/></svg></span>
          <h4>Board-Ready Maturity Score</h4>
          <p>A weighted overall score defensible before a board audit committee — based on specific, documented evidence at the control level, not a traffic-light dashboard. A board member who asks "how do we know this control works?" gets directed to 3-month operational evidence and KPI trend data.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">02</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></span>
          <h4>Regulatory Evidence Packages</h4>
          <p>The 32-framework filter generates instant regulatory evidence packages. When a regulator requests DORA ICT risk management capability evidence, the package for all DORA-mapped controls is immediately available — assembled during the assessment, not reconstructed under time pressure.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">03</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></span>
          <h4>Prioritised Improvement Roadmap</h4>
          <p>1,350 auto-generated recommendations sorted by Priority Score (Gap × Domain Weight). A control currently at L2 receives the L2→L3 recommendation — not generic advice to 'improve'. Each recommendation includes effort estimate, target quarter, owner assignment, and status tracking.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">04</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
          <h4>Longitudinal Assessment History</h4>
          <p>44-row assessment history providing a board-presentable, audit-ready evidence trail demonstrating consistent security programme maturity over 3–5 years of quarterly or semi-annual assessments — one of the most compelling evidence artefacts in regulatory investigations and M&amp;A due diligence.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Platform callout */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <div className="reveal">
        <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>Assessment Platform</div>
        <div className="platform-callout">
          <div>
            <h3>Cybersecurity Maturity Platform</h3>
            <p>Purpose-built for continuous NS-CMMF assessment, scoring, and executive reporting. Turns point-in-time audits into a live maturity index that boards can track and regulators will accept. Auto-populates the roadmap from assessment findings, generates 32-framework regulatory evidence packages on demand, tracks evidence expiry through a 200-row evidence register, and produces board-ready reports with a single export.</p>
          </div>
          <div><Link className="btn btn-primary" to="/contact">Request a demo <span className="arr">→</span></Link></div>
        </div>
      </div>
    </div>
  </div>

  {/* CTA */}
  <div className="page-cta-band">
    <div className="wrap pcb-inner">
      <h2>Move from checkbox compliance to measurable, defensible security maturity</h2>
      <p>We assess your posture across all 270 controls, produce a precision roadmap, and deliver regulatory evidence packages your team can act on immediately.</p>
      <div className="pcb-row"><Link className="btn btn-primary" to="/contact">Request a briefing <span className="arr">→</span></Link><Link className="btn btn-ghost" to="/pillar-cyber" style={{"background":"transparent","color":"#fff","borderColor":"rgba(255,255,255,.3)"}}>Explore Core Pillar 1 →</Link></div>
    </div>
  </div>


    </div>
  )
}

