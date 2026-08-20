"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Field = "email" | "password";

/**
 * 로그인이 필요한 서비스의 체험 계정.
 *
 * 클립보드는 보안 컨텍스트(https 또는 localhost)에서만 쓸 수 있다.
 * 서버 렌더 결과와 어긋나지 않도록 마운트 후에 지원 여부를 확인하고,
 * 지원하지 않으면 그냥 선택 가능한 텍스트로 남는다.
 */
export function DemoAccount({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const [canCopy, setCanCopy] = useState(false);
  const [copied, setCopied] = useState<Field | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setCanCopy(Boolean(navigator.clipboard?.writeText));
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = useCallback(async (field: Field, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(field);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(null), 1500);
    } catch {
      // 권한이 막히면 버튼을 내리고 텍스트로 남긴다. 값은 화면에 그대로 있다.
      setCanCopy(false);
    }
  }, []);

  const rows: { field: Field; label: string; value: string }[] = [
    { field: "email", label: "이메일", value: email },
    { field: "password", label: "비밀번호", value: password },
  ];

  return (
    <div className="mt-3 text-xs text-muted">
      <p className="font-medium">체험 계정</p>

      <dl className="mt-1 space-y-1">
        {rows.map((row) => (
          <div key={row.field} className="flex items-baseline gap-2">
            <dt className="w-12 shrink-0">{row.label}</dt>
            <dd className="flex items-baseline gap-1.5">
              {canCopy ? (
                <button
                  type="button"
                  onClick={() => copy(row.field, row.value)}
                  aria-label={`${row.label} 복사`}
                  className="font-mono break-all underline-offset-4 hover:underline"
                >
                  {row.value}
                </button>
              ) : (
                <span className="font-mono break-all select-all">
                  {row.value}
                </span>
              )}

              {copied === row.field && (
                <span className="shrink-0 text-accent">복사됨</span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      {/* 화면 낭독기에도 복사 결과를 알린다. */}
      <span aria-live="polite" className="sr-only">
        {copied ? "복사됨" : ""}
      </span>
    </div>
  );
}
