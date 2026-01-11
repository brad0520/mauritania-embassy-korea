'use client'

import React from 'react'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'
import SubPageLayout from '@/components/layouts/SubPageLayout'

export default function EmbassyContactPage() {
  const { locale } = useI18n()
  const { currentTheme } = useTheme()

  // 테마에서 연락처 정보 가져오기
  const contact = currentTheme.contact

  // 대사관 메뉴 구조
  const embassyMenuItems = [
    {
      label: locale === 'ko' ? '대사 인사말' : locale === 'en' ? "Ambassador's Message" : locale === 'fr' ? "Mot de l'ambassadeur" : 'كلمة السفير',
      href: '/embassy/ambassador'
    },
    {
      label: locale === 'ko' ? '주소 및 연락처' : locale === 'en' ? 'Address & Contact' : locale === 'fr' ? 'Adresse et Contact' : 'العنوان والاتصال',
      href: '/embassy/contact'
    }
  ]

  const menuTitle = locale === 'ko' ? '대사관' :
                    locale === 'en' ? 'Embassy' :
                    locale === 'fr' ? "l'Ambassade" :
                    'السفارة'

  const pageTitle = locale === 'ko' ? '주소 및 연락처' :
                    locale === 'en' ? 'Address & Contact' :
                    locale === 'fr' ? 'Adresse et Contact' :
                    'العنوان والاتصال'

  // 다국어 레이블
  const labels = {
    ko: {
      locationInfo: '위치 안내',
      addressAndLocation: '공관주소 및 위치',
      address: '주소',
      directions: '찾아오시는 길',
      subwayInfo: '지하철: 6호선 이태원역 3번출구에서 도보 5분, 4호선 신용산역 2번출구에서 도보 10분',
      busInfo: '버스: 간선버스 421, 463 / 지선버스 502, 110',
      embassyContact: '공관 연락처',
      phoneEmail: '공관 전화/팩스 및 e-mail',
      mainPhone: '대표전화(근무시간 중)',
      fax: '팩스(FAX)',
      generalEmail: '일반문의 E-mail',
      consularEmail: '영사/민원 관련 E-mail',
      emergencyPhone: '긴급상황 휴대전화',
      emergencyDesc: '긴급연락전화(사건사고 등 긴급상황 발생시, 24시간)',
      safetyCenter: '영사안전콜센터 (서울, 24시간)',
      localPolice: '현지 경찰',
      emergencyNumber: '긴급 전화번호',
      localHospital: '현지 병원',
      hospitalEmergency: '긴급 전화번호',
      onlineInquiry: '온라인 문의',
      name: '성명',
      email: '이메일',
      phone: '전화',
      department: '문의부서',
      subject: '제목',
      message: '문의내용',
      submit: '문의하기',
      general: '일반 문의',
      consular: '영사 업무',
      economic: '경제 통상',
      cultural: '문화 교류'
    },
    en: {
      locationInfo: 'Location',
      addressAndLocation: 'Embassy Address & Location',
      address: 'Address',
      directions: 'Directions',
      subwayInfo: 'Subway: Line 6 Itaewon Station Exit 3 (5 min walk), Line 4 Sinyongsan Station Exit 2 (10 min walk)',
      busInfo: 'Bus: Main lines 421, 463 / Local lines 502, 110',
      embassyContact: 'Embassy Contact',
      phoneEmail: 'Phone/Fax & E-mail',
      mainPhone: 'Main Phone (Office Hours)',
      fax: 'Fax',
      generalEmail: 'General Inquiry E-mail',
      consularEmail: 'Consular E-mail',
      emergencyPhone: 'Emergency Mobile',
      emergencyDesc: 'Emergency Contact (24 hours)',
      safetyCenter: 'Consular Safety Call Center (Seoul, 24h)',
      localPolice: 'Local Police',
      emergencyNumber: 'Emergency Number',
      localHospital: 'Local Hospital',
      hospitalEmergency: 'Emergency Number',
      onlineInquiry: 'Online Inquiry',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      department: 'Department',
      subject: 'Subject',
      message: 'Message',
      submit: 'Submit',
      general: 'General Inquiry',
      consular: 'Consular Services',
      economic: 'Economic Affairs',
      cultural: 'Cultural Exchange'
    },
    fr: {
      locationInfo: 'Localisation',
      addressAndLocation: 'Adresse et Localisation',
      address: 'Adresse',
      directions: 'Comment nous trouver',
      subwayInfo: 'Métro: Ligne 6 Station Itaewon Sortie 3 (5 min), Ligne 4 Station Sinyongsan Sortie 2 (10 min)',
      busInfo: 'Bus: Lignes principales 421, 463 / Lignes locales 502, 110',
      embassyContact: 'Contact de l\'Ambassade',
      phoneEmail: 'Téléphone/Fax & E-mail',
      mainPhone: 'Téléphone Principal',
      fax: 'Fax',
      generalEmail: 'E-mail Général',
      consularEmail: 'E-mail Consulaire',
      emergencyPhone: 'Téléphone d\'Urgence',
      emergencyDesc: 'Contact d\'Urgence (24h/24)',
      safetyCenter: 'Centre d\'Appel Consulaire (Séoul, 24h)',
      localPolice: 'Police Locale',
      emergencyNumber: 'Numéro d\'Urgence',
      localHospital: 'Hôpital Local',
      hospitalEmergency: 'Numéro d\'Urgence',
      onlineInquiry: 'Demande en Ligne',
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      department: 'Service',
      subject: 'Objet',
      message: 'Message',
      submit: 'Envoyer',
      general: 'Demande Générale',
      consular: 'Services Consulaires',
      economic: 'Affaires Économiques',
      cultural: 'Échange Culturel'
    },
    ar: {
      locationInfo: 'الموقع',
      addressAndLocation: 'عنوان السفارة والموقع',
      address: 'العنوان',
      directions: 'كيفية الوصول',
      subwayInfo: 'المترو: خط 6 محطة إيتايون مخرج 3، خط 4 محطة شينيونغسان مخرج 2',
      busInfo: 'الحافلة: خطوط رئيسية 421، 463 / خطوط محلية 502، 110',
      embassyContact: 'اتصال السفارة',
      phoneEmail: 'هاتف/فاكس والبريد الإلكتروني',
      mainPhone: 'الهاتف الرئيسي',
      fax: 'فاكس',
      generalEmail: 'البريد الإلكتروني العام',
      consularEmail: 'البريد الإلكتروني القنصلي',
      emergencyPhone: 'هاتف الطوارئ',
      emergencyDesc: 'اتصال الطوارئ (24 ساعة)',
      safetyCenter: 'مركز السلامة القنصلية (سيول، 24 ساعة)',
      localPolice: 'الشرطة المحلية',
      emergencyNumber: 'رقم الطوارئ',
      localHospital: 'المستشفى المحلي',
      hospitalEmergency: 'رقم الطوارئ',
      onlineInquiry: 'استفسار عبر الإنترنت',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      department: 'القسم',
      subject: 'الموضوع',
      message: 'الرسالة',
      submit: 'إرسال',
      general: 'استفسار عام',
      consular: 'الخدمات القنصلية',
      economic: 'الشؤون الاقتصادية',
      cultural: 'التبادل الثقافي'
    }
  }

  const l = labels[locale as keyof typeof labels] || labels.ko

  const departments = [
    { value: 'general', label: l.general },
    { value: 'consular', label: l.consular },
    { value: 'economic', label: l.economic },
    { value: 'cultural', label: l.cultural }
  ]

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
      <div className="space-y-8">
        {/* 위치 안내 - 지도 */}
        <section className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <div className="px-6 py-4 bg-theme-header text-white flex items-center gap-2">
            <span className="text-red-400">📍</span>
            <h2 className="text-lg font-bold">{l.locationInfo}</h2>
          </div>
          <div className="aspect-[16/9] md:aspect-[21/9] bg-gray-100">
            <iframe
              src={`https://maps.google.com/maps?q=한강대우트럼프월드3차,+서울시+용산구+한강대로+26&t=&z=17&ie=UTF8&iwloc=B&hl=${locale}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Embassy Location"
            ></iframe>
          </div>
        </section>

        {/* 공관주소 및 위치 */}
        <section className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-600">📍</span>
            <h2 className="text-lg font-bold text-theme-header">{l.addressAndLocation}</h2>
          </div>
          <div className="space-y-3 text-[15px]">
            <div className="flex gap-2">
              <span className="text-gray-500">•</span>
              <div>
                <span className="font-medium">{l.address}:</span>{' '}
                <span className="text-gray-700">
                  {contact.address[locale as keyof typeof contact.address] || contact.address.ko}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500">•</span>
              <div className="text-gray-700">{l.subwayInfo}</div>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500">•</span>
              <div className="text-gray-700">{l.busInfo}</div>
            </div>
          </div>
        </section>

        {/* 공관 연락처 */}
        <section className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-500">🔴</span>
            <h2 className="text-lg font-bold text-theme-header">{l.embassyContact}</h2>
          </div>

          {/* 공관 전화/팩스 및 e-mail */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-600">📞</span>
              <h3 className="font-bold text-gray-800">{l.phoneEmail}</h3>
            </div>
            <div className="space-y-2 text-[15px] ml-6">
              <div className="flex gap-2">
                <span className="text-gray-500">•</span>
                <span className="font-medium text-gray-700">{l.mainPhone}:</span>
                <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">{contact.phone}</a>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500">•</span>
                <span className="font-medium text-gray-700">{l.fax}:</span>
                <span>{contact.fax}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500">•</span>
                <span className="font-medium text-gray-700">{l.generalEmail}:</span>
                <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{contact.email}</a>
              </div>
            </div>
          </div>

          {/* 긴급상황 휴대전화 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-blue-600">📱</span>
              <h3 className="font-bold text-gray-800">{l.emergencyPhone}</h3>
            </div>
            <div className="space-y-2 text-[15px] ml-6">
              <div className="flex gap-2">
                <span className="text-gray-500">•</span>
                <span className="text-gray-700">{l.emergencyDesc}:</span>
                <span className="font-medium text-red-600">{contact.phone}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-500">•</span>
                <span className="text-gray-700">{l.safetyCenter}:</span>
                <span className="font-medium">+82 2 3210 0404</span>
              </div>
            </div>
          </div>
        </section>

        {/* 현지 경찰 */}
        <section className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-500">🔴</span>
            <h2 className="text-lg font-bold text-theme-header">{l.localPolice}</h2>
          </div>
          <div className="space-y-2 text-[15px] ml-2">
            <div className="flex gap-2">
              <span className="text-gray-500">•</span>
              <span className="font-medium text-gray-700">{l.emergencyNumber}:</span>
              <span className="font-bold text-red-600">112</span>
              <span className="text-gray-500">({locale === 'ko' ? '한국 경찰' : 'Korea Police'})</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500">•</span>
              <span className="text-gray-700">{locale === 'ko' ? '용산경찰서' : 'Yongsan Police Station'}:</span>
              <span>+82-2-749-0112</span>
            </div>
          </div>
        </section>

        {/* 현지 병원 */}
        <section className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-500">🔴</span>
            <h2 className="text-lg font-bold text-theme-header">{l.localHospital}</h2>
          </div>
          <div className="space-y-2 text-[15px] ml-2">
            <div className="flex gap-2">
              <span className="text-gray-500">•</span>
              <span className="font-medium text-gray-700">{l.hospitalEmergency}:</span>
              <span className="font-bold text-red-600">119</span>
              <span className="text-gray-500">({locale === 'ko' ? '한국 응급의료' : 'Korea Emergency'})</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500">•</span>
              <span className="text-gray-700">{locale === 'ko' ? '순천향대학교 서울병원' : 'Soonchunhyang University Seoul Hospital'}:</span>
              <span>+82-2-709-9114</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500">•</span>
              <span className="text-gray-700">{locale === 'ko' ? '중앙대학교병원' : 'Chung-Ang University Hospital'}:</span>
              <span>+82-2-6299-1114</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500">•</span>
              <span className="text-gray-700">{locale === 'ko' ? '이태원 국제클리닉' : 'Itaewon International Clinic'}:</span>
              <span>+82-2-790-0857</span>
            </div>
          </div>
        </section>

      </div>
    </SubPageLayout>
  )
}
