Pretendard Variable dynamic subset (v1.3.9, SIL Open Font License 1.1).
https://github.com/orioncactus/pretendard

92개 파일이 unicode-range로 나뉘어 있어, 브라우저는 페이지에 실제로 쓰인
글자가 속한 파일만 받아 간다. 보통 5~8개(약 200KB)면 충분하다.
@font-face 정의는 `app/fonts.css`에 있고, preload 대상은 `app/layout.tsx`에 있다.
