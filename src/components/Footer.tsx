'use client'

import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import type { FooterLayoutType } from '@/config/themes'

// 레이아웃 컴포넌트 imports
import Footer4Column from '@/components/layouts/footer/Footer4Column'
// 향후 추가될 레이아웃들:
// import Footer2Column from '@/components/layouts/footer/Footer2Column'
// import FooterMinimal from '@/components/layouts/footer/FooterMinimal'

interface FooterProps {
  className?: string
}

// 레이아웃 타입별 컴포넌트 매핑
const footerLayouts: Record<FooterLayoutType, React.ComponentType<{ className?: string }>> = {
  '4-column': Footer4Column,
  '2-column': Footer4Column,  // TODO: Footer2Column 구현 후 교체
  'minimal': Footer4Column,   // TODO: FooterMinimal 구현 후 교체
}

/**
 * Footer - 레이아웃 스위처
 *
 * themes.ts의 layout.footer 설정에 따라 적절한 레이아웃 컴포넌트를 렌더링합니다.
 *
 * 사용 가능한 레이아웃:
 * - '4-column': 대사관명+연락처+업무시간+SNS 4열 (현재 기본값)
 * - '2-column': 좌측 정보+우측 링크 2열 (TODO)
 * - 'minimal': 저작권만 표시 미니멀 (TODO)
 */
export default function Footer({ className }: FooterProps) {
  const { layout } = useTheme()

  // 설정된 레이아웃에 맞는 컴포넌트 선택
  const LayoutComponent = footerLayouts[layout.footer] || Footer4Column

  return <LayoutComponent className={className} />
}
