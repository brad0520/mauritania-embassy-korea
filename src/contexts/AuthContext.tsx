'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'
import type { UserRole } from '@/types/supabase'

interface AuthContextType {
  user: User | null
  userRole: UserRole | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>
  signOut: () => Promise<void>
  signUp: (email: string, password: string, fullName?: string) => Promise<{ error: Error | null }>
  hasRole: (role: 'admin' | 'editor' | 'viewer', organizationId?: string) => boolean
  organizationId: string | null
  setCurrentOrganization: (orgId: string) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [userRole, setUserRole] = useState<UserRole | null>(null)
  const [loading, setLoading] = useState(true)
  const [organizationId, setOrganizationId] = useState<string | null>(null)

  // 현재 조직 설정
  const setCurrentOrganization = (orgId: string) => {
    setOrganizationId(orgId)
    localStorage.setItem('current-organization', orgId)
  }

  // 사용자 권한 확인
  const hasRole = (role: 'admin' | 'editor' | 'viewer', orgId?: string): boolean => {
    if (!userRole) return false
    
    const targetOrgId = orgId || organizationId
    if (!targetOrgId) return false
    
    // 현재 조직과 일치하는지 확인
    if (userRole.organization_id !== targetOrgId) return false
    
    // 권한 레벨 확인 (admin > editor > viewer)
    const roleHierarchy = { admin: 3, editor: 2, viewer: 1 }
    const currentLevel = roleHierarchy[userRole.role]
    const requiredLevel = roleHierarchy[role]
    
    return currentLevel >= requiredLevel
  }

  // 사용자 역할 정보 로드
  const loadUserRole = async (userId: string, orgId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select(`
          *,
          organization:organizations(*),
          user:users(*)
        `)
        .eq('user_id', userId)
        .eq('organization_id', orgId)
        .single()

      if (error) {
        console.warn('사용자 역할 정보를 찾을 수 없습니다:', error)
        setUserRole(null)
        return
      }

      setUserRole(data as UserRole)
    } catch (error) {
      console.error('사용자 역할 로드 실패:', error)
      setUserRole(null)
    }
  }

  // 로그인
  const signIn = async (email: string, password: string) => {
    // 개발 모드: Supabase 미연결 시 더미 로그인 허용
    const isSupabaseConfigured =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://dummy-project.supabase.co'

    if (!isSupabaseConfigured) {
      // 개발용 계정 확인
      if (email === 'admin@embassy.test' && password === 'admin123') {
        const dummyUser = {
          id: 'dev-admin-001',
          email: 'admin@embassy.test',
          user_metadata: { full_name: '개발자 관리자' }
        } as unknown as User

        setUser(dummyUser)
        setUserRole({
          id: 'dev-role-001',
          user_id: 'dev-admin-001',
          organization_id: 'dev-org-001',
          role: 'admin',
          created_at: new Date().toISOString(),
          granted_at: new Date().toISOString()
        } as UserRole)
        setOrganizationId('dev-org-001')
        localStorage.setItem('current-organization', 'dev-org-001')
        localStorage.setItem('dev-user', JSON.stringify(dummyUser))

        return { error: null }
      } else {
        return { error: new Error('이메일 또는 비밀번호가 올바르지 않습니다.') }
      }
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        throw error
      }

      return { error: null }
    } catch (error) {
      console.error('로그인 실패:', error)
      return { error: error as Error }
    }
  }

  // 로그아웃
  const signOut = async () => {
    try {
      await supabase.auth.signOut()
      setUser(null)
      setUserRole(null)
      setOrganizationId(null)
      localStorage.removeItem('current-organization')
    } catch (error) {
      console.error('로그아웃 실패:', error)
    }
  }

  // 회원가입
  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName
          }
        }
      })

      if (error) {
        throw error
      }

      return { error: null }
    } catch (error) {
      console.error('회원가입 실패:', error)
      return { error: error as Error }
    }
  }

  // 인증 상태 모니터링
  useEffect(() => {
    // 개발 모드 확인
    const isSupabaseConfigured =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://dummy-project.supabase.co'

    // 초기 세션 확인
    const getSession = async () => {
      // 개발 모드: 로컬 스토리지에서 세션 복원
      if (!isSupabaseConfigured) {
        const savedDevUser = localStorage.getItem('dev-user')
        const savedOrgId = localStorage.getItem('current-organization')

        if (savedDevUser && savedOrgId) {
          const devUser = JSON.parse(savedDevUser)
          setUser(devUser)
          setUserRole({
            id: 'dev-role-001',
            user_id: devUser.id,
            organization_id: savedOrgId,
            role: 'admin',
            created_at: new Date().toISOString(),
            granted_at: new Date().toISOString()
          } as UserRole)
          setOrganizationId(savedOrgId)
        }
        setLoading(false)
        return
      }

      try {
        const { data: { session }, error } = await supabase.auth.getSession()

        if (error) {
          console.error('세션 조회 실패:', error)
        }

        setUser(session?.user ?? null)

        // 저장된 조직 ID 복원
        const savedOrgId = localStorage.getItem('current-organization')
        if (savedOrgId && session?.user) {
          setOrganizationId(savedOrgId)
          await loadUserRole(session.user.id, savedOrgId)
        }

        setLoading(false)
      } catch (error) {
        console.error('세션 초기화 실패:', error)
        setLoading(false)
      }
    }

    getSession()

    // 인증 상태 변경 리스너
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        
        if (event === 'SIGNED_IN' && session?.user) {
          // 로그인 시 저장된 조직 ID가 있으면 역할 로드
          const savedOrgId = localStorage.getItem('current-organization')
          if (savedOrgId) {
            setOrganizationId(savedOrgId)
            await loadUserRole(session.user.id, savedOrgId)
          }
        } else if (event === 'SIGNED_OUT') {
          setUserRole(null)
          setOrganizationId(null)
          localStorage.removeItem('current-organization')
        }
        
        setLoading(false)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // 조직 변경 시 역할 정보 다시 로드
  useEffect(() => {
    // 개발 모드에서는 이미 역할이 설정되어 있으므로 Supabase 조회 건너뛰기
    const isSupabaseConfigured =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://dummy-project.supabase.co'

    if (user && organizationId && isSupabaseConfigured) {
      loadUserRole(user.id, organizationId)
    }
  }, [user, organizationId])

  const value: AuthContextType = {
    user,
    userRole,
    loading,
    signIn,
    signOut,
    signUp,
    hasRole,
    organizationId,
    setCurrentOrganization
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth는 AuthProvider 내부에서 사용되어야 합니다')
  }
  return context
}

// 관리자 전용 라우트 보호 컴포넌트
interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'admin' | 'editor' | 'viewer'
  organizationId?: string
  fallback?: React.ReactNode
}

export function ProtectedRoute({
  children,
  requiredRole = 'viewer',
  organizationId,
  fallback
}: ProtectedRouteProps) {
  const { user, hasRole, loading, userRole } = useAuth()
  const [mounted, setMounted] = useState(false)

  // 클라이언트 마운트 확인 (hydration 문제 해결)
  useEffect(() => {
    setMounted(true)
  }, [])

  // 개발 모드 확인
  const isDevMode =
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://dummy-project.supabase.co'

  // 클라이언트 마운트 전이거나 로딩 중일 때
  if (!mounted || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">로그인이 필요합니다</h2>
          <p className="text-gray-600">관리자 페이지에 접근하려면 로그인하세요.</p>
        </div>
      </div>
    )
  }

  // 개발 모드에서는 admin 역할이 있으면 모든 권한 허용
  if (isDevMode && userRole?.role === 'admin') {
    return <>{children}</>
  }

  if (!hasRole(requiredRole, organizationId)) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">접근 권한이 없습니다</h2>
          <p className="text-gray-600">이 페이지에 접근할 권한이 없습니다.</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}