import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { projects } from "@/content/projects";

/**
 * 단일 페이지 세로 스크롤.
 * Hero → 프로젝트(헤더 + 그 프로젝트의 케이스) → Contact. 순서는 spec.md 고정.
 */
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-20 pb-section sm:px-6 lg:max-w-4xl lg:pt-section lg:pr-52">
      <div className="space-y-section">
        <Hero />
        {projects.map((project) => (
          <ProjectSection key={project.id} project={project} />
        ))}
        <Contact />
      </div>
    </main>
  );
}
