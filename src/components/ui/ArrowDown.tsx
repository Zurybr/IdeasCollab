import React from "react";
import "./ArrowDown.css";

export interface ArrowDownProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  animate?: boolean;
}

export const ArrowDown = React.forwardRef<HTMLDivElement, ArrowDownProps>(
  ({ size = 24, animate = true, className = "", ...props }, ref) => {
    const classes = [
      "arrow-down",
      animate ? "arrow-down--animate" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={classes} {...props}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
);

ArrowDown.displayName = "ArrowDown";
