'use client'

import React, { useState } from 'react'
import { ProtectedRoute } from '@/contexts/AuthContext'
import AdminSidebar from '@/components/admin/AdminSidebar'
import { useTheme } from '@/contexts/ThemeContext'
import { useI18n } from '@/i18n/context'

// 더미 페이지 컨텐츠 데이터
const dummyContent = [
  {
    id: '1',
    page_key: 'home',
    section: 'ambassador_message',
    title: '대사 인사말',
    description: '메인 페이지의 대사 인사말 섹션',
    last_updated: '2025.08.25',
    status: 'active'
  },
  {
    id: '2',
    page_key: 'about',
    section: 'history',
    title: '대사관 연혁',
    description: '대사관 소개 페이지의 연혁 섹션',
    last_updated: '2025.08.20',
    status: 'active'
  },
  {
    id: '3',
    page_key: 'services',
    section: 'visa_info',
    title: '비자 안내',
    description: '서비스 페이지의 비자 정보',
    last_updated: '2025.08.15',
    status: 'inactive'
  }
]

interface ContentEditorProps {
  contentId: string
  onSave: () => void
  onCancel: () => void
}

function ContentEditor({ contentId, onSave, onCancel }: ContentEditorProps) {
  const { locale } = useI18n()
  const [activeTab, setActiveTab] = useState('ko')
  
  const [content, setContent] = useState({
    ko: '친애하는 한국 국민 여러분,\n\n안녕하십니까. 한국 주재 모리타니아 이슬람공화국 특명전권대사입니다.\n\n저희 대사관은 양국 간의 가교 역할을 충실히 수행하며...',
    en: 'Dear Korean people,\n\nGreetings. I am the Ambassador Extraordinary and Plenipotentiary of the Islamic Republic of Mauritania to Korea.\n\nOur embassy faithfully serves as a bridge between the two countries...',
    fr: 'Chers citoyens coréens,\n\nSalutations. Je suis l\'Ambassadeur extraordinaire et plénipotentiaire de la République Islamique de Mauritanie en Corée.\n\nNotre ambassade sert fidèlement de pont entre les deux pays...'
  })

  const languages = [
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ]

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">컨텐츠 편집</h3>
        <p className="text-sm text-gray-500">다국어로 컨텐츠를 편집할 수 있습니다</p>
      </div>
      
      {/* 언어 탭 */}
      <div className="px-6 pt-4">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setActiveTab(lang.code)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === lang.code
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* 에디터 */}
      <div className="p-6">
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            {languages.find(l => l.code === activeTab)?.name} 컨텐츠
          </label>
          <textarea
            id="content"
            rows={12}
            value={content[activeTab as keyof typeof content]}
            onChange={(e) => setContent(prev => ({ ...prev, [activeTab]: e.target.value }))}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-mono"
            placeholder={`${languages.find(l => l.code === activeTab)?.name} 컨텐츠를 입력하세요...`}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            마지막 저장: 2025.08.25 14:30
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              취소
            </button>
            <button
              onClick={onSave}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ContentTableProps {
  content: typeof dummyContent
  onEdit: (id: string) => void
}

function ContentTable({ content, onEdit }: ContentTableProps) {
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: '활성', className: 'bg-green-100 text-green-800' },
      inactive: { label: '비활성', className: 'bg-gray-100 text-gray-800' }
    }
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
        {config.label}
      </span>
    )
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {content.map((item) => (
          <li key={item.id}>
            <div className="px-4 py-4 flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      {getStatusBadge(item.status)}
                      <span className="text-xs text-gray-500">
                        {item.page_key}.{item.section}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <span>최종 수정: {item.last_updated}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onEdit(item.id)}
                  className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                >
                  편집
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function AdminContentPage() {
  const { currentTheme } = useTheme()
  const { t } = useI18n()
  const [selectedContent, setSelectedContent] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const handleEdit = (id: string) => {
    setSelectedContent(id)
  }

  const handleSave = () => {
    console.log('컨텐츠 저장')
    setSelectedContent(null)
  }

  const handleCancel = () => {
    setSelectedContent(null)
  }

  // 필터링된 컨텐츠
  const filteredContent = dummyContent.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.page_key.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.section.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesSearch
  })

  return (
    <ProtectedRoute requiredRole="editor">
      <div className="flex h-screen bg-gray-100">
        <AdminSidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* 상단 헤더 */}
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">페이지 컨텐츠 관리</h1>
                  <p className="mt-1 text-sm text-gray-500">
                    웹사이트 페이지의 컨텐츠를 다국어로 관리합니다
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500">현재 테마:</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{currentTheme.flags.country}</span>
                    <span className="text-sm font-medium">{currentTheme.name.ko}</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* 메인 콘텐츠 */}
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              
              {selectedContent ? (
                // 컨텐츠 편집 모드
                <ContentEditor
                  contentId={selectedContent}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              ) : (
                // 컨텐츠 목록 모드
                <>
                  {/* 검색 및 필터 */}
                  <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                          검색
                        </label>
                        <input
                          type="text"
                          id="search"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="제목, 설명, 페이지, 섹션으로 검색..."
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                      
                      <div className="flex items-end">
                        <button
                          onClick={() => setSearchTerm('')}
                          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          초기화
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 통계 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">전체 컨텐츠</dt>
                              <dd className="text-lg font-medium text-gray-900">{dummyContent.length}</dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">활성화됨</dt>
                              <dd className="text-lg font-medium text-gray-900">
                                {dummyContent.filter(c => c.status === 'active').length}
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-gray-500 rounded-md flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            </div>
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-sm font-medium text-gray-500 truncate">다국어 지원</dt>
                              <dd className="text-lg font-medium text-gray-900">3개 언어</dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 컨텐츠 목록 */}
                  <div className="mb-4 flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-900">
                      컨텐츠 목록 ({filteredContent.length}개)
                    </h2>
                  </div>

                  {filteredContent.length > 0 ? (
                    <ContentTable 
                      content={filteredContent}
                      onEdit={handleEdit}
                    />
                  ) : (
                    <div className="bg-white shadow rounded-lg">
                      <div className="text-center py-12">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">컨텐츠가 없습니다</h3>
                        <p className="mt-1 text-sm text-gray-500">검색 조건을 변경해보세요.</p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}