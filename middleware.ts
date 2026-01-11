import { NextRequest, NextResponse } from 'next/server'

// 메인 플랫폼 도메인 설정
const MAIN_DOMAIN = process.env.MAIN_DOMAIN || 'embassy-builder.com'
const ADMIN_PATHS = ['/admin', '/api/admin']
const API_PATHS = ['/api']

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname
  const pathname = request.nextUrl.pathname
  
  // 1. 로컬 개발 환경 처리
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return handleLocalDevelopment(request)
  }
  
  // 2. 메인 플랫폼 도메인 처리
  if (hostname === MAIN_DOMAIN) {
    return handleMainPlatform(request)
  }
  
  // 3. 서브도메인 또는 커스텀 도메인 처리
  return handleTenantSite(request, hostname)
}

/**
 * 로컬 개발 환경 처리
 * localhost:3000 에서 테스트 조직을 시뮬레이션
 */
function handleLocalDevelopment(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const headers = new Headers(request.headers)
  
  // URL에서 조직 슬러그 추출 (예: /mauritania/about)
  const pathParts = pathname.split('/').filter(Boolean)
  const organizationSlug = pathParts[0]
  
  // 관리자 경로는 그대로 통과
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    headers.set('x-organization-context', 'admin')
    return NextResponse.next({ headers })
  }
  
  // API 경로 처리
  if (pathname.startsWith('/api')) {
    if (organizationSlug) {
      headers.set('x-organization-slug', organizationSlug)
    }
    return NextResponse.next({ headers })
  }
  
  // 조직별 사이트 라우팅
  if (organizationSlug && !pathname.startsWith('/admin')) {
    headers.set('x-organization-slug', organizationSlug)
    headers.set('x-organization-context', 'tenant')
    
    // 내부적으로 [organization] 동적 라우트로 리라이트
    const newUrl = request.nextUrl.clone()
    newUrl.pathname = `/tenant/${organizationSlug}${pathname.substring(organizationSlug.length + 1)}`
    
    return NextResponse.rewrite(newUrl, { headers })
  }
  
  // 기본: 플랫폼 홈페이지
  headers.set('x-organization-context', 'platform')
  return NextResponse.next({ headers })
}

/**
 * 메인 플랫폼 도메인 처리
 * embassy-builder.com 에서의 랜딩 페이지, 관리자 등
 */
function handleMainPlatform(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const headers = new Headers(request.headers)
  
  // 관리자 관련 경로
  if (ADMIN_PATHS.some(path => pathname.startsWith(path))) {
    headers.set('x-organization-context', 'admin')
    return NextResponse.next({ headers })
  }
  
  // API 경로
  if (pathname.startsWith('/api')) {
    headers.set('x-organization-context', 'platform')
    return NextResponse.next({ headers })
  }
  
  // 플랫폼 랜딩 페이지
  headers.set('x-organization-context', 'platform')
  return NextResponse.next({ headers })
}

/**
 * 서브도메인 또는 커스텀 도메인 처리
 * mauritania-embassy.embassy-builder.com 또는 mauritania-embassy.kr
 */
function handleTenantSite(request: NextRequest, hostname: string) {
  const pathname = request.nextUrl.pathname
  const headers = new Headers(request.headers)
  
  // 서브도메인에서 조직 슬러그 추출
  let organizationSlug = extractOrganizationSlug(hostname)
  
  // 커스텀 도메인인 경우 데이터베이스에서 조직 조회 필요
  // 현재는 호스트명을 슬러그로 사용
  if (!organizationSlug) {
    organizationSlug = hostname.split('.')[0]
  }
  
  headers.set('x-organization-slug', organizationSlug)
  headers.set('x-organization-context', 'tenant')
  headers.set('x-custom-domain', hostname)
  
  // API 요청은 그대로 통과
  if (pathname.startsWith('/api')) {
    return NextResponse.next({ headers })
  }
  
  // 관리자 경로는 조직별 관리자로 리다이렉트
  if (pathname.startsWith('/admin')) {
    const newUrl = request.nextUrl.clone()
    newUrl.pathname = `/tenant/${organizationSlug}/admin${pathname.substring(6)}`
    return NextResponse.rewrite(newUrl, { headers })
  }
  
  // 일반 페이지는 조직별 사이트로 라우팅
  const newUrl = request.nextUrl.clone()
  newUrl.pathname = `/tenant/${organizationSlug}${pathname}`
  
  return NextResponse.rewrite(newUrl, { headers })
}

/**
 * 호스트명에서 조직 슬러그 추출
 */
function extractOrganizationSlug(hostname: string): string | null {
  // 서브도메인 형태: mauritania-embassy.embassy-builder.com
  if (hostname.includes(MAIN_DOMAIN)) {
    return hostname.replace(`.${MAIN_DOMAIN}`, '')
  }
  
  // 커스텀 도메인의 경우 null 반환 (별도 처리 필요)
  return null
}

/**
 * 언어 감지 및 리다이렉트
 */
function detectLanguageRedirect(request: NextRequest, supportedLocales: string[] = ['ko', 'en', 'fr']) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = supportedLocales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    // 브라우저 언어 감지
    const locale = getLocaleFromHeaders(request.headers) || 'ko'
    
    const newUrl = request.nextUrl.clone()
    newUrl.pathname = `/${locale}${pathname}`
    
    return NextResponse.redirect(newUrl)
  }
}

/**
 * 헤더에서 선호 언어 추출
 */
function getLocaleFromHeaders(headers: Headers): string | null {
  const acceptLanguage = headers.get('accept-language')
  if (!acceptLanguage) return null
  
  // 간단한 언어 감지 로직
  if (acceptLanguage.includes('ko')) return 'ko'
  if (acceptLanguage.includes('fr')) return 'fr'
  if (acceptLanguage.includes('en')) return 'en'
  
  return null
}

// 미들웨어가 실행될 경로 설정
export const config = {
  matcher: [
    /*
     * 다음 경로들은 제외:
     * - api routes (except admin api)
     * - _next/static (static files)
     * - _next/image (image optimization files)  
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api(?!/admin)).*)',
  ],
}