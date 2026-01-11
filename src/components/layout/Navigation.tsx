'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

interface NavigationProps {
  className?: string
}

export default function Navigation({ className }: NavigationProps) {
  const { t } = useI18n()
  const { currentTheme } = useTheme()
  
  // 네비게이션 (세네갈 대사관 참조 - 4개 메인 메뉴)
  const navItems: NavigationItem[] = [
    {
      label: t('nav.home'),
      href: '/'
    },
    {
      label: t('nav.embassy'),
      href: '/embassy',
      children: [
        { label: t('nav.embassy.ambassador'), href: '/embassy/ambassador' },
        { label: t('nav.embassy.news'), href: '/embassy/news' },
        { label: t('nav.embassy.contact'), href: '/embassy/contact' }
      ]
    },
    {
      label: t('nav.consular'),
      href: '/consular',
      children: [
        { label: t('nav.consular.visa'), href: '/consular/visa' },
        { label: t('nav.consular.announcements'), href: '/consular/announcements' }
      ]
    },
    {
      label: t('nav.relations'),
      href: '/relations',
      children: [
        { label: t('nav.relations.bilateral'), href: '/relations/bilateral' }
      ]
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

  const toggleMobileSubmenu = (href: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === href ? null : href)
  }

  return (
    <nav 
      className={cn('sticky top-0 z-40 shadow-sm backdrop-blur-sm', className)} 
      style={{ 
        background: `linear-gradient(135deg, ${currentTheme.colors.primary}dd 0%, ${currentTheme.colors.secondary}dd 100%)` 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* 데스크톱 메뉴 */}
          <div className="hidden lg:flex space-x-0">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center px-6 py-4 text-white hover:bg-white/10 transition-colors border-r border-white/10 last:border-r-0',
                    openDropdown === item.href && 'bg-white/10'
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  )}
                </Link>

                {/* 드롭다운 메뉴 */}
                {item.children && openDropdown === item.href && (
                  <div 
                    className="absolute top-full left-0 min-w-[200px] shadow-xl z-50 border border-white/10"
                    style={{ 
                      background: `linear-gradient(135deg, ${currentTheme.colors.primary}ee 0%, ${currentTheme.colors.secondary}ee 100%)` 
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-6 py-3 text-white hover:bg-white/10 border-b border-white/10 last:border-b-0 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center px-3 py-2 text-white hover:bg-white/10 rounded transition-colors"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10">
            <div className="py-2 space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.children ? (
                    /* 하위메뉴가 있는 경우 */
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(item.href)}
                        className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronDownIcon 
                          className={cn(
                            'h-4 w-4 transition-transform duration-200',
                            mobileSubmenuOpen === item.href && 'rotate-180'
                          )}
                        />
                      </button>
                      
                      {/* 하위메뉴 (아코디언) */}
                      {mobileSubmenuOpen === item.href && (
                        <div className="pl-4 space-y-1 border-l-2 border-white/20 ml-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors text-sm"
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
                    /* 하위메뉴가 없는 경우 */
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white hover:bg-white/10 transition-colors"
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setMobileSubmenuOpen(null)
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}