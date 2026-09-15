import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'

export default function ExpEngagements() {
  useReveal()

  const engagements = [
    {
      sector: 'Financial Services', region: 'Europe', type: 'Cybersecurity Maturity Programme',
      challenge: 'A tier-one bank required a full cybersecurity maturity assessment across 8 domains, board-level reporting, and a 3-year improvement roadmap aligned to DORA operational resilience obligations.',
      work: 'Delivered structured maturity assessment across governance, threat intelligence, access management, application security, resilience and monitoring. Produced investment-grade board report with control-level gap analysis and prioritised remediation roadmap.',
      outcome: 'Board adopted 3-year security improvement programme. Regulatory engagement with NCA commenced with demonstrable maturity baseline. DORA readiness programme initiated against assessment findings.',
    },
    {
      sector: 'Private Equity', region: 'United Kingdom', type: 'M&A Cyber Due Diligence',
      challenge: 'PE house required cyber due diligence on a £400M SaaS acquisition with significant data processing and cloud infrastructure. Deal timeline: 3 weeks to IC.',
      work: 'Conducted cyber, privacy, cloud and software risk assessment — penetration testing, data flow mapping, regulatory gap analysis (UK GDPR, ISO 27001), and technical architecture review. Produced investment-grade findings report with W&I and price recommendations.',
      outcome: 'Material findings translated into £2.1M price reduction, specific W&I exclusions and structured post-close obligations with 90-day remediation milestones. Deal closed with cyber risk appropriately allocated.',
    },
    {
      sector: 'Government', region: 'East Africa', type: 'National Digital Identity Security',
      challenge: 'A national government deploying MOSIP at population scale (12M+ citizens) required security assurance across the full identity stack — biometric systems, authentication services, registration infrastructure and citizen-facing portal.',
      work: 'Purpose-built MOSIP security assessment covering registration client, kernel services, ID repository, authentication server and partner management. Threat modelling for the specific deployment context, including insider risk and biometric data protection.',
      outcome: 'Security architecture recommendations implemented prior to production go-live. Critical biometric data protection gaps remediated. Programme delivered on schedule with security assurance documented for government and development partner governance.',
    },
    {
      sector: 'Fintech', region: 'West Africa', type: 'Payment Security & Regulatory Readiness',
      challenge: 'A mobile money operator with 2M+ active users required GSMA Mobile Money Security assessment across all 10 security domains and preparation for central bank regulatory examination.',
      work: 'Full GSMA MMS assessment — agent network security, KYC controls, mobile channel security, fraud monitoring, incident response and data governance. Regulatory evidence pack and remediation roadmap for central bank submission.',
      outcome: 'Passed central bank security examination. Agent network fraud controls redesigned. KYC onboarding process security hardened. Operator received regulatory approval for expanded product licence.',
    },
    {
      sector: 'Technology & SaaS', region: 'United States / Europe', type: 'M&A Sell-Side Preparation',
      challenge: 'A UK SaaS company preparing for strategic sale to a US acquirer needed to remediate material cyber findings before the buyer diligence process — with 6 months before expected process launch.',
      work: 'Sell-side cyber readiness assessment, penetration testing, ISO 27001 gap assessment and remediation programme, data room cyber section preparation, and CISO coaching for diligence interview preparation.',
      outcome: 'All material findings remediated before process launch. ISO 27001 certification achieved. Buyer diligence process passed without cyber findings affecting deal terms. Transaction completed at expected valuation.',
    },
    {
      sector: 'Critical Infrastructure', region: 'Middle East', type: 'ICS/SCADA Security Assessment',
      challenge: 'A national energy operator required security assessment of OT/IT converged infrastructure across 3 operational sites — ICS/SCADA systems, historian, DCS and enterprise IT integration — aligned to IEC 62443.',
      work: 'Passive network monitoring and architecture review across OT zones, IEC 62443 zone and conduit assessment, remote access security review, patch management programme assessment and incident response capability review for OT environments.',
      outcome: 'Critical zone segmentation gaps remediated. Remote access architecture redesigned. OT-specific incident response playbooks developed. Operator passed NIS2 national competent authority examination.',
    },
    {
      sector: 'AI Product Company', region: 'Europe', type: 'EU AI Act Readiness',
      challenge: 'An AI startup deploying LLM-based credit decisioning tools was classified as high-risk under the EU AI Act. The company needed conformity assessment preparation and enterprise customer security evidence before Series B.',
      work: 'EU AI Act risk classification assessment, risk management system implementation, data governance framework design, technical documentation for high-risk AI system, and enterprise customer security questionnaire response pack.',
      outcome: 'EU AI Act conformity assessment preparation completed. Enterprise sales security evidence pack produced. Series B investor diligence passed without AI governance findings. Enterprise contract pipeline unlocked.',
    },
    {
      sector: 'Private Equity Portfolio', region: 'Multi-Jurisdiction', type: 'Portfolio Cybersecurity Programme',
      challenge: 'A mid-market PE house with 18 portfolio companies required a consistent, comparable cybersecurity baseline across the portfolio — with PE board reporting and systematic improvement governance.',
      work: 'Consistent maturity baseline deployed across all 18 portfolio companies using standardised assessment methodology. Comparative scoring at portfolio level, company-level improvement roadmaps, quarterly progress reporting to PE operating board.',
      outcome: 'Complete portfolio visibility for the first time. Top 5 highest-risk companies prioritised for immediate improvement investment. Portfolio-level cyber risk position reportable to LPs. Exit preparation programme initiated for 3 companies with active sale processes.',
    },
  ]

  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Experience · Selected Engagements</div>
            <h1 className="svc-h1 reveal">600+ engagements. Eight illustrative examples.</h1>
            <p className="svc-lede reveal">
              The following engagement summaries are anonymised to protect client confidentiality. They represent the type of work we deliver — the sectors, challenges, what we actually did, and the outcomes that resulted. Sector, region and engagement type are accurate.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/experience">Experience Overview <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-what section">
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'left', maxWidth: '640px' }}>
            <span className="eyebrow">Engagements by Sector</span>
            <h2>The work we do — and the outcomes that result.</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {engagements.map((e, i) => (
              <div className="reveal" key={i} style={{
                background: 'var(--grey)', borderRadius: '16px', padding: '32px',
                display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '8px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>{e.sector}</div>
                  <div style={{ fontSize: '11.5px', color: 'var(--slate)', marginBottom: '4px' }}>{e.region}</div>
                  <div style={{ fontSize: '11px', background: 'var(--navy)', color: '#fff', borderRadius: '6px', padding: '3px 8px', display: 'inline-block', marginTop: '6px', fontWeight: 600 }}>{e.type}</div>
                </div>
                <div>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '6px' }}>Challenge</div>
                    <p style={{ fontSize: '13.5px', color: 'var(--slate)', lineHeight: 1.75, margin: 0 }}>{e.challenge}</p>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '6px' }}>What We Did</div>
                    <p style={{ fontSize: '13.5px', color: 'var(--slate)', lineHeight: 1.75, margin: 0 }}>{e.work}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#2e7d32', marginBottom: '6px' }}>Outcome</div>
                    <p style={{ fontSize: '13.5px', color: 'var(--slate)', lineHeight: 1.75, margin: 0 }}>{e.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Your engagement starts with a practitioner who has done this before.</h2>
            <p>Book a briefing to discuss your specific challenge with a specialist who has delivered in your sector.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/experience">Experience Overview</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
