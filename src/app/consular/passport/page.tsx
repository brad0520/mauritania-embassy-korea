'use client'

import React, { useState } from 'react'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import { cn } from '@/lib/utils'

export default function PassportPage() {
  const { t, locale } = useI18n()
  const { currentTheme } = useTheme()
  const [selectedService, setSelectedService] = useState('new')

  const passportServices = [
    { id: 'new', name: t('passport.newIssuance'), description: t('passport.newIssuanceDesc'), fee: t('passport.newIssuanceFee'), duration: t('passport.newIssuanceDuration'), validPeriod: t('passport.newIssuanceValidity') },
    { id: 'renewal', name: t('passport.renewal'), description: t('passport.renewalDesc'), fee: t('passport.renewalFee'), duration: t('passport.renewalDuration'), validPeriod: t('passport.renewalValidity') },
    { id: 'extension', name: t('passport.extension'), description: t('passport.extensionDesc'), fee: t('passport.extensionFee'), duration: t('passport.extensionDuration'), validPeriod: t('passport.extensionValidity') },
    { id: 'minor', name: t('passport.minor'), description: t('passport.minorDesc'), fee: t('passport.minorFee'), duration: t('passport.minorDuration'), validPeriod: t('passport.minorValidity') }
  ]

  const requiredDocuments = {
    new: ['여권발급신청서 (대사관에서 작성)', '신분증 원본', '여권용 사진 2매', '출생증명서 또는 가족관계증명서', '병역관련 서류 (해당자에 한함)', '수수료 80,000원'],
    renewal: ['여권발급신청서', '기존 여권 (분실 시 분실신고서)', '신분증 원본', '여권용 사진 2매', '수수료 80,000원'],
    extension: ['여권연장신청서', '기존 여권 원본', '연장사유서', '관련 증빙서류', '수수료 30,000원'],
    minor: ['여권발급신청서 (법정대리인 작성)', '미성년자 신분증 또는 학생증', '법정대리인 신분증 원본', '가족관계증명서', '법정대리인 동의서', '여권용 사진 2매', '수수료 50,000원']
  }

  const consularMenuItems = [
    { label: locale === 'ko' ? '비자' : locale === 'en' ? 'Visa' : locale === 'fr' ? 'Visa' : 'التأشيرة', href: '/consular/visa' },
    { label: locale === 'ko' ? '여권' : locale === 'en' ? 'Passport' : locale === 'fr' ? 'Passeport' : 'جواز السفر', href: '/consular/passport' },
    { label: locale === 'ko' ? '혼인증명서' : locale === 'en' ? 'Marriage Certificate' : locale === 'fr' ? 'Acte de mariage' : 'شهادة الزواج', href: '/consular/marriage' },
    { label: locale === 'ko' ? '한국 유학' : locale === 'en' ? 'Study in Korea' : locale === 'fr' ? 'Étudier en Corée' : 'الدراسة في كوريا', href: '/consular/study-korea' }
  ]

  const menuTitle = locale === 'ko' ? '영사 서비스' : locale === 'en' ? 'Consular Services' : locale === 'fr' ? 'Services Consulaires' : 'الخدمات القنصلية'
  const pageTitle = locale === 'ko' ? '여권 발급' : locale === 'en' ? 'Passport Services' : locale === 'fr' ? 'Passeports' : 'خدمات جواز السفر'

  return (
    <SubPageLayout menuTitle={menuTitle} menuItems={consularMenuItems} currentPageTitle={pageTitle} breadcrumbs={[{ label: menuTitle, href: '/consular' }, { label: pageTitle }]}>
      {/* 서비스 선택 탭 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">여권 서비스 종류</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {passportServices.map((service) => (
            <button key={service.id} onClick={() => setSelectedService(service.id)}
              className={cn('p-4 rounded-lg border-2 text-left transition-all hover:shadow-md', selectedService === service.id ? 'border-theme-header bg-theme-header/10' : 'border-gray-200 hover:border-gray-300')}>
              <h3 className="font-bold text-lg mb-2" style={{ color: selectedService === service.id ? 'var(--theme-header)' : '#374151' }}>{service.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{service.description}</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between"><span className="text-gray-500">수수료:</span><span className="font-medium">{service.fee}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">소요기간:</span><span className="font-medium">{service.duration}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">유효기간:</span><span className="font-medium">{service.validPeriod}</span></div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 필요 서류 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">{passportServices.find(s => s.id === selectedService)?.name} 필요 서류</h2>
        <div className="space-y-4 text-[15px]">
          {requiredDocuments[selectedService as keyof typeof requiredDocuments]?.map((doc, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5 bg-theme-header">{index + 1}</div>
              <p className="text-gray-700">{doc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-lg bg-theme-header/10">
          <h3 className="font-bold text-gray-900 mb-2">📝 주의사항</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 모든 서류는 원본을 지참해 주세요</li>
            <li>• 여권용 사진은 최근 6개월 이내 촬영된 것이어야 합니다</li>
            <li>• 서류 미비 시 접수가 불가할 수 있습니다</li>
          </ul>
        </div>
      </section>

      {/* 신청 절차 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">신청 절차</h2>
        <div className="space-y-6 text-[15px]">
          {[
            { step: 1, title: '사전 예약', desc: '온라인 또는 전화로 방문 일정 예약' },
            { step: 2, title: '서류 준비', desc: '필요 서류를 모두 준비' },
            { step: 3, title: '대사관 방문', desc: '예약 시간에 영사부 방문하여 신청서 작성 및 접수' },
            { step: 4, title: '수수료 결제', desc: '해당 서비스 수수료 결제' },
            { step: 5, title: '처리 및 수령', desc: '처리 완료 후 SMS 알림, 대사관 방문하여 수령' }
          ].map((item, index) => (
            <div key={item.step} className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-theme-header">{item.step}</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
                {index < 4 && <div className="mt-3 ml-5 h-6 w-0.5 bg-theme-nav"></div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 사진 규정 */}
      <section>
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">여권사진 규정</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px]">
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">기본 규격</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>크기:</strong> 3.5cm × 4.5cm</li>
              <li>• <strong>촬영 시기:</strong> 최근 6개월 이내</li>
              <li>• <strong>배경:</strong> 흰색 무지</li>
              <li>• <strong>매수:</strong> 2매</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">촬영 주의사항</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 정면을 바라보며 자연스러운 표정</li>
              <li>• 모자, 선글라스 착용 금지</li>
              <li>• 안경 착용 시 렌즈에 빛 반사 없어야 함</li>
              <li>• 컬러 사진만 가능</li>
            </ul>
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}
