import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ShieldAlert,
  ShoppingBag,
  UserX,
  Target,
  Smartphone,
  Globe2,
  CheckCircle2,
} from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { FULL_SOLUTIONS } from '../../data/siteData'

const TAB_ICONS = [ShieldAlert, ShoppingBag, UserX, Target, Smartphone, Globe2]

export const FullSpectrumSolutions: React.FC = () => {
  const { t, language } = useLanguage()
  const [selectedTabId, setSelectedTabId] = useState<string>(FULL_SOLUTIONS[0].id)

  const activeSolution =
    FULL_SOLUTIONS.find((s) => s.id === selectedTabId) || FULL_SOLUTIONS[0]

  return (
    <section id="solutions" className="py-24 bg-[#06080E] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono-code text-blue-400 mb-3">
            <span>FULL SPECTRUM DEFENSE</span>
            <span>•</span>
            <span>6 CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {t(
              'Hệ Sinh Thái Bảo Vệ Toàn Diện Bề Mặt Tấn Công Bên Ngoài',
              'Full-Spectrum External Attack Surface Brand Defense'
            )}
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            {t(
              'Từ web phishing, sàn thương mại điện tử, mạng xã hội đến quảng cáo lừa đảo — một nền tảng quản trị tập trung triệt phá tận gốc mọi rủi ro thương hiệu.',
              'From phishing portals and rogue apps to paid ad scams and marketplace counterfeits — unified AI intelligence and fast-track takedowns.'
            )}
          </p>
        </div>

        {/* 6 Tabs Bar with Motion layoutId */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          <div className="p-1.5 rounded-2xl bg-[#0C101B] border border-white/10 flex items-center gap-1.5">
            {FULL_SOLUTIONS.map((item, idx) => {
              const IconComp = TAB_ICONS[idx] || ShieldAlert
              const isSelected = selectedTabId === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedTabId(item.id)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                    isSelected ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-solution-tab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-lg shadow-sky-500/25"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <IconComp className="h-4 w-4 relative z-10 shrink-0" />
                  <span className="relative z-10">{t(item.titleVi, item.titleEn)}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start rounded-2xl bg-[#0C101B] border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl"
            >
              {/* Left Column: Solution Detail & Key Features (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono-code text-cyan-400 tracking-wider uppercase">
                    {activeSolution.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                    {t(activeSolution.titleVi, activeSolution.titleEn)}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {t(activeSolution.shortDescVi, activeSolution.shortDescEn)}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#06080E] border border-white/5 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono-code">
                    {t('Năng Lực Kỹ Thuật Độc Quyền:', 'Core Technical Competencies:')}
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {(language === 'vi'
                      ? activeSolution.keyFeaturesVi
                      : activeSolution.keyFeaturesEn
                    ).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  <span>{t('Kích hoạt gói bảo vệ này ->', 'Activate This Defense Module ->')}</span>
                </a>
              </div>

              {/* Right Column: 100% Coded Interactive Product UI Mockup (6 cols) */}
              <div className="lg:col-span-6 rounded-xl bg-[#06080E] border border-white/10 p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-mono-code text-[11px] font-bold text-white">
                      {activeSolution.mockupData.title}
                    </span>
                  </div>
                  <span className="font-mono-code text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/30">
                    {activeSolution.mockupData.status}
                  </span>
                </div>

                {/* Threat Items Feed */}
                <div className="space-y-2.5">
                  {activeSolution.mockupData.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-3.5 rounded-xl bg-[#111726] border border-white/5 space-y-1.5 font-mono-code text-xs hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold text-[11px] truncate max-w-[240px]">
                          {item.source}
                        </span>
                        <span className="text-[10px] text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded">
                          {item.threatType}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400">{item.indicator}</div>
                      <div className="pt-1.5 flex items-center justify-between text-[10px] border-t border-white/5">
                        <span className="text-slate-500">Action:</span>
                        <span className="text-emerald-400 font-bold">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] font-mono-code text-slate-400">
                  <span>Audit Trail Hashed (SHA-256)</span>
                  <span className="text-cyan-400">Response &lt; 2h</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
