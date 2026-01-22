'use client'

import React, { useState } from 'react'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import TestEnCours from '@/components/TestEnCours'

// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경
const TEST_MODE = true

export default function VisaPage() {
  const { t, locale } = useI18n()
  const { currentTheme } = useTheme()
  const [activeTab, setActiveTab] = useState('tourist')

  const visaTypes = [
    {
      id: 'tourist',
      name: '관광비자',
      price: '50,000원',
      duration: '30일',
      processing: '5-7일',
      description: '관광 목적의 단기 체류를 위한 비자'
    },
    {
      id: 'business',
      name: '상용비자',
      price: '70,000원',
      duration: '90일',
      processing: '5-7일',
      description: '사업 관련 목적의 체류를 위한 비자'
    },
    {
      id: 'transit',
      name: '경유비자',
      price: '30,000원',
      duration: '7일',
      processing: '3-5일',
      description: '다른 국가로의 경유를 위한 비자'
    }
  ]

  const requiredDocuments = {
    tourist: [
      '여권 (유효기간 6개월 이상)',
      '비자 신청서 1부',
      '여권용 사진 2매 (3.5×4.5cm)',
      '항공권 예약 확인서',
      '숙박 예약 확인서',
      '여행 일정표',
      '재정 증명서 (영문 잔고증명서)',
      '신청 수수료'
    ],
    business: [
      '여권 (유효기간 6개월 이상)',
      '비자 신청서 1부',
      '여권용 사진 2매 (3.5×4.5cm)',
      '초청장 또는 사업 관련 서류',
      '회사 재직증명서',
      '사업자등록증 사본',
      '항공권 예약 확인서',
      '재정 증명서',
      '신청 수수료'
    ],
    transit: [
      '여권 (유효기간 6개월 이상)',
      '비자 신청서 1부',
      '여권용 사진 1매',
      '최종 목적지 비자 또는 입국 허가서',
      '항공권 예약 확인서 (경유 포함)',
      '신청 수수료'
    ]
  }

  const applicationProcess = [
    { step: 1, title: '서류 준비', description: '필요한 서류를 모두 준비합니다.', icon: '📋' },
    { step: 2, title: '신청서 작성', description: '비자 신청서를 정확히 작성합니다.', icon: '✍️' },
    { step: 3, title: '대사관 방문', description: '준비한 서류와 함께 대사관을 방문합니다.', icon: '🏢' },
    { step: 4, title: '심사 진행', description: '대사관에서 신청서류를 검토합니다.', icon: '🔍' },
    { step: 5, title: '비자 발급', description: '심사 완료 후 비자를 수령합니다.', icon: '✅' }
  ]

  // 영사 서비스 메뉴 구조 (Header 드롭다운과 일치)
  const consularMenuItems = [
    {
      label: locale === 'ko' ? '비자' : locale === 'en' ? 'Visa' : locale === 'fr' ? 'Visa' : 'التأشيرة',
      href: '/consular/visa'
    },
    {
      label: locale === 'ko' ? '여권' : locale === 'en' ? 'Passport' : locale === 'fr' ? 'Passeport' : 'جواز السفر',
      href: '/consular/passport'
    },
    {
      label: locale === 'ko' ? '혼인증명서' : locale === 'en' ? 'Marriage Certificate' : locale === 'fr' ? 'Acte de mariage' : 'شهادة الزواج',
      href: '/consular/marriage'
    },
    {
      label: locale === 'ko' ? '한국 유학' : locale === 'en' ? 'Study in Korea' : locale === 'fr' ? 'Étudier en Corée' : 'الدراسة في كوريا',
      href: '/consular/study-korea'
    }
  ]

  const menuTitle = locale === 'ko' ? '영사 서비스' :
                    locale === 'en' ? 'Consular Services' :
                    locale === 'fr' ? 'Services Consulaires' :
                    'الخدمات القنصلية'

  const pageTitle = locale === 'ko' ? '비자 안내' :
                    locale === 'en' ? 'Visa Information' :
                    locale === 'fr' ? 'Informations sur les visas' :
                    'معلومات التأشيرة'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={consularMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[
        { label: menuTitle, href: '/consular' },
        { label: pageTitle }
      ]}
    >
      {TEST_MODE ? <TestEnCours /> : <>
      {/* 중요 공지 */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">중요 안내사항</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <ul className="list-disc list-inside space-y-1">
                <li>비자 신청은 대사관 운영시간 (월~금 09:00-17:00) 내에만 가능합니다.</li>
                <li>모든 서류는 한국어 또는 영어로 작성되어야 합니다.</li>
                <li>비자 발급은 심사 결과에 따라 거부될 수 있습니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 비자 종류 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          비자 종류 및 요금
        </h2>

        {/* 비자 타입 탭 */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {visaTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === type.id
                    ? 'border-theme-header text-theme-header'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {type.name}
              </button>
            ))}
          </nav>
        </div>

        {/* 선택된 비자 타입 정보 */}
        {visaTypes.map((type) => (
          activeTab === type.id && (
            <div key={type.id} className="space-y-6">
              <div className="bg-theme-header/10 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-semibold text-theme-header">신청 수수료</h3>
                    <p className="text-2xl font-bold text-theme-header">{type.price}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-theme-header">체류 기간</h3>
                    <p className="text-lg font-medium text-theme-header">{type.duration}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-theme-header">처리 기간</h3>
                    <p className="text-lg font-medium text-theme-header">{type.processing}</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">{type.description}</p>
              </div>

              {/* 필요 서류 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-theme-header">필요 서류</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2">
                    {requiredDocuments[type.id as keyof typeof requiredDocuments].map((doc, index) => (
                      <li key={index} className="flex items-start space-x-2 text-[15px]">
                        <span className="text-theme-header mt-1">•</span>
                        <span className="text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        ))}
      </section>

      {/* 신청 절차 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          신청 절차
        </h2>

        <div className="space-y-6">
          {applicationProcess.map((step, index) => (
            <div key={step.step} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-theme-header">
                {step.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-700 text-[15px]">{step.description}</p>
                {index < applicationProcess.length - 1 && (
                  <div className="mt-4 ml-5 h-8 w-0.5 bg-theme-nav"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 추가 정보 */}
      <section>
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          추가 정보 및 주의사항
        </h2>

        <div className="space-y-6 text-[15px]">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">비자 신청 시 유의사항</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>여권 유효기간이 입국일로부터 최소 6개월 이상 남아있어야 합니다.</li>
              <li>사진은 최근 6개월 이내에 촬영한 것으로 배경은 흰색이어야 합니다.</li>
              <li>미성년자의 경우 부모 동의서와 가족관계증명서가 추가로 필요합니다.</li>
              <li>기존에 모리타니아 입국 기록이 있는 경우 관련 서류를 함께 제출해야 합니다.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">비자 연장 및 변경</h3>
            <p className="text-gray-700 leading-relaxed">
              모리타니아 현지에서 비자 연장이나 체류 목적 변경이 필요한 경우, 모리타니아 내무부
              또는 관련 기관에서 절차를 진행해야 합니다.
            </p>
          </div>
        </div>
      </section>
      </>}
    </SubPageLayout>
  )
}
