'use client'

import React, { useState } from 'react'
import { useI18n } from '@/i18n/context'
import { cn } from '@/lib/utils'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function MauritaniaCulturePage() {
  const { locale } = useI18n()
  const [selectedTopic, setSelectedTopic] = useState('traditions')

  const culturalTopics = [
    {
      id: 'traditions',
      title: '전통문화',
      icon: '🏺',
      description: '수백 년간 이어져 온 풍부한 전통'
    },
    {
      id: 'music',
      title: '음악과 춤',
      icon: '🎵',
      description: '베르베르와 아랍의 선율이 어우러진 예술'
    },
    {
      id: 'literature',
      title: '문학과 시',
      icon: '📖',
      description: '구전문학과 현대문학의 조화'
    },
    {
      id: 'crafts',
      title: '전통공예',
      icon: '🎨',
      description: '사막의 지혜가 담긴 수공예품'
    },
    {
      id: 'cuisine',
      title: '전통요리',
      icon: '🍲',
      description: '사막과 바다가 만난 독특한 맛'
    },
    {
      id: 'festivals',
      title: '축제와 행사',
      icon: '🎭',
      description: '공동체를 하나로 만드는 전통축제'
    }
  ]

  const traditions = {
    traditions: [
      {
        name: '차 문화 (Atay)',
        description: '모리타니아의 상징적인 차 문화로, 하루 세 번의 차를 마시는 전통이 있습니다. 첫 번째는 죽음처럼 쓰고, 두 번째는 인생처럼 달고, 세 번째는 사랑처럼 부드럽다고 표현합니다.',
        importance: '사회적 유대감과 환대의 상징'
      },
      {
        name: '헤나 의식',
        description: '결혼식이나 종교적 축제에서 여성들이 손과 발에 헤나로 아름다운 문양을 그리는 전통입니다.',
        importance: '여성의 아름다움과 축복을 상징'
      },
      {
        name: '구전 역사 (Griot)',
        description: '그리오(음유시인)들이 부족의 역사와 전설을 노래와 이야기로 전승하는 전통입니다.',
        importance: '역사와 문화 보존의 핵심'
      },
      {
        name: '사막 생활 지혜',
        description: '유목민들이 사막에서 생존하기 위해 발달시킨 천문학, 기후 예측, 동물 사육 등의 지혜입니다.',
        importance: '자연과 조화로운 삶의 철학'
      }
    ],
    music: [
      {
        name: '티딘트 (Tidinit)',
        description: '4현의 전통 현악기로, 그리오들이 역사와 영웅담을 노래할 때 사용하는 대표적인 악기입니다.',
        importance: '구전문학의 동반자'
      },
      {
        name: '아르딘 (Ardine)',
        description: '여성들이 연주하는 하프 형태의 악기로, 섬세하고 아름다운 선율을 만들어냅니다.',
        importance: '여성의 예술적 표현'
      },
      {
        name: '무어 음악',
        description: '아랍과 베르베르 음악이 융합된 독특한 장르로, 복잡한 리듬과 선율이 특징입니다.',
        importance: '문화적 정체성의 표현'
      },
      {
        name: '전통무용',
        description: '부족별로 다양한 형태의 무용이 있으며, 종교적 의식이나 축제에서 공동체 결속을 위해 춤을 춥니다.',
        importance: '공동체 화합의 매개'
      }
    ],
    literature: [
      {
        name: '고전 아랍 시',
        description: '이슬람 문화의 영향으로 아랍 고전시가 발달했으며, 종교적 주제와 사막의 삶을 노래합니다.',
        importance: '종교적·문화적 정체성'
      },
      {
        name: '하산니야 구전시',
        description: '현지 방언인 하산니야로 전해지는 구전시로, 일상생활과 사랑, 영웅담을 다룹니다.',
        importance: '현지 언어와 문화 보존'
      },
      {
        name: '현대 문학',
        description: '독립 이후 프랑스어와 아랍어로 쓰인 현대 소설과 시가 발전하고 있습니다.',
        importance: '현대적 정체성 탐구'
      },
      {
        name: '속담과 격언',
        description: '사막 생활의 지혜와 철학이 담긴 풍부한 속담과 격언이 전해져 내려옵니다.',
        importance: '생활 지혜의 전수'
      }
    ],
    crafts: [
      {
        name: '은 세공',
        description: '정교한 은 장신구와 장식품을 만드는 전통 공예로, 베르베르족의 전통 기법이 사용됩니다.',
        importance: '베르베르 문화 유산'
      },
      {
        name: '가죽 공예',
        description: '양가죽과 염소가죽을 이용해 신발, 가방, 쿠션 등을 만드는 전통 기술입니다.',
        importance: '실용적 예술의 결합'
      },
      {
        name: '카펫 직조',
        description: '복잡한 기하학적 무늬의 카펫과 러그를 손으로 직조하는 전통 공예입니다.',
        importance: '여성의 예술적 기량'
      },
      {
        name: '도자기',
        description: '일상용품부터 장식용품까지 다양한 도자기를 만드는 전통이 있습니다.',
        importance: '생활 문화의 예술화'
      }
    ],
    cuisine: [
      {
        name: '티에부젠 (Thieboudienne)',
        description: '생선과 쌀을 야채와 함께 끓인 모리타니아의 대표 음식입니다.',
        importance: '국민 음식의 지위'
      },
      {
        name: '메쇠이 (Mechoui)',
        description: '양고기를 통째로 구워 특별한 날에 먹는 전통 요리입니다.',
        importance: '축제와 환대의 음식'
      },
      {
        name: '쿠스쿠스',
        description: '베르베르족의 전통 음식으로, 특별한 날에 가족들과 함께 나누어 먹습니다.',
        importance: '가족 공동체 문화'
      },
      {
        name: '낙타고기',
        description: '사막 지역의 전통 단백질 공급원으로, 특별한 조리법으로 요리됩니다.',
        importance: '사막 생활의 지혜'
      }
    ],
    festivals: [
      {
        name: '이드 알 피트르',
        description: '라마단 금식 후 맞이하는 가장 중요한 이슬람 축제로, 가족과 함께 축하합니다.',
        importance: '종교적 화합과 기쁨'
      },
      {
        name: '이드 알 아드하',
        description: '희생제로 불리는 이슬람 축제로, 동물을 희생하고 나누어 먹는 전통이 있습니다.',
        importance: '나눔과 자선의 정신'
      },
      {
        name: '독립기념일',
        description: '11월 28일 독립을 기념하는 국가 축제로, 전국에서 다양한 행사가 열립니다.',
        importance: '국가적 자긍심과 단합'
      },
      {
        name: '문화축제',
        description: '지역별로 열리는 전통문화 축제로, 음악과 무용, 시 낭송 등이 펼쳐집니다.',
        importance: '문화 유산의 계승'
      }
    ]
  }

  const mauritaniaMenuItems = [
    { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/mauritania/history' },
    { label: locale === 'ko' ? '지리' : locale === 'en' ? 'Geography' : locale === 'fr' ? 'Géographie' : 'الجغرافيا', href: '/mauritania/geography' },
    { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/mauritania/economy' },
    { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/mauritania/culture' },
    { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/mauritania/institutions' }
  ]

  const menuTitle = locale === 'ko' ? '모리타니아 정보' : locale === 'en' ? 'About Mauritania' : locale === 'fr' ? 'À propos de la Mauritanie' : 'حول موريتانيا'
  const pageTitle = locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={mauritaniaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/mauritania' }, { label: pageTitle }]}
    >
      {/* 문화 개요 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          문화적 배경
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            모리타니아의 문화는 아랍, 베르베르, 사하라 유목민, 그리고 서아프리카의
            다양한 전통이 융합되어 형성된 독특하고 풍부한 문화적 모자이크입니다.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            이슬람교가 주된 종교이면서도, 고대부터 전해져 내려오는 베르베르족의 전통과
            사하라 유목민의 생활 문화가 조화롭게 어우러져 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            특히 구전문학, 전통음악, 수공예 등의 분야에서 독창적인 예술 형태를 발전시켜 왔으며,
            이러한 문화유산들은 오늘날에도 현지인들의 일상생활 속에 살아 숨쉬고 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-theme-header/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">4개</div>
            <div className="text-gray-600">주요 민족 그룹</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-theme-nav/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">6개</div>
            <div className="text-gray-600">공용 언어</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-theme-header/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">1000년+</div>
            <div className="text-gray-600">문화 역사</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-theme-nav/10">
            <div className="text-3xl font-bold mb-2 text-theme-header">100%</div>
            <div className="text-gray-600">이슬람 인구</div>
          </div>
        </div>
      </section>

      {/* 문화 주제 선택 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          문화 주제별 탐방
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {culturalTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={cn(
                'p-6 rounded-lg border-2 text-left transition-all hover:shadow-md',
                selectedTopic === topic.id
                  ? 'border-theme-header bg-theme-header/10'
                  : 'border-gray-200 hover:border-gray-300'
              )}
            >
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-3">{topic.icon}</span>
                <h3 className={cn(
                  'font-bold text-lg',
                  selectedTopic === topic.id ? 'text-theme-header' : 'text-gray-700'
                )}>
                  {topic.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{topic.description}</p>
            </button>
          ))}
        </div>

        {/* 선택된 주제 상세 내용 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-theme-header">
            {culturalTopics.find(t => t.id === selectedTopic)?.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {traditions[selectedTopic as keyof typeof traditions]?.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <h4 className="font-bold text-lg text-gray-900 mb-3">
                  {item.name}
                </h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-theme-nav">
                  {item.importance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 언어와 문자 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          언어와 문자
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">공용어</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900">아랍어 (공식)</h4>
                <p className="text-sm text-gray-600 mt-1">정부, 교육, 종교 분야에서 사용</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 rounded-full bg-theme-header" style={{ width: '90%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">사용률 90%</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900">하산니야 아랍어</h4>
                <p className="text-sm text-gray-600 mt-1">일상 대화에서 널리 사용되는 방언</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 rounded-full bg-theme-nav" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">사용률 75%</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900">프랑스어</h4>
                <p className="text-sm text-gray-600 mt-1">비즈니스와 고등교육에서 사용</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="h-2 rounded-full bg-theme-header" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">사용률 45%</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">지역 언어</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">풀라어 (Pulaar)</span>
                <span className="text-sm font-medium">18%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">소닌케어 (Soninke)</span>
                <span className="text-sm font-medium">8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">울로프어 (Wolof)</span>
                <span className="text-sm font-medium">5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">베르베르어</span>
                <span className="text-sm font-medium">3%</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-3">문자 체계</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>아랍 문자 (우측에서 좌측으로 기록)</li>
                <li>라틴 문자 (프랑스어 표기용)</li>
                <li>티피나그 문자 (베르베르어 전통 문자)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 종교와 철학 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          종교와 철학
        </h2>

        <div className="space-y-6">
          <div className="bg-theme-header/10 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-theme-header">
              🕌 이슬람교 (99.9%)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">주요 특징</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 말리키 학파 (Maliki) 중심</li>
                  <li>• 수피 전통의 강한 영향</li>
                  <li>• 일상생활과 밀접한 종교 실천</li>
                  <li>• 관용적이고 평화로운 해석</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">종교 실천</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 하루 5번의 정기 기도</li>
                  <li>• 금요일 합동 예배</li>
                  <li>• 라마단 금식 엄격히 준수</li>
                  <li>• 자카트 (의무적 자선) 실천</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">📿 수피즘</h3>
              <p className="text-gray-700 text-sm mb-3">
                이슬람 신비주의인 수피즘이 강한 영향을 미치며,
                티자니야(Tijaniyya)와 카디리야(Qadiriyya) 교단이 주요합니다.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 영적 수행과 명상</li>
                <li>• 성인 숭배 전통</li>
                <li>• 종교 음악과 춤</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">🌟 생활 철학</h3>
              <p className="text-gray-700 text-sm mb-3">
                사막의 혹독한 환경에서 발달한 독특한 생활 철학과
                공동체 중심의 가치관이 특징입니다.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 인내와 절약의 미덕</li>
                <li>• 손님에 대한 환대</li>
                <li>• 자연과의 조화</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 추가 정보 박스 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 문화 유산 */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">
            주요 문화 유산
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <div className="font-medium text-gray-900">친기타 고고학 유적</div>
              <div className="text-gray-500">선사시대 암각화</div>
            </div>
            <div>
              <div className="font-medium text-gray-900">쿠마 살레 유적</div>
              <div className="text-gray-500">고대 가나 왕국 수도</div>
            </div>
            <div>
              <div className="font-medium text-gray-900">우알라타 고성</div>
              <div className="text-gray-500">중세 이슬람 도시</div>
            </div>
            <div>
              <div className="font-medium text-gray-900">반 다르궈인 국립공원</div>
              <div className="text-gray-500">자연과 문화의 조화</div>
            </div>
          </div>
        </div>

        {/* 민족 구성 */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">
            민족 구성
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">아랍-베르베르:</span>
              <span className="font-medium">30%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">하라틴:</span>
              <span className="font-medium">40%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">풀라:</span>
              <span className="font-medium">20%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">소닌케:</span>
              <span className="font-medium">8%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">기타:</span>
              <span className="font-medium">2%</span>
            </div>
          </div>
        </div>

        {/* 연중 축제 */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-bold mb-4 pb-2 border-b border-theme-header text-theme-header">
            연중 주요 축제
          </h3>
          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-theme-header/10">
              <div className="font-medium text-gray-900">이드 알 피트르</div>
              <div className="text-gray-600">라마단 후 축제 (음력)</div>
            </div>
            <div className="p-3 rounded-lg bg-theme-nav/10">
              <div className="font-medium text-gray-900">이드 알 아드하</div>
              <div className="text-gray-600">희생제 (음력)</div>
            </div>
            <div className="p-3 rounded-lg bg-theme-header/10">
              <div className="font-medium text-gray-900">독립기념일</div>
              <div className="text-gray-600">11월 28일</div>
            </div>
            <div className="p-3 rounded-lg bg-theme-nav/10">
              <div className="font-medium text-gray-900">국제문화축제</div>
              <div className="text-gray-600">12월</div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  )
}
