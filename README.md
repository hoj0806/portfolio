# 포트폴리오 사이트

Next.js 15 · TypeScript · Tailwind CSS 4. 단일 페이지 세로 스크롤.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # 프로덕션 빌드
npm run lint       # eslint (any 금지 포함)
npm run typecheck  # tsc --noEmit
```

## 내가 채워야 하는 곳

지금은 구조만 있고 본문이 비어 있다. 아래를 채우면 사이트가 완성된다.

| 무엇 | 어디 |
| --- | --- |
| 케이스 6개의 문제·해결·결과 (각 3줄) | `content/cases.ts` — `problem` / `solution` / `result` 배열 |
| 케이스 다이어그램 캡션 | `content/cases.ts` — `figureCaption` |
| 케이스 관련 링크 | `content/cases.ts` — `links` |
| 다이어그램 SVG 6개 | `components/diagrams/case-1.tsx` ~ `case-6.tsx` |
| 이름·직군·한 줄 소개·연락처 | `content/site.ts` |
| 프로젝트 한 줄 설명, 속한 케이스 | `content/projects.ts` — `summary` / `caseIds` |
| 프로젝트 스크린샷 (WebP) | `public/screenshots/` → `content/projects.ts`의 `screenshot` |
| 이력서 PDF | `public/resume.pdf` |

빈 값은 그대로 두어도 빌드가 통과한다. 채우지 않은 자리는 "작성 예정"으로 보인다.

### 다이어그램 그릴 때

`components/diagrams/case-N.tsx`의 `<svg>` 안에 그린다. 세 가지만 지킨다.

1. 색은 `currentColor`만 쓴다 — 라이트/다크를 자동으로 따라간다.
2. `viewBox`는 두고 `width`/`height`는 넣지 않는다.
3. 다 그렸으면 같은 파일의 `hasContent`를 `true`로 바꾼다. 그래야 자리 표시자 대신 그림이 나온다.

## 구조

```
app/          layout · page · 디자인 토큰(globals.css) · 폰트 정의(fonts.css)
content/      본문 데이터와 타입. 컴포넌트에 문자열을 하드코딩하지 않는다
components/   layout · sections · case · project · diagrams · ui
              프로젝트 섹션 하나가 헤더 + 그 프로젝트의 케이스를 담는다
hooks/        useScrollSpy — 목차 하이라이트
lib/          theme — 라이트/다크 전환
claude/       명세 문서 (spec · design · constraints)
```

## 폰트

Pretendard Variable의 공식 dynamic subset 92개를 `public/fonts/pretendard/`에
자체 호스팅한다. 브라우저는 `unicode-range`에 걸리는 파일만 받으므로 실제
전송량은 보통 200KB 안쪽이다. 첫 화면에 필요한 3개(91·90·89)는
`app/layout.tsx`에서 preload한다.
