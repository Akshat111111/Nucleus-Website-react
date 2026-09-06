import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function MaSellSide() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero svc-hero--ma">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Sell-Side &amp; Exit Readiness</div>
            <h1 className="svc-h1 reveal">Find and fix cyber debt before buyers do.</h1>
            <p className="svc-lede reveal">Sophisticated buyers conduct cyber diligence. Material findings affect deal price, warranties, indemnities and deal certainty. We help vendors identify and remediate material cyber risk before the sale process begins — so cybersecurity is a value-creation story, not a negotiating liability.</p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/ma">M&amp;A Overview <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">What We Do</span>
            <h2>Sell-Side &amp; Exit Readiness Services</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Pre-Sale Cyber Assessment', desc: 'Independent assessment of your cybersecurity posture from the buyer\'s perspective — identifying what sophisticated buyers will find, what will be flagged as material risk and what will affect pricing or deal structure.' },
              { num: '02', title: 'Cyber Debt Remediation', desc: 'Structured remediation programme addressing material findings before the sale process — prioritised by buyer impact, not internal priority. Closing gaps that would otherwise affect deal certainty or valuation.' },
              { num: '03', title: 'Compliance Evidence Pack', desc: 'Preparation of the regulatory compliance documentation, evidence of security controls, penetration test reports and certification status that sophisticated buyers will request during vendor due diligence.' },
              { num: '04', title: 'Data Room Preparation', desc: 'Cybersecurity section of the virtual data room — structured, accurate and presenting the security position in a way that supports deal value rather than raising diligence questions.' },
              { num: '05', title: 'Vendor Due Diligence (VDD)', desc: 'Formal Vendor Due Diligence report commissioned by the seller — providing buyers with independent assurance of the security position and reducing the need for extensive buyer-side technical diligence.' },
              { num: '06', title: 'Exit Readiness for PE Portfolio', desc: 'Systematic exit preparation programme for PE portfolio companies — baselining security posture, remediating material gaps and building the evidence base that exits at premium valuation require.' },
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
            <h3>What You Receive</h3>
            <ul className="svc-list">
              <li>Pre-sale cyber assessment from buyer perspective</li>
              <li>Material finding list with remediation priority and cost</li>
              <li>Compliance evidence pack for data room</li>
              <li>Vendor Due Diligence report (where commissioned)</li>
              <li>Management Q&amp;A preparation on cybersecurity topics</li>
              <li>Post-remediation re-assessment and clean report</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>Business Outcomes</h3>
            <ul className="svc-list">
              <li>Material findings identified and remediated before buyer diligence</li>
              <li>Deal price and structure not adversely affected by cyber findings</li>
              <li>Cybersecurity presented as a value-creation story, not a liability</li>
              <li>VDD report reduces buyer diligence scope and timeline</li>
              <li>W&amp;I exposure reduced through pre-sale remediation</li>
              <li>Deal certainty improved through documented compliance evidence</li>
            </ul>
          </div>
          <div className="svc-scope-col reveal">
            <h3>When You Need This</h3>
            <ul className="svc-list">
              <li>6-12 months before a planned sale or investment process</li>
              <li>PE portfolio company preparing for exit</li>
              <li>Growth-stage company preparing for Series C or strategic sale</li>
              <li>Corporate carve-out or subsidiary sale requiring security evidence</li>
              <li>IPO preparation — cyber posture disclosure and evidence</li>
              <li>Regulated sector sale where compliance evidence is essential</li>
            </ul>
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
            <Link className="related-card reveal" to="/ma/due-diligence">
              <h4>M&amp;A Cyber Due Diligence</h4>
              <p>Buy-side perspective — understanding what buyers look for during diligence.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/ma/portfolio">
              <h4>Portfolio Cybersecurity</h4>
              <p>Portfolio-wide baseline and improvement programme ahead of exit processes.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
            <Link className="related-card reveal" to="/services/penetration-testing">
              <h4>Penetration Testing</h4>
              <p>Current-year pen test report as essential evidence in the data room.</p>
              <span className="arr-link">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Planning a sale or exit? Start the conversation now.</h2>
            <p>The earlier you engage, the more time you have to remediate material findings — and the stronger the cybersecurity story you can tell buyers.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/ma">M&amp;A Overview</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
