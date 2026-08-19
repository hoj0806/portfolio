"use client";

import { navItems } from "@/content/nav";
import { useScrollSpy } from "@/hooks/useScrollSpy";

import { ThemeToggle } from "./ThemeToggle";

const sectionIds = navItems.map((item) => item.id);

/**
 * 데스크탑 우측 고정 목차. 현재 섹션을 하이라이트한다.
 * 1024px 미만에서는 숨고 MobileNavBar가 대신 나온다.
 */
export function DesktopToc() {
  const activeId = useScrollSpy(sectionIds);

  return (
    <nav
      aria-label="목차"
      data-print="hide"
      className="fixed top-1/2 right-8 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="space-y-3 text-sm">
        {navItems.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={
                  isActive
                    ? "font-semibold text-accent"
                    : "text-muted transition-colors hover:text-fg"
                }
              >
                {item.label}
              </a>
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
