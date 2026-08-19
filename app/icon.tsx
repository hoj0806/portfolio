import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * 파비콘. 배경 없이 H 한 글자만 둔다.
 *
 * 탭 배경은 브라우저 테마를 따라가는데 파비콘은 한 장뿐이라 색을 바꿀 수 없다.
 * 그래서 흰 배경과 검은 배경에서 대비가 같아지는 지점(양쪽 4.42:1)으로 고정했다.
 * 이 값은 라이트 accent(#1d4ed8)와 다크 accent(#8ab4ff) 사이에 놓인다.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          color: "#5470de",
        }}
      >
        H
      </div>
    ),
    size,
  );
}
