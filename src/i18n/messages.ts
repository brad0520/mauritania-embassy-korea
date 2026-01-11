import type { Locale } from './config'

export type MessageKey =
  // Header
  | 'header.embassyTitle'
  | 'header.embassySubtitle'
  | 'header.title'
  | 'header.subtitle'
  | 'header.presidentialOffice'
  // Hero
  | 'hero.welcome'
  | 'hero.subtitle' 
  | 'hero.description'
  // Ambassador
  | 'ambassador.title'
  | 'ambassador.subtitle'
  | 'ambassador.greeting'
  | 'ambassador.greetingText1'
  | 'ambassador.greetingText2' 
  | 'ambassador.greetingText3'
  | 'ambassador.greetingText4'
  | 'ambassador.career'
  | 'ambassador.career1Period'
  | 'ambassador.career1'
  | 'ambassador.career2Period'
  | 'ambassador.career2'
  | 'ambassador.career3Period'
  | 'ambassador.career3'
  | 'ambassador.career4Period'
  | 'ambassador.career4'
  | 'ambassador.career5Period'
  | 'ambassador.career5'
  | 'ambassador.role'
  | 'ambassador.appointmentDate'
  | 'ambassador.appointed'
  | 'ambassador.origin'
  | 'ambassador.birthplace'
  | 'ambassador.education'
  | 'ambassador.university'
  | 'ambassador.meetingInfo'
  | 'ambassador.meetingTime'
  | 'ambassador.meetingHours'
  | 'ambassador.reservationMethod'
  | 'ambassador.reservationRequired'
  | 'ambassador.recentActivities'
  | 'ambassador.activity1'
  | 'ambassador.activity2'
  | 'ambassador.activity3'
  | 'ambassador.message1'
  | 'ambassador.message2'
  | 'ambassador.message3'
  | 'ambassador.thanks'
  | 'ambassador.name'
  | 'ambassador.position'
  // About
  | 'about.title'
  | 'about.subtitle'
  | 'about.overview'
  | 'about.description1'
  | 'about.description2'
  | 'about.description3'
  | 'about.mainFunctions'
  | 'about.history'
  | 'about.history1Year'
  | 'about.history1'
  | 'about.history2Year'
  | 'about.history2'
  | 'about.history3Year'
  | 'about.history3'
  | 'about.history4Year'
  | 'about.history4'
  | 'about.history5Year'
  | 'about.history5'
  | 'about.history6Year'
  | 'about.history6'
  | 'about.diplomaticAffairs'
  | 'about.diplomaticItem1'
  | 'about.diplomaticItem2'
  | 'about.diplomaticItem3'
  | 'about.diplomaticItem4'
  | 'about.consularAffairs'
  | 'about.consularItem1'
  | 'about.consularItem2'
  | 'about.consularItem3'
  | 'about.consularItem4'
  | 'about.economicAffairs'
  | 'about.economicItem1'
  | 'about.economicItem2'
  | 'about.economicItem3'
  | 'about.economicItem4'
  | 'about.culturalAffairs'
  | 'about.culturalItem1'
  | 'about.culturalItem2'
  | 'about.culturalItem3'
  | 'about.culturalItem4'
  | 'about.facilities'
  | 'about.operatingHours'
  | 'about.weekdays'
  | 'about.weekdayHours'
  | 'about.lunchTime'
  | 'about.lunchHours'
  | 'about.saturday'
  | 'about.saturdayHours'
  | 'about.closed'
  | 'about.closedDays'
  | 'about.locationInfo'
  | 'about.address'
  | 'about.subway'
  | 'about.subwayInfo'
  | 'about.bus'
  | 'about.busInfo'
  | 'about.parkingTitle'
  | 'about.parkingInfo'
  | 'about.statistics2023'
  | 'about.visaIssuance'
  | 'about.visaCount'
  | 'about.passportServices'
  | 'about.passportCount'
  | 'about.certificateIssuance'
  | 'about.certificateCount'
  | 'about.culturalEvents'
  | 'about.eventCount'
  | 'about.mainBuilding1F'
  | 'about.mainBuilding2F'
  | 'about.annexBuilding'
  | 'about.auxiliaryFacilities'
  | 'about.consularSection'
  | 'about.receptionRoom'
  | 'about.waitingRoom'
  | 'about.infoDesk'
  | 'about.ambassadorOffice'
  | 'about.politicalSection'
  | 'about.economicSection'
  | 'about.meetingRoom'
  | 'about.culturalCenter'
  | 'about.exhibitionHall'
  | 'about.seminarRoom'
  | 'about.library'
  | 'about.parking'
  | 'about.restArea'
  | 'about.cafeteria'
  | 'about.giftShop'
  // Organization
  | 'organization.title'
  | 'organization.subtitle'
  | 'organization.overview'
  | 'organization.departments'
  | 'organization.totalStaff'
  | 'organization.establishedYear'
  | 'organization.structure'
  | 'organization.ambassadorOffice'
  | 'organization.ambassadorName'
  | 'organization.ambassadorTitle'
  | 'organization.departmentHead'
  | 'organization.departmentDetails'
  | 'organization.members'
  | 'organization.responsibilities'
  | 'organization.contactByDepartment'
  | 'organization.directLine'
  | 'organization.fax'
  | 'organization.politicalSection'
  | 'organization.economicSection'
  | 'organization.consularSection'
  | 'organization.culturalSection'
  | 'organization.adminSection'
  // Contact
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.inquirySubmitted'
  | 'contact.submissionSuccess'
  | 'contact.generalInquiry'
  | 'contact.consularServices'
  | 'contact.economicTrade'
  | 'contact.culturalExchange'
  | 'contact.politicalAffairs'
  | 'contact.administrative'
  | 'contact.basicInfo'
  | 'contact.addressLine1'
  | 'contact.postalCode'
  | 'contact.main'
  | 'contact.consularDept'
  | 'contact.fax'
  | 'contact.operatingHours'
  | 'contact.weekdays'
  | 'contact.weekdayHours'
  | 'contact.saturday'
  | 'contact.saturdayHours'
  | 'contact.sundayHolidays'
  | 'contact.closed'
  | 'contact.lunchTime'
  | 'contact.lunchHours'
  | 'contact.consularHours'
  | 'contact.consularSchedule'
  | 'contact.emergency'
  | 'contact.emergencyPhone'
  | 'contact.directions'
  | 'contact.subway'
  | 'contact.subwayLine1'
  | 'contact.subwayLine2'
  | 'contact.bus'
  | 'contact.mainBus'
  | 'contact.localBus'
  | 'contact.busStop'
  | 'contact.busStopLocation'
  | 'contact.car'
  | 'contact.parkingSpace'
  | 'contact.parkingInfo'
  | 'contact.navigation'
  | 'contact.onlineInquiry'
  | 'contact.name'
  | 'contact.namePlaceholder'
  | 'contact.inquiryDepartment'
  | 'contact.subject'
  | 'contact.subjectPlaceholder'
  | 'contact.message'
  | 'contact.messagePlaceholder'
  | 'contact.privacyTitle'
  | 'contact.privacyText'
  | 'contact.submitInquiry'
  | 'contact.emergencyContacts'
  | 'contact.emergency24h'
  | 'contact.emergencyDescription'
  | 'contact.medicalEmergency'
  | 'contact.koreaEmergencyNumber'
  | 'contact.medicalEmergencyDesc'
  | 'contact.policeReport'
  | 'contact.koreaPoliceNumber'
  | 'contact.policeReportDesc'
  // Navigation (세네갈 대사관 구조 기반)
  | 'nav.home'
  | 'nav.mauritania'
  | 'nav.mauritania.overview'
  | 'nav.mauritania.culture'
  | 'nav.mauritania.economy'
  | 'nav.mauritania.tourism'
  | 'nav.mauritania.history'
  | 'nav.mauritania.geography'
  | 'nav.mauritania.institutions'
  | 'nav.mauritania.about'
  | 'nav.mauritania.links'
  | 'nav.embassy'
  | 'nav.embassy.ambassador'
  | 'nav.embassy.about'
  | 'nav.embassy.organization'
  | 'nav.embassy.contact'
  | 'nav.embassy.activities'
  | 'nav.embassy.govNews'
  | 'nav.embassy.news'
  | 'nav.consular'
  | 'nav.consular.visa'
  | 'nav.consular.passport'
  | 'nav.consular.certificates'
  | 'nav.consular.services'
  | 'nav.consular.marriage'
  | 'nav.consular.studyKorea'
  | 'nav.consular.announcements'
  | 'nav.relations'
  | 'nav.relations.diplomatic'
  | 'nav.relations.economic'
  | 'nav.relations.cultural'
  | 'nav.relations.bilateral'
  | 'nav.news'
  | 'nav.ambassador'
  | 'nav.organization'
  | 'nav.contact'
  | 'nav.about'
  // Page titles and common terms
  | 'common.more'
  | 'common.apply'
  | 'common.contact'
  | 'common.information'
  | 'common.services'
  | 'common.overview'
  | 'common.details'
  | 'common.submit'
  | 'common.required'
  | 'common.optional'
  | 'common.fee'
  | 'common.duration'
  | 'common.status'
  | 'common.location'
  | 'common.hours'
  | 'common.emergency'
  | 'common.address'
  | 'common.phone'
  | 'common.email'
  | 'common.position'
  | 'common.relatedInfo'
  // Embassy pages
  | 'embassy.about.title'
  | 'embassy.about.overview.title'
  | 'embassy.about.services.title'
  | 'embassy.organization.title'
  | 'embassy.contact.title'
  | 'embassy.contact.form.title'
  | 'embassy.contact.form.name'
  | 'embassy.contact.form.email'
  | 'embassy.contact.form.message'
  // Consular services
  | 'consular.passport.title'
  | 'consular.certificates.title'
  | 'consular.services.title'
  | 'consular.services.overview.title'
  // Passport services
  | 'passport.title'
  | 'passport.newIssuance'
  | 'passport.newIssuanceDesc'
  | 'passport.newIssuanceFee'
  | 'passport.newIssuanceDuration'
  | 'passport.newIssuanceValidity'
  | 'passport.renewal'
  | 'passport.renewalDesc'
  | 'passport.renewalFee'
  | 'passport.renewalDuration'
  | 'passport.renewalValidity'
  | 'passport.extension'
  | 'passport.extensionDesc'
  | 'passport.extensionFee'
  | 'passport.extensionDuration'
  | 'passport.extensionValidity'
  | 'passport.minor'
  | 'passport.minorDesc'
  | 'passport.minorFee'
  | 'passport.minorDuration'
  | 'passport.minorValidity'
  // Relations
  | 'relations.diplomatic.title'
  | 'relations.economic.title'
  | 'relations.cultural.title'
  // Mauritania info
  | 'mauritania.culture.title'
  | 'mauritania.economy.title'
  | 'mauritania.tourism.title'
  // News
  | 'news.title'
  | 'news.item1.title'
  | 'news.item1.content'
  | 'news.item2.title'
  | 'news.item2.content'
  | 'news.item3.title'
  | 'news.item3.content'
  | 'news.item4.title'
  | 'news.item4.content'
  // Sidebar
  | 'sidebar.services.title'
  | 'sidebar.services.visa'
  | 'sidebar.services.passport'
  | 'sidebar.services.birth'
  | 'sidebar.services.waiver'
  | 'sidebar.services.apostille'
  | 'sidebar.services.confirmation'
  | 'sidebar.info.title'
  | 'sidebar.info.address'
  | 'sidebar.info.phone'
  | 'sidebar.info.fax'
  | 'sidebar.info.email'
  | 'sidebar.info.hours'
  | 'sidebar.info.address.label'
  | 'sidebar.info.phone.label'
  | 'sidebar.info.fax.label'
  | 'sidebar.info.email.label'
  | 'sidebar.info.hours.label'
  | 'sidebar.links.title'
  | 'sidebar.links.government'
  | 'sidebar.links.tourism'
  | 'sidebar.links.mofa'
  | 'sidebar.links.consul'
  | 'sidebar.links.safety'
  // Footer
  | 'footer.address'
  | 'footer.contact'
  | 'footer.contact.title'
  | 'footer.hours.title'
  | 'footer.links.privacy'
  | 'footer.links.terms'
  | 'footer.links.sitemap'
  | 'footer.copyright'
  // Admin
  | 'admin.header.title'
  | 'admin.header.subtitle'
  | 'admin.viewSite'
  | 'admin.logout'
  | 'admin.news.management'
  | 'admin.news.published'
  | 'admin.news.draft'
  | 'admin.news.newPost'
  | 'admin.news.editPost'
  | 'admin.news.backToList'
  | 'admin.news.save'
  | 'admin.news.saveDraft'
  | 'admin.news.publish'
  | 'admin.news.updatePublished'
  | 'admin.news.saving'
  | 'admin.news.category'
  | 'admin.news.categoryActivity'
  | 'admin.news.categoryAnnouncement'
  | 'admin.news.categoryEvent'
  | 'admin.news.progress'
  | 'admin.news.languagesComplete'
  | 'admin.news.title'
  | 'admin.news.content'
  | 'admin.news.titlePlaceholder'
  | 'admin.news.contentPlaceholder'
  | 'admin.news.koreanRequired'
  | 'admin.news.tips'
  | 'admin.news.tip1'
  | 'admin.news.tip2'
  | 'admin.news.tip3'
  | 'admin.news.tip4'
  | 'admin.news.noPosts'
  | 'admin.news.createFirst'
  | 'admin.news.sampleData'
  | 'admin.news.edit'
  | 'admin.news.unpublish'
  | 'admin.news.delete'
  | 'admin.news.published.label'
  | 'admin.news.draft.label'
  | 'admin.table.title'
  | 'admin.table.category'
  | 'admin.table.status'
  | 'admin.table.date'
  | 'admin.table.actions'
  | 'admin.confirm.delete'
  | 'admin.alert.sampleNoDelete'
  | 'admin.alert.sampleNoEdit'
  | 'admin.alert.saved'
  | 'admin.alert.published'
  | 'admin.alert.saveFailed'
  | 'admin.alert.loadFailed'
  | 'admin.alert.deleteFailed'
  | 'admin.alert.statusFailed'
  // Admin Login
  | 'admin.login.title'
  | 'admin.login.subtitle'
  | 'admin.login.username'
  | 'admin.login.usernamePlaceholder'
  | 'admin.login.password'
  | 'admin.login.passwordPlaceholder'
  | 'admin.login.submit'
  | 'admin.login.loggingIn'
  | 'admin.login.error'
  | 'admin.login.forgotPassword'
  | 'admin.login.contactAdmin'
  | 'admin.login.backToSite'

export const messages: Record<Locale, Record<MessageKey, string>> = {
  ko: {
    // Header
    'header.embassyTitle': '주한 {country} 대사관',
    'header.embassySubtitle': 'Embassy of {country} in Korea',
    'header.title': '모리타니아 이슬람 공화국 주한 대사관',
    'header.subtitle': '모리타니아 이슬람 공화국 주한 대사관',
    'header.presidentialOffice': '대통령실',
    
    // Navigation (세네갈 구조 기반)
    'nav.home': '홈',
    'nav.mauritania': '모리타니아',
    'nav.mauritania.overview': '국가 개요',
    'nav.mauritania.culture': '문화',
    'nav.mauritania.economy': '경제',
    'nav.mauritania.tourism': '관광 안내',
    'nav.mauritania.history': '역사',
    'nav.mauritania.geography': '지리',
    'nav.mauritania.institutions': '헌법기관',
    'nav.mauritania.about': '모리타니아 소개',
    'nav.mauritania.links': '유용한 링크',
    'nav.embassy': '대사관',
    'nav.embassy.ambassador': '대사 인사말',
    'nav.embassy.about': '대사관 소개',
    'nav.embassy.organization': '조직도',
    'nav.embassy.contact': '연락처',
    'nav.embassy.activities': '공관활동',
    'nav.embassy.govNews': '정부 소식',
    'nav.embassy.news': '소식',
    'nav.consular': '영사 업무',
    'nav.consular.visa': '비자 안내',
    'nav.consular.passport': '여권 발급',
    'nav.consular.certificates': '증명서 발급',
    'nav.consular.services': '기타 서비스',
    'nav.consular.marriage': '혼인증명서',
    'nav.consular.studyKorea': '한국유학',
    'nav.consular.announcements': '공지사항',
    'nav.relations': '양국 관계',
    'nav.relations.diplomatic': '외교 관계사',
    'nav.relations.economic': '경제 협력',
    'nav.relations.cultural': '문화 교류',
    'nav.relations.bilateral': '양자관계',
    'nav.news': '공지사항',
    'nav.ambassador': '대사 소개',
    'nav.organization': '조직도',
    'nav.contact': '연락처 및 위치',
    'nav.about': '대사관 소개',
    
    // Page titles and common terms
    'common.more': '더보기',
    'common.apply': '신청하기',
    'common.contact': '문의하기',
    'common.information': '정보',
    'common.services': '서비스',
    'common.overview': '개요',
    'common.details': '상세내용',
    'common.submit': '제출',
    'common.required': '필수',
    'common.optional': '선택',
    'common.fee': '수수료',
    'common.duration': '소요기간',
    'common.status': '상태',
    'common.location': '위치',
    'common.hours': '운영시간',
    'common.emergency': '긴급상황',
    'common.address': '주소',
    'common.phone': '전화번호',
    'common.email': '이메일',
    'common.position': '직책',
    'common.relatedInfo': '관련 정보',
    
    // Embassy pages
    'embassy.about.title': '모리타니아 대사관 소개',
    'embassy.about.overview.title': '대사관 개요',
    'embassy.about.services.title': '주요 업무',
    'embassy.organization.title': '모리타니아 대사관 조직도',
    'embassy.contact.title': '연락처 & 문의',
    'embassy.contact.form.title': '온라인 문의',
    'embassy.contact.form.name': '성명',
    'embassy.contact.form.email': '이메일',
    'embassy.contact.form.message': '내용',
    
    // Consular services
    'consular.passport.title': '여권 발급 안내',
    'consular.certificates.title': '각종 증명서 발급',
    'consular.services.title': '영사업무 안내',
    'consular.services.overview.title': '영사부 서비스 개요',
    
    // Passport services
    'passport.title': '여권 발급 안내',
    'passport.newIssuance': '여권 신규 발급',
    'passport.newIssuanceDesc': '처음 여권을 발급받는 경우',
    'passport.newIssuanceFee': '80,000원',
    'passport.newIssuanceDuration': '10-15일',
    'passport.newIssuanceValidity': '10년 (성인)',
    'passport.renewal': '여권 재발급',
    'passport.renewalDesc': '기존 여권 만료 또는 분실시',
    'passport.renewalFee': '80,000원',
    'passport.renewalDuration': '10-15일',
    'passport.renewalValidity': '10년 (성인)',
    'passport.extension': '여권 연장',
    'passport.extensionDesc': '특별한 사유로 여권 연장시',
    'passport.extensionFee': '30,000원',
    'passport.extensionDuration': '3-5일',
    'passport.extensionValidity': '최대 1년',
    'passport.minor': '미성년자 여권',
    'passport.minorDesc': '18세 미만 미성년자 여권 발급',
    'passport.minorFee': '50,000원',
    'passport.minorDuration': '10-15일',
    'passport.minorValidity': '5년',
    
    // Relations
    'relations.diplomatic.title': '한-모리타니아 외교관계',
    'relations.economic.title': '한-모리타니아 경제협력',
    'relations.cultural.title': '한-모리타니아 문화교류',
    
    // Mauritania info
    'mauritania.culture.title': '모리타니아 문화',
    'mauritania.economy.title': '모리타니아 경제 정보',
    'mauritania.tourism.title': '모리타니아 관광 안내',
    
    // Hero
    'hero.welcome': '환영합니다',
    'hero.subtitle': '주한 {country} 대사관에 오신 것을 환영합니다.',
    'hero.description': '양국 간의 우호 증진과 협력 발전을 위해 최선을 다하겠습니다.',
    
    // Ambassador
    'ambassador.title': '대사',
    'ambassador.subtitle': '주한 {country} 대사관 대사 소개',
    'ambassador.greeting': '대사 인사말',
    'ambassador.greetingText1': '안녕하십니까. 주한 {country} 특명전권대사 모하메드 압둘 카데르입니다.',
    'ambassador.greetingText2': '한국과 {country}의 우호적인 외교관계는 1962년 외교관계 수립 이래 꾸준히 발전해 왔습니다.',
    'ambassador.greetingText3': '저는 {country} 대사로서 양국 관계 발전에 최선을 다하겠으며, 한국에 거주하는 {country} 국민들의 권익 보호와 복리 증진을 위해 노력하겠습니다.',
    'ambassador.greetingText4': '앞으로도 한국과 {country}의 우정이 더욱 깊어지고 발전하기를 기원합니다.',
    'ambassador.career': '주요 경력',
    'ambassador.career1Period': '2022년 - 현재',
    'ambassador.career1': '주한 {country} 특명전권대사',
    'ambassador.career2Period': '2018년 - 2022년',
    'ambassador.career2': '{country} 외교부 아시아태평양국장',
    'ambassador.career3Period': '2014년 - 2018년',
    'ambassador.career3': '주프랑스 {country} 대사관 공사',
    'ambassador.career4Period': '2010년 - 2014년',
    'ambassador.career4': '{country} 외교부 다자기구국 과장',
    'ambassador.career5Period': '2005년 - 2010년',
    'ambassador.career5': '주모로코 {country} 대사관 1등서기관',
    'ambassador.role': '특명전권대사',
    'ambassador.appointmentDate': '부임일',
    'ambassador.appointed': '2022년 9월 15일',
    'ambassador.origin': '출신',
    'ambassador.birthplace': '누악쇼트 (Nouakchott)',
    'ambassador.education': '학력',
    'ambassador.university': '다카르 대학교 외교학과',
    'ambassador.meetingInfo': '대사 접견 안내',
    'ambassador.meetingTime': '접견 시간',
    'ambassador.meetingHours': '화요일, 목요일 14:00-16:00',
    'ambassador.reservationMethod': '예약 방법',
    'ambassador.reservationRequired': '사전 예약 필수 (전화 또는 이메일)',
    'ambassador.recentActivities': '최근 활동',
    'ambassador.activity1': '한-모리타니아 경제포럼 참석',
    'ambassador.activity2': '한국외교부 장관 면담',
    'ambassador.activity3': '모리타니아 문화행사 개최',
    
    // About
    'about.title': '대사관 소개',
    'about.subtitle': '주한 {country} 대사관의 역할과 기능을 소개합니다',
    'about.overview': '대사관 개요',
    'about.description1': '주한 {country} 대사관은 1962년 한-{country} 외교관계 수립과 함께 설립되어 양국 간의 우호증진과 협력 확대를 위해 노력하고 있습니다.',
    'about.description2': '본 대사관은 정치, 경제, 문화, 과학기술 등 다양한 분야에서 한국과 {country} 간의 교류 협력을 증진시키고 있습니다.',
    'about.description3': '또한 한국 국민들에게 {country}의 풍부한 문화유산과 관광자원을 소개하여 양국 국민 간의 상호 이해를 증진시키고 있습니다.',
    'about.mainFunctions': '주요 업무',
    'about.history': '대사관 연혁',
    'about.history1Year': '1962년',
    'about.history1': '한-{country} 외교관계 수립 및 대사관 개설',
    'about.diplomaticAffairs': '외교업무',
    'about.diplomaticItem1': '양국 정부 간 정책 협의',
    'about.diplomaticItem2': '외교관계 증진 및 협정 체결',
    'about.diplomaticItem3': '국제기구 내 협력',
    'about.diplomaticItem4': '고위급 상호 방문 지원',
    'about.consularAffairs': '영사업무',
    'about.consularItem1': '비자 발급 및 연장',
    'about.consularItem2': '여권 발급 및 갱신',
    'about.consularItem3': '각종 증명서 발급',
    'about.consularItem4': '자국민 보호 및 지원',
    'about.economicAffairs': '경제통상업무',
    'about.economicItem1': '무역투자 촉진',
    'about.economicItem2': '경제협력 프로젝트 추진',
    'about.economicItem3': '기업간 교류 지원',
    'about.economicItem4': '투자환경 소개',
    'about.culturalAffairs': '문화홍보업무',
    'about.culturalItem1': '문화교류 행사 개최',
    'about.culturalItem2': '전통문화 소개',
    'about.culturalItem3': '학술교류 지원',
    'about.culturalItem4': '관광 홍보',
    'about.history2Year': '1975년',
    'about.history2': '현 대사관 청사로 이전 (서울시 용산구)',
    'about.history3Year': '1985년',
    'about.history3': '경제통상부 신설, 경제협력 업무 강화',
    'about.history4Year': '2000년',
    'about.history4': '문화센터 개관, 문화교류 활동 본격 시작',
    'about.history5Year': '2015년',
    'about.history5': '디지털 영사업무 도입, 온라인 서비스 확대',
    'about.history6Year': '2020년',
    'about.history6': '코로나19 대응 온라인 영사서비스 강화',
    'about.facilities': '시설 안내',
    'about.operatingHours': '운영 시간',
    'about.weekdays': '평일',
    'about.weekdayHours': '09:00 - 17:00',
    'about.lunchTime': '점심시간',
    'about.lunchHours': '12:00 - 13:00',
    'about.saturday': '토요일',
    'about.saturdayHours': '09:00 - 12:00',
    'about.closed': '휴무',
    'about.closedDays': '일요일, 공휴일',
    'about.locationInfo': '위치 정보',
    'about.address': '서울시 용산구 이태원로 246',
    'about.subway': '지하철',
    'about.subwayInfo': '6호선 이태원역 3번출구',
    'about.bus': '버스',
    'about.busInfo': '421, 463, 502번',
    'about.parkingTitle': '주차',
    'about.parkingInfo': '20대 (무료, 2시간)',
    'about.statistics2023': '2023년 업무 현황',
    'about.visaIssuance': '비자 발급',
    'about.visaCount': '2,450건',
    'about.passportServices': '여권 업무',
    'about.passportCount': '1,120건',
    'about.certificateIssuance': '증명서 발급',
    'about.certificateCount': '3,200건',
    'about.culturalEvents': '문화행사',
    'about.eventCount': '24회',
    'about.mainBuilding1F': '본관 (1층)',
    'about.mainBuilding2F': '본관 (2층)',
    'about.annexBuilding': '별관',
    'about.auxiliaryFacilities': '부대시설',
    'about.consularSection': '영사부',
    'about.receptionRoom': '민원접수실',
    'about.waitingRoom': '대기실',
    'about.infoDesk': '안내데스크',
    'about.ambassadorOffice': '대사실',
    'about.politicalSection': '정무부',
    'about.economicSection': '경제통상부',
    'about.meetingRoom': '회의실',
    'about.culturalCenter': '문화센터',
    'about.exhibitionHall': '전시실',
    'about.seminarRoom': '세미나실',
    'about.library': '도서관',
    'about.parking': '주차장',
    'about.restArea': '휴게공간',
    'about.cafeteria': '카페테리아',
    'about.giftShop': '기념품샵',
    
    // Contact
    'contact.title': '연락처 & 문의',
    'contact.subtitle': '{country} 대사관으로 연락하거나 문의하세요',
    'contact.inquirySubmitted': '문의가 접수되었습니다',
    'contact.submissionSuccess': '문의가 성공적으로 제출되었습니다. 빠른 시일 내에 답변드리겠습니다.',
    'contact.generalInquiry': '일반 문의',
    'contact.consularServices': '영사 업무',
    'contact.economicTrade': '경제 통상',
    'contact.culturalExchange': '문화 교류',
    'contact.politicalAffairs': '정무',
    'contact.administrative': '행정',
    'contact.basicInfo': '기본 정보',
    'contact.addressLine1': '서울시 용산구 이태원로 246',
    'contact.postalCode': '서울 04349',
    'contact.main': '대표',
    'contact.consularDept': '영사과',
    'contact.fax': '팩스',
    'contact.operatingHours': '운영 시간',
    'contact.weekdays': '평일',
    'contact.weekdayHours': '09:00 - 17:00',
    'contact.saturday': '토요일',
    'contact.saturdayHours': '09:00 - 12:00',
    'contact.sundayHolidays': '일요일 및 공휴일',
    'contact.closed': '휴무',
    'contact.lunchTime': '점심시간',
    'contact.lunchHours': '12:00 - 13:00',
    'contact.consularHours': '영사업무 시간',
    'contact.consularSchedule': '월-금 09:00-12:00, 14:00-16:00',
    'contact.emergency': '긴급연락처',
    'contact.emergencyPhone': '+82-10-1234-5678',
    'contact.directions': '찾아오시는 길',
    'contact.subway': '지하철',
    'contact.subwayLine1': '6호선 이태원역 3번출구 도보 5분',
    'contact.subwayLine2': '4호선 한강진역 2번출구 도보 10분',
    'contact.bus': '버스',
    'contact.mainBus': '간선버스',
    'contact.localBus': '지선버스',
    'contact.busStop': '정류장',
    'contact.busStopLocation': '이태원 사거리',
    'contact.car': '자가용',
    'contact.parkingSpace': '주차공간',
    'contact.parkingInfo': '20대 (무료, 2시간)',
    'contact.navigation': '내비게이션 주소',
    'contact.onlineInquiry': '온라인 문의',
    'contact.name': '성명',
    'contact.namePlaceholder': '성명을 입력해주세요',
    'contact.inquiryDepartment': '문의 부서',
    'contact.subject': '제목',
    'contact.subjectPlaceholder': '문의 제목을 입력해주세요',
    'contact.message': '문의 내용',
    'contact.messagePlaceholder': '문의하실 내용을 자세히 입력해주세요',
    'contact.privacyTitle': '개인정보 처리방침',
    'contact.privacyText': '입력하신 개인정보는 문의 처리 목적으로만 사용되며, 관련 법령에 따라 안전하게 관리됩니다.',
    'contact.submitInquiry': '문의 제출',
    'contact.emergencyContacts': '긴급 연락처',
    'contact.emergency24h': '24시간 긴급전화',
    'contact.emergencyDescription': '생명이 위험한 응급상황시',
    'contact.medicalEmergency': '의료 응급상황',
    'contact.koreaEmergencyNumber': '119 (한국 응급의료)',
    'contact.medicalEmergencyDesc': '의료진 응급처치 필요시',
    'contact.policeReport': '치안 신고',
    'contact.koreaPoliceNumber': '112 (한국 경찰)',
    'contact.policeReportDesc': '범죄 신고 및 치안 도움',
    
    'ambassador.message1': '안녕하십니까. 주한 {country} 특명전권대사입니다.',
    'ambassador.message2': '모리타니아와 한국은 1962년 외교관계 수립 이후 지속적으로 우호적인 관계를 발전시켜 왔습니다. 양국은 정치, 경제, 문화 등 다양한 분야에서 상호 이익을 바탕으로 한 협력을 강화해 나가고 있습니다.',
    'ambassador.message3': '저희 대사관은 양국 간의 가교 역할을 충실히 수행하며, 모리타니아 국민과 한국 거주 모리타니아인들에게 최상의 영사 서비스를 제공하기 위해 노력하고 있습니다.',
    'ambassador.thanks': '감사합니다.',
    'ambassador.name': '모하메드 알 무크타르',
    'ambassador.position': '특명전권대사',
    
    // News
    'news.title': '최근 소식',
    'news.item1.title': '한-모리타니아 경제협력위원회 제5차 회의 개최',
    'news.item1.content': '양국 간 경제협력 확대 방안을 논의하기 위한 회의가 서울에서 개최되었습니다.',
    'news.item2.title': '모리타니아 문화주간 행사 안내',
    'news.item2.content': '9월 첫째 주, 한국문화의집에서 모리타니아 전통문화 체험 행사가 열립니다.',
    'news.item3.title': '비자 신청 절차 변경 안내',
    'news.item3.content': '9월 1일부터 관광비자 신청 시 온라인 사전 예약제가 도입됩니다.',
    'news.item4.title': '모리타니아 독립기념일 기념 리셉션',
    'news.item4.content': '11월 28일 모리타니아 독립 65주년을 기념하는 리셉션이 개최됩니다.',
    
    // Sidebar
    'sidebar.services.title': '주요 서비스',
    'sidebar.services.visa': '비자 신청',
    'sidebar.services.passport': '여권 발급',
    'sidebar.services.birth': '출생신고',
    'sidebar.services.waiver': '사증면제 안내',
    'sidebar.services.apostille': '아포스티유',
    'sidebar.services.confirmation': '영사확인',
    'sidebar.info.title': '대사관 정보',
    'sidebar.info.address': '서울특별시 용산구 한남대로 98\n한남빌딩 7층',
    'sidebar.info.phone': '+82-2-797-2034',
    'sidebar.info.fax': '+82-2-797-2035',
    'sidebar.info.email': 'embassy.mauritania@korea.mr',
    'sidebar.info.hours': '월~금 09:00-17:00\n(점심시간 12:00-13:00)',
    'sidebar.info.address.label': '주소:',
    'sidebar.info.phone.label': '전화:',
    'sidebar.info.fax.label': '팩스:',
    'sidebar.info.email.label': '이메일:',
    'sidebar.info.hours.label': '업무시간:',
    'sidebar.links.title': '유용한 링크',
    'sidebar.links.government': '모리타니아 정부',
    'sidebar.links.tourism': '모리타니아 관광청',
    'sidebar.links.mofa': '대한민국 외교부',
    'sidebar.links.consul': '영사민원 24시',
    'sidebar.links.safety': '해외안전여행',
    
    // Footer
    'footer.address': '서울특별시 용산구 한남대로 98 한남빌딩 7층',
    'footer.contact': 'Tel: +82-2-797-2034 | Fax: +82-2-797-2035',
    'footer.contact.title': '연락처',
    'footer.hours.title': '업무시간',
    'footer.links.privacy': '개인정보처리방침',
    'footer.links.terms': '이용약관',
    'footer.links.sitemap': '사이트맵',
    'footer.copyright': '© 2025 Embassy of Mauritania in Korea. All rights reserved.',
    
    // Organization
    'organization.title': '조직도',
    'organization.subtitle': '대사관 조직 구조',
    'organization.overview': '조직 개요',
    'organization.departments': '7개 부서',
    'organization.totalStaff': '32명 직원',
    'organization.establishedYear': '1973년 설립',
    'organization.structure': '조직 구조',
    'organization.ambassadorOffice': '대사실',
    'organization.ambassadorName': '아흐메드 살렘 울드 부바카르 대사',
    'organization.ambassadorTitle': '특명전권대사',
    'organization.departmentHead': '부서장',
    'organization.departmentDetails': '부서별 상세 정보',
    'organization.members': '구성원',
    'organization.responsibilities': '주요 업무',
    'organization.contactByDepartment': '부서별 연락처',
    'organization.directLine': '직통번호',
    'organization.fax': '팩스',
    'organization.politicalSection': '정무과',
    'organization.economicSection': '경제통상과',
    'organization.consularSection': '영사과',
    'organization.culturalSection': '문화홍보과',
    'organization.adminSection': '행정과',

    // Admin
    'admin.header.title': '공관활동 관리',
    'admin.header.subtitle': '주한 모리타니아 대사관',
    'admin.viewSite': '사이트 보기 →',
    'admin.logout': '로그아웃',
    'admin.news.management': '게시글 관리',
    'admin.news.published': '발행됨',
    'admin.news.draft': '임시저장',
    'admin.news.newPost': '새 글 작성',
    'admin.news.editPost': '글 수정',
    'admin.news.backToList': '← 목록으로',
    'admin.news.save': '저장',
    'admin.news.saveDraft': '임시 저장',
    'admin.news.publish': '발행하기',
    'admin.news.updatePublished': '수정 반영',
    'admin.news.saving': '저장 중...',
    'admin.news.category': '카테고리',
    'admin.news.categoryActivity': '공관활동',
    'admin.news.categoryAnnouncement': '공지사항',
    'admin.news.categoryEvent': '행사',
    'admin.news.progress': '다국어 작성 진행률',
    'admin.news.languagesComplete': '{count}/{total} 언어 완료',
    'admin.news.title': '제목',
    'admin.news.content': '내용',
    'admin.news.titlePlaceholder': '{lang}로 제목을 입력하세요',
    'admin.news.contentPlaceholder': '{lang}로 내용을 입력하세요',
    'admin.news.koreanRequired': '한국어 제목은 필수입니다.',
    'admin.news.tips': '💡 작성 팁',
    'admin.news.tip1': '한국어는 필수이며, 다른 언어는 선택 사항입니다.',
    'admin.news.tip2': '모든 언어를 작성하면 해당 언어 사용자에게 더 좋은 경험을 제공합니다.',
    'admin.news.tip3': '아랍어는 오른쪽에서 왼쪽(RTL)으로 자동 정렬됩니다.',
    'admin.news.tip4': '이미지 업로드: 툴바의 이미지 버튼을 클릭하여 사진을 첨부할 수 있습니다.',
    'admin.news.noPosts': '게시글이 없습니다',
    'admin.news.createFirst': '첫 번째 글을 작성해보세요!',
    'admin.news.sampleData': '(샘플 데이터)',
    'admin.news.edit': '편집',
    'admin.news.unpublish': '비공개',
    'admin.news.delete': '삭제',
    'admin.news.published.label': '발행됨',
    'admin.news.draft.label': '임시저장',
    'admin.table.title': '제목',
    'admin.table.category': '카테고리',
    'admin.table.status': '상태',
    'admin.table.date': '작성일',
    'admin.table.actions': '관리',
    'admin.confirm.delete': '정말 삭제하시겠습니까?',
    'admin.alert.sampleNoDelete': '샘플 데이터는 삭제할 수 없습니다.',
    'admin.alert.sampleNoEdit': '샘플 데이터는 수정할 수 없습니다.',
    'admin.alert.saved': '저장되었습니다!',
    'admin.alert.published': '발행되었습니다!',
    'admin.alert.saveFailed': '저장에 실패했습니다. 다시 시도해주세요.',
    'admin.alert.loadFailed': '게시글을 불러오는데 실패했습니다.',
    'admin.alert.deleteFailed': '삭제에 실패했습니다.',
    'admin.alert.statusFailed': '상태 변경에 실패했습니다.',
    // Admin Login
    'admin.login.title': '관리자 로그인',
    'admin.login.subtitle': '주한 모리타니아 대사관 관리 시스템',
    'admin.login.username': '사용자명',
    'admin.login.usernamePlaceholder': '사용자명을 입력하세요',
    'admin.login.password': '비밀번호',
    'admin.login.passwordPlaceholder': '비밀번호를 입력하세요',
    'admin.login.submit': '로그인',
    'admin.login.loggingIn': '로그인 중...',
    'admin.login.error': '로그인에 실패했습니다.',
    'admin.login.forgotPassword': '비밀번호를 분실하셨나요?',
    'admin.login.contactAdmin': '대사관 담당자에게 문의하세요.',
    'admin.login.backToSite': '메인 사이트로 돌아가기',
  },

  en: {
    // Header
    'header.embassyTitle': 'Embassy of {country} in Korea',
    'header.embassySubtitle': 'Embassy of {country} in Korea',
    'header.title': 'Embassy of the Islamic Republic of Mauritania in Korea',
    'header.subtitle': 'Embassy of the Islamic Republic of Mauritania in Korea',
    'header.presidentialOffice': 'Presidential Office',
    
    // Hero
    'hero.welcome': 'Welcome',
    'hero.subtitle': 'Welcome to the Embassy of {country} in Korea.',
    'hero.description': 'We strive for the promotion of friendship and development of cooperation between our countries.',
    
    // Navigation (Senegal structure)
    'nav.home': 'Home',
    'nav.mauritania': 'Mauritania',
    'nav.mauritania.overview': 'Country Overview',
    'nav.mauritania.culture': 'Culture',
    'nav.mauritania.economy': 'Economy',
    'nav.mauritania.tourism': 'Tourism Guide',
    'nav.mauritania.history': 'History',
    'nav.mauritania.geography': 'Geography',
    'nav.mauritania.institutions': 'Constitutional Institutions',
    'nav.mauritania.about': 'About Mauritania',
    'nav.mauritania.links': 'Useful Links',
    'nav.embassy': 'Embassy',
    'nav.embassy.ambassador': 'Ambassador\'s Message',
    'nav.embassy.about': 'About Embassy',
    'nav.embassy.organization': 'Organization',
    'nav.embassy.contact': 'Contact Us',
    'nav.embassy.activities': 'Embassy Activities',
    'nav.embassy.govNews': 'Government News',
    'nav.embassy.news': 'News',
    'nav.consular': 'Consular Services',
    'nav.consular.visa': 'Visa Information',
    'nav.consular.passport': 'Passport Services',
    'nav.consular.certificates': 'Certificates',
    'nav.consular.services': 'Other Services',
    'nav.consular.marriage': 'Marriage Certificate',
    'nav.consular.studyKorea': 'Study in Korea',
    'nav.consular.announcements': 'Announcements',
    'nav.relations': 'Bilateral Relations',
    'nav.relations.diplomatic': 'Diplomatic Relations',
    'nav.relations.economic': 'Economic Cooperation',
    'nav.relations.cultural': 'Cultural Exchange',
    'nav.relations.bilateral': 'Bilateral Relations',
    'nav.news': 'News & Announcements',
    'nav.ambassador': 'Ambassador',
    'nav.organization': 'Organization',
    'nav.contact': 'Contact & Location',
    'nav.about': 'About Embassy',
    
    // Page titles and common terms
    'common.more': 'More',
    'common.apply': 'Apply',
    'common.contact': 'Contact',
    'common.information': 'Information',
    'common.services': 'Services',
    'common.overview': 'Overview',
    'common.details': 'Details',
    'common.submit': 'Submit',
    'common.required': 'Required',
    'common.optional': 'Optional',
    'common.fee': 'Fee',
    'common.duration': 'Duration',
    'common.status': 'Status',
    'common.location': 'Location',
    'common.hours': 'Hours',
    'common.emergency': 'Emergency',
    'common.address': 'Address',
    'common.phone': 'Phone',
    'common.email': 'Email',
    'common.position': 'Position',
    'common.relatedInfo': 'Related Information',
    
    // Embassy pages
    'embassy.about.title': 'Embassy of Mauritania Information',
    'embassy.about.overview.title': 'Embassy Overview',
    'embassy.about.services.title': 'Key Functions',
    'embassy.organization.title': 'Embassy of Mauritania Organization Chart',
    'embassy.contact.title': 'Contact & Inquiry',
    'embassy.contact.form.title': 'Online Inquiry',
    'embassy.contact.form.name': 'Name',
    'embassy.contact.form.email': 'Email',
    'embassy.contact.form.message': 'Message',
    
    // Contact
    'contact.title': 'Contact & Inquiry',
    'contact.subtitle': 'Contact or inquire with the {country} Embassy',
    'contact.inquirySubmitted': 'Inquiry has been submitted',
    'contact.submissionSuccess': 'Your inquiry has been successfully submitted. We will respond as soon as possible.',
    'contact.generalInquiry': 'General Inquiry',
    'contact.consularServices': 'Consular Services',
    'contact.economicTrade': 'Economic Trade',
    'contact.culturalExchange': 'Cultural Exchange',
    'contact.politicalAffairs': 'Political Affairs',
    'contact.administrative': 'Administrative',
    'contact.basicInfo': 'Basic Information',
    'contact.addressLine1': '246 Itaewon-ro, Yongsan-gu, Seoul',
    'contact.postalCode': 'Seoul 04349',
    'contact.main': 'Main',
    'contact.consularDept': 'Consular Department',
    'contact.fax': 'Fax',
    'contact.operatingHours': 'Operating Hours',
    'contact.weekdays': 'Weekdays',
    'contact.weekdayHours': '09:00 - 17:00',
    'contact.saturday': 'Saturday',
    'contact.saturdayHours': '09:00 - 12:00',
    'contact.sundayHolidays': 'Sunday & Holidays',
    'contact.closed': 'Closed',
    'contact.lunchTime': 'Lunch Time',
    'contact.lunchHours': '12:00 - 13:00',
    'contact.consularHours': 'Consular Hours',
    'contact.consularSchedule': 'Mon-Fri 09:00-12:00, 14:00-16:00',
    'contact.emergency': 'Emergency Contact',
    'contact.emergencyPhone': '+82-10-1234-5678',
    'contact.directions': 'Directions',
    'contact.subway': 'Subway',
    'contact.subwayLine1': 'Line 6 Itaewon Station Exit 3, 5min walk',
    'contact.subwayLine2': 'Line 4 Hangangjin Station Exit 2, 10min walk',
    'contact.bus': 'Bus',
    'contact.mainBus': 'Main Bus',
    'contact.localBus': 'Local Bus',
    'contact.busStop': 'Bus Stop',
    'contact.busStopLocation': 'Itaewon Intersection',
    'contact.car': 'Car',
    'contact.parkingSpace': 'Parking Space',
    'contact.parkingInfo': '20 spaces (Free, 2 hours)',
    'contact.navigation': 'Navigation Address',
    'contact.onlineInquiry': 'Online Inquiry',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Please enter your name',
    'contact.inquiryDepartment': 'Inquiry Department',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'Please enter inquiry subject',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Please enter your inquiry in detail',
    'contact.privacyTitle': 'Privacy Policy',
    'contact.privacyText': 'Personal information entered will be used only for inquiry processing and will be managed securely according to relevant laws.',
    'contact.submitInquiry': 'Submit Inquiry',
    'contact.emergencyContacts': 'Emergency Contacts',
    'contact.emergency24h': '24-hour Emergency Phone',
    'contact.emergencyDescription': 'For life-threatening emergencies',
    'contact.medicalEmergency': 'Medical Emergency',
    'contact.koreaEmergencyNumber': '119 (Korea Emergency Medical)',
    'contact.medicalEmergencyDesc': 'When medical emergency treatment is needed',
    'contact.policeReport': 'Security Report',
    'contact.koreaPoliceNumber': '112 (Korea Police)',
    'contact.policeReportDesc': 'Crime reporting and security assistance',
    
    // Consular services
    'consular.passport.title': 'Passport Issuance Guide',
    'consular.certificates.title': 'Certificate Issuance',
    'consular.services.title': 'Consular Services Guide',
    'consular.services.overview.title': 'Consular Services Overview',
    
    // Passport services
    'passport.title': 'Passport Issuance Guide',
    'passport.newIssuance': 'New Passport Issuance',
    'passport.newIssuanceDesc': 'For first-time passport application',
    'passport.newIssuanceFee': '$80',
    'passport.newIssuanceDuration': '10-15 days',
    'passport.newIssuanceValidity': '10 years (Adult)',
    'passport.renewal': 'Passport Renewal',
    'passport.renewalDesc': 'For expired or lost passports',
    'passport.renewalFee': '$80',
    'passport.renewalDuration': '10-15 days',
    'passport.renewalValidity': '10 years (Adult)',
    'passport.extension': 'Passport Extension',
    'passport.extensionDesc': 'For special circumstances',
    'passport.extensionFee': '$30',
    'passport.extensionDuration': '3-5 days',
    'passport.extensionValidity': 'Maximum 1 year',
    'passport.minor': 'Minor Passport',
    'passport.minorDesc': 'For children under 18',
    'passport.minorFee': '$50',
    'passport.minorDuration': '10-15 days',
    'passport.minorValidity': '5 years',
    
    // Relations
    'relations.diplomatic.title': 'Korea-Mauritania Diplomatic Relations',
    'relations.economic.title': 'Korea-Mauritania Economic Cooperation',
    'relations.cultural.title': 'Korea-Mauritania Cultural Exchange',
    
    // Mauritania info
    'mauritania.culture.title': 'Mauritania Culture',
    'mauritania.economy.title': 'Mauritania Economic Information',
    'mauritania.tourism.title': 'Mauritania Tourism Guide',
    
    // Ambassador
    'ambassador.title': 'Ambassador',
    'ambassador.subtitle': 'Ambassador of the Embassy of {country} in Korea',
    'ambassador.greeting': 'Ambassador\'s Greetings',
    'ambassador.greetingText1': 'Greetings. I am Mohamed Abdul Kader, Ambassador Extraordinary and Plenipotentiary of {country}.',
    'ambassador.greetingText2': 'The friendly diplomatic relations between Korea and {country} have been steadily developing since the establishment of diplomatic relations in 1962.',
    'ambassador.greetingText3': 'As Ambassador of {country}, I will do my best for the development of bilateral relations, and will work to protect the rights and promote the welfare of {country} nationals residing in Korea.',
    'ambassador.greetingText4': 'I hope that the friendship between Korea and {country} will deepen and develop further.',
    'ambassador.career': 'Main Career',
    'ambassador.career1Period': '2022 - Present',
    'ambassador.career1': 'Ambassador Extraordinary and Plenipotentiary of {country} to Korea',
    'ambassador.career2Period': '2018 - 2022',
    'ambassador.career2': 'Director of Asia-Pacific Department, Ministry of Foreign Affairs of {country}',
    'ambassador.career3Period': '2014 - 2018',
    'ambassador.career3': 'Minister at {country} Embassy in France',
    'ambassador.career4Period': '2010 - 2014',
    'ambassador.career4': 'Director at Multilateral Organizations Department, Ministry of Foreign Affairs of {country}',
    'ambassador.career5Period': '2005 - 2010',
    'ambassador.career5': 'First Secretary at {country} Embassy in Morocco',
    'ambassador.role': 'Ambassador Extraordinary and Plenipotentiary',
    'ambassador.appointmentDate': 'Appointment Date',
    'ambassador.appointed': 'September 15, 2022',
    'ambassador.origin': 'Origin',
    'ambassador.birthplace': 'Nouakchott',
    'ambassador.education': 'Education',
    'ambassador.university': 'University of Dakar, Department of Diplomacy',
    'ambassador.meetingInfo': 'Ambassador Meeting Information',
    'ambassador.meetingTime': 'Meeting Hours',
    'ambassador.meetingHours': 'Tuesday, Thursday 14:00-16:00',
    'ambassador.reservationMethod': 'Reservation Method',
    'ambassador.reservationRequired': 'Advance reservation required (by phone or email)',
    'ambassador.recentActivities': 'Recent Activities',
    'ambassador.activity1': 'Participation in Korea-Mauritania Economic Forum',
    'ambassador.activity2': 'Meeting with Korean Minister of Foreign Affairs',
    'ambassador.activity3': 'Hosting Mauritanian Cultural Events',
    'ambassador.message1': 'Greetings. I am the Ambassador Extraordinary and Plenipotentiary of {country}.',
    'ambassador.message2': 'Mauritania and Korea have been developing friendly relations continuously since the establishment of diplomatic relations in 1962. Both countries are strengthening cooperation based on mutual interests in various fields including politics, economy, and culture.',
    'ambassador.message3': 'Our embassy faithfully serves as a bridge between our two countries and strives to provide the best consular services to Mauritanian nationals and Mauritanians residing in Korea.',
    'ambassador.thanks': 'Thank you.',
    'ambassador.name': 'Mohamed Al Mukhtar',
    'ambassador.position': 'Ambassador Extraordinary and Plenipotentiary',
    
    // About
    'about.title': 'About Embassy',
    'about.subtitle': 'Introducing the role and functions of the Embassy of {country} in Korea',
    'about.overview': 'Embassy Overview',
    'about.description1': 'The Embassy of {country} in Korea was established with the establishment of diplomatic relations between Korea and {country} in 1962 and has been working to promote friendship and expand cooperation between the two countries.',
    'about.description2': 'This embassy is promoting exchange and cooperation between Korea and {country} in various fields such as politics, economy, culture, and science and technology.',
    'about.description3': 'We are also promoting mutual understanding between the peoples of both countries by introducing {country}\'s rich cultural heritage and tourism resources to Korean nationals.',
    'about.mainFunctions': 'Main Functions',
    'about.history': 'Embassy History',
    'about.history1Year': '1962',
    'about.history1': 'Establishment of diplomatic relations between Korea and {country} and opening of embassy',
    'about.history2Year': '1975',
    'about.history2': 'Moved to current embassy building (Yongsan-gu, Seoul)',
    'about.history3Year': '1985',
    'about.history3': 'Establishment of Economic and Trade Department, strengthening economic cooperation',
    'about.history4Year': '2000',
    'about.history4': 'Opening of Cultural Center, full-scale start of cultural exchange activities',
    'about.history5Year': '2015',
    'about.history5': 'Introduction of digital consular services, expansion of online services',
    'about.history6Year': '2020',
    'about.history6': 'Strengthening online consular services in response to COVID-19',
    'about.diplomaticAffairs': 'Diplomatic Affairs',
    'about.diplomaticItem1': 'Policy consultation between the two governments',
    'about.diplomaticItem2': 'Promotion of diplomatic relations and conclusion of agreements',
    'about.diplomaticItem3': 'Cooperation within international organizations',
    'about.diplomaticItem4': 'Support for high-level mutual visits',
    'about.consularAffairs': 'Consular Affairs',
    'about.consularItem1': 'Visa issuance and extension',
    'about.consularItem2': 'Passport issuance and renewal',
    'about.consularItem3': 'Issuance of various certificates',
    'about.consularItem4': 'Protection and support of nationals',
    'about.economicAffairs': 'Economic and Trade Affairs',
    'about.economicItem1': 'Promotion of trade and investment',
    'about.economicItem2': 'Promotion of economic cooperation projects',
    'about.economicItem3': 'Support for inter-company exchanges',
    'about.economicItem4': 'Introduction of investment environment',
    'about.culturalAffairs': 'Cultural Promotion Affairs',
    'about.culturalItem1': 'Hosting cultural exchange events',
    'about.culturalItem2': 'Introduction of traditional culture',
    'about.culturalItem3': 'Support for academic exchanges',
    'about.culturalItem4': 'Tourism promotion',
    'about.facilities': 'Facility Information',
    'about.operatingHours': 'Operating Hours',
    'about.weekdays': 'Weekdays',
    'about.weekdayHours': '09:00 - 17:00',
    'about.lunchTime': 'Lunch Time',
    'about.lunchHours': '12:00 - 13:00',
    'about.saturday': 'Saturday',
    'about.saturdayHours': '09:00 - 12:00',
    'about.closed': 'Closed',
    'about.closedDays': 'Sunday, Public holidays',
    'about.locationInfo': 'Location Information',
    'about.address': '246 Itaewon-ro, Yongsan-gu, Seoul',
    'about.subway': 'Subway',
    'about.subwayInfo': 'Line 6 Itaewon Station Exit 3',
    'about.bus': 'Bus',
    'about.busInfo': '421, 463, 502',
    'about.parkingTitle': 'Parking',
    'about.parkingInfo': '20 spaces (Free, 2 hours)',
    'about.statistics2023': '2023 Work Status',
    'about.visaIssuance': 'Visa Issuance',
    'about.visaCount': '2,450 cases',
    'about.passportServices': 'Passport Services',
    'about.passportCount': '1,120 cases',
    'about.certificateIssuance': 'Certificate Issuance',
    'about.certificateCount': '3,200 cases',
    'about.culturalEvents': 'Cultural Events',
    'about.eventCount': '24 times',
    'about.mainBuilding1F': 'Main Building (1F)',
    'about.mainBuilding2F': 'Main Building (2F)',
    'about.annexBuilding': 'Annex Building',
    'about.auxiliaryFacilities': 'Auxiliary Facilities',
    'about.consularSection': 'Consular Section',
    'about.receptionRoom': 'Reception Room',
    'about.waitingRoom': 'Waiting Room',
    'about.infoDesk': 'Information Desk',
    'about.ambassadorOffice': 'Ambassador\'s Office',
    'about.politicalSection': 'Political Section',
    'about.economicSection': 'Economic Section',
    'about.meetingRoom': 'Meeting Room',
    'about.culturalCenter': 'Cultural Center',
    'about.exhibitionHall': 'Exhibition Hall',
    'about.seminarRoom': 'Seminar Room',
    'about.library': 'Library',
    'about.parking': 'Parking Lot',
    'about.restArea': 'Rest Area',
    'about.cafeteria': 'Cafeteria',
    'about.giftShop': 'Gift Shop',
    
    // News
    'news.title': 'Latest News',
    'news.item1.title': '5th Korea-Mauritania Economic Cooperation Committee Meeting',
    'news.item1.content': 'A meeting to discuss ways to expand economic cooperation between the two countries was held in Seoul.',
    'news.item2.title': 'Mauritanian Cultural Week Event Notice',
    'news.item2.content': 'A Mauritanian traditional culture experience event will be held at the Korea Cultural House in the first week of September.',
    'news.item3.title': 'Visa Application Procedure Changes',
    'news.item3.content': 'Online advance reservation system will be introduced for tourist visa applications from September 1st.',
    'news.item4.title': 'Mauritanian Independence Day Reception',
    'news.item4.content': 'A reception commemorating the 65th anniversary of Mauritanian independence will be held on November 28th.',
    
    // Sidebar
    'sidebar.services.title': 'Key Services',
    'sidebar.services.visa': 'Visa Application',
    'sidebar.services.passport': 'Passport Issuance',
    'sidebar.services.birth': 'Birth Registration',
    'sidebar.services.waiver': 'Visa Waiver Guide',
    'sidebar.services.apostille': 'Apostille',
    'sidebar.services.confirmation': 'Consular Confirmation',
    'sidebar.info.title': 'Embassy Information',
    'sidebar.info.address': '7th Floor, Hannam Building\n98 Hannam-daero, Yongsan-gu, Seoul',
    'sidebar.info.phone': '+82-2-797-2034',
    'sidebar.info.fax': '+82-2-797-2035',
    'sidebar.info.email': 'embassy.mauritania@korea.mr',
    'sidebar.info.hours': 'Mon-Fri 09:00-17:00\n(Lunch: 12:00-13:00)',
    'sidebar.info.address.label': 'Address:',
    'sidebar.info.phone.label': 'Phone:',
    'sidebar.info.fax.label': 'Fax:',
    'sidebar.info.email.label': 'Email:',
    'sidebar.info.hours.label': 'Hours:',
    'sidebar.links.title': 'Useful Links',
    'sidebar.links.government': 'Government of Mauritania',
    'sidebar.links.tourism': 'Mauritania Tourism Board',
    'sidebar.links.mofa': 'Ministry of Foreign Affairs of Korea',
    'sidebar.links.consul': 'Consular Service 24h',
    'sidebar.links.safety': 'Overseas Travel Safety',
    
    // Footer
    'footer.address': '7th Floor, Hannam Building, 98 Hannam-daero, Yongsan-gu, Seoul',
    'footer.contact': 'Tel: +82-2-797-2034 | Fax: +82-2-797-2035',
    'footer.contact.title': 'Contact',
    'footer.hours.title': 'Office Hours',
    'footer.links.privacy': 'Privacy Policy',
    'footer.links.terms': 'Terms of Service',
    'footer.links.sitemap': 'Sitemap',
    'footer.copyright': '© 2025 Embassy of Mauritania in Korea. All rights reserved.',
    
    // Organization
    'organization.title': 'Organization Chart',
    'organization.subtitle': 'Embassy Organization Structure',
    'organization.overview': 'Organization Overview',
    'organization.departments': '7 Departments',
    'organization.totalStaff': '32 Staff Members',
    'organization.establishedYear': 'Established 1973',
    'organization.structure': 'Organizational Structure',
    'organization.ambassadorOffice': 'Ambassador\'s Office',
    'organization.ambassadorName': 'Ambassador Ahmed Salem Ould Boubacar',
    'organization.ambassadorTitle': 'Ambassador Extraordinary and Plenipotentiary',
    'organization.departmentHead': 'Department Head',
    'organization.departmentDetails': 'Department Details',
    'organization.members': 'Members',
    'organization.responsibilities': 'Key Responsibilities',
    'organization.contactByDepartment': 'Contact by Department',
    'organization.directLine': 'Direct Line',
    'organization.fax': 'Fax',
    'organization.politicalSection': 'Political Section',
    'organization.economicSection': 'Economic Section',
    'organization.consularSection': 'Consular Section',
    'organization.culturalSection': 'Cultural Section',
    'organization.adminSection': 'Administrative Section',

    // Admin
    'admin.header.title': 'Embassy Activities Management',
    'admin.header.subtitle': 'Embassy of Mauritania in Korea',
    'admin.viewSite': 'View Site →',
    'admin.logout': 'Logout',
    'admin.news.management': 'Post Management',
    'admin.news.published': 'Published',
    'admin.news.draft': 'Draft',
    'admin.news.newPost': 'New Post',
    'admin.news.editPost': 'Edit Post',
    'admin.news.backToList': '← Back to List',
    'admin.news.save': 'Save',
    'admin.news.saveDraft': 'Save as Draft',
    'admin.news.publish': 'Publish',
    'admin.news.updatePublished': 'Update',
    'admin.news.saving': 'Saving...',
    'admin.news.category': 'Category',
    'admin.news.categoryActivity': 'Embassy Activities',
    'admin.news.categoryAnnouncement': 'Announcements',
    'admin.news.categoryEvent': 'Events',
    'admin.news.progress': 'Multi-language Progress',
    'admin.news.languagesComplete': '{count}/{total} languages complete',
    'admin.news.title': 'Title',
    'admin.news.content': 'Content',
    'admin.news.titlePlaceholder': 'Enter title in {lang}',
    'admin.news.contentPlaceholder': 'Enter content in {lang}',
    'admin.news.koreanRequired': 'Korean title is required.',
    'admin.news.tips': '💡 Writing Tips',
    'admin.news.tip1': 'Korean is required, other languages are optional.',
    'admin.news.tip2': 'Writing in all languages provides a better experience for users.',
    'admin.news.tip3': 'Arabic is automatically aligned right-to-left (RTL).',
    'admin.news.tip4': 'Image upload: Click the image button in the toolbar to attach photos.',
    'admin.news.noPosts': 'No posts yet',
    'admin.news.createFirst': 'Create your first post!',
    'admin.news.sampleData': '(Sample Data)',
    'admin.news.edit': 'Edit',
    'admin.news.unpublish': 'Unpublish',
    'admin.news.delete': 'Delete',
    'admin.news.published.label': 'Published',
    'admin.news.draft.label': 'Draft',
    'admin.table.title': 'Title',
    'admin.table.category': 'Category',
    'admin.table.status': 'Status',
    'admin.table.date': 'Date',
    'admin.table.actions': 'Actions',
    'admin.confirm.delete': 'Are you sure you want to delete this?',
    'admin.alert.sampleNoDelete': 'Sample data cannot be deleted.',
    'admin.alert.sampleNoEdit': 'Sample data cannot be edited.',
    'admin.alert.saved': 'Saved successfully!',
    'admin.alert.published': 'Published successfully!',
    'admin.alert.saveFailed': 'Failed to save. Please try again.',
    'admin.alert.loadFailed': 'Failed to load post.',
    'admin.alert.deleteFailed': 'Failed to delete.',
    'admin.alert.statusFailed': 'Failed to change status.',
    // Admin Login
    'admin.login.title': 'Admin Login',
    'admin.login.subtitle': 'Mauritania Embassy Management System',
    'admin.login.username': 'Username',
    'admin.login.usernamePlaceholder': 'Enter your username',
    'admin.login.password': 'Password',
    'admin.login.passwordPlaceholder': 'Enter your password',
    'admin.login.submit': 'Login',
    'admin.login.loggingIn': 'Logging in...',
    'admin.login.error': 'Login failed.',
    'admin.login.forgotPassword': 'Forgot your password?',
    'admin.login.contactAdmin': 'Contact the embassy administrator.',
    'admin.login.backToSite': 'Back to main site',
  },

  fr: {
    // Header
    'header.embassyTitle': 'Ambassade de {country} en Corée',
    'header.embassySubtitle': 'Ambassade de {country} en Corée',
    'header.title': 'Ambassade de la République Islamique de Mauritanie en Corée',
    'header.subtitle': 'Ambassade de la République Islamique de Mauritanie en Corée',
    'header.presidentialOffice': 'Bureau du Président',
    
    // Hero
    'hero.welcome': 'Bienvenue',
    'hero.subtitle': 'Bienvenue à l\'Ambassade de {country} en Corée.',
    'hero.description': 'Nous nous efforçons de promouvoir l\'amitié et le développement de la coopération entre nos pays.',
    
    // Navigation (structure Sénégal)
    'nav.home': 'Accueil',
    'nav.mauritania': 'Mauritanie',
    'nav.mauritania.overview': 'Aperçu du Pays',
    'nav.mauritania.culture': 'Culture',
    'nav.mauritania.economy': 'Économie',
    'nav.mauritania.tourism': 'Guide Touristique',
    'nav.mauritania.history': 'Histoire',
    'nav.mauritania.geography': 'Géographie',
    'nav.mauritania.institutions': 'Institutions Constitutionnelles',
    'nav.mauritania.about': 'Sur la Mauritanie',
    'nav.mauritania.links': 'Liens Utiles',
    'nav.embassy': 'Ambassade',
    'nav.embassy.ambassador': 'Mot de l\'Ambassadeur',
    'nav.embassy.about': 'À propos de l\'Ambassade',
    'nav.embassy.organization': 'Organisation',
    'nav.embassy.contact': 'Nous Contacter',
    'nav.embassy.activities': 'Actualités de l\'Ambassade',
    'nav.embassy.govNews': 'Actualités du Gouvernement',
    'nav.embassy.news': 'Actualités',
    'nav.consular': 'Services Consulaires',
    'nav.consular.visa': 'Informations Visa',
    'nav.consular.passport': 'Services Passeport',
    'nav.consular.certificates': 'Certificats',
    'nav.consular.services': 'Autres Services',
    'nav.consular.marriage': 'Acte de Mariage',
    'nav.consular.studyKorea': 'Étudier en Corée',
    'nav.consular.announcements': 'Annonces',
    'nav.relations': 'Relations Bilatérales',
    'nav.relations.diplomatic': 'Relations Diplomatiques',
    'nav.relations.economic': 'Coopération Économique',
    'nav.relations.cultural': 'Échanges Culturels',
    'nav.relations.bilateral': 'Relations Bilatérales',
    'nav.news': 'Actualités',
    'nav.ambassador': 'Ambassadeur',
    'nav.organization': 'Organisation',
    'nav.contact': 'Contact et Localisation',
    'nav.about': 'À propos de l\'Ambassade',
    
    // Page titles and common terms
    'common.more': 'Plus',
    'common.apply': 'Postuler',
    'common.contact': 'Contact',
    'common.information': 'Information',
    'common.services': 'Services',
    'common.overview': 'Aperçu',
    'common.details': 'Détails',
    'common.submit': 'Soumettre',
    'common.required': 'Requis',
    'common.optional': 'Optionnel',
    'common.fee': 'Frais',
    'common.duration': 'Durée',
    'common.status': 'Statut',
    'common.location': 'Lieu',
    'common.hours': 'Horaires',
    'common.emergency': 'Urgence',
    'common.address': 'Adresse',
    'common.phone': 'Téléphone',
    'common.email': 'Email',
    'common.position': 'Position',
    'common.relatedInfo': 'Informations Connexes',
    
    // Embassy pages
    'embassy.about.title': 'Informations sur l\'Ambassade de Mauritanie',
    'embassy.about.overview.title': 'Aperçu de l\'Ambassade',
    'embassy.about.services.title': 'Fonctions Principales',
    'embassy.organization.title': 'Organigramme de l\'Ambassade de Mauritanie',
    'embassy.contact.title': 'Contact et Demande',
    'embassy.contact.form.title': 'Demande en Ligne',
    'embassy.contact.form.name': 'Nom',
    'embassy.contact.form.email': 'Email',
    'embassy.contact.form.message': 'Message',
    
    // Contact
    'contact.title': 'Contact et Demande',
    'contact.subtitle': 'Contactez ou renseignez-vous auprès de l\'Ambassade de {country}',
    'contact.inquirySubmitted': 'La demande a été soumise',
    'contact.submissionSuccess': 'Votre demande a été soumise avec succès. Nous vous répondrons dans les plus brefs délais.',
    'contact.generalInquiry': 'Demande Générale',
    'contact.consularServices': 'Services Consulaires',
    'contact.economicTrade': 'Commerce Économique',
    'contact.culturalExchange': 'Échanges Culturels',
    'contact.politicalAffairs': 'Affaires Politiques',
    'contact.administrative': 'Administratif',
    'contact.basicInfo': 'Informations de Base',
    'contact.addressLine1': '246 Itaewon-ro, Yongsan-gu, Séoul',
    'contact.postalCode': 'Séoul 04349',
    'contact.main': 'Principal',
    'contact.consularDept': 'Département Consulaire',
    'contact.fax': 'Fax',
    'contact.operatingHours': 'Heures d\'Ouverture',
    'contact.weekdays': 'Jours de Semaine',
    'contact.weekdayHours': '09:00 - 17:00',
    'contact.saturday': 'Samedi',
    'contact.saturdayHours': '09:00 - 12:00',
    'contact.sundayHolidays': 'Dimanche et Jours Fériés',
    'contact.closed': 'Fermé',
    'contact.lunchTime': 'Heure du Déjeuner',
    'contact.lunchHours': '12:00 - 13:00',
    'contact.consularHours': 'Heures Consulaires',
    'contact.consularSchedule': 'Lun-Ven 09:00-12:00, 14:00-16:00',
    'contact.emergency': 'Contact d\'Urgence',
    'contact.emergencyPhone': '+82-10-1234-5678',
    'contact.directions': 'Directions',
    'contact.subway': 'Métro',
    'contact.subwayLine1': 'Ligne 6 Station Itaewon Sortie 3, 5min à pied',
    'contact.subwayLine2': 'Ligne 4 Station Hangangjin Sortie 2, 10min à pied',
    'contact.bus': 'Bus',
    'contact.mainBus': 'Bus Principal',
    'contact.localBus': 'Bus Local',
    'contact.busStop': 'Arrêt de Bus',
    'contact.busStopLocation': 'Intersection d\'Itaewon',
    'contact.car': 'Voiture',
    'contact.parkingSpace': 'Espace de Stationnement',
    'contact.parkingInfo': '20 places (Gratuit, 2 heures)',
    'contact.navigation': 'Adresse de Navigation',
    'contact.onlineInquiry': 'Demande en Ligne',
    'contact.name': 'Nom',
    'contact.namePlaceholder': 'Veuillez entrer votre nom',
    'contact.inquiryDepartment': 'Département de Demande',
    'contact.subject': 'Sujet',
    'contact.subjectPlaceholder': 'Veuillez entrer le sujet de la demande',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Veuillez entrer votre demande en détail',
    'contact.privacyTitle': 'Politique de Confidentialité',
    'contact.privacyText': 'Les informations personnelles saisies ne seront utilisées qu\'à des fins de traitement des demandes et seront gérées en toute sécurité conformément aux lois pertinentes.',
    'contact.submitInquiry': 'Soumettre la Demande',
    'contact.emergencyContacts': 'Contacts d\'Urgence',
    'contact.emergency24h': 'Téléphone d\'Urgence 24h',
    'contact.emergencyDescription': 'Pour les urgences mettant la vie en danger',
    'contact.medicalEmergency': 'Urgence Médicale',
    'contact.koreaEmergencyNumber': '119 (Urgences Médicales Corée)',
    'contact.medicalEmergencyDesc': 'Quand un traitement médical d\'urgence est nécessaire',
    'contact.policeReport': 'Rapport de Sécurité',
    'contact.koreaPoliceNumber': '112 (Police Corée)',
    'contact.policeReportDesc': 'Signalement de crimes et assistance sécuritaire',
    
    // Consular services
    'consular.passport.title': 'Guide de Délivrance de Passeport',
    'consular.certificates.title': 'Délivrance de Certificats',
    'consular.services.title': 'Guide des Services Consulaires',
    'consular.services.overview.title': 'Aperçu des Services Consulaires',
    
    // Passport services
    'passport.title': 'Guide de Délivrance de Passeport',
    'passport.newIssuance': 'Nouvelle Délivrance de Passeport',
    'passport.newIssuanceDesc': 'Pour première demande de passeport',
    'passport.newIssuanceFee': '80€',
    'passport.newIssuanceDuration': '10-15 jours',
    'passport.newIssuanceValidity': '10 ans (Adulte)',
    'passport.renewal': 'Renouvellement de Passeport',
    'passport.renewalDesc': 'Pour passeports expirés ou perdus',
    'passport.renewalFee': '80€',
    'passport.renewalDuration': '10-15 jours',
    'passport.renewalValidity': '10 ans (Adulte)',
    'passport.extension': 'Extension de Passeport',
    'passport.extensionDesc': 'Pour circonstances spéciales',
    'passport.extensionFee': '30€',
    'passport.extensionDuration': '3-5 jours',
    'passport.extensionValidity': 'Maximum 1 an',
    'passport.minor': 'Passeport Mineur',
    'passport.minorDesc': 'Pour enfants de moins de 18 ans',
    'passport.minorFee': '50€',
    'passport.minorDuration': '10-15 jours',
    'passport.minorValidity': '5 ans',
    
    // Relations
    'relations.diplomatic.title': 'Relations Diplomatiques Corée-Mauritanie',
    'relations.economic.title': 'Coopération Économique Corée-Mauritanie',
    'relations.cultural.title': 'Échanges Culturels Corée-Mauritanie',
    
    // Mauritania info
    'mauritania.culture.title': 'Culture Mauritanienne',
    'mauritania.economy.title': 'Informations Économiques de Mauritanie',
    'mauritania.tourism.title': 'Guide Touristique de Mauritanie',
    
    // Ambassador
    'ambassador.title': 'Ambassadeur',
    'ambassador.subtitle': 'Ambassadeur de l\'Ambassade de {country} en Corée',
    'ambassador.greeting': 'Salutations de l\'Ambassadeur',
    'ambassador.greetingText1': 'Salutations. Je suis Mohamed Abdul Kader, Ambassadeur Extraordinaire et Plénipotentiaire de {country}.',
    'ambassador.greetingText2': 'Les relations diplomatiques amicales entre la Corée et {country} se développent régulièrement depuis l\'établissement des relations diplomatiques en 1962.',
    'ambassador.greetingText3': 'En tant qu\'Ambassadeur de {country}, je ferai de mon mieux pour le développement des relations bilatérales et travaillerai à protéger les droits et promouvoir le bien-être des ressortissants de {country} résidant en Corée.',
    'ambassador.greetingText4': 'J\'espère que l\'amitié entre la Corée et {country} s\'approfondira et se développera davantage.',
    'ambassador.career': 'Carrière Principale',
    'ambassador.career1Period': '2022 - Présent',
    'ambassador.career1': 'Ambassadeur Extraordinaire et Plénipotentiaire de {country} en Corée',
    'ambassador.career2Period': '2018 - 2022',
    'ambassador.career2': 'Directeur du Département Asie-Pacifique, Ministère des Affaires Étrangères de {country}',
    'ambassador.career3Period': '2014 - 2018',
    'ambassador.career3': 'Ministre à l\'Ambassade de {country} en France',
    'ambassador.career4Period': '2010 - 2014',
    'ambassador.career4': 'Directeur au Département des Organisations Multilatérales, Ministère des Affaires Étrangères de {country}',
    'ambassador.career5Period': '2005 - 2010',
    'ambassador.career5': 'Premier Secrétaire à l\'Ambassade de {country} au Maroc',
    'ambassador.role': 'Ambassadeur Extraordinaire et Plénipotentiaire',
    'ambassador.appointmentDate': 'Date de Nomination',
    'ambassador.appointed': '15 septembre 2022',
    'ambassador.origin': 'Origine',
    'ambassador.birthplace': 'Nouakchott',
    'ambassador.education': 'Éducation',
    'ambassador.university': 'Université de Dakar, Département de Diplomatie',
    'ambassador.meetingInfo': 'Informations de Rencontre avec l\'Ambassadeur',
    'ambassador.meetingTime': 'Heures de Rencontre',
    'ambassador.meetingHours': 'Mardi, Jeudi 14:00-16:00',
    'ambassador.reservationMethod': 'Méthode de Réservation',
    'ambassador.reservationRequired': 'Réservation préalable requise (par téléphone ou email)',
    'ambassador.recentActivities': 'Activités Récentes',
    'ambassador.activity1': 'Participation au Forum Économique Corée-Mauritanie',
    'ambassador.activity2': 'Rencontre avec le Ministre des Affaires Étrangères de Corée',
    'ambassador.activity3': 'Organisation d\'Événements Culturels Mauritaniens',
    'ambassador.message1': 'Salutations. Je suis l\'Ambassadeur Extraordinaire et Plénipotentiaire de {country}.',
    'ambassador.message2': 'La Mauritanie et la Corée développent des relations amicales de manière continue depuis l\'établissement des relations diplomatiques en 1962. Les deux pays renforcent leur coopération basée sur des intérêts mutuels dans divers domaines notamment la politique, l\'économie et la culture.',
    'ambassador.message3': 'Notre ambassade sert fidèlement de pont entre nos deux pays et s\'efforce de fournir les meilleurs services consulaires aux ressortissants mauritaniens et aux Mauritaniens résidant en Corée.',
    'ambassador.thanks': 'Merci.',
    'ambassador.name': 'Mohamed Al Mukhtar',
    'ambassador.position': 'Ambassadeur Extraordinaire et Plénipotentiaire',
    
    // About
    'about.title': 'À propos de l\'Ambassade',
    'about.subtitle': 'Présentation du rôle et des fonctions de l\'Ambassade de {country} en Corée',
    'about.overview': 'Aperçu de l\'Ambassade',
    'about.description1': 'L\'Ambassade de {country} en Corée a été établie avec l\'établissement des relations diplomatiques entre la Corée et {country} en 1962 et œuvre pour promouvoir l\'amitié et élargir la coopération entre les deux pays.',
    'about.description2': 'Cette ambassade promeut les échanges et la coopération entre la Corée et {country} dans divers domaines tels que la politique, l\'économie, la culture et la science et technologie.',
    'about.description3': 'Nous promouvons également la compréhension mutuelle entre les peuples des deux pays en présentant aux ressortissants coréens le riche patrimoine culturel et les ressources touristiques de {country}.',
    'about.mainFunctions': 'Fonctions Principales',
    'about.history': 'Histoire de l\'Ambassade',
    'about.history1Year': '1962',
    'about.history1': 'Établissement des relations diplomatiques entre la Corée et {country} et ouverture de l\'ambassade',
    'about.history2Year': '1975',
    'about.history2': 'Déménagement vers le bâtiment actuel de l\'ambassade (Yongsan-gu, Séoul)',
    'about.history3Year': '1985',
    'about.history3': 'Établissement du Département Économique et Commercial, renforcement de la coopération économique',
    'about.history4Year': '2000',
    'about.history4': 'Ouverture du Centre Culturel, début à grande échelle des activités d\'échanges culturels',
    'about.history5Year': '2015',
    'about.history5': 'Introduction des services consulaires numériques, expansion des services en ligne',
    'about.history6Year': '2020',
    'about.history6': 'Renforcement des services consulaires en ligne en réponse au COVID-19',
    'about.diplomaticAffairs': 'Affaires Diplomatiques',
    'about.diplomaticItem1': 'Consultations politiques entre les deux gouvernements',
    'about.diplomaticItem2': 'Promotion des relations diplomatiques et conclusion d\'accords',
    'about.diplomaticItem3': 'Coopération au sein des organisations internationales',
    'about.diplomaticItem4': 'Soutien aux visites mutuelles de haut niveau',
    'about.consularAffairs': 'Affaires Consulaires',
    'about.consularItem1': 'Délivrance et extension de visas',
    'about.consularItem2': 'Délivrance et renouvellement de passeports',
    'about.consularItem3': 'Délivrance de divers certificats',
    'about.consularItem4': 'Protection et soutien des ressortissants',
    'about.economicAffairs': 'Affaires Économiques et Commerciales',
    'about.economicItem1': 'Promotion du commerce et des investissements',
    'about.economicItem2': 'Promotion de projets de coopération économique',
    'about.economicItem3': 'Soutien aux échanges inter-entreprises',
    'about.economicItem4': 'Présentation de l\'environnement d\'investissement',
    'about.culturalAffairs': 'Affaires de Promotion Culturelle',
    'about.culturalItem1': 'Organisation d\'événements d\'échanges culturels',
    'about.culturalItem2': 'Présentation de la culture traditionnelle',
    'about.culturalItem3': 'Soutien aux échanges académiques',
    'about.culturalItem4': 'Promotion touristique',
    'about.facilities': 'Informations sur les Installations',
    'about.operatingHours': 'Heures d\'Ouverture',
    'about.weekdays': 'Jours de Semaine',
    'about.weekdayHours': '09:00 - 17:00',
    'about.lunchTime': 'Heure du Déjeuner',
    'about.lunchHours': '12:00 - 13:00',
    'about.saturday': 'Samedi',
    'about.saturdayHours': '09:00 - 12:00',
    'about.closed': 'Fermé',
    'about.closedDays': 'Dimanche, Jours fériés',
    'about.locationInfo': 'Informations de Localisation',
    'about.address': '246 Itaewon-ro, Yongsan-gu, Séoul',
    'about.subway': 'Métro',
    'about.subwayInfo': 'Ligne 6 Station Itaewon Sortie 3',
    'about.bus': 'Bus',
    'about.busInfo': '421, 463, 502',
    'about.parkingTitle': 'Stationnement',
    'about.parkingInfo': '20 places (Gratuit, 2 heures)',
    'about.statistics2023': 'État du Travail 2023',
    'about.visaIssuance': 'Délivrance de Visas',
    'about.visaCount': '2 450 cas',
    'about.passportServices': 'Services de Passeport',
    'about.passportCount': '1 120 cas',
    'about.certificateIssuance': 'Délivrance de Certificats',
    'about.certificateCount': '3 200 cas',
    'about.culturalEvents': 'Événements Culturels',
    'about.eventCount': '24 fois',
    'about.mainBuilding1F': 'Bâtiment Principal (1er)',
    'about.mainBuilding2F': 'Bâtiment Principal (2ème)',
    'about.annexBuilding': 'Bâtiment Annexe',
    'about.auxiliaryFacilities': 'Installations Auxiliaires',
    'about.consularSection': 'Section Consulaire',
    'about.receptionRoom': 'Salle de Réception',
    'about.waitingRoom': 'Salle d\'Attente',
    'about.infoDesk': 'Bureau d\'Information',
    'about.ambassadorOffice': 'Bureau de l\'Ambassadeur',
    'about.politicalSection': 'Section Politique',
    'about.economicSection': 'Section Économique',
    'about.meetingRoom': 'Salle de Réunion',
    'about.culturalCenter': 'Centre Culturel',
    'about.exhibitionHall': 'Salle d\'Exposition',
    'about.seminarRoom': 'Salle de Séminaire',
    'about.library': 'Bibliothèque',
    'about.parking': 'Parking',
    'about.restArea': 'Zone de Repos',
    'about.cafeteria': 'Cafétéria',
    'about.giftShop': 'Boutique de Souvenirs',
    
    // News
    'news.title': 'Dernières Nouvelles',
    'news.item1.title': '5ème Réunion du Comité de Coopération Économique Corée-Mauritanie',
    'news.item1.content': 'Une réunion pour discuter des moyens d\'élargir la coopération économique entre les deux pays s\'est tenue à Séoul.',
    'news.item2.title': 'Avis d\'Événement de la Semaine Culturelle Mauritanienne',
    'news.item2.content': 'Un événement d\'expérience de la culture traditionnelle mauritanienne aura lieu à la Maison de la Culture Coréenne la première semaine de septembre.',
    'news.item3.title': 'Changements dans les Procédures de Demande de Visa',
    'news.item3.content': 'Le système de réservation en ligne à l\'avance sera introduit pour les demandes de visa touristique à partir du 1er septembre.',
    'news.item4.title': 'Réception du Jour de l\'Indépendance Mauritanienne',
    'news.item4.content': 'Une réception commémorant le 65ème anniversaire de l\'indépendance mauritanienne aura lieu le 28 novembre.',
    
    // Sidebar
    'sidebar.services.title': 'Services Principaux',
    'sidebar.services.visa': 'Demande de Visa',
    'sidebar.services.passport': 'Délivrance de Passeport',
    'sidebar.services.birth': 'Déclaration de Naissance',
    'sidebar.services.waiver': 'Guide d\'Exemption de Visa',
    'sidebar.services.apostille': 'Apostille',
    'sidebar.services.confirmation': 'Confirmation Consulaire',
    'sidebar.info.title': 'Informations sur l\'Ambassade',
    'sidebar.info.address': '7ème étage, Bâtiment Hannam\n98 Hannam-daero, Yongsan-gu, Séoul',
    'sidebar.info.phone': '+82-2-797-2034',
    'sidebar.info.fax': '+82-2-797-2035',
    'sidebar.info.email': 'embassy.mauritania@korea.mr',
    'sidebar.info.hours': 'Lun-Ven 09:00-17:00\n(Déjeuner: 12:00-13:00)',
    'sidebar.info.address.label': 'Adresse:',
    'sidebar.info.phone.label': 'Téléphone:',
    'sidebar.info.fax.label': 'Fax:',
    'sidebar.info.email.label': 'Email:',
    'sidebar.info.hours.label': 'Horaires:',
    'sidebar.links.title': 'Liens Utiles',
    'sidebar.links.government': 'Gouvernement de Mauritanie',
    'sidebar.links.tourism': 'Office de Tourisme de Mauritanie',
    'sidebar.links.mofa': 'Ministère des Affaires Étrangères de Corée',
    'sidebar.links.consul': 'Service Consulaire 24h',
    'sidebar.links.safety': 'Sécurité des Voyages à l\'Étranger',
    
    // Footer
    'footer.address': '7ème étage, Bâtiment Hannam, 98 Hannam-daero, Yongsan-gu, Séoul',
    'footer.contact': 'Tél: +82-2-797-2034 | Fax: +82-2-797-2035',
    'footer.contact.title': 'Contact',
    'footer.hours.title': 'Horaires de Bureau',
    'footer.links.privacy': 'Politique de Confidentialité',
    'footer.links.terms': 'Conditions d\'Utilisation',
    'footer.links.sitemap': 'Plan du Site',
    'footer.copyright': '© 2025 Ambassade de Mauritanie en Corée. Tous droits réservés.',
    
    // Organization
    'organization.title': 'Organigramme',
    'organization.subtitle': 'Structure Organisationnelle de l\'Ambassade',
    'organization.overview': 'Aperçu de l\'Organisation',
    'organization.departments': '7 Départements',
    'organization.totalStaff': '32 Membres du Personnel',
    'organization.establishedYear': 'Établi en 1973',
    'organization.structure': 'Structure Organisationnelle',
    'organization.ambassadorOffice': 'Bureau de l\'Ambassadeur',
    'organization.ambassadorName': 'Ambassadeur Ahmed Salem Ould Boubacar',
    'organization.ambassadorTitle': 'Ambassadeur Extraordinaire et Plénipotentiaire',
    'organization.departmentHead': 'Chef de Département',
    'organization.departmentDetails': 'Détails du Département',
    'organization.members': 'Membres',
    'organization.responsibilities': 'Responsabilités Clés',
    'organization.contactByDepartment': 'Contact par Département',
    'organization.directLine': 'Ligne Directe',
    'organization.fax': 'Fax',
    'organization.politicalSection': 'Section Politique',
    'organization.economicSection': 'Section Économique',
    'organization.consularSection': 'Section Consulaire',
    'organization.culturalSection': 'Section Culturelle',
    'organization.adminSection': 'Section Administrative',

    // Admin
    'admin.header.title': 'Gestion des Activités',
    'admin.header.subtitle': 'Ambassade de Mauritanie en Corée',
    'admin.viewSite': 'Voir le site →',
    'admin.logout': 'Déconnexion',
    'admin.news.management': 'Gestion des Articles',
    'admin.news.published': 'Publié',
    'admin.news.draft': 'Brouillon',
    'admin.news.newPost': 'Nouvel Article',
    'admin.news.editPost': 'Modifier l\'Article',
    'admin.news.backToList': '← Retour à la liste',
    'admin.news.save': 'Enregistrer',
    'admin.news.saveDraft': 'Enregistrer comme brouillon',
    'admin.news.publish': 'Publier',
    'admin.news.updatePublished': 'Mettre à jour',
    'admin.news.saving': 'Enregistrement...',
    'admin.news.category': 'Catégorie',
    'admin.news.categoryActivity': 'Activités de l\'Ambassade',
    'admin.news.categoryAnnouncement': 'Annonces',
    'admin.news.categoryEvent': 'Événements',
    'admin.news.progress': 'Progression Multilingue',
    'admin.news.languagesComplete': '{count}/{total} langues complètes',
    'admin.news.title': 'Titre',
    'admin.news.content': 'Contenu',
    'admin.news.titlePlaceholder': 'Entrez le titre en {lang}',
    'admin.news.contentPlaceholder': 'Entrez le contenu en {lang}',
    'admin.news.koreanRequired': 'Le titre en coréen est obligatoire.',
    'admin.news.tips': '💡 Conseils de rédaction',
    'admin.news.tip1': 'Le coréen est obligatoire, les autres langues sont facultatives.',
    'admin.news.tip2': 'Rédiger dans toutes les langues offre une meilleure expérience.',
    'admin.news.tip3': 'L\'arabe est automatiquement aligné de droite à gauche (RTL).',
    'admin.news.tip4': 'Téléchargement d\'images: Cliquez sur le bouton image dans la barre d\'outils.',
    'admin.news.noPosts': 'Aucun article',
    'admin.news.createFirst': 'Créez votre premier article!',
    'admin.news.sampleData': '(Données d\'exemple)',
    'admin.news.edit': 'Modifier',
    'admin.news.unpublish': 'Dépublier',
    'admin.news.delete': 'Supprimer',
    'admin.news.published.label': 'Publié',
    'admin.news.draft.label': 'Brouillon',
    'admin.table.title': 'Titre',
    'admin.table.category': 'Catégorie',
    'admin.table.status': 'Statut',
    'admin.table.date': 'Date',
    'admin.table.actions': 'Actions',
    'admin.confirm.delete': 'Voulez-vous vraiment supprimer?',
    'admin.alert.sampleNoDelete': 'Les données d\'exemple ne peuvent pas être supprimées.',
    'admin.alert.sampleNoEdit': 'Les données d\'exemple ne peuvent pas être modifiées.',
    'admin.alert.saved': 'Enregistré avec succès!',
    'admin.alert.published': 'Publié avec succès!',
    'admin.alert.saveFailed': 'Échec de l\'enregistrement. Veuillez réessayer.',
    'admin.alert.loadFailed': 'Échec du chargement de l\'article.',
    'admin.alert.deleteFailed': 'Échec de la suppression.',
    'admin.alert.statusFailed': 'Échec du changement de statut.',
    // Admin Login
    'admin.login.title': 'Connexion Administrateur',
    'admin.login.subtitle': 'Système de gestion de l\'Ambassade de Mauritanie',
    'admin.login.username': 'Nom d\'utilisateur',
    'admin.login.usernamePlaceholder': 'Entrez votre nom d\'utilisateur',
    'admin.login.password': 'Mot de passe',
    'admin.login.passwordPlaceholder': 'Entrez votre mot de passe',
    'admin.login.submit': 'Connexion',
    'admin.login.loggingIn': 'Connexion en cours...',
    'admin.login.error': 'Échec de la connexion.',
    'admin.login.forgotPassword': 'Mot de passe oublié ?',
    'admin.login.contactAdmin': 'Contactez l\'administrateur de l\'ambassade.',
    'admin.login.backToSite': 'Retour au site principal',
  },

  // 아랍어 번역 (RTL 언어)
  ar: {
    // Header
    'header.embassyTitle': 'سفارة {country} في كوريا',
    'header.embassySubtitle': 'سفارة {country} في كوريا',
    'header.title': 'سفارة الجمهورية الإسلامية الموريتانية في كوريا',
    'header.subtitle': 'سفارة الجمهورية الإسلامية الموريتانية في كوريا',
    'header.presidentialOffice': 'مكتب الرئاسة',

    // Hero
    'hero.welcome': 'مرحباً بكم',
    'hero.subtitle': 'مرحباً بكم في سفارة {country} في كوريا.',
    'hero.description': 'نسعى جاهدين لتعزيز الصداقة وتطوير التعاون بين بلدينا.',

    // Navigation (هيكل السنغال)
    'nav.home': 'الرئيسية',
    'nav.mauritania': 'موريتانيا',
    'nav.mauritania.overview': 'نظرة عامة على البلد',
    'nav.mauritania.culture': 'الثقافة',
    'nav.mauritania.economy': 'الاقتصاد',
    'nav.mauritania.tourism': 'دليل السياحة',
    'nav.mauritania.history': 'التاريخ',
    'nav.mauritania.geography': 'الجغرافيا',
    'nav.mauritania.institutions': 'المؤسسات الدستورية',
    'nav.mauritania.about': 'عن موريتانيا',
    'nav.mauritania.links': 'روابط مفيدة',
    'nav.embassy': 'السفارة',
    'nav.embassy.ambassador': 'كلمة السفير',
    'nav.embassy.about': 'عن السفارة',
    'nav.embassy.organization': 'الهيكل التنظيمي',
    'nav.embassy.contact': 'اتصل بنا',
    'nav.embassy.activities': 'أنشطة السفارة',
    'nav.embassy.govNews': 'أخبار الحكومة',
    'nav.embassy.news': 'الأخبار',
    'nav.consular': 'الخدمات القنصلية',
    'nav.consular.visa': 'معلومات التأشيرة',
    'nav.consular.passport': 'خدمات جواز السفر',
    'nav.consular.certificates': 'إصدار الشهادات',
    'nav.consular.services': 'خدمات أخرى',
    'nav.consular.marriage': 'شهادة الزواج',
    'nav.consular.studyKorea': 'الدراسة في كوريا',
    'nav.consular.announcements': 'الإعلانات',
    'nav.relations': 'العلاقات الثنائية',
    'nav.relations.diplomatic': 'العلاقات الدبلوماسية',
    'nav.relations.economic': 'التعاون الاقتصادي',
    'nav.relations.cultural': 'التبادل الثقافي',
    'nav.relations.bilateral': 'العلاقات الثنائية',
    'nav.news': 'الأخبار والإعلانات',
    'nav.ambassador': 'السفير',
    'nav.organization': 'الهيكل التنظيمي',
    'nav.contact': 'الاتصال والموقع',
    'nav.about': 'عن السفارة',

    // Page titles and common terms
    'common.more': 'المزيد',
    'common.apply': 'تقديم',
    'common.contact': 'اتصل',
    'common.information': 'معلومات',
    'common.services': 'خدمات',
    'common.overview': 'نظرة عامة',
    'common.details': 'التفاصيل',
    'common.submit': 'إرسال',
    'common.required': 'مطلوب',
    'common.optional': 'اختياري',
    'common.fee': 'الرسوم',
    'common.duration': 'المدة',
    'common.status': 'الحالة',
    'common.location': 'الموقع',
    'common.hours': 'ساعات العمل',
    'common.emergency': 'طوارئ',
    'common.address': 'العنوان',
    'common.phone': 'الهاتف',
    'common.email': 'البريد الإلكتروني',
    'common.position': 'المنصب',
    'common.relatedInfo': 'معلومات ذات صلة',

    // Embassy pages
    'embassy.about.title': 'معلومات عن سفارة موريتانيا',
    'embassy.about.overview.title': 'نظرة عامة على السفارة',
    'embassy.about.services.title': 'الوظائف الرئيسية',
    'embassy.organization.title': 'الهيكل التنظيمي لسفارة موريتانيا',
    'embassy.contact.title': 'الاتصال والاستفسار',
    'embassy.contact.form.title': 'استفسار عبر الإنترنت',
    'embassy.contact.form.name': 'الاسم',
    'embassy.contact.form.email': 'البريد الإلكتروني',
    'embassy.contact.form.message': 'الرسالة',

    // Contact
    'contact.title': 'الاتصال والاستفسار',
    'contact.subtitle': 'تواصل أو استفسر من سفارة {country}',
    'contact.inquirySubmitted': 'تم تقديم الاستفسار',
    'contact.submissionSuccess': 'تم تقديم استفسارك بنجاح. سنرد عليك في أقرب وقت ممكن.',
    'contact.generalInquiry': 'استفسار عام',
    'contact.consularServices': 'الخدمات القنصلية',
    'contact.economicTrade': 'التجارة الاقتصادية',
    'contact.culturalExchange': 'التبادل الثقافي',
    'contact.politicalAffairs': 'الشؤون السياسية',
    'contact.administrative': 'إداري',
    'contact.basicInfo': 'المعلومات الأساسية',
    'contact.addressLine1': '٢٤٦ إيتايون-رو، يونغسان-غو، سيول',
    'contact.postalCode': 'سيول ٠٤٣٤٩',
    'contact.main': 'رئيسي',
    'contact.consularDept': 'القسم القنصلي',
    'contact.fax': 'فاكس',
    'contact.operatingHours': 'ساعات العمل',
    'contact.weekdays': 'أيام الأسبوع',
    'contact.weekdayHours': '٠٩:٠٠ - ١٧:٠٠',
    'contact.saturday': 'السبت',
    'contact.saturdayHours': '٠٩:٠٠ - ١٢:٠٠',
    'contact.sundayHolidays': 'الأحد والعطلات',
    'contact.closed': 'مغلق',
    'contact.lunchTime': 'استراحة الغداء',
    'contact.lunchHours': '١٢:٠٠ - ١٣:٠٠',
    'contact.consularHours': 'ساعات القنصلية',
    'contact.consularSchedule': 'الاثنين-الجمعة ٠٩:٠٠-١٢:٠٠، ١٤:٠٠-١٦:٠٠',
    'contact.emergency': 'اتصال الطوارئ',
    'contact.emergencyPhone': '+٨٢-١٠-١٢٣٤-٥٦٧٨',
    'contact.directions': 'الاتجاهات',
    'contact.subway': 'المترو',
    'contact.subwayLine1': 'الخط ٦ محطة إيتايون المخرج ٣، ٥ دقائق مشياً',
    'contact.subwayLine2': 'الخط ٤ محطة هانغانجين المخرج ٢، ١٠ دقائق مشياً',
    'contact.bus': 'الحافلة',
    'contact.mainBus': 'الحافلة الرئيسية',
    'contact.localBus': 'الحافلة المحلية',
    'contact.busStop': 'موقف الحافلة',
    'contact.busStopLocation': 'تقاطع إيتايون',
    'contact.car': 'السيارة',
    'contact.parkingSpace': 'مواقف السيارات',
    'contact.parkingInfo': '٢٠ موقف (مجاني، ساعتان)',
    'contact.navigation': 'عنوان الملاحة',
    'contact.onlineInquiry': 'استفسار عبر الإنترنت',
    'contact.name': 'الاسم',
    'contact.namePlaceholder': 'الرجاء إدخال اسمك',
    'contact.inquiryDepartment': 'قسم الاستفسار',
    'contact.subject': 'الموضوع',
    'contact.subjectPlaceholder': 'الرجاء إدخال موضوع الاستفسار',
    'contact.message': 'الرسالة',
    'contact.messagePlaceholder': 'الرجاء إدخال استفسارك بالتفصيل',
    'contact.privacyTitle': 'سياسة الخصوصية',
    'contact.privacyText': 'ستُستخدم المعلومات الشخصية المدخلة لمعالجة الاستفسارات فقط وستُدار بأمان وفقاً للقوانين ذات الصلة.',
    'contact.submitInquiry': 'إرسال الاستفسار',
    'contact.emergencyContacts': 'جهات اتصال الطوارئ',
    'contact.emergency24h': 'هاتف الطوارئ ٢٤ ساعة',
    'contact.emergencyDescription': 'للطوارئ التي تهدد الحياة',
    'contact.medicalEmergency': 'طوارئ طبية',
    'contact.koreaEmergencyNumber': '١١٩ (الطوارئ الطبية في كوريا)',
    'contact.medicalEmergencyDesc': 'عند الحاجة إلى علاج طبي طارئ',
    'contact.policeReport': 'بلاغ أمني',
    'contact.koreaPoliceNumber': '١١٢ (الشرطة الكورية)',
    'contact.policeReportDesc': 'الإبلاغ عن الجرائم والمساعدة الأمنية',

    // Consular services
    'consular.passport.title': 'دليل إصدار جواز السفر',
    'consular.certificates.title': 'إصدار الشهادات',
    'consular.services.title': 'دليل الخدمات القنصلية',
    'consular.services.overview.title': 'نظرة عامة على الخدمات القنصلية',

    // Passport services
    'passport.title': 'دليل إصدار جواز السفر',
    'passport.newIssuance': 'إصدار جواز سفر جديد',
    'passport.newIssuanceDesc': 'لطلب جواز السفر لأول مرة',
    'passport.newIssuanceFee': '٨٠ دولار',
    'passport.newIssuanceDuration': '١٠-١٥ يوم',
    'passport.newIssuanceValidity': '١٠ سنوات (للبالغين)',
    'passport.renewal': 'تجديد جواز السفر',
    'passport.renewalDesc': 'لجوازات السفر منتهية الصلاحية أو المفقودة',
    'passport.renewalFee': '٨٠ دولار',
    'passport.renewalDuration': '١٠-١٥ يوم',
    'passport.renewalValidity': '١٠ سنوات (للبالغين)',
    'passport.extension': 'تمديد جواز السفر',
    'passport.extensionDesc': 'للظروف الخاصة',
    'passport.extensionFee': '٣٠ دولار',
    'passport.extensionDuration': '٣-٥ أيام',
    'passport.extensionValidity': 'سنة واحدة كحد أقصى',
    'passport.minor': 'جواز سفر القاصرين',
    'passport.minorDesc': 'للأطفال دون ١٨ عاماً',
    'passport.minorFee': '٥٠ دولار',
    'passport.minorDuration': '١٠-١٥ يوم',
    'passport.minorValidity': '٥ سنوات',

    // Relations
    'relations.diplomatic.title': 'العلاقات الدبلوماسية الكورية-الموريتانية',
    'relations.economic.title': 'التعاون الاقتصادي الكوري-الموريتاني',
    'relations.cultural.title': 'التبادل الثقافي الكوري-الموريتاني',

    // Mauritania info
    'mauritania.culture.title': 'الثقافة الموريتانية',
    'mauritania.economy.title': 'المعلومات الاقتصادية لموريتانيا',
    'mauritania.tourism.title': 'دليل السياحة في موريتانيا',

    // Ambassador
    'ambassador.title': 'السفير',
    'ambassador.subtitle': 'سفير {country} في كوريا',
    'ambassador.greeting': 'تحيات السفير',
    'ambassador.greetingText1': 'تحياتي. أنا محمد عبد القادر، السفير فوق العادة والمفوض لـ {country}.',
    'ambassador.greetingText2': 'تتطور العلاقات الدبلوماسية الودية بين كوريا و{country} باستمرار منذ إقامة العلاقات الدبلوماسية في عام ١٩٦٢.',
    'ambassador.greetingText3': 'بصفتي سفير {country}، سأبذل قصارى جهدي لتطوير العلاقات الثنائية، وسأعمل على حماية حقوق مواطني {country} المقيمين في كوريا وتعزيز رفاهيتهم.',
    'ambassador.greetingText4': 'آمل أن تتعمق الصداقة بين كوريا و{country} وتتطور أكثر.',
    'ambassador.career': 'المسيرة المهنية الرئيسية',
    'ambassador.career1Period': '٢٠٢٢ - الحاضر',
    'ambassador.career1': 'السفير فوق العادة والمفوض لـ {country} في كوريا',
    'ambassador.career2Period': '٢٠١٨ - ٢٠٢٢',
    'ambassador.career2': 'مدير إدارة آسيا والمحيط الهادئ، وزارة الخارجية {country}',
    'ambassador.career3Period': '٢٠١٤ - ٢٠١٨',
    'ambassador.career3': 'وزير مفوض في سفارة {country} في فرنسا',
    'ambassador.career4Period': '٢٠١٠ - ٢٠١٤',
    'ambassador.career4': 'مدير في إدارة المنظمات المتعددة الأطراف، وزارة الخارجية {country}',
    'ambassador.career5Period': '٢٠٠٥ - ٢٠١٠',
    'ambassador.career5': 'السكرتير الأول في سفارة {country} في المغرب',
    'ambassador.role': 'السفير فوق العادة والمفوض',
    'ambassador.appointmentDate': 'تاريخ التعيين',
    'ambassador.appointed': '١٥ سبتمبر ٢٠٢٢',
    'ambassador.origin': 'الأصل',
    'ambassador.birthplace': 'نواكشوط',
    'ambassador.education': 'التعليم',
    'ambassador.university': 'جامعة داكار، قسم الدبلوماسية',
    'ambassador.meetingInfo': 'معلومات لقاء السفير',
    'ambassador.meetingTime': 'ساعات اللقاء',
    'ambassador.meetingHours': 'الثلاثاء، الخميس ١٤:٠٠-١٦:٠٠',
    'ambassador.reservationMethod': 'طريقة الحجز',
    'ambassador.reservationRequired': 'الحجز المسبق مطلوب (عبر الهاتف أو البريد الإلكتروني)',
    'ambassador.recentActivities': 'الأنشطة الأخيرة',
    'ambassador.activity1': 'المشاركة في المنتدى الاقتصادي الكوري-الموريتاني',
    'ambassador.activity2': 'لقاء مع وزير الخارجية الكوري',
    'ambassador.activity3': 'استضافة الفعاليات الثقافية الموريتانية',
    'ambassador.message1': 'تحياتي. أنا السفير فوق العادة والمفوض لـ {country}.',
    'ambassador.message2': 'تطور موريتانيا وكوريا علاقات ودية باستمرار منذ إقامة العلاقات الدبلوماسية في عام ١٩٦٢. يعزز البلدان التعاون القائم على المصالح المشتركة في مختلف المجالات بما في ذلك السياسة والاقتصاد والثقافة.',
    'ambassador.message3': 'تعمل سفارتنا بإخلاص كجسر بين بلدينا وتسعى جاهدة لتقديم أفضل الخدمات القنصلية للمواطنين الموريتانيين والموريتانيين المقيمين في كوريا.',
    'ambassador.thanks': 'شكراً لكم.',
    'ambassador.name': 'محمد المختار',
    'ambassador.position': 'السفير فوق العادة والمفوض',

    // About
    'about.title': 'عن السفارة',
    'about.subtitle': 'تقديم دور ووظائف سفارة {country} في كوريا',
    'about.overview': 'نظرة عامة على السفارة',
    'about.description1': 'أُنشئت سفارة {country} في كوريا مع إقامة العلاقات الدبلوماسية بين كوريا و{country} في عام ١٩٦٢ وتعمل على تعزيز الصداقة وتوسيع التعاون بين البلدين.',
    'about.description2': 'تعمل هذه السفارة على تعزيز التبادل والتعاون بين كوريا و{country} في مختلف المجالات مثل السياسة والاقتصاد والثقافة والعلوم والتكنولوجيا.',
    'about.description3': 'نعمل أيضاً على تعزيز التفاهم المتبادل بين شعبي البلدين من خلال تقديم التراث الثقافي الغني والموارد السياحية لـ {country} للمواطنين الكوريين.',
    'about.mainFunctions': 'الوظائف الرئيسية',
    'about.history': 'تاريخ السفارة',
    'about.history1Year': '١٩٦٢',
    'about.history1': 'إقامة العلاقات الدبلوماسية بين كوريا و{country} وافتتاح السفارة',
    'about.history2Year': '١٩٧٥',
    'about.history2': 'الانتقال إلى مبنى السفارة الحالي (يونغسان-غو، سيول)',
    'about.history3Year': '١٩٨٥',
    'about.history3': 'إنشاء إدارة الاقتصاد والتجارة، تعزيز التعاون الاقتصادي',
    'about.history4Year': '٢٠٠٠',
    'about.history4': 'افتتاح المركز الثقافي، بدء أنشطة التبادل الثقافي على نطاق واسع',
    'about.history5Year': '٢٠١٥',
    'about.history5': 'إدخال الخدمات القنصلية الرقمية، توسيع الخدمات عبر الإنترنت',
    'about.history6Year': '٢٠٢٠',
    'about.history6': 'تعزيز الخدمات القنصلية عبر الإنترنت استجابةً لكوفيد-١٩',
    'about.diplomaticAffairs': 'الشؤون الدبلوماسية',
    'about.diplomaticItem1': 'المشاورات السياسية بين الحكومتين',
    'about.diplomaticItem2': 'تعزيز العلاقات الدبلوماسية وإبرام الاتفاقيات',
    'about.diplomaticItem3': 'التعاون داخل المنظمات الدولية',
    'about.diplomaticItem4': 'دعم الزيارات المتبادلة رفيعة المستوى',
    'about.consularAffairs': 'الشؤون القنصلية',
    'about.consularItem1': 'إصدار وتمديد التأشيرات',
    'about.consularItem2': 'إصدار وتجديد جوازات السفر',
    'about.consularItem3': 'إصدار الشهادات المختلفة',
    'about.consularItem4': 'حماية ودعم المواطنين',
    'about.economicAffairs': 'الشؤون الاقتصادية والتجارية',
    'about.economicItem1': 'تعزيز التجارة والاستثمار',
    'about.economicItem2': 'تعزيز مشاريع التعاون الاقتصادي',
    'about.economicItem3': 'دعم التبادل بين الشركات',
    'about.economicItem4': 'تقديم بيئة الاستثمار',
    'about.culturalAffairs': 'شؤون الترويج الثقافي',
    'about.culturalItem1': 'استضافة فعاليات التبادل الثقافي',
    'about.culturalItem2': 'تقديم الثقافة التقليدية',
    'about.culturalItem3': 'دعم التبادل الأكاديمي',
    'about.culturalItem4': 'الترويج السياحي',
    'about.facilities': 'معلومات المرافق',
    'about.operatingHours': 'ساعات العمل',
    'about.weekdays': 'أيام الأسبوع',
    'about.weekdayHours': '٠٩:٠٠ - ١٧:٠٠',
    'about.lunchTime': 'استراحة الغداء',
    'about.lunchHours': '١٢:٠٠ - ١٣:٠٠',
    'about.saturday': 'السبت',
    'about.saturdayHours': '٠٩:٠٠ - ١٢:٠٠',
    'about.closed': 'مغلق',
    'about.closedDays': 'الأحد، العطلات الرسمية',
    'about.locationInfo': 'معلومات الموقع',
    'about.address': '٢٤٦ إيتايون-رو، يونغسان-غو، سيول',
    'about.subway': 'المترو',
    'about.subwayInfo': 'الخط ٦ محطة إيتايون المخرج ٣',
    'about.bus': 'الحافلة',
    'about.busInfo': '٤٢١، ٤٦٣، ٥٠٢',
    'about.parkingTitle': 'موقف السيارات',
    'about.parkingInfo': '٢٠ موقف (مجاني، ساعتان)',
    'about.statistics2023': 'حالة العمل ٢٠٢٣',
    'about.visaIssuance': 'إصدار التأشيرات',
    'about.visaCount': '٢,٤٥٠ حالة',
    'about.passportServices': 'خدمات جواز السفر',
    'about.passportCount': '١,١٢٠ حالة',
    'about.certificateIssuance': 'إصدار الشهادات',
    'about.certificateCount': '٣,٢٠٠ حالة',
    'about.culturalEvents': 'الفعاليات الثقافية',
    'about.eventCount': '٢٤ مرة',
    'about.mainBuilding1F': 'المبنى الرئيسي (الطابق الأول)',
    'about.mainBuilding2F': 'المبنى الرئيسي (الطابق الثاني)',
    'about.annexBuilding': 'المبنى الملحق',
    'about.auxiliaryFacilities': 'المرافق المساعدة',
    'about.consularSection': 'القسم القنصلي',
    'about.receptionRoom': 'غرفة الاستقبال',
    'about.waitingRoom': 'غرفة الانتظار',
    'about.infoDesk': 'مكتب المعلومات',
    'about.ambassadorOffice': 'مكتب السفير',
    'about.politicalSection': 'القسم السياسي',
    'about.economicSection': 'القسم الاقتصادي',
    'about.meetingRoom': 'غرفة الاجتماعات',
    'about.culturalCenter': 'المركز الثقافي',
    'about.exhibitionHall': 'قاعة المعارض',
    'about.seminarRoom': 'قاعة الندوات',
    'about.library': 'المكتبة',
    'about.parking': 'موقف السيارات',
    'about.restArea': 'منطقة الراحة',
    'about.cafeteria': 'الكافيتيريا',
    'about.giftShop': 'متجر الهدايا',

    // News
    'news.title': 'آخر الأخبار',
    'news.item1.title': 'الاجتماع الخامس للجنة التعاون الاقتصادي الكوري-الموريتاني',
    'news.item1.content': 'عُقد اجتماع لمناقشة سبل توسيع التعاون الاقتصادي بين البلدين في سيول.',
    'news.item2.title': 'إعلان فعالية الأسبوع الثقافي الموريتاني',
    'news.item2.content': 'ستُقام فعالية تجربة الثقافة الموريتانية التقليدية في دار الثقافة الكورية في الأسبوع الأول من سبتمبر.',
    'news.item3.title': 'تغييرات في إجراءات طلب التأشيرة',
    'news.item3.content': 'سيتم تقديم نظام الحجز المسبق عبر الإنترنت لطلبات تأشيرة السياحة اعتباراً من ١ سبتمبر.',
    'news.item4.title': 'حفل استقبال عيد استقلال موريتانيا',
    'news.item4.content': 'سيُقام حفل استقبال بمناسبة الذكرى ٦٥ لاستقلال موريتانيا في ٢٨ نوفمبر.',

    // Sidebar
    'sidebar.services.title': 'الخدمات الرئيسية',
    'sidebar.services.visa': 'طلب التأشيرة',
    'sidebar.services.passport': 'إصدار جواز السفر',
    'sidebar.services.birth': 'تسجيل الولادة',
    'sidebar.services.waiver': 'دليل الإعفاء من التأشيرة',
    'sidebar.services.apostille': 'أبوستيل',
    'sidebar.services.confirmation': 'التصديق القنصلي',
    'sidebar.info.title': 'معلومات السفارة',
    'sidebar.info.address': 'الطابق ٧، مبنى هانام\n٩٨ هانام-دايرو، يونغسان-غو، سيول',
    'sidebar.info.phone': '+٨٢-٢-٧٩٧-٢٠٣٤',
    'sidebar.info.fax': '+٨٢-٢-٧٩٧-٢٠٣٥',
    'sidebar.info.email': 'embassy.mauritania@korea.mr',
    'sidebar.info.hours': 'الإثنين-الجمعة ٠٩:٠٠-١٧:٠٠\n(الغداء: ١٢:٠٠-١٣:٠٠)',
    'sidebar.info.address.label': 'العنوان:',
    'sidebar.info.phone.label': 'الهاتف:',
    'sidebar.info.fax.label': 'الفاكس:',
    'sidebar.info.email.label': 'البريد الإلكتروني:',
    'sidebar.info.hours.label': 'الساعات:',
    'sidebar.links.title': 'روابط مفيدة',
    'sidebar.links.government': 'حكومة موريتانيا',
    'sidebar.links.tourism': 'هيئة السياحة الموريتانية',
    'sidebar.links.mofa': 'وزارة الخارجية الكورية',
    'sidebar.links.consul': 'الخدمة القنصلية ٢٤ ساعة',
    'sidebar.links.safety': 'سلامة السفر للخارج',

    // Footer
    'footer.address': 'الطابق ٧، مبنى هانام، ٩٨ هانام-دايرو، يونغسان-غو، سيول',
    'footer.contact': 'هاتف: +٨٢-٢-٧٩٧-٢٠٣٤ | فاكس: +٨٢-٢-٧٩٧-٢٠٣٥',
    'footer.contact.title': 'اتصل بنا',
    'footer.hours.title': 'ساعات العمل',
    'footer.links.privacy': 'سياسة الخصوصية',
    'footer.links.terms': 'شروط الخدمة',
    'footer.links.sitemap': 'خريطة الموقع',
    'footer.copyright': '© ٢٠٢٥ سفارة موريتانيا في كوريا. جميع الحقوق محفوظة.',

    // Organization
    'organization.title': 'الهيكل التنظيمي',
    'organization.subtitle': 'هيكل تنظيم السفارة',
    'organization.overview': 'نظرة عامة على التنظيم',
    'organization.departments': '٧ أقسام',
    'organization.totalStaff': '٣٢ موظف',
    'organization.establishedYear': 'تأسست عام ١٩٧٣',
    'organization.structure': 'الهيكل التنظيمي',
    'organization.ambassadorOffice': 'مكتب السفير',
    'organization.ambassadorName': 'السفير أحمد سالم ولد بوبكر',
    'organization.ambassadorTitle': 'السفير فوق العادة والمفوض',
    'organization.departmentHead': 'رئيس القسم',
    'organization.departmentDetails': 'تفاصيل القسم',
    'organization.members': 'الأعضاء',
    'organization.responsibilities': 'المسؤوليات الرئيسية',
    'organization.contactByDepartment': 'الاتصال حسب القسم',
    'organization.directLine': 'الخط المباشر',
    'organization.fax': 'فاكس',
    'organization.politicalSection': 'القسم السياسي',
    'organization.economicSection': 'القسم الاقتصادي',
    'organization.consularSection': 'القسم القنصلي',
    'organization.culturalSection': 'القسم الثقافي',
    'organization.adminSection': 'القسم الإداري',

    // Admin
    'admin.header.title': 'إدارة أنشطة السفارة',
    'admin.header.subtitle': 'سفارة موريتانيا في كوريا',
    'admin.viewSite': '← عرض الموقع',
    'admin.logout': 'تسجيل الخروج',
    'admin.news.management': 'إدارة المقالات',
    'admin.news.published': 'منشور',
    'admin.news.draft': 'مسودة',
    'admin.news.newPost': 'مقال جديد',
    'admin.news.editPost': 'تعديل المقال',
    'admin.news.backToList': 'العودة إلى القائمة ←',
    'admin.news.save': 'حفظ',
    'admin.news.saveDraft': 'حفظ كمسودة',
    'admin.news.publish': 'نشر',
    'admin.news.updatePublished': 'تحديث',
    'admin.news.saving': 'جاري الحفظ...',
    'admin.news.category': 'الفئة',
    'admin.news.categoryActivity': 'أنشطة السفارة',
    'admin.news.categoryAnnouncement': 'الإعلانات',
    'admin.news.categoryEvent': 'الفعاليات',
    'admin.news.progress': 'تقدم الترجمة',
    'admin.news.languagesComplete': '{count}/{total} لغات مكتملة',
    'admin.news.title': 'العنوان',
    'admin.news.content': 'المحتوى',
    'admin.news.titlePlaceholder': 'أدخل العنوان بـ{lang}',
    'admin.news.contentPlaceholder': 'أدخل المحتوى بـ{lang}',
    'admin.news.koreanRequired': 'العنوان الكوري مطلوب.',
    'admin.news.tips': '💡 نصائح الكتابة',
    'admin.news.tip1': 'الكورية إلزامية، واللغات الأخرى اختيارية.',
    'admin.news.tip2': 'الكتابة بجميع اللغات توفر تجربة أفضل.',
    'admin.news.tip3': 'العربية تُحاذى تلقائياً من اليمين إلى اليسار.',
    'admin.news.tip4': 'تحميل الصور: انقر على زر الصورة في شريط الأدوات.',
    'admin.news.noPosts': 'لا توجد مقالات',
    'admin.news.createFirst': 'أنشئ مقالك الأول!',
    'admin.news.sampleData': '(بيانات نموذجية)',
    'admin.news.edit': 'تعديل',
    'admin.news.unpublish': 'إلغاء النشر',
    'admin.news.delete': 'حذف',
    'admin.news.published.label': 'منشور',
    'admin.news.draft.label': 'مسودة',
    'admin.table.title': 'العنوان',
    'admin.table.category': 'الفئة',
    'admin.table.status': 'الحالة',
    'admin.table.date': 'التاريخ',
    'admin.table.actions': 'الإجراءات',
    'admin.confirm.delete': 'هل أنت متأكد من الحذف؟',
    'admin.alert.sampleNoDelete': 'لا يمكن حذف البيانات النموذجية.',
    'admin.alert.sampleNoEdit': 'لا يمكن تعديل البيانات النموذجية.',
    'admin.alert.saved': 'تم الحفظ بنجاح!',
    'admin.alert.published': 'تم النشر بنجاح!',
    'admin.alert.saveFailed': 'فشل الحفظ. يرجى المحاولة مرة أخرى.',
    'admin.alert.loadFailed': 'فشل تحميل المقال.',
    'admin.alert.deleteFailed': 'فشل الحذف.',
    'admin.alert.statusFailed': 'فشل تغيير الحالة.',
    // Admin Login
    'admin.login.title': 'تسجيل دخول المسؤول',
    'admin.login.subtitle': 'نظام إدارة سفارة موريتانيا',
    'admin.login.username': 'اسم المستخدم',
    'admin.login.usernamePlaceholder': 'أدخل اسم المستخدم',
    'admin.login.password': 'كلمة المرور',
    'admin.login.passwordPlaceholder': 'أدخل كلمة المرور',
    'admin.login.submit': 'تسجيل الدخول',
    'admin.login.loggingIn': 'جارٍ تسجيل الدخول...',
    'admin.login.error': 'فشل تسجيل الدخول.',
    'admin.login.forgotPassword': 'نسيت كلمة المرور؟',
    'admin.login.contactAdmin': 'تواصل مع مسؤول السفارة.',
    'admin.login.backToSite': 'العودة إلى الموقع الرئيسي',
  }
}