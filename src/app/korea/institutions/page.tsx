'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function KoreaInstitutionsPage() {
  const { locale } = useI18n()

  const koreaMenuItems = [
    { label: locale === 'ko' ? '지리' : locale === 'en' ? 'Geopolitics' : locale === 'fr' ? 'Géopolitique' : 'الجيوسياسة', href: '/korea/geography' },
    { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/korea/history' },
    { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/korea/economy' },
    { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/korea/culture' },
    { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/korea/institutions' }
  ]

  const menuTitle = locale === 'ko' ? '한국 정보' : locale === 'en' ? 'About Korea' : locale === 'fr' ? 'À propos de la Corée' : 'حول كوريا'
  const pageTitle = locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={koreaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/korea' }, { label: pageTitle }]}
    >
      {/* 정치체제 개요 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '정치 체제 개요' : locale === 'en' ? 'Political System Overview' : locale === 'fr' ? 'Aperçu du système politique' : 'نظرة عامة على النظام السياسي'}
        </h2>

        <p className="text-gray-800 text-[15px] leading-relaxed mb-6">
          {locale === 'ko'
            ? '대한민국은 대통령제를 채택한 민주공화국입니다. 1948년 제헌헌법 제정 이후 9차례의 헌법 개정을 거쳐 현재의 제6공화국 헌법(1987년)이 시행되고 있습니다. 국가권력은 입법부(국회), 행정부(대통령·정부), 사법부(법원)의 삼권분립 원칙에 따라 분배됩니다.'
            : locale === 'en'
            ? 'The Republic of Korea is a democratic republic with a presidential system. After the Constitution was established in 1948, it underwent 9 amendments, and the current Sixth Republic Constitution (1987) is in effect. State power is distributed according to the principle of separation of powers among the Legislature (National Assembly), Executive (President and Government), and Judiciary (Courts).'
            : locale === 'fr'
            ? 'La République de Corée est une république démocratique avec un système présidentiel.'
            : 'جمهورية كوريا هي جمهورية ديمقراطية بنظام رئاسي.'}
        </p>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl mb-2">🏛️</div>
            <div className="font-bold text-blue-800">{locale === 'ko' ? '입법부' : 'Legislature'}</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '국회' : 'National Assembly'}</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-3xl mb-2">🏢</div>
            <div className="font-bold text-red-800">{locale === 'ko' ? '행정부' : 'Executive'}</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '대통령·정부' : 'President & Govt'}</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl mb-2">⚖️</div>
            <div className="font-bold text-green-800">{locale === 'ko' ? '사법부' : 'Judiciary'}</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '법원' : 'Courts'}</div>
          </div>
        </div>
      </section>

      {/* 대통령 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '대통령' : locale === 'en' ? 'The President' : locale === 'fr' ? 'Le Président' : 'الرئيس'}
        </h2>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🇰🇷</div>
            <div>
              <h3 className="font-bold text-lg text-blue-800 mb-2">
                {locale === 'ko' ? '윤석열 대통령' : 'President Yoon Suk Yeol'}
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                {locale === 'ko' ? '제20대 대한민국 대통령 (2022년 5월 취임)' : '20th President of the Republic of Korea (inaugurated May 2022)'}
              </p>
              <div className="flex gap-4 text-sm">
                <span className="text-blue-600">🏢 {locale === 'ko' ? '청와대 (용산)' : 'Yongsan Presidential Office'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold mb-2 text-gray-800">{locale === 'ko' ? '대통령의 지위' : 'Presidential Status'}</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• {locale === 'ko' ? '국가원수 및 행정부 수반' : 'Head of State and Government'}</li>
              <li>• {locale === 'ko' ? '국군통수권자' : 'Commander-in-Chief'}</li>
              <li>• {locale === 'ko' ? '외교권 대표' : 'Chief Diplomat'}</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold mb-2 text-gray-800">{locale === 'ko' ? '임기 및 선출' : 'Term & Election'}</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• {locale === 'ko' ? '임기: 5년, 단임제' : 'Term: 5 years, single term'}</li>
              <li>• {locale === 'ko' ? '직접 선거로 선출' : 'Elected by direct vote'}</li>
              <li>• {locale === 'ko' ? '연임 불가' : 'No consecutive terms'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 국회 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '국회' : locale === 'en' ? 'National Assembly' : locale === 'fr' ? 'Assemblée nationale' : 'الجمعية الوطنية'}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 rounded-lg bg-theme-header/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">300</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '의원 정수' : 'Total Seats'}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-theme-nav/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">4{locale === 'ko' ? '년' : 'yrs'}</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '임기' : 'Term'}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-theme-header/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">254</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '지역구' : 'Districts'}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-theme-nav/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">46</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '비례대표' : 'Proportional'}</div>
          </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="font-bold text-lg mb-3 text-amber-800">
            {locale === 'ko' ? '국회의 주요 권한' : 'Main Powers of the National Assembly'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                {locale === 'ko' ? '입법권 (법률 제정·개정)' : 'Legislation (enact/amend laws)'}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                {locale === 'ko' ? '예산 심의·확정권' : 'Budget deliberation & approval'}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                {locale === 'ko' ? '국정감사·조사권' : 'Government audit & inspection'}
              </li>
            </ul>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                {locale === 'ko' ? '탄핵소추권' : 'Impeachment power'}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                {locale === 'ko' ? '조약 비준 동의권' : 'Treaty ratification consent'}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                {locale === 'ko' ? '대통령 선전포고 동의권' : 'War declaration consent'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 사법부 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '사법부' : locale === 'en' ? 'Judiciary' : locale === 'fr' ? 'Pouvoir judiciaire' : 'السلطة القضائية'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 대법원 */}
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⚖️</span>
              <h3 className="font-bold text-purple-800">{locale === 'ko' ? '대법원' : 'Supreme Court'}</h3>
            </div>
            <p className="text-sm text-gray-700">
              {locale === 'ko'
                ? '최고법원으로 대법원장과 대법관으로 구성됩니다. 모든 법률 사건의 최종 심급입니다.'
                : 'The highest court, composed of the Chief Justice and Justices. Final court of appeal for all legal cases.'}
            </p>
          </div>

          {/* 헌법재판소 */}
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📜</span>
              <h3 className="font-bold text-green-800">{locale === 'ko' ? '헌법재판소' : 'Constitutional Court'}</h3>
            </div>
            <p className="text-sm text-gray-700">
              {locale === 'ko'
                ? '9인의 재판관으로 구성되며, 위헌법률심판, 탄핵심판, 헌법소원 등을 담당합니다.'
                : 'Composed of 9 justices, handles constitutional review, impeachment trials, and constitutional complaints.'}
            </p>
          </div>

          {/* 각급 법원 */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏛️</span>
              <h3 className="font-bold text-blue-800">{locale === 'ko' ? '각급 법원' : 'Lower Courts'}</h3>
            </div>
            <p className="text-sm text-gray-700">
              {locale === 'ko'
                ? '고등법원, 지방법원, 가정법원, 행정법원 등 전국에 배치된 법원들이 1·2심을 담당합니다.'
                : 'High Courts, District Courts, Family Courts, Administrative Courts handle first and second instance trials.'}
            </p>
          </div>
        </div>
      </section>

      {/* 기타 헌법기관 */}
      <section className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '기타 헌법기관' : locale === 'en' ? 'Other Constitutional Bodies' : locale === 'fr' ? 'Autres organes constitutionnels' : 'الهيئات الدستورية الأخرى'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🗳️</span>
              <h3 className="font-bold text-gray-800">{locale === 'ko' ? '중앙선거관리위원회' : 'National Election Commission'}</h3>
            </div>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '선거와 국민투표의 공정한 관리를 담당' : 'Manages fair elections and national referendums'}
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📊</span>
              <h3 className="font-bold text-gray-800">{locale === 'ko' ? '감사원' : 'Board of Audit and Inspection'}</h3>
            </div>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '국가 세입·세출 결산 검사 및 행정기관 감찰' : 'Audits national revenue/expenditure and inspects administrative agencies'}
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🏦</span>
              <h3 className="font-bold text-gray-800">{locale === 'ko' ? '한국은행' : 'Bank of Korea'}</h3>
            </div>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '중앙은행으로 통화정책 수립 및 금융안정 담당' : 'Central bank responsible for monetary policy and financial stability'}
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🎖️</span>
              <h3 className="font-bold text-gray-800">{locale === 'ko' ? '국가안전보장회의' : 'National Security Council'}</h3>
            </div>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '대통령 자문기관으로 국가안전보장 정책 수립' : 'Presidential advisory body for national security policy'}
            </p>
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}
