import type { Project } from "./types";

/**
 * 프로젝트 3개. 각 프로젝트가 하나의 섹션이 되고, 헤더 아래에 caseIds의 케이스가 이어진다.
 *
 * name / deployUrl / repoUrl은 spec.md에서 확정된 값이다.
 * stack 표기는 이력서와 맞춘다.
 * screenshot은 파일을 public/screenshots/ 아래에 실제로 넣은 뒤에 채운다.
 * 경로만 먼저 적어 두면 서버가 내려주는 초기 HTML에 <img>가 그대로 실려,
 * JS 실행 전이나 크롤러에게 404 이미지가 노출된다.
 */
export const projects: readonly Project[] = [
  {
    id: "eggplant-market",
    name: "가지마켓 (Eggplant Market)",
    summary:
      "동네 반경 안의 중고물품을 사고파는 위치 기반 거래 플랫폼. 구현은 Claude Code와 협업했고, 기능 명세와 개발 원칙, 무엇을 통과해야 받아들일지에 대한 기준을 문서로 세운 뒤 진행했습니다.",
    stack: [
      "React 19.1",
      "TypeScript 5.7",
      "Vite 6",
      "Tailwind CSS 4",
      "TanStack Query 5",
      "Zustand 5",
      "Supabase",
      "Jest 29",
      "카카오맵 SDK",
    ],
    screenshot: "/screenshots/eggplant-market.webp",
    screenshotAlt:
      "가지마켓 석관동 게시물 목록 — 사진·가격·찜과 조회 수가 담긴 카드 격자",
    deployUrl: "https://eggplant-market-ga6d-flame.vercel.app/",
    repoUrl: "https://github.com/hoj0806/Eggplant-Market",
    caseIds: ["case-1", "case-2", "case-3"],
  },
  {
    id: "poke-card-flip",
    name: "PokeCardFlip",
    summary:
      "PokéAPI 데이터로 카드 매칭 게임과 도감을 제공하는 웹 게임. 와이어프레임부터 배포까지 혼자 진행했고, 151마리 데이터를 한 번만 받아 재사용하도록 캐시 계층을 두었습니다.",
    stack: [
      "React 19.2",
      "TypeScript 5.9",
      "Vite 7",
      "Tailwind CSS 4",
      "Zustand 5",
      "React Router 7",
      "framer-motion",
      "immer",
    ],
    screenshot: "/screenshots/poke-card-flip.webp",
    screenshotAlt:
      "PokeCardFlip 포켓몬 도감 — 정렬과 북마크 필터, 포켓몬 카드 격자",
    deployUrl: "https://poke-card-flip.vercel.app/",
    repoUrl: "https://github.com/hoj0806/poke-card-flip",
    caseIds: ["case-4"],
  },
  {
    id: "planyang",
    name: "Planyang",
    summary:
      "대시보드를 팀원과 공유하고 초대·권한을 관리하는 일정 관리 협업 툴. 같은 포지션 4명이 함께 만들었고, 화면 작업이 시작되기 전에 Redux Toolkit 상태 레이어를 세우는 역할을 맡았습니다. 로그인이 필요한 서비스라 체험 계정을 함께 둡니다.",
    stack: [
      "Next.js 14.2",
      "TypeScript 5.4",
      "React 18",
      "Redux Toolkit 2.2",
      "axios",
      "Sass",
    ],
    screenshot: "/screenshots/planyang.webp",
    screenshotAlt:
      "Planyang 내 대시보드 — 대시보드 목록과 초대받은 대시보드 표",
    deployUrl: "https://planyang-ac8o.vercel.app/",
    repoUrl: "https://github.com/sprint-part3-team1/Planyang",
    caseIds: ["case-5", "case-6"],
    demoAccount: {
      email: "demo.planyang@gmail.com",
      password: "Planyang2024!",
    },
  },
];
