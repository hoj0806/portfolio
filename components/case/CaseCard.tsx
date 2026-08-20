import { CaseFigure } from "./CaseFigure";
import { CaseLinks } from "./CaseLinks";
import { CaseSteps } from "./CaseSteps";
import { caseTitlePlaceholder } from "@/content/cases";
import type { Case } from "@/content/types";

/**
 * 케이스 카드 하나. 6개가 전부 이 컴포넌트를 쓰고 데이터만 바뀐다.
 * 어느 프로젝트의 이야기인지는 적지 않는다. 그 프로젝트 섹션 안에 놓여 있다.
 * 순서는 spec.md 고정: 제목 → 그림 → 문제 → 해결 → 결과 → 링크.
 */
export function CaseCard({ item }: { item: Case }) {
  return (
    <article
      id={item.id}
      data-print="keep-together"
      className="scroll-mt-24 border-t border-border pt-8 first:border-t-0 first:pt-0"
    >
      <h3 className="max-w-measure text-2xl font-bold tracking-tight sm:text-[1.75rem]">
        {item.title || caseTitlePlaceholder}
      </h3>

      <CaseFigure caseId={item.id} caption={item.figureCaption} />

      <div className="max-w-measure">
        <CaseSteps heading="문제" items={item.problem} />
        <CaseSteps heading="해결" items={item.solution} />
        <CaseSteps heading="결과" items={item.result} />
        <CaseLinks links={item.links} />
      </div>
    </article>
  );
}
