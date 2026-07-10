import * as React from "react";

// User request: Create Header component for Framer matching Korean M&A 거래등록 design with editable menu array, logo/company images, and responsive flex auto-layout.

interface MenuItem {
  label: string;
  link: string;
}

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
  logo?: ImageLike;
  companyImage?: ImageLike;
  menuItems?: MenuItem[];
  partnerLabel?: string;
  partnerLink?: string;
  companyLabel?: string;
  activeIndex?: number;
  backgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
  menuFont?: FontLike;
  companyFont?: FontLike;
  style?: React.CSSProperties;
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight fixed
 */
export default function Header(props: MyComponentProps) {
  const {
    logo,
    companyImage,
    menuItems = [
      { label: "거래탐색", link: "/" },
      { label: "거래등록", link: "/" },
      { label: "매칭알림", link: "/" },
      { label: "매각가 추정", link: "/" },
      { label: "데이터룸", link: "/" },
      { label: "마이페이지", link: "/" },
    ],
    partnerLabel = "제휴기관",
    partnerLink = "/",
    companyLabel = "Company",
    activeIndex = 1,
    backgroundColor = "#000000",
    textColor = "#FFFFFF",
    activeTextColor = "#FFFFFF",
    menuFont = {
      fontSize: "16px",
      fontWeight: 500,
      fontStyle: "normal",
      letterSpacing: "0em",
      lineHeight: "1em",
      textAlign: "left",
    },
    companyFont = {
      fontSize: "16px",
      fontWeight: 500,
      fontStyle: "normal",
      letterSpacing: "0em",
      lineHeight: "1em",
      textAlign: "left",
    },
    style,
  } = props;

  const logoFallback = React.useMemo(
    () => (
      <div
        style={{
          width: 177,
          height: 20,
          color: textColor,
          fontFamily: "Noto Sans, sans-serif",
          fontWeight: 700,
          fontSize: 20,
          display: "flex",
          alignItems: "center",
        }}
      >
        LOGO
      </div>
    ),
    [textColor],
  );

  const userIcon = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" stroke={textColor} strokeWidth="1.8" />
      <path
        d="M4 20C5.5 16.8 8.4 15 12 15C15.6 15 18.5 16.8 20 20"
        stroke={textColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <header
      style={{
        position: "relative",
        width: "100%",
        height: 105,
        background: backgroundColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "33px 116px",
        boxSizing: "border-box",
        fontFamily: "Noto Sans, sans-serif",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", minWidth: 177 }}>
        {logo?.src ? (
          <img
            src={logo.src}
            srcSet={logo.srcSet}
            alt={logo.alt || "Logo"}
            style={{ width: 177, height: 20, objectFit: "contain" }}
          />
        ) : (
          logoFallback
        )}
      </div>

      <nav
        style={{ display: "flex", alignItems: "center", gap: 35 }}
        aria-label="Main navigation"
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {menuItems.map((item, index) => (
            <a
              href={item.link}
              key={`${item.label}-${index}`}
              style={{
                fontSize: menuFont.fontSize,
                fontWeight: menuFont.fontWeight,
                fontStyle: menuFont.fontStyle,
                letterSpacing: menuFont.letterSpacing,
                lineHeight: menuFont.lineHeight,
                textAlign: menuFont.textAlign,
                color: index === activeIndex ? activeTextColor : textColor,
                textDecoration: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div
          style={{
            width: 1,
            height: 14,
            background: "rgba(255,255,255,0.4)",
          }}
        />

        <a
          href={partnerLink}
          style={{
            fontSize: menuFont.fontSize,
            fontWeight: menuFont.fontWeight,
            fontStyle: menuFont.fontStyle,
            letterSpacing: menuFont.letterSpacing,
            lineHeight: menuFont.lineHeight,
            textAlign: menuFont.textAlign,
            color: textColor,
            textDecoration: "none",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {partnerLabel}
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {companyImage?.src ? (
            <img
              src={companyImage.src}
              srcSet={companyImage.srcSet}
              alt={companyImage.alt || "Company"}
              style={{
                width: 26,
                height: 31,
                objectFit: "contain",
              }}
            />
          ) : (
            <div
              style={{
                width: 26,
                height: 31,
                background: "rgba(255,255,255,0.2)",
                borderRadius: 4,
              }}
            />
          )}
          <span
            style={{
              color: textColor,
              fontSize: companyFont.fontSize,
              fontWeight: companyFont.fontWeight,
              fontStyle: companyFont.fontStyle,
              letterSpacing: companyFont.letterSpacing,
              lineHeight: companyFont.lineHeight,
              textAlign: companyFont.textAlign,
            }}
          >
            {companyLabel}
          </span>
        </div>

        <button
          type="button"
          aria-label="Profile"
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            border: `1px solid ${textColor}`,
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {userIcon}
        </button>
      </nav>
    </header>
  );
}
