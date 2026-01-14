'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function KoreaCulturePage() {
  const { locale } = useI18n()

  const koreaMenuItems = [
    { label: locale === 'ko' ? '지리' : locale === 'en' ? 'Geopolitics' : locale === 'fr' ? 'Géopolitique' : 'الجيوسياسة', href: '/korea/geography' },
    { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/korea/history' },
    { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/korea/economy' },
    { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/korea/culture' },
    { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/korea/institutions' }
  ]

  const menuTitle = locale === 'ko' ? '한국 정보' : locale === 'en' ? 'About Korea' : locale === 'fr' ? 'À propos de la Corée' : 'حول كوريا'
  const pageTitle = locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={koreaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/korea' }, { label: pageTitle }]}
    >
      {/* 문화 개요 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '한국 문화 개요' : locale === 'en' ? 'Korean Culture Overview' : locale === 'fr' ? 'Aperçu de la culture coréenne' : 'نظرة عامة على الثقافة الكورية'}
        </h2>

        <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
          {locale === 'ko'
            ? '한국 문화는 5천년의 역사를 바탕으로 독자적인 전통과 현대적 창의성이 조화를 이루고 있습니다. 오늘날 한류(Hallyu)로 불리는 한국 대중문화는 전 세계적으로 큰 인기를 얻으며 글로벌 문화 트렌드를 선도하고 있습니다.'
            : locale === 'en'
            ? 'Korean culture harmoniously blends unique traditions based on 5,000 years of history with modern creativity. Today, Korean pop culture, known as Hallyu (Korean Wave), has gained immense global popularity and leads global cultural trends.'
            : locale === 'fr'
            ? 'La culture coréenne allie harmonieusement des traditions uniques basées sur 5 000 ans d\'histoire avec une créativité moderne.'
            : 'الثقافة الكورية تمزج بين التقاليد الفريدة القائمة على 5000 عام من التاريخ مع الإبداع الحديث.'}
        </p>
      </section>

      {/* 한류 (K-Culture) */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '한류 (K-Culture)' : locale === 'en' ? 'Hallyu (K-Culture)' : locale === 'fr' ? 'Hallyu (K-Culture)' : 'هاليو (الثقافة الكورية)'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* K-POP */}
          <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎵</span>
              <h3 className="font-bold text-lg text-pink-800">K-POP</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              {locale === 'ko'
                ? 'BTS, BLACKPINK, NewJeans 등 K-POP 아티스트들이 빌보드 차트를 석권하며 전 세계 음악 시장을 선도하고 있습니다.'
                : 'K-POP artists like BTS, BLACKPINK, and NewJeans dominate the Billboard charts and lead the global music market.'}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-pink-200 text-pink-800 text-xs rounded">BTS</span>
              <span className="px-2 py-1 bg-pink-200 text-pink-800 text-xs rounded">BLACKPINK</span>
              <span className="px-2 py-1 bg-pink-200 text-pink-800 text-xs rounded">NewJeans</span>
            </div>
          </div>

          {/* K-Drama */}
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📺</span>
              <h3 className="font-bold text-lg text-purple-800">K-Drama</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              {locale === 'ko'
                ? '오징어 게임, 이상한 변호사 우영우 등 한국 드라마가 Netflix 글로벌 1위를 달성하며 세계적인 인기를 얻고 있습니다.'
                : 'Korean dramas like Squid Game and Extraordinary Attorney Woo reached #1 globally on Netflix.'}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded">{locale === 'ko' ? '오징어 게임' : 'Squid Game'}</span>
              <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded">{locale === 'ko' ? '더 글로리' : 'The Glory'}</span>
            </div>
          </div>

          {/* K-Movie */}
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎬</span>
              <h3 className="font-bold text-lg text-blue-800">K-Movie</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              {locale === 'ko'
                ? '기생충(2020)이 아카데미 작품상을 수상하며 한국 영화의 세계적 위상을 높였습니다.'
                : 'Parasite (2020) won the Academy Award for Best Picture, elevating Korean cinema\'s global status.'}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded">{locale === 'ko' ? '기생충' : 'Parasite'}</span>
              <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs rounded">{locale === 'ko' ? '올드보이' : 'Oldboy'}</span>
            </div>
          </div>

          {/* K-Food */}
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🍜</span>
              <h3 className="font-bold text-lg text-orange-800">K-Food</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              {locale === 'ko'
                ? '김치, 비빔밥, 불고기, 삼겹살 등 한국 음식이 세계적으로 사랑받고 있으며, 한식당이 전 세계에 급속히 확산되고 있습니다.'
                : 'Korean foods like kimchi, bibimbap, bulgogi, and samgyeopsal are loved worldwide, with Korean restaurants spreading rapidly across the globe.'}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-orange-200 text-orange-800 text-xs rounded">{locale === 'ko' ? '김치' : 'Kimchi'}</span>
              <span className="px-2 py-1 bg-orange-200 text-orange-800 text-xs rounded">{locale === 'ko' ? '비빔밥' : 'Bibimbap'}</span>
              <span className="px-2 py-1 bg-orange-200 text-orange-800 text-xs rounded">{locale === 'ko' ? '불고기' : 'Bulgogi'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 전통 문화 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '전통 문화' : locale === 'en' ? 'Traditional Culture' : locale === 'fr' ? 'Culture traditionnelle' : 'الثقافة التقليدية'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">👘</div>
            <h3 className="font-bold text-theme-header mb-2">{locale === 'ko' ? '한복' : 'Hanbok'}</h3>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '한국의 전통 의복으로 곡선미와 색채미가 특징' : 'Traditional Korean clothing known for graceful curves and vibrant colors'}
            </p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">🏯</div>
            <h3 className="font-bold text-theme-header mb-2">{locale === 'ko' ? '한옥' : 'Hanok'}</h3>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '자연과 조화를 이루는 한국 전통 가옥' : 'Traditional Korean houses that harmonize with nature'}
            </p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-3">🍵</div>
            <h3 className="font-bold text-theme-header mb-2">{locale === 'ko' ? '다도' : 'Tea Ceremony'}</h3>
            <p className="text-sm text-gray-600">
              {locale === 'ko' ? '정성과 예절을 담은 한국의 차 문화' : 'Korean tea culture emphasizing sincerity and etiquette'}
            </p>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="font-bold text-lg mb-4 text-green-800">
            {locale === 'ko' ? '📜 한글 (Hangeul)' : '📜 Hangeul (Korean Alphabet)'}
          </h3>
          <p className="text-sm text-gray-700">
            {locale === 'ko'
              ? '1443년 세종대왕이 창제한 한글은 과학적이고 배우기 쉬운 문자 체계로, 유네스코 세계기록유산에 등재되어 있습니다. 모음과 자음의 조합으로 이루어진 독창적인 문자로, 전 세계 언어학자들이 그 우수성을 인정하고 있습니다.'
              : locale === 'en'
              ? 'Hangeul, created by King Sejong in 1443, is a scientific and easy-to-learn writing system registered as a UNESCO World Documentary Heritage. This unique alphabet, composed of combinations of vowels and consonants, is recognized by linguists worldwide for its excellence.'
              : locale === 'fr'
              ? 'Le Hangeul, créé par le roi Sejong en 1443, est un système d\'écriture scientifique et facile à apprendre, inscrit au patrimoine documentaire mondial de l\'UNESCO.'
              : 'الهانغول، الذي أنشأه الملك سيجونغ في عام 1443، هو نظام كتابة علمي وسهل التعلم.'}
          </p>
        </div>
      </section>

      {/* UNESCO 유산 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? 'UNESCO 세계유산' : locale === 'en' ? 'UNESCO World Heritage' : locale === 'fr' ? 'Patrimoine mondial de l\'UNESCO' : 'التراث العالمي لليونسكو'}
        </h2>

        <p className="text-gray-700 text-sm mb-4">
          {locale === 'ko'
            ? '대한민국은 16개의 세계문화유산, 2개의 세계자연유산, 22개의 인류무형문화유산을 보유하고 있습니다.'
            : 'South Korea has 16 World Cultural Heritage Sites, 2 World Natural Heritage Sites, and 22 Intangible Cultural Heritage items.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-bold mb-2 text-blue-800">{locale === 'ko' ? '문화유산' : 'Cultural Heritage'}</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• {locale === 'ko' ? '창덕궁 (1997)' : 'Changdeokgung Palace (1997)'}</li>
              <li>• {locale === 'ko' ? '수원화성 (1997)' : 'Hwaseong Fortress (1997)'}</li>
              <li>• {locale === 'ko' ? '경주역사유적지구 (2000)' : 'Gyeongju Historic Areas (2000)'}</li>
              <li>• {locale === 'ko' ? '한국의 역사마을 (2010)' : 'Historic Villages of Korea (2010)'}</li>
            </ul>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-bold mb-2 text-green-800">{locale === 'ko' ? '무형문화유산' : 'Intangible Heritage'}</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• {locale === 'ko' ? '판소리 (2003)' : 'Pansori (2003)'}</li>
              <li>• {locale === 'ko' ? '강강술래 (2009)' : 'Ganggangsullae (2009)'}</li>
              <li>• {locale === 'ko' ? '아리랑 (2012)' : 'Arirang (2012)'}</li>
              <li>• {locale === 'ko' ? '김장 문화 (2013)' : 'Kimjang Culture (2013)'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 전통 예술 */}
      <section className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '전통 예술' : locale === 'en' ? 'Traditional Arts' : locale === 'fr' ? 'Arts traditionnels' : 'الفنون التقليدية'}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-amber-50 rounded-lg">
            <div className="text-3xl mb-2">🎭</div>
            <div className="font-bold text-sm">{locale === 'ko' ? '탈춤' : 'Talchum'}</div>
            <div className="text-xs text-gray-500">{locale === 'ko' ? '가면극' : 'Mask Dance'}</div>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-lg">
            <div className="text-3xl mb-2">🎤</div>
            <div className="font-bold text-sm">{locale === 'ko' ? '판소리' : 'Pansori'}</div>
            <div className="text-xs text-gray-500">{locale === 'ko' ? '서사적 노래' : 'Epic Singing'}</div>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-lg">
            <div className="text-3xl mb-2">🎨</div>
            <div className="font-bold text-sm">{locale === 'ko' ? '민화' : 'Minhwa'}</div>
            <div className="text-xs text-gray-500">{locale === 'ko' ? '민속화' : 'Folk Painting'}</div>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-lg">
            <div className="text-3xl mb-2">🥋</div>
            <div className="font-bold text-sm">{locale === 'ko' ? '태권도' : 'Taekwondo'}</div>
            <div className="text-xs text-gray-500">{locale === 'ko' ? '무술' : 'Martial Art'}</div>
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}
