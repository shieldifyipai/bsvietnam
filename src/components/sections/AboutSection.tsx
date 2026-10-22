import React from 'react'
import {
  Building2,
  FileCheck,
  Scale,
  Users,
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { Badge } from '../common/Badge'
import { COMPANY_INFO } from '../../data/siteData'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-950 via-[#0a1226] to-slate-950 text-white relative border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ABOUT THE COMPANY"
          title="BrandShield Vietnam Co., Ltd."
          subtitle="A dedicated operational brand protection and digital IP enforcement support consultancy assisting enterprises with online threat mitigation across Southeast Asia and global digital commerce."
          centered
          theme="dark"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Corporate Profile & Scope (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Building2 className="h-5 w-5 text-sky-400" />
                <span>Corporate Mission & Focus</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                BrandShield Vietnam Co., Ltd. was established to provide systematic, evidence-first brand
                protection services for enterprise rights holders navigating the rapid expansion of digital commerce
                in Vietnam and the broader Southeast Asian region.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our operations focus on the intersection of technical monitoring, forensic evidence preservation,
                and administrative intellectual property notice coordination. We operate as an execution partner
                for in-house brand security directors, intellectual property managers, and external legal counsel.
              </p>
            </div>

            {/* Verified Company Information & Placeholders */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-sky-400" />
                  <span>Verified Corporate Details & Placeholders</span>
                </h4>
                <Badge variant="placeholder" size="sm">
                  Placeholder Values
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-code pt-2">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 uppercase text-[10px] block">Corporate Entity</span>
                  <span className="text-slate-200 font-bold block">{COMPANY_INFO.legalName}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 uppercase text-[10px] block">Enterprise Code (ERC)</span>
                  <span className="text-amber-300 block">{COMPANY_INFO.registrationNumber}</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1 sm:col-span-2">
                  <span className="text-slate-400 uppercase text-[10px] block">Registered Office Address</span>
                  <span className="text-amber-300 block">{COMPANY_INFO.registeredAddress}</span>
                </div>
              </div>
            </div>

            {/* Non-Legal Practice Advisory Notice */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 text-xs text-slate-300 flex items-start gap-3">
              <Scale className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-semibold text-white">Jurisdictional Status & Legal Boundary:</span>
                <p className="text-slate-300 leading-relaxed">
                  {COMPANY_INFO.jurisdictionNotice}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership & Specialist Biographies Placeholders (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                  <Users className="h-4 w-4 text-sky-400" />
                  <span>Practice Leadership & Specialists</span>
                </h4>
                <Badge variant="placeholder" size="sm">
                  Team Placeholders
                </Badge>
              </div>

              <div className="space-y-4">
                {/* Team Placeholder 1 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-semibold text-white">
                      [Placeholder: Managing Director / Head of Practice]
                    </h5>
                    <span className="text-[10px] font-mono-code text-slate-400">LEADERSHIP</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Oversees brand protection operations, corporate risk alignment, and strategic client engagements across Vietnam and international markets.
                  </p>
                </div>

                {/* Team Placeholder 2 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-semibold text-white">
                      [Placeholder: Senior Investigation Analyst]
                    </h5>
                    <span className="text-[10px] font-mono-code text-slate-400">OPERATIONS</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Specializes in e-commerce marketplace intelligence gathering, cross-platform merchant linkage, and counterfeit sample intake verification.
                  </p>
                </div>

                {/* Team Placeholder 3 */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-semibold text-white">
                      [Placeholder: Digital Forensics & Platform Notice Specialist]
                    </h5>
                    <span className="text-[10px] font-mono-code text-slate-400">ENFORCEMENT</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Responsible for cryptographic DOM archiving, SHA-256 evidence hashing, and platform IP notice compilation.
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 text-center italic">
                Verified biographical profiles and professional credentials will be updated upon final corporate confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
