import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import MobileMenu from './components/layout/MobileMenu'
import ScrollTopBtn from './components/common/ScrollTopBtn'
import EmailFab from './components/common/EmailFab'

import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Insights from './pages/Insights'
import Paxley from './pages/Paxley'
import Frameworks from './pages/Frameworks'

// New service pages
import SvcFractionalCISO from './pages/services/SvcFractionalCISO'
import SvcCybersecurity from './pages/services/SvcCybersecurity'
import SvcAIGovernance from './pages/services/SvcAIGovernance'
import SvcAISecurity from './pages/services/SvcAISecurity'
import SvcSecureSoftware from './pages/services/SvcSecureSoftware'
import SvcPenTest from './pages/services/SvcPenTest'
import SvcResilience from './pages/services/SvcResilience'
import SvcDigitalInfra from './pages/services/SvcDigitalInfra'
import SvcPQC from './pages/services/SvcPQC'

// M&A pages
import MaStartup from './pages/ma/MaStartup'
import MaOverview from './pages/ma/MaOverview'
import MaDueDiligence from './pages/ma/MaDueDiligence'
import MaSellSide from './pages/ma/MaSellSide'
import MaPostDeal from './pages/ma/MaPostDeal'
import MaPortfolio from './pages/ma/MaPortfolio'

// Solutions directory removed — content migrated into service pages
// /sol-* routes now redirect to equivalent service pages (see below)

// Industries pages
import Industries from './pages/industries/Industries'
import IndFinancial from './pages/industries/IndFinancial'
import IndGovt from './pages/industries/IndGovt'
import IndDPI from './pages/industries/IndDPI'
import IndPE from './pages/industries/IndPE'
import IndTech from './pages/industries/IndTech'
import IndFintech from './pages/industries/IndFintech'
import IndAI from './pages/industries/IndAI'
import IndCritical from './pages/industries/IndCritical'

// Experience pages
import Experience from './pages/experience/Experience'
import ExpMA from './pages/experience/ExpMA'
import ExpDPI from './pages/experience/ExpDPI'
import ExpGlobal from './pages/experience/ExpGlobal'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/paxley" element={<Paxley />} />
          <Route path="/frameworks" element={<Frameworks />} />

          {/* Services */}
          <Route path="/services/cybersecurity-advisory" element={<SvcCybersecurity />} />
          <Route path="/services/fractional-ciso" element={<SvcFractionalCISO />} />
          <Route path="/services/ai-governance" element={<SvcAIGovernance />} />
          <Route path="/services/ai-security" element={<SvcAISecurity />} />
          <Route path="/services/secure-software" element={<SvcSecureSoftware />} />
          <Route path="/services/penetration-testing" element={<SvcPenTest />} />
          <Route path="/services/operational-resilience" element={<SvcResilience />} />
          <Route path="/services/digital-infrastructure" element={<SvcDigitalInfra />} />
          <Route path="/services/post-quantum" element={<SvcPQC />} />

          {/* M&A */}
          <Route path="/ma" element={<MaOverview />} />
          <Route path="/ma/due-diligence" element={<MaDueDiligence />} />
          <Route path="/ma/sell-side" element={<MaSellSide />} />
          <Route path="/ma/post-deal" element={<MaPostDeal />} />
          <Route path="/ma/portfolio" element={<MaPortfolio />} />
          <Route path="/ma/startup-growth" element={<MaStartup />} />

          {/* Industries */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/financial-services" element={<IndFinancial />} />
          <Route path="/industries/government-public-sector" element={<IndGovt />} />
          <Route path="/industries/dpi-digital-public-goods" element={<IndDPI />} />
          <Route path="/industries/private-equity" element={<IndPE />} />
          <Route path="/industries/technology-saas" element={<IndTech />} />
          <Route path="/industries/fintech-payments" element={<IndFintech />} />
          <Route path="/industries/ai-product-companies" element={<IndAI />} />
          <Route path="/industries/critical-infrastructure" element={<IndCritical />} />

          {/* Experience */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/ma" element={<ExpMA />} />
          <Route path="/experience/dpi-dpg" element={<ExpDPI />} />
          <Route path="/experience/global-delivery" element={<ExpGlobal />} />

          {/* Solutions → Service page redirects (solutions directory removed; content migrated into service pages) */}
          <Route path="/sol-mdr" element={<Navigate to="/services/operational-resilience" replace />} />
          <Route path="/sol-payments" element={<Navigate to="/services/digital-infrastructure" replace />} />
          <Route path="/sol-identity" element={<Navigate to="/services/digital-infrastructure" replace />} />
          <Route path="/sol-fintech" element={<Navigate to="/services/digital-infrastructure" replace />} />
          <Route path="/sol-pqc" element={<Navigate to="/services/post-quantum" replace />} />

          {/* Legacy redirects — old pillar/framework/platform URLs */}
          <Route path="/pillar-cyber" element={<Navigate to="/services/cybersecurity-advisory" replace />} />
          <Route path="/pillar-aigov" element={<Navigate to="/services/ai-governance" replace />} />
          <Route path="/pillar-aisec" element={<Navigate to="/services/ai-security" replace />} />
          <Route path="/pillar-code" element={<Navigate to="/services/secure-software" replace />} />
          <Route path="/fw-cmmf" element={<Navigate to="/services/cybersecurity-advisory" replace />} />
          <Route path="/fw-aigf" element={<Navigate to="/services/ai-governance" replace />} />
          <Route path="/fw-aisca" element={<Navigate to="/services/ai-security" replace />} />
          <Route path="/fw-ctaf" element={<Navigate to="/services/secure-software" replace />} />
          <Route path="/plat-cyber" element={<Navigate to="/services/cybersecurity-advisory" replace />} />
          <Route path="/plat-aisec" element={<Navigate to="/services/ai-security" replace />} />
        </Routes>
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
