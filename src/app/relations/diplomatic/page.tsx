'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import TestEnCours from '@/components/TestEnCours'

// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경
const TEST_MODE = true

export default function DiplomaticRelationsPage() {
  const { locale } = useI18n()

  const milestones = [
    { year: '1962', title: '외교관계 수립', description: '한국과 모리타니아가 공식 외교관계를 수립하며 우호협력의 기반을 마련' },
    { year: '1975', title: '주한 모리타니아 대사관 개설', description: '서울에 모리타니아 대사관이 개설되어 양국 관계 발전의 새로운 전기 마련' },
    { year: '1985', title: '경제기술협력협정 체결', description: '양국간 경제기술협력을 위한 포괄적 협정 체결로 실질협력 기반 구축' },
    { year: '1998', title: '문화협력협정 체결', description: '교육, 문화, 학술 분야에서의 교류 증진을 위한 협정 체결' },
    { year: '2008', title: '개발협력 확대', description: 'KOICA를 통한 개발협력 프로그램 본격 시작, IT 및 농업 분야 지원 확대' },
    { year: '2015', title: '에너지 협력 MOU', description: '신재생에너지 및 자원개발 분야 협력을 위한 양해각서 체결' },
    { year: '2020', title: 'K-방역 협력', description: '코로나19 대응을 위한 방역물품 지원 및 의료협력 강화' },
    { year: '2023', title: '디지털 파트너십', description: '디지털 전환 및 스마트시티 구축을 위한 협력 파트너십 구축' }
  ]

  const keyVisits = [
    { year: '2019', visitor: '모하메드 울드 빌랄 외교부 장관', purpose: '한-모리타니아 외교협력 강화 방안 논의' },
    { year: '2021', visitor: '강경화 외교부 장관 (화상)', purpose: '코로나19 대응 협력 및 개발협력 확대 방안 협의' },
    { year: '2022', visitor: '아흐메드 살렘 경제기획부 장관', purpose: '한국의 개발경험 공유 및 경제협력 확대 논의' },
    { year: '2023', visitor: '박진 외교부 장관', purpose: '전략적 파트너십 구축 및 다자협력 강화 방안 논의' }
  ]

  const cooperationAreas = [
    { title: '정치·외교', icon: '🤝', items: ['정기 외교협의', 'UN 등 국제기구 협력', '지역안보 대화', '다자외교 공조'] },
    { title: '개발협력', icon: '🌱', items: ['KOICA 기술협력', 'IT 인프라 구축', '농업기술 전수', '인적자원개발'] },
    { title: '국제무대 협력', icon: '🌍', items: ['UN 평화유지', '기후변화 대응', 'SDGs 달성', '다자무역체제'] },
    { title: '청년교류', icon: '👥', items: ['청년리더 프로그램', '학술교류', '언어문화 체험', '창업지원'] }
  ]

  const relationsMenuItems = [
    { label: locale === 'ko' ? '외교관계' : locale === 'en' ? 'Diplomatic Relations' : locale === 'fr' ? 'Relations diplomatiques' : 'العلاقات الدبلوماسية', href: '/relations/diplomatic' },
    { label: locale === 'ko' ? '경제협력' : locale === 'en' ? 'Economic Cooperation' : locale === 'fr' ? 'Coopération économique' : 'التعاون الاقتصادي', href: '/relations/economic' },
    { label: locale === 'ko' ? '문화교류' : locale === 'en' ? 'Cultural Exchange' : locale === 'fr' ? 'Échanges culturels' : 'التبادل الثقافي', href: '/relations/cultural' }
  ]

  const menuTitle = locale === 'ko' ? '양국관계' : locale === 'en' ? 'Bilateral Relations' : locale === 'fr' ? 'Relations bilatérales' : 'العلاقات الثنائية'
  const pageTitle = locale === 'ko' ? '외교관계' : locale === 'en' ? 'Diplomatic Relations' : locale === 'fr' ? 'Relations diplomatiques' : 'العلاقات الدبلوماسية'

  return (
    <SubPageLayout menuTitle={menuTitle} menuItems={relationsMenuItems} currentPageTitle={pageTitle} breadcrumbs={[{ label: menuTitle, href: '/relations' }, { label: pageTitle }]}>
      {TEST_MODE ? <TestEnCours /> : <>
      {/* 외교관계 개요 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">외교관계 개요</h2>
        <div className="prose max-w-none mb-8 text-[15px]">
          <p className="text-gray-700 leading-relaxed mb-4">한국과 모리타니아는 1962년 11월 28일 모리타니아 독립과 함께 외교관계를 수립한 이래, 상호 존중과 신뢰를 바탕으로 꾸준히 우호협력관계를 발전시켜 왔습니다.</p>
          <p className="text-gray-700 leading-relaxed mb-4">양국은 정치·외교, 경제·통상, 개발협력, 문화·교육 등 다양한 분야에서 협력을 확대해 왔으며, 특히 최근에는 신재생에너지, 디지털 전환, 스마트시티 등 미래 지향적 협력 분야로 협력 영역을 확장하고 있습니다.</p>
          <p className="text-gray-700 leading-relaxed">또한 UN을 비롯한 국제무대에서도 평화와 안정, 지속가능한 발전을 위해 긴밀히 협력하며 글로벌 파트너십을 강화하고 있습니다.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-theme-header/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">61년</div>
            <div className="text-gray-600 text-sm">외교관계 수립</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-theme-nav/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">15개</div>
            <div className="text-gray-600 text-sm">체결 협정 수</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-theme-header/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">$2.5M</div>
            <div className="text-gray-600 text-sm">연간 개발협력 규모</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-theme-nav/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">127건</div>
            <div className="text-gray-600 text-sm">고위급 교류</div>
          </div>
        </div>
      </section>

      {/* 주요 발전 과정 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">주요 발전 과정</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-theme-header"></div>
          <div className="space-y-6 text-[15px]">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold z-10 bg-theme-header">{index + 1}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold text-theme-header">{milestone.year}</span>
                    <span className="text-gray-400">•</span>
                    <h3 className="text-lg font-bold text-gray-900">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 주요 협력 분야 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">주요 협력 분야</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cooperationAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{area.icon}</span>
                <h3 className="text-xl font-bold text-theme-header">{area.title}</h3>
              </div>
              <ul className="space-y-2 text-[15px]">
                {area.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 rounded-full mr-3 bg-theme-nav"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 최근 주요 고위급 교류 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">최근 주요 고위급 교류</h2>
        <div className="space-y-6 text-[15px]">
          {keyVisits.map((visit, index) => (
            <div key={index} className="border-l-4 pl-6 border-theme-header">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-lg font-bold text-theme-header">{visit.year}</span>
                <span className="text-gray-400">•</span>
                <h3 className="text-lg font-bold text-gray-900">{visit.visitor}</h3>
              </div>
              <p className="text-gray-700">{visit.purpose}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 현재 관계 현황 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">현재 관계 현황</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-gray-600">대사급 외교관계:</span><span className="font-medium text-green-600">✓ 수립</span></div>
            <div className="flex justify-between"><span className="text-gray-600">주한 대사관:</span><span className="font-medium text-green-600">✓ 운영</span></div>
            <div className="flex justify-between"><span className="text-gray-600">주모리타니아 공관:</span><span className="font-medium text-yellow-600">○ 예정</span></div>
            <div className="flex justify-between"><span className="text-gray-600">KOICA 사무소:</span><span className="font-medium text-green-600">✓ 운영</span></div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">주요 체결 협정</h3>
          <div className="space-y-3 text-sm">
            <div><div className="font-medium text-gray-900">경제기술협력협정</div><div className="text-gray-500">1985년 체결</div></div>
            <div><div className="font-medium text-gray-900">문화협력협정</div><div className="text-gray-500">1998년 체결</div></div>
            <div><div className="font-medium text-gray-900">무역촉진협정</div><div className="text-gray-500">2005년 체결</div></div>
            <div><div className="font-medium text-gray-900">개발협력기본협정</div><div className="text-gray-500">2010년 체결</div></div>
          </div>
        </div>
      </section>
    </>}

    </SubPageLayout>
  )
}
