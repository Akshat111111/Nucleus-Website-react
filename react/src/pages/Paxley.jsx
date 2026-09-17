import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

export default function Paxley() {
  useReveal()

  return (
    <div id="view-paxley">
      {/* Hero */}
      <section className="pax-hero">
        <div className="wrap px-top">
          <div className="px-left">
            <div className="px-eyebrow">A Related Venture</div>
            <div className="px-brandrow">
              <div className="px-logo-img"></div>
              <div className="px-name">Paxley</div>
            </div>
            <h1 className="px-h2">Continuous, unified code <span className="hl">trust assurance.</span></h1>
            <p className="px-lede">
              Paxley is an engineering-first DevSecOps platform that unifies SAST, SCA, container scanning, and IaC security into a single pipeline. Built to support our own secure software delivery practice, Paxley is now an independent software product available at paxleysoftware.com.
            </p>
            <div className="px-cta">
              <a href="https://paxleysoftware.com/" target="_blank" rel="noopener noreferrer" className="btn px-btn-primary">
                Visit Paxley Software <span>→</span>
              </a>
              <a href="#pax-compare" className="btn px-btn-ghost">Compare alternatives</a>
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
                Paxley consolidates eight critical security capabilities into a single lightweight runner that executes directly in your CI/CD pipeline, reporting unified results straight to the developer.
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

      {/* Comparison */}
      <div className="pg-section" id="pax-compare">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '800px', textAlign: 'left' }}>
            <h2 style={{ color: '#fff' }}>Compare Paxley</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>How we stack up against traditional application security testing tools.</p>
          </div>
          <div className="reveal" style={{ overflowX: 'auto', marginTop: '32px' }}>
            <table style={{ width: '100%', minWidth: '700px', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(86,240,160,0.3)' }}>
                  <th style={{ width: '30%', color: '#fff', padding: '0 16px 16px 0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.05em', textAlign: 'left' }}>Tool Category</th>
                  <th style={{ width: '70%', color: 'var(--pax-lime)', padding: '0 16px 16px 0', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.05em', textAlign: 'left' }}>The Paxley Difference</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: 'Native SCM security', diff: 'Competes on price; shares some engine overlap — Paxley adds significantly more scanning engines.' },
                  { cat: 'SAST-focused tools', diff: 'Broader scope; overlaps on static analysis — Paxley unifies across all 8 capability areas.' },
                  { cat: 'Enterprise SAST platforms', diff: 'Below their enterprise tier — Paxley is the mid-market alternative.' },
                  { cat: 'Legacy SAST vendors', diff: 'Complementary — Paxley is faster to deploy and more cost-efficient for modern teams.' },
                  { cat: 'Code health tools', diff: 'Differentiated focus — Paxley adds supply chain, secrets, IaC, and container coverage.' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td style={{ padding: '20px 16px 20px 0', color: '#fff', fontWeight: 600, fontSize: '15px', verticalAlign: 'top' }}>{row.cat}</td>
                    <td style={{ padding: '20px 16px 20px 0', color: 'rgba(255,255,255,0.7)', fontSize: '15px', verticalAlign: 'top', lineHeight: '1.6' }}>{row.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '32px', padding: '24px 0', borderTop: '1px solid rgba(86,240,160,0.2)' }} className="reveal">
            <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--pax-green)', marginBottom: '8px' }}>Example savings</div>
            <div style={{ fontSize: '16px', color: '#fff', fontWeight: '400' }}>
              50 devs / 10 repos = <span style={{ color: 'var(--pax-green)', fontWeight: '700' }}>$990/mo</span> vs <span style={{ color: '#ff6b6b', textDecoration: 'line-through', fontWeight: '700' }}>$4,750/mo</span> on per-seat tools — <span style={{ color: '#fff', fontWeight: '700' }}>79% saving.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="pg-section grey">
        <div className="wrap">
          <div className="reveal">
            <h2 className="pg-sh" style={{ textAlign: 'center', marginBottom: '8px' }}>Pricing &amp; plans</h2>
            <p className="pg-sub" style={{ textAlign: 'center' }}>Per repository, not per developer. Security costs scale with your codebase.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '48px' }} className="reveal">
            
            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--navy)' }}>Community</div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--navy)', margin: '12px 0' }}>Free <span style={{ fontSize: '14px', color: 'var(--slate)', fontWeight: '500' }}>/ always</span></div>
              <div style={{ fontSize: '14px', color: 'var(--slate)', marginBottom: '24px', flex: 1 }}>Open-source projects and solo developers</div>
              <a href="https://paxleysoftware.com/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>Get started</a>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--navy)' }}>Starter</div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--navy)', margin: '12px 0' }}>$99 <span style={{ fontSize: '14px', color: 'var(--slate)', fontWeight: '500' }}>/ repo / mo</span></div>
              <div style={{ fontSize: '14px', color: 'var(--slate)', marginBottom: '24px', flex: 1 }}>Funded startups and small engineering teams</div>
              <a href="https://paxleysoftware.com/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>Start trial</a>
            </div>

            <div style={{ background: '#fff', border: '2px solid var(--pax-green)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--pax-green)', color: '#fff', fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '12px' }}>Most Popular</div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--navy)' }}>Growth</div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--navy)', margin: '12px 0' }}>$149 <span style={{ fontSize: '14px', color: 'var(--slate)', fontWeight: '500' }}>/ repo / mo</span></div>
              <div style={{ fontSize: '14px', color: 'var(--slate)', marginBottom: '24px', flex: 1 }}>Scaling teams with multiple repositories</div>
              <a href="https://paxleysoftware.com/" target="_blank" rel="noopener noreferrer" className="btn px-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Start trial</a>
            </div>

            <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--navy)' }}>Enterprise</div>
              <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--navy)', margin: '12px 0' }}>Custom</div>
              <div style={{ fontSize: '14px', color: 'var(--slate)', marginBottom: '24px', flex: 1 }}>Self-hosted needs, custom runners, advanced compliance</div>
              <Link to="/contact" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>Talk to us</Link>
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
            <Link className="related-card reveal" to="/what-we-do/platform/code-trust"><h4>Code Trust &amp; Supply Chain</h4><p>The strategic framework (N3-CTAF) that Paxley operationalises in software.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/paxley"><h4>Paxley Advisory</h4><p>Advisory services surrounding the Paxley product and continuous trust scoring.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/devsecops"><h4>DevSecOps Transformation</h4><p>Integrating Paxley scanning directly into developer workflows and CI/CD pipelines.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="page-cta-band">
        <div className="wrap pcb-inner">
          <h2>Ready to see Paxley in action?</h2>
          <p>Book a 30-minute demo with a Nucleus Systems practitioner — or go straight to Paxley and start a free trial today.</p>
          <div className="pcb-row">
            <a href="https://paxleysoftware.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: 'var(--pax-green)', color: '#04231a', fontWeight: '700', fontSize: '15px', borderRadius: '8px', textDecoration: 'none' }}>Visit Paxley <span>→</span></a>
            <Link className="btn btn-primary" to="/contact">Book a demo <span className="arr">→</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
