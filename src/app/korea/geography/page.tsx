'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function KoreaGeographyPage() {
  const { locale } = useI18n()

  const koreaMenuItems = [
    { label: locale === 'ko' ? '지리' : locale === 'en' ? 'Geopolitics' : locale === 'fr' ? 'Géopolitique' : 'الجيوسياسة', href: '/korea/geography' },
    { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/korea/history' },
    { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/korea/economy' },
    { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/korea/culture' },
    { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/korea/institutions' }
  ]

  const menuTitle = locale === 'ko' ? '한국 정보' : locale === 'en' ? 'About Korea' : locale === 'fr' ? 'À propos de la Corée' : 'حول كوريا'
  const pageTitle = locale === 'ko' ? '지리' : locale === 'en' ? 'Geopolitics' : locale === 'fr' ? 'Géopolitique' : 'الجيوسياسة'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={koreaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/korea' }, { label: pageTitle }]}
    >
      {/* 기본 정보 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '대한민국 개요' : locale === 'en' ? 'Republic of Korea Overview' : locale === 'fr' ? 'Aperçu de la République de Corée' : 'نظرة عامة على جمهورية كوريا'}
        </h2>

        <div className="mb-6 overflow-hidden">
          <img
            src="/images/korea/seoul-skyline.jpg"
            alt="Seoul Skyline"
            className="float-right ml-6 mb-4 w-72 h-48 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center p-4 rounded-lg bg-theme-header/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">100,210 km²</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '면적' : locale === 'en' ? 'Area' : locale === 'fr' ? 'Superficie' : 'المساحة'}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-theme-nav/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">51.7M</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '인구' : locale === 'en' ? 'Population' : locale === 'fr' ? 'Population' : 'السكان'}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-theme-header/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">{locale === 'ko' ? '서울' : 'Seoul'}</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '수도' : locale === 'en' ? 'Capital' : locale === 'fr' ? 'Capitale' : 'العاصمة'}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-theme-nav/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">{locale === 'ko' ? '한국어' : 'Korean'}</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '공용어' : locale === 'en' ? 'Official Language' : locale === 'fr' ? 'Langue officielle' : 'اللغة الرسمية'}</div>
          </div>
        </div>

        <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
          {locale === 'ko'
            ? '대한민국은 동아시아의 한반도 남부에 위치한 민주공화국입니다. 북쪽으로는 조선민주주의인민공화국(북한)과 접하고 있으며, 동쪽으로는 동해(일본해), 서쪽으로는 황해, 남쪽으로는 대한해협을 사이에 두고 일본과 마주하고 있습니다.'
            : locale === 'en'
            ? 'The Republic of Korea is a democratic republic located in the southern part of the Korean Peninsula in East Asia. It borders the Democratic People\'s Republic of Korea (North Korea) to the north, the East Sea (Sea of Japan) to the east, the Yellow Sea to the west, and faces Japan across the Korea Strait to the south.'
            : locale === 'fr'
            ? 'La République de Corée est une république démocratique située dans la partie sud de la péninsule coréenne en Asie de l\'Est. Elle est bordée par la République populaire démocratique de Corée (Corée du Nord) au nord, la mer de l\'Est (mer du Japon) à l\'est, la mer Jaune à l\'ouest, et fait face au Japon à travers le détroit de Corée au sud.'
            : 'جمهورية كوريا هي جمهورية ديمقراطية تقع في الجزء الجنوبي من شبه الجزيرة الكورية في شرق آسيا.'}
        </p>
      </section>

      {/* 지리적 위치 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '지리적 위치' : locale === 'en' ? 'Geographical Location' : locale === 'fr' ? 'Situation géographique' : 'الموقع الجغرافي'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="font-bold text-lg mb-3 text-blue-800">
              {locale === 'ko' ? '🗺️ 위치' : '🗺️ Location'}
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• {locale === 'ko' ? '위도: 북위 33°~38°' : 'Latitude: 33°N ~ 38°N'}</li>
              <li>• {locale === 'ko' ? '경도: 동경 124°~132°' : 'Longitude: 124°E ~ 132°E'}</li>
              <li>• {locale === 'ko' ? '한반도 남부 (전체 면적의 45%)' : 'Southern Korean Peninsula (45% of total area)'}</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-bold text-lg mb-3 text-green-800">
              {locale === 'ko' ? '🏔️ 지형' : '🏔️ Terrain'}
            </h3>
            <div className="flex gap-4">
              <img src="/images/korea/hallasan.jpg" alt="Hallasan Mountain" className="w-24 h-24 object-cover rounded-lg shadow-sm" />
              <ul className="text-sm text-gray-700 space-y-2 flex-1">
                <li>• {locale === 'ko' ? '국토의 70%가 산악 지형' : '70% of the land is mountainous'}</li>
                <li>• {locale === 'ko' ? '최고봉: 한라산 (1,947m)' : 'Highest peak: Hallasan (1,947m)'}</li>
                <li>• {locale === 'ko' ? '주요 강: 한강, 낙동강, 금강' : 'Major rivers: Han, Nakdong, Geum'}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="font-bold text-lg mb-3 text-amber-800">
            {locale === 'ko' ? '🌤️ 기후' : '🌤️ Climate'}
          </h3>
          <p className="text-sm text-gray-700 mb-3">
            {locale === 'ko'
              ? '대한민국은 온대 계절풍 기후로, 사계절이 뚜렷합니다. 봄(3-5월)과 가을(9-11월)은 온화하고 맑으며, 여름(6-8월)은 덥고 습하며 장마가 있고, 겨울(12-2월)은 춥고 건조합니다.'
              : locale === 'en'
              ? 'South Korea has a temperate monsoon climate with four distinct seasons. Spring (March-May) and autumn (September-November) are mild and clear, summer (June-August) is hot and humid with monsoon rains, and winter (December-February) is cold and dry.'
              : locale === 'fr'
              ? 'La Corée du Sud a un climat de mousson tempéré avec quatre saisons distinctes.'
              : 'تتمتع كوريا الجنوبية بمناخ موسمي معتدل مع أربعة فصول متميزة.'}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center p-2 bg-pink-100 rounded">
              <div className="text-lg">🌸</div>
              <div className="text-xs font-medium">{locale === 'ko' ? '봄 10-20°C' : 'Spring 10-20°C'}</div>
            </div>
            <div className="text-center p-2 bg-green-100 rounded">
              <div className="text-lg">☀️</div>
              <div className="text-xs font-medium">{locale === 'ko' ? '여름 25-35°C' : 'Summer 25-35°C'}</div>
            </div>
            <div className="text-center p-2 bg-orange-100 rounded">
              <div className="text-lg">🍂</div>
              <div className="text-xs font-medium">{locale === 'ko' ? '가을 10-25°C' : 'Autumn 10-25°C'}</div>
            </div>
            <div className="text-center p-2 bg-blue-100 rounded">
              <div className="text-lg">❄️</div>
              <div className="text-xs font-medium">{locale === 'ko' ? '겨울 -10-5°C' : 'Winter -10-5°C'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 도시 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '주요 도시' : locale === 'en' ? 'Major Cities' : locale === 'fr' ? 'Principales villes' : 'المدن الرئيسية'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-theme-header mb-2">🏛️ {locale === 'ko' ? '서울' : 'Seoul'}</h3>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '수도, 인구 약 950만, 정치·경제·문화 중심지' : 'Capital, pop. ~9.5M, political/economic/cultural center'}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-theme-header mb-2">🚢 {locale === 'ko' ? '부산' : 'Busan'}</h3>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '제2의 도시, 최대 항구도시, 국제영화제 개최' : 'Second largest city, major port, film festival host'}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-theme-header mb-2">🏭 {locale === 'ko' ? '인천' : 'Incheon'}</h3>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '국제공항 소재지, 경제자유구역' : 'International airport location, free economic zone'}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-theme-header mb-2">🔬 {locale === 'ko' ? '대전' : 'Daejeon'}</h3>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '과학기술 중심지, 연구단지' : 'Science & technology hub, research complex'}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-theme-header mb-2">🎭 {locale === 'ko' ? '대구' : 'Daegu'}</h3>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '섬유산업 중심, 전통시장 유명' : 'Textile industry center, famous traditional markets'}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-theme-header mb-2">🌴 {locale === 'ko' ? '제주' : 'Jeju'}</h3>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '화산섬, UNESCO 세계자연유산, 관광 명소' : 'Volcanic island, UNESCO site, tourist destination'}
            </p>
          </div>
        </div>
      </section>

      {/* 전략적 위치 */}
      <section className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '전략적 위치' : locale === 'en' ? 'Strategic Location' : locale === 'fr' ? 'Position stratégique' : 'الموقع الاستراتيجي'}
        </h2>

        <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
          {locale === 'ko'
            ? '대한민국은 동북아시아의 중심에 위치하여 중국, 일본, 러시아 등 주요 경제대국과 인접해 있습니다. 이러한 지정학적 위치는 한국을 아시아 태평양 지역의 중요한 경제, 물류, 외교의 허브로 만들었습니다.'
            : locale === 'en'
            ? 'South Korea is located at the center of Northeast Asia, adjacent to major economic powers such as China, Japan, and Russia. This geopolitical position has made Korea an important hub for economy, logistics, and diplomacy in the Asia-Pacific region.'
            : locale === 'fr'
            ? 'La Corée du Sud est située au centre de l\'Asie du Nord-Est, adjacente aux grandes puissances économiques telles que la Chine, le Japon et la Russie.'
            : 'تقع كوريا الجنوبية في مركز شمال شرق آسيا، بالقرب من القوى الاقتصادية الكبرى مثل الصين واليابان وروسيا.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-theme-header/10 rounded-lg">
            <div className="text-3xl mb-2">✈️</div>
            <div className="font-bold text-theme-header">{locale === 'ko' ? '항공 허브' : 'Aviation Hub'}</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '3시간 내 인구 20억' : '2B people within 3 hours'}</div>
          </div>
          <div className="text-center p-4 bg-theme-nav/10 rounded-lg">
            <div className="text-3xl mb-2">🚢</div>
            <div className="font-bold text-theme-header">{locale === 'ko' ? '해운 중심' : 'Shipping Center'}</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '세계 5대 항만' : 'Top 5 global ports'}</div>
          </div>
          <div className="text-center p-4 bg-theme-header/10 rounded-lg">
            <div className="text-3xl mb-2">🌐</div>
            <div className="font-bold text-theme-header">{locale === 'ko' ? 'IT 강국' : 'IT Powerhouse'}</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '세계 최고 인터넷 속도' : 'World\'s fastest internet'}</div>
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}
