'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function HistoryPage() {
  const { locale } = useI18n()

  const content = {
    ko: {
      title: '역사',
      sections: [
        {
          title: '고대 역사',
          content: '모리타니아 지역은 선사시대부터 사람들이 거주해 왔습니다. 사하라 사막의 암각화는 이 지역의 오랜 역사를 증명합니다.'
        },
        {
          title: '이슬람의 도래',
          content: '8세기경 이슬람이 이 지역에 전파되었으며, 이후 이슬람 문화가 모리타니아 사회의 근간이 되었습니다.'
        },
        {
          title: '무라비트 제국',
          content: '11세기 무라비트 제국이 이 지역에서 일어나 북아프리카와 이베리아 반도까지 영향력을 확장했습니다.'
        },
        {
          title: '프랑스 식민지 시대',
          content: '1903년 프랑스의 식민지가 되었으며, 프랑스령 서아프리카의 일부로 편입되었습니다.'
        },
        {
          title: '독립',
          content: '1960년 11월 28일 프랑스로부터 독립하여 모리타니아 이슬람 공화국이 수립되었습니다.'
        }
      ]
    },
    en: {
      title: 'History',
      sections: [
        {
          title: 'Ancient History',
          content: 'The Mauritania region has been inhabited since prehistoric times. Rock paintings in the Sahara Desert attest to the long history of this region.'
        },
        {
          title: 'Arrival of Islam',
          content: 'Islam spread to this region around the 8th century, and Islamic culture has since become the foundation of Mauritanian society.'
        },
        {
          title: 'Almoravid Empire',
          content: 'The Almoravid Empire arose from this region in the 11th century and extended its influence to North Africa and the Iberian Peninsula.'
        },
        {
          title: 'French Colonial Period',
          content: 'It became a French colony in 1903 and was incorporated as part of French West Africa.'
        },
        {
          title: 'Independence',
          content: 'On November 28, 1960, Mauritania gained independence from France and the Islamic Republic of Mauritania was established.'
        }
      ]
    },
    fr: {
      title: 'Histoire',
      sections: [
        {
          title: 'Histoire Ancienne',
          content: 'La région de Mauritanie est habitée depuis la préhistoire. Les peintures rupestres du désert du Sahara témoignent de la longue histoire de cette région.'
        },
        {
          title: 'Arrivée de l\'Islam',
          content: 'L\'Islam s\'est répandu dans cette région vers le 8ème siècle, et la culture islamique est depuis devenue le fondement de la société mauritanienne.'
        },
        {
          title: 'Empire Almoravide',
          content: 'L\'Empire Almoravide est né de cette région au 11ème siècle et a étendu son influence à l\'Afrique du Nord et à la péninsule ibérique.'
        },
        {
          title: 'Période Coloniale Française',
          content: 'Elle est devenue une colonie française en 1903 et a été incorporée à l\'Afrique occidentale française.'
        },
        {
          title: 'Indépendance',
          content: 'Le 28 novembre 1960, la Mauritanie a obtenu son indépendance de la France et la République islamique de Mauritanie a été établie.'
        }
      ]
    },
    ar: {
      title: 'التاريخ',
      sections: [
        {
          title: 'التاريخ القديم',
          content: 'سكنت منطقة موريتانيا منذ عصور ما قبل التاريخ. تشهد الرسوم الصخرية في الصحراء الكبرى على التاريخ الطويل لهذه المنطقة.'
        },
        {
          title: 'وصول الإسلام',
          content: 'انتشر الإسلام في هذه المنطقة حوالي القرن الثامن، وأصبحت الثقافة الإسلامية منذ ذلك الحين أساس المجتمع الموريتاني.'
        },
        {
          title: 'إمبراطورية المرابطين',
          content: 'نشأت إمبراطورية المرابطين من هذه المنطقة في القرن الحادي عشر ووسعت نفوذها إلى شمال أفريقيا وشبه الجزيرة الإيبيرية.'
        },
        {
          title: 'فترة الاستعمار الفرنسي',
          content: 'أصبحت مستعمرة فرنسية في عام 1903 وتم ضمها كجزء من غرب أفريقيا الفرنسية.'
        },
        {
          title: 'الاستقلال',
          content: 'في 28 نوفمبر 1960، حصلت موريتانيا على استقلالها من فرنسا وتأسست الجمهورية الإسلامية الموريتانية.'
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
  const pageTitle = locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={mauritaniaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/mauritania' }, { label: pageTitle }]}
    >
      {/* 역사 타임라인 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">{c.title}</h2>
        <div className="space-y-6">
          {c.sections.map((section, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 bg-theme-header">
                {index + 1}
              </div>
              <div className="flex-1 bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-gray-700 leading-relaxed text-[15px]">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 주요 역사적 사건 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '주요 역사적 사건' : locale === 'en' ? 'Key Historical Events' : locale === 'fr' ? 'Événements historiques clés' : 'الأحداث التاريخية الرئيسية'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[15px]">
          <div className="bg-theme-header/10 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-1 text-theme-header">8세기</div>
            <div className="text-gray-700">이슬람 전파</div>
          </div>
          <div className="bg-theme-nav/10 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-1 text-theme-header">11세기</div>
            <div className="text-gray-700">무라비트 제국 건설</div>
          </div>
          <div className="bg-theme-header/10 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-1 text-theme-header">1903년</div>
            <div className="text-gray-700">프랑스 식민지화</div>
          </div>
          <div className="bg-theme-nav/10 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-1 text-theme-header">1960년</div>
            <div className="text-gray-700">독립 선언</div>
          </div>
        </div>
      </section>

      {/* 역사적 중요성 */}
      <section className="bg-theme-header/10 border border-theme-header/30 rounded-lg p-6">
        <h2 className="text-lg font-bold text-theme-header mb-4">
          {locale === 'ko' ? '📜 역사적 중요성' : locale === 'en' ? '📜 Historical Significance' : locale === 'fr' ? '📜 Importance historique' : '📜 الأهمية التاريخية'}
        </h2>
        <div className="text-gray-700 space-y-2 text-[15px]">
          <p>• {locale === 'ko' ? '사하라 횡단 교역로의 중심지였습니다' : 'A center of trans-Saharan trade routes'}</p>
          <p>• {locale === 'ko' ? '이슬람 학문과 문화의 중요한 거점이었습니다' : 'An important center of Islamic scholarship and culture'}</p>
          <p>• {locale === 'ko' ? '아프리카와 아랍 세계를 연결하는 가교 역할을 했습니다' : 'Served as a bridge between Africa and the Arab world'}</p>
        </div>
      </section>
    </SubPageLayout>
  )
}
