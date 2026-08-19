"use client";

import { useCallback, useEffect, useState } from "react";

import {
  applyTheme,
  nextTheme,
  readTheme,
  storeTheme,
  THEME_LABEL,
  watchSystemTheme,
  type Theme,
} from "@/lib/theme";

const ICON: Record<Theme, string> = {
  light: "☀",
  dark: "☾",
  system: "◐",
};

/**
 * 라이트 → 다크 → 시스템 설정 순으로 도는 토글.
 * 첫 페인트 시점의 테마는 layout.tsx의 인라인 스크립트가 이미 적용해 두었다.
 * 이 컴포넌트는 마운트 후 그 값을 읽어와 버튼 상태만 맞춘다.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  // "system"일 때만 OS 설정 변경을 따라간다. 직접 고른 값은 OS가 바뀌어도 유지된다.
  useEffect(() => {
    if (theme !== "system") return;
    return watchSystemTheme(() => applyTheme("system"));
  }, [theme]);

  const cycle = useCallback(() => {
    const next = nextTheme(theme ?? "system");
    setTheme(next);
    applyTheme(next);
    storeTheme(next);
  }, [theme]);

  const label =
    theme === null ? "테마 변경" : `테마 변경 (현재: ${THEME_LABEL[theme]})`;

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={label}
      title={label}
      className="rounded-md border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg"
    >
      {/* 마운트 전에는 서버 렌더 결과와 어긋나지 않도록 중립 표기를 쓴다. */}
      <span aria-hidden="true">{theme === null ? "◐" : ICON[theme]}</span>
    </button>
  );
}
