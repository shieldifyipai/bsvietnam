import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ScanLine,
  Award,
  FileText,
  Search,
  UserX,
  Database,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Shield,
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { Badge } from '../common/Badge'
import { Modal } from '../common/Modal'
import { SERVICES } from '../../data/siteData'
import type { ServiceItem } from '../../types'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  ScanLine: <ScanLine className="h-6 w-6 text-sky-400" />,
  Award: <Award className="h-6 w-6 text-sky-400" />,
  FileText: <FileText className="h-6 w-6 text-sky-400" />,
  SearchCheck: <Search className="h-6 w-6 text-sky-400" />,
  UserX: <UserX className="h-6 w-6 text-sky-400" />,
  Database: <Database className="h-6 w-6 text-sky-400" />,
}

export const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
        },
        opacity: 0,
        y: 35,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        clearProps: 'all',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-950 via-[#0d162e] to-slate-950 text-white relative"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          badge="SERVICES PORTFOLIO"
          title="Structured IP Protection & Enforcement Support"
          subtitle="We assist rights holders with systematic online brand monitoring, cryptographic evidence archiving, and administrative complaint filing across global and regional platforms."
          centered
          theme="dark"
        />

        {/* Legal Scope Disclaimer Notice */}
        <div className="mt-8 max-w-3xl mx-auto p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
          <AlertCircle className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-100">Service Boundary Note:</strong> Services encompass monitoring,
            technical documentation, and submission of administrative platform takedown notices. BrandShield Vietnam
            does not guarantee content removal by third-party platforms and does not provide formal legal representation.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div ref={cardsRef} className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="service-card flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-sky-500/40 hover:bg-slate-900 transition-all duration-300 p-6 group hover:shadow-xl hover:shadow-sky-950/30"
            >
              <div>
                {/* Card Header: Icon & Category Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-colors">
                    {SERVICE_ICONS[service.iconName] || <Shield className="h-6 w-6 text-sky-400" />}
                  </div>
                  <Badge variant="slate" size="sm">
                    {service.tag}
                  </Badge>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    Typical Deliverables:
                  </span>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Detail Modal Trigger */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] font-mono-code text-slate-400">
                  {service.platforms.length} Channel Types
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer group-hover:translate-x-0.5 transition-transform"
                >
                  <span>View Scope Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Scope Modal */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          size="lg"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="sky" size="sm">
                {selectedService.tag}
              </Badge>
              <span className="text-xs text-slate-400 font-mono-code">
                ID: {selectedService.id}
              </span>
            </div>

            <p className="text-slate-200 text-sm leading-relaxed">
              {selectedService.fullDescription}
            </p>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                Included Deliverables & Documentation:
              </h4>
              <ul className="space-y-2">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Monitored Environments:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.platforms.map((platform, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700 font-medium"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            {selectedService.advisoryNote && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <p>
                  <strong>Operational Note:</strong> {selectedService.advisoryNote}
                </p>
              </div>
            )}

            <div className="pt-2 flex justify-between items-center">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 text-slate-950 text-xs font-semibold hover:bg-sky-400 transition-colors"
              >
                Request Scope for this Service
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
