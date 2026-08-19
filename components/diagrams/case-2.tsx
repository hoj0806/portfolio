/**
 * 케이스 2 다이어그램 — 채팅 읽음 처리 변경 전후.
 *
 * 두 줄의 앞 두 칸이 같다는 것이 요점이다. 메시지는 원래 제때 왔고
 * 세 번째 칸(방 요약 재조회)만 왕복을 하나 더 끼우고 있었다.
 */
export const hasContent = true;

export function Case2Diagram() {
  return (
    <svg
      viewBox="0 0 720 470"
      className="h-auto w-full min-w-[600px] text-fg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <marker
          id="case2-arrow"
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
        <rect x="40" y="80" width="135" height="48" rx="8" />
        <rect x="195" y="80" width="135" height="48" rx="8" />
        <rect x="505" y="80" width="135" height="48" rx="8" />
        <rect x="40" y="240" width="135" height="48" rx="8" />
        <rect x="195" y="240" width="135" height="48" rx="8" />
        <rect x="505" y="240" width="135" height="48" rx="8" />
      </g>

      <g
        className="text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <rect x="350" y="80" width="135" height="48" rx="8" />
        <rect x="350" y="240" width="135" height="48" rx="8" />
      </g>

      <g
        stroke="currentColor"
        strokeWidth="1"
        markerEnd="url(#case2-arrow)"
        fill="none"
      >
        <line x1="179" y1="104" x2="191" y2="104" />
        <line x1="334" y1="104" x2="346" y2="104" />
        <line x1="489" y1="104" x2="501" y2="104" />
        <line x1="179" y1="264" x2="191" y2="264" />
        <line x1="334" y1="264" x2="346" y2="264" />
        <line x1="489" y1="264" x2="501" y2="264" />
      </g>

      <g fill="currentColor" fontSize="14" fontWeight="500">
        <text x="40" y="58" dominantBaseline="central">
          변경 전
        </text>
        <text x="40" y="218" dominantBaseline="central">
          변경 후
        </text>
        <text x="107" y="104" textAnchor="middle" dominantBaseline="central">
          메시지 도착
        </text>
        <text x="262" y="104" textAnchor="middle" dominantBaseline="central">
          목록 갱신
        </text>
        <text x="572" y="104" textAnchor="middle" dominantBaseline="central">
          읽음 처리
        </text>
        <text x="107" y="264" textAnchor="middle" dominantBaseline="central">
          메시지 도착
        </text>
        <text x="262" y="264" textAnchor="middle" dominantBaseline="central">
          목록 갱신
        </text>
        <text x="572" y="264" textAnchor="middle" dominantBaseline="central">
          읽음 처리
        </text>
      </g>

      <g className="text-accent" fill="currentColor" fontSize="14" fontWeight="500">
        <text x="417" y="104" textAnchor="middle" dominantBaseline="central">
          방 요약 재조회
        </text>
        <text x="417" y="264" textAnchor="middle" dominantBaseline="central">
          화면에서 셈
        </text>
        <text x="572" y="148" textAnchor="middle" dominantBaseline="central">
          21.3초
        </text>
        <text x="572" y="308" textAnchor="middle" dominantBaseline="central">
          0.8초
        </text>
      </g>

      <g className="text-muted" fill="currentColor" fontSize="12">
        <text x="417" y="148" textAnchor="middle" dominantBaseline="central">
          왕복 하나가 더 끼어 있음
        </text>
        <text x="417" y="308" textAnchor="middle" dominantBaseline="central">
          서버에 다시 묻지 않음
        </text>
        <text x="40" y="368" dominantBaseline="central">
          변경 전 실제 측정값
        </text>
        <text x="40" y="398" dominantBaseline="central">
          구매자 → 판매자
        </text>
        <text x="40" y="424" dominantBaseline="central">
          판매자 → 구매자
        </text>
        <text x="300" y="398" textAnchor="end" dominantBaseline="central">
          21.30초
        </text>
        <text x="300" y="424" textAnchor="end" dominantBaseline="central">
          1.47초 / 1.27초
        </text>
      </g>

      <line
        x1="40"
        y1="382"
        x2="300"
        y2="382"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}
