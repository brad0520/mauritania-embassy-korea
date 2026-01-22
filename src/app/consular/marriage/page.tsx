'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import TestEnCours from '@/components/TestEnCours'

// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경
const TEST_MODE = true

export default function MarriagePage() {
  const { locale } = useI18n()

  const content = {
    ko: {
      title: '혼인증명서',
      description: '모리타니아 국민의 혼인증명서 발급 서비스를 제공합니다.',
      requirements: '필요 서류',
      requirementsList: [
        '신청서 (대사관 양식)',
        '여권 사본',
        '혼인 관련 증빙 서류',
        '수수료'
      ],
      process: '발급 절차',
      processList: [
        '필요 서류 준비',
        '대사관 방문 또는 우편 접수',
        '서류 검토 및 처리',
        '증명서 수령'
      ],
      contact: '문의: ambarimseoul@diplomatie.gov.mr'
    },
    en: {
      title: 'Marriage Certificate',
      description: 'We provide marriage certificate issuance services for Mauritanian citizens.',
      requirements: 'Required Documents',
      requirementsList: [
        'Application form (Embassy format)',
        'Passport copy',
        'Marriage-related supporting documents',
        'Processing fee'
      ],
      process: 'Issuance Process',
      processList: [
        'Prepare required documents',
        'Visit embassy or submit by mail',
        'Document review and processing',
        'Receive certificate'
      ],
      contact: 'Contact: ambarimseoul@diplomatie.gov.mr'
    },
    fr: {
      title: 'Acte de Mariage',
      description: 'Nous fournissons des services de délivrance d\'actes de mariage pour les citoyens mauritaniens.',
      requirements: 'Documents Requis',
      requirementsList: [
        'Formulaire de demande (format Ambassade)',
        'Copie du passeport',
        'Documents justificatifs de mariage',
        'Frais de traitement'
      ],
      process: 'Procédure de Délivrance',
      processList: [
        'Préparer les documents requis',
        'Visiter l\'ambassade ou envoyer par courrier',
        'Examen et traitement des documents',
        'Recevoir le certificat'
      ],
      contact: 'Contact: ambarimseoul@diplomatie.gov.mr'
    },
    ar: {
      title: 'شهادة الزواج',
      description: 'نقدم خدمات إصدار شهادات الزواج للمواطنين الموريتانيين.',
      requirements: 'المستندات المطلوبة',
      requirementsList: [
        'استمارة الطلب (نموذج السفارة)',
        'نسخة جواز السفر',
        'وثائق داعمة للزواج',
        'رسوم المعالجة'
      ],
      process: 'إجراءات الإصدار',
      processList: [
        'تحضير المستندات المطلوبة',
        'زيارة السفارة أو الإرسال بالبريد',
        'مراجعة ومعالجة المستندات',
        'استلام الشهادة'
      ],
      contact: 'للتواصل: ambarimseoul@diplomatie.gov.mr'
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
  const pageTitle = locale === 'ko' ? '혼인증명서' : locale === 'en' ? 'Marriage Certificate' : locale === 'fr' ? 'Acte de Mariage' : 'شهادة الزواج'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={consularMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/consular' }, { label: pageTitle }]}
    >
      {TEST_MODE ? <TestEnCours /> : <>
      {/* 설명 */}
      <section className="mb-12">
        <p className="text-gray-700 text-lg leading-relaxed">{c.description}</p>
      </section>

      {/* 필요 서류 & 발급 절차 */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-bold mb-4 pb-3 border-b-2 border-theme-header text-theme-header">{c.requirements}</h2>
            <ul className="space-y-3">
              {c.requirementsList.map((item, index) => (
                <li key={index} className="flex items-start text-[15px]">
                  <span className="text-green-600 mr-3 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-bold mb-4 pb-3 border-b-2 border-theme-header text-theme-header">{c.process}</h2>
            <ol className="space-y-3">
              {c.processList.map((item, index) => (
                <li key={index} className="flex items-start text-[15px]">
                  <span className="bg-theme-header text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 문의 */}
      <section className="bg-theme-header/10 border border-theme-header/30 rounded-lg p-6">
        <p className="text-gray-700 text-[15px]">{c.contact}</p>
      </section>
    </>}

    </SubPageLayout>
  )
}
