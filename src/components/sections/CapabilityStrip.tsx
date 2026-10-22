import React from 'react'
import {
  Radar,
  FileCheck2,
  ShieldAlert,
  Store,
  FolderArchive,
  CheckCircle,
} from 'lucide-react'
import { CAPABILITIES } from '../../data/siteData'

const ICON_MAP: Record<string, React.ReactNode> = {
  Radar: <Radar className="h-5 w-5 text-sky-400 shrink-0" />,
  FileCheck2: <FileCheck2 className="h-5 w-5 text-sky-400 shrink-0" />,
  ShieldAlert: <ShieldAlert className="h-5 w-5 text-sky-400 shrink-0" />,
  Store: <Store className="h-5 w-5 text-sky-400 shrink-0" />,
  FolderArchive: <FolderArchive className="h-5 w-5 text-sky-400 shrink-0" />,
}

export const CapabilityStrip: React.FC = () => {
  return (
    <section className="relative bg-slate-950 border-y border-slate-800/80 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strip Header / Clarification */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-850 gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-400" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Core Operational Capabilities
            </h3>
          </div>
          <p className="text-[11px] text-slate-400 italic">
            Factual service competencies. References to platforms reflect monitoring coverage and do not imply formal affiliation or partnership.
          </p>
        </div>

        {/* Capability Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-6">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all group"
            >
              <div className="p-2 w-fit rounded-lg bg-slate-800/80 mb-3 group-hover:bg-sky-500/10 transition-colors">
                {ICON_MAP[cap.iconName] || <CheckCircle className="h-5 w-5 text-sky-400" />}
              </div>
              <h4 className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                {cap.title}
              </h4>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
