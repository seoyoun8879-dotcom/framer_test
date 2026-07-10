import * as React from "react";

export function Banner() {
  return (
    <section
      style={{
        width: "100%",
        height: 349,
        background: "linear-gradient(120deg,#0b1c2c,#123)",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        paddingLeft: 375,
        fontFamily: "Inter, 'Noto Sans KR', sans-serif",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <h1
          style={{
            margin: 0,
            fontSize: 47,
            fontWeight: 700,
            lineHeight: "73px",
          }}
        >
          Upload a Deal
        </h1>
        <p style={{ margin: 0, fontSize: 16, lineHeight: "30px" }}>
          2단계 정보등록과 약관동의로 이루어집니다. 25만여 잠재 인수자에게
          대량의 인수제안이 가능합니다.
        </p>
      </div>
    </section>
  );
}
