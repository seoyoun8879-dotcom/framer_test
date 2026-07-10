import * as React from "react";
import { PageHeader } from "./components/PageHeader";
import { Banner } from "./components/Banner";
import { StepHeadBox } from "./components/StepHeadBox";
import { TmStepHeader } from "./components/TmStepHeader";
import { SideMenu } from "./components/SideMenu";
import {
  TitleBar,
  InputStepHeadLine,
  InputDataBox,
  DataBox,
  BizTypeDataBox,
  KeywordInputDataBox,
  SegmentedTab,
  CheckBox,
  RadioCheckBox,
} from "./components/FormAtoms";
import {
  FinanceYearHeader,
  FinanceTable,
  YearHeadBox,
  BillionInputBox,
  HighlightInput,
} from "./components/FinanceParts";

function SearchIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" stroke="#0097D7" strokeWidth="2.2" />
      <path
        d="M16 16L21 21"
        stroke="#111"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionShell({ children }: { children: React.ReactNode }) {
  return (
    <section
      style={{
        width: 877,
        border: "1px solid rgb(0,176,240)",
        borderRadius: 22,
        padding: "38px 80px 40px 77px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      {children}
    </section>
  );
}

export default function CompanyInfoFormPage() {
  const financeRows = [
    "유동자산",
    "현금 및 현금성자산",
    "비유동자산",
    "자산총계",
    "유동부채",
    "비유동부채",
    "부채총계",
    "[자본금]",
    "이익잉여금",
    "자본총계",
    "매출액",
    "영업이익",
    "EBITDA",
  ];

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        margin: "0 auto",
        background: "rgb(241,241,241)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, 'Noto Sans KR', sans-serif",
      }}
    >
      <PageHeader />
      <Banner />

      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <aside
          style={{
            position: "absolute",
            right: 139,
            top: 74,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <SideMenu variant={1} />
          <SideMenu variant={2} />
          <SideMenu variant={3} />
        </aside>

        <div
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "74px 375px 100px",
            display: "flex",
            flexDirection: "column",
            gap: 25,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            <StepHeadBox variant={1} />

            <section
              style={{
                width: 1170,
                borderRadius: 21,
                background: "#fff",
                padding: "38px 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 28,
                boxShadow: "6px 6px 5px rgba(0,0,0,0.1)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontSize: 16,
                  lineHeight: "29px",
                  textAlign: "center",
                }}
              >
                아래를 입력하시면 기업정보가 자동완성됩니다. ※ (주), 주식회사 등
                제외
              </p>

              <div
                style={{
                  border: "4px solid rgb(0,176,240)",
                  borderRadius: 100,
                  padding: "20px 68px",
                }}
              >
                <div
                  style={{
                    width: 439,
                    height: 64,
                    borderRadius: 100,
                    background: "#fff",
                    boxShadow: "4px 4px 5px rgba(0,0,0,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 20px 0 28px",
                    boxSizing: "border-box",
                    fontSize: 18.67,
                  }}
                >
                  <span>기업상장주식회사</span>
                  <SearchIcon />
                </div>
              </div>
            </section>

            <section
              style={{
                width: 1171,
                borderRadius: 22,
                background: "#fff",
                padding: "44px 147px 70px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: 30,
              }}
            >
              <TitleBar />
              <p
                style={{
                  margin: 0,
                  paddingLeft: 30,
                  fontSize: 16,
                  lineHeight: "28px",
                  color: "rgba(36,36,36,0.9)",
                }}
              >
                플랫폼 공고내역입니다. 비실명 정책으로 구체 정보가 제공되지
                않습니다.
                <br />
                최종의 편집권한은 정보등록자에게 있습니다.
              </p>

              <SectionShell>
                <InputStepHeadLine variant={1} />
                <div
                  style={{
                    width: 720,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <InputDataBox />
                  <DataBox variant="설립일" />
                </div>
                <div
                  style={{
                    width: 720,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <DataBox variant="소재지" />
                  <DataBox variant="직원수" />
                </div>
                <BizTypeDataBox />
                <KeywordInputDataBox />
              </SectionShell>

              <SectionShell>
                <InputStepHeadLine variant={2} />
                <div
                  style={{
                    width: 720,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <DataBox variant="거래상황" />
                  <DataBox variant="최근종가" />
                </div>
                <div
                  style={{
                    width: 720,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <DataBox variant="시가총액" />
                  <DataBox variant="액면가" />
                </div>
              </SectionShell>

              <SectionShell>
                <InputStepHeadLine variant={3} />
                <div
                  style={{
                    width: 720,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <SegmentedTab />
                  <div style={{ display: "flex", gap: 24 }}>
                    <CheckBox variant="공개" />
                    <CheckBox variant="비공개" />
                  </div>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Noto Sans KR', sans-serif",
                    fontSize: 15,
                    color: "rgba(36,36,36,0.9)",
                  }}
                >
                  ※ 한국평가데이터(KODATA)가 제공하는 기업신용등급입니다 (NR:
                  무등급처리)
                </p>
              </SectionShell>

              <SectionShell>
                <InputStepHeadLine variant={4} />
                <div
                  style={{
                    width: 720,
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 12,
                  }}
                >
                  <RadioCheckBox variant={1} />
                  <RadioCheckBox variant={2} />
                  <RadioCheckBox variant={3} />
                </div>
                <FinanceYearHeader />
                <div
                  style={{
                    width: 715,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {financeRows.map((label, index) => (
                    <React.Fragment key={label}>
                      <FinanceTable label={label} />
                      {[3, 6, 9].includes(index + 1) && (
                        <div
                          style={{
                            width: 715,
                            height: 3,
                            background: "#2B2B2B",
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Noto Sans KR', sans-serif",
                    fontSize: 16,
                  }}
                >
                  ※ K-GAAP 별도 기준입니다. 백만원 미만은 “0”으로 표시됩니다.
                </p>
              </SectionShell>

              <SectionShell>
                <InputStepHeadLine variant={5} />
                <YearHeadBox />
                <div
                  style={{
                    width: 720,
                    borderBottom: "1px solid #222",
                    padding: "0 0 14px 35px",
                    display: "flex",
                    gap: 26,
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      width: 140,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: "12px 0 8px",
                    }}
                  >
                    <span
                      style={{ fontSize: 16, fontWeight: 500, color: "#000" }}
                    >
                      매출액
                    </span>
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: "rgb(75,75,75)",
                      }}
                    >
                      영업이익
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 9 }}
                  >
                    <div style={{ display: "flex", gap: 24 }}>
                      <BillionInputBox />
                      <BillionInputBox />
                      <BillionInputBox />
                    </div>
                    <div style={{ display: "flex", gap: 24 }}>
                      <BillionInputBox />
                      <BillionInputBox />
                      <BillionInputBox />
                    </div>
                  </div>
                </div>
              </SectionShell>

              <SectionShell>
                <InputStepHeadLine variant={6} />
                <HighlightInput />
              </SectionShell>
            </section>
          </div>

          <StepHeadBox variant={2} />
          <StepHeadBox variant={3} />
          <TmStepHeader />
        </div>
      </div>
    </main>
  );
}
