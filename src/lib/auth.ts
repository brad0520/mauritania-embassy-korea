import bcrypt from 'bcryptjs'
import { supabase } from './supabase'

const SALT_ROUNDS = 10

/**
 * 비밀번호를 해시화합니다
 */
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS)
}

/**
 * 비밀번호가 해시와 일치하는지 확인합니다
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash)
}

// 개발용 기본 관리자 (DB 미설정 시 폴백)
const DEV_ADMIN = {
  username: 'admin',
  password: 'embassy2026',
  displayName: '관리자'
}

// 관리자 테이블 타입
interface AdminRecord {
  id: string
  username: string
  password_hash: string
  display_name: string | null
  role?: string  // 선택적 - 테이블에 없을 수 있음
}

/**
 * 관리자 로그인을 처리합니다
 */
export async function loginAdmin(username: string, password: string): Promise<{
  success: boolean
  admin?: {
    id: string
    username: string
    displayName: string | null
    role: string
  }
  error?: string
}> {
  try {
    // Supabase에서 관리자 조회 (role 컬럼은 없을 수 있음)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, error } = await (supabase.from('admins') as any)
      .select('id, username, password_hash, display_name')
      .eq('username', username)
      .single()

    // 디버깅: 에러 및 데이터 로그
    console.log('🔍 Login attempt for:', username)
    console.log('🔍 Supabase error:', error ? JSON.stringify(error) : 'none')
    console.log('🔍 Data received:', data ? 'yes (user found)' : 'no')

    const admin = data as AdminRecord | null

    // DB에서 사용자를 찾은 경우
    if (!error && admin) {
      // 비밀번호 검증
      const isValid = await verifyPassword(password, admin.password_hash)
      if (!isValid) {
        return { success: false, error: '비밀번호가 일치하지 않습니다.' }
      }

      // 마지막 로그인 시간 업데이트
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (supabase.from('admins') as any)
        .update({ last_login_at: new Date().toISOString() })
        .eq('id', admin.id)

      return {
        success: true,
        admin: {
          id: admin.id,
          username: admin.username,
          displayName: admin.display_name,
          role: admin.role || 'admin'  // role이 없으면 기본값 사용
        }
      }
    }

    // DB 오류 또는 테이블 미존재 시 개발용 폴백
    // PGRST116: no rows returned, 42P01: table not found
    // 개발 환경이거나 DB에 사용자가 없는 경우 폴백
    const isDevelopment = process.env.NODE_ENV === 'development' ||
      (typeof window !== 'undefined' && window.location.hostname === 'localhost')
    const isDbError = error?.code === '42P01' || error?.code === 'PGRST116' || !admin

    if (isDevelopment || isDbError) {
      if (username === DEV_ADMIN.username && password === DEV_ADMIN.password) {
        console.log('⚠️ 개발용 관리자 계정으로 로그인 (DB 미설정 또는 사용자 미존재)')
        return {
          success: true,
          admin: {
            id: 'dev-admin',
            username: DEV_ADMIN.username,
            displayName: DEV_ADMIN.displayName,
            role: 'admin'
          }
        }
      }
    }

    return { success: false, error: '사용자를 찾을 수 없습니다.' }
  } catch (err) {
    console.error('Login error:', err)

    // 예외 발생 시에도 개발용 폴백 시도
    const isDevelopment = process.env.NODE_ENV === 'development' ||
      (typeof window !== 'undefined' && window.location.hostname === 'localhost')

    if (isDevelopment) {
      if (username === DEV_ADMIN.username && password === DEV_ADMIN.password) {
        console.log('⚠️ 개발용 관리자 계정으로 로그인 (DB 연결 실패)')
        return {
          success: true,
          admin: {
            id: 'dev-admin',
            username: DEV_ADMIN.username,
            displayName: DEV_ADMIN.displayName,
            role: 'admin'
          }
        }
      }
    }

    return { success: false, error: '로그인 중 오류가 발생했습니다.' }
  }
}

/**
 * 새 관리자를 생성합니다 (초기 설정용)
 */
export async function createAdmin(
  username: string,
  password: string,
  displayName?: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const passwordHash = await hashPassword(password)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase.from('admins') as any)
      .insert([{
        username,
        password_hash: passwordHash,
        display_name: displayName || username,
        role: 'admin'
      }])

    if (error) {
      if (error.code === '23505') { // unique violation
        return { success: false, error: '이미 존재하는 사용자명입니다.' }
      }
      throw error
    }

    return { success: true }
  } catch (error) {
    console.error('Create admin error:', error)
    return { success: false, error: '관리자 생성 중 오류가 발생했습니다.' }
  }
}

/**
 * 비밀번호 해시 생성 (콘솔에서 사용)
 * 예: generatePasswordHash('mypassword').then(console.log)
 */
export async function generatePasswordHash(password: string): Promise<string> {
  return hashPassword(password)
}
