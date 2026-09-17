import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'

export default function PlatDeployment() {
  useReveal()
  return (
    <div id="view-svc">
      <section className="svc-hero">
        <div className="wrap">
          <div className="svc-hero-inner">
            <div className="svc-eyebrow reveal">Digital Platform Trust · 06</div>
            <h1 className="svc-h1 reveal">Secure Deployment &amp; Operations</h1>
            <p className="svc-lede reveal">
              Secure code deployed into an insecure environment is insecure software. We bridge the gap between development and operations using the Nucleus Secure Software Deployment &amp; Operations Framework (N3-SSDOF). We deliver infrastructure-as-code (IaC) security, container hardening, Kubernetes security architecture, and runtime controls that ensure your deployment environments maintain the security posture established during development.
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
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>The Operations Gap</span>
              <h2>Deployment automation accelerates delivery — and misconfiguration.</h2>
              <p>Modern deployment relies on Infrastructure as Code (IaC), containers, and orchestration platforms. While these technologies enable scale, a single misconfiguration in a Terraform script or a Kubernetes manifest can expose an entire environment in seconds. Securing operations requires treating infrastructure with the same security rigor as application code.</p>
            </div>
            <div className="svc-problem-right">
              {[
                { title: 'IaC misconfigurations', desc: 'Deploying infrastructure via code means security flaws (e.g., publicly accessible S3 buckets, permissive security groups) are codified and deployed automatically. IaC requires pre-deployment security scanning.' },
                { title: 'Container vulnerabilities and drift', desc: 'Containers running outdated base images or with excessive privileges (e.g., running as root) present significant risks. Furthermore, configuration drift in production undermines established security baselines.' },
                { title: 'Kubernetes complexity', desc: 'Kubernetes is a powerful orchestration platform, but its default configurations are not secure. Securing K8s requires complex RBAC tuning, network policies, and admission controllers.' },
                { title: 'Lack of runtime visibility', desc: 'Once deployed, organisations often lack the visibility to detect anomalous behaviour, container escapes, or unauthorised modifications within their ephemeral operational environments.' },
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
            <h2>Secure Deployment &amp; Operations — deliverables and outcomes.</h2>
          </div>
          <div className="svc-what-grid">
            {[
              { num: '01', title: 'Infrastructure as Code (IaC) Security', desc: 'Integrating automated security scanning (e.g., Checkov, tfsec) into CI/CD pipelines to identify and block misconfigurations in Terraform, CloudFormation, and Ansible before deployment.' },
              { num: '02', title: 'Container Security & Hardening', desc: 'Establishing secure container lifecycle management. Implementing base image hardening, automated vulnerability scanning in registries, and enforcing policies against running privileged containers.' },
              { num: '03', title: 'Kubernetes Security Architecture', desc: 'Designing and implementing secure Kubernetes environments. Configuring RBAC, defining strict network policies (micro-segmentation), and deploying admission controllers (e.g., OPA Gatekeeper).' },
              { num: '04', title: 'Runtime Security Monitoring', desc: 'Deploying eBPF-based runtime security tools to monitor container and host behaviour, detecting anomalous system calls, file modifications, and network connections in real-time.' },
              { num: '05', title: 'Secrets Management Integration', desc: 'Architecting secure secrets management solutions (e.g., HashiCorp Vault, cloud-native KMS) to eliminate hardcoded credentials and ensure dynamic, short-lived secret injection into workloads.' },
              { num: '06', title: 'N3-SSDOF Implementation', desc: 'Full implementation of the Secure Software Deployment & Operations Framework, establishing continuous compliance and operational assurance across your deployment pipelines.' },
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
            <span className="eyebrow">Framework: N3-SSDOF v1.0</span>
            <h2>The Nucleus Secure Software Deployment &amp; Ops Framework.</h2>
            <p style={{ color: 'var(--slate)', fontSize: '14px', lineHeight: 1.75 }}>Deployment controls · Runtime assurance · Infrastructure hardening</p>
          </div>
          <div className="standards-grid">
            {['NIST SP 800-190 (Container Security)', 'CIS Kubernetes Benchmark', 'CIS Docker Benchmark', 'OWASP SAMM (Operations)', 'NIST SP 800-53', 'GitOps Security Best Practices'].map(s => (
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
            <Link className="related-card reveal" to="/what-we-do/platform/devsecops"><h4>DevSecOps Transformation</h4><p>The pipeline automation that enforces deployment security policies.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/cloud-infra"><h4>Cloud &amp; Infrastructure Security</h4><p>Securing the underlying cloud substrate that hosts the deployment environment.</p><span className="arr-link">Learn more →</span></Link>
            <Link className="related-card reveal" to="/what-we-do/platform/code-trust"><h4>Code Trust &amp; Supply Chain</h4><p>Ensuring that only cryptographically verified artifacts are deployed to production.</p><span className="arr-link">Learn more →</span></Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <h2>Automate deployment. Do not automate compromise.</h2>
            <p>Speak with specialists who secure modern, containerised, and orchestrated deployment environments.</p>
            <div className="cta-btns">
              <Link className="btn btn-orange" to="/contact">Book a Briefing <span className="arr">→</span></Link>
              <Link className="btn btn-ghost" to="/how-we-do-it">N3-SSDOF Framework</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
