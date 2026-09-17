import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function PlatCloud() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Digital Platform Trust · 07</div>
            <h1 className="svc-h1 reveal">Cloud &amp; Infrastructure Security</h1>
            <p className="svc-lede reveal">
              The cloud is secure; your configuration of it likely is not. The shared responsibility model dictates that securing data, identities, and workloads in the cloud is the customer's obligation. We deliver cloud-native security architecture, multi-cloud posture management, and robust Identity and Access Management (IAM) across AWS, Azure, and GCP to ensure your infrastructure foundation is resilient against compromise.
            </p>
            <div className="svc-hero-ctas reveal">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/digital-platform-trust">All Platform Services <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="svc-problem section">
        <div className="wrap">
          <div className="svc-problem-grid">
            <div className="svc-problem-left reveal">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Cloud Gap</span>
              <h2>Cloud breaches are rarely zero-days. They are misconfigurations.</h2>
              <p>Over-permissive IAM roles, publicly exposed storage buckets, and lack of multi-factor authentication are the root causes of most cloud compromises. The complexity of modern multi-cloud environments, combined with rapid provisioning by development teams, creates a continuous cycle of configuration drift and security exposure.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'Identity is the new perimeter', desc: 'In the cloud, network boundaries are secondary to identity boundaries. Over-privileged service accounts and weak IAM configurations allow attackers to traverse environments and access sensitive data.' },
                { title: 'Configuration drift at scale', desc: 'Manual changes made via cloud consoles bypass Infrastructure as Code (IaC) pipelines, creating undocumented and often insecure configurations that drift from the established baseline.' },
                { title: 'Multi-cloud complexity', desc: 'Organisations operating across AWS, Azure, and GCP struggle to apply consistent security policies. Each provider has different IAM models, logging mechanisms, and security services.' },
                { title: 'Data exposure risk', desc: 'Misconfigured object storage (e.g., S3 buckets, Azure Blobs) remains a primary vector for massive data breaches. Without automated posture management, these exposures go unnoticed until exploited.' },
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
            <h2>Cloud &amp; Infrastructure Security — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Cloud Security Architecture', desc: 'Designing secure, scalable cloud architectures. Establishing secure landing zones, network segmentation (VPCs/VNets), and centralised logging and monitoring across AWS, Azure, and GCP.' },
              { num: '02', title: 'Cloud Security Posture Management (CSPM)', desc: 'Deploying and tuning CSPM tools to continuously monitor cloud environments against frameworks like CIS Benchmarks, automatically detecting and alerting on misconfigurations.' },
              { num: '03', title: 'Identity & Access Management (IAM) Hardening', desc: 'Implementing least privilege access models. Auditing existing IAM roles, removing unused permissions, enforcing MFA, and establishing robust identity federation (SSO/OIDC).' },
              { num: '04', title: 'Multi-Cloud Security Strategy', desc: 'Developing unified security strategies for multi-cloud environments, ensuring consistent policy enforcement, visibility, and incident response capabilities regardless of the underlying provider.' },
              { num: '05', title: 'Data Protection & Encryption', desc: 'Architecting robust data protection strategies. Implementing encryption at rest and in transit, managing cryptographic keys (KMS), and configuring automated data discovery and classification.' },
              { num: '06', title: 'Cloud Incident Response Readiness', desc: 'Ensuring cloud environments are instrumented for incident response. Configuring CloudTrail, Azure Monitor, and VPC Flow Logs, and developing cloud-specific IR playbooks.' },
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
            <span className="eyebrow">Frameworks &amp; Standards</span>
            <h2>Cloud security methodologies.</h2>
          </div>
          <div className="standards-grid">
            {['CIS Foundations Benchmarks (AWS, Azure, GCP)', 'Cloud Security Alliance (CSA) CCM', 'NIST SP 800-210', 'AWS Well-Architected Framework (Security Pillar)', 'Microsoft Cybersecurity Reference Architecture'].map(s => (
              <span className="standard-badge reveal" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-related section">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <span className="eyebrow">Related Services</span>
            <h2>Connected Platform services</h2>
          </div>
          <div className="related-grid">
            <Link className="related-card reveal" to="/what-we-do/platform/deployment"><h4>Secure Deployment &amp; Ops</h4><p>Securing the Kubernetes and container workloads running on top of the cloud infrastructure.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/secure-architecture"><h4>Secure Architecture Review</h4><p>Ensuring the application design aligns with cloud-native security principles.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/cyber/resilience"><h4>Operational Resilience</h4><p>Leveraging cloud architectures to design robust disaster recovery capabilities.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>The cloud is secure. Your configuration requires verification.</h2>
            <p>Speak with cloud security architects who design, harden, and monitor complex multi-cloud environments.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/what-we-do/digital-platform-trust">All Platform Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
