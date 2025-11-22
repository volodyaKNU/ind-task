import React, {
  type CSSProperties,
  type PropsWithChildren,
  useMemo,
} from "react";

type ElectricBorderProps = PropsWithChildren<{
  color?: string;
  thickness?: number;
  className?: string;
  style?: CSSProperties;
}>;

function hexToRgba(hex: string, alpha = 1): string {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const int = parseInt(h, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = "#5227FF",
  thickness = 2,
  className,
  style,
}) => {
  const inheritRadius: CSSProperties = useMemo(
    () => ({
      borderRadius: style?.borderRadius ?? "inherit",
    }),
    [style?.borderRadius]
  );

  const strokeStyle: CSSProperties = useMemo(
    () => ({
      ...inheritRadius,
      borderWidth: thickness,
      borderStyle: "solid",
      borderColor: color,
    }),
    [inheritRadius, thickness, color]
  );

  const glow1Style: CSSProperties = useMemo(
    () => ({
      ...inheritRadius,
      borderWidth: thickness,
      borderStyle: "solid",
      borderColor: hexToRgba(color, 0.6),
      filter: `blur(${0.5 + thickness * 0.25}px)`,
      opacity: 0.5,
    }),
    [inheritRadius, thickness, color]
  );

  const glow2Style: CSSProperties = useMemo(
    () => ({
      ...inheritRadius,
      borderWidth: thickness,
      borderStyle: "solid",
      borderColor: color,
      filter: `blur(${2 + thickness * 0.5}px)`,
      opacity: 0.5,
    }),
    [inheritRadius, thickness, color]
  );

  const bgGlowStyle: CSSProperties = useMemo(
    () => ({
      ...inheritRadius,
      transform: "scale(1.08)",
      filter: "blur(32px)",
      opacity: 0.3,
      zIndex: -1,
      background: `linear-gradient(-30deg, ${hexToRgba(
        color,
        0.8
      )}, transparent, ${color})`,
    }),
    [inheritRadius, color]
  );

  return (
    <div
      className={
        "relative isolate backdrop-blur-xl p-3.5 p-6 md:p-12 bg-white/5 " +
        (className ?? "")
      }
      style={style}
    >
      {/* Border layers with glow effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={inheritRadius}
      >
        {/* Main border */}
        <div className="absolute inset-0 box-border" style={strokeStyle} />
        {/* Inner glow */}
        <div className="absolute inset-0 box-border" style={glow1Style} />
        {/* Outer glow */}
        <div className="absolute inset-0 box-border" style={glow2Style} />
        {/* Background gradient glow */}
        <div className="absolute inset-0" style={bgGlowStyle} />
      </div>

      {/* Content */}
      <div className="relative" style={inheritRadius}>
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;
