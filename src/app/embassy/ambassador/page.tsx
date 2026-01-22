'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function AmbassadorPage() {
  const { t, locale } = useI18n()
  const { currentTheme } = useTheme()

  // 대사관 메뉴 구조
  const embassyMenuItems = [
    {
      label: locale === 'ko' ? '대사 인사말' : locale === 'en' ? "Ambassador's Message" : locale === 'fr' ? "Mot de l'ambassadeur" : 'كلمة السفير',
      href: '/embassy/ambassador'
    },
    {
      label: locale === 'ko' ? '연락처' : locale === 'en' ? 'Contact Us' : locale === 'fr' ? 'Nous contacter' : 'اتصل بنا',
      href: '/embassy/contact'
    }
  ]

  const menuTitle = locale === 'ko' ? '대사관' :
                    locale === 'en' ? 'Embassy' :
                    locale === 'fr' ? "l'Ambassade" :
                    'السفارة'

  const pageTitle = locale === 'ko' ? '대사 인사말' :
                    locale === 'en' ? "Ambassador's Message" :
                    locale === 'fr' ? "Mot de l'ambassadeur" :
                    'كلمة السفير'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={embassyMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[
        { label: menuTitle, href: '/embassy' },
        { label: pageTitle }
      ]}
    >
      {/* 대사 프로필 */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div
              className="w-full aspect-[3/4] bg-gray-100 rounded flex items-center justify-center text-8xl"
              style={{ backgroundColor: `${currentTheme.colors.primary}10` }}
            >
              👤
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-theme-header">
              알파 이브라히마 티암
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Alpha Ibrahima THIAM
            </p>
            <div className="space-y-3 text-[15px]">
              <div className="flex">
                <span className="font-medium text-gray-700 w-28">{t('common.position')}:</span>
                <span className="text-gray-600">{currentTheme.name[locale]} {t('ambassador.role')}</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-700 w-28">{t('ambassador.appointmentDate')}:</span>
                <span className="text-gray-600">{t('ambassador.appointed')}</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-700 w-28">{t('ambassador.origin')}:</span>
                <span className="text-gray-600">{t('ambassador.birthplace')}</span>
              </div>
              <div className="flex">
                <span className="font-medium text-gray-700 w-28">{t('ambassador.education')}:</span>
                <span className="text-gray-600">{t('ambassador.university')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 인사말 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {t('ambassador.greeting')}
        </h2>
        <div className="prose prose-lg max-w-none text-[15px] leading-relaxed">
          <p className="text-gray-700 mb-6">
            {t('ambassador.greetingText1').replace('{country}', currentTheme.name[locale])}
          </p>
          <p className="text-gray-700 mb-6">
            {t('ambassador.greetingText2').replace('{country}', currentTheme.name[locale])}
          </p>
          <p className="text-gray-700 mb-6">
            {t('ambassador.greetingText3').replace('{country}', currentTheme.name[locale])}
          </p>
          <p className="text-gray-700">
            {t('ambassador.greetingText4').replace('{country}', currentTheme.name[locale])}
          </p>
        </div>
      </section>

      {/* 주요 경력 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {t('ambassador.career')}
        </h2>
        <div className="space-y-4 text-[15px]">
          <div className="flex gap-4">
            <span className="text-gray-500 w-32 flex-shrink-0">{t('ambassador.career1Period')}</span>
            <span className="text-gray-700">{t('ambassador.career1').replace('{country}', currentTheme.name[locale])}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-500 w-32 flex-shrink-0">{t('ambassador.career2Period')}</span>
            <span className="text-gray-700">{t('ambassador.career2').replace('{country}', currentTheme.name[locale])}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-500 w-32 flex-shrink-0">{t('ambassador.career3Period')}</span>
            <span className="text-gray-700">{t('ambassador.career3').replace('{country}', currentTheme.name[locale])}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-500 w-32 flex-shrink-0">{t('ambassador.career4Period')}</span>
            <span className="text-gray-700">{t('ambassador.career4').replace('{country}', currentTheme.name[locale])}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-500 w-32 flex-shrink-0">{t('ambassador.career5Period')}</span>
            <span className="text-gray-700">{t('ambassador.career5').replace('{country}', currentTheme.name[locale])}</span>
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}
