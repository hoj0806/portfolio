"use client";

import { useEffect, useState } from "react";

/**
 * 화면에 보이는 섹션 중 가장 위에 있는 것의 id를 돌려준다.
 * 목차의 현재 위치 하이라이트에 쓴다.
 *
 * @param sectionIds 관찰할 섹션의 DOM id 목록
 */
export function useScrollSpy<T extends string>(
  sectionIds: readonly T[],
): T | null {
  const [activeId, setActiveId] = useState<T | null>(sectionIds[0] ?? null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }

        // 문서 순서대로 훑어서 보이는 것 중 첫 번째를 고른다.
        const current = sectionIds.find((id) => visible.has(id));
        if (current) setActiveId(current);
      },
      {
        // 상단 고정 바 높이만큼 위를 잘라내고, 하단은 화면 절반까지만 본다.
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0,
      },
    );

    for (const element of elements) observer.observe(element);

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
