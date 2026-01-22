'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'
import TestEnCours from '@/components/TestEnCours'

// TODO: 실제 데이터 준비 후 TEST_MODE를 false로 변경
const TEST_MODE = true

export default function HistoryPage() {
  const { locale } = useI18n()

  const content = {
    ko: {
      title: '역사',
      sections: [
        {
          title: '고대 역사',
          content: '모리타니아 지역은 선사시대부터 사람들이 거주해 왔습니다. 사하라 사막의 암각화는 이 지역의 오랜 역사를 증명합니다.'
        },
        {
          title: '이슬람의 도래',
          content: '8세기경 이슬람이 이 지역에 전파되었으며, 이후 이슬람 문화가 모리타니아 사회의 근간이 되었습니다.'
        },
        {
          title: '무라비트 제국',
          content: '11세기 무라비트 제국이 이 지역에서 일어나 북아프리카와 이베리아 반도까지 영향력을 확장했습니다.'
        },
        {
          title: '프랑스 식민지 시대',
          content: '1903년 프랑스의 식민지가 되었으며, 프랑스령 서아프리카의 일부로 편입되었습니다.'
        },
        {
          title: '독립',
          content: '1960년 11월 28일 프랑스로부터 독립하여 모리타니아 이슬람 공화국이 수립되었습니다.'
        }
      ]
    },
    en: {
      title: 'History',
      sections: [
        {
          title: 'Ancient History',
          content: 'The Mauritania region has been inhabited since prehistoric times. Rock paintings in the Sahara Desert attest to the long history of this region.'
        },
        {
          title: 'Arrival of Islam',
          content: 'Islam spread to this region around the 8th century, and Islamic culture has since become the foundation of Mauritanian society.'
        },
        {
          title: 'Almoravid Empire',
          content: 'The Almoravid Empire arose from this region in the 11th century and extended its influence to North Africa and the Iberian Peninsula.'
        },
        {
          title: 'French Colonial Period',
          content: 'It became a French colony in 1903 and was incorporated as part of French West Africa.'
        },
        {
          title: 'Independence',
          content: 'On November 28, 1960, Mauritania gained independence from France and the Islamic Republic of Mauritania was established.'
        }
      ]
    },
    fr: {
      title: 'Histoire',
      sections: [
        {
          title: 'Histoire Ancienne',
          content: 'La région de Mauritanie est habitée depuis la préhistoire. Les peintures rupestres du désert du Sahara témoignent de la longue histoire de cette région.'
        },
        {
          title: 'Arrivée de l\'Islam',
          content: 'L\'Islam s\'est répandu dans cette région vers le 8ème siècle, et la culture islamique est depuis devenue le fondement de la société mauritanienne.'
        },
        {
          title: 'Empire Almoravide',
          content: 'L\'Empire Almoravide est né de cette région au 11ème siècle et a étendu son influence à l\'Afrique du Nord et à la péninsule ibérique.'
        },
        {
          title: 'Période Coloniale Française',
          content: 'Elle est devenue une colonie française en 1903 et a été incorporée à l\'Afrique occidentale française.'
        },
        {
          title: 'Indépendance',
          content: 'Le 28 novembre 1960, la Mauritanie a obtenu son indépendance de la France et la République islamique de Mauritanie a été établie.'
        }
      ]
    },
    ar: {
      title: 'التاريخ',
      sections: [
        {
          title: 'التاريخ القديم',
          content: 'سكنت منطقة موريتانيا منذ عصور ما قبل التاريخ. تشهد الرسوم الصخرية في الصحراء الكبرى على التاريخ الطويل لهذه المنطقة.'
        },
        {
          title: 'وصول الإسلام',
          content: 'انتشر الإسلام في هذه المنطقة حوالي القرن الثامن، وأصبحت الثقافة الإسلامية منذ ذلك الحين أساس المجتمع الموريتاني.'
        },
        {
          title: 'إمبراطورية المرابطين',
          content: 'نشأت إمبراطورية المرابطين من هذه المنطقة في القرن الحادي عشر ووسعت نفوذها إلى شمال أفريقيا وشبه الجزيرة الإيبيرية.'
        },
        {
          title: 'فترة الاستعمار الفرنسي',
          content: 'أصبحت مستعمرة فرنسية في عام 1903 وتم ضمها كجزء من غرب أفريقيا الفرنسية.'
        },
        {
          title: 'الاستقلال',
          content: 'في 28 نوفمبر 1960، حصلت موريتانيا على استقلالها من فرنسا وتأسست الجمهورية الإسلامية الموريتانية.'
        }
      ]
    }
  }

  const c = content[locale as keyof typeof content] || content.ko

  const mauritaniaMenuItems = [
    { label: locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ', href: '/mauritania/history' },
    { label: locale === 'ko' ? '지리' : locale === 'en' ? 'Geography' : locale === 'fr' ? 'Géographie' : 'الجغرافيا', href: '/mauritania/geography' },
    { label: locale === 'ko' ? '경제' : locale === 'en' ? 'Economy' : locale === 'fr' ? 'Économie' : 'الاقتصاد', href: '/mauritania/economy' },
    { label: locale === 'ko' ? '문화' : locale === 'en' ? 'Culture' : locale === 'fr' ? 'Culture' : 'الثقافة', href: '/mauritania/culture' },
    { label: locale === 'ko' ? '헌법기관' : locale === 'en' ? 'Constitutional Institutions' : locale === 'fr' ? 'Institutions constitutionnelles' : 'المؤسسات الدستورية', href: '/mauritania/institutions' }
  ]

  const menuTitle = locale === 'ko' ? '모리타니아 정보' : locale === 'en' ? 'About Mauritania' : locale === 'fr' ? 'À propos de la Mauritanie' : 'حول موريتانيا'
  const pageTitle = locale === 'ko' ? '역사' : locale === 'en' ? 'History' : locale === 'fr' ? 'Histoire' : 'التاريخ'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={mauritaniaMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[{ label: menuTitle, href: '/mauritania' }, { label: pageTitle }]}
    >
      {TEST_MODE ? <TestEnCours /> : <>
      {/* ===== 기존 내용 (백업용 - false를 true로 바꾸면 표시됨) ===== */}
      {false && (<>
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">{c.title}</h2>
        <div className="space-y-6">
          {c.sections.map((section, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 bg-theme-header">
                {index + 1}
              </div>
              <div className="flex-1 bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-gray-700 leading-relaxed text-[15px]">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '주요 역사적 사건' : locale === 'en' ? 'Key Historical Events' : locale === 'fr' ? 'Événements historiques clés' : 'الأحداث التاريخية الرئيسية'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[15px]">
          <div className="bg-theme-header/10 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-1 text-theme-header">8세기</div>
            <div className="text-gray-700">이슬람 전파</div>
          </div>
          <div className="bg-theme-nav/10 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-1 text-theme-header">11세기</div>
            <div className="text-gray-700">무라비트 제국 건설</div>
          </div>
          <div className="bg-theme-header/10 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-1 text-theme-header">1903년</div>
            <div className="text-gray-700">프랑스 식민지화</div>
          </div>
          <div className="bg-theme-nav/10 p-4 rounded-lg">
            <div className="text-2xl font-bold mb-1 text-theme-header">1960년</div>
            <div className="text-gray-700">독립 선언</div>
          </div>
        </div>
      </section>
      </>)}
      {/* ===== 기존 내용 끝 ===== */}

      {/* 역사적 배경 - 참고 사이트 스타일 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '역사적 배경' : locale === 'en' ? 'Historic Background' : locale === 'fr' ? 'Contexte historique' : 'الخلفية التاريخية'}
        </h2>

        {/* 메인 이미지와 소개 텍스트 */}
        <div className="mb-8 overflow-hidden">
          <img
            src="/images/unesco/chinguetti.jpg"
            alt="Mauritania Historic"
            className="float-right ml-6 mb-4 w-72 h-52 object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '사하라 사막이 건조해지기 전, 오늘날의 모리타니아에는 공통된 언어적, 사회문화적 배경을 가진 함-지중해 계통의 민족 집단이 거주했습니다. 그들과 끊임없는 충돌을 벌였던 그리스-로마 동시대인들은 그들을 "이방인"을 의미하는 베르베르인이라고 불렀습니다.'
              : locale === 'en'
              ? 'Before the drying up of the Sahara, today Mauritania was habited by human groupings of Hamito-Mediterranean stock that had a common linguistic and socio-cultural background. The Greco-Roman contemporaries, with whom they used to have endless clashes, called them Berbers which meant the aliens.'
              : locale === 'fr'
              ? 'Avant l\'assèchement du Sahara, la Mauritanie actuelle était habitée par des groupes humains d\'origine hamito-méditerranéenne ayant un fond linguistique et socioculturel commun. Les contemporains gréco-romains les appelaient Berbères, ce qui signifiait les étrangers.'
              : 'قبل جفاف الصحراء الكبرى، كانت موريتانيا الحالية مأهولة بمجموعات بشرية من أصل حامي-متوسطي لها خلفية لغوية واجتماعية وثقافية مشتركة.'}
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '또한 흑인 인종에 속하는 다른 주민들도 있었습니다: 그 중에는 북부 오아시스의 첫 번째 주민인 바푸르인, 제3천년기 동안 상류 나일강에서 온 소 사육 유목민 풀족, 그리고 나중에 현재 모리타니아 남동부 전체에 걸쳐 강력한 가나 제국을 건설한 소닌케족이 있었습니다.'
              : locale === 'en'
              ? 'There were also other habitants belonging to the black race: among these there were the Bafours whom were the first habitants of the oases in the Northern part of the country, the Peuhls, cow-breeding nomads whom came from the upper-Nile sometimes during the 3rd millennium and finally the Soninke, the founders in a later period of the mighty Ghana Empire which stretched over the entire south-eastern part of the present Mauritania.'
              : locale === 'fr'
              ? 'Il y avait aussi d\'autres habitants appartenant à la race noire: parmi eux, les Bafours, premiers habitants des oasis du nord du pays, les Peuls, nomades éleveurs de vaches, et enfin les Soninké, fondateurs du puissant Empire du Ghana.'
              : 'كان هناك أيضًا سكان آخرون ينتمون إلى العرق الأسود: من بينهم البافور الذين كانوا أول سكان الواحات في الجزء الشمالي من البلاد، والفلان، والسونينكي مؤسسو إمبراطورية غانا.'}
          </p>
          <div className="clear-both"></div>
        </div>

        {/* 낙타와 무역 */}
        <div className="mb-8 overflow-hidden">
          <img
            src="/images/unesco/ouadane.jpg"
            alt="Mauritania Trade Routes"
            className="float-right ml-6 mb-4 w-64 h-44 object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '기원전 2천년경 북아프리카에 낙타가 도입되면서 북부와 사헬 지역 간의 무역과 사회문화적 교류가 발전했습니다. 이 사막의 혹독한 조건에 특히 적합한 교통수단 덕분에, 베르베르 기원의 산하자 부족은 점차 남쪽으로 세력을 확장하여 가나 제국의 국경까지 진출했습니다.'
              : locale === 'en'
              ? 'The introduction into North Africa of the camel as far back as the 2nd millennium had led to the development of trade and socio-cultural exchanges between the Northern and the Sahelian parts of Africa. Owing to this animal which constituted a mean of transportation particularly suitable to the hard condition of the desert, the Sanhaja tribes of Berber origin had managed to progressively spread out southward as far as the borders of the Ghana Empire.'
              : locale === 'fr'
              ? 'L\'introduction du chameau en Afrique du Nord dès le 2e millénaire a conduit au développement du commerce et des échanges socioculturels entre les parties nord et sahélienne de l\'Afrique.'
              : 'أدى إدخال الجمل إلى شمال أفريقيا منذ الألفية الثانية إلى تطور التجارة والتبادلات الاجتماعية والثقافية بين المناطق الشمالية والساحلية من أفريقيا.'}
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed">
            {locale === 'ko'
              ? '11세기에 베르베르 설교자 압둘라 이븐 야신의 지도 아래 모리타니아 해안에서 발전한 무라비트 정치종교 운동은 남쪽의 가나 제국뿐만 아니라 북쪽의 모로코 왕국과 이슬람 스페인에도 엄청난 영향을 미쳤습니다.'
              : locale === 'en'
              ? 'The political and religious movement Al Moravid which developed in the XIth century on the Mauritanian shores under the leadership of the Berber preacher Abdullah Ibn Yacine, had tremendous impact on the empire of Ghana in the South as well as on the kingdom of Morocco and on Moslem Spain in the North.'
              : locale === 'fr'
              ? 'Le mouvement politico-religieux Almoravide qui s\'est développé au XIe siècle sur les côtes mauritaniennes sous la direction du prédicateur berbère Abdullah Ibn Yacine, a eu un impact considérable sur l\'empire du Ghana ainsi que sur le Maroc et l\'Espagne musulmane.'
              : 'كان للحركة السياسية والدينية المرابطية التي تطورت في القرن الحادي عشر تأثير هائل على إمبراطورية غانا في الجنوب وكذلك على مملكة المغرب وإسبانيا الإسلامية في الشمال.'}
          </p>
          <div className="clear-both"></div>
        </div>

        {/* 주요 역사적 연표 */}
        <h3 className="text-lg font-bold text-theme-header mb-4 mt-8">
          {locale === 'ko' ? '주요 역사적 연표' : locale === 'en' ? 'Other Historical Dates' : locale === 'fr' ? 'Autres dates historiques' : 'تواريخ تاريخية أخرى'}
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800 text-[15px] mb-8 ml-4">
          <li>{locale === 'ko' ? '1855년: 식민지화 시작, 문화적 거부와 무장 저항 운동으로 이어짐' : '1855: Start of colonization which led to cultural rejection and armed resistance'}</li>
          <li>{locale === 'ko' ? '1903년: 모리타니아가 "무어인 보호령"으로 불리게 됨' : '1903: Mauritania called "Protectorat des pays maure"'}</li>
          <li>{locale === 'ko' ? '1904년: 모리타니아가 시민 행정 지역이 됨' : '1904: Mauritania became civil territory'}</li>
          <li>{locale === 'ko' ? '1920년: 프랑스 식민지로 선언' : '1920: Mauritania declared French colony'}</li>
          <li>{locale === 'ko' ? '1934년: 무장 저항 운동 종결' : '1934: End of the armed resistance'}</li>
          <li>{locale === 'ko' ? '1958년: 모리타니아 이슬람 공화국이 내부 자치권 획득' : '1958: The Islamic Republic of Mauritania gained intern autonomy'}</li>
          <li><strong>{locale === 'ko' ? '1960년 11월 28일: 프랑스로부터 완전한 국가 독립 획득' : '1960, November 28th: Mauritania obtains full National Independence from France'}</strong></li>
        </ul>

        {/* 행정 구역 */}
        <p className="text-gray-800 text-[15px] leading-relaxed mb-8">
          {locale === 'ko'
            ? '행정적으로 모리타니아는 13개 지역(wilaya)과 53개 행정구(moughataa)로 구성되어 있습니다.'
            : locale === 'en'
            ? 'Administratively, Mauritania is organized into 13 regions (wilayas) and 53 departments (moughataas).'
            : locale === 'fr'
            ? 'Administrativement, la Mauritanie est organisée en 13 régions (wilayas) et 53 départements (moughataas).'
            : 'إداريًا، تنقسم موريتانيا إلى 13 ولاية و53 مقاطعة.'}
        </p>
      </section>

      {/* UNESCO 세계유산 고대 도시 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '고대 도시 (UNESCO 세계유산)' : locale === 'en' ? 'Ancient Cities (UNESCO World Heritage)' : locale === 'fr' ? 'Villes anciennes (UNESCO)' : 'المدن القديمة (التراث العالمي)'}
        </h2>

        {/* 소개 텍스트 */}
        <p className="text-gray-700 mb-8 text-[15px] leading-relaxed">
          {locale === 'ko'
            ? '4개의 고대 도시가 유네스코 세계유산으로 등재되어 있습니다. 수백 년의 긴 세월을 거쳐 독특한 개성을 가꿔온 문명의 원천 모리타니아는, 마그레브, 아프리카, 유럽, 중동 문명의 교차점으로서도 중요한 역할을 해왔습니다.'
            : locale === 'en'
            ? '4 ancient cities are registered as UNESCO World Heritage Sites. Through hundreds of years, Mauritania, the source of civilization that has cultivated its unique character, has also played an important role as the crossroads of Maghreb, Africa, Europe, and Middle East civilizations.'
            : locale === 'fr'
            ? '4 villes anciennes sont inscrites au patrimoine mondial de l\'UNESCO. La Mauritanie a joué un rôle important en tant que carrefour des civilisations.'
            : 'تم تسجيل 4 مدن قديمة كمواقع للتراث العالمي لليونسكو.'}
        </p>

        {/* 우아단 (Ouadane) */}
        <div className="mb-8 overflow-hidden">
          <img
            src="/images/unesco/ouadane.jpg"
            alt="Ouadane"
            className="float-right ml-6 mb-4 w-64 h-44 object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-800 text-[15px] leading-relaxed">
            <strong className="text-theme-header text-base">
              {locale === 'ko' ? '우아단 (Ouadane)' : 'Ouadane'}
            </strong>
            {locale === 'ko'
              ? ' : 히즈라 6세기(기원 12세기)에 사막 캐러밴의 주요 도시로 발견되어, 사하라를 횡단하는 캐러밴에게 중요한 이정표가 되었습니다. 집약적인 문화 및 경제 활동으로 알려져 있습니다.'
              : ' : Founded in the 6th century Hijra (12th century AD) as a major city for desert caravans, it became an important landmark for caravans crossing the Sahara. It is known for its intensive cultural and economic activities.'}
          </p>
          <div className="clear-both"></div>
        </div>

        {/* 싱게티 (Chinguetti) */}
        <div className="mb-8 overflow-hidden">
          <img
            src="/images/unesco/chinguetti.jpg"
            alt="Chinguetti"
            className="float-right ml-6 mb-4 w-64 h-44 object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-800 text-[15px] leading-relaxed">
            <strong className="text-theme-header text-base">
              {locale === 'ko' ? '싱게티 (Chinguetti)' : 'Chinguetti'}
            </strong>
            {locale === 'ko'
              ? ' : 이슬람의 7번째 성지로서 히즈라 660년(기원 13세기)에 발견되어, 캐러밴의 중계지이자 교육의 중심지로 발전합니다. 필사본, 사막의 도서관, 이슬람 사원 탑과 같은 문화 시설로 인해 그 영향력은 모리타니아 구석구석까지 미쳤습니다. 참고로 모리타니아는 옛날에는 "싱게티의 나라"로 불렸을 정도입니다.'
              : ' : As the 7th holy city of Islam, founded in Hijra 660 (13th century AD), it developed as a relay point for caravans and a center of education. Mauritania was once called "Bilad Chinguetti" (Land of Chinguetti).'}
          </p>
          <div className="clear-both"></div>
        </div>

        {/* 티시트 (Tichitt) */}
        <div className="mb-8 overflow-hidden">
          <img
            src="/images/unesco/tichitt.jpg"
            alt="Tichitt"
            className="float-right ml-6 mb-4 w-64 h-44 object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-800 text-[15px] leading-relaxed">
            <strong className="text-theme-header text-base">
              {locale === 'ko' ? '티시트 (Tichitt)' : 'Tichitt'}
            </strong>
            {locale === 'ko'
              ? ' : 사막의 진주라고 불립니다. 히즈라 6세기(기원 12세기)에 발견되었습니다. 오랜 세월 동안 북서 아프리카에서 가장 아름다운 중세 도시 중 하나로 손꼽혀 왔습니다.'
              : " : Called the 'Pearl of the Desert'. Founded in the 6th century Hijra (12th century AD). For a long time, it has been counted as one of the most beautiful medieval cities in Northwest Africa."}
          </p>
          <div className="clear-both"></div>
        </div>

        {/* 우알라타 (Oualata) */}
        <div className="mb-4 overflow-hidden">
          <img
            src="/images/unesco/oualata.jpg"
            alt="Oualata"
            className="float-right ml-6 mb-4 w-64 h-44 object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-800 text-[15px] leading-relaxed">
            <strong className="text-theme-header text-base">
              {locale === 'ko' ? '우알라타 (Oualata)' : 'Oualata'}
            </strong>
            {locale === 'ko'
              ? ' : 히즈라 5세기(기원 11세기)에 다른 도시들과 마찬가지로, 수단에서 마그레브에 이르는 사막 캐러밴의 중요한 거점이었습니다. 독특한 디자인과 장식으로 유명합니다. 모리타니아에서 가장 오래된 이슬람 사원이 있습니다.'
              : ' : In the 5th century Hijra (11th century AD), it was an important base for desert caravans from Sudan to the Maghreb. It is famous for its unique design and decoration. It has the oldest Islamic mosque in Mauritania.'}
          </p>
          <div className="clear-both"></div>
        </div>
      </section>

      {/* ===== 역사적 중요성 (백업용) ===== */}
      {false && (
      <section className="bg-theme-header/10 border border-theme-header/30 rounded-lg p-6">
        <h2 className="text-lg font-bold text-theme-header mb-4">
          {locale === 'ko' ? '📜 역사적 중요성' : locale === 'en' ? '📜 Historical Significance' : locale === 'fr' ? '📜 Importance historique' : '📜 الأهمية التاريخية'}
        </h2>
        <div className="text-gray-700 space-y-2 text-[15px]">
          <p>• {locale === 'ko' ? '사하라 횡단 교역로의 중심지였습니다' : 'A center of trans-Saharan trade routes'}</p>
          <p>• {locale === 'ko' ? '이슬람 학문과 문화의 중요한 거점이었습니다' : 'An important center of Islamic scholarship and culture'}</p>
          <p>• {locale === 'ko' ? '아프리카와 아랍 세계를 연결하는 가교 역할을 했습니다' : 'Served as a bridge between Africa and the Arab world'}</p>
          <p>• {locale === 'ko' ? '4개의 고대 도시가 UNESCO 세계유산으로 등재되어 있습니다' : '4 ancient cities are classified as UNESCO World Heritage sites'}</p>
        </div>
      </section>
      )}
    </>}

    </SubPageLayout>
  )
}
