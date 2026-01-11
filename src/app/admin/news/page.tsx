'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SimpleProtectedRoute, useSimpleAdminAuth } from '@/contexts/SimpleAdminAuth'
import { supabase } from '@/lib/supabase'
import { useI18n } from '@/i18n/context'

interface MultilingualContent {
  ko: string
  en: string
  fr: string
  ar: string
}

interface NewsItem {
  id: string
  title: MultilingualContent
  content?: MultilingualContent
  status: string
  category: string
  published_at: string | null
  created_at: string
}

function NewsListContent() {
  const router = useRouter()
  const { logout } = useSimpleAdminAuth()
  const { t, locale } = useI18n()
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadNews()
  }, [])

  const loadNews = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data, error } = await (supabase.from('news') as any)
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      setNews((data || []) as NewsItem[])
    } catch (error) {
      console.error('Error loading news:', error)
      setNews([])
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm(t('admin.confirm.delete'))) return

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { error } = await (supabase.from('news') as any)
        .delete()
        .eq('id', id)

      if (error) throw error
      loadNews()
    } catch (error) {
      console.error('Delete error:', error)
      alert(t('admin.alert.deleteFailed'))
    }
  }

  const handleTogglePublish = async (id: string) => {
    const item = news.find(n => n.id === id)
    if (!item) return

    const newStatus = item.status === 'published' ? 'draft' : 'published'
    const publishedAt = newStatus === 'published' ? new Date().toISOString() : null

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { error } = await (supabase.from('news') as any)
        .update({ status: newStatus, published_at: publishedAt })
        .eq('id', id)

      if (error) throw error
      loadNews()
    } catch (error) {
      console.error('Update error:', error)
      alert(t('admin.alert.statusFailed'))
    }
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-'
    const localeMap: Record<string, string> = {
      ko: 'ko-KR',
      en: 'en-US',
      fr: 'fr-FR',
      ar: 'ar-SA'
    }
    return new Date(dateString).toLocaleDateString(localeMap[locale] || 'ko-KR')
  }

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      activity: t('admin.news.categoryActivity'),
      announcement: t('admin.news.categoryAnnouncement'),
      event: t('admin.news.categoryEvent')
    }
    return labels[category] || category
  }

  const getLocalizedTitle = (title: MultilingualContent) => {
    return title[locale as keyof MultilingualContent] || title.ko
  }

  const publishedCount = news.filter(n => n.status === 'published').length
  const draftCount = news.filter(n => n.status === 'draft').length

  return (
    <div className="min-h-screen bg-gray-50" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* 상단 헤더 */}
      <header className="bg-theme-header text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/mauritania-seal.svg" alt="Seal" className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-sm sm:text-lg font-bold truncate">{t('admin.header.title')}</h1>
                <p className="text-white/70 text-xs sm:text-sm truncate hidden sm:block">{t('admin.header.subtitle')}</p>
              </div>
            </div>
            <button
              onClick={() => { logout(); router.push('/admin/login'); }}
              className="px-2 sm:px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded text-xs sm:text-sm transition-colors whitespace-nowrap flex-shrink-0"
            >
              {t('admin.logout')}
            </button>
          </div>
        </div>
      </header>

      {/* 서브 헤더 */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{t('admin.news.management')}</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">
                {t('admin.news.published')} {publishedCount} · {t('admin.news.draft')} {draftCount}
              </p>
            </div>
            <button
              onClick={() => router.push('/admin/news/new')}
              className="px-3 sm:px-4 py-2 bg-theme-header text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-theme-header-hover transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              {t('admin.news.newPost')}
            </button>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-theme-header"></div>
          </div>
        ) : news.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{t('admin.news.noPosts')}</h3>
            <p className="text-gray-500 mb-6">{t('admin.news.createFirst')}</p>
            <button
              onClick={() => router.push('/admin/news/new')}
              className="px-4 py-2 bg-theme-header text-white rounded-lg text-sm font-medium hover:bg-theme-header-hover"
            >
              {t('admin.news.newPost')}
            </button>
          </div>
        ) : (
          <>
            {/* 모바일: 카드 레이아웃 */}
            <div className="sm:hidden space-y-3">
              {news.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <button
                      onClick={() => router.push(`/admin/news/edit?id=${item.id}`)}
                      className="text-left flex-1 min-w-0"
                    >
                      <div className="text-sm font-medium text-gray-900 line-clamp-2">
                        {getLocalizedTitle(item.title)}
                      </div>
                    </button>
                    <span className={`px-2 py-0.5 text-xs rounded-full flex-shrink-0 ${
                      item.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status === 'published' ? t('admin.news.published.label') : t('admin.news.draft.label')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span className="px-2 py-0.5 rounded bg-gray-100">{getCategoryLabel(item.category)}</span>
                    <span>{formatDate(item.created_at)}</span>
                  </div>
                  <div className="flex items-center justify-end gap-3 pt-2 border-t">
                    <button
                      onClick={() => router.push(`/admin/news/edit?id=${item.id}`)}
                      className="text-xs text-gray-600 hover:text-gray-800"
                    >
                      {t('admin.news.edit')}
                    </button>
                    <button
                      onClick={() => handleTogglePublish(item.id)}
                      className="text-xs text-blue-600 hover:text-blue-800"
                    >
                      {item.status === 'published' ? t('admin.news.unpublish') : t('admin.news.publish')}
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-xs text-red-600 hover:text-red-800"
                    >
                      {t('admin.news.delete')}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 데스크톱: 테이블 레이아웃 */}
            <div className="hidden sm:block bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('admin.table.title')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('admin.table.category')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('admin.table.status')}
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('admin.table.date')}
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {t('admin.table.actions')}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {news.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <button
                          onClick={() => router.push(`/admin/news/edit?id=${item.id}`)}
                          className="text-left hover:text-theme-header cursor-pointer"
                        >
                          <div className="text-sm font-medium text-gray-900">
                            {getLocalizedTitle(item.title)}
                          </div>
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                          {getCategoryLabel(item.category)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          item.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.status === 'published' ? t('admin.news.published.label') : t('admin.news.draft.label')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(item.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => router.push(`/admin/news/edit?id=${item.id}`)}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            {t('admin.news.edit')}
                          </button>
                          <button
                            onClick={() => handleTogglePublish(item.id)}
                            className="text-blue-600 hover:text-blue-800"
                            title={item.status === 'published' ? t('admin.news.unpublish') : t('admin.news.publish')}
                          >
                            {item.status === 'published' ? t('admin.news.unpublish') : t('admin.news.publish')}
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            {t('admin.news.delete')}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default function NewsPage() {
  return (
    <SimpleProtectedRoute>
      <NewsListContent />
    </SimpleProtectedRoute>
  )
}
