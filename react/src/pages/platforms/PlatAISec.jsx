import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function PlatAISec() {
  useReveal()

  return (
    <div id="view-plat-aisec">
      

  <div className="pillar-hero">
    <div className="wrap ph-inner">
      <div className="ph-eyebrow"><span className="ph-pill">Platform · Pillar 2B</span></div>
      <h1 className="ph-h1">AI Security Assessment Platform</h1>
      <p className="ph-sub">The structured assessment and evidence management platform for delivering NS-AISCA evaluations across AI systems, models, MLOps pipelines and inference infrastructure — covering the attack surfaces that general security tools cannot reach.</p>
      <div className="pillar-fw-stats">
        <div className="pfs-item"><span className="pfs-val">108</span><span className="pfs-lab">NS-AISCA Controls</span></div>
        <div className="pfs-item"><span className="pfs-val">12</span><span className="pfs-lab">Security Domains</span></div>
        <div className="pfs-item"><span className="pfs-val">5</span><span className="pfs-lab">Maturity Levels</span></div>
        <div className="pfs-item"><span className="pfs-val">GenAI</span><span className="pfs-lab">Native Modules</span></div>
        <div className="pfs-item"><span className="pfs-val">Agentic</span><span className="pfs-lab">AI Coverage</span></div>
      </div>
    </div>

    <div className="page-ticker">
      <div className="page-ticker-track">
        <span className="page-ticker-item"><span className="t-cat">Platform</span> 108 NS-AISCA Controls · 12 Security Domains</span>
        <span className="page-ticker-item"><span className="t-cat">GenAI</span> Native LLM Modules · Agentic System Coverage · RAG Security</span>
        <span className="page-ticker-item"><span className="t-cat">Maturity</span> 5 Maturity Levels · 5 Evidence Grades · Structured Scoring</span>
        <span className="page-ticker-item"><span className="t-cat">Testing</span> LLM Red Teaming · Adversarial ML · Data Integrity Assessment</span>
        <span className="page-ticker-item"><span className="t-cat">Output</span> AI Security Posture Report · Threat Model · Remediation Roadmap</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> OWASP LLM Top 10 · MITRE ATLAS · NIST AI RMF · ISO 42001</span>
        <span className="page-ticker-item"><span className="t-cat">Delivery</span> Practitioner-Led · Evidence-Based · Board-Ready Findings</span>
        <span className="page-ticker-item"><span className="t-cat">Platform</span> 108 NS-AISCA Controls · 12 Security Domains</span>
        <span className="page-ticker-item"><span className="t-cat">GenAI</span> Native LLM Modules · Agentic System Coverage · RAG Security</span>
        <span className="page-ticker-item"><span className="t-cat">Maturity</span> 5 Maturity Levels · 5 Evidence Grades · Structured Scoring</span>
        <span className="page-ticker-item"><span className="t-cat">Testing</span> LLM Red Teaming · Adversarial ML · Data Integrity Assessment</span>
        <span className="page-ticker-item"><span className="t-cat">Output</span> AI Security Posture Report · Threat Model · Remediation Roadmap</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> OWASP LLM Top 10 · MITRE ATLAS · NIST AI RMF · ISO 42001</span>
        <span className="page-ticker-item"><span className="t-cat">Delivery</span> Practitioner-Led · Evidence-Based · Board-Ready Findings</span>
      </div>
    </div>
  </div>

  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <div className="pg-2col reveal">
        <div>
          <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>AI-specific assessment, not adapted general tools</div>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>General vulnerability scanners and penetration testing frameworks were not designed for AI systems. They find common application vulnerabilities — SQL injection, misconfigurations, exposed credentials — but cannot evaluate prompt injection resistance, adversarial robustness, training data poisoning exposure, model inversion risk, or the boundary control failures that turn agentic AI systems into unconstrained actors.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>The AI Security Assessment Platform implements all 108 NS-AISCA controls as guided assessment modules, structured around the attack vectors actually exploited against AI systems in production. Assessors work through each domain — from data security and model integrity through to supply chain and incident response — with evidence requirements, scoring criteria and remediation guidance specific to AI security at each control.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8"}}>Every finding is cross-referenced to the threat catalogues it addresses — OWASP LLM Top 10, MITRE ATLAS adversarial ML tactics, NIST AI RMF MANAGE function requirements, and EU AI Act Art. 9 post-market monitoring obligations — so organisations can trace each gap from control to threat to regulation.</p>
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"16px"}}>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"26px 28px","borderLeft":"4px solid #DC2626"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#DC2626","marginBottom":"8px"}}>LLM &amp; GenAI Modules</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>Purpose-built for prompt injection, output control and system prompt security</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>D4 assessment modules cover direct and indirect prompt injection, system prompt hardening, output content filtering, jailbreak resistance, and multi-turn conversation security — with structured evidence requirements drawn from OWASP LLM Top 10.</div>
          </div>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"26px 28px","borderLeft":"4px solid #0891B2"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"#0891B2","marginBottom":"8px"}}>Agentic AI Security</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>Agent boundary controls, tool authorisation and kill-switch assessment</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.6"}}>D5 modules assess action scope limits, tool use authorisation architecture, human-in-the-loop gate implementation, multi-agent trust models, and kill-switch capability — the controls that prevent agentic systems from taking irreversible actions when manipulated.</div>
          </div>
          <div style={{"background":"var(--navy)","borderRadius":"14px","padding":"26px 28px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>Regulatory Evidence</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"#fff","marginBottom":"6px"}}>Assessment output packages for EU AI Act technical documentation</div>
            <div style={{"fontSize":"12.5px","color":"rgba(255,255,255,.65)","lineHeight":"1.6"}}>Findings reports are structured to support EU AI Act Art. 11 technical documentation requirements. The platform generates evidence packages that map control gaps and remediation status to specific regulatory obligations — reducing the preparation burden for conformity assessment.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">Platform Capabilities</h2>
      <p className="pg-sub reveal">Every module is purpose-built for AI security — covering attack surfaces that standard vulnerability management tools cannot evaluate.</p>
      <div className="svc2-grid reveal">
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
          <h4>108-Control Assessment Engine</h4>
          <p>All 108 NS-AISCA controls implemented as structured assessment modules. Each control is scored across 5 maturity levels with domain-specific evidence requirements — not generic yes/no checkboxes. Assessment logic reflects the layered nature of AI security risk.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></div>
          <h4>MITRE ATLAS &amp; OWASP Cross-Mapping</h4>
          <p>Every control and finding is automatically cross-referenced to MITRE ATLAS adversarial ML tactics and techniques and OWASP LLM Top 10 entries. Assessment findings link directly to the threat catalogue entries they address — giving technical teams actionable threat context for each gap.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg></div>
          <h4>Domain Scoping by AI Profile</h4>
          <p>Assessment scope configured to the client's AI deployment profile: LLM-centric, predictive ML, agentic AI, embedded AI in products, or MLOps platform. Domain weighting adjusts automatically — a predictive ML deployment needs deeper D1/D3/D8 coverage; an LLM deployment needs deeper D4/D5/D9.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M3 3h18v18H3zM3 9h18M9 21V9"/></svg></div>
          <h4>Severity-Scored Findings Register</h4>
          <p>Control gaps are scored by severity (Critical / High / Medium / Low) and by domain priority. The findings register is structured for both technical remediation teams (with evidence references and remediation guidance) and for executive and board audiences (with domain-level risk summaries).</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div>
          <h4>Remediation Roadmap Generation</h4>
          <p>Gaps are automatically sequenced into a prioritised remediation roadmap. Controls with high severity and low implementation effort surface first. The roadmap differentiates between quick wins (configuration changes, policy updates) and structural remediation (architecture changes, tooling investment).</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
          <h4>EU AI Act Evidence Packaging</h4>
          <p>Assessment output structured to support Art. 11 technical documentation, Art. 9 post-market monitoring evidence, and Art. 73 incident reporting readiness. For high-risk AI system operators, the platform produces documentation packages aligned to notified body conformity assessment expectations.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
          <h4>Multi-Engagement Trend Tracking</h4>
          <p>Results stored longitudinally across engagements. Organisations running ongoing AI security monitoring programmes can track domain maturity progression, measure remediation effectiveness, and report security posture improvement with quantified evidence rather than assertions.</p>
        </div>
        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
          <h4>Technical &amp; Executive Reporting</h4>
          <p>Two report formats generated from the same assessment data: a technical findings report with control-level detail for security and engineering teams, and an executive summary with domain risk ratings, regulatory exposure summary and top remediation priorities for board and CISO audiences.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">Assessment Methodology</h2>
      <p className="pg-sub reveal" style={{"marginBottom":"8px"}}>The platform structures the NS-AISCA assessment process to be rigorous, reproducible and aligned to the regulatory evidence standards that AI system operators now need to meet.</p>
      <div style={{"overflowX":"auto"}} className="reveal">
        <table className="spec-tbl"><tbody>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/></svg></div><span className="spec-tbl-label">Assessment Duration</span></div></td>
            <td>Initial NS-AISCA assessment engagements typically run <strong>3–6 weeks</strong> depending on the number of AI systems in scope and their deployment complexity. Focused single-domain assessments (e.g. D4 LLM Security only, or D5 Agentic AI only) can be completed in <strong>1–2 weeks</strong>. Ongoing monitoring programmes operate on a quarterly cadence.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><span className="spec-tbl-label">Assessment Approach</span></div></td>
            <td>Assessments combine structured interviews with AI system architects and ML engineers, evidence review of system documentation, training data governance records and pipeline configurations, and hands-on technical evaluation where system access is available. The platform guides assessors through what to request, examine and test at each control — ensuring domain coverage is consistent across engagements and assessors.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div><span className="spec-tbl-label">Integration with NS-AIGF</span></div></td>
            <td>When clients are engaged on both NS-AIGF (AI governance) and NS-AISCA (AI security), assessment findings are linked. D6 AI Security controls in NS-AIGF reference specific NS-AISCA domain gaps. The combined assessment produces a unified view of governance and technical security posture — useful for organisations preparing for EU AI Act conformity assessment where both governance and technical security requirements apply.</td>
          </tr>
          <tr>
            <td><div className="spec-tbl-key"><div className="spec-tbl-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div><span className="spec-tbl-label">Deliverables</span></div></td>
            <td><strong>Domain Maturity Scorecard</strong> (all 12 domains, L1–L5) · <strong>Threat Exposure Map</strong> (MITRE ATLAS and OWASP LLM Top 10 gaps) · <strong>Technical Findings Register</strong> (108 controls, severity-scored) · <strong>Prioritised Remediation Roadmap</strong> · <strong>Executive Summary</strong> (board-ready, domain risk ratings) · <strong>EU AI Act Evidence Package</strong> (Art. 9, 11, 73 documentation support).</td>
          </tr>
        </tbody></table>
      </div>
    </div>
  </div>

  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <div className="xlink-row reveal">
        <div className="xlink-card" data-go="fw-aisca">
          <div className="xlink-label">Underlying Framework</div>
          <div className="xlink-name">NS-AISCA</div>
          <div className="xlink-desc">The 108-control AI security controls architecture that this platform fully implements across 12 security domains.</div>
          <div className="xlink-go">Explore NS-AISCA →</div>
        </div>
        <div className="xlink-card" data-go="pillar-aisec">
          <div className="xlink-label">Parent Pillar</div>
          <div className="xlink-name">AI Security &amp; Assurance</div>
          <div className="xlink-desc">The full service model, methodology and engagement outcomes for Core Pillar 2B.</div>
          <div className="xlink-go">Explore Pillar 2B →</div>
        </div>
        <div className="xlink-card" data-go="fw-aigf">
          <div className="xlink-label">Related Framework</div>
          <div className="xlink-name">NS-AIGF</div>
          <div className="xlink-desc">The AI governance framework that NS-AISCA's D6 AI Security controls connect to — governance and technical security in one picture.</div>
          <div className="xlink-go">Explore NS-AIGF →</div>
        </div>
      </div>
    </div>
  </div>

  <div className="page-cta-band">
    <div className="wrap pcb-inner">
      <h2>Assess the security of your AI systems against the attacks that are happening now</h2>
      <p>Book a scoping call to define which NS-AISCA domains are most relevant to your AI deployment profile. We'll scope the engagement and define evidence requirements in advance of assessment.</p>
      <div className="pcb-row"><Link className="btn btn-primary" to="/contact">Book a scoping call <span className="arr">→</span></Link><Link className="btn btn-ghost" to="/fw-aisca" style={{"background":"transparent","color":"#fff","borderColor":"rgba(255,255,255,.3)"}}>Explore NS-AISCA →</Link></div>
    </div>
  </div>


    </div>
  )
}

