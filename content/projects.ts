import type { Project } from "./types";

/**
 * 프로젝트 카드 3개.
 *
 * name / deployUrl / repoUrl은 spec.md에서 확정된 값이다.
 * stack 표기는 이력서와 맞춘다.
 * summary / screenshot은 직접 채운다.
 */
export const projects: readonly Project[] = [
  {
    id: "eggplant-market",
    name: "가지마켓 (Eggplant Market)",
    summary: "",
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
    screenshot: "",
    screenshotAlt: "",
    deployUrl: "https://eggplant-market-ga6d-flame.vercel.app/",
    repoUrl: "https://github.com/hoj0806/Eggplant-Market",
    relatedCaseIds: ["case-1", "case-2", "case-3"],
  },
  {
    id: "poke-card-flip",
    name: "PokeCardFlip",
    summary: "",
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
    screenshot: "",
    screenshotAlt: "",
    deployUrl: "https://poke-card-flip.vercel.app/",
    repoUrl: "https://github.com/hoj0806/poke-card-flip",
    relatedCaseIds: [],
  },
  {
    id: "planyang",
    name: "Planyang",
    summary: "",
    stack: [
      "Next.js 14.2",
      "TypeScript 5.4",
      "React 18",
      "Redux Toolkit 2.2",
      "axios",
      "Sass",
    ],
    screenshot: "",
    screenshotAlt: "",
    deployUrl: "https://planyang-ac8o.vercel.app/",
    repoUrl: "https://github.com/sprint-part3-team1/Planyang",
    relatedCaseIds: ["case-4", "case-5"],
  },
];
