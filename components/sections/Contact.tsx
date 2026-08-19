import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

/** 화면에 보일 주소. href는 그대로 두고 표시 텍스트만 줄인다. */
function displayUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/** Contact — 이메일, GitHub, Blog. */
export function Contact() {
  const entries = [
    {
      label: "이메일",
      href: site.email ? `mailto:${site.email}` : "",
      text: site.email,
    },
    {
      label: "GitHub",
      href: site.githubUrl,
      text: displayUrl(site.githubUrl),
    },
    { label: "Blog", href: site.blogUrl, text: displayUrl(site.blogUrl) },
  ].filter((entry) => entry.href !== "");

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24"
    >
      <SectionHeading id="contact-heading">Contact</SectionHeading>

      {entries.length === 0 ? (
        <p className="text-sm text-muted">연락처 작성 예정</p>
      ) : (
        <dl className="max-w-measure space-y-2">
          {entries.map((entry) => (
            <div key={entry.label} className="flex gap-3">
              <dt className="w-20 shrink-0 text-muted">{entry.label}</dt>
              <dd>
                <a
                  href={entry.href}
                  className="break-all text-accent underline underline-offset-4 hover:no-underline"
                >
                  {entry.text}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
