/**
 * 케이스 4 다이어그램 — 도감 데이터를 어디서 가져오는가.
 *
 * loader가 네트워크보다 스토어를 먼저 본다는 것이 요점이다.
 * 왼쪽은 최초 1회, 오른쪽은 그 이후. 아래는 캐시가 살아남는 자리.
 */
export const hasContent = true;

export function Case4Diagram() {
  return (
    <svg
      viewBox="0 0 720 520"
      className="h-auto w-full min-w-[600px] text-fg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <marker
          id="case4-arrow"
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
        <rect x="255" y="40" width="210" height="44" rx="8" />
        <rect x="40" y="212" width="270" height="56" rx="8" />
        <rect x="40" y="300" width="270" height="56" rx="8" />
        <rect x="410" y="212" width="270" height="56" rx="8" />
        <rect x="255" y="404" width="210" height="44" rx="8" />
      </g>

      <g
        className="text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <rect x="255" y="124" width="210" height="56" rx="8" />
      </g>

      <g
        stroke="currentColor"
        strokeWidth="1"
        markerEnd="url(#case4-arrow)"
        fill="none"
      >
        <line x1="360" y1="88" x2="360" y2="120" />
        <path d="M255 152 H175 V208" />
        <path d="M465 152 H545 V208" />
        <line x1="175" y1="272" x2="175" y2="296" />
        <path d="M175 360 V380 H360 V400" />
        <path d="M620 272 V380 H360" />
      </g>

      <g fill="currentColor" fontSize="14" fontWeight="500">
        <text x="360" y="62" textAnchor="middle" dominantBaseline="central">
          도감 진입
        </text>
        <text x="175" y="230" textAnchor="middle" dominantBaseline="central">
          PokéAPI 요청 약 600건
        </text>
        <text x="175" y="318" textAnchor="middle" dominantBaseline="central">
          단일 객체로 정규화
        </text>
        <text x="465" y="318" textAnchor="middle" dominantBaseline="central">
          localStorage · Zustand persist
        </text>
        <text x="545" y="230" textAnchor="middle" dominantBaseline="central">
          스토어 값 그대로 반환
        </text>
        <text x="360" y="426" textAnchor="middle" dominantBaseline="central">
          도감 화면
        </text>
      </g>

      <g className="text-accent" fill="currentColor" fontSize="14" fontWeight="500">
        <text x="360" y="142" textAnchor="middle" dominantBaseline="central">
          loader — 스토어에 있는가
        </text>
      </g>

      <g className="text-muted" fill="currentColor" fontSize="12">
        <text x="360" y="164" textAnchor="middle" dominantBaseline="central">
          네트워크보다 캐시를 먼저 본다
        </text>
        <text x="188" y="192" dominantBaseline="central">
          없음 · 최초 1회
        </text>
        <text x="536" y="192" textAnchor="end" dominantBaseline="central">
          있음 · 두 번째부터
        </text>
        <text x="175" y="250" textAnchor="middle" dominantBaseline="central">
          Promise.all 다단 병렬 — 상세 · 종 · 타입 · 특성
        </text>
        <text x="175" y="338" textAnchor="middle" dominantBaseline="central">
          한국어 이름 · 타입 · 특성
        </text>
        <text x="465" y="338" textAnchor="middle" dominantBaseline="central">
          새로고침 후에도 유지
        </text>
        <text x="545" y="250" textAnchor="middle" dominantBaseline="central">
          요청 0건
        </text>
        <text x="360" y="470" textAnchor="middle" dominantBaseline="central">
          정렬 3종과 북마크도 같은 배열을 다시 정렬할 뿐, 추가 요청이 없다
        </text>
      </g>

      <g fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4">
        <rect x="350" y="300" width="230" height="56" rx="8" />
      </g>

      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 4"
        markerEnd="url(#case4-arrow)"
        fill="none"
      >
        <line x1="310" y1="328" x2="346" y2="328" />
        <line x1="465" y1="296" x2="465" y2="272" />
      </g>
    </svg>
  );
}
