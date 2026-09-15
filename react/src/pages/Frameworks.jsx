import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const FRAMEWORKS = [
  {
    pillar: 'AI Governance and Security Services',
    pillarAccent: '#22c55e',
    items: [
      {
        name: 'AI Governance Framework',
        tagline: 'Accountable AI governance that satisfies EU AI Act, ISO 42001 and NIST AI RMF simultaneously — one assessment, one evidence set.',
        stats: '60 controls · 7 domains · L1→L5 maturity',
        standards: ['EU AI Act', 'ISO 42001', 'NIST AI RMF'],
        learnMore: '/services/ai-governance',
      },
      {
        name: 'AI Security Controls Architecture',
        tagline: 'Purpose-built AI security architecture covering every attack surface — model, prompt, RAG, agent, supply chain and runtime.',
        stats: '108 controls · 12 domains · 5-grade evidence',
        standards: ['EU AI Act', 'NIST', 'OWASP LLM Top 10', 'MITRE ATLAS'],
        learnMore: '/services/ai-security',
      },
      {
        name: 'AI² Security Operations Framework',
        tagline: 'Continuous AI security operations — secure AI systems first, then safely use trusted AI for cyber defence. The only bidirectional AI SecOps framework.',
        stats: '88 controls · 8 domains · ASOps-1→4 certification',
        standards: ['EU AI Act', 'NIST AI RMF', 'DORA', 'NIS2'],
        learnMore: '/services/ai-security',
      },
    ],
  },
  {
    pillar: 'Digital Platform Trust and Security Assurance',
    pillarAccent: '#4f8ef7',
    items: [
      {
        name: 'Code Trust Assurance Framework',
        tagline: 'Cryptographically verifiable software supply-chain trust — spanning identity, build integrity, secure development, dependencies and runtime assurance.',
        stats: '86 controls · 6 domains · CTA-1→4 certification',
        standards: ['EU CRA', 'EO 14028', 'SLSA', 'NIST SSDF', 'OWASP SAMM'],
        learnMore: '/services/secure-software',
      },
    ],
  },
  {
    pillar: 'Cybersecurity and Compliance Maturity Management',
    pillarAccent: '#f97316',
    items: [
      {
        name: 'Cybersecurity Maturity Management Framework',
        tagline: 'Unified cybersecurity maturity measurement — evidence-based scoring across 32 standards, financial gap quantification and board-ready reporting.',
        stats: '188 controls · 6 domains · 32 frameworks mapped',
        standards: ['NIST CSF 2.0', 'ISO 27001', 'DORA', 'NIS2', 'GDPR'],
        learnMore: '/services/cybersecurity-advisory',
      },
      {
        name: 'Post-Quantum Cryptography Framework',
        tagline: 'Structured readiness for the post-quantum era — cryptographic inventory, algorithm migration, crypto-agility and supplier readiness assessment.',
        stats: 'Crypto discovery · CBOM · Migration roadmap',
        standards: ['NIST PQC', 'IETF', 'ETSI', 'ENISA', 'CNSA 2.0'],
        learnMore: '/services/post-quantum',
      },
    ],
  },
]

export default function Frameworks() {
  useReveal()

  return (
    <div id="view-frameworks">

      {/* ── Hero ── */}
      <section className="fw-hero">
        <div className="wrap fw-hero-inner">
          <div className="fw-hero-eyebrow reveal">Delivery Methodology</div>
          <h1 className="fw-hero-h1 reveal">Six Proprietary Frameworks</h1>
          <p className="fw-hero-lede reveal">
            Our frameworks are the evidence-based delivery engine behind every Nucleus Systems
            engagement. Structured, independently assessable, and built to produce board-ready
            evidence — not documentation theatre.
          </p>
          <div className="fw-hero-meta reveal">
            <span>6 proprietary frameworks</span>
            <span>530+ total controls</span>
            <span>L1→L5 maturity scoring across all frameworks</span>
            <span>Board-ready evidence built in</span>
          </div>
        </div>
      </section>

      {/* ── Framework Pillars ── */}
      {FRAMEWORKS.map((group, gi) => (
        <section className="fw-group section" key={gi}>
          <div className="wrap">
            <div
              className="fw-group-header reveal"
              style={{ borderLeftColor: group.pillarAccent }}
            >
              <span className="fw-group-label" style={{ color: group.pillarAccent }}>
                Service Pillar
              </span>
              <h2 className="fw-group-title">{group.pillar}</h2>
            </div>

            <div className="fw-cards">
              {group.items.map((fw, fi) => (
                <div className="fw-card reveal" key={fi}>
                  <div
                    className="fw-card-accent"
                    style={{ background: group.pillarAccent }}
                  />
                  <div className="fw-card-body">
                    <h3 className="fw-card-name">{fw.name}</h3>
                    <p className="fw-card-tagline">{fw.tagline}</p>
                    <div className="fw-card-stats">{fw.stats}</div>
                    <div className="fw-card-standards">
                      {fw.standards.map((s, si) => (
                        <span className="fw-std-tag" key={si}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="fw-card-foot">
                    <Link
                      className="fw-card-link"
                      to={fw.learnMore}
                      style={{ color: group.pillarAccent }}
                    >
                      See related service →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="fw-cta-band section">
        <div className="wrap fw-cta-inner reveal">
          <h2 className="fw-cta-h2">Want to understand how our frameworks apply to your situation?</h2>
          <p className="fw-cta-sub">
            Every engagement begins with a scoping conversation. Our frameworks are applied
            proportionately — from a focused assessment to a continuous assurance programme.
          </p>
          <Link className="btn btn-orange" to="/contact">
            Book a Briefing <span className="arr">→</span>
          </Link>
        </div>
      </section>

    </div>
  )
}
