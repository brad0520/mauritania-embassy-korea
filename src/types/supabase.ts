export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// 다국어 컨텐츠 타입
export interface MultilingualContent {
  ko?: string
  en?: string
  fr?: string
  ar?: string  // 아랍어 추가
}

// 조직(대사관) 타입
export interface Organization {
  id: string
  country_code: string
  name: MultilingualContent
  settings: {
    colors: {
      primary: string
      secondary: string
      accent: string
    }
    flags: {
      country: string
      korea: string
    }
  }
  contact_info: {
    address: MultilingualContent
    phone: string
    fax: string
    email: string
    hours: MultilingualContent
  }
  is_active: boolean
  created_at: string
  updated_at: string
}

// 뉴스/공지사항 타입
export interface News {
  id: string
  organization_id: string
  title: MultilingualContent
  content: MultilingualContent
  excerpt?: MultilingualContent
  slug: string
  category: string
  status: 'draft' | 'published' | 'archived'
  featured: boolean
  published_at?: string
  author_id?: string
  featured_image?: string
  meta_tags?: Json
  view_count: number
  created_at: string
  updated_at: string
  // Relations
  organization?: Organization
}

// 페이지 컨텐츠 타입
export interface PageContent {
  id: string
  organization_id: string
  page_key: string
  section: string
  content: MultilingualContent | Json
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
  // Relations
  organization?: Organization
}

// 서비스 정보 타입
export interface Service {
  id: string
  organization_id: string
  name: MultilingualContent
  description?: MultilingualContent
  category: string
  requirements?: MultilingualContent | Json
  process?: MultilingualContent
  fees?: Json
  processing_time?: string
  contact_info?: Json
  is_active: boolean
  order_index: number
  created_at: string
  updated_at: string
  // Relations
  organization?: Organization
}

// 양국 관계 정보 타입
export interface BilateralRelation {
  id: string
  organization_id: string
  title: MultilingualContent
  content: MultilingualContent
  category: string
  year?: number
  image_url?: string
  order_index: number
  is_active: boolean
  created_at: string
  updated_at: string
  // Relations
  organization?: Organization
}

// 미디어 파일 타입
export interface MediaFile {
  id: string
  organization_id: string
  filename: string
  original_filename: string
  file_type: string
  mime_type: string
  file_size: number
  storage_path: string
  public_url: string
  alt_text?: MultilingualContent
  caption?: MultilingualContent
  uploaded_by?: string
  created_at: string
  // Relations
  organization?: Organization
}

// 사용자 타입
export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

// 사용자 권한 타입
export interface UserRole {
  id: string
  user_id: string
  organization_id: string
  role: 'admin' | 'editor' | 'viewer'
  granted_at: string
  granted_by?: string
  // Relations
  user?: User
  organization?: Organization
}

// 데이터베이스 스키마 타입
export interface Database {
  public: {
    Tables: {
      organizations: {
        Row: Organization
        Insert: Omit<Organization, 'id' | 'created_at' | 'updated_at'> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Organization>
      }
      news: {
        Row: News
        Insert: Omit<News, 'id' | 'created_at' | 'updated_at' | 'view_count'> & {
          id?: string
          created_at?: string
          updated_at?: string
          view_count?: number
        }
        Update: Partial<News>
      }
      page_contents: {
        Row: PageContent
        Insert: Omit<PageContent, 'id' | 'created_at' | 'updated_at'> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<PageContent>
      }
      services: {
        Row: Service
        Insert: Omit<Service, 'id' | 'created_at' | 'updated_at'> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<Service>
      }
      bilateral_relations: {
        Row: BilateralRelation
        Insert: Omit<BilateralRelation, 'id' | 'created_at' | 'updated_at'> & {
          id?: string
          created_at?: string
          updated_at?: string
        }
        Update: Partial<BilateralRelation>
      }
      media_files: {
        Row: MediaFile
        Insert: Omit<MediaFile, 'id' | 'created_at'> & {
          id?: string
          created_at?: string
        }
        Update: Partial<MediaFile>
      }
      users: {
        Row: User
        Insert: Omit<User, 'created_at' | 'updated_at'> & {
          created_at?: string
          updated_at?: string
        }
        Update: Partial<User>
      }
      user_roles: {
        Row: UserRole
        Insert: Omit<UserRole, 'id' | 'granted_at'> & {
          id?: string
          granted_at?: string
        }
        Update: Partial<UserRole>
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      set_organization_context: {
        Args: { organization_id: string }
        Returns: void
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// 유틸리티 타입들
export type NewsWithOrganization = News & { organization: Organization }
export type ServiceWithOrganization = Service & { organization: Organization }
export type PageContentWithOrganization = PageContent & { organization: Organization }

// API 응답 타입들
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