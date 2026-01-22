'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import TestEnCours from '@/components/TestEnCours'

// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경
const TEST_MODE = true

export default function AboutMauritaniaPage() {
  const { locale } = useI18n()

  const mauritaniaMenuItems = [
    { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/mauritania/history' },
    { label: locale === 'ko' ? '지리' : locale === 'en' ? 'Geography' : locale === 'fr' ? 'Géographie' : 'الجغرافيا', href: '/mauritania/geography' },
    { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/mauritania/economy' },
    { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/mauritania/culture' },
    { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/mauritania/institutions' }
  ]

  const menuTitle = locale === 'ko' ? '모리타니아' : 'Mauritania'
  const pageTitle = locale === 'ko' ? '모리타니아 소개' : 'About Mauritania'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={mauritaniaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/mauritania' }, { label: pageTitle }]}
    >
      {TEST_MODE ? <TestEnCours /> : <>
      {/* 기본 정보 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '국가 개요' : 'Country Overview'}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-lg text-center bg-theme-header/10">
            <div className="text-sm text-gray-500 mb-1">{locale === 'ko' ? '공식 국명' : 'Official Name'}</div>
            <div className="text-sm font-bold text-theme-header">
              {locale === 'ko' ? '모리타니아 이슬람 공화국' : 'Islamic Republic of Mauritania'}
            </div>
          </div>
          <div className="p-4 rounded-lg text-center bg-theme-nav/10">
            <div className="text-sm text-gray-500 mb-1">{locale === 'ko' ? '수도' : 'Capital'}</div>
            <div className="text-lg font-bold text-theme-header">
              {locale === 'ko' ? '누악쇼트' : 'Nouakchott'}
            </div>
          </div>
          <div className="p-4 rounded-lg text-center bg-theme-header/10">
            <div className="text-sm text-gray-500 mb-1">{locale === 'ko' ? '면적' : 'Area'}</div>
            <div className="text-lg font-bold text-theme-header">1,030,700 km²</div>
          </div>
          <div className="p-4 rounded-lg text-center bg-theme-nav/10">
            <div className="text-sm text-gray-500 mb-1">{locale === 'ko' ? '인구' : 'Population'}</div>
            <div className="text-lg font-bold text-theme-header">
              {locale === 'ko' ? '약 480만' : 'approx. 4.8M'}
            </div>
          </div>
        </div>

        <div className="prose max-w-none text-[15px] text-gray-700 space-y-4">
          <p className="leading-relaxed">
            {locale === 'ko'
              ? '모리타니아 이슬람 공화국은 서아프리카에 위치한 국가로, 북쪽으로 서사하라와 알제리, 동쪽과 남쪽으로 말리, 남서쪽으로 세네갈과 국경을 접하고 있습니다. 서쪽으로는 대서양과 면해 있습니다.'
              : 'The Islamic Republic of Mauritania is a country located in West Africa, bordered by Western Sahara and Algeria to the north, Mali to the east and south, and Senegal to the southwest. It faces the Atlantic Ocean to the west.'}
          </p>
          <p className="leading-relaxed">
            {locale === 'ko'
              ? '1960년 11월 28일 프랑스로부터 독립하였으며, 이슬람교를 국교로 하는 공화국입니다. 공용어는 아랍어이며, 프랑스어도 널리 사용됩니다.'
              : 'It gained independence from France on November 28, 1960, and is a republic with Islam as the state religion. The official language is Arabic, and French is also widely used.'}
          </p>
        </div>
      </section>

      {/* 국기 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '국기' : 'National Flag'}
        </h2>
        <div className="flex items-center gap-6">
          <div className="text-6xl">🇲🇷</div>
          <p className="text-[15px] text-gray-700">
            {locale === 'ko'
              ? '초록색 바탕에 금색 초승달과 별이 그려진 국기입니다. 초록색은 이슬람을, 금색은 사하라 사막을 상징합니다.'
              : 'The flag features a green background with a gold crescent and star. Green represents Islam, and gold symbolizes the Sahara Desert.'}
          </p>
        </div>
      </section>

      {/* 추가 정보 */}
      <section className="bg-theme-header/10 border border-theme-header/30 rounded-lg p-6">
        <h2 className="text-lg font-bold text-theme-header mb-4">
          ℹ️ {locale === 'ko' ? '기본 정보' : 'Basic Information'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[15px]">
          <div>
            <span className="text-gray-500">{locale === 'ko' ? '통화' : 'Currency'}:</span>
            <span className="ml-2 text-gray-900">{locale === 'ko' ? '우기야 (MRU)' : 'Ouguiya (MRU)'}</span>
          </div>
          <div>
            <span className="text-gray-500">{locale === 'ko' ? '시간대' : 'Timezone'}:</span>
            <span className="ml-2 text-gray-900">UTC+0</span>
          </div>
          <div>
            <span className="text-gray-500">{locale === 'ko' ? '국제전화' : 'Country Code'}:</span>
            <span className="ml-2 text-gray-900">+222</span>
          </div>
          <div>
            <span className="text-gray-500">{locale === 'ko' ? '독립일' : 'Independence'}:</span>
            <span className="ml-2 text-gray-900">1960.11.28</span>
          </div>
        </div>
      </section>
    </>}

    </SubPageLayout>
  )
}
