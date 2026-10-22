import React, { useState } from 'react'
import {
  TrendingDown,
  Clock,
  ShieldCheck,
  Zap,
  Sliders,
} from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

interface MonthData {
  month: number
  threatExposure: number // percentage
  takedownSpeed: number // hours
  internalTime: number // minutes/week
  recidivismRate: number // percentage
  descriptionVi: string
  descriptionEn: string
}

const TIMELINE_DATA: MonthData[] = [
  {
    month: 1,
    threatExposure: 54,
    takedownSpeed: 18.5,
    internalTime: 180,
    recidivismRate: 68,
    descriptionVi: 'Khởi tạo quét bề mặt số: Phát hiện 142 tên miền và 380 gian hàng TMĐT vi phạm.',
    descriptionEn: 'Initial baseline audit: Discovered 142 typosquatting domains and 380 unauthorized merchant shops.',
  },
  {
    month: 2,
    threatExposure: 42,
    takedownSpeed: 12.0,
    internalTime: 120,
    recidivismRate: 52,
    descriptionVi: 'Kích hoạt AI.ClusterX™: Gom cụm 4 mạng lưới kho hàng vi phạm tại TP.HCM & Hà Nội.',
    descriptionEn: 'AI.ClusterX™ activated: Clustered 4 primary syndicate networks across HCMC & Hanoi.',
  },
  {
    month: 4,
    threatExposure: 26,
    takedownSpeed: 6.4,
    internalTime: 75,
    recidivismRate: 34,
    descriptionVi: 'Gỡ bỏ đồng loạt cấp nhà đăng ký & hạ tài khoản quảng cáo lừa đảo trên Google/Meta.',
    descriptionEn: 'Synchronized registrar suspensions & ad account takedowns on Google/Meta Compliance.',
  },
  {
    month: 6,
    threatExposure: 14,
    takedownSpeed: 4.1,
    internalTime: 50,
    recidivismRate: 20,
    descriptionVi: 'Các mạng lưới tội phạm từ bỏ từ khóa thương hiệu; lưu lượng truy cập giả mạo giảm 75%.',
    descriptionEn: 'Syndicates abandon target brand keywords; fraudulent web traffic drops by 75%.',
  },
  {
    month: 8,
    threatExposure: 6,
    takedownSpeed: 3.2,
    internalTime: 40,
    recidivismRate: 15,
    descriptionVi: 'Trạng thái phòng thủ bền vững: Duy trì dưới 1 giờ/tuần can thiệp từ đội ngũ nội bộ.',
    descriptionEn: 'Steady-state defense achieved: In-house legal workload sustained at under 45 mins/week.',
  },
]

export const RoiTimeline: React.FC = () => {
  const { t } = useLanguage()
  const [selectedMonthIndex, setSelectedMonthIndex] = useState<number>(4) // Default to month 8 (index 4)

  const current = TIMELINE_DATA[selectedMonthIndex]

  return (
    <section id="roi-timeline" className="py-24 bg-[#06080E] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono-code text-emerald-400 mb-3">
            <span>PROVABLE ROI & THREAT DROP</span>
            <span>•</span>
            <span>8-MONTH CAMPAIGN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {t(
              'Lộ Trình Triệt Phá Mối Đe Dọa & Thu Hồi Doanh Thu (8 Tháng)',
              '8-Month Threat Reduction & Revenue Recovery Trajectory'
            )}
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            {t(
              'Kéo thanh trượt thời gian để quan sát sự chuyển biến thực tế của doanh nghiệp từ giai đoạn bị tấn công diện rộng đến khi bề mặt số được kiểm soát hoàn toàn.',
              'Slide through the timeline to witness the measurable transition from widespread brand dilution to secured digital perimeter.'
            )}
          </p>
        </div>

        {/* Timeline Interactive Card */}
        <div className="rounded-2xl bg-[#0C101B] border border-white/10 p-6 sm:p-10 shadow-2xl space-y-10">
          {/* Month Slider Control */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono-code text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <Sliders className="h-4 w-4" />
                <span>
                  {t('CHỌN THỜI ĐIỂM CHIẾN DỊCH: THÁNG ', 'SELECT CAMPAIGN TIMEFRAME: MONTH ')}
                  0{current.month}
                </span>
              </span>
              <span>{t('Giai đoạn 8 tháng', '8-Month Trajectory')}</span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {TIMELINE_DATA.map((item, idx) => (
                <button
                  key={item.month}
                  type="button"
                  onClick={() => setSelectedMonthIndex(idx)}
                  className={`py-3 rounded-xl border text-center transition-all cursor-pointer font-mono-code text-xs ${
                    selectedMonthIndex === idx
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-extrabold border-cyan-400 shadow-lg shadow-sky-500/20'
                      : 'bg-[#111726] border-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="block text-[10px] text-slate-300">STAGE</span>
                  <span className="text-sm font-bold">MONTH 0{item.month}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Metric Dashboard Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Metric 1 */}
            <div className="p-5 rounded-xl bg-[#06080E] border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                <span>Threat Exposure Rate</span>
                <TrendingDown className="h-4 w-4 text-emerald-400" />
              </div>
              <div className="font-mono-code text-3xl font-extrabold text-emerald-400">
                {current.threatExposure}%
              </div>
              <div className="text-[11px] text-slate-400">
                {t('Giảm từ 54% xuống còn ' + current.threatExposure + '%', 'Dropped from 54% to ' + current.threatExposure + '%')}
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-5 rounded-xl bg-[#06080E] border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                <span>Avg Takedown Speed</span>
                <Clock className="h-4 w-4 text-cyan-400" />
              </div>
              <div className="font-mono-code text-3xl font-extrabold text-cyan-400">
                {current.takedownSpeed}h
              </div>
              <div className="text-[11px] text-slate-400">
                {t('Tốc độ gỡ bỏ trung bình', 'Average turnaround duration')}
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-5 rounded-xl bg-[#06080E] border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                <span>Recidivism Rate</span>
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
              </div>
              <div className="font-mono-code text-3xl font-extrabold text-white">
                {current.recidivismRate}%
              </div>
              <div className="text-[11px] text-slate-400">
                {t('Giảm 78% nhờ AI.ClusterX™', '78% lower repeat infringement')}
              </div>
            </div>

            {/* Metric 4 */}
            <div className="p-5 rounded-xl bg-[#06080E] border border-white/5 space-y-1">
              <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                <span>Internal Client Effort</span>
                <Zap className="h-4 w-4 text-amber-400" />
              </div>
              <div className="font-mono-code text-3xl font-extrabold text-amber-300">
                &lt; {current.internalTime}m
              </div>
              <div className="text-[11px] text-slate-400">
                {t('Phút/tuần đội ngũ nội bộ', 'Minutes per week managed')}
              </div>
            </div>
          </div>

          {/* Milestone Description Box */}
          <div className="p-5 rounded-xl bg-[#111726] border border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono-code text-cyan-400 uppercase tracking-wider block">
                {t('Nhật Ký Tác Chiến Tháng 0' + current.month, 'Campaign Milestone Month 0' + current.month)}
              </span>
              <p className="text-sm text-slate-200 font-medium">
                {t(current.descriptionVi, current.descriptionEn)}
              </p>
            </div>
            <a
              href="#contact"
              className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs whitespace-nowrap border border-white/10 shrink-0 text-center"
            >
              {t('Xem Báo Cáo Mẫu Chi Tiết ->', 'View Sample Report ->')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
