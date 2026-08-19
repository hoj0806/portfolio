import type { Project } from "./types";

/**
 * 프로젝트 카드 3개.
 *
 * name / deployUrl / repoUrl은 spec.md에서 확정된 값이다.
 * stack은 각 저장소의 package.json에서 확인한 실제 의존성이다.
 * summary / screenshot / relatedCaseIds는 직접 채운다.
 */
export const projects: readonly Project[] = [
  {
    id: "eggplant-market",
    name: "가지마켓 (Eggplant Market)",
    summary: "",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4",
      "Zustand",
      "TanStack Query",
      "React Router",
      "Supabase",
      "Jest",
    ],
    screenshot: "",
    screenshotAlt: "",
    deployUrl: "https://eggplant-market-ga6d-flame.vercel.app/",
    repoUrl: "https://github.com/hoj0806/Eggplant-Market",
    relatedCaseIds: [],
  },
  {
    id: "poke-card-flip",
    name: "PokeCardFlip",
    summary: "",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4",
      "Zustand",
      "React Router",
      "Axios",
      "Framer Motion",
      "Immer",
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
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Redux Toolkit",
      "React Redux",
      "Axios",
      "Sass",
      "react-dnd",
    ],
    screenshot: "",
    screenshotAlt: "",
    deployUrl: "https://planyang-ac8o.vercel.app/",
    repoUrl: "https://github.com/sprint-part3-team1/Planyang",
    relatedCaseIds: [],
  },
];
