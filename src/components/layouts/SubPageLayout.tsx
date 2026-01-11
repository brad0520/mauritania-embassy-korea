'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'

interface MenuItem {
  label: string
  href: string
  children?: MenuItem[]
}

interface SubPageLayoutProps {
  children: React.ReactNode
  menuTitle: string
  menuItems: MenuItem[]
  currentPageTitle: string
  breadcrumbs?: { label: string; href?: string }[]
}

export default function SubPageLayout({
  children,
  menuTitle,
  menuItems,
  currentPageTitle,
  breadcrumbs = []
}: SubPageLayoutProps) {
  const { locale, isRTL, direction } = useI18n()
  const pathname = usePathname()

  // 현재 활성 메뉴 확인
  const isActiveMenu = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <div className="sub bg-white" dir={direction}>
      {/* ========== MOFA 스타일 서브페이지 레이아웃 ========== */}
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[800px]">
          {/* ===== 왼쪽 사이드바 (LNB) ===== */}
          <aside className={cn(
            'hidden lg:flex lg:flex-col w-[240px] flex-shrink-0 border-x border-gray-200',
            isRTL ? 'border-l-0' : 'border-r-0'
          )}>
            {/* 메뉴 타이틀 (배경 이미지 영역) */}
            <div
              className="h-[160px] flex items-center justify-center text-center px-4"
              style={{
                background: 'linear-gradient(135deg, var(--theme-nav) 0%, var(--theme-header) 100%)'
              }}
            >
              <span className={cn(
                'text-white text-2xl font-medium leading-tight',
                isRTL && 'font-arabic'
              )}>
                {menuTitle}
              </span>
            </div>

            {/* 사이드 메뉴 */}
            <nav className="flex-1 bg-white">
              <ul>
                {menuItems.map((item) => {
                  const isActive = isActiveMenu(item.href)
                  return (
                    <li key={item.href} className="border-b border-gray-200">
                      <Link
                        href={item.href}
                        className={cn(
                          'block py-4 px-5 text-[15px] transition-colors',
                          isActive
                            ? 'font-semibold text-theme-nav bg-gray-50 border-l-4 border-theme-nav'
                            : 'text-gray-700 hover:text-theme-nav hover:bg-gray-50',
                          isRTL && 'text-right border-l-0 border-r-4'
                        )}
                      >
                        {item.label}
                      </Link>

                      {/* 서브메뉴 */}
                      {item.children && isActive && (
                        <ul className="bg-gray-50 border-t border-gray-200 py-2">
                          {item.children.map((child) => {
                            const isChildActive = pathname === child.href
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className={cn(
                                    'flex items-center gap-2 py-2 px-6 text-[14px]',
                                    isChildActive
                                      ? 'text-theme-nav font-medium'
                                      : 'text-gray-500 hover:text-theme-nav',
                                    isRTL && 'flex-row-reverse'
                                  )}
                                >
                                  <span className={cn(
                                    'w-1.5 h-1.5 rounded-full',
                                    isChildActive ? 'bg-theme-nav' : 'bg-gray-400'
                                  )} />
                                  {child.label}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>
          </aside>

          {/* ===== 메인 컨텐츠 영역 ===== */}
          <main className="flex-1 min-w-0">
            {/* 페이지 타이틀 & 브레드크럼 헤더 */}
            <div className="h-[160px] flex flex-col justify-center px-6 lg:px-10 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <h1 className={cn(
                'text-[32px] font-bold text-[#1a1a1a] leading-tight mb-3',
                isRTL && 'text-right font-arabic'
              )}>
                {currentPageTitle}
              </h1>

              {/* 브레드크럼 */}
              <nav className="flex items-center text-[14px]" aria-label="Breadcrumb">
                <ol className={cn(
                  'flex items-center flex-wrap gap-1',
                  isRTL && 'flex-row-reverse'
                )}>
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-theme-nav transition-colors">
                      <HomeIcon className="w-4 h-4" />
                    </Link>
                  </li>
                  {breadcrumbs.map((crumb, index) => (
                    <li
                      key={index}
                      className={cn(
                        'flex items-center',
                        isRTL ? 'pr-1' : 'pl-1'
                      )}
                    >
                      <ChevronRightIcon className={cn(
                        'w-3 h-3 text-gray-300',
                        isRTL ? 'ml-1 rotate-180' : 'mr-1'
                      )} />
                      {crumb.href ? (
                        <Link href={crumb.href} className="text-gray-500 hover:text-theme-nav transition-colors">
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-theme-nav font-medium">{crumb.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* 본문 컨텐츠 */}
            <div className={cn(
              'px-6 lg:px-10 py-10',
              isRTL && 'text-right'
            )}>
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* ===== 모바일 메뉴 (lg 이하에서 표시) ===== */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="flex overflow-x-auto">
          {menuItems.map((item) => {
            const isActive = isActiveMenu(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex-1 min-w-0 py-3 px-2 text-center text-xs whitespace-nowrap',
                  isActive
                    ? 'text-theme-nav font-semibold border-t-2 border-theme-nav bg-gray-50'
                    : 'text-gray-600'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
