import { site } from "@/content/site";

interface HeroLink {
  label: string;
  href: string;
}

/** Hero — 이름, 직군, 한 줄 소개, 링크 3개. */
export function Hero() {
  const links: HeroLink[] = [
    { label: "이력서 PDF", href: site.resumeUrl },
    { label: "GitHub", href: site.githubUrl },
    { label: "Blog", href: site.blogUrl },
  ].filter((link) => link.href !== "");

  return (
    <section id="hero" className="scroll-mt-24">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {site.name || "이름"}
      </h1>

      {site.role && <p className="mt-2 text-muted">{site.role}</p>}

      <p className="mt-block max-w-measure text-lg">
        {site.tagline || "한 줄 소개 작성 예정"}
      </p>

      {links.length > 0 && (
        <nav aria-label="주요 링크" className="mt-block flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-accent underline underline-offset-4 hover:no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </section>
  );
}
