'use client'

import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import type { HeaderLayoutType } from '@/config/themes'

// 레이아웃 컴포넌트 imports
import HeaderMofa from '@/components/layouts/header/HeaderMofa'
// 향후 추가될 레이아웃들:
// import HeaderCompact from '@/components/layouts/header/HeaderCompact'
// import HeaderCentered from '@/components/layouts/header/HeaderCentered'

interface HeaderProps {
  className?: string
}

// 레이아웃 타입별 컴포넌트 매핑
const headerLayouts: Record<HeaderLayoutType, React.ComponentType<{ className?: string }>> = {
  mofa: HeaderMofa,
  compact: HeaderMofa,    // TODO: HeaderCompact 구현 후 교체
  centered: HeaderMofa,   // TODO: HeaderCentered 구현 후 교체
}

/**
 * Header - 레이아웃 스위처
 *
 * themes.ts의 layout.header 설정에 따라 적절한 레이아웃 컴포넌트를 렌더링합니다.
 *
 * 사용 가능한 레이아웃:
 * - 'mofa': 유틸리티바+로고+네비 3단 구조 (현재 기본값)
 * - 'compact': 로고+네비 2단 구조 (TODO)
 * - 'centered': 중앙 정렬 로고+네비 (TODO)
 */
export default function Header({ className }: HeaderProps) {
  const { layout } = useTheme()

  // 설정된 레이아웃에 맞는 컴포넌트 선택
  const LayoutComponent = headerLayouts[layout.header] || HeaderMofa

  return <LayoutComponent className={className} />
}
