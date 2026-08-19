import type { Metadata, Viewport } from "next";

import { DesktopToc } from "@/components/layout/DesktopToc";
import { MobileNavBar } from "@/components/layout/MobileNavBar";
import { site } from "@/content/site";
import { themeInitScript } from "@/lib/theme";

import "./globals.css";

export const metadata: Metadata = {
  title: site.name ? `${site.name} — 포트폴리오` : "포트폴리오",
  description: site.tagline || "프론트엔드 개발자 포트폴리오",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0d" },
  ],
};

/**
 * 첫 화면에 반드시 필요한 폰트 subset만 preload한다.
 * 91 = 기본 라틴 + 최빈 한글, 90 / 89 = 그다음 빈도의 한글.
 * 나머지 89개는 unicode-range에 걸릴 때만 브라우저가 받아 간다.
 */
const preloadedFontSubsets = [91, 90, 89];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {preloadedFontSubsets.map((index) => (
          <link
            key={index}
            rel="preload"
            as="font"
            type="font/woff2"
            href={`/fonts/pretendard/PretendardVariable.subset.${index}.woff2`}
            crossOrigin="anonymous"
          />
        ))}
        {/* 첫 페인트 전에 테마를 적용해 깜빡임을 막는다. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a
          href="#cases"
          data-print="hide"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-surface focus:px-3 focus:py-2"
        >
          본문으로 건너뛰기
        </a>

        <MobileNavBar siteName={site.name} />
        <DesktopToc />

        {children}
      </body>
    </html>
  );
}
