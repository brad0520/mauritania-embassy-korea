'use client'

import React, { useState } from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import TestEnCours from '@/components/TestEnCours'

// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경
const TEST_MODE = true
import { cn } from '@/lib/utils'

export default function CertificatesPage() {
  const { locale } = useI18n()
  const [selectedCertificate, setSelectedCertificate] = useState('birth')

  const certificates = [
    { id: 'birth', name: '출생증명서', description: '출생 사실을 증명', fee: '15,000원', duration: '3-5일', usage: '취학, 취업, 결혼' },
    { id: 'marriage', name: '혼인증명서', description: '혼인 관계를 증명', fee: '15,000원', duration: '3-5일', usage: '비자, 법적 절차' },
    { id: 'death', name: '사망증명서', description: '사망 사실을 증명', fee: '15,000원', duration: '3-5일', usage: '상속, 보험' },
    { id: 'residence', name: '거주증명서', description: '거주지를 증명', fee: '12,000원', duration: '2-3일', usage: '은행, 계약' },
    { id: 'income', name: '소득증명서', description: '소득 상황을 증명', fee: '18,000원', duration: '5-7일', usage: '대출, 비자' },
    { id: 'criminal', name: '범죄경력증명서', description: '범죄 기록 유무', fee: '20,000원', duration: '7-10일', usage: '취업, 이민' },
    { id: 'academic', name: '학력증명서', description: '학력을 증명', fee: '15,000원', duration: '5-7일', usage: '취업, 진학' },
    { id: 'military', name: '병역증명서', description: '병역 이행을 증명', fee: '12,000원', duration: '3-5일', usage: '취업' }
  ]

  const requiredDocuments = {
    birth: ['증명서 발급신청서', '신청자 신분증 원본', '출생신고서 또는 가족관계증명서', '수수료 15,000원'],
    marriage: ['증명서 발급신청서', '신청자 신분증 원본', '혼인신고서', '배우자 동의서 (해당시)', '수수료 15,000원'],
    death: ['증명서 발급신청서', '신청자 신분증 원본', '사망신고서', '가족관계 증명서류', '수수료 15,000원'],
    residence: ['증명서 발급신청서', '신분증 원본', '거주지 확인 서류', '수수료 12,000원'],
    income: ['증명서 발급신청서', '신분증 원본', '소득 관련 서류', '세금 납부 증명서', '수수료 18,000원'],
    criminal: ['증명서 발급신청서', '신분증 원본', '지문카드', '사용 목적서', '수수료 20,000원'],
    academic: ['증명서 발급신청서', '신분증 원본', '졸업증명서', '수수료 15,000원'],
    military: ['증명서 발급신청서', '신분증 원본', '병적증명서', '수수료 12,000원']
  }

  const consularMenuItems = [
    { label: locale === 'ko' ? '비자' : locale === 'en' ? 'Visa' : locale === 'fr' ? 'Visa' : 'التأشيرة', href: '/consular/visa' },
    { label: locale === 'ko' ? '여권' : locale === 'en' ? 'Passport' : locale === 'fr' ? 'Passeport' : 'جواز السفر', href: '/consular/passport' },
    { label: locale === 'ko' ? '혼인증명서' : locale === 'en' ? 'Marriage Certificate' : locale === 'fr' ? 'Acte de mariage' : 'شهادة الزواج', href: '/consular/marriage' },
    { label: locale === 'ko' ? '한국 유학' : locale === 'en' ? 'Study in Korea' : locale === 'fr' ? 'Étudier en Corée' : 'الدراسة في كوريا', href: '/consular/study-korea' }
  ]

  const menuTitle = locale === 'ko' ? '영사 서비스' : locale === 'en' ? 'Consular Services' : locale === 'fr' ? 'Services Consulaires' : 'الخدمات القنصلية'
  const pageTitle = locale === 'ko' ? '증명서 발급' : locale === 'en' ? 'Certificates' : locale === 'fr' ? 'Certificats' : 'الشهادات'

  return (
    <SubPageLayout menuTitle={menuTitle} menuItems={consularMenuItems} currentPageTitle={pageTitle} breadcrumbs={[{ label: menuTitle, href: '/consular' }, { label: pageTitle }]}>
      {TEST_MODE ? <TestEnCours /> : <>
      {/* 증명서 종류 선택 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">발급 가능한 증명서</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert) => (
            <button key={cert.id} onClick={() => setSelectedCertificate(cert.id)}
              className={cn('p-4 rounded-lg border-2 text-left transition-all hover:shadow-md', selectedCertificate === cert.id ? 'border-theme-header bg-theme-header/10' : 'border-gray-200 hover:border-gray-300')}>
              <h3 className="font-bold text-lg mb-2" style={{ color: selectedCertificate === cert.id ? 'var(--theme-header)' : '#374151' }}>{cert.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between"><span className="text-gray-500">수수료:</span><span className="font-medium">{cert.fee}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">소요기간:</span><span className="font-medium">{cert.duration}</span></div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 선택된 증명서 상세 정보 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">{certificates.find(c => c.id === selectedCertificate)?.name} 발급 안내</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-theme-header/10 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1 text-theme-header">{certificates.find(c => c.id === selectedCertificate)?.fee}</div>
            <div className="text-sm text-gray-600">발급 수수료</div>
          </div>
          <div className="bg-theme-nav/10 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1 text-theme-header">{certificates.find(c => c.id === selectedCertificate)?.duration}</div>
            <div className="text-sm text-gray-600">처리 기간</div>
          </div>
          <div className="bg-theme-header/10 p-4 rounded-lg text-center">
            <div className="text-lg font-bold mb-1 text-theme-header">{certificates.find(c => c.id === selectedCertificate)?.usage}</div>
            <div className="text-sm text-gray-600">주요 용도</div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-4">필요 서류</h3>
        <div className="space-y-3 text-[15px]">
          {requiredDocuments[selectedCertificate as keyof typeof requiredDocuments]?.map((doc, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5 bg-theme-header">{index + 1}</div>
              <p className="text-gray-700">{doc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg bg-theme-header/10">
          <h4 className="font-bold text-gray-900 mb-2">📝 주의사항</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 모든 서류는 원본을 지참해 주세요</li>
            <li>• 증명서는 발급일로부터 3개월간 유효합니다</li>
            <li>• 대리 신청 시 위임장과 대리인 신분증이 필요합니다</li>
          </ul>
        </div>
      </section>

      {/* 수수료 안내 */}
      <section>
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">수수료 안내</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-[15px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">증명서 종류</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">기본 수수료</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">영문 번역</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">긴급 처리</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {certificates.map((cert, index) => (
                <tr key={cert.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cert.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cert.fee}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">+10,000원</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">+15,000원</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>}

    </SubPageLayout>
  )
}
