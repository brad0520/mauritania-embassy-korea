import HeroSection from '@/components/sections/HeroSection'
import MainContentSection from '@/components/sections/MainContentSection'

export default function Home() {
  return (
    <div className="bg-white">
      {/* 히어로 섹션 - MOFA 스타일 */}
      <HeroSection />

      {/* 공지사항/뉴스 - 히어로 바로 아래 */}
      <MainContentSection />
    </div>
  )
}
