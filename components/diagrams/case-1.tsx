/**
 * 케이스 1 다이어그램.
 *
 * excalidraw에서 그린 뒤 SVG로 내보내 아래 <svg> 안에 붙여넣는다.
 *
 * 내보내기 설정 — Background / Dark mode / Embed scene 셋 다 끈다.
 *  - Background를 켜면 흰 rect가 박혀 다크 모드에서 흰 판이 남는다.
 *  - Dark mode를 켜면 색이 뒤집혀 치환해야 할 값만 늘어난다.
 *  - Embed scene을 켜면 씬 JSON 전체가 파일에 실려 용량이 몇 배가 된다.
 *
 * 붙여넣은 뒤 할 일:
 *  1. 색을 currentColor로 바꾼다. excalidraw 기본 선·글자색은 #1e1e1e이라
 *     보통 이 한 값만 전부 치환하면 된다. 강조할 요소는 색을 따로 주지 말고
 *     stroke="currentColor"를 유지한 채 className="text-accent"를 준다.
 *  2. defs 안의 style class="style-fonts" 블록에 손글씨 폰트가 base64로
 *     박혀 있으면 통째로 지운다. 지우면 글자가 페이지 폰트를 그대로 따라간다.
 *  3. 하이픈 속성을 JSX 형태로 바꾼다. stroke-width -> strokeWidth,
 *     stroke-linecap -> strokeLinecap, class -> className,
 *     xmlns:xlink -> xmlnsXlink. HTML 주석은 지운다.
 *  4. 바깥 svg의 width/height 속성은 지우고 viewBox만 남긴다.
 *     폭은 아래 className이 맞춘다.
 *  5. 글자가 text 요소로 남아 있는지 확인한다. 내보낸 파일에서
 *     grep -c "<text" 가 0이면 path로 바뀐 것이라, 선택도 검색도 안 되고
 *     용량도 커진다. 그때는 폰트를 바꿔 다시 내보낸다.
 *
 * 다 됐으면 아래 hasContent를 true로 바꾼다.
 * false인 동안에는 CaseFigure가 자리 표시자를 대신 보여준다.
 */
export const hasContent = false;

export function Case1Diagram() {
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
