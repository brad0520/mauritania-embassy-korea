'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function MauritaniaOverviewPage() {
  const { locale } = useI18n()

  const mauritaniaMenuItems = [
    { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/mauritania/history' },
    { label: locale === 'ko' ? '지리' : locale === 'en' ? 'Geography' : locale === 'fr' ? 'Géographie' : 'الجغرافيا', href: '/mauritania/geography' },
    { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/mauritania/economy' },
    { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/mauritania/culture' },
    { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/mauritania/institutions' }
  ]

  const menuTitle = locale === 'ko' ? '모리타니아 정보' : locale === 'en' ? 'About Mauritania' : locale === 'fr' ? 'À propos de la Mauritanie' : 'حول موريتانيا'
  const pageTitle = locale === 'ko' ? '국가 개요' : locale === 'en' ? 'Overview' : locale === 'fr' ? 'Aperçu' : 'نظرة عامة'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={mauritaniaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/mauritania' }, { label: pageTitle }]}
    >
      {/* 기본 정보 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">기본 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[15px]">
          <div className="bg-white rounded-lg shadow-sm border p-5">
            <h3 className="font-semibold text-gray-900 mb-2">공식 국명</h3>
            <p className="text-gray-700">모리타니아 이슬람 공화국<br />(Islamic Republic of Mauritania)</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-5">
            <h3 className="font-semibold text-gray-900 mb-2">수도</h3>
            <p className="text-gray-700">누악쇼트 (Nouakchott)</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-5">
            <h3 className="font-semibold text-gray-900 mb-2">면적</h3>
            <p className="text-gray-700">1,030,700 km² (세계 28위)</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-5">
            <h3 className="font-semibold text-gray-900 mb-2">인구</h3>
            <p className="text-gray-700">약 480만명 (2023년)</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-5">
            <h3 className="font-semibold text-gray-900 mb-2">공용어</h3>
            <p className="text-gray-700">아랍어, 프랑스어</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-5">
            <h3 className="font-semibold text-gray-900 mb-2">통화</h3>
            <p className="text-gray-700">우기야 (MRU)</p>
          </div>
        </div>
      </section>

      {/* 지리와 기후 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">지리와 기후</h2>
        <div className="space-y-4 text-[15px]">
          <p className="text-gray-700 leading-relaxed">
            모리타니아는 서아프리카에 위치한 국가로, 북쪽으로는 서사하라와 알제리, 동쪽으로는 말리,
            남쪽으로는 세네갈과 국경을 접하고 있으며, 서쪽으로는 대서양에 면해 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            국토의 대부분이 사하라 사막에 속해 있어 건조한 사막기후를 보이며, 남부 지역은
            사헬 기후대에 속해 약간의 강우량을 보입니다.
          </p>
          <div className="bg-theme-header/10 p-4 rounded-lg mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">주요 지역</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>북부: 사하라 사막 지대</li>
              <li>중부: 사헬 지대</li>
              <li>남부: 세네갈 강 유역</li>
              <li>서부: 대서양 연안</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 역사 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">역사</h2>
        <div className="space-y-6 text-[15px]">
          <div className="border-l-4 border-theme-header pl-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">고대 - 중세</h3>
            <p className="text-gray-700 leading-relaxed">
              고대부터 베르베르족과 아랍족이 거주했으며, 11세기부터 이슬람이 전파되기 시작했습니다.
              알모라비드 왕조의 발원지이기도 합니다.
            </p>
          </div>

          <div className="border-l-4 border-theme-header pl-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">식민지 시대 (1904-1960)</h3>
            <p className="text-gray-700 leading-relaxed">
              1904년부터 프랑스 식민지가 되어 프랑스령 서아프리카의 일부로 편입되었습니다.
            </p>
          </div>

          <div className="border-l-4 border-theme-header pl-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2">독립 이후 (1960-현재)</h3>
            <p className="text-gray-700 leading-relaxed">
              1960년 11월 28일 프랑스로부터 독립하여 모리타니아 이슬람공화국이 되었습니다.
              이후 여러 차례의 정치적 변동을 거쳐 현재에 이르고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 빠른 정보 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">빠른 정보</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">독립일:</span>
              <span className="font-medium">1960년 11월 28일</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">정부 형태:</span>
              <span className="font-medium">이슬람공화국</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">종교:</span>
              <span className="font-medium">이슬람교 (100%)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">시차:</span>
              <span className="font-medium">UTC+0 (한국 -9시간)</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">국기</h3>
          <div className="text-center">
            <div className="w-full h-24 rounded-lg flex items-center justify-center text-5xl mb-3 bg-theme-header">
              🇲🇷
            </div>
            <p className="text-sm text-gray-600">
              초록색은 이슬람을, 금색은 사하라 사막을 상징합니다.
              중앙의 초승달과 별은 이슬람교를 나타냅니다.
            </p>
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}
