/**
 * 케이스 6 다이어그램 — 이어 붙일 때와 갈아 끼울 때.
 *
 * 두 열이 같은 목록을 다르게 다룬다는 것이 요점이다.
 * 아래쪽은 감시 요소가 화면에 들어와도 항상 요청하지는 않는다는 조건.
 */
export const hasContent = true;

export function Case6Diagram() {
  return (
    <svg
      viewBox="0 0 720 500"
      className="h-auto w-full min-w-[600px] text-fg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <marker
          id="case6-arrow"
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
        <rect x="40" y="76" width="290" height="40" rx="8" />
        <rect x="40" y="136" width="290" height="40" rx="8" />
        <rect x="390" y="76" width="290" height="40" rx="8" />
        <rect x="390" y="136" width="290" height="40" rx="8" />
        <rect x="40" y="378" width="170" height="44" rx="8" />
        <rect x="250" y="368" width="250" height="64" rx="8" />
      </g>

      <g
        className="text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <rect x="40" y="196" width="290" height="44" rx="8" />
        <rect x="390" y="196" width="290" height="44" rx="8" />
        <rect x="540" y="378" width="140" height="44" rx="8" />
      </g>

      <g
        stroke="currentColor"
        strokeWidth="1"
        markerEnd="url(#case6-arrow)"
        fill="none"
      >
        <line x1="185" y1="120" x2="185" y2="132" />
        <line x1="185" y1="180" x2="185" y2="192" />
        <line x1="535" y1="120" x2="535" y2="132" />
        <line x1="535" y1="180" x2="535" y2="192" />
        <line x1="214" y1="400" x2="246" y2="400" />
        <line x1="504" y1="400" x2="536" y2="400" />
      </g>

      <g fill="currentColor" fontSize="14" fontWeight="500">
        <text x="40" y="54" dominantBaseline="central">
          스크롤로 더 받을 때
        </text>
        <text x="390" y="54" dominantBaseline="central">
          검색어가 바뀔 때
        </text>
        <text x="185" y="96" textAnchor="middle" dominantBaseline="central">
          cursorId 유지
        </text>
        <text x="185" y="156" textAnchor="middle" dominantBaseline="central">
          다음 5건 요청
        </text>
        <text x="535" y="96" textAnchor="middle" dominantBaseline="central">
          cursorId 버림
        </text>
        <text x="535" y="156" textAnchor="middle" dominantBaseline="central">
          첫 5건 요청
        </text>
        <text x="40" y="336" dominantBaseline="central">
          중복 요청 방지
        </text>
        <text x="125" y="400" textAnchor="middle" dominantBaseline="central">
          감시 요소 진입
        </text>
      </g>

      <g className="text-accent" fill="currentColor" fontSize="14" fontWeight="500">
        <text x="185" y="218" textAnchor="middle" dominantBaseline="central">
          기존 목록 뒤에 이어 붙임
        </text>
        <text x="535" y="218" textAnchor="middle" dominantBaseline="central">
          목록 전체를 갈아 끼움
        </text>
        <text x="610" y="400" textAnchor="middle" dominantBaseline="central">
          다음 묶음 요청
        </text>
      </g>

      <g className="text-muted" fill="currentColor" fontSize="12">
        <text x="185" y="266" textAnchor="middle" dominantBaseline="central">
          [1..15] + [16..20]
        </text>
        <text x="535" y="266" textAnchor="middle" dominantBaseline="central">
          [검색 결과 1..5]
        </text>
        <text x="375" y="386" textAnchor="middle" dominantBaseline="central">
          첫 조회가 끝났는가
        </text>
        <text x="375" y="412" textAnchor="middle" dominantBaseline="central">
          이어 받을 커서가 남았는가
        </text>
        <text x="250" y="452" dominantBaseline="central">
          둘 중 하나라도 아니면 요청하지 않는다
        </text>
      </g>
    </svg>
  );
}
