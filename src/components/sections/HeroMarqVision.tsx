import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Search } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface HeroProps {
  onOpenDemoModal: () => void
}

const LIVE_TICKER_ITEMS_VI = [
  'Shopee VN: +4,120 sản phẩm vừa kiểm tra · 2s trước',
  'Tên miền .vn / .com.vn: +890 domain mới rà soát · 4s trước',
  'Meta & TikTok Ads VN: +1,450 quảng cáo vừa phân tích · 6s trước',
  'Lazada & Tiki: +2,180 gian hàng vừa đối chiếu logo · 8s trước',
  'Zalo / Telegram Groups: +630 nhóm đầu tư nghi vấn vừa phát hiện · 10s trước',
  'Google Search Ads: +780 từ khóa thương hiệu được bảo vệ · 12s trước',
]

const LIVE_TICKER_ITEMS_EN = [
  'Shopee VN: +4,120 listings scanned · 2s ago',
  'ccTLDs .vn / .com.vn: +890 lookalike domains analyzed · 4s ago',
  'Meta & TikTok Ads: +1,450 sponsored posts audited · 6s ago',
  'Lazada & Tiki: +2,180 merchant stores verified · 8s ago',
  'Zalo / Telegram Groups: +630 suspicious finance groups flagged · 10s ago',
  'Google Search Ads: +780 brand trademark keywords secured · 12s ago',
]

export const HeroMarqVision: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const { t, language } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const tickerItems = language === 'vi' ? LIVE_TICKER_ITEMS_VI : LIVE_TICKER_ITEMS_EN

  useEffect(() => {
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      // Staggered reveal for headline and items
      gsap.from('.hero-stagger', {
        opacity: 0,
        y: 28,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'all',
      })

      // Radar rotation simulation
      gsap.to('.radar-sweep', {
        rotation: 360,
        transformOrigin: '50% 50%',
        duration: 5,
        repeat: -1,
        ease: 'none',
      })

      // Node pulsing in mock radar
      gsap.to('.radar-node-pulse', {
        scale: 1.4,
        opacity: 0.4,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[95vh] pt-36 pb-16 lg:pt-44 lg:pb-24 bg-[#06080E] text-white overflow-hidden flex flex-col justify-between"
    >
      {/* Dynamic Background: Ambient Aurora / Fluid Mesh Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/20 via-sky-500/15 to-transparent blur-[140px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-cyan-500/15 blur-[130px] rounded-full pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Staggered Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Social Proof G2 Badge */}
            <div className="hero-stagger inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-slate-300 font-medium">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>
                {t(
                  'Xếp hạng #1 trên G2 · 96.7% CSAT · Bảo vệ 24/7 tại Việt Nam & Toàn cầu',
                  '#1 on G2 · 96.7% CSAT · 24/7 Protection in Vietnam & Globally'
                )}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-stagger text-3.5xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              {t('Thương hiệu của bạn.', 'Your Brand.')}{' '}
              <br className="hidden sm:inline" />
              {t('Bề mặt số của bạn.', 'Your Digital Surface.')}{' '}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300">
                {t('Bất khả xâm phạm.', 'Uncompromisingly Protected.')}
              </span>
            </h1>

            {/* Description */}
            <p className="hero-stagger text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {t(
                'BrandShield Vietnam kết hợp trí tuệ nhân tạo AI.ClusterX™ cùng đội ngũ chuyên gia điều tra rủi ro số tại TP.HCM để phát hiện, gom cụm và triệt phá tận gốc web giả mạo (phishing), hàng giả TMĐT, mạo danh lãnh đạo và quảng cáo lừa đảo.',
                'BrandShield Vietnam combines proprietary AI.ClusterX™ threat intelligence with our dedicated Digital Risk Investigation team in Ho Chi Minh City to detect, cluster, and neutralize phishing websites, marketplace counterfeits, executive impersonation, and fraudulent ad campaigns.'
              )}
            </p>

            {/* Action CTAs */}
            <div className="hero-stagger flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:opacity-95 shadow-lg shadow-sky-500/25 transition-all cursor-pointer"
              >
                <span>{t('Yêu cầu Demo chuyên sâu ->', 'Request Deep-Dive Demo ->')}</span>
              </button>
              <a
                href="#brand-scanner"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <Search className="h-4 w-4 text-sky-400" />
                <span>{t('Quét rủi ro thương hiệu miễn phí', 'Free Brand Risk Scan')}</span>
              </a>
            </div>

            {/* Metric Strip */}
            <div className="hero-stagger pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <div className="font-mono-code text-2xl sm:text-3xl font-extrabold text-white">
                  1.5M+
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {t('Lượt gỡ bỏ/năm', 'Yearly Takedowns')}
                </div>
              </div>
              <div>
                <div className="font-mono-code text-2xl sm:text-3xl font-extrabold text-cyan-400">
                  96.7%
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {t('Điểm hài lòng CSAT', 'CSAT Satisfaction')}
                </div>
              </div>
              <div>
                <div className="font-mono-code text-2xl sm:text-3xl font-extrabold text-emerald-400">
                  &lt; 1h/w
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {t('Thời gian can thiệp', 'Client Workload')}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 100% Coded Live Threat Radar Command Center (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-[#0C101B] border border-white/10 shadow-2xl p-5 sm:p-6 backdrop-blur-xl relative overflow-hidden">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                  </span>
                  <span className="font-mono-code text-[11px] font-bold text-white tracking-wider">
                    RADAR.THREAT.VN-LIVE
                  </span>
                </div>
                <span className="font-mono-code text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  AI.CLUSTERX™ ACTIVE
                </span>
              </div>

              {/* Radar Grid Visualizer */}
              <div className="relative h-56 w-full rounded-xl bg-[#06080E] border border-white/5 flex items-center justify-center overflow-hidden mb-4">
                {/* Concentric Radar Rings */}
                <div className="absolute h-48 w-48 rounded-full border border-sky-500/15" />
                <div className="absolute h-32 w-32 rounded-full border border-sky-500/20" />
                <div className="absolute h-16 w-16 rounded-full border border-sky-500/25" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" />

                {/* Rotating Sweep Beam */}
                <div className="radar-sweep absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent clip-path-sweep" />
                </div>

                {/* Simulated Clustered Threat Nodes */}
                <div className="absolute top-10 left-12 flex items-center gap-1.5 z-10">
                  <span className="radar-node-pulse h-3 w-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                  <span className="font-mono-code text-[10px] text-red-400 bg-[#0C101B]/90 px-1.5 py-0.5 rounded border border-red-500/30">
                    Phishing #VN-09 (9.9)
                  </span>
                </div>

                <div className="absolute bottom-12 right-10 flex items-center gap-1.5 z-10">
                  <span className="radar-node-pulse h-3 w-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50" />
                  <span className="font-mono-code text-[10px] text-amber-300 bg-[#0C101B]/90 px-1.5 py-0.5 rounded border border-amber-500/30">
                    Shopee Cluster (42 shops)
                  </span>
                </div>

                <div className="absolute top-20 right-14 flex items-center gap-1.5 z-10">
                  <span className="radar-node-pulse h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <span className="font-mono-code text-[9px] text-cyan-300 bg-[#0C101B]/90 px-1.5 py-0.5 rounded border border-cyan-500/20">
                    DNS blacklisted
                  </span>
                </div>

                {/* Center Core */}
                <div className="h-4 w-4 rounded-full bg-sky-400 ring-4 ring-sky-500/20 flex items-center justify-center z-10">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                </div>
              </div>

              {/* Real-time Triage Item Card */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-[#111726] border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] font-mono-code text-slate-400 block">
                      Target Domain Intercepted
                    </span>
                    <span className="font-mono-code font-bold text-white text-[11px]">
                      brand-vietnam-auth.shop
                    </span>
                  </div>
                  <span className="font-mono-code text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/30">
                    CRITICAL 9.8
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono-code">
                  <div className="p-2.5 rounded-lg bg-[#111726] border border-white/5">
                    <span className="text-[9px] text-slate-400 block uppercase">Cluster ID</span>
                    <span className="text-cyan-400 font-bold">#VN-CLUSTER-208</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#111726] border border-white/5">
                    <span className="text-[9px] text-slate-400 block uppercase">Assigned Hub</span>
                    <span className="text-emerald-400 font-bold">TP.HCM Investigators</span>
                  </div>
                </div>
              </div>

              {/* Watermark Label */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono-code">
                <span>100% Coded Threat DOM</span>
                <span>Latency: 42ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Live Threat Ticker (Running Horizontally) */}
      <div className="mt-14 w-full bg-[#0C101B]/90 border-y border-white/10 py-3 overflow-hidden backdrop-blur-md">
        <div className="flex items-center gap-8 whitespace-nowrap animate-marquee">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs font-mono-code text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
