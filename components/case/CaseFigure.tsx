import { DiagramPlaceholder } from "@/components/diagrams/DiagramPlaceholder";
import { diagrams } from "@/components/diagrams/registry";
import type { CaseId } from "@/content/types";

/**
 * 케이스 다이어그램 자리. figure + figcaption.
 * 다이어그램을 아직 안 그렸으면 자리 표시자를 보여준다.
 * 모바일에서는 그림만 가로로 스크롤된다.
 */
export function CaseFigure({
  caseId,
  caption,
}: {
  caseId: CaseId;
  caption: string;
}) {
  const { Component, hasContent } = diagrams[caseId];

  return (
    <figure className="mt-block">
      {hasContent ? (
        <div className="overflow-x-auto">
          <Component />
        </div>
      ) : (
        <DiagramPlaceholder label="다이어그램 준비 중" />
      )}

      <figcaption className="mt-2 text-sm text-muted">
        {caption || "설명 예정"}
      </figcaption>
    </figure>
  );
}
