'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// 메인 메뉴 클릭 시 첫 번째 하위 메뉴로 리다이렉트
export default function ConsularPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/consular/visa')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin w-8 h-8 border-4 border-theme-nav border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-gray-500">리다이렉트 중...</p>
      </div>
    </div>
  )
}
