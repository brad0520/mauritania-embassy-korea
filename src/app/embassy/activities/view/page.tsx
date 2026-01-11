'use client'

import React, { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import DOMPurify from 'dompurify'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import { supabase } from '@/lib/supabase'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import type { MultilingualContent } from '@/types/supabase'

// HTML 콘텐츠 포맷팅 (HTML 태그 있으면 정화, 없으면 줄바꿈 처리)
function formatContent(content: string): string {
  if (typeof window === 'undefined') return content

  // HTML 태그가 있는지 확인
  const hasHtmlTags = /<[^>]+>/.test(content)

  if (hasHtmlTags) {
    // HTML 콘텐츠는 DOMPurify로 정화
    return DOMPurify.sanitize(content, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 's', 'h1', 'h2', 'h3', 'ul', 'ol', 'li', 'a', 'img', 'blockquote', 'hr', 'code'],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'class', 'style', 'target']
    })
  } else {
    // 일반 텍스트는 줄바꿈을 <br>로 변환
    return content.replace(/\n/g, '<br>')
  }
}

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

// 더미 데이터
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
      ko: '2026년 1월 8일, 주한 모리타니아 대사관에서 한-모리타니아 경제협력 회의가 개최되었습니다. 양국의 경제 협력 강화를 위한 다양한 방안이 논의되었습니다.\n\n이번 회의에서는 양국 간 무역 확대, 투자 협력, 기술 이전 등 다양한 분야에서의 협력 방안이 심도 있게 논의되었습니다.\n\n참석자들은 양국의 경제 발전을 위해 지속적인 협력이 필요하다는 데 의견을 같이했으며, 향후 정기적인 회의를 통해 구체적인 실행 방안을 마련하기로 했습니다.',
      en: 'On January 8, 2026, the Korea-Mauritania Economic Cooperation Meeting was held at the Embassy of Mauritania in Korea. Various measures to strengthen economic cooperation between the two countries were discussed.\n\nThis meeting covered in-depth discussions on trade expansion, investment cooperation, and technology transfer between the two nations.\n\nParticipants agreed on the need for continuous cooperation for the economic development of both countries and decided to establish specific action plans through regular meetings in the future.',
      fr: 'Le 8 janvier 2026, la réunion de coopération économique Corée-Mauritanie s\'est tenue à l\'ambassade de Mauritanie en Corée. Diverses mesures pour renforcer la coopération économique entre les deux pays ont été discutées.',
      ar: 'في 8 يناير 2026، عقد اجتماع التعاون الاقتصادي بين كوريا وموريتانيا في سفارة موريتانيا في كوريا. تمت مناقشة تدابير مختلفة لتعزيز التعاون الاقتصادي بين البلدين.'
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
      ko: '모리타니아의 풍부한 문화를 소개하는 특별 행사가 예정되어 있습니다. 전통 음악, 음식, 예술 전시 등 다양한 프로그램이 준비되어 있습니다.\n\n행사 일시: 2026년 2월 15일\n장소: 서울 용산구 대사관\n\n많은 관심과 참여 부탁드립니다.',
      en: 'A special event introducing the rich culture of Mauritania is scheduled. Various programs including traditional music, food, and art exhibitions are prepared.\n\nDate: February 15, 2026\nVenue: Embassy in Yongsan-gu, Seoul\n\nWe look forward to your participation.',
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
      ko: '2024년 11월 28일, 서울에서 한-모리타니아 수교 60주년을 기념하는 특별 행사가 개최되었습니다.\n\n양국 정부 관계자 및 주요 인사들이 참석한 이번 행사에서는 지난 60년간의 양국 관계 발전을 되돌아보고, 미래 협력 방안에 대해 논의하였습니다.',
      en: 'On November 28, 2024, a special event commemorating the 60th anniversary of diplomatic relations between Korea and Mauritania was held in Seoul.',
      fr: 'Le 28 novembre 2024, un événement spécial commémorant le 60e anniversaire des relations diplomatiques.',
      ar: 'في 28 نوفمبر 2024، أقيم حدث خاص في سيول للاحتفال بالذكرى الستين للعلاقات الدبلوماسية.'
    },
    status: 'published'
  }
]

function ActivityDetailContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const { locale } = useI18n()
  const { currentTheme } = useTheme()
  const [activity, setActivity] = useState<Activity | null>(null)
  const [allActivities, setAllActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(-1)

  useEffect(() => {
    if (id) {
      fetchActivity()
    } else {
      setLoading(false)
    }
  }, [id])

  const fetchActivity = async () => {
    const isSupabaseConfigured =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://dummy-project.supabase.co'

    let activities: Activity[] = []

    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase
          .from('news')
          .select('id, created_at, published_at, title, content, status, category')
          .eq('category', 'activity')
          .eq('status', 'published')
          .order('published_at', { ascending: false })

        if (error) throw error
        activities = data || []
      } catch (error) {
        console.error('Error fetching activities:', error)
        activities = dummyActivities
      }
    } else {
      const localNews = JSON.parse(localStorage.getItem('embassy_news') || '[]')
      const localActivities = localNews.filter(
        (item: Activity) => item.category === 'activity' && item.status === 'published'
      )
      activities = [...localActivities, ...dummyActivities]
    }

    setAllActivities(activities)

    const index = activities.findIndex(a => a.id === id)
    if (index !== -1) {
      setActivity(activities[index])
      setCurrentIndex(index)
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
      { year: 'numeric', month: 'long', day: 'numeric' }
    )
  }

  const menuTitle = locale === 'ko' ? '공관활동' :
                    locale === 'en' ? 'Embassy Activities' :
                    locale === 'fr' ? 'Actualités' : 'أنشطة السفارة'

  const labels: Record<string, { backToList: string; prevPost: string; nextPost: string; notFound: string }> = {
    ko: { backToList: '목록으로', prevPost: '이전글', nextPost: '다음글', notFound: '게시글을 찾을 수 없습니다.' },
    en: { backToList: 'Back to List', prevPost: 'Previous', nextPost: 'Next', notFound: 'Post not found.' },
    fr: { backToList: 'Retour à la liste', prevPost: 'Précédent', nextPost: 'Suivant', notFound: 'Article non trouvé.' },
    ar: { backToList: 'العودة للقائمة', prevPost: 'السابق', nextPost: 'التالي', notFound: 'المقال غير موجود.' }
  }

  const label = labels[locale] || labels.ko
  const prevActivity = currentIndex > 0 ? allActivities[currentIndex - 1] : null
  const nextActivity = currentIndex < allActivities.length - 1 ? allActivities[currentIndex + 1] : null
  const menuItems: { label: string; href: string }[] = []

  if (loading) {
    return (
      <SubPageLayout
        menuTitle={menuTitle}
        menuItems={menuItems}
        currentPageTitle={menuTitle}
        breadcrumbs={[{ label: menuTitle, href: '/embassy/activities' }, { label: '...' }]}
      >
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: currentTheme.colors.primary }}></div>
        </div>
      </SubPageLayout>
    )
  }

  if (!activity) {
    return (
      <SubPageLayout
        menuTitle={menuTitle}
        menuItems={menuItems}
        currentPageTitle={menuTitle}
        breadcrumbs={[{ label: menuTitle, href: '/embassy/activities' }]}
      >
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg mb-6">{label.notFound}</p>
          <Link href="/embassy/activities" className="inline-flex items-center px-4 py-2 bg-theme-header text-white rounded-lg hover:bg-theme-header-hover transition-colors">
            ← {label.backToList}
          </Link>
        </div>
      </SubPageLayout>
    )
  }

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={menuItems}
      currentPageTitle={getLocalizedText(activity.title)}
      breadcrumbs={[
        { label: menuTitle, href: '/embassy/activities' },
        { label: getLocalizedText(activity.title) }
      ]}
    >
      <article className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* 글 헤더 */}
        <div className="border-b border-gray-200 px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{getLocalizedText(activity.title)}</h1>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={activity.published_at || activity.created_at}>
              {formatDate(activity.published_at || activity.created_at)}
            </time>
          </div>
        </div>

        {/* 대표 이미지 */}
        {activity.featured_image && (
          <div className="px-6 pt-6">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img src={activity.featured_image} alt={getLocalizedText(activity.title)} className="w-full h-full object-cover" />
            </div>
          </div>
        )}

        {/* 글 내용 */}
        <div className="px-6 py-8">
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed prose-img:rounded-lg prose-img:my-4"
            dangerouslySetInnerHTML={{
              __html: formatContent(getLocalizedText(activity.content))
            }}
          />
        </div>

        {/* 네비게이션 */}
        <div className="border-t border-gray-200">
          <div className="divide-y divide-gray-200">
            {prevActivity && (
              <Link href={`/embassy/activities/view?id=${prevActivity.id}`} className="flex items-center px-6 py-4 hover:bg-gray-50 transition-colors group">
                <span className="flex-shrink-0 w-16 text-sm font-medium text-gray-500">{label.prevPost}</span>
                <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                <span className="text-gray-700 group-hover:text-theme-header line-clamp-1">{getLocalizedText(prevActivity.title)}</span>
              </Link>
            )}
            {nextActivity && (
              <Link href={`/embassy/activities/view?id=${nextActivity.id}`} className="flex items-center px-6 py-4 hover:bg-gray-50 transition-colors group">
                <span className="flex-shrink-0 w-16 text-sm font-medium text-gray-500">{label.nextPost}</span>
                <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="text-gray-700 group-hover:text-theme-header line-clamp-1">{getLocalizedText(nextActivity.title)}</span>
              </Link>
            )}
          </div>

          {/* 목록으로 버튼 */}
          <div className="px-6 py-4 bg-gray-50">
            <Link href="/embassy/activities" className="inline-flex items-center px-5 py-2.5 bg-theme-header text-white rounded-lg hover:bg-theme-header-hover transition-colors text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              {label.backToList}
            </Link>
          </div>
        </div>
      </article>
    </SubPageLayout>
  )
}

export default function ActivityViewPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-theme-header"></div></div>}>
      <ActivityDetailContent />
    </Suspense>
  )
}
