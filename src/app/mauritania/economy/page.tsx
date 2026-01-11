'use client'

import React, { useState } from 'react'
import { useI18n } from '@/i18n/context'
import { cn } from '@/lib/utils'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function MauritaniaEconomyPage() {
  const { locale } = useI18n()
  const [selectedSector, setSelectedSector] = useState('mining')

  const economicIndicators = [
    { indicator: 'GDP (명목)', value: '$8.12B', change: '+4.8%', year: '2023' },
    { indicator: '1인당 GDP', value: '$1,750', change: '+3.2%', year: '2023' },
    { indicator: '경제성장률', value: '4.8%', change: '+0.5%p', year: '2023' },
    { indicator: '인플레이션', value: '3.2%', change: '-1.1%p', year: '2023' },
    { indicator: '실업률', value: '11.2%', change: '-0.8%p', year: '2023' },
    { indicator: '대외채무', value: '$4.2B', change: '+2.1%', year: '2023' }
  ]

  const economicSectors = [
    {
      id: 'mining',
      name: '광업',
      icon: '⛏️',
      gdpShare: '28%',
      employment: '8%',
      exportShare: '75%',
      description: '철광석, 금, 구리 등 풍부한 광물자원',
      keyProducts: ['철광석', '금', '구리', '석고'],
      majorCompanies: ['SNIM', 'Tasiast', 'Guelb Moghrein']
    },
    {
      id: 'fishing',
      name: '수산업',
      icon: '🐟',
      gdpShare: '12%',
      employment: '15%',
      exportShare: '18%',
      description: '대서양 연안의 풍부한 수산자원',
      keyProducts: ['문어', '새우', '참치', '정어리'],
      majorCompanies: ['SMCP', 'Mauritanide', 'Poly-Hondone']
    },
    {
      id: 'livestock',
      name: '축산업',
      icon: '🐪',
      gdpShare: '15%',
      employment: '25%',
      exportShare: '5%',
      description: '전통적인 유목 축산업',
      keyProducts: ['소', '양', '염소', '낙타'],
      majorCompanies: ['SONELAIT', 'SIVOM', '지역 협동조합']
    },
    {
      id: 'agriculture',
      name: '농업',
      icon: '🌾',
      gdpShare: '8%',
      employment: '35%',
      exportShare: '2%',
      description: '세네갈강 유역 중심의 농업',
      keyProducts: ['쌀', '수수', '옥수수', '대추야자'],
      majorCompanies: ['SONADER', 'UNCACEM', '농업협동조합']
    },
    {
      id: 'energy',
      name: '에너지',
      icon: '⚡',
      gdpShare: '6%',
      employment: '3%',
      exportShare: '0%',
      description: '신재생에너지 개발 확대',
      keyProducts: ['태양광', '풍력', '석유탐사', '천연가스'],
      majorCompanies: ['SOMELEC', 'Masdar', 'TotalEnergies']
    },
    {
      id: 'services',
      name: '서비스업',
      icon: '🏢',
      gdpShare: '31%',
      employment: '14%',
      exportShare: '0%',
      description: '금융, 통신, 운송 등 서비스업',
      keyProducts: ['은행업', '통신', '운송', '관광'],
      majorCompanies: ['BNM', 'BMCI', 'Mauritel', 'Air Mauritanie']
    }
  ]

  const tradePartners = {
    exports: [
      { country: '중국', percentage: '31%', value: '$2.1B' },
      { country: '스위스', percentage: '18%', value: '$1.2B' },
      { country: '스페인', percentage: '12%', value: '$0.8B' },
      { country: '일본', percentage: '8%', value: '$0.5B' },
      { country: '프랑스', percentage: '7%', value: '$0.5B' }
    ],
    imports: [
      { country: '프랑스', percentage: '15%', value: '$0.4B' },
      { country: '중국', percentage: '13%', value: '$0.3B' },
      { country: '벨기에', percentage: '11%', value: '$0.3B' },
      { country: '아랍에미리트', percentage: '9%', value: '$0.2B' },
      { country: '독일', percentage: '8%', value: '$0.2B' }
    ]
  }

  const investmentProjects = [
    {
      name: '가지아 철광석 개발',
      sector: '광업',
      investment: '$2.1B',
      status: '진행중',
      completion: '2025년',
      description: '세계 최대 규모의 철광석 개발 프로젝트'
    },
    {
      name: '누악쇼트 항구 확장',
      sector: '인프라',
      investment: '$800M',
      status: '진행중',
      completion: '2024년',
      description: '항만 처리 능력 3배 확대'
    },
    {
      name: '태양광 발전소 건설',
      sector: '에너지',
      investment: '$650M',
      status: '계획중',
      completion: '2026년',
      description: '400MW 규모의 태양광 발전시설'
    },
    {
      name: '데이터센터 구축',
      sector: 'IT',
      investment: '$200M',
      status: '진행중',
      completion: '2025년',
      description: '서아프리카 허브 데이터센터'
    }
  ]

  const mauritaniaMenuItems = [
    { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/mauritania/history' },
    { label: locale === 'ko' ? '지리' : locale === 'en' ? 'Geography' : locale === 'fr' ? 'Géographie' : 'الجغرافيا', href: '/mauritania/geography' },
    { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/mauritania/economy' },
    { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/mauritania/culture' },
    { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/mauritania/institutions' }
  ]

  const menuTitle = locale === 'ko' ? '모리타니아 정보' : locale === 'en' ? 'About Mauritania' : locale === 'fr' ? 'À propos de la Mauritanie' : 'حول موريتانيا'
  const pageTitle = locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={mauritaniaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/mauritania' }, { label: pageTitle }]}
    >
      {/* 경제 개요 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          경제 개요
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            모리타니아는 아프리카 북서부에 위치한 중저소득 국가로,
            철광석을 중심으로 한 광업이 경제의 핵심을 이루고 있습니다.
            최근에는 금, 구리 등 광물자원 개발과 수산업, 축산업이 주요 성장 동력으로 부상하고 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            정부는 &apos;2030 비전&apos;을 통해 경제 다변화, 민간 투자 유치, 인프라 개발을 추진하며
            지속가능한 성장 기반을 구축하고 있습니다. 특히 신재생에너지와 디지털 경제 분야에서
            새로운 기회를 모색하고 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            대서양과 사하라 사막 사이의 전략적 위치를 활용하여 서아프리카와 북아프리카,
            유럽을 연결하는 교통 및 물류 허브로 발전할 잠재력을 보유하고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {economicIndicators.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-lg ${index % 2 === 0 ? 'bg-theme-header/10' : 'bg-theme-nav/10'}`}
            >
              <div className="text-3xl font-bold mb-2 text-theme-header">
                {item.value}
              </div>
              <div className="text-gray-600 mb-1">{item.indicator}</div>
              <div className="text-sm text-green-600 font-medium">
                {item.change} ({item.year})
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 주요 경제 지표 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          주요 경제 지표
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">지표</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">2023년</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">전년 대비</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">전망</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {economicIndicators.map((indicator, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {indicator.indicator}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {indicator.value}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={indicator.change.includes('+') ? 'text-green-600' : 'text-red-600'}>
                      {indicator.change}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index < 3 ? '긍정적' : '안정적'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 산업 분야 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          주요 산업 분야
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {economicSectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setSelectedSector(sector.id)}
              className={cn(
                'p-6 rounded-lg border-2 text-left transition-all hover:shadow-md',
                selectedSector === sector.id
                  ? 'border-theme-header bg-theme-header/10'
                  : 'border-gray-200 hover:border-gray-300'
              )}
            >
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">{sector.icon}</span>
                <h3 className={cn(
                  'font-bold text-lg',
                  selectedSector === sector.id ? 'text-theme-header' : 'text-gray-700'
                )}>
                  {sector.name}
                </h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">GDP 기여율:</span>
                  <span className="font-medium">{sector.gdpShare}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">고용률:</span>
                  <span className="font-medium">{sector.employment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">수출 비중:</span>
                  <span className="font-medium">{sector.exportShare}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* 선택된 산업 상세 정보 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-theme-header">
            {economicSectors.find(s => s.id === selectedSector)?.name} 산업
          </h3>

          <p className="text-gray-700 mb-6">
            {economicSectors.find(s => s.id === selectedSector)?.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-3">주요 생산품</h4>
              <div className="flex flex-wrap gap-2">
                {economicSectors.find(s => s.id === selectedSector)?.keyProducts.map((product, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-theme-nav"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-900 mb-3">주요 기업</h4>
              <ul className="space-y-2">
                {economicSectors.find(s => s.id === selectedSector)?.majorCompanies.map((company, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 rounded-full mr-3 bg-theme-header"></span>
                    {company}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 무역 현황 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          대외무역 현황
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">주요 수출 대상국</h3>
            <div className="space-y-4">
              {tradePartners.exports.map((country, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{country.country}</span>
                    <span className="text-sm font-medium">{country.percentage}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="h-2 rounded-full bg-theme-header"
                      style={{ width: country.percentage }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">{country.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">주요 수입 대상국</h3>
            <div className="space-y-4">
              {tradePartners.imports.map((country, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{country.country}</span>
                    <span className="text-sm font-medium">{country.percentage}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="h-2 rounded-full bg-theme-nav"
                      style={{ width: country.percentage }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">{country.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 주요 투자 프로젝트 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          주요 투자 프로젝트
        </h2>

        <div className="space-y-6">
          {investmentProjects.map((project, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-gray-500">{project.sector}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === '진행중'
                          ? 'bg-green-100 text-green-800'
                          : project.status === '계획중'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-theme-header">
                    {project.investment}
                  </div>
                  <div className="text-sm text-gray-500">투자규모</div>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <div className="text-sm text-gray-500">
                완공 예정: {project.completion}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 추가 정보 박스 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 경제 전망 */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">
            2024년 경제 전망
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">GDP 성장률:</span>
              <span className="font-medium text-green-600">5.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">인플레이션:</span>
              <span className="font-medium">2.8%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">수출 증가율:</span>
              <span className="font-medium text-green-600">8.5%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">투자 증가율:</span>
              <span className="font-medium text-green-600">12.3%</span>
            </div>
          </div>
        </div>

        {/* 주요 자원 */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">
            주요 천연자원
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <div className="font-medium text-gray-900">철광석</div>
              <div className="text-gray-500">세계 11위 매장량</div>
            </div>
            <div>
              <div className="font-medium text-gray-900">금</div>
              <div className="text-gray-500">연간 15톤 생산</div>
            </div>
            <div>
              <div className="font-medium text-gray-900">구리</div>
              <div className="text-gray-500">새로운 매장지 발견</div>
            </div>
            <div>
              <div className="font-medium text-gray-900">석유·가스</div>
              <div className="text-gray-500">해상 유전 탐사</div>
            </div>
            <div>
              <div className="font-medium text-gray-900">수산자원</div>
              <div className="text-gray-500">연간 70만톤</div>
            </div>
          </div>
        </div>

        {/* 비즈니스 환경 */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">
            비즈니스 환경
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">세계은행 순위:</span>
              <span className="font-medium">152위/190개국</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">기업설립:</span>
              <span className="font-medium">19일</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">법인세율:</span>
              <span className="font-medium">25%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">부가가치세:</span>
              <span className="font-medium">14%</span>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
