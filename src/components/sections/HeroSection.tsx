'use client'

import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/i18n/context'
import { useTheme } from '@/contexts/ThemeContext'

interface HeroSectionProps {
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
    image: '/images/slides/slide-1.jpg'
  },
  {
    id: 2,
    title: {
      ko: '양국 간의 우호 협력',
      en: 'Bilateral Cooperation',
      fr: 'Coopération bilatérale',
      ar: 'التعاون الثنائي'
    },
    image: '/images/slides/slide-2.jpg'
  },
  {
    id: 3,
    title: {
      ko: '문화 교류 행사',
      en: 'Cultural Exchange Events',
      fr: 'Événements culturels',
      ar: 'الفعاليات الثقافية'
    },
    image: '/images/slides/slide-3.jpg'
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

export default function HeroSection({ className }: HeroSectionProps) {
  const { locale, isRTL } = useI18n()
  const { currentTheme } = useTheme()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState<Date>(new Date())

  // 자동 슬라이드
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

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
            <div
              className="w-[60%]"
              style={{
                background: 'linear-gradient(135deg, var(--theme-hero-start) 0%, var(--theme-hero-mid) 50%, var(--theme-hero-end) 100%)'
              }}
            >
              {/* 배경 패턴 */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat'
                }}
              />
            </div>
            <div className="w-[40%] bg-gradient-to-br from-theme-dark to-black" />
          </div>

          {/* 콘텐츠 - 중앙 정렬 */}
          <div className="relative max-w-[1280px] mx-auto h-full flex">
            {/* 슬라이드 영역 (60%) */}
            <div className="w-[60%] h-full flex items-center relative">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={cn(
                    'absolute inset-0 transition-opacity duration-700 flex items-center',
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  )}
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
                       locale === 'en' ? 'Embassy of the Islamic Republic of Mauritania in Korea' :
                       locale === 'fr' ? "Ambassade de la République Islamique de Mauritanie en Corée" :
                       'سفارة الجمهورية الإسلامية الموريتانية في كوريا'}
                    </p>
                  </div>
                </div>
              ))}

              {/* 슬라이드 인디케이터 */}
              <div className="absolute bottom-6 left-8 flex items-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      'w-3 h-3 rounded-full transition-all',
                      index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
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
                <div className="w-56 h-72 mx-auto rounded-lg overflow-hidden mb-3 border-2 border-white/10 shadow-2xl">
                  <img
                    src="/images/president.png"
                    alt="Mohamed Ould Ghazouani"
                    className="w-full h-full object-cover object-top"
                    style={{ imageRendering: 'auto', WebkitFontSmoothing: 'antialiased' }}
                  />
                </div>
                <p className="text-white text-lg font-semibold">
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
              <div className="text-center">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                  {locale === 'ko' ? '긴급연락처' : locale === 'en' ? 'Emergency' : locale === 'fr' ? 'Urgence' : 'طوارئ'}
                </p>
                <p className="text-white text-xl font-bold">📞 +82-2-790-6458</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 모바일/태블릿 ========== */}
      <div className="lg:hidden">
        {/* 슬라이드 */}
        <div
          className="relative h-[280px] overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, var(--theme-hero-start) 0%, var(--theme-hero-mid) 50%, var(--theme-hero-end) 100%)'
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                'absolute inset-0 transition-opacity duration-700 flex items-center justify-center',
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              )}
            >
              <div className="px-6 text-center">
                <h2 className="text-white text-2xl font-bold mb-3 leading-tight">
                  {slide.title[locale as keyof typeof slide.title] || slide.title.ko}
                </h2>
                <p className="text-white/70 text-sm">
                  {locale === 'ko' ? '주한 모리타니아 대사관' : 'Embassy of Mauritania in Korea'}
                </p>
              </div>
            </div>
          ))}

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                )}
              />
            ))}
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

        {/* 대통령 사진 + 비상전화 */}
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] py-6">
          <div className="text-center">
            <div className="w-32 h-44 mx-auto rounded-lg overflow-hidden mb-3 border border-white/10">
              <img
                src="/images/president.png"
                alt="Mohamed Ould Ghazouani"
                className="w-full h-full object-cover object-top"
                style={{ imageRendering: 'auto', WebkitFontSmoothing: 'antialiased' }}
              />
            </div>
            <p className="text-white text-base font-semibold">Mohamed Ould Ghazouani</p>
            <p className="text-white/60 text-xs mt-1">
              {locale === 'ko' ? '모리타니아 대통령' : 'President of Mauritania'}
            </p>
            {/* 비상전화 */}
            <div className="mt-4 mx-auto max-w-[200px] bg-white/10 rounded-lg px-4 py-2">
              <p className="text-white/60 text-xs uppercase tracking-wider mb-1">
                {locale === 'ko' ? '긴급연락처' : 'Emergency'}
              </p>
              <p className="text-white text-sm font-bold">📞 +82-2-790-6458</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
