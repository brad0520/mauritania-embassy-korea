'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import Link from 'next/link'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function ConsularServicesPage() {
  const { locale } = useI18n()

  const services = [
    {
      category: '비자 서비스', icon: '🛂', link: '/consular/visa',
      items: [{ name: '관광비자', fee: '50,000원', duration: '15일' }, { name: '상용비자', fee: '70,000원', duration: '15일' }, { name: '학생비자', fee: '60,000원', duration: '20일' }, { name: '취업비자', fee: '100,000원', duration: '25일' }]
    },
    {
      category: '여권 서비스', icon: '📔', link: '/consular/passport',
      items: [{ name: '신규발급', fee: '80,000원', duration: '10-15일' }, { name: '재발급', fee: '80,000원', duration: '10-15일' }, { name: '연장', fee: '30,000원', duration: '3-5일' }]
    },
    {
      category: '증명서 발급', icon: '📋', link: '/consular/certificates',
      items: [{ name: '출생증명서', fee: '15,000원', duration: '3-5일' }, { name: '혼인증명서', fee: '15,000원', duration: '3-5일' }, { name: '범죄경력증명서', fee: '20,000원', duration: '7-10일' }]
    },
    {
      category: '기타 서비스', icon: '🔧', link: '/embassy/contact',
      items: [{ name: '공증서비스', fee: '25,000원', duration: '1-2일' }, { name: '번역서비스', fee: '30,000원', duration: '3-5일' }, { name: '자국민보호', fee: '무료', duration: '즉시' }]
    }
  ]

  const operatingHours = [
    { day: '월요일 - 금요일', time: '09:00 - 17:00', note: '영사업무: 09:00-12:00, 14:00-16:00' },
    { day: '토요일', time: '09:00 - 12:00', note: '긴급업무만' },
    { day: '일요일 및 공휴일', time: '휴무', note: '긴급연락: +82-10-1234-5678' }
  ]

  const consularMenuItems = [
    { label: locale === 'ko' ? '비자' : locale === 'en' ? 'Visa' : locale === 'fr' ? 'Visa' : 'التأشيرة', href: '/consular/visa' },
    { label: locale === 'ko' ? '여권' : locale === 'en' ? 'Passport' : locale === 'fr' ? 'Passeport' : 'جواز السفر', href: '/consular/passport' },
    { label: locale === 'ko' ? '혼인증명서' : locale === 'en' ? 'Marriage Certificate' : locale === 'fr' ? 'Acte de mariage' : 'شهادة الزواج', href: '/consular/marriage' },
    { label: locale === 'ko' ? '한국 유학' : locale === 'en' ? 'Study in Korea' : locale === 'fr' ? 'Étudier en Corée' : 'الدراسة في كوريا', href: '/consular/study-korea' }
  ]

  const menuTitle = locale === 'ko' ? '영사 서비스' : locale === 'en' ? 'Consular Services' : locale === 'fr' ? 'Services Consulaires' : 'الخدمات القنصلية'
  const pageTitle = locale === 'ko' ? '영사업무 안내' : locale === 'en' ? 'Consular Services Overview' : locale === 'fr' ? 'Services consulaires' : 'نظرة عامة على الخدمات القنصلية'

  return (
    <SubPageLayout menuTitle={menuTitle} menuItems={consularMenuItems} currentPageTitle={pageTitle} breadcrumbs={[{ label: menuTitle, href: '/consular' }, { label: pageTitle }]}>
      {/* 서비스 개요 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">영사부 서비스 개요</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-theme-header/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">2,847</div>
            <div className="text-gray-600 text-sm">2023년 총 처리건수</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-theme-nav/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">4.2일</div>
            <div className="text-gray-600 text-sm">평균 처리기간</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-theme-header/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">98.5%</div>
            <div className="text-gray-600 text-sm">고객 만족도</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-theme-nav/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">24시간</div>
            <div className="text-gray-600 text-sm">긴급지원</div>
          </div>
        </div>
      </section>

      {/* 서비스 카테고리 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">제공 서비스</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{service.icon}</span>
                <h3 className="text-lg font-bold text-theme-header">{service.category}</h3>
              </div>
              <div className="space-y-3 mb-6 text-[15px]">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700">{item.name}</span>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{item.fee}</div>
                      <div className="text-xs text-gray-500">{item.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href={service.link} className="inline-flex items-center text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity bg-theme-header">
                자세히 보기
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 운영 시간 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">운영 시간</h2>
        <div className="space-y-4 text-[15px]">
          {operatingHours.map((schedule, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{schedule.day}</h3>
                <p className="text-sm text-gray-500">{schedule.note}</p>
              </div>
              <span className={`font-medium ${schedule.time === '휴무' ? 'text-red-600' : 'text-gray-900'}`}>{schedule.time}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-lg bg-theme-header/10">
          <h3 className="font-bold text-gray-900 mb-2">🕒 예약 안내</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• 모든 영사업무는 사전 예약제로 운영됩니다</li>
            <li>• 온라인 예약: consular.mauritania.kr</li>
            <li>• 전화 예약: 02-793-4190</li>
          </ul>
        </div>
      </section>

      {/* 긴급 연락처 */}
      <section className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h2 className="text-lg font-bold text-red-800 mb-4">🚨 긴급 상황 연락처</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[15px]">
          <div>
            <span className="text-red-700 block font-medium">24시간 긴급전화</span>
            <span className="text-red-800 font-bold text-lg">+82-10-1234-5678</span>
          </div>
          <div>
            <span className="text-red-700 block font-medium">응급상황</span>
            <span className="text-red-800">사건사고, 의료응급, 자국민 보호</span>
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}
