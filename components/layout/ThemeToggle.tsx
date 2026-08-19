"use client";

import { useEffect, useState } from "react";

import { applyTheme, resolveTheme, storeTheme, type Theme } from "@/lib/theme";

/**
 * 라이트/다크 수동 토글.
 * 첫 페인트 시점의 테마는 layout.tsx의 인라인 스크립트가 이미 적용해 두었다.
 * 이 컴포넌트는 마운트 후 그 값을 읽어와 버튼 상태만 맞춘다.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(resolveTheme());
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    storeTheme(next);
  }

  const label =
    theme === null
      ? "테마 전환"
      : theme === "dark"
        ? "라이트 모드로 전환"
        : "다크 모드로 전환";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="rounded-md border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg"
    >
      {/* 마운트 전에는 서버 렌더 결과와 어긋나지 않도록 중립 표기를 쓴다. */}
      <span aria-hidden="true">
        {theme === null ? "◐" : theme === "dark" ? "☀" : "☾"}
      </span>
    </button>
  );
}
