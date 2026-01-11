export const locales = ['ko', 'en', 'fr', 'ar'] as const
export const defaultLocale = 'ko' as const

export type Locale = (typeof locales)[number]

// RTL (Right-to-Left) 언어 목록
export const rtlLocales: readonly Locale[] = ['ar'] as const

export const localeNames: Record<Locale, string> = {
  ko: '한국어',
  en: 'English',
  fr: 'Français',
  ar: 'العربية'
}

export const localeFlags: Record<Locale, string> = {
  ko: '🇰🇷',
  en: '🇺🇸',
  fr: '🇫🇷',
  ar: '🇲🇷'  // 모리타니아 국기
}

// RTL 언어인지 확인하는 헬퍼 함수
export const isRTL = (locale: Locale): boolean => {
  return rtlLocales.includes(locale)
}
