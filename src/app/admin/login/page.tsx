'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSimpleAdminAuth } from '@/contexts/SimpleAdminAuth'
import { useI18n } from '@/i18n/context'

export default function AdminLoginPage() {
  const { isAuthenticated, login, isLoading } = useSimpleAdminAuth()
  const router = useRouter()
  const { t, locale } = useI18n()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 이미 로그인되어 있으면 글 관리 페이지로 이동
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin/news')
    }
  }, [isAuthenticated, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    const result = await login(username, password)

    if (result.success) {
      router.push('/admin/news')
    } else {
      setError(result.error || t('admin.login.error'))
      setIsSubmitting(false)
    }
  }

  const isProcessing = isSubmitting || isLoading

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-header to-theme-primary flex flex-col justify-center py-12 sm:px-6 lg:px-8" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          {/* 국장 이미지 */}
          <div className="mx-auto w-24 h-24 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mauritania-seal.svg"
              alt="Seal of Mauritania"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            {t('admin.login.title')}
          </h1>
          <p className="text-white/80 text-sm">
            {t('admin.login.subtitle')}
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                {t('admin.login.username')}
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-theme-header focus:border-theme-header"
                placeholder={t('admin.login.usernamePlaceholder')}
                autoFocus
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                {t('admin.login.password')}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-theme-header focus:border-theme-header"
                placeholder={t('admin.login.passwordPlaceholder')}
              />
            </div>

            <button
              type="submit"
              disabled={isProcessing || !username || !password}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-theme-header hover:bg-theme-header-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-theme-header disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isProcessing ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('admin.login.loggingIn')}
                </span>
              ) : (
                t('admin.login.submit')
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              {t('admin.login.forgotPassword')}<br />
              <span className="text-gray-400">{t('admin.login.contactAdmin')}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => router.push('/')}
          className="text-white/80 hover:text-white text-sm font-medium transition-colors"
        >
          {locale === 'ar' ? '→' : '←'} {t('admin.login.backToSite')}
        </button>
      </div>
    </div>
  )
}
