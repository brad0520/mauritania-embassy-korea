'use client'

import React, { useState } from 'react'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import TestEnCours from '@/components/TestEnCours'

// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경
const TEST_MODE = true

export default function MauritaniaTourismPage() {
  const { t, locale } = useI18n()
  const { currentTheme } = useTheme()
  const [selectedDestination, setSelectedDestination] = useState('nouakchott')

  const touristAttractions = [
    {
      id: 'nouakchott',
      name: '누악쇼트',
      type: '수도',
      icon: '🏙️',
      description: '현대적인 수도이자 경제 중심지',
      highlights: [
        '국립박물관과 문화센터',
        '중앙시장과 전통공예품',
        '현대적인 호텔과 레스토랑',
        '아름다운 대서양 해변'
      ],
      bestTime: '11월 - 2월',
      activities: ['시티투어', '문화체험', '쇼핑', '해변산책']
    },
    {
      id: 'chinguetti',
      name: '친기타',
      type: '역사도시',
      icon: '🏛️',
      description: '사막의 진주, 고대 상업도시',
      highlights: [
        'UNESCO 세계문화유산',
        '고대 도서관과 필사본',
        '전통 사하라 건축',
        '사막 트레킹 출발점'
      ],
      bestTime: '10월 - 3월',
      activities: ['역사탐방', '사막투어', '낙타트레킹', '별관찰']
    },
    {
      id: 'ouadane',
      name: '우아단',
      type: '고대도시',
      icon: '🕌',
      description: '중세 이슬람 문명의 흔적',
      highlights: [
        '고대 모스크와 유적',
        '전통 사하라 마을',
        '사막 오아시스',
        '베르베르 문화유산'
      ],
      bestTime: '11월 - 2월',
      activities: ['문화유산 탐방', '사막 캠핑', '전통문화 체험', '고고학 투어']
    },
    {
      id: 'banc_arguin',
      name: '반 다르궈인',
      type: '국립공원',
      icon: '🦩',
      description: '세계적인 철새 서식지',
      highlights: [
        'UNESCO 자연유산',
        '철새 서식지 (200만 마리)',
        '전통 어업 방식 보존',
        '독특한 해안 생태계'
      ],
      bestTime: '11월 - 4월',
      activities: ['조류관찰', '에코투어', '전통어업 체험', '자연사진 촬영']
    },
    {
      id: 'adrar',
      name: '아드라르',
      type: '사막지역',
      icon: '🏜️',
      description: '장엄한 사하라 사막의 중심',
      highlights: [
        '거대한 사구와 암석층',
        '전통 유목민 문화',
        '고대 암각화',
        '별이 빛나는 밤하늘'
      ],
      bestTime: '10월 - 3월',
      activities: ['사막 사파리', '낙타 트레킹', '별관찰', '모험여행']
    },
    {
      id: 'nouadhibou',
      name: '누아디부',
      type: '항구도시',
      icon: '⚓',
      description: '어업 중심의 대서양 연안 도시',
      highlights: [
        '세계적인 어업 기지',
        '기차 묘지 (폐차장)',
        '철새 관찰 포인트',
        '신선한 해산물 요리'
      ],
      bestTime: '10월 - 4월',
      activities: ['낚시투어', '조류관찰', '해산물 체험', '산업관광']
    }
  ]

  const travelTips = [
    {
      category: '기후와 복장',
      icon: '🌡️',
      tips: [
        '건기 (10월-5월)가 여행 적기',
        '사막 지역은 일교차가 크므로 겹옷 준비',
        '자외선 차단제와 모자 필수',
        '편안한 신발과 긴 바지 권장'
      ]
    },
    {
      category: '교통과 숙박',
      icon: '🚗',
      tips: [
        '4WD 차량 렌트 또는 가이드 투어 이용',
        '장거리 이동 시 충분한 물과 연료 준비',
        '누악쇼트와 아타르에 주요 호텔 위치',
        '사막 캠핑 시 현지 가이드 필수'
      ]
    },
    {
      category: '문화와 예절',
      icon: '🕌',
      tips: [
        '이슬람 문화 존중, 복장 주의',
        '금요일 오후는 기도 시간 고려',
        '사진 촬영 시 허락 구하기',
        '차 문화 체험과 환대 예의'
      ]
    },
    {
      category: '건강과 안전',
      icon: '🏥',
      tips: [
        '황열병, 말라리아 예방접종 권장',
        '충분한 생수와 응급약품 준비',
        '현지 가이드나 투어업체 이용',
        '대사관 연락처 항상 소지'
      ]
    }
  ]

  const tourPackages = [
    {
      name: '사하라 사막 어드벤처',
      duration: '7박 8일',
      price: '$1,450',
      highlights: ['친기타', '우아단', '아드라르'],
      includes: ['숙박', '가이드', '4WD 차량', '캠핑장비']
    },
    {
      name: '문화유산 탐방',
      duration: '5박 6일',
      price: '$980',
      highlights: ['누악쇼트', '친기타', '우알라타'],
      includes: ['호텔', '문화가이드', '입장료', '전통공연']
    },
    {
      name: '에코 조류관찰 투어',
      duration: '4박 5일',
      price: '$750',
      highlights: ['반 다르궈인', '누아디부'],
      includes: ['에코롯지', '조류가이드', '보트투어', '망원경']
    },
    {
      name: '사막 별관찰 캠핑',
      duration: '3박 4일',
      price: '$560',
      highlights: ['아드라르', '사막캠핑'],
      includes: ['텐트', '천체망원경', '베두인 가이드', '전통식사']
    }
  ]

  return (


    <>
      
      {/* 페이지 헤더 */}
      <section 
        className="text-white py-16"
        style={{
          background: `linear-gradient(135deg, ${currentTheme.colors.primary}ee 0%, ${currentTheme.colors.secondary}ee 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              {t('mauritania.tourism.title')}
            </h1>
            <p className="text-xl text-white/90">
              사하라 사막과 대서양이 만나는 신비로운 여행지
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* 관광 개요 */}
        <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 
            className="text-2xl font-bold mb-6 pb-3 border-b-2"
            style={{ 
              color: currentTheme.colors.primary,
              borderColor: currentTheme.colors.secondary
            }}
          >
            관광 개요
          </h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              {currentTheme.name[locale]}는 사하라 사막과 대서양이 만나는 독특한 지리적 위치로 
              세계에서 보기 드문 다양한 자연경관과 문화유산을 간직한 여행 목적지입니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              고대 상업로의 중심지였던 친기타, 우아단 등의 역사도시와 
              세계적인 철새 서식지인 반 다르궈인 국립공원, 그리고 광활한 사하라 사막이 
              방문객들에게 잊을 수 없는 경험을 선사합니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              전통 유목민 문화와 베르베르족의 오랜 역사, 이슬람 문명의 흔적들이 
              어우러져 독특하고 매력적인 문화 체험을 제공하며, 
              천문관측에 최적화된 맑은 밤하늘은 자연 애호가들에게 특별한 감동을 줍니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div 
              className="text-center p-6 rounded-lg"
              style={{ backgroundColor: `${currentTheme.colors.primary}10` }}
            >
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: currentTheme.colors.primary }}
              >
                4개
              </div>
              <div className="text-gray-600">UNESCO 유산</div>
            </div>
            <div 
              className="text-center p-6 rounded-lg"
              style={{ backgroundColor: `${currentTheme.colors.secondary}10` }}
            >
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: currentTheme.colors.primary }}
              >
                350일
              </div>
              <div className="text-gray-600">연간 맑은 날</div>
            </div>
            <div 
              className="text-center p-6 rounded-lg"
              style={{ backgroundColor: `${currentTheme.colors.primary}10` }}
            >
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: currentTheme.colors.primary }}
              >
              200만
              </div>
              <div className="text-gray-600">철새 개체수</div>
            </div>
            <div 
              className="text-center p-6 rounded-lg"
              style={{ backgroundColor: `${currentTheme.colors.secondary}10` }}
            >
              <div 
                className="text-3xl font-bold mb-2"
                style={{ color: currentTheme.colors.primary }}
              >
                1000km
              </div>
              <div className="text-gray-600">대서양 해안선</div>
            </div>
          </div>
        </section>

        {/* 주요 관광지 */}
        <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 
            className="text-2xl font-bold mb-6 pb-3 border-b-2"
            style={{ 
              color: currentTheme.colors.primary,
              borderColor: currentTheme.colors.secondary
            }}
          >
            주요 관광 명소
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {touristAttractions.map((destination) => (
              <button
                key={destination.id}
                onClick={() => setSelectedDestination(destination.id)}
                className={cn(
                  'p-6 rounded-lg border-2 text-left transition-all hover:shadow-md',
                  selectedDestination === destination.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                )}
              >
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{destination.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg" style={{ 
                      color: selectedDestination === destination.id ? currentTheme.colors.primary : '#374151'
                    }}>
                      {destination.name}
                    </h3>
                    <span className="text-sm text-gray-500">{destination.type}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{destination.description}</p>
                <div className="text-xs text-gray-500">
                  최적 시기: {destination.bestTime}
                </div>
              </button>
            ))}
          </div>

          {/* 선택된 관광지 상세 정보 */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">
                {touristAttractions.find(d => d.id === selectedDestination)?.icon}
              </span>
              <div>
                <h3 className="text-2xl font-bold" style={{ color: currentTheme.colors.primary }}>
                  {touristAttractions.find(d => d.id === selectedDestination)?.name}
                </h3>
                <p className="text-gray-600">
                  {touristAttractions.find(d => d.id === selectedDestination)?.description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-4">주요 볼거리</h4>
                <ul className="space-y-2">
                  {touristAttractions.find(d => d.id === selectedDestination)?.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: currentTheme.colors.primary }}
                      ></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg text-gray-900 mb-4">추천 활동</h4>
                <div className="flex flex-wrap gap-2">
                  {touristAttractions.find(d => d.id === selectedDestination)?.activities.map((activity, index) => (
                    <span 
                      key={index}
                      className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white"
                      style={{ backgroundColor: currentTheme.colors.secondary }}
                    >
                      {activity}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">최적 방문 시기</h4>
                  <p className="text-gray-700">
                    {touristAttractions.find(d => d.id === selectedDestination)?.bestTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 여행 패키지 */}
            <section className="bg-white rounded-lg shadow-sm border p-8">
              <h2 
                className="text-2xl font-bold mb-6 pb-3 border-b-2"
                style={{ 
                  color: currentTheme.colors.primary,
                  borderColor: currentTheme.colors.secondary
                }}
              >
                추천 여행 패키지
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tourPackages.map((tour, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{tour.name}</h3>
                        <p className="text-sm text-gray-500">{tour.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold" style={{ color: currentTheme.colors.primary }}>
                          {tour.price}
                        </div>
                        <div className="text-sm text-gray-500">1인 기준</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">주요 코스</h4>
                      <div className="flex flex-wrap gap-1">
                        {tour.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="inline-block px-2 py-1 bg-gray-100 rounded text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">포함사항</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {tour.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button
                      className="w-full py-2 px-4 rounded-md text-white font-medium hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: currentTheme.colors.primary }}
                    >
                      문의하기
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* 여행 팁 */}
            <section className="bg-white rounded-lg shadow-sm border p-8">
              <h2 
                className="text-2xl font-bold mb-6 pb-3 border-b-2"
                style={{ 
                  color: currentTheme.colors.primary,
                  borderColor: currentTheme.colors.secondary
                }}
              >
                여행 가이드 & 팁
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {travelTips.map((tipCategory, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{tipCategory.icon}</span>
                      <h3 className="font-bold text-lg" style={{ color: currentTheme.colors.primary }}>
                        {tipCategory.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {tipCategory.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start text-sm text-gray-700">
                          <span 
                            className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0"
                            style={{ backgroundColor: currentTheme.colors.secondary }}
                          ></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            
            {/* 비자 정보 */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 
                className="text-lg font-bold mb-4 pb-2 border-b"
                style={{ 
                  color: currentTheme.colors.primary,
                  borderColor: currentTheme.colors.secondary
                }}
              >
                비자 정보
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-gray-900">관광비자</div>
                  <div className="text-gray-500">30일, 단수입국</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">발급 수수료</div>
                  <div className="text-gray-500">50,000원</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">처리 기간</div>
                  <div className="text-gray-500">15일 (일반)</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">연장 가능</div>
                  <div className="text-gray-500">현지에서 30일 추가</div>
                </div>
              </div>
              <a 
                href="/consular/visa"
                className="inline-block mt-4 text-sm text-blue-600 hover:text-blue-800"
              >
                → 비자 신청 안내
              </a>
            </div>

            {/* 교통 정보 */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 
                className="text-lg font-bold mb-4 pb-2 border-b"
                style={{ 
                  color: currentTheme.colors.primary,
                  borderColor: currentTheme.colors.secondary
                }}
              >
                교통 정보
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-gray-900">항공편</div>
                  <div className="text-gray-500">인천-누악쇼트 (경유 1회)</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">소요시간</div>
                  <div className="text-gray-500">약 15-18시간</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">국내 교통</div>
                  <div className="text-gray-500">4WD 렌터카, 투어버스</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">철도</div>
                  <div className="text-gray-500">광물 수송용 (관광 불가)</div>
                </div>
              </div>
            </div>

            {/* 통화 및 물가 */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 
                className="text-lg font-bold mb-4 pb-2 border-b"
                style={{ 
                  color: currentTheme.colors.primary,
                  borderColor: currentTheme.colors.secondary
                }}
              >
                통화 및 물가
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">통화:</span>
                  <span className="font-medium">우기야 (MRU)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">환율:</span>
                  <span className="font-medium">1USD = 36.5 MRU</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">식사:</span>
                  <span className="font-medium">$10-30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">숙박:</span>
                  <span className="font-medium">$40-150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">투어:</span>
                  <span className="font-medium">$80-200/일</span>
                </div>
              </div>
            </div>

            {/* 날씨 정보 */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 
                className="text-lg font-bold mb-4 pb-2 border-b"
                style={{ 
                  color: currentTheme.colors.primary,
                  borderColor: currentTheme.colors.secondary
                }}
              >
                계절별 날씨
              </h3>
              <div className="space-y-3 text-sm">
                <div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${currentTheme.colors.primary}10` }}
                >
                  <div className="font-medium text-gray-900">건기 (10월-5월)</div>
                  <div className="text-gray-600">25-35°C, 맑고 건조</div>
                </div>
                <div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${currentTheme.colors.secondary}10` }}
                >
                  <div className="font-medium text-gray-900">우기 (6월-9월)</div>
                  <div className="text-gray-600">30-45°C, 습하고 더움</div>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  * 사막 지역은 일교차가 15-20°C
                </div>
              </div>
            </div>

            {/* 여행사 정보 */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 
                className="text-lg font-bold mb-4 pb-2 border-b"
                style={{ 
                  color: currentTheme.colors.primary,
                  borderColor: currentTheme.colors.secondary
                }}
              >
                현지 여행사
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-gray-900">Sahara Tours</div>
                  <div className="text-gray-500">사막 투어 전문</div>
                  <div className="text-blue-600">+222 525 4789</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Mauritanie Voyages</div>
                  <div className="text-gray-500">문화 투어 전문</div>
                  <div className="text-blue-600">+222 525 3456</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Desert Adventures</div>
                  <div className="text-gray-500">모험 투어 전문</div>
                  <div className="text-blue-600">+222 525 7890</div>
                </div>
              </div>
            </div>

            {/* 관련 링크 */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 
                className="text-lg font-bold mb-4 pb-2 border-b"
                style={{ 
                  color: currentTheme.colors.primary,
                  borderColor: currentTheme.colors.secondary
                }}
              >
                관련 정보
              </h3>
              <div className="space-y-2">
                <a 
                  href="/consular/visa" 
                  className="block text-sm text-blue-600 hover:text-blue-800"
                >
                  → 비자 발급 안내
                </a>
                <a 
                  href="/mauritania/culture" 
                  className="block text-sm text-blue-600 hover:text-blue-800"
                >
                  → 문화 정보
                </a>
                <a 
                  href="/embassy/contact" 
                  className="block text-sm text-blue-600 hover:text-blue-800"
                >
                  → 대사관 연락처
                </a>
                <a 
                  href="/news" 
                  className="block text-sm text-blue-600 hover:text-blue-800"
                >
                  → 여행 관련 소식
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 안전 정보 */}
        <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            ⚠️ 여행 안전 정보
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-yellow-800 mb-2">건강 주의사항</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 황열병 예방접종 필수</li>
                <li>• 말라리아 예방약 복용</li>
                <li>• 충분한 수분 섭취</li>
                <li>• 응급약품 준비</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-yellow-800 mb-2">치안 정보</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 주요 도시는 비교적 안전</li>
                <li>• 사막 지역 단독 여행 금지</li>
                <li>• 야간 외출 자제</li>
                <li>• 현지 가이드 동행 권장</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-yellow-800 mb-2">긴급 연락처</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 한국 대사관: +222 525 1234</li>
                <li>• 현지 응급실: 101</li>
                <li>• 현지 경찰: 117</li>
                <li>• 소방서: 118</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      </>


      )
}