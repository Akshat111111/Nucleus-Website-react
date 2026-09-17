import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function AIPhysical() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">AI Governance &amp; Security · 07</div>
            <h1 className="svc-h1 reveal">Physical AI &amp; Safety Assurance</h1>
            <p className="svc-lede reveal">
              When AI systems control physical environments — robotics, autonomous vehicles, manufacturing OT, and safety-critical infrastructure — the consequence of compromise shifts from data loss to physical harm. We deliver security and safety assurance for cyber-physical AI systems using our N3 PAISAF framework, ensuring resilience against both adversarial attack and systemic failure.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/ai-governance-security">All AI Services <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Cyber-Physical Gap</span>
              <h2>When AI software meets physical reality, security becomes safety.</h2>
              <p>Traditional IT security focuses on confidentiality and integrity. Physical AI security must prioritise availability, safety, and deterministic behaviour. An adversarial attack on a generative text model produces bad outputs; an attack on a robotic control system causes physical damage. Assurance requires bridging the gap between machine learning security and functional safety engineering.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Sensor spoofing and adversarial inputs', desc: 'Physical AI relies on sensor data (cameras, LiDAR, IoT). Attackers can manipulate the physical environment or spoof sensor inputs to cause the AI to make dangerous decisions (e.g., misclassifying a stop sign).' },
                { title: 'Non-deterministic failure modes', desc: 'Machine learning models are probabilistic. In safety-critical systems, unpredictable behaviour is unacceptable. Designing failsafes and fallback mechanisms for non-deterministic systems is a complex engineering challenge.' },
                { title: 'IT/OT convergence vulnerabilities', desc: 'Deploying AI into Operational Technology (OT) environments bridges IT networks and industrial control systems, exposing previously isolated critical infrastructure to novel attack vectors.' },
                { title: 'Regulatory safety requirements', desc: 'The EU AI Act categorises AI components of safety-regulated products (e.g., machinery, medical devices, vehicles) as high-risk by default, triggering stringent conformity and safety certification requirements.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}><h4>{p.title}</h4><p>{p.desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">What We Deliver</span>
            <h2>Physical AI Safety Assurance — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Cyber-Physical Threat Modelling', desc: 'Integrated threat and hazard modelling for AI-driven physical systems, combining security threat analysis with functional safety hazard analysis (e.g., STPA-Sec, FMEA).' },
              { num: '02', title: 'Sensor & Input Integrity Assessment', desc: 'Evaluating the resilience of AI perception systems against adversarial physical attacks, sensor spoofing, and environmental noise to ensure robust decision-making.' },
              { num: '03', title: 'Failsafe & Fallback Architecture', desc: 'Designing secure architectures for physical AI that incorporate deterministic safety boundaries, graceful degradation, and human-in-the-loop override mechanisms.' },
              { num: '04', title: 'TEVV (Test, Evaluation, Verification, Validation)', desc: 'Developing rigorous TEVV frameworks for physical AI systems, including simulation-based adversarial testing and hardware-in-the-loop security validation.' },
              { num: '05', title: 'OT/ICS AI Integration Security', desc: 'Securing the deployment of AI into industrial control systems and manufacturing environments, ensuring network segmentation and process safety are maintained.' },
              { num: '06', title: 'Safety-Critical Regulatory Compliance', desc: 'Navigating the intersection of AI regulation (e.g., EU AI Act) and sector-specific safety regulations (e.g., Machinery Regulation, automotive standards) for integrated compliance.' },
            ].map((s, i) => (
              <div className="svc-what-card reveal" key={i}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title">{s.title}</h3>
                <p className="svc-what-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Framework: N3 PAISAF v1.0</span>
            <h2>The Nucleus Physical AI &amp; Safety Assurance Framework.</h2>
            <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.75 }}>Physical safety · TrustOps · Sensor Integrity · Failsafe Architecture</p>
          </div>
          <div className="standards-grid">
            {['IEC 61508 (Functional Safety)', 'ISO/SAE 21434 (Automotive Security)', 'IEC 62443 (ICS Security)', 'EU Machinery Regulation', 'EU AI Act (Annex II)', 'N3 PAISAF'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Connected AI &amp; Cyber services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/ai/security-architecture"><h4>AI Security Architecture</h4><p>Core security architecture principles applied to physical AI deployments.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/resilience"><h4>Operational Resilience</h4><p>Ensuring business continuity and disaster recovery for cyber-physical systems.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/sectors/critical-infrastructure"><h4>Critical Infrastructure</h4><p>Securing physical AI within national critical infrastructure environments.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>When AI moves the physical world, security is a safety requirement.</h2>
            <p>Speak with specialists who bridge the gap between machine learning security and functional safety engineering.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">N3 PAISAF Framework</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
