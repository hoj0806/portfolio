/**
 * 테마 전환. 라이트 / 다크 / 시스템 설정 3단계.
 *
 * 저장소는 localStorage 키 하나만 쓴다(constraints.md 금지 조항).
 * "system"이면 prefers-color-scheme를 그때그때 따른다.
 */

export type Theme = "light" | "dark" | "system";

/** 실제로 화면에 적용되는 두 값. "system"은 이 둘 중 하나로 풀린다. */
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/** 토글을 누를 때마다 이 순서로 돈다. */
const THEME_CYCLE: readonly Theme[] = ["light", "dark", "system"];

export const THEME_LABEL: Record<Theme, string> = {
  light: "라이트",
  dark: "다크",
  system: "시스템 설정",
};

const DARK_QUERY = "(prefers-color-scheme: dark)";

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

/** 저장된 선택값. 고른 적이 없으면 시스템 설정을 따른다. */
export function readTheme(): Theme {
  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(value) ? value : "system";
  } catch {
    // 사생활 보호 모드 등에서 localStorage 접근이 막히면 시스템 설정으로 넘어간다.
    return "system";
  }
}

export function readSystemTheme(): ResolvedTheme {
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

export function resolveTheme(theme: Theme): ResolvedTheme {
  return theme === "system" ? readSystemTheme() : theme;
}

export function nextTheme(theme: Theme): Theme {
  const index = THEME_CYCLE.indexOf(theme);
  return THEME_CYCLE[(index + 1) % THEME_CYCLE.length] ?? "system";
}

/** <html>에 .dark를 붙이거나 뗀다. globals.css의 dark 변형이 이 클래스를 본다. */
export function applyTheme(theme: Theme): void {
  const resolved = resolveTheme(theme);
  document.documentElement.classList.toggle("dark", resolved === "dark");
  // "system"일 때는 브라우저 기본 UI도 OS를 따라가도록 둔다.
  document.documentElement.style.colorScheme =
    theme === "system" ? "light dark" : resolved;
}

export function storeTheme(theme: Theme): void {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // 저장에 실패해도 현재 세션의 전환은 그대로 둔다.
  }
}

/**
 * OS 설정 변경을 구독한다. "system" 상태에서 새로고침 없이 따라가기 위한 것.
 * 해제 함수를 돌려준다.
 */
export function watchSystemTheme(onChange: () => void): () => void {
  const media = window.matchMedia(DARK_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

/**
 * 첫 페인트 전에 실행되어 깜빡임(FOUC)을 막는 스크립트.
 * layout.tsx에서 <head>에 인라인으로 넣는다. 위 함수들과 결과가 같아야 한다.
 */
export const themeInitScript = `(function(){try{var v=localStorage.getItem("${THEME_STORAGE_KEY}");var t=(v==="light"||v==="dark"||v==="system")?v:"system";var d=t==="system"?window.matchMedia("${DARK_QUERY}").matches:t==="dark";document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=t==="system"?"light dark":t;}catch(e){}})();`;
