/**
 * 케이스 카드의 문제 / 해결 / 결과 한 덩어리.
 * 세 곳이 같은 컴포넌트를 쓴다. h3 + ol.
 */
export function CaseSteps({
  heading,
  items,
}: {
  heading: string;
  items: readonly string[];
}) {
  return (
    <section className="mt-block">
      <h4 className="text-lg font-semibold">{heading}</h4>

      {items.length === 0 ? (
        <p className="mt-2 text-sm text-muted">작성 예정</p>
      ) : (
        <ol className="mt-2 list-decimal space-y-2 pl-5 marker:text-muted">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )}
    </section>
  );
}
