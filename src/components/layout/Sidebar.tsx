'use client'

import React from 'react'
import Link from 'next/link'
// import { Card, CardContent } from '@/components/ui/Card' // 현재 사용하지 않음
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'

interface SidebarProps {
  className?: string
}

// 주요 서비스 섹션
function QuickServicesSection() {
  const { t } = useI18n()
  const { currentTheme } = useTheme()
  
  const services = [
    { label: t('sidebar.services.visa'), href: '/consular/visa' },
    { label: t('sidebar.services.passport'), href: '/consular/passport' },
    { label: t('sidebar.services.birth'), href: '/consular/birth-registration' },
    { label: t('sidebar.services.waiver'), href: '/consular/visa-waiver' },
    { label: t('sidebar.services.apostille'), href: '/consular/apostille' },
    { label: t('sidebar.services.confirmation'), href: '/consular/consular-confirmation' }
  ]

  return (
    <div 
      className="p-6 mb-8"
      style={{ 
        backgroundColor: '#f8f9fa',
        borderLeft: `4px solid ${currentTheme.colors.primary}`
      }}
    >
      <h3 
        className="text-lg font-semibold mb-4"
        style={{ color: currentTheme.colors.primary }}
      >
        {t('sidebar.services.title')}
      </h3>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index}>
            <Link
              href={service.href}
              className="text-gray-800 hover:text-primary-600 transition-colors text-sm block py-1"
            >
              {service.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// 대사관 정보 섹션
function EmbassyInfoSection() {
  const { t, locale } = useI18n()
  const { currentTheme } = useTheme()
  
  // 테마에서 연락처 정보 가져오기
  const contactInfo = {
    address: currentTheme.contact.address[locale] || currentTheme.contact.address.ko,
    phone: currentTheme.contact.phone,
    fax: currentTheme.contact.fax,
    email: currentTheme.contact.email,
    hours: currentTheme.contact.hours[locale] || currentTheme.contact.hours.ko
  }

  return (
    <div 
      className="p-6 text-white mb-8 rounded-lg"
      style={{ backgroundColor: currentTheme.colors.primary }}
    >
      <h3 className="text-lg font-semibold mb-4 text-white">
        {t('sidebar.info.title')}
      </h3>
      
      <div className="space-y-4 text-sm">
        <div>
          <span className="font-semibold block mb-1">{t('sidebar.info.address.label')}</span>
          <span className="text-white/90 whitespace-pre-line">
            {contactInfo.address}
          </span>
        </div>
        
        <div>
          <span className="font-semibold block mb-1">{t('sidebar.info.phone.label')}</span>
          <span className="text-white/90">{contactInfo.phone}</span>
        </div>
        
        <div>
          <span className="font-semibold block mb-1">{t('sidebar.info.fax.label')}</span>
          <span className="text-white/90">{contactInfo.fax}</span>
        </div>
        
        <div>
          <span className="font-semibold block mb-1">{t('sidebar.info.email.label')}</span>
          <a 
            href={`mailto:${contactInfo.email}`}
            className="hover:opacity-80 transition-opacity"
            style={{ color: currentTheme.colors.secondary }}
          >
            {contactInfo.email}
          </a>
        </div>
        
        <div>
          <span className="font-semibold block mb-1">{t('sidebar.info.hours.label')}</span>
          <span className="text-white/90 whitespace-pre-line">
            {contactInfo.hours}
          </span>
        </div>
      </div>
    </div>
  )
}

// 유용한 링크 섹션
function UsefulLinksSection() {
  const { t } = useI18n()
  const { currentTheme } = useTheme()
  
  const links = [
    { label: t('sidebar.links.government'), href: 'http://www.mauritania.gov.mr', external: true },
    { label: t('sidebar.links.tourism'), href: 'http://www.tourism.mauritania.gov.mr', external: true },
    { label: t('sidebar.links.mofa'), href: 'http://www.mofa.go.kr', external: true },
    { label: t('sidebar.links.consul'), href: 'http://www.consul.go.kr', external: true },
    { label: t('sidebar.links.safety'), href: 'http://www.0404.go.kr', external: true }
  ]

  return (
    <div 
      className="p-6 mb-8"
      style={{ 
        backgroundColor: '#f8f9fa',
        borderLeft: `4px solid ${currentTheme.colors.primary}`
      }}
    >
      <h3 
        className="text-lg font-semibold mb-4"
        style={{ color: currentTheme.colors.primary }}
      >
        {t('sidebar.links.title')}
      </h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-gray-800 hover:text-primary-600 transition-colors text-sm block py-1"
            >
              {link.label}
              {link.external && (
                <span className="ml-1 text-gray-400">↗</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <aside className={cn('flex flex-col', className)}>
      <QuickServicesSection />
      <EmbassyInfoSection />
      <UsefulLinksSection />
    </aside>
  )
}

// 개별 컴포넌트들도 export (필요시 단독 사용 가능)
export { QuickServicesSection, EmbassyInfoSection, UsefulLinksSection }