import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function PillarAIGov() {
  useReveal()

  return (
    <div id="view-pillar-aigov">
      

  {/* Hero */}
  <div className="pillar-hero">
    <div className="wrap ph-inner">
      <div className="ph-eyebrow"><span className="ph-pill">Core Service Pillars</span></div>
      <h1 className="ph-h1">Pillar 2A: AI Governance Framework (NS-AIGF v1.0)</h1>
      <p className="ph-sub">An integrated framework that simultaneously satisfies EU AI Act, ISO/IEC 42001, and NIST AI RMF obligations — consolidating fragmented compliance into a unified, evidence-based, board-ready model for continuous AI accountability.</p>
      <div className="pillar-fw-stats">
        <div className="pfs-item"><span className="pfs-val">60</span><span className="pfs-lab">Governance Controls</span></div>
        <div className="pfs-item"><span className="pfs-val">7</span><span className="pfs-lab">Governance Domains</span></div>
        <div className="pfs-item"><span className="pfs-val">43</span><span className="pfs-lab">Global AI Frameworks</span></div>
        <div className="pfs-item"><span className="pfs-val">300</span><span className="pfs-lab">Maturity Interpretations</span></div>
        <div className="pfs-item"><span className="pfs-val">L1→L5</span><span className="pfs-lab">Maturity Scale</span></div>
      </div>
    </div>

    <div className="page-ticker">
      <div className="page-ticker-track">
        <span className="page-ticker-item"><span className="t-cat">Framework</span> NS-AIGF v1.0 · 60 AI Governance Controls</span>
        <span className="page-ticker-item"><span className="t-cat">Domains</span> 7 Weighted Domains · Risk Classification · Transparency · Oversight</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> EU AI Act · ISO 42001 · NIST AI RMF · OECD AI Principles</span>
        <span className="page-ticker-item"><span className="t-cat">Coverage</span> High-Risk AI · GenAI · Foundation Models · Agentic Systems</span>
        <span className="page-ticker-item"><span className="t-cat">Output</span> Board-Level AI Trust Reports · Governance Dashboards · Audit Trails</span>
        <span className="page-ticker-item"><span className="t-cat">Unified</span> 3 Major AI Governance Frameworks Consolidated into One Assessment</span>
        <span className="page-ticker-item"><span className="t-cat">Platform</span> Paxley · Continuous NS-AIGF Monitoring</span>
        <span className="page-ticker-item"><span className="t-cat">Framework</span> NS-AIGF v1.0 · 60 AI Governance Controls</span>
        <span className="page-ticker-item"><span className="t-cat">Domains</span> 7 Weighted Domains · Risk Classification · Transparency · Oversight</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> EU AI Act · ISO 42001 · NIST AI RMF · OECD AI Principles</span>
        <span className="page-ticker-item"><span className="t-cat">Coverage</span> High-Risk AI · GenAI · Foundation Models · Agentic Systems</span>
        <span className="page-ticker-item"><span className="t-cat">Output</span> Board-Level AI Trust Reports · Governance Dashboards · Audit Trails</span>
        <span className="page-ticker-item"><span className="t-cat">Unified</span> 3 Major AI Governance Frameworks Consolidated into One Assessment</span>
        <span className="page-ticker-item"><span className="t-cat">Platform</span> Paxley · Continuous NS-AIGF Monitoring</span>
      </div>
    </div>
  </div>

  {/* What Is NS-AIGF */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <div className="pg-2col reveal">
        <div>
          <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>What Is NS-AIGF v1.0 and Why Was It Built?</div>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>The Nucleus Systems AI Governance Framework and Maturity Measurement Model (NS-AIGF v1.0) was purpose-built to address the single most critical governance gap of our era: <strong style={{"color":"var(--navy)"}}>organisations are deploying AI at speed while governing it at near-zero velocity.</strong></p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>The EU AI Act carries penalties of up to <strong style={{"color":"var(--navy)"}}>7% of global annual turnover</strong>. ISO 42001 certification is becoming part of enterprise procurement requirements. NIST AI RMF is board-level currency across 40+ jurisdictions.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8"}}>NS-AIGF converts AI governance from regulatory anxiety into a managed, auditable, board-reportable programme with measurable progress.</p>
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"16px"}}>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"28px 32px","borderLeft":"4px solid #DC2626"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#DC2626","marginBottom":"8px"}}>EU AI Act</div>
            <div style={{"fontSize":"14px","fontWeight":"700","color":"var(--navy)","marginBottom":"4px"}}>Up to 7% global turnover</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>Penalties for non-compliance with high-risk AI obligations</div>
          </div>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"28px 32px","borderLeft":"4px solid #2563EB"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#2563EB","marginBottom":"8px"}}>ISO/IEC 42001 · NIST AI RMF</div>
            <div style={{"fontSize":"14px","fontWeight":"700","color":"var(--navy)","marginBottom":"4px"}}>40+ jurisdictions</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>NIST AI RMF is board-level currency; ISO 42001 entering procurement criteria</div>
          </div>
          <div style={{"background":"var(--navy)","borderRadius":"14px","padding":"28px 32px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>NS-AIGF Outcome</div>
            <div style={{"fontSize":"14px","fontWeight":"700","color":"#fff","marginBottom":"4px"}}>Regulatory anxiety → managed programme</div>
            <div style={{"fontSize":"12.5px","color":"rgba(255,255,255,.65)","lineHeight":"1.6"}}>Auditable, board-reportable AI governance with measurable maturity progress</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Framework Domains & Coverage */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <div className="reveal">
        <div style={{"display":"flex","alignItems":"flex-end","justifyContent":"space-between","flexWrap":"wrap","gap":"16px","marginBottom":"32px"}}>
          <div>
            <div className="about-intro-eyebrow" style={{"marginBottom":"12px"}}>Framework Architecture</div>
            <h2 style={{"fontSize":"clamp(24px,2.8vw,34px)","fontWeight":"800","color":"var(--navy)","letterSpacing":"-.03em","lineHeight":"1.1","margin":"0"}}>Framework Domains &amp; Coverage</h2>
          </div>
          <p style={{"fontSize":"14px","color":"var(--slate)","maxWidth":"480px","lineHeight":"1.65","margin":"0"}}>7 integrated governance domains, 60 controls, one unified maturity score. Each domain carries a weighted allocation reflecting EU AI Act enforcement priorities — together they sum to 100%.</p>
        </div>

        {/* Allocation bar */}
        <div className="alloc-bar">
          <div className="alloc-seg seg-d1" style={{"flex":"18"}} title="D1 — Governance 18%">
            <span className="alloc-seg-code">D1</span>
            <span className="alloc-seg-pct">18%</span>
          </div>
          <div className="alloc-seg seg-d2" style={{"flex":"22"}} title="D2 — Risk & Compliance 22%">
            <span className="alloc-seg-code">D2</span>
            <span className="alloc-seg-pct">22%</span>
          </div>
          <div className="alloc-seg seg-d3" style={{"flex":"15"}} title="D3 — Lifecycle 15%">
            <span className="alloc-seg-code">D3</span>
            <span className="alloc-seg-pct">15%</span>
          </div>
          <div className="alloc-seg seg-d4" style={{"flex":"12"}} title="D4 — Data 12%">
            <span className="alloc-seg-code">D4</span>
            <span className="alloc-seg-pct">12%</span>
          </div>
          <div className="alloc-seg seg-d5" style={{"flex":"12"}} title="D5 — Responsible AI 12%">
            <span className="alloc-seg-code">D5</span>
            <span className="alloc-seg-pct">12%</span>
          </div>
          <div className="alloc-seg seg-d6" style={{"flex":"13"}} title="D6 — AI Security 13%">
            <span className="alloc-seg-code">D6</span>
            <span className="alloc-seg-pct">13%</span>
          </div>
          <div className="alloc-seg seg-d7" style={{"flex":"8"}} title="D7 — Audit 8%">
            <span className="alloc-seg-code">D7</span>
            <span className="alloc-seg-pct">8%</span>
          </div>
        </div>

        {/* Legend */}
        <div className="alloc-legend">
          <div className="alloc-row alloc-d1">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D1 — Governance</span>
                <span className="alloc-name">AI Governance &amp; Organisational Oversight</span>
                <span className="alloc-desc">8 controls covering governance structure, executive accountability, AI policy frameworks, ethics committee, internal audit of AI systems, and board-level AI oversight</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">18%</span>
                <span className="alloc-ctrl">8 CONTROLS</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"18%"}}></div></div>
              </div>
            </div>
          </div>
          <div className="alloc-row alloc-d2">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D2 — Risk &amp; Compliance</span>
                <span className="alloc-name">AI Risk Classification &amp; EU AI Act Controls</span>
                <span className="alloc-desc">8 controls covering AI system risk classification, EU AI Act Annex III obligations, high-risk AI documentation (Art. 11), human oversight mechanisms (Art. 14), conformity assessment (Art. 43), and incident reporting (Art. 73)</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">22%</span>
                <span className="alloc-ctrl">8 CONTROLS — HIGHEST</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"22%"}}></div></div>
              </div>
            </div>
          </div>
          <div className="alloc-row alloc-d3">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D3 — Lifecycle</span>
                <span className="alloc-name">AI Lifecycle &amp; Model Governance</span>
                <span className="alloc-desc">10 controls covering model registries, version control, testing gates, release management, shadow AI detection, model retirement, and lifecycle documentation</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">15%</span>
                <span className="alloc-ctrl">10 CONTROLS</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"15%"}}></div></div>
              </div>
            </div>
          </div>
          <div className="alloc-row alloc-d4">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D4 — Data</span>
                <span className="alloc-name">Data Governance for AI</span>
                <span className="alloc-desc">8 controls covering training data quality, dataset bias assessment, privacy compliance for AI data, data minimisation, labelling governance, and data drift monitoring</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">12%</span>
                <span className="alloc-ctrl">8 CONTROLS</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"12%"}}></div></div>
              </div>
            </div>
          </div>
          <div className="alloc-row alloc-d5">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D5 — Responsible AI</span>
                <span className="alloc-name">Fairness, Explainability &amp; Responsible AI</span>
                <span className="alloc-desc">8 controls covering fairness testing across protected characteristics, explainability mechanisms, human override capability, ethical review processes, and fundamental rights impact assessment</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">12%</span>
                <span className="alloc-ctrl">8 CONTROLS</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"12%"}}></div></div>
              </div>
            </div>
          </div>
          <div className="alloc-row alloc-d6">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D6 — AI Security</span>
                <span className="alloc-name">AI Security &amp; Operational Monitoring</span>
                <span className="alloc-desc">10 controls covering AI endpoint access controls, prompt-injection prevention, adversarial testing, model-extraction protection, output monitoring, and AI supply-chain security</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">13%</span>
                <span className="alloc-ctrl">10 CONTROLS</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"13%"}}></div></div>
              </div>
            </div>
          </div>
          <div className="alloc-row alloc-d7 alloc-ai">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D7 — Audit</span>
                <span className="alloc-name">Incident, Compliance &amp; Auditability</span>
                <span className="alloc-desc">8 controls covering AI incident management, regulatory reporting, audit trail maintenance, continuous compliance monitoring, and third-party AI vendor risk management</span>
              </div>
              <div className="alloc-stats">
                <span className="alloc-pct-big">8%</span>
                <span className="alloc-ctrl">8 CONTROLS</span>
                <div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"8%"}}></div></div>
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
      <p className="pg-sub reveal" style={{"marginBottom":"8px"}}>NS-AIGF provides a structured, measurable, and regulatory-aligned framework for operationalising AI governance, safety, security, and continuous assurance across enterprise AI ecosystems.</p>
      <div style={{"overflowX":"auto"}} className="reveal">
        <table className="spec-tbl"><tbody>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><span className="spec-tbl-label">Controls</span></div></td>
            <td><strong>60 fully defined governance controls</strong> with core requirements, implementation guidance, and regulatory alignment citations for EU AI Act, ISO 42001, and NIST AI RMF.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/></svg></div><span className="spec-tbl-label">Scoring Model</span></div></td>
            <td><strong>5-axis maturity assessment</strong> with domain weights reflecting EU AI Act enforcement priorities: D2 Risk &amp; Compliance at 22% (highest weight, reflecting enforcement severity) through D7 Audit at 8%.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><span className="spec-tbl-label">Maturity Scale</span></div></td>
            <td>L1 Initial → L2 Managed → L3 Defined → L4 Quantitative → L5 Optimising — with <strong>300 control-specific level interpretations</strong> (5 levels × 60 controls).
              <div className="maturity-levels" style={{"marginTop":"10px"}}>
                <span className="ml-chip ml-1">L1 Initial</span>
                <span className="ml-chip ml-2">L2 Managed</span>
                <span className="ml-chip ml-3">L3 Defined</span>
                <span className="ml-chip ml-4">L4 Quantitative</span>
                <span className="ml-chip ml-5">L5 Optimising</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></div><span className="spec-tbl-label">Regulatory Alignment</span></div></td>
            <td>Simultaneous alignment to: <strong>EU AI Act</strong> (Reg. EU 2024/1689) · <strong>ISO/IEC 42001:2023</strong> · <strong>NIST AI RMF v1.0</strong> · GDPR · POPIA · OWASP LLM Top 10 · OECD AI Principles</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg></div><span className="spec-tbl-label">Scoping Mechanism</span></div></td>
            <td><strong>20-question organisational profiler</strong> automatically tailors control applicability to each client's context, AI footprint, sector, and regulatory jurisdiction.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div><span className="spec-tbl-label">Assessment Tool</span></div></td>
            <td><strong>8-module AI Governance Maturity Management Excel-Native Tool</strong> producing board-ready governance reports, prioritised improvement roadmaps, ISO 42001 readiness indicators, and longitudinal maturity tracking automatically.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><span className="spec-tbl-label">Delivery Model</span></div></td>
            <td><strong>5-phase programme:</strong> Baseline Assessment → Gap Analysis → Remediation Programme → Assurance Review → Continuous Reassessment (quarterly or annual)</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><span className="spec-tbl-label">ISO 42001 Pathway</span></div></td>
            <td><strong>Integrated 5-phase certification pathway</strong> with Nucleus Systems as advisory partner from baseline through certification readiness.</td>
          </tr>
        </tbody></table>
      </div>
    </div>
  </div>

  {/* Platform */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <div className="reveal">
        <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>AI Governance Framework &amp; Maturity Measurement Platform</div>
        <div className="platform-callout">
          <div>
            <h3>Paxley AI Governance &amp; Maturity Management Platform</h3>
            <p>The technology delivery engine for NS-AIGF assessments and ongoing AI governance programmes. Provides a structured AI Trust Framework assessment engine, five-level maturity scoring with domain heatmaps, a policy library aligned to the EU AI Act and NIST AI RMF, regulatory alignment modules, AI risk register management, ISO 42001 readiness tracking, and board-ready reporting. Organisations can conduct self-assessments or run Nucleus Systems-facilitated governance programmes at scale.</p>
          </div>
          <div><Link className="btn btn-primary" to="/paxley">See Paxley <span className="arr">→</span></Link></div>
        </div>
      </div>
    </div>
  </div>

  {/* Services */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">Services Delivered Under This Pillar</h2>
      <p className="pg-sub reveal">All services anchored to NS-AIGF v1.0 and delivered through the Paxley AI Governance Platform.</p>
      <div className="svc2-grid">
        <div className="svc2-card reveal">
          <span className="svc2-card-num">01</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg></span>
          <h4>AI Governance Assessment &amp; Maturity Programme</h4>
          <p>NS-AIGF assessment covering risk classification, governance gaps, and compliance posture — with board-ready AI Risk Report and 12-month roadmap.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">02</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>
          <h4>EU AI Act Compliance Programme</h4>
          <p>End-to-end programme from Article 11 technical documentation through Article 43 conformity assessment for high-risk AI systems, with Nucleus as named advisory partner.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">03</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>
          <h4>ISO 42001 Certification Management</h4>
          <p>Structured 5-phase certification pathway using NS-AIGF as the assessment instrument — gap analysis, remediation, and certification readiness reporting.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">04</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
          <h4>Board AI Risk Advisory</h4>
          <p>Translating AI risk into business and regulatory language for boards, audit committees, and investment committees — supporting AI disclosures in annual reports and regulatory filings.</p>
        </div>
      </div>
    </div>
  </div>

  {/* CTA */}
  <div className="page-cta-band">
    <div className="wrap pcb-inner">
      <h2>Build an AI governance programme your board can stand behind</h2>
      <p>We scope NS-AIGF assessments to your current AI footprint and regulatory obligations, delivering a prioritised roadmap your board can act on.</p>
      <div className="pcb-row"><Link className="btn btn-primary" to="/contact">Request a briefing <span className="arr">→</span></Link></div>
    </div>
  </div>


    </div>
  )
}

