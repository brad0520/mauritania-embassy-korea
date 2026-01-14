'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import { ChevronDownIcon, Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { useSimpleAdminAuth } from '@/contexts/SimpleAdminAuth'

interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

interface HeaderProps {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  const { t, locale, isRTL, direction } = useI18n()
  const { currentTheme } = useTheme()
  const { isAuthenticated } = useSimpleAdminAuth()

  // 네비게이션 구조 (6개 메뉴 - 프랑스어는 Corée 메뉴 추가)
  const navItems: NavigationItem[] = [
    {
      label: locale === 'ko' ? '대사관' :
             locale === 'en' ? "Embassy" :
             locale === 'fr' ? "Ambassade" :
             'السفارة',
      href: '/embassy',
      children: [
        { label: locale === 'ko' ? '대사 인사말' : locale === 'en' ? "Ambassador's Message" : locale === 'fr' ? "Mot de l'ambassadeur" : 'كلمة السفير', href: '/embassy/ambassador' },
        { label: locale === 'ko' ? '연락처' : locale === 'en' ? 'Contact Us' : locale === 'fr' ? 'Nous contacter' : 'اتصل بنا', href: '/embassy/contact' }
      ]
    },
    {
      label: locale === 'ko' ? '공관활동' :
             locale === 'en' ? 'Embassy Activities' :
             locale === 'fr' ? 'Actualités' :
             'أنشطة السفارة',
      href: '/embassy/activities'
    },
    {
      label: locale === 'ko' ? '영사업무' :
             locale === 'en' ? 'Consular Services' :
             locale === 'fr' ? 'Services Consulaires' :
             'الخدمات القنصلية',
      href: '/consular',
      children: [
        { label: locale === 'ko' ? '비자' : locale === 'en' ? 'Visa' : locale === 'fr' ? 'Visa' : 'التأشيرة', href: '/consular/visa' },
        { label: locale === 'ko' ? '여권' : locale === 'en' ? 'Passport' : locale === 'fr' ? 'Passeport' : 'جواز السفر', href: '/consular/passport' },
        { label: locale === 'ko' ? '혼인증명서' : locale === 'en' ? 'Marriage Certificate' : locale === 'fr' ? 'Acte de mariage' : 'شهادة الزواج', href: '/consular/marriage' },
        { label: locale === 'ko' ? '한국 유학' : locale === 'en' ? 'Study in Korea' : locale === 'fr' ? 'Étudier en Corée' : 'الدراسة في كوريا', href: '/consular/study-korea' }
      ]
    },
    {
      label: locale === 'ko' ? '양국 관계' :
             locale === 'en' ? 'Bilateral Relations' :
             locale === 'fr' ? 'Relations Bilatérales' :
             'العلاقات الثنائية',
      href: '/relations',
      children: [
        { label: locale === 'ko' ? '양국 관계' : locale === 'en' ? 'Bilateral Relations' : locale === 'fr' ? 'Relations bilatérales' : 'العلاقات الثنائية', href: '/relations/bilateral' }
      ]
    },
    {
      label: locale === 'ko' ? '모리타니아 소개' :
             locale === 'en' ? 'About Mauritania' :
             locale === 'fr' ? 'Mauritanie' :
             'عن موريتانيا',
      href: '/mauritania',
      children: [
        { label: locale === 'ko' ? '지정학' : locale === 'en' ? 'Geopolitics' : locale === 'fr' ? 'Géopolitique' : 'الجيوسياسة', href: '/mauritania/geography' },
        { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/mauritania/history' },
        { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/mauritania/economy' },
        { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/mauritania/culture' },
        { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/mauritania/institutions' }
      ]
    },
    // 한국 소개 메뉴 (프랑스어: Corée) - 마지막 위치
    {
      label: locale === 'ko' ? '한국 소개' :
             locale === 'en' ? 'About Korea' :
             locale === 'fr' ? 'Corée' :
             'عن كوريا',
      href: '/korea',
      children: [
        { label: locale === 'ko' ? '지정학' : locale === 'en' ? 'Geopolitics' : locale === 'fr' ? 'Géopolitique' : 'الجيوسياسة', href: '/korea/geography' },
        { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/korea/history' },
        { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/korea/economy' },
        { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/korea/culture' },
        { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/korea/institutions' }
      ]
    }
  ]

  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  // 스크롤 감지하여 헤더 고정
  useEffect(() => {
    const handleScroll = () => {
      // 유틸리티 바(44px) + 로고 영역(약 80px) 이후 스크롤 시 고정
      setIsScrolled(window.scrollY > 120)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileSubmenu = (href: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === href ? null : href)
  }

  return (
    <header className={cn('relative z-50', className)} dir={direction}>
      {/* ========== 상단 유틸리티 바 (.util) ========== */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className={cn(
            'flex items-center justify-between h-[44px]',
            isRTL && 'flex-row-reverse'
          )}>
            {/* 좌측: 정부 기관 링크 (MOFA, Presidential Office 스타일) - 모바일에서 숨김 */}
            <ul className={cn('hidden sm:flex items-center', isRTL && 'flex-row-reverse')}>
              <li className="flex items-center">
                <a
                  href="https://www.diplomatie.gov.mr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 text-[13px] text-gray-600 hover:text-gray-900 whitespace-nowrap"
                >
                  <span>🌐</span>
                  <span>MAECME</span>
                </a>
              </li>
              <li className="flex items-center before:content-[''] before:w-px before:h-3 before:bg-gray-300">
                <a
                  href="https://presidence.mr/index.php/fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 text-[13px] text-gray-600 hover:text-gray-900 whitespace-nowrap"
                >
                  <svg className="w-4 h-3 rounded-sm" viewBox="0 0 3000 2000">
                    <path fill="#d01c1f" d="M0 0H3000V2000H0z"/>
                    <path fill="#00a95c" d="M0 400H3000V1600H0z"/>
                    <path fill="#ffd700" d="M1299 744h153l48-144 48 144h153l-126 92 51 146-126-90-126 90 51-146zM750 670a 760.092776 628 0 0 0 1500 0 750 730 0 0 1-1500 0z"/>
                  </svg>
                  <span>{locale === 'ko' ? '대통령실' : locale === 'en' ? 'Presidential Office' : locale === 'fr' ? 'Présidence' : 'الرئاسة'}</span>
                </a>
              </li>
            </ul>

            {/* 우측: SNS 드롭다운 + 언어 선택 (MOFA 스타일) */}
            <ol className={cn('flex items-center', isRTL && 'flex-row-reverse')}>
              {/* SNS 드롭다운 - MOFA 스타일 */}
              <li className="relative group flex items-center">
                <button className="flex items-center gap-2 px-4 h-[44px] text-[13px] text-gray-600 hover:text-gray-900">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span className="hidden sm:inline">
                    {locale === 'ko' ? '대사관 SNS' : locale === 'en' ? 'Embassy SNS' : locale === 'fr' ? "Réseaux sociaux" : 'وسائل التواصل'}
                  </span>
                  <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="hidden group-hover:block absolute left-0 sm:left-auto sm:right-0 top-full bg-white shadow-lg border border-gray-200 min-w-[150px] py-1 z-50">
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <svg className="w-4 h-4 text-[#1877f2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* 언어 선택 - MOFA 스타일 드롭다운 */}
              <li className="flex items-center h-[44px] before:content-[''] before:w-px before:h-3 before:bg-gray-300">
                <LanguageSwitcher variant="mofa" />
              </li>
              {/* 관리자 버튼은 네비게이션 바에만 표시 (중복 방지) */}
            </ol>
          </div>
        </div>
      </div>

      {/* ========== 로고 영역 (.logo_wrap) - MOFA 스타일 ========== */}
      <div className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4">
          <h1 className="flex items-center justify-center gap-4">
            {/* 국장 - 모리타니아 공식 국장 (Seal of Mauritania) */}
            <div className="w-14 h-14 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/mauritania-seal.svg"
                alt="Seal of Mauritania"
                className="w-full h-full object-contain"
              />
            </div>
            <Link href="/" className="inline-block">
              <span className={cn(
                'text-theme-nav text-xl md:text-2xl font-bold tracking-wide',
                isRTL && 'font-arabic'
              )}>
                {locale === 'ko' ? '주한 모리타니아 이슬람 공화국 대사관' :
                 locale === 'en' ? 'Embassy of the Islamic Republic of Mauritania in Korea' :
                 locale === 'fr' ? "Ambassade de la République Islamique de Mauritanie en Corée" :
                 'سفارة الجمهورية الإسلامية الموريتانية في كوريا'}
              </span>
            </Link>
          </h1>
        </div>
      </div>

      {/* ========== 메인 네비게이션 (#gnb) - 세네갈 대사관 스타일 ========== */}
      {/* 스크롤 시 고정 네비게이션을 위한 placeholder */}
      {isScrolled && <div className="h-[68px] lg:block hidden" />}
      {isScrolled && <div className="h-[52px] lg:hidden block" />}

      <nav className={cn(
        'bg-white relative transition-shadow duration-300',
        isScrolled && 'fixed top-0 left-0 right-0 z-50 shadow-lg'
      )}>
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center justify-between">
            {/* 스크롤 시 미니 로고 (데스크톱) */}
            {isScrolled && (
              <Link
                href="/"
                className="hidden lg:flex items-center gap-2 px-4 flex-shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mauritania-seal.svg"
                  alt="Seal"
                  className="w-10 h-10"
                />
                <span className={cn(
                  'text-theme-nav text-sm font-bold whitespace-nowrap',
                  isRTL && 'font-arabic'
                )}>
                  {locale === 'ko' ? '주한 모리타니아 대사관' :
                   locale === 'en' ? 'Embassy of Mauritania' :
                   locale === 'fr' ? "Ambassade de Mauritanie" :
                   'سفارة موريتانيا'}
                </span>
              </Link>
            )}

            {/* 데스크톱 메뉴 - 5개 항목 (RTL은 dir="rtl"로 자동 처리) */}
            <ul className={cn(
              'hidden lg:flex flex-1'
            )}>
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className="relative flex-1 border-r border-transparent group"
                  style={{ width: '20%' }}
                  onMouseEnter={() => setOpenDropdown(item.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center justify-center h-[68px] text-[18px] font-semibold text-gray-900 transition-all',
                      'group-hover:bg-theme-nav group-hover:text-white group-hover:shadow-nav-border',
                      openDropdown === item.href && 'bg-theme-nav text-white shadow-nav-border',
                      isRTL && 'font-arabic'
                    )}
                  >
                    {item.label}
                  </Link>

                  {/* 드롭다운 서브메뉴 (.dep2) - 세네갈 스타일 */}
                  {item.children && openDropdown === item.href && (
                    <ul className={cn(
                      'absolute top-full left-0 w-full bg-[#f6f7fc] shadow-[0_1px_0_1px_#eee] z-50 py-5 px-5',
                      isRTL && 'right-0 left-auto text-right'
                    )}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={cn(
                              'flex items-center gap-2 py-1.5 text-[15px] text-black hover:text-[#1d65af] transition-colors',
                              isRTL && 'flex-row-reverse'
                            )}
                          >
                            <span className="w-[4px] h-[4px] bg-black rounded-full flex-shrink-0" />
                            <span>{child.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* 모바일: 관리자 + 햄버거 (햄버거가 가장 오른쪽) */}
            <div className="lg:hidden flex items-center bg-theme-nav w-full justify-end">
              {/* 관리자 버튼 - 햄버거 메뉴 왼쪽 */}
              {isAuthenticated && (
                <Link
                  href="/admin/news"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-white/20 hover:bg-white/30 rounded transition-colors"
                >
                  <UserCircleIcon className="h-4 w-4" />
                  <span>Admin</span>
                </Link>
              )}
              {/* 햄버거 메뉴 - 가장 오른쪽 */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center px-4 py-3 text-white"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* 모바일 메뉴 (사이트맵 스타일) */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <div key={item.href} className="border-b border-gray-200">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(item.href)}
                        className={cn(
                          'w-full flex items-center justify-between px-4 py-3 text-gray-900 font-medium bg-[#f1f3f8]',
                          mobileSubmenuOpen === item.href && 'bg-[#dbe1ee] text-[#393f6e] font-semibold',
                          isRTL && 'flex-row-reverse'
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDownIcon
                          className={cn(
                            'w-4 h-4 transition-transform text-gray-500',
                            mobileSubmenuOpen === item.href && 'rotate-180'
                          )}
                        />
                      </button>

                      {mobileSubmenuOpen === item.href && (
                        <div className="bg-white px-4 py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                'flex items-center gap-2 py-2 text-gray-600 text-sm hover:text-[#1d65af]',
                                isRTL && 'flex-row-reverse'
                              )}
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setMobileSubmenuOpen(null)
                              }}
                            >
                              <span className="w-1 h-1 bg-gray-400 rounded-full" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-4 py-3 text-gray-900 font-medium bg-[#f1f3f8]',
                        isRTL && 'text-right'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
