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

/**
 * 관리자 로그인을 처리합니다
 *
 * 보안 개선: 서버 사이드 API를 통해 인증 처리
 * - 클라이언트에서 직접 password_hash 조회하지 않음
 * - Service Role 키는 서버에서만 사용
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
    // 서버 사이드 API를 통한 안전한 로그인
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    const result = await response.json()

    if (result.success) {
      return {
        success: true,
        admin: result.admin
      }
    }

    return {
      success: false,
      error: result.error || '로그인에 실패했습니다.'
    }
  } catch (err) {
    console.error('Login error:', err)

    // API 호출 실패 시 개발용 폴백
    const isDevelopment = process.env.NODE_ENV === 'development' ||
      (typeof window !== 'undefined' && window.location.hostname === 'localhost')

    if (isDevelopment) {
      if (username === DEV_ADMIN.username && password === DEV_ADMIN.password) {
        console.log('⚠️ 개발용 관리자 계정으로 로그인 (API 연결 실패)')
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
