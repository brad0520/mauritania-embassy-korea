'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import type { Organization } from '@/types'

interface FooterProps {
  organization?: Organization
  className?: string
}

export default function Footer({ organization, className }: FooterProps) {
  const { t, locale } = useI18n()
  const { currentTheme } = useTheme()
  
  // 기본값 (다국어 번역 키 사용)
  const currentOrg = organization || {
    name: { 
      ko: t('header.title'),
      en: t('header.title')
    }
  }
  
  // 테마에서 연락처 정보 가져오기
  const themeContact = currentTheme.contact

  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn('text-white mt-12', className)} style={{ backgroundColor: currentTheme.colors.primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 대사관 안내 */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: currentTheme.colors.secondary }}>
              {t('sidebar.info.title')}
            </h4>
            <p className="text-sm mb-2">
              한국 주재 {currentTheme.name[locale]} 대사관
            </p>
            <p className="text-sm text-white/80">
              {themeContact.address[locale] || themeContact.address.ko}
            </p>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: currentTheme.colors.secondary }}>
              {t('footer.contact.title')}
            </h4>
            <div className="text-sm space-y-1">
              <p>Tel: {themeContact.phone}</p>
              <p>Fax: {themeContact.fax}</p>
              <p>Email: {themeContact.email}</p>
            </div>
          </div>

          {/* 업무시간 */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: currentTheme.colors.secondary }}>
              {t('footer.hours.title')}
            </h4>
            <div className="text-sm text-white/80 whitespace-pre-line">
              {themeContact.hours[locale] || themeContact.hours.ko}
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/80">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                href="/privacy" 
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {t('footer.links.privacy')}
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {t('footer.links.terms')}
              </Link>
              <Link 
                href="/sitemap" 
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {t('footer.links.sitemap')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}