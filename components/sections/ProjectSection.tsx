import { CaseCard } from "@/components/case/CaseCard";
import { ProjectHeader } from "@/components/project/ProjectHeader";
import { cases } from "@/content/cases";
import type { Project } from "@/content/types";

/**
 * 프로젝트 하나와 그 프로젝트의 케이스. 세 프로젝트가 전부 이 컴포넌트를 쓴다.
 * 섹션 id가 곧 프로젝트 id라 목차·스크롤스파이가 이 자리를 가리킨다.
 */
export function ProjectSection({ project }: { project: Project }) {
  const items = project.caseIds
    .map((id) => cases.find((item) => item.id === id))
    .filter((item) => item !== undefined);

  return (
    <section
      id={project.id}
      aria-labelledby={`${project.id}-heading`}
      className="scroll-mt-24"
    >
      <ProjectHeader project={project} />

      {items.length > 0 && (
        <div className="mt-case space-y-case">
          {items.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
