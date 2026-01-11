import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Tailwind CSS 클래스를 병합하는 유틸리티 함수
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 슬러그 생성 (URL 친화적 문자열)
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // 특수문자 제거
    .replace(/[\s_-]+/g, '-') // 공백과 언더스코어를 하이픈으로
    .replace(/^-+|-+$/g, '') // 시작/끝 하이픈 제거
}

/**
 * 현재 언어 가져오기
 */
export function getCurrentLocale(): string {
  if (typeof window !== 'undefined') {
    return window.location.pathname.split('/')[1] || 'ko'
  }
  return 'ko'
}

/**
 * 다국어 텍스트에서 현재 언어의 텍스트 가져오기
 */
export function getLocalizedText(
  text: Record<string, string>, 
  locale: string = getCurrentLocale(),
  fallback: string = 'ko'
): string {
  return text[locale] || text[fallback] || Object.values(text)[0] || ''
}

/**
 * 파일 크기를 읽기 쉬운 형태로 변환
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * 날짜를 지역화된 형태로 포맷
 */
export function formatDate(
  date: string | Date, 
  locale: string = 'ko-KR',
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  
  return dateObj.toLocaleDateString(locale, { ...defaultOptions, ...options })
}

/**
 * HTML에서 텍스트만 추출
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '')
}

/**
 * 텍스트 요약 (지정된 길이로 자르기)
 */
export function truncateText(text: string, maxLength: number = 150): string {
  const stripped = stripHtml(text)
  if (stripped.length <= maxLength) return stripped
  
  return stripped.substring(0, maxLength).trim() + '...'
}

/**
 * 색상값 검증 (HEX)
 */
export function isValidHexColor(color: string): boolean {
  return /^#([A-Fa-f0-9]{3}){1,2}$/.test(color)
}

/**
 * 이메일 주소 검증
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * URL 검증
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * 딥 클론 (간단한 객체용)
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * 디바운스 함수
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

/**
 * 스로틀 함수
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0
  
  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      func(...args)
    }
  }
}

/**
 * 랜덤 문자열 생성
 */
export function generateRandomString(length: number = 8): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  
  return result
}