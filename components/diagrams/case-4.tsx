/**
 * 케이스 4 다이어그램 — 상태 레이어를 세우기 전과 후.
 *
 * 위쪽은 화면마다 API를 따로 부르는 모양, 아래쪽은 스토어를 한 번 거치는 모양.
 * 위에서 오른쪽 칸이 네 개로 갈라져 있다는 것 자체가 문제 진술이다.
 */
export const hasContent = true;

export function Case4Diagram() {
  return (
    <svg
      viewBox="0 0 720 530"
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
        <rect x="40" y="70" width="120" height="36" rx="6" />
        <rect x="40" y="114" width="120" height="36" rx="6" />
        <rect x="40" y="158" width="120" height="36" rx="6" />
        <rect x="40" y="202" width="120" height="36" rx="6" />
        <rect x="230" y="70" width="90" height="36" rx="6" />
        <rect x="230" y="114" width="90" height="36" rx="6" />
        <rect x="230" y="158" width="90" height="36" rx="6" />
        <rect x="230" y="202" width="90" height="36" rx="6" />

        <rect x="40" y="330" width="120" height="36" rx="6" />
        <rect x="40" y="374" width="120" height="36" rx="6" />
        <rect x="40" y="418" width="120" height="36" rx="6" />
        <rect x="40" y="462" width="120" height="36" rx="6" />
        <rect x="390" y="392" width="160" height="44" rx="8" />
        <rect x="580" y="392" width="90" height="44" rx="8" />
      </g>

      <g
        className="text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <rect x="230" y="330" width="120" height="168" rx="8" />
      </g>

      <g
        stroke="currentColor"
        strokeWidth="1"
        markerEnd="url(#case4-arrow)"
        fill="none"
      >
        <line x1="164" y1="88" x2="226" y2="88" />
        <line x1="164" y1="132" x2="226" y2="132" />
        <line x1="164" y1="176" x2="226" y2="176" />
        <line x1="164" y1="220" x2="226" y2="220" />

        <line x1="164" y1="348" x2="226" y2="348" />
        <line x1="164" y1="392" x2="226" y2="392" />
        <line x1="164" y1="436" x2="226" y2="436" />
        <line x1="164" y1="480" x2="226" y2="480" />
        <line x1="354" y1="414" x2="386" y2="414" />
        <line x1="554" y1="414" x2="576" y2="414" />
      </g>

      <g fill="currentColor" fontSize="14" fontWeight="500">
        <text x="40" y="48" dominantBaseline="central">
          변경 전
        </text>
        <text x="40" y="308" dominantBaseline="central">
          변경 후
        </text>
        <text x="470" y="414" textAnchor="middle" dominantBaseline="central">
          createAsyncThunk
        </text>
        <text x="625" y="414" textAnchor="middle" dominantBaseline="central">
          API
        </text>
      </g>

      <g className="text-accent" fill="currentColor" fontSize="14" fontWeight="500">
        <text x="290" y="404" textAnchor="middle" dominantBaseline="central">
          Store
        </text>
      </g>

      <g fill="currentColor" fontSize="13">
        <text x="100" y="88" textAnchor="middle" dominantBaseline="central">
          화면 A
        </text>
        <text x="100" y="132" textAnchor="middle" dominantBaseline="central">
          화면 B
        </text>
        <text x="100" y="176" textAnchor="middle" dominantBaseline="central">
          화면 C
        </text>
        <text x="100" y="220" textAnchor="middle" dominantBaseline="central">
          화면 D
        </text>
        <text x="275" y="88" textAnchor="middle" dominantBaseline="central">
          API
        </text>
        <text x="275" y="132" textAnchor="middle" dominantBaseline="central">
          API
        </text>
        <text x="275" y="176" textAnchor="middle" dominantBaseline="central">
          API
        </text>
        <text x="275" y="220" textAnchor="middle" dominantBaseline="central">
          API
        </text>
        <text x="100" y="348" textAnchor="middle" dominantBaseline="central">
          화면 A
        </text>
        <text x="100" y="392" textAnchor="middle" dominantBaseline="central">
          화면 B
        </text>
        <text x="100" y="436" textAnchor="middle" dominantBaseline="central">
          화면 C
        </text>
        <text x="100" y="480" textAnchor="middle" dominantBaseline="central">
          화면 D
        </text>
      </g>

      <g className="text-muted" fill="currentColor" fontSize="12">
        <text x="345" y="132" dominantBaseline="central">
          같은 인증·대시보드 데이터를
        </text>
        <text x="345" y="152" dominantBaseline="central">
          화면마다 따로 들고 있음
        </text>
        <text x="290" y="426" textAnchor="middle" dominantBaseline="central">
          담당 slice 7종
        </text>
        <text x="290" y="444" textAnchor="middle" dominantBaseline="central">
          전체 12종
        </text>
        <text x="390" y="460" dominantBaseline="central">
          화면은 스토어에서 읽기만 한다
        </text>
      </g>
    </svg>
  );
}
