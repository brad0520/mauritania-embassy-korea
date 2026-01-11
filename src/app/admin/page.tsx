'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSimpleAdminAuth } from '@/contexts/SimpleAdminAuth'

export default function AdminPage() {
  const router = useRouter()
  const { isAuthenticated, isLoading } = useSimpleAdminAuth()

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.replace('/admin/news')
      } else {
        router.replace('/admin/login')
      }
    }
  }, [isAuthenticated, isLoading, router])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-theme-header"></div>
    </div>
  )
}
