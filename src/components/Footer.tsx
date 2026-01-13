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
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-[#0077b5] rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
