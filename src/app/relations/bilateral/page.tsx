'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function BilateralRelationsPage() {
  const { locale } = useI18n()

  const relationsMenuItems = [
    { label: locale === 'ko' ? '양자관계' : 'Bilateral Relations', href: '/relations/bilateral' }
  ]

  const menuTitle = locale === 'ko' ? '양국 관계' : 'Bilateral Relations'
  const pageTitle = locale === 'ko' ? '양자관계' : 'Bilateral Relations'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={relationsMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/relations' }, { label: pageTitle }]}
    >
      {/* 외교 관계 수립 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '외교 관계' : 'Diplomatic Relations'}
        </h2>

        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-theme-header/10 rounded-lg">
              <div className="text-3xl font-bold text-theme-header mb-2">1963</div>
              <div className="text-gray-600 text-sm">
                {locale === 'ko' ? '외교관계 수립' : 'Diplomatic Relations Established'}
              </div>
            </div>
            <div className="text-center p-4 bg-theme-nav/10 rounded-lg">
              <div className="text-3xl font-bold text-theme-header mb-2">60+</div>
              <div className="text-gray-600 text-sm">
                {locale === 'ko' ? '우호협력 역사 (년)' : 'Years of Cooperation'}
              </div>
            </div>
          </div>
        </div>

        <div className="prose max-w-none text-[15px] text-gray-700">
          <p className="leading-relaxed">
            {locale === 'ko'
              ? '대한민국과 모리타니아 이슬람 공화국은 1963년 외교관계를 수립한 이래 우호적인 협력 관계를 유지해 오고 있습니다. 양국은 정치, 경제, 문화 등 다양한 분야에서 협력을 강화하고 있습니다.'
              : 'The Republic of Korea and the Islamic Republic of Mauritania have maintained friendly cooperative relations since establishing diplomatic ties in 1963. Both countries are strengthening cooperation in various fields including politics, economy, and culture.'}
          </p>
        </div>
      </section>

      {/* 주요 협력 분야 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '주요 협력 분야' : 'Key Cooperation Areas'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-sm border p-5 text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-bold text-gray-900 mb-2">
              {locale === 'ko' ? '정치·외교' : 'Political'}
            </h3>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '고위급 교류 및 협력' : 'High-level exchanges'}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-5 text-center">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-bold text-gray-900 mb-2">
              {locale === 'ko' ? '경제·통상' : 'Economic'}
            </h3>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '무역 및 투자 협력' : 'Trade & investment'}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-5 text-center">
            <div className="text-3xl mb-3">🎭</div>
            <h3 className="font-bold text-gray-900 mb-2">
              {locale === 'ko' ? '문화·교육' : 'Cultural'}
            </h3>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '문화교류 및 장학사업' : 'Cultural exchange'}
            </p>
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <section className="bg-theme-header/10 border border-theme-header/30 rounded-lg p-6">
        <h2 className="text-lg font-bold text-theme-header mb-4">
          📅 {locale === 'ko' ? '주요 연혁' : 'Key Milestones'}
        </h2>
        <div className="space-y-3 text-[15px]">
          <div className="flex gap-4">
            <span className="font-bold text-theme-header w-20">1963</span>
            <span className="text-gray-700">{locale === 'ko' ? '외교관계 수립' : 'Diplomatic relations established'}</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-theme-header w-20">1987</span>
            <span className="text-gray-700">{locale === 'ko' ? '주모리타니아 대사관 개설' : 'Embassy opened in Mauritania'}</span>
          </div>
          <div className="flex gap-4">
            <span className="font-bold text-theme-header w-20">2020</span>
            <span className="text-gray-700">{locale === 'ko' ? '수교 57주년 기념 행사' : '57th Anniversary celebration'}</span>
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}
