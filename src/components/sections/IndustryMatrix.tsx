import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Landmark,
  Pill,
  Sparkles,
  Store,
  Gamepad2,
  Coins,
  CheckCircle2,
  AlertTriangle,
  Layers,
} from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { INDUSTRY_MATRICES } from '../../data/siteData'

const INDUSTRY_ICONS = [Landmark, Pill, Sparkles, Store, Gamepad2, Coins]

export const IndustryMatrix: React.FC = () => {
  const { t } = useLanguage()
  const [selectedId, setSelectedId] = useState<string>(INDUSTRY_MATRICES[0].id)

  const activeIndustry =
    INDUSTRY_MATRICES.find((item) => item.id === selectedId) || INDUSTRY_MATRICES[0]

  return (
    <section id="industries" className="py-24 bg-[#06080E] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-code text-cyan-400 mb-3">
            <span>SECTOR EXPERTISE</span>
            <span>•</span>
            <span>VIETNAM & GLOBAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {t(
              'Ma Trận Ngành Hàng & Bản Đồ Mối Đe Dọa Đặc Thù',
              'Industry Matrix & Specialized Threat Landscapes'
            )}
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            {t(
              'Mỗi lĩnh vực kinh doanh đối mặt với các thủ đoạn xâm phạm thương hiệu và lừa đảo số khác nhau. Nhấp chọn ngành hàng để xem chi tiết giải pháp đã được kiểm chứng.',
              'Each commercial sector experiences unique vectors of digital infringement and fraud. Select an industry to inspect proven response protocols.'
            )}
          </p>
        </div>

        {/* 6 Industry Selector Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {INDUSTRY_MATRICES.map((ind, idx) => {
            const IconComp = INDUSTRY_ICONS[idx] || Landmark
            const isSelected = selectedId === ind.id

            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => setSelectedId(ind.id)}
                className={`p-4 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2.5 ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#111726] to-[#0C101B] border-cyan-500/60 shadow-lg shadow-cyan-500/15 text-white scale-[1.02]'
                    : 'bg-[#0C101B]/60 border-white/5 hover:border-white/15 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div
                  className={`p-2 rounded-lg transition-colors ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5 text-slate-400'
                  }`}
                >
                  <IconComp className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold leading-tight">
                  {t(ind.nameVi, ind.nameEn)}
                </span>
              </button>
            )
          })}
        </div>

        {/* Dynamic Industry Matrix Detail Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-[#0C101B] border border-white/10 p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono-code text-cyan-400 uppercase tracking-wider block">
                  {t('Ngành Hàng Đang Chọn', 'Active Sector Matrix')}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {t(activeIndustry.nameVi, activeIndustry.nameEn)}
                </h3>
              </div>
              <span className="text-xs font-mono-code text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 w-fit">
                {t('Bảo Vệ Hoạt Động 24/7', '24/7 Operational Coverage')}
              </span>
            </div>

            {/* Matrix Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Row 1: Mối đe dọa phổ biến nhất tại Việt Nam */}
              <div className="p-4 rounded-xl bg-[#06080E] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono-code text-red-400 flex items-center gap-1.5 uppercase font-bold">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <span>
                    {t(
                      'Các Mối Đe Dọa Phổ Biến Nhất Tại Việt Nam',
                      'Prevalent Local Threats in Vietnam'
                    )}
                  </span>
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t(activeIndustry.commonThreatsVi, activeIndustry.commonThreatsEn)}
                </p>
              </div>

              {/* Row 2: Kênh bị tấn công nhiều nhất */}
              <div className="p-4 rounded-xl bg-[#06080E] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono-code text-amber-300 flex items-center gap-1.5 uppercase font-bold">
                  <Layers className="h-3.5 w-3.5" />
                  <span>{t('Kênh Bị Tấn Công Nhiều Nhất', 'Primary Attacked Channels')}</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono-code">
                  {t(activeIndustry.topChannelsVi, activeIndustry.topChannelsEn)}
                </p>
              </div>

              {/* Row 3: Giải pháp BrandShield kích hoạt */}
              <div className="p-4 rounded-xl bg-[#06080E] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono-code text-cyan-400 flex items-center gap-1.5 uppercase font-bold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>{t('Giải Pháp BrandShield Kích Hoạt', 'Activated BrandShield Defense')}</span>
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t(activeIndustry.activatedSolutionVi, activeIndustry.activatedSolutionEn)}
                </p>
              </div>

              {/* Row 4: Kết quả thực tế */}
              <div className="p-4 rounded-xl bg-[#06080E] border border-emerald-500/20 space-y-2">
                <span className="text-[11px] font-mono-code text-emerald-400 flex items-center gap-1.5 uppercase font-bold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>{t('Hiệu Quả Thực Tế Đạt Được', 'Documented Field Outcome')}</span>
                </span>
                <p className="text-xs sm:text-sm text-emerald-300 leading-relaxed font-semibold">
                  {t(activeIndustry.realOutcomeVi, activeIndustry.realOutcomeEn)}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
