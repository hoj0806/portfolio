/**
 * 섹션 제목. h2로 렌더된다.
 * 케이스 제목도 h2이므로 둘은 형제 관계이고, 헤딩 계층을 건너뛰지 않는다.
 */
export function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: string;
}) {
  return (
    <h2
      id={id}
      className="mb-block text-2xl font-bold tracking-tight sm:text-[1.75rem]"
    >
      {children}
    </h2>
  );
}
