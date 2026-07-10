import * as React from "react";

// User request: Create Banner component for Framer matching 거래등록 Upload a Deal hero banner with editable title/description/image and responsive flex auto-layout.

interface ImageLike {
  src?: string;
  srcSet?: string;
  alt?: string;
}

interface FontLike {
  fontSize: string | number;
  fontWeight: number;
  fontStyle: "normal" | "italic";
  letterSpacing: string | number;
  lineHeight: string | number;
  textAlign: React.CSSProperties["textAlign"];
}

interface MyComponentProps {
  title?: string;
  description?: string;
  image?: ImageLike;
  leftPadding?: number;
  rightPadding?: number;
  backgroundColor?: string;
  textColor?: string;
  titleFont?: FontLike;
  bodyFont?: FontLike;
  style?: React.CSSProperties;
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight fixed
 */
export default function Banner(props: MyComponentProps) {
  const {
    title = "Upload a Deal",
    description = "2단계 정보등록과 약관동의로 이루어집니다. 25만여 잠재 인수자에게 대량의 인수제안이 가능합니다.",
    image = {
      src: "https://framerusercontent.com/images/V3K8mUsu3ZGQGOuz4tCfnNS0rA8.png",
      alt: "Upload a Deal Banner",
    },
    leftPadding = 444,
    rightPadding = 87,
    backgroundColor = "#151515",
    textColor = "#FFFFFF",
    titleFont = {
      fontSize: "46.67px",
      fontWeight: 700,
      fontStyle: "normal",
      letterSpacing: "-0.05em",
      lineHeight: "53px",
      textAlign: "left",
    },
    bodyFont = {
      fontSize: "16px",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "0em",
      lineHeight: "29px",
      textAlign: "left",
    },
    style,
  } = props;

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: 340,
        background: backgroundColor,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingLeft: leftPadding,
        paddingRight: rightPadding,
        boxSizing: "border-box",
        fontFamily: "Noto Sans, sans-serif",
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: 382,
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <h1
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
          </h1>
          <p
            style={{
              margin: 0,
              color: textColor,
              fontSize: bodyFont.fontSize,
              fontWeight: bodyFont.fontWeight,
              fontStyle: bodyFont.fontStyle,
              letterSpacing: bodyFont.letterSpacing,
              lineHeight: bodyFont.lineHeight,
              textAlign: bodyFont.textAlign,
            }}
          >
            {description}
          </p>
        </div>
        <img
          src={image.src}
          srcSet={image.srcSet}
          alt={image.alt || "Banner visual"}
          style={{
            width: 515,
            height: 212,
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
