'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

// 공지사항 타입
interface NoticeItem {
  id: string
  date: string
  title: { ko: string; en: string; fr: string; ar: string }
  category: 'notice' | 'news' | 'event'
}

// 더미 공지사항 데이터 (test en cours)
const noticeItems: NoticeItem[] = [
  {
    id: '1',
    date: '2026.01.10',
    title: {
      ko: 'test en cours',
      en: 'test en cours',
      fr: 'test en cours',
      ar: 'test en cours'
    },
    category: 'news'
  },
  {
    id: '2',
    date: '2026.01.08',
    title: {
      ko: 'test en cours',
      en: 'test en cours',
      fr: 'test en cours',
      ar: 'test en cours'
    },
    category: 'event'
  },
  {
    id: '3',
    date: '2026.01.05',
    title: {
      ko: 'test en cours',
      en: 'test en cours',
      fr: 'test en cours',
      ar: 'test en cours'
    },
    category: 'notice'
  },
  {
    id: '4',
    date: '2025.12.28',
    title: {
      ko: 'test en cours',
      en: 'test en cours',
      fr: 'test en cours',
      ar: 'test en cours'
    },
    category: 'event'
  },
  {
    id: '5',
    date: '2025.12.20',
    title: {
      ko: 'test en cours',
      en: 'test en cours',
      fr: 'test en cours',
      ar: 'test en cours'
    },
    category: 'notice'
  }
]

// 탭 타입
type TabType = 'all' | 'notice' | 'news' | 'event'

export default function MainContentSection() {
  const { locale, isRTL, direction } = useI18n()
  const [activeTab, setActiveTab] = useState<TabType>('all')

  const currentLocale = locale as 'ko' | 'en' | 'fr' | 'ar'

  // 탭 레이블
  const tabLabels: Record<TabType, { ko: string; en: string; fr: string; ar: string }> = {
    all: { ko: '전체', en: 'All', fr: 'Tout', ar: 'الكل' },
    notice: { ko: '공지사항', en: 'Notices', fr: 'Avis', ar: 'إعلانات' },
    news: { ko: '대사관 소식', en: 'Embassy News', fr: 'Actualités', ar: 'أخبار السفارة' },
    event: { ko: '행사', en: 'Events', fr: 'Événements', ar: 'فعاليات' }
  }

  // 필터링된 공지사항
  const filteredItems = activeTab === 'all'
    ? noticeItems
    : noticeItems.filter(item => item.category === activeTab)

  return (
    <section className="bg-[#f6f7fc] py-12" dir={direction}>
      <div className="max-w-[1280px] mx-auto px-4">
        {/* 섹션 헤더 - MOFA 스타일 */}
        <div className={cn(
          'flex items-center justify-between mb-6',
          isRTL && 'flex-row-reverse'
        )}>
          <h2 className={cn(
            'text-2xl font-bold text-theme-nav',
            isRTL && 'font-arabic'
          )}>
            {locale === 'ko' ? '공지사항' :
             locale === 'en' ? 'Announcements' :
             locale === 'fr' ? 'Annonces' :
             'الإعلانات'}
          </h2>
          <Link
            href="/embassy/activities"
            className={cn(
              'flex items-center gap-1 text-sm text-gray-600 hover:text-theme-nav transition-colors',
              isRTL && 'flex-row-reverse'
            )}
          >
            <span>
              {locale === 'ko' ? '더보기' :
               locale === 'en' ? 'View All' :
               locale === 'fr' ? 'Voir tout' :
               'عرض الكل'}
            </span>
            <ChevronRightIcon className={cn('w-4 h-4', isRTL && 'rotate-180')} />
          </Link>
        </div>

        {/* 탭 버튼 - MOFA 스타일 */}
        <div className={cn(
          'flex gap-2 mb-6',
          isRTL && 'flex-row-reverse'
        )}>
          {(Object.keys(tabLabels) as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-4 py-2 text-sm rounded-full transition-colors',
                activeTab === tab
                  ? 'bg-theme-nav text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              )}
            >
              {tabLabels[tab][currentLocale]}
            </button>
          ))}
        </div>

        {/* 공지사항 리스트 - MOFA 스타일 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <ul>
            {filteredItems.map((item, index) => (
              <li
                key={item.id}
                className={cn(
                  'border-b border-gray-100 last:border-b-0',
                  'hover:bg-gray-50 transition-colors'
                )}
              >
                <Link
                  href={`/news/${item.id}`}
                  className={cn(
                    'flex items-center py-4 px-6',
                    isRTL && 'flex-row-reverse'
                  )}
                >
                  {/* 날짜 */}
                  <span className={cn(
                    'text-sm text-gray-500 w-28 flex-shrink-0',
                    isRTL ? 'text-left' : 'text-right',
                    isRTL ? 'ml-6' : 'mr-6'
                  )}>
                    {item.date}
                  </span>

                  {/* 카테고리 뱃지 */}
                  <span className={cn(
                    'text-xs px-2 py-0.5 rounded flex-shrink-0',
                    isRTL ? 'ml-4' : 'mr-4',
                    item.category === 'notice' && 'bg-blue-100 text-blue-700',
                    item.category === 'news' && 'bg-green-100 text-green-700',
                    item.category === 'event' && 'bg-purple-100 text-purple-700'
                  )}>
                    {tabLabels[item.category][currentLocale]}
                  </span>

                  {/* 제목 */}
                  <span className={cn(
                    'flex-1 text-gray-800 hover:text-theme-nav transition-colors truncate',
                    isRTL && 'text-right font-arabic'
                  )}>
                    {item.title[currentLocale]}
                  </span>

                  {/* 화살표 */}
                  <ChevronRightIcon className={cn(
                    'w-4 h-4 text-gray-400 flex-shrink-0',
                    isRTL ? 'mr-4 rotate-180' : 'ml-4'
                  )} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
