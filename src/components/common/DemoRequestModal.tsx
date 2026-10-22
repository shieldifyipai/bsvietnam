import React, { useState } from 'react'
import { Send, CheckCircle2, Lock } from 'lucide-react'
import { useLanguage } from '../../hooks/useLanguage'
import { Modal } from './Modal'

interface DemoRequestModalProps {
  isOpen: boolean
  onClose: () => void
  initialBrand?: string
  mode?: 'demo' | 'scan-report'
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({
  isOpen,
  onClose,
  initialBrand = '',
  mode = 'demo',
}) => {
  const { t } = useLanguage()
  const [fullName, setFullName] = useState('')
  const [businessEmail, setBusinessEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [brandName, setBrandName] = useState(initialBrand)
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [requestId, setRequestId] = useState('2049')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName || !businessEmail) return
    setRequestId(Math.floor(1000 + Math.random() * 9000).toString())
    setIsSubmitted(true)
    console.log('[BrandShield Vietnam] Demo/Report Request Submitted:', {
      fullName,
      businessEmail,
      companyName,
      brandName: brandName || initialBrand,
      phone,
      notes,
      mode,
    })
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFullName('')
    setBusinessEmail('')
    setCompanyName('')
    setBrandName('')
    setPhone('')
    setNotes('')
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={
        mode === 'demo'
          ? t('Đặt Lịch Demo Chuyên Sâu Cùng Chuyên Gia', 'Schedule a Deep-Dive Demo Session')
          : t(`Báo Cáo Phân Tích Mối Đe Dọa: ${initialBrand || 'Doanh Nghiệp'}`, `Threat Diagnostic Report: ${initialBrand || 'Enterprise'}`)
      }
      size="lg"
    >
      {isSubmitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-bold text-white">
            {t('Yêu Cầu Đã Được Tiếp Nhận Thành Công!', 'Request Successfully Received!')}
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            {t(
              `Cảm ơn ${fullName}. Đội ngũ Điều tra viên rủi ro số tại TP. Hồ Chí Minh sẽ liên hệ qua email ${businessEmail} trong vòng 2 giờ làm việc để chuẩn bị dữ liệu báo cáo chuyên sâu.`,
              `Thank you ${fullName}. Our Digital Risk Investigation team in Ho Chi Minh City will reach out via ${businessEmail} within 2 business hours.`
            )}
          </p>
          <div className="p-3 rounded-lg bg-[#06080E] border border-white/10 text-xs font-mono-code text-cyan-400 max-w-sm mx-auto">
            ID: BS-VN-REQ-{requestId} // STATUS: QUEUED
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 font-bold text-xs uppercase cursor-pointer"
          >
            {t('Hoàn Tất & Đóng', 'Close')}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 leading-relaxed">
            {mode === 'demo'
              ? t(
                  'Buổi Demo 1-1 riêng tư: Khám phá trực tiếp cách AI.ClusterX™ bóc tách mạng lưới lừa đảo trên Shopee, TikTok Shop và tên miền .vn.',
                  'Private 1-on-1 Session: Witness live how AI.ClusterX™ dismantles counterfeit networks on Shopee, TikTok Shop, and .vn domains.'
                )
              : t(
                  `Chúng tôi sẽ lập hồ sơ rà soát toàn diện trên 1,500 domain và các sàn TMĐT tại Việt Nam cho thương hiệu ${initialBrand || 'của bạn'}.`,
                  `We will compile an audit across 1,500 domains and Vietnamese marketplaces for your brand ${initialBrand || ''}.`
                )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                {t('Họ và Tên *', 'Full Name *')}
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. John Doe"
                className="w-full rounded-lg bg-[#06080E] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                {t('Email Doanh Nghiệp *', 'Business Email *')}
              </label>
              <input
                type="email"
                required
                value={businessEmail}
                onChange={(e) => setBusinessEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full rounded-lg bg-[#06080E] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                {t('Tên Công Ty / Doanh Nghiệp', 'Company Name')}
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Acme Corporation"
                className="w-full rounded-lg bg-[#06080E] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                {t('Số Điện Thoại Liên Hệ', 'Phone Number')}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+84 932 094 186"
                className="w-full rounded-lg bg-[#06080E] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              {t('Ghi chú hoặc Đường link nghi vấn vi phạm (nếu có):', 'Suspected Infringing URLs or Specific Notes:')}
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. suspect-counterfeit-store.shop, lookalike-domain.com..."
              className="w-full rounded-lg bg-[#06080E] border border-white/10 px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>
                {mode === 'demo'
                  ? t('Xác Nhận Đặt Lịch Demo', 'Confirm Demo Schedule')
                  : t('Gửi Yêu Cầu Nhận Báo Cáo', 'Submit Diagnostic Request')}
              </span>
            </button>
          </div>

          <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
            <Lock className="h-3 w-3 text-emerald-400" />
            <span>Strict professional confidentiality guaranteed under standard mutual NDA terms.</span>
          </p>
        </form>
      )}
    </Modal>
  )
}
