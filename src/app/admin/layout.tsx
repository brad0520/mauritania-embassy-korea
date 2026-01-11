'use client'

import React from 'react'

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  // 루트 레이아웃(layout.tsx)에서 이미 Provider들이 감싸고 있으므로
  // 여기서는 단순히 children만 렌더링합니다.
  // 이렇게 하면 메인 사이트와 관리자 페이지가 같은 인증 세션을 공유합니다.
  return <>{children}</>
}
