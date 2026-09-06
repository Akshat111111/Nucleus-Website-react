import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function SvcAIGovernance() {
  useReveal()
  return (
    <div id="view-svc">

      {/* Hero */}
      <section className="svc-hero svc-hero--ai">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">AI Governance &amp; Regulatory Readiness</div>
            <h1 className="svc-h1 reveal">Prove your AI systems are governed — before your regulator asks.</h1>
            <p className="svc-lede reveal">
              EU AI Act in force. Fines up to €35M or 7% of global turnover. 82% of organisations lack formal AI governance. We help you establish accountable AI governance, satisfy EU AI Act, ISO 42001 and NIST AI RMF obligations simultaneously, and give your board the evidence they need.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/ai-security">See AI Security <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory context */}
      <section className="svc-regs section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow" style={{ color: '#7c9eff' }}>Regulatory Reality</span>
            <h2>Three converging frameworks — one common evidence requirement.</h2>
            <p>EU AI Act, ISO 42001 and NIST AI RMF — simultaneously, not sequentially. Our assessments satisfy all three with one evidence set.</p>
          </div>
          <div className="reg-trio-grid">
            <div className="reg-card reveal">
              <div className="reg-badge in-force">IN FORCE</div>
              <h3>EU AI Act</h3>
              <p className="reg-ref">EU Regulation No: 2024/1689</p>
              <ul className="svc-list">
                <li>Risk classification of AI systems</li>
                <li>Technical documentation (Art. 11)</li>
                <li>Human oversight mechanisms</li>
                <li>Conformity assessment</li>
                <li>Incident reporting obligations</li>
              </ul>
              <div className="reg-enforcement">Enforcement: €35M or 7% global turnover</div>
            </div>
            <div className="reg-card reveal">
              <div className="reg-badge certifiable">CERTIFIABLE</div>
              <h3>ISO/IEC 42001</h3>
              <p className="reg-ref">AI Management System Standard</p>
              <ul className="svc-list">
                <li>AI management system build</li>
                <li>PDCA governance structure</li>
                <li>Evidence management</li>
                <li>Internal audit programme</li>
                <li>Continuous improvement</li>
              </ul>
              <div className="reg-enforcement">Market-driven — increasingly a procurement requirement</div>
            </div>
            <div className="reg-card reveal">
              <div className="reg-badge global">40+ COUNTRIES</div>
              <h3>NIST AI RMF</h3>
              <p className="reg-ref">v1.0 + GenAI Profile</p>
              <ul className="svc-list">
                <li>GOVERN, MAP, MEASURE, MANAGE functions</li>
                <li>AI lifecycle risk management</li>
                <li>GenAI companion profile</li>
                <li>Trustworthy AI characteristics</li>
                <li>Organisational risk tolerance</li>
              </ul>
              <div className="reg-enforcement">US federal standard + 40+ country reference</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">What We Do</span>
            <h2>AI Governance &amp; Regulatory Readiness Services</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'AI Governance Assessment', desc: 'Structured assessment of your AI governance posture against EU AI Act, ISO 42001 and NIST AI RMF obligations. AI inventory, risk classification, gap report and board maturity score.' },
              { num: '02', title: 'EU AI Act Readiness', desc: 'AI system risk classification, technical documentation (Art. 11), human oversight mechanism design, conformity assessment support and incident reporting procedures for high-risk AI.' },
              { num: '03', title: 'ISO 42001 Implementation &amp; Certification', desc: 'AI management system build, PDCA governance structure, evidence management programme, internal audit design and pre-certification audit support — from baseline to certification-ready.' },
              { num: '04', title: 'AI Inventory &amp; Risk Classification', desc: 'Structured AI system inventory, use-case risk classification against EU AI Act risk tiers, technical documentation per system and accountable ownership assignment.' },
              { num: '05', title: 'AI Policy &amp; Governance Framework', desc: 'AI policy suite, risk appetite definition, model approval process, AI procurement governance, third-party AI risk and board AI accountability framework.' },
              { num: '06', title: 'Fractional AI Governance Lead', desc: 'Experienced AI governance leadership on a fractional basis — owning the programme, managing regulatory engagement, reporting to the board and integrating governance into engineering and product teams.' },
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

      {/* Scope & Deliverables */}
      <section className="svc-scope section">
        <div className="wrap svc-scope-grid">
          <div className="svc-scope-col reveal">
            <h3>Scope</h3>
            <ul className="svc-list">
              <li>AI system inventory and use-case risk classification</li>
              <li>EU AI Act Article 11 technical documentation</li>
              <li>ISO 42001 management system build</li>
              <li>NIST AI RMF programme operationalisation</li>
              <li>Human oversight mechanism design</li>
              <li>AI policy and governance framework development</li>
              <li>Board and GRC accountability structure</li>
              <li>Quarterly reassessment and maturity tracking</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>What You Receive</h3>
            <ul className="svc-list">
              <li>AI governance baseline assessment and maturity score</li>
              <li>Regulatory gap report (EU AI Act / ISO 42001 / NIST)</li>
              <li>AI system risk classification register</li>
              <li>Board AI governance summary report</li>
              <li>12-month improvement roadmap</li>
              <li>ISO 42001 management system documentation</li>
              <li>Pre-certification audit support and evidence package</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>Board can answer: which AI systems are high-risk and what controls govern them?</li>
              <li>EU AI Act fines risk materially reduced</li>
              <li>ISO 42001 certification achieved (Professional/Enterprise tiers)</li>
              <li>Single evidence set satisfying EU AI Act, ISO 42001 and NIST AI RMF</li>
              <li>AI governance as a competitive differentiator in regulated procurement</li>
              <li>Regulator-ready AI governance programme with continuous evidence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Buying Triggers */}
      <section className="svc-triggers section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">When You Need This</span>
            <h2>Buying triggers</h2>
          </div>
          <div className="triggers-grid">
            {[
              'AI systems deployed in production without formal governance or risk classification',
              'EU AI Act high-risk AI provisions applying from August 2025',
              'Board or regulator has asked: can you prove your AI systems are governed?',
              'ISO 42001 certification required for enterprise procurement or investor due diligence',
              'No AI inventory — unable to identify which systems are in scope for regulation',
              'Separate EU AI Act, ISO 42001 and NIST programmes duplicating evidence and cost',
              'AI product company needing governance evidence for regulated sector customers',
              'Fractional AI Governance Lead needed without full-time hire',
            ].map((t, i) => (
              <div className="trigger-item reveal" key={i}>
                <span className="trigger-dot">▸</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Relevant Standards</span>
            <h2>Aligned to global AI regulation.</h2>
          </div>
          <div className="standards-grid">
            {['EU AI Act (2024/1689)', 'ISO/IEC 42001:2023', 'NIST AI RMF v1.0', 'NIST AI RMF GenAI Profile', 'ISO/IEC 23894', 'GDPR (AI data processing)', 'DORA (AI in financial services)', 'UK AI White Paper', 'Singapore IMDA AI Governance', 'OECD AI Principles'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Often engaged together</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/services/ai-security">
              <h4>AI Security, LLM, RAG &amp; Agentic AI</h4>
              <p>Technical security architecture for AI systems — from models to runtime.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/cybersecurity-advisory">
              <h4>Cybersecurity Strategy &amp; Leadership</h4>
              <p>Broader cybersecurity maturity programme incorporating AI governance.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/ma/due-diligence">
              <h4>M&amp;A Cyber Due Diligence</h4>
              <p>AI governance risk evaluated in the context of investment decisions.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <span className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(255,255,255,.5)' }}>AI governance assessment</span>
            <h2>Can you prove your AI systems are governed?</h2>
            <p>Speak with a senior Nucleus Systems practitioner about your AI governance posture, regulatory obligations and where to start.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/services/ai-security">Explore AI Security</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
