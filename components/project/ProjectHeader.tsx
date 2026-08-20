import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/content/types";

import { DemoAccount } from "./DemoAccount";
import { ProjectScreenshot } from "./ProjectScreenshot";

/**
 * 프로젝트 섹션의 머리. 본문 폭을 다 쓰는 스크린샷 아래에 소개·스택·링크가 온다.
 * 바로 아래에 이 프로젝트의 케이스가 이어지므로 "관련 케이스" 링크는 두지 않는다.
 */
export function ProjectHeader({ project }: { project: Project }) {
  return (
    <header data-print="keep-together">
      <SectionHeading id={`${project.id}-heading`}>
        {project.name}
      </SectionHeading>

      <ProjectScreenshot src={project.screenshot} alt={project.screenshotAlt} />

      <div className="mt-block max-w-measure">
        <p>{project.summary || "설명 작성 예정"}</p>

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

        {project.demoAccount && (
          <DemoAccount
            email={project.demoAccount.email}
            password={project.demoAccount.password}
          />
        )}
      </div>
    </header>
  );
}
