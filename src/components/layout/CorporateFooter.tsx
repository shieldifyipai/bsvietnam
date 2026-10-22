import React, { useState } from 'react'
import {
  Shield,
  MapPin,
  Mail,
  Phone,
  Clock,
} from 'lucide-react'
import { COMPANY_INFO, NAV_ITEMS_EN } from '../../data/siteData'
import { Modal } from '../common/Modal'

const CURRENT_YEAR = new Date().getFullYear()

export const CorporateFooter: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null)

  return (
    <footer className="bg-[#04060A] text-slate-400 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Corporate Profile & Verified Legal Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[1.5px]">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#06080E]">
                  <Shield className="h-5 w-5 text-sky-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight">
                  BRAND<span className="text-sky-400">SHIELD</span> VIETNAM
                </span>
                <span className="text-[10px] font-mono-code text-slate-400 block">
                  {COMPANY_INFO.legalName}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md pt-1">
              World-leading external cybersecurity and online brand protection enterprise combining AI.ClusterX™ threat intelligence with our dedicated Digital Risk Investigation Hub in Ho Chi Minh City, Vietnam.
            </p>

            {/* Verified Legal Entity Box */}
            <div className="p-4 rounded-xl bg-[#0C101B] border border-white/10 text-xs space-y-2 max-w-md font-mono-code">
              <div className="flex items-start justify-between">
                <span className="text-slate-400 uppercase text-[10px]">Registered Entity:</span>
                <span className="text-white font-bold">{COMPANY_INFO.legalName}</span>
              </div>
              <div className="flex items-start justify-between">
                <span className="text-slate-400 uppercase text-[10px]">Tax ID / ERC:</span>
                <span className="text-cyan-400 font-extrabold">{COMPANY_INFO.taxId}</span>
              </div>
              <div className="flex items-start justify-between">
                <span className="text-slate-400 uppercase text-[10px]">Operating Hub:</span>
                <span className="text-slate-300 text-right max-w-[240px]">
                  {COMPANY_INFO.headquarters}
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono-code">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS_EN.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Operation Center (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono-code">
              Direct Contact & Headquarters
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.headquarters}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contactEmail}`}
                  className="font-mono-code hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contactPhone.replace(/\s+/g, '')}`}
                  className="font-mono-code hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contactPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono-code">
          <p>
            &copy; {CURRENT_YEAR} {COMPANY_INFO.legalName}. Tax ID: {COMPANY_INFO.taxId}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>&bull;</span>
            <span className="text-slate-400">G2 #1 Leader</span>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy & Data Security Compliance"
      >
        <div className="space-y-4 text-xs leading-relaxed text-slate-300">
          <h4 className="font-semibold text-white text-sm">1. Commitment to Data Protection</h4>
          <p>
            {COMPANY_INFO.legalName} is committed to the highest standards of data security, confidentiality, and compliance under Vietnamese data protection regulations (Decree 13/2023/ND-CP) and international data governance frameworks.
          </p>
          <h4 className="font-semibold text-white text-sm">2. Evidentiary Dossiers & Hashing</h4>
          <p>
            All captured digital evidence, DOM archives, and network telemetry logs are preserved using cryptographic SHA-256 algorithms to ensure immutable chain-of-custody for administrative dispute resolutions and judicial proceedings.
          </p>
          <h4 className="font-semibold text-white text-sm">3. Inquiries</h4>
          <p>
            For privacy compliance inquiries, contact: <code className="text-cyan-300">{COMPANY_INFO.contactEmail}</code>.
          </p>
        </div>
      </Modal>

      {/* Terms Modal */}
      <Modal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms of Service & Enterprise Engagement"
      >
        <div className="space-y-4 text-xs leading-relaxed text-slate-300">
          <h4 className="font-semibold text-white text-sm">1. Service Engagement Framework</h4>
          <p>
            Services provided by {COMPANY_INFO.legalName} are governed by tailored Enterprise Service Level Agreements (SLAs) and strict Non-Disclosure Agreements (NDAs).
          </p>
          <h4 className="font-semibold text-white text-sm">2. Takedown Representation</h4>
          <p>
            Clients authorize BrandShield Vietnam's digital risk investigators to submit verified intellectual property takedown packages directly to domain registrars, cloud hosting providers, search engines, and e-commerce platforms.
          </p>
        </div>
      </Modal>
    </footer>
  )
}
