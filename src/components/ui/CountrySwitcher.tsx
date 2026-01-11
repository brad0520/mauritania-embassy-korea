'use client'

import React, { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { countryThemes } from '@/config/themes'
import { useI18n } from '@/i18n/context'
import { cn } from '@/lib/utils'

interface CountrySwitcherProps {
  className?: string
  variant?: 'dropdown' | 'grid' | 'list'
}

export default function CountrySwitcher({ 
  className, 
  variant = 'dropdown' 
}: CountrySwitcherProps) {
  const { currentTheme, setCountry, countryId } = useTheme()
  const { locale } = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  const countries = Object.values(countryThemes)

  if (variant === 'dropdown') {
    return (
      <div className={cn('relative', className)}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <span className="text-lg">{currentTheme.flags.country}</span>
          <span className="font-medium text-gray-700">
            {currentTheme.name[locale]}
          </span>
          <svg 
            className={cn('w-4 h-4 transition-transform', isOpen && 'rotate-180')} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <>
            {/* 오버레이 */}
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* 드롭다운 메뉴 */}
            <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
              {countries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => {
                    setCountry(country.id)
                    setIsOpen(false)
                  }}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0',
                    countryId === country.id && 'bg-blue-50 border-blue-200'
                  )}
                >
                  <span className="text-lg">{country.flags.country}</span>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {country.name[locale]}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {country.name.en}
                    </div>
                  </div>
                  <div 
                    className="w-4 h-4 rounded-full border-2"
                    style={{ backgroundColor: country.colors.primary, borderColor: country.colors.secondary }}
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    )
  }

  if (variant === 'grid') {
    return (
      <div className={cn('grid grid-cols-2 md:grid-cols-3 gap-4', className)}>
        {countries.map((country) => (
          <button
            key={country.id}
            onClick={() => setCountry(country.id)}
            className={cn(
              'flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all hover:scale-105',
              countryId === country.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-gray-300'
            )}
          >
            <div className="text-3xl">{country.flags.country}</div>
            <div className="text-sm font-medium text-center">
              {country.name[locale]}
            </div>
            <div 
              className="w-full h-2 rounded-full"
              style={{ 
                background: `linear-gradient(90deg, ${country.colors.primary} 0%, ${country.colors.secondary} 100%)`
              }}
            />
          </button>
        ))}
      </div>
    )
  }

  // list variant
  return (
    <div className={cn('space-y-2', className)}>
      {countries.map((country) => (
        <button
          key={country.id}
          onClick={() => setCountry(country.id)}
          className={cn(
            'w-full flex items-center gap-4 p-3 rounded-lg border transition-colors text-left',
            countryId === country.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 bg-white hover:bg-gray-50'
          )}
        >
          <span className="text-2xl">{country.flags.country}</span>
          <div className="flex-1">
            <div className="font-medium">{country.name[locale]}</div>
            <div className="text-sm text-gray-500">{country.name.en}</div>
          </div>
          <div 
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: country.colors.primary }}
          />
        </button>
      ))}
    </div>
  )
}