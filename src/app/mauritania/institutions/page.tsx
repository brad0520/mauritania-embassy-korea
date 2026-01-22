'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import TestEnCours from '@/components/TestEnCours'

// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경
const TEST_MODE = true

export default function InstitutionsPage() {
  const { locale } = useI18n()

  const content = {
    ko: {
      title: '헌법기관',
      description: '모리타니아 이슬람 공화국의 주요 헌법기관을 소개합니다.',
      institutions: [
        {
          name: '국회 (Assemblée Nationale)',
          description: '입법부로서 법률 제정 및 정부 감시 역할을 수행합니다.',
          url: 'http://www.assemblee.mr'
        },
        {
          name: '대법원 (Cour Suprême)',
          description: '사법부의 최고 기관으로 최종 법률 해석 및 판결을 담당합니다.',
          url: ''
        },
        {
          name: '헌법재판소 (Conseil Constitutionnel)',
          description: '헌법 해석 및 위헌 법률 심사를 담당합니다.',
          url: ''
        },
        {
          name: '대통령실 (Présidence)',
          description: '국가 원수이자 행정부 수반으로서 국정을 총괄합니다.',
          url: 'https://presidence.mr/index.php/fr'
        },
        {
          name: '총리실 (Primature)',
          description: '대통령을 보좌하여 정부 정책을 조정하고 집행합니다.',
          url: 'http://www.primature.gov.mr'
        },
        {
          name: '외교부 (Ministère des Affaires Étrangères)',
          description: '외교 정책 수립 및 국제 관계를 담당합니다.',
          url: 'http://www.diplomatie.gov.mr'
        }
      ]
    },
    en: {
      title: 'Constitutional Institutions',
      description: 'Introduction to the main constitutional institutions of the Islamic Republic of Mauritania.',
      institutions: [
        {
          name: 'National Assembly (Assemblée Nationale)',
          description: 'The legislative body responsible for enacting laws and overseeing the government.',
          url: 'http://www.assemblee.mr'
        },
        {
          name: 'Supreme Court (Cour Suprême)',
          description: 'The highest judicial body responsible for final legal interpretation and judgments.',
          url: ''
        },
        {
          name: 'Constitutional Council (Conseil Constitutionnel)',
          description: 'Responsible for constitutional interpretation and judicial review of laws.',
          url: ''
        },
        {
          name: 'Presidency (Présidence)',
          description: 'The Head of State and Chief Executive who oversees national affairs.',
          url: 'https://presidence.mr/index.php/fr'
        },
        {
          name: 'Prime Minister\'s Office (Primature)',
          description: 'Assists the President in coordinating and implementing government policies.',
          url: 'http://www.primature.gov.mr'
        },
        {
          name: 'Ministry of Foreign Affairs',
          description: 'Responsible for foreign policy and international relations.',
          url: 'http://www.diplomatie.gov.mr'
        }
      ]
    },
    fr: {
      title: 'Institutions Constitutionnelles',
      description: 'Présentation des principales institutions constitutionnelles de la République islamique de Mauritanie.',
      institutions: [
        {
          name: 'Assemblée Nationale',
          description: 'L\'organe législatif chargé d\'adopter les lois et de contrôler le gouvernement.',
          url: 'http://www.assemblee.mr'
        },
        {
          name: 'Cour Suprême',
          description: 'La plus haute instance judiciaire chargée de l\'interprétation juridique finale et des jugements.',
          url: ''
        },
        {
          name: 'Conseil Constitutionnel',
          description: 'Chargé de l\'interprétation constitutionnelle et du contrôle de constitutionnalité des lois.',
          url: ''
        },
        {
          name: 'Présidence',
          description: 'Le Chef de l\'État et de l\'Exécutif qui supervise les affaires nationales.',
          url: 'https://presidence.mr/index.php/fr'
        },
        {
          name: 'Primature',
          description: 'Assiste le Président dans la coordination et la mise en œuvre des politiques gouvernementales.',
          url: 'http://www.primature.gov.mr'
        },
        {
          name: 'Ministère des Affaires Étrangères',
          description: 'Chargé de la politique étrangère et des relations internationales.',
          url: 'http://www.diplomatie.gov.mr'
        }
      ]
    },
    ar: {
      title: 'المؤسسات الدستورية',
      description: 'تقديم المؤسسات الدستورية الرئيسية للجمهورية الإسلامية الموريتانية.',
      institutions: [
        {
          name: 'الجمعية الوطنية',
          description: 'الهيئة التشريعية المسؤولة عن سن القوانين والرقابة على الحكومة.',
          url: 'http://www.assemblee.mr'
        },
        {
          name: 'المحكمة العليا',
          description: 'أعلى هيئة قضائية مسؤولة عن التفسير القانوني النهائي والأحكام.',
          url: ''
        },
        {
          name: 'المجلس الدستوري',
          description: 'مسؤول عن التفسير الدستوري ومراقبة دستورية القوانين.',
          url: ''
        },
        {
          name: 'الرئاسة',
          description: 'رئيس الدولة والسلطة التنفيذية الذي يشرف على الشؤون الوطنية.',
          url: 'https://presidence.mr/index.php/fr'
        },
        {
          name: 'الوزارة الأولى',
          description: 'تساعد الرئيس في تنسيق وتنفيذ السياسات الحكومية.',
          url: 'http://www.primature.gov.mr'
        },
        {
          name: 'وزارة الشؤون الخارجية',
          description: 'مسؤولة عن السياسة الخارجية والعلاقات الدولية.',
          url: 'http://www.diplomatie.gov.mr'
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
  const pageTitle = locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions Constitutionnelles' : 'المؤسسات الدستورية'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={mauritaniaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/mauritania' }, { label: pageTitle }]}
    >
      {TEST_MODE ? <TestEnCours /> : <>
      {/* 설명 */}
      <section className="mb-12">
        <p className="text-gray-700 text-lg leading-relaxed">{c.description}</p>
      </section>

      {/* 헌법기관 목록 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '주요 기관' : locale === 'en' ? 'Major Institutions' : locale === 'fr' ? 'Institutions Principales' : 'المؤسسات الرئيسية'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {c.institutions.map((inst, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-theme-header mb-2">{inst.name}</h3>
              <p className="text-gray-700 text-[15px] mb-4">{inst.description}</p>
              {inst.url && (
                <a
                  href={inst.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
                >
                  {locale === 'ko' ? '공식 웹사이트 →' :
                   locale === 'fr' ? 'Site officiel →' :
                   locale === 'ar' ? 'الموقع الرسمي ←' : 'Official Website →'}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>}

    </SubPageLayout>
  )
}
