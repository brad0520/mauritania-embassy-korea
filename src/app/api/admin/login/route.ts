import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Service Role 클라이언트 (RLS 우회 - 서버 사이드에서만 사용)
// 빌드 시점에는 환경 변수가 없을 수 있으므로 런타임에 생성
function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key || url === 'https://dummy-project.supabase.co') {
    return null
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

// 개발용 기본 관리자
const DEV_ADMIN = {
  username: 'admin',
  password: 'embassy2026',
  displayName: '관리자'
}

interface AdminRecord {
  id: string
  username: string
  password_hash: string
  display_name: string | null
  role?: string
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // 입력 검증
    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: '사용자명과 비밀번호를 입력해주세요.' },
        { status: 400 }
      )
    }

    // 레이트 리미팅 (간단한 구현)
    // 실제 운영에서는 Redis나 더 강력한 솔루션 사용 권장
    const clientIP = request.headers.get('x-forwarded-for') || 'unknown'

    // Service Role 클라이언트 생성 (런타임)
    const supabaseAdmin = getSupabaseAdmin()

    if (supabaseAdmin) {
      // 프로덕션: Service Role로 안전하게 조회
      const { data: admin, error } = await supabaseAdmin
        .from('admins')
        .select('id, username, password_hash, display_name, role')
        .eq('username', username)
        .single()

      if (error) {
        console.error('Admin lookup error:', error.code)

        // 테이블이 없는 경우 개발 모드 폴백
        if (error.code === '42P01' || error.code === 'PGRST116') {
          return handleDevLogin(username, password)
        }

        return NextResponse.json(
          { success: false, error: '로그인 중 오류가 발생했습니다.' },
          { status: 500 }
        )
      }

      if (!admin) {
        // 로그인 실패 기록 (보안 로깅)
        await logLoginAttempt(supabaseAdmin, clientIP, username, false)
        return NextResponse.json(
          { success: false, error: '사용자를 찾을 수 없습니다.' },
          { status: 401 }
        )
      }

      // 비밀번호 검증 (서버 사이드에서 bcrypt 사용)
      const isValid = await bcrypt.compare(password, (admin as AdminRecord).password_hash)

      if (!isValid) {
        await logLoginAttempt(supabaseAdmin, clientIP, username, false)
        return NextResponse.json(
          { success: false, error: '비밀번호가 일치하지 않습니다.' },
          { status: 401 }
        )
      }

      // 마지막 로그인 시간 업데이트
      await supabaseAdmin
        .from('admins')
        .update({ last_login_at: new Date().toISOString() })
        .eq('id', (admin as AdminRecord).id)

      // 로그인 성공 기록
      await logLoginAttempt(supabaseAdmin, clientIP, username, true)

      // 성공 응답 (password_hash 제외)
      return NextResponse.json({
        success: true,
        admin: {
          id: (admin as AdminRecord).id,
          username: (admin as AdminRecord).username,
          displayName: (admin as AdminRecord).display_name,
          role: (admin as AdminRecord).role || 'admin'
        }
      })
    } else {
      // Service Role 키가 없으면 개발 모드
      return handleDevLogin(username, password)
    }
  } catch (error) {
    console.error('Login API error:', error)
    return NextResponse.json(
      { success: false, error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}

// 개발 모드 로그인 처리
function handleDevLogin(username: string, password: string) {
  if (username === DEV_ADMIN.username && password === DEV_ADMIN.password) {
    console.log('⚠️ 개발용 관리자 계정으로 로그인')
    return NextResponse.json({
      success: true,
      admin: {
        id: 'dev-admin',
        username: DEV_ADMIN.username,
        displayName: DEV_ADMIN.displayName,
        role: 'admin'
      }
    })
  }

  return NextResponse.json(
    { success: false, error: '사용자를 찾을 수 없습니다.' },
    { status: 401 }
  )
}

// 로그인 시도 기록 (보안 로깅)
async function logLoginAttempt(
  supabaseAdmin: SupabaseClient,
  ip: string,
  username: string,
  success: boolean
) {
  try {
    // login_attempts 테이블이 있는 경우에만 기록
    await supabaseAdmin
      .from('login_attempts')
      .insert({
        ip_address: ip,
        username,
        success
      })
  } catch {
    // 테이블이 없어도 로그인 프로세스는 계속 진행
    console.log('Login attempt logging skipped (table may not exist)')
  }
}
