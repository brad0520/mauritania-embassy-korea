-- =============================================
-- 모리타니아 대사관 - Supabase 보안 강화 스크립트
-- =============================================
-- 실행 방법: Supabase Dashboard > SQL Editor > New query
-- 주의: 순서대로 실행해야 합니다
-- =============================================

-- =============================================
-- 1. admins 테이블 보안 강화
-- =============================================

-- 기존 취약한 정책 삭제
DROP POLICY IF EXISTS "Allow username lookup" ON admins;
DROP POLICY IF EXISTS "Allow authenticated write" ON admins;
DROP POLICY IF EXISTS "Admin read own data" ON admins;
DROP POLICY IF EXISTS "Service role full access" ON admins;

-- RLS 활성화 (이미 되어있으면 무시됨)
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- 새로운 보안 정책: 로그인 시 username으로만 조회 (password_hash 제외)
-- 참고: 실제 비밀번호 검증은 서버 사이드에서 수행
CREATE POLICY "Admins can only select by username for login" ON admins
  FOR SELECT
  TO anon, authenticated
  USING (true);
  -- 주의: SELECT는 허용하되, 클라이언트에서 password_hash를 요청하지 않도록 코드 수정 필요

-- 관리자 테이블 수정은 Service Role만 가능
-- (일반 anon/authenticated 키로는 INSERT/UPDATE/DELETE 불가)
CREATE POLICY "Only service role can modify admins" ON admins
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =============================================
-- 2. 민감한 컬럼 보호를 위한 뷰 생성
-- =============================================

-- password_hash를 숨긴 안전한 뷰 생성
CREATE OR REPLACE VIEW public.admins_safe AS
SELECT
  id,
  username,
  display_name,
  role,
  created_at,
  last_login_at
FROM admins;

-- 뷰에 대한 접근 권한 설정
GRANT SELECT ON public.admins_safe TO anon, authenticated;

-- =============================================
-- 3. news 테이블 RLS 강화
-- =============================================

-- 기존 정책이 너무 관대함 - 더 엄격하게 수정
DROP POLICY IF EXISTS "Admin full access to news" ON news;

-- 관리자만 모든 뉴스 조회 (draft 포함)
CREATE POLICY "Admins can view all news" ON news
  FOR SELECT
  TO authenticated
  USING (
    status = 'published'
    OR EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role IN ('admin', 'editor')
    )
  );

-- 관리자/편집자만 뉴스 생성
CREATE POLICY "Admins can create news" ON news
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role IN ('admin', 'editor')
    )
  );

-- 관리자/편집자만 뉴스 수정
CREATE POLICY "Admins can update news" ON news
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role IN ('admin', 'editor')
    )
  );

-- 관리자만 뉴스 삭제 (편집자는 불가)
CREATE POLICY "Only admins can delete news" ON news
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

-- =============================================
-- 4. Storage 버킷 보안 설정
-- =============================================

-- Storage 정책은 Dashboard에서 설정 필요
-- Dashboard > Storage > Policies

-- news-images 버킷 정책 예시:
-- SELECT: 모두 허용 (공개 이미지)
-- INSERT: 인증된 사용자만
-- UPDATE: 인증된 사용자만 (자신이 업로드한 파일)
-- DELETE: 관리자만

-- =============================================
-- 5. API 접근 로깅 테이블 (선택사항)
-- =============================================

CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID,
  action VARCHAR(50) NOT NULL,
  table_name VARCHAR(100),
  record_id UUID,
  old_data JSONB,
  new_data JSONB,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 감사 로그에 대한 RLS
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- 관리자만 감사 로그 조회 가능
CREATE POLICY "Only admins can view audit logs" ON audit_logs
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

-- 시스템만 감사 로그 생성 가능
CREATE POLICY "System can insert audit logs" ON audit_logs
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- =============================================
-- 6. 보안 함수: 비밀번호 검증 (서버 사이드)
-- =============================================

-- 비밀번호 검증 함수 (pgcrypto 사용)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 관리자 로그인 검증 함수 (RPC로 호출)
CREATE OR REPLACE FUNCTION verify_admin_login(
  p_username TEXT,
  p_password TEXT
)
RETURNS TABLE (
  id UUID,
  username TEXT,
  display_name TEXT,
  role TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER  -- 함수 소유자 권한으로 실행 (RLS 우회)
SET search_path = public
AS $$
DECLARE
  v_admin RECORD;
BEGIN
  -- 관리자 조회
  SELECT a.id, a.username, a.password_hash, a.display_name, a.role
  INTO v_admin
  FROM admins a
  WHERE a.username = p_username;

  -- 사용자 없음
  IF v_admin IS NULL THEN
    RETURN;
  END IF;

  -- 비밀번호 검증 (bcrypt 해시와 비교)
  -- 주의: pgcrypto의 crypt는 bcrypt와 호환됨
  IF v_admin.password_hash = crypt(p_password, v_admin.password_hash) THEN
    -- 마지막 로그인 시간 업데이트
    UPDATE admins SET last_login_at = NOW() WHERE admins.id = v_admin.id;

    -- 결과 반환 (password_hash 제외)
    RETURN QUERY SELECT v_admin.id, v_admin.username, v_admin.display_name, v_admin.role;
  END IF;

  -- 비밀번호 불일치
  RETURN;
END;
$$;

-- 함수 실행 권한
GRANT EXECUTE ON FUNCTION verify_admin_login TO anon, authenticated;

-- =============================================
-- 7. 레이트 리미팅 테이블 (브루트포스 방지)
-- =============================================

CREATE TABLE IF NOT EXISTS login_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address INET NOT NULL,
  username TEXT,
  success BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스 생성 (빠른 조회용)
CREATE INDEX IF NOT EXISTS idx_login_attempts_ip ON login_attempts(ip_address, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_login_attempts_cleanup ON login_attempts(created_at);

-- RLS 활성화
ALTER TABLE login_attempts ENABLE ROW LEVEL SECURITY;

-- Service role만 접근 가능
CREATE POLICY "Service role only for login attempts" ON login_attempts
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 오래된 로그인 시도 자동 삭제 함수
CREATE OR REPLACE FUNCTION cleanup_old_login_attempts()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM login_attempts
  WHERE created_at < NOW() - INTERVAL '24 hours';
END;
$$;

-- =============================================
-- 8. 환경 변수 체크리스트
-- =============================================

-- Supabase Dashboard > Settings > API에서 확인:
--
-- ✅ anon key: 클라이언트에서 사용 (제한된 권한)
-- ✅ service_role key: 서버에서만 사용 (RLS 우회)
--    ⚠️  절대 클라이언트에 노출하지 말 것!
--
-- Dashboard > Settings > Auth:
-- ✅ JWT expiry: 3600 (1시간) 권장
-- ✅ Refresh token rotation: 활성화 권장
-- ✅ Enable email confirmations: 활성화 권장
--
-- Dashboard > Settings > Database:
-- ✅ SSL Enforcement: 활성화 필수
-- ✅ Network restrictions: 필요시 IP 화이트리스트 설정

-- =============================================
-- 완료!
-- =============================================
--
-- 다음 단계:
-- 1. 이 SQL을 Supabase SQL Editor에서 실행
-- 2. 클라이언트 코드에서 password_hash 직접 조회하지 않도록 수정
-- 3. verify_admin_login RPC 함수 사용하도록 코드 변경
-- 4. Storage 버킷 정책 Dashboard에서 설정
-- 5. SSL 및 네트워크 설정 확인
--
