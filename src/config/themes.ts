import type { Organization } from '@/types'

export interface CountryTheme {
  id: string
  name: {
    ko: string
    en: string
    fr: string
    ar: string  // 아랍어 추가
  }
  colors: {
    primary: string    // 주요 색상
    secondary: string  // 보조 색상
    accent: string     // 강조 색상
  }
  flags: {
    country: string    // 해당 국가 국기
    korea: string      // 한국 국기
  }
  contact: {
    address: {
      ko: string
      en: string
      fr: string
      ar: string  // 아랍어 추가
    }
    phone: string
    fax: string
    email: string
    hours: {
      ko: string
      en: string
      fr: string
      ar: string  // 아랍어 추가
    }
  }
  links: {
    government: string
    tourism: string
  }
}

export const countryThemes: Record<string, CountryTheme> = {
  mauritania: {
    id: 'mauritania',
    name: {
      ko: '모리타니아 이슬람 공화국',
      en: 'Islamic Republic of Mauritania',
      fr: 'République Islamique de Mauritanie',
      ar: 'الجمهورية الإسلامية الموريتانية'
    },
    colors: {
      primary: '#2f3b66',    // 세네갈 스타일 - 진한 남색 (네비게이션)
      secondary: '#0c3975',  // 세네갈 스타일 - 더 진한 남색 (강조)
      accent: '#30a0e0'      // 세네갈 스타일 - 파란색 악센트
    },
    flags: {
      country: '🇲🇷',
      korea: '🇰🇷'
    },
    contact: {
      address: {
        ko: '(04389) 서울시 용산구 한강대로 26\n한강대우트럼프월드 3차 101동 902호',
        en: '902, Bldg 101, Hangang Daewoo Trump World 3rd\n26 Hangang-daero, Yongsan-gu, Seoul 04389',
        fr: '902, Bât. 101, Hangang Daewoo Trump World 3ème\n26 Hangang-daero, Yongsan-gu, Séoul 04389',
        ar: '٩٠٢، مبنى ١٠١، هانجانغ دايو ترامب وورلد الثالث\n٢٦ هانجانغ-دايرو، يونغسان-غو، سيول ٠٤٣٨٩'
      },
      phone: '+82-2-790-6458',
      fax: '+82-2-792-6458',
      email: 'ambarimseoul@diplomatie.gov.mr',
      hours: {
        ko: '월~금 09:00-17:00\n(점심시간 12:00-13:00)',
        en: 'Mon-Fri 09:00-17:00\n(Lunch: 12:00-13:00)',
        fr: 'Lun-Ven 09:00-17:00\n(Déjeuner: 12:00-13:00)',
        ar: 'الاثنين-الجمعة ٠٩:٠٠-١٧:٠٠\n(استراحة الغداء ١٢:٠٠-١٣:٠٠)'
      }
    },
    links: {
      government: 'http://www.gouvernement.gov.mr',
      tourism: 'http://www.mauritania.mr'
    }
  },

  senegal: {
    id: 'senegal',
    name: {
      ko: '세네갈 공화국',
      en: 'Republic of Senegal',
      fr: 'République du Sénégal',
      ar: 'جمهورية السنغال'
    },
    colors: {
      primary: '#00853F',    // 세네갈 국기의 녹색
      secondary: '#FFCD00',  // 세네갈 국기의 황색
      accent: '#CE1126'      // 세네갈 국기의 빨간색
    },
    flags: {
      country: '🇸🇳',
      korea: '🇰🇷'
    },
    contact: {
      address: {
        ko: '서울특별시 용산구 이태원로 109\n이태원빌딩 5층',
        en: '5th Floor, Itaewon Building\n109 Itaewon-ro, Yongsan-gu, Seoul',
        fr: '5ème étage, Bâtiment Itaewon\n109 Itaewon-ro, Yongsan-gu, Séoul',
        ar: 'الطابق الخامس، مبنى إيتايون\n١٠٩ إيتايون-رو، يونغسان-غو، سيول'
      },
      phone: '+82-2-749-5903',
      fax: '+82-2-749-5904',
      email: 'embassy.senegal@korea.sn',
      hours: {
        ko: '월~금 09:00-17:00\n(점심시간 12:30-14:00)',
        en: 'Mon-Fri 09:00-17:00\n(Lunch: 12:30-14:00)',
        fr: 'Lun-Ven 09:00-17:00\n(Déjeuner: 12:30-14:00)',
        ar: 'الاثنين-الجمعة ٠٩:٠٠-١٧:٠٠\n(استراحة الغداء ١٢:٣٠-١٤:٠٠)'
      }
    },
    links: {
      government: 'http://www.gouv.sn',
      tourism: 'http://www.senegal-tourism.com'
    }
  },

  morocco: {
    id: 'morocco',
    name: {
      ko: '모로코 왕국',
      en: 'Kingdom of Morocco',
      fr: 'Royaume du Maroc',
      ar: 'المملكة المغربية'
    },
    colors: {
      primary: '#C1272D',    // 모로코 국기의 빨간색
      secondary: '#FFD700',  // 황금색
      accent: '#006233'      // 녹색 악센트
    },
    flags: {
      country: '🇲🇦',
      korea: '🇰🇷'
    },
    contact: {
      address: {
        ko: '서울특별시 용산구 한남대로 27길 8-6\n모로코 대사관',
        en: '8-6 Hannam-daero 27-gil, Yongsan-gu, Seoul\nEmbassy of Morocco',
        fr: '8-6 Hannam-daero 27-gil, Yongsan-gu, Séoul\nAmbassade du Maroc',
        ar: '٨-٦ هانام-دايرو ٢٧-غيل، يونغسان-غو، سيول\nسفارة المغرب'
      },
      phone: '+82-2-793-6249',
      fax: '+82-2-792-8178',
      email: 'embassy.morocco@korea.ma',
      hours: {
        ko: '월~금 09:30-17:00\n(점심시간 12:00-14:00)',
        en: 'Mon-Fri 09:30-17:00\n(Lunch: 12:00-14:00)',
        fr: 'Lun-Ven 09:30-17:00\n(Déjeuner: 12:00-14:00)',
        ar: 'الاثنين-الجمعة ٠٩:٣٠-١٧:٠٠\n(استراحة الغداء ١٢:٠٠-١٤:٠٠)'
      }
    },
    links: {
      government: 'http://www.maroc.ma',
      tourism: 'http://www.visitmorocco.com'
    }
  },

  tunisia: {
    id: 'tunisia',
    name: {
      ko: '튀니지 공화국',
      en: 'Republic of Tunisia',
      fr: 'République Tunisienne',
      ar: 'الجمهورية التونسية'
    },
    colors: {
      primary: '#CE1126',    // 튀니지 국기의 빨간색
      secondary: '#FFFFFF',  // 흰색
      accent: '#00853F'      // 녹색 악센트
    },
    flags: {
      country: '🇹🇳',
      korea: '🇰🇷'
    },
    contact: {
      address: {
        ko: '서울특별시 용산구 한남대로 27길 4\n튀니지 대사관',
        en: '4 Hannam-daero 27-gil, Yongsan-gu, Seoul\nEmbassy of Tunisia',
        fr: '4 Hannam-daero 27-gil, Yongsan-gu, Séoul\nAmbassade de Tunisie',
        ar: '٤ هانام-دايرو ٢٧-غيل، يونغسان-غو، سيول\nسفارة تونس'
      },
      phone: '+82-2-790-4334',
      fax: '+82-2-790-4389',
      email: 'embassy.tunisia@korea.tn',
      hours: {
        ko: '월~금 09:00-16:30\n(점심시간 12:30-13:30)',
        en: 'Mon-Fri 09:00-16:30\n(Lunch: 12:30-13:30)',
        fr: 'Lun-Ven 09:00-16:30\n(Déjeuner: 12:30-13:30)',
        ar: 'الاثنين-الجمعة ٠٩:٠٠-١٦:٣٠\n(استراحة الغداء ١٢:٣٠-١٣:٣٠)'
      }
    },
    links: {
      government: 'http://www.tunisia.gov.tn',
      tourism: 'http://www.discovertunisia.com'
    }
  },

  egypt: {
    id: 'egypt',
    name: {
      ko: '이집트 아랍공화국',
      en: 'Arab Republic of Egypt',
      fr: 'République Arabe d\'Égypte',
      ar: 'جمهورية مصر العربية'
    },
    colors: {
      primary: '#CE1126',    // 이집트 국기의 빨간색
      secondary: '#FFFFFF',  // 흰색
      accent: '#000000'      // 검은색
    },
    flags: {
      country: '🇪🇬',
      korea: '🇰🇷'
    },
    contact: {
      address: {
        ko: '서울특별시 용산구 한남대로 46\n이집트 대사관',
        en: '46 Hannam-daero, Yongsan-gu, Seoul\nEmbassy of Egypt',
        fr: '46 Hannam-daero, Yongsan-gu, Séoul\nAmbassade d\'Égypte',
        ar: '٤٦ هانام-دايرو، يونغسان-غو، سيول\nسفارة مصر'
      },
      phone: '+82-2-749-0787',
      fax: '+82-2-794-5885',
      email: 'embassy.egypt@korea.eg',
      hours: {
        ko: '월~금 09:00-16:00\n(점심시간 13:00-14:00)',
        en: 'Mon-Fri 09:00-16:00\n(Lunch: 13:00-14:00)',
        fr: 'Lun-Ven 09:00-16:00\n(Déjeuner: 13:00-14:00)',
        ar: 'الاثنين-الجمعة ٠٩:٠٠-١٦:٠٠\n(استراحة الغداء ١٣:٠٠-١٤:٠٠)'
      }
    },
    links: {
      government: 'http://www.egypt.gov.eg',
      tourism: 'http://www.experienceegypt.eg'
    }
  }
}

// 기본 테마 (모리타니아)
export const defaultTheme = countryThemes.mauritania

// 국가 목록 (선택용)
export const availableCountries = Object.keys(countryThemes)

// 특정 국가 테마 가져오기
export function getCountryTheme(countryId: string): CountryTheme {
  return countryThemes[countryId] || defaultTheme
}