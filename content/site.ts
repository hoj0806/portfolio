import type { SiteProfile } from "./types";

/**
 * Hero와 Contact가 쓰는 프로필.
 * 빈 문자열은 직접 채운다. 비어 있으면 해당 항목은 렌더되지 않는다.
 */
export const site: SiteProfile = {
  name: "",
  role: "",
  tagline: "",
  email: "",
  githubUrl: "",
  blogUrl: "",
  resumeUrl: "",
};
