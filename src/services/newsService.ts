import { supabase, paginateQuery, isSupabaseError } from '@/lib/supabase'
import type { News, NewsWithOrganization, PaginatedResponse } from '@/types/supabase'

// 발행된 뉴스 목록 가져오기
export async function getPublishedNews(
  organizationId: string,
  options?: {
    page?: number
    limit?: number
    category?: string
    featured?: boolean
  }
): Promise<PaginatedResponse<NewsWithOrganization>> {
  try {
    let query = supabase
      .from('news')
      .select(`
        *,
        organization:organizations(*)
      `)
      .eq('organization_id', organizationId)
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    // 필터 적용
    if (options?.category) {
      query = query.eq('category', options.category)
    }
    
    if (options?.featured !== undefined) {
      query = query.eq('featured', options.featured)
    }

    const result = await paginateQuery<NewsWithOrganization>(
      query,
      options?.page || 1,
      options?.limit || 10
    )

    return result
  } catch (error) {
    console.error('뉴스 데이터 조회 실패:', error)
    throw error
  }
}

// 특정 뉴스 상세 정보 가져오기
export async function getNewsBySlug(
  organizationId: string,
  slug: string
): Promise<NewsWithOrganization | null> {
  try {
    const { data, error } = await supabase
      .from('news')
      .select(`
        *,
        organization:organizations(*)
      `)
      .eq('organization_id', organizationId)
      .eq('slug', slug)
      .eq('status', 'published')
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return null // 데이터가 없음
      }
      throw error
    }

    // 조회수 증가
    await incrementNewsViewCount((data as any).id)

    return data as NewsWithOrganization
  } catch (error) {
    console.error('뉴스 상세 정보 조회 실패:', error)
    throw error
  }
}

// 뉴스 조회수 증가
export async function incrementNewsViewCount(newsId: string): Promise<void> {
  try {
    const { error } = await supabase.rpc('increment_view_count' as any, {
      news_id: newsId
    } as any)

    if (error && error.code !== 'PGRST204') {
      // PGRST204는 함수가 없을 때 발생 (개발 환경에서 무시)
      console.warn('조회수 증가 실패:', error)
    }
  } catch (error) {
    console.warn('조회수 증가 중 오류:', error)
    // 조회수 증가 실패는 중요하지 않으므로 에러를 던지지 않음
  }
}

// 카테고리별 뉴스 개수 가져오기
export async function getNewsCategoryCount(
  organizationId: string
): Promise<Record<string, number>> {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('category')
      .eq('organization_id', organizationId)
      .eq('status', 'published')

    if (error) throw error

    // 카테고리별 개수 계산
    const categoryCount: Record<string, number> = {}
    data.forEach((item: any) => {
      categoryCount[item.category] = (categoryCount[item.category] || 0) + 1
    })

    return categoryCount
  } catch (error) {
    console.error('카테고리별 뉴스 개수 조회 실패:', error)
    return {}
  }
}

// 최신 뉴스 가져오기 (개수 제한)
export async function getLatestNews(
  organizationId: string,
  limit: number = 5
): Promise<NewsWithOrganization[]> {
  try {
    const { data, error } = await supabase
      .from('news')
      .select(`
        *,
        organization:organizations(*)
      `)
      .eq('organization_id', organizationId)
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(limit)

    if (error) throw error

    return data as NewsWithOrganization[]
  } catch (error) {
    console.error('최신 뉴스 조회 실패:', error)
    return []
  }
}

// 추천 뉴스 가져오기
export async function getFeaturedNews(
  organizationId: string,
  limit: number = 3
): Promise<NewsWithOrganization[]> {
  try {
    const { data, error } = await supabase
      .from('news')
      .select(`
        *,
        organization:organizations(*)
      `)
      .eq('organization_id', organizationId)
      .eq('status', 'published')
      .eq('featured', true)
      .order('published_at', { ascending: false })
      .limit(limit)

    if (error) throw error

    return data as NewsWithOrganization[]
  } catch (error) {
    console.error('추천 뉴스 조회 실패:', error)
    return []
  }
}

// 뉴스 검색
export async function searchNews(
  organizationId: string,
  searchTerm: string,
  options?: {
    page?: number
    limit?: number
    category?: string
  }
): Promise<PaginatedResponse<NewsWithOrganization>> {
  try {
    // 기본 쿼리
    let query = supabase
      .from('news')
      .select(`
        *,
        organization:organizations(*)
      `)
      .eq('organization_id', organizationId)
      .eq('status', 'published')

    // 다국어 검색 (제목과 내용에서 검색)
    if (searchTerm) {
      query = query.or([
        `title->>ko.ilike.%${searchTerm}%`,
        `title->>en.ilike.%${searchTerm}%`,
        `title->>fr.ilike.%${searchTerm}%`,
        `content->>ko.ilike.%${searchTerm}%`,
        `content->>en.ilike.%${searchTerm}%`,
        `content->>fr.ilike.%${searchTerm}%`
      ].join(','))
    }

    // 카테고리 필터
    if (options?.category) {
      query = query.eq('category', options.category)
    }

    query = query.order('published_at', { ascending: false })

    const result = await paginateQuery<NewsWithOrganization>(
      query,
      options?.page || 1,
      options?.limit || 10
    )

    return result
  } catch (error) {
    console.error('뉴스 검색 실패:', error)
    throw error
  }
}

// 더미 데이터 반환 (개발 환경 전용 - Supabase 미설정 시 사용)
export function getDummyNews(): NewsWithOrganization[] {
  const currentDate = new Date()
  const formatDate = (daysAgo: number) => {
    const date = new Date(currentDate)
    date.setDate(date.getDate() - daysAgo)
    return date.toISOString()
  }

  return [
    {
      id: '1',
      organization_id: 'org-1',
      title: {
        ko: '한-모리타니아 경제협력위원회 제5차 회의 개최',
        en: '5th Korea-Mauritania Economic Cooperation Committee Meeting',
        fr: '5ème réunion du Comité de coopération économique Corée-Mauritanie'
      },
      content: {
        ko: '양국 간 경제협력 확대 방안을 논의하기 위한 회의가 서울에서 개최되었습니다.',
        en: 'A meeting was held in Seoul to discuss ways to expand economic cooperation between the two countries.',
        fr: 'Une réunion s\'est tenue à Séoul pour discuter des moyens d\'élargir la coopération économique entre les deux pays.'
      },
      excerpt: {
        ko: '양국 간 경제협력 확대 방안을 논의하기 위한 회의가 서울에서 개최되었습니다.',
        en: 'A meeting was held in Seoul to discuss ways to expand economic cooperation between the two countries.',
        fr: 'Une réunion s\'est tenue à Séoul pour discuter des moyens d\'élargir la coopération économique entre les deux pays.'
      },
      slug: 'economic-cooperation-meeting-5th',
      category: 'news',
      status: 'published' as const,
      featured: true,
      published_at: formatDate(4),
      author_id: undefined,
      featured_image: undefined,
      meta_tags: {},
      view_count: 0,
      created_at: formatDate(4),
      updated_at: formatDate(4),
      organization: {
        id: 'org-1',
        country_code: 'mauritania',
        name: {
          ko: '모리타니아 이슬람공화국',
          en: 'Islamic Republic of Mauritania',
          fr: 'République Islamique de Mauritanie'
        },
        settings: {
          colors: {
            primary: '#006233',
            secondary: '#FFCD00',
            accent: '#8b5cf6'
          },
          flags: {
            country: '🇲🇷',
            korea: '🇰🇷'
          }
        },
        contact_info: {
          address: {
            ko: '서울특별시 용산구 한남대로 98\n한남빌딩 7층',
            en: '7F, Hannam Building, 98 Hannam-daero, Yongsan-gu, Seoul',
            fr: '7F, Bâtiment Hannam, 98 Hannam-daero, Yongsan-gu, Séoul'
          },
          phone: '+82-2-797-2034',
          fax: '+82-2-797-2035',
          email: 'embassy.mauritania@korea.mr',
          hours: {
            ko: '월~금 09:00-17:00\n(점심시간 12:00-13:00)',
            en: 'Mon-Fri 09:00-17:00\n(Lunch 12:00-13:00)',
            fr: 'Lun-Ven 09:00-17:00\n(Déjeuner 12:00-13:00)'
          }
        },
        is_active: true,
        created_at: formatDate(30),
        updated_at: formatDate(1)
      }
    }
  ]
}