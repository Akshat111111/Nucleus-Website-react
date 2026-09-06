import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function FwCtaf() {
  useReveal()

  return (
    <div id="view-fw-ctaf">
      

  {/* Hero */}
  <div className="pillar-hero">
    <div className="wrap ph-inner">
      <div className="ph-eyebrow"><span className="ph-pill">Proprietary Framework · Code Trust Assurance</span></div>
      <h1 className="ph-h1">Code Trust Assurance Framework (NS-CTAF v1.0)</h1>
      <p className="ph-sub">The Nucleus Systems Code Trust Assurance Framework — a comprehensive technical trust and software supply chain security framework that turns point-in-time security scans into continuous, cryptographically verifiable trust assurance. The only code security framework that requires evidence of security posture, not self-reported status.</p>
      <div className="pillar-fw-stats">
        <div className="pfs-item"><span className="pfs-val">86</span><span className="pfs-lab">Trust Controls</span></div>
        <div className="pfs-item"><span className="pfs-val">6</span><span className="pfs-lab">Trust Domains</span></div>
        <div className="pfs-item"><span className="pfs-val">430</span><span className="pfs-lab">Maturity Interpretations</span></div>
        <div className="pfs-item"><span className="pfs-val">CTA-4</span><span className="pfs-lab">Highest Certification</span></div>
        <div className="pfs-item"><span className="pfs-val">30+</span><span className="pfs-lab">Frameworks Aligned</span></div>
      </div>
    </div>

    <div className="page-ticker">
      <div className="page-ticker-track">
        <span className="page-ticker-item"><span className="t-cat">Controls</span> 86 Code Trust Controls across 6 Trust Domains</span>
        <span className="page-ticker-item"><span className="t-cat">Certification</span> CTA-1 Entry → CTA-4 Advanced Trust Assurance Certification</span>
        <span className="page-ticker-item"><span className="t-cat">Coverage</span> SBOM · Secrets Management · SCA · SAST · Dependency Governance</span>
        <span className="page-ticker-item"><span className="t-cat">AI Code</span> 430 Maturity Interpretations · AI-Generated Code Audit</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> NIST SSDF · SLSA · OpenSSF · CycloneDX · SPDX · OWASP</span>
        <span className="page-ticker-item"><span className="t-cat">Supply Chain</span> Software Supply Chain Risk · Third-Party Open-Source Governance</span>
        <span className="page-ticker-item"><span className="t-cat">Platform</span> Paxley · GitHub-Native Continuous NS-CTAF Enforcement</span>
        <span className="page-ticker-item"><span className="t-cat">Controls</span> 86 Code Trust Controls across 6 Trust Domains</span>
        <span className="page-ticker-item"><span className="t-cat">Certification</span> CTA-1 Entry → CTA-4 Advanced Trust Assurance Certification</span>
        <span className="page-ticker-item"><span className="t-cat">Coverage</span> SBOM · Secrets Management · SCA · SAST · Dependency Governance</span>
        <span className="page-ticker-item"><span className="t-cat">AI Code</span> 430 Maturity Interpretations · AI-Generated Code Audit</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> NIST SSDF · SLSA · OpenSSF · CycloneDX · SPDX · OWASP</span>
        <span className="page-ticker-item"><span className="t-cat">Supply Chain</span> Software Supply Chain Risk · Third-Party Open-Source Governance</span>
        <span className="page-ticker-item"><span className="t-cat">Platform</span> Paxley · GitHub-Native Continuous NS-CTAF Enforcement</span>
      </div>
    </div>
  </div>

  {/* What Is NS-CTAF */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <div className="pg-2col reveal">
        <div>
          <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>Beyond Point-in-Time Scanning</div>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>Most code security programmes depend on one-time scans, annual penetration tests, and self-reported attestations. These create false confidence — a system that passed a scan 90 days ago may have been compromised, updated with vulnerable dependencies, or modified by an unauthorised change since. Point-in-time security tells you where you were, not where you are.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>NS-CTAF reframes code security as a continuous trust problem. The framework's 86 controls, structured across 6 trust domains, are designed to produce cryptographically verifiable trust evidence — SBOM attestations, provenance records, pipeline integrity proofs, and signed scan artefacts — that continuously demonstrate that a software system is built correctly, by authorised processes, from verified components.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8"}}>Delivery is through the Paxley Code Security Platform, which provides the scanning infrastructure underlying the framework: SAST across 15+ languages, SCA, CycloneDX and SPDX SBOM generation, IaC security analysis, container scanning, and secrets detection across 200+ secret patterns. Together, NS-CTAF and Paxley replace a stack of disconnected point-in-time tools with a unified, continuously operating trust assurance system.</p>
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"16px"}}>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"26px 28px","borderLeft":"4px solid #DC2626"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#DC2626","marginBottom":"8px"}}>The Problem</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>Point-in-time scanning creates security theatre</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>Annual pen tests, one-time SAST runs, and self-attested compliance leave organisations unable to answer the question that regulators and customers now ask: "Is your software trusted right now, and can you prove it?"</div>
          </div>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"26px 28px","borderLeft":"4px solid #16A34A"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#16A34A","marginBottom":"8px"}}>The Differentiator</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>Cryptographic evidence — not attestations</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>NS-CTAF is the only code security framework that requires cryptographic evidence of security posture. Signed SBOMs, in-toto provenance records, Sigstore transparency log entries, and pipeline artefact signatures create an unforgeable audit trail.</div>
          </div>
          <div style={{"background":"var(--navy)","borderRadius":"14px","padding":"26px 28px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>The Alignment</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"#fff","marginBottom":"6px"}}>Built for SLSA, EU CRA, and EO 14028</div>
            <div style={{"fontSize":"12.5px","color":"rgba(255,255,255,.65)","lineHeight":"1.6"}}>NS-CTAF controls map to NIST SSDF SP 800-218, SLSA L1–L4, in-toto, Sigstore, OWASP SAMM, BSIMM, ISO/IEC 27001, EU Cyber Resilience Act, US Executive Order 14028, NIS2, DORA, and PCI DSS v4 software security requirements.</div>
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
            <h2 style={{"fontSize":"clamp(24px,2.8vw,34px)","fontWeight":"800","color":"var(--navy)","letterSpacing":"-.03em","lineHeight":"1.1","margin":"0"}}>6 Trust Domains &amp; Coverage</h2>
          </div>
          <p style={{"fontSize":"14px","color":"var(--slate)","maxWidth":"480px","lineHeight":"1.65","margin":"0"}}>86 controls across 6 trust domains covering the full software trust lifecycle. Domain weighting reflects the typical risk distribution in modern software supply chains — Secure Development and Supply Chain together represent over 40% of the control surface.</p>
        </div>
        <div className="alloc-bar">
          <div className="alloc-seg seg-d1" style={{"flex":"18"}} title="D1 — Identity"><span className="alloc-seg-code">D1</span><span className="alloc-seg-pct">18%</span></div>
          <div className="alloc-seg seg-d2" style={{"flex":"18"}} title="D2 — Integrity"><span className="alloc-seg-code">D2</span><span className="alloc-seg-pct">18%</span></div>
          <div className="alloc-seg seg-d3" style={{"flex":"22"}} title="D3 — Secure Development"><span className="alloc-seg-code">D3</span><span className="alloc-seg-pct">22%</span></div>
          <div className="alloc-seg seg-d4" style={{"flex":"20"}} title="D4 — Supply Chain"><span className="alloc-seg-code">D4</span><span className="alloc-seg-pct">20%</span></div>
          <div className="alloc-seg seg-d5" style={{"flex":"14"}} title="D5 — Runtime"><span className="alloc-seg-code">D5</span><span className="alloc-seg-pct">14%</span></div>
          <div className="alloc-seg seg-d6" style={{"flex":"8"}}  title="D6 — Governance"><span className="alloc-seg-code">D6</span><span className="alloc-seg-pct">8%</span></div>
        </div>
        <div className="alloc-legend">
          <div className="alloc-row alloc-d1"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D1 — Identity · 18%</span><span className="alloc-name">Developer, System, and Pipeline Identity</span><span className="alloc-desc">Cryptographic identity for developers, CI/CD systems, and build pipelines. Sigstore keyless signing, OIDC-bound pipeline identities, SSH/GPG commit signing policy, bot and service account identity governance, and access token scope minimisation.</span></div><div className="alloc-stats"><span className="alloc-pct-big">18%</span><span className="alloc-ctrl">16 CONTROLS</span></div></div></div>
          <div className="alloc-row alloc-d2"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D2 — Integrity · 18%</span><span className="alloc-name">Build, Artefact, and Deployment Integrity</span><span className="alloc-desc">Hermetic build integrity, artefact signing and verification, SLSA provenance generation, in-toto supply chain metadata, container image signing (Cosign), deployment integrity gates, and Sigstore transparency log verification.</span></div><div className="alloc-stats"><span className="alloc-pct-big">18%</span><span className="alloc-ctrl">16 CONTROLS</span></div></div></div>
          <div className="alloc-row alloc-d3"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D3 — Secure Development · 22%</span><span className="alloc-name">SAST, SCA, IaC, Secrets, and Container Security</span><span className="alloc-desc">SAST integration across 15+ languages (CI/CD gating), SCA with exploitability scoring, IaC security analysis (Terraform, Helm, Kubernetes manifests), container and base image vulnerability scanning, secrets detection across 200+ patterns, and IDE developer security feedback loops.</span></div><div className="alloc-stats"><span className="alloc-pct-big">22%</span><span className="alloc-ctrl">19 CONTROLS</span></div></div></div>
          <div className="alloc-row alloc-d4"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D4 — Supply Chain · 20%</span><span className="alloc-name">SBOM, Dependency Governance, and Third-Party Risk</span><span className="alloc-desc">Automated CycloneDX and SPDX SBOM generation, SBOM integrity signing and verification, dependency risk scoring and approval workflows, VEX (Vulnerability Exploitability eXchange) statements, open source licence compliance, and third-party component provenance tracking.</span></div><div className="alloc-stats"><span className="alloc-pct-big">20%</span><span className="alloc-ctrl">17 CONTROLS</span></div></div></div>
          <div className="alloc-row alloc-d5"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D5 — Runtime · 14%</span><span className="alloc-name">Runtime Integrity, Vulnerability Response, and Monitoring</span><span className="alloc-desc">Runtime software composition monitoring, deployed SBOM drift detection, CVE patch SLA enforcement, emergency patch escalation procedures, runtime container security policy (Falco/AppArmor), and production integrity alerting.</span></div><div className="alloc-stats"><span className="alloc-pct-big">14%</span><span className="alloc-ctrl">12 CONTROLS</span></div></div></div>
          <div className="alloc-row alloc-d6"><div className="alloc-swatch"></div><div className="alloc-inner"><div className="alloc-meta"><span className="alloc-code">D6 — Governance · 8%</span><span className="alloc-name">Policy, Metrics, and Regulatory Evidence</span><span className="alloc-desc">Software security policy lifecycle management, trust posture metrics and KPIs, regulatory evidence packaging for EU CRA, EO 14028, NIS2, DORA, and PCI DSS v4 audits, and executive trust reporting aligned to NS-CMMF oversight obligations.</span></div><div className="alloc-stats"><span className="alloc-pct-big">8%</span><span className="alloc-ctrl">6 CONTROLS</span></div></div></div>
        </div>
      </div>
    </div>
  </div>

  {/* CTA Certification Levels */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">CTA Certification Levels</h2>
      <p className="pg-sub reveal">Four progressive trust certification tiers — each building on the one below, each representing a verifiable and auditable statement about an organisation's software trust posture.</p>
      <div className="svc2-grid reveal" style={{"gridTemplateColumns":"repeat(auto-fill,minmax(260px,1fr))","marginTop":"32px"}}>
        <div className="svc2-card" style={{"borderTop":"3px solid #DC2626"}}>
          <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#DC2626","marginBottom":"10px"}}>CTA-1</div>
          <h4>Transparent</h4>
          <p>Foundational visibility. SBOM generation active, dependencies inventoried, SAST and secrets scanning integrated into CI/CD pipelines. The organisation knows what its software is built from and has automated detection of common vulnerabilities. Prerequisite: all subsequent tiers.</p>
        </div>
        <div className="svc2-card" style={{"borderTop":"3px solid #D97706"}}>
          <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#D97706","marginBottom":"10px"}}>CTA-2</div>
          <h4>Verified</h4>
          <p>Evidence-backed controls. Build integrity verified via signed artefacts, SBOMs attested with cryptographic signatures, pipeline identity established via OIDC, and exploitable vulnerabilities subject to SLA-governed remediation. Scanning gates block vulnerable releases from reaching production.</p>
        </div>
        <div className="svc2-card" style={{"borderTop":"3px solid #16A34A"}}>
          <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#16A34A","marginBottom":"10px"}}>CTA-3</div>
          <h4>Assured</h4>
          <p>Supply chain trust at scale. Full SLSA L3 provenance, in-toto supply chain metadata, Sigstore transparency log verification for all release artefacts, third-party dependency provenance documented, and VEX statements issued for all critical CVEs. Suitable for regulated-sector and public-sector supplier qualification.</p>
        </div>
        <div className="svc2-card" style={{"borderTop":"3px solid var(--blue)"}}>
          <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--blue)","marginBottom":"10px"}}>CTA-4</div>
          <h4>Adaptive Trust</h4>
          <p>Continuous, self-healing trust posture. Runtime integrity monitoring, SBOM drift detection in production, automated threat response with integrity-preserving rollback capability, zero-trust software supply chain architecture, and executive trust posture dashboards updated continuously from live scan evidence.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Spec Table */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">Framework Specification</h2>
      <p className="pg-sub reveal" style={{"marginBottom":"8px"}}>NS-CTAF operationalises the software supply chain security obligations that regulators now mandate but do not prescribe — mapping 86 controls to the evidence standards that auditors and customers require.</p>
      <div style={{"overflowX":"auto"}} className="reveal">
        <table className="spec-tbl"><tbody>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><span className="spec-tbl-label">Controls</span></div></td>
            <td><strong>86 trust controls</strong> across 6 domains — each addresses one specific software trust requirement. 430 maturity-level interpretations define exactly what each control requires at CTA-1 through CTA-4, removing ambiguity from security posture assessment.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div><span className="spec-tbl-label">Paxley Platform</span></div></td>
            <td>Delivered through <strong>Paxley Code Security Platform</strong> — the scanning infrastructure that produces the evidence NS-CTAF controls require: SAST (15+ languages), SCA with exploitability scoring, SBOM generation (CycloneDX / SPDX), IaC security analysis, container scanning, secrets detection (200+ patterns), and artefact signing with Cosign and Sigstore.
            </td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></div><span className="spec-tbl-label">Regulatory Alignment</span></div></td>
            <td>Controls map to <strong>30+ frameworks</strong>: NIST SSDF SP 800-218 · SLSA (L1–L4) · in-toto · Sigstore · OWASP SAMM · BSIMM · ISO/IEC 27001 · <strong>EU Cyber Resilience Act</strong> (Art. 13–15 security requirements) · <strong>US EO 14028</strong> (SBOM, SLSA, secure development attestation) · NIS2 · DORA · PCI DSS v4 software security requirements.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg></div><span className="spec-tbl-label">Cryptographic Evidence</span></div></td>
            <td>The defining differentiator of NS-CTAF: <strong>every CTA-2+ control requires cryptographic evidence</strong> — not a scan report, not a self-attested checklist. Signed SBOMs, in-toto provenance metadata, Sigstore transparency log entries, and Cosign-signed container images create an unforgeable, independently verifiable evidence chain that third parties (customers, auditors, regulators) can verify without trusting the attester.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><span className="spec-tbl-label">NS-CMMF Integration</span></div></td>
            <td>NS-CTAF is the technical implementation layer beneath NS-CMMF's D7 Code Integrity and D8 Cyber Risk domains. NS-CMMF establishes board-level accountability; NS-CTAF provides the measurable, evidence-backed controls that demonstrate compliance. Trust posture metrics from Paxley feed directly into NS-CMMF executive reporting and NS-AIGF D6 AI Security controls.</td>
          </tr>
        </tbody></table>
      </div>
    </div>
  </div>

  {/* Platform Callout */}
  <div className="pg-section" style={{"background":"var(--navy)"}}>
    <div className="wrap">
      <div className="platform-callout reveal">
        <div className="pc-left">
          <div className="pc-eyebrow">Delivery Platform</div>
          <h3 className="pc-h3">Paxley Code Security Platform</h3>
          <p className="pc-body">Paxley is the scanning, attestation, and trust evidence platform that makes NS-CTAF controls measurable. While other frameworks reference scanning in their requirements, NS-CTAF is built around Paxley's continuous output — turning every build into a verifiable trust event. SAST · SCA · SBOM · IaC · Container · Secrets · Artefact Signing.</p>
        </div>
        <div className="pc-right">
          <Link className="btn btn-primary" to="/paxley">Explore Paxley <span className="arr">→</span></Link>
          <Link className="btn" style={{"background":"transparent","color":"#fff","border":"1px solid rgba(255,255,255,.25)","marginTop":"10px"}} to="/contact">Request a Demo <span className="arr">→</span></Link>
        </div>
      </div>
    </div>
  </div>

  {/* CTA */}
  <div className="page-cta-band">
    <div className="wrap pcb-inner">
      <h2>Turn point-in-time security scans into continuous, cryptographically verifiable trust assurance</h2>
      <p>We assess your current software trust posture against all 6 NS-CTAF domains, identify your CTA certification path, and deliver a remediation roadmap aligned to EU CRA, SLSA, and EO 14028 requirements.</p>
      <div className="pcb-row"><Link className="btn btn-primary" to="/contact">Start your trust assessment <span className="arr">→</span></Link><Link className="btn btn-ghost" to="/pillar-code" style={{"background":"transparent","color":"#fff","borderColor":"rgba(255,255,255,.3)"}}>Explore Core Pillar 3 →</Link></div>
    </div>
  </div>


    </div>
  )
}

