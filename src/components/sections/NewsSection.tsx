'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import { getLatestNews, getDummyNews } from '@/services/newsService'
import type { NewsWithOrganization } from '@/types/supabase'

interface NewsItem {
  id: string
  date: string
  title: string
  content: string
  url?: string
}

interface NewsSectionProps {
  className?: string
  newsItems?: NewsItem[]
  maxItems?: number
}

export default function NewsSection({ 
  className, 
  newsItems,
  maxItems = 4
}: NewsSectionProps) {
  const { t, locale } = useI18n()
  const { currentTheme } = useTheme()
  const [selectedNews, setSelectedNews] = useState<string | null>(null)
  const [supabaseNews, setSupabaseNews] = useState<NewsWithOrganization[]>([])
  const [loading, setLoading] = useState(true)

  // Supabase에서 뉴스 데이터 가져오기
  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true)
        
        // 현재 조직의 ID를 가져오기 (더미 데이터 테스트용)
        const organizationId = 'dummy-org-id'
        
        // Supabase에서 뉴스 가져오기 시도
        const news = await getLatestNews(organizationId, maxItems)
        setSupabaseNews(news)
      } catch (error) {
        console.warn('Supabase 뉴스 로드 실패, 더미 데이터 사용:', error)
        // Supabase 연결 실패 시 더미 데이터 사용
        const dummyNews = getDummyNews().slice(0, maxItems)
        setSupabaseNews(dummyNews)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [maxItems, currentTheme.id])

  // 뉴스 데이터를 NewsItem 형식으로 변환
  const convertToNewsItems = (news: NewsWithOrganization[]): NewsItem[] => {
    return news.map(item => {
      const publishedDate = item.published_at 
        ? new Date(item.published_at).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }).replace(/\./g, '.').replace(/ /g, '')
        : new Date().toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }).replace(/\./g, '.').replace(/ /g, '')

      return {
        id: item.id,
        date: publishedDate,
        title: item.title[locale] || item.title.ko || item.title.en || 'No title',
        content: item.excerpt?.[locale] || item.excerpt?.ko || item.content[locale] || item.content.ko || 'No content',
        url: `/news/${item.slug}`
      }
    })
  }

  // 기본 뉴스 아이템들 (다국어 번역 키 사용 - fallback)
  const defaultNewsItems: NewsItem[] = [
    {
      id: '1',
      date: '2025.08.25',
      title: t('news.item1.title'),
      content: t('news.item1.content')
    },
    {
      id: '2',
      date: '2025.08.20',
      title: t('news.item2.title'),
      content: t('news.item2.content')
    },
    {
      id: '3',
      date: '2025.08.15',
      title: t('news.item3.title'),
      content: t('news.item3.content')
    },
    {
      id: '4',
      date: '2025.08.10',
      title: t('news.item4.title'),
      content: t('news.item4.content')
    }
  ]

  // 데이터 우선순위: props > Supabase > 기본값
  let currentNewsItems: NewsItem[]
  if (newsItems) {
    currentNewsItems = newsItems
  } else if (supabaseNews.length > 0) {
    currentNewsItems = convertToNewsItems(supabaseNews)
  } else {
    currentNewsItems = defaultNewsItems
  }
  
  const displayItems = currentNewsItems.slice(0, maxItems)

  const handleNewsClick = (newsId: string) => {
    setSelectedNews(selectedNews === newsId ? null : newsId)
  }

  if (loading) {
    return (
      <section 
        className={cn(
          'bg-white p-8 rounded-lg mb-8',
          'shadow-[0_2px_10px_rgba(0,0,0,0.1)]',
          className
        )}
      >
        <h2 
          className="text-2xl font-bold mb-4 pb-2"
          style={{ 
            color: currentTheme.colors.primary,
            borderBottom: `2px solid ${currentTheme.colors.secondary}`
          }}
        >
          {t('news.title')}
        </h2>
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-16 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section 
      className={cn(
        'bg-white p-8 rounded-lg mb-8',
        'shadow-[0_2px_10px_rgba(0,0,0,0.1)]',
        className
      )}
    >
      {/* 섹션 제목 */}
      <h2 
        className="text-2xl font-bold mb-4 pb-2"
        style={{ 
          color: currentTheme.colors.primary,
          borderBottom: `2px solid ${currentTheme.colors.secondary}`
        }}
      >
        {t('news.title')}
      </h2>

      {/* 뉴스 아이템들 */}
      <div>
        {displayItems.map((item) => (
          <div key={item.id}>
            <div
              className={cn(
                'py-4 cursor-pointer transition-all duration-300 border-b border-gray-200 last:border-b-0',
                'hover:bg-[#f9f9f9]',
                selectedNews === item.id && 'bg-[#f0f8ff]'
              )}
              onClick={() => handleNewsClick(item.id)}
            >
              {/* 날짜 */}
              <div 
                className="text-sm mb-2"
                style={{ color: '#666' }}
              >
                {item.date}
              </div>
              
              {/* 제목 */}
              <div 
                className="font-bold mb-2 hover:opacity-80 transition-opacity"
                style={{ color: currentTheme.colors.primary }}
              >
                {item.title}
              </div>
              
              {/* 내용 */}
              <p className="text-gray-600 leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* 더미 데이터 표시 중인 경우 알림 */}
      {supabaseNews.length > 0 && supabaseNews[0]?.id === '1' && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-700">
            📝 현재 더미 데이터를 표시 중입니다. Supabase를 설정하면 실제 뉴스 데이터가 표시됩니다.
          </p>
        </div>
      )}
    </section>
  )
}