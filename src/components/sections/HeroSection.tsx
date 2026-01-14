'use client'

import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import type { HeroLayoutType } from '@/config/themes'

// 레이아웃 컴포넌트 imports
import HeroModern from '@/components/layouts/hero/HeroModern'
// 향후 추가될 레이아웃들:
// import HeroClassic from '@/components/layouts/hero/HeroClassic'
// import HeroMinimal from '@/components/layouts/hero/HeroMinimal'

interface HeroSectionProps {
  className?: string
}

// 레이아웃 타입별 컴포넌트 매핑
const heroLayouts: Record<HeroLayoutType, React.ComponentType<{ className?: string }>> = {
  modern: HeroModern,
  classic: HeroModern,  // TODO: HeroClassic 구현 후 교체
  minimal: HeroModern,  // TODO: HeroMinimal 구현 후 교체
}

/**
 * HeroSection - 레이아웃 스위처
 *
 * themes.ts의 layout.hero 설정에 따라 적절한 레이아웃 컴포넌트를 렌더링합니다.
 *
 * 사용 가능한 레이아웃:
 * - 'modern': 슬라이드+대통령+시계 2x2 그리드 (현재 기본값)
 * - 'classic': 전체 너비 슬라이드 (TODO)
 * - 'minimal': 텍스트 중심 미니멀 (TODO)
 */
export default function HeroSection({ className }: HeroSectionProps) {
  const { layout } = useTheme()

  // 설정된 레이아웃에 맞는 컴포넌트 선택
  const LayoutComponent = heroLayouts[layout.hero] || HeroModern

  return <LayoutComponent className={className} />
}
