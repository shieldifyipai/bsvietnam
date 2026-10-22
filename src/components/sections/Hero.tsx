import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import {
  Shield,
  ArrowUpRight,
  ChevronRight,
  Search,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Lock,
  Eye,
} from 'lucide-react'
import { Button } from '../common/Button'
import { Badge } from '../common/Badge'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      // Content stagger entrance
      gsap.from('.hero-anim-item', {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'all',
      })

      // Visual cards entrance
      gsap.from('.hero-visual-card', {
        opacity: 0,
        y: 30,
        scale: 0.96,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.2,
        clearProps: 'all',
      })

      // Subtle pulse on scanner line
      gsap.to('.scanner-beam', {
        y: 85,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-950 via-[#0a1226] to-slate-950 overflow-hidden"
    >
      {/* Background digital grid & ambient lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content (6 cols) */}
          <div ref={contentRef} className="lg:col-span-6 space-y-6">
            {/* Status & Scope Tag */}
            <div className="hero-anim-item">
              <Badge variant="sky" size="md" dot>
                Brand Protection &bull; IP Enforcement Support
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="hero-anim-item text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12]">
              Protect your brand across the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-teal-300">
                digital world.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="hero-anim-item text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              BrandShield Vietnam Co., Ltd. helps enterprises identify and address suspected online
              brand misuse, unauthorized commercial sales, and intellectual property infringement
              through structured monitoring, cryptographic evidence collection, and platform reporting.
            </p>

            {/* CTAs */}
            <div className="hero-anim-item flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                Request a Consultation
              </Button>
              <Button
                href="#services"
                variant="outline"
                size="lg"
                icon={<ChevronRight className="h-4 w-4" />}
              >
                Explore Our Services
              </Button>
            </div>

            {/* Quick Scope Assurances */}
            <div className="hero-anim-item pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <span>Forensic Archiving</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <span>Multi-Channel Scope</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <span>Confidential Intake</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code-built Visual Composition (6 cols) */}
          <div ref={visualRef} className="lg:col-span-6 relative">
            {/* Visual Container */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl p-5 sm:p-6 backdrop-blur-md overflow-hidden">
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 font-mono-code text-[11px] text-slate-400 font-medium">
                    brandshield-monitoring-matrix.vnm
                  </span>
                </div>
                <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono-code text-sky-300 border border-slate-700">
                  CONCEPT MOCKUP
                </span>
              </div>

              {/* Visual Body Grid */}
              <div className="space-y-4">
                {/* Visual Card 1: Channel Signal Detection */}
                <div className="hero-visual-card p-4 rounded-xl bg-slate-950/70 border border-slate-800 relative overflow-hidden">
                  <div className="scanner-beam absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-75 pointer-events-none" />
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded bg-sky-500/10 text-sky-400">
                        <Search className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-xs font-semibold text-white">
                        Signal Detection & Identification
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono-code text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      <AlertTriangle className="h-2.5 w-2.5" /> Suspected Match
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono-code">
                    <div className="flex items-center justify-between text-slate-400 bg-slate-900/80 px-2.5 py-1.5 rounded">
                      <span className="truncate max-w-[200px]">sample-channel.market/item/40921</span>
                      <span className="text-[10px] text-sky-400">Regional E-Commerce</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="bg-slate-900/60 p-2 rounded border border-slate-800/80">
                        <span className="text-slate-500 block text-[9px] uppercase">Detected Vector</span>
                        <span className="text-slate-200">Trademark Logo Discrepancy</span>
                      </div>
                      <div className="bg-slate-900/60 p-2 rounded border border-slate-800/80">
                        <span className="text-slate-500 block text-[9px] uppercase">Disparity Metric</span>
                        <span className="text-rose-400">-78% vs. MSRP</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Card 2: Forensic Capture & Dossier Preparation */}
                <div className="hero-visual-card p-4 rounded-xl bg-slate-950/70 border border-slate-800 relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded bg-teal-500/10 text-teal-400">
                        <Lock className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-xs font-semibold text-white">
                        Forensic Evidence & Hash Verification
                      </span>
                    </div>
                    <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Archived &bull; SHA-256
                    </span>
                  </div>

                  {/* Visual Process Bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span className="flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5 text-slate-400" />
                        <span>Full DOM & Header Timestamp</span>
                      </span>
                      <span className="text-slate-400 font-mono-code text-[10px]">UTC Synchronized</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-sky-400 to-teal-400 h-1.5 rounded-full w-[85%]" />
                    </div>
                    <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[10px] font-mono-code text-slate-400 truncate">
                      SHA256: 3a9f7d4e1b8c2a90e4f5d6...71c08
                    </div>
                  </div>
                </div>

                {/* Visual Card 3: Shield Motif & Platform Notice Gateway */}
                <div className="hero-visual-card p-3.5 rounded-xl bg-gradient-to-r from-sky-950/40 via-slate-900/60 to-slate-950/80 border border-sky-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Platform Submission Gateway</h4>
                      <p className="text-[11px] text-slate-400">Standardized policy-aligned notice</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded bg-slate-800 text-[11px] font-medium text-slate-300 border border-slate-700">
                      Dossier Ready
                    </span>
                  </div>
                </div>
              </div>

              {/* Explicit Label: Non-live Sample Disclaimer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Eye className="h-3 w-3 text-slate-400" />
                  <span>Illustrative interface concept &bull; Non-live simulation</span>
                </span>
                <span className="text-amber-400/90 font-mono-code">Sample Demonstration Only</span>
              </div>
            </div>

            {/* Decorative background aura behind visual */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500/20 to-teal-500/10 rounded-2xl blur-xl -z-10 opacity-70" />
          </div>
        </div>
      </div>
    </section>
  )
}
