'use client'

import React, { useState, useEffect } from 'react'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import { getLatestNews, getDummyNews } from '@/services/newsService'
import type { NewsWithOrganization } from '@/types/supabase'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function NewsListPage() {
  const { t, locale } = useI18n()
  const { currentTheme } = useTheme()
  const [news, setNews] = useState<NewsWithOrganization[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true)
        const organizationId = 'dummy-org-id'
        const newsData = await getLatestNews(organizationId, 20)
        setNews(newsData)
      } catch (error) {
        console.warn('뉴스 로드 실패, 더미 데이터 사용:', error)
        const dummyNews = getDummyNews()
        // 더미 뉴스를 더 많이 생성
        const extendedDummyNews = [
          ...dummyNews,
          {
            ...dummyNews[0],
            id: '2',
            title: {
              ko: '한-모리타니아 문화교류 프로그램 개최',
              en: 'Korea-Mauritania Cultural Exchange Program',
              fr: 'Programme d\'échange culturel Corée-Mauritanie'
            },
            excerpt: {
              ko: '양국 간 문화 교류를 증진하기 위한 특별 프로그램이 개최됩니다.',
              en: 'A special program to promote cultural exchange between the two countries will be held.',
              fr: 'Un programme spécial pour promouvoir les échanges culturels entre les deux pays aura lieu.'
            },
            published_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            category: 'event'
          },
          {
            ...dummyNews[0],
            id: '3',
            title: {
              ko: '모리타니아 투자 설명회 안내',
              en: 'Mauritania Investment Briefing',
              fr: 'Briefing sur les investissements en Mauritanie'
            },
            excerpt: {
              ko: '모리타니아 투자 기회에 대한 설명회가 개최됩니다.',
              en: 'A briefing on investment opportunities in Mauritania will be held.',
              fr: 'Un briefing sur les opportunités d\'investissement en Mauritanie aura lieu.'
            },
            published_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
            category: 'announcement'
          }
        ]
        setNews(extendedDummyNews)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [currentTheme.id])

  // 카테고리 필터링
  const filteredNews = selectedCategory 
    ? news.filter(item => item.category === selectedCategory)
    : news

  const categories = [
    { id: '', name: '전체', count: news.length },
    { id: 'news', name: '뉴스', count: news.filter(n => n.category === 'news').length },
    { id: 'event', name: '행사', count: news.filter(n => n.category === 'event').length },
    { id: 'announcement', name: '공지사항', count: news.filter(n => n.category === 'announcement').length }
  ]

  const getCategoryBadge = (category: string) => {
    const categoryConfig = {
      news: { label: '뉴스', className: 'bg-blue-100 text-blue-800' },
      event: { label: '행사', className: 'bg-purple-100 text-purple-800' },
      announcement: { label: '공지', className: 'bg-orange-100 text-orange-800' }
    }
    
    const config = categoryConfig[category as keyof typeof categoryConfig] || categoryConfig.news
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
        {config.label}
      </span>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\./g, '.').replace(/ /g, '')
  }

  if (loading) {
    return (
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-16 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {/* 페이지 헤더 */}
      <section 
        className="text-white py-16"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.colors.primary}ee 0%, ${currentTheme.colors.secondary}ee 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              뉴스 &amp; 공지사항
            </h1>
            <p className="text-xl text-white/90">
              {currentTheme.name[locale]} 대사관의 최신 소식을 확인하세요
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* 사이드바 - 카테고리 필터 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-6">
              <h3 
                className="text-lg font-bold mb-4 pb-2 border-b"
                style={{ 
                  color: currentTheme.colors.primary,
                  borderColor: currentTheme.colors.secondary
                }}
              >
                카테고리
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      'w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors',
                      selectedCategory === category.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'hover:bg-gray-50'
                    )}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-3">
            
            {/* 결과 헤더 */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : '전체 뉴스'}
                <span className="text-sm font-normal text-gray-500 ml-2">
                  ({filteredNews.length}개)
                </span>
              </h2>
            </div>

            {/* 뉴스 목록 */}
            <div className="space-y-6">
              {filteredNews.map((item) => (
                <article key={item.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      {getCategoryBadge(item.category)}
                      <span className="text-sm text-gray-500">
                        {formatDate(item.published_at || '')}
                      </span>
                    </div>
                    
                    <Link href={`/news/${item.slug}`}>
                      <h3 
                        className="text-xl font-bold mb-3 hover:opacity-80 cursor-pointer"
                        style={{ color: currentTheme.colors.primary }}
                      >
                        {item.title[locale] || item.title.ko || item.title.en}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {item.excerpt?.[locale] || item.excerpt?.ko || 
                       (item.content[locale] || item.content.ko || item.content.en || '').substring(0, 200) + '...'}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>조회수 {item.view_count}</span>
                      </div>
                      <Link 
                        href={`/news/${item.slug}`}
                        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        자세히 보기
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
              
              {filteredNews.length === 0 && (
                <div className="text-center py-12">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">뉴스가 없습니다</h3>
                  <p className="mt-1 text-sm text-gray-500">선택한 카테고리에 표시할 뉴스가 없습니다.</p>
                </div>
              )}
            </div>

            {/* 더미 데이터 알림 */}
            {filteredNews.length > 0 && filteredNews[0]?.id === '1' && (
              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-700">
                  📝 현재 더미 데이터를 표시 중입니다. Supabase를 설정하면 실제 뉴스 데이터가 표시됩니다.
                </p>
              </div>
            )}

            {/* 페이지네이션 (향후 구현) */}
            {filteredNews.length >= 10 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    이전
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-md">
                    1
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    다음
                  </button>
                </nav>
              </div>
            )}

          </div>
        </div>
      </main>

      </>


      )
}