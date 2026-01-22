'use client'

import React, { useState } from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import TestEnCours from '@/components/TestEnCours'

// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경
const TEST_MODE = true
import { cn } from '@/lib/utils'

export default function EconomicRelationsPage() {
  const { locale } = useI18n()
  const [selectedSector, setSelectedSector] = useState('mining')

  const tradeData = [
    { year: '2019', exports: '15.2', imports: '8.7', total: '23.9' },
    { year: '2020', exports: '12.8', imports: '6.5', total: '19.3' },
    { year: '2021', exports: '18.4', imports: '9.2', total: '27.6' },
    { year: '2022', exports: '22.7', imports: '11.8', total: '34.5' },
    { year: '2023', exports: '28.3', imports: '14.2', total: '42.5' }
  ]

  const investmentSectors = [
    { id: 'mining', name: '광업 · 자원', icon: '⛏️', value: '$850M', growth: '+15.2%', projects: ['철광석 개발 프로젝트', '금광 탐사 및 개발', '구리 광산 현대화', '희토류 자원 개발'] },
    { id: 'energy', name: '에너지', icon: '⚡', value: '$420M', growth: '+28.7%', projects: ['태양광 발전소 건설', '풍력발전 단지 조성', '송전망 현대화', '에너지 저장 시설'] },
    { id: 'infrastructure', name: '인프라', icon: '🏗️', value: '$320M', growth: '+12.8%', projects: ['도로 건설 프로젝트', '항만 현대화', '공항 인프라 개선', '통신망 구축'] },
    { id: 'agriculture', name: '농업', icon: '🌾', value: '$180M', growth: '+9.4%', projects: ['관개시설 현대화', '농업기술 전수', '수산업 발전', '축산업 지원'] },
    { id: 'technology', name: '기술 · IT', icon: '💻', value: '$120M', growth: '+35.6%', projects: ['e-Government 구축', '디지털 교육 시스템', '스마트시티 개발', 'IT 인프라 구축'] },
    { id: 'manufacturing', name: '제조업', icon: '🏭', value: '$95M', growth: '+18.3%', projects: ['섬유공업 현대화', '식품가공업 지원', '건자재 생산', '기계부품 제조'] }
  ]

  const koreanCompanies = [
    { name: '스틸트레이드', sector: '광업', investment: '$350M', project: '철광석 개발 및 수출' },
    { name: '파워플러스', sector: '신재생에너지', investment: '$180M', project: '태양광 발전소 건설' },
    { name: 'SK건설', sector: '인프라', investment: '$120M', project: '도로 및 항만 건설' },
    { name: 'LG CNS', sector: 'IT', investment: '$85M', project: '전자정부 시스템 구축' }
  ]

  const relationsMenuItems = [
    { label: locale === 'ko' ? '외교관계' : locale === 'en' ? 'Diplomatic Relations' : locale === 'fr' ? 'Relations diplomatiques' : 'العلاقات الدبلوماسية', href: '/relations/diplomatic' },
    { label: locale === 'ko' ? '경제협력' : locale === 'en' ? 'Economic Cooperation' : locale === 'fr' ? 'Coopération économique' : 'التعاون الاقتصادي', href: '/relations/economic' },
    { label: locale === 'ko' ? '문화교류' : locale === 'en' ? 'Cultural Exchange' : locale === 'fr' ? 'Échanges culturels' : 'التبادل الثقافي', href: '/relations/cultural' }
  ]

  const menuTitle = locale === 'ko' ? '양국관계' : locale === 'en' ? 'Bilateral Relations' : locale === 'fr' ? 'Relations bilatérales' : 'العلاقات الثنائية'
  const pageTitle = locale === 'ko' ? '경제협력' : locale === 'en' ? 'Economic Cooperation' : locale === 'fr' ? 'Coopération économique' : 'التعاون الاقتصادي'

  return (
    <SubPageLayout menuTitle={menuTitle} menuItems={relationsMenuItems} currentPageTitle={pageTitle} breadcrumbs={[{ label: menuTitle, href: '/relations' }, { label: pageTitle }]}>
      {TEST_MODE ? <TestEnCours /> : <>
      {/* 경제협력 현황 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">경제협력 현황</h2>
        <div className="prose max-w-none mb-8 text-[15px]">
          <p className="text-gray-700 leading-relaxed mb-4">한국과 모리타니아의 경제협력은 1985년 경제기술협력협정 체결을 계기로 본격화되었으며, 광업·자원, 에너지, 인프라, IT 등 다양한 분야에서 상호 윈-윈하는 협력관계를 구축해 왔습니다.</p>
          <p className="text-gray-700 leading-relaxed">특히 최근에는 모리타니아의 풍부한 천연자원과 한국의 선진 기술을 결합한 지속가능한 개발 프로젝트들이 활발히 진행되고 있어, 양국 경제발전에 크게 기여하고 있습니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-theme-header/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">$42.5M</div>
            <div className="text-gray-600 text-sm">2023년 교역액</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-theme-nav/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">$1.2B</div>
            <div className="text-gray-600 text-sm">누적 투자액</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-theme-header/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">47개</div>
            <div className="text-gray-600 text-sm">진행 중인 프로젝트</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-theme-nav/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">2,850명</div>
            <div className="text-gray-600 text-sm">고용 창출</div>
          </div>
        </div>
      </section>

      {/* 양국 무역 현황 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">양국 무역 현황</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">연도별 교역 추이 (백만 달러)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-[15px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">연도</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">수출</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">수입</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">총교역</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tradeData.map((data) => (
                    <tr key={data.year}>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.year}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">${data.exports}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">${data.imports}</td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-theme-header">${data.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">주요 교역 품목</h3>
            <div className="space-y-4 text-[15px]">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">한국 → 모리타니아</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center"><span className="text-gray-700">기계류 및 장비</span><span className="font-medium">35%</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-700">전자제품</span><span className="font-medium">28%</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-700">자동차 부품</span><span className="font-medium">18%</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-700">화학제품</span><span className="font-medium">12%</span></div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">모리타니아 → 한국</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center"><span className="text-gray-700">철광석</span><span className="font-medium">52%</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-700">구리</span><span className="font-medium">23%</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-700">수산물</span><span className="font-medium">15%</span></div>
                  <div className="flex justify-between items-center"><span className="text-gray-700">농산물</span><span className="font-medium">10%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 투자 분야 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">주요 투자 분야</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {investmentSectors.map((sector) => (
            <button key={sector.id} onClick={() => setSelectedSector(sector.id)}
              className={cn('p-4 rounded-lg border-2 text-left transition-all hover:shadow-md', selectedSector === sector.id ? 'border-theme-header bg-theme-header/10' : 'border-gray-200 hover:border-gray-300')}>
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{sector.icon}</span>
                <h3 className="font-bold text-lg" style={{ color: selectedSector === sector.id ? 'var(--theme-header)' : '#374151' }}>{sector.name}</h3>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">투자규모:</span><span className="font-medium">{sector.value}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">성장률:</span><span className="font-medium text-green-600">{sector.growth}</span></div>
              </div>
            </button>
          ))}
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-theme-header">{investmentSectors.find(s => s.id === selectedSector)?.name} 분야 주요 프로젝트</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {investmentSectors.find(s => s.id === selectedSector)?.projects.map((project, index) => (
              <div key={index} className="flex items-center bg-white p-3 rounded-md">
                <span className="w-2 h-2 rounded-full mr-3 bg-theme-header"></span>
                <span className="text-gray-700 text-[15px]">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 한국 기업 진출 현황 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">한국 기업 진출 현황</h2>
        <div className="space-y-6">
          {koreanCompanies.map((company, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                  <span className="text-sm text-gray-500">{company.sector}</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-theme-header">{company.investment}</div>
                  <div className="text-sm text-gray-500">투자규모</div>
                </div>
              </div>
              <p className="text-gray-700 text-[15px]">{company.project}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 투자 환경 및 문의 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">투자 환경</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-gray-600">투자보장협정:</span><span className="font-medium text-green-600">✓ 체결</span></div>
            <div className="flex justify-between"><span className="text-gray-600">이중과세방지:</span><span className="font-medium text-green-600">✓ 체결</span></div>
            <div className="flex justify-between"><span className="text-gray-600">자유무역협정:</span><span className="font-medium text-yellow-600">○ 검토</span></div>
            <div className="flex justify-between"><span className="text-gray-600">투자위험보험:</span><span className="font-medium text-green-600">✓ 가능</span></div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">투자 상담 문의</h3>
          <div className="space-y-3 text-sm">
            <div><span className="text-gray-600 block">경제통상부:</span><span className="font-medium">02-793-4189</span></div>
            <div><span className="text-gray-600 block">투자 상담:</span><span className="font-medium">economic@mauritania.kr</span></div>
            <div><span className="text-gray-600 block">KOTRA 데스크:</span><span className="font-medium">mauritania@kotra.or.kr</span></div>
            <div><span className="text-gray-600 block">KOICA:</span><span className="font-medium">mauritania@koica.go.kr</span></div>
          </div>
        </div>
      </section>
    </>}

    </SubPageLayout>
  )
}
