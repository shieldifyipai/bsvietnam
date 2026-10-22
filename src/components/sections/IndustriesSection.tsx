import React from 'react'
import {
  Package,
  Sparkles,
  HeartPulse,
  Cpu,
  Film,
  Terminal,
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { INDUSTRIES } from '../../data/siteData'

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  Package: <Package className="h-5 w-5 text-sky-400" />,
  Sparkles: <Sparkles className="h-5 w-5 text-sky-400" />,
  HeartPulse: <HeartPulse className="h-5 w-5 text-sky-400" />,
  Cpu: <Cpu className="h-5 w-5 text-sky-400" />,
  Film: <Film className="h-5 w-5 text-sky-400" />,
  Terminal: <Terminal className="h-5 w-5 text-sky-400" />,
}

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="py-24 bg-slate-950 text-white relative border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="SECTORS SERVED"
          title="Relevant Industries & Threat Landscapes"
          subtitle="Different commercial sectors face distinct vectors of digital infringement. We calibrate our detection criteria and evidentiary dossiers to match sector-specific risks."
          centered
          theme="dark"
        />

        {/* Client Disclaimer */}
        <div className="mt-8 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-400">
            <strong>Notice on Sector Relevance:</strong> Listed industries describe service domains and typical threat profiles. They do not constitute or imply confirmed client representations or commercial endorsements.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((sector) => (
            <div
              key={sector.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-colors">
                    {INDUSTRY_ICONS[sector.iconName] || <Package className="h-5 w-5 text-sky-400" />}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {sector.name}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {sector.description}
                </p>

                {/* Common Threat Vectors */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                    Prevalent Threat Vectors:
                  </span>
                  {sector.commonRisks.map((risk, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                      <span>{risk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-850 flex items-center justify-between text-[11px] text-slate-400">
                <span>Monitoring Calibration</span>
                <span className="text-sky-400 font-medium">Domain Specific</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
