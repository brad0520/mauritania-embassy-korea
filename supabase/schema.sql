-- =============================================
-- 모리타니아 대사관 웹사이트 - Supabase 스키마
-- =============================================
-- Supabase SQL Editor에서 이 파일을 실행하세요.
-- Dashboard > SQL Editor > New query

-- 1. 조직 테이블 (대사관 정보)
CREATE TABLE IF NOT EXISTS organizations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  country_code VARCHAR(10) NOT NULL UNIQUE,
  name JSONB NOT NULL DEFAULT '{}',
  settings JSONB NOT NULL DEFAULT '{}',
  contact_info JSONB NOT NULL DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 뉴스/공관활동 테이블
CREATE TABLE IF NOT EXISTS news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  title JSONB NOT NULL DEFAULT '{}',
  content JSONB NOT NULL DEFAULT '{}',
  excerpt JSONB DEFAULT '{}',
  slug VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL DEFAULT 'news',
  status VARCHAR(20) NOT NULL DEFAULT 'draft',
  featured BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  author_id UUID,
  featured_image TEXT,
  meta_tags JSONB DEFAULT '{}',
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(organization_id, slug)
);

-- 카테고리 설명:
-- 'news' = 일반 뉴스
-- 'activity' = 공관활동 (Embassy Activities)
-- 'announcement' = 공지사항
-- 'event' = 행사

-- 3. 페이지 콘텐츠 테이블
CREATE TABLE IF NOT EXISTS page_contents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  page_key VARCHAR(100) NOT NULL,
  section VARCHAR(100) NOT NULL,
  content JSONB NOT NULL DEFAULT '{}',
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(organization_id, page_key, section)
);

-- 4. 서비스 정보 테이블
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  name JSONB NOT NULL DEFAULT '{}',
  description JSONB DEFAULT '{}',
  category VARCHAR(50) NOT NULL,
  requirements JSONB DEFAULT '{}',
  process JSONB DEFAULT '{}',
  fees JSONB DEFAULT '{}',
  processing_time VARCHAR(100),
  contact_info JSONB DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. 양국 관계 테이블
CREATE TABLE IF NOT EXISTS bilateral_relations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  title JSONB NOT NULL DEFAULT '{}',
  content JSONB NOT NULL DEFAULT '{}',
  category VARCHAR(50),
  year INTEGER,
  image_url TEXT,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. 미디어 파일 테이블
CREATE TABLE IF NOT EXISTS media_files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  organization_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  filename VARCHAR(255) NOT NULL,
  original_filename VARCHAR(255) NOT NULL,
  file_type VARCHAR(50) NOT NULL,
  mime_type VARCHAR(100) NOT NULL,
  file_size BIGINT NOT NULL,
  storage_path TEXT NOT NULL,
  public_url TEXT NOT NULL,
  alt_text JSONB DEFAULT '{}',
  caption JSONB DEFAULT '{}',
  uploaded_by UUID,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. 사용자 프로필 테이블 (auth.users 확장)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. 사용자 권한 테이블
CREATE TABLE IF NOT EXISTS user_roles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  role VARCHAR(20) NOT NULL DEFAULT 'viewer',
  granted_at TIMESTAMPTZ DEFAULT NOW(),
  granted_by UUID,
  UNIQUE(user_id, organization_id)
);

-- =============================================
-- 인덱스 생성
-- =============================================

CREATE INDEX IF NOT EXISTS idx_news_org_status ON news(organization_id, status);
CREATE INDEX IF NOT EXISTS idx_news_category ON news(category);
CREATE INDEX IF NOT EXISTS idx_news_published_at ON news(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_contents_org_page ON page_contents(organization_id, page_key);
CREATE INDEX IF NOT EXISTS idx_services_org_category ON services(organization_id, category);
CREATE INDEX IF NOT EXISTS idx_user_roles_user ON user_roles(user_id);

-- =============================================
-- Row Level Security (RLS) 정책
-- =============================================

-- RLS 활성화
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_contents ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bilateral_relations ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- 공개 읽기 정책 (발행된 콘텐츠만)
CREATE POLICY "Public read for published news" ON news
  FOR SELECT USING (status = 'published');

CREATE POLICY "Public read for active organizations" ON organizations
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public read for active page contents" ON page_contents
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public read for active services" ON services
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public read for active bilateral relations" ON bilateral_relations
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public read for media files" ON media_files
  FOR SELECT USING (true);

-- 관리자 전체 접근 정책
CREATE POLICY "Admin full access to news" ON news
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admin full access to page_contents" ON page_contents
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admin full access to services" ON services
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

CREATE POLICY "Admin full access to bilateral_relations" ON bilateral_relations
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role = 'admin'
    )
  );

CREATE POLICY "Admin full access to media_files" ON media_files
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_roles.user_id = auth.uid()
      AND user_roles.role IN ('admin', 'editor')
    )
  );

-- 사용자 자신의 프로필만 수정 가능
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (id = auth.uid());

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (id = auth.uid());

-- 사용자 권한 조회 (자신의 권한만)
CREATE POLICY "Users can view own roles" ON user_roles
  FOR SELECT USING (user_id = auth.uid());

-- =============================================
-- 트리거 함수: updated_at 자동 업데이트
-- =============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 각 테이블에 트리거 적용
CREATE TRIGGER update_organizations_updated_at
  BEFORE UPDATE ON organizations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_news_updated_at
  BEFORE UPDATE ON news
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_page_contents_updated_at
  BEFORE UPDATE ON page_contents
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bilateral_relations_updated_at
  BEFORE UPDATE ON bilateral_relations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- 초기 데이터: 모리타니아 대사관 조직
-- =============================================

INSERT INTO organizations (country_code, name, settings, contact_info, is_active)
VALUES (
  'MR',
  '{"ko": "주한 모리타니아 이슬람 공화국 대사관", "en": "Embassy of the Islamic Republic of Mauritania in Korea", "fr": "Ambassade de la République Islamique de Mauritanie en Corée", "ar": "سفارة الجمهورية الإسلامية الموريتانية في كوريا"}'::jsonb,
  '{
    "colors": {
      "primary": "#006233",
      "secondary": "#FFCD00",
      "accent": "#8b5cf6"
    },
    "flags": {
      "country": "MR",
      "korea": "KR"
    }
  }'::jsonb,
  '{
    "address": {
      "ko": "(04389) 서울시 용산구 한강대로 26\n한강대우트럼프월드 3차 101동 902호",
      "en": "902, Bldg 101, Hangang Daewoo Trump World 3rd\n26 Hangang-daero, Yongsan-gu, Seoul 04389",
      "fr": "902, Bât. 101, Hangang Daewoo Trump World 3ème\n26 Hangang-daero, Yongsan-gu, Séoul 04389",
      "ar": "٩٠٢، مبنى ١٠١، هانجانغ دايو ترامب وورلد الثالث\n٢٦ هانجانغ-دايرو، يونغسان-غو، سيول ٠٤٣٨٩"
    },
    "phone": "+82-2-790-6458",
    "fax": "+82-2-792-6458",
    "email": "ambarimseoul@diplomatie.gov.mr",
    "hours": {
      "ko": "월~금 09:00-17:00\n(점심시간 12:00-13:00)",
      "en": "Mon-Fri 09:00-17:00\n(Lunch: 12:00-13:00)",
      "fr": "Lun-Ven 09:00-17:00\n(Déjeuner: 12:00-13:00)",
      "ar": "الاثنين-الجمعة ٠٩:٠٠-١٧:٠٠\n(استراحة الغداء ١٢:٠٠-١٣:٠٠)"
    }
  }'::jsonb,
  true
)
ON CONFLICT (country_code) DO NOTHING;

-- =============================================
-- 샘플 공관활동 데이터 (선택사항)
-- =============================================

-- 조직 ID를 변수로 저장
DO $$
DECLARE
  org_id UUID;
BEGIN
  SELECT id INTO org_id FROM organizations WHERE country_code = 'MR';

  IF org_id IS NOT NULL THEN
    -- 샘플 공관활동 1
    INSERT INTO news (organization_id, title, content, excerpt, slug, category, status, published_at)
    VALUES (
      org_id,
      '{"ko": "한-모리타니아 수교 60주년 기념행사", "en": "Korea-Mauritania 60th Anniversary Celebration", "fr": "Célébration du 60e anniversaire des relations Corée-Mauritanie", "ar": "الاحتفال بالذكرى الستين للعلاقات الكورية الموريتانية"}'::jsonb,
      '{"ko": "2024년 11월 28일, 서울에서 한-모리타니아 수교 60주년을 기념하는 특별 행사가 개최되었습니다.", "en": "On November 28, 2024, a special event was held in Seoul to commemorate the 60th anniversary of diplomatic relations between Korea and Mauritania.", "fr": "Le 28 novembre 2024, un événement spécial a été organisé à Séoul pour commémorer le 60e anniversaire des relations diplomatiques entre la Corée et la Mauritanie.", "ar": "في 28 نوفمبر 2024، أقيم حدث خاص في سيول للاحتفال بالذكرى الستين للعلاقات الدبلوماسية بين كوريا وموريتانيا."}'::jsonb,
      '{"ko": "수교 60주년 기념행사 안내", "en": "60th Anniversary Celebration", "fr": "Célébration du 60e anniversaire", "ar": "الاحتفال بالذكرى الستين"}'::jsonb,
      'korea-mauritania-60th-anniversary',
      'activity',
      'published',
      NOW() - INTERVAL '30 days'
    )
    ON CONFLICT (organization_id, slug) DO NOTHING;

    -- 샘플 공관활동 2
    INSERT INTO news (organization_id, title, content, excerpt, slug, category, status, published_at)
    VALUES (
      org_id,
      '{"ko": "모리타니아 문화 홍보 행사", "en": "Mauritania Cultural Promotion Event", "fr": "Événement de promotion culturelle mauritanienne", "ar": "حدث الترويج الثقافي الموريتاني"}'::jsonb,
      '{"ko": "주한 모리타니아 대사관에서 모리타니아의 전통 문화와 예술을 소개하는 특별 전시회를 개최합니다.", "en": "The Embassy of Mauritania in Korea hosts a special exhibition introducing traditional Mauritanian culture and arts.", "fr": "L''Ambassade de Mauritanie en Corée organise une exposition spéciale présentant la culture et les arts traditionnels mauritaniens.", "ar": "تستضيف سفارة موريتانيا في كوريا معرضا خاصا يقدم الثقافة والفنون الموريتانية التقليدية."}'::jsonb,
      '{"ko": "문화 홍보 행사 안내", "en": "Cultural Promotion Event", "fr": "Événement culturel", "ar": "حدث ثقافي"}'::jsonb,
      'mauritania-cultural-event',
      'activity',
      'published',
      NOW() - INTERVAL '15 days'
    )
    ON CONFLICT (organization_id, slug) DO NOTHING;
  END IF;
END $$;

-- =============================================
-- Storage 버킷 생성 (Supabase Dashboard에서 수동 생성 필요)
-- =============================================
-- Dashboard > Storage > New bucket
-- 이름: embassy-media
-- Public: Yes (공개 이미지용)
-- File size limit: 10MB
-- Allowed mime types: image/*, application/pdf

-- =============================================
-- 설정 완료!
-- =============================================
-- 다음 단계:
-- 1. Dashboard > Authentication > Users에서 관리자 계정 생성
-- 2. user_roles 테이블에 관리자 권한 추가
-- 3. Storage 버킷 생성
