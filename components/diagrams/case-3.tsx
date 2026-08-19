/**
 * 케이스 3 다이어그램 — 세 번의 측정.
 *
 * 왼쪽은 무엇을 바꿔서 쟀는가, 가운데는 그때의 실행 계획,
 * 오른쪽은 나온 값. 화살표 옆 라벨이 "무엇을 고쳤더니 값이 바뀌었나"를 잡는다.
 */
export const hasContent = true;

export function Case3Diagram() {
  return (
    <svg
      viewBox="0 0 720 530"
      className="h-auto w-full min-w-[600px] text-fg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <marker
          id="case3-arrow"
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
        <rect x="40" y="70" width="250" height="56" rx="8" />
        <rect x="40" y="196" width="250" height="56" rx="8" />
        <rect x="40" y="322" width="250" height="56" rx="8" />
      </g>

      <g
        className="text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      >
        <rect x="40" y="430" width="600" height="60" rx="8" />
      </g>

      <g
        stroke="currentColor"
        strokeWidth="1"
        markerEnd="url(#case3-arrow)"
        fill="none"
      >
        <line x1="165" y1="130" x2="165" y2="192" />
        <line x1="165" y1="256" x2="165" y2="318" />
        <line x1="165" y1="382" x2="165" y2="426" />
      </g>

      <g fill="currentColor" fontSize="14" fontWeight="500">
        <text x="165" y="90" textAnchor="middle" dominantBaseline="central">
          2만 건을 반경 안에 집중
        </text>
        <text x="165" y="216" textAnchor="middle" dominantBaseline="central">
          서울 전역 200개 동네로 분산
        </text>
        <text x="165" y="342" textAnchor="middle" dominantBaseline="central">
          같은 호출 15회 중앙값
        </text>
        <text x="360" y="98" dominantBaseline="central">
          Seq Scan
        </text>
        <text x="360" y="224" dominantBaseline="central">
          Index Scan
        </text>
        <text x="360" y="350" dominantBaseline="central">
          같은 계획, 15회 반복
        </text>
        <text x="640" y="98" textAnchor="end" dominantBaseline="central">
          405 ms
        </text>
        <text x="640" y="224" textAnchor="end" dominantBaseline="central">
          111 ms
        </text>
      </g>

      <g className="text-accent" fill="currentColor" fontSize="14" fontWeight="500">
        <text x="640" y="350" textAnchor="end" dominantBaseline="central">
          0.52 ~ 1.94 ms
        </text>
        <text x="340" y="452" textAnchor="middle" dominantBaseline="central">
          DB는 병목이 아니다 — 인덱스도 쿼리도 고치지 않음
        </text>
      </g>

      <g className="text-muted" fill="currentColor" fontSize="12">
        <text x="40" y="52" dominantBaseline="central">
          측정 조건
        </text>
        <text x="360" y="52" dominantBaseline="central">
          실행 계획
        </text>
        <text x="640" y="52" textAnchor="end" dominantBaseline="central">
          응답 시간
        </text>
        <text x="165" y="110" textAnchor="middle" dominantBaseline="central">
          부하 데이터의 분포가 틀림
        </text>
        <text x="165" y="236" textAnchor="middle" dominantBaseline="central">
          재는 방법이 틀림
        </text>
        <text x="165" y="362" textAnchor="middle" dominantBaseline="central">
          콜드 코스트를 걷어낸 값
        </text>
        <text x="180" y="161" dominantBaseline="central">
          데이터 분포 수정
        </text>
        <text x="180" y="287" dominantBaseline="central">
          측정 방법 수정
        </text>
        <text x="360" y="116" dominantBaseline="central">
          20,006행 전수 조사
        </text>
        <text x="360" y="242" dominantBaseline="central">
          반경 안 180행
        </text>
        <text x="340" y="472" textAnchor="middle" dominantBaseline="central">
          진짜 병목은 목록 카드 20개 × 원본 사진 5MB ≈ 100MB
        </text>
      </g>
    </svg>
  );
}
