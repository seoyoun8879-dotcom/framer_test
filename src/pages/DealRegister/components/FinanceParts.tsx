import * as React from "react";

export function FinanceYearHeader() {
  const cols = ["FY 2023", "FY 2024", "FY 2025"];
  return (
    <div
      style={{
        width: 715,
        height: 45,
        borderRadius: 5.33,
        background: "rgba(36,36,36,0.9)",
        display: "grid",
        gridTemplateColumns: "190px 1fr 1fr 1fr",
        alignItems: "center",
        color: "#fff",
        fontFamily: "Inter, 'Noto Sans KR', sans-serif",
        fontSize: 14,
        fontWeight: 500,
        boxSizing: "border-box",
      }}
    >
      <span style={{ paddingLeft: 18 }}>(백만원)</span>
      {cols.map((c) => (
        <span
          key={c}
          style={{
            textAlign: "center",
            borderLeft: "1px solid rgba(255,255,255,0.5)",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          {c}
        </span>
      ))}
    </div>
  );
}

interface FinanceTableProps {
  label: string;
}

export function FinanceTable({ label }: FinanceTableProps) {
  return (
    <div
      style={{
        width: 633,
        height: 22,
        display: "grid",
        gridTemplateColumns: "190px 1fr 1fr 1fr",
        alignItems: "center",
        fontFamily: "Inter, 'Noto Sans KR', sans-serif",
      }}
    >
      <span style={{ fontSize: 16, fontWeight: 500, color: "#000" }}>
        {label}
      </span>
      <span style={{ fontSize: 16, fontWeight: 400, textAlign: "right" }}>
        50,000
      </span>
      <span style={{ fontSize: 16, fontWeight: 400, textAlign: "right" }}>
        50,000
      </span>
      <span style={{ fontSize: 16, fontWeight: 400, textAlign: "right" }}>
        50,000
      </span>
    </div>
  );
}

export function YearHeadBox() {
  const cols = ["FY 2022", "FY 2023", "FY 2024"];
  return (
    <div
      style={{
        width: 715,
        height: 52,
        borderRadius: 5.33,
        background: "rgba(36,36,36,0.9)",
        display: "grid",
        gridTemplateColumns: "190px 1fr 1fr 1fr",
        alignItems: "center",
        color: "#fff",
        fontFamily: "Inter, 'Noto Sans KR', sans-serif",
        fontSize: 16,
        fontWeight: 500,
      }}
    >
      <span style={{ paddingLeft: 18 }}>(억원)</span>
      {cols.map((c) => (
        <span
          key={c}
          style={{
            textAlign: "center",
            borderLeft: "1px solid rgba(255,255,255,0.5)",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          {c}
        </span>
      ))}
    </div>
  );
}

export function BillionInputBox() {
  const [value, setValue] = React.useState("");
  return (
    <div
      style={{
        width: 155,
        height: 39,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <input
        value={value}
        onChange={(e) => React.startTransition(() => setValue(e.target.value))}
        placeholder="직접입력"
        style={{
          width: 96,
          height: 39,
          border: "1.33px solid #D9D9D9",
          borderRadius: 5.33,
          padding: "0 8px",
          boxSizing: "border-box",
          fontFamily: "Inter, 'Noto Sans KR', sans-serif",
          fontSize: 16,
          color: "#707070",
        }}
      />
      <span
        style={{
          fontFamily: "Inter, 'Noto Sans KR', sans-serif",
          fontSize: 16,
          color: "rgba(36,36,36,0.9)",
        }}
      >
        억원
      </span>
    </div>
  );
}

export function HighlightInput() {
  const [text, setText] = React.useState("");
  return (
    <div
      style={{
        width: 715,
        height: 169,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: 715,
          height: 132,
          border: "1.33px solid #D9D9D9",
          borderRadius: 13.33,
          background: "#fff",
          boxSizing: "border-box",
          padding: "10px 14px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, 'Noto Sans KR', sans-serif",
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "-0.05em",
            }}
          >
            하이라이트
          </span>
          <span
            style={{
              fontFamily: "Inter, 'Noto Sans KR', sans-serif",
              fontSize: 14,
              color: "#666",
            }}
          >
            {text.length}/60
          </span>
        </div>
        <div
          style={{
            marginTop: 8,
            width: 479,
            height: 84,
            borderRadius: 5,
            background: "#F5F5F5",
            padding: "8px 10px",
            boxSizing: "border-box",
          }}
        >
          <textarea
            value={text}
            onChange={(e) =>
              React.startTransition(() => setText(e.target.value.slice(0, 60)))
            }
            placeholder="회사의 간략소개, 투자메리트를 적어주시면 됩니다. M&A리스트에 노출됩니다 (60자, 2줄이내, 붙여쓰기)"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              resize: "none",
              outline: "none",
              background: "transparent",
              fontFamily: "Inter, 'Noto Sans KR', sans-serif",
              fontSize: 16,
              color: "#777373",
            }}
          />
        </div>
      </div>
      <a
        href="#"
        style={{
          width: "fit-content",
          fontFamily: "Inter, 'Noto Sans KR', sans-serif",
          fontSize: 14,
          color: "#000",
          textDecoration: "none",
        }}
      >
        ⌁ 예시보기
      </a>
    </div>
  );
}
