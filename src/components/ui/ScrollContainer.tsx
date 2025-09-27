import React from "react";
import "./ScrollContainer.css";

export type ScrollContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const ScrollContainer = React.forwardRef<
  HTMLDivElement,
  ScrollContainerProps
>(({ className = "", ...props }, ref) => {
  const classes = ["scroll-container", className].filter(Boolean).join(" ");

  return <div ref={ref} className={classes} {...props} />;
});

ScrollContainer.displayName = "ScrollContainer";
