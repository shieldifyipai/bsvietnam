import React from 'react'

interface LogoProps {
  className?: string
  variant?: 'light' | 'dark'
  showBadge?: boolean
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light', showBadge = true }) => {
  const isLight = variant === 'light'

  return (
    <a
      href="#"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-95 focus-visible:outline-2 focus-visible:outline-sky-400 rounded-sm ${className}`}
      aria-label="BrandShield Vietnam Co., Ltd. - Home"
    >
      {/* Shield Icon Mark Placeholder */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-slate-900 to-sky-950 p-[1px] shadow-sm ring-1 ring-sky-500/30 group-hover:ring-sky-400/60 transition-all">
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-slate-950/80 backdrop-blur-sm">
          <svg
            className="h-5 w-5 text-sky-400 transition-transform group-hover:scale-105"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" strokeWidth="2" stroke="currentColor" />
          </svg>
        </div>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-bold tracking-tight text-lg transition-colors ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}
          >
            Brand<span className="text-sky-400">Shield</span>
          </span>
          {showBadge && (
            <span className="rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-sky-400 ring-1 ring-sky-500/20 uppercase">
              VN
            </span>
          )}
        </div>
        <span
          className={`text-[11px] font-medium tracking-wider uppercase transition-colors ${
            isLight ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Vietnam Co., Ltd.
        </span>
      </div>
    </a>
  )
}
