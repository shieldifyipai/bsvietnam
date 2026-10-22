import React, { useState } from 'react'
import {
  CheckSquare,
  Square,
  ArrowRight,
} from 'lucide-react'
import { Badge } from '../common/Badge'
import { Button } from '../common/Button'

interface RiskChannel {
  id: string
  label: string
  typicalThreat: string
}

const CHANNELS: RiskChannel[] = [
  { id: 'marketplaces-sea', label: 'Southeast Asian Marketplaces', typicalThreat: 'High counterfeit & grey market volume' },
  { id: 'marketplaces-global', label: 'Global E-Commerce Platforms', typicalThreat: 'Cross-border unauthorized brand reproduction' },
  { id: 'social-commerce', label: 'Social Networks & Live Streams', typicalThreat: 'Unlicensed pop-up shops & private chat commerce' },
  { id: 'domains-web', label: 'Typosquatting & Standalone Sites', typicalThreat: 'Deceptive phishing domains & clone storefronts' },
  { id: 'media-assets', label: 'Digital Media & Image Libraries', typicalThreat: 'Stolen brand photography & catalog lookbooks' },
]

export const RiskEstimatorSection: React.FC = () => {
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    'marketplaces-sea',
    'social-commerce',
  ])
  const [skuRange, setSkuRange] = useState<'1-10' | '11-50' | '50+'>('11-50')

  const toggleChannel = (id: string) => {
    setSelectedChannels((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handlePreFill = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-slate-950 text-white relative border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0c162f] border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Checklist (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <Badge variant="sky" size="sm" dot>
                  Interactive Scope Assessment
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  Assess Your Digital Risk Perimeter
                </h3>
                <p className="text-sm text-slate-300 mt-2">
                  Select the digital distribution environments and portfolio depth where unauthorized
                  activity is suspected to outline an initial review scope.
                </p>
              </div>

              {/* Channels Selector */}
              <div className="space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  Select Target Channels to Monitor:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CHANNELS.map((ch) => {
                    const isSelected = selectedChannels.includes(ch.id)
                    return (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => toggleChannel(ch.id)}
                        className={`p-3 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-sky-950/40 border-sky-500/50 text-white'
                            : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <span className="mt-0.5 text-sky-400">
                          {isSelected ? (
                            <CheckSquare className="h-4 w-4" />
                          ) : (
                            <Square className="h-4 w-4 text-slate-600" />
                          )}
                        </span>
                        <div>
                          <span className="text-xs font-semibold block text-slate-200">
                            {ch.label}
                          </span>
                          <span className="text-[10px] text-slate-400 block mt-0.5">
                            {ch.typicalThreat}
                          </span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* SKU / Priority Assets Range */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  Number of Priority Trademarks / Core SKUs:
                </span>
                <div className="flex gap-3">
                  {(['1-10', '11-50', '50+'] as const).map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setSkuRange(range)}
                      className={`px-4 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                        skuRange === range
                          ? 'bg-sky-500 text-slate-950 border-sky-400 font-semibold'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {range} SKUs / Marks
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Output Summary Card (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-950/90 border border-slate-800 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Recommended Scope Outline
                </span>
                <span className="text-[10px] font-mono-code text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                  {selectedChannels.length} Channels Selected
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px] uppercase block mb-1">
                    Recommended Preliminary Action:
                  </span>
                  <span className="text-slate-200 font-medium">
                    {selectedChannels.length > 2
                      ? 'Comprehensive Multi-Channel Risk Audit & Baseline Takedown Sweep'
                      : 'Targeted High-Risk Marketplace Footprint Scan'}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px] uppercase block mb-1">
                    Primary Evidentiary Requirement:
                  </span>
                  <span className="text-slate-200 font-medium">
                    National or Regional Trademark Registration Certificates & Official Image Assets
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <span className="text-slate-400 text-[10px] uppercase block mb-1">
                    Estimated Scoping Turnaround:
                  </span>
                  <span className="text-emerald-400 font-mono-code">
                    1 to 2 Business Days Upon Document Receipt
                  </span>
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={handlePreFill}
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Proceed to Consultation Request
              </Button>

              <p className="text-[10px] text-slate-400 text-center">
                Scope estimates are advisory for planning purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
