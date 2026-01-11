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
      {/* 기본 통계 */}
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

      {/* 기후 정보 */}
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
    </SubPageLayout>
  )
}
