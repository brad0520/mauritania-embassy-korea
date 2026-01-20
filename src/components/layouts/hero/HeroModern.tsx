'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'

interface HeroLayoutProps {
  className?: string
}

// 슬라이드 데이터
const slides = [
  {
    id: 1,
    title: {
      ko: '주한 모리타니아 대사관에 오신 것을 환영합니다',
      en: 'Welcome to the Embassy of Mauritania',
      fr: "Bienvenue à l'Ambassade de Mauritanie",
      ar: 'مرحباً بكم في سفارة موريتانيا'
    },
    image: '/images/slides/mauritania-slide-1.jpeg'
  },
  {
    id: 2,
    title: {
      ko: '양국 간의 우호 협력',
      en: 'Bilateral Cooperation',
      fr: 'Coopération bilatérale',
      ar: 'التعاون الثنائي'
    },
    image: '/images/slides/mauritania-slide-2.jpeg'
  },
  {
    id: 3,
    title: {
      ko: '문화 교류 행사',
      en: 'Cultural Exchange Events',
      fr: 'Événements culturels',
      ar: 'الفعاليات الثقافية'
    },
    image: '/images/slides/mauritania-slide-3.jpeg'
  },
  {
    id: 4,
    title: {
      ko: '모리타니아의 자연과 문화',
      en: 'Nature and Culture of Mauritania',
      fr: 'Nature et culture de Mauritanie',
      ar: 'طبيعة وثقافة موريتانيا'
    },
    image: '/images/slides/mauritania-slide-4.jpeg'
  },
  {
    id: 5,
    title: {
      ko: '사하라의 아름다운 풍경',
      en: 'Beautiful Landscapes of the Sahara',
      fr: 'Beaux paysages du Sahara',
      ar: 'مناظر الصحراء الجميلة'
    },
    image: '/images/slides/mauritania-slide-5.jpeg'
  },
  {
    id: 6,
    title: {
      ko: '모리타니아의 전통과 유산',
      en: 'Traditions and Heritage of Mauritania',
      fr: 'Traditions et patrimoine de Mauritanie',
      ar: 'تقاليد وتراث موريتانيا'
    },
    image: '/images/slides/mauritania-slide-6.jpeg'
  }
]

// 국기 이미지 컴포넌트 (고해상도 PNG 사용)
function FlagImage({ country, emoji }: { country: 'korea' | 'mauritania'; emoji: string }) {
  const [imageError, setImageError] = useState(false)
  // 고해상도 PNG 사용 (640px 원본 → 작은 크기로 표시하면 선명)
  const src = country === 'korea' ? '/images/flag-korea.png' : '/images/flag-mauritania.png'
  const alt = country === 'korea' ? 'Korean Flag' : 'Mauritanian Flag'

  if (imageError) {
    return <span className="text-2xl">{emoji}</span>
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      style={{ imageRendering: 'auto' }}
      onError={() => setImageError(true)}
    />
  )
}

/**
 * HeroModern - 현재 사용 중인 모던 레이아웃
 * 특징: 2x2 그리드 (슬라이드+대통령 / 시계+긴급연락처)
 */
export default function HeroModern({ className }: HeroLayoutProps) {
  const { locale, isRTL } = useI18n()
  const { currentTheme } = useTheme()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const [isTransitioning, setIsTransitioning] = useState(true)

  // 무한 루프를 위한 확장 슬라이드 (마지막에 첫 번째 슬라이드 복제)
  const extendedSlides = [...slides, slides[0]]

  // 자동 슬라이드
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => prev + 1)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  // 마지막 복제 슬라이드에서 실제 첫 번째로 점프
  useEffect(() => {
    if (currentSlide === slides.length) {
      // 복제된 첫 번째 슬라이드에 도달하면
      const timer = setTimeout(() => {
        setIsTransitioning(false) // transition 비활성화
        setCurrentSlide(0) // 실제 첫 번째로 점프
        // 다음 프레임에서 transition 다시 활성화
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true)
          })
        })
      }, 1000) // 전환 애니메이션 완료 후
      return () => clearTimeout(timer)
    }
  }, [currentSlide])

  // 실시간 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 시간대별 시간 계산
  const getTimeInTimezone = (offset: number) => {
    const utc = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000)
    return new Date(utc + (3600000 * offset))
  }

  const nouakchottTime = getTimeInTimezone(0)
  const seoulTime = getTimeInTimezone(9)

  const formatTime = (date: Date) => {
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    const hoursStr = hours < 10 ? '0' + hours : hours
    const minutesStr = minutes < 10 ? '0' + minutes : minutes
    return `${hoursStr}:${minutesStr} ${ampm}`
  }

  const formatDate = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}.${month}.${day}`
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className={cn(className)}>
      {/* ========== 데스크톱: 2x2 그리드 ========== */}
      <div className="hidden lg:block">
        {/* === 1행: 슬라이드 + 대통령 사진 === */}
        <div className="relative h-[480px]">
          {/* 배경 - 전체 너비 */}
          <div className="absolute inset-0 flex">
            {/* 슬라이드 배경 이미지 영역 (60%) */}
            <div className="w-[60%] relative overflow-hidden">
              <div
                className="flex h-full"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: isTransitioning ? 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                }}
              >
                {extendedSlides.map((slide, index) => (
                  <div
                    key={`bg-${slide.id}-${index}`}
                    className="min-w-full h-full relative flex-shrink-0"
                  >
                    <img
                      src={slide.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    {/* 어두운 오버레이 - 텍스트 가독성 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[40%] bg-gradient-to-br from-theme-dark to-black" />
          </div>

          {/* 콘텐츠 - 중앙 정렬 */}
          <div className="relative max-w-[1280px] mx-auto h-full flex">
            {/* 슬라이드 영역 (60%) */}
            <div className="w-[60%] h-full flex items-center relative overflow-hidden">
              <div
                className="flex h-full"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: isTransitioning ? 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                }}
              >
                {extendedSlides.map((slide, index) => (
                  <div
                    key={`text-${slide.id}-${index}`}
                    className="min-w-full h-full flex items-center flex-shrink-0"
                  >
                    <div className="px-8">
                      <h2 className={cn(
                        'text-white text-3xl font-bold mb-4 leading-tight max-w-lg',
                        isRTL && 'text-right'
                      )}>
                        {slide.title[locale as keyof typeof slide.title] || slide.title.ko}
                      </h2>
                      <p className="text-white/70 text-lg">
                        {locale === 'ko' ? '주한 모리타니아 이슬람 공화국 대사관' :
                         locale === 'en' ? 'Embassy of the Islamic Republic of Mauritania in the Republic of Korea' :
                         locale === 'fr' ? "Ambassade de la République Islamique de Mauritanie en République de Corée" :
                         'سفارة الجمهورية الإسلامية الموريتانية في كوريا'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 슬라이드 인디케이터 */}
              <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      'w-3 h-3 rounded-full transition-all',
                      index === (currentSlide % slides.length) ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                    )}
                  />
                ))}
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="ml-2 text-white/60 hover:text-white text-sm"
                >
                  {isAutoPlaying ? '⏸' : '▶'}
                </button>
              </div>
            </div>

            {/* 대통령 사진 영역 (40%) */}
            <div className="w-[40%] h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-72 h-96 mx-auto rounded-lg overflow-hidden mb-2 border-2 border-white/10 shadow-2xl">
                  <img
                    src="/images/president.png"
                    alt="Mohamed Ould Ghazouani"
                    className="w-full h-full object-cover object-top"
                    style={{ imageRendering: 'auto', WebkitFontSmoothing: 'antialiased' }}
                  />
                </div>
                <p className="text-white text-xl font-semibold">
                  {locale === 'ko' ? '모하메드 울드 가주아니' : 'Mohamed Ould Ghazouani'}
                </p>
                <p className="text-white/60 text-sm mt-1">
                  {locale === 'ko' ? '모리타니아 이슬람 공화국 대통령' :
                   locale === 'en' ? 'President of the Islamic Republic of Mauritania' :
                   locale === 'fr' ? 'Président de la République Islamique de Mauritanie' :
                   'رئيس الجمهورية الإسلامية الموريتانية'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === 2행: 양국 시계 (60%) + 긴급연락처 (40%) === */}
        <div className="relative h-[100px]" suppressHydrationWarning>
          {/* 배경 - 전체 너비 */}
          <div className="absolute inset-0 flex">
            <div className="w-[60%] bg-theme-nav" />
            <div className="w-[40%] bg-theme-dark" />
          </div>

          {/* 콘텐츠 - 중앙 정렬 */}
          <div className="relative max-w-[1280px] mx-auto h-full flex">
            {/* 양국 시계 영역 (60%) */}
            <div className="w-[60%] h-full flex items-center justify-center gap-12 px-8">
              {/* 모리타니아 */}
              <div className={cn('flex items-center gap-4', isRTL && 'flex-row-reverse')}>
                <div className="w-14 h-10 bg-white rounded overflow-hidden shadow-lg flex items-center justify-center">
                  <FlagImage country="mauritania" emoji="🇲🇷" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">
                    {locale === 'ko' ? '누악쇼트' : 'Nouakchott'}
                  </p>
                  <p className="text-white text-2xl font-bold">{formatTime(nouakchottTime)}</p>
                  <p className="text-white/50 text-xs">{formatDate(nouakchottTime)}</p>
                </div>
              </div>

              {/* 구분선 */}
              <div className="w-px h-16 bg-white/20" />

              {/* 한국 */}
              <div className={cn('flex items-center gap-4', isRTL && 'flex-row-reverse')}>
                <div className="w-14 h-10 bg-white rounded overflow-hidden shadow-lg flex items-center justify-center">
                  <FlagImage country="korea" emoji="🇰🇷" />
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">
                    {locale === 'ko' ? '서울' : 'Seoul'}
                  </p>
                  <p className="text-white text-2xl font-bold">{formatTime(seoulTime)}</p>
                  <p className="text-white/50 text-xs">{formatDate(seoulTime)}</p>
                </div>
              </div>
            </div>

            {/* 긴급연락처 영역 (40%) */}
            <div className="w-[40%] h-full flex items-center justify-center">
              <div className={cn('flex items-center gap-4', isRTL && 'flex-row-reverse')}>
                {/* 원형 전화 아이콘 */}
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                {/* 텍스트 */}
                <div className={isRTL ? 'text-right' : ''}>
                  <p className="text-white/60 text-xs uppercase tracking-wider">
                    {locale === 'ko' ? '긴급연락처' : locale === 'en' ? 'Emergency' : locale === 'fr' ? 'Urgence' : 'طوارئ'}
                  </p>
                  <p className="text-white text-xl font-bold">+82-2-790-6458</p>
                  <p className="text-white/50 text-xs">24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 모바일/태블릿 ========== */}
      <div className="lg:hidden">
        {/* 슬라이드 */}
        <div className="relative h-[280px] overflow-hidden">
          {/* 배경 이미지들 - 슬라이드 효과 */}
          <div
            className="flex h-full"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: isTransitioning ? 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={`mobile-bg-${slide.id}-${index}`}
                className="min-w-full h-full relative flex-shrink-0"
              >
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                {/* 어두운 오버레이 */}
                <div className="absolute inset-0 bg-black/50" />
              </div>
            ))}
          </div>

          {/* 텍스트 콘텐츠 - 슬라이드 효과 */}
          <div
            className="absolute inset-0 flex"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: isTransitioning ? 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={`mobile-text-${slide.id}-${index}`}
                className="min-w-full h-full flex items-center justify-center flex-shrink-0"
              >
                <div className="px-6 text-center">
                  <h2 className="text-white text-2xl font-bold mb-3 leading-tight drop-shadow-lg">
                    {slide.title[locale as keyof typeof slide.title] || slide.title.ko}
                  </h2>
                  <p className="text-white/80 text-sm drop-shadow">
                    {locale === 'ko' ? '주한 모리타니아 대사관' : 'Embassy of Mauritania in Korea'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  index === (currentSlide % slides.length) ? 'bg-white' : 'bg-white/40'
                )}
              />
            ))}
          </div>
        </div>

        {/* 대통령 사진 */}
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] py-8">
          <div className="text-center">
            <div className="w-44 h-56 mx-auto rounded-lg overflow-hidden mb-3 border-2 border-white/10 shadow-xl">
              <img
                src="/images/president.png"
                alt="Mohamed Ould Ghazouani"
                className="w-full h-full object-cover object-top"
                style={{ imageRendering: 'auto', WebkitFontSmoothing: 'antialiased' }}
              />
            </div>
            <p className="text-white text-lg font-semibold">Mohamed Ould Ghazouani</p>
            <p className="text-white/60 text-sm mt-1">
              {locale === 'ko' ? '모리타니아 대통령' : 'President of Mauritania'}
            </p>
          </div>
        </div>

        {/* 양국 시계 나란히 */}
        <div className="bg-theme-nav flex items-center justify-around py-5" suppressHydrationWarning>
          <div className="text-center">
            <div className="w-12 h-8 mx-auto mb-2 bg-white rounded overflow-hidden">
              <FlagImage country="mauritania" emoji="🇲🇷" />
            </div>
            <p className="text-white/60 text-xs">누악쇼트</p>
            <p className="text-white text-lg font-bold">{formatTime(nouakchottTime)}</p>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <div className="w-12 h-8 mx-auto mb-2 bg-white rounded overflow-hidden">
              <FlagImage country="korea" emoji="🇰🇷" />
            </div>
            <p className="text-white/60 text-xs">서울</p>
            <p className="text-white text-lg font-bold">{formatTime(seoulTime)}</p>
          </div>
        </div>

        {/* 긴급연락처 */}
        <div className="bg-theme-dark py-4">
          <div className="flex items-center justify-center gap-3">
            {/* 원형 전화 아이콘 */}
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            {/* 텍스트 */}
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wider">
                {locale === 'ko' ? '긴급연락처' : 'Emergency'}
              </p>
              <p className="text-white text-base font-bold">+82-2-790-6458</p>
              <p className="text-white/50 text-xs">24h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
