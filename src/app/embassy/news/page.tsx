'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function EmbassyNewsPage() {
  const { locale } = useI18n()

  const embassyMenuItems = [
    { label: locale === 'ko' ? '대사 인사말' : 'Ambassador\'s Message', href: '/embassy/ambassador' },
    { label: locale === 'ko' ? '소식' : 'News', href: '/embassy/news' },
    { label: locale === 'ko' ? '연락처' : 'Contact Us', href: '/embassy/contact' }
  ]

  const menuTitle = locale === 'ko' ? '대사관' : 'Embassy'
  const pageTitle = locale === 'ko' ? '소식' : 'News'

  // 샘플 뉴스 데이터
  const newsItems = [
    {
      date: '2026.01.10',
      title: locale === 'ko' ? '대사관 설 연휴 휴무 안내' : 'Embassy Lunar New Year Holiday Notice',
      category: locale === 'ko' ? '공지' : 'Notice'
    },
    {
      date: '2026.01.05',
      title: locale === 'ko' ? '한-모리타니아 우호협력 협정 체결' : 'Korea-Mauritania Friendship Agreement Signed',
      category: locale === 'ko' ? '보도자료' : 'Press'
    },
    {
      date: '2025.12.20',
      title: locale === 'ko' ? '문화교류 행사 개최' : 'Cultural Exchange Event Held',
      category: locale === 'ko' ? '행사' : 'Event'
    }
  ]

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={embassyMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/embassy' }, { label: pageTitle }]}
    >
      {/* 뉴스 목록 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '최신 소식' : 'Latest News'}
        </h2>

        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex-shrink-0 px-3 py-1 rounded text-sm font-medium bg-theme-header/10 text-theme-header">
                {item.category}
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] font-medium text-gray-900 mb-1">{item.title}</h3>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 안내 */}
      <section className="bg-theme-header/10 border border-theme-header/30 rounded-lg p-6">
        <h2 className="text-lg font-bold text-theme-header mb-4">
          📢 {locale === 'ko' ? '알림' : 'Notice'}
        </h2>
        <p className="text-gray-700 text-[15px]">
          {locale === 'ko'
            ? '대사관의 최신 소식과 공지사항을 확인하실 수 있습니다. 중요 공지는 홈페이지에 별도 게시됩니다.'
            : 'Check out the latest news and announcements from the Embassy. Important notices are posted separately on the homepage.'}
        </p>
      </section>
    </SubPageLayout>
  )
}
