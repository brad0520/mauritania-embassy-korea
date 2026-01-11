'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import { supabase } from '@/lib/supabase'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import type { MultilingualContent } from '@/types/supabase'

interface Activity {
  id: string
  created_at: string
  published_at?: string
  title: MultilingualContent
  content: MultilingualContent
  excerpt?: MultilingualContent
  featured_image?: string
  status: string
  category?: string
}

const ITEMS_PER_PAGE = 10

// 더미 데이터 (Supabase 미연결 시)
const dummyActivities: Activity[] = [
  {
    id: 'dummy_1',
    created_at: '2026-01-08T10:00:00Z',
    published_at: '2026-01-08T10:00:00Z',
    title: {
      ko: '한-모리타니아 경제협력 회의 개최',
      en: 'Korea-Mauritania Economic Cooperation Meeting',
      fr: 'Réunion de Coopération Économique Corée-Mauritanie',
      ar: 'اجتماع التعاون الاقتصادي بين كوريا وموريتانيا'
    },
    content: {
      ko: '2026년 1월 8일, 주한 모리타니아 대사관에서 한-모리타니아 경제협력 회의가 개최되었습니다.',
      en: 'On January 8, 2026, the Korea-Mauritania Economic Cooperation Meeting was held.',
      fr: 'Le 8 janvier 2026, la réunion de coopération économique Corée-Mauritanie s\'est tenue.',
      ar: 'في 8 يناير 2026، عقد اجتماع التعاون الاقتصادي بين كوريا وموريتانيا.'
    },
    status: 'published'
  },
  {
    id: 'dummy_2',
    created_at: '2026-01-05T14:00:00Z',
    published_at: '2026-01-05T14:00:00Z',
    title: {
      ko: '모리타니아 문화의 날 행사 안내',
      en: 'Mauritania Cultural Day Event',
      fr: 'Événement de la Journée Culturelle de la Mauritanie',
      ar: 'فعالية يوم الثقافة الموريتانية'
    },
    content: {
      ko: '모리타니아의 풍부한 문화를 소개하는 특별 행사가 예정되어 있습니다.',
      en: 'A special event introducing the rich culture of Mauritania is scheduled.',
      fr: 'Un événement spécial présentant la riche culture de la Mauritanie est prévu.',
      ar: 'من المقرر إقامة حدث خاص يقدم الثقافة الغنية لموريتانيا.'
    },
    status: 'published'
  },
  {
    id: 'dummy_3',
    created_at: '2024-11-28T09:00:00Z',
    published_at: '2024-11-28T09:00:00Z',
    title: {
      ko: '한-모리타니아 수교 60주년 기념행사',
      en: 'Korea-Mauritania 60th Anniversary of Diplomatic Relations',
      fr: '60e Anniversaire des Relations Diplomatiques Corée-Mauritanie',
      ar: 'الذكرى الستون للعلاقات الدبلوماسية بين كوريا وموريتانيا'
    },
    content: {
      ko: '2024년 11월 28일, 서울에서 한-모리타니아 수교 60주년을 기념하는 특별 행사가 개최되었습니다.',
      en: 'On November 28, 2024, a special event commemorating the 60th anniversary was held in Seoul.',
      fr: 'Le 28 novembre 2024, un événement spécial commémorant le 60e anniversaire s\'est tenu à Séoul.',
      ar: 'في 28 نوفمبر 2024، أقيم حدث خاص في سيول للاحتفال بالذكرى الستين.'
    },
    status: 'published'
  }
]

export default function ActivitiesPage() {
  const { locale } = useI18n()
  const { currentTheme } = useTheme()
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchActivities()
  }, [])

  const fetchActivities = async () => {
    const isSupabaseConfigured =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://dummy-project.supabase.co'

    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase
          .from('news')
          .select('id, created_at, published_at, title, content, status, category')
          .eq('category', 'activity')
          .eq('status', 'published')
          .order('published_at', { ascending: false })

        if (error) throw error
        setActivities(data || [])
      } catch (error) {
        console.error('Error fetching activities:', error)
        setActivities(dummyActivities)
      }
    } else {
      const localNews = JSON.parse(localStorage.getItem('embassy_news') || '[]')
      const localActivities = localNews.filter(
        (item: Activity) => item.category === 'activity' && item.status === 'published'
      )
      const allActivities = [...localActivities, ...dummyActivities]
      setActivities(allActivities)
    }
    setLoading(false)
  }

  const getLocalizedText = (content: MultilingualContent | undefined, fallback = '') => {
    if (!content) return fallback
    return content[locale as keyof MultilingualContent] || content.ko || fallback
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(
      locale === 'ko' ? 'ko-KR' :
      locale === 'ar' ? 'ar-SA' :
      locale === 'fr' ? 'fr-FR' : 'en-US',
      { year: 'numeric', month: '2-digit', day: '2-digit' }
    )
  }

  // 페이지네이션 계산
  const totalPages = Math.ceil(activities.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentActivities = activities.slice(startIndex, endIndex)

  // 페이지 번호 배열 생성
  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i)
      } else {
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages)
      }
    }
    return pages
  }

  const menuTitle = locale === 'ko' ? '공관활동' :
                    locale === 'en' ? 'Embassy Activities' :
                    locale === 'fr' ? 'Actualités' : 'أنشطة السفارة'

  const noActivities: Record<string, string> = {
    ko: '등록된 공관활동이 없습니다.',
    en: 'No activities posted yet.',
    fr: 'Aucune activité publiée pour le moment.',
    ar: 'لا توجد أنشطة منشورة حتى الآن.'
  }

  const tableHeaders: Record<string, { no: string; title: string; date: string }> = {
    ko: { no: '번호', title: '제목', date: '작성일' },
    en: { no: 'No.', title: 'Title', date: 'Date' },
    fr: { no: 'N°', title: 'Titre', date: 'Date' },
    ar: { no: 'رقم', title: 'العنوان', date: 'التاريخ' }
  }

  const headers = tableHeaders[locale] || tableHeaders.ko
  const menuItems: { label: string; href: string }[] = []

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={menuItems}
      currentPageTitle={menuTitle}
      breadcrumbs={[{ label: menuTitle }]}
    >
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: currentTheme.colors.primary }}></div>
        </div>
      ) : activities.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">{noActivities[locale] || noActivities.ko}</p>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* 테이블 헤더 */}
            <div className="hidden md:grid md:grid-cols-[80px_1fr_140px] bg-gray-50 border-b border-gray-200">
              <div className="px-4 py-3 text-center text-sm font-medium text-gray-600">{headers.no}</div>
              <div className="px-4 py-3 text-sm font-medium text-gray-600">{headers.title}</div>
              <div className="px-4 py-3 text-center text-sm font-medium text-gray-600">{headers.date}</div>
            </div>

            {/* 테이블 바디 */}
            <div className="divide-y divide-gray-200">
              {currentActivities.map((activity, index) => {
                const globalIndex = activities.length - (startIndex + index)
                return (
                  <Link
                    key={activity.id}
                    href={`/embassy/activities/view?id=${activity.id}`}
                    className="block hover:bg-gray-50 transition-colors"
                  >
                    {/* 데스크탑 레이아웃 */}
                    <div className="hidden md:grid md:grid-cols-[80px_1fr_140px] items-center">
                      <div className="px-4 py-4 text-center text-sm text-gray-500">{globalIndex}</div>
                      <div className="px-4 py-4">
                        <h3 className="text-[15px] font-medium text-gray-900 hover:text-theme-header line-clamp-1">
                          {getLocalizedText(activity.title)}
                        </h3>
                      </div>
                      <div className="px-4 py-4 text-center text-sm text-gray-500">
                        {formatDate(activity.published_at || activity.created_at)}
                      </div>
                    </div>

                    {/* 모바일 레이아웃 */}
                    <div className="md:hidden px-4 py-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-gray-400">#{globalIndex}</span>
                        <span className="text-xs text-gray-400">|</span>
                        <span className="text-xs text-gray-500">
                          {formatDate(activity.published_at || activity.created_at)}
                        </span>
                      </div>
                      <h3 className="text-[15px] font-medium text-gray-900 line-clamp-2">
                        {getLocalizedText(activity.title)}
                      </h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="mt-6 flex justify-center items-center gap-1">
              {/* 맨 처음 버튼 */}
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="px-2 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded disabled:opacity-40 disabled:cursor-not-allowed"
                title={locale === 'ko' ? '맨 처음' : 'First'}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7M18 19l-7-7 7-7" />
                </svg>
              </button>

              {/* 10페이지 이전 버튼 */}
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 10))}
                disabled={currentPage === 1}
                className="px-2 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded disabled:opacity-40 disabled:cursor-not-allowed"
                title={locale === 'ko' ? '10페이지 이전' : 'Previous 10'}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* 페이지 번호 */}
              {getPageNumbers().map((page, idx) => (
                <button
                  key={idx}
                  onClick={() => typeof page === 'number' && setCurrentPage(page)}
                  disabled={page === '...'}
                  className={`min-w-[36px] px-3 py-2 text-sm rounded transition-colors ${
                    page === currentPage
                      ? 'bg-theme-header text-white'
                      : page === '...'
                      ? 'text-gray-400 cursor-default'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* 10페이지 다음 버튼 */}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 10))}
                disabled={currentPage === totalPages}
                className="px-2 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded disabled:opacity-40 disabled:cursor-not-allowed"
                title={locale === 'ko' ? '10페이지 다음' : 'Next 10'}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* 맨 마지막 버튼 */}
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="px-2 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded disabled:opacity-40 disabled:cursor-not-allowed"
                title={locale === 'ko' ? '맨 마지막' : 'Last'}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M6 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {/* 총 게시글 수 표시 */}
          <div className="mt-4 text-center text-sm text-gray-500">
            {locale === 'ko' && `총 ${activities.length}개의 게시글`}
            {locale === 'en' && `Total ${activities.length} posts`}
            {locale === 'fr' && `${activities.length} articles au total`}
            {locale === 'ar' && `إجمالي ${activities.length} مقالات`}
          </div>
        </>
      )}
    </SubPageLayout>
  )
}
