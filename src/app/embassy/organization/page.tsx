'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function EmbassyOrganizationPage() {
  const { t, locale } = useI18n()
  const { currentTheme } = useTheme()

  const departments = [
    {
      name: '대사실',
      head: '알파 이브라히마 티암 대사',
      members: ['김영희 비서관', '이철수 통역관'],
      responsibilities: ['외교정책 총괄', '대외관계 조정', '주요 행사 주관', '정부 간 협의']
    },
    {
      name: '정무부',
      head: '아흐메드 살레 공사',
      members: ['박민수 1등서기관', '최수진 2등서기관', '정현우 3등서기관'],
      responsibilities: ['정치관계 분석', '양자협정 검토', '국제기구 업무', '의전업무']
    },
    {
      name: '경제통상부',
      head: '파티마 하미드 참사관',
      members: ['손미영 1등서기관', '장태현 2등서기관'],
      responsibilities: ['무역투자 촉진', '경제협력 프로젝트', '기업지원', '통상정책']
    },
    {
      name: '영사부',
      head: '오마르 디알로 영사',
      members: ['김선영 영사', '이동훈 부영사', '윤지혜 영사보'],
      responsibilities: ['비자업무', '여권업무', '증명서 발급', '자국민 보호']
    },
    {
      name: '문화공보부',
      head: '아이샤 바 문화담당관',
      members: ['홍길동 문화담당', '김민지 홍보담당'],
      responsibilities: ['문화교류', '홍보활동', '언론대응', '행사기획']
    },
    {
      name: '행정부',
      head: '무함마드 바 행정관',
      members: ['이영수 회계담당', '박지원 인사담당', '최민호 시설관리'],
      responsibilities: ['인사관리', '재정관리', '시설운영', '보안업무']
    }
  ]

  // 대사관 메뉴 구조
  const embassyMenuItems = [
    {
      label: locale === 'ko' ? '대사 인사말' : locale === 'en' ? "Ambassador's Message" : locale === 'fr' ? "Mot de l'ambassadeur" : 'كلمة السفير',
      href: '/embassy/ambassador'
    },
    {
      label: locale === 'ko' ? '연락처' : locale === 'en' ? 'Contact Us' : locale === 'fr' ? 'Nous contacter' : 'اتصل بنا',
      href: '/embassy/contact'
    }
  ]

  const menuTitle = locale === 'ko' ? '대사관' :
                    locale === 'en' ? 'Embassy' :
                    locale === 'fr' ? "l'Ambassade" :
                    'السفارة'

  const pageTitle = locale === 'ko' ? '조직도' :
                    locale === 'en' ? 'Organization' :
                    locale === 'fr' ? 'Organisation' :
                    'الهيكل التنظيمي'

  return (
    <SubPageLayout
      menuTitle={menuTitle}
      menuItems={embassyMenuItems}
      currentPageTitle={pageTitle}
      breadcrumbs={[
        { label: menuTitle, href: '/embassy' },
        { label: pageTitle }
      ]}
    >
      {/* 조직 개요 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {t('organization.overview')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-theme-header/10 p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2 text-theme-header">6</div>
            <div className="text-gray-600">{t('organization.departments')}</div>
          </div>
          <div className="bg-theme-nav/10 p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2 text-theme-header">24</div>
            <div className="text-gray-600">{t('organization.totalStaff')}</div>
          </div>
          <div className="bg-theme-header/10 p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2 text-theme-header">62</div>
            <div className="text-gray-600">{t('organization.establishedYear')}</div>
          </div>
        </div>
      </section>

      {/* 조직 구조 차트 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {t('organization.structure')}
        </h2>

        {/* 대사실 */}
        <div className="flex justify-center mb-8">
          <div className="bg-white border-2 border-theme-header rounded-lg p-4 text-center min-w-[200px]">
            <div className="font-bold text-lg mb-1 text-theme-header">
              {t('organization.ambassadorOffice')}
            </div>
            <div className="text-sm text-gray-600">{t('organization.ambassadorName')}</div>
            <div className="text-xs text-gray-500">{t('organization.ambassadorTitle')}</div>
          </div>
        </div>

        {/* 연결선 */}
        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-theme-header"></div>
        </div>
        <div className="h-px bg-theme-header mb-4"></div>

        {/* 각 부서 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.slice(1).map((dept, index) => (
            <div
              key={index}
              className="bg-theme-nav/10 border rounded-lg p-4 text-center"
            >
              <div className="font-bold text-lg mb-2 text-theme-header">
                {dept.name}
              </div>
              <div className="text-sm text-gray-700 mb-1">{dept.head}</div>
              <div className="text-xs text-gray-500">{t('organization.departmentHead')}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 부서별 상세 정보 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {t('organization.departmentDetails')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-4">
                <div className="w-3 h-8 rounded mr-3 bg-theme-header"></div>
                <h3 className="text-xl font-bold text-theme-header">
                  {dept.name}
                </h3>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('organization.departmentHead')}</h4>
                <p className="text-gray-700">{dept.head}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">{t('organization.members')}</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {dept.members.map((member, idx) => (
                    <li key={idx} className="text-sm">{member}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('organization.responsibilities')}</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {dept.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm">{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 연락처 정보 */}
      <section>
        <h2 className="text-xl font-bold mb-6 pb-3 border-b-2 border-theme-header text-theme-header">
          {t('organization.contactByDepartment')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[15px]">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">{t('organization.ambassadorOffice')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">{t('organization.directLine')}:</span>
                <span>02-793-4187</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t('organization.fax')}:</span>
                <span>02-790-9704</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                ambassador@mauritania.kr
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">{t('organization.politicalSection')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">{t('organization.directLine')}:</span>
                <span>02-793-4188</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t('organization.fax')}:</span>
                <span>02-790-9705</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                political@mauritania.kr
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">{t('organization.economicSection')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">{t('organization.directLine')}:</span>
                <span>02-793-4189</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t('organization.fax')}:</span>
                <span>02-790-9706</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                economic@mauritania.kr
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">{t('organization.consularSection')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">{t('organization.directLine')}:</span>
                <span>02-793-4190</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t('organization.fax')}:</span>
                <span>02-790-9707</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                consular@mauritania.kr
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">{t('organization.culturalSection')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">{t('organization.directLine')}:</span>
                <span>02-793-4191</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t('organization.fax')}:</span>
                <span>02-790-9708</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                culture@mauritania.kr
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">{t('organization.adminSection')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">{t('organization.directLine')}:</span>
                <span>02-793-4192</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">{t('organization.fax')}:</span>
                <span>02-790-9709</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                admin@mauritania.kr
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}
