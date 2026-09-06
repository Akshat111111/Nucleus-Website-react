import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function PillarCyber() {
  useReveal()

  return (
    <div id="view-pillar-cyber">
      

  {/* Hero */}
  <div className="pillar-hero">
    <div className="wrap ph-inner">
      <div className="ph-eyebrow"><span className="ph-pill">Core Service Pillars</span></div>
      <h1 className="ph-h1">Pillar 1: Cybersecurity Maturity Management Framework</h1>
      <p className="ph-sub">Our Cybersecurity Maturity Management Framework &amp; Measurement Model (NS-CMMF V1.0) helps organisations move beyond fragmented compliance towards measurable cybersecurity resilience — across cloud, enterprise, and critical infrastructure environments.</p>
      <div className="pillar-fw-stats">
        <div className="pfw-stat"><span className="pfw-stat-num">188</span><span className="pfw-stat-label">Cybersecurity Controls</span></div>
        <div className="pfw-stat"><span className="pfw-stat-num">6</span><span className="pfw-stat-label">NIST CSF 2.0 Domains</span></div>
        <div className="pfw-stat"><span className="pfw-stat-num">32</span><span className="pfw-stat-label">Frameworks Mapped</span></div>
        <div className="pfw-stat"><span className="pfw-stat-num">5-Axis</span><span className="pfw-stat-label">Scoring Model</span></div>
        <div className="pfw-stat"><span className="pfw-stat-num">L1→L5</span><span className="pfw-stat-label">Maturity Scale</span></div>
      </div>
    </div>

    <div className="page-ticker">
      <div className="page-ticker-track">
        <span className="page-ticker-item"><span className="t-cat">Framework</span> NS-CMMF v1.0 · 270 Re-Engineered Cybersecurity Controls</span>
        <span className="page-ticker-item"><span className="t-cat">Domains</span> Govern · Identify · Protect · Detect · Respond · Recover</span>
        <span className="page-ticker-item"><span className="t-cat">Mapped</span> 32 International Frameworks &amp; Regulations at Article Level</span>
        <span className="page-ticker-item"><span className="t-cat">Scoring</span> 5-Axis Model · Policy · Process · Technology · People · Measurement</span>
        <span className="page-ticker-item"><span className="t-cat">Maturity</span> L1 Initial → L5 Optimised · Board-Ready Posture Output</span>
        <span className="page-ticker-item"><span className="t-cat">Standards</span> ISO 27001 · NIST CSF 2.0 · CIS Controls · SOC 2 · DORA · NIS2</span>
        <span className="page-ticker-item"><span className="t-cat">Delivery</span> Founder-Led · MDR · Penetration Testing · Incident Response</span>
        <span className="page-ticker-item"><span className="t-cat">Framework</span> NS-CMMF v1.0 · 270 Re-Engineered Cybersecurity Controls</span>
        <span className="page-ticker-item"><span className="t-cat">Domains</span> Govern · Identify · Protect · Detect · Respond · Recover</span>
        <span className="page-ticker-item"><span className="t-cat">Mapped</span> 32 International Frameworks &amp; Regulations at Article Level</span>
        <span className="page-ticker-item"><span className="t-cat">Scoring</span> 5-Axis Model · Policy · Process · Technology · People · Measurement</span>
        <span className="page-ticker-item"><span className="t-cat">Maturity</span> L1 Initial → L5 Optimised · Board-Ready Posture Output</span>
        <span className="page-ticker-item"><span className="t-cat">Standards</span> ISO 27001 · NIST CSF 2.0 · CIS Controls · SOC 2 · DORA · NIS2</span>
        <span className="page-ticker-item"><span className="t-cat">Delivery</span> Founder-Led · MDR · Penetration Testing · Incident Response</span>
      </div>
    </div>
  </div>

  {/* What we do */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <div className="pg-2col reveal">
        <div>
          <h2 className="pg-sh">What NS-CMMF v1.0 Solves</h2>
          <p style={{"fontSize":"16px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>The NS-CMMF is the most pragmatic, consultable, and regulatory-aligned cybersecurity maturity framework available for mid-market and enterprise organisations operating across multiple jurisdictions.</p>
          <p style={{"fontSize":"16px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>It addresses the single most persistent failure in cybersecurity governance: <strong style={{"color":"var(--navy)"}}>the gap between what organisations say they do and what they actually do.</strong></p>
          <p style={{"fontSize":"16px","color":"var(--slate)","lineHeight":"1.8"}}>Every control requires evidence of operation, not just evidence of policy. Compliance checks whether the right things are documented. NS-CMMF checks whether the right things <em>actually work</em>.</p>
        </div>
        <div>
          <div className="xlink-row">
            <div className="xlink-card" data-go="fw-cmmf">
              <div className="xlink-label">Proprietary Framework</div>
              <div className="xlink-name">NS-CMMF v1.0</div>
              <div className="xlink-desc">270 fully re-engineered controls + 60 integrated AI governance controls. Mapped to 32 frameworks at article and clause level.</div>
              <div className="xlink-go">Explore the framework →</div>
            </div>
            <div className="xlink-card" data-go="plat-cyber">
              <div className="xlink-label">Delivery Platform</div>
              <div className="xlink-name">Cybersecurity Maturity Platform</div>
              <div className="xlink-desc">Auto-scoring, domain heatmaps, board-ready report generation, and IC-ready evidence packs for M&amp;A transactions.</div>
              <div className="xlink-go">See the platform →</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Framework Domains */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <div className="reveal">
        <div style={{"display":"flex","alignItems":"flex-end","justifyContent":"space-between","flexWrap":"wrap","gap":"16px","marginBottom":"32px"}}>
          <div>
            <div className="about-intro-eyebrow" style={{"marginBottom":"12px"}}>Framework Architecture</div>
            <h2 style={{"fontSize":"clamp(24px,2.8vw,34px)","fontWeight":"800","color":"var(--navy)","letterSpacing":"-.03em","lineHeight":"1.1","margin":"0"}}>Framework Domains &amp; Coverage</h2>
          </div>
          <p style={{"fontSize":"14px","color":"var(--slate)","maxWidth":"480px","lineHeight":"1.65","margin":"0"}}>7 domains, 330 controls, one unified score. Each domain carries a weighted allocation — together they sum to 100% of your organisation's cybersecurity posture.</p>
        </div>

        {/* Stacked allocation bar */}
        <div className="alloc-bar">
          <div className="alloc-seg seg-gv" style={{"flex":"16"}} title="GV — Govern 16%">
            <span className="alloc-seg-code">GV</span>
            <span className="alloc-seg-pct">16%</span>
          </div>
          <div className="alloc-seg seg-id" style={{"flex":"10"}} title="ID — Identify 10%">
            <span className="alloc-seg-code">ID</span>
            <span className="alloc-seg-pct">10%</span>
          </div>
          <div className="alloc-seg seg-pr" style={{"flex":"26"}} title="PR — Protect 26%">
            <span className="alloc-seg-code">PR</span>
            <span className="alloc-seg-pct">26%</span>
          </div>
          <div className="alloc-seg seg-de" style={{"flex":"14"}} title="DE — Detect 14%">
            <span className="alloc-seg-code">DE</span>
            <span className="alloc-seg-pct">14%</span>
          </div>
          <div className="alloc-seg seg-rs" style={{"flex":"11"}} title="RS — Respond 11%">
            <span className="alloc-seg-code">RS</span>
            <span className="alloc-seg-pct">11%</span>
          </div>
          <div className="alloc-seg seg-rc" style={{"flex":"10"}} title="RC — Recover 10%">
            <span className="alloc-seg-code">RC</span>
            <span className="alloc-seg-pct">10%</span>
          </div>
          <div className="alloc-seg seg-ai" style={{"flex":"13"}} title="AI — Governance Module 13%">
            <span className="alloc-seg-code">AI</span>
            <span className="alloc-seg-pct">13%</span>
          </div>
        </div>

        {/* Legend detail rows */}
        <div className="alloc-legend">
          <div className="alloc-row alloc-gv">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">GV — Govern</span>
                <span className="alloc-name">Leadership, Strategy &amp; Risk Governance</span>
                <span className="alloc-desc">Executive accountability, cybersecurity strategy, policy framework, regulatory compliance programme, and vendor risk governance</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">16%</span>
                <span className="alloc-ctrl">35 CONTROLS</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"16%"}}></div></div>
              </div>
            </div>
          </div>
          <div className="alloc-row alloc-id">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">ID — Identify</span>
                <span className="alloc-name">Assets, Data, Risk &amp; Exposure</span>
                <span className="alloc-desc">Asset inventory, data classification, network documentation, vulnerability management, and threat landscape assessment</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">10%</span>
                <span className="alloc-ctrl">32 CONTROLS</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"10%"}}></div></div>
              </div>
            </div>
          </div>
          <div className="alloc-row alloc-pr">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">PR — Protect</span>
                <span className="alloc-name">Controls, Architecture &amp; Safeguards</span>
                <span className="alloc-desc">Identity and access management, data protection, endpoint security, network architecture, application security, cloud security, and AI security controls</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">26%</span>
                <span className="alloc-ctrl">95 CONTROLS — HIGHEST</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"26%"}}></div></div>
              </div>
            </div>
          </div>
          <div className="alloc-row alloc-de">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">DE — Detect</span>
                <span className="alloc-name">Monitoring, Detection &amp; Threat Intelligence</span>
                <span className="alloc-desc">SIEM, SOC operations, threat intelligence, behavioural analytics, cloud detection, and continuous monitoring capability</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">14%</span>
                <span className="alloc-ctrl">38 CONTROLS</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"14%"}}></div></div>
              </div>
            </div>
          </div>
          <div className="alloc-row alloc-rs">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">RS — Respond</span>
                <span className="alloc-name">Incident Management &amp; Regulatory Notification</span>
                <span className="alloc-desc">Incident response plans, scenario playbooks, regulatory notification (NIS2, DORA, GDPR), and post-incident review</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">11%</span>
                <span className="alloc-ctrl">30 CONTROLS</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"11%"}}></div></div>
              </div>
            </div>
          </div>
          <div className="alloc-row alloc-rc">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">RC — Recover</span>
                <span className="alloc-name">Resilience, Continuity &amp; Validation</span>
                <span className="alloc-desc">Business continuity, disaster recovery, recovery testing, post-recovery validation, and continuous resilience improvement</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">10%</span>
                <span className="alloc-ctrl">30 CONTROLS</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"10%"}}></div></div>
              </div>
            </div>
          </div>
          <div className="alloc-row alloc-ai alloc-ai">
            <div className="alloc-swatch" style={{"background":"#7C3AED"}}></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">AI — Governance Module (NS-AIGF Integration)</span>
                <span className="alloc-name">AI Governance, Risk &amp; Security Controls</span>
                <span className="alloc-desc">Integrated directly into NS-CMMF as the AI governance extension module — covering AI governance, AI risk management, AI security architecture, and AI operational monitoring across all 7 domains</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">13%</span>
                <span className="alloc-ctrl">60 CONTROLS ACROSS 7 DOMAINS</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"13%"}}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Framework Specification */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">Framework Specification</h2>
      <p className="pg-sub reveal" style={{"marginBottom":"8px"}}>NS-CMMF combines measurable cybersecurity maturity, operational assurance, and multi-framework regulatory alignment into a single integrated assessment and continuous improvement model.</p>
      <div style={{"overflowX":"auto"}} className="reveal">
        <table className="spec-tbl"><tbody>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><span className="spec-tbl-label">Controls</span></div></td>
            <td><strong>330 total controls</strong> — 270 fully re-engineered cybersecurity controls + 60 integrated AI governance controls, assessed together as one unified framework.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/></svg></div><span className="spec-tbl-label">Scoring Model</span></div></td>
            <td><strong>5-Axis composite score</strong> per control: Policy &amp; Governance · Implementation &amp; Operationalisation · Monitoring &amp; Measurement · Automation &amp; Integration · Resilience &amp; Assurance</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><span className="spec-tbl-label">Maturity Scale</span></div></td>
            <td>5 defined levels with <strong>7 Hard Scoring Gates</strong> that cannot be bypassed:
              <div className="maturity-levels" style={{"marginTop":"10px"}}>
                <span className="ml-chip ml-1">L1 Initial</span>
                <span className="ml-chip ml-2">L2 Developing</span>
                <span className="ml-chip ml-3">L3 Defined</span>
                <span className="ml-chip ml-4">L4 Managed</span>
                <span className="ml-chip ml-5">L5 Optimised</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></div><span className="spec-tbl-label">Framework Mapping</span></div></td>
            <td><strong>32 frameworks</strong> mapped at article and clause level: NIST CSF 2.0, ISO 27001:2022, CIS Controls v8, GDPR, NIS2, DORA, EU AI Act, Cyber Resilience Act, PCI DSS v4, HIPAA, SOX, FedRAMP, CCPA, NIST SP 800-53, NERC CIP, IEC 62443, and more.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div><span className="spec-tbl-label">Maturity Tool</span></div></td>
            <td>Excel-native and web-based assessment workbook with <strong>auto-scoring, domain heatmaps, priority gap analysis, framework filter,</strong> and board-ready report generation.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><span className="spec-tbl-label">Delivery Model</span></div></td>
            <td><strong>5-phase client programme:</strong> Baseline Assessment → Gap Analysis → Improvement Roadmap → Implementation Oversight → Continuous Reassessment</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div><span className="spec-tbl-label">Engagement Duration</span></div></td>
            <td style={{"paddingTop":"18px","paddingBottom":"18px"}}>
              <div style={{"display":"flex","gap":"40px","flexWrap":"wrap"}}>
                <span><strong style={{"display":"block","marginBottom":"2px"}}>Initial assessment</strong><span style={{"color":"var(--slate)"}}>2–4 weeks</span></span>
                <span><strong style={{"display":"block","marginBottom":"2px"}}>Ongoing advisory retainer</strong><span style={{"color":"var(--slate)"}}>Monthly</span></span>
                <span><strong style={{"display":"block","marginBottom":"2px"}}>Full maturity programme</strong><span style={{"color":"var(--slate)"}}>12–24 months</span></span>
              </div>
            </td>
          </tr>
        </tbody></table>
      </div>
    </div>
  </div>

  {/* Services */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">Services Delivered Under This Pillar</h2>
      <p className="pg-sub reveal">All services anchored to NS-CMMF and delivered through the Cybersecurity Maturity Platform.</p>
      <div className="svc2-grid">
        <div className="svc2-card reveal">
          <span className="svc2-card-num">01</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg></span>
          <h4>Cybersecurity Maturity Assessment &amp; Roadmap</h4>
          <p>Evidence-based baseline across all 13 domains with IC-ready outputs, scored maturity report, and prioritised improvement roadmap.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">02</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
          <h4>Advisory Retainer &amp; Fractional CISO</h4>
          <p>Embedded cybersecurity leadership, board risk reporting, SOC2/ISO 27001 readiness coordination, and monthly governance rhythm.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">03</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></span>
          <h4>M&amp;A Cyber &amp; Compliance Advisory</h4>
          <p>Buy-side/sell-side cyber diligence using attacker-validated evidence, Investment Committee evidence packs, and integration risk planning.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">04</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></span>
          <h4>M&amp;A Cyber Advisory for Seed &amp; Pre-Series</h4>
          <p>Security foundations for pre-seed; risk validation for Seed→Series A; growth maturity for Series A→B; exit-readiness for Series B+.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">05</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>
          <h4>DPI Cybersecurity Design, Assessment &amp; Roadmap</h4>
          <p>NS-CMMF applied to national digital public infrastructure projects with multi-stakeholder governance and public-sector delivery expertise.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">06</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></span>
          <h4>Threat, Risk &amp; Vulnerability Assessments</h4>
          <p>Penetration testing, vulnerability assessments, and Business Exposure Management including Dark Web scanning and attack surface reduction.</p>
        </div>
        <div className="svc2-card mssp reveal" style={{"gridColumn":"1/-1"}}>
          <span className="svc2-card-num">07</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M1 6l10.5 6L22 6"/><path d="M22 18H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1z"/></svg></span>
          <h4>CyberOne-Powered MSSP Services (Managed Detection &amp; Response)</h4>
          <p>24x7 AI-augmented MXDR, SOC, Endpoint Security, Zero Trust, and Incident Response delivered in partnership with CyberOne.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Why This Matters */}
  <div className="why-matters">
    <div className="wm-inner">
      <div className="reveal">
        <div className="about-intro-eyebrow" style={{"color":"var(--orange)"}}>Why This Matters</div>
        <h2 style={{"fontSize":"clamp(28px,3.5vw,44px)","fontWeight":"800","color":"#fff","letterSpacing":"-.03em","margin":"12px 0 0","lineHeight":"1.1"}}>Every service we deliver is powered<br />by one of these frameworks.</h2>
      </div>
      <div className="wm-grid">
        <div className="reveal">
          <p style={{"fontSize":"15px","color":"rgba(255,255,255,.7)","lineHeight":"1.8","marginBottom":"24px"}}>These are not theoretical models or static compliance checklists. They are operational trust instruments actively used in real-world delivery, engineering governance, executive reporting, and continuous assurance programmes globally.</p>
          <div className="wm-bullets">
            <div className="wm-bullet">We help organisations convert cybersecurity from reactive compliance into measurable operational trust.</div>
            <div className="wm-bullet">We bridge executive governance with deep engineering execution across cloud, AI, software, and critical infrastructure environments.</div>
            <div className="wm-bullet">We enable boards, investors, regulators, and customers to gain defensible confidence in the security, resilience, and trustworthiness of digital systems.</div>
            <div className="wm-bullet">Fractional CISO leadership combining cybersecurity governance, risk management, regulatory compliance, and board-level cyber risk reporting.</div>
            <div className="wm-bullet">Cloud security, DevSecOps, operational resilience, and BCP/DR programmes across enterprise and critical infrastructure.</div>
          </div>
        </div>
        <div className="reveal">
          <div className="wm-vision">
            <span className="wm-vision-label">Our Vision</span>
            <p>A world where trust is no longer assumed. It is engineered, measured, and continuously proven.</p>
          </div>
          <div style={{"marginTop":"20px","background":"rgba(255,255,255,.04)","border":"1px solid rgba(255,255,255,.1)","borderRadius":"16px","padding":"28px"}}>
            <p style={{"fontSize":"13px","color":"rgba(255,255,255,.6)","lineHeight":"1.75","margin":"0"}}>As digital ecosystems become increasingly interconnected, AI-driven, software-defined, and globally regulated, organisations require more than advisory reports. They require measurable trust, defensible assurance, operational resilience, and security programmes that can continuously adapt to emerging threats, regulatory change, and evolving technology complexity.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* CTA */}
  <div className="page-cta-band">
    <div className="wrap pcb-inner">
      <h2>Start your maturity assessment</h2>
      <p>A Nucleus Systems practitioner will scope the right NS-CMMF assessment tier for your organisation and produce a trust score within an agreed timeframe.</p>
      <div className="pcb-row"><Link className="btn btn-primary" to="/contact">Request a briefing <span className="arr">→</span></Link><Link className="btn btn-ghost" to="/fw-cmmf" style={{"background":"transparent","color":"#fff","borderColor":"rgba(255,255,255,.3)"}}>Read the NS-CMMF framework →</Link></div>
    </div>
  </div>

    </div>
  )
}

