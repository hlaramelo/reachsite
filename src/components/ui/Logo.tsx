interface LogoProps {
  className?: string;
  color?: "white" | "navy";
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  className = "",
  color = "white",
  size = "md",
}: LogoProps) {
  const fill = color === "white" ? "#FFFFFF" : "#1B3A6B";
  const accent = "#8DC63F";

  const sizes = {
    sm: { width: 120, height: 28 },
    md: { width: 160, height: 36 },
    lg: { width: 200, height: 44 },
  };

  const { width, height } = sizes[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 48"
      width={width}
      height={height}
      className={className}
      aria-label="Reach Capital"
    >
      {/* Mountain — two peaks */}
      <path
        d="M4 40L16 12L24 26L32 12L44 40H4Z"
        fill={fill}
        opacity={0.85}
      />
      <path d="M16 12L24 26L32 12L24 2L16 12Z" fill={fill} />
      {/* Snow/light accent on peak */}
      <path d="M21.5 13L24 7L26.5 13L24 17.5L21.5 13Z" fill={accent} opacity={0.7} />
      {/* Wordmark */}
      <text
        x="56"
        y="33"
        fontFamily="Montserrat, system-ui, sans-serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="6"
        fill={fill}
      >
        REACH
      </text>
    </svg>
  );
}
