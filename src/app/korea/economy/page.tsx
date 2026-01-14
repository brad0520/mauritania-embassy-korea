'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function KoreaEconomyPage() {
  const { locale } = useI18n()

  const koreaMenuItems = [
    { label: locale === 'ko' ? '지리' : locale === 'en' ? 'Geopolitics' : locale === 'fr' ? 'Géopolitique' : 'الجيوسياسة', href: '/korea/geography' },
    { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/korea/history' },
    { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/korea/economy' },
    { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/korea/culture' },
    { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/korea/institutions' }
  ]

  const menuTitle = locale === 'ko' ? '한국 정보' : locale === 'en' ? 'About Korea' : locale === 'fr' ? 'À propos de la Corée' : 'حول كوريا'
  const pageTitle = locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={koreaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/korea' }, { label: pageTitle }]}
    >
      {/* 경제 개요 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '경제 개요' : locale === 'en' ? 'Economic Overview' : locale === 'fr' ? 'Aperçu économique' : 'نظرة اقتصادية عامة'}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-4 rounded-lg bg-theme-header/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">$1.67T</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? 'GDP (2024)' : 'GDP (2024)'}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-theme-nav/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">{locale === 'ko' ? '세계 13위' : '13th'}</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '경제 규모' : locale === 'en' ? 'World Ranking' : 'Rang mondial'}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-theme-header/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">$32,000</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '1인당 GDP' : 'GDP per capita'}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-theme-nav/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">{locale === 'ko' ? '세계 6위' : '6th'}</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '수출 규모' : locale === 'en' ? 'Export Volume' : 'Volume d\'exportation'}</div>
          </div>
        </div>

        <p className="text-gray-800 text-[15px] leading-relaxed">
          {locale === 'ko'
            ? '대한민국은 세계에서 가장 역동적인 경제 중 하나입니다. 1960년대 세계 최빈국 중 하나에서 2024년 기준 세계 13위 경제대국으로 성장한 "한강의 기적"은 전 세계적인 경제 발전 모델이 되었습니다.'
            : locale === 'en'
            ? 'South Korea is one of the most dynamic economies in the world. The "Miracle on the Han River," from one of the poorest countries in the 1960s to the 13th largest economy as of 2024, has become a global model for economic development.'
            : locale === 'fr'
            ? 'La Corée du Sud est l\'une des économies les plus dynamiques au monde. Le "Miracle sur le fleuve Han" est devenu un modèle mondial de développement économique.'
            : 'كوريا الجنوبية هي واحدة من أكثر الاقتصادات ديناميكية في العالم.'}
        </p>
      </section>

      {/* 주요 산업 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '주요 산업' : locale === 'en' ? 'Major Industries' : locale === 'fr' ? 'Industries principales' : 'الصناعات الرئيسية'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 반도체 */}
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">💾</span>
              <h3 className="font-bold text-lg text-blue-800">
                {locale === 'ko' ? '반도체' : 'Semiconductors'}
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              {locale === 'ko'
                ? '세계 메모리 반도체 시장의 60% 이상을 점유하고 있으며, 삼성전자와 SK하이닉스가 글로벌 1, 2위 기업입니다.'
                : 'Holding over 60% of the global memory semiconductor market, with Samsung Electronics and SK Hynix ranked 1st and 2nd globally.'}
            </p>
            <div className="text-xs text-blue-600 font-medium">
              {locale === 'ko' ? '🏆 세계 1위' : '🏆 World #1'}
            </div>
          </div>

          {/* 자동차 */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🚗</span>
              <h3 className="font-bold text-lg text-green-800">
                {locale === 'ko' ? '자동차' : 'Automobiles'}
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              {locale === 'ko'
                ? '현대자동차그룹은 세계 3대 자동차 제조사이며, 전기차와 수소차 분야에서 선도적 위치를 차지하고 있습니다.'
                : 'Hyundai Motor Group is one of the top 3 automakers globally, leading in electric and hydrogen vehicles.'}
            </p>
            <div className="text-xs text-green-600 font-medium">
              {locale === 'ko' ? '🏆 세계 3위' : '🏆 World #3'}
            </div>
          </div>

          {/* 조선 */}
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🚢</span>
              <h3 className="font-bold text-lg text-purple-800">
                {locale === 'ko' ? '조선' : 'Shipbuilding'}
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              {locale === 'ko'
                ? 'LNG 운반선, 컨테이너선 등 고부가가치 선박 건조에서 세계 1위를 유지하고 있습니다.'
                : 'Maintaining world #1 position in high-value vessel construction including LNG carriers and container ships.'}
            </p>
            <div className="text-xs text-purple-600 font-medium">
              {locale === 'ko' ? '🏆 세계 1위' : '🏆 World #1'}
            </div>
          </div>

          {/* 철강 */}
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🏭</span>
              <h3 className="font-bold text-lg text-orange-800">
                {locale === 'ko' ? '철강' : 'Steel'}
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              {locale === 'ko'
                ? '포스코는 세계 최고 수준의 철강 기술력을 보유하고 있으며, 친환경 제철 기술 개발을 선도하고 있습니다.'
                : 'POSCO possesses world-class steel technology and leads in eco-friendly steelmaking technology development.'}
            </p>
            <div className="text-xs text-orange-600 font-medium">
              {locale === 'ko' ? '🏆 세계 6위' : '🏆 World #6'}
            </div>
          </div>

          {/* 전자/IT */}
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📱</span>
              <h3 className="font-bold text-lg text-red-800">
                {locale === 'ko' ? '전자/IT' : 'Electronics/IT'}
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              {locale === 'ko'
                ? '스마트폰, 디스플레이, 가전제품 등에서 세계적인 경쟁력을 보유하고 있으며, 5G와 AI 분야에서도 선도하고 있습니다.'
                : 'Global competitiveness in smartphones, displays, and home appliances, also leading in 5G and AI sectors.'}
            </p>
            <div className="text-xs text-red-600 font-medium">
              {locale === 'ko' ? '🏆 세계 2위' : '🏆 World #2'}
            </div>
          </div>

          {/* K-콘텐츠 */}
          <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎬</span>
              <h3 className="font-bold text-lg text-pink-800">
                {locale === 'ko' ? 'K-콘텐츠' : 'K-Content'}
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              {locale === 'ko'
                ? 'K-POP, K-드라마, K-영화 등 한류 콘텐츠가 전 세계적으로 인기를 끌며 문화산업 수출이 급증하고 있습니다.'
                : 'Hallyu content including K-POP, K-dramas, and K-movies are globally popular, with cultural industry exports surging.'}
            </p>
            <div className="text-xs text-pink-600 font-medium">
              {locale === 'ko' ? '📈 급성장 중' : '📈 Rapidly Growing'}
            </div>
          </div>
        </div>
      </section>

      {/* 글로벌 기업 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '대표 글로벌 기업' : locale === 'en' ? 'Leading Global Companies' : locale === 'fr' ? 'Principales entreprises mondiales' : 'الشركات العالمية الرائدة'}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl mb-2">📱</div>
            <div className="font-bold">Samsung</div>
            <div className="text-xs text-gray-500">{locale === 'ko' ? '전자/반도체' : 'Electronics'}</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl mb-2">🚗</div>
            <div className="font-bold">Hyundai</div>
            <div className="text-xs text-gray-500">{locale === 'ko' ? '자동차' : 'Automobiles'}</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl mb-2">💻</div>
            <div className="font-bold">LG</div>
            <div className="text-xs text-gray-500">{locale === 'ko' ? '전자/화학' : 'Electronics'}</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl mb-2">💾</div>
            <div className="font-bold">SK</div>
            <div className="text-xs text-gray-500">{locale === 'ko' ? '반도체/에너지' : 'Semiconductors'}</div>
          </div>
        </div>
      </section>

      {/* 무역 현황 */}
      <section className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '무역 현황' : locale === 'en' ? 'Trade Status' : locale === 'fr' ? 'Situation commerciale' : 'الوضع التجاري'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4 text-green-800">
              {locale === 'ko' ? '주요 수출품' : 'Major Exports'}
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {locale === 'ko' ? '반도체 (19.9%)' : 'Semiconductors (19.9%)'}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {locale === 'ko' ? '자동차 (8.4%)' : 'Automobiles (8.4%)'}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {locale === 'ko' ? '석유제품 (6.5%)' : 'Petroleum products (6.5%)'}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {locale === 'ko' ? '선박 (6.2%)' : 'Ships (6.2%)'}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                {locale === 'ko' ? '디스플레이 (3.4%)' : 'Displays (3.4%)'}
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4 text-blue-800">
              {locale === 'ko' ? '주요 교역국' : 'Major Trading Partners'}
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span>🇨🇳</span>
                {locale === 'ko' ? '중국 (23.2%)' : 'China (23.2%)'}
              </li>
              <li className="flex items-center gap-2">
                <span>🇺🇸</span>
                {locale === 'ko' ? '미국 (16.1%)' : 'United States (16.1%)'}
              </li>
              <li className="flex items-center gap-2">
                <span>🇻🇳</span>
                {locale === 'ko' ? '베트남 (9.0%)' : 'Vietnam (9.0%)'}
              </li>
              <li className="flex items-center gap-2">
                <span>🇯🇵</span>
                {locale === 'ko' ? '일본 (6.9%)' : 'Japan (6.9%)'}
              </li>
              <li className="flex items-center gap-2">
                <span>🇭🇰</span>
                {locale === 'ko' ? '홍콩 (5.8%)' : 'Hong Kong (5.8%)'}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}
