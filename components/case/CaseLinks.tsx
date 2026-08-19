import type { ExternalLink } from "@/content/types";

/** 케이스 카드 하단의 관련 저장소·문서 링크. */
export function CaseLinks({ links }: { links: readonly ExternalLink[] }) {
  if (links.length === 0) return null;

  return (
    <nav
      aria-label="관련 자료"
      className="mt-block flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4 text-sm"
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-accent underline underline-offset-4 hover:no-underline"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
