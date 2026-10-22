import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-400 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg'

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 shadow-xs',
    md: 'px-5 py-2.5 text-sm gap-2 shadow-xs',
    lg: 'px-6 py-3.5 text-base gap-2.5 shadow-sm',
  }

  const variantStyles = {
    primary:
      'bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold shadow-sky-500/20 active:translate-y-[1px]',
    secondary:
      'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700/80 active:translate-y-[1px]',
    outline:
      'bg-transparent hover:bg-slate-800/40 text-slate-200 border border-slate-700 hover:border-slate-500 active:translate-y-[1px]',
    ghost:
      'bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900 active:translate-y-[1px]',
    dark: 'bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 active:translate-y-[1px]',
  }

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={combinedClasses} role="button">
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    )
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  )
}
