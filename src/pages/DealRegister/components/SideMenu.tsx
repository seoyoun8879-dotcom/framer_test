import * as React from "react";

interface MyComponentProps {
  variant?: 1 | 2 | 3;
}

function HamburgerIcon() {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="18" height="2" fill="#fff" />
      <rect x="1" y="7" width="18" height="2" fill="#fff" />
      <rect x="1" y="13" width="18" height="2" fill="#fff" />
    </svg>
  );
}

function PlaneCircleIcon() {
  return (
    <div
      style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.6)",
        display: "grid",
        placeItems: "center",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 11.5 21 3l-8.2 18-2.5-7.4L3 11.5Z"
          stroke="#fff"
          strokeWidth="1.6"
        />
      </svg>
    </div>
  );
}

export function SideMenu({ variant = 1 }: MyComponentProps) {
  const text =
    variant === 1
      ? "매도제안서 예시"
      : variant === 2
        ? "요약약관"
        : "대량인수제안";

  return (
    <div
      style={{
        width: 203,
        height: 59,
        borderRadius: 100,
        background: "#242424",
        boxShadow: "4px 4px 5px rgba(0,0,0,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: variant === 3 ? "0 14px 0 10px" : "0 24px",
        boxSizing: "border-box",
        color: "#fff",
        fontSize: 17,
        fontWeight: 400,
        fontFamily: "Inter, 'Noto Sans KR', sans-serif",
      }}
    >
      {variant === 3 ? (
        <>
          <PlaneCircleIcon />
          <span>{text}</span>
        </>
      ) : (
        <>
          <span>{text}</span>
          <HamburgerIcon />
        </>
      )}
    </div>
  );
}
