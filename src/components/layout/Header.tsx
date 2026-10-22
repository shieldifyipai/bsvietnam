import React, { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight, Shield } from 'lucide-react'
import { Logo } from '../common/Logo'
import { Button } from '../common/Button'
import { NAV_ITEMS } from '../../data/siteData'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant="light" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_ITEMS.filter((item) => !item.isAction).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-850/60 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              Request a Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus-visible:outline-2 focus-visible:outline-sky-400"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[65px] z-50 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 px-6 py-6 flex flex-col justify-between overflow-y-auto lg:hidden"
        >
          <div className="space-y-2">
            <div className="mb-4 pb-3 border-b border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Navigation
              </span>
            </div>
            {NAV_ITEMS.filter((item) => !item.isAction).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Shield className="h-4 w-4 text-sky-400" />
              <span>BrandShield Vietnam Co., Ltd.</span>
            </div>
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              Request a Consultation
            </Button>
            <p className="text-[11px] text-slate-500 text-center">
              Confidential IP review &bull; Response within 1–2 business days
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
