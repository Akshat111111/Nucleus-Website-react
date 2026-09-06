import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function SvcSecureSoftware() {
  useReveal()
  return (
    <div id="view-svc">

      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Secure Software &amp; DevSecOps</div>
            <h1 className="svc-h1 reveal">Build security into software delivery — from commit to production.</h1>
            <p className="svc-lede reveal">
              The market has shifted from "scan the code" to "prove the software can be trusted." Supply-chain attacks, AI-generated code and regulatory mandates for software transparency mean that SAST tools alone are no longer sufficient. We help engineering teams build security into the SDLC, operationalise DevSecOps and prove software supply-chain trust to boards, buyers and regulators.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/penetration-testing">See Technical Assurance <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Problem</span>
              <h2>AppSec has become fragmented, noisy and expensive to operationalise.</h2>
              <p>Tool sprawl — SAST, SCA, secrets, IaC, container, SBOM — running as separate programmes with separate workflows, owners, and evidence. Pricing friction making full coverage expensive for mid-market teams. Scanner output shows findings but fails to prove code provenance, build integrity, dependency trust and remediation accountability.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'No secure SDLC baseline', desc: 'Security requirements, threat models and secure design patterns are not embedded in development workflows. Security is a gate at the end, not a control throughout.' },
                { title: 'DevSecOps not operationalised', desc: 'SAST, SCA and secrets tools are installed but not integrated into CI/CD gates, not tuned to reduce noise, and not generating evidence for compliance or board reporting.' },
                { title: 'Software supply chain exposure', desc: 'Open source dependencies, container images, third-party APIs and AI-generated code introduce risks that point-in-time vulnerability scanning cannot address.' },
                { title: 'No software trust evidence', desc: 'Customers, investors and regulators increasingly require evidence of software trust — SBOM, artifact signing, build integrity — that most organisations cannot yet provide.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">What We Do</span>
            <h2>Secure Software &amp; DevSecOps Services</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Secure SDLC Assessment &amp; Implementation', desc: 'Assessment of how security is currently embedded in the development lifecycle, followed by a practical implementation of security requirements, threat modelling, secure design patterns and developer education.' },
              { num: '02', title: 'DevSecOps Transformation', desc: 'End-to-end DevSecOps programme — SAST/SCA integration, secrets detection, IaC security, container security, CI/CD gate configuration and tool tuning to reduce noise and generate useful evidence.' },
              { num: '03', title: 'Software Supply-Chain Assurance', desc: 'Open source risk management, dependency trust programme, third-party API security and AI-generated code governance — building provable trust from code origin to deployment.' },
              { num: '04', title: 'SBOM &amp; Software Transparency', desc: 'Software bill of materials (SBOM) programme implementation using CycloneDX and SPDX standards — enabling supply chain transparency, VEX attestations and regulatory evidence for EU CRA and EO 14028.' },
              { num: '05', title: 'Cloud-Native Application Security', desc: 'Container security, Kubernetes hardening, cloud application security posture, API security testing and cloud-native security architecture review — aligned to your cloud provider and deployment model.' },
              { num: '06', title: 'Virtual DevSecOps Champion', desc: 'Fractional DevSecOps leadership — owning the AppSec programme, working directly with engineering teams, managing toolchain selection and reporting security posture to the CISO and board.' },
            ].map((s, i) => (
              <div className="svc-what-card reveal" key={i}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="svc-what-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-scope section">
        <div className="wrap svc-scope-grid">
          <div className="svc-scope-col reveal">
            <h3>Scope</h3>
            <ul className="svc-list">
              <li>SDLC security maturity assessment</li>
              <li>SAST, SCA, secrets, IaC and container tool integration</li>
              <li>CI/CD security gate configuration and evidence generation</li>
              <li>SBOM generation toolchain (Syft, CycloneDX, SPDX)</li>
              <li>Artifact signing (Cosign/Sigstore) implementation</li>
              <li>Build integrity and provenance controls (SLSA Build L2/L3)</li>
              <li>Developer security training and secure coding guidance</li>
              <li>Supply chain dependency risk programme</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>What You Receive</h3>
            <ul className="svc-list">
              <li>SDLC security maturity assessment and gap report</li>
              <li>DevSecOps toolchain design and integration playbook</li>
              <li>CI/CD security gates with evidence generation</li>
              <li>SBOM programme and transparency documentation</li>
              <li>Regulatory gap report (EU CRA, EO 14028, SLSA)</li>
              <li>Board software trust report and roadmap</li>
              <li>Remediation roadmap (90-day and 12-month)</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>Security embedded in engineering, not a gate at the end</li>
              <li>Supply chain transparency and SBOM ready for regulated procurement</li>
              <li>EU CRA and EO 14028 compliance evidence generated</li>
              <li>Reduced vulnerability noise — security findings engineering teams can act on</li>
              <li>Competitive trust signal — software provenance evidenced to enterprise buyers</li>
              <li>DevSecOps toolchain investment generating measurable ROI</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="svc-triggers section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">When You Need This</span>
            <h2>Buying triggers</h2>
          </div>
          <div className="triggers-grid">
            {[
              'Enterprise customers requesting SBOM, software trust evidence or vendor security questionnaire completion',
              'EU Cyber Resilience Act (CRA) obligations approaching for software product companies',
              'DevSecOps tools deployed but not generating useful findings or CI/CD evidence',
              'AI-generated code creating supply-chain trust questions for engineering leadership',
              'SLSA build integrity certification required for enterprise or government procurement',
              'No SDLC security baseline — security is a gate at the end, not a control throughout',
              'Post-acquisition integration requiring AppSec programme standardisation',
              'Virtual DevSecOps Champion needed without a full-time hire',
            ].map((t, i) => (
              <div className="trigger-item reveal" key={i}>
                <span className="trigger-dot">▸</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Relevant Standards</span>
            <h2>Aligned to software security requirements.</h2>
          </div>
          <div className="standards-grid">
            {['SLSA Build Levels L1-L4', 'NIST SSDF (SP 800-218)', 'EU Cyber Resilience Act', 'EO 14028 (US)', 'OWASP SAMM', 'OWASP Top 10', 'CycloneDX SBOM', 'SPDX', 'Sigstore/Cosign', 'NIST SP 800-53 (SA controls)'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Often engaged together</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/services/penetration-testing">
              <h4>Penetration Testing &amp; Technical Validation</h4>
              <p>Application and API penetration testing alongside secure SDLC implementation.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/ai-security">
              <h4>AI Security, LLM &amp; Agentic AI</h4>
              <p>DevSecOps toolchain extended to cover AI model security in CI/CD pipelines.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/ma/due-diligence">
              <h4>M&amp;A Technical Validation</h4>
              <p>Code and supply-chain security audit in the context of M&amp;A diligence.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <span className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(255,255,255,.5)' }}>Secure software assessment</span>
            <h2>Can you prove your software can be trusted?</h2>
            <p>Speak with a senior Nucleus Systems practitioner about your current SDLC security posture, DevSecOps maturity and where the material gaps are.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/penetration-testing">Explore Technical Assurance</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
