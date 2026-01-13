'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function GeographyPage() {
  const { locale } = useI18n()

  const content = {
    ko: {
      title: '지리',
      stats: [
        { label: '면적', value: '1,030,700 km²' },
        { label: '인구', value: '약 480만 명' },
        { label: '수도', value: '누악쇼트' },
        { label: '공용어', value: '아랍어' }
      ],
      sections: [
        {
          title: '위치',
          content: '모리타니아는 서아프리카에 위치하며, 북쪽으로 서사하라와 알제리, 동쪽과 남쪽으로 말리, 남서쪽으로 세네갈과 국경을 접하고 있습니다. 서쪽으로는 대서양과 접해 있습니다.'
        },
        {
          title: '기후',
          content: '대부분의 지역이 사막 기후로, 매우 덥고 건조합니다. 남부 지역은 사헬 기후로 우기가 있습니다.'
        },
        {
          title: '지형',
          content: '국토의 약 3분의 2가 사하라 사막으로 덮여 있으며, 남부에는 세네갈 강이 흐릅니다. 아드라르 고원 등 산악 지역도 있습니다.'
        },
        {
          title: '주요 도시',
          content: '수도 누악쇼트 외에 누아디부, 아타르, 카에디, 로소 등의 도시가 있습니다.'
        }
      ]
    },
    en: {
      title: 'Geography',
      stats: [
        { label: 'Area', value: '1,030,700 km²' },
        { label: 'Population', value: 'approx. 4.8 million' },
        { label: 'Capital', value: 'Nouakchott' },
        { label: 'Official Language', value: 'Arabic' }
      ],
      sections: [
        {
          title: 'Location',
          content: 'Mauritania is located in West Africa, bordered by Western Sahara and Algeria to the north, Mali to the east and south, and Senegal to the southwest. It has an Atlantic Ocean coastline to the west.'
        },
        {
          title: 'Climate',
          content: 'Most of the country has a desert climate, very hot and dry. The southern region has a Sahel climate with a rainy season.'
        },
        {
          title: 'Terrain',
          content: 'About two-thirds of the country is covered by the Sahara Desert, and the Senegal River flows in the south. There are also mountainous areas such as the Adrar Plateau.'
        },
        {
          title: 'Major Cities',
          content: 'Besides the capital Nouakchott, other cities include Nouadhibou, Atar, Kaédi, and Rosso.'
        }
      ]
    },
    fr: {
      title: 'Géographie',
      stats: [
        { label: 'Superficie', value: '1 030 700 km²' },
        { label: 'Population', value: 'environ 4,8 millions' },
        { label: 'Capitale', value: 'Nouakchott' },
        { label: 'Langue officielle', value: 'Arabe' }
      ],
      sections: [
        {
          title: 'Situation',
          content: 'La Mauritanie est située en Afrique de l\'Ouest, bordée par le Sahara occidental et l\'Algérie au nord, le Mali à l\'est et au sud, et le Sénégal au sud-ouest. Elle possède une côte atlantique à l\'ouest.'
        },
        {
          title: 'Climat',
          content: 'La majeure partie du pays a un climat désertique, très chaud et sec. La région sud a un climat sahélien avec une saison des pluies.'
        },
        {
          title: 'Relief',
          content: 'Environ deux tiers du pays sont couverts par le désert du Sahara, et le fleuve Sénégal coule au sud. Il existe également des zones montagneuses comme le plateau de l\'Adrar.'
        },
        {
          title: 'Principales Villes',
          content: 'Outre la capitale Nouakchott, d\'autres villes comprennent Nouadhibou, Atar, Kaédi et Rosso.'
        }
      ]
    },
    ar: {
      title: 'الجغرافيا',
      stats: [
        { label: 'المساحة', value: '1,030,700 كم²' },
        { label: 'السكان', value: 'حوالي 4.8 مليون' },
        { label: 'العاصمة', value: 'نواكشوط' },
        { label: 'اللغة الرسمية', value: 'العربية' }
      ],
      sections: [
        {
          title: 'الموقع',
          content: 'تقع موريتانيا في غرب أفريقيا، تحدها الصحراء الغربية والجزائر من الشمال، ومالي من الشرق والجنوب، والسنغال من الجنوب الغربي. لها ساحل على المحيط الأطلسي من الغرب.'
        },
        {
          title: 'المناخ',
          content: 'معظم البلاد لها مناخ صحراوي، حار جداً وجاف. المنطقة الجنوبية لها مناخ ساحلي مع موسم أمطار.'
        },
        {
          title: 'التضاريس',
          content: 'حوالي ثلثي البلاد مغطاة بالصحراء الكبرى، ونهر السنغال يجري في الجنوب. توجد أيضاً مناطق جبلية مثل هضبة أدرار.'
        },
        {
          title: 'المدن الرئيسية',
          content: 'إلى جانب العاصمة نواكشوط، تشمل المدن الأخرى نواذيبو وأطار وكايدي وروصو.'
        }
      ]
    }
  }

  const c = content[locale as keyof typeof content] || content.ko

  const mauritaniaMenuItems = [
    { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/mauritania/history' },
    { label: locale === 'ko' ? '지리' : locale === 'en' ? 'Geography' : locale === 'fr' ? 'Géographie' : 'الجغرافيا', href: '/mauritania/geography' },
    { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/mauritania/economy' },
    { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/mauritania/culture' },
    { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/mauritania/institutions' }
  ]

  const menuTitle = locale === 'ko' ? '모리타니아 정보' : locale === 'en' ? 'About Mauritania' : locale === 'fr' ? 'À propos de la Mauritanie' : 'حول موريتانيا'
  const pageTitle = locale === 'ko' ? '지리' : locale === 'en' ? 'Geography' : locale === 'fr' ? 'Géographie' : 'الجغرافيا'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={mauritaniaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/mauritania' }, { label: pageTitle }]}
    >
      {/* ===== 기존 내용 (백업용 - false를 true로 바꾸면 표시됨) ===== */}
      {false && (<>
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">{c.title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {c.stats.map((stat, index) => (
            <div key={index} className={`p-4 rounded-lg text-center ${index % 2 === 0 ? 'bg-theme-header/10' : 'bg-theme-nav/10'}`}>
              <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
              <div className="text-lg font-bold text-theme-header">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 지리 정보 섹션 */}
      <section className="mb-12">
        <div className="space-y-6">
          {c.sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-bold text-theme-header mb-3">{section.title}</h3>
              <p className="text-gray-700 leading-relaxed text-[15px]">{section.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 지역별 특성 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '지역별 특성' : locale === 'en' ? 'Regional Characteristics' : locale === 'fr' ? 'Caractéristiques régionales' : 'الخصائص الإقليمية'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[15px]">
          <div className="bg-theme-header/10 p-5 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">🏜️ 북부 (사하라 사막)</h3>
            <p className="text-gray-700">광활한 사구와 암석 사막이 펼쳐진 지역으로, 극심한 건조 기후가 특징입니다.</p>
          </div>
          <div className="bg-theme-nav/10 p-5 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">🌿 중부 (사헬 지대)</h3>
            <p className="text-gray-700">사막과 사바나의 경계 지역으로, 계절적 강우가 있습니다.</p>
          </div>
          <div className="bg-theme-nav/10 p-5 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">🌊 남부 (세네갈강 유역)</h3>
            <p className="text-gray-700">농업이 가능한 비옥한 토지가 있으며, 인구 밀도가 높습니다.</p>
          </div>
          <div className="bg-theme-header/10 p-5 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">⚓ 서부 (대서양 연안)</h3>
            <p className="text-gray-700">풍부한 어장이 있으며, 주요 항구 도시들이 위치해 있습니다.</p>
          </div>
        </div>
      </section>
      </>)}
      {/* ===== 기존 내용 끝 ===== */}

      {/* 관광 개요 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '관광 개요' : locale === 'en' ? 'Tourism Overview' : locale === 'fr' ? 'Aperçu du tourisme' : 'نظرة عامة على السياحة'}
        </h2>

        <div className="mb-8 overflow-hidden">
          <img
            src="/images/unesco/chinguetti.jpg"
            alt="Mauritania landscape"
            className="float-right ml-6 mb-4 w-80 h-56 object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '모리타니아, 또는 "싱게티의 땅"은 UNESCO 세계유산으로 등재된 4개의 고대 도시를 보유하고 있습니다. 가장 유명한 곳은 싱게티로, "사막의 소르본"이라 불리며 이슬람 세계에서 가장 오래되고 인상적인 필사본을 소장한 도서관들, 코란 학교(마드라사), 그리고 아름다운 모스크로 유명합니다.'
              : locale === 'en'
              ? 'Mauritania or "Chinguetti Land" holds 4 ancient cities classified by UNESCO as world heritage. The most famous one is Chinguetti or "Sorbonne of the desert" for its libraries holding some of the oldest and impressive manuscripts in the Islamic world, its Mahadras (Koranic schools), and its beautiful mosque.'
              : locale === 'fr'
              ? 'La Mauritanie ou "Terre de Chinguetti" possède 4 villes anciennes classées au patrimoine mondial de l\'UNESCO. La plus célèbre est Chinguetti, la "Sorbonne du désert".'
              : 'موريتانيا أو "أرض شنقيط" تضم 4 مدن قديمة مصنفة من قبل اليونسكو كتراث عالمي.'}
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '다양한 경관, 아름다운 장소들, 다채로운 여가 활동, 그리고 맛있는 음식으로 모리타니아는 오늘날 많은 관광객들에게 훌륭한 여행지가 되었습니다. 이곳에서 관광객들은 독특한 건축(고대 도시), 전통 공예품, 독특한 사막, 원시 동식물군, 그리고 UNESCO 세계유산인 아르귄 공원이 있는 매력적인 해안을 발견할 수 있습니다.'
              : locale === 'en'
              ? 'Mauritania - with diversity of landscape, wonderful places, variety of leisure and delicious food - is today a great tourist destination. Here tourists will discover authentic architecture (ancient cities), typical artifacts and handicrafts, a unique desert, original fauna and flora, and an attractive coast with the Arguin Park classified by UNESCO as world heritage.'
              : locale === 'fr'
              ? 'La Mauritanie - avec sa diversité de paysages, ses lieux magnifiques et sa nourriture délicieuse - est aujourd\'hui une grande destination touristique.'
              : 'موريتانيا - بتنوع مناظرها الطبيعية وأماكنها الرائعة - هي اليوم وجهة سياحية رائعة.'}
          </p>
          <div className="clear-both"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-lg bg-theme-header/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">4</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? 'UNESCO 세계유산' : 'UNESCO Sites'}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-theme-nav/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">750km</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '대서양 해안선' : 'Atlantic Coast'}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-theme-header/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">2+</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '국립공원' : 'National Parks'}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-theme-nav/10">
            <div className="text-2xl font-bold mb-1 text-theme-header">200만+</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '철새 (아르귄)' : 'Migratory Birds'}</div>
          </div>
        </div>
      </section>

      {/* UNESCO 고대 도시 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? 'UNESCO 세계유산 고대 도시' : locale === 'en' ? 'UNESCO World Heritage Ancient Cities' : locale === 'fr' ? 'Villes anciennes du patrimoine mondial' : 'المدن القديمة للتراث العالمي'}
        </h2>

        <p className="text-gray-800 text-[15px] leading-relaxed mb-6">
          {locale === 'ko'
            ? '4개의 고대 도시가 UNESCO 세계유산으로 등재되어 있습니다. 수백 년 역사의 풍요로운 독창성을 지닌 문명의 원천으로서, 모리타니아는 마그레브, 아프리카, 유럽, 중동 문명의 교차로입니다.'
            : locale === 'en'
            ? '4 ancient cities are classified by UNESCO as world heritage. Source of civilization of hundreds years with rich originality, Mauritania is a crossroad of Maghreb, Africa, Europe and Middle-East civilizations.'
            : locale === 'fr'
            ? '4 villes anciennes sont classées au patrimoine mondial de l\'UNESCO. Source de civilisation de centaines d\'années.'
            : 'تم تصنيف 4 مدن قديمة من قبل اليونسكو كتراث عالمي.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <div className="flex items-start gap-4">
              <img src="/images/unesco/ouadane.jpg" alt="Ouadane" className="w-24 h-24 object-cover rounded-lg shadow-sm" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-amber-800">
                  {locale === 'ko' ? '우아단 (Ouadane)' : 'Ouadane'}
                </h3>
                <p className="text-sm text-gray-700">
                  {locale === 'ko'
                    ? '12세기에 건설된 "카라반의 수도". 사하라 횡단 카라반 무역의 중요한 거점으로, 활발한 문화적·경제적 활동이 이루어졌습니다.'
                    : 'Caravans\' capital founded in 12th Century, an important landmark of the transsaharan caravan trade with intensive cultural and economic activities.'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <div className="flex items-start gap-4">
              <img src="/images/unesco/chinguetti.jpg" alt="Chinguetti" className="w-24 h-24 object-cover rounded-lg shadow-sm" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-amber-800">
                  {locale === 'ko' ? '싱게티 (Chinguetti)' : 'Chinguetti'}
                </h3>
                <p className="text-sm text-gray-700">
                  {locale === 'ko'
                    ? '이슬람 제7의 성지. 13세기경 건설되어 카라반 도로의 중요 거점이자 위대한 교육 중심지였습니다. 유명한 사막 도서관의 필사본, 모스크의 첨탑, 독특한 건축으로 유명합니다.'
                    : '7th holy city of Islam, founded around 13th Century. Famous for its desert libraries\' manuscripts, mosque minaret, and authentic architecture.'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <div className="flex items-start gap-4">
              <img src="/images/unesco/tichitt.jpg" alt="Tichitt" className="w-24 h-24 object-cover rounded-lg shadow-sm" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-amber-800">
                  {locale === 'ko' ? '티시트 (Tichitt)' : 'Tichitt'}
                </h3>
                <p className="text-sm text-gray-700">
                  {locale === 'ko'
                    ? '12세기에 건설된 "사막의 진주". 오랫동안 북서 아프리카에서 가장 아름다운 중세 도시 중 하나였습니다.'
                    : 'Pearl of desert, founded in 12th Century. One of the most beautiful Medieval cities in North West Africa.'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <div className="flex items-start gap-4">
              <img src="/images/unesco/oualata.jpg" alt="Oualata" className="w-24 h-24 object-cover rounded-lg shadow-sm" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-amber-800">
                  {locale === 'ko' ? '우알라타 (Oualata)' : 'Oualata'}
                </h3>
                <p className="text-sm text-gray-700">
                  {locale === 'ko'
                    ? '11세기에 건설된 "장식 예술의 도시". 수단과 마그레브를 연결하는 카라반의 중요한 축이었으며, 유명한 문양과 장식, 그리고 이 지역에서 가장 오래된 모스크가 있습니다.'
                    : 'Art of decoration, founded in 11th Century. Known for its famous motives and decorations, and holds the oldest mosque of sub-region.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 자연과 레저 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '자연과 레저' : locale === 'en' ? 'Nature and Leisure' : locale === 'fr' ? 'Nature et Loisirs' : 'الطبيعة والترفيه'}
        </h2>

        {/* 사막 */}
        <div className="mb-8 overflow-hidden">
          <img
            src="/images/unesco/tichitt.jpg"
            alt="Sahara Desert"
            className="float-right ml-6 mb-4 w-72 h-48 object-cover rounded-lg shadow-md"
          />
          <h3 className="text-xl font-bold mb-3 text-theme-header">
            {locale === 'ko' ? '🏜️ 사하라 사막' : '🏜️ Sahara Desert'}
          </h3>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '전설적인 카라반을 떠올리게 하는 단봉낙타 "메하리". 낙타 타기는 바람에 물결치는 모래 언덕에서 즐거운 산책을 경험하게 해줍니다. 이러한 이미지들은 매년 광대한 북부 지역의 "마자바트 엘 쿠브라"를 통과하는 파리-다카르 랠리로 불멸의 명성을 얻었습니다.'
              : locale === 'en'
              ? 'Dromedaries "Meharees" recall the legendary caravans. Camel riding leads you to experience enjoyable promenades on the dunes with wind ripples. These images are immortalized by Paris-Dakar rallies which pass through Majabat el Koubra every year.'
              : locale === 'fr'
              ? 'Les dromadaires "Méharées" rappellent les caravanes légendaires. La randonnée à dos de chameau vous fait vivre des promenades agréables sur les dunes.'
              : 'الجمال "المهاري" تذكرنا بالقوافل الأسطورية.'}
          </p>
          <div className="clear-both"></div>
        </div>

        {/* 국립공원 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-bold text-lg mb-3 text-green-800">
              {locale === 'ko' ? '🦅 아르귄 국립공원' : '🦅 Banc d\'Arguin National Park'}
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              {locale === 'ko'
                ? 'UNESCO 세계유산으로 등재된 이 공원은 200만 마리 이상의 새들의 서식지입니다. 돌고래, 희귀 조류, 진귀한 어류 등 다양한 동물들의 천국입니다.'
                : 'UNESCO World Heritage site with more than 2,000,000 birds. A home for dolphins, rare birds, and seldom fish.'}
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {locale === 'ko' ? '200만+ 철새 서식지' : '2M+ migratory birds'}</li>
              <li>• {locale === 'ko' ? '돌고래, 희귀 조류' : 'Dolphins, rare birds'}</li>
              <li>• {locale === 'ko' ? '전통 이마라겐 어촌' : 'Imragen fishing villages'}</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-bold text-lg mb-3 text-green-800">
              {locale === 'ko' ? '🌿 디아울링 국립공원' : '🌿 Diawling National Park'}
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              {locale === 'ko'
                ? '방문할 가치가 있는 또 다른 명소입니다. 다양한 식물 종과 수백 종의 수생 조류가 서식하며, 다양한 물고기의 번식지이기도 합니다.'
                : 'Known for its botanic richness diversity, several animal species, hundreds of aquatic birds, and a reproduction place for different kinds of fish.'}
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {locale === 'ko' ? '풍부한 식물 다양성' : 'Rich botanical diversity'}</li>
              <li>• {locale === 'ko' ? '수백 종의 수생 조류' : 'Hundreds of aquatic birds'}</li>
              <li>• {locale === 'ko' ? '어류 번식지' : 'Fish reproduction site'}</li>
            </ul>
          </div>
        </div>

        {/* 해안과 스포츠 낚시 */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-bold text-lg mb-3 text-blue-800">
            {locale === 'ko' ? '🌊 대서양 해안 & 스포츠 낚시' : '🌊 Atlantic Coast & Sport Fishing'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-700 mb-3">
                {locale === 'ko'
                  ? '750km 이상의 독특한 해안선에서 관광객들은 평화롭고 차분한 분위기 속에서 따뜻한 환대를 즐길 수 있습니다.'
                  : 'More than 750 km of unique coast where tourists can enjoy warm hospitality in a peaceful and calm atmosphere.'}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tergit Vacances</li>
                <li>• El Ahmedi</li>
                <li>• {locale === 'ko' ? '이마라겐 어촌 마을' : 'Imragen fishing villages'}</li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-700 mb-3">
                {locale === 'ko'
                  ? '누아디부의 스포츠 낚시 센터는 현대적이고 전략적인 시설 덕분에 매년 점점 더 많은 외국 관광객들을 끌어들이고 있습니다.'
                  : 'The sport fishing center in Nouadhibou attracts yearly more and more foreign tourists thanks to its modern and strategic infrastructures.'}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• {locale === 'ko' ? '현대적 낚시 시설' : 'Modern fishing facilities'}</li>
                <li>• {locale === 'ko' ? '국제 공항 접근성' : 'International airport access'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 누악쇼트 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '수도 누악쇼트' : locale === 'en' ? 'Capital City: Nouakchott' : locale === 'fr' ? 'Capitale: Nouakchott' : 'العاصمة: نواكشوط'}
        </h2>

        <div className="mb-8 overflow-hidden">
          <img
            src="/images/unesco/ouadane.jpg"
            alt="Nouakchott"
            className="float-right ml-6 mb-4 w-72 h-48 object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '누악쇼트(행정 수도)는 독립 2년 전인 1958년에 건설되었습니다. 당시에는 2만 명 미만의 인구를 수용하도록 계획되었지만, 현재는 모리타니아 전체 인구의 약 1/3이 거주하는 문화의 용광로입니다.'
              : locale === 'en'
              ? 'Nouakchott (administrative capital) was founded in 1958, only two years before independence. At that time, it was programmed to host less than 20,000 people. Now the city is a melting pot of cultures and home to almost 1/3 of Mauritanian population.'
              : locale === 'fr'
              ? 'Nouakchott (capitale administrative) a été fondée en 1958, seulement deux ans avant l\'indépendance.'
              : 'نواكشوط (العاصمة الإدارية) تأسست في عام 1958.'}
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '이러한 급격한 성장은 지난 30년간 사하라의 반복적인 가뭄으로 인해 젊은이들, 가족들, 소규모 공동체들이 지방에서의 전통적인 생활 방식을 떠나 대도시로 이주하게 된 "농촌 이탈" 현상 때문입니다. 매우 젊은 도시임에도 불구하고 누악쇼트는 많은 매력을 가지고 있으며, 매우 평화롭고 친절한 도시입니다.'
              : locale === 'en'
              ? 'This quick growth is due to the recurrent droughts in the Sahara in the last 30 years, which forced people to leave their traditional ways of living - a phenomenon known as "Rural Exodus." Though a very young city, Nouakchott has a lot of charm and is a very peaceful and friendly city.'
              : locale === 'fr'
              ? 'Cette croissance rapide est due aux sécheresses récurrentes dans le Sahara.'
              : 'هذا النمو السريع يرجع إلى الجفاف المتكرر في الصحراء.'}
          </p>
          <div className="clear-both"></div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4 text-theme-header">
            {locale === 'ko' ? '누악쇼트 명소' : 'Places to Visit in Nouakchott'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-1">🏛️</div>
              <div className="text-sm font-medium text-gray-900">{locale === 'ko' ? '국립박물관' : 'National Museum'}</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-1">🐟</div>
              <div className="text-sm font-medium text-gray-900">{locale === 'ko' ? '어부의 해변' : "Fishermen's Beach"}</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-1">🛍️</div>
              <div className="text-sm font-medium text-gray-900">{locale === 'ko' ? '여성 상업센터' : 'Ladies Commercial Center'}</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-1">🏪</div>
              <div className="text-sm font-medium text-gray-900">{locale === 'ko' ? '무역 박람회장' : 'Trade Fair'}</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-1">🐫</div>
              <div className="text-sm font-medium text-gray-900">{locale === 'ko' ? '낙타 타기' : 'Camel Riding'}</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-1">🥛</div>
              <div className="text-sm font-medium text-gray-900">{locale === 'ko' ? '낙타유 체험' : 'Camel Milk'}</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-1">🏬</div>
              <div className="text-sm font-medium text-gray-900">{locale === 'ko' ? '캐피탈 시장' : 'Capital Market'}</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-1">🎭</div>
              <div className="text-sm font-medium text-gray-900">{locale === 'ko' ? '셍키엠 시장' : 'Cinquième Market'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 기후 정보 (백업용) ===== */}
      {false && (
      <section className="bg-theme-header/10 border border-theme-header/30 rounded-lg p-6">
        <h2 className="text-lg font-bold text-theme-header mb-4">
          🌡️ {locale === 'ko' ? '기후 정보' : locale === 'en' ? 'Climate Information' : locale === 'fr' ? 'Informations climatiques' : 'معلومات المناخ'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[15px]">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">건기 (10월 - 5월)</h3>
            <p className="text-gray-700">25-35°C, 맑고 건조한 날씨</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">우기 (6월 - 9월)</h3>
            <p className="text-gray-700">30-45°C, 습하고 더운 날씨 (남부 지역만)</p>
          </div>
        </div>
      </section>
      )}
    </SubPageLayout>
  )
}
