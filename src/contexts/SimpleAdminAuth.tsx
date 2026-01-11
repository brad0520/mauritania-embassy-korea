'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { loginAdmin } from '@/lib/auth'

// 관리자 정보 타입
interface AdminInfo {
  id: string
  username: string
  displayName: string | null
  role: string
}

interface SimpleAdminAuthContextType {
  isAuthenticated: boolean
  admin: AdminInfo | null
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  isLoading: boolean
}

const SimpleAdminAuthContext = createContext<SimpleAdminAuthContextType | null>(null)

// 세션 저장 키
const SESSION_KEY = 'embassy_admin_session'

export function SimpleAdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<AdminInfo | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // 클라이언트 마운트 후 localStorage에서 세션 복원
  useEffect(() => {
    setMounted(true)
    try {
      const savedSession = localStorage.getItem(SESSION_KEY)
      if (savedSession) {
        const parsedAdmin = JSON.parse(savedSession) as AdminInfo
        setAdmin(parsedAdmin)
      }
    } catch {
      // 세션 복원 실패 시 무시
      localStorage.removeItem(SESSION_KEY)
    }
  }, [])

  const login = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)

    try {
      const result = await loginAdmin(username, password)

      if (result.success && result.admin) {
        setAdmin(result.admin)
        localStorage.setItem(SESSION_KEY, JSON.stringify(result.admin))
        return { success: true }
      }

      return { success: false, error: result.error || '로그인에 실패했습니다.' }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: '로그인 중 오류가 발생했습니다.' }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setAdmin(null)
    localStorage.removeItem(SESSION_KEY)
  }

  // 마운트 전에는 로딩 상태 표시 방지
  if (!mounted) {
    return null
  }

  return (
    <SimpleAdminAuthContext.Provider
      value={{
        isAuthenticated: !!admin,
        admin,
        login,
        logout,
        isLoading
      }}
    >
      {children}
    </SimpleAdminAuthContext.Provider>
  )
}

export function useSimpleAdminAuth() {
  const context = useContext(SimpleAdminAuthContext)
  if (!context) {
    throw new Error('useSimpleAdminAuth must be used within SimpleAdminAuthProvider')
  }
  return context
}

// 간단한 보호 컴포넌트
interface SimpleProtectedRouteProps {
  children: React.ReactNode
  loginPath?: string
}

export function SimpleProtectedRoute({ children, loginPath = '/admin/login' }: SimpleProtectedRouteProps) {
  const { isAuthenticated } = useSimpleAdminAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // 마운트 전 로딩 표시
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-theme-header"></div>
      </div>
    )
  }

  // 로그인 필요
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-theme-header rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">관리자 로그인 필요</h2>
            <p className="text-gray-600 mb-6">이 페이지에 접근하려면 로그인하세요.</p>
            <a
              href={loginPath}
              className="inline-block px-6 py-3 bg-theme-header text-white rounded-lg hover:bg-theme-header-hover transition-colors"
            >
              로그인 페이지로 이동
            </a>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
