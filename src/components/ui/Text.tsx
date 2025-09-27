import React from "react";
import "./Text.css";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  weight?: "normal" | "medium" | "semibold" | "bold" | "black";
  color?: "primary" | "secondary" | "muted";
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Component = "p",
      size = "base",
      weight = "normal",
      color = "primary",
      align = "left",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = "text";
    const sizeClass = `text--${size}`;
    const weightClass = `text--${weight}`;
    const colorClass = `text--${color}`;
    const alignClass = `text--${align}`;
    const classes = [
      baseClasses,
      sizeClass,
      weightClass,
      colorClass,
      alignClass,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return React.createElement(
      Component,
      { ref, className: classes, ...props },
      children
    );
  }
);

Text.displayName = "Text";
