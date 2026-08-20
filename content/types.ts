/**
 * 사이트 콘텐츠의 타입 정의.
 * 컴포넌트는 문자열을 하드코딩하지 않고 전부 이 타입의 데이터를 받아 렌더한다.
 */

/** 케이스 식별자. 다이어그램 레지스트리와 목차의 하위 항목이 이 값을 공유한다. */
export type CaseId =
  | "case-1"
  | "case-2"
  | "case-3"
  | "case-4"
  | "case-5"
  | "case-6";

/** 프로젝트 식별자. 프로젝트가 곧 섹션이라 앵커로도 쓰인다. */
export type ProjectId = "eggplant-market" | "poke-card-flip" | "planyang";

/** 섹션 식별자. 목차·스크롤스파이·앵커가 이 값을 공유한다. */
export type SectionId = "hero" | ProjectId | "contact";

export interface ExternalLink {
  /** 링크에 보일 텍스트 */
  label: string;
  href: string;
}

/** 목차의 하위 항목. 프로젝트 아래에 그 프로젝트의 케이스가 달린다. */
export interface NavChild {
  id: CaseId;
  /** 목차에 보일 케이스 제목 */
  label: string;
}

export interface NavItem {
  id: SectionId;
  /** 목차에 보일 이름 */
  label: string;
  /** 하위 목차. 없으면 빈 배열이다. */
  children: readonly NavChild[];
}

/**
 * 케이스 카드 하나.
 * problem / solution / result는 각각 3줄이며 ol로 렌더된다.
 * 본문을 채우기 전까지는 빈 배열로 둔다.
 *
 * 어느 프로젝트의 이야기인지는 적지 않는다. 그 프로젝트 섹션 안에 놓이므로 자명하다.
 */
export interface Case {
  id: CaseId;
  /** h3으로 렌더된다 */
  title: string;
  /** 다이어그램의 figcaption. 비어 있으면 자리 표시자 문구가 대신 들어간다. */
  figureCaption: string;
  /** 문제 — 3줄 */
  problem: readonly string[];
  /** 해결 — 3줄 */
  solution: readonly string[];
  /** 결과 — 3줄 */
  result: readonly string[];
  /** 카드 하단의 관련 저장소·문서 링크 */
  links: readonly ExternalLink[];
}

export interface Project {
  id: ProjectId;
  name: string;
  /** 한 줄 설명. 직접 채운다. */
  summary: string;
  /** 저장소에서 확인한 기술 스택 */
  stack: readonly string[];
  /** public/screenshots 아래 경로. 비어 있으면 자리 표시자가 렌더된다. */
  screenshot: string;
  /** 스크린샷 대체 텍스트 */
  screenshotAlt: string;
  deployUrl: string;
  repoUrl: string;
  /** 이 프로젝트에 속한 케이스. 헤더 아래에 이 순서대로 이어진다. */
  caseIds: readonly CaseId[];
  /** 로그인이 필요한 서비스의 체험 계정. 없으면 표시하지 않는다. */
  demoAccount?: { email: string; password: string };
}

export interface SiteProfile {
  name: string;
  role: string;
  /** 한 줄 소개 */
  tagline: string;
  email: string;
  githubUrl: string;
  blogUrl: string;
  /** 이력서 PDF 경로 */
  resumeUrl: string;
}
