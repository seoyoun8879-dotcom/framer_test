import * as React from "react";

// User request: Replace the file with a brand-new pure React + TypeScript implementation of a Korean M&A deal-upload page, with full desktop layout, local useState-controlled fields, inline styles only, and no Framer imports/property controls.

interface MyComponentProps {}

type FieldProps = {
  label: string;
  children: React.ReactNode;
};

const ACCENT = "#00B0F0";
const baseFont = "Inter, 'Noto Sans KR', sans-serif";

function SearchIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" stroke={ACCENT} strokeWidth="2.2" />
      <path
        d="M16.3 16.3L20.6 20.6"
        stroke={ACCENT}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="18.8" cy="18.8" r="1.2" fill={ACCENT} />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Zm8 3.5-1.9-.7a6.9 6.9 0 0 0-.5-1.3l.8-1.9-1.9-1.9-1.9.8c-.4-.2-.8-.4-1.3-.5L12 4l-1.4 1.9c-.4.1-.9.3-1.3.5l-1.9-.8-1.9 1.9.8 1.9c-.2.4-.4.9-.5 1.3L4 12l1.9 1.4c.1.4.3.9.5 1.3l-.8 1.9 1.9 1.9 1.9-.8c.4.2.9.4 1.3.5L12 20l1.4-1.9c.4-.1.9-.3 1.3-.5l1.9.8 1.9-1.9-.8-1.9c.2-.4.4-.9.5-1.3L20 12Z"
        stroke="#666"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 11.5 21 3l-8.5 18-2.3-7.2L3 11.5Z"
        stroke="#111"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function Field({ label, children }: FieldProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ fontSize: 15, color: "#222", fontWeight: 600 }}>
        {label}
      </span>
      {children}
    </div>
  );
}

function sectionHeader(no: string, title: string) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ fontSize: 22, fontWeight: 800, color: "#101010" }}>
        {no} <span style={{ marginLeft: 8 }}>{title}</span>
      </div>
      <div style={{ height: 1, background: "#1E1E1E", opacity: 0.25 }} />
    </div>
  );
}

export default function CompanyInfoFormPage(_props: MyComponentProps) {
  const [search, setSearch] = React.useState("기업상장주식회사");
  const [companyName, setCompanyName] = React.useState("코스닥 A사 (수정불가)");
  const [foundedRange, setFoundedRange] = React.useState("2001~2005년");
  const [region, setRegion] = React.useState("대구·울산·경상북도");
  const [employees, setEmployees] = React.useState("101~150명");
  const [industry, setIndustry] = React.useState(
    "[정보통신업] 영화, 방송, 오디오제작 및 배급업",
  );
  const [keyword, setKeyword] = React.useState("");
  const [stockInfo, setStockInfo] = React.useState({
    status: "선택하세요",
    price: "선택하세요",
    marketCap: "선택하세요",
    parValue: "선택하세요",
  });
  const [grade, setGrade] = React.useState("우량");
  const [isCreditPublic, setIsCreditPublic] = React.useState(true);
  const [financeVisibility, setFinanceVisibility] = React.useState("결산정보");
  const [futureRevenue, setFutureRevenue] = React.useState(["", "", ""]);
  const [futureProfit, setFutureProfit] = React.useState(["", "", ""]);
  const [highlight, setHighlight] = React.useState("");

  const grades = React.useMemo(
    () => ["최우량", "우량", "보통", "열위", "위험", "부실", "NR"],
    [],
  );
  const financeRows = React.useMemo(
    () => [
      "유동자산",
      "현금 및 현금성자산",
      "비유동자산",
      "|",
      "자산총계",
      "|",
      "유동부채",
      "비유동부채",
      "|",
      "부채총계",
      "|",
      "[자본금]",
      "이익잉여금",
      "|",
      "자본총계",
      "|",
      "매출액",
      "영업이익",
      "EBITDA",
    ],
    [],
  );

  const inputStyle = React.useMemo<React.CSSProperties>(
    () => ({
      width: "100%",
      height: 47,
      border: "1px solid #D4D4D4",
      borderRadius: 10,
      padding: "0 14px",
      boxSizing: "border-box",
      fontSize: 15,
      fontFamily: baseFont,
      background: "#fff",
    }),
    [],
  );

  const updateStock = React.useCallback(
    (key: keyof typeof stockInfo, value: string) => {
      React.startTransition(() =>
        setStockInfo((prev) => ({ ...prev, [key]: value })),
      );
    },
    [],
  );

  const updateYear = React.useCallback(
    (
      setter: React.Dispatch<React.SetStateAction<string[]>>,
      index: number,
      value: string,
    ) => {
      React.startTransition(() =>
        setter((prev) => prev.map((item, i) => (i === index ? value : item))),
      );
    },
    [],
  );

  const keywordCount = keyword.length;
  const highlightCount = highlight.length;

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#F1F1F1",
        fontFamily: baseFont,
        color: "#111",
      }}
    >
      <header
        style={{
          height: 93,
          background: "#000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 48px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontWeight: 900,
            color: "#fff",
            fontSize: 25,
            letterSpacing: "0.02em",
          }}
        >
          PIVOTBRIDGE
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {[
            "거래탐색",
            "거래록",
            "매칭알림",
            "매기가추정",
            "데이터룸",
            "마이페이지",
          ].map((item) => (
            <span
              key={item}
              style={{
                fontSize: 14,
                color: "#fff",
                padding: item === "거래록" ? "8px 14px" : "0",
                borderRadius: item === "거래록" ? 999 : 0,
                background: item === "거래록" ? ACCENT : "transparent",
                fontWeight: 600,
              }}
            >
              {item}
            </span>
          ))}
          <button
            style={{
              border: "1px solid #A7A7A7",
              background: "#111",
              color: "#fff",
              borderRadius: 20,
              height: 34,
              padding: "0 14px",
            }}
          >
            COMPANY
          </button>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#1F1F1F",
              border: "1px solid #838383",
            }}
          />
        </nav>
      </header>

      <section
        style={{
          height: 349,
          background:
            "linear-gradient(120deg, #141414 0%, #090909 45%, #1d1d1d 100%)",
          display: "flex",
          alignItems: "center",
          paddingLeft: 220,
          boxSizing: "border-box",
        }}
      >
        <div style={{ color: "#fff" }}>
          <h1
            style={{
              margin: 0,
              fontSize: 62,
              lineHeight: 1.05,
              fontWeight: 800,
            }}
          >
            Upload a Deal
          </h1>
          <p
            style={{
              margin: "18px 0 0",
              fontSize: 15,
              lineHeight: 1.6,
              opacity: 0.95,
            }}
          >
            2단계 정보등록과 약관동의로 이루어집니다. 25만이 잠재 인수자에게
            대량의 인수제안이 가능합니다.
          </p>
        </div>
      </section>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "74px 24px 120px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ width: 1170, position: "relative" }}>
          <aside
            style={{
              position: "absolute",
              top: 0,
              right: -180,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {["매도제안서 예시", "요약약권", "대량인수제안"].map((item) => (
              <button
                key={item}
                style={{
                  width: 150,
                  border: "none",
                  borderRadius: 999,
                  background: "#0E0E0E",
                  color: "#fff",
                  height: 44,
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                {item} →
              </button>
            ))}
          </aside>

          <section
            style={{
              width: 1170,
              borderRadius: 21,
              background: ACCENT,
              color: "#fff",
              height: 197,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 56px",
              boxSizing: "border-box",
            }}
          >
            <div>
              <h2 style={{ margin: 0, fontSize: 42, fontWeight: 800 }}>
                대상기업
              </h2>
              <p style={{ margin: "12px 0 0", fontSize: 16 }}>
                M&A대상기업입니다. 기업명을 입력해 주세요.
              </p>
            </div>
            <div
              style={{
                width: 104,
                height: 104,
                borderRadius: "50%",
                background: "#fff",
                color: ACCENT,
                fontSize: 38,
                fontWeight: 800,
                display: "grid",
                placeItems: "center",
              }}
            >
              01
            </div>
          </section>

          <section
            style={{
              marginTop: 25,
              background: "#fff",
              borderRadius: 21,
              padding: "38px 40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 22,
            }}
          >
            <p style={{ margin: 0, fontSize: 17 }}>
              아래를 입력하시면 기업정보가 자동완성됩니다. ※ (주), 주식회사 등
              제외
            </p>
            <div
              style={{
                width: 842,
                border: `4px solid ${ACCENT}`,
                borderRadius: 100,
                padding: "20px 68px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: 439,
                  height: 64,
                  borderRadius: 100,
                  background: "#fff",
                  boxShadow: "4px 4px 5px rgba(0,0,0,0.22)",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 22px",
                  boxSizing: "border-box",
                }}
              >
                <input
                  value={search}
                  onChange={(e) =>
                    React.startTransition(() => setSearch(e.target.value))
                  }
                  placeholder="기업상장주식회사"
                  style={{
                    border: "none",
                    outline: "none",
                    width: "100%",
                    fontSize: 18,
                    fontFamily: baseFont,
                  }}
                />
              </div>
              <SearchIcon />
            </div>
          </section>

          <section
            style={{
              marginTop: 25,
              background: "#fff",
              borderRadius: 22,
              padding: "44px 147px 70px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: 877,
                height: 66,
                borderRadius: 14,
                background: "linear-gradient(130deg, #0B0B0B 0%, #222 100%)",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                fontSize: 30,
                fontWeight: 700,
                marginBottom: 24,
              }}
            >
              기업상장주식회사
            </div>
            <p
              style={{
                margin: 0,
                color: "#5A5A5A",
                lineHeight: 1.55,
                fontSize: 16,
              }}
            >
              플랫폼 공고내역입니다. 비실명 정책으로 구체 정보가 제공되지
              않습니다.
              <br />
              최종의 편집권한은 정보등록자에게 있습니다.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                marginTop: 30,
                alignItems: "center",
              }}
            >
              <section
                style={{
                  width: 720,
                  border: `1px solid ${ACCENT}`,
                  borderRadius: 22,
                  padding: "38px 80px 42px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {sectionHeader("01", "기업개요 (필수)")}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 18,
                  }}
                >
                  <Field label="기업명">
                    <input
                      value={companyName}
                      onChange={(e) =>
                        React.startTransition(() =>
                          setCompanyName(e.target.value),
                        )
                      }
                      style={inputStyle}
                    />
                  </Field>
                  <Field label="설립일">
                    <select
                      value={foundedRange}
                      onChange={(e) =>
                        React.startTransition(() =>
                          setFoundedRange(e.target.value),
                        )
                      }
                      style={inputStyle}
                    >
                      <option>2001~2005년</option>
                      <option>2006~2010년</option>
                    </select>
                  </Field>
                  <Field label="소재지">
                    <select
                      value={region}
                      onChange={(e) =>
                        React.startTransition(() => setRegion(e.target.value))
                      }
                      style={inputStyle}
                    >
                      <option>대구·울산·경상북도</option>
                      <option>서울특별시</option>
                    </select>
                  </Field>
                  <Field label="직원수">
                    <select
                      value={employees}
                      onChange={(e) =>
                        React.startTransition(() =>
                          setEmployees(e.target.value),
                        )
                      }
                      style={inputStyle}
                    >
                      <option>101~150명</option>
                      <option>51~100명</option>
                    </select>
                  </Field>
                </div>
                <Field label="업종">
                  <select
                    value={industry}
                    onChange={(e) =>
                      React.startTransition(() => setIndustry(e.target.value))
                    }
                    style={inputStyle}
                  >
                    <option>
                      [정보통신업] 영화, 방송, 오디오제작 및 배급업
                    </option>
                    <option>[정보통신업] 소프트웨어 개발 및 공급업</option>
                  </select>
                </Field>
                <Field label="키워드">
                  <div style={{ position: "relative" }}>
                    <input
                      value={keyword}
                      onChange={(e) =>
                        React.startTransition(() =>
                          setKeyword(e.target.value.slice(0, 30)),
                        )
                      }
                      placeholder="화장품, 스킨케어 (30자이내, 콤마단위)"
                      style={{
                        ...inputStyle,
                        borderColor: "#E14A4A",
                        paddingRight: 70,
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        right: 14,
                        top: 14,
                        fontSize: 13,
                        color: "#888",
                      }}
                    >
                      {keywordCount}/30
                    </span>
                  </div>
                  <span style={{ fontSize: 13, color: "#666" }}>
                    ※ 회사의 제품, 서비스명을 입력해 주세요. 키워드 검색시
                    사용됩니다.
                  </span>
                </Field>
              </section>

              <section
                style={{
                  width: 720,
                  border: `1px solid ${ACCENT}`,
                  borderRadius: 22,
                  padding: "38px 80px 42px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {sectionHeader("02", "주식정보 (비필수)")}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 18,
                  }}
                >
                  <Field label="거래상황">
                    <select
                      value={stockInfo.status}
                      onChange={(e) => updateStock("status", e.target.value)}
                      style={inputStyle}
                    >
                      <option>선택하세요</option>
                    </select>
                  </Field>
                  <Field label="최근종가">
                    <select
                      value={stockInfo.price}
                      onChange={(e) => updateStock("price", e.target.value)}
                      style={inputStyle}
                    >
                      <option>선택하세요</option>
                    </select>
                  </Field>
                  <Field label="시가총액">
                    <select
                      value={stockInfo.marketCap}
                      onChange={(e) => updateStock("marketCap", e.target.value)}
                      style={inputStyle}
                    >
                      <option>선택하세요</option>
                    </select>
                  </Field>
                  <Field label="액면가">
                    <select
                      value={stockInfo.parValue}
                      onChange={(e) => updateStock("parValue", e.target.value)}
                      style={inputStyle}
                    >
                      <option>선택하세요</option>
                    </select>
                  </Field>
                </div>
              </section>

              <section
                style={{
                  width: 720,
                  border: `1px solid ${ACCENT}`,
                  borderRadius: 22,
                  padding: "38px 80px 42px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {sectionHeader("03", "신용정보 (공개여부 선택)")}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {grades.map((g) => (
                      <button
                        key={g}
                        onClick={() => React.startTransition(() => setGrade(g))}
                        style={{
                          border: "none",
                          borderRadius: 999,
                          height: 32,
                          padding: "0 14px",
                          background: grade === g ? "#DD3030" : "#ECECEC",
                          color: grade === g ? "#fff" : "#222",
                          cursor: "pointer",
                          fontWeight: 700,
                        }}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 14 }}>
                    <label style={{ display: "flex", gap: 6 }}>
                      <input
                        type="checkbox"
                        checked={isCreditPublic}
                        onChange={() =>
                          React.startTransition(() => setIsCreditPublic(true))
                        }
                      />
                      공개
                    </label>
                    <label style={{ display: "flex", gap: 6 }}>
                      <input
                        type="checkbox"
                        checked={!isCreditPublic}
                        onChange={() =>
                          React.startTransition(() => setIsCreditPublic(false))
                        }
                      />
                      비공개
                    </label>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: 15, color: "#555" }}>
                  ※ 한국평가데이터(KODATA)가 제공하는 기업신용등급입니다 (NR:
                  무등급처리)
                </p>
              </section>

              <section
                style={{
                  width: 720,
                  border: `1px solid ${ACCENT}`,
                  borderRadius: 22,
                  padding: "38px 77px 42px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {sectionHeader("04", "재무정보 (필수)")}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: ACCENT,
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    → 재무정보 작성
                  </a>
                  <div style={{ display: "flex", gap: 16 }}>
                    {["결산정보", "숫자자궁", "비공개"].map((v) => (
                      <label
                        key={v}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 14,
                        }}
                      >
                        <input
                          type="radio"
                          checked={financeVisibility === v}
                          onChange={() =>
                            React.startTransition(() => setFinanceVisibility(v))
                          }
                        />
                        {v}
                      </label>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    border: "1px solid #D8D8D8",
                    borderRadius: 12,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      background: "#090909",
                      color: "#fff",
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr 1fr 1fr",
                      padding: "12px 14px",
                      borderRadius: 12,
                    }}
                  >
                    <span>(백만원)</span>
                    <span>FY 2023</span>
                    <span>FY 2024</span>
                    <span>FY 2025</span>
                  </div>
                  {financeRows.map((row, i) =>
                    row === "|" ? (
                      <div
                        key={`div-${i}`}
                        style={{
                          height: 1,
                          background: "#181818",
                          opacity: 0.28,
                        }}
                      />
                    ) : (
                      <div
                        key={row}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "2fr 1fr 1fr 1fr",
                          padding: "10px 14px",
                          fontSize: 15,
                        }}
                      >
                        <span>{row}</span>
                        <span
                          style={{
                            textAlign: "right",
                            fontVariantNumeric: "tabular-nums",
                          }}
                        >
                          50,000
                        </span>
                        <span
                          style={{
                            textAlign: "right",
                            fontVariantNumeric: "tabular-nums",
                          }}
                        >
                          50,000
                        </span>
                        <span
                          style={{
                            textAlign: "right",
                            fontVariantNumeric: "tabular-nums",
                          }}
                        >
                          50,000
                        </span>
                      </div>
                    ),
                  )}
                </div>
                <p style={{ margin: 0, fontSize: 14, color: "#555" }}>
                  ※ K-GAAP 별도 기준입니다. 백만원 미만은 “0”으로 표시됩니다.
                </p>
              </section>

              <section
                style={{
                  width: 720,
                  border: `1px solid ${ACCENT}`,
                  borderRadius: 22,
                  padding: "38px 80px 42px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {sectionHeader("05", "향후 3개년 추정실적 (비필수)")}
                <div
                  style={{ borderBottom: "1px solid #222", paddingBottom: 14 }}
                >
                  <div
                    style={{
                      background: "#111",
                      color: "#fff",
                      display: "grid",
                      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
                      borderRadius: 10,
                      padding: "12px 14px",
                      marginBottom: 12,
                    }}
                  >
                    <span>(억원)</span>
                    <span>FY 2022</span>
                    <span>FY 2023</span>
                    <span>FY 2024</span>
                  </div>
                  {[
                    {
                      label: "매출액",
                      values: futureRevenue,
                      set: setFutureRevenue,
                    },
                    {
                      label: "영업이익",
                      values: futureProfit,
                      set: setFutureProfit,
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
                        gap: 12,
                        alignItems: "center",
                        marginBottom: 12,
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>{row.label}</span>
                      {row.values.map((value, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <input
                            value={value}
                            onChange={(e) =>
                              updateYear(row.set, i, e.target.value)
                            }
                            placeholder="직접입력"
                            style={{
                              width: 115,
                              height: 39,
                              border: "1px solid #D4D4D4",
                              borderRadius: 8,
                              padding: "0 10px",
                              fontFamily: baseFont,
                            }}
                          />
                          <span style={{ fontSize: 14, color: "#555" }}>
                            억원
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>

              <section
                style={{
                  width: 720,
                  border: `1px solid ${ACCENT}`,
                  borderRadius: 22,
                  padding: "38px 80px 42px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {sectionHeader("06", "하이라이트 (필수)")}
                <a
                  href="#"
                  style={{
                    alignSelf: "flex-end",
                    color: ACCENT,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  → 예시보기
                </a>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "92px 1fr",
                    gap: 12,
                  }}
                >
                  <span
                    style={{ fontSize: 15, fontWeight: 600, marginTop: 10 }}
                  >
                    하이라이트
                  </span>
                  <div
                    style={{
                      border: "1px solid #D4D4D4",
                      borderRadius: 12,
                      background: "#F6F6F6",
                      minHeight: 169,
                      padding: 12,
                      boxSizing: "border-box",
                    }}
                  >
                    <textarea
                      value={highlight}
                      onChange={(e) =>
                        React.startTransition(() =>
                          setHighlight(e.target.value.slice(0, 60)),
                        )
                      }
                      placeholder="회사의 간략소개, 투자메리트를 적어주시면 됩니다. M&A리스트에 노출됩니다 (80자, 2줄이내, 붙여쓰기)"
                      style={{
                        border: "none",
                        width: "100%",
                        minHeight: 118,
                        resize: "none",
                        outline: "none",
                        background: "transparent",
                        fontFamily: baseFont,
                        fontSize: 15,
                      }}
                    />
                    <div
                      style={{
                        textAlign: "right",
                        fontSize: 13,
                        color: "#777",
                      }}
                    >
                      {highlightCount}/60
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section
            style={{
              marginTop: 25,
              width: 1170,
              background: "#fff",
              borderRadius: 21,
              padding: "44px 56px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: 34 }}>매각조건</h3>
              <p style={{ margin: "10px 0 0", color: "#555" }}>
                기본조건을 정하시고 자세한 내역은 상세내역에 기술하시면 됩니다.
              </p>
            </div>
            <div
              style={{
                width: 74,
                height: 74,
                borderRadius: "50%",
                background: "#EDEDED",
                display: "grid",
                placeItems: "center",
                fontSize: 28,
                color: "#666",
                fontWeight: 700,
              }}
            >
              02
            </div>
          </section>

          <section
            style={{
              marginTop: 20,
              width: 1170,
              background: "#fff",
              borderRadius: 21,
              padding: "44px 56px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: 34 }}>약관동의</h3>
              <p style={{ margin: "10px 0 0", color: "#555" }}>
                약관에 동의하시면 플랫폼에 등록됩니다.
              </p>
            </div>
            <GearIcon />
          </section>

          <section
            style={{
              marginTop: 20,
              width: 1170,
              background: "#fff",
              borderRadius: 21,
              padding: "40px 56px",
              boxSizing: "border-box",
              display: "grid",
              gridTemplateColumns: "1fr 1px 1fr",
              alignItems: "center",
              gap: 28,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <PlaneIcon />
              <h3 style={{ margin: 0, fontSize: 30 }}>대량인수제안</h3>
            </div>
            <div style={{ width: 1, background: "#D8D8D8", height: 70 }} />
            <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>
              내 기업 매도제안서를 25만의 잠재 인수자에게 전달합니다 (기업 선택)
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
