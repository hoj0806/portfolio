import { caseTitlePlaceholder, cases } from "./cases";
import { projects } from "./projects";
import type { CaseId, NavChild, NavItem } from "./types";

/**
 * 2단계 목차. 프로젝트가 상위, 그 프로젝트의 케이스가 하위다.
 *
 * 손으로 나열하지 않고 projects와 cases에서 파생시킨다.
 * 케이스를 옮기거나 제목을 고치면 목차가 따라온다.
 */
const caseTitles = new Map(cases.map((item) => [item.id, item.title]));

function toChild(id: CaseId): NavChild {
  return { id, label: caseTitles.get(id) || caseTitlePlaceholder };
}

/** 섹션 목록. 목차·스크롤스파이·앵커가 이 배열 하나를 출처로 쓴다. */
export const navItems: readonly NavItem[] = [
  { id: "hero", label: "소개", children: [] },
  ...projects.map((project) => ({
    id: project.id,
    label: project.name,
    children: project.caseIds.map(toChild),
  })),
  { id: "contact", label: "Contact", children: [] },
];
