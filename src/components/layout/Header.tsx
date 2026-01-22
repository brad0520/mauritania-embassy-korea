'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import { useSimpleAdminAuth } from '@/contexts/SimpleAdminAuth'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  GlobeAltIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'
import type { Organization } from '@/types'

interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
  external?: boolean
}

interface HeaderProps {
  organization?: Organization
  className?: string
}

export default function Header({ organization, className }: HeaderProps) {
  const { t, locale, isRTL } = useI18n()
  const { currentTheme } = useTheme()
  const { isAuthenticated } = useSimpleAdminAuth()

  // 메뉴 구조 (모리타니아 대사관 요청 - 5개 메인 메뉴, Actualités 대메뉴 2번째)
  const navItems: NavigationItem[] = [
    {
      label: t('nav.embassy'),
      href: '/embassy',
      children: [
        { label: t('nav.embassy.ambassador'), href: '/embassy/ambassador' },
        { label: t('nav.embassy.contact'), href: '/embassy/contact' }
      ]
    },
    {
      label: t('nav.news'),
      href: '/news'
    },
    {
      label: t('nav.consular'),
      href: '/consular',
      children: [
        { label: t('nav.consular.visa'), href: '/consular/visa' },
        { label: t('nav.consular.passport'), href: '/consular/passport' },
        { label: t('nav.consular.certificates'), href: '/consular/certificates' },
        { label: t('nav.consular.services'), href: '/consular/services' }
      ]
    },
    {
      label: t('nav.relations'),
      href: '/relations/bilateral'
    },
    {
      label: t('nav.mauritania'),
      href: '/mauritania',
      children: [
        { label: t('nav.mauritania.about'), href: '/mauritania/about' },
        { label: t('nav.mauritania.links'), href: '/mauritania/links' }
      ]
    }
  ]

  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleMobileSubmenu = (href: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === href ? null : href)
  }

  return (
    <>
      {/* ==================== 1. Utility Bar (상단 유틸 바) ==================== */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "flex items-center justify-between h-10 text-sm",
            isRTL && "flex-row-reverse"
          )}>
            {/* 좌측: 외부 링크들 */}
            <div className={cn(
              "flex items-center gap-4",
              isRTL && "flex-row-reverse"
            )}>
              <a
                href="https://www.mofa.go.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <GlobeAltIcon className="h-4 w-4" />
                <span className="hidden sm:inline">MOFA</span>
              </a>
              <a
                href="https://www.president.go.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span className="hidden sm:inline">{t('header.presidentialOffice')}</span>
              </a>
            </div>

            {/* 우측: SNS + 언어선택 */}
            <div className={cn(
              "flex items-center gap-3",
              isRTL && "flex-row-reverse"
            )}>
              {/* SNS 링크들 */}
              <div className={cn(
                "hidden sm:flex items-center gap-2 pr-3 border-r border-gray-300",
                isRTL && "flex-row-reverse pr-0 pl-3 border-r-0 border-l"
              )}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-sky-500 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>

              {/* 관리자 버튼 (로그인 시에만 표시) */}
              {isAuthenticated && (
                <Link
                  href="/admin/news"
                  className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-white bg-theme-header hover:bg-theme-header-hover rounded transition-colors"
                >
                  <Cog6ToothIcon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Admin</span>
                </Link>
              )}

              {/* 언어 선택 */}
              <LanguageSwitcher variant="compact" />
            </div>
          </div>
        </div>
      </div>

      {/* ==================== 2. Logo Section (로고 영역) ==================== */}
      <div className="bg-white border-b border-gray-200 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "flex items-center gap-4 sm:gap-6",
            isRTL && "flex-row-reverse"
          )}>
            {/* 국기들 */}
            <div className={cn(
              "flex items-center gap-2",
              isRTL && "flex-row-reverse"
            )}>
              {/* 모리타니아 국기 */}
              <div className="w-12 h-8 sm:w-16 sm:h-11 rounded shadow-sm overflow-hidden border border-gray-200 flex items-center justify-center bg-gray-50">
                <span className="text-2xl sm:text-3xl">{currentTheme.flags.country}</span>
              </div>
              {/* 대한민국 국기 */}
              <div className="w-12 h-8 sm:w-16 sm:h-11 rounded shadow-sm overflow-hidden border border-gray-200 flex items-center justify-center bg-gray-50">
                <span className="text-2xl sm:text-3xl">{currentTheme.flags.korea}</span>
              </div>
            </div>

            {/* 대사관 명칭 */}
            <Link href="/" className="hover:opacity-80 transition-opacity flex-1">
              <h1
                className={cn(
                  "text-xl sm:text-2xl lg:text-3xl font-bold",
                  isRTL && "text-right"
                )}
                style={{ color: currentTheme.colors.primary }}
              >
                {t('header.embassyTitle').replace('{country}', currentTheme.name[locale])}
              </h1>
              <p className={cn(
                "text-gray-600 text-sm sm:text-base mt-0.5",
                isRTL && "text-right"
              )}>
                {t('header.embassySubtitle').replace('{country}', currentTheme.name.en)}
              </p>
            </Link>

            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ==================== 3. Navigation Bar (네비게이션) ==================== */}
      <nav
        className="sticky top-0 z-40 shadow-md"
        style={{ backgroundColor: currentTheme.colors.primary }}
        ref={dropdownRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 데스크톱 메뉴 */}
          <div className={cn(
            "hidden lg:flex",
            isRTL && "flex-row-reverse"
          )}>
            {/* 홈 버튼 */}
            <Link
              href="/"
              className="flex items-center px-6 py-4 text-white hover:bg-white/15 transition-colors border-r border-white/20"
              style={isRTL ? { borderRight: 'none', borderLeft: '1px solid rgba(255,255,255,0.2)' } : {}}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>

            {navItems.map((item, index) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-6 py-4 text-white hover:bg-white/15 transition-colors border-r border-white/20",
                    openDropdown === item.href && "bg-white/15",
                    index === navItems.length - 1 && "border-r-0"
                  )}
                  style={isRTL ? {
                    borderRight: index === navItems.length - 1 ? 'none' : '1px solid rgba(255,255,255,0.2)',
                    flexDirection: 'row-reverse'
                  } : {}}
                >
                  <span>{item.label}</span>
                  {item.children && (
                    <ChevronDownIcon className={cn(
                      "h-4 w-4 transition-transform",
                      openDropdown === item.href && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* 드롭다운 메뉴 */}
                {item.children && openDropdown === item.href && (
                  <div
                    className={cn(
                      "absolute top-full min-w-[220px] shadow-xl z-50 border border-white/20",
                      isRTL ? "right-0" : "left-0"
                    )}
                    style={{ backgroundColor: currentTheme.colors.primary }}
                  >
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block px-6 py-3 text-white hover:bg-white/15 transition-colors border-b border-white/10",
                          childIndex === item.children!.length - 1 && "border-b-0",
                          isRTL && "text-right"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 모바일 메뉴 */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-2 border-t border-white/20">
              {/* 홈 링크 */}
              <Link
                href="/"
                className={cn(
                  "flex items-center gap-2 px-4 py-3 text-white hover:bg-white/15 transition-colors",
                  isRTL && "flex-row-reverse text-right"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>{t('nav.home')}</span>
              </Link>

              {navItems.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(item.href)}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 text-white hover:bg-white/15 transition-colors",
                          isRTL && "flex-row-reverse"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronDownIcon
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            mobileSubmenuOpen === item.href && "rotate-180"
                          )}
                        />
                      </button>

                      {/* 모바일 서브메뉴 */}
                      {mobileSubmenuOpen === item.href && (
                        <div className={cn(
                          "bg-white/10",
                          isRTL ? "mr-4 border-r-2 border-white/30" : "ml-4 border-l-2 border-white/30"
                        )}>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 transition-colors text-sm",
                                isRTL && "text-right"
                              )}
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setMobileSubmenuOpen(null)
                              }}
                            >
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
                        "block px-4 py-3 text-white hover:bg-white/15 transition-colors",
                        isRTL && "text-right"
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
    </>
  )
}
