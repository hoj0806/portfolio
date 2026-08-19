/**
 * 케이스 1 다이어그램 — AI 협업 개발 체계.
 *
 * 색은 currentColor를 기본으로 쓰고, 강조가 필요한 곳만 text-accent를,
 * 보조 설명은 text-muted를 준다. 그래야 라이트/다크가 자동으로 따라간다.
 * marker id는 페이지 안에서 유일해야 하므로 케이스 번호를 붙였다.
 */
export const hasContent = true;

export function Case1Diagram() {
  return (
    <svg
      viewBox="0 0 720 570"
      className="h-auto w-full min-w-[600px] text-fg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <marker
          id="case1-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="currentColor" />
        </marker>
      </defs>

      <g fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="40" y="50" width="200" height="210" rx="16" opacity="0.35" />
        <rect x="60" y="94" width="160" height="40" rx="8" />
        <rect x="60" y="146" width="160" height="40" rx="8" />
        <rect x="60" y="198" width="160" height="40" rx="8" />
        <rect x="320" y="133" width="150" height="44" rx="8" />
        <rect x="300" y="213" width="190" height="56" rx="8" />
        <rect x="300" y="309" width="190" height="72" rx="8" />
        <rect x="280" y="497" width="230" height="44" rx="8" />
      </g>

      <g
        className="text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <rect x="310" y="413" width="170" height="56" rx="8" />
      </g>

      <g
        stroke="currentColor"
        strokeWidth="1"
        markerEnd="url(#case1-arrow)"
        fill="none"
      >
        <line x1="244" y1="155" x2="314" y2="155" />
        <line x1="395" y1="181" x2="395" y2="207" />
        <line x1="395" y1="273" x2="395" y2="303" />
        <line x1="395" y1="385" x2="395" y2="407" />
        <line x1="395" y1="473" x2="395" y2="491" />
        <path d="M490 241 H544 V155 H476" />
      </g>

      <g fill="currentColor" fontSize="14" fontWeight="500">
        <text x="140" y="76" textAnchor="middle" dominantBaseline="central">
          문서
        </text>
        <text x="140" y="114" textAnchor="middle" dominantBaseline="central">
          기능 명세
        </text>
        <text x="140" y="166" textAnchor="middle" dominantBaseline="central">
          개발 3원칙
        </text>
        <text x="140" y="218" textAnchor="middle" dominantBaseline="central">
          코딩 컨벤션
        </text>
        <text x="395" y="155" textAnchor="middle" dominantBaseline="central">
          작업 요청
        </text>
        <text x="395" y="231" textAnchor="middle" dominantBaseline="central">
          eslint 게이트
        </text>
        <text x="395" y="329" textAnchor="middle" dominantBaseline="central">
          테스트 4갈래
        </text>
        <text x="395" y="519" textAnchor="middle" dominantBaseline="central">
          develop PR 생성 · 기록
        </text>
      </g>

      <g className="text-accent" fill="currentColor" fontSize="14" fontWeight="500">
        <text x="395" y="431" textAnchor="middle" dominantBaseline="central">
          사람 검수
        </text>
      </g>

      <g className="text-muted" fill="currentColor" fontSize="12">
        <text x="395" y="251" textAnchor="middle" dominantBaseline="central">
          any 금지 · 함수 분리
        </text>
        <text x="395" y="350" textAnchor="middle" dominantBaseline="central">
          unit · integration
        </text>
        <text x="395" y="368" textAnchor="middle" dominantBaseline="central">
          build · smoke
        </text>
        <text x="552" y="200" dominantBaseline="central">
          반려
        </text>
        <text x="395" y="451" textAnchor="middle" dominantBaseline="central">
          받아들일지 판단
        </text>
        <text x="496" y="441" dominantBaseline="central">
          내가 서는 자리
        </text>
      </g>
    </svg>
  );
}
