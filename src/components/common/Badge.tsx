import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'sky' | 'slate' | 'emerald' | 'amber' | 'rose' | 'outline' | 'placeholder'
  size?: 'sm' | 'md'
  className?: string
  dot?: boolean
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'sky',
  size = 'md',
  className = '',
  dot = false,
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full tracking-wide'

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2',
  }

  const variantStyles = {
    sky: 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
    slate: 'bg-slate-800 text-slate-300 border border-slate-700',
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-300 border border-amber-500/20',
    rose: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
    outline: 'bg-transparent text-slate-400 border border-slate-700/80',
    placeholder:
      'bg-amber-500/10 text-amber-300/90 border border-dashed border-amber-500/30 text-[10px] tracking-wider uppercase',
  }

  const dotColors = {
    sky: 'bg-sky-400',
    slate: 'bg-slate-400',
    emerald: 'bg-emerald-400 animate-pulse',
    amber: 'bg-amber-400',
    rose: 'bg-rose-400',
    outline: 'bg-slate-400',
    placeholder: 'bg-amber-400',
  }

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {dot && <span className={`h-1.5 w-1.5 rounded-full ${dotColors[variant]}`} aria-hidden="true" />}
      <span>{children}</span>
    </span>
  )
}
