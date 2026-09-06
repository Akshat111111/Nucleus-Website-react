import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

// Radar graphic — orbiting labels around a Nucleus shield logo
function RadarGraphic() {
  const labels = [
    { label: 'CYBER',    angle: -70,  r: 46 },
    { label: 'AI GOV',   angle: 10,   r: 50 },
    { label: 'PAYMENTS', angle: 70,   r: 48 },
    { label: 'IDENTITY', angle: 130,  r: 46 },
    { label: 'CODE',     angle: 195,  r: 44 },
    { label: 'PQC',      angle: 255,  r: 46 },
  ]

  const toXY = (angle, r, cx = 50, cy = 50) => {
    const rad = (angle * Math.PI) / 180
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
  }

  return (
    <div style={{ position: 'relative', width: '340px', height: '340px', flexShrink: 0 }}>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
        {/* Outer rings */}
        <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(11,80,200,0.08)" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(11,80,200,0.07)" strokeWidth="0.4" />
        <circle cx="50" cy="50" r="24" fill="none" stroke="rgba(11,80,200,0.06)" strokeWidth="0.4" />
        {/* Center shield bg */}
        <circle cx="50" cy="50" r="13" fill="white" style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.08))' }} />

        {/* Dots on ring */}
        {labels.map((l, i) => {
          const pos = toXY(l.angle, l.r - 4)
          const isOrange = i === 4
          return (
            <circle
              key={l.label}
              cx={pos.x} cy={pos.y} r="1.8"
              fill={isOrange ? 'var(--orange)' : 'var(--blue)'}
              opacity="0.85"
            />
          )
        })}

        {/* Label text */}
        {labels.map((l) => {
          const pos = toXY(l.angle, l.r + 4)
          return (
            <text
              key={l.label + 't'}
              x={pos.x} y={pos.y}
              textAnchor="middle" dominantBaseline="middle"
              fontSize="3.8" fontFamily="var(--mono)"
              fill="rgba(30,40,60,0.55)" letterSpacing="0.08em"
            >
              {l.label}
            </text>
          )
        })}

        {/* Nucleus logo (shield shape) */}
        <g transform="translate(38.5,39) scale(1.15)">
          <path d="M10 1L1 5v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5L10 1z"
            fill="none" stroke="#0B50C8" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M10 1L1 5v5c0 5.5 3.8 10.7 9 12" fill="none" stroke="#F4801E" strokeWidth="1.5" strokeLinejoin="round" />
        </g>
      </svg>

      {/* Trust Index badge */}
      <div style={{
        position: 'absolute', bottom: '18px', left: '18px',
        background: '#fff', border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '10px', padding: '8px 14px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        display: 'flex', flexDirection: 'column', gap: '2px'
      }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--slate-2)' }}>NS TRUST INDEX</span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
          <span style={{ fontFamily: 'var(--display)', fontSize: '22px', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.01em' }}>96.4<span style={{ fontSize: '14px' }}>%</span></span>
          <span style={{ fontSize: '11px', color: 'var(--orange)', fontWeight: 700 }}>▲ verified</span>
        </div>
      </div>
    </div>
  )
}

const WHY_CARDS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
    ),
    title: 'Real frontier work',
    body: 'AI security, post-quantum, DPI. You work on the problems most firms are only starting to name.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    ),
    title: 'Flexible by default',
    body: 'Hybrid and remote roles across regions, built around outcomes rather than hours at a desk.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
    title: 'Certifications funded',
    body: 'We back the credentials that matter, from CISSP to ISO 42001 lead, and the time to earn them.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
    ),
    title: 'Measured growth',
    body: 'Clear progression mapped to skill, with the same rigour we bring to client maturity models.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 20c0-2 2-3.5 4-3.5" /></svg>
    ),
    title: 'Small, senior teams',
    body: 'You work alongside experts, not layers of management. Your name is on the assessment.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="2" x2="12" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /></svg>
    ),
    title: 'Global, balanced',
    body: 'Competitive packages, generous leave, and travel only when it genuinely moves the work forward.',
  },
]

export default function Careers() {
  useReveal()
  const [modalOpen, setModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', link: '', role: 'General application', msg: '', consent: false
  })

  const openModal = () => {
    setModalOpen(true)
    setIsSuccess(false)
    document.documentElement.style.overflow = 'hidden'
  }
  const closeModal = () => {
    setModalOpen(false)
    document.documentElement.style.overflow = ''
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => setIsSuccess(true), 600)
  }

  return (
    <div id="view-careers">

      {/* ── HERO ── */}
      <section style={{
        background: '#f4f6fa', padding: '80px 0 60px',
        backgroundImage: 'radial-gradient(circle at 80% 40%, rgba(11,80,200,0.04) 0%, transparent 60%)',
      }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '24px' }}>Careers</div>
            <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 20px', color: 'var(--navy)' }}>
              Engineer trust<br />
              <span style={{ color: 'rgba(30,40,80,0.35)', fontWeight: 700 }}>for a </span>
              <span style={{ color: 'var(--orange)' }}>living.</span>
            </h1>
            <p style={{ fontSize: '17px', color: 'var(--slate)', lineHeight: 1.7, maxWidth: '48ch', margin: '0 0 32px' }}>
              We are a team of specialists who would rather measure trust than talk about it. If you want your work to show up as a number a board acts on, you will fit in here.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <button className="btn btn-primary" onClick={openModal}>
                Join the talent network <span className="arr">→</span>
              </button>
              <Link className="btn btn-ghost" to="/contact">Get in touch</Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
              {[
                { val: '40+',      valSup: '',    sub: 'COUNTRIES' },
                { val: '13+',      valSup: ' yrs', sub: 'OF PRACTICE' },
                { val: '6',        valSup: '',    sub: 'SERVICE DOMAINS' },
                { val: '4',        valSup: '',    sub: 'FRAMEWORKS TO MASTER' },
              ].map(s => (
                <div key={s.sub}>
                  <div style={{ fontFamily: 'var(--display)', fontSize: '28px', fontWeight: 800, color: 'var(--navy)', lineHeight: 1 }}>
                    {s.val}<span style={{ color: 'var(--orange)', fontSize: '20px' }}>{s.valSup}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--slate-2)', marginTop: '5px' }}>
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Radar art */}
          <RadarGraphic />
        </div>
      </section>

      {/* ── WHY NUCLEUS ── */}
      <section style={{ background: '#f4f6fa', padding: '72px 0' }}>
        <div className="wrap">
          <div style={{ marginBottom: '48px' }}>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>Why Nucleus</div>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, margin: '0 0 12px' }}>Work that proves itself.</h2>
            <p style={{ fontSize: '16px', color: 'var(--slate)', maxWidth: '52ch' }}>
              We hire people who care about evidence. Here is what you can expect in return.
            </p>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px'
          }}>
            {WHY_CARDS.map(card => (
              <div key={card.title} className="reveal" style={{
                background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '14px',
                padding: '28px 26px', display: 'flex', flexDirection: 'column', gap: '14px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'transform .25s, box-shadow .25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)' }}
              >
                {/* Icon */}
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px',
                  background: 'rgba(244,128,30,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--orange)', flexShrink: 0,
                }}>
                  <svg style={{ width: '22px', height: '22px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {card.icon.props.children}
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 8px', color: 'var(--navy)' }}>{card.title}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--slate)', lineHeight: 1.65, margin: 0 }}>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section style={{ background: '#fff', padding: '72px 0' }}>
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center' }}>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>Open Roles</div>
            <h2 style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, margin: '0 0 14px' }}>No opportunities at the moment.</h2>
            <p style={{ fontSize: '15px', color: 'var(--slate)', lineHeight: 1.7, margin: '0 0 32px' }}>
              We are not actively hiring right now. We still review every application, so if you can prove trust, introduce yourself and we will reach out when the right role opens.
            </p>
            <button className="btn btn-primary" onClick={openModal}>
              Join the talent network <span className="arr">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA BAND ── */}
      <section style={{ background: '#f4f6fa', padding: '48px 0 72px' }}>
        <div className="wrap">
          <div className="reveal" style={{
            background: 'linear-gradient(135deg, var(--navy) 0%, #0d2a4a 100%)',
            borderRadius: '20px', padding: '56px 48px',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Decorative blob */}
            <div style={{
              position: 'absolute', width: '320px', height: '320px', borderRadius: '50%',
              background: 'rgba(244,128,30,0.08)', top: '-80px', right: '-60px',
              filter: 'blur(60px)', pointerEvents: 'none'
            }} />
            <h2 style={{ fontSize: 'clamp(24px,3vw,38px)', fontWeight: 700, color: '#fff', margin: 0 }}>
              Don't see your <span style={{ color: 'var(--orange)' }}>role</span>?
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', margin: 0, maxWidth: '46ch', lineHeight: 1.65 }}>
              We are always interested in people who can prove trust. Tell us what you do best.
            </p>
            <button
              className="btn btn-orange"
              onClick={openModal}
              style={{ marginTop: '8px' }}
            >
              Join the talent network →
            </button>
          </div>
        </div>
      </section>

      {/* ── APPLICATION MODAL ── */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(10,25,47,0.65)',
            zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px', backdropFilter: 'blur(4px)',
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: '#fff', borderRadius: '18px', width: '100%', maxWidth: '560px',
              maxHeight: '90vh', overflowY: 'auto', position: 'relative', padding: '36px',
              boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute', top: '16px', right: '16px',
                background: 'rgba(0,0,0,0.06)', border: 'none', borderRadius: '50%',
                width: '32px', height: '32px', cursor: 'pointer', fontSize: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--slate)',
              }}
            >✕</button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '8px' }}>
                  Apply to Nucleus Systems
                </div>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 700, margin: '0 0 6px', color: 'var(--navy)' }}>
                  Submit your application
                </h3>
                <p style={{ color: 'var(--slate)', fontSize: '14px', marginBottom: '28px', lineHeight: 1.6 }}>
                  Tell us a little about you and attach your CV. We review every application and reply within 10 working days.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  {[
                    { label: 'Full name *', name: 'name', type: 'text', required: true, placeholder: 'Your name', span: false },
                    { label: 'Email *', name: 'email', type: 'email', required: true, placeholder: 'you@email.com', span: false },
                    { label: 'Phone', name: 'phone', type: 'tel', required: false, placeholder: '+27 ...', span: false },
                    { label: 'LinkedIn / portfolio', name: 'link', type: 'url', required: false, placeholder: 'https://...', span: false },
                  ].map(f => (
                    <label key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: '6px', gridColumn: f.span ? '1/-1' : undefined }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--navy)' }}>{f.label}</span>
                      <input
                        type={f.type} name={f.name} required={f.required}
                        placeholder={f.placeholder} value={formData[f.name]}
                        onChange={handleChange}
                        style={{
                          border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: '8px',
                          padding: '10px 12px', fontSize: '14px', outline: 'none',
                          transition: 'border-color .2s', fontFamily: 'var(--body)',
                        }}
                      />
                    </label>
                  ))}

                  {/* Position - full width */}
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', gridColumn: '1/-1' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--navy)' }}>Position *</span>
                    <select
                      name="role" required value={formData.role} onChange={handleChange}
                      style={{
                        border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: '8px',
                        padding: '10px 12px', fontSize: '14px', outline: 'none',
                        background: '#fff', fontFamily: 'var(--body)',
                      }}
                    >
                      <option value="General application">General application</option>
                      <option value="Senior Penetration Tester">Senior Penetration Tester</option>
                      <option value="Cloud Security Architect">Cloud Security Architect</option>
                      <option value="AI Governance Consultant">AI Governance Consultant</option>
                    </select>
                  </label>

                  {/* CV upload - full width */}
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', gridColumn: '1/-1' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--navy)' }}>
                      CV / résumé * <span style={{ color: 'var(--slate)', fontWeight: 400 }}>(PDF or Word, max 10MB)</span>
                    </span>
                    <input
                      type="file" accept=".pdf,.doc,.docx" required
                      style={{
                        border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: '8px',
                        padding: '10px 12px', fontSize: '13px', fontFamily: 'var(--body)',
                      }}
                    />
                  </label>

                  {/* Message - full width */}
                  <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', gridColumn: '1/-1' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--navy)' }}>Message</span>
                    <textarea
                      name="msg" rows="3" value={formData.msg} onChange={handleChange}
                      placeholder="Anything you'd like us to know"
                      style={{
                        border: '1.5px solid rgba(0,0,0,0.12)', borderRadius: '8px',
                        padding: '10px 12px', fontSize: '14px', outline: 'none', resize: 'vertical',
                        fontFamily: 'var(--body)',
                      }}
                    />
                  </label>

                  {/* Consent - full width */}
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', gridColumn: '1/-1', cursor: 'pointer' }}>
                    <input
                      type="checkbox" name="consent" required checked={formData.consent} onChange={handleChange}
                      style={{ marginTop: '2px', flexShrink: 0, accentColor: 'var(--blue)' }}
                    />
                    <span style={{ fontSize: '13px', color: 'var(--slate)', lineHeight: 1.5 }}>
                      I consent to Nucleus Systems storing my details for recruitment purposes.
                    </span>
                  </label>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                  <button type="submit" className="btn btn-primary">Submit application <span className="arr">→</span></button>
                  <button type="button" className="btn btn-ghost" onClick={closeModal}>Cancel</button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #059669, #047857)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', fontSize: '26px', color: '#fff',
                }}>✓</div>
                <h3 style={{ fontFamily: 'var(--display)', fontSize: '24px', fontWeight: 700, margin: '0 0 10px', color: 'var(--navy)' }}>
                  Application received
                </h3>
                <p style={{ color: 'var(--slate)', maxWidth: '360px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  Thanks <b>{formData.name || 'there'}</b>. Your application for <b>{formData.role}</b> is in. We'll be in touch within 10 working days.
                </p>
                <button className="btn btn-primary" onClick={closeModal}>Done</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
