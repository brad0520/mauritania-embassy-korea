import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase'

// Supabase 환경 변수 (개발 중에는 더미 값 사용)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy-project.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy-anon-key'

// 개발 중에는 경고만 출력
if ((!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) && process.env.NODE_ENV === 'development') {
  console.warn('⚠️ Supabase environment variables not set. Using dummy values for development.')
}

// 클라이언트용 Supabase 인스턴스
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
})

// 서버용 Supabase 인스턴스 (서비스 키 사용)
export const supabaseAdmin = createClient<Database>(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY || 'dummy-service-key',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

// 조직별 RLS 컨텍스트 설정
export async function setOrganizationContext(organizationId: string) {
  const { error } = await supabase.rpc('set_organization_context' as any, {
    organization_id: organizationId
  } as any)
  
  if (error) {
    console.error('Failed to set organization context:', error)
    throw error
  }
}

// 현재 사용자의 조직 권한 확인
export async function getUserOrganizationRole(userId: string, organizationId: string) {
  const { data, error } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', userId)
    .eq('organization_id', organizationId)
    .single()
  
  if (error) {
    console.error('Failed to get user role:', error)
    return null
  }
  
  return (data as any)?.role || null
}

// 파일 업로드 헬퍼
export async function uploadFile(
  bucket: string,
  path: string,
  file: File,
  organizationId?: string
) {
  const filePath = organizationId ? `${organizationId}/${path}` : path
  
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file, {
      upsert: false,
      contentType: file.type
    })
  
  if (error) {
    throw error
  }
  
  // 공개 URL 생성
  const { data: urlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(data.path)
  
  return {
    path: data.path,
    url: urlData.publicUrl
  }
}

// 파일 삭제 헬퍼
export async function deleteFile(bucket: string, path: string) {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([path])
  
  if (error) {
    throw error
  }
}

// 다국어 콘텐츠 검색 헬퍼
export function createMultilingualQuery<T>(
  query: any,
  searchTerm: string,
  columns: string[],
  locales: string[] = ['ko', 'en', 'fr']
) {
  let modifiedQuery = query
  
  columns.forEach(column => {
    locales.forEach(locale => {
      modifiedQuery = modifiedQuery.or(`${column}->${locale}.ilike.%${searchTerm}%`)
    })
  })
  
  return modifiedQuery
}

// 페이지네이션 헬퍼
export async function paginateQuery<T>(
  query: any,
  page: number = 1,
  limit: number = 10
) {
  const from = (page - 1) * limit
  const to = from + limit - 1
  
  const { data, error, count } = await query
    .range(from, to)
    .select('*', { count: 'exact' })
  
  if (error) {
    throw error
  }
  
  return {
    data: data as T[],
    meta: {
      page,
      limit,
      total: count || 0,
      total_pages: Math.ceil((count || 0) / limit)
    }
  }
}

// 실시간 구독 헬퍼
export function subscribeToOrganizationChanges(
  organizationId: string,
  table: string,
  callback: (payload: any) => void
) {
  return supabase
    .channel(`${table}-${organizationId}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table,
        filter: `organization_id=eq.${organizationId}`
      },
      callback
    )
    .subscribe()
}

// 타입 가드
export function isSupabaseError(error: any): error is { message: string; code?: string } {
  return error && typeof error.message === 'string'
}