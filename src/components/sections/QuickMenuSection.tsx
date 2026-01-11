'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'

interface QuickMenuItem {
  icon: string
  label: { ko: string; en: string; fr: string; ar: string }
  href: string
}

const quickMenuItems: QuickMenuItem[] = [
  {
    icon: '🏛️',
    label: {
      ko: '대사관 소개',
      en: 'About Embassy',
      fr: "Présentation de l'Ambassade",
      ar: 'عن السفارة'
    },
    href: '/embassy/ambassador'
  },
  {
    icon: '📋',
    label: {
      ko: '영사 서비스',
      en: 'Consular Services',
      fr: 'Services Consulaires',
      ar: 'الخدمات القنصلية'
    },
    href: '/consular/visa'
  },
  {
    icon: '📰',
    label: {
      ko: '대사관 소식',
      en: 'Embassy News',
      fr: 'Actualités',
      ar: 'أخبار السفارة'
    },
    href: '/embassy/activities'
  },
  {
    icon: '🇲🇷',
    label: {
      ko: '모리타니아 소개',
      en: 'About Mauritania',
      fr: 'Sur la Mauritanie',
      ar: 'عن موريتانيا'
    },
    href: '/mauritania'
  }
]

interface QuickMenuSectionProps {
  className?: string
}

export default function QuickMenuSection({ className }: QuickMenuSectionProps) {
  const { locale, isRTL, direction } = useI18n()

  return (
    <section
      className={cn('bg-white py-10 border-b border-gray-200', className)}
      dir={direction}
    >
      <div className="max-w-[1280px] mx-auto px-4">
        {/* 빠른 메뉴 그리드 - 세네갈 스타일 */}
        <div className={cn(
          'flex justify-center gap-8 md:gap-16',
          isRTL && 'flex-row-reverse'
        )}>
          {quickMenuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group flex flex-col items-center text-center transition-all"
            >
              {/* 아이콘 원형 배경 */}
              <div className="w-[90px] h-[90px] rounded-[30px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.08)] flex items-center justify-center mb-4 group-hover:shadow-[0_0_15px_0_rgba(0,0,0,0.15)] transition-shadow">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
              </div>
              {/* 라벨 */}
              <span className={cn(
                'text-[15px] text-gray-800 group-hover:text-[#1d65af] group-hover:underline transition-colors min-h-[44px] flex items-center',
                isRTL && 'font-arabic'
              )}>
                {item.label[locale as keyof typeof item.label] || item.label.ko}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
