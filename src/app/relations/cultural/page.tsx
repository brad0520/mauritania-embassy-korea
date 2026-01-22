'use client'

import React, { useState } from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import TestEnCours from '@/components/TestEnCours'

// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경
const TEST_MODE = true

export default function CulturalRelationsPage() {
  const { locale } = useI18n()
  const [selectedYear, setSelectedYear] = useState('2023')

  const culturalPrograms = [
    {
      category: '교육교류', icon: '🎓',
      programs: [
        { name: '한국학 강좌 개설', description: '누악쇼트 대학교에서 한국어와 한국문화 강의', participants: '150명/년', duration: '연중' },
        { name: '정부초청장학생', description: 'GKS를 통한 한국 유학생 지원 프로그램', participants: '25명/년', duration: '4년' },
        { name: '한국어교육원 운영', description: '세종학당을 통한 한국어 교육 확산', participants: '300명/년', duration: '연중' }
      ]
    },
    {
      category: '문화예술', icon: '🎭',
      programs: [
        { name: 'K-Culture Festival', description: '한류문화 축제 및 공연행사', participants: '5,000명', duration: '3일간' },
        { name: '전통문화 교류', description: '양국 전통 음악과 무용 공연 교류', participants: '1,200명', duration: '1주간' },
        { name: '영화제 공동개최', description: '한국-모리타니아 영화제', participants: '3,500명', duration: '5일간' }
      ]
    },
    {
      category: '청년교류', icon: '👥',
      programs: [
        { name: '청년리더십 프로그램', description: '양국 청년 지도자 양성 및 교류', participants: '80명/년', duration: '2주' },
        { name: '창업 멘토링', description: '한국 스타트업 경험 공유', participants: '120명/년', duration: '6개월' },
        { name: '문화체험 캠프', description: '한국 전통문화 체험 프로그램', participants: '200명/년', duration: '1주' }
      ]
    },
    {
      category: '학술협력', icon: '📚',
      programs: [
        { name: '공동연구 프로젝트', description: '사하라 지역 연구 및 기후변화 대응', participants: '50명', duration: '2년' },
        { name: '학술세미나', description: '정기 학술교류 세미나', participants: '150명', duration: '연 4회' },
        { name: '연구원 교환', description: '양국 연구기관 인력 교환', participants: '30명/년', duration: '6개월' }
      ]
    }
  ]

  const majorEvents = [
    {
      year: '2023',
      events: [
        { month: '03', title: '한-모리타니아 문화주간', description: '전통음악 공연, 문화체험, 음식축제', location: '누악쇼트 문화센터' },
        { month: '06', title: 'K-Pop 콘서트', description: '한국 아이돌 그룹 공연 및 팬미팅', location: '누악쇼트 올림픽 스타디움' },
        { month: '09', title: '한국영화제', description: '최신 한국 영화 상영 및 감독 초청', location: '모리타니아 국립극장' },
        { month: '11', title: '한국어 말하기 대회', description: '전국 한국어 학습자 말하기 경연', location: '누악쇼트 대학교' }
      ]
    },
    {
      year: '2022',
      events: [
        { month: '02', title: '한국 현대미술 전시회', description: '한국 작가들의 현대미술 작품 전시', location: '국립미술관' },
        { month: '05', title: '태권도 시범단 공연', description: '국기원 태권도 시범단 초청공연', location: '누악쇼트 체육관' },
        { month: '08', title: '한국 전통문화 워크숍', description: '한지공예, 서예, 전통차 체험', location: '문화교류센터' },
        { month: '10', title: '청년 창업 컨퍼런스', description: '한국의 창업 성공사례 공유', location: '누악쇼트 컨벤션센터' }
      ]
    }
  ]

  const exchangeStats = [
    { category: '학생교류', count: '1,250', unit: '명', change: '+15.2%' },
    { category: '문화행사', count: '47', unit: '회', change: '+8.7%' },
    { category: '예술가교류', count: '156', unit: '명', change: '+22.3%' },
    { category: '학술세미나', count: '24', unit: '회', change: '+12.1%' }
  ]

  const relationsMenuItems = [
    { label: locale === 'ko' ? '외교관계' : locale === 'en' ? 'Diplomatic Relations' : locale === 'fr' ? 'Relations diplomatiques' : 'العلاقات الدبلوماسية', href: '/relations/diplomatic' },
    { label: locale === 'ko' ? '경제협력' : locale === 'en' ? 'Economic Cooperation' : locale === 'fr' ? 'Coopération économique' : 'التعاون الاقتصادي', href: '/relations/economic' },
    { label: locale === 'ko' ? '문화교류' : locale === 'en' ? 'Cultural Exchange' : locale === 'fr' ? 'Échanges culturels' : 'التبادل الثقافي', href: '/relations/cultural' }
  ]

  const menuTitle = locale === 'ko' ? '양국관계' : locale === 'en' ? 'Bilateral Relations' : locale === 'fr' ? 'Relations bilatérales' : 'العلاقات الثنائية'
  const pageTitle = locale === 'ko' ? '문화교류' : locale === 'en' ? 'Cultural Exchange' : locale === 'fr' ? 'Échanges culturels' : 'التبادل الثقافي'

  return (
    <SubPageLayout menuTitle={menuTitle} menuItems={relationsMenuItems} currentPageTitle={pageTitle} breadcrumbs={[{ label: menuTitle, href: '/relations' }, { label: pageTitle }]}>
      {TEST_MODE ? <TestEnCours /> : <>
      {/* 문화교류 현황 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">문화교류 현황</h2>
        <div className="prose max-w-none mb-8 text-[15px]">
          <p className="text-gray-700 leading-relaxed mb-4">한국과 모리타니아의 문화교류는 1998년 문화협력협정 체결을 계기로 본격화되었으며, 교육, 예술, 학술, 청년교류 등 다양한 분야에서 활발한 상호교류를 통해 양국 국민 간의 이해와 우정을 깊어가고 있습니다.</p>
          <p className="text-gray-700 leading-relaxed mb-4">특히 최근 한류문화의 확산과 함께 K-Pop, 드라마, 영화 등 한국 대중문화에 대한 모리타니아 청년들의 관심이 높아지면서, 언어교육과 문화체험 프로그램이 크게 확대되고 있습니다.</p>
          <p className="text-gray-700 leading-relaxed">또한 모리타니아의 풍부한 전통문화와 한국의 현대문화가 만나 새로운 융합문화 콘텐츠를 창조하는 협력 프로젝트들도 활발히 진행되고 있습니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {exchangeStats.map((stat, index) => (
            <div key={index} className={`text-center p-6 rounded-lg ${index % 2 === 0 ? 'bg-theme-header/10' : 'bg-theme-nav/10'}`}>
              <div className="text-3xl font-bold mb-2 text-theme-header">{stat.count}</div>
              <div className="text-gray-600 mb-1 text-sm">{stat.category} ({stat.unit})</div>
              <div className="text-sm text-green-600 font-medium">{stat.change}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 주요 교류 프로그램 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">주요 교류 프로그램</h2>
        <div className="space-y-8">
          {culturalPrograms.map((category, index) => (
            <div key={index}>
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-bold text-theme-header">{category.category}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.programs.map((program, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg border">
                    <h4 className="font-bold text-lg text-gray-900 mb-3">{program.name}</h4>
                    <p className="text-gray-700 mb-4 leading-relaxed text-[15px]">{program.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-gray-500">참가자:</span><span className="font-medium">{program.participants}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">기간:</span><span className="font-medium">{program.duration}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 주요 문화행사 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">주요 문화행사</h2>
        <div className="flex space-x-4 mb-6">
          {['2023', '2022'].map((year) => (
            <button key={year} onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedYear === year ? 'text-white bg-theme-header' : 'text-gray-600 hover:bg-gray-100'}`}>
              {year}년
            </button>
          ))}
        </div>
        <div className="space-y-6">
          {majorEvents.find(e => e.year === selectedYear)?.events.map((event, index) => (
            <div key={index} className="flex space-x-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg bg-theme-header">{event.month}월</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-700 mb-2 text-[15px]">{event.description}</p>
                <p className="text-sm text-gray-500">📍 {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 한류 확산 현황 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">한류 확산 현황</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">인기 콘텐츠</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900">드라마</h4>
                <p className="text-sm text-gray-600 mt-1">사랑의 불시착, 오징어 게임, 더 글로리</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2"><div className="h-2 rounded-full bg-theme-header" style={{ width: '85%' }}></div></div>
                  <span className="text-xs text-gray-500 mt-1">인지도 85%</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900">K-Pop</h4>
                <p className="text-sm text-gray-600 mt-1">BTS, BLACKPINK, NewJeans, ITZY</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2"><div className="h-2 rounded-full bg-theme-nav" style={{ width: '78%' }}></div></div>
                  <span className="text-xs text-gray-500 mt-1">인지도 78%</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900">K-Food</h4>
                <p className="text-sm text-gray-600 mt-1">한국라면, 김치, 불고기, 치킨</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2"><div className="h-2 rounded-full bg-theme-header" style={{ width: '65%' }}></div></div>
                  <span className="text-xs text-gray-500 mt-1">인지도 65%</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">한국어 학습 현황</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-theme-header/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">세종학당</span>
                  <span className="text-2xl font-bold text-theme-header">3</span>
                </div>
                <p className="text-sm text-gray-600">누악쇼트, 누아디부, 아타르</p>
              </div>
              <div className="p-4 rounded-lg bg-theme-nav/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">한국어 학습자</span>
                  <span className="text-2xl font-bold text-theme-header">1,250</span>
                </div>
                <p className="text-sm text-gray-600">전년 대비 +35% 증가</p>
              </div>
              <div className="p-4 rounded-lg bg-theme-header/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">TOPIK 응시자</span>
                  <span className="text-2xl font-bold text-theme-header">187</span>
                </div>
                <p className="text-sm text-gray-600">연 2회 시행</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 교류 기관 및 장학 프로그램 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">주요 교류 기관</h3>
          <div className="space-y-3 text-sm">
            <div><div className="font-medium text-gray-900">한국문화원</div><div className="text-gray-500">문화행사 및 한국어 교육</div></div>
            <div><div className="font-medium text-gray-900">세종학당</div><div className="text-gray-500">한국어 교육 전문기관</div></div>
            <div><div className="font-medium text-gray-900">누악쇼트 대학교</div><div className="text-gray-500">한국학과 운영</div></div>
            <div><div className="font-medium text-gray-900">국제교류재단</div><div className="text-gray-500">학술교류 지원</div></div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">장학 프로그램</h3>
          <div className="space-y-3 text-sm">
            <div><div className="font-medium text-gray-900">GKS 학부</div><div className="text-gray-500">15명/년 (4년 전액)</div></div>
            <div><div className="font-medium text-gray-900">GKS 대학원</div><div className="text-gray-500">10명/년 (2-3년)</div></div>
            <div><div className="font-medium text-gray-900">교환학생</div><div className="text-gray-500">25명/년 (1학기)</div></div>
            <div><div className="font-medium text-gray-900">단기연수</div><div className="text-gray-500">50명/년 (2-4주)</div></div>
          </div>
        </div>
      </section>
    </>}

    </SubPageLayout>
  )
}
