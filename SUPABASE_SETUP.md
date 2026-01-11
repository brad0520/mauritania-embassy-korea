# Supabase 설정 가이드

주한 모리타니아 대사관 웹사이트의 관리자 기능을 활성화하기 위한 Supabase 설정 가이드입니다.

## 1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com)에 접속하여 로그인
2. **New Project** 클릭
3. 프로젝트 설정:
   - **Name**: `mauritania-embassy`
   - **Database Password**: 안전한 비밀번호 설정 (저장해두세요)
   - **Region**: Northeast Asia (Seoul) - `ap-northeast-2`
4. **Create new project** 클릭

## 2. 데이터베이스 스키마 생성

1. Supabase Dashboard에서 **SQL Editor** 클릭
2. **New query** 클릭
3. `supabase/schema.sql` 파일의 내용을 복사하여 붙여넣기
4. **Run** 클릭하여 실행

## 3. 환경 변수 설정

### API 키 확인
1. Dashboard > **Settings** > **API**
2. 다음 값들을 복사:
   - **Project URL**: `https://xxxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...`
   - **service_role key**: `eyJhbGc...` (비밀!)

### .env.local 파일 생성
프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 입력:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
NEXT_PUBLIC_SITE_URL=https://mauritania-embassy.vercel.app
```

## 4. 관리자 계정 생성

### Authentication 설정
1. Dashboard > **Authentication** > **Providers**
2. **Email** 활성화 확인

### 관리자 사용자 생성
1. Dashboard > **Authentication** > **Users**
2. **Add user** > **Create new user**
3. 다음 정보 입력:
   - **Email**: `admin@embassy.mr` (또는 원하는 이메일)
   - **Password**: 안전한 비밀번호
   - **Auto Confirm User**: 체크

### 관리자 권한 부여
1. Dashboard > **SQL Editor** > **New query**
2. 다음 SQL 실행 (이메일 주소를 실제 값으로 변경):

```sql
-- 사용자 프로필 생성
INSERT INTO users (id, email, full_name)
SELECT id, email, 'Embassy Admin'
FROM auth.users
WHERE email = 'admin@embassy.mr';

-- 관리자 권한 부여
INSERT INTO user_roles (user_id, organization_id, role)
SELECT
  u.id,
  o.id,
  'admin'
FROM auth.users u
CROSS JOIN organizations o
WHERE u.email = 'admin@embassy.mr'
AND o.country_code = 'MR';
```

## 5. Storage 설정 (선택사항)

이미지 업로드 기능을 사용하려면:

1. Dashboard > **Storage** > **New bucket**
2. 설정:
   - **Name**: `embassy-media`
   - **Public bucket**: Yes
   - **File size limit**: 10MB
   - **Allowed MIME types**: `image/*,application/pdf`
3. **Create bucket** 클릭

### Storage 정책 설정
1. 생성된 버킷 클릭 > **Policies**
2. **New policy** > **For full customization**
3. 다음 정책 추가:

```sql
-- 공개 읽기
CREATE POLICY "Public read access"
ON storage.objects FOR SELECT
USING (bucket_id = 'embassy-media');

-- 인증된 사용자 업로드
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'embassy-media');
```

## 6. Vercel 환경 변수 설정

Vercel에 배포할 경우:

1. Vercel Dashboard > 프로젝트 선택
2. **Settings** > **Environment Variables**
3. 다음 변수 추가:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL`

## 7. 테스트

1. 로컬에서 실행: `npm run dev`
2. `/admin/login` 접속
3. 생성한 관리자 계정으로 로그인
4. 공관활동 관리 페이지에서 글 작성 테스트

## 무료 티어 제한사항

Supabase 무료 티어:
- **Database**: 500MB
- **Storage**: 1GB
- **Bandwidth**: 2GB/월
- **Edge Functions**: 500,000 호출/월

대사관 웹사이트 용도로는 충분합니다!

## 문제 해결

### 로그인이 안 될 때
- 환경 변수가 올바르게 설정되었는지 확인
- Supabase Dashboard에서 이메일 인증이 활성화되어 있는지 확인
- 사용자가 `users` 테이블과 `user_roles` 테이블에 있는지 확인

### 데이터가 안 보일 때
- RLS 정책이 올바르게 설정되었는지 확인
- 브라우저 개발자 도구에서 에러 메시지 확인
- Supabase Dashboard > Logs에서 오류 확인

---

설정 완료 후 관리자는 `/admin` 경로에서 공관활동을 관리할 수 있습니다.
