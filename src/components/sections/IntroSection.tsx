import React from "react";
import { LightBulbIcon } from "../ui/Icon";
import "./IntroSection.css";

export interface IntroSectionProps extends React.HTMLAttributes<HTMLElement> {
  circleRef?: React.RefObject<HTMLDivElement | null>;
  textContainerRef?: React.RefObject<HTMLDivElement | null>;
  typingTextRef?: React.RefObject<HTMLSpanElement | null>;
  logoContainerRef?: React.RefObject<HTMLDivElement | null>;
  logoTextRef?: React.RefObject<HTMLDivElement | null>;
  logoTypingTextRef?: React.RefObject<HTMLSpanElement | null>;
  logoCursorRef?: React.RefObject<HTMLSpanElement | null>;
  iconFinalRef?: React.RefObject<HTMLDivElement | null>;
  scrollIndicatorRef?: React.RefObject<HTMLDivElement | null>;
}

export const IntroSection = React.forwardRef<HTMLElement, IntroSectionProps>(
  (
    {
      circleRef,
      textContainerRef,
      typingTextRef,
      logoContainerRef,
      logoTextRef,
      logoTypingTextRef,
      logoCursorRef,
      iconFinalRef,
      scrollIndicatorRef,
      className = "",
      ...props
    },
    ref
  ) => {
    const classes = ["intro-section", className].filter(Boolean).join(" ");

    return (
      <section ref={ref} className={classes} {...props}>
        <div className="circle" ref={circleRef} />

        <div className="text-container" ref={textContainerRef}>
          <span ref={typingTextRef}></span>
          <span className="cursor">|</span>
        </div>

        <div className="logo-container" ref={logoContainerRef}>
          <LightBulbIcon ref={iconFinalRef} />
          <div className="logo-text" ref={logoTextRef}>
            <span ref={logoTypingTextRef}></span>
            <span className="cursor" ref={logoCursorRef}>
              |
            </span>
          </div>
        </div>

        <div className="scroll-indicator" ref={scrollIndicatorRef}>
          <div className="scroll-indicator__wheel"></div>
        </div>
      </section>
    );
  }
);

IntroSection.displayName = "IntroSection";
