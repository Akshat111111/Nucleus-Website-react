import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function FwAisca() {
  useReveal()

  return (
    <div id="view-fw-aisca">
      

  {/* Hero */}
  <div className="pillar-hero">
    <div className="wrap ph-inner">
      <div className="ph-eyebrow"><span className="ph-pill">Proprietary Framework · AI Security</span></div>
      <h1 className="ph-h1">AI Security Controls Architecture (NS-AISCA v1.0)</h1>
      <p className="ph-sub">The Nucleus Systems AI Security Controls Architecture — a comprehensive, technically grounded security framework for AI systems, models, pipelines, and infrastructure. The technical security counterpart to NS-AIGF's governance layer, covering the attack surfaces that general cybersecurity frameworks do not reach.</p>
      <div className="pillar-fw-stats">
        <div className="pfs-item"><span className="pfs-val">108</span><span className="pfs-lab">Security Controls</span></div>
        <div className="pfs-item"><span className="pfs-val">12</span><span className="pfs-lab">Security Domains</span></div>
        <div className="pfs-item"><span className="pfs-val">5</span><span className="pfs-lab">Maturity Levels</span></div>
        <div className="pfs-item"><span className="pfs-val">GenAI</span><span className="pfs-lab">Native Coverage</span></div>
        <div className="pfs-item"><span className="pfs-val">Agentic</span><span className="pfs-lab">AI Coverage</span></div>
      </div>
    </div>

    <div className="page-ticker">
      <div className="page-ticker-track">
        <span className="page-ticker-item"><span className="t-cat">Controls</span> 108 AI Security Controls across 12 Security Domains</span>
        <span className="page-ticker-item"><span className="t-cat">Threats</span> Adversarial ML · Data Poisoning · Model Extraction · Prompt Injection</span>
        <span className="page-ticker-item"><span className="t-cat">Maturity</span> 5 Maturity Levels · 5 Evidence Grades · Structured Scoring</span>
        <span className="page-ticker-item"><span className="t-cat">GenAI</span> Native LLM Coverage · RAG Security · Agentic Pipeline Controls</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> OWASP LLM Top 10 · MITRE ATLAS · NIST AI RMF · ISO 42001</span>
        <span className="page-ticker-item"><span className="t-cat">Testing</span> LLM Red Teaming · Adversarial Testing · Model Robustness</span>
        <span className="page-ticker-item"><span className="t-cat">Output</span> AI Security Posture Report · Threat Model · Remediation Roadmap</span>
        <span className="page-ticker-item"><span className="t-cat">Controls</span> 108 AI Security Controls across 12 Security Domains</span>
        <span className="page-ticker-item"><span className="t-cat">Threats</span> Adversarial ML · Data Poisoning · Model Extraction · Prompt Injection</span>
        <span className="page-ticker-item"><span className="t-cat">Maturity</span> 5 Maturity Levels · 5 Evidence Grades · Structured Scoring</span>
        <span className="page-ticker-item"><span className="t-cat">GenAI</span> Native LLM Coverage · RAG Security · Agentic Pipeline Controls</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> OWASP LLM Top 10 · MITRE ATLAS · NIST AI RMF · ISO 42001</span>
        <span className="page-ticker-item"><span className="t-cat">Testing</span> LLM Red Teaming · Adversarial Testing · Model Robustness</span>
        <span className="page-ticker-item"><span className="t-cat">Output</span> AI Security Posture Report · Threat Model · Remediation Roadmap</span>
      </div>
    </div>
  </div>

  {/* What Is NS-AISCA */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <div className="pg-2col reveal">
        <div>
          <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>Why NS-AISCA Was Built</div>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>General cybersecurity frameworks treat AI systems like any other IT asset. They are not. AI models have unique attack surfaces — adversarial inputs, training data poisoning, model extraction, prompt injection, hallucination exploitation, and agentic autonomy risks — that require specialised security controls that ISO 27001, NIST CSF, and CIS Controls were not designed to address.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>NS-AISCA fills this gap with 108 controls spanning 12 domains, organised to cover the full AI system lifecycle from data ingestion through model training, deployment, monitoring, and decommissioning. It maps to OWASP LLM Top 10, MITRE ATLAS, NIST AI RMF MANAGE function, and EU AI Act Art. 9 post-market monitoring requirements.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8"}}>Together with NS-AIGF (governance) and NS-CTAF (software trust), NS-AISCA forms the technical security pillar of Nucleus Systems' integrated AI and software trust architecture — ensuring that AI systems are not only governed correctly but secured technically against the attack vectors that are actively exploited today.</p>
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"16px"}}>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"26px 28px","borderLeft":"4px solid #DC2626"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#DC2626","marginBottom":"8px"}}>The Gap</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>Standard security frameworks don't cover AI</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>Prompt injection, model inversion, training data poisoning, adversarial evasion, and agentic autonomy risks are not addressed by ISO 27001 controls, CIS benchmarks, or NIST CSF — they require a dedicated AI security control architecture.</div>
          </div>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"26px 28px","borderLeft":"4px solid #7C3AED"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#7C3AED","marginBottom":"8px"}}>The Threat Model</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>Attacks demonstrated in production in 2024–2026</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>Prompt injection bypassing corporate AI guardrails. Model inversion extracting sensitive training data. Supply chain compromise via poisoned foundation models. Agentic AI systems taking irreversible actions when manipulated.</div>
          </div>
          <div style={{"background":"var(--navy)","borderRadius":"14px","padding":"26px 28px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>The Architecture</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"#fff","marginBottom":"6px"}}>108 controls across the full AI lifecycle</div>
            <div style={{"fontSize":"12.5px","color":"rgba(255,255,255,.65)","lineHeight":"1.6"}}>From training data ingestion and model development through MLOps pipeline, deployment, runtime monitoring, and decommissioning — every stage of the AI lifecycle has purpose-built security controls.</div>
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
            <h2 style={{"fontSize":"clamp(24px,2.8vw,34px)","fontWeight":"800","color":"var(--navy)","letterSpacing":"-.03em","lineHeight":"1.1","margin":"0"}}>12 Security Domains &amp; Coverage</h2>
          </div>
          <p style={{"fontSize":"14px","color":"var(--slate)","maxWidth":"480px","lineHeight":"1.65","margin":"0"}}>108 controls across 12 domains covering the full AI system lifecycle. Domain architecture reflects the layered nature of AI security — from training data integrity at the foundation through to supply chain trust and compliance assurance at the outer boundary.</p>
        </div>
        <div className="alloc-bar">
          <div className="alloc-seg seg-d1" style={{"flex":"10"}} title="D1 — Data Security"><span className="alloc-seg-code">D1</span><span className="alloc-seg-pct">D1</span></div>
          <div className="alloc-seg seg-d2" style={{"flex":"9"}}  title="D2 — Model Security"><span className="alloc-seg-code">D2</span><span className="alloc-seg-pct">D2</span></div>
          <div className="alloc-seg seg-d3" style={{"flex":"9"}}  title="D3 — Adversarial Robustness"><span className="alloc-seg-code">D3</span><span className="alloc-seg-pct">D3</span></div>
          <div className="alloc-seg seg-d4" style={{"flex":"10"}} title="D4 — LLM & GenAI Security"><span className="alloc-seg-code">D4</span><span className="alloc-seg-pct">D4</span></div>
          <div className="alloc-seg seg-d5" style={{"flex":"9"}}  title="D5 — Agentic AI Security"><span className="alloc-seg-code">D5</span><span className="alloc-seg-pct">D5</span></div>
          <div className="alloc-seg seg-d6" style={{"flex":"8"}}  title="D6 — MLOps & Pipeline"><span className="alloc-seg-code">D6</span><span className="alloc-seg-pct">D6</span></div>
          <div className="alloc-seg seg-d7" style={{"flex":"8"}}  title="D7 — Infrastructure"><span className="alloc-seg-code">D7</span><span className="alloc-seg-pct">D7</span></div>
          <div className="alloc-seg seg-d8" style={{"flex":"8"}}  title="D8 — Privacy & Inference"><span className="alloc-seg-code">D8</span><span className="alloc-seg-pct">D8</span></div>
          <div className="alloc-seg seg-d9" style={{"flex":"9"}}  title="D9 — Supply Chain"><span className="alloc-seg-code">D9</span><span className="alloc-seg-pct">D9</span></div>
          <div className="alloc-seg seg-d10" style={{"flex":"8"}} title="D10 — Monitoring"><span className="alloc-seg-code">D10</span><span className="alloc-seg-pct">D10</span></div>
          <div className="alloc-seg seg-d11" style={{"flex":"7"}} title="D11 — Incident Response"><span className="alloc-seg-code">D11</span><span className="alloc-seg-pct">D11</span></div>
          <div className="alloc-seg seg-d12" style={{"flex":"5"}} title="D12 — Compliance"><span className="alloc-seg-code">D12</span><span className="alloc-seg-pct">D12</span></div>
        </div>
        <div className="alloc-legend">
          <div className="alloc-row alloc-d1"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D1 — Data Security &amp; Integrity</span><span className="alloc-name">Training Data Protection &amp; Pipeline Integrity</span><span className="alloc-desc">Training data validation, poisoning detection, data provenance tracking, pipeline integrity controls, and dataset access governance. The security of the model begins with the security of the data it was trained on.</span></div><div className="alloc-stats"><span className="alloc-pct-big" style={{"fontSize":"18px"}}>DATA</span><span className="alloc-ctrl">FOUNDATION LAYER</span></div></div></div>
          <div className="alloc-row alloc-d2"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D2 — Model Security</span><span className="alloc-name">Model File Integrity &amp; Access Governance</span><span className="alloc-desc">Model file integrity verification, serialisation security (pickle/ONNX/safetensors), model access controls, weight encryption, model registry governance, and anti-tampering controls for stored model artefacts.</span></div><div className="alloc-stats"><span className="alloc-pct-big" style={{"fontSize":"18px"}}>MODEL</span><span className="alloc-ctrl">ARTEFACT LAYER</span></div></div></div>
          <div className="alloc-row alloc-d3"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D3 — Adversarial Robustness</span><span className="alloc-name">Evasion Attack Resistance &amp; Robustness Testing</span><span className="alloc-desc">Input validation and sanitisation, adversarial example testing, evasion attack resistance, robustness benchmarking against the current MITRE ATLAS threat catalogue, and continuous adversarial red-teaming integration into the release lifecycle.</span></div><div className="alloc-stats"><span className="alloc-pct-big" style={{"fontSize":"18px"}}>ROBUST</span><span className="alloc-ctrl">ATTACK RESISTANCE</span></div></div></div>
          <div className="alloc-row alloc-d4"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D4 — LLM &amp; GenAI Security</span><span className="alloc-name">Prompt Injection, Output Validation &amp; System Prompt Security</span><span className="alloc-desc">Prompt injection prevention (OWASP LLM #1), system prompt hardening, output content filtering and validation, hallucination risk controls, jailbreak resistance, indirect prompt injection via RAG systems, and multi-turn conversation security.</span></div><div className="alloc-stats"><span className="alloc-pct-big" style={{"fontSize":"18px"}}>LLM</span><span className="alloc-ctrl">GENAI SECURITY</span></div></div></div>
          <div className="alloc-row alloc-d5"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D5 — Agentic AI Security</span><span className="alloc-name">Agent Boundary Controls &amp; Autonomy Constraints</span><span className="alloc-desc">Action scope limits preventing irreversible operations, tool use authorisation and least-privilege enforcement, human-in-the-loop gates for high-risk agent actions, multi-agent trust architecture, kill-switch capability, and agent action audit logging.</span></div><div className="alloc-stats"><span className="alloc-pct-big" style={{"fontSize":"18px"}}>AGENT</span><span className="alloc-ctrl">AUTONOMY CONTROLS</span></div></div></div>
          <div className="alloc-row alloc-d6"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D6 — MLOps &amp; Pipeline Security</span><span className="alloc-name">ML CI/CD Hardening &amp; Experiment Security</span><span className="alloc-desc">CI/CD pipeline security for ML workflows, experiment tracking security (MLflow/W&amp;B), model versioning controls and change governance, deployment pipeline integrity, and runner/compute security for training and fine-tuning jobs.</span></div><div className="alloc-stats"><span className="alloc-pct-big" style={{"fontSize":"18px"}}>MLOPS</span><span className="alloc-ctrl">PIPELINE LAYER</span></div></div></div>
          <div className="alloc-row alloc-d7"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D7 — Infrastructure Security</span><span className="alloc-name">GPU/TPU Security &amp; Inference Endpoint Hardening</span><span className="alloc-desc">GPU and TPU compute security, inference endpoint API hardening, rate limiting and abuse prevention, compute isolation and multi-tenancy controls, and model serving infrastructure security for cloud and on-premise deployments.</span></div><div className="alloc-stats"><span className="alloc-pct-big" style={{"fontSize":"18px"}}>INFRA</span><span className="alloc-ctrl">COMPUTE LAYER</span></div></div></div>
          <div className="alloc-row alloc-d8"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D8 — Privacy &amp; Inference Attacks</span><span className="alloc-name">Membership Inference Defence &amp; Differential Privacy</span><span className="alloc-desc">Membership inference attack defences, model inversion prevention, differential privacy implementation, data minimisation enforcement, PII detection in model outputs, and training data extraction attack resistance (GDPR/POPIA alignment).</span></div><div className="alloc-stats"><span className="alloc-pct-big" style={{"fontSize":"18px"}}>PRIV</span><span className="alloc-ctrl">PRIVACY LAYER</span></div></div></div>
          <div className="alloc-row alloc-d9"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D9 — Supply Chain Security</span><span className="alloc-name">Third-Party Model Vetting &amp; Dataset Provenance</span><span className="alloc-desc">Third-party and open-source model vetting, pre-trained model integrity verification (cryptographic), dataset provenance and origin documentation, open-source AI component risk scoring, and foundation model supply chain monitoring.</span></div><div className="alloc-stats"><span className="alloc-pct-big" style={{"fontSize":"18px"}}>SUPPLY</span><span className="alloc-ctrl">CHAIN LAYER</span></div></div></div>
          <div className="alloc-row alloc-d10"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D10 — Monitoring &amp; Detection</span><span className="alloc-name">Runtime Anomaly Detection &amp; Model Drift Monitoring</span><span className="alloc-desc">Runtime behavioural anomaly detection, model performance and output drift monitoring, adversarial input detection in production, security telemetry integration with SIEM, and continuous model health monitoring aligned to EU AI Act Art. 9 post-market monitoring obligations.</span></div><div className="alloc-stats"><span className="alloc-pct-big" style={{"fontSize":"18px"}}>MON</span><span className="alloc-ctrl">RUNTIME LAYER</span></div></div></div>
          <div className="alloc-row alloc-d11"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D11 — Incident Response</span><span className="alloc-name">AI-Specific Incident Classification &amp; Rollback</span><span className="alloc-desc">AI-specific incident classification (model failure vs. security compromise vs. adversarial attack), model rollback and recovery procedures, post-incident forensic analysis of model behaviour, and regulatory notification for AI security incidents per EU AI Act Art. 73.</span></div><div className="alloc-stats"><span className="alloc-pct-big" style={{"fontSize":"18px"}}>IR</span><span className="alloc-ctrl">RESPONSE LAYER</span></div></div></div>
          <div className="alloc-row alloc-d12"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D12 — Compliance &amp; Assurance</span><span className="alloc-name">OWASP LLM Top 10, MITRE ATLAS &amp; Regulatory Reporting</span><span className="alloc-desc">OWASP LLM Top 10 alignment, MITRE ATLAS threat catalogue mapping, regulatory reporting for AI security incidents, third-party AI security audit readiness, and evidence packaging for EU AI Act conformity assessment.</span></div><div className="alloc-stats"><span className="alloc-pct-big" style={{"fontSize":"18px"}}>COMP</span><span className="alloc-ctrl">ASSURANCE LAYER</span></div></div></div>
        </div>
      </div>
    </div>
  </div>

  {/* Spec Table */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">Framework Specification</h2>
      <p className="pg-sub reveal" style={{"marginBottom":"8px"}}>NS-AISCA provides the technical security control layer that AI governance frameworks reference but do not define — mapping every AI-specific attack vector to a specific, scored, evidence-backed control.</p>
      <div style={{"overflowX":"auto"}} className="reveal">
        <table className="spec-tbl"><tbody>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><span className="spec-tbl-label">Controls</span></div></td>
            <td><strong>108 fully defined security controls</strong> across 12 domains — each addressing one specific AI security requirement with evidence standards, implementation guidance, and threat model reference (MITRE ATLAS, OWASP LLM Top 10).</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/></svg></div><span className="spec-tbl-label">Maturity Scale</span></div></td>
            <td>L1 Initial → L2 Developing → L3 Defined → L4 Managed → L5 Optimised. Each level has domain-specific criteria. L3 is the baseline for EU AI Act Art. 9 post-market monitoring compliance and ISO 42001 §9.1 monitoring readiness.
              <div className="maturity-levels" style={{"marginTop":"10px"}}>
                <span className="ml-chip ml-1">L1 Initial</span><span className="ml-chip ml-2">L2 Developing</span><span className="ml-chip ml-3">L3 Defined</span><span className="ml-chip ml-4">L4 Managed</span><span className="ml-chip ml-5">L5 Optimised</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></div><span className="spec-tbl-label">Threat Alignment</span></div></td>
            <td>Every control maps to relevant threat catalogues and regulatory obligations: <strong>OWASP LLM Top 10</strong> (prompt injection, insecure output handling, training data poisoning, model theft) · <strong>MITRE ATLAS</strong> (adversarial ML tactics and techniques) · <strong>NIST AI RMF MANAGE</strong> function · <strong>EU AI Act Art. 9 &amp; 12</strong> post-market monitoring and logging requirements.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><span className="spec-tbl-label">Integration with NS-AIGF</span></div></td>
            <td>NS-AISCA is the technical security layer that NS-AIGF's D6 AI Security domain references. The two frameworks are designed to work in parallel — NS-AIGF establishes the governance mandate; NS-AISCA defines the specific technical controls that fulfil it. D6 controls in NS-AIGF (GV-29–35, PR-86–95) each have corresponding NS-AISCA domain controls for technical implementation.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><span className="spec-tbl-label">Delivery Model</span></div></td>
            <td>Structured technical assessment delivered by Nucleus AI security specialists. Domain scoping based on AI deployment profile (LLM, predictive, agentic, embedded). Deliverables: domain maturity scores, threat exposure map, prioritised remediation roadmap, and regulatory evidence package for EU AI Act technical documentation (Art. 11).</td>
          </tr>
        </tbody></table>
      </div>
    </div>
  </div>

  {/* CTA */}
  <div className="page-cta-band">
    <div className="wrap pcb-inner">
      <h2>Secure your AI systems against the attack vectors that governance alone cannot address</h2>
      <p>We assess your AI security posture across all 12 domains and deliver a prioritised technical remediation roadmap — from prompt injection defence to agentic AI boundary controls.</p>
      <div className="pcb-row"><Link className="btn btn-primary" to="/contact">Request an assessment <span className="arr">→</span></Link><Link className="btn btn-ghost" to="/pillar-aisec" style={{"background":"transparent","color":"#fff","borderColor":"rgba(255,255,255,.3)"}}>Explore Core Pillar 2B →</Link></div>
    </div>
  </div>


    </div>
  )
}

