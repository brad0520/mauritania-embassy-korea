// 조직/대사관 타입
export interface Organization {
  id: string
  slug: string
  name: Record<string, string> // 다국어 지원
  type: 'embassy' | 'consulate' | 'organization' | 'company'
  theme: ThemeConfig
  settings: OrganizationSettings
  created_at: string
  updated_at: string
}

// 테마 설정
export interface ThemeConfig {
  layout: LayoutType
  colors: ColorTheme
  fonts: FontConfig
  logo?: {
    url: string
    alt: Record<string, string>
  }
}

// 레이아웃 타입
export type LayoutType = 
  | 'official-classic'
  | 'official-modern'
  | 'modern-corporate'
  | 'modern-tech'
  | 'creative-gallery'
  | 'creative-magazine'
  | 'minimal-clean'

// 색상 테마
export interface ColorTheme {
  id: string
  name: string
  category: 'professional' | 'warm' | 'cool' | 'vibrant' | 'earth'
  colors: {
    primary: ColorScale
    secondary: ColorScale
    accent: string
    neutral: string
    background: string
    text: string
    textLight: string
  }
  gradients: {
    primary: string
    hero: string
  }
}

export interface ColorScale {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

// 폰트 설정
export interface FontConfig {
  heading: string
  body: string
}

// 조직 설정
export interface OrganizationSettings {
  languages: string[]
  defaultLanguage: string
  seo: {
    title: Record<string, string>
    description: Record<string, string>
    keywords: Record<string, string[]>
  }
  contact: ContactInfo
  social?: SocialMedia
}

// 연락처 정보
export interface ContactInfo {
  address: Record<string, string>
  phone?: string
  fax?: string
  email: string
  hours: Record<string, string>
  website?: string
}

// 소셜 미디어
export interface SocialMedia {
  facebook?: string
  twitter?: string
  instagram?: string
  youtube?: string
  linkedin?: string
}

// 페이지
export interface Page {
  id: string
  organization_id: string
  slug: string
  title: Record<string, string>
  content: Record<string, string>
  meta_data?: PageMetaData
  is_published: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

// 페이지 메타데이터
export interface PageMetaData {
  seo_title?: Record<string, string>
  seo_description?: Record<string, string>
  og_image?: string
  canonical_url?: string
}

// 포스트/뉴스
export interface Post {
  id: string
  organization_id: string
  title: Record<string, string>
  content: Record<string, string>
  excerpt?: Record<string, string>
  featured_image?: string
  published_at?: string
  is_published: boolean
  author_id?: string
  created_at: string
  updated_at: string
}

// 미디어
export interface MediaFile {
  id: string
  organization_id: string
  filename: string
  original_name: string
  file_size: number
  mime_type: string
  url: string
  alt_text?: Record<string, string>
  created_at: string
}

// 사용자 역할
export interface UserRole {
  id: string
  user_id: string
  organization_id: string
  role: 'admin' | 'editor' | 'viewer'
  created_at: string
}

// API 응답 타입
export interface ApiResponse<T> {
  data: T
  message?: string
  error?: string
}

// 페이지네이션
export interface PaginationMeta {
  page: number
  limit: number
  total: number
  total_pages: number
}

export interface PaginatedResponse<T> {
  data: T[]
  meta: PaginationMeta
}