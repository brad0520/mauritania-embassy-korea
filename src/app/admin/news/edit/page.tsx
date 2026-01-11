'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter, useSearchParams } from 'next/navigation'
import { SimpleProtectedRoute, useSimpleAdminAuth } from '@/contexts/SimpleAdminAuth'
import { supabase } from '@/lib/supabase'
import { useI18n } from '@/i18n/context'

const RichTextEditor = dynamic(() => import('@/components/admin/RichTextEditor'), {
  ssr: false,
  loading: () => (
    <div className="border border-gray-300 rounded-lg p-4 h-[400px] flex items-center justify-center bg-gray-50">
      <div className="text-gray-500">Loading editor...</div>
    </div>
  )
})

type Language = 'ko' | 'en' | 'fr' | 'ar'

interface MultilingualContent {
  ko: string
  en: string
  fr: string
  ar: string
}

const LANGUAGES: { code: Language; label: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'ko', label: '한국어', dir: 'ltr' },
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
]

function EditNewsContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const postId = searchParams.get('id')
  const { logout } = useSimpleAdminAuth()
  const { t, locale } = useI18n()

  const [activeTab, setActiveTab] = useState<Language>('ko')
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState<MultilingualContent>({ ko: '', en: '', fr: '', ar: '' })
  const [content, setContent] = useState<MultilingualContent>({ ko: '', en: '', fr: '', ar: '' })
  const [category, setCategory] = useState('activity')
  const [status, setStatus] = useState('draft')
  const [originalStatus, setOriginalStatus] = useState('draft')

  useEffect(() => {
    if (postId) {
      loadPost()
    } else {
      router.push('/admin/news')
    }
  }, [postId])

  const loadPost = async () => {
    if (!postId) return

    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('id', postId)
        .single()

      if (error) throw error

      if (data) {
        setTitle(data.title as MultilingualContent)
        setContent(data.content as MultilingualContent)
        setCategory(data.category)
        setStatus(data.status)
        setOriginalStatus(data.status)
      }
    } catch (error) {
      console.error('Error loading post:', error)
      alert(t('admin.alert.loadFailed'))
      router.push('/admin/news')
    } finally {
      setLoading(false)
    }
  }

  const handleTitleChange = (lang: Language, value: string) => {
    setTitle(prev => ({ ...prev, [lang]: value }))
  }

  const handleContentChange = (lang: Language, value: string) => {
    setContent(prev => ({ ...prev, [lang]: value }))
  }

  const getCompletionStatus = () => {
    const completed = LANGUAGES.filter(lang =>
      title[lang.code].trim() !== '' && content[lang.code].trim() !== ''
    )
    return {
      count: completed.length,
      total: LANGUAGES.length,
      percentage: Math.round((completed.length / LANGUAGES.length) * 100)
    }
  }

  const handleSave = async (publishNow: boolean = false) => {
    if (!title.ko.trim()) {
      alert(t('admin.news.koreanRequired'))
      return
    }

    setSaving(true)

    const newStatus = publishNow ? 'published' : status
    const publishedAt = publishNow && originalStatus !== 'published'
      ? new Date().toISOString()
      : undefined

    const updateData: Record<string, unknown> = {
      title,
      content,
      category,
      status: newStatus,
      updated_at: new Date().toISOString()
    }

    if (publishedAt) {
      updateData.published_at = publishedAt
    }

    try {
      const { error } = await supabase
        .from('news')
        .update(updateData)
        .eq('id', postId)

      if (error) throw error

      alert(t('admin.alert.saved'))
      router.push('/admin/news')
    } catch (error) {
      console.error('Save error:', error)
      alert(t('admin.alert.saveFailed'))
    } finally {
      setSaving(false)
    }
  }

  const completion = getCompletionStatus()
  const currentLang = LANGUAGES.find(l => l.code === activeTab)!

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-theme-header"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* 상단 헤더 */}
      <header className="bg-theme-header text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/mauritania-seal.svg" alt="Seal" className="w-10 h-10" />
              <div>
                <h1 className="text-lg font-bold">{t('admin.header.title')}</h1>
                <p className="text-white/70 text-sm">{t('admin.header.subtitle')}</p>
              </div>
            </div>
            <button
              onClick={() => { logout(); router.push('/admin/login'); }}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded text-sm transition-colors"
            >
              {t('admin.logout')}
            </button>
          </div>
        </div>
      </header>

      {/* 서브 헤더 */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/admin/news')}
                className="text-gray-500 hover:text-gray-700"
              >
                {t('admin.news.backToList')}
              </button>
              <h2 className="text-xl font-semibold text-gray-900">{t('admin.news.editPost')}</h2>
              {originalStatus === 'published' && (
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                  {t('admin.news.published.label')}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleSave(false)}
                disabled={saving}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
              >
                {t('admin.news.save')}
              </button>
              {originalStatus !== 'published' && (
                <button
                  onClick={() => handleSave(true)}
                  disabled={saving}
                  className="px-4 py-2 bg-theme-header text-white rounded-lg text-sm font-medium hover:bg-theme-header-hover disabled:opacity-50"
                >
                  {saving ? t('admin.news.saving') : t('admin.news.publish')}
                </button>
              )}
              {originalStatus === 'published' && (
                <button
                  onClick={() => handleSave(true)}
                  disabled={saving}
                  className="px-4 py-2 bg-theme-header text-white rounded-lg text-sm font-medium hover:bg-theme-header-hover disabled:opacity-50"
                >
                  {saving ? t('admin.news.saving') : t('admin.news.updatePublished')}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* 카테고리 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">{t('admin.news.category')}</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full max-w-xs border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-theme-header focus:border-theme-header"
          >
            <option value="activity">{t('admin.news.categoryActivity')}</option>
            <option value="announcement">{t('admin.news.categoryAnnouncement')}</option>
            <option value="event">{t('admin.news.categoryEvent')}</option>
          </select>
        </div>

        {/* 다국어 작성 진행률 */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-700">{t('admin.news.progress')}</h3>
            <span className="text-sm text-gray-500">
              {completion.count}/{completion.total}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
            <div
              className="bg-theme-header h-2 rounded-full transition-all duration-300"
              style={{ width: `${completion.percentage}%` }}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map(lang => {
              const isComplete = title[lang.code].trim() !== '' && content[lang.code].trim() !== ''
              return (
                <span
                  key={lang.code}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    isComplete ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {lang.label}
                  {isComplete && (
                    <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
              )
            })}
          </div>
        </div>

        {/* 언어 탭 및 편집 영역 */}
        <div className="bg-white rounded-lg shadow-sm">
          {/* 탭 */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              {LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => setActiveTab(lang.code)}
                  className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === lang.code
                      ? 'border-theme-header text-theme-header'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {lang.label}
                  {title[lang.code].trim() && content[lang.code].trim() && (
                    <span className="ml-2 inline-flex items-center justify-center w-4 h-4 bg-green-500 rounded-full">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* 편집 영역 */}
          <div className="p-6" dir={currentLang.dir}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('admin.news.title')} ({currentLang.label})
                {activeTab === 'ko' && <span className="text-red-500 ml-1">*</span>}
              </label>
              <input
                type="text"
                value={title[activeTab]}
                onChange={(e) => handleTitleChange(activeTab, e.target.value)}
                placeholder={t('admin.news.titlePlaceholder').replace('{lang}', currentLang.label)}
                className={`w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:ring-2 focus:ring-theme-header focus:border-theme-header ${
                  currentLang.dir === 'rtl' ? 'text-right' : 'text-left'
                }`}
                dir={currentLang.dir}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('admin.news.content')} ({currentLang.label})
              </label>
              <RichTextEditor
                content={content[activeTab]}
                onChange={(value) => handleContentChange(activeTab, value)}
                placeholder={t('admin.news.contentPlaceholder').replace('{lang}', currentLang.label)}
                locale={locale}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function EditNewsPage() {
  return (
    <SimpleProtectedRoute>
      <EditNewsContent />
    </SimpleProtectedRoute>
  )
}
