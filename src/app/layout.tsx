import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { I18nProvider } from '@/i18n/context';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { SimpleAdminAuthProvider } from '@/contexts/SimpleAdminAuth';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollHandler from "../components/ScrollHandler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 아랍어 폰트 추가 - RTL 언어 지원
const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "주한 모리타니아 대사관 | Embassy of Mauritania in Korea",
  description: "주한 모리타니아 이슬람 공화국 대사관 공식 웹사이트 - Embassy of the Islamic Republic of Mauritania in the Republic of Korea",
  // 파비콘: app/icon.svg, app/apple-icon.png 파일로 자동 적용
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 기본 언어는 한국어, 클라이언트에서 I18nProvider가 동적으로 lang과 dir 속성을 업데이트합니다
  return (
    <html lang="ko" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable} antialiased`}
      >
        <ScrollHandler />
        <I18nProvider>
          <ThemeProvider>
            <SimpleAdminAuthProvider>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
              </div>
            </SimpleAdminAuthProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
