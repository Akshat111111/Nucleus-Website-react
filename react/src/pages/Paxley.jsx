import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useSEO } from '../hooks/useSEO'

export default function Paxley() {
  useReveal()
  useSEO({
    title: 'Paxley | Continuous Software Supply Chain Trust — Nucleus Systems',
    description: 'Paxley by Nucleus Systems: continuous code-security monitoring and software supply chain assurance platform. Automates SBOM ingestion, VEX processing and vulnerability intelligence for real-time trust scoring.',
    canonical: 'https://www.nucleussystems.com/paxley',
  })

  return (
    <div id="view-paxley">
      {/* Hero */}
      <section className="pax-hero">
        <div className="wrap px-top">
          <div className="px-left">
            <div className="px-eyebrow">A Related Venture</div>
            <div className="px-brandrow">
              <div className="px-logo-img"></div>
              <div className="px-name">Paxley Code Security Platform</div>
            </div>
            <h1 className="px-h2">Continuous, unified code <span className="hl">trust assurance.</span></h1>
            <p className="px-lede">
              Paxley Code Security Platform is an engineering-first DevSecOps platform that unifies SAST, SCA, container scanning, and IaC security into a single pipeline. Built to support our own secure software delivery practice, Paxley Code Security Platform is now an independent software product available at paxleysoftware.com.
            </p>
            <div className="px-cta">
              <a href="https://paxleysoftware.com/" target="_blank" rel="noopener noreferrer" className="btn px-btn-primary">
                Visit Paxley Software <span>→</span>
              </a>
              <a href="#pax-compare" onClick={(e) => { e.preventDefault(); document.getElementById('pax-compare')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn px-btn-ghost">View differentiators</a>
            </div>
            <div className="px-strip">
              <div className="pxs"><b>8</b><span>Scanning Engines</span></div>
              <div className="pxs"><b>&lt;3min</b><span>Avg. Scan Time</span></div>
              <div className="pxs"><b>0</b><span>Per-seat Licenses</span></div>
            </div>
          </div>
          <div className="px-visual">
            <div className="px-bigmark spin-ambient"></div>
          </div>
        </div>
      </section>

      {/* The Problem / Solution */}
      <section className="pg-section grey">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }}>
            <div className="reveal">
              <h2 className="pg-sh">We got tired of managing twelve different security tools.</h2>
              <p className="pg-sub">
                During our technical due diligence engagements, we consistently found engineering teams struggling with security tool sprawl. SAST from one vendor, SCA from another, secrets scanning via open source, and IaC checks bolted on as an afterthought.
              </p>
              <p className="pg-sub" style={{ marginTop: '16px' }}>
                Paxley Code Security Platform consolidates eight critical security capabilities into a single lightweight runner that executes directly in your CI/CD pipeline, reporting unified results straight to the developer.
              </p>
            </div>
            <div className="reveal">
              <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--navy)', marginBottom: '20px' }}>Unified Capabilities</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--slate)' }}>
                    <span style={{ color: 'var(--pax-green)' }}>✓</span> Static Analysis (SAST)
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--slate)' }}>
                    <span style={{ color: 'var(--pax-green)' }}>✓</span> Software Composition (SCA)
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--slate)' }}>
                    <span style={{ color: 'var(--pax-green)' }}>✓</span> Secrets Detection
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--slate)' }}>
                    <span style={{ color: 'var(--pax-green)' }}>✓</span> Container Security
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--slate)' }}>
                    <span style={{ color: 'var(--pax-green)' }}>✓</span> Infrastructure as Code
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--slate)' }}>
                    <span style={{ color: 'var(--pax-green)' }}>✓</span> Open Source License Risks
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--slate)' }}>
                    <span style={{ color: 'var(--pax-green)' }}>✓</span> Supply Chain (SBOM)
                  </li>
                  <li style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--slate)' }}>
                    <span style={{ color: 'var(--pax-green)' }}>✓</span> API Security Posture
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Strategic Differentiators */}
      <div className="pg-section" id="pax-compare">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '760px', textAlign: 'left' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--pax-green)', marginBottom: '12px' }}>Why Paxley Code Security Platform</div>
            <h2 style={{ color: '#fff', marginBottom: '12px' }}>Six strategic differentiators.</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: 1.7 }}>Designed with the benefit of hindsight — meeting the demands of continuous security, software supply chain risk and demonstrable assurance.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px', marginTop: '48px' }}>
            {[
              {
                num: '01',
                title: 'Built at the right time',
                body: 'Paxley Code Security Platform was designed with the benefit of lessons learned from traditional AppSec tools and today\'s clearer regulatory, security and software-supply-chain requirements, including the EU Cyber Resilience Act (CRA). Its architecture meets the need for continuous security, traceability, and demonstrable software assurance — rather than isolated vulnerability scanning.',
              },
              {
                num: '02',
                title: 'Software supply chain at the centre',
                body: 'Paxley Code Security Platform treats the software supply chain as a fundamental security priority, not an optional add-on. It connects code, open-source dependencies, credentials, infrastructure, containers, software components and SBOM evidence to expose risks across the entire software delivery chain.',
              },
              {
                num: '03',
                title: 'A cryptographic trust-evidence vision',
                body: 'Paxley Code Security Platform is designed as the technology and evidence layer supporting Nucleus Systems\' Code Trust Assurance Framework (NS-CTAF). The objective is to move beyond scanner findings towards verifiable evidence of software integrity, provenance, control effectiveness and trusted delivery.',
              },
              {
                num: '04',
                title: 'Zero Trust and source-code protection by design',
                body: 'Paxley Code Security Platform is architected around Zero Trust principles, minimising unnecessary exposure of customer source code. Customer-controlled scanning and self-hosted deployment options support stronger control over sensitive intellectual property and reduce reliance on transferring code into third-party environments.',
              },
              {
                num: '05',
                title: 'Broad coverage without tool sprawl',
                body: 'Paxley Code Security Platform consolidates SAST, SCA, secrets detection, IaC security, container security, licence analysis, SBOM and code quality into a single platform. This reduces overlapping tools, procurement complexity, integration effort, and adoption friction across engineering teams.',
              },
              {
                num: '06',
                title: 'Better outcomes — not another scanning engine',
                body: 'Paxley Code Security Platform leverages established open-source security engines rather than rebuilding existing capabilities. Its differentiation lies in unifying results, improving developer experience, using AI to support remediation, simplifying risk prioritisation and presenting findings in intuitive reports — including code, software-IP and M&A technology-risk assessments.',
              },
            ].map((d, i) => (
              <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(86,240,160,0.15)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '14px', transition: 'border-color 0.2s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(86,240,160,0.45)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(86,240,160,0.15)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '.1em', color: 'var(--pax-green)', background: 'rgba(86,240,160,0.1)', border: '1px solid rgba(86,240,160,0.3)', borderRadius: '6px', padding: '4px 10px', flexShrink: 0 }}>{d.num}</div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.3 }}>{d.title}</h3>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="pg-section grey">
        <div className="wrap">
          <div className="reveal">
            <h2 className="pg-sh" style={{ textAlign: 'center', marginBottom: '8px' }}>Pricing &amp; plans</h2>
            <p className="pg-sub" style={{ textAlign: 'center' }}>Per product or repository — not per developer. Security costs scale with your codebase.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '20px', marginTop: '48px', alignItems: 'start' }} className="reveal">

            {/* Community */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--slate)', marginBottom: '12px' }}>Community</div>
              <div style={{ fontSize: '40px', fontWeight: '800', color: 'var(--navy)', lineHeight: 1 }}>Free</div>
              <div style={{ fontSize: '13px', color: 'var(--slate)', marginTop: '10px', marginBottom: '20px', lineHeight: 1.6 }}>Open source, solo developers, and initial evaluation</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {['3 repositories', '5 scans per month', 'SAST, SCA and secrets', 'PR guard with inline comments', 'Community support'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '13.5px', color: 'var(--slate)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--pax-green)', fontWeight: 700, flexShrink: 0 }}>&#10003;</span>{f}
                  </li>
                ))}
              </ul>
              <a href="https://paxleysoftware.com/pricing" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>Get started</a>
            </div>

            {/* Starter */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--slate)', marginBottom: '12px' }}>Starter</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', lineHeight: 1 }}>
                <span style={{ fontSize: '40px', fontWeight: '800', color: 'var(--navy)' }}>$199</span>
                <span style={{ fontSize: '14px', color: 'var(--slate)', fontWeight: '500', paddingBottom: '5px' }}>/month</span>
              </div>
              <div style={{ marginTop: '10px', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#3a7d44', background: '#e8f5e9', borderRadius: '20px', padding: '3px 12px' }}>3, 6 or 12-month terms</span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--slate)', marginBottom: '20px', lineHeight: 1.6 }}>Small teams with fewer than 5 products or main repositories</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {['Up to 5 products or main repos', '150 MB source processing per repo', 'Full scanning stack: SAST, SCA, secrets, IaC, containers', 'SBOM and license governance', 'Self-hosted: code stays with you'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '13.5px', color: 'var(--slate)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--pax-green)', fontWeight: 700, flexShrink: 0 }}>&#10003;</span>{f}
                  </li>
                ))}
              </ul>
              <a href="https://paxleysoftware.com/pricing" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>Start trial</a>
            </div>

            {/* Growth — Most Popular */}
            <div style={{ background: '#fff', border: '2px solid var(--pax-green)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#1a3d2b', color: '#fff', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap' }}>Most Popular</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--slate)', marginBottom: '12px' }}>Growth</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', lineHeight: 1 }}>
                <span style={{ fontSize: '40px', fontWeight: '800', color: 'var(--navy)' }}>$499</span>
                <span style={{ fontSize: '14px', color: 'var(--slate)', fontWeight: '500', paddingBottom: '5px' }}>/month</span>
              </div>
              <div style={{ marginTop: '10px', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#3a7d44', background: '#e8f5e9', borderRadius: '20px', padding: '3px 12px' }}>6-month minimum</span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--slate)', marginBottom: '20px', lineHeight: 1.6 }}>Medium teams with 5 to under 10 products or repositories</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {['5 to 10 products or main repos', '500 MB source processing per repo', 'Everything in Starter', 'Governance and assurance reporting', 'Priority support'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '13.5px', color: 'var(--slate)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--pax-green)', fontWeight: 700, flexShrink: 0 }}>&#10003;</span>{f}
                  </li>
                ))}
              </ul>
              <a href="https://paxleysoftware.com/pricing" target="_blank" rel="noopener noreferrer" className="btn px-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Start trial</a>
            </div>

            {/* Large Enterprise */}
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--slate)', marginBottom: '12px' }}>Large Enterprise</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', lineHeight: 1 }}>
                <span style={{ fontSize: '40px', fontWeight: '800', color: 'var(--navy)' }}>$999</span>
                <span style={{ fontSize: '14px', color: 'var(--slate)', fontWeight: '500', paddingBottom: '5px' }}>/month</span>
              </div>
              <div style={{ marginTop: '10px', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#3a7d44', background: '#e8f5e9', borderRadius: '20px', padding: '3px 12px' }}>12-month minimum</span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--slate)', marginBottom: '20px', lineHeight: 1.6 }}>Unlimited usage across large teams and broader estates</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {['Unlimited products and repositories', 'Unlimited source processing', 'Everything in Growth', 'M&A and diligence evidence outputs', 'Dedicated support'].map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '13.5px', color: 'var(--slate)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--pax-green)', fontWeight: 700, flexShrink: 0 }}>&#10003;</span>{f}
                  </li>
                ))}
              </ul>
              <a href="https://paxleysoftware.com/pricing" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>Get in touch</a>
            </div>

          </div>
        </div>
      </div>

      {/* Related */}
      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Connected Platform Services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/platform/code-trust"><h4>Code Trust &amp; Supply Chain</h4><p>The strategic framework (NS-CTAF) that Paxley Code Security Platform operationalises in software.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/paxley"><h4>Paxley Advisory</h4><p>Advisory services surrounding the Paxley Code Security Platform and continuous trust scoring.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/devsecops"><h4>DevSecOps Transformation</h4><p>Integrating Paxley Code Security Platform scanning directly into developer workflows and CI/CD pipelines.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="page-cta-band">
        <div className="wrap pcb-inner">
          <h2>Ready to see Paxley Code Security Platform in action?</h2>
          <p>Book a 30-minute demo with a Nucleus Systems practitioner — or go straight to Paxley Code Security Platform and start a free trial today.</p>
          <div className="pcb-row">
            <a href="https://paxleysoftware.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: 'var(--pax-green)', color: '#04231a', fontWeight: '700', fontSize: '15px', borderRadius: '8px', textDecoration: 'none' }}>Visit Paxley Code Security Platform <span>→</span></a>
            <Link className="btn btn-primary" to="/contact">Book a demo <span className="arr">→</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
