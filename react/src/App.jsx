import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect, useState, lazy, Suspense } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import MobileMenu from './components/layout/MobileMenu'
import ScrollTopBtn from './components/common/ScrollTopBtn'
import EmailFab from './components/common/EmailFab'

// ── Core pages ──────────────────────────────────────────────────────────────
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Insights from './pages/Insights'
import Paxley from './pages/Paxley'
import Frameworks from './pages/Frameworks'

// ── What We Do — Pillar hub pages ───────────────────────────────────────────
const PillarAI      = lazy(() => import('./pages/whatwedo/PillarAI'))
const PillarDigital = lazy(() => import('./pages/whatwedo/PillarDigital'))
const PillarCyber   = lazy(() => import('./pages/whatwedo/PillarCyber'))

// ── What We Do — 01 AI Governance & Security (9 pages) ──────────────────────
const AIGovernance   = lazy(() => import('./pages/whatwedo/ai/AIGovernance'))
const AIRegulatory   = lazy(() => import('./pages/whatwedo/ai/AIRegulatory'))
const AIUsage        = lazy(() => import('./pages/whatwedo/ai/AIUsage'))
const AISecArch      = lazy(() => import('./pages/whatwedo/ai/AISecArch'))
const AIGenAI        = lazy(() => import('./pages/whatwedo/ai/AIGenAI'))
const AISupplyChain  = lazy(() => import('./pages/whatwedo/ai/AISupplyChain'))
const AIPhysical     = lazy(() => import('./pages/whatwedo/ai/AIPhysical'))
const AISecOps       = lazy(() => import('./pages/whatwedo/ai/AISecOps'))
const AIAssurance    = lazy(() => import('./pages/whatwedo/ai/AIAssurance'))

// ── What We Do — 02 Digital Platform Trust & Assurance (9 pages) ────────────
const PlatSecArch    = lazy(() => import('./pages/whatwedo/platform/PlatSecArch'))
const PlatDevSecOps  = lazy(() => import('./pages/whatwedo/platform/PlatDevSecOps'))
const PlatCodeTrust  = lazy(() => import('./pages/whatwedo/platform/PlatCodeTrust'))
const PlatSupplyChain= lazy(() => import('./pages/whatwedo/platform/PlatSupplyChain'))
const PlatTesting    = lazy(() => import('./pages/whatwedo/platform/PlatTesting'))
const PlatDeployment = lazy(() => import('./pages/whatwedo/platform/PlatDeployment'))
const PlatCloud      = lazy(() => import('./pages/whatwedo/platform/PlatCloud'))
const PlatDPI        = lazy(() => import('./pages/whatwedo/platform/PlatDPI'))
const PlatPaxley     = lazy(() => import('./pages/whatwedo/platform/PlatPaxley'))

// ── What We Do — 03 Cybersecurity & Compliance Maturity Management (9 pages) ─
const CyberMaturity  = lazy(() => import('./pages/whatwedo/cyber/CyberMaturity'))
const CyberGovernance= lazy(() => import('./pages/whatwedo/cyber/CyberGovernance'))
const CyberFCISO     = lazy(() => import('./pages/whatwedo/cyber/CyberFCISO'))
const CyberCompliance= lazy(() => import('./pages/whatwedo/cyber/CyberCompliance'))
const CyberResilience= lazy(() => import('./pages/whatwedo/cyber/CyberResilience'))
const CyberTVEM      = lazy(() => import('./pages/whatwedo/cyber/CyberTVEM'))
const CyberMDR       = lazy(() => import('./pages/whatwedo/cyber/CyberMDR'))
const CyberPQC       = lazy(() => import('./pages/whatwedo/cyber/CyberPQC'))
const CyberMA        = lazy(() => import('./pages/whatwedo/cyber/CyberMA'))

// ── Legacy service pages (kept for redirect targets + direct access) ─────────
import SvcFractionalCISO from './pages/services/SvcFractionalCISO'
import SvcCybersecurity  from './pages/services/SvcCybersecurity'
import SvcAIGovernance   from './pages/services/SvcAIGovernance'
import SvcAISecurity     from './pages/services/SvcAISecurity'
import SvcSecureSoftware from './pages/services/SvcSecureSoftware'
import SvcPenTest        from './pages/services/SvcPenTest'
import SvcResilience     from './pages/services/SvcResilience'
import SvcDigitalInfra   from './pages/services/SvcDigitalInfra'
import SvcPQC            from './pages/services/SvcPQC'

// ── M&A pages ────────────────────────────────────────────────────────────────
import MaStartup      from './pages/ma/MaStartup'
import MaOverview     from './pages/ma/MaOverview'
import MaDueDiligence from './pages/ma/MaDueDiligence'
import MaSellSide     from './pages/ma/MaSellSide'
import MaPostDeal     from './pages/ma/MaPostDeal'
import MaPortfolio    from './pages/ma/MaPortfolio'

// ── Sectors pages ────────────────────────────────────────────────────────────
import Industries   from './pages/industries/Industries'
import IndFinancial from './pages/industries/IndFinancial'
import IndGovt      from './pages/industries/IndGovt'
import IndDPI       from './pages/industries/IndDPI'
import IndPE        from './pages/industries/IndPE'
import IndTech      from './pages/industries/IndTech'
import IndFintech   from './pages/industries/IndFintech'
import IndAI        from './pages/industries/IndAI'
import IndCritical  from './pages/industries/IndCritical'
const SectorEnterprise = lazy(() => import('./pages/sectors/SectorEnterprise'))

// ── Experience pages ─────────────────────────────────────────────────────────
import Experience from './pages/experience/Experience'
import ExpMA      from './pages/experience/ExpMA'
import ExpDPI     from './pages/experience/ExpDPI'
import ExpGlobal  from './pages/experience/ExpGlobal'
import ExpEngagements from './pages/experience/ExpEngagements'

// ── Page loader fallback ──────────────────────────────────────────────────────
function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: 'var(--slate)', fontSize: '14px', letterSpacing: '.06em' }}>Loading…</div>
    </div>
  )
}

// ── Scroll to top on route change ────────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(true)
    document.documentElement.style.overflow = 'hidden'
  }
  const closeMenu = () => {
    setMenuOpen(false)
    document.documentElement.style.overflow = ''
  }

  return (
    <>
      <Navbar onMenuOpen={openMenu} />
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
      <main style={{ paddingTop: '68px' }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* ── Core ── */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/paxley" element={<Paxley />} />
            <Route path="/how-we-do-it" element={<Frameworks />} />
            <Route path="/frameworks" element={<Navigate to="/how-we-do-it" replace />} />

            {/* ── What We Do — Pillar Hubs ── */}
            <Route path="/what-we-do/ai-governance-security"  element={<PillarAI />} />
            <Route path="/what-we-do/digital-platform-trust"  element={<PillarDigital />} />
            <Route path="/what-we-do/cybersecurity-compliance" element={<PillarCyber />} />

            {/* ── What We Do — 01 AI Governance & Security ── */}
            <Route path="/what-we-do/ai/governance"          element={<AIGovernance />} />
            <Route path="/what-we-do/ai/regulatory"          element={<AIRegulatory />} />
            <Route path="/what-we-do/ai/usage-assurance"     element={<AIUsage />} />
            <Route path="/what-we-do/ai/security-architecture" element={<AISecArch />} />
            <Route path="/what-we-do/ai/genai-security"      element={<AIGenAI />} />
            <Route path="/what-we-do/ai/supply-chain"        element={<AISupplyChain />} />
            <Route path="/what-we-do/ai/physical-ai"         element={<AIPhysical />} />
            <Route path="/what-we-do/ai/secops"              element={<AISecOps />} />
            <Route path="/what-we-do/ai/assurance"           element={<AIAssurance />} />

            {/* ── What We Do — 02 Digital Platform Trust & Assurance ── */}
            <Route path="/what-we-do/platform/secure-architecture" element={<PlatSecArch />} />
            <Route path="/what-we-do/platform/devsecops"           element={<PlatDevSecOps />} />
            <Route path="/what-we-do/platform/code-trust"          element={<PlatCodeTrust />} />
            <Route path="/what-we-do/platform/supply-chain"        element={<PlatSupplyChain />} />
            <Route path="/what-we-do/platform/security-testing"    element={<PlatTesting />} />
            <Route path="/what-we-do/platform/deployment"          element={<PlatDeployment />} />
            <Route path="/what-we-do/platform/cloud-infra"         element={<PlatCloud />} />
            <Route path="/what-we-do/platform/dpi-security"        element={<PlatDPI />} />
            <Route path="/what-we-do/platform/paxley"              element={<PlatPaxley />} />

            {/* ── What We Do — 03 Cybersecurity & Compliance Maturity Mgmt ── */}
            <Route path="/what-we-do/cyber/maturity"         element={<CyberMaturity />} />
            <Route path="/what-we-do/cyber/governance"       element={<CyberGovernance />} />
            <Route path="/what-we-do/cyber/fractional-ciso"  element={<CyberFCISO />} />
            <Route path="/what-we-do/cyber/compliance"       element={<CyberCompliance />} />
            <Route path="/what-we-do/cyber/resilience"       element={<CyberResilience />} />
            <Route path="/what-we-do/cyber/tvem"             element={<CyberTVEM />} />
            <Route path="/what-we-do/cyber/managed-security" element={<CyberMDR />} />
            <Route path="/what-we-do/cyber/pqc"              element={<CyberPQC />} />
            <Route path="/what-we-do/cyber/ma"               element={<CyberMA />} />

            {/* ── Sectors ── */}
            <Route path="/sectors"                           element={<Industries />} />
            <Route path="/sectors/large-enterprises"         element={<SectorEnterprise />} />
            <Route path="/sectors/financial-services"        element={<IndFinancial />} />
            <Route path="/sectors/government-public-sector"  element={<IndGovt />} />
            <Route path="/sectors/software-saas"             element={<IndTech />} />
            <Route path="/sectors/digital-platforms"         element={<IndDPI />} />
            <Route path="/sectors/private-equity"            element={<IndPE />} />

            {/* ── Legacy Industry URLs → Sectors ── */}
            <Route path="/industries" element={<Navigate to="/sectors" replace />} />
            <Route path="/industries/financial-services" element={<Navigate to="/sectors/financial-services" replace />} />
            <Route path="/industries/government-public-sector" element={<Navigate to="/sectors/government-public-sector" replace />} />
            <Route path="/industries/dpi-digital-public-goods" element={<Navigate to="/sectors/digital-platforms" replace />} />
            <Route path="/industries/private-equity" element={<Navigate to="/sectors/private-equity" replace />} />
            <Route path="/industries/technology-saas" element={<Navigate to="/sectors/software-saas" replace />} />
            <Route path="/industries/fintech-payments" element={<Navigate to="/sectors/fintech-payments" replace />} />
            <Route path="/industries/ai-product-companies" element={<Navigate to="/sectors/ai-product-companies" replace />} />
            <Route path="/industries/critical-infrastructure" element={<Navigate to="/sectors/critical-infrastructure" replace />} />

            {/* ── Remaining Sectors ── */}
            <Route path="/sectors/fintech-payments" element={<IndFintech />} />
            <Route path="/sectors/ai-product-companies" element={<IndAI />} />
            <Route path="/sectors/critical-infrastructure" element={<IndCritical />} />

            {/* ── Experience ── */}
            <Route path="/experience"              element={<Experience />} />
            <Route path="/experience/ma"           element={<ExpMA />} />
            <Route path="/experience/dpi-dpg"      element={<ExpDPI />} />
            <Route path="/experience/global-delivery" element={<ExpGlobal />} />
            <Route path="/experience/engagements"  element={<ExpEngagements />} />

            {/* ── Legacy /services/* → /what-we-do/* ── */}
            <Route path="/services/cybersecurity-advisory" element={<Navigate to="/what-we-do/cyber/maturity" replace />} />
            <Route path="/services/fractional-ciso"        element={<Navigate to="/what-we-do/cyber/fractional-ciso" replace />} />
            <Route path="/services/ai-governance"          element={<Navigate to="/what-we-do/ai/governance" replace />} />
            <Route path="/services/ai-security"            element={<Navigate to="/what-we-do/ai/security-architecture" replace />} />
            <Route path="/services/secure-software"        element={<Navigate to="/what-we-do/platform/devsecops" replace />} />
            <Route path="/services/penetration-testing"    element={<Navigate to="/what-we-do/platform/security-testing" replace />} />
            <Route path="/services/operational-resilience" element={<Navigate to="/what-we-do/cyber/resilience" replace />} />
            <Route path="/services/digital-infrastructure" element={<Navigate to="/what-we-do/platform/dpi-security" replace />} />
            <Route path="/services/post-quantum"           element={<Navigate to="/what-we-do/cyber/pqc" replace />} />

            {/* ── Legacy M&A → Cyber Pillar ── */}
            <Route path="/ma"                   element={<Navigate to="/what-we-do/cyber/ma" replace />} />
            <Route path="/ma/due-diligence"     element={<Navigate to="/what-we-do/cyber/ma" replace />} />
            <Route path="/ma/sell-side"         element={<Navigate to="/what-we-do/cyber/ma" replace />} />
            <Route path="/ma/post-deal"         element={<Navigate to="/what-we-do/cyber/ma" replace />} />
            <Route path="/ma/portfolio"         element={<Navigate to="/what-we-do/cyber/ma" replace />} />
            <Route path="/ma/startup-growth"    element={<Navigate to="/what-we-do/cyber/ma" replace />} />

            {/* ── Older legacy redirects ── */}
            <Route path="/sol-mdr"      element={<Navigate to="/what-we-do/cyber/managed-security" replace />} />
            <Route path="/sol-payments" element={<Navigate to="/what-we-do/platform/dpi-security" replace />} />
            <Route path="/sol-identity" element={<Navigate to="/what-we-do/platform/dpi-security" replace />} />
            <Route path="/sol-fintech"  element={<Navigate to="/what-we-do/platform/dpi-security" replace />} />
            <Route path="/sol-pqc"      element={<Navigate to="/what-we-do/cyber/pqc" replace />} />
            <Route path="/pillar-cyber" element={<Navigate to="/what-we-do/cyber/maturity" replace />} />
            <Route path="/pillar-aigov" element={<Navigate to="/what-we-do/ai/governance" replace />} />
            <Route path="/pillar-aisec" element={<Navigate to="/what-we-do/ai/security-architecture" replace />} />
            <Route path="/pillar-code"  element={<Navigate to="/what-we-do/platform/devsecops" replace />} />
            <Route path="/fw-cmmf"      element={<Navigate to="/how-we-do-it" replace />} />
            <Route path="/fw-aigf"      element={<Navigate to="/how-we-do-it" replace />} />
            <Route path="/fw-aisca"     element={<Navigate to="/how-we-do-it" replace />} />
            <Route path="/fw-ctaf"      element={<Navigate to="/how-we-do-it" replace />} />
            <Route path="/plat-cyber"   element={<Navigate to="/what-we-do/cyber/maturity" replace />} />
            <Route path="/plat-aisec"   element={<Navigate to="/what-we-do/ai/security-architecture" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollTopBtn />
      <EmailFab />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppLayout />
    </HashRouter>
  )
}
