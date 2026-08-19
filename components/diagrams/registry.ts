import type { ComponentType } from "react";

import type { CaseId } from "@/content/types";

import { Case1Diagram, hasContent as case1HasContent } from "./case-1";
import { Case2Diagram, hasContent as case2HasContent } from "./case-2";
import { Case3Diagram, hasContent as case3HasContent } from "./case-3";
import { Case4Diagram, hasContent as case4HasContent } from "./case-4";
import { Case5Diagram, hasContent as case5HasContent } from "./case-5";

export interface DiagramEntry {
  Component: ComponentType;
  /** SVG를 채웠는지. false면 자리 표시자를 대신 렌더한다. */
  hasContent: boolean;
}

/** 케이스 id로 다이어그램을 찾는다. CaseFigure가 이 표만 본다. */
export const diagrams: Record<CaseId, DiagramEntry> = {
  "case-1": { Component: Case1Diagram, hasContent: case1HasContent },
  "case-2": { Component: Case2Diagram, hasContent: case2HasContent },
  "case-3": { Component: Case3Diagram, hasContent: case3HasContent },
  "case-4": { Component: Case4Diagram, hasContent: case4HasContent },
  "case-5": { Component: Case5Diagram, hasContent: case5HasContent },
};
