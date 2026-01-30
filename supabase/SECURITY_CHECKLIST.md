# Supabase 보안 체크리스트

## 📋 즉시 조치 필요 항목

### 1. RLS (Row Level Security) ✅
- [x] `organizations` 테이블 RLS 활성화
- [x] `news` 테이블 RLS 활성화
- [x] `page_contents` 테이블 RLS 활성화
- [x] `services` 테이블 RLS 활성화
- [x] `bilateral_relations` 테이블 RLS 활성화
- [x] `media_files` 테이블 RLS 활성화
- [x] `users` 테이블 RLS 활성화
- [x] `user_roles` 테이블 RLS 활성화
- [ ] **`admins` 테이블 RLS 강화** ⚠️ 취약점 발견
- [ ] `audit_logs` 테이블 RLS 활성화 (신규)
- [ ] `login_attempts` 테이블 RLS 활성화 (신규)

### 2. API 키 관리
- [ ] `anon` 키가 클라이언트에만 사용되는지 확인
- [ ] `service_role` 키가 서버에만 사용되는지 확인
- [ ] 환경 변수로 키 관리 (.env.local)
- [ ] 키 로테이션 일정 수립 (분기별 권장)

### 3. 인증 설정 (Dashboard > Auth)
- [ ] JWT 만료 시간 설정 (3600초 = 1시간 권장)
- [ ] Refresh Token 로테이션 활성화
- [ ] 이메일 확인 활성화 (선택)
- [ ] 비밀번호 정책 설정 (최소 8자, 대소문자+숫자)

### 4. 데이터베이스 설정 (Dashboard > Database)
- [ ] **SSL 강제 활성화** (Settings > SSL Enforcement)
- [ ] 네트워크 제한 설정 (필요시 IP 화이트리스트)
- [ ] Connection pooling 설정 확인
- [ ] 자동 백업 활성화 확인

### 5. Storage 보안 (Dashboard > Storage)
- [ ] 버킷별 접근 정책 설정
- [ ] 파일 크기 제한 설정
- [ ] MIME 타입 제한 설정
- [ ] 공개/비공개 버킷 구분

---

## 🔐 admins 테이블 보안 강화

### 현재 문제점
```sql
-- ❌ 위험: 누구나 password_hash 조회 가능
CREATE POLICY "Allow username lookup" ON admins
  FOR SELECT TO anon, authenticated
  USING (true);
```

### 해결 방법
1. `security-upgrade.sql` 실행
2. `verify_admin_login` RPC 함수 사용
3. 클라이언트에서 직접 password_hash 조회 제거

---

## 🌐 커스텀 스키마 사용 (선택사항)

### 장점
- `public` 스키마 노출 감소
- API 경로 은닉
- 권한 분리 용이

### 설정 방법
```sql
-- 1. 커스텀 스키마 생성
CREATE SCHEMA IF NOT EXISTS embassy;

-- 2. 테이블 이동 (예시)
ALTER TABLE public.news SET SCHEMA embassy;

-- 3. API 설정 변경 (Dashboard > API)
-- Exposed schemas에 'embassy' 추가
```

### 주의사항
- 기존 코드의 테이블 참조 수정 필요
- RLS 정책 재설정 필요

---

## 🔒 MFA (다단계 인증) 설정

### Supabase MFA 활성화
1. Dashboard > Authentication > Settings
2. "Enable Multi-factor authentication" 활성화
3. TOTP (Time-based One-Time Password) 설정

### 클라이언트 연동 코드
```typescript
// MFA 등록
const { data, error } = await supabase.auth.mfa.enroll({
  factorType: 'totp',
  friendlyName: 'My Authenticator App'
})

// MFA 검증
const { data, error } = await supabase.auth.mfa.verify({
  factorId: factor.id,
  code: userInputCode
})
```

---

## 📧 보안 알림 템플릿

### 이메일 템플릿 설정 (Dashboard > Auth > Email Templates)

#### 1. 로그인 알림
```html
<h2>새로운 로그인 감지</h2>
<p>귀하의 계정으로 새로운 로그인이 감지되었습니다.</p>
<ul>
  <li>시간: {{ .SentAt }}</li>
  <li>IP: {{ .Data.ip_address }}</li>
  <li>기기: {{ .Data.user_agent }}</li>
</ul>
<p>본인이 아니라면 즉시 비밀번호를 변경하세요.</p>
```

#### 2. 비밀번호 변경 알림
```html
<h2>비밀번호가 변경되었습니다</h2>
<p>귀하의 계정 비밀번호가 변경되었습니다.</p>
<p>시간: {{ .SentAt }}</p>
<p>본인이 아니라면 즉시 고객센터에 연락하세요.</p>
```

---

## 🛡️ 인프라 보안 체크리스트

### SSL/TLS 설정
- [ ] SSL 강제 적용 (Dashboard > Database > SSL Enforcement)
- [ ] TLS 1.2 이상 사용 확인
- [ ] 인증서 만료일 모니터링

### 네트워크 제한
- [ ] 프로덕션 환경: 특정 IP만 허용 고려
- [ ] 개발 환경: 별도 프로젝트 사용 권장
- [ ] VPN 사용 고려 (민감한 관리 작업)

### 모니터링
- [ ] 로그 모니터링 설정
- [ ] 비정상 접근 알림 설정
- [ ] 정기적인 보안 감사 일정

---

## 📅 정기 점검 일정

| 항목 | 주기 | 담당 |
|------|------|------|
| RLS 정책 검토 | 분기별 | 개발팀 |
| API 키 로테이션 | 분기별 | 운영팀 |
| 접근 로그 검토 | 월별 | 보안팀 |
| 백업 테스트 | 월별 | 운영팀 |
| 보안 패치 적용 | 즉시 | 개발팀 |

---

## 🚀 실행 순서

1. **즉시**: `security-upgrade.sql` 실행
2. **즉시**: Dashboard에서 SSL 강제 활성화
3. **1주 내**: 클라이언트 코드 수정 (RPC 함수 사용)
4. **1주 내**: Storage 정책 설정
5. **2주 내**: MFA 설정 (선택)
6. **월별**: 정기 점검 시작

---

*최종 업데이트: 2026-01-30*
