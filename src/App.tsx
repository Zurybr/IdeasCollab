import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Components
import { Frame, ScrollContainer } from "./components/ui";
import { IntroSection, MainContent } from "./components/sections";

// Styles
import "./styles/globals.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

//=============== MAIN APP COMPONENT ===============//
function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const introSectionRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const typingTextRef = useRef<HTMLSpanElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLDivElement>(null);
  const logoTypingTextRef = useRef<HTMLSpanElement>(null);
  const logoCursorRef = useRef<HTMLSpanElement>(null);
  const iconFinalRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const handleBeforeUnload = () => window.scrollTo(0, 0);
    window.addEventListener("beforeunload", handleBeforeUnload);
    const enableScrollTimeout = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 2000);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        circleRef.current,
        { scale: 1, transform: "translate(-50%, -50%) translateZ(-600px)" },
        {
          scale: 1,
          transform: "translate(-50%, -50%) translateZ(0px)",
          duration: 2,
          ease: "power3.out",
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl.to(scrollIndicatorRef.current, { opacity: 0, duration: 0.5 }, 0);
      tl.to(circleRef.current, { scale: 150, duration: 2, ease: "power2.in" });
      tl.to(
        introSectionRef.current,
        {
          backgroundColor: "var(--light-background)",
          duration: 2,
          ease: "power2.in",
        },
        "<"
      );
      tl.to(
        frameRef.current,
        {
          borderColor: "var(--text-color)",
          boxShadow: "inset 0 0 25px rgba(44, 44, 44, 0.5)",
          duration: 2,
          ease: "power2.in",
        },
        "<"
      );
      tl.to(textContainerRef.current, { opacity: 1, duration: 0.5 }, "<1.5");
      tl.to(typingTextRef.current, {
        text: "Welcome to your new project",
        duration: 4,
        ease: "none",
      });
      tl.to({}, { duration: 2 });
      tl.to(typingTextRef.current, { text: "", duration: 2, ease: "none" });
      tl.to(typingTextRef.current, {
        text: "Let's build something great",
        duration: 4,
        ease: "none",
      });
      tl.to({}, { duration: 2 });
      tl.to(textContainerRef.current, { opacity: 0, duration: 1 });
      tl.to(logoTextRef.current, { opacity: 1, duration: 0.5 });
      tl.to(logoTypingTextRef.current, {
        text: "IdeaCollab",
        duration: 3,
        ease: "none",
      });
      tl.to(logoCursorRef.current, { opacity: 0, duration: 0.1 });
      tl.fromTo(
        iconFinalRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
      );
      tl.to(introSectionRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });
      tl.to(
        mainContentRef.current,
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "<0.5"
      );
    }, mainRef);

    return () => {
      ctx.revert();
      clearTimeout(enableScrollTimeout);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="App" ref={mainRef}>
      <Frame ref={frameRef} />
      <IntroSection
        ref={introSectionRef}
        circleRef={circleRef}
        textContainerRef={textContainerRef}
        typingTextRef={typingTextRef}
        logoContainerRef={logoContainerRef}
        logoTextRef={logoTextRef}
        logoTypingTextRef={logoTypingTextRef}
        logoCursorRef={logoCursorRef}
        iconFinalRef={iconFinalRef}
        scrollIndicatorRef={scrollIndicatorRef}
      />
      <ScrollContainer ref={scrollContainerRef} />
      <MainContent ref={mainContentRef} />
    </div>
  );
}

export default App;
