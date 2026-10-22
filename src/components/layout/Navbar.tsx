import React, { useState, useEffect } from 'react'
import {
  Shield,
  ArrowRight,
  Sparkles,
  Menu,
  X,
  Search,
} from 'lucide-react'
import { NAV_ITEMS_EN } from '../../data/siteData'

interface NavbarProps {
  onOpenDemoModal: () => void
  onOpenScanModal: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal, onOpenScanModal }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = NAV_ITEMS_EN

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. Top Announcement Bar */}
      <div className="bg-gradient-to-r from-sky-950 via-[#0a142e] to-sky-950 border-b border-sky-500/20 py-1.5 px-4 text-center text-[11px] sm:text-xs text-slate-300 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>
            New: Next-Gen AI.ClusterX™ combined with Digital Risk Investigation Hub in Ho Chi Minh City —
          </span>
          <a
            href="#pipeline"
            className="text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1 group transition-colors"
          >
            <span>Explore now</span>
            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* 2. Sticky Glass Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-[#06080E]/90 border-b border-white/10 shadow-2xl py-3'
            : 'backdrop-blur-md bg-[#06080E]/70 border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* BrandShield Wordmark & Shield Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-sky-400 rounded-lg"
              aria-label="BrandShield Vietnam Co., Ltd."
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 p-[1.5px] shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#06080E]">
                  <Shield className="h-5 w-5 text-sky-400 group-hover:scale-105 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-tight">
                  <span className="font-extrabold tracking-tight text-lg text-white">
                    BRAND<span className="text-sky-400">SHIELD</span>
                  </span>
                  <span className="rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-bold text-sky-400 border border-sky-500/30">
                    VN
                  </span>
                </div>
                <span className="text-[10px] font-mono-code text-slate-400 tracking-wider uppercase">
                  Vietnam Co., Ltd
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Action Suite */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Free Brand Scan Button (Border Light) */}
              <button
                type="button"
                onClick={onOpenScanModal}
                className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-sky-300 bg-sky-500/10 border border-sky-400/30 hover:border-sky-400 hover:bg-sky-500/20 transition-all cursor-pointer"
              >
                <Search className="h-3.5 w-3.5" />
                <span>Free Brand Scan</span>
              </button>

              {/* Primary Conic-Gradient CTA Button: Schedule Demo */}
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-xl group cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400"
              >
                <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#06B6D4_0%,#2563EB_50%,#06B6D4_100%)] group-hover:opacity-100 transition-opacity animate-spin-slow" />
                <span className="relative px-4 py-2 text-xs font-bold text-white bg-slate-950 hover:bg-slate-900 rounded-[11px] transition-all flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Schedule Demo</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center sm:hidden gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#06080E]/95 border-b border-white/10 px-6 py-6 space-y-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-slate-200 hover:text-sky-400 hover:bg-white/5 rounded-lg"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-white/10 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenScanModal()
                }}
                className="w-full justify-center flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-sky-300 bg-sky-500/10 border border-sky-400/30"
              >
                <Search className="h-4 w-4" />
                <span>Free Brand Scan</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenDemoModal()
                }}
                className="w-full justify-center flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500"
              >
                <Sparkles className="h-4 w-4" />
                <span>Schedule Deep-Dive Demo</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
