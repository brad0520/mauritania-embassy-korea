'use client'

import React from 'react'
import Image from 'next/image'
import { useI18n } from '@/i18n/context'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function MauritaniaEconomyPage() {
  const { locale } = useI18n()

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
      {/* 경제 개요 (Outline) */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '경제 개요' : locale === 'en' ? 'Economic Overview' : locale === 'fr' ? 'Aperçu économique' : 'نظرة اقتصادية عامة'}
        </h2>

        {/* 생산 현황 */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            {locale === 'ko' ? '생산 현황' : locale === 'en' ? 'Production' : locale === 'fr' ? 'Production' : 'الإنتاج'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-amber-700">{locale === 'ko' ? '철광석' : 'Iron Ore'}:</span>
              <span className="ml-2">{locale === 'ko' ? '1,300만 톤/년 (2025년 목표)' : '13 million tons/year (2025 target)'}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-blue-700">{locale === 'ko' ? '어획량' : 'Fish Catch'}:</span>
              <span className="ml-2">{locale === 'ko' ? '70만 톤/년 (잠재력: 150만 톤/년)' : '700,000 tons/year (potential: 1.5M tons/year)'}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-green-700">{locale === 'ko' ? '농업 생산' : 'Agriculture'}:</span>
              <span className="ml-2">{locale === 'ko' ? '35~40만 톤/년' : '350,000-400,000 tons/year'}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="font-semibold text-orange-700">{locale === 'ko' ? '가축' : 'Livestock'}:</span>
              <span className="ml-2">{locale === 'ko' ? '소 190만, 양 2,100만, 낙타 140만' : 'Cattle 1.9M, Sheep 21M, Camels 1.4M'}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
              <span className="font-semibold text-gray-700">{locale === 'ko' ? '천연가스' : 'Natural Gas'}:</span>
              <span className="ml-2">{locale === 'ko' ? '매우 높은 매장량 예상' : 'Very high reserves expected'}</span>
            </div>
          </div>
        </div>

        {/* GDP 및 무역 */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            {locale === 'ko' ? 'GDP 및 무역' : locale === 'en' ? 'GDP & Trade' : locale === 'fr' ? 'PIB et commerce' : 'الناتج المحلي والتجارة'}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-theme-header/10 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-theme-header">$52.56억</div>
              <div className="text-sm text-gray-600">GDP</div>
            </div>
            <div className="bg-theme-header/10 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-theme-header">$1,849</div>
              <div className="text-sm text-gray-600">{locale === 'ko' ? '1인당 GDP' : 'GDP per capita'}</div>
            </div>
            <div className="bg-theme-header/10 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-theme-header">16%</div>
              <div className="text-sm text-gray-600">{locale === 'ko' ? '연간 성장률' : 'Annual Growth'}</div>
            </div>
            <div className="bg-theme-header/10 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-theme-header">$14억/$19억</div>
              <div className="text-sm text-gray-600">{locale === 'ko' ? '수출/수입' : 'Export/Import'}</div>
            </div>
          </div>
        </div>

        {/* 주요 수출입 품목 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">{locale === 'ko' ? '주요 수출 품목' : 'Main Exports'}</h4>
            <p className="text-sm text-gray-700">{locale === 'ko' ? '철광석, 수산물, 귀금속' : 'Iron ore, seafood, precious metals'}</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-800 mb-2">{locale === 'ko' ? '주요 수입 품목' : 'Main Imports'}</h4>
            <p className="text-sm text-gray-700">{locale === 'ko' ? '광물성 연료, 기계류, 선박 등' : 'Mineral fuels, machinery, ships, etc.'}</p>
          </div>
        </div>

        {/* 주요 교역국 */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">{locale === 'ko' ? '주요 교역국' : 'Major Trading Partners'}</h4>
          <p className="text-sm text-gray-700">
            {locale === 'ko'
              ? '일본, EU, 프랑스, 스페인, 이탈리아, 독일, 벨기에, 중국, 러시아, 미국 등'
              : 'Japan, EU, France, Spain, Italy, Germany, Belgium, China, Russia, USA, etc.'}
          </p>
        </div>
      </section>

      {/* 수산업 (Fisheries) */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-blue-600 text-blue-700">
          {locale === 'ko' ? '수산업' : locale === 'en' ? 'Fisheries' : locale === 'fr' ? 'Pêche' : 'صيد الأسماك'}
        </h2>

        <p className="text-gray-800 text-[15px] leading-relaxed mb-6">
          {locale === 'ko'
            ? '모리타니아는 약 750km에 달하는 해안선을 보유하고 있으며, 그 영해는 세계적으로 가장 풍부한 어장 중 하나로 알려져 있습니다.'
            : locale === 'en'
            ? 'Mauritania has a coastline of about 750km, and its territorial waters are known as one of the richest fishing grounds in the world.'
            : locale === 'fr'
            ? 'La Mauritanie possède un littoral d\'environ 750 km, et ses eaux territoriales sont connues comme l\'une des zones de pêche les plus riches au monde.'
            : 'تمتلك موريتانيا ساحلًا يبلغ طوله حوالي 750 كم، وتُعرف مياهها الإقليمية بأنها واحدة من أغنى مناطق الصيد في العالم.'}
        </p>

        {/* 수산업 이미지 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image src="/images/economy/eco02f1.jpg" alt="Fisheries 1" fill className="object-cover" />
          </div>
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image src="/images/economy/eco02f2.jpg" alt="Fisheries 2" fill className="object-cover" />
          </div>
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image src="/images/economy/eco02f3.jpg" alt="Fisheries 3" fill className="object-cover" />
          </div>
        </div>

        {/* 수산 자원 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">{locale === 'ko' ? '수산 자원' : 'Fishery Resources'}</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>{locale === 'ko' ? '다양한 어종 서식' : 'Diverse fish species'}</li>
            <li>{locale === 'ko' ? '높은 상업적 가치 (70여 종의 어류 수출)' : 'High commercial value (over 70 species exported)'}</li>
            <li>{locale === 'ko' ? '연간 추정 어획량 약 150만 톤 (잠재력 기준)' : 'Estimated annual catch of 1.5 million tons (potential)'}</li>
            <li>{locale === 'ko' ? '풍부한 연안 저층어 자원 (특히 문어)' : 'Abundant coastal demersal fish (especially octopus)'}</li>
            <li>{locale === 'ko' ? '연간 어획량: 85만 톤' : 'Annual catch: 850,000 tons'}</li>
            <li>{locale === 'ko' ? '산업 어업: 48%, 기타: 52%' : 'Industrial fishing: 48%, Others: 52%'}</li>
          </ul>
        </div>

        {/* 경제적 위상 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">{locale === 'ko' ? '경제적 위상' : 'Economic Status'}</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>{locale === 'ko' ? '외화 획득의 40% (광업 다음)' : '40% of foreign exchange earnings (after mining)'}</li>
            <li>{locale === 'ko' ? '국가 총 예산의 20~25%' : '20-25% of national budget'}</li>
            <li>{locale === 'ko' ? 'GDP의 4~6%' : '4-6% of GDP'}</li>
            <li>{locale === 'ko' ? '전체 어획량의 95%가 수출 (그 중 10%가 가공품)' : '95% of catch exported (10% as processed products)'}</li>
            <li>{locale === 'ko' ? 'EU 인증 60개 수산 가공 공장' : '60 EU-certified seafood processing plants'}</li>
          </ul>
        </div>

        {/* 어업 시설 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">{locale === 'ko' ? '누아디부 (Nouadhibou)' : 'Nouadhibou'}</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• {locale === 'ko' ? '자치항 (산업 어업 기지)' : 'Autonomous port (industrial fishing base)'}</li>
              <li>• {locale === 'ko' ? '타닛 어항' : 'Tanit fishing port'}</li>
              <li>• {locale === 'ko' ? 'EU용 수산 가공장 30곳' : '30 EU seafood processing plants'}</li>
              <li>• {locale === 'ko' ? '국제공항' : 'International airport'}</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">{locale === 'ko' ? '누악쇼트 (Nouakchott)' : 'Nouakchott'}</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• {locale === 'ko' ? '피쉬마켓' : 'Fish market'}</li>
              <li>• {locale === 'ko' ? 'EU용 수산 가공장 30곳' : '30 EU seafood processing plants'}</li>
              <li>• {locale === 'ko' ? '국제공항' : 'International airport'}</li>
              <li>• {locale === 'ko' ? '자치항' : 'Autonomous port'}</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-600 italic">
          {locale === 'ko'
            ? '현재 수산 분야에서 일본과의 경제 교역은 연간 1억 5천만~2억 달러에 달합니다.'
            : 'Currently, economic trade with Japan in the fisheries sector amounts to $150-200 million annually.'}
        </p>
      </section>

      {/* 광업 (Mining) */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-amber-600 text-amber-700">
          {locale === 'ko' ? '광업' : locale === 'en' ? 'Mining' : locale === 'fr' ? 'Industrie minière' : 'التعدين'}
        </h2>

        <p className="text-gray-800 text-[15px] leading-relaxed mb-6">
          {locale === 'ko'
            ? '모리타니아의 지하에는 다양한 광물 자원이 매장되어 있습니다. 그 중에서 특히 중요한 광석은 다음과 같습니다.'
            : 'Various mineral resources are buried underground in Mauritania. Among them, particularly important ores include:'}
        </p>

        {/* 철광석 */}
        <div className="mb-8 overflow-hidden">
          <h3 className="text-lg font-semibold mb-3 text-amber-700">{locale === 'ko' ? '철광석' : 'Iron Ore'}</h3>
          <div className="relative float-right ml-6 mb-4 w-80 h-56 rounded-lg overflow-hidden shadow-md">
            <Image src="/images/economy/eco02m1.jpg" alt="Iron Ore Mining" fill className="object-cover" />
          </div>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '모리타니아에는 추정 2억 5천만 톤에 달하는 철광석 매장량이 있습니다. 20세기 초 북부 Rguibat의 광상이 발견되어 1963년부터 채굴이 시작되었습니다.'
              : 'Mauritania has an estimated 250 million tons of iron ore reserves. The deposits in northern Rguibat were discovered in the early 20th century and mining began in 1963.'}
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '철광석의 채굴과 수출을 담당하던 다국적 기업 MIFERMA가 1974년에 국유화되어 SNIM (Société Nationale Industrielle et Minière)으로 개명되었습니다. SNIM은 광석의 정제와 누아디부까지의 700km 철도 운송을 담당하고 있습니다.'
              : 'The multinational company MIFERMA, which was responsible for iron ore mining and export, was nationalized in 1974 and renamed SNIM. SNIM handles ore refining and 700km rail transport to Nouadhibou.'}
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed">
            {locale === 'ko'
              ? '연간 평균 수출량은 약 1,300만 톤으로 세계 12위에 랭크되어 있습니다. 철광석에 의한 외화 수입은 고용과 국가 세입 면에서 모리타니아 경제에 매우 크게 기여하고 있습니다.'
              : 'Average annual exports are about 13 million tons, ranking 12th in the world. Foreign exchange earnings from iron ore contribute significantly to the Mauritanian economy in terms of employment and national revenue.'}
          </p>
          <div className="clear-both"></div>
        </div>

        {/* 구리 및 금 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-amber-700">{locale === 'ko' ? '구리 및 금' : 'Copper & Gold'}</h3>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '북부 아크주트(Akjoujt) 부근의 그엘브 무그레인(Guelb Mougreine)과 모리타니데스(Mauritanides)에 방대한 구리 잠재 자원이 있습니다. 2005년 4월, 아크주트에서 구리 정광 추출을 위한 플랜트가 가동을 시작했습니다.'
              : 'There are vast copper potential resources in Guelb Mougreine and Mauritanides near northern Akjoujt. In April 2005, a plant for copper concentrate extraction began operations in Akjoujt.'}
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed">
            {locale === 'ko'
              ? '또한 캐나다 기업이 북부 TASIAST에 금 플랜트를 건설하여 2007년부터 연간 약 4톤의 생산량으로 가동을 시작했습니다.'
              : 'A Canadian company built a gold plant in northern TASIAST and started operations in 2007 with annual production of about 4 tons.'}
          </p>
        </div>

        {/* 기타 광물 자원 */}
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <h4 className="font-semibold text-amber-800 mb-2">{locale === 'ko' ? '기타 잠재 자원' : 'Other Potential Resources'}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-700">
            <span>• {locale === 'ko' ? '인산염' : 'Phosphate'}</span>
            <span>• {locale === 'ko' ? '희토류' : 'Rare Earths'}</span>
            <span>• {locale === 'ko' ? '소금' : 'Salt'}</span>
            <span>• {locale === 'ko' ? '석고' : 'Gypsum'}</span>
            <span>• {locale === 'ko' ? '아연' : 'Zinc'}</span>
            <span>• {locale === 'ko' ? '납' : 'Lead'}</span>
            <span>• {locale === 'ko' ? '다이아몬드' : 'Diamond'}</span>
            <span>• {locale === 'ko' ? '우라늄' : 'Uranium'}</span>
          </div>
        </div>
      </section>

      {/* 석유/가스 (Oil & Gas) */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-gray-600 text-gray-700">
          {locale === 'ko' ? '탄화수소 (석유)' : locale === 'en' ? 'Hydrocarbons (Oil)' : locale === 'fr' ? 'Hydrocarbures (Pétrole)' : 'الهيدروكربونات (النفط)'}
        </h2>

        <div className="mb-6 overflow-hidden">
          <div className="relative float-right ml-6 mb-4 w-80 h-auto rounded-lg overflow-hidden shadow-md">
            <Image src="/images/economy/eco02map-oil.gif" alt="Oil Exploration Map" width={320} height={240} className="w-full h-auto" />
            <p className="text-xs text-center text-gray-500 mt-1">{locale === 'ko' ? '석유 탐사 지도' : 'Oil Exploration Map'}</p>
          </div>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '모리타니아 광정(연안부와 Taoudeni 광정)의 산유 가능성 평가는 1980년 BEICIP-FRANLAB에 의해, 연안부 광정의 2차 평가는 1985년 세계은행 융자를 받아 Ministry of Mines and Industry가 실시했습니다.'
              : 'The oil potential assessment of Mauritanian wells (coastal and Taoudeni) was conducted by BEICIP-FRANLAB in 1980, and the second assessment of coastal wells was conducted in 1985 by the Ministry of Mines and Industry with World Bank financing.'}
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '연안부 광정은 남북으로 해안선을 따라 약 500km, 동서 약 300km 범위에 걸쳐 있으며, 근해 광정 10만 km²를 포함하여 16만 km² 이상의 규모입니다.'
              : 'The coastal wells extend about 500km north-south along the coastline and about 300km east-west, with a scale of over 160,000 km² including 100,000 km² of offshore wells.'}
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed">
            {locale === 'ko'
              ? '모리타니아의 석유 생산은 2006년 2월부터 연간 7만 5천 배럴로 시작되었습니다.'
              : 'Mauritania\'s oil production started in February 2006 at 75,000 barrels per year.'}
          </p>
          <div className="clear-both"></div>
        </div>
      </section>

      {/* 농업 (Agriculture) */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-green-600 text-green-700">
          {locale === 'ko' ? '농업' : locale === 'en' ? 'Agriculture' : locale === 'fr' ? 'Agriculture' : 'الزراعة'}
        </h2>

        <p className="text-gray-800 text-[15px] leading-relaxed mb-6">
          {locale === 'ko'
            ? '농업 분야는 모리타니아에서 최대의 취업처이며, 노동 인구의 48%, GDP의 20%를 차지하고 있습니다.'
            : 'The agricultural sector is the largest employer in Mauritania, accounting for 48% of the labor force and 20% of GDP.'}
        </p>

        {/* 농업 이미지 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image src="/images/economy/eco02a1.jpg" alt="Agriculture 1" fill className="object-cover" />
          </div>
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image src="/images/economy/eco02a2.jpg" alt="Agriculture 2" fill className="object-cover" />
          </div>
          <div className="relative h-48 rounded-lg overflow-hidden">
            <Image src="/images/economy/eco02a3.jpg" alt="Agriculture 3" fill className="object-cover" />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-green-700">{locale === 'ko' ? '농업 부문' : 'Agricultural Sector'}</h3>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '모리타니아의 농업은 2종류로 나눌 수 있습니다. 세네갈 강 유역과 북부 습지대 지역의 농업입니다. 세네갈 강 유역의 관개 농업 수확은 산업 및 상업 그룹으로 간주됩니다. 비옥한 토지는 세네갈 강과 내륙 오아시스에 한정되어 있지만, 농업 면적은 약 40만 헥타르로 광대합니다.'
              : 'Agriculture in Mauritania can be divided into two types: agriculture in the Senegal River basin and the northern wetland areas. Irrigated agricultural harvests in the Senegal River basin are considered industrial and commercial groups. Although fertile land is limited to the Senegal River and interior oases, the agricultural area is vast at about 400,000 hectares.'}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-green-700">{locale === 'ko' ? '모리타니아 농산물' : 'Mauritanian Agricultural Products'}</h3>
          <p className="text-gray-800 text-[15px] leading-relaxed">
            {locale === 'ko'
              ? '모리타니아는 잡곡, 수수, 옥수수, 쌀, 콩류 등을 재배하고 있습니다. 그러나 잡곡류의 수요는 부족한 상태입니다. 국내 생산량 12만 톤으로, 부족한 약 25~30만 톤을 수입하고 있습니다. 한편, 외국 기업 GDM은 2000-2001년부터 일부 생산품(녹색 강낭콩, 오크라, 고추, 감자류 등)의 수출을 시작했습니다.'
              : 'Mauritania cultivates millet, sorghum, corn, rice, legumes, etc. However, demand for grains is insufficient. Domestic production is 120,000 tons, and about 250,000-300,000 tons of shortage are imported. Meanwhile, foreign company GDM started exporting some products (green beans, okra, peppers, potatoes, etc.) from 2000-2001.'}
          </p>
        </div>
      </section>

      {/* 축산업 (Livestock) */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-orange-600 text-orange-700">
          {locale === 'ko' ? '축산업' : locale === 'en' ? 'Livestock' : locale === 'fr' ? 'Élevage' : 'الثروة الحيوانية'}
        </h2>

        <p className="text-gray-800 text-[15px] leading-relaxed mb-6">
          {locale === 'ko'
            ? '가축 생산은 주로 전통적인 방목이지만, 지금도 모리타니아 경제의 주요 기둥을 이루고 있습니다. 가축 생산의 대부분은 방목 스타일이었지만, 지난 몇 년 동안 집약적인 형태로 전환하고 있습니다.'
            : 'Livestock production is mainly traditional grazing, but it still forms a major pillar of the Mauritanian economy. Most of livestock production was grazing style, but it has been shifting to intensive forms over the past few years.'}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-orange-50 p-4 rounded-lg text-center border border-orange-200">
            <div className="text-2xl font-bold text-orange-700">1,300만</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '양 및 염소' : 'Sheep & Goats'}</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg text-center border border-orange-200">
            <div className="text-2xl font-bold text-orange-700">150만</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '소' : 'Cattle'}</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg text-center border border-orange-200">
            <div className="text-2xl font-bold text-orange-700">130만</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '낙타' : 'Camels'}</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg text-center border border-orange-200">
            <div className="text-2xl font-bold text-orange-700">490g</div>
            <div className="text-sm text-gray-600">{locale === 'ko' ? '1인당 일일 우유 소비' : 'Daily milk/person'}</div>
          </div>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h4 className="font-semibold text-orange-800 mb-2">{locale === 'ko' ? '투자가 필요한 분야' : 'Areas Requiring Investment'}</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            <li>• {locale === 'ko' ? '가축 사료용 식물 재배' : 'Feed plant cultivation'}</li>
            <li>• {locale === 'ko' ? '사료 원료 개발' : 'Feed material development'}</li>
            <li>• {locale === 'ko' ? '사료 작물 개발' : 'Feed crop development'}</li>
            <li>• {locale === 'ko' ? '토착 품종 개량' : 'Local breed improvement'}</li>
            <li>• {locale === 'ko' ? '기타 축산물 개발' : 'Other livestock products'}</li>
            <li>• {locale === 'ko' ? '피혁' : 'Leather'}</li>
            <li>• {locale === 'ko' ? '양계 제품' : 'Poultry products'}</li>
          </ul>
        </div>
      </section>

      {/* 투자 (Investment) - eco03 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-purple-600 text-purple-700">
          {locale === 'ko' ? '투자' : locale === 'en' ? 'Investment' : locale === 'fr' ? 'Investissement' : 'الاستثمار'}
        </h2>

        <div className="mb-6 overflow-hidden">
          <div className="relative float-right ml-6 mb-4 w-full md:w-96 h-64 rounded-lg overflow-hidden shadow-md">
            <Image src="/images/economy/eco03-1.jpg" alt="Iron Ore Train" fill className="object-cover" />
            <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-1">
              {locale === 'ko' ? '철광석 운반 열차' : 'Iron Ore Transport Train'}
            </p>
          </div>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '투자는 투자 규약을 제정한 의정서 2002-03에 의해 관리되고 있습니다. 그 규약은 국내외, 그리고 혼합 주식 투자에까지 적용됩니다. 국내 기업은 모리타니아에 결집된 자원에 의해 구성됩니다.'
              : 'Investment is governed by Protocol 2002-03, which established investment regulations. The regulations apply to domestic and foreign investments, as well as mixed equity investments.'}
          </p>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '국제적으로, 모리타니아는 다국간 투자보증기구(MIGA)와 세계지적소유권기구(WIPO) 설립에 참여한 협의회를 포함하여 여러 협의회의 회원국입니다. 모리타니아는 투자분쟁해결국제센터(ICSID)의 가입국이며, 양자간 투자협정과 이중과세협정의 체결국이기도 합니다.'
              : 'Internationally, Mauritania is a member of several councils including those that led to the establishment of MIGA and WIPO. Mauritania is a signatory to ICSID and has signed bilateral investment treaties and double taxation agreements.'}
          </p>
          <div className="clear-both"></div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-purple-700">{locale === 'ko' ? '법적 프레임워크' : 'Legal Framework'}</h3>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '법률 면에서 각종 권리는 외국인이나 국민이나 대체로 평등하게 취급됩니다. 개인도 기업도 국적에 관계없이 개인 자산, 고정 자산의 확보나 양도를 자유롭게 할 수 있습니다. 개인 정보나 재산 보호 등은 헌법으로 보장됩니다.'
              : 'Legally, various rights are treated roughly equally for foreigners and nationals. Individuals and companies can freely secure or transfer personal and fixed assets regardless of nationality. Personal information and property protection are guaranteed by the constitution.'}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-purple-700">{locale === 'ko' ? '기업 설립' : 'Company Establishment'}</h3>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '기업 설립에 있어서는 회사법에 따라 회사를 설립하는 것이 의무화됩니다. 투자에 관한 증권은 투자자에게 30일 이내에 발행됩니다. 상법은 국내외 모든 주주에게 대등한 지위를 보장합니다.'
              : 'For company establishment, it is mandatory to establish a company according to company law. Investment certificates are issued to investors within 30 days. Commercial law guarantees equal status to all domestic and foreign shareholders.'}
          </p>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">{locale === 'ko' ? '회사 설립 요건' : 'Company Requirements'}</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>{locale === 'ko' ? '사업회사' : 'Corporation'}:</strong> {locale === 'ko' ? '최소 500만 우기아(UM) 등기자본금, 최소 7명의 주주' : 'Min. 5M UM registered capital, min. 7 shareholders'}</li>
              <li>• <strong>{locale === 'ko' ? '유한회사' : 'Limited Company'}:</strong> {locale === 'ko' ? '최소 100만 우기아(UM) 자금, 2명의 파트너' : 'Min. 1M UM capital, 2 partners'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 자원 (Resources) - eco04 */}
      <section className="bg-white rounded-lg shadow-sm border p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {locale === 'ko' ? '자원' : locale === 'en' ? 'Resources' : locale === 'fr' ? 'Ressources' : 'الموارد'}
        </h2>

        {/* 수산 자원 */}
        <div className="mb-8 overflow-hidden">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">{locale === 'ko' ? '수산업은 모리타니아 경제에 필수 불가결한 산업입니다' : 'Fisheries is an indispensable industry for Mauritania\'s economy'}</h3>
          <div className="relative float-right ml-6 mb-4 w-64 h-48 rounded-lg overflow-hidden shadow-md">
            <Image src="/images/economy/eco04-1.jpg" alt="Fisheries" fill className="object-cover" />
          </div>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '모리타니아 앞바다는 세계에서 가장 수산 자원이 풍부한 어장 중 하나로 평판을 얻고 있습니다. 특히 그 자원은 종류가 풍부하고, 주요 어종(두족류, 갑각류, 저층어, 참치 등)의 상업적 가치는 눈부신 것이 있습니다. 모리타니아는 세계 최대의 문어와 민어과(농어, 조기 등) 자원을 보유하고 있습니다.'
              : 'Mauritania\'s offshore is known as one of the richest fishing grounds in the world. The resources are particularly diverse, and the commercial value of main fish species (cephalopods, crustaceans, demersal fish, tuna, etc.) is remarkable. Mauritania has the world\'s largest octopus and croaker resources.'}
          </p>
          <div className="clear-both"></div>
        </div>

        {/* 광업 자원 */}
        <div className="mb-8 overflow-hidden">
          <h3 className="text-lg font-semibold mb-3 text-amber-700">{locale === 'ko' ? '광업은 모리타니아 경제의 주요 산업입니다' : 'Mining is the major industry of Mauritania\'s economy'}</h3>
          <div className="relative float-right ml-6 mb-4 w-64 h-48 rounded-lg overflow-hidden shadow-md">
            <Image src="/images/economy/eco04-2.jpg" alt="Mining" fill className="object-cover" />
          </div>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '광업은 현재 국내총생산(GDP)의 10% 이상, 무역 수입의 절반을 차지하며, 국가 예산에 94억 우기아의 세입을 가져오고 있습니다. 특히 철광석 수출이 차지하는 기여도는 매우 큽니다. 최근에는 구리, 석고, 인산염, 탄화수소(석유) 등 100건 이상의 탐사·개발 허가를 발행하고 있습니다.'
              : 'Mining currently accounts for over 10% of GDP and half of trade revenue, bringing 9.4 billion ouguiya in revenue to the national budget. Iron ore exports contribute significantly. Recently, over 100 exploration and development permits have been issued for copper, gypsum, phosphate, hydrocarbons (oil), etc.'}
          </p>
          <div className="clear-both"></div>
        </div>

        {/* 농축산업 */}
        <div className="mb-8 overflow-hidden">
          <h3 className="text-lg font-semibold mb-3 text-green-700">{locale === 'ko' ? '이 나라에서 목축·농업은 전체의 48%를 차지하는 최대의 고용 공급원입니다' : 'Livestock and agriculture are the largest employment providers at 48%'}</h3>
          <div className="relative float-right ml-6 mb-4 w-64 h-48 rounded-lg overflow-hidden shadow-md">
            <Image src="/images/economy/eco04-3.jpg" alt="Agriculture" fill className="object-cover" />
          </div>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '이 산업은 개인 경영 농업의 강화를 목표로 자유화되어 왔습니다. 그 개혁의 기둥 중 하나가 농업 금융의 발전으로, 처음에는 쌀 생산에만 이용 가능했지만 현재는 다른 농업 부문에도 개방되어 있습니다.'
              : 'This industry has been liberalized with the aim of strengthening individual farming. One pillar of reform is the development of agricultural finance, which was initially only available for rice production but is now open to other agricultural sectors.'}
          </p>
          <div className="clear-both"></div>
        </div>

        {/* 관광업 */}
        <div className="mb-8 overflow-hidden">
          <h3 className="text-lg font-semibold mb-3 text-teal-700">{locale === 'ko' ? '관광업' : 'Tourism'}</h3>
          <div className="relative float-right ml-6 mb-4 w-64 h-48 rounded-lg overflow-hidden shadow-md">
            <Image src="/images/economy/eco04-4.jpg" alt="Tourism" fill className="object-cover" />
          </div>
          <p className="text-gray-800 text-[15px] leading-relaxed mb-4">
            {locale === 'ko'
              ? '모리타니아는 관광업에 대해 매우 큰 가능성을 품고 있습니다. 특히 문화적 측면에서 본 사막과 다양성이 풍부한 생물학적 측면에서 본 해변의 관광 자원에는 큰 기대가 걸려 있습니다. 인프라 정비로 네마(Nema) 공항이나 누악쇼트-누아디부 도로와 같은 각지로의 교통 수단이 더욱 편리해질 것입니다.'
              : 'Mauritania has great potential for tourism. There are particularly high expectations for desert tourism from a cultural perspective and coastal tourism from a biodiversity perspective. Infrastructure improvements will make transportation to various destinations more convenient, such as Nema Airport and the Nouakchott-Nouadhibou road.'}
          </p>
          <div className="clear-both"></div>
        </div>

        {/* 기타 산업 */}
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">{locale === 'ko' ? '기타 투자 기회' : 'Other Investment Opportunities'}</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• <strong>{locale === 'ko' ? '석유 부문' : 'Oil Sector'}:</strong> {locale === 'ko' ? '지난 20년 이상 탄화수소 탐사 투자가 급증' : 'Hydrocarbon exploration investment has surged over the past 20+ years'}</li>
            <li>• <strong>{locale === 'ko' ? '통신 및 신기술' : 'Telecommunications & Technology'}:</strong> {locale === 'ko' ? '1990년대 후반 자유화로 통신 요금이 역대 최저치 기록' : 'Liberalization in late 1990s brought telecommunications rates to record lows'}</li>
            <li>• <strong>{locale === 'ko' ? '수공예품' : 'Handicrafts'}:</strong> {locale === 'ko' ? '장인 기술이 돋보이는 공예품의 생산력, 품질, 시장 접근성 향상' : 'Improving production, quality, and market access for artisan crafts'}</li>
            <li>• <strong>{locale === 'ko' ? '금융/보험/교육' : 'Finance/Insurance/Education'}:</strong> {locale === 'ko' ? '1990년대 후반 완전히 자유화 및 민영화' : 'Fully liberalized and privatized in the late 1990s'}</li>
          </ul>
        </div>
      </section>
    </SubPageLayout>
  )
}
