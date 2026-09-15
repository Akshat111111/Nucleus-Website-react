import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function IndCritical() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Industries · Critical Infrastructure</div>
            <h1 className="svc-h1 reveal">Where a breach carries national consequences — not just operational ones.</h1>
            <p className="svc-lede reveal">
              Energy, water, transport and telecommunications operators are now primary targets for nation-state adversaries seeking to cause maximum societal disruption. The convergence of OT and IT networks, the legacy of control systems designed without security in mind, and the NIS2 and DORA obligations now applying to critical infrastructure operators create a risk environment that generic cybersecurity advisory cannot adequately address.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/industries">All Industries <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why This Sector Is Different</span>
              <h2>OT systems, nation-state adversaries and the consequence of physical disruption.</h2>
              <p>Critical infrastructure cyber risk is categorically different from enterprise cyber risk. The attack surface includes industrial control systems designed before the internet, OT/IT convergence that creates novel attack paths, and adversaries whose objective is physical disruption rather than data theft. A successful attack on electricity, water or transport infrastructure is a national emergency.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'OT/IT convergence — novel attack paths', desc: 'The integration of operational technology with enterprise IT networks creates attack paths from corporate email compromise to ICS/SCADA systems that can cause physical damage. Most IT security teams have no OT security experience.' },
                { title: 'NIS2 — critical infrastructure obligations', desc: 'NIS2 extends mandatory cybersecurity obligations to a significantly expanded list of critical infrastructure sectors — energy, water, transport, digital infrastructure, health and space. Incident reporting (24h/72h) and supply chain risk management are mandatory.' },
                { title: 'Nation-state threat actors with OT capability', desc: 'Nation-state adversaries — including groups with demonstrated OT attack capability like Sandworm, Volt Typhoon and Fancy Bear — actively target critical infrastructure operators. The threat is specific, persistent and technically sophisticated.' },
                { title: 'Legacy control systems at operational risk', desc: 'ICS/SCADA systems with 15-20 year operational lifespans were designed without network security in mind. Patching is constrained by operational continuity. Incident response in OT environments cannot follow IT playbooks.' },
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
            <span className="eyebrow">Services Most Relevant to This Sector</span>
            <h2>What we bring to critical infrastructure operators.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'ICS/SCADA Security Assessment', desc: 'Security assessment of industrial control systems and SCADA environments against IEC 62443, NIST SP 800-82 and sector-specific requirements. Covers network architecture, remote access, HMI security, historian and control system patch management.', link: '/services/cybersecurity-advisory' },
              { num: '02', title: 'OT/IT Convergence Security', desc: 'Security architecture review of OT/IT network convergence — zone and conduit design, IEC 62443 compliance, firewall and DMZ architecture, remote access controls, and the specific attack paths created by IT/OT integration.', link: '/services/digital-infrastructure' },
              { num: '03', title: 'NIS2 Compliance Programme', desc: 'NIS2 gap assessment for critical infrastructure operators — incident reporting capability (24h/72h), supply chain risk management, cybersecurity risk management measures and national NCA registration requirements across EU member states.', link: '/services/operational-resilience' },
              { num: '04', title: 'Operational Resilience & Incident Response', desc: 'Critical infrastructure incident response planning — OT-specific playbooks, operational continuity during cyber incident, crisis communication protocols and coordination with national CERT and sector regulators.', link: '/services/operational-resilience' },
              { num: '05', title: 'Penetration Testing', desc: 'Passive and active security testing of critical infrastructure environments — adapted for OT operational constraints. Network architecture review, passive vulnerability identification and controlled active testing where operationally safe.', link: '/services/penetration-testing' },
              { num: '06', title: 'Post-Quantum Readiness', desc: 'Cryptographic inventory and PQC migration roadmap for critical infrastructure — long-lifecycle OT systems and industrial control infrastructure that must remain secure beyond the quantum threat timeline.', link: '/services/post-quantum' },
            ].map((s, i) => (
              <Link className="svc-what-card reveal" to={s.link} key={i} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title">{s.title}</h3>
                <p className="svc-what-desc">{s.desc}</p>
                <span className="arr-link" style={{ marginTop: '12px', display: 'block' }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-standards section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Relevant Frameworks</span>
            <h2>Critical infrastructure standards we work to.</h2>
          </div>
          <div className="standards-grid">
            {['IEC 62443 (ICS/OT)', 'NIST SP 800-82 (OT Security)', 'NIS2 Directive', 'NERC CIP (Energy)', 'ISO/IEC 27001:2022', 'DORA (Digital Infrastructure)', 'IEC 61511 (Safety)', 'NIST CSF 2.0', 'EU CER Directive', 'Sector-Specific CERT Frameworks'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Critical infrastructure security requires a different approach — not a scaled-up enterprise programme.</h2>
            <p>Speak with a practitioner who understands OT security constraints, NIS2 obligations and the specific threat model of your sector.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/industries">All Industries</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
