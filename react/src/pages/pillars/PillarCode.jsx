import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function PillarCode() {
  useReveal()

  return (
    <div id="view-pillar-code">
      

  {/* Hero */}
  <div className="pillar-hero">
    <div className="wrap ph-inner">
      <div className="ph-eyebrow"><span className="ph-pill">Core Service Pillars</span></div>
      <h1 className="ph-h1">Pillar 3: Code Trust Assurance Framework (NS-CTAF v1.0)</h1>
      <p className="ph-sub">A cryptographically grounded, continuously measurable standard for software trust — ending code trust theatre and establishing a unified architecture for proving that software is trustworthy across identity, integrity, supply chain, and runtime.</p>
      <div className="pillar-fw-stats">
        <div className="pfs-item"><span className="pfs-val">86</span><span className="pfs-lab">Trust Controls</span></div>
        <div className="pfs-item"><span className="pfs-val">6</span><span className="pfs-lab">Trust Domains</span></div>
        <div className="pfs-item"><span className="pfs-val">30+</span><span className="pfs-lab">Frameworks Aligned</span></div>
        <div className="pfs-item"><span className="pfs-val">430</span><span className="pfs-lab">Maturity Interpretations</span></div>
        <div className="pfs-item"><span className="pfs-val">CTA 1–4</span><span className="pfs-lab">Certification Levels</span></div>
      </div>
    </div>

    <div className="page-ticker">
      <div className="page-ticker-track">
        <span className="page-ticker-item"><span className="t-cat">Framework</span> NS-CTAF v1.0 · 86 Trust Controls · 6 Domains</span>
        <span className="page-ticker-item"><span className="t-cat">Certification</span> CTA-1 Entry · CTA-2 Standard · CTA-3 Advanced · CTA-4 Highest Assurance</span>
        <span className="page-ticker-item"><span className="t-cat">Coverage</span> SBOM · Secrets Management · SCA · SAST · Dependency Governance</span>
        <span className="page-ticker-item"><span className="t-cat">AI Code</span> 430 Maturity Interpretations · AI-Generated Code Auditing</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> NIST SSDF · SLSA · OpenSSF · CycloneDX · SPDX · OWASP</span>
        <span className="page-ticker-item"><span className="t-cat">Supply Chain</span> Software Supply Chain Risk · Third-Party Open-Source Governance</span>
        <span className="page-ticker-item"><span className="t-cat">Platform</span> Paxley · GitHub-Native · Every Commit · Every PR · Every Release</span>
        <span className="page-ticker-item"><span className="t-cat">Framework</span> NS-CTAF v1.0 · 86 Trust Controls · 6 Domains</span>
        <span className="page-ticker-item"><span className="t-cat">Certification</span> CTA-1 Entry · CTA-2 Standard · CTA-3 Advanced · CTA-4 Highest Assurance</span>
        <span className="page-ticker-item"><span className="t-cat">Coverage</span> SBOM · Secrets Management · SCA · SAST · Dependency Governance</span>
        <span className="page-ticker-item"><span className="t-cat">AI Code</span> 430 Maturity Interpretations · AI-Generated Code Auditing</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> NIST SSDF · SLSA · OpenSSF · CycloneDX · SPDX · OWASP</span>
        <span className="page-ticker-item"><span className="t-cat">Supply Chain</span> Software Supply Chain Risk · Third-Party Open-Source Governance</span>
        <span className="page-ticker-item"><span className="t-cat">Platform</span> Paxley · GitHub-Native · Every Commit · Every PR · Every Release</span>
      </div>
    </div>
  </div>

  {/* What Is NS-CTAF */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <div className="pg-2col reveal">
        <div>
          <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>What Is NS-CTAF v1.0 and Why Was It Built?</div>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>NS-CTAF introduces <strong style={{"color":"var(--navy)"}}>Code Trust Assurance (CTA)</strong> as a distinct discipline — the practice of establishing, measuring, and continuously maintaining evidence-based trust in software across its full lifecycle: from developer identity and build integrity to deployment, runtime behaviour, and software supply-chain assurance.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>Built for the supply-chain attack reality of 2026 — SolarWinds SUNBURST, Log4Shell, XZ Utils, Polyfill.io — where traditional scanning and compliance programmes cannot answer the trust questions now being asked by regulators, enterprise customers, investors, and acquirers.</p>
          <div style={{"display":"flex","flexDirection":"column","gap":"10px","marginTop":"8px"}}>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start","padding":"12px 16px","background":"var(--grey)","borderRadius":"10px","fontSize":"13px","color":"var(--slate)"}}><span style={{"color":"var(--orange)","fontWeight":"700","flexShrink":"0"}}>▸</span>Can you prove your code is what it claims to be?</div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start","padding":"12px 16px","background":"var(--grey)","borderRadius":"10px","fontSize":"13px","color":"var(--slate)"}}><span style={{"color":"var(--orange)","fontWeight":"700","flexShrink":"0"}}>▸</span>Can you provide cryptographic evidence your build pipeline was not compromised?</div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start","padding":"12px 16px","background":"var(--grey)","borderRadius":"10px","fontSize":"13px","color":"var(--slate)"}}><span style={{"color":"var(--orange)","fontWeight":"700","flexShrink":"0"}}>▸</span>Do you maintain independently verifiable SBOMs and software provenance records?</div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start","padding":"12px 16px","background":"var(--grey)","borderRadius":"10px","fontSize":"13px","color":"var(--slate)"}}><span style={{"color":"var(--orange)","fontWeight":"700","flexShrink":"0"}}>▸</span>Can you continuously demonstrate the integrity, authenticity, and trustworthiness of your software supply chain?</div>
          </div>
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"16px"}}>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"26px 30px","borderLeft":"4px solid #DC2626"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#DC2626","marginBottom":"8px"}}>The Problem</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"4px"}}>Code trust is assumed, not proven</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>Point-in-time scanning and compliance declarations cannot answer modern supply-chain trust questions</div>
          </div>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"26px 30px","borderLeft":"4px solid #0891B2"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#0891B2","marginBottom":"8px"}}>The Framework</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"4px"}}>86 controls · 6 domains · cryptographic evidence</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>Identity · Integrity · Secure Dev · Supply Chain · Runtime · Governance</div>
          </div>
          <div style={{"background":"var(--navy)","borderRadius":"14px","padding":"26px 30px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>The Outcome</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"#fff","marginBottom":"4px"}}>Software trust as a measurable business capability</div>
            <div style={{"fontSize":"12.5px","color":"rgba(255,255,255,.65)","lineHeight":"1.6"}}>Operational resilience, customer confidence, regulatory readiness, and acquisition defensibility — provable, not claimed</div>
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
          <p style={{"fontSize":"14px","color":"var(--slate)","maxWidth":"480px","lineHeight":"1.65","margin":"0"}}>6 integrated trust domains, 86 controls, one unified trust score. Each domain targets a critical layer of software trust exposure identified through real-world supply-chain attacks — together they sum to 100%.</p>
        </div>

        {/* Allocation bar */}
        <div className="alloc-bar">
          <div className="alloc-seg seg-d1" style={{"flex":"18"}} title="D1 — Identity 18%"><span className="alloc-seg-code">D1</span><span className="alloc-seg-pct">18%</span></div>
          <div className="alloc-seg seg-d2" style={{"flex":"18"}} title="D2 — Integrity 18%"><span className="alloc-seg-code">D2</span><span className="alloc-seg-pct">18%</span></div>
          <div className="alloc-seg seg-d3" style={{"flex":"22"}} title="D3 — Secure Development 22%"><span className="alloc-seg-code">D3</span><span className="alloc-seg-pct">22%</span></div>
          <div className="alloc-seg seg-d4" style={{"flex":"20"}} title="D4 — Supply Chain 20%"><span className="alloc-seg-code">D4</span><span className="alloc-seg-pct">20%</span></div>
          <div className="alloc-seg seg-d5" style={{"flex":"14"}} title="D5 — Runtime 14%"><span className="alloc-seg-code">D5</span><span className="alloc-seg-pct">14%</span></div>
          <div className="alloc-seg seg-d6" style={{"flex":"8"}} title="D6 — Governance 8%"><span className="alloc-seg-code">D6</span><span className="alloc-seg-pct">8%</span></div>
        </div>

        {/* Legend */}
        <div className="alloc-legend">
          <div className="alloc-row alloc-d1">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D1 — Identity</span>
                <span className="alloc-name">Developer Identity &amp; Contributor Trust</span>
                <span className="alloc-desc">Controls covering developer identity verification, cryptographic code signing, contributor trust weighting, third-party identity vetting, and trust lineage graph maintenance. Addresses the XZ Utils-class attack vector.</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">18%</span><span className="alloc-ctrl">IDENTITY LAYER</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"18%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d2">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D2 — Integrity</span>
                <span className="alloc-name">Build Pipeline Integrity &amp; Artifact Signing</span>
                <span className="alloc-desc">Controls covering tamper-evident pipeline design, build provenance attestation, artifact signing (Sigstore/cosign), in-toto framework implementation, and pipeline security monitoring. Addresses the SolarWinds-class attack vector.</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">18%</span><span className="alloc-ctrl">INTEGRITY LAYER</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"18%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d3">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D3 — Secure Development</span>
                <span className="alloc-name">SDLC Security &amp; Code Quality</span>
                <span className="alloc-desc">Controls covering secure coding standards, SAST integration, code review governance, security training, threat modelling, automated security testing gates, and AI-generated code governance.</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">22%</span><span className="alloc-ctrl">HIGHEST WEIGHT</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"22%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d4">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D4 — Supply Chain</span>
                <span className="alloc-name">Dependency Governance &amp; SBOM</span>
                <span className="alloc-desc">Controls covering dependency inventory management, transitive dependency analysis, SBOM generation (CycloneDX/SPDX), dependency risk scoring, component origin verification, and SBOM correlation with CVEs. Addresses the Log4Shell-class attack vector.</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">20%</span><span className="alloc-ctrl">SUPPLY CHAIN LAYER</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"20%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d5">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D5 — Runtime</span>
                <span className="alloc-name">Runtime Assurance &amp; Behavioural Monitoring</span>
                <span className="alloc-desc">Controls covering runtime behavioural monitoring, anomaly detection in production, container and infrastructure security, DAST integration, incident traceability to code commits, and runtime policy enforcement.</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">14%</span><span className="alloc-ctrl">RUNTIME LAYER</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"14%"}}></div></div></div>
            </div>
          </div>
          <div className="alloc-row alloc-d6">
            <div className="alloc-swatch"></div>
            <div className="alloc-inner">
              <div className="alloc-meta">
                <span className="alloc-code">D6 — Governance</span>
                <span className="alloc-name">Organisational Software Trust Governance</span>
                <span className="alloc-desc">Controls covering software trust policy framework, executive accountability, regulatory compliance reporting, customer-facing SBOM disclosure, supply chain contractual obligations, and continuous improvement.</span>
              </div>
              <div className="alloc-stats"><span className="alloc-pct-big">8%</span><span className="alloc-ctrl">GOVERNANCE LAYER</span><div className="alloc-minibar"><div className="alloc-minibar-fill" style={{"width":"8%"}}></div></div></div>
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
      <p className="pg-sub reveal" style={{"marginBottom":"8px"}}>NS-CTAF combines cryptographic assurance, software supply chain governance, secure development maturity, and continuous operational validation into a single, measurable Code Trust Assurance model.</p>
      <div style={{"overflowX":"auto"}} className="reveal">
        <table className="spec-tbl"><tbody>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><span className="spec-tbl-label">Controls</span></div></td>
            <td><strong>86 fully defined trust controls</strong> with requirements, cryptographic grounding requirements, implementation guidance, and framework alignment citations across 30+ standards.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><rect x="18" y="3" width="4" height="18"/><rect x="10" y="8" width="4" height="13"/><rect x="2" y="13" width="4" height="8"/></svg></div><span className="spec-tbl-label">Scoring Model</span></div></td>
            <td><strong>5-axis maturity</strong> with domain weights reflecting supply chain risk concentration: D3 Secure Development at 22% (highest), D4 Supply Chain at 20%, D1/D2 Identity &amp; Integrity at 18% each.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><span className="spec-tbl-label">Maturity Scale</span></div></td>
            <td>L1 Initial → L2 Developing → L3 Defined → L4 Managed → L5 Optimised — with <strong>430 control-specific maturity interpretations</strong> (5 levels × 86 controls).
              <div className="maturity-levels" style={{"marginTop":"10px"}}>
                <span className="ml-chip ml-1">L1 Initial</span><span className="ml-chip ml-2">L2 Developing</span><span className="ml-chip ml-3">L3 Defined</span><span className="ml-chip ml-4">L4 Managed</span><span className="ml-chip ml-5">L5 Optimised</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><span className="spec-tbl-label">Certification Programme</span></div></td>
            <td>The first external software trust certification backed by a structured maturity model:
              <div className="maturity-levels" style={{"marginTop":"10px"}}>
                <span className="ml-chip ml-1">CTA-1 Transparent</span><span className="ml-chip ml-2">CTA-2 Verified</span><span className="ml-chip ml-4">CTA-3 Assured</span><span className="ml-chip ml-5">CTA-4 Adaptive Trust</span>
              </div>
            </td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></div><span className="spec-tbl-label">Framework Alignment</span></div></td>
            <td><strong>30+ standards</strong> including: NIST SSDF SP 800-218 · SLSA · in-toto · Sigstore · OWASP SAMM · BSIMM · ISO/IEC 27001 · EU Cyber Resilience Act · US EO 14028 · NIS2 · DORA · PCI DSS v4</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><span className="spec-tbl-label">Management Tool</span></div></td>
            <td>Excel-native workbook with auto-scoring, <strong>340+ improvement recommendations</strong>, certification readiness tracker, roadmap generation, and board-ready Trust Score report.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><span className="spec-tbl-label">Delivery Model</span></div></td>
            <td>Repository-based assessment model. <strong>First automated results in &lt;5 minutes</strong> via Paxley. Full advisory assessment: 1–3 weeks. Ongoing continuous monitoring via the Paxley platform.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon" style={{"background":"rgba(220,38,38,.08)"}}><svg viewBox="0 0 24 24" style={{"stroke":"#DC2626"}}><path d="M9 12l2 2 4-4"/><path d="M21 12c-2.4 4.8-5.3 7-9 7s-6.6-2.2-9-7c2.4-4.8 5.3-7 9-7s6.6 2.2 9 7z"/></svg></div><span className="spec-tbl-label" style={{"color":"#DC2626"}}>Unique Differentiator</span></div></td>
            <td><strong style={{"color":"#DC2626"}}>The only code security framework requiring cryptographic evidence, not self-reported status.</strong> A control cannot be rated above L2 without evidence that cannot be fabricated without computational effort proportional to the security claim.</td>
          </tr>
        </tbody></table>
      </div>
    </div>
  </div>

  {/* Platform */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <div className="reveal">
        <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>Code Trust Assurance Platform</div>
        <div className="platform-callout">
          <div>
            <h3>Paxley Code Security Platform</h3>
            <p>The automated delivery engine for NS-CTAF assessments and continuous code trust monitoring. Provides SAST (15+ languages, dataflow analysis), Software Composition Analysis with CVE detection, SBOM generation in CycloneDX and SPDX formats, IaC scanning (Terraform, Kubernetes, Pulumi, CDK), container image scanning, secrets detection (200+ patterns), and policy governance — all in one unified interface. Repository-based pricing from $99/repo/month delivers a 79% cost reduction vs per-seat incumbents. First scan results in under 5 minutes. SaaS or self-hosted deployment.</p>
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
      <p className="pg-sub reveal">All services anchored to NS-CTAF v1.0 and delivered with the Paxley Code Security Platform as the automated evidence layer.</p>
      <div className="svc2-grid">
        <div className="svc2-card reveal">
          <span className="svc2-card-num">01</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg></span>
          <h4>Code Trust Assurance Assessment &amp; Roadmap</h4>
          <p>NS-CTAF baseline across all 6 trust domains with automated Paxley scanning, Trust Score and Maturity Report, SBOM generation, and prioritised roadmap.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">02</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>
          <h4>CTA Certification Programme Management</h4>
          <p>Structured pathway from CTA-1 Transparent through CTA-4 Adaptive Trust — Nucleus as advisory partner, delivering a validated software trust signal for procurement.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">03</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>
          <h4>DevSecOps Transformation &amp; Secure Engineering Enablement</h4>
          <p>Integration of NS-CTAF controls into CI/CD pipelines, engineering workflows, release governance, IaC security, and developer security operating models.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">04</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="23" y1="21" x2="23" y2="19"/><line x1="19" y1="15" x2="23" y2="19"/></svg></span>
          <h4>Virtual DevSecOps Champion Support Service</h4>
          <p>Structured retainer for organisations needing practical, independent, sustained secure SDLC leadership without committing to a full-time AppSec or product security function.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">05</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
          <h4>Code Security Risk Assessment</h4>
          <p>Automated repository scanning via Paxley — SAST, SCA, SBOM, IaC, container security, and secrets detection as a unified, continuous evidence layer.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">06</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></span>
          <h4>M&amp;A-Focused Code Risk Assessment</h4>
          <p>Pre-close assessment of product and supply-chain risk embedded in codebase — IP and licensing exposure identification, attacker-validated evidence for investment committees.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">07</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>
          <h4>DPI &amp; Digital Public Goods Code Trust Service</h4>
          <p>NS-CTAF assessment and secure development advisory for DPGs and DPI — ensuring community-built software meets regulatory and trust requirements for public-purpose digital systems.</p>
        </div>
        <div className="svc2-card reveal">
          <span className="svc2-card-num">08</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></span>
          <h4>SBOM Governance &amp; Continuous Software Transparency</h4>
          <p>Enterprise SBOM governance, supplier software transparency assessments, continuous dependency trust monitoring, and customer-facing software trust reporting aligned to CRA, NIS2, DORA.</p>
        </div>
        <div className="svc2-card mssp reveal" style={{"gridColumn":"1/-1"}}>
          <span className="svc2-card-num">09</span>
          <span className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
          <h4>Open Source Software Trust &amp; Community Governance Advisory</h4>
          <p>Governance, contributor trust validation, secure open-source release management, dependency risk governance, and cryptographic integrity assurance for open-source software ecosystems and community-led engineering environments.</p>
        </div>
      </div>
    </div>
  </div>

  {/* CTA */}
  <div className="page-cta-band">
    <div className="wrap pcb-inner">
      <h2>Prove your software is trustworthy — cryptographically, continuously</h2>
      <p>We baseline your code trust posture across all 6 domains and deliver a roadmap from assumed confidence to verifiable, board-reportable software trust.</p>
      <div className="pcb-row"><Link className="btn btn-primary" to="/contact">Request a briefing <span className="arr">→</span></Link></div>
    </div>
  </div>


    </div>
  )
}

