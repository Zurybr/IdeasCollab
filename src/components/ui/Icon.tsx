import React from "react";
import "./Icon.css";

export interface LightBulbIconProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
}

export const LightBulbIcon = React.forwardRef<
  HTMLDivElement,
  LightBulbIconProps
>(({ size = 180, className = "", ...props }, ref) => {
  const classes = ["icon", "icon--lightbulb", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    </div>
  );
});

LightBulbIcon.displayName = "LightBulbIcon";
