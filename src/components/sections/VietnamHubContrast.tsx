import React from 'react'
import {
  Building2,
  Users2,
  Bot,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react'
import { COMPANY_INFO } from '../../data/siteData'

export const VietnamHubContrast: React.FC = () => {
  const AGENTS = [
    {
      role: 'Agent 01',
      name: 'Omnichannel Detection Agent',
      desc: '24/7 autonomous monitoring across 1,500+ domains, Vietnamese e-commerce hubs (Shopee VN, TikTok Shop, Lazada), and private social chat groups.',
      stat: '500k+ Signals / Day',
    },
    {
      role: 'Agent 02',
      name: 'AI.ClusterX™ Correlation Agent',
      desc: 'Correlates deceptive merchant bank accounts (VietQR), warehouse origin phone numbers, and shared source code to single criminal syndicates.',
      stat: '85+ Clusters Linked',
    },
    {
      role: 'Agent 03',
      name: 'Duplication & OCR Scanner',
      desc: 'Deep computer vision & OCR detecting blurred logos, altered trademarks, and side-by-side interface clones with 99.1% accuracy.',
      stat: '99.1% Accuracy',
    },
    {
      role: 'Agent 04 (Human-in-the-Loop)',
      name: 'HCMC Managed Takedown Team',
      desc: 'Digital Risk Investigators based in Ho Chi Minh City directly validating evidence packages and coordinating fast-track platform takedowns.',
      stat: '< 2h Response Avg',
    },
  ]

  return (
    <section id="vietnam-hub" className="py-24 bg-white text-slate-900 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with Contrast Theme */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono-code text-blue-700 mb-3">
            <Building2 className="h-3.5 w-3.5" />
            <span>VIETNAM OPERATIONS HUB • HO CHI MINH CITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950">
            Global AI Speed Powered by Deep Local Intelligence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            BrandShield Vietnam Co., Ltd operates our primary Digital Risk Investigation Hub in Ho Chi Minh City. We combine international threat intelligence with deep fluency in regional Vietnamese e-commerce subterfuge (VietQR spoofing, deliberate misspelling on Shopee, disguised live-stream sales) and maintain direct enforcement channels with platform compliance teams and registries.
          </p>
        </div>

        {/* 4 Collaborative Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {AGENTS.map((ag, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all ${
                idx === 3
                  ? 'bg-gradient-to-br from-blue-900 to-slate-950 text-white border-blue-800 shadow-xl'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[10px] font-mono-code font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    idx === 3
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {ag.role}
                </span>
                {idx === 3 ? (
                  <Users2 className="h-4 w-4 text-cyan-400" />
                ) : (
                  <Bot className="h-4 w-4 text-slate-500" />
                )}
              </div>

              <h3 className="text-base font-bold mb-2">
                {ag.name}
              </h3>

              <p
                className={`text-xs leading-relaxed mb-4 ${
                  idx === 3 ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {ag.desc}
              </p>

              <div
                className={`pt-3 border-t font-mono-code text-xs font-bold ${
                  idx === 3
                    ? 'border-white/10 text-cyan-300'
                    : 'border-slate-200 text-blue-700'
                }`}
              >
                {ag.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Entity Verified Credentials Box */}
        <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="font-mono-code text-xs text-slate-300 uppercase tracking-wider">
                Incorporated Legal Entity & Headquarters
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              {COMPANY_INFO.legalName}
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300 font-mono-code">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.headquarters}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-cyan-400" />
                  <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="text-white hover:underline">
                    {COMPANY_INFO.contactEmail}
                  </a>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-cyan-400" />
                  <a href={`tel:${COMPANY_INFO.contactPhone.replace(/\s+/g, '')}`} className="text-white hover:underline">
                    {COMPANY_INFO.contactPhone}
                  </a>
                </span>
                <span>•</span>
                <span>Tax ID / ERC: <strong className="text-cyan-400">{COMPANY_INFO.taxId}</strong></span>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md shadow-blue-500/25 shrink-0 text-center"
          >
            Contact HCMC Office
          </a>
        </div>
      </div>
    </section>
  )
}
