"use client";

import { navItems } from "@/content/nav";
import { useScrollSpy } from "@/hooks/useScrollSpy";

import { ThemeToggle } from "./ThemeToggle";

const sectionIds = navItems.map((item) => item.id);

/**
 * 데스크탑 우측 고정 목차. 프로젝트가 상위, 케이스 제목이 하위인 2단계다.
 * 케이스 제목이 길어 폭을 고정하고 한 줄로 잘라 낸다. 전체 문구는 title로 남긴다.
 * 1024px 미만에서는 숨고 MobileNavBar가 대신 나온다.
 */
export function DesktopToc() {
  const activeId = useScrollSpy(sectionIds);

  return (
    <nav
      aria-label="목차"
      data-print="hide"
      className="fixed top-1/2 right-8 z-40 hidden w-44 -translate-y-1/2 lg:block"
    >
      <ul className="space-y-3 text-sm">
        {navItems.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                title={item.label}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive
                    ? "block truncate font-semibold text-accent"
                    : "block truncate text-muted transition-colors hover:text-fg"
                }
              >
                {item.label}
              </a>

              {item.children.length > 0 && (
                <ul className="mt-2 space-y-2 border-l border-border pl-3 text-xs">
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={`#${child.id}`}
                        title={child.label}
                        className="block truncate text-muted transition-colors hover:text-fg"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-6">
        <ThemeToggle />
      </div>
    </nav>
  );
}
