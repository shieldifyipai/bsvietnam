import React, { useState } from 'react'
import { Search, Sparkles } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'

interface BrandScannerProps {
  onOpenReportModal: (brandName: string) => void
}

const PRESET_BRANDS = [
  { label: 'Digital Banking', brand: 'VietTechBank' },
  { label: 'Pharmaceutical', brand: 'VinPharma' },
  { label: 'Luxury Fashion', brand: 'AuraLuxury' },
  { label: 'Fintech Portal', brand: 'VNPayGate' },
]

export const InteractiveBrandScanner: React.FC<BrandScannerProps> = ({ onOpenReportModal }) => {
  const { t } = useLanguage()
  const [inputBrand, setInputBrand] = useState<string>('VinPharma')

  const brandName = inputBrand.trim() || 'VinPharma'
  const slug = brandName
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '') || 'brand'

  return (
    <section id="brand-scanner" className="py-24 bg-[#06080E] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-code text-cyan-400 mb-3">
            <Search className="h-3.5 w-3.5" />
            <span>INTERACTIVE BRAND SCAN PREVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {t(
              'Mô Phỏng Trực Tiếp: Bề Mặt Rủi Ro Của Thương Hiệu Bạn',
              'Live Simulation: Your Brand’s External Threat Surface'
            )}
          </h2>
          <p className="mt-3 text-slate-400 text-base leading-relaxed">
            {t(
              'Nhập tên thương hiệu của bạn vào ô bên dưới để xem hệ thống AI của chúng tôi phát hiện và bóc tách các thủ đoạn xâm phạm tương ứng như thế nào.',
              'Type your brand or domain name below to see how our AI engine simulates lookalike phishing domains, counterfeit listings, and rogue search ads in real time.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Input & Presets (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0C101B] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6">
            <div>
              <label
                htmlFor="scannerInput"
                className="block text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-2"
              >
                {t('Nhập Tên Thương Hiệu Hoặc Tên Miền:', 'Enter Brand or Domain Name:')}
              </label>
              <div className="relative">
                <input
                  id="scannerInput"
                  type="text"
                  value={inputBrand}
                  onChange={(e) => setInputBrand(e.target.value)}
                  placeholder="e.g. VinPharma, VietTechBank..."
                  className="w-full rounded-xl bg-[#06080E] border-2 border-cyan-500/40 focus:border-cyan-400 px-4 py-3.5 text-base sm:text-lg font-bold text-white placeholder-slate-600 focus:outline-none transition-all pr-12 shadow-inner"
                />
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Sparkles className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Quick Suggestion Preset Chips */}
            <div>
              <span className="text-xs font-mono-code text-slate-400 block mb-2">
                {t('Hoặc chọn ví dụ mẫu nhanh:', 'Or try a simulated sector preset:')}
              </span>
              <div className="flex flex-wrap gap-2">
                {PRESET_BRANDS.map((p) => (
                  <button
                    key={p.brand}
                    type="button"
                    onClick={() => setInputBrand(p.brand)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono-code border transition-colors cursor-pointer ${
                      inputBrand === p.brand
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold'
                        : 'bg-[#111726] text-slate-400 border-white/5 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {p.label} ({p.brand})
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Threat Metrics Counter */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs font-mono-code">
              <div className="p-3 rounded-xl bg-[#06080E] border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-400 block uppercase">Lookalike Domains</span>
                <span className="text-xl font-bold text-red-400">18 Domains</span>
                <span className="text-[9px] text-slate-500 block">Active spoof attempts</span>
              </div>
              <div className="p-3 rounded-xl bg-[#06080E] border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-400 block uppercase">Rogue Ad Campaigns</span>
                <span className="text-xl font-bold text-amber-400">9 Active Ads</span>
                <span className="text-[9px] text-slate-500 block">Ad hijack campaigns</span>
              </div>
              <div className="p-3 rounded-xl bg-[#06080E] border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-400 block uppercase">Suspect E-Com Shops</span>
                <span className="text-xl font-bold text-cyan-400">142 Merchants</span>
                <span className="text-[9px] text-slate-500 block">Shopee/Lazada/TikTok</span>
              </div>
              <div className="p-3 rounded-xl bg-[#06080E] border border-white/5 space-y-1">
                <span className="text-[10px] text-slate-400 block uppercase">AI.ClusterX™ Syndicates</span>
                <span className="text-xl font-bold text-emerald-400">3 Linked Hubs</span>
                <span className="text-[9px] text-slate-500 block">Interconnected rings</span>
              </div>
            </div>

            {/* CTA to get full report */}
            <button
              type="button"
              onClick={() => onOpenReportModal(brandName)}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>
                {t(
                  `Yêu cầu báo cáo quét thật cho "${brandName}" ->`,
                  `Request Real Diagnostic Report for "${brandName}" ->`
                )}
              </span>
            </button>
          </div>

          {/* Right Column: Live Simulated Threat DOM (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0C101B] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="font-mono-code font-bold text-white text-[11px]">
                  SCAN PREVIEW // {brandName.toUpperCase()}
                </span>
              </div>
              <span className="font-mono-code text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/30">
                THREAT TELEMETRY DETECTED
              </span>
            </div>

            {/* 1. Phishing & Lookalike Domain Detected */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono-code uppercase tracking-wider text-slate-400 block">
                {t('Tên Miền Phishing & Giả Mạo Phát Hiện:', 'Lookalike & Phishing Domains Flagged:')}
              </span>

              <div className="p-3.5 rounded-xl bg-[#06080E] border border-red-500/30 space-y-1 font-mono-code text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-[11px] truncate">
                    {slug}-vn-online.shop
                  </span>
                  <span className="text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                    Phishing 9.8
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">
                  {t('Trạng thái: Đang thu thập thông tin thẻ & OTP VietQR', 'Status: Harvesting user credentials & OTP')}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#06080E] border border-amber-500/30 space-y-1 font-mono-code text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-[11px] truncate">
                    {slug}-chinhhang-sale80.click
                  </span>
                  <span className="text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded">
                    Impersonation 9.1
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">
                  {t('Trạng thái: Nhân bản giao diện 96% so với trang gốc', 'Status: Visual clone 96% matching genuine site')}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#06080E] border border-red-500/30 space-y-1 font-mono-code text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-[11px] truncate">
                    login-{slug}-support.com
                  </span>
                  <span className="text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                    Credential Theft 9.9
                  </span>
                </div>
                <div className="text-[10px] text-slate-400">
                  {t('Trạng thái: Mới đăng ký 2 ngày trước tại nước ngoài', 'Status: Registered 2 days ago via offshore registrar')}
                </div>
              </div>
            </div>

            {/* 2. Google Search Sponsored Ad Impersonation */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-mono-code uppercase tracking-wider text-slate-400 block">
                {t('Mô Phỏng Quảng Cáo Tìm Kiếm Độc Hại:', 'Simulated Malicious Search Ad:')}
              </span>
              <div className="p-3.5 rounded-xl bg-[#111726] border border-white/10 space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-400 text-[10px] border border-slate-600 px-1 rounded">
                    Ad / Sponsored
                  </span>
                  <span className="font-mono-code text-slate-300 text-[11px]">
                    https://{slug}-vn-online.shop
                  </span>
                </div>
                <h5 className="text-cyan-400 font-bold text-sm hover:underline cursor-pointer">
                  {brandName} Official Portal - Exclusive 80% Clearance Offer
                </h5>
                <p className="text-[11px] text-slate-400">
                  {t(
                    `Trang phân phối chính hãng ${brandName} tại Việt Nam. Nhanh tay đặt hàng nhận quà tặng đặc biệt...`,
                    `Official authorized distributor for ${brandName} in Vietnam. Place order today to receive exclusive gifts...`
                  )}
                </p>
              </div>
            </div>

            <div className="text-[10px] font-mono-code text-slate-500 text-center">
              100% Coded DOM Simulation &bull; Updated in real time per keystroke
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
