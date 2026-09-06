import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

export default function Team() {
  useReveal()

  return (
    <div id="view-team">
      {/* Hero */}
      <section className="team-hero">
        <div className="wrap team-hero-inner">
          <div className="th-eyebrow eyebrow">Our People</div>
          <h1>Practitioner-led.<br />Evidence-driven.</h1>
          <p>
            The Nucleus Systems team comprises seasoned technical architects, attackers, and defenders who have designed and secured some of the world's most critical financial and enterprise ecosystems. We don't just audit—we engineer trust.
          </p>
          <div className="team-stats-row">
            <div className="th-stat"><b>600<span>+</span></b><small>Engagements Delivered</small></div>
            <div className="th-stat"><b>13<span>+</span></b><small>Years in Operation</small></div>
            <div className="th-stat"><b>100<span>%</span></b><small>Practitioner Led</small></div>
          </div>
        </div>
      </section>

      <section className="pg-section" style={{ background: '#f8fafc' }}>
        <div className="wrap">
          {/* Leadership Intro */}
          <div className="team-intro">
            <div>
              <div className="ti-eyebrow">Leadership</div>
              <h2 className="ti-h2">Decades of operational experience at the intersection of security and engineering.</h2>
            </div>
            <div>
              <p className="ti-p">
                Our leadership team has built core payment switches, defended national telecom infrastructure, and guided M&A cybersecurity diligence for global private equity firms.
              </p>
              <p className="ti-p">
                By maintaining active engineering and research practices, we ensure our advisory services are rooted in ground-truth technical realities rather than abstract theory.
              </p>
            </div>
          </div>

          {/* Lead Card */}
          <div className="team-lead-card reveal">
            <div className="tlc-photo">
              <img src="/images/team/godfrey.png" alt="Godfrey Kutumela" style={{ objectPosition: 'top' }} />
              <div className="tlc-photo-overlay" />
              <div className="tlc-badge">Founder &amp; CEO</div>
            </div>
            <div className="tlc-body">
              <h3 className="tlc-name">Godfrey Kutumela</h3>
              <div className="tlc-role">CEO &amp; Lead Cybersecurity Practitioner</div>
              <div className="tlc-certs" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                <span className="tlc-cert">CISSP</span>
                <span className="tlc-cert">CSSP</span>
                <span className="tlc-cert">CSSLP</span>
                <span className="tlc-cert">CompTIA Pentest+</span>
              </div>
              <p className="tlc-bio">
                Founder and CEO of Nucleus Systems. 20+ years of hands-on experience designing, attacking, and securing mission-critical financial infrastructure, national telecom systems, and enterprise ecosystems across Africa, Europe, and North America. Author of Nucleus Systems' proprietary frameworks — NS-CMMF, NS-AIGF, NS-AISCA, and NS-CTAF — and lead practitioner across cybersecurity, AI governance, and post-quantum cryptography advisory engagements.
              </p>
              <div className="tlc-focus">
                <div className="tlc-focus-item">
                  <strong>Focus:</strong> Cybersecurity Maturity, AI Governance, Post-Quantum Cryptography, Critical Infrastructure, Penetration Testing, Board-Level Risk Advisory
                </div>
              </div>
            </div>
          </div>

          {/* Practitioners Grid */}
          <div className="team-grid">
            <div className="tm-card reveal">
              <div className="tm-photo">
                <img src="/images/team/aime-sq.jpg" alt="Aime" />
                <div className="tm-photo-overlay" />
              </div>
              <div className="tm-body">
                <h4 className="tm-name">Aime</h4>
                <div className="tm-role">Principal Practitioner</div>
                <p className="tm-bio">
                  15+ years expertise in Digital Infrastructure, Mobile Connectivity, and Advanced Threat Research across enterprise and telecom environments. Specialises in deep technical diligence and operational resilience.
                </p>
                <div className="tm-certs" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span className="tm-cert">Telecom Sec</span>
                  <span className="tm-cert">Threat Intel</span>
                  <span className="tm-cert">IoT Security</span>
                </div>
              </div>
            </div>

            <div className="tm-card reveal">
              <div className="tm-photo">
                <img src="/images/team/kerlyn-sq.jpg" alt="Kerlyn Manyi" />
                <div className="tm-photo-overlay" />
              </div>
              <div className="tm-body">
                <h4 className="tm-name">Kerlyn Manyi</h4>
                <div className="tm-role">Senior Practitioner</div>
                <p className="tm-bio">
                  10+ years securing financial platforms and interoperable systems. Leads vulnerability assessments and secure SDLC initiatives. Contributor to Crosslake Technologies and Mifos via Google Summer of Code.
                </p>
                <div className="tm-certs" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span className="tm-cert">ISC2</span>
                  <span className="tm-cert">Fortinet NSE 1-3</span>
                  <span className="tm-cert">DevSecOps</span>
                </div>
              </div>
            </div>

            <div className="tm-card reveal">
              <div className="tm-photo">
                <img src="/images/team/yash-sq.jpg" alt="Yash Sancheti" />
                <div className="tm-photo-overlay" />
              </div>
              <div className="tm-body">
                <h4 className="tm-name">Yash Sancheti</h4>
                <div className="tm-role">Practitioner</div>
                <p className="tm-bio">
                  Cybersecurity researcher and solution architect focused on DevSecOps and penetration testing. 50+ verified vulnerabilities reported on HackerOne. Active in securing Apache Fineract and Rocket.Chat.
                </p>
                <div className="tm-certs" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span className="tm-cert">HackerOne</span>
                  <span className="tm-cert">GSoC Mentor</span>
                  <span className="tm-cert">Cloud Sec</span>
                </div>
              </div>
            </div>

            <div className="tm-card reveal">
              <div className="tm-photo">
                <img src="/images/team/akshat-sq.jpg" alt="Akshat Sharma" />
                <div className="tm-photo-overlay" />
              </div>
              <div className="tm-body">
                <h4 className="tm-name">Akshat Sharma</h4>
                <div className="tm-role">Practitioner</div>
                <p className="tm-bio">
                  AI and cybersecurity specialist. GSoC 2025 Mentor at Mifos Initiative, guiding NLP modules for financial analysis. Published researcher in stock prediction, breach analysis, and deep learning.
                </p>
                <div className="tm-certs" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span className="tm-cert">AI / ML</span>
                  <span className="tm-cert">NLP</span>
                  <span className="tm-cert">GSoC 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="team-cta-band">
        <div className="team-cta-band-inner">
          <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '20px' }}>
            <span style={{ width: '24px', height: '2px', background: 'var(--orange)', display: 'block' }} />
            Work with us
          </div>
          <h2>Ready to put this expertise to work for your organisation?</h2>
          <p>Whether you need a Fractional CISO, a cybersecurity maturity assessment, AI governance design, or M&amp;A technology due diligence, our team is ready to engage.</p>
          <div className="team-cta-row">
            <Link className="btn btn-orange" to="/contact">Request a briefing <span className="arr">→</span></Link>
            <Link className="btn btn-ghost" to="/insights" style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff', background: 'transparent' }}>Read our research <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
