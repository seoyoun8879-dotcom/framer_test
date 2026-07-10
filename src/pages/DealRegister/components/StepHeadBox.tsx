interface MyComponentProps {
  variant?: 1 | 2 | 3;
}

const contentByVariant = {
  1: {
    title: "대상기업",
    subtitle: "M&A대상기업입니다. 기업명을 입력해 주세요.",
    number: "01",
  },
  2: {
    title: "매각조건",
    subtitle: "기본조건을 정하시고 자세한 내역은 상세내역에 기술하시면 됩니다.",
    number: "02",
  },
  3: {
    title: "약관동의",
    subtitle: "약관에 동의하시면 플랫폼에 등록됩니다.",
    number: "03",
  },
};

export function StepHeadBox({ variant = 1 }: MyComponentProps) {
  const data = contentByVariant[variant];
  const isPrimary = variant === 1;

  return (
    <section
      style={{
        width: 1170,
        height: 197,
        borderRadius: 21,
        boxShadow: "6px 6px 5px rgba(0,0,0,0.25)",
        padding: "0 141px 0 131px",
        background: isPrimary ? "rgb(0,176,240)" : "#fff",
        color: isPrimary ? "#fff" : "#000",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        gap: 30,
        fontFamily: "Inter, 'Noto Sans KR', sans-serif",
      }}
    >
      <div
        style={{
          width: 85,
          height: 85,
          borderRadius: "50%",
          border: `2px solid ${isPrimary ? "#fff" : "#BDBDBD"}`,
          display: "grid",
          placeItems: "center",
          fontSize: 28,
          fontWeight: 600,
          background: isPrimary ? "rgba(255,255,255,0.15)" : "#F5F5F5",
        }}
      >
        {data.number}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ margin: 0, fontSize: 27, fontWeight: 500 }}>
          {data.title}
        </h2>
        <p style={{ margin: 0, fontSize: 16, lineHeight: "24px" }}>
          {data.subtitle}
        </p>
      </div>
    </section>
  );
}
