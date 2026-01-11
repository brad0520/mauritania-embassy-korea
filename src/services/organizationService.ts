import { supabase, isSupabaseError } from '@/lib/supabase'
import type { Organization } from '@/types/supabase'
import { countryThemes } from '@/config/themes'

// 국가 코드로 조직 정보 가져오기
export async function getOrganizationByCountryCode(
  countryCode: string
): Promise<Organization | null> {
  try {
    const { data, error } = await supabase
      .from('organizations')
      .select('*')
      .eq('country_code', countryCode)
      .eq('is_active', true)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return null // 데이터가 없음
      }
      throw error
    }

    return data as Organization
  } catch (error) {
    console.error('조직 정보 조회 실패:', error)
    return null
  }
}

// 모든 활성 조직 목록 가져오기
export async function getAllOrganizations(): Promise<Organization[]> {
  try {
    const { data, error } = await supabase
      .from('organizations')
      .select('*')
      .eq('is_active', true)
      .order('country_code')

    if (error) throw error

    return data as Organization[]
  } catch (error) {
    console.error('조직 목록 조회 실패:', error)
    return []
  }
}

// 조직 정보를 테마 형식으로 변환
export function convertOrganizationToTheme(organization: Organization) {
  return {
    id: organization.country_code,
    name: organization.name,
    colors: organization.settings.colors,
    flags: organization.settings.flags,
    contact: organization.contact_info
  }
}

// Supabase 연결 실패 시 기본 테마 데이터 반환
export function getDummyOrganizations(): Organization[] {
  return Object.values(countryThemes).map(theme => ({
    id: `org-${theme.id}`,
    country_code: theme.id,
    name: theme.name,
    settings: {
      colors: theme.colors,
      flags: theme.flags
    },
    contact_info: theme.contact,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }))
}

// 통합 조직 정보 가져오기 함수 (Supabase 우선, 실패 시 기본값)
export async function getOrganizationWithFallback(
  countryCode: string
): Promise<Organization | null> {
  try {
    // Supabase에서 시도
    const organization = await getOrganizationByCountryCode(countryCode)
    
    if (organization) {
      return organization
    }
    
    // Supabase에 없으면 기본 테마에서 찾기
    const theme = countryThemes[countryCode as keyof typeof countryThemes]
    if (theme) {
      return {
        id: `org-${theme.id}`,
        country_code: theme.id,
        name: theme.name,
        settings: {
          colors: theme.colors,
          flags: theme.flags
        },
        contact_info: theme.contact,
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    }
    
    return null
  } catch (error) {
    console.warn('조직 정보 조회 중 오류, 기본값 사용:', error)
    
    // 오류 시 기본 테마에서 찾기
    const theme = countryThemes[countryCode as keyof typeof countryThemes]
    if (theme) {
      return {
        id: `org-${theme.id}`,
        country_code: theme.id,
        name: theme.name,
        settings: {
          colors: theme.colors,
          flags: theme.flags
        },
        contact_info: theme.contact,
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    }
    
    return null
  }
}

// 조직 정보 업데이트 (관리자용)
export async function updateOrganization(
  id: string,
  updates: Partial<Organization>
): Promise<Organization | null> {
  try {
    const { data, error } = await (supabase as any)
      .from('organizations')
      .update(updates)
      .eq('id', id)
      .select('*')
      .single()

    if (error) throw error

    return data as Organization
  } catch (error) {
    console.error('조직 정보 업데이트 실패:', error)
    throw error
  }
}

// 새 조직 생성 (관리자용)
export async function createOrganization(
  organization: Omit<Organization, 'id' | 'created_at' | 'updated_at'>
): Promise<Organization | null> {
  try {
    const { data, error } = await supabase
      .from('organizations')
      .insert(organization as any)
      .select('*')
      .single()

    if (error) throw error

    return data as Organization
  } catch (error) {
    console.error('조직 생성 실패:', error)
    throw error
  }
}