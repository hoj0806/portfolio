import type { SiteProfile } from "./types";

/**
 * Hero와 Contact가 쓰는 프로필.
 * 빈 값은 해당 항목이 렌더되지 않는다.
 * resumeUrl은 public/에 PDF를 넣은 뒤 채운다.
 */
export const site: SiteProfile = {
  name: "홍재훈",
  role: "프론트엔드 개발자",
  tagline:
    "코드를 쓰기 전에 무엇을 통과해야 받아들일지부터 정합니다. 문제를 고르는 기준과 고치지 않기로 한 근거를 함께 남기는 것을 중요하게 생각합니다.",
  email: "ehswkfn123@naver.com",
  githubUrl: "https://github.com/hoj0806",
  blogUrl: "https://hjh0806.tistory.com/",
  resumeUrl: "",
};
