import { cases } from "@/content/cases";
import type { CaseId, Project } from "@/content/types";

import { ProjectScreenshot } from "./ProjectScreenshot";

function caseTitle(id: CaseId): string {
  return cases.find((item) => item.id === id)?.title ?? id;
}

/** 프로젝트 카드 하나. 스크린샷 · 설명 · 스택 · 링크 · 관련 케이스로 점프. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      data-print="keep-together"
      className="flex flex-col rounded-lg border border-border bg-surface p-4"
    >
      <ProjectScreenshot
        src={project.screenshot}
        alt={project.screenshotAlt}
      />

      <h3 className="mt-4 text-lg font-semibold">{project.name}</h3>

      <p className="mt-2 text-sm">{project.summary || "설명 작성 예정"}</p>

      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="기술 스택">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded border border-border px-1.5 py-0.5 text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <nav
        aria-label={`${project.name} 링크`}
        className="mt-4 flex gap-4 text-sm"
      >
        <a
          href={project.deployUrl}
          target="_blank"
          rel="noreferrer"
          className="text-accent underline underline-offset-4 hover:no-underline"
        >
          배포
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="text-accent underline underline-offset-4 hover:no-underline"
        >
          저장소
        </a>
      </nav>

      {project.relatedCaseIds.length > 0 && (
        <ul className="mt-3 space-y-1 border-t border-border pt-3 text-sm">
          {project.relatedCaseIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-muted underline underline-offset-4 hover:text-fg"
              >
                {caseTitle(id)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
