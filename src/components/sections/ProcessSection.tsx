import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Send,
  Search,
  FileCheck,
  CheckCircle2,
  Info,
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { PROCESS_STEPS } from '../../data/siteData'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const STEP_ICONS = [Send, Search, FileCheck, CheckCircle2]

export const ProcessSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const stepsContainerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      // Progress line fill animation linked to scroll
      if (lineRef.current && stepsContainerRef.current) {
        gsap.fromTo(
          lineRef.current,
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: stepsContainerRef.current,
              start: 'top 70%',
              end: 'bottom 70%',
              scrub: true,
            },
          }
        )
      }

      // Step cards stagger reveal
      gsap.from('.process-step-item', {
        scrollTrigger: {
          trigger: stepsContainerRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        clearProps: 'all',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-24 bg-slate-950 text-white relative border-t border-slate-850 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OPERATIONAL METHODOLOGY"
          title="How We Handle Brand Protection Matters"
          subtitle="A clear, four-phase operational workflow designed to move from initial intake to verified platform action with full evidentiary accountability."
          centered
          theme="dark"
        />

        {/* Process Disclaimer Notice */}
        <div className="mt-8 max-w-2xl mx-auto p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400 flex items-center justify-center gap-2 text-center">
          <Info className="h-4 w-4 text-sky-400 shrink-0" />
          <span>
            <strong>Note on Variability:</strong> Workflows and turnaround milestones may vary depending on target platform guidelines, jurisdictional trademark validity, and case complexity.
          </span>
        </div>

        {/* 4 Steps Timeline */}
        <div ref={stepsContainerRef} className="mt-16 relative max-w-4xl mx-auto">
          {/* Vertical Connecting Track (Desktop/Tablet) */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-slate-800">
            {/* Animated Progress Line */}
            <div
              ref={lineRef}
              className="w-full bg-gradient-to-b from-sky-400 via-sky-500 to-teal-400"
              style={{ height: '0%' }}
            />
          </div>

          <div className="space-y-10 md:space-y-12">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = STEP_ICONS[idx] || CheckCircle2

              return (
                <div
                  key={step.stepNumber}
                  className="process-step-item relative flex flex-col md:flex-row items-start gap-6 group"
                >
                  {/* Step Number Badge & Node */}
                  <div className="flex md:flex-col items-center gap-3 shrink-0">
                    <div className="h-16 w-16 rounded-2xl bg-slate-900 border-2 border-slate-700/80 group-hover:border-sky-500 group-hover:bg-slate-850 flex flex-col items-center justify-center text-center transition-all z-10 shadow-lg shadow-black/40">
                      <span className="font-mono-code text-xs font-bold text-sky-400">
                        {step.stepNumber}
                      </span>
                      <IconComponent className="h-4 w-4 text-slate-300 mt-1 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Step Details Card */}
                  <div className="flex-1 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {step.title}
                      </h3>
                      <span className="text-[11px] font-mono-code text-slate-400 bg-slate-800 px-2.5 py-1 rounded w-fit">
                        Phase {step.stepNumber} of 04
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Key Actions List */}
                    <div className="pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {step.keyActions.map((action, actionIdx) => (
                        <div key={actionIdx} className="flex items-start gap-2 text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{action}</span>
                        </div>
                      ))}
                    </div>

                    {/* Sample Deliverable Tag */}
                    <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-xs">
                      <span className="font-semibold text-slate-400 text-[11px] uppercase tracking-wider">
                        Primary Deliverable:
                      </span>
                      <span className="text-sky-300 font-mono-code text-[11px] bg-sky-950/40 px-2 py-0.5 rounded border border-sky-800/40">
                        {step.sampleDeliverable}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
