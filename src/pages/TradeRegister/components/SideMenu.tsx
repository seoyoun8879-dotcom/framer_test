import * as React from "react";

// User request: Create SideMenu pill button component for Framer matching 거래등록 side menu with arrow/image trailing mode and editable link/label.

interface ImageLike {
  src?: string;
  srcSet?: string;
  alt?: string;
}

interface MyComponentProps {
  label?: string;
  link?: string;
  trailingMode?: "arrow" | "image";
  trailingImage?: ImageLike;
  backgroundColor?: string;
  textColor?: string;
  arrowColor?: string;
  labelFont?: FontLike;
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
export default function SideMenu(props: MyComponentProps) {
  const {
    label = "매도제안서 예시",
    link = "/",
    trailingMode = "arrow",
    trailingImage = {
      src: "https://framerusercontent.com/images/TETWc55nW6hasbL6owKg0IeXIok.png",
      alt: "Menu trailing",
    },
    backgroundColor = "#FFFFFF",
    textColor = "#000000",
    arrowColor = "rgba(36,36,36,0.9)",
    labelFont = {
      fontSize: "17px",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "0em",
      lineHeight: "1em",
      textAlign: "left",
    },
    style,
  } = props;

  const trailingNode = React.useMemo(() => {
    if (trailingMode === "image") {
      return (
        <img
          src={trailingImage.src}
          srcSet={trailingImage.srcSet}
          alt={trailingImage.alt || "Trailing"}
          style={{
            width: 41,
            height: 41,
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      );
    }

    return (
      <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M1 9H16"
          stroke={arrowColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M11.5 4.5L16 9L11.5 13.5"
          stroke={arrowColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }, [trailingMode, trailingImage, arrowColor]);

  return (
    <a
      href={link}
      style={{
        position: "relative",
        width: 205,
        height: 60,
        background: backgroundColor,
        borderRadius: 29.33,
        boxShadow: "4px 4px 5.3px rgba(0,0,0,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 23px",
        boxSizing: "border-box",
        cursor: "pointer",
        textDecoration: "none",
        fontFamily: "Noto Sans, sans-serif",
        ...style,
      }}
    >
      <span
        style={{
          color: textColor,
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
      {trailingNode}
    </a>
  );
}
