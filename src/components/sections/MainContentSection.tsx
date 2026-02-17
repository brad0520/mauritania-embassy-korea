'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { supabase } from '@/lib/supabase'
import ServiceMaintenanceNotice from '@/components/ui/ServiceMaintenanceNotice'
import type { MultilingualContent } from '@/types/supabase'

// 공관활동 타입
interface Activity {
  id: string
  created_at: string
  published_at?: string
  title: MultilingualContent
  content: MultilingualContent
  status: string
  category?: string
}

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
    status: 'published',
    category: 'activity'
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
    status: 'published',
    category: 'activity'
  },
  {
    id: 'dummy_3',
    created_at: '2024-12-28T09:00:00Z',
    published_at: '2024-12-28T09:00:00Z',
    title: {
      ko: '한-모리타니아 수교 60주년 기념행사',
      en: 'Korea-Mauritania 60th Anniversary of Diplomatic Relations',
      fr: '60e Anniversaire des Relations Diplomatiques Corée-Mauritanie',
      ar: 'الذكرى الستون للعلاقات الدبلوماسية بين كوريا وموريتانيا'
    },
    content: {
      ko: '서울에서 한-모리타니아 수교 60주년을 기념하는 특별 행사가 개최되었습니다.',
      en: 'A special event commemorating the 60th anniversary was held in Seoul.',
      fr: 'Un événement spécial commémorant le 60e anniversaire s\'est tenu à Séoul.',
      ar: 'أقيم حدث خاص في سيول للاحتفال بالذكرى الستين.'
    },
    status: 'published',
    category: 'activity'
  },
  {
    id: 'dummy_4',
    created_at: '2024-12-15T11:00:00Z',
    published_at: '2024-12-15T11:00:00Z',
    title: {
      ko: '대사관 연말 리셉션 개최',
      en: 'Embassy Year-End Reception',
      fr: 'Réception de Fin d\'Année de l\'Ambassade',
      ar: 'حفل استقبال نهاية العام في السفارة'
    },
    content: {
      ko: '주한 모리타니아 대사관에서 연말 리셉션을 개최합니다.',
      en: 'The Embassy of Mauritania in Korea hosts a year-end reception.',
      fr: 'L\'Ambassade de Mauritanie en Corée organise une réception de fin d\'année.',
      ar: 'تستضيف سفارة موريتانيا في كوريا حفل استقبال نهاية العام.'
    },
    status: 'published',
    category: 'activity'
  },
  {
    id: 'dummy_5',
    created_at: '2024-12-01T10:00:00Z',
    published_at: '2024-12-01T10:00:00Z',
    title: {
      ko: '모리타니아 독립기념일 축하 행사',
      en: 'Mauritania Independence Day Celebration',
      fr: 'Célébration de la Fête de l\'Indépendance de la Mauritanie',
      ar: 'احتفالية عيد استقلال موريتانيا'
    },
    content: {
      ko: '모리타니아 독립기념일을 축하하는 특별 행사가 개최되었습니다.',
      en: 'A special celebration was held for Mauritania Independence Day.',
      fr: 'Une célébration spéciale a eu lieu pour la Fête de l\'Indépendance de la Mauritanie.',
      ar: 'أقيم احتفال خاص بمناسبة عيد استقلال موريتانيا.'
    },
    status: 'published',
    category: 'activity'
  }
]

export default function MainContentSection() {
  const { locale, isRTL, direction } = useI18n()
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [serviceUnavailable, setServiceUnavailable] = useState(false)

  const currentLocale = locale as 'ko' | 'en' | 'fr' | 'ar'

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
          .limit(5)

        if (error) throw error
        if (data && data.length > 0) {
          setActivities(data)
        } else {
          setServiceUnavailable(true)
        }
      } catch (error) {
        console.error('Error fetching activities:', error)
        setServiceUnavailable(true)
      }
    } else {
      // localStorage에서 공관활동 가져오기
      const localNews = JSON.parse(localStorage.getItem('embassy_news') || '[]')
      const localActivities = localNews.filter(
        (item: Activity) => item.category === 'activity' && item.status === 'published'
      )
      if (localActivities.length > 0) {
        setActivities(localActivities.slice(0, 5))
      } else {
        setActivities(dummyActivities)
      }
    }
    setLoading(false)
  }

  const getLocalizedText = (content: MultilingualContent | undefined, fallback = '') => {
    if (!content) return fallback
    return content[currentLocale] || content.ko || fallback
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(
      locale === 'ko' ? 'ko-KR' :
      locale === 'ar' ? 'ar-SA' :
      locale === 'fr' ? 'fr-FR' : 'en-US',
      { year: 'numeric', month: '2-digit', day: '2-digit' }
    ).replace(/\//g, '.')
  }

  // 섹션 제목
  const sectionTitle = {
    ko: '공관활동',
    en: 'Embassy Activities',
    fr: 'Activités de l\'Ambassade',
    ar: 'أنشطة السفارة'
  }

  // 더보기 텍스트
  const viewAllText = {
    ko: '더보기',
    en: 'View All',
    fr: 'Voir tout',
    ar: 'عرض الكل'
  }

  return (
    <section className="bg-[#f6f7fc] py-12" dir={direction}>
      <div className="max-w-[1280px] mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className={cn(
          'flex items-center justify-between mb-6',
          isRTL && 'flex-row-reverse'
        )}>
          <h2 className={cn(
            'text-2xl font-bold text-theme-nav',
            isRTL && 'font-arabic'
          )}>
            {sectionTitle[currentLocale]}
          </h2>
          <Link
            href="/embassy/activities"
            className={cn(
              'flex items-center gap-1 text-sm text-gray-600 hover:text-theme-nav transition-colors',
              isRTL && 'flex-row-reverse'
            )}
          >
            <span>{viewAllText[currentLocale]}</span>
            <ChevronRightIcon className={cn('w-4 h-4', isRTL && 'rotate-180')} />
          </Link>
        </div>

        {/* 공관활동 리스트 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-theme-nav"></div>
            </div>
          ) : serviceUnavailable ? (
            <div className="p-6">
              <ServiceMaintenanceNotice variant="section" />
            </div>
          ) : (
            <ul>
              {activities.map((item) => (
                <li
                  key={item.id}
                  className={cn(
                    'border-b border-gray-100 last:border-b-0',
                    'hover:bg-gray-50 transition-colors'
                  )}
                >
                  <Link
                    href={`/embassy/activities/view?id=${item.id}`}
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
                      {formatDate(item.published_at || item.created_at)}
                    </span>

                    {/* 카테고리 뱃지 */}
                    <span className={cn(
                      'text-xs px-2 py-0.5 rounded flex-shrink-0 bg-green-100 text-green-700',
                      isRTL ? 'ml-4' : 'mr-4'
                    )}>
                      {currentLocale === 'ko' ? '공관활동' :
                       currentLocale === 'en' ? 'Activity' :
                       currentLocale === 'fr' ? 'Activité' : 'نشاط'}
                    </span>

                    {/* 제목 */}
                    <span className={cn(
                      'flex-1 text-gray-800 hover:text-theme-nav transition-colors truncate',
                      isRTL && 'text-right font-arabic'
                    )}>
                      {getLocalizedText(item.title)}
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
          )}
        </div>
      </div>
    </section>
  )
}
