import React from 'react'
import { Badge } from './Badge'

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  theme?: 'dark' | 'light'
  className?: string
  titleId?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  theme = 'dark',
  className = '',
  titleId,
}) => {
  const isDark = theme === 'dark'

  return (
    <div
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}
    >
      {badge && (
        <div className={`mb-3.5 ${centered ? 'flex justify-center' : ''}`}>
          <Badge variant={isDark ? 'sky' : 'slate'} size="sm" dot>
            {badge}
          </Badge>
        </div>
      )}

      <h2
        id={titleId}
        className={`text-2.5xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
