'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function ConsularAnnouncementsPage() {
  const { locale } = useI18n()

  const consularMenuItems = [
    { label: locale === 'ko' ? '비자' : locale === 'en' ? 'Visa' : locale === 'fr' ? 'Visa' : 'التأشيرة', href: '/consular/visa' },
    { label: locale === 'ko' ? '여권' : locale === 'en' ? 'Passport' : locale === 'fr' ? 'Passeport' : 'جواز السفر', href: '/consular/passport' },
    { label: locale === 'ko' ? '혼인증명서' : locale === 'en' ? 'Marriage Certificate' : locale === 'fr' ? 'Acte de mariage' : 'شهادة الزواج', href: '/consular/marriage' },
    { label: locale === 'ko' ? '한국 유학' : locale === 'en' ? 'Study in Korea' : locale === 'fr' ? 'Étudier en Corée' : 'الدراسة في كوريا', href: '/consular/study-korea' }
  ]

  const menuTitle = locale === 'ko' ? '영사 업무' : 'Consular Services'
  const pageTitle = locale === 'ko' ? '공지사항' : 'Announcements'

  // 샘플 공지 데이터
  const announcements = [
    {
      date: '2026.01.08',
      title: locale === 'ko' ? '비자 신청 시스템 업데이트 안내' : 'Visa Application System Update',
      important: true
    },
    {
      date: '2026.01.02',
      title: locale === 'ko' ? '2026년 영사업무 운영 시간 안내' : '2026 Consular Services Operating Hours',
      important: false
    },
    {
      date: '2025.12.15',
      title: locale === 'ko' ? '여권 신청 서류 변경 안내' : 'Passport Application Document Changes',
      important: false
    }
  ]

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={consularMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/consular' }, { label: pageTitle }]}
    >
      {/* 공지사항 목록 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '영사업무 공지' : 'Consular Announcements'}
        </h2>

        <div className="space-y-3">
          {announcements.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-shadow hover:shadow-md ${
                item.important ? 'bg-red-50 border-red-200' : 'bg-white'
              }`}
            >
              {item.important && (
                <span className="flex-shrink-0 px-2 py-0.5 rounded text-xs font-bold bg-red-500 text-white">
                  {locale === 'ko' ? '중요' : 'Important'}
                </span>
              )}
              <span className="flex-1 text-[15px] text-gray-900">{item.title}</span>
              <span className="flex-shrink-0 text-sm text-gray-500">{item.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 문의 안내 */}
      <section className="bg-theme-header/10 border border-theme-header/30 rounded-lg p-6">
        <h2 className="text-lg font-bold text-theme-header mb-4">
          📞 {locale === 'ko' ? '문의' : 'Contact'}
        </h2>
        <div className="text-gray-700 text-[15px] space-y-2">
          <p>• {locale === 'ko' ? '전화' : 'Phone'}: 02-793-4190</p>
          <p>• {locale === 'ko' ? '이메일' : 'Email'}: consular@mauritania-embassy.kr</p>
          <p>• {locale === 'ko' ? '업무시간' : 'Hours'}: 09:00 - 17:00 ({locale === 'ko' ? '평일' : 'Weekdays'})</p>
        </div>
      </section>
    </SubPageLayout>
  )
}
