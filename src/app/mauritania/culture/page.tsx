'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function MauritaniaCulturePage() {
  const { locale } = useI18n()

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
      {/* ===== 기존 내용 (백업용 - false를 true로 바꾸면 표시됨) ===== */}
      {false && (<>
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
      </>)}
      {/* ===== 기존 내용 끝 ===== */}

      {/* 사막의 도서관과 마드라사 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          📚 사막의 도서관과 마드라사
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            모리타니아는 북아프리카와 사하라 이남 국가들 사이의 문화적 교차로입니다.
            UNESCO 세계유산으로 등재된 4개의 고대 도시는 위대하고 풍요로운 문명의 유산을 간직하고 있습니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            이 도시들은 지역 간의 다리 역할을 하며 경제적·문화적 활동의 발전에 기여했습니다.
            오늘날 이 4개 도시는 국내 최고의 관광지입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-theme-header/10 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-theme-header">
              🕌 전통 건축
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• 매력적이고 독특한 건축 양식 (모스크, 주택)</li>
              <li>• 중세 이슬람 도시의 원형이 보존됨</li>
              <li>• 사막 환경에 적응한 건축 기법</li>
            </ul>
          </div>

          <div className="bg-theme-nav/10 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-theme-header">
              📖 마드라사 (이동 대학)
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• "사막의 대학" 또는 "이동 대학"으로 불림</li>
              <li>• 이슬람 세계의 학문 중심지 역할</li>
              <li>• 종교, 법학, 문학 등 다양한 분야 교육</li>
            </ul>
          </div>

          <div className="bg-theme-nav/10 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-theme-header">
              📜 고대 도서관
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• 이슬람 세계에서 가장 인상적인 필사본 소장</li>
              <li>• 거의 모든 지식 분야를 다루는 문헌</li>
              <li>• 최근 20년간 100개 이상의 도서관 건립</li>
            </ul>
          </div>

          <div className="bg-theme-header/10 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-theme-header">
              🎭 남부 문화
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• 풍부한 민속 문화 (음악, 구전 문학)</li>
              <li>• 다양한 민족 그룹의 전통 보존</li>
              <li>• 문맹 퇴치와 교육 진흥 정책 추진</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 카라반 무역 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '카라반 무역' : locale === 'en' ? 'Caravan Trade' : locale === 'fr' ? 'Commerce de Caravanes' : 'تجارة القوافل'}
        </h2>

        <div className="mb-8 overflow-hidden">
          <img
            src="/images/unesco/chinguetti.jpg"
            alt="Caravan route"
            className="float-right ml-6 mb-4 w-80 h-56 object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '카라반(대상)은 낙타를 이용해 상품을 운송하는 모리타니아의 오랜 전통입니다. 사하라 사막 지역에서 카라반은 오래전부터 잘 알려진 교통수단으로, 교역로를 통해 다양한 물자를 운반해 왔습니다.'
              : locale === 'en'
              ? 'Caravan is the transport of goods using camels. Caravan is well known in the Sahara region since a long time ago. It has been used to transport various goods through trade routes.'
              : locale === 'fr'
              ? "La caravane est le transport de marchandises à dos de chameaux. La caravane est bien connue dans la région du Sahara depuis longtemps. Elle a été utilisée pour transporter diverses marchandises via les routes commerciales."
              : 'القافلة هي نقل البضائع باستخدام الجمال. القافلة معروفة جيداً في منطقة الصحراء منذ زمن طويل.'
            }
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '역사적으로 카라반은 사하라 이남 아프리카와 지중해 연안을 연결하는 무역의 핵심이었습니다. 금, 소금, 상아, 직물 등 다양한 상품이 이 루트를 통해 거래되었고, 이는 모리타니아 경제와 문화 발전에 크게 기여했습니다.'
              : locale === 'en'
              ? 'Historically, caravans were the backbone of trade connecting Sub-Saharan Africa with the Mediterranean coast. Gold, salt, ivory, and textiles were traded through these routes, significantly contributing to Mauritania\'s economic and cultural development.'
              : locale === 'fr'
              ? "Historiquement, les caravanes étaient l'épine dorsale du commerce reliant l'Afrique subsaharienne à la côte méditerranéenne. L'or, le sel, l'ivoire et les textiles étaient échangés via ces routes."
              : 'تاريخياً، كانت القوافل العمود الفقري للتجارة التي تربط أفريقيا جنوب الصحراء بساحل البحر الأبيض المتوسط.'
            }
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed">
            {locale === 'ko'
              ? '오늘날에도 일부 지역에서는 전통적인 카라반 방식이 유지되고 있으며, 이는 관광 명소로도 인기가 있습니다. 카라반 문화는 모리타니아의 정체성과 역사를 이해하는 데 중요한 요소입니다.'
              : locale === 'en'
              ? 'Today, traditional caravan methods are still maintained in some areas, and they are popular as tourist attractions. Caravan culture is an important element in understanding Mauritania\'s identity and history.'
              : locale === 'fr'
              ? "Aujourd'hui, les méthodes traditionnelles de caravane sont encore maintenues dans certaines régions et sont populaires comme attractions touristiques."
              : 'اليوم، لا تزال الطرق التقليدية للقوافل محفوظة في بعض المناطق، وهي شعبية كمعالم سياحية.'
            }
          </p>
          <div className="clear-both"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <h3 className="font-bold text-lg mb-2 text-amber-800">
              {locale === 'ko' ? '주요 교역품' : 'Main Trade Goods'}
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• {locale === 'ko' ? '금 (사하라 이남에서)' : 'Gold (from Sub-Saharan)'}</li>
              <li>• {locale === 'ko' ? '소금 (사하라에서)' : 'Salt (from Sahara)'}</li>
              <li>• {locale === 'ko' ? '상아, 향신료' : 'Ivory, Spices'}</li>
              <li>• {locale === 'ko' ? '직물, 가죽 제품' : 'Textiles, Leather goods'}</li>
            </ul>
          </div>
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <h3 className="font-bold text-lg mb-2 text-amber-800">
              {locale === 'ko' ? '주요 경유 도시' : 'Major Transit Cities'}
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• {locale === 'ko' ? '쉥게티 (Chinguetti)' : 'Chinguetti'}</li>
              <li>• {locale === 'ko' ? '우아단 (Ouadane)' : 'Ouadane'}</li>
              <li>• {locale === 'ko' ? '아타르 (Atar)' : 'Atar'}</li>
              <li>• {locale === 'ko' ? '누악쇼트 (Nouakchott)' : 'Nouakchott'}</li>
            </ul>
          </div>
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <h3 className="font-bold text-lg mb-2 text-amber-800">
              {locale === 'ko' ? '문화적 영향' : 'Cultural Impact'}
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• {locale === 'ko' ? '이슬람 문화 전파' : 'Spread of Islamic culture'}</li>
              <li>• {locale === 'ko' ? '도서관과 학문 발전' : 'Libraries & scholarship'}</li>
              <li>• {locale === 'ko' ? '다민족 교류 촉진' : 'Multi-ethnic exchange'}</li>
              <li>• {locale === 'ko' ? '도시 발전의 기반' : 'Foundation for urban growth'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 예술과 공예 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '예술과 공예' : locale === 'en' ? 'Art and Craft' : locale === 'fr' ? 'Art et Artisanat' : 'الفن والحرف'}
        </h2>

        <div className="mb-8 overflow-hidden">
          <img
            src="/images/unesco/oualata.jpg"
            alt="Mauritanian art"
            className="float-right ml-6 mb-4 w-80 h-56 object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '벽 장식, 헤나, 민속 음악, 수공예품 및 유물 등 모리타니아의 예술과 공예는 일상생활에 깊이 스며들어 있습니다. 특히 우알라타(Oualata)의 전통 벽화 장식은 여성들이 수세기 동안 발전시켜 온 독특한 예술 형태입니다.'
              : locale === 'en'
              ? 'Wall decoration, henna, folk music, handicrafts and artifacts are very present in Mauritanian daily life. The traditional wall decoration of Oualata in particular is a unique art form developed by women over centuries.'
              : locale === 'fr'
              ? "La décoration murale, le henné, la musique folklorique, l'artisanat et les artefacts sont très présents dans la vie quotidienne mauritanienne."
              : 'الزخرفة الجدارية والحناء والموسيقى الشعبية والحرف اليدوية موجودة بشكل كبير في الحياة اليومية الموريتانية.'
            }
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '붉은색과 흰색의 기하학적 문양으로 장식된 건물들은 세계문화유산으로 인정받은 예술적 가치를 지닙니다. 이 전통은 어머니에서 딸로 전해지며 모리타니아 여성 문화의 중요한 부분을 차지합니다.'
              : locale === 'en'
              ? 'Buildings decorated with red and white geometric patterns have artistic value recognized as World Cultural Heritage. This tradition is passed from mother to daughter and represents an important part of Mauritanian women\'s culture.'
              : locale === 'fr'
              ? "Les bâtiments décorés de motifs géométriques rouges et blancs ont une valeur artistique reconnue comme patrimoine culturel mondial."
              : 'المباني المزينة بأنماط هندسية حمراء وبيضاء لها قيمة فنية معترف بها كتراث ثقافي عالمي.'
            }
          </p>
          <div className="clear-both"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
            <h3 className="font-bold text-lg mb-3 text-rose-800">
              {locale === 'ko' ? '벽화 장식' : 'Wall Decoration'}
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              {locale === 'ko'
                ? '우알라타의 독특한 벽화 예술은 기하학적 문양과 상징적 디자인을 결합합니다.'
                : 'Oualata\'s unique mural art combines geometric patterns with symbolic designs.'
              }
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {locale === 'ko' ? '붉은색, 흰색, 검은색 사용' : 'Red, white, and black colors'}</li>
              <li>• {locale === 'ko' ? '기하학적 문양과 자연 모티프' : 'Geometric patterns and natural motifs'}</li>
              <li>• {locale === 'ko' ? '여성들의 전승 예술' : 'Women\'s inherited art form'}</li>
            </ul>
          </div>

          <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
            <h3 className="font-bold text-lg mb-3 text-rose-800">
              {locale === 'ko' ? '헤나 예술' : 'Henna Art'}
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              {locale === 'ko'
                ? '결혼식과 축제에서 여성들의 손과 발을 아름답게 장식하는 전통입니다.'
                : 'A tradition of beautifully decorating women\'s hands and feet during weddings and festivals.'
              }
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {locale === 'ko' ? '복잡한 기하학적 패턴' : 'Complex geometric patterns'}</li>
              <li>• {locale === 'ko' ? '자연 염료 사용' : 'Natural dyes used'}</li>
              <li>• {locale === 'ko' ? '축복과 아름다움의 상징' : 'Symbol of blessing and beauty'}</li>
            </ul>
          </div>

          <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
            <h3 className="font-bold text-lg mb-3 text-rose-800">
              {locale === 'ko' ? '민속 음악' : 'Folk Music'}
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              {locale === 'ko'
                ? '그리오(음유시인)가 전통 악기로 연주하며 역사와 영웅담을 노래합니다.'
                : 'Griots (troubadours) perform with traditional instruments, singing of history and heroic tales.'
              }
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {locale === 'ko' ? '티딘트 (4현 악기)' : 'Tidinit (4-string instrument)'}</li>
              <li>• {locale === 'ko' ? '아르딘 (여성용 하프)' : 'Ardine (women\'s harp)'}</li>
              <li>• {locale === 'ko' ? '구전 역사의 전승' : 'Oral history transmission'}</li>
            </ul>
          </div>

          <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
            <h3 className="font-bold text-lg mb-3 text-rose-800">
              {locale === 'ko' ? '전통 수공예' : 'Traditional Handicrafts'}
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              {locale === 'ko'
                ? '은세공, 가죽공예, 직물 등 사막 생활에서 발전한 정교한 공예품들입니다.'
                : 'Silverwork, leathercraft, textiles - refined crafts developed from desert life.'
              }
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {locale === 'ko' ? '은 장신구와 장식품' : 'Silver jewelry and ornaments'}</li>
              <li>• {locale === 'ko' ? '가죽 가방, 신발, 쿠션' : 'Leather bags, shoes, cushions'}</li>
              <li>• {locale === 'ko' ? '전통 텐트 직물' : 'Traditional tent fabrics'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 축제와 행사 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '축제와 행사' : locale === 'en' ? 'Festivals and Events' : locale === 'fr' ? 'Festivals et Événements' : 'المهرجانات والفعاليات'}
        </h2>

        <div className="mb-8 overflow-hidden">
          <img
            src="/images/unesco/tichitt.jpg"
            alt="Mauritanian festival"
            className="float-right ml-6 mb-4 w-80 h-56 object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '모리타니아에서는 다양한 관광 행사, 계절 행사, 연례 행사가 열립니다. 사하라 도전(Challenge of the Sahara), 누아디부 요트 경주, 메하레(낙타 타기), 누악쇼트 국제 마라톤 등의 관광 이벤트가 유명합니다.'
              : locale === 'en'
              ? 'Mauritania hosts various tourist events, seasonal events, and annual events. Tourist events include Challenge of the Sahara, Race of Sailing boats in Nouadhibou, Meharee (camel riding), and Nouakchott International Marathon.'
              : locale === 'fr'
              ? "La Mauritanie accueille divers événements touristiques, saisonniers et annuels. Les événements touristiques comprennent le Défi du Sahara et le Marathon International de Nouakchott."
              : 'تستضيف موريتانيا العديد من الفعاليات السياحية والموسمية والسنوية.'
            }
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed">
            {locale === 'ko'
              ? '문화 카라반(Cultural Caravans)과 같은 계절 행사, 민속 음악 국가 축제, 유목민 음악 축제, 게트나(대추 수확 축제) 등의 연례 행사도 모리타니아 문화의 중요한 부분입니다.'
              : locale === 'en'
              ? 'Seasonal events like Cultural Caravans, and annual events such as National Festival of Folk Music, Festival of Nomads Music, and Guetna (Dates harvest festival) are important parts of Mauritanian culture.'
              : locale === 'fr'
              ? "Les événements saisonniers comme les Caravanes Culturelles et les événements annuels tels que le Festival National de Musique Folklorique sont des parties importantes de la culture mauritanienne."
              : 'الأحداث الموسمية مثل القوافل الثقافية والأحداث السنوية مثل المهرجان الوطني للموسيقى الشعبية هي أجزاء مهمة من الثقافة الموريتانية.'
            }
          </p>
          <div className="clear-both"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200">
            <h3 className="font-bold text-lg mb-3 text-indigo-800">
              {locale === 'ko' ? '관광 이벤트' : 'Tourist Events'}
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• {locale === 'ko' ? '사하라 도전 (Challenge of the Sahara)' : 'Challenge of the Sahara'}</li>
              <li>• {locale === 'ko' ? '누아디부 요트 경주' : 'Race of Sailing boats in Nouadhibou'}</li>
              <li>• {locale === 'ko' ? '메하레 (낙타 타기)' : 'Meharee (Camel riding)'}</li>
              <li>• {locale === 'ko' ? '누악쇼트 국제 마라톤' : 'Nouakchott International Marathon'}</li>
            </ul>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200">
            <h3 className="font-bold text-lg mb-3 text-indigo-800">
              {locale === 'ko' ? '연례 행사' : 'Annual Events'}
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• {locale === 'ko' ? '민속 음악 국가 축제' : 'National Festival of Folk Music'}</li>
              <li>• {locale === 'ko' ? '유목민 음악 축제' : 'Festival of Nomads Music'}</li>
              <li>• {locale === 'ko' ? '게트나 (대추 수확 축제)' : 'Guetna (Dates harvest festival)'}</li>
              <li>• {locale === 'ko' ? '문화 카라반' : 'Cultural Caravans'}</li>
            </ul>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200">
            <h3 className="font-bold text-lg mb-3 text-indigo-800">
              {locale === 'ko' ? '스포츠 활동' : 'Sports Activities'}
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• {locale === 'ko' ? '낙타 경주' : 'Camel Race'}</li>
              <li>• {locale === 'ko' ? '말 경주' : 'Horse Race'}</li>
              <li>• {locale === 'ko' ? '축구, 농구' : 'Soccer, Basketball'}</li>
              <li>• {locale === 'ko' ? '전통 레슬링' : 'Traditional Wrestling'}</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-4 text-theme-header">
            {locale === 'ko' ? '누악쇼트 관광 명소' : 'Tourist Spots in Nouakchott'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-2">🏛️</div>
              <div className="font-medium text-gray-900">{locale === 'ko' ? '국립박물관' : 'National Museum'}</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-2">🐟</div>
              <div className="font-medium text-gray-900">{locale === 'ko' ? '어부의 해변' : "Fishermen's Beach"}</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-2">🛒</div>
              <div className="font-medium text-gray-900">{locale === 'ko' ? '전통 시장' : 'Traditional Markets'}</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-2">🏪</div>
              <div className="font-medium text-gray-900">{locale === 'ko' ? '무역 박람회장' : 'Trade Fair'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 종교/철학/추가정보 (백업용) ===== */}
      {false && (<>
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
      </>)}
      {/* ===== 백업 끝 ===== */}
    </SubPageLayout>
  )
}
