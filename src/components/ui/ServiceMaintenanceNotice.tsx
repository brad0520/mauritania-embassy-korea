'use client'

import { useI18n } from '@/i18n/context'

interface ServiceMaintenanceNoticeProps {
  variant: 'inline' | 'section'
}

const messages: Record<string, { title: string; description: string }> = {
  ko: {
    title: '서비스 점검 중',
    description: '현재 데이터베이스 점검 중입니다. 잠시 후 다시 확인해 주세요.'
  },
  en: {
    title: 'Service Maintenance',
    description: 'The database is currently under maintenance. Please check back shortly.'
  },
  fr: {
    title: 'Service en maintenance',
    description: 'La base de données est en cours de maintenance. Veuillez réessayer plus tard.'
  },
  ar: {
    title: 'الخدمة قيد الصيانة',
    description: 'قاعدة البيانات قيد الصيانة حالياً. يرجى المحاولة مرة أخرى لاحقاً.'
  }
}

export default function ServiceMaintenanceNotice({ variant }: ServiceMaintenanceNoticeProps) {
  const { locale } = useI18n()
  const msg = messages[locale] || messages.ko

  if (variant === 'section') {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
        <svg className="mx-auto h-10 w-10 text-amber-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
        <h3 className="text-lg font-semibold text-amber-800 mb-1">{msg.title}</h3>
        <p className="text-sm text-amber-700">{msg.description}</p>
      </div>
    )
  }

  // inline variant
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 flex items-start gap-3">
      <svg className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
      <div>
        <p className="text-sm font-medium text-amber-800">{msg.title}</p>
        <p className="text-sm text-amber-700 mt-0.5">{msg.description}</p>
      </div>
    </div>
  )
}
