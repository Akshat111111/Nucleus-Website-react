import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function Experience() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Experience</div>
            <h1 className="svc-h1 reveal">600+ engagements. 40+ countries. Built on practitioner delivery — not advisory distance.</h1>
            <p className="svc-lede reveal">
              Nucleus Systems is a practitioner-led firm. Every engagement is led by a specialist who has operated in the sector, on the platform, and in the regulatory environment — not a generalist analyst working from a playbook. This section details the depth of experience behind every engagement we take on.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/about">About Nucleus Systems <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="reach-strip">
        <div className="rs-inner">
          <div className="rs-stats">
            <div className="rs-stat reveal"><span className="rs-num">600<span className="rs-plus">+</span></span><span className="rs-label">Engagements</span></div>
            <div className="rs-divider" aria-hidden="true"></div>
            <div className="rs-stat reveal"><span className="rs-num">250<span className="rs-plus">+</span></span><span className="rs-label">M&amp;A transactions</span></div>
            <div className="rs-divider" aria-hidden="true"></div>
            <div className="rs-stat reveal"><span className="rs-num">40<span className="rs-plus">+</span></span><span className="rs-label">Countries</span></div>
            <div className="rs-divider" aria-hidden="true"></div>
            <div className="rs-stat reveal"><span className="rs-num">13<span className="rs-plus">+</span></span><span className="rs-label">Years M&amp;A experience</span></div>
          </div>
          <p className="rs-tagline reveal">Practitioner-led. Evidence-based. Outcome-focused.</p>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">Experience by Category</span>
            <h2>Four dimensions of practitioner depth.</h2>
            <p>Our track record spans engagement types, sectors, platforms and geographies. Each section below details one dimension of that depth.</p>
          </div>
          <div className="svc-what-grid">
            {[
              {
                num: '01', title: 'Selected Engagements',
                desc: 'Anonymised engagement summaries from across 600+ client relationships — structured by sector, challenge and outcome. The evidence behind the positioning.',
                link: '/experience/engagements',
              },
              {
                num: '02', title: 'M&A Experience',
                desc: '250+ transactions across private equity, strategic M&A and growth-stage investment. Buy-side, sell-side, post-deal and portfolio — in 13+ years of specialist M&A cyber advisory.',
                link: '/experience/ma',
              },
              {
                num: '03', title: 'DPI &amp; Digital Public Goods Experience',
                desc: 'Practitioner contributions to Mojaloop, MOSIP, OpenG2P, Tazama, COMESA and GovStack deployments across Africa, Asia and the Middle East. Inside knowledge — not outside assessment.',
                link: '/experience/dpi-dpg',
              },
              {
                num: '04', title: 'Global Delivery',
                desc: '40+ countries across six continents. The regional expertise, regulatory knowledge and on-the-ground network that enables delivery in markets where most advisors have no footprint.',
                link: '/experience/global-delivery',
              },
            ].map((s, i) => (
              <Link className="svc-what-card reveal" to={s.link} key={i} style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div className="svc-what-num">{s.num}</div>
                <h3 className="svc-what-title" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="svc-what-desc">{s.desc}</p>
                <span className="arr-link" style={{ marginTop: '12px', display: 'block' }}>Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Why Experience Matters</span>
              <h2>The difference between advising and having done it.</h2>
              <p>Security advisory firms come in two kinds: those that assess from the outside, and those that have operated on the inside. Our practitioners have led security programmes at tier-one banks, contributed to open-source DPI deployments, run M&A cyber diligence on 250+ transactions, and delivered in 40+ countries. That is not a claim about capability — it is a record of delivery.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Sector depth — not cross-sector breadth', desc: 'Financial services, DPI, government, private equity, AI and critical infrastructure are fundamentally different threat environments. Our practitioners have operated inside them — not assessed them generically.' },
                { title: 'Platform specificity — not tooling familiarity', desc: 'Mojaloop, MOSIP, OpenG2P, Tazama — we contributed to these platforms. Our assessment methodology reflects how they actually work, not how the documentation describes them.' },
                { title: 'Deal experience — not academic M&A methodology', desc: '250+ transactions mean we know what material findings look like, how they affect deal price and structure, and how to write findings that work for investment committees — not just technical teams.' },
                { title: 'Global delivery — not headquarters consulting', desc: 'Sub-Saharan Africa, the Gulf, South Asia, the Pacific. Our practitioners operate in these markets because that is where the work is — not because they travel there occasionally.' },
              ].map((p, i) => (
                <div className="svc-prob-item reveal" key={i}><h4>{p.title}</h4><p>{p.desc}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Ask us about our experience in your sector.</h2>
            <p>Every briefing starts with a practitioner who has done the work you are asking about. Not a sales team who will find someone after the call.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/about">About Nucleus Systems</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
