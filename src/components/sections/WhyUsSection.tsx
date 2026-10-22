import React from 'react'
import {
  ShieldCheck,
  MessagesSquare,
  Network,
  SlidersHorizontal,
  Globe2,
  CheckCircle2,
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { DIFFERENTIATORS } from '../../data/siteData'

const DIFF_ICONS: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-sky-400" />,
  MessagesSquare: <MessagesSquare className="h-6 w-6 text-sky-400" />,
  Network: <Network className="h-6 w-6 text-sky-400" />,
  SlidersHorizontal: <SlidersHorizontal className="h-6 w-6 text-sky-400" />,
  Globe2: <Globe2 className="h-6 w-6 text-sky-400" />,
}

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-[#0a1022] via-slate-950 to-slate-950 text-white relative border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OPERATIONAL DIFFERENTIATORS"
          title="Why Work with BrandShield Vietnam"
          subtitle="Our methodology focuses on verifiable technical rigor, adaptable cross-platform execution, and transparent communication grounded in factual case records."
          centered
          theme="dark"
        />

        {/* 5 Practical Differentiators Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((item, idx) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-sky-400">
                    {DIFF_ICONS[item.iconName] || <CheckCircle2 className="h-6 w-6" />}
                  </div>
                  <span className="font-mono-code text-[11px] text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-sky-300/90 mb-3">
                  {item.summary}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-850 flex items-center gap-2 text-[11px] text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-teal-400" />
                <span>Verified Working Principle</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
