import * as React from "react";

// User request: Create StepHeadBox component for Framer matching 거래등록 step header card with active/inactive variant, step badge or gear icon, and editable content.

interface MyComponentProps {
  title?: string;
  description?: string;
  stepNumber?: string;
  active?: boolean;
  showIcon?: boolean;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
  titleFont?: FontLike;
  descriptionFont?: FontLike;
  badgeFont?: FontLike;
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
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight fixed
 */
export default function StepHeadBox(props: MyComponentProps) {
  const {
    title = "대상기업",
    description = "M&A대상기업입니다. 상호 혹은 사업자등록번호를 입력해 주세요.",
    stepNumber = "01",
    active = true,
    showIcon = false,
    activeBackgroundColor = "#00B0F0",
    inactiveBackgroundColor = "#FFFFFF",
    activeTextColor = "#FFFFFF",
    inactiveTextColor = "#000000",
    titleFont = {
      fontSize: "27px",
      fontWeight: 500,
      fontStyle: "normal",
      letterSpacing: "0em",
      lineHeight: "1.2em",
      textAlign: "left",
    },
    descriptionFont = {
      fontSize: "16px",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "0em",
      lineHeight: "1.4em",
      textAlign: "left",
    },
    badgeFont = {
      fontSize: "13px",
      fontWeight: 500,
      fontStyle: "normal",
      letterSpacing: "0em",
      lineHeight: "1em",
      textAlign: "center",
    },
    style,
  } = props;

  const cardBackground = active
    ? activeBackgroundColor
    : inactiveBackgroundColor;
  const textColor = active ? activeTextColor : inactiveTextColor;
  const badgeBackground = active ? "#FFFFFF" : "#D9D9D9";

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: 197,
        borderRadius: 21,
        boxShadow: "6px 6px 5px rgba(0,0,0,0.25)",
        background: cardBackground,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 136px",
        boxSizing: "border-box",
        fontFamily: "Noto Sans, sans-serif",
        ...style,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <h2
          style={{
            margin: 0,
            color: textColor,
            fontSize: titleFont.fontSize,
            fontWeight: titleFont.fontWeight,
            fontStyle: titleFont.fontStyle,
            letterSpacing: titleFont.letterSpacing,
            lineHeight: titleFont.lineHeight,
            textAlign: titleFont.textAlign,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            margin: 0,
            color: textColor,
            fontSize: descriptionFont.fontSize,
            fontWeight: descriptionFont.fontWeight,
            fontStyle: descriptionFont.fontStyle,
            letterSpacing: descriptionFont.letterSpacing,
            lineHeight: descriptionFont.lineHeight,
            textAlign: descriptionFont.textAlign,
          }}
        >
          {description}
        </p>
      </div>

      {showIcon ? (
        <svg
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="33" cy="33" r="12" stroke={textColor} strokeWidth="4" />
          <path
            d="M33 7V15M33 51V59M7 33H15M51 33H59M14.6 14.6L20.2 20.2M45.8 45.8L51.4 51.4M14.6 51.4L20.2 45.8M45.8 20.2L51.4 14.6"
            stroke={textColor}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <div
          style={{
            width: 68,
            height: 68,
            borderRadius: "50%",
            background: badgeBackground,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#252525",
            fontSize: badgeFont.fontSize,
            fontWeight: badgeFont.fontWeight,
            fontStyle: badgeFont.fontStyle,
            letterSpacing: badgeFont.letterSpacing,
            lineHeight: badgeFont.lineHeight,
            textAlign: badgeFont.textAlign,
          }}
        >
          {stepNumber}
        </div>
      )}
    </section>
  );
}
