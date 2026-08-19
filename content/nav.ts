import type { NavItem } from "./types";

/**
 * 섹션 목록. 목차·스크롤스파이·앵커가 이 배열 하나를 출처로 쓴다.
 * 순서는 spec.md의 섹션 순서와 같다.
 */
export const navItems: readonly NavItem[] = [
  { id: "hero", label: "소개" },
  { id: "cases", label: "문제 해결" },
  { id: "projects", label: "프로젝트" },
  { id: "contact", label: "Contact" },
];
