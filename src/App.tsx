import { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import { SmoothScrollProvider } from './components/common/SmoothScrollProvider'
import { Navbar } from './components/layout/Navbar'
import { HeroMarqVision } from './components/sections/HeroMarqVision'
import { PinnedDefensePipeline } from './components/sections/PinnedDefensePipeline'
import { FullSpectrumSolutions } from './components/sections/FullSpectrumSolutions'
import { IndustryMatrix } from './components/sections/IndustryMatrix'
import { VietnamHubContrast } from './components/sections/VietnamHubContrast'
import { RoiTimeline } from './components/sections/RoiTimeline'
import { InteractiveBrandScanner } from './components/sections/InteractiveBrandScanner'
import { ContactSection } from './components/sections/ContactSection'
import { CorporateFooter } from './components/layout/CorporateFooter'
import { DemoRequestModal } from './components/common/DemoRequestModal'

export function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    mode: 'demo' | 'scan-report'
    brandName: string
  }>({
    isOpen: false,
    mode: 'demo',
    brandName: '',
  })

  const openDemoModal = () => {
    setModalState({
      isOpen: true,
      mode: 'demo',
      brandName: '',
    })
  }

  const openScanReportModal = (brand: string) => {
    setModalState({
      isOpen: true,
      mode: 'scan-report',
      brandName: brand,
    })
  }

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <div className="min-h-screen bg-[#06080E] text-slate-100 flex flex-col selection:bg-cyan-400 selection:text-slate-950">
          {/* Section 1: Top Announcement Bar & Sticky Glass Navbar */}
          <Navbar
            onOpenDemoModal={openDemoModal}
            onOpenScanModal={() => openScanReportModal('VinPharma')}
          />

          <main id="main-content" className="flex-1">
            {/* Section 2: Hero Section (Fluid Mesh Gradient + Live Threat Radar + Ticker) */}
            <HeroMarqVision onOpenDemoModal={openDemoModal} />

            {/* Section 3: Scroll-Pinned 6-Step Defense Pipeline (GSAP ScrollTrigger) */}
            <PinnedDefensePipeline />

            {/* Section 4: AI-Driven Full Spectrum Solutions (6 Tabs Coded Product UI) */}
            <FullSpectrumSolutions />

            {/* Section 5: Industry Matrix & Threat Map (Interactive 6 Sectors) */}
            <IndustryMatrix />

            {/* Section 6: Light-Mode Contrast Section — Vietnam Hub & AI Agents */}
            <VietnamHubContrast />

            {/* Section 7: Scroll-Scrubbed ROI & Threat Reduction Timeline (8 Months) */}
            <RoiTimeline />

            {/* Section 8: Interactive Free Brand Scan Preview */}
            <InteractiveBrandScanner onOpenReportModal={openScanReportModal} />

            {/* Section 9: Formal Consultation & Intake Verification Form */}
            <ContactSection />
          </main>

          {/* Corporate Footer (CÔNG TY TNHH BRANDSHIELD VIỆT NAM - MST: 0319263557) */}
          <CorporateFooter />

          {/* Interactive Deep-Dive Demo / Scan Diagnostic Modal */}
          <DemoRequestModal
            isOpen={modalState.isOpen}
            onClose={closeModal}
            mode={modalState.mode}
            initialBrand={modalState.brandName}
          />
        </div>
      </SmoothScrollProvider>
    </LanguageProvider>
  )
}

export default App
