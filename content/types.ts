/**
 * 사이트 콘텐츠의 타입 정의.
 * 컴포넌트는 문자열을 하드코딩하지 않고 전부 이 타입의 데이터를 받아 렌더한다.
 */

/** 케이스 식별자. 다이어그램 레지스트리와 프로젝트 카드의 점프 링크가 이 값을 공유한다. */
export type CaseId = "case-1" | "case-2" | "case-3" | "case-4" | "case-5";

/** 섹션 식별자. 목차·스크롤스파이·앵커가 이 값을 공유한다. */
export type SectionId = "hero" | "cases" | "projects" | "contact";

export interface ExternalLink {
  /** 링크에 보일 텍스트 */
  label: string;
  href: string;
}

export interface NavItem {
  id: SectionId;
  /** 목차에 보일 이름 */
  label: string;
}

/**
 * 케이스 카드 하나.
 * problem / solution / result는 각각 3줄이며 ol로 렌더된다.
 * 본문을 채우기 전까지는 빈 배열로 둔다.
 */
export interface Case {
  id: CaseId;
  /** 케이스 제목 위에 붙는 라벨. 어느 프로젝트의 이야기인지 밝힌다. 비면 렌더하지 않는다. */
  projectLabel: string;
  /** 라벨이 가리킬 프로젝트 카드의 id. Project.id와 같은 값이어야 한다. */
  projectId: string;
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
  id: string;
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
  /** 이 프로젝트와 이어지는 케이스. 카드에서 해당 케이스로 점프한다. */
  relatedCaseIds: readonly CaseId[];
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
