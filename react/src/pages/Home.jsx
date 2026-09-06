import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import Globe from '../components/common/Globe'

export default function Home() {
  useReveal()

  useEffect(() => {
    const el = document.querySelector('.ns-about-left')
    if (el) el.classList.add('in')
  }, [])

  return (
    <div id="view-home">

      {/* ── HERO ── */}
      <section className="ns-hero-main" id="hero">
        <div className="wrap">
          <div className="hero-inner">
            <div className="hero-eyebrow reveal">The Digital Trust Assurance Company</div>
            <h1 className="hero-h1 reveal">Leading Digital Trust<br /><span className="hl">Assurance Globally.</span></h1>
            <p className="hero-lede reveal">
              Cybersecurity, AI Trust and Technology Risk — Assessed, Improved and Independently Validated.
              Supporting enterprises, investors and public institutions across cybersecurity strategy, AI governance and security, M&amp;A risk, secure software, technical assurance and resilient digital infrastructure.
            </p>
            <div className="hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/cybersecurity-advisory">Explore Services <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF BAR ── */}
      <section className="reach-strip">
        <div className="rs-inner">
          <div className="rs-stats">
            <div className="rs-stat reveal">
              <span className="rs-num">13<span className="rs-plus">+</span></span>
              <span className="rs-label">Years operating</span>
            </div>
            <div className="rs-divider" aria-hidden="true"></div>
            <div className="rs-stat reveal">
              <span className="rs-num">600<span className="rs-plus">+</span></span>
              <span className="rs-label">Global engagements</span>
            </div>
            <div className="rs-divider" aria-hidden="true"></div>
            <div className="rs-stat reveal">
              <span className="rs-num">250<span className="rs-plus">+</span></span>
              <span className="rs-label">M&amp;A transactions</span>
            </div>
            <div className="rs-divider" aria-hidden="true"></div>
            <div className="rs-stat reveal">
              <span className="rs-num">40<span className="rs-plus">+</span></span>
              <span className="rs-label">Countries served</span>
            </div>
          </div>
          <p className="rs-tagline reveal">Practitioner-led. Evidence-based. Outcome-focused.</p>
        </div>
      </section>

      {/* ── WHAT CAN WE HELP YOU SOLVE ── */}
      <section className="solve-section section" id="solve">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>What We Solve</span>
            <h2 style={{ color: '#fff' }}>What can we help you solve?</h2>
            <p style={{ color: 'var(--slate)', maxWidth: '520px' }}>
              We help organisations, investors and public institutions identify, reduce and independently validate cybersecurity, AI and technology risk.
            </p>
          </div>
          <div className="solve-grid">

            <Link className="solve-card reveal" to="/services/cybersecurity-advisory">
              <div className="solve-ico">
                <svg viewBox="0 0 24 24"><path d="M12 2 4 6v6c0 5 8 8 8 8s8-3 8-8V6z"/></svg>
              </div>
              <h3 className="solve-title">Strengthen Cybersecurity</h3>
              <p className="solve-desc">Assess maturity, prioritise risk and build a defensible improvement programme aligned to your board and regulator.</p>
              <span className="solve-cta">Cybersecurity Strategy &amp; Leadership <span className="arr">→</span></span>
            </Link>

            <Link className="solve-card reveal" to="/ma">
              <div className="solve-ico">
                <svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </div>
              <h3 className="solve-title">Navigate an M&amp;A Transaction</h3>
              <p className="solve-desc">Identify cyber, AI, privacy, cloud and software risks before they affect deal value — from buy-side through to exit.</p>
              <span className="solve-cta">M&amp;A Cyber &amp; Compliance <span className="arr">→</span></span>
            </Link>

            <Link className="solve-card reveal" to="/services/ai-governance">
              <div className="solve-ico">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
              </div>
              <h3 className="solve-title">Govern &amp; Secure AI</h3>
              <p className="solve-desc">Establish accountable AI governance and protect LLM, RAG, agentic and ML environments from evolving threats.</p>
              <span className="solve-cta">AI Governance &amp; Security <span className="arr">→</span></span>
            </Link>

            <Link className="solve-card reveal" to="/services/secure-software">
              <div className="solve-ico">
                <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <h3 className="solve-title">Secure Software Delivery</h3>
              <p className="solve-desc">Build secure SDLC, DevSecOps and software supply-chain assurance into engineering from code commit to deployment.</p>
              <span className="solve-cta">Secure Software &amp; DevSecOps <span className="arr">→</span></span>
            </Link>

            <Link className="solve-card reveal" to="/services/penetration-testing">
              <div className="solve-ico">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v3m0 0v3m0-3h3m-3 0H8"/></svg>
              </div>
              <h3 className="solve-title">Validate Security Technically</h3>
              <p className="solve-desc">Penetration testing, vulnerability assessment, exposure assessment and independent technical validation.</p>
              <span className="solve-cta">Penetration Testing &amp; Technical Assurance <span className="arr">→</span></span>
            </Link>

            <Link className="solve-card reveal" to="/services/digital-infrastructure">
              <div className="solve-ico">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18"/></svg>
              </div>
              <h3 className="solve-title">Build Resilient Digital Infrastructure</h3>
              <p className="solve-desc">Secure DPI, digital identity, payments and critical digital ecosystems at national scale.</p>
              <span className="solve-cta">Digital Infrastructure &amp; Critical Systems <span className="arr">→</span></span>
            </Link>

          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-track">
          <span className="ticker-item">Financial Services</span>
          <span className="ticker-item">Government &amp; Public Sector</span>
          <span className="ticker-item">Digital Public Infrastructure</span>
          <span className="ticker-item">Private Equity</span>
          <span className="ticker-item">Critical Infrastructure</span>
          <span className="ticker-item">Fintech &amp; Payments</span>
          <span className="ticker-item">AI Product Companies</span>
          <span className="ticker-item">Technology &amp; SaaS</span>
          <span className="ticker-item">Financial Services</span>
          <span className="ticker-item">Government &amp; Public Sector</span>
          <span className="ticker-item">Digital Public Infrastructure</span>
          <span className="ticker-item">Private Equity</span>
          <span className="ticker-item">Critical Infrastructure</span>
          <span className="ticker-item">Fintech &amp; Payments</span>
          <span className="ticker-item">AI Product Companies</span>
          <span className="ticker-item">Technology &amp; SaaS</span>
        </div>
      </div>

      {/* ── M&A FEATURED SECTION ── */}
      <section className="ma-feature-section section" id="ma-home">
        <div className="wrap">
          <div className="ma-feature-inner">
            <div className="ma-feature-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>M&amp;A &amp; Investors</span>
              <h2 className="ma-feature-h2">Cyber risk across the<br />full investment lifecycle.</h2>
              <p className="ma-feature-p">
                From initial buy-side diligence through to sell-side exit preparation, post-deal improvement and ongoing portfolio cybersecurity — Nucleus Systems converts technical risk into investment-grade decisions.
              </p>
              <div className="ma-lifecycle">
                <div className="ma-step"><span className="ma-step-dot"></span><span>Buy-side due diligence</span></div>
                <div className="ma-step"><span className="ma-step-dot"></span><span>Technical validation</span></div>
                <div className="ma-step"><span className="ma-step-dot"></span><span>Sell-side &amp; exit readiness</span></div>
                <div className="ma-step"><span className="ma-step-dot"></span><span>Post-deal improvement</span></div>
                <div className="ma-step"><span className="ma-step-dot"></span><span>Portfolio cybersecurity</span></div>
              </div>
              <div style={{ marginTop: '32px' }}>
                <Link className="btn btn-orange" to="/ma">Explore M&amp;A Cyber &amp; Compliance <span className="arr">→</span></Link>
              </div>
            </div>
            <div className="ma-feature-right reveal">
              <div className="ma-stat-grid">
                <div className="ma-stat-card">
                  <span className="ma-stat-num">250<span>+</span></span>
                  <span className="ma-stat-label">Technology transactions</span>
                </div>
                <div className="ma-stat-card">
                  <span className="ma-stat-num">40<span>+</span></span>
                  <span className="ma-stat-label">Countries delivered</span>
                </div>
                <div className="ma-stat-card">
                  <span className="ma-stat-num">13<span>+</span></span>
                  <span className="ma-stat-label">Years M&amp;A experience</span>
                </div>
                <div className="ma-stat-card">
                  <span className="ma-stat-num">PE</span>
                  <span className="ma-stat-label">Private equity specialists</span>
                </div>
              </div>
              <div className="ma-cap-list">
                <span>Cyber &amp; privacy diligence</span>
                <span>Cloud security assessment</span>
                <span>AI risk evaluation</span>
                <span>Software supply-chain audit</span>
                <span>Post-merger integration</span>
                <span>Exit cyber readiness</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI TRUST & SECURITY ── */}
      <section className="ai-trust-section section" id="ai-home">
        <div className="wrap">
          <div className="ai-trust-head reveal">
            <span className="eyebrow" style={{ color: '#7c9eff' }}>AI Trust &amp; Security</span>
            <h2>Govern AI. Secure AI.<br /><span style={{ fontWeight: 400, color: 'var(--slate)' }}>Operate AI Safely.</span></h2>
            <p style={{ maxWidth: '560px', margin: '0 auto', color: 'var(--slate)' }}>
              From board-level AI governance and regulatory readiness through to LLM, RAG and agentic AI security — our practitioners cover the complete AI trust lifecycle.
            </p>
          </div>
          <div className="ai-trust-grid">
            <div className="ai-card reveal">
              <div className="ai-card-num">01</div>
              <h3 className="ai-card-title">AI Governance &amp; Regulatory Readiness</h3>
              <p className="ai-card-desc">EU AI Act compliance, ISO 42001 management system implementation, NIST AI RMF operationalisation, AI inventory and risk classification, board-level AI accountability evidence.</p>
              <Link className="ai-card-cta" to="/services/ai-governance">Learn more <span className="arr">→</span></Link>
            </div>
            <div className="ai-card reveal">
              <div className="ai-card-num">02</div>
              <h3 className="ai-card-title">AI Security Architecture</h3>
              <p className="ai-card-desc">Structured, evidence-based control methodology covering models, prompts, RAG, agents, tools, supply chains, runtime environments and monitoring — across 12 AI attack surface domains.</p>
              <Link className="ai-card-cta" to="/services/ai-security">Learn more <span className="arr">→</span></Link>
            </div>
            <div className="ai-card reveal">
              <div className="ai-card-num">03</div>
              <h3 className="ai-card-title">LLM, RAG &amp; Agentic AI Security</h3>
              <p className="ai-card-desc">Prompt injection prevention, RAG retrieval authorisation, agentic AI permission scoping, tool call validation, MCP server security, agent memory boundary controls and output filtering.</p>
              <Link className="ai-card-cta" to="/services/ai-security">Learn more <span className="arr">→</span></Link>
            </div>
            <div className="ai-card reveal">
              <div className="ai-card-num">04</div>
              <h3 className="ai-card-title">AI Red Teaming &amp; Assurance</h3>
              <p className="ai-card-desc">Automated adversarial testing, LLM red teaming, MITRE ATLAS TTP coverage, independent validation programmes and continuous assurance cadence to prove operational AI security.</p>
              <Link className="ai-card-cta" to="/services/ai-security">Learn more <span className="arr">→</span></Link>
            </div>
            <div className="ai-card reveal">
              <div className="ai-card-num">05</div>
              <h3 className="ai-card-title">AI Security Operations</h3>
              <p className="ai-card-desc">Continuous AI security operations integrating into your existing DevSecOps toolchain — AI-specific SIEM detections, adversarial validation, SOC AI integration and operational evidence generation.</p>
              <Link className="ai-card-cta" to="/services/ai-security">Learn more <span className="arr">→</span></Link>
            </div>
            <div className="ai-card reveal">
              <div className="ai-card-num">06</div>
              <h3 className="ai-card-title">AI Incident Preparedness</h3>
              <p className="ai-card-desc">Structured AI incident response playbooks covering model compromise, prompt injection, data poisoning, agentic AI misbehaviour and AI supply chain compromise scenarios.</p>
              <Link className="ai-card-cta" to="/services/operational-resilience">Learn more <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL ASSURANCE STRIP ── */}
      <section className="tech-strip-section">
        <div className="wrap">
          <div className="tech-strip-inner reveal">
            <div className="tech-strip-label">Technical Assurance</div>
            <div className="tech-strip-items">
              <span>Penetration Testing</span>
              <span className="ts-dot">·</span>
              <span>Vulnerability Assessment</span>
              <span className="ts-dot">·</span>
              <span>Web &amp; API Testing</span>
              <span className="ts-dot">·</span>
              <span>Code &amp; Supply Chain</span>
              <span className="ts-dot">·</span>
              <span>Business Exposure Assessment</span>
              <span className="ts-dot">·</span>
              <span>Resilience Validation</span>
            </div>
            <Link className="btn btn-ghost" to="/services/penetration-testing">View Technical Services <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="section" id="who-we-serve">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Who We Serve</span>
            <h2>Where trust carries the most weight.</h2>
            <p>We work where a failure of trust is not an inconvenience — it is a systemic event.</p>
          </div>

          <div style={{ marginBottom: '48px' }}>
            <div className="wws-eyebrow reveal">By Buyer</div>
            <div className="wws-buyer-grid">
              {[
                { label: 'Boards & Executives', desc: 'Board-ready trust posture, regulatory accountability and executive risk reporting.' },
                { label: 'CISOs & CTOs', desc: 'Technical depth, practitioner delivery and measurable security improvement programmes.' },
                { label: 'Private Equity & Investors', desc: 'Cyber due diligence, portfolio cybersecurity and exit value protection.' },
                { label: 'Engineering Leaders', desc: 'Secure SDLC, DevSecOps, AppSec and software supply-chain assurance.' },
                { label: 'Risk & Compliance', desc: 'Regulatory readiness, evidence-based assurance and control validation.' },
                { label: 'Government & Development', desc: 'DPI security, digital identity, payment systems and public-sector digital trust.' },
              ].map((b, i) => (
                <div className="wws-buyer-card reveal" key={i}>
                  <h4 className="wws-buyer-title">{b.label}</h4>
                  <p className="wws-buyer-desc">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="ind-grid">
            {[
              { n: '01', title: 'Financial Services', desc: 'Banks, insurers and asset managers where a trust failure triggers systemic regulatory action.', icon: <svg viewBox="0 0 24 24"><rect x="3" y="10" width="18" height="11" rx="1"/><path d="M3 10l9-7 9 7"/><path d="M9 21V13h6v8"/></svg> },
              { n: '02', title: 'Government', desc: 'Public institutions where digital trust is foundational to governance and citizen confidence.', icon: <svg viewBox="0 0 24 24"><path d="M3 21h18M4 18V9.5M20 18V9.5M12 3l9 6.5H3L12 3z"/><rect x="9" y="13" width="6" height="5"/></svg> },
              { n: '03', title: 'Digital Public Infrastructure', desc: 'National identity, payment rails and data exchanges that underpin entire economies.', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18"/></svg> },
              { n: '04', title: 'Private Equity', desc: 'Deal teams and portfolio companies managing cyber risk through M&A and ownership cycles.', icon: <svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> },
              { n: '05', title: 'Technology & SaaS', desc: 'Platforms, SaaS and AI companies proving security posture to enterprise buyers and boards.', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 0 0 4.93 4.93M4.93 19.07A10 10 0 0 0 19.07 19.07M12 2v2M12 20v2M2 12h2M20 12h2"/></svg> },
              { n: '06', title: 'Fintech & Payments', desc: 'Regulated disruptors building trust at speed across payments, lending and digital wealth.', icon: <svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20M6 15h4"/></svg> },
              { n: '07', title: 'AI Product Companies', desc: 'AI product companies needing governance, security architecture and regulatory compliance evidence.', icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
              { n: '08', title: 'Critical Infrastructure', desc: 'Energy, water and transport operators where a breach carries national consequences.', icon: <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
            ].map((ind, i) => (
              <div className="ind reveal" key={i}>
                <div className="ind-top"><span className="n">{ind.n}</span><span className="ind-icon">{ind.icon}</span></div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="hww2 section" id="how-we-work">
        <div className="wrap">
          <div className="hww2-head reveal">
            <div className="hww2-eyebrow">How We Work</div>
            <h2 className="hww2-h2">Assess. Prioritise. Improve.<br /><span style={{ fontWeight: 400, color: 'var(--slate)' }}>Validate. Continuously Assure.</span></h2>
            <p className="hww2-intro">Every Nucleus Systems engagement follows a consistent outcome-delivery model. We assess what exists, identify what matters, implement what is needed, independently validate improvement, and maintain assurance continuously.</p>
          </div>
          <div className="hww2-rows">
            {[
              { num: '01', badge: 'ASSESS', bClass: 'b-blue', title: 'Establish the baseline and identify what matters most.', desc: 'We assess how controls operate in practice, score maturity, validate evidence and identify gaps against your regulatory obligations. Findings are presented in executive and board-ready formats with a prioritised improvement roadmap.', chips: ['Cybersecurity maturity', 'AI governance assessment', 'Penetration testing', 'Technical validation'] },
              { num: '02', badge: 'IMPROVE', bClass: 'b-orange', title: 'Implement, remediate and engineer better controls.', desc: 'Our practitioners work alongside your team to implement the roadmap — building governance programmes, hardening technical controls, integrating DevSecOps toolchains, and closing the gaps that matter most to your board and regulators.', chips: ['Security architecture', 'AI governance build', 'DevSecOps integration', 'Control remediation'] },
              { num: '03', badge: 'VALIDATE', bClass: 'b-green', title: 'Independently verify that controls actually work.', desc: 'Beyond design, we validate that controls operate as intended — through adversarial testing, evidence review, red teaming and independent assurance. Not a certificate of completion. Proof of operation.', chips: ['Red teaming', 'Control validation', 'Evidence review', 'Independent assurance'] },
              { num: '04', badge: 'CONTINUOUSLY ASSURE', bClass: 'b-blue', title: 'Maintain and prove trust over time.', desc: 'Through Fractional CISO leadership, managed detection, quarterly reassessments and continuous advisory, we keep your security posture measurably improving and your board and regulators continuously informed.', chips: ['Fractional CISO', 'Managed detection', 'Continuous advisory', 'Board reporting'] },
            ].map((step, i) => (
              <div className="hww2-row reveal" key={i}>
                <div><div className="hww2-big-num">{step.num}</div></div>
                <div>
                  <span className={`hww2-badge ${step.bClass}`}>{step.badge}</span>
                  <h3 className="hww2-title">{step.title}</h3>
                </div>
                <div>
                  <p className="hww2-desc">{step.desc}</p>
                  <div className="hww2-chips">
                    {step.chips.map(c => <span className="hww2-chip" key={c}>{c}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / GLOBE ── */}
      <section className="section ns-about">
        <div className="wrap ns-about-grid">
          <div className="ns-about-left reveal">
            <div className="ns-about-eyebrow">The Digital Trust Assurance Company</div>
            <h2 className="ns-about-h2">Practitioner-led.<br />Evidence-based.<br />Outcome-focused.</h2>
            <p className="ns-about-lede">Nucleus Systems exists to help organisations build and sustain safer, more resilient, and trustworthy digital and AI ecosystems through measurable cybersecurity, software trust, and AI governance. We convert cybersecurity complexity into measurable, defensible, board-level confidence across 40+ countries.</p>
            <div className="ns-diff-list">
              <div className="ns-diff-item">
                <div className="ns-diff-icon">&#x2731;</div>
                <div className="ns-diff-text">
                  <strong>Founder-led on every major engagement</strong>
                  <span>26+ years of practitioner experience, not delegated to junior teams</span>
                </div>
              </div>
              <div className="ns-diff-item">
                <div className="ns-diff-icon">&#x25A3;</div>
                <div className="ns-diff-text">
                  <strong>Attacker-informed, evidence-based assurance</strong>
                  <span>We validate, test, and produce board-ready defensible findings, not interview checklists</span>
                </div>
              </div>
              <div className="ns-diff-item">
                <div className="ns-diff-icon">&#x25CE;</div>
                <div className="ns-diff-text">
                  <strong>End-to-end, from assessment to continuous assurance</strong>
                  <span>Fractional CISO leadership, DevSecOps integration, managed detection and advisory</span>
                </div>
              </div>
              <div className="ns-diff-item">
                <div className="ns-diff-icon">&#x2B22;</div>
                <div className="ns-diff-text">
                  <strong>Global reach, specialist depth</strong>
                  <span>600+ engagements across financial services, government, DPI, private equity and AI product companies</span>
                </div>
              </div>
            </div>
            <div className="ns-about-cta">
              <Link className="btn btn-primary" to="/contact">Request a briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/about">Our story <span className="arr">→</span></Link>
            </div>
          </div>
          <div className="home-globe-wrap" aria-label="Nucleus Systems global advisory network">
            <Globe canvasId="homeGlobeCanvas" variant="home" />
          </div>
        </div>
      </section>

      {/* ── TRACK RECORD ── */}
      <section className="section" id="track-record">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Our Experience</span>
            <h2>Built on real delivery.</h2>
          </div>
          <div className="tr-grid">
            {[
              { icon: <svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>, title: '250+ Technology Transactions', desc: 'Buy-side diligence, sell-side readiness, technical validation and post-deal cybersecurity across private equity, strategic M&A and growth-stage investment.' },
              { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18"/></svg>, title: 'Digital Public Infrastructure & DPGs', desc: 'Security for national payment rails, digital identity programmes, open-source public goods and government digital infrastructure across Africa, Asia and the Middle East.' },
              { icon: <svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20M6 15h4"/></svg>, title: 'Global Financial Services & Payments', desc: 'Tier-one banks, central banks, fintech platforms, payment operators and insurance groups across regulated markets on six continents.' },
              { icon: <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, title: 'Secure Software & DevSecOps', desc: 'Secure SDLC implementation, DevSecOps programme delivery, software supply-chain assurance, SBOM governance and AppSec at engineering scale.' },
              { icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>, title: 'AI Governance & Emerging Technology Risk', desc: 'AI governance frameworks, EU AI Act readiness, AI security architecture and emerging technology risk programmes for regulated enterprises and AI product companies.' },
            ].map((tr, i) => (
              <div className="tr-card reveal" key={i}>
                <div className="tr-icon">{tr.icon}</div>
                <h3 className="tr-title">{tr.title}</h3>
                <p className="tr-desc">{tr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM TEASER ── */}
      <section className="tt2-section">
        <div className="wrap">
          <div className="tt2-top reveal">
            <div className="tt2-eyebrow">Our People</div>
            <h2 className="tt2-h2">Built by practitioners.<br />Driven by trust.</h2>
            <p className="tt2-intro">Every engagement at Nucleus Systems is led by a specialist who has operated in the sector, not a generalist analyst reading a playbook. We deploy people with decades of hands-on experience in the most demanding regulated environments globally.</p>
          </div>

          <div className="tt2-inner">
            <div className="tt2-lead reveal">
              <div className="tt2-lead-photo">
                <img src="images/team/godfrey.png" alt="Godfrey Kutumela" loading="lazy" onError={e => e.target.style.display = 'none'} />
                <div className="tt2-lead-badge">Founding CEO</div>
              </div>
              <div className="tt2-lead-body">
                <div className="tt2-lead-name">Godfrey Kutumela</div>
                <div className="tt2-lead-role">Project Lead &amp; Senior Cybersecurity Practitioner</div>
                <div className="tt2-lead-certs">
                  <span className="tt2-cert">CISSP</span>
                  <span className="tt2-cert">ISO 27001 LA</span>
                  <span className="tt2-cert">EU CyberNet Expert</span>
                  <span className="tt2-cert">Mojaloop</span>
                  <span className="tt2-cert">MOSIP</span>
                </div>
                <p className="tt2-lead-bio">26+ years across African and Middle Eastern banking, payments and digital public infrastructure. Former Alinma Bank and MTN Fintech. Led 150+ M&amp;A cyber due diligence engagements. Co-creator of OpenSwitchAfrica.</p>
              </div>
            </div>

            <div className="tt2-right reveal">
              <p className="tt2-p">Our practitioners have built cryptographic systems for tier-one banks, led regulatory compliance programmes for central banks, architected cloud security for payment rails and contributed to the open-source platforms that underpin digital public infrastructure across Africa, the Middle East, and Europe.</p>
              <p className="tt2-p">This depth of direct operational experience is what separates us from advisory-only firms. When we assess your security posture, design your AI governance structure, or lead your M&amp;A cyber due diligence, we are drawing on real-world knowledge, not frameworks read from a textbook.</p>
              <div className="tt2-note">
                <div className="tt2-note-label">Team at a glance</div>
                <div className="tt2-stat-row">
                  <div className="tt2-stat-item">
                    <span className="tt2-stat-num">100<span>+</span></span>
                    <span className="tt2-stat-label">Combined years</span>
                  </div>
                  <div className="tt2-stat-item">
                    <span className="tt2-stat-num">150<span>+</span></span>
                    <span className="tt2-stat-label">Engagements led</span>
                  </div>
                  <div className="tt2-stat-item">
                    <span className="tt2-stat-num">16</span>
                    <span className="tt2-stat-label">Markets served</span>
                  </div>
                </div>
              </div>
              <div className="tt2-cta-row">
                <Link className="btn btn-primary" to="/team">Meet the team <span className="arr">→</span></Link>
                <Link className="btn btn-ghost" to="/careers">Join us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSIGHTS TEASER ── */}
      <section className="section" id="insights-home">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Insights</span>
            <h2>Thinking from the field.</h2>
            <p>Articles, research and specialist perspectives on cybersecurity, AI trust, M&amp;A risk and digital infrastructure — organised around buyer issues, not proprietary taxonomy.</p>
          </div>
          <div className="insights-cats reveal">
            {['Cybersecurity Leadership', 'M&A Cyber Risk', 'AI Trust & Security', 'Secure Software', 'Digital Infrastructure', 'Regulation & Resilience'].map(cat => (
              <Link key={cat} className="ins-cat-chip" to="/insights">{cat}</Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link className="btn btn-ghost" to="/insights">Explore all insights <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="section" id="cta" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <span className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(255,255,255,.5)', letterSpacing: '.16em' }}>Start with a trust review</span>
            <h2>What risk are you trying to solve?</h2>
            <p>Speak directly with a senior Nucleus Systems practitioner. We will help you identify what matters most, what evidence you need, and what a practical improvement programme looks like.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a 30-Minute Briefing <span className="arr">→</span></Link>
              <Link className="btn" style={{ background: 'rgba(255,255,255,.1)', color: '#fff', border: '1px solid rgba(255,255,255,.2)' }} to="/about">Learn about Nucleus Systems</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
