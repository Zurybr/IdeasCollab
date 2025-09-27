import React from "react";
import "./Frame.css";

export type FrameProps = React.HTMLAttributes<HTMLDivElement>;

export const Frame = React.forwardRef<HTMLDivElement, FrameProps>(
  ({ className = "", ...props }, ref) => {
    const classes = ["frame", className].filter(Boolean).join(" ");

    return <div ref={ref} className={classes} {...props} />;
  }
);

Frame.displayName = "Frame";
