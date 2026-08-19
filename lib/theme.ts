/**
 * 테마 전환.
 *
 * 저장소는 localStorage 키 하나만 쓴다(constraints.md 금지 조항).
 * 저장된 값이 없으면 시스템 설정(prefers-color-scheme)을 따른다.
 */

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/** 저장된 선택값. 고른 적이 없으면 null. */
export function readStoredTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    // 사생활 보호 모드 등에서 localStorage 접근이 막히면 시스템 설정으로 넘어간다.
    return null;
  }
}

export function readSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function resolveTheme(): Theme {
  return readStoredTheme() ?? readSystemTheme();
}

/** <html>에 .dark를 붙이거나 뗀다. globals.css의 dark 변형이 이 클래스를 본다. */
export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function storeTheme(theme: Theme): void {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // 저장에 실패해도 현재 세션의 전환은 그대로 둔다.
  }
}

/**
 * 첫 페인트 전에 실행되어 깜빡임(FOUC)을 막는 스크립트.
 * layout.tsx에서 <head>에 인라인으로 넣는다. 위 함수들과 내용이 같아야 한다.
 */
export const themeInitScript = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var t=(s==="light"||s==="dark")?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.style.colorScheme=t;}catch(e){}})();`;
