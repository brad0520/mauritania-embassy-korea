'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Locale, defaultLocale, locales, isRTL } from './config'
import { messages, MessageKey } from './messages'

// 텍스트 방향 타입
export type Direction = 'ltr' | 'rtl'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: MessageKey) => string
  direction: Direction
  isRTL: boolean
}

const I18nContext = createContext<I18nContextType | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [direction, setDirection] = useState<Direction>('ltr')

  // 브라우저 언어 설정 감지 및 초기 방향 설정
  useEffect(() => {
    const savedLocale = localStorage.getItem('preferred-locale') as Locale
    const browserLocale = navigator.language.split('-')[0] as Locale

    let initialLocale: Locale = defaultLocale

    if (savedLocale && locales.includes(savedLocale)) {
      initialLocale = savedLocale
    } else if (locales.includes(browserLocale)) {
      initialLocale = browserLocale
    }

    setLocaleState(initialLocale)
    updateDirection(initialLocale)
  }, [])

  // 방향 업데이트 함수
  const updateDirection = (newLocale: Locale) => {
    const newDirection: Direction = isRTL(newLocale) ? 'rtl' : 'ltr'
    setDirection(newDirection)

    // HTML 문서의 dir 속성 업데이트
    if (typeof document !== 'undefined') {
      document.documentElement.dir = newDirection
      document.documentElement.lang = newLocale
    }
  }

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('preferred-locale', newLocale)

    // 방향 업데이트
    updateDirection(newLocale)

    // URL 업데이트 (선택사항)
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      url.searchParams.set('lang', newLocale)
      window.history.replaceState({}, '', url.toString())
    }
  }

  const t = (key: MessageKey): string => {
    return messages[locale][key] || messages[defaultLocale][key] || key
  }

  return (
    <I18nContext.Provider value={{
      locale,
      setLocale,
      t,
      direction,
      isRTL: direction === 'rtl'
    }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}