import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, motion } from 'motion/react'
import {
  Search,
  Network,
  Copy,
  Zap,
  TrendingDown,
  UserCheck,
  Check,
} from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { PIPELINE_STEPS } from '../../data/siteData'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export const PinnedDefensePipeline: React.FC = () => {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState<number>(0)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion || window.innerWidth < 1024) return

    const el = sectionRef.current
    if (!el) return

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: '+=320%',
      pin: true,
      scrub: 0.6,
      onUpdate: (self) => {
        const step = Math.min(5, Math.floor(self.progress * 6))
        setActiveStep(step)
      },
    })

    return () => {
      trigger.kill()
    }
  }, [reducedMotion])

  return (
    <section
      id="pipeline"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#06080E] text-white py-16 lg:py-0 lg:h-screen lg:flex lg:items-center border-t border-white/10 overflow-hidden"
    >
      {/* Background Subtle Tech Patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8">
        {/* Section Header */}
        <div className="mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-code text-cyan-400 mb-2">
            <span>PIPELINE 01 &rarr; 06</span>
            <span className="text-slate-500">•</span>
            <span>AI.CLUSTERX™ CORE</span>
          </div>
          <h2 className="text-2.5xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t(
              'Từ Phát Hiện Bề Mặt Tấn Công Đến Triệt Phá Tận Gốc',
              'From Attack Surface Discovery to Syndicate Elimination'
            )}
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            {t(
              'Quy trình phòng thủ 6 bước khép kín kết hợp Trí tuệ nhân tạo và Đội ngũ Điều tra viên rủi ro số tại TP. Hồ Chí Minh.',
              'A 6-step defense lifecycle synchronizing automated AI scanning with local Digital Risk Investigators in Ho Chi Minh City.'
            )}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 6 Pipeline Steps (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {PIPELINE_STEPS.map((item, idx) => {
              const isActive = activeStep === idx

              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-[#0C101B] border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                      : 'bg-[#06080E]/60 border-white/5 hover:border-white/15 opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Active Step Progress Indicator Line */}
                  {isActive && (
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500" />
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`font-mono-code text-xs font-bold px-2 py-0.5 rounded ${
                          isActive
                            ? 'bg-cyan-500 text-slate-950 font-extrabold'
                            : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        {item.step}
                      </span>
                      <span className="font-mono-code text-[10px] text-cyan-400 tracking-wider">
                        {item.code}
                      </span>
                    </div>
                    {isActive && (
                      <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>

                  <h3
                    className={`text-sm sm:text-base font-bold mt-2 transition-colors ${
                      isActive ? 'text-white' : 'text-slate-300'
                    }`}
                  >
                    {t(item.titleVi, item.titleEn)}
                  </h3>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.25 }}
                      className="mt-2 text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/10"
                    >
                      {t(item.descVi, item.descEn)}
                    </motion.div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Right Column: 100% Coded Interactive Command Center Mockup (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0C101B] border border-white/10 shadow-2xl p-5 sm:p-6 backdrop-blur-xl min-h-[460px] flex flex-col justify-between relative overflow-hidden">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 font-mono-code text-[11px] text-slate-300 font-semibold">
                    command-center.vnm // STAGE_0{activeStep + 1}
                  </span>
                </div>
                <span className="font-mono-code text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  {PIPELINE_STEPS[activeStep].code}_PHASE
                </span>
              </div>

              {/* Dynamic Step Display with Motion AnimatePresence */}
              <div className="flex-1">
                <AnimatePresence mode="wait">
                  {/* Step 0: DETECT */}
                  {activeStep === 0 && (
                    <motion.div
                      key="step-0"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono-code text-cyan-400 flex items-center gap-1.5">
                          <Search className="h-3.5 w-3.5" />
                          <span>Omnichannel Autonomous Surveillance</span>
                        </span>
                        <span className="text-[10px] font-mono-code text-emerald-400">
                          Active Sensors: 1,520
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono-code">
                        <div className="p-3 rounded-xl bg-[#111726] border border-white/5">
                          <span className="text-[10px] text-slate-400 block">Shopee VN</span>
                          <span className="text-white font-bold text-sm">+4,120</span>
                          <span className="text-[9px] text-emerald-400 block mt-0.5">Scanned Live</span>
                        </div>
                        <div className="p-3 rounded-xl bg-[#111726] border border-white/5">
                          <span className="text-[10px] text-slate-400 block">TikTok Shop</span>
                          <span className="text-white font-bold text-sm">+2,840</span>
                          <span className="text-[9px] text-emerald-400 block mt-0.5">Stream Audits</span>
                        </div>
                        <div className="p-3 rounded-xl bg-[#111726] border border-white/5">
                          <span className="text-[10px] text-slate-400 block">ccTLD (.vn / .com.vn)</span>
                          <span className="text-white font-bold text-sm">+890</span>
                          <span className="text-[9px] text-cyan-400 block mt-0.5">Lookalike Checks</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#06080E] border border-white/5 text-xs space-y-2">
                        <div className="flex items-center justify-between text-slate-400 font-mono-code text-[11px]">
                          <span>Signal Stream Feed:</span>
                          <span className="text-cyan-400 animate-pulse">LIVE RECEPTOR</span>
                        </div>
                        <div className="space-y-1.5 font-mono-code text-[11px] text-slate-300">
                          <div className="truncate text-red-400">
                            [FLAGGED] shopee.vn/product/item_id_492019 &rarr; 85% discount replica
                          </div>
                          <div className="truncate text-amber-300">
                            [SUSPECT] brand-vietnam-chinhhang.shop &rarr; OTP credential prompt
                          </div>
                          <div className="truncate text-slate-400">
                            [SECURE] lazada.vn/official-store &rarr; Authorized reseller verified
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 1: CLUSTER (AI.ClusterX™) */}
                  {activeStep === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono-code text-cyan-400 flex items-center gap-1.5">
                          <Network className="h-3.5 w-3.5" />
                          <span>AI.ClusterX™ Multi-Channel Correlation</span>
                        </span>
                        <span className="text-[10px] font-mono-code text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                          Cluster #VN-208
                        </span>
                      </div>

                      {/* SVG Node Cluster Diagram */}
                      <div className="relative h-44 w-full rounded-xl bg-[#06080E] border border-white/5 p-4 flex items-center justify-center overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 400 160">
                          {/* Connection Lines */}
                          <line x1="200" y1="80" x2="70" y2="35" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                          <line x1="200" y1="80" x2="330" y2="35" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                          <line x1="200" y1="80" x2="60" y2="125" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                          <line x1="200" y1="80" x2="340" y2="125" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />

                          {/* Central Syndicate Node */}
                          <circle cx="200" cy="80" r="26" fill="#111726" stroke="#06B6D4" strokeWidth="2" />
                          <text x="200" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="monospace">
                            SYNDICATE
                          </text>
                          <text x="200" y="89" textAnchor="middle" fill="#06B6D4" fontSize="8" fontFamily="monospace">
                            #VN-208
                          </text>

                          {/* Surrounding Nodes */}
                          <circle cx="70" cy="35" r="14" fill="#111726" stroke="#06B6D4" strokeWidth="1.5" />
                          <text x="70" y="38" textAnchor="middle" fill="#E2E8F0" fontSize="8" fontFamily="monospace">
                            Shopee
                          </text>

                          <circle cx="330" cy="35" r="14" fill="#111726" stroke="#06B6D4" strokeWidth="1.5" />
                          <text x="330" y="38" textAnchor="middle" fill="#E2E8F0" fontSize="8" fontFamily="monospace">
                            TikTok
                          </text>

                          <circle cx="60" cy="125" r="15" fill="#111726" stroke="#EF4444" strokeWidth="1.5" />
                          <text x="60" y="128" textAnchor="middle" fill="#EF4444" fontSize="8" fontFamily="monospace">
                            Phishing
                          </text>

                          <circle cx="340" cy="125" r="15" fill="#111726" stroke="#F59E0B" strokeWidth="1.5" />
                          <text x="340" y="128" textAnchor="middle" fill="#F59E0B" fontSize="8" fontFamily="monospace">
                            Ad Scam
                          </text>
                        </svg>
                      </div>

                      <div className="p-3 rounded-xl bg-[#111726] border border-white/5 text-xs text-slate-300">
                        <span className="font-semibold text-white block mb-1">
                          Correlated Fingerprints:
                        </span>
                        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono-code text-slate-400">
                          <div>• Bank Account: VietQR 09281...</div>
                          <div>• Origin Zip: 700000 (TP.HCM)</div>
                          <div>• Shared Phone: +84 983 XXX...</div>
                          <div>• Total Tied Entities: 42 stores</div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: ANALYZE */}
                  {activeStep === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono-code text-cyan-400 flex items-center gap-1.5">
                          <Copy className="h-3.5 w-3.5" />
                          <span>Website Duplication Detector</span>
                        </span>
                        <span className="text-[10px] font-mono-code text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/30">
                          CRITICAL CLONE 99.1%
                        </span>
                      </div>

                      {/* Side-by-side Visual Comparison Mockup */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-[#06080E] border border-emerald-500/30 space-y-2">
                          <div className="flex items-center justify-between text-[10px] font-mono-code text-emerald-400">
                            <span>GENUINE PORTAL</span>
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </div>
                          <div className="h-20 bg-slate-900 rounded-lg p-2 text-[10px] font-mono-code text-slate-400 space-y-1">
                            <div className="h-2 w-16 bg-emerald-500/30 rounded" />
                            <div className="h-1.5 w-24 bg-slate-700 rounded" />
                            <div className="h-5 bg-slate-800 rounded mt-2 flex items-center px-1 text-[8px] text-slate-300">
                              Official Brand Identity
                            </div>
                          </div>
                          <span className="text-[10px] font-mono-code text-slate-400 block truncate">
                            brand-official.vn
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-[#06080E] border border-red-500/40 space-y-2 relative">
                          <div className="flex items-center justify-between text-[10px] font-mono-code text-red-400">
                            <span>SPOOFED CLONE</span>
                            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                          </div>
                          <div className="h-20 bg-slate-900 rounded-lg p-2 text-[10px] font-mono-code text-slate-400 space-y-1 border border-red-500/30">
                            <div className="h-2 w-16 bg-red-500/40 rounded" />
                            <div className="h-1.5 w-24 bg-slate-700 rounded" />
                            <div className="h-5 bg-red-950/60 rounded mt-2 flex items-center px-1 text-[8px] text-red-300 font-bold">
                              [!] Stolen OTP Form
                            </div>
                          </div>
                          <span className="text-[10px] font-mono-code text-red-400 block truncate">
                            brand-vietnam-auth.shop
                          </span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#111726] border border-white/5 text-xs font-mono-code space-y-1 text-slate-300">
                        <div className="flex justify-between">
                          <span>Visual Similarity Score:</span>
                          <span className="text-red-400 font-bold">99.1% (Match)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>SSL Certificate:</span>
                          <span className="text-amber-300">Free Let's Encrypt (Fake CA)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Credential Harvesting Code:</span>
                          <span className="text-red-400 font-bold">Detected in DOM line 142</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: VALIDATE */}
                  {activeStep === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono-code text-cyan-400 flex items-center gap-1.5">
                          <UserCheck className="h-3.5 w-3.5" />
                          <span>Human-in-the-Loop Investigator Review</span>
                        </span>
                        <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          TP.HCM HUB
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-[#06080E] border border-white/10 space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                          <span className="text-slate-300 font-semibold">
                            Investigator Dossier #BS-VN-2049
                          </span>
                          <span className="text-[11px] font-mono-code text-cyan-300">
                            Analyst: H. Nguyen (IP Lead)
                          </span>
                        </div>

                        <div className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                          <p>
                            &bull; <strong>Verdict:</strong> Confirmed deceptive infringement.
                            Wholesale unauthorized replica listings using client 2024 trademarks.
                          </p>
                          <p>
                            &bull; <strong>Collateral Check:</strong> Verified that merchant does
                            not belong to authorized distributor list (0 false positives).
                          </p>
                        </div>

                        <div className="pt-2 flex items-center justify-between">
                          <span className="text-[10px] font-mono-code text-slate-400">
                            Reviewed at 14:12 ICT
                          </span>
                          <button
                            type="button"
                            className="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
                          >
                            <Check className="h-3.5 w-3.5" />
                            <span>Approved for Immediate Takedown</span>
                          </button>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#111726] border border-white/5 text-xs text-slate-400">
                        Zero automated mistake risk: Human investigators validate every critical
                        takedown action.
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: ENFORCE */}
                  {activeStep === 4 && (
                    <motion.div
                      key="step-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono-code text-cyan-400 flex items-center gap-1.5">
                          <Zap className="h-3.5 w-3.5 text-amber-400" />
                          <span>Omnichannel Managed Takedown Pipeline</span>
                        </span>
                        <span className="text-[10px] font-mono-code text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                          Avg: 2h 18m Speed
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="p-2.5 rounded-lg bg-[#06080E] border border-emerald-500/30 flex items-center justify-between text-xs font-mono-code">
                          <span className="text-slate-300">1. Domain Registrar Abuse Notice</span>
                          <span className="text-emerald-400 font-bold">SUSPENDED (1h 10m)</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#06080E] border border-emerald-500/30 flex items-center justify-between text-xs font-mono-code">
                          <span className="text-slate-300">2. Shopee VN Merchant Gateway</span>
                          <span className="text-emerald-400 font-bold">42 LISTINGS REMOVED</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#06080E] border border-emerald-500/30 flex items-center justify-between text-xs font-mono-code">
                          <span className="text-slate-300">3. Google Safe Browsing Blacklist</span>
                          <span className="text-emerald-400 font-bold">RED SCREEN APPLIED</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#06080E] border border-cyan-500/30 flex items-center justify-between text-xs font-mono-code">
                          <span className="text-slate-300">4. Meta / TikTok Ad Ban Notice</span>
                          <span className="text-cyan-400 font-bold">PROCESSING TICKET</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#111726] border border-white/5 flex items-center justify-between text-xs font-mono-code">
                        <span className="text-slate-400">Total Yearly Enforcements:</span>
                        <span className="text-white font-extrabold text-sm">1,500,000+</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: PROVE */}
                  {activeStep === 5 && (
                    <motion.div
                      key="step-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono-code text-cyan-400 flex items-center gap-1.5">
                          <TrendingDown className="h-3.5 w-3.5 text-emerald-400" />
                          <span>Measurable Threat Drop & ROI Ledger</span>
                        </span>
                        <span className="text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          -86% THREAT REDUCTION
                        </span>
                      </div>

                      {/* ROI Metrics Grid */}
                      <div className="grid grid-cols-2 gap-3 font-mono-code text-xs">
                        <div className="p-3.5 rounded-xl bg-[#06080E] border border-white/5 space-y-1">
                          <span className="text-[10px] text-slate-400 block uppercase">
                            Fake Web Traffic
                          </span>
                          <span className="text-2xl font-extrabold text-emerald-400">-86%</span>
                          <span className="text-[9px] text-slate-400 block">Diverted back to brand</span>
                        </div>
                        <div className="p-3.5 rounded-xl bg-[#06080E] border border-white/5 space-y-1">
                          <span className="text-[10px] text-slate-400 block uppercase">
                            Client In-House Effort
                          </span>
                          <span className="text-2xl font-extrabold text-cyan-400">&lt; 45m</span>
                          <span className="text-[9px] text-slate-400 block">Per week managed time</span>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#111726] border border-white/5 text-xs text-slate-300 space-y-2 font-mono-code">
                        <div className="flex justify-between text-slate-400">
                          <span>Recidivism Rate:</span>
                          <span className="text-emerald-400 font-bold">Decreased by 78%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-1.5 rounded-full w-[88%]" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Footer Telemetry */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                <span>STAGE PROGRESS: {activeStep + 1} / 6</span>
                <span className="text-cyan-400">CLICK TO SELECT STAGE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
