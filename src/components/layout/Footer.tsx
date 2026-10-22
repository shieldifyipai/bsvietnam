import React, { useState } from 'react'
import { Shield, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Logo } from '../common/Logo'
import { Modal } from '../common/Modal'
import { COMPANY_INFO, NAV_ITEMS, CAPABILITIES } from '../../data/siteData'

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null)

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/90 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Company Profile & Legal Disclaimers (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-md pt-2">
              Operational digital brand protection, evidentiary documentation, and platform
              enforcement submission support for enterprises operating across Southeast Asia and
              international channels.
            </p>

            {/* Entity Details & Registration Placeholders */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2 max-w-md">
              <div className="flex items-start gap-2">
                <span className="font-semibold text-slate-200 shrink-0">Legal Entity:</span>
                <span className="text-slate-300">{COMPANY_INFO.legalName}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-slate-200 shrink-0">Registration:</span>
                <span className="text-amber-300/90 font-mono-code text-[11px]">
                  {COMPANY_INFO.registrationNumber}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-semibold text-slate-200 shrink-0">Jurisdiction:</span>
                <span className="text-slate-400">Incorporated in the Socialist Republic of Vietnam</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors inline-flex items-center gap-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm">
              {CAPABILITIES.map((cap) => (
                <li key={cap.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    {cap.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Placeholders (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-amber-200/90">{COMPANY_INFO.registeredAddress}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <span className="text-amber-200/90">{COMPANY_INFO.contactEmail}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                <span className="text-amber-200/90">{COMPANY_INFO.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="h-4 w-4 text-slate-500 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] leading-relaxed text-slate-400">
          <div className="flex items-start gap-2.5">
            <Shield className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-slate-300">Professional Notice & Scope Disclaimer:</span>
              <p>
                BrandShield Vietnam Co., Ltd. provides technical brand protection monitoring, evidence documentation,
                and platform notice submission assistance. We do not provide formal legal advice, statutory legal
                representation, or legal opinions. Enforcement and content removal outcomes depend entirely on the
                applicable platform policies, evidence provided, rights documentation, and the independent determination
                of platform administrators or authorized judicial authorities. Brand names, logos, and trademarks
                belong to their respective proprietors; their reference does not imply endorsement, affiliation, or
                partnership.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="mt-8 pt-6 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {CURRENT_YEAR} {COMPANY_INFO.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700" aria-hidden="true">&bull;</span>
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-slate-700" aria-hidden="true">&bull;</span>
            <a
              href="#about"
              className="hover:text-slate-200 transition-colors"
            >
              Corporate Disclosures
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy & Data Handling Practices"
      >
        <div className="space-y-4 text-xs leading-relaxed text-slate-300">
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-300">
            <strong>Placeholder Policy Notice:</strong> This document represents a standard operational privacy outline
            for BrandShield Vietnam Co., Ltd. Final legal terms must be reviewed and customized according to local Vietnamese
            data protection regulations (Decree 13/2023/ND-CP on Personal Data Protection).
          </div>
          <h4 className="font-semibold text-white text-sm">1. Collection of Consultation Information</h4>
          <p>
            We collect information submitted via our consultation request form, including your name, business email address,
            company name, brand web address, and descriptions of suspected intellectual property issues. This information is
            used solely for preliminary evaluation, scoping of services, and direct communication.
          </p>
          <h4 className="font-semibold text-white text-sm">2. Handling of Brand Evidence & Client IP Documentation</h4>
          <p>
            Any trademark certificates, brand assets, or suspected infringement URLs shared with BrandShield Vietnam Co., Ltd.
            are treated under strict confidentiality. We do not sell, trade, or publicly disclose client evidentiary records.
          </p>
          <h4 className="font-semibold text-white text-sm">3. Platform Notice Disclosures</h4>
          <p>
            When authorized to submit an intellectual property complaint on your behalf to a third-party platform (such as an
            e-commerce marketplace or hosting provider), identifying rights holder data required by the platform’s notice form
            will be transmitted in accordance with the platform’s dispute resolution protocols.
          </p>
          <h4 className="font-semibold text-white text-sm">4. Contacting Data Protection Representative</h4>
          <p>
            For privacy inquiries or data access requests, please contact: <code className="text-sky-300">{COMPANY_INFO.contactEmail}</code>.
          </p>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms of Service & Engagement Framework"
      >
        <div className="space-y-4 text-xs leading-relaxed text-slate-300">
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-300">
            <strong>Placeholder Engagement Notice:</strong> Formal client engagements are governed by bespoke Service Level
            Agreements (SLAs) and Non-Disclosure Agreements (NDAs) signed prior to project initiation.
          </div>
          <h4 className="font-semibold text-white text-sm">1. Informational Purpose</h4>
          <p>
            The content on this website is for general informational and marketing purposes regarding the capabilities of
            BrandShield Vietnam Co., Ltd. Nothing on this website constitutes formal legal advice or a binding guarantee of
            specific takedown success.
          </p>
          <h4 className="font-semibold text-white text-sm">2. Non-Guarantee of Platform Removals</h4>
          <p>
            Client explicitly acknowledges that BrandShield Vietnam Co., Ltd. does not operate third-party digital platforms,
            marketplaces, or social networks. All final enforcement, listing de-indexing, and account suspension decisions are
            made by independent third-party platform operators or competent state authorities.
          </p>
          <h4 className="font-semibold text-white text-sm">3. Client Representation of Rights</h4>
          <p>
            Clients requesting enforcement assistance warrant that they are the bona fide rights holders or authorized
            representatives holding valid legal standing to assert intellectual property claims.
          </p>
          <h4 className="font-semibold text-white text-sm">4. Governing Law</h4>
          <p>
            These website terms are governed by the laws of the Socialist Republic of Vietnam. Any formal enterprise contracts
            shall designate specific dispute resolution mechanisms.
          </p>
        </div>
      </Modal>
    </footer>
  )
}
