import React, { useState } from 'react'
import {
  AlertOctagon,
  Hash,
  ArrowRight,
  Fingerprint,
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { Badge } from '../common/Badge'
import { SAMPLE_CASE_DATA } from '../../data/siteData'

export const CaseWorkflowSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0)
  const currentStage = SAMPLE_CASE_DATA.timeline[activeStageIndex]

  return (
    <section id="case-workflow" className="py-24 bg-[#0a1022] text-white relative border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ILLUSTRATIVE CASE WORKFLOW"
          title="Inside an Evidentiary Review: Step-by-Step"
          subtitle="An illustrative walk-through demonstrating how suspected online infringements are detected, forensically captured, and packaged for platform action."
          centered
          theme="dark"
        />

        {/* Prominent Non-Client Fictional Notice */}
        <div className="mt-8 max-w-3xl mx-auto p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs text-center flex items-center justify-center gap-2.5">
          <AlertOctagon className="h-4 w-4 shrink-0 text-amber-400" />
          <span>
            <strong>NON-CLIENT FICTIONAL EXEMPLAR:</strong> {SAMPLE_CASE_DATA.disclaimer}
          </span>
        </div>

        {/* Case Record Container */}
        <div className="mt-12 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden">
          {/* Top Dossier Header Bar */}
          <div className="px-6 py-4 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Fingerprint className="h-4 w-4" />
              </span>
              <div>
                <span className="text-[10px] uppercase font-mono-code text-slate-400 tracking-wider">
                  Case Ledger Record (Simulated)
                </span>
                <h4 className="text-sm font-mono-code font-bold text-white">
                  {SAMPLE_CASE_DATA.caseReference}
                </h4>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="amber" size="sm" dot>
                {SAMPLE_CASE_DATA.initialRiskTier}
              </Badge>
              <Badge variant="slate" size="sm">
                {SAMPLE_CASE_DATA.detectedChannel}
              </Badge>
            </div>
          </div>

          {/* Suspected Issue Brief */}
          <div className="px-6 py-3.5 bg-slate-900/60 border-b border-slate-800 text-xs text-slate-300 flex items-center gap-2">
            <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
              Matter Subject:
            </span>
            <span className="text-slate-200">{SAMPLE_CASE_DATA.suspectedSubject}</span>
          </div>

          {/* Interactive Stage Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-800 bg-slate-950/40">
            {SAMPLE_CASE_DATA.timeline.map((step, idx) => {
              const isActive = idx === activeStageIndex
              return (
                <button
                  key={step.stage}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`px-4 py-3.5 text-left transition-all border-b-2 text-xs flex flex-col gap-1 cursor-pointer ${
                    isActive
                      ? 'border-sky-400 bg-slate-850/80 text-white'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                  }`}
                >
                  <span className="font-mono-code text-[10px] text-sky-400">
                    STAGE 0{idx + 1}
                  </span>
                  <span className="font-semibold text-xs truncate">{step.stage}</span>
                  <span className="text-[10px] text-slate-400 truncate">{step.timeEstimate}</span>
                </button>
              )
            })}
          </div>

          {/* Stage Detail Body */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Stage Summary & Actions Taken (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono-code text-sky-400 uppercase tracking-wider">
                      Phase 0{activeStageIndex + 1} &bull; {currentStage.timeEstimate}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {currentStage.title}
                    </h3>
                  </div>
                  <Badge
                    variant={
                      currentStage.status === 'Resolved'
                        ? 'emerald'
                        : currentStage.status === 'Transmitted'
                        ? 'sky'
                        : 'amber'
                    }
                    size="sm"
                    dot
                  >
                    {currentStage.status}
                  </Badge>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {currentStage.summary}
                </p>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Investigative Action Taken:
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentStage.actionTaken}
                  </p>
                </div>

                {/* Stage Progression Navigation */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono-code">
                    Step {activeStageIndex + 1} of {SAMPLE_CASE_DATA.timeline.length}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                      disabled={activeStageIndex === 0}
                      className="px-3 py-1.5 rounded bg-slate-800 text-xs font-medium text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() =>
                        setActiveStageIndex((prev) =>
                          Math.min(SAMPLE_CASE_DATA.timeline.length - 1, prev + 1)
                        )
                      }
                      disabled={activeStageIndex === SAMPLE_CASE_DATA.timeline.length - 1}
                      className="px-3 py-1.5 rounded bg-sky-500 text-xs font-semibold text-slate-950 hover:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1"
                    >
                      <span>Next Stage</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Forensic Evidence Box (5 cols) */}
              <div className="lg:col-span-5 rounded-xl bg-slate-950 border border-slate-800 p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <Hash className="h-4 w-4 text-sky-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      Evidentiary Metadata
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-code text-teal-400">VERIFIED</span>
                </div>

                <div className="space-y-3 font-mono-code text-xs">
                  {currentStage.evidenceDetails.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-slate-400 text-[10px] uppercase block tracking-wider">
                        {item.label}
                      </span>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-200 text-[11px] break-all leading-normal">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-800/60 text-[10px] text-slate-400 text-center">
                  Immutable record &bull; Formatted for platform notice submission
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
