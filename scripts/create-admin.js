#!/usr/bin/env node

/**
 * 초기 관리자 계정 생성 스크립트
 *
 * 사용법:
 *   node scripts/create-admin.js [username] [password] [displayName]
 *
 * 예시:
 *   node scripts/create-admin.js admin embassy2026 "대사관 관리자"
 *
 * 주의: Supabase에 admins 테이블이 먼저 생성되어 있어야 합니다.
 */

const bcrypt = require('bcryptjs')
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const SALT_ROUNDS = 10

async function createAdmin() {
  // 환경변수 확인
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ 환경변수가 설정되지 않았습니다.')
    console.error('   .env.local 파일에 NEXT_PUBLIC_SUPABASE_URL과 NEXT_PUBLIC_SUPABASE_ANON_KEY를 설정하세요.')
    process.exit(1)
  }

  // 명령줄 인수 파싱
  const args = process.argv.slice(2)

  if (args.length < 2) {
    console.log('사용법: node scripts/create-admin.js [username] [password] [displayName]')
    console.log('')
    console.log('예시:')
    console.log('  node scripts/create-admin.js admin embassy2026 "대사관 관리자"')
    console.log('')
    process.exit(1)
  }

  const username = args[0]
  const password = args[1]
  const displayName = args[2] || username

  console.log('🔐 관리자 계정 생성 중...')
  console.log(`   사용자명: ${username}`)
  console.log(`   표시 이름: ${displayName}`)

  try {
    // Supabase 클라이언트 생성
    const supabase = createClient(supabaseUrl, supabaseKey)

    // 비밀번호 해시
    console.log('   비밀번호 해시 생성 중...')
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)

    // 관리자 생성
    console.log('   데이터베이스에 저장 중...')
    const { data, error } = await supabase
      .from('admins')
      .insert([{
        username,
        password_hash: passwordHash,
        display_name: displayName,
        role: 'admin'
      }])
      .select()

    if (error) {
      if (error.code === '23505') {
        console.error(`❌ 이미 존재하는 사용자명입니다: ${username}`)
      } else if (error.code === '42P01') {
        console.error('❌ admins 테이블이 존재하지 않습니다.')
        console.error('   먼저 Supabase에서 admins 테이블을 생성하세요.')
        console.error('')
        console.error('SQL:')
        console.error(`
CREATE TABLE admins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  display_name TEXT,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_login_at TIMESTAMPTZ
);

ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow username lookup" ON admins
  FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "Allow authenticated write" ON admins
  FOR ALL TO authenticated
  USING (true) WITH CHECK (true);
        `)
      } else {
        console.error('❌ 오류 발생:', error.message)
        console.error('   코드:', error.code)
      }
      process.exit(1)
    }

    console.log('')
    console.log('✅ 관리자 계정이 생성되었습니다!')
    console.log('')
    console.log('로그인 정보:')
    console.log(`   URL: http://localhost:3000/admin/login`)
    console.log(`   사용자명: ${username}`)
    console.log(`   비밀번호: ${password}`)
    console.log('')

  } catch (err) {
    console.error('❌ 예기치 않은 오류:', err.message)
    process.exit(1)
  }
}

createAdmin()
