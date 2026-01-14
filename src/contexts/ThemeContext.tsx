'use client'

import React, { createContext, useContext, useEffect } from 'react'
import { CountryTheme, LayoutConfig, getCountryTheme, getLayoutConfig } from '@/config/themes'

// 모리타니아 전용 사이트 - 국가 선택 불필요
const COUNTRY_ID = 'mauritania'

interface ThemeContextType {
  currentTheme: CountryTheme
  countryId: string
  // 레이아웃 설정 추가
  layout: LayoutConfig
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const currentTheme = getCountryTheme(COUNTRY_ID)
  const layout = getLayoutConfig(currentTheme)

  // CSS 커스텀 속성 업데이트
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      root.style.setProperty('--color-primary', currentTheme.colors.primary)
      root.style.setProperty('--color-secondary', currentTheme.colors.secondary)
      root.style.setProperty('--color-accent', currentTheme.colors.accent)
    }
  }, [currentTheme])

  return (
    <ThemeContext.Provider value={{ currentTheme, countryId: COUNTRY_ID, layout }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
