'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function EmbassyAboutPage() {
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

  const pageTitle = locale === 'ko' ? '대사관 소개' :
                    locale === 'en' ? 'About Embassy' :
                    locale === 'fr' ? "Présentation de l'Ambassade" :
                    'عن السفارة'

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
      {/* 대사관 개요 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {t('about.overview')}
        </h2>
        <div className="prose prose-lg max-w-none text-[15px] leading-relaxed">
          <p className="text-gray-700 mb-6">
            {t('about.description1').replace('{country}', currentTheme.name[locale])}
          </p>
          <p className="text-gray-700 mb-6">
            {t('about.description2').replace('{country}', currentTheme.name[locale])}
          </p>
          <p className="text-gray-700">
            {t('about.description3').replace('{country}', currentTheme.name[locale])}
          </p>
        </div>
      </section>

      {/* 주요 업무 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {t('about.mainFunctions')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-theme-header/10 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-theme-header">
              {t('about.diplomaticAffairs')}
            </h3>
            <ul className="space-y-2 text-gray-700 text-[15px]">
              <li>• {t('about.diplomaticItem1')}</li>
              <li>• {t('about.diplomaticItem2')}</li>
              <li>• {t('about.diplomaticItem3')}</li>
              <li>• {t('about.diplomaticItem4')}</li>
            </ul>
          </div>

          <div className="bg-theme-nav/10 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-theme-header">
              {t('about.consularAffairs')}
            </h3>
            <ul className="space-y-2 text-gray-700 text-[15px]">
              <li>• {t('about.consularItem1')}</li>
              <li>• {t('about.consularItem2')}</li>
              <li>• {t('about.consularItem3')}</li>
              <li>• {t('about.consularItem4')}</li>
            </ul>
          </div>

          <div className="bg-theme-header/10 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-theme-header">
              {t('about.economicAffairs')}
            </h3>
            <ul className="space-y-2 text-gray-700 text-[15px]">
              <li>• {t('about.economicItem1')}</li>
              <li>• {t('about.economicItem2')}</li>
              <li>• {t('about.economicItem3')}</li>
              <li>• {t('about.economicItem4')}</li>
            </ul>
          </div>

          <div className="bg-theme-nav/10 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3 text-theme-header">
              {t('about.culturalAffairs')}
            </h3>
            <ul className="space-y-2 text-gray-700 text-[15px]">
              <li>• {t('about.culturalItem1')}</li>
              <li>• {t('about.culturalItem2')}</li>
              <li>• {t('about.culturalItem3')}</li>
              <li>• {t('about.culturalItem4')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 대사관 역사 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {t('about.history')}
        </h2>
        <div className="space-y-6 text-[15px]">
          <div className="border-l-4 border-theme-header pl-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{t('about.history1Year')}</h3>
            <p className="text-gray-700">{t('about.history1').replace('{country}', currentTheme.name[locale])}</p>
          </div>

          <div className="border-l-4 border-theme-header pl-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{t('about.history2Year')}</h3>
            <p className="text-gray-700">{t('about.history2')}</p>
          </div>

          <div className="border-l-4 border-theme-header pl-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{t('about.history3Year')}</h3>
            <p className="text-gray-700">{t('about.history3')}</p>
          </div>

          <div className="border-l-4 border-theme-header pl-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{t('about.history4Year')}</h3>
            <p className="text-gray-700">{t('about.history4')}</p>
          </div>

          <div className="border-l-4 border-theme-header pl-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{t('about.history5Year')}</h3>
            <p className="text-gray-700">{t('about.history5')}</p>
          </div>

          <div className="border-l-4 border-theme-header pl-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">{t('about.history6Year')}</h3>
            <p className="text-gray-700">{t('about.history6')}</p>
          </div>
        </div>
      </section>

      {/* 시설 안내 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {t('about.facilities')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[15px]">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">{t('about.mainBuilding1F')}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>{t('about.consularSection')}</li>
              <li>{t('about.receptionRoom')}</li>
              <li>{t('about.waitingRoom')}</li>
              <li>{t('about.infoDesk')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">{t('about.mainBuilding2F')}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>{t('about.ambassadorOffice')}</li>
              <li>{t('about.politicalSection')}</li>
              <li>{t('about.economicSection')}</li>
              <li>{t('about.meetingRoom')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">{t('about.annexBuilding')}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>{t('about.culturalCenter')}</li>
              <li>{t('about.exhibitionHall')}</li>
              <li>{t('about.seminarRoom')}</li>
              <li>{t('about.library')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">{t('about.auxiliaryFacilities')}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>{t('about.parking')}</li>
              <li>{t('about.restArea')}</li>
              <li>{t('about.cafeteria')}</li>
              <li>{t('about.giftShop')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 운영 시간 & 위치 정보 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
            {t('about.operatingHours')}
          </h2>
          <div className="space-y-3 text-[15px]">
            <div>
              <span className="text-gray-600 block">{t('about.weekdays')}:</span>
              <span className="font-medium">{t('about.weekdayHours')}</span>
            </div>
            <div>
              <span className="text-gray-600 block">{t('about.lunchTime')}:</span>
              <span className="font-medium">{t('about.lunchHours')}</span>
            </div>
            <div>
              <span className="text-gray-600 block">{t('about.saturday')}:</span>
              <span className="font-medium">{t('about.saturdayHours')}</span>
            </div>
            <div>
              <span className="text-gray-600 block">{t('about.closed')}:</span>
              <span className="font-medium">{t('about.closedDays')}</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
            {t('about.locationInfo')}
          </h2>
          <div className="space-y-3 text-[15px]">
            <div>
              <span className="text-gray-600 block">{t('common.address')}:</span>
              <span className="font-medium">{t('about.address')}</span>
            </div>
            <div>
              <span className="text-gray-600 block">{t('about.subway')}:</span>
              <span className="font-medium">{t('about.subwayInfo')}</span>
            </div>
            <div>
              <span className="text-gray-600 block">{t('about.bus')}:</span>
              <span className="font-medium">{t('about.busInfo')}</span>
            </div>
            <div>
              <span className="text-gray-600 block">{t('about.parkingTitle')}:</span>
              <span className="font-medium">{t('about.parkingInfo')}</span>
            </div>
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}
