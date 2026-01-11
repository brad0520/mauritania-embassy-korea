'use client'

import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { useI18n } from '@/i18n/context'
import { cn } from '@/lib/utils'

interface CountrySwitcherProps {
  className?: string
  variant?: 'dropdown' | 'grid' | 'list'
}

// 단일 국가 사이트용 - 국가 전환 기능 없이 현재 국가 정보만 표시
export default function CountrySwitcher({
  className,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variant = 'dropdown'
}: CountrySwitcherProps) {
  const { currentTheme } = useTheme()
  const { locale } = useI18n()

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="text-lg">{currentTheme.flags.country}</span>
      <span className="font-medium text-gray-700">
        {currentTheme.name[locale]}
      </span>
    </div>
  )
}
