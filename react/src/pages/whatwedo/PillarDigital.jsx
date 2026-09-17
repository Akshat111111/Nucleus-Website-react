import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

const DIGITAL_CHAIN = [
  { code: 'N3-SSAF v1.0', short: 'Secure Software Architecture', step: '01' },
  { code: 'N3-CTAF v1.0', short: 'Code Trust Assurance', step: '02' },
  { code: 'N3-SSDOF v1.0', short: 'Secure Deployment & Ops', step: '03' },
]

const SERVICES = [
  {
    num: '01',
    title: 'Secure Architecture Review',
    desc: 'Security architecture assessment and design — threat-informed architecture review, security pattern implementation, zero-trust design, network segmentation and cloud security architecture aligned to NS-SSAF.',
    link: '/what-we-do/platform/secure-architecture',
    tags: ['NS-SSAF', 'Zero Trust', 'Architecture Review'],
  },
  {
    num: '02',
    title: 'DevSecOps Transformation',
    desc: 'Embedding security into the software development lifecycle — CI/CD pipeline security, secure coding standards, SAST/DAST/SCA integration, security champions programmes and developer security training.',
    link: '/what-we-do/platform/devsecops',
    tags: ['DevSecOps', 'CI/CD Security', 'SDLC'],
  },
  {
    num: '03',
    title: 'Code Trust & Supply Chain',
    desc: 'Cryptographically verifiable software supply chain — code signing, build integrity, NS-CTAF framework implementation, SBOM construction, CRA compliance and continuous code trust monitoring via Paxley.',
    link: '/what-we-do/platform/code-trust',
    tags: ['NS-CTAF', 'SBOM', 'Code Signing', 'Paxley'],
  },
  {
    num: '04',
    title: 'Software Supply Chain Security',
    desc: 'Open-source risk management, SCA tooling, OSS licence compliance, vulnerability disclosure programmes, dependency health monitoring and software supply chain attack surface reduction.',
    link: '/what-we-do/platform/supply-chain',
    tags: ['SCA', 'OSS Risk', 'Licence Compliance', 'SBOM'],
  },
  {
    num: '05',
    title: 'Security Testing',
    desc: 'Technical security testing across the full stack — web application penetration testing, API security testing, network infrastructure assessment, vulnerability assessment and dark web monitoring for exposed assets.',
    link: '/what-we-do/platform/security-testing',
    tags: ['Pen Testing', 'API Security', 'Vulnerability Assessment'],
  },
  {
    num: '06',
    title: 'Secure Deployment & Operations',
    desc: 'Production security for software deployment pipelines — IaC security review, container and Kubernetes hardening, runtime security controls, configuration compliance and continuous operational assurance aligned to NS-SSDOF.',
    link: '/what-we-do/platform/deployment',
    tags: ['NS-SSDOF', 'IaC Security', 'K8s Hardening'],
  },
  {
    num: '07',
    title: 'Cloud & Infrastructure Security',
    desc: 'Multi-cloud security architecture, cloud security posture management, platform hardening, identity and access management for cloud environments and cloud-native security controls across AWS, Azure and GCP.',
    link: '/what-we-do/platform/cloud-infra',
    tags: ['Cloud Security', 'CSPM', 'Multi-cloud', 'IAM'],
  },
  {
    num: '08',
    title: 'DPI & Digital Identity Security',
    desc: 'Security assurance for Digital Public Infrastructure — MOSIP, Mojaloop, OpenG2P, national identity platforms, payment rail security, interoperability framework security and open-source DPI deployment assurance.',
    link: '/what-we-do/platform/dpi-security',
    tags: ['DPI Security', 'MOSIP', 'Mojaloop', 'Digital Identity'],
  },
  {
    num: '09',
    title: 'Paxley — Continuous Platform Trust',
    desc: 'Paxley is the Nucleus Systems technology product for continuous code-security monitoring — SBOM/VEX tracking, vulnerability intelligence integration, code trust scoring and automated supply chain assurance.',
    link: '/what-we-do/platform/paxley',
    tags: ['Paxley', 'Continuous Monitoring', 'SBOM', 'VEX'],
  },
]

export default function PillarDigital() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">What We Do · 02</div>
            <h1 className="svc-h1 reveal">Digital Platform Trust &amp; Assurance</h1>
            <p className="svc-lede reveal">
              The software platforms organisations build, buy and deploy are under sustained attack — through insecure code, compromised build pipelines, vulnerable dependencies and misconfigured deployment environments. We deliver security assurance across the full software lifecycle, from architecture through to continuous operations, using three proprietary frameworks and Paxley, our platform trust technology product.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">Our Frameworks <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Trust Chain */}
      <section className="reach-strip">
        <div className="rs-inner">
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--orange)' }}>
              The Digital Platform Trust Chain — Three Frameworks in Sequence
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', flexWrap: 'wrap', rowGap: '12px' }}>
            {DIGITAL_CHAIN.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="reveal" style={{ textAlign: 'center', padding: '14px 24px', background: 'rgba(255,255,255,.06)', borderRadius: '10px', minWidth: '160px' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '8.5px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '5px' }}>{f.step}</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--white)', marginBottom: '4px' }}>{f.short}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '8px', color: 'rgba(255,255,255,.45)', letterSpacing: '.06em' }}>{f.code}</div>
                </div>
                {i < DIGITAL_CHAIN.length - 1 && (
                  <div style={{ padding: '0 10px', color: 'rgba(255,255,255,.25)', fontSize: '16px', fontWeight: 300 }}>→</div>
                )}
              </div>
            ))}
          </div>
          <p className="rs-tagline reveal" style={{ marginTop: '24px' }}>Design it securely. Build it with trust. Deploy it with assurance. Monitor it continuously.</p>
        </div>
      </section>

      {/* Problem */}
      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why Digital Platform Security Is Different</span>
              <h2>Software supply chain attacks, AI-generated code, and deployment pipeline compromise have changed the threat model.</h2>
              <p>SolarWinds, XZ Utils, the npm ecosystem — software supply chain compromise is now a primary attack vector. Simultaneously, AI-generated code is accelerating development while introducing new categories of security debt. The perimeter is the codebase itself — and most organisations cannot demonstrate that their software is trustworthy at any given point in the lifecycle.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Software supply chain opacity', desc: 'Organisations cannot enumerate their software dependencies, let alone assess their security posture. SBOM is a regulatory requirement and a security control — yet most organisations cannot produce one on demand.' },
                { title: 'Deployment pipeline as attack surface', desc: 'CI/CD pipelines — build systems, artifact registries, deployment automation — are high-value targets. Compromise at build time is invisible to runtime controls. Build integrity and pipeline security require dedicated controls.' },
                { title: 'Open-source risk accumulation', desc: 'Modern software stacks contain thousands of open-source dependencies. Licence compliance, security disclosure, maintainer continuity and version hygiene are ongoing risk management obligations, not one-time assessments.' },
                { title: 'DPI and regulated platform complexity', desc: 'Digital Public Infrastructure, payment systems and identity platforms face combined regulatory, security and open-source governance obligations that generic AppSec frameworks do not address.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}><h4>{p.title}</h4><p>{p.desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">Nine Service Domains</span>
            <h2>Digital Platform Trust &amp; Assurance — what we deliver.</h2>
            <p>From secure software architecture through to continuous platform trust monitoring — nine specialist service domains and one technology product.</p>
          </div>
          <div className="svc-what-grid">
            {SERVICES.map((s, i) => (
              <Link className="svc-what-card reveal" to={s.link} key={i} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title">{s.title}</h3>
                <p className="svc-what-desc">{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '12px' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ fontSize: '9.5px', background: 'rgba(249,115,22,.1)', color: 'var(--orange)', border: '1px solid rgba(249,115,22,.25)', borderRadius: '5px', padding: '2px 7px', fontWeight: 700, letterSpacing: '.04em' }}>{t}</span>
                  ))}
                </div>
                <span className="arr-link" style={{ marginTop: '12px', display: 'block' }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Frameworks &amp; Standards</span>
            <h2>The standards we work to in digital platform security.</h2>
          </div>
          <div className="standards-grid">
            {['NIST SSDF', 'SLSA v1.0', 'ISO/IEC 27034', 'NIST SP 800-218', 'CIS CWS Benchmark', 'OWASP SAMM', 'CRA (Cyber Resilience Act)', 'NIST SP 800-160', 'Google SLSA', 'NIST SP 800-53', 'OpenSSF Scorecard', 'SBOM / VEX Standards'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Paxley Feature */}
      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Technology Product</span>
            <h2>Paxley — Continuous Platform Trust</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/paxley"><h4>What is Paxley?</h4><p>Paxley is the Nucleus Systems technology for continuous code-security monitoring — SBOM tracking, vulnerability intelligence and code trust scoring.</p><span className="arr-link">Explore Paxley →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/code-trust"><h4>Code Trust &amp; NS-CTAF</h4><p>The Code Trust Assurance Framework — the methodology behind Paxley's trust scoring and supply chain assurance.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/dpi-security"><h4>DPI Security</h4><p>MOSIP, Mojaloop, OpenG2P — digital identity and payment infrastructure security across 40+ country deployments.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Software supply chain security is no longer optional.</h2>
            <p>Speak with a practitioner who has delivered platform security assurance across DPI, fintech and enterprise software — from architecture review to continuous monitoring.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">Our Platform Frameworks</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
