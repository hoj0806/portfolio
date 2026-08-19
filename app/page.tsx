import { CasesSection } from "@/components/sections/CasesSection";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

/** 단일 페이지 세로 스크롤. 섹션 순서는 spec.md 고정. */
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-20 pb-section sm:px-6 lg:max-w-4xl lg:pt-section lg:pr-40">
      <div className="space-y-section">
        <Hero />
        <CasesSection />
        <ProjectsSection />
        <Contact />
      </div>
    </main>
  );
}
