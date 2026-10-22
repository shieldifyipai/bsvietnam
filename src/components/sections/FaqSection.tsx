import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { Badge } from '../common/Badge'
import { FAQS } from '../../data/siteData'

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('guarantee-removal')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'General', 'Enforcement Scope', 'Evidence & Process', 'Legal Status']

  const filteredFaqs =
    selectedCategory === 'All'
      ? FAQS
      : FAQS.filter((faq) => faq.category === selectedCategory)

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="py-24 bg-slate-950 text-white relative border-t border-slate-850">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Clear Answers on Process, Scope & Evidence"
          subtitle="Direct, transparent clarifications regarding how our monitoring functions, what evidence is required, and our exact operational boundaries."
          centered
          theme="dark"
        />

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-xs'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="mt-10 space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id
            const headingId = `faq-heading-${faq.id}`
            const contentId = `faq-content-${faq.id}`

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  id={headingId}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-850/50 transition-colors focus-visible:outline-2 focus-visible:outline-sky-400"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono-code text-sky-400 font-semibold">
                      Q:
                    </span>
                    <span className="text-base font-semibold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="slate" size="sm" className="hidden sm:inline-flex">
                      {faq.category}
                    </Badge>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-sky-400' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Quick Question Clarification Callout */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <HelpCircle className="h-5 w-5 text-sky-400 shrink-0" />
            <span>Have a specific platform policy question or high-urgency infringement?</span>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors shrink-0"
          >
            Ask Our Analysts
          </a>
        </div>
      </div>
    </section>
  )
}
