import { supabase, isSupabaseError } from '@/lib/supabase'
import type { PageContent, PageContentWithOrganization } from '@/types/supabase'

// 페이지 컨텐츠 가져오기
export async function getPageContent(
  organizationId: string,
  pageKey: string,
  section?: string
): Promise<PageContentWithOrganization[]> {
  try {
    let query = supabase
      .from('page_contents')
      .select(`
        *,
        organization:organizations(*)
      `)
      .eq('organization_id', organizationId)
      .eq('page_key', pageKey)
      .eq('is_active', true)
      .order('order_index')

    if (section) {
      query = query.eq('section', section)
    }

    const { data, error } = await query

    if (error) throw error

    return data as PageContentWithOrganization[]
  } catch (error) {
    console.error('페이지 컨텐츠 조회 실패:', error)
    return []
  }
}

// 특정 섹션 컨텐츠 가져오기
export async function getSectionContent(
  organizationId: string,
  pageKey: string,
  section: string
): Promise<PageContentWithOrganization | null> {
  try {
    const { data, error } = await supabase
      .from('page_contents')
      .select(`
        *,
        organization:organizations(*)
      `)
      .eq('organization_id', organizationId)
      .eq('page_key', pageKey)
      .eq('section', section)
      .eq('is_active', true)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return null // 데이터가 없음
      }
      throw error
    }

    return data as PageContentWithOrganization
  } catch (error) {
    console.error('섹션 컨텐츠 조회 실패:', error)
    return null
  }
}

// 대사 인사말 가져오기
export async function getAmbassadorMessage(
  organizationId: string
): Promise<any> {
  try {
    const content = await getSectionContent(organizationId, 'home', 'ambassador_message')
    return content?.content || getDummyAmbassadorMessage()
  } catch (error) {
    console.error('대사 인사말 조회 실패:', error)
    return getDummyAmbassadorMessage()
  }
}

// 더미 대사 인사말 데이터
export function getDummyAmbassadorMessage() {
  return {
    ko: {
      name: "모하메드 알 무크타르",
      title: "특명전권대사",
      message: `친애하는 한국 국민 여러분,

안녕하십니까. 한국 주재 모리타니아 이슬람공화국 특명전권대사입니다.

모리타니아와 한국은 1962년 외교관계 수립 이후 지속적으로 우호적인 관계를 발전시켜 왔습니다. 양국은 정치, 경제, 문화 등 다양한 분야에서 상호 이익을 바탕으로 한 협력을 강화해 나가고 있습니다.

저희 대사관은 양국 간의 가교 역할을 충실히 수행하며, 모리타니아 국민과 한국 거주 모리타니아인들에게 최상의 영사 서비스를 제공하기 위해 노력하고 있습니다.

감사합니다.`
    },
    en: {
      name: "Mohamed Al Mukhtar",
      title: "Ambassador Extraordinary and Plenipotentiary",
      message: `Dear Korean people,

Greetings. I am the Ambassador Extraordinary and Plenipotentiary of the Islamic Republic of Mauritania to Korea.

Mauritania and Korea have been developing friendly relations continuously since the establishment of diplomatic relations in 1962. Both countries are strengthening cooperation based on mutual interests in various fields such as politics, economy, and culture.

Our embassy faithfully serves as a bridge between the two countries and strives to provide the best consular services to Mauritanian citizens and Korean residents of Mauritanian origin.

Thank you.`
    },
    fr: {
      name: "Mohamed Al Mukhtar",
      title: "Ambassadeur extraordinaire et plénipotentiaire",
      message: `Chers citoyens coréens,

Salutations. Je suis l'Ambassadeur extraordinaire et plénipotentiaire de la République Islamique de Mauritanie en Corée.

La Mauritanie et la Corée ont développé des relations amicales de manière continue depuis l'établissement des relations diplomatiques en 1962. Les deux pays renforcent la coopération basée sur les intérêts mutuels dans divers domaines tels que la politique, l'économie et la culture.

Notre ambassade sert fidèlement de pont entre les deux pays et s'efforce de fournir les meilleurs services consulaires aux citoyens mauritaniens et aux résidents coréens d'origine mauritanienne.

Merci.`
    }
  }
}

// 대사관 서비스 정보 가져오기
export async function getEmbassyServices(
  organizationId: string,
  category?: string
): Promise<any[]> {
  try {
    let query = supabase
      .from('services')
      .select('*')
      .eq('organization_id', organizationId)
      .eq('is_active', true)
      .order('order_index')

    if (category) {
      query = query.eq('category', category)
    }

    const { data, error } = await query

    if (error) throw error

    return data || []
  } catch (error) {
    console.error('서비스 정보 조회 실패:', error)
    return getDummyServices()
  }
}

// 더미 서비스 데이터
export function getDummyServices() {
  return [
    {
      id: '1',
      name: { ko: '비자 신청', en: 'Visa Application', fr: 'Demande de visa' },
      description: { 
        ko: '모리타니아 입국을 위한 비자 신청 서비스', 
        en: 'Visa application service for entry to Mauritania', 
        fr: 'Service de demande de visa pour l\'entrée en Mauritanie' 
      },
      category: 'visa'
    },
    {
      id: '2',
      name: { ko: '여권 발급', en: 'Passport Issuance', fr: 'Délivrance de passeport' },
      description: { 
        ko: '모리타니아 여권 발급 및 갱신 서비스', 
        en: 'Mauritanian passport issuance and renewal service', 
        fr: 'Service de délivrance et de renouvellement de passeport mauritanien' 
      },
      category: 'consular'
    },
    {
      id: '3',
      name: { ko: '출생신고', en: 'Birth Registration', fr: 'Déclaration de naissance' },
      description: { 
        ko: '한국에서 출생한 모리타니아 국민의 출생신고', 
        en: 'Birth registration for Mauritanian citizens born in Korea', 
        fr: 'Déclaration de naissance pour les citoyens mauritaniens nés en Corée' 
      },
      category: 'consular'
    },
    {
      id: '4',
      name: { ko: '사증면제 안내', en: 'Visa Waiver Information', fr: 'Information sur l\'exemption de visa' },
      description: { 
        ko: '한국 국민의 모리타니아 사증면제 협정 안내', 
        en: 'Information on visa waiver agreement for Korean citizens to Mauritania', 
        fr: 'Information sur l\'accord d\'exemption de visa pour les citoyens coréens en Mauritanie' 
      },
      category: 'visa'
    },
    {
      id: '5',
      name: { ko: '아포스티유', en: 'Apostille', fr: 'Apostille' },
      description: { 
        ko: '공문서 아포스티유 확인 서비스', 
        en: 'Official document apostille verification service', 
        fr: 'Service de vérification d\'apostille de documents officiels' 
      },
      category: 'notary'
    },
    {
      id: '6',
      name: { ko: '영사확인', en: 'Consular Confirmation', fr: 'Confirmation consulaire' },
      description: { 
        ko: '각종 서류의 영사확인 서비스', 
        en: 'Consular confirmation service for various documents', 
        fr: 'Service de confirmation consulaire pour divers documents' 
      },
      category: 'notary'
    }
  ]
}