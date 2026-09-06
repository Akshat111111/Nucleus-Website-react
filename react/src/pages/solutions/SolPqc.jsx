import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function SolPqc() {
  useReveal()

  return (
    <div id="view-sol-pqc">
      

  <div className="pillar-hero">
    <div className="wrap ph-inner">
      <div className="ph-eyebrow"><span className="ph-pill">Domain-Specific Solution · S6</span></div>
      <h1 className="ph-h1">Post-Quantum Cryptography Advisory</h1>
      <p className="ph-sub">Preparing enterprises and governments for the quantum threat — cryptographic inventory, CBOM analysis, PQC readiness assessment, crypto agility design and migration roadmaps aligned to NIST FIPS 203/204/205.</p>
      <div className="pillar-fw-stats">
        <div className="pfs-item"><span className="pfs-val">NIST PQC</span><span className="pfs-lab">FIPS 203 · 204 · 205</span></div>
        <div className="pfs-item"><span className="pfs-val">CBOM</span><span className="pfs-lab">Cryptographic BOM</span></div>
        <div className="pfs-item"><span className="pfs-val">HNDL</span><span className="pfs-lab">Harvest-Now-Decrypt-Later</span></div>
        <div className="pfs-item"><span className="pfs-val">Crypto Agility</span><span className="pfs-lab">Architecture Design</span></div>
        <div className="pfs-item"><span className="pfs-val">NSA CNSA 2.0</span><span className="pfs-lab">ETSI QSC Aligned</span></div>
      </div>
    </div>

    <div className="page-ticker">
      <div className="page-ticker-track">
        <span className="page-ticker-item"><span className="t-cat">Standards</span> NIST FIPS 203 ML-KEM · FIPS 204 ML-DSA · FIPS 205 SLH-DSA</span>
        <span className="page-ticker-item"><span className="t-cat">Threat</span> Harvest-Now-Decrypt-Later · Long-Lived Sensitive Data at Risk Today</span>
        <span className="page-ticker-item"><span className="t-cat">Analysis</span> CBOM · Cryptographic Bill of Materials · Dependency Mapping</span>
        <span className="page-ticker-item"><span className="t-cat">Migration</span> PQC Readiness Assessment · Crypto Agility Architecture Design</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> NSA CNSA 2.0 · ETSI QSC · ISO/IEC 18033 · OWASP CBOM CycloneDX</span>
        <span className="page-ticker-item"><span className="t-cat">Coverage</span> TLS Migration · PKI PQC Readiness · HSM Cryptographic Review</span>
        <span className="page-ticker-item"><span className="t-cat">Delivery</span> Board Briefings · Executive Reporting · Phased Migration Roadmaps</span>
        <span className="page-ticker-item"><span className="t-cat">Standards</span> NIST FIPS 203 ML-KEM · FIPS 204 ML-DSA · FIPS 205 SLH-DSA</span>
        <span className="page-ticker-item"><span className="t-cat">Threat</span> Harvest-Now-Decrypt-Later · Long-Lived Sensitive Data at Risk Today</span>
        <span className="page-ticker-item"><span className="t-cat">Analysis</span> CBOM · Cryptographic Bill of Materials · Dependency Mapping</span>
        <span className="page-ticker-item"><span className="t-cat">Migration</span> PQC Readiness Assessment · Crypto Agility Architecture Design</span>
        <span className="page-ticker-item"><span className="t-cat">Aligned</span> NSA CNSA 2.0 · ETSI QSC · ISO/IEC 18033 · OWASP CBOM CycloneDX</span>
        <span className="page-ticker-item"><span className="t-cat">Coverage</span> TLS Migration · PKI PQC Readiness · HSM Cryptographic Review</span>
        <span className="page-ticker-item"><span className="t-cat">Delivery</span> Board Briefings · Executive Reporting · Phased Migration Roadmaps</span>
      </div>
    </div>
  </div>

  {/* Intro */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <div className="pg-2col reveal">
        <div>
          <div className="about-intro-eyebrow" style={{"marginBottom":"16px"}}>The quantum clock is running. Most organisations are not ready.</div>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>NIST finalised the first post-quantum cryptography standards in 2024 — ML-KEM (FIPS 203), ML-DSA (FIPS 204) and SLH-DSA (FIPS 205). Cryptographically Relevant Quantum Computers (CRQCs) capable of breaking current public-key cryptography may arrive within a decade. Harvest-now-decrypt-later attacks — where adversaries collect encrypted data today to decrypt once quantum capability arrives — are already documented and actively occurring against long-lived sensitive data targets.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8","marginBottom":"16px"}}>Nucleus Systems provides the advisory capability organisations need to understand their cryptographic exposure, prioritise migration effort, build a credible PQC roadmap and implement crypto agility architectures that can adapt as the quantum threat landscape evolves. We work across enterprise, government and financial services sectors, with particular focus on organisations that manage long-lived sensitive data, critical national infrastructure, or classified and sensitive government systems.</p>
          <p style={{"fontSize":"15px","color":"var(--slate)","lineHeight":"1.8"}}>Our approach begins with a rigorous cryptographic inventory and CBOM analysis — understanding what cryptography you actually use, where, and what depends on it — before designing migration pathways that are realistic given your architecture, risk tolerance and regulatory timeline.</p>
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"20px"}}>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"24px 26px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--blue)","marginBottom":"8px"}}>NIST PQC Standards</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>ML-KEM · ML-DSA · SLH-DSA — algorithm selection &amp; hybrid transition</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.65"}}>We work with the finalised NIST PQC standards and advise on algorithm selection and hybrid transition strategies appropriate to your use case and risk profile — including where and when to deploy hybrid classical/PQC schemes during the transition period.</div>
          </div>
          <div style={{"background":"var(--grey)","borderRadius":"14px","padding":"24px 26px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>Cryptographic Bill of Materials</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"var(--navy)","marginBottom":"6px"}}>CBOM analysis — the foundation before any migration can begin</div>
            <div style={{"fontSize":"12.5px","color":"var(--slate)","lineHeight":"1.65"}}>CBOM analysis provides a complete inventory of every cryptographic asset in your environment — libraries, protocols, key lengths, certificate lifetimes, dependencies — that is required before any PQC migration planning can begin. You cannot migrate what you have not inventoried.</div>
          </div>
          <div style={{"background":"var(--navy)","borderRadius":"14px","padding":"24px 26px"}}>
            <div style={{"fontFamily":"var(--mono)","fontSize":"9px","fontWeight":"700","letterSpacing":".12em","textTransform":"uppercase","color":"var(--orange)","marginBottom":"8px"}}>Harvest-Now-Decrypt-Later</div>
            <div style={{"fontSize":"13.5px","fontWeight":"700","color":"#fff","marginBottom":"6px"}}>The threat is present — not theoretical, not future</div>
            <div style={{"fontSize":"12.5px","color":"rgba(255,255,255,.65)","lineHeight":"1.65"}}>Organisations that transmit or store sensitive data with long classification lifetimes are already at risk from adversary collection operations. We help you identify and prioritise the data and systems most exposed to HNDL collection today — before quantum decryption capability exists.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Services */}
  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">What's Included</h2>
      <p className="pg-sub reveal">From CBOM analysis and PQC readiness assessment through to crypto agility architecture design and migration roadmap delivery.</p>
      <div className="svc2-grid reveal">

        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 17 17" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 5h11M3 8.5h8M3 12h5"/><circle cx="13" cy="12" r="2.5"/><path d="M13 10.5v1.5l1 1"/></svg></div>
          <h4>PQC Readiness Assessment</h4>
          <p>Structured assessment of organisational and technical readiness for post-quantum migration — covering cryptographic asset inventory, dependency mapping, algorithm risk classification, and prioritised remediation roadmap aligned to NIST PQC standards and NSA CNSA 2.0 timelines.</p>
        </div>

        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 17 17" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="13" height="11" rx="1.5"/><path d="M5 6.5h7M5 8.5h5M5 10.5h3"/></svg></div>
          <h4>Cryptographic Bill of Materials (CBOM) Analysis</h4>
          <p>Comprehensive cryptographic inventory across your environment — identifying every cryptographic library, protocol, algorithm, key length and certificate in use, mapping dependencies, and producing a structured CBOM that forms the foundation for PQC migration planning and ongoing crypto governance.</p>
        </div>

        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 17 17" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8.5 2v4M8.5 11v4M2 8.5h4M11 8.5h4"/><circle cx="8.5" cy="8.5" r="3"/></svg></div>
          <h4>Harvest-Now-Decrypt-Later Threat Assessment</h4>
          <p>Identification and risk classification of data and communication channels exposed to HNDL collection — assessing data classification lifetimes, transit encryption, long-lived key material and the specific adversary profiles most likely to be running collection operations against your organisation today.</p>
        </div>

        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 17 17" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 13L7 9l3 3 4-5"/><path d="M11 4h3v3"/></svg></div>
          <h4>Crypto Agility Architecture Design</h4>
          <p>Architecture design for cryptographic agility — the ability to swap cryptographic algorithms, key sizes and protocols without systemic rearchitecture. Crypto agility is the strategic requirement that underlies all PQC migration: organisations that lack it face much higher migration costs when standards and threats evolve.</p>
        </div>

        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 17 17" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="6" width="5" height="7" rx="1"/><path d="M5.5 6V4.5a3 3 0 016 0V6"/><rect x="9" y="6" width="5" height="7" rx="1"/></svg></div>
          <h4>NIST PQC Standards Migration Roadmap</h4>
          <p>Structured migration roadmap from current public-key cryptography to NIST PQC standards — covering algorithm selection (ML-KEM, ML-DSA, SLH-DSA), hybrid classical/PQC transition strategies, dependency sequencing, library and vendor readiness, and phased implementation timeline with measurable milestones.</p>
        </div>

        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 17 17" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 8.5h3l2-5 3 10 2-5h3"/></svg></div>
          <h4>TLS &amp; PKI Infrastructure PQC Readiness Review</h4>
          <p>Assessment of TLS configuration, PKI architecture, certificate lifecycle management and CA trust chains for PQC readiness — covering current algorithm usage, hybrid TLS readiness, certificate issuance pipeline, root CA migration planning and the vendor ecosystem readiness for PQC certificate support.</p>
        </div>

        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 17 17" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 4h11v2H3zM5 6v7M8.5 6v7M12 6v7M3 13h11"/></svg></div>
          <h4>Long-lived Data Encryption Risk Assessment</h4>
          <p>Risk assessment focused specifically on long-lived encrypted data — financial records, health data, classified information, legal documents — identifying data stores most exposed to HNDL attacks and recommending re-encryption priority, archive security and data lifecycle controls to reduce quantum exposure.</p>
        </div>

        <div className="svc2-card">
          <div className="svc2-card-badge"><svg viewBox="0 0 17 17" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8.5" cy="5.5" r="2.5"/><path d="M4 14s.5-4 4.5-4 4.5 4 4.5 4"/><path d="M12 8l2 1-2 1"/></svg></div>
          <h4>Executive PQC Briefing &amp; Board Reporting</h4>
          <p>Structured executive briefing and board-level reporting on PQC risk, organisational exposure and migration investment requirements — translating technical quantum threat concepts into business risk language that supports informed governance decisions, budget allocation and regulatory disclosure.</p>
        </div>

      </div>
    </div>
  </div>

  {/* Standards */}
  <div className="pg-section" style={{"background":"#fff"}}>
    <div className="wrap">
      <h2 className="pg-sh reveal">Standards &amp; frameworks</h2>
      <table className="spec-tbl reveal">
        <thead><tr><th>Standard / Framework</th><th>Body</th><th>Relevance</th></tr></thead>
        <tbody>
          <tr><td>FIPS 203 (ML-KEM)</td><td>NIST</td><td>Primary PQC key encapsulation standard</td></tr>
          <tr><td>FIPS 204 (ML-DSA)</td><td>NIST</td><td>Primary PQC digital signature standard</td></tr>
          <tr><td>FIPS 205 (SLH-DSA)</td><td>NIST</td><td>Hash-based signature standard (stateless)</td></tr>
          <tr><td>CNSA 2.0</td><td>NSA / CISA</td><td>US national security system migration guidance</td></tr>
          <tr><td>ETSI QSC Standards</td><td>ETSI</td><td>European quantum-safe cryptography standards</td></tr>
          <tr><td>CBOM (CycloneDX)</td><td>OWASP</td><td>Cryptographic bill of materials specification</td></tr>
          <tr><td>ISO/IEC 18033</td><td>ISO/IEC</td><td>Encryption algorithms reference standard</td></tr>
        </tbody></table>
    </div>
  </div>

  <div className="pg-section" style={{"background":"var(--grey)"}}>
    <div className="wrap">
      <div className="xlink-row reveal">
        <div className="xlink-card" data-go="pillar-cyber">
          <div className="xlink-label">Parent Pillar</div>
          <div className="xlink-name">Cybersecurity Trust &amp; Resilience</div>
          <div className="xlink-desc">The foundational pillar covering cryptography governance, PKI security and long-term resilience design.</div>
          <div className="xlink-go">Explore Pillar 1 →</div>
        </div>
        <div className="xlink-card" data-go="sol-payments">
          <div className="xlink-label">Related Solution</div>
          <div className="xlink-name">Payment Security &amp; DPI</div>
          <div className="xlink-desc">Payment infrastructure and HSM cryptography are among the highest-priority PQC migration targets.</div>
          <div className="xlink-go">Explore Payment Security →</div>
        </div>
        <div className="xlink-card" data-go="fw-ctaf">
          <div className="xlink-label">Related Framework</div>
          <div className="xlink-name">NS-CTAF</div>
          <div className="xlink-desc">The NS-CTAF covers cryptographic dependency management in software supply chains — directly relevant to PQC migration.</div>
          <div className="xlink-go">Explore NS-CTAF →</div>
        </div>
      </div>
    </div>
  </div>

  <div className="page-cta-band">
    <div className="wrap pcb-inner">
      <h2>Start your PQC readiness programme before the threat arrives — not after</h2>
      <p>The time to prepare is now. HNDL collection is active. Migration timelines are measured in years. Contact us to scope a CBOM analysis or PQC readiness assessment.</p>
      <div className="pcb-row"><Link className="btn btn-primary" to="/contact">Request a briefing <span className="arr">→</span></Link><Link className="btn btn-ghost" to="/pillar-cyber" style={{"background":"transparent","color":"#fff","borderColor":"rgba(255,255,255,.3)"}}>Explore Pillar 1 →</Link></div>
    </div>
  </div>


    </div>
  )
}

