'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import { getAmbassadorMessage, getDummyAmbassadorMessage } from '@/services/contentService'

interface AmbassadorMessageProps {
  className?: string
  ambassador?: {
    name: string
    title: string
    message: string[]
    photo?: string
  }
}

export default function AmbassadorMessage({ 
  className, 
  ambassador 
}: AmbassadorMessageProps) {
  const { t, locale } = useI18n()
  const { currentTheme } = useTheme()
  const [ambassadorData, setAmbassadorData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // Supabase에서 대사 인사말 가져오기
  useEffect(() => {
    async function fetchAmbassadorMessage() {
      try {
        setLoading(true)
        
        // 더미 조직 ID (테스트용)
        const organizationId = 'dummy-org-id'
        
        // Supabase에서 대사 인사말 가져오기 시도
        const data = await getAmbassadorMessage(organizationId)
        setAmbassadorData(data)
      } catch (error) {
        console.warn('대사 인사말 로드 실패, 더미 데이터 사용:', error)
        // 실패 시 더미 데이터 사용
        setAmbassadorData(getDummyAmbassadorMessage())
      } finally {
        setLoading(false)
      }
    }

    fetchAmbassadorMessage()
  }, [currentTheme.id])

  // 기본 대사 정보 (다국어 번역 키 사용 - fallback)
  const fallbackMessages = [
    t('ambassador.greeting'),
    t('ambassador.message1'),
    t('ambassador.message2'), 
    t('ambassador.message3'),
    t('ambassador.thanks')
  ]

  const fallbackAmbassador = {
    name: t('ambassador.name'),
    title: t('ambassador.position'),
    message: fallbackMessages,
    photo: '/images/ambassador-placeholder.jpg'
  }

  // 현재 사용할 대사 데이터 결정
  let currentAmbassador: any
  
  if (ambassador) {
    currentAmbassador = ambassador
  } else if (ambassadorData && ambassadorData[locale]) {
    const localeData = ambassadorData[locale]
    currentAmbassador = {
      name: localeData.name,
      title: localeData.title,
      message: localeData.message.split('\n\n'),
      photo: '/images/ambassador-placeholder.jpg'
    }
  } else {
    currentAmbassador = fallbackAmbassador
  }

  if (loading) {
    return (
      <section 
        className={cn(
          'p-8 rounded-lg border mb-8',
          'shadow-[0_2px_10px_rgba(0,0,0,0.1)]',
          className
        )}
        style={{
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          border: '1px solid #dee2e6'
        }}
      >
        <h2 
          className="text-2xl font-bold mb-4 pb-2"
          style={{ 
            color: currentTheme.colors.primary,
            borderBottom: `2px solid ${currentTheme.colors.secondary}`
          }}
        >
          {t('ambassador.title')}
        </h2>
        <div className="animate-pulse">
          <div className="bg-gray-300 rounded w-32 h-40 float-left mr-6 mb-4"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5"></div>
          </div>
          <div className="clear-both"></div>
        </div>
      </section>
    )
  }

  return (
    <section 
      className={cn(
        'p-8 rounded-lg border mb-8',
        'shadow-[0_2px_10px_rgba(0,0,0,0.1)]',
        className
      )}
      style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        border: '1px solid #dee2e6'
      }}
    >
      {/* 섹션 제목 */}
      <h2 
        className="text-2xl font-bold mb-4 pb-2"
        style={{ 
          color: currentTheme.colors.primary,
          borderBottom: `2px solid ${currentTheme.colors.secondary}`
        }}
      >
        {t('ambassador.title')}
      </h2>

      {/* 원본과 동일한 레이아웃: float left 사진 + 텍스트 */}
      <div>
        {/* 대사 사진 - float left */}
        <div 
          className="bg-gray-300 rounded flex items-center justify-center text-gray-600 text-sm mb-4 float-left"
          style={{
            width: '120px',
            height: '150px',
            margin: '0 1.5rem 1rem 0'
          }}
        >
          {currentAmbassador.photo ? (
            <img 
              src={currentAmbassador.photo}
              alt="대사 사진"
              className="w-full h-full object-cover rounded"
            />
          ) : (
            '대사 사진'
          )}
        </div>

        {/* 인사말 내용 */}
        <div className="space-y-4">
          {currentAmbassador.message.map((paragraph: string, index: number) => {
            // 첫 번째 문단은 강조
            if (index === 0) {
              return (
                <p key={index} className="text-gray-800">
                  <strong>{paragraph}</strong>
                </p>
              )
            }
            return (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            )
          })}
          
          {/* 대사 서명 */}
          <div className="mt-4 text-right">
            <p className="font-bold text-gray-800">
              <strong>{currentAmbassador.name} {currentAmbassador.title}</strong>
            </p>
          </div>
        </div>
        
        {/* Clear float */}
        <div className="clear-both"></div>
      </div>
    </section>
  )
}