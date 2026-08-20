import type { Metadata, Viewport } from "next";

import { DesktopToc } from "@/components/layout/DesktopToc";
import { MobileNavBar } from "@/components/layout/MobileNavBar";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { themeInitScript } from "@/lib/theme";

import "./globals.css";

/** 공유 카드에 뜨는 제목. 이름과 직군을 그대로 쓴다. */
const shareTitle =
  site.name && site.role ? `${site.name} — ${site.role}` : "포트폴리오";
const shareDescription = site.tagline || "프론트엔드 개발자 포트폴리오";

export const metadata: Metadata = {
  title: site.name ? `${site.name} — 포트폴리오` : "포트폴리오",
  description: shareDescription,
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    type: "website",
    locale: "ko_KR",
  },
  // og 이미지가 아직 없으므로 텍스트만 나오는 summary 카드를 쓴다.
  twitter: {
    card: "summary",
    title: shareTitle,
    description: shareDescription,
  },
};

/**
 * "본문으로 건너뛰기"가 가리킬 자리. 본문은 첫 프로젝트에서 시작한다.
 * 프로젝트 목록에서 끌어와 섹션이 바뀌어도 링크가 죽지 않게 한다.
 */
const skipTarget = projects[0]?.id ?? "hero";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0d" },
  ],
};

/**
 * 첫 화면에 실제로 쓰이는 폰트 subset만 preload한다.
 * 91 = 기본 라틴 + 최빈 한글, 아래로 갈수록 낮은 빈도의 한글이다.
 *
 * 목록은 짐작이 아니라 첫 화면 문자열을 unicode-range에 대조해서 뽑았다.
 * 이름 "홍재훈"만 해도 89 / 87 / 85 셋에 흩어져 있고, tagline은 84와 88을,
 * 프로젝트명은 85를, 데스크톱 목차의 케이스 제목은 83과 86까지 끌어온다.
 * 그래서 83~91 아홉 개다. 하나라도 빠지면 그 글자만 폴백으로 남는다.
 *
 * 문서 전체는 어차피 24개(약 600KB)를 받는다. 브라우저가 레이아웃을 잡을 때
 * 화면 밖 글자까지 unicode-range를 훑기 때문이다. preload는 받는 양을 늘리는
 * 게 아니라 첫 화면 몫을 먼저 받게 하는 것이다.
 */
const preloadedFontSubsets = [91, 90, 89, 88, 87, 86, 85, 84, 83];

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
          href={`#${skipTarget}`}
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
