import React, { useState } from 'react'
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Code2,
  Lock,
} from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { Badge } from '../common/Badge'
import { Button } from '../common/Button'
import { COMPANY_INFO, SERVICES } from '../../data/siteData'
import type { ConsultationFormData } from '../../types'

interface FormErrors {
  fullName?: string
  businessEmail?: string
  companyName?: string
  brandWebsite?: string
  serviceInterest?: string
  message?: string
  consentGiven?: string
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    brandWebsite: '',
    serviceInterest: 'Online Brand Monitoring',
    channelsToReview: ['Marketplaces', 'Social Media'],
    urgencyLevel: 'medium',
    message: '',
    consentGiven: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<
    'idle' | 'demo-success' | 'error'
  >('idle')

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Please provide your business email address.'
    } else if (!emailRegex.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please enter a valid email address.'
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Please enter your company or legal entity name.'
    }

    if (!formData.brandWebsite.trim()) {
      newErrors.brandWebsite = 'Please provide your brand name or official website.'
    }

    if (!formData.serviceInterest.trim()) {
      newErrors.serviceInterest = 'Please select a primary service of interest.'
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message =
        'Please provide details regarding the suspected infringement or scope (minimum 15 characters).'
    }

    if (!formData.consentGiven) {
      newErrors.consentGiven =
        'You must acknowledge that this request is submitted on behalf of a rights holder or authorized agent.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // Simulate development submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmissionStatus('demo-success')
      console.log(
        '[BrandShield Vietnam] Consultation request received (Development Simulation Payload):',
        formData
      )
    }, 800)
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-950 via-[#0a1124] to-slate-950 text-white relative border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="CONFIDENTIAL CONSULTATION"
          title="Request an Intellectual Property Review"
          subtitle="Submit your brand details and suspected infringement vectors for an initial scope evaluation. We treat all submissions with strict professional confidentiality."
          centered
          theme="dark"
        />

        {/* Development Environment Backend Notice */}
        <div className="mt-8 max-w-3xl mx-auto p-4 rounded-xl bg-slate-900 border border-sky-500/30 text-xs text-slate-300">
          <div className="flex items-start gap-3">
            <Code2 className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <span className="font-semibold text-white flex items-center gap-2">
                Development Notice: Form Backend Integration Placeholder
                <Badge variant="placeholder" size="sm">
                  Simulated Mode
                </Badge>
              </span>
              <p className="leading-relaxed text-slate-400">
                This consultation form validates input accessibly on the client. To connect this form to a production
                CRM (e.g. HubSpot, Salesforce, Formspree) or secure serverless endpoint, set{' '}
                <code className="text-sky-300 font-mono-code px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800">
                  VITE_CONSULTATION_ENDPOINT
                </code>{' '}
                in your environment variables.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-xl">
            {submissionStatus === 'demo-success' ? (
              <div className="py-10 text-center space-y-4">
                <div className="h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Demonstration Submission Logged
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your test consultation payload
                  for <strong className="text-white">{formData.companyName}</strong> has been logged to the developer
                  console.
                </p>
                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 max-w-md mx-auto text-left font-mono-code space-y-1">
                  <div>Status: Client Validation Passed [HTTP 200 Mock]</div>
                  <div>Service: {formData.serviceInterest}</div>
                  <div>Email: {formData.businessEmail}</div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmissionStatus('idle')
                    setFormData({
                      fullName: '',
                      businessEmail: '',
                      companyName: '',
                      brandWebsite: '',
                      serviceInterest: 'Online Brand Monitoring',
                      channelsToReview: ['Marketplaces', 'Social Media'],
                      urgencyLevel: 'medium',
                      message: '',
                      consentGiven: false,
                    })
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 cursor-pointer font-medium"
                >
                  Submit Another Consultation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      placeholder="e.g. John Doe"
                      className={`w-full rounded-lg bg-slate-950 border px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.fullName
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-800 focus:border-sky-500'
                      }`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1 text-xs text-rose-400">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="businessEmail"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Business Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, businessEmail: e.target.value })
                      }
                      aria-invalid={!!errors.businessEmail}
                      aria-describedby={errors.businessEmail ? 'businessEmail-error' : undefined}
                      placeholder="name@company.com"
                      className={`w-full rounded-lg bg-slate-950 border px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.businessEmail
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-800 focus:border-sky-500'
                      }`}
                    />
                    {errors.businessEmail && (
                      <p id="businessEmail-error" className="mt-1 text-xs text-rose-400">
                        {errors.businessEmail}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company & Website Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Company / Legal Entity <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      aria-invalid={!!errors.companyName}
                      aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                      placeholder="e.g. Acme Brands International"
                      className={`w-full rounded-lg bg-slate-950 border px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.companyName
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-800 focus:border-sky-500'
                      }`}
                    />
                    {errors.companyName && (
                      <p id="companyName-error" className="mt-1 text-xs text-rose-400">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="brandWebsite"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Brand Name or Official URL <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="brandWebsite"
                      name="brandWebsite"
                      value={formData.brandWebsite}
                      onChange={(e) =>
                        setFormData({ ...formData, brandWebsite: e.target.value })
                      }
                      aria-invalid={!!errors.brandWebsite}
                      aria-describedby={errors.brandWebsite ? 'brandWebsite-error' : undefined}
                      placeholder="e.g. brandname.com"
                      className={`w-full rounded-lg bg-slate-950 border px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.brandWebsite
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-slate-800 focus:border-sky-500'
                      }`}
                    />
                    {errors.brandWebsite && (
                      <p id="brandWebsite-error" className="mt-1 text-xs text-rose-400">
                        {errors.brandWebsite}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service of Interest & Urgency Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="serviceInterest"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Service of Interest <span className="text-rose-400">*</span>
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceInterest: e.target.value })
                      }
                      className="w-full rounded-lg bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Comprehensive Multi-Channel Audit">
                        Comprehensive Multi-Channel Risk Audit
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="urgencyLevel"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Urgency / Stage
                    </label>
                    <select
                      id="urgencyLevel"
                      name="urgencyLevel"
                      value={formData.urgencyLevel}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          urgencyLevel: e.target.value as ConsultationFormData['urgencyLevel'],
                        })
                      }
                      className="w-full rounded-lg bg-slate-950 border border-slate-800 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                    >
                      <option value="low">Exploratory / Planning Review</option>
                      <option value="medium">Standard Assessment (1–2 days)</option>
                      <option value="high">Active Infringement Detected</option>
                      <option value="immediate">Urgent Brand Impersonation / Phishing</option>
                    </select>
                  </div>
                </div>

                {/* Message / Details */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Brief Description of Suspected Infringement or Scope{' '}
                    <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    placeholder="Provide relevant trademark details, suspect URLs, marketplace names, or specific brand concerns..."
                    className={`w-full rounded-lg bg-slate-950 border px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-500'
                        : 'border-slate-800 focus:border-sky-500'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-rose-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Rights Holder Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      id="consentGiven"
                      name="consentGiven"
                      checked={formData.consentGiven}
                      onChange={(e) =>
                        setFormData({ ...formData, consentGiven: e.target.checked })
                      }
                      className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-950 text-sky-500 focus:ring-sky-400"
                    />
                    <span className="text-xs text-slate-300 leading-normal">
                      I confirm that this consultation request is made on behalf of the bona fide
                      rights holder or an authorized corporate representative, and I agree to BrandShield
                      Vietnam’s processing of this information for scoping purposes.{' '}
                      <span className="text-rose-400">*</span>
                    </span>
                  </label>
                  {errors.consentGiven && (
                    <p className="mt-1.5 text-xs text-rose-400">{errors.consentGiven}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full justify-center"
                    icon={<Send className="h-4 w-4" />}
                  >
                    {isSubmitting ? 'Validating Request...' : 'Submit Consultation Request'}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Details & Disclaimers (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <span>Official Corporate Contacts</span>
                <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono-code font-bold text-emerald-400 border border-emerald-500/30">
                  Verified Entity
                </span>
              </h4>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-800 text-sky-400 shrink-0 mt-0.5">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase text-[10px] tracking-wider">
                      Business Email
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.contactEmail}`}
                      className="font-mono-code text-cyan-300 hover:text-white transition-colors text-xs font-semibold"
                    >
                      {COMPANY_INFO.contactEmail}
                    </a>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      Confidential triage & intake queue
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-800 text-sky-400 shrink-0 mt-0.5">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase text-[10px] tracking-wider">
                      Telephone
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.contactPhone.replace(/\s+/g, '')}`}
                      className="font-mono-code text-cyan-300 hover:text-white transition-colors text-xs font-semibold"
                    >
                      {COMPANY_INFO.contactPhone}
                    </a>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      Direct line for enterprise accounts (ICT / UTC+7)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-800 text-sky-400 shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase text-[10px] tracking-wider">
                      Operating Headquarters
                    </span>
                    <span className="text-slate-200 leading-relaxed block font-medium">
                      {COMPANY_INFO.headquarters}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-slate-800 text-sky-400 shrink-0 mt-0.5">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block uppercase text-[10px] tracking-wider">
                      Operating Hours
                    </span>
                    <span className="text-slate-300">{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Confidentiality & Security Note */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Lock className="h-4 w-4 text-emerald-400" />
                <span>Confidential Handling Protocol</span>
              </div>
              <p className="leading-relaxed text-slate-400">
                All submitted trademark certificates, suspect listings, and corporate identities are handled under
                strict non-disclosure standards. Preliminary reviews do not obligate your organization to engage ongoing
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
