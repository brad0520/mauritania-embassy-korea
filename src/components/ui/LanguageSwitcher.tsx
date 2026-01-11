'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import { Locale, locales, localeNames, localeFlags } from '@/i18n/config'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  className?: string
  variant?: 'header' | 'dropdown' | 'buttons' | 'compact' | 'mofa'
}

export default function LanguageSwitcher({ 
  className, 
  variant = 'header' 
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useI18n()
  const { currentTheme } = useTheme()

  // Compact variant - 유틸바용 작은 크기
  if (variant === 'compact') {
    return (
      <div className={cn('flex items-center gap-1', className)}>
        {locales.map((lang, index) => (
          <React.Fragment key={lang}>
            <button
              onClick={() => setLocale(lang)}
              className={cn(
                'text-sm transition-colors',
                locale === lang
                  ? 'text-gray-900 font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
              )}
            >
              {localeNames[lang]}
            </button>
            {index < locales.length - 1 && (
              <span className="text-gray-300">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    )
  }

  // MOFA variant - 외교부 스타일 드롭다운
  if (variant === 'mofa') {
    return (
      <div className={cn('relative group h-[44px] flex items-center', className)}>
        <button className="flex items-center gap-2 px-4 h-full text-[13px] text-gray-600 hover:text-gray-900">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <span>{localeNames[locale]}</span>
          <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <ul className="hidden group-hover:block absolute right-0 top-full bg-white shadow-lg border border-gray-200 min-w-[120px] py-1 z-50">
          {locales.map((lang) => (
            <li key={lang}>
              <button
                onClick={() => setLocale(lang)}
                className={cn(
                  'w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors',
                  locale === lang ? 'text-theme-nav font-semibold bg-gray-50' : 'text-gray-700'
                )}
              >
                {localeNames[lang]}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (variant === 'header') {
    return (
      <div className={cn('flex bg-white/30 rounded-lg p-1 border border-white/20', className)}>
        {locales.map((lang) => (
          <button
            key={lang}
            onClick={() => setLocale(lang)}
            className={cn(
              'px-2 md:px-3 py-1 text-sm font-medium rounded transition-all duration-200 flex items-center',
              locale === lang
                ? 'bg-white text-gray-800 shadow-sm'
                : 'text-white hover:text-white hover:bg-white/20'
            )}
          >
            {/* 모바일에서는 국기 + 약어, 데스크톱에서는 전체 이름 */}
            <span className="md:hidden">
              {localeFlags[lang]} {lang.toUpperCase()}
            </span>
            <span className="hidden md:inline">
              {localeNames[lang]}
            </span>
          </button>
        ))}
      </div>
    )
  }

  if (variant === 'dropdown') {
    return (
      <div className={cn('relative', className)}>
        <select
          value={locale}
          onChange={(e) => setLocale(e.target.value as Locale)}
          className="bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
          {locales.map((lang) => (
            <option key={lang} value={lang}>
              {localeFlags[lang]} {localeNames[lang]}
            </option>
          ))}
        </select>
      </div>
    )
  }

  // buttons variant
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {locales.map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200',
            locale === lang
              ? 'text-white border-transparent shadow-md'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
          )}
          style={locale === lang ? {
            backgroundColor: currentTheme.colors.primary,
            borderColor: currentTheme.colors.primary
          } : {}}
        >
          <span className="text-lg">{localeFlags[lang]}</span>
          <span className="font-medium">{localeNames[lang]}</span>
        </button>
      ))}
    </div>
  )
}