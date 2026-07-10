export function PageHeader() {
  const links = [
    "마이페이지",
    "거래탐색",
    "매칭알림",
    "매각가추정",
    "데이터룸",
    "거래등록",
  ];

  return (
    <header
      style={{
        width: "100%",
        height: 93,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 60px",
        boxSizing: "border-box",
        fontFamily: "Inter, 'Noto Sans KR', sans-serif",
      }}
    >
      <div
        style={{
          color: "#fff",
          fontSize: 26,
          fontWeight: 600,
          letterSpacing: "0.01em",
        }}
      >
        COMPANY
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: 40 }}>
        {links.map((link) => (
          <span
            key={link}
            style={{ color: "#fff", fontSize: 16, fontWeight: 500 }}
          >
            {link}
          </span>
        ))}
      </nav>
    </header>
  );
}
