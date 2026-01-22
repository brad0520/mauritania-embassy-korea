'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import TestEnCours from '@/components/TestEnCours'

// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경
const TEST_MODE = true

export default function KoreaHistoryPage() {
  const { locale } = useI18n()

  const koreaMenuItems = [
    { label: locale === 'ko' ? '지리' : locale === 'en' ? 'Geopolitics' : locale === 'fr' ? 'Géopolitique' : 'الجيوسياسة', href: '/korea/geography' },
    { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/korea/history' },
    { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/korea/economy' },
    { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/korea/culture' },
    { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/korea/institutions' }
  ]

  const menuTitle = locale === 'ko' ? '한국 정보' : locale === 'en' ? 'About Korea' : locale === 'fr' ? 'À propos de la Corée' : 'حول كوريا'
  const pageTitle = locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={koreaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/korea' }, { label: pageTitle }]}
    >
      {TEST_MODE ? <TestEnCours /> : <>
      {/* 역사 개요 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '한국 역사 개요' : locale === 'en' ? 'Korean History Overview' : locale === 'fr' ? 'Aperçu de l\'histoire coréenne' : 'نظرة عامة على التاريخ الكوري'}
        </h2>

        <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
          {locale === 'ko'
            ? '한국은 5천년 이상의 유구한 역사를 가진 나라입니다. 고조선부터 시작하여 삼국시대, 통일신라, 고려, 조선을 거쳐 현재의 대한민국에 이르기까지 독자적인 문화와 전통을 발전시켜 왔습니다.'
            : locale === 'en'
            ? 'Korea has a long history spanning over 5,000 years. From Gojoseon to the Three Kingdoms period, Unified Silla, Goryeo, Joseon, and to the present Republic of Korea, it has developed its own unique culture and traditions.'
            : locale === 'fr'
            ? 'La Corée a une longue histoire de plus de 5 000 ans. De Gojoseon à la période des Trois Royaumes, Silla unifié, Goryeo, Joseon et jusqu\'à l\'actuelle République de Corée, elle a développé sa propre culture et ses traditions.'
            : 'تمتلك كوريا تاريخًا طويلاً يمتد لأكثر من 5000 عام.'}
        </p>
      </section>

      {/* 시대별 역사 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '시대별 역사' : locale === 'en' ? 'Historical Periods' : locale === 'fr' ? 'Périodes historiques' : 'العصور التاريخية'}
        </h2>

        <div className="space-y-6">
          {/* 고조선 */}
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🏛️</span>
              <h3 className="font-bold text-lg text-amber-800">
                {locale === 'ko' ? '고조선 (BC 2333 ~ BC 108)' : 'Gojoseon (2333 BC ~ 108 BC)'}
              </h3>
            </div>
            <p className="text-sm text-gray-700">
              {locale === 'ko'
                ? '단군왕검이 건국한 한민족 최초의 국가입니다. 청동기 문화를 바탕으로 발전하였으며, 고유한 홍익인간 이념을 가지고 있었습니다.'
                : locale === 'en'
                ? 'The first nation of the Korean people, founded by Dangun Wanggeom. It developed based on Bronze Age culture and had its own Hongik Ingan ideology.'
                : 'La première nation du peuple coréen, fondée par Dangun Wanggeom.'}
            </p>
          </div>

          {/* 삼국시대 */}
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">⚔️</span>
              <h3 className="font-bold text-lg text-blue-800">
                {locale === 'ko' ? '삼국시대 (BC 57 ~ AD 668)' : 'Three Kingdoms (57 BC ~ 668 AD)'}
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              {locale === 'ko'
                ? '고구려, 백제, 신라 세 나라가 한반도와 만주 지역에서 경쟁하던 시대입니다. 각 왕국은 고유한 문화와 불교를 발전시켰습니다.'
                : locale === 'en'
                ? 'An era when three kingdoms - Goguryeo, Baekje, and Silla - competed in the Korean Peninsula and Manchuria. Each kingdom developed unique cultures and Buddhism.'
                : 'Une époque où trois royaumes - Goguryeo, Baekje et Silla - rivalisaient.'}
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-2 bg-red-100 rounded">
                <div className="font-bold text-sm">{locale === 'ko' ? '고구려' : 'Goguryeo'}</div>
                <div className="text-xs text-gray-600">{locale === 'ko' ? '북방 강국' : 'Northern Power'}</div>
              </div>
              <div className="text-center p-2 bg-yellow-100 rounded">
                <div className="font-bold text-sm">{locale === 'ko' ? '백제' : 'Baekje'}</div>
                <div className="text-xs text-gray-600">{locale === 'ko' ? '해상 왕국' : 'Maritime Kingdom'}</div>
              </div>
              <div className="text-center p-2 bg-green-100 rounded">
                <div className="font-bold text-sm">{locale === 'ko' ? '신라' : 'Silla'}</div>
                <div className="text-xs text-gray-600">{locale === 'ko' ? '통일 주역' : 'Unifier'}</div>
              </div>
            </div>
          </div>

          {/* 고려 */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📜</span>
              <h3 className="font-bold text-lg text-green-800">
                {locale === 'ko' ? '고려 (918 ~ 1392)' : 'Goryeo (918 ~ 1392)'}
              </h3>
            </div>
            <p className="text-sm text-gray-700">
              {locale === 'ko'
                ? '한반도를 재통일한 왕조로, \'Korea\'라는 영문 명칭의 어원이 되었습니다. 불교가 국교였으며, 세계 최초의 금속활자를 발명하고 고려청자를 발전시켰습니다.'
                : locale === 'en'
                ? 'A dynasty that reunified the Korean Peninsula and became the origin of the name "Korea." Buddhism was the state religion, and they invented the world\'s first metal movable type and developed Goryeo celadon.'
                : 'Une dynastie qui a réunifié la péninsule coréenne et est devenue l\'origine du nom "Corée."'}
            </p>
          </div>

          {/* 조선 */}
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">👑</span>
              <h3 className="font-bold text-lg text-purple-800">
                {locale === 'ko' ? '조선 (1392 ~ 1897)' : 'Joseon (1392 ~ 1897)'}
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              {locale === 'ko'
                ? '500년간 지속된 유교 왕조입니다. 세종대왕이 한글을 창제하였고, 과학기술과 예술이 크게 발전했습니다.'
                : locale === 'en'
                ? 'A Confucian dynasty that lasted 500 years. King Sejong created Hangeul, and science, technology, and arts greatly advanced.'
                : 'Une dynastie confucéenne qui a duré 500 ans. Le roi Sejong a créé le Hangeul.'}
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-2 bg-white rounded">
                <span>📖</span>
                <span className="text-sm">{locale === 'ko' ? '한글 창제 (1443)' : 'Hangeul creation (1443)'}</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-white rounded">
                <span>🔭</span>
                <span className="text-sm">{locale === 'ko' ? '측우기 발명' : 'Rain gauge invention'}</span>
              </div>
            </div>
          </div>

          {/* 대한민국 */}
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🇰🇷</span>
              <h3 className="font-bold text-lg text-red-800">
                {locale === 'ko' ? '대한민국 (1948 ~ 현재)' : 'Republic of Korea (1948 ~ Present)'}
              </h3>
            </div>
            <p className="text-sm text-gray-700">
              {locale === 'ko'
                ? '1945년 일본으로부터 독립 후 1948년 정부를 수립했습니다. 한국전쟁(1950-1953)의 폐허에서 \'한강의 기적\'으로 불리는 급속한 경제성장을 이루어 세계 10대 경제대국으로 성장했습니다.'
                : locale === 'en'
                ? 'After independence from Japan in 1945, the government was established in 1948. From the ruins of the Korean War (1950-1953), it achieved rapid economic growth known as the "Miracle on the Han River" and grew into a top 10 world economy.'
                : 'Après l\'indépendance du Japon en 1945, le gouvernement a été établi en 1948.'}
            </p>
          </div>
        </div>
      </section>

      {/* 주요 역사적 사건 */}
      <section className="bg-white rounded-lg shadow-sm border p-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '현대사 주요 사건' : locale === 'en' ? 'Modern History Milestones' : locale === 'fr' ? 'Jalons de l\'histoire moderne' : 'معالم التاريخ الحديث'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
            <div className="font-bold text-theme-header mb-1">1945</div>
            <div className="text-sm text-gray-600">
              {locale === 'ko' ? '8.15 광복 - 일본으로부터 독립' : 'Liberation from Japan'}
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
            <div className="font-bold text-theme-header mb-1">1948</div>
            <div className="text-sm text-gray-600">
              {locale === 'ko' ? '대한민국 정부 수립' : 'Establishment of the Republic of Korea'}
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-red-500">
            <div className="font-bold text-theme-header mb-1">1950-1953</div>
            <div className="text-sm text-gray-600">
              {locale === 'ko' ? '한국전쟁' : 'Korean War'}
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
            <div className="font-bold text-theme-header mb-1">1988</div>
            <div className="text-sm text-gray-600">
              {locale === 'ko' ? '서울 올림픽 개최' : 'Seoul Olympics'}
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
            <div className="font-bold text-theme-header mb-1">2002</div>
            <div className="text-sm text-gray-600">
              {locale === 'ko' ? '한일 월드컵 공동 개최' : 'FIFA World Cup co-hosted with Japan'}
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-yellow-500">
            <div className="font-bold text-theme-header mb-1">2018</div>
            <div className="text-sm text-gray-600">
              {locale === 'ko' ? '평창 동계올림픽 개최' : 'PyeongChang Winter Olympics'}
            </div>
          </div>
        </div>
      </section>
    </>}

    </SubPageLayout>
  )
}
