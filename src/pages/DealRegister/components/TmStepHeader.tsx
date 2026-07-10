function PlaneIcon() {
  return (
    <svg
      width="57"
      height="41"
      viewBox="0 0 57 41"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 19.5L55 2L33 39L26 24L2 19.5Z"
        stroke="#1A1A1A"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export function TmStepHeader() {
  return (
    <section
      style={{
        width: 1171,
        height: 197,
        borderRadius: 21,
        boxShadow: "6.67px 5.33px 5px rgba(0,0,0,0.25)",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 64px",
        boxSizing: "border-box",
        gap: 30,
        fontFamily: "Inter, 'Noto Sans KR', sans-serif",
      }}
    >
      <PlaneIcon />
      <div style={{ width: 3, height: 90, background: "#D9D9D9" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h3
          style={{
            margin: 0,
            fontSize: 27,
            fontWeight: 500,
            color: "#000",
          }}
        >
          대량인수제안
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: 16,
            lineHeight: "27px",
            color: "rgba(36,36,36,0.9)",
          }}
        >
          내 기업 매도제안서 를 25만여 잠재 인수자에게 전달합니다 (기업 선택)
        </p>
        <span style={{ fontSize: 11, color: "rgba(36,36,36,0.9)" }}>
          Teaser Memo
        </span>
      </div>
    </section>
  );
}
