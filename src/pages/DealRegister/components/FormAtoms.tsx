import * as React from "react";

export function TitleBar() {
  return (
    <div
      style={{
        width: 877,
        height: 99,
        borderRadius: 10,
        background: "linear-gradient(133deg,#000,#666)",
        color: "#fff",
        fontFamily: "Inter, 'Noto Sans KR', sans-serif",
        fontSize: 22,
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        paddingLeft: 40,
        boxSizing: "border-box",
      }}
    >
      기업상장주식회사
    </div>
  );
}

interface InputStepHeadLineProps {
  variant?: 1 | 2 | 3 | 4 | 5 | 6;
}

const titleMap: Record<number, string> = {
  1: "기업개요 (필수)",
  2: "주식정보 (비필수)",
  3: "신용정보 (공개여부 선택)",
  4: "재무정보 (필수)",
  5: "향후 3개년 추정실적 (비필수)",
  6: "하이라이트 (필수)",
};

export function InputStepHeadLine({ variant = 1 }: InputStepHeadLineProps) {
  return (
    <div
      style={{
        width: 720,
        height: 39,
        borderBottom: "4px solid #222",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "Inter, 'Noto Sans KR', sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{ fontSize: 15, color: "rgb(119,115,115)" }}
        >{`0${variant}`}</span>
        <span style={{ fontSize: 17, fontWeight: 500, color: "#000" }}>
          {titleMap[variant]}
        </span>
      </div>
      {variant === 4 && (
        <button
          style={{
            border: "1px solid #D9D9D9",
            borderRadius: 999,
            background: "#fff",
            height: 24,
            padding: "0 12px",
            fontSize: 12,
            cursor: "pointer",
          }}
        >
          재무정보 작성
        </button>
      )}
    </div>
  );
}

const boxStyle: React.CSSProperties = {
  width: 205,
  height: 47,
  borderRadius: 5.33,
  border: "1.33px solid rgba(217,217,217,1)",
  background: "#fff",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 14px",
  fontFamily: "Inter, 'Noto Sans KR', sans-serif",
  fontSize: 16,
  color: "#000",
};

export function InputDataBox() {
  const [value, setValue] = React.useState("코스닥 A사 (수정불가)");
  return (
    <div
      style={{
        width: 299,
        height: 47,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontFamily: "Inter, 'Noto Sans KR', sans-serif",
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        기업명
      </span>
      <input
        value={value}
        onChange={(e) => React.startTransition(() => setValue(e.target.value))}
        style={boxStyle}
      />
    </div>
  );
}

interface DataBoxProps {
  variant?: string;
}

const dataMap: Record<string, string> = {
  설립일: "2001~2005년",
  소재지: "대구·울산·경상북도",
  직원수: "101~150명",
  거래상황: "선택하세요",
  최근종가: "선택하세요",
  시가총액: "선택하세요",
  액면가: "선택하세요",
};

export function DataBox({ variant = "설립일" }: DataBoxProps) {
  const [value, setValue] = React.useState(dataMap[variant] ?? "선택하세요");
  return (
    <div
      style={{
        width: 300,
        height: 47,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontFamily: "Inter, 'Noto Sans KR', sans-serif",
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        {variant}
      </span>
      <div style={boxStyle}>
        <select
          value={value}
          onChange={(e) =>
            React.startTransition(() => setValue(e.target.value))
          }
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            fontSize: 16,
            background: "transparent",
            fontFamily: "inherit",
          }}
        >
          <option>{dataMap[variant] ?? "선택하세요"}</option>
          <option>선택하세요</option>
        </select>
        <span style={{ marginLeft: 8 }}>▼</span>
      </div>
    </div>
  );
}

export function BizTypeDataBox() {
  const [value, setValue] = React.useState(
    "[정보통신업] 컴퓨터 프로그래밍, 시스템 통합 및 관리업",
  );
  return (
    <div
      style={{
        width: 716,
        height: 47,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontFamily: "Inter, 'Noto Sans KR', sans-serif",
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        업종
      </span>
      <div style={{ ...boxStyle, width: 621 }}>
        <select
          value={value}
          onChange={(e) =>
            React.startTransition(() => setValue(e.target.value))
          }
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            fontSize: 16,
            background: "transparent",
            fontFamily: "inherit",
          }}
        >
          <option>[정보통신업] 컴퓨터 프로그래밍, 시스템 통합 및 관리업</option>
          <option>[정보통신업] 영화, 방송, 오디오 제작 및 배급업</option>
        </select>
        <span>▼</span>
      </div>
    </div>
  );
}

export function KeywordInputDataBox() {
  const [keyword, setKeyword] = React.useState("");
  return (
    <div
      style={{
        width: 711,
        height: 79,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "Inter, 'Noto Sans KR', sans-serif",
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          키워드
        </span>
        <div
          style={{
            width: 561,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            value={keyword}
            onChange={(e) =>
              React.startTransition(() =>
                setKeyword(e.target.value.slice(0, 30)),
              )
            }
            placeholder="키워드를 입력하세요 (쉼표로 구분)"
            style={{
              width: 561,
              height: 47,
              borderRadius: 5.33,
              border: "1.33px solid rgba(254,13,4,1)",
              padding: "0 12px",
              boxSizing: "border-box",
              fontSize: 16,
              color: "rgb(129,127,127)",
              fontFamily: "Inter, 'Noto Sans KR', sans-serif",
            }}
          />
          <span
            style={{
              marginLeft: 10,
              fontSize: 14,
              color: "#777",
              minWidth: 40,
            }}
          >
            {keyword.length}/30
          </span>
        </div>
      </div>
      <div
        style={{
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: 15,
          color: "rgba(36,36,36,0.9)",
        }}
      >
        ※ 회사의 핵심 키워드를 입력해 주세요
      </div>
    </div>
  );
}

export function SegmentedTab() {
  const grades = ["최우량", "우량", "보통", "취약", "위험", "부도", "NR"];
  const [selected, setSelected] = React.useState("우량");

  return (
    <div style={{ position: "relative", width: 468, height: 49 }}>
      <div
        style={{
          width: 468,
          height: 49,
          borderRadius: 24.5,
          border: "0.5px solid rgba(239,237,237,1)",
          background: "rgba(255,255,255,0.1)",
          boxShadow: "2px 2px 3px rgba(107,107,107,0.25)",
          display: "flex",
          alignItems: "center",
          padding: "0 6px",
          boxSizing: "border-box",
          gap: 6,
        }}
      >
        {grades.map((grade) => {
          const on = selected === grade;
          return (
            <button
              key={grade}
              onClick={() => React.startTransition(() => setSelected(grade))}
              style={{
                flex: 1,
                height: 36,
                borderRadius: 100,
                border: "none",
                background: on ? "rgba(254,13,4,1)" : "rgba(178,178,178,1)",
                color: "#fff",
                fontFamily: "Inter, 'Noto Sans KR', sans-serif",
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              {grade}
            </button>
          );
        })}
      </div>
      <div
        style={{
          position: "absolute",
          top: -8,
          left: `${grades.indexOf(selected) * (468 / 7) + 30}px`,
          color: "rgba(254,13,4,1)",
          fontSize: 12,
        }}
      >
        ▲
      </div>
    </div>
  );
}

interface CheckBoxProps {
  variant?: "공개" | "비공개";
}

export function CheckBox({ variant = "공개" }: CheckBoxProps) {
  const [checked, setChecked] = React.useState(false);
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: 19,
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) =>
          React.startTransition(() => setChecked(e.target.checked))
        }
        style={{
          width: 12,
          height: 12,
          border: "0.5px solid rgba(161,161,161,1)",
        }}
      />
      <span
        style={{
          fontFamily: "Inter, 'Noto Sans KR', sans-serif",
          fontSize: 16,
          fontWeight: 400,
        }}
      >
        {variant}
      </span>
    </label>
  );
}

interface RadioCheckBoxProps {
  variant?: 1 | 2 | 3;
}

export function RadioCheckBox({ variant = 1 }: RadioCheckBoxProps) {
  const label =
    variant === 1 ? "결산정보" : variant === 2 ? "숫자가공" : "비공개";
  const selected = variant === 2;
  return (
    <div
      style={{
        width: 77,
        height: 23,
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}
    >
      <div
        style={{
          width: 13,
          height: 13,
          borderRadius: "50%",
          border: "0.5px solid rgba(161,161,161,1)",
          background: "#fff",
          display: "grid",
          placeItems: "center",
        }}
      >
        {selected && (
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#00B0F0",
            }}
          />
        )}
      </div>
      <span
        style={{
          fontFamily: "Inter, 'Noto Sans KR', sans-serif",
          fontSize: 14,
          fontWeight: 400,
        }}
      >
        {label}
      </span>
    </div>
  );
}
