/**
 * 케이스 4 다이어그램.
 *
 * 여기에 SVG를 직접 그린다. 지켜야 할 것:
 *  - 색은 stroke="currentColor" / fill="currentColor"만 쓴다. 그래야 테마를 따라간다.
 *  - viewBox는 유지하고 width/height는 지정하지 않는다. 폭은 CaseFigure가 맞춘다.
 *  - 그림 안의 글자도 currentColor를 쓰고 font-size는 12 이상으로 둔다.
 *
 * 내용을 채우면 아래 hasContent를 true로 바꾼다.
 * false인 동안에는 CaseFigure가 자리 표시자를 대신 보여준다.
 */
export const hasContent = false;

export function Case4Diagram() {
  return (
    <svg
      viewBox="0 0 720 320"
      className="h-auto w-full min-w-[560px] text-fg"
      aria-hidden="true"
      focusable="false"
    >
      {/* 여기에 그린다 */}
    </svg>
  );
}
