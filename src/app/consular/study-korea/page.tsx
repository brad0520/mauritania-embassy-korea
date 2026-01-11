'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function StudyKoreaPage() {
  const { locale } = useI18n()

  const content = {
    ko: {
      title: '한국유학',
      description: '한국에서의 학업 기회에 대한 정보를 제공합니다.',
      scholarships: '장학금 프로그램',
      scholarshipsList: [
        'KGSP (한국정부초청장학생) 프로그램',
        '대학별 외국인 장학금',
        '교환학생 프로그램'
      ],
      requirements: '입학 요건',
      requirementsList: [
        '고등학교 졸업 이상 학력',
        '한국어 또는 영어 능력 증명',
        '재정 증명',
        '유효한 여권'
      ],
      links: '유용한 링크',
      linksList: [
        { name: 'Study in Korea', url: 'https://www.studyinkorea.go.kr' },
        { name: 'TOPIK (한국어능력시험)', url: 'https://www.topik.go.kr' }
      ]
    },
    en: {
      title: 'Study in Korea',
      description: 'Information about educational opportunities in Korea.',
      scholarships: 'Scholarship Programs',
      scholarshipsList: [
        'KGSP (Korean Government Scholarship Program)',
        'University-specific international scholarships',
        'Exchange student programs'
      ],
      requirements: 'Admission Requirements',
      requirementsList: [
        'High school diploma or higher',
        'Korean or English proficiency proof',
        'Financial documentation',
        'Valid passport'
      ],
      links: 'Useful Links',
      linksList: [
        { name: 'Study in Korea', url: 'https://www.studyinkorea.go.kr' },
        { name: 'TOPIK (Korean Language Test)', url: 'https://www.topik.go.kr' }
      ]
    },
    fr: {
      title: 'Étudier en Corée',
      description: 'Informations sur les opportunités éducatives en Corée.',
      scholarships: 'Programmes de Bourses',
      scholarshipsList: [
        'KGSP (Programme de Bourses du Gouvernement Coréen)',
        'Bourses internationales universitaires',
        'Programmes d\'échange étudiant'
      ],
      requirements: 'Conditions d\'Admission',
      requirementsList: [
        'Diplôme de fin d\'études secondaires ou supérieur',
        'Preuve de compétence en coréen ou anglais',
        'Justificatifs financiers',
        'Passeport valide'
      ],
      links: 'Liens Utiles',
      linksList: [
        { name: 'Study in Korea', url: 'https://www.studyinkorea.go.kr' },
        { name: 'TOPIK (Test de Langue Coréenne)', url: 'https://www.topik.go.kr' }
      ]
    },
    ar: {
      title: 'الدراسة في كوريا',
      description: 'معلومات حول الفرص التعليمية في كوريا.',
      scholarships: 'برامج المنح الدراسية',
      scholarshipsList: [
        'برنامج المنح الحكومية الكورية (KGSP)',
        'المنح الدولية الجامعية',
        'برامج التبادل الطلابي'
      ],
      requirements: 'متطلبات القبول',
      requirementsList: [
        'شهادة الثانوية العامة أو أعلى',
        'إثبات الكفاءة في الكورية أو الإنجليزية',
        'الوثائق المالية',
        'جواز سفر ساري المفعول'
      ],
      links: 'روابط مفيدة',
      linksList: [
        { name: 'Study in Korea', url: 'https://www.studyinkorea.go.kr' },
        { name: 'TOPIK (اختبار اللغة الكورية)', url: 'https://www.topik.go.kr' }
      ]
    }
  }

  const c = content[locale as keyof typeof content] || content.ko

  const consularMenuItems = [
    { label: locale === 'ko' ? '비자' : locale === 'en' ? 'Visa' : locale === 'fr' ? 'Visa' : 'التأشيرة', href: '/consular/visa' },
    { label: locale === 'ko' ? '여권' : locale === 'en' ? 'Passport' : locale === 'fr' ? 'Passeport' : 'جواز السفر', href: '/consular/passport' },
    { label: locale === 'ko' ? '혼인증명서' : locale === 'en' ? 'Marriage Certificate' : locale === 'fr' ? 'Acte de mariage' : 'شهادة الزواج', href: '/consular/marriage' },
    { label: locale === 'ko' ? '한국 유학' : locale === 'en' ? 'Study in Korea' : locale === 'fr' ? 'Étudier en Corée' : 'الدراسة في كوريا', href: '/consular/study-korea' }
  ]

  const menuTitle = locale === 'ko' ? '영사 업무' : locale === 'en' ? 'Consular Services' : locale === 'fr' ? 'Services Consulaires' : 'الخدمات القنصلية'
  const pageTitle = locale === 'ko' ? '한국 유학' : locale === 'en' ? 'Study in Korea' : locale === 'fr' ? 'Étudier en Corée' : 'الدراسة في كوريا'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={consularMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/consular' }, { label: pageTitle }]}
    >
      {/* 설명 */}
      <section className="mb-12">
        <p className="text-gray-700 text-lg leading-relaxed">{c.description}</p>
      </section>

      {/* 장학금 프로그램 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">{c.scholarships}</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <ul className="space-y-3">
            {c.scholarshipsList.map((item, index) => (
              <li key={index} className="flex items-start text-[15px]">
                <span className="text-blue-600 mr-3">•</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 입학 요건 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">{c.requirements}</h2>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <ul className="space-y-3">
            {c.requirementsList.map((item, index) => (
              <li key={index} className="flex items-start text-[15px]">
                <span className="text-green-600 mr-3 font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 유용한 링크 */}
      <section className="bg-theme-header/10 border border-theme-header/30 rounded-lg p-6">
        <h2 className="text-lg font-bold text-theme-header mb-4">{c.links}</h2>
        <div className="space-y-3">
          {c.linksList.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-800 hover:underline text-[15px]"
            >
              {link.name} →
            </a>
          ))}
        </div>
      </section>
    </SubPageLayout>
  )
}
