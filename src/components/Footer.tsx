'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'

interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  const { locale, isRTL, direction } = useI18n()
  const { currentTheme } = useTheme()

  const themeContact = currentTheme.contact

  return (
    <footer className={cn('mt-0', className)} dir={direction}>
      {/* ========== MOFA 스타일 Footer ========== */}
      <div className="bg-theme-nav text-white">
        <div className="max-w-[1280px] mx-auto px-6 py-8">
          {/* 대사관 정보 그리드 */}
          <div className={cn(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8',
            isRTL && 'direction-rtl'
          )}>
            {/* 대사관명 */}
            <div>
              <h3 className={cn(
                'font-bold text-lg mb-3',
                isRTL && 'font-arabic text-right'
              )}>
                {locale === 'ko' ? '주한 모리타니아 대사관' :
                 locale === 'en' ? 'Embassy of Mauritania' :
                 locale === 'fr' ? "Ambassade de Mauritanie" :
                 'سفارة موريتانيا'}
              </h3>
              <p className={cn(
                'text-white/70 text-sm leading-relaxed',
                isRTL && 'text-right'
              )}>
                {themeContact.address[locale] || themeContact.address.ko}
              </p>
            </div>

            {/* 연락처 */}
            <div>
              <h3 className={cn(
                'font-bold text-lg mb-3',
                isRTL && 'font-arabic text-right'
              )}>
                {locale === 'ko' ? '연락처' :
                 locale === 'en' ? 'Contact' :
                 locale === 'fr' ? 'Contact' :
                 'الاتصال'}
              </h3>
              <ul className={cn(
                'text-white/70 text-sm space-y-1',
                isRTL && 'text-right'
              )}>
                <li className={cn('flex items-center gap-2', isRTL && 'flex-row-reverse justify-end')}>
                  <span>📞</span>
                  <span>{themeContact.phone}</span>
                </li>
                <li className={cn('flex items-center gap-2', isRTL && 'flex-row-reverse justify-end')}>
                  <span>📠</span>
                  <span>{themeContact.fax}</span>
                </li>
                <li className={cn('flex items-center gap-2', isRTL && 'flex-row-reverse justify-end')}>
                  <span>📧</span>
                  <span>{themeContact.email}</span>
                </li>
              </ul>
            </div>

            {/* 업무시간 */}
            <div>
              <h3 className={cn(
                'font-bold text-lg mb-3',
                isRTL && 'font-arabic text-right'
              )}>
                {locale === 'ko' ? '업무시간' :
                 locale === 'en' ? 'Office Hours' :
                 locale === 'fr' ? "Heures d'ouverture" :
                 'ساعات العمل'}
              </h3>
              <p className={cn(
                'text-white/70 text-sm whitespace-pre-line',
                isRTL && 'text-right'
              )}>
                {themeContact.hours[locale] || themeContact.hours.ko}
              </p>
            </div>

            {/* SNS */}
            <div>
              <h3 className={cn(
                'font-bold text-lg mb-3',
                isRTL && 'font-arabic text-right'
              )}>
                {locale === 'ko' ? 'SNS' :
                 locale === 'en' ? 'Social Media' :
                 locale === 'fr' ? 'Réseaux sociaux' :
                 'وسائل التواصل'}
              </h3>
              <div className={cn(
                'flex items-center gap-3',
                isRTL && 'flex-row-reverse justify-end'
              )}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-[#1877f2] rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-[#ff0000] rounded-full transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className="border-t border-white/20 pt-6">
            <div className="text-center">
              {/* 저작권 */}
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} {
                  locale === 'ko' ? '주한 모리타니아 이슬람 공화국 대사관' :
                  locale === 'en' ? 'Embassy of the Islamic Republic of Mauritania in Korea' :
                  locale === 'fr' ? "Ambassade de la République Islamique de Mauritanie en Corée" :
                  'سفارة الجمهورية الإسلامية الموريتانية في كوريا'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
