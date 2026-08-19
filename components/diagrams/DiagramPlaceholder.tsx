/**
 * 아직 그리지 않은 다이어그램의 자리.
 * case-N.tsx의 <svg>가 비어 있는 동안 이 자리 표시자가 대신 보인다.
 */
export function DiagramPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex min-h-40 items-center justify-center rounded-md border border-dashed border-border bg-surface px-4 py-10 text-sm text-muted"
      role="presentation"
    >
      {label}
    </div>
  );
}
