import * as React from "react";

// User request: Create DataBox labeled field component for Framer matching 거래등록 form row with text/select modes, optional lightweight dropdown, and editable sizing/content.

interface MyComponentProps {
  width?: number;
  label?: string;
  mode?: "text" | "select";
  value?: string;
  placeholder?: string;
  options?: string[];
  labelColor?: string;
  fieldBackgroundColor?: string;
  fieldBorderColor?: string;
  valueColor?: string;
  labelFont?: FontLike;
  valueFont?: FontLike;
  style?: React.CSSProperties;
}

interface FontLike {
  fontSize: string | number;
  fontWeight: number;
  fontStyle: "normal" | "italic";
  letterSpacing: string | number;
  lineHeight: string | number;
  textAlign: React.CSSProperties["textAlign"];
}

/**
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */
export default function DataBox(props: MyComponentProps) {
  const {
    width = 278,
    label = "상호",
    mode = "text",
    value = "코스닥 A사(비실명)",
    placeholder = "선택하세요",
    options = ["선택하세요", "옵션 1", "옵션 2"],
    labelColor = "#000000",
    fieldBackgroundColor = "#FFFFFF",
    fieldBorderColor = "#D9D9D9",
    valueColor = "#000000",
    labelFont = {
      fontSize: "16px",
      fontWeight: 500,
      fontStyle: "normal",
      letterSpacing: "0em",
      lineHeight: "1em",
      textAlign: "left",
    },
    valueFont = {
      fontSize: "16px",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "0em",
      lineHeight: "1em",
      textAlign: "left",
    },
    style,
  } = props;
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(value || placeholder);

  React.useEffect(() => {
    React.startTransition(() => setSelected(value || placeholder));
  }, [value, placeholder]);

  const displayValue = mode === "select" ? selected || placeholder : value;

  const toggleOpen = React.useCallback(() => {
    React.startTransition(() => setOpen((prev) => !prev));
  }, []);

  const onSelect = React.useCallback((item: string) => {
    React.startTransition(() => {
      setSelected(item);
      setOpen(false);
    });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width,
        height: 46,
        display: "flex",
        alignItems: "center",
        fontFamily: "Noto Sans, sans-serif",
        ...style,
      }}
    >
      <span
        style={{
          width: 88,
          color: labelColor,
          fontSize: labelFont.fontSize,
          fontWeight: labelFont.fontWeight,
          fontStyle: labelFont.fontStyle,
          letterSpacing: labelFont.letterSpacing,
          lineHeight: labelFont.lineHeight,
          textAlign: labelFont.textAlign,
        }}
      >
        {label}
      </span>

      <div
        role={mode === "select" ? "button" : undefined}
        aria-expanded={mode === "select" ? open : undefined}
        onClick={mode === "select" ? toggleOpen : undefined}
        style={{
          flex: 1,
          height: 46,
          background: fieldBackgroundColor,
          border: `1px solid ${fieldBorderColor}`,
          borderRadius: 5.33,
          padding: "0 15px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: mode === "select" ? "space-between" : "flex-start",
          cursor: mode === "select" ? "pointer" : "default",
        }}
      >
        <span
          style={{
            color: valueColor,
            fontSize: valueFont.fontSize,
            fontWeight: valueFont.fontWeight,
            fontStyle: valueFont.fontStyle,
            letterSpacing: valueFont.letterSpacing,
            lineHeight: valueFont.lineHeight,
            textAlign: valueFont.textAlign,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {displayValue}
        </span>

        {mode === "select" && (
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 2L6 8L11 2"
              stroke="#202020"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {mode === "select" && open && options.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: 50,
            left: 88,
            right: 0,
            background: "#FFFFFF",
            border: `1px solid ${fieldBorderColor}`,
            borderRadius: 6,
            boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
            zIndex: 10,
            overflow: "hidden",
          }}
        >
          {options.map((item, index) => (
            <button
              key={`${item}-${index}`}
              type="button"
              onClick={() => onSelect(item)}
              style={{
                width: "100%",
                border: "none",
                background: "#FFFFFF",
                textAlign: "left",
                padding: "10px 15px",
                cursor: "pointer",
                fontFamily: "Noto Sans, sans-serif",
                fontSize: valueFont.fontSize,
                fontWeight: valueFont.fontWeight,
                color: valueColor,
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
