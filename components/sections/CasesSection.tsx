import { CaseCard } from "@/components/case/CaseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cases } from "@/content/cases";

/** 문제 해결 — 이 사이트의 본체. 케이스 5개를 같은 컴포넌트로 렌더한다. */
export function CasesSection() {
  return (
    <section id="cases" aria-labelledby="cases-heading" className="scroll-mt-24">
      <SectionHeading id="cases-heading">문제 해결</SectionHeading>

      <div className="space-y-case">
        {cases.map((item) => (
          <CaseCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
