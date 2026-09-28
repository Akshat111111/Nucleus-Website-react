import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import { useState } from 'react'
import heroCyber from '../../assets/hero_cyber.jpg'

const DIGITAL_CHAIN = [
  { code: 'NS-SSAF v1.0', short: 'Secure Software Architecture', step: '01' },
  { code: 'NS-CTAF v1.0', short: 'Code Trust Assurance', step: '02' },
  { code: 'NS-SSDOF v1.0', short: 'Secure Deployment & Ops', step: '03' },
]

const SERVICES = [
  {
    title: 'Secure Architecture Review',
    desc: 'Security architecture assessment and design — threat-informed architecture review, security pattern implementation, zero-trust design, network segmentation and cloud security architecture aligned to NS-SSAF.',
    link: '/what-we-do/platform/secure-architecture',
  },
  {
    title: 'DevSecOps Transformation',
    desc: 'Embedding security into the software development lifecycle — CI/CD pipeline security, secure coding standards, SAST/DAST/SCA integration, security champions programmes and developer security training.',
    link: '/what-we-do/platform/devsecops',
  },
  {
    title: 'Code Trust & Supply Chain',
    desc: 'Cryptographically verifiable software supply chain — code signing, build integrity, NS-CTAF framework implementation, SBOM construction, CRA compliance and continuous code trust monitoring via Paxley.',
    link: '/what-we-do/platform/code-trust',
  },
  {
    title: 'Software Supply Chain Security',
    desc: 'Open-source risk management, SCA tooling, OSS licence compliance, vulnerability disclosure programmes, dependency health monitoring and software supply chain attack surface reduction.',
    link: '/what-we-do/platform/supply-chain',
  },
  {
    title: 'Security Testing',
    desc: 'Technical security testing across the full stack — web application penetration testing, API security testing, network infrastructure assessment, vulnerability assessment and dark web monitoring for exposed assets.',
    link: '/what-we-do/platform/security-testing',
  },
  {
    title: 'Secure Deployment & Operations',
    desc: 'Production security for software deployment pipelines — IaC security review, container and Kubernetes hardening, runtime security controls, configuration compliance and continuous operational assurance aligned to NS-SSDOF.',
    link: '/what-we-do/platform/deployment',
  },
  {
    title: 'Cloud & Infrastructure Security',
    desc: 'Multi-cloud security architecture, cloud security posture management, platform hardening, identity and access management for cloud environments and cloud-native security controls across AWS, Azure and GCP.',
    link: '/what-we-do/platform/cloud-infra',
  },
  {
    title: 'DPI & Digital Identity Security',
    desc: 'Security assurance for Digital Public Infrastructure — MOSIP, Mojaloop, OpenG2P, national identity platforms, payment rail security, interoperability framework security and open-source DPI deployment assurance.',
    link: '/what-we-do/platform/dpi-security',
  },
  {
    title: 'Paxley — Continuous Platform Trust',
    desc: 'Paxley is the Nucleus Systems technology product for continuous code-security monitoring — SBOM/VEX tracking, vulnerability intelligence integration, code trust scoring and automated supply chain assurance.',
    link: '/what-we-do/platform/paxley',
  },
]

const PROBLEMS = [
  {
    title: 'Software supply chain opacity',
    desc: 'Organisations cannot enumerate their software dependencies, let alone assess their security posture. SBOM is a regulatory requirement and a security control — yet most organisations cannot produce one on demand.',
  },
  {
    title: 'Deployment pipeline as attack surface',
    desc: 'CI/CD pipelines — build systems, artifact registries, deployment automation — are high-value targets. Compromise at build time is invisible to runtime controls. Build integrity and pipeline security require dedicated controls.',
  },
  {
    title: 'Open-source risk accumulation',
    desc: 'Modern software stacks contain thousands of open-source dependencies. Licence compliance, security disclosure, maintainer continuity and version hygiene are ongoing risk management obligations, not one-time assessments.',
  },
  {
    title: 'DPI and regulated platform complexity',
    desc: 'Digital Public Infrastructure, payment systems and identity platforms face combined regulatory, security and open-source governance obligations that generic AppSec frameworks do not address.',
  },
]

const FAQS = [
  {
    q: 'What is a software supply chain attack?',
    a: 'A software supply chain attack targets the tools, processes or dependencies used to build and deploy software — rather than the software itself. Notable examples include SolarWinds (build pipeline compromise), XZ Utils (open-source backdoor), and npm ecosystem attacks. The goal is to inject malicious code that reaches production through trusted channels.',
  },
  {
    q: 'What is an SBOM and is it required?',
    a: 'A Software Bill of Materials (SBOM) is a structured, machine-readable inventory of all components in a software product — libraries, frameworks, dependencies and their versions. The EU Cyber Resilience Act mandates SBOMs for products with digital elements placed on the EU market. US Executive Order 14028 requires SBOMs for software sold to the federal government. Our Paxley product automates SBOM generation, maintenance and VEX tracking.',
  },
  {
    q: 'What is DevSecOps and how does it differ from DevOps?',
    a: 'DevSecOps integrates security controls, testing and governance directly into the development and operations pipeline — making security a continuous property of the delivery process rather than a gate at the end. Practically, this means SAST/DAST/SCA tooling in CI/CD, infrastructure-as-code security review, secrets management and security champions embedded in development teams.',
  },
  {
    q: 'What is the Cyber Resilience Act and when does it apply?',
    a: 'The EU Cyber Resilience Act (CRA) establishes mandatory cybersecurity requirements for products with digital elements sold in the EU market — including software, connected hardware, and components. Key obligations include vulnerability disclosure, SBOM production, security update commitments and conformity assessment. Enforcement begins in stages from late 2025 through 2027.',
  },
]

function FAQ({ items }) {
  const [open, setOpen] = useState(null)
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className={`wm-faq-item${open === i ? ' open' : ''}`}>
          <button className="wm-faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <span className="wm-faq-icon">{open === i ? '−' : '+'}</span>
          </button>
          <div className="wm-faq-answer"><p>{item.a}</p></div>
        </div>
      ))}
    </div>
  )
}

export default function PillarDigital() {
  useReveal()
  return (
    <div className="wm-page">

      {/* ── Hero ── */}
      <section className="wm-hero">
        <div className="wrap">
          <div className="wm-hero-inner">
            <div>
              <span className="wm-eyebrow reveal">Services · 02</span>
              <h1 className="wm-h1 reveal">Digital Platform Trust &amp; <mark>Security Assurance</mark></h1>
              <p className="wm-lede reveal">
                The software platforms organisations build, buy and deploy are under sustained attack — through insecure code, compromised build pipelines, vulnerable dependencies and misconfigured deployment environments. We deliver security assurance across the full software lifecycle using three proprietary frameworks and Paxley, our platform trust technology product.
              </p>
              <div className="reveal" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link className="wm-pill-btn" to="/contact">Book a Briefing</Link>
                <Link className="wm-pill-btn wm-pill-btn-outline" to="/paxley">Explore Paxley</Link>
              </div>
            </div>
            <div className="wm-hero-img-box reveal">
              <img src="/images/digital_hero.jpg" alt="Digital Platform Trust" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="wm-stats">
        <div className="wm-stat reveal">
          <div className="wm-stat-num">3</div>
          <div className="wm-stat-label">Proprietary Platform Frameworks</div>
        </div>
        <div className="wm-stat reveal">
          <div className="wm-stat-num">CRA</div>
          <div className="wm-stat-label">Cyber Resilience Act Ready</div>
        </div>
        <div className="wm-stat reveal">
          <div className="wm-stat-num">Paxley</div>
          <div className="wm-stat-label">Continuous Trust Monitoring</div>
        </div>
      </div>

      {/* ── Framework Chain ── */}
      <section className="wm-section-alt">
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '48px' }} className="reveal">
            <span className="wm-eyebrow" style={{ color: 'var(--wm-pink)' }}>The Digital Platform Trust Chain — Three Frameworks in Sequence</span>
            <h2 className="wm-h2" style={{ marginBottom: '8px' }}>Design it securely. Build it with trust. <mark>Deploy with assurance.</mark></h2>
          </div>
          <div className="wm-chain">
            {DIGITAL_CHAIN.map((f, i) => (
              <div key={i} className="wm-chain-node reveal">
                <div className="wm-chain-step">{f.step}</div>
                <div className="wm-chain-short">{f.short}</div>
                <div className="wm-chain-code">{f.code}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem ZigZag ── */}
      <section className="wm-section">
        <div className="wrap">
          <div className="wm-zigzag">
            <div className="wm-zz-content reveal">
              <span className="wm-eyebrow">Why Digital Platform Security Is Different</span>
              <h2 className="wm-h2">Software supply chain attacks, AI-generated code, and deployment pipeline compromise <mark>have changed the threat model.</mark></h2>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#555', marginBottom: '28px' }}>
                SolarWinds, XZ Utils, the npm ecosystem — software supply chain compromise is now a primary attack vector. Simultaneously, AI-generated code is accelerating development while introducing new categories of security debt. The perimeter is the codebase itself — and most organisations cannot demonstrate that their software is trustworthy at any given point in the lifecycle.
              </p>
              <ul className="wm-problem-list">
                {PROBLEMS.map((p, i) => (
                  <li key={i}><strong>{p.title}</strong>{p.desc}</li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <div className="wm-zz-placeholder" style={{ overflow: 'hidden' }}>
                <img src="/images/digital_hero.jpg" alt="Digital abstract" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="wm-section-alt">
        <div className="wrap">
          <div className="wm-services-header reveal">
            <div>
              <h2>How We Can Help with Digital Platform Trust</h2>
              <p>Nine specialist service domains — from secure software architecture through to continuous platform trust monitoring via Paxley.</p>
            </div>
          </div>
          <div className="wm-grid">
            {SERVICES.map((s, i) => (
              <Link to={s.link} key={i} className="wm-card reveal">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="wm-card-link">Learn More</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standards block ── */}
      <section className="wm-section">
        <div className="wrap">
          <div className="wm-result-block reveal">
            <div className="wm-result-img" style={{ minHeight: 380, overflow: 'hidden' }}>
              <img src="/images/digital_hero.jpg" alt="Digital Frameworks" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="wm-result-content">
              <div className="wm-result-eyebrow">Frameworks &amp; Standards</div>
              <h3 className="wm-result-h3">The standards we work to in digital platform security.</h3>
              <p className="wm-result-p">
                {['NIST SSDF', 'SLSA v1.0', 'ISO/IEC 27034', 'NIST SP 800-218', 'CIS CWS Benchmark', 'OWASP SAMM', 'Cyber Resilience Act', 'NIST SP 800-160', 'OpenSSF Scorecard', 'NIST SP 800-53', 'SBOM / VEX Standards', 'Google SLSA'].join(' · ')}
              </p>
              <Link to="/impact" className="wm-pill-btn">View Our Platform Frameworks</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="wm-section-alt">
        <div className="wrap">
          <div className="wm-faq-header reveal" style={{ marginBottom: '0' }}>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="reveal">
            <FAQ items={FAQS} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="wm-section" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <div className="reveal">
            <span className="wm-eyebrow">Technology Product &amp; Connected Capabilities</span>
            <h2 className="wm-h2">Paxley — Continuous Platform Trust <mark>and more</mark></h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', margin: '32px 0 56px' }}>
              <Link to="/paxley" className="wm-pill-btn wm-pill-btn-outline">Explore Paxley</Link>
              <Link to="/what-we-do/ai-governance-security" className="wm-pill-btn wm-pill-btn-outline">AI Governance &amp; Security</Link>
              <Link to="/what-we-do/cybersecurity-compliance" className="wm-pill-btn wm-pill-btn-outline">Cybersecurity &amp; Compliance</Link>
            </div>
            <h2 className="wm-h2" style={{ fontSize: '26px' }}>Software supply chain security is no longer optional.</h2>
            <p style={{ margin: '16px auto 36px', maxWidth: '600px', color: '#555', fontSize: '16px' }}>
              Speak with a practitioner who has delivered platform security assurance across DPI, fintech and enterprise software — from architecture review to continuous monitoring.
            </p>
            <Link className="wm-pill-btn" to="/contact">Book a Briefing</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
