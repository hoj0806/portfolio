"use client";

import { useState } from "react";

import { navItems } from "@/content/nav";

import { ThemeToggle } from "./ThemeToggle";

/**
 * 모바일 상단 고정 바 + 목차 토글.
 * 1024px 이상에서는 숨고 DesktopToc이 대신 나온다.
 */
export function MobileNavBar({ siteName }: { siteName: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      data-print="hide"
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/90 backdrop-blur lg:hidden"
    >
      <div className="flex items-center justify-between px-4 py-3">
        <a href="#hero" className="text-sm font-semibold">
          {siteName || "포트폴리오"}
        </a>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-toc"
            className="rounded-md border border-border px-3 py-1.5 text-sm text-muted"
          >
            목차
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-toc" aria-label="목차" className="border-t border-border">
          <ul className="px-4 py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm text-muted hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
