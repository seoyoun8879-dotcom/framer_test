import * as React from "react";

// User request: Create a new Framer code component file at path "AutoLayoutTest/Common/Menu.tsx" with a default export component named "Menu" that recreates a Korean M&A nav-menu pill with auto sizing, active state, hover background, smooth transition, link support, and editable property controls.

interface MyComponentProps {
  label: string;
  link: string;
  isActive: boolean;
  textColor: string;
  activeTextColor: string;
  activeBackground: string;
  hoverBackground: string;
  fontSize: number;
  paddingX: number;
  paddingY: number;
  borderRadius: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Menu(props: MyComponentProps) {
  const {
    label = "M&A탐색",
    link = "",
    isActive = false,
    textColor = "#FFFFFF",
    activeTextColor = "#FFFFFF",
    activeBackground = "rgba(255,255,255,0.15)",
    hoverBackground = "rgba(255,255,255,0.08)",
    fontSize = 16,
    paddingX = 13,
    paddingY = 10,
    borderRadius = 50,
    onClick,
    style,
  } = props;

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = React.useCallback(() => {
    React.startTransition(() => setIsHovered(true));
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    React.startTransition(() => setIsHovered(false));
  }, []);

  const handleClick = React.useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  const backgroundColor = React.useMemo(() => {
    if (isActive) return activeBackground;
    if (isHovered) return hoverBackground;
    return "transparent";
  }, [isActive, isHovered, activeBackground, hoverBackground]);

  const foregroundColor = isActive ? activeTextColor : textColor;

  const sharedStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "max-content",
    minWidth: "max-content",
    height: "auto",
    padding: `${paddingY}px ${paddingX}px`,
    borderRadius,
    outline: "none",
    background: backgroundColor,
    color: foregroundColor,
    cursor: "pointer",
    textDecoration: "none",
    fontFamily: "Noto Sans, sans-serif",
    fontSize,
    fontWeight: 400,
    lineHeight: "1.2em",
    transition: "background-color 0.4s ease, color 0.4s ease",
    WebkitTapHighlightColor: "transparent",
    ...style,
  };

  if (link) {
    return (
      <a
        href={link}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={sharedStyle}
      >
        <span style={{ width: "max-content", minWidth: "max-content" }}>
          {label}
        </span>
      </a>
    );
  }

  return (
    <button
      type="button"
      role="button"
      aria-pressed={isActive}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...sharedStyle,
        border: "none",
      }}
    >
      <span style={{ width: "max-content", minWidth: "max-content" }}>
        {label}
      </span>
    </button>
  );
}
