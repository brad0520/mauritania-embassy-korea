'use client'

import React from 'react'

interface TestEnCoursProps {
  pageName?: string
}

/**
 * TestEnCours - 임시 "테스트 진행 중" 메시지 컴포넌트
 *
 * 실제 데이터가 준비되기 전까지 페이지 콘텐츠 대신 표시됩니다.
 *
 * 사용법:
 * 1. 기존 콘텐츠를 {false && (...)} 로 감싸서 숨김
 * 2. <TestEnCours /> 컴포넌트 추가
 *
 * 실제 데이터 준비 후:
 * 1. {false && (...)} 제거하여 기존 콘텐츠 복원
 * 2. <TestEnCours /> 컴포넌트 제거
 */
export default function TestEnCours({ pageName }: TestEnCoursProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] py-16 px-4">
      <div className="text-center max-w-md">
        {/* 아이콘 */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-theme-primary/10">
            <svg
              className="w-10 h-10 text-theme-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </div>

        {/* 메시지 */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Test en cours
        </h2>
        <p className="text-gray-500 mb-2">
          Page en cours de préparation
        </p>
        <p className="text-sm text-gray-400">
          Cette page sera bientôt disponible avec le contenu officiel.
        </p>

        {pageName && (
          <p className="mt-4 text-xs text-gray-300">
            [{pageName}]
          </p>
        )}
      </div>
    </div>
  )
}
