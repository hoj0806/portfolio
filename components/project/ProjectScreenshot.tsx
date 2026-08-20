"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * 프로젝트 스크린샷.
 *
 * 경로는 있는데 파일이 아직 없으면 next/image가 400을 내고 브라우저에는
 * 깨진 이미지가 남는다. 그 경우 자리 표시자로 대체한다.
 *
 * onError만으로는 부족하다. 하이드레이션 전에 이미 실패한 이미지는
 * 이벤트를 놓치므로, 마운트 시점에 실제로 그려졌는지도 함께 확인한다.
 */
export function ProjectScreenshot({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = ref.current;
    // complete이면서 폭이 0이면 로드가 끝났는데 그려진 것이 없다는 뜻이다.
    if (image && image.complete && image.naturalWidth === 0) setFailed(true);
  }, []);

  if (src === "" || failed) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center rounded-md border border-dashed border-border text-sm text-muted">
        스크린샷 준비 중
      </div>
    );
  }

  return (
    // 세로가 긴 것과 가로가 긴 것이 섞여 있어 비율을 카드 쪽에서 고정한다.
    // 그래야 세 카드의 이미지 높이가 같고, 로드 전후로 레이아웃이 밀리지 않는다.
    // 화면 위쪽(헤더·첫 행)이 무엇을 만든 것인지 가장 잘 보여주므로 위를 기준으로 자른다.
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-border">
      <Image
        ref={ref}
        src={src}
        alt={alt}
        fill
        // 카드 폭은 화면이 넓어져도 고정된다. vw로 잡으면 실제보다 두 배 큰 파일을 받는다.
        sizes="(min-width: 1024px) 200px, (min-width: 640px) 320px, calc(100vw - 4rem)"
        onError={() => setFailed(true)}
        className="object-cover object-top"
      />
    </div>
  );
}
