import { useState } from 'react'
import Globe from '../components/common/Globe'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    inquiry: '',
    message: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 800)
  }

  return (
    <div id="view-contact">
      {/* Hero */}
      <section className="ctc-hero">
        <div className="ctc-hero-left">
          <div className="ctc-eyebrow">Connect with us</div>
          <h1 className="ctc-h1">Secure your <em>infrastructure.</em></h1>
          <p className="ctc-sub">Whether you require an urgent maturity assessment, AI governance planning, or ongoing MDR support, our practitioners are ready to engage.</p>
          <div className="ctc-presence">
            <div className="ctc-pres-item">
              <span className="ctc-pres-val">40+</span>
              <span className="ctc-pres-lbl">Countries Active</span>
            </div>
            <div className="ctc-pres-item">
              <span className="ctc-pres-val">600+</span>
              <span className="ctc-pres-lbl">Deployments</span>
            </div>
          </div>
        </div>
        <div className="ctc-globe-wrap">
          <Globe canvasId="contactGlobeCanvas" variant="contact" maxWidth="520px" display="block" borderRadius="12px" />
          <div className="ctc-globe-caption">Global threat intelligence and operational presence connecting key financial hubs and emerging markets</div>
        </div>
      </section>

      {/* Main content */}
      <section className="ctc-main grey">
        <div className="wrap ctc-grid">
          {/* Info panel */}
          <div>
            <div className="ctc-info">
              <div className="ctc-info-block">
                <div className="ctc-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="ctc-info-label">General Enquiries</div>
                  <a href="mailto:info@nucleussystems.com" className="ctc-info-value">info@nucleussystems.com</a>
                </div>
              </div>

              <div className="ctc-info-block" style={{ borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
                <div className="ctc-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <div className="ctc-info-label">Security Incidents</div>
                  <a href="mailto:soc@nucleussystems.com" className="ctc-info-value">soc@nucleussystems.com</a>
                </div>
              </div>

              <div className="ctc-steps-head">What happens next?</div>
              <ul className="ctc-steps">
                <li>
                  <div className="ctc-step-num">1</div>
                  <div><strong>Initial Scoping</strong><span>We aim to respond within 4 hours to arrange an initial technical scoping call.</span></div>
                </li>
                <li>
                  <div className="ctc-step-num">2</div>
                  <div><strong>Proposal &amp; SOW</strong><span>You'll receive a detailed technical proposal and Statement of Work within 48 hours.</span></div>
                </li>
                <li>
                  <div className="ctc-step-num">3</div>
                  <div><strong>Project Kickoff</strong><span>Once approved, we rapidly mobilise our engineering and advisory teams.</span></div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="ctc-form-wrap">
            <div className="ctc-form-card" id="contactFormCard">
              <div className="ctc-form-header">
                <div className="ctc-form-tag">Project Inquiry</div>
                <h2 className="ctc-form-tagline">Tell us about your requirements. All submissions are treated with strict confidentiality.</h2>
              </div>
              
              {!isSuccess ? (
                <form className="ctc-form" onSubmit={handleSubmit}>
                  <div className="ctc-frow">
                    <div className="field">
                      <label htmlFor="name">Full Name <span className="req">*</span></label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Work Email <span className="req">*</span></label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                    </div>
                  </div>
                  
                  <div className="field">
                    <label htmlFor="org">Organisation</label>
                    <input type="text" id="org" name="org" value={formData.org} onChange={handleChange} />
                  </div>
                  
                  <div className="field">
                    <label>Nature of Inquiry <span className="req">*</span></label>
                    <div className="ctc-radio-group">
                      <label className="ctc-radio">
                        <input type="radio" name="inquiry" value="security-assessment" required checked={formData.inquiry === 'security-assessment'} onChange={handleChange} />
                        Cybersecurity Maturity Assessment (NS-CMMF)
                      </label>
                      <label className="ctc-radio">
                        <input type="radio" name="inquiry" value="ai-governance" checked={formData.inquiry === 'ai-governance'} onChange={handleChange} />
                        AI Governance &amp; Security Assessment
                      </label>
                      <label className="ctc-radio">
                        <input type="radio" name="inquiry" value="mdr" checked={formData.inquiry === 'mdr'} onChange={handleChange} />
                        Managed Detection &amp; Response (CyberOne)
                      </label>
                      <label className="ctc-radio">
                        <input type="radio" name="inquiry" value="fractional-ciso" checked={formData.inquiry === 'fractional-ciso'} onChange={handleChange} />
                        Fractional CISO &amp; Advisory Services
                      </label>
                      <label className="ctc-radio">
                        <input type="radio" name="inquiry" value="other" checked={formData.inquiry === 'other'} onChange={handleChange} />
                        Other / General Inquiry
                      </label>
                    </div>
                  </div>
                  
                  <div className="field">
                    <label htmlFor="message">Message / Requirements</label>
                    <textarea id="message" name="message" placeholder="Briefly describe your environment or the challenge you're looking to solve..." value={formData.message} onChange={handleChange}></textarea>
                  </div>
                  
                  <label className="ctc-consent">
                    <input type="checkbox" name="consent" required checked={formData.consent} onChange={handleChange} />
                    I consent to Nucleus Systems storing my submitted information to respond to this inquiry in accordance with privacy regulations.
                  </label>
                  
                  <button type="submit" className="btn btn-primary ctc-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
                  </button>
                </form>
              ) : (
                <div className="ctc-success-inner">
                  <div className="ctc-success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3>Inquiry Received</h3>
                  <p>Thank you for reaching out to Nucleus Systems. One of our senior practitioners will review your requirements and respond shortly.</p>
                  <button className="btn btn-ghost" onClick={() => { setIsSuccess(false); setFormData({ name: '', email: '', org: '', inquiry: '', message: '', consent: false }) }}>
                    Submit another inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="ctc-trust-band">
        <div className="wrap">
          <div className="ctc-trust-row">
            <div className="ctc-trust-item">
              <div className="ctc-trust-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <div className="ctc-trust-item-title">Strict Confidentiality</div>
              <div className="ctc-trust-item-sub">All inquiries are NDA-protected</div>
            </div>
            <div className="ctc-trust-item">
              <div className="ctc-trust-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="ctc-trust-item-title">Rapid Response</div>
              <div className="ctc-trust-item-sub">SLA-backed scoping calls</div>
            </div>
            <div className="ctc-trust-item">
              <div className="ctc-trust-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
              </div>
              <div className="ctc-trust-item-title">Direct to Experts</div>
              <div className="ctc-trust-item-sub">Speak with practitioners, not sales</div>
            </div>
            <div className="ctc-trust-item">
              <div className="ctc-trust-item-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <div className="ctc-trust-item-title">Global Execution</div>
              <div className="ctc-trust-item-sub">Offices &amp; partners worldwide</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
