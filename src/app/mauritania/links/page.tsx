'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import TestEnCours from '@/components/TestEnCours'

// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경
const TEST_MODE = true

export default function UsefulLinksPage() {
  const { locale } = useI18n()

  const mauritaniaMenuItems = [
    { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/mauritania/history' },
    { label: locale === 'ko' ? '지리' : locale === 'en' ? 'Geography' : locale === 'fr' ? 'Géographie' : 'الجغرافيا', href: '/mauritania/geography' },
    { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/mauritania/economy' },
    { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/mauritania/culture' },
    { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/mauritania/institutions' }
  ]

  const menuTitle = locale === 'ko' ? '모리타니아' : 'Mauritania'
  const pageTitle = locale === 'ko' ? '유용한 링크' : 'Useful Links'

  const links = {
    government: [
      {
        name: locale === 'ko' ? '모리타니아 정부 공식 사이트' : 'Mauritania Government Official',
        url: 'https://www.gouvernement.gov.mr',
        desc: locale === 'ko' ? '정부 공식 포털' : 'Official government portal'
      },
      {
        name: locale === 'ko' ? '외교부' : 'Ministry of Foreign Affairs',
        url: 'https://www.diplomatie.gov.mr',
        desc: locale === 'ko' ? '외교부 공식 사이트' : 'Official MFA website'
      }
    ],
    korea: [
      {
        name: locale === 'ko' ? '대한민국 외교부' : 'MOFA Korea',
        url: 'https://www.mofa.go.kr',
        desc: locale === 'ko' ? '한국 외교부' : 'Ministry of Foreign Affairs, Korea'
      },
      {
        name: locale === 'ko' ? 'KOICA' : 'KOICA',
        url: 'https://www.koica.go.kr',
        desc: locale === 'ko' ? '한국국제협력단' : 'Korea International Cooperation Agency'
      },
      {
        name: locale === 'ko' ? 'KOTRA' : 'KOTRA',
        url: 'https://www.kotra.or.kr',
        desc: locale === 'ko' ? '대한무역투자진흥공사' : 'Korea Trade-Investment Promotion Agency'
      }
    ],
    useful: [
      {
        name: locale === 'ko' ? 'Study in Korea' : 'Study in Korea',
        url: 'https://www.studyinkorea.go.kr',
        desc: locale === 'ko' ? '한국유학 정보' : 'Study in Korea information'
      },
      {
        name: locale === 'ko' ? 'Visit Korea' : 'Visit Korea',
        url: 'https://korean.visitkorea.or.kr',
        desc: locale === 'ko' ? '한국관광공사' : 'Korea Tourism Organization'
      }
    ]
  }

  const LinkSection = ({ title, items }: { title: string; items: typeof links.government }) => (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow group"
          >
            <div>
              <div className="font-medium text-theme-header group-hover:underline">{item.name}</div>
              <div className="text-sm text-gray-500">{item.desc}</div>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-theme-header" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  )

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={mauritaniaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/mauritania' }, { label: pageTitle }]}
    >
      {TEST_MODE ? <TestEnCours /> : <>
      {/* 유용한 링크 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '유용한 링크' : 'Useful Links'}
        </h2>

        <LinkSection
          title={locale === 'ko' ? '🇲🇷 모리타니아 정부' : '🇲🇷 Mauritania Government'}
          items={links.government}
        />

        <LinkSection
          title={locale === 'ko' ? '🇰🇷 대한민국 기관' : '🇰🇷 Korean Organizations'}
          items={links.korea}
        />

        <LinkSection
          title={locale === 'ko' ? '🔗 기타 유용한 사이트' : '🔗 Other Useful Sites'}
          items={links.useful}
        />
      </section>

      {/* 안내 */}
      <section className="bg-theme-header/10 border border-theme-header/30 rounded-lg p-6">
        <h2 className="text-lg font-bold text-theme-header mb-4">
          ℹ️ {locale === 'ko' ? '안내' : 'Notice'}
        </h2>
        <p className="text-gray-700 text-[15px]">
          {locale === 'ko'
            ? '외부 링크는 해당 사이트의 정책에 따라 운영됩니다. 링크된 사이트의 내용에 대한 책임은 해당 사이트에 있습니다.'
            : 'External links are operated according to the policies of each respective site. The responsibility for the content lies with the linked sites.'}
        </p>
      </section>
    </>}

    </SubPageLayout>
  )
}
