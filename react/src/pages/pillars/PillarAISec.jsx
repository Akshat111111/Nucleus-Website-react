import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function PillarAISec() {
  useReveal()

  return (
    <div id="view-pillar-aisec">
      

  {/* Hero */}
  <div className="pillar-hero">
    <div className="wrap ph-inner">
      <div className="ph-eyebrow"><span className="ph-pill">Core Service Pillars</span></div>
      <h1 className="ph-h1">Pillar 2B: AI Security Controls Architecture (NS-AISCA v1.0)</h1>
      <p className="ph-sub">A complete, evidence-based, maturity-scored AI security controls architecture securing the entire AI attack surface — across data, model, prompt, RAG, agent, tool, pipeline, cloud runtime, monitoring, assurance, and incident response.</p>
      <div className="pillar-fw-stats">
        <div className="pfs-item"><span className="pfs-val">108</span><span className="pfs-lab">AI Security Controls</span></div>
        <div className="pfs-item"><span className="pfs-val">12</span><span className="pfs-lab">Security Domains</span></div>
        <div className="pfs-item"><span className="pfs-val">20+</span><span className="pfs-lab">Standards Aligned</span></div>
        <div className="pfs-item"><span className="pfs-val">5</span><span className="pfs-lab">Evidence Grades</span></div>
        <div className="pfs-item"><span className="pfs-val">L1→L5</span><span className="pfs-lab">Maturity Scale</span></div>
      </div>
    </div>

    <div className="page-ticker">
      <div className="page-ticker-track">
        <span className="page-ticker-item"><span className="t-cat">Framework</span> NS-AISCA v1.0 · 108 AI Security Controls · 12 Domains</span>
        <span className="page-ticker-item"><span className="t-cat">Threats</span> Adversarial ML · Data Poisoning · Model Extraction · Prompt Injection</span>
        <span className="page-ticker-item"><span className="t-cat">GenAI</span> Native LLM Coverage · RAG Security · Agentic Pipeline Controls</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> OWASP LLM Top 10 · MITRE ATLAS · NIST AI RMF · ISO 42001</span>
        <span className="page-ticker-item"><span className="t-cat">Maturity</span> 5 Maturity Levels · 5 Evidence Grades · Structured Domain Scoring</span>
        <span className="page-ticker-item"><span className="t-cat">Testing</span> LLM Red Teaming · Adversarial Testing · Model Robustness Assessment</span>
        <span className="page-ticker-item"><span className="t-cat">Output</span> AI Security Posture Report · Threat Model · Remediation Roadmap</span>
        <span className="page-ticker-item"><span className="t-cat">Framework</span> NS-AISCA v1.0 · 108 AI Security Controls · 12 Domains</span>
        <span className="page-ticker-item"><span className="t-cat">Threats</span> Adversarial ML · Data Poisoning · Model Extraction · Prompt Injection</span>
        <span className="page-ticker-item"><span className="t-cat">GenAI</span> Native LLM Coverage · RAG Security · Agentic Pipeline Controls</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> OWASP LLM Top 10 · MITRE ATLAS · NIST AI RMF · ISO 42001</span>
        <span className="page-ticker-item"><span className="t-cat">Maturity</span> 5 Maturity Levels · 5 Evidence Grades · Structured Domain Scoring</span>
        <span className="page-ticker-item"><span className="t-cat">Testing</span> LLM Red Teaming · Adversarial Testing · Model Robustness Assessment</span>
        <span className="page-ticker-item"><span className="t-cat">Output</span> AI Security Posture Report · Threat Model · Remediation Roadmap</span>
      </div>
    </div>
  </div>

  {/* What Is NS-AISCA */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <div className="pg-2col reveal">
        <div>
          <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>What Is NS-AISCA v1.0 and Why Was It Built?</div>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>The Nucleus Systems AI Security Controls Architecture (NS-AISCA v1.0) is the <strong style={{"color":"var(--navy)"}}>technical security counterpart to AI governance.</strong> It converts AI security principles, standards, threat models, and regulatory obligations into a single control-driven architecture that can be assessed, evidenced, scored, reported, and continuously improved.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8"}}>NS-AISCA was built because AI security is not a single prompt filter, model test, cloud setting, or policy. It is a <strong style={{"color":"var(--navy)"}}>layered control architecture</strong> protecting the entire AI decision and action chain across classical ML, GenAI, RAG, AI APIs, autonomous agents, cloud-hosted AI services, AI-enabled products, and third-party foundation-model consumption.</p>
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"16px"}}>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"26px 30px","borderLeft":"4px solid #DC2626"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#DC2626","marginBottom":"8px"}}>The Problem</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"4px"}}>AI security ≠ a single control</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>Prompt filters, model tests, cloud settings, and policies are each necessary but none are sufficient alone</div>
          </div>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"26px 30px","borderLeft":"4px solid #0891B2"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#0891B2","marginBottom":"8px"}}>The Architecture</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"4px"}}>108 controls · 12 domains · full attack surface</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>Data · Model · Prompt · RAG · Agent · Tool · Pipeline · Cloud · Monitoring · Assurance · IR</div>
          </div>
          <div style={{"background":"var(--navy)","borderRadius":"14px","padding":"26px 30px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>The Outcome</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"#fff","marginBottom":"4px"}}>Defensible AI security posture</div>
            <div style={{"fontSize":"12.5px","color":"rgba(255,255,255,.65)","lineHeight":"1.6"}}>Evidence-based scores boards, regulators, customers, investors, and acquirers can rely on</div>
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
          <p style={{"fontSize":"14px","color":"var(--slate)","maxWidth":"480px","lineHeight":"1.65","margin":"0"}}>12 weighted security domains, 108 controls, one unified posture score. Each domain secures a distinct layer of the AI attack surface — together they sum to 100%.</p>
        </div>

        {/* Allocation bar — 12 segments */}
        <div className="alloc-bar">
          <div className="alloc-seg seg-d1" style={{"flex":"8"}} title="D1 — Governance 8%"><span className="alloc-seg-code">D1</span><span className="alloc-seg-pct">8%</span></div>
          <div className="alloc-seg seg-d2" style={{"flex":"8"}} title="D2 — Inventory 8%"><span className="alloc-seg-code">D2</span><span className="alloc-seg-pct">8%</span></div>
          <div className="alloc-seg seg-d3" style={{"flex":"9"}} title="D3 — Secure Design 9%"><span className="alloc-seg-code">D3</span><span className="alloc-seg-pct">9%</span></div>
          <div className="alloc-seg seg-d4" style={{"flex":"9"}} title="D4 — Data Security 9%"><span className="alloc-seg-code">D4</span><span className="alloc-seg-pct">9%</span></div>
          <div className="alloc-seg seg-d5" style={{"flex":"9"}} title="D5 — Model Security 9%"><span className="alloc-seg-code">D5</span><span className="alloc-seg-pct">9%</span></div>
          <div className="alloc-seg seg-d6" style={{"flex":"10"}} title="D6 — GenAI Security 10%"><span className="alloc-seg-code">D6</span><span className="alloc-seg-pct">10%</span></div>
          <div className="alloc-seg seg-d7" style={{"flex":"10"}} title="D7 — Agent Security 10%"><span className="alloc-seg-code">D7</span><span className="alloc-seg-pct">10%</span></div>
          <div className="alloc-seg seg-d8" style={{"flex":"9"}} title="D8 — MLSecOps 9%"><span className="alloc-seg-code">D8</span><span className="alloc-seg-pct">9%</span></div>
          <div className="alloc-seg seg-d9" style={{"flex":"8"}} title="D9 — Runtime 8%"><span className="alloc-seg-code">D9</span><span className="alloc-seg-pct">8%</span></div>
          <div className="alloc-seg seg-d10" style={{"flex":"8"}} title="D10 — Detection 8%"><span className="alloc-seg-code">D10</span><span className="alloc-seg-pct">8%</span></div>
          <div className="alloc-seg seg-d11" style={{"flex":"7"}} title="D11 — Assurance 7%"><span className="alloc-seg-code">D11</span><span className="alloc-seg-pct">7%</span></div>
          <div className="alloc-seg seg-d12" style={{"flex":"5"}} title="D12 — Resilience 5%"><span className="alloc-seg-code">D12</span><span className="alloc-seg-pct">5%</span></div>
        </div>

        {/* Legend — 2-col grid */}
        <div className="alloc-legend">
          <div className="alloc-row alloc-d1">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D1 — Governance</span>
                <span className="alloc-name">AI Security Governance &amp; Accountability</span>
                <span className="alloc-desc">9 controls covering executive ownership, AI security policy, risk appetite, exception management, board reporting, role accountability, and training</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">8%</span><span className="alloc-ctrl">9 CONTROLS</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"8%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d2">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D2 — Inventory</span>
                <span className="alloc-name">AI Asset Inventory, Exposure &amp; Classification</span>
                <span className="alloc-desc">9 controls covering AI asset inventory, shadow AI discovery, AI-BOM, data-flow and decision-flow mapping, exposure classification, and high-risk reconciliation</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">8%</span><span className="alloc-ctrl">9 CONTROLS</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"8%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d3">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D3 — Secure Design</span>
                <span className="alloc-name">AI Threat Modelling &amp; Secure Design</span>
                <span className="alloc-desc">9 controls covering AI threat modelling, misuse and abuse cases, trust boundaries, secure reference architectures, human oversight, and design gates</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">9%</span><span className="alloc-ctrl">9 CONTROLS</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"9%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d4">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D4 — Data Security</span>
                <span className="alloc-name">Data, Privacy &amp; Training-Set Security</span>
                <span className="alloc-desc">9 controls covering dataset lineage, poisoning prevention, privacy, sensitive-data minimisation, vector database authorisation, and exfiltration prevention</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">9%</span><span className="alloc-ctrl">9 CONTROLS</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"9%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d5">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D5 — Model Security</span>
                <span className="alloc-name">Model, Artifact &amp; IP Security</span>
                <span className="alloc-desc">9 controls covering model registries, artifact signing, access least privilege, model theft prevention, fine-tuning change control, rollback, and IP management</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">9%</span><span className="alloc-ctrl">9 CONTROLS</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"9%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d6">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D6 — GenAI Security</span>
                <span className="alloc-name">LLM, Prompt, RAG &amp; GenAI Application Security</span>
                <span className="alloc-desc">9 controls covering prompt injection defence, system-prompt protection, input/output validation, RAG authorisation, context isolation, and telemetry</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">10%</span><span className="alloc-ctrl">9 CONTROLS — JOINT HIGHEST</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"10%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d7">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D7 — Agent Security</span>
                <span className="alloc-name">Agentic AI, Tool &amp; Autonomy Security</span>
                <span className="alloc-desc">9 controls covering agent permission scoping, tool registry, human approval for high-impact actions, autonomy limits, memory governance, sandboxing, and kill-switches</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">10%</span><span className="alloc-ctrl">9 CONTROLS — JOINT HIGHEST</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"10%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d8">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D8 — MLSecOps</span>
                <span className="alloc-name">MLOps, MLSecOps &amp; AI Supply Chain Security</span>
                <span className="alloc-desc">9 controls covering repository security, pipeline gates, AI supply-chain risk assessment, SBOM/AI-BOM linkage, dependency scanning, and reproducibility</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">9%</span><span className="alloc-ctrl">9 CONTROLS</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"9%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d9">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D9 — Runtime</span>
                <span className="alloc-name">Cloud, API &amp; Platform Security</span>
                <span className="alloc-desc">9 controls covering workload segmentation, endpoint protection, API security, runtime hardening, secrets management, encryption, tenant isolation, and consumption controls</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">8%</span><span className="alloc-ctrl">9 CONTROLS</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"8%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d10">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D10 — Detection</span>
                <span className="alloc-name">AI Security Monitoring, Logging &amp; Detection</span>
                <span className="alloc-desc">9 controls covering security event logging, tamper-evident logs, AI-specific threat detection, drift monitoring, SOC integration, KRIs, and forensic evidence</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">8%</span><span className="alloc-ctrl">9 CONTROLS</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"8%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d11">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D11 — Assurance</span>
                <span className="alloc-name">Red Teaming &amp; Independent Validation</span>
                <span className="alloc-desc">9 controls covering security test plans, adversarial ML testing, LLM and agent red teaming, regression testing, independent validation, and evidence register</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">7%</span><span className="alloc-ctrl">9 CONTROLS</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"7%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d12">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D12 — Resilience</span>
                <span className="alloc-name">AI Incident Response &amp; Continuous Compliance</span>
                <span className="alloc-desc">9 controls covering AI incident playbooks, severity criteria, regulatory reporting triggers, emergency rollback, post-incident review, continuity, and reassessment</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">5%</span><span className="alloc-ctrl">9 CONTROLS</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"5%"}}></div></div></div>
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
      <p className="pg-sub reveal" style={{"marginBottom":"8px"}}>NS-AISCA combines AI security architecture, adversarial testing, secure AI development, cloud runtime controls, monitoring, and continuous assurance into a single evidence-based assessment and improvement model.</p>
      <div style={{"overflowX":"auto"}} className="reveal">
        <table className="spec-tbl"><tbody>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><span className="spec-tbl-label">Controls</span></div></td>
            <td><strong>108 fully defined AI security controls</strong> across 12 weighted domains, each aligned to evidence requirements, maturity expectations, and framework mapping.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/></svg></div><span className="spec-tbl-label">Scoring Model</span></div></td>
            <td>Weighted average of domain maturity supported by <strong>automatic gap scoring, evidence-grade constraints, risk heatmaps, control failure visibility, KRIs, roadmap, and dashboard outputs.</strong></td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><span className="spec-tbl-label">Maturity Scale</span></div></td>
            <td>L1 Initial → L2 Managed → L3 Defined → L4 Quantitative → L5 Optimising
              <div className="maturity-levels" style={{"marginTop":"10px"}}>
                <span className="ml-chip ml-1">L1 Initial</span><span className="ml-chip ml-2">L2 Managed</span><span className="ml-chip ml-3">L3 Defined</span><span className="ml-chip ml-4">L4 Quantitative</span><span className="ml-chip ml-5">L5 Optimising</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><span className="spec-tbl-label">Evidence Standard</span></div></td>
            <td>5 evidence grades gate maturity progression:
              <div className="maturity-levels" style={{"marginTop":"10px"}}>
                <span className="ml-chip ml-1">E1 Informal</span><span className="ml-chip ml-2">E2 Manual</span><span className="ml-chip ml-3">E3 Structured</span><span className="ml-chip ml-4">E4 System-generated</span><span className="ml-chip ml-5">E5 Adaptive</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></div><span className="spec-tbl-label">Standards Alignment</span></div></td>
            <td><strong>20+ standards</strong> including: EU AI Act · ISO 42001 · ISO 23894 · ISO 27001 · ISO 27090 · NIST AI RMF · NIST AI 600-1 · NIST CSF 2.0 · NIST SSDF · OWASP LLM Top 10 · MITRE ATLAS · CSA AICM · Google SAIF</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div><span className="spec-tbl-label">Assessment Tool</span></div></td>
            <td><strong>12 domain sheets</strong> with maturity dropdowns, auto-scoring, evidence register, remediation roadmap, board dashboard, architecture patterns, and assurance outputs.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div><span className="spec-tbl-label">Primary Purpose</span></div></td>
            <td>Secure the <strong>entire AI attack surface:</strong> data · model · prompt · RAG · agent · tool · pipeline · API · cloud runtime · monitoring · assurance · incident response</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><span className="spec-tbl-label">Operating Model</span></div></td>
            <td>Baseline assessment → Gap analysis → Remediation planning → Independent validation → Continuous reassessment as AI systems, prompts, models, vendors, and threats change</td>
          </tr>
        </tbody></table>
      </div>
    </div>
  </div>

  {/* Platform */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <div className="reveal">
        <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>AI Security Controls Architecture Assessment Platform</div>
        <div className="platform-callout">
          <div>
            <h3>NS-AISCA Assessment Workbook &amp; Operating Model</h3>
            <p>The technology delivery engine for AI security architecture assessments and continuous control improvement. Provides 12 domain assessment sheets, control-level maturity dropdowns, automatic gap scoring, evidence register, remediation roadmap, board dashboard, architecture patterns, and assurance outputs. Enables organisations to measure AI security posture across classical ML, GenAI, RAG, agentic AI, AI APIs, MLOps pipelines, and cloud AI runtime environments using a single evidence-based model.</p>
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
      <p className="pg-sub reveal">All services anchored to NS-AISCA v1.0 and delivered through the AI Security Controls Architecture Assessment Platform.</p>
      <div className="svc2-grid">
        <div className="svc2-card reveal">
          <span className="svc2-card-num">01</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg></span>
          <h4>AI Security Controls Architecture Assessment &amp; Roadmap</h4>
          <p>NS-AISCA baseline across all 12 domains with AI Security Posture Score, maturity heatmap, evidence register, and prioritised remediation roadmap.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">02</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span>
          <h4>AI Threat Modelling &amp; Secure Design Review</h4>
          <p>Threat modelling covering misuse cases, trust boundaries, abuse paths, secure reference architectures, human oversight, and design gate requirements.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">03</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>
          <h4>LLM, Prompt, RAG &amp; GenAI Security Assessment</h4>
          <p>Assessment of prompt injection, system-prompt protection, input/output validation, RAG authorisation, context isolation, data leakage, and GenAI telemetry controls.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">04</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg></span>
          <h4>Agentic AI, Tool &amp; Autonomy Security Review</h4>
          <p>Review of agent permissions, tool registry, autonomy limits, high-impact human approvals, memory governance, credential isolation, sandboxing, and kill-switch procedures.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">05</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>
          <h4>MLSecOps &amp; AI Supply Chain Security Programme</h4>
          <p>Integration of AI security controls into repositories, ML pipelines, model registries, dependency scanning, SBOM/AI-BOM linkage, artifact signing, and reproducible deployment workflows.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">06</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>
          <h4>AI Runtime, Cloud, API &amp; Monitoring Assurance</h4>
          <p>Review of AI workload segmentation, endpoint and API security, secrets, encryption, tenant isolation, consumption controls, logging, drift monitoring, SOC integration, and KRIs.</p>
        </div>
        <div className="svc2-card mssp reveal" style={{"gridColumn":"1/-1"}}>
          <span className="svc2-card-num">07</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>
          <h4>AI Red Teaming, Incident Response &amp; Continuous Validation</h4>
          <p>Adversarial ML testing, LLM and agent red teaming, regression testing, AI incident playbooks, rollback readiness, forensic evidence capture, and continuous reassessment.</p>
        </div>
      </div>
    </div>
  </div>

  {/* CTA */}
  <div className="page-cta-band">
    <div className="wrap pcb-inner">
      <h2>Secure your AI systems with a defensible, evidence-based architecture</h2>
      <p>We baseline your AI security posture across all 12 domains and deliver a prioritised remediation roadmap your board can act on.</p>
      <div className="pcb-row"><Link className="btn btn-primary" to="/contact">Request a briefing <span className="arr">→</span></Link></div>
    </div>
  </div>


    </div>
  )
}

