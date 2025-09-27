import React from "react";
import "./Container.css";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  center?: boolean;
  padding?: boolean;
  children: React.ReactNode;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      size = "lg",
      center = false,
      padding = true,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = "container";
    const sizeClass = `container--${size}`;
    const centerClass = center ? "container--center" : "";
    const paddingClass = padding ? "container--padding" : "";
    const classes = [
      baseClasses,
      sizeClass,
      centerClass,
      paddingClass,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
