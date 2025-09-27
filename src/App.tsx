import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

//=============== STYLES (VERSIÓN A PRUEBA DE FALLOS) ===============//
const GlobalStyles = () => (
  <style>{`
    :root {
      --text-color: #2c2c2c;
      --dark-background: #0a0a0a;
      --light-background: #f4f1ea;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      font-family: 'Inter', sans-serif;
      background-color: var(--light-background);
      color: var(--light-background);
      overscroll-behavior: none;
      width: 100%;
      height: 100%;
    }
    .App {
      width: 100vw;
      min-height: 100vh;
      margin: 0;
      padding: 0;
      position: relative;
    }
    .scroll-container { 
      height: 500vh; 
      position: absolute; 
      top: 0;
      left: 0;
      z-index: 1; 
      width: 100vw; 
      margin: 0; 
      padding: 0; 
      pointer-events: none;
    }
    .frame {
      position: fixed; top: 20px; left: 20px; right: 20px; bottom: 20px;
      border: 2px solid var(--light-background); border-radius: 25px; z-index: 999;
      pointer-events: none; box-shadow: inset 0 0 25px rgba(244, 241, 234, 0.6);
    }
    .intro-section {
      position: fixed; top: 0; left: 0; height: 100vh; width: 100vw;
      display: flex; justify-content: center; align-items: center;
      overflow: hidden; perspective: 1200px; transform-style: preserve-3d;
      background-color: var(--dark-background); z-index: 10;
    }
    .circle {
      width: 60px; height: 60px; border-radius: 50%;
      background-color: var(--light-background); position: absolute;
      top: 50%; left: 50%; transform: translate(-50%, -50%) translateZ(-600px);
      z-index: 1;
    }
    .text-container {
      position: absolute; top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 100%; max-width: 1000px; padding: 0 20px;
      text-align: center;
      font-family: 'Space Mono', monospace;
      font-size: clamp(1.5rem, 4vw, 3rem);
      color: var(--text-color);
      white-space: pre-wrap;
      opacity: 0; z-index: 2;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    }
    .logo-container {
      position: absolute; top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      display: flex; flex-direction: column; align-items: center;
      color: var(--text-color); z-index: 3;
    }
    .logo-text {
      font-family: 'Inter', sans-serif; font-size: clamp(2.5rem, 5vw, 4.5rem);
      font-weight: 900; line-height: 1; white-space: pre;
      opacity: 0; text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    }
    .icon-final { color: var(--text-color); opacity: 0; }
    .cursor { display: inline-block; animation: blink 0.8s infinite steps(1); }
    @keyframes blink { 50% { opacity: 0; } }

    /* ESTA ES LA SECCIÓN IMPORTANTE A VERIFICAR */
    .main-content {
      min-height: 100vh;
      background-color: var(--light-background);
      color: var(--text-color);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 5rem 2rem;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 5;
      text-align: center;
      width: 100vw;
      height: 100vh;
      margin: 0;
      box-sizing: border-box;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    .main-content.visible {
      opacity: 1;
    }

    .main-content h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    .main-content p {
      font-size: 1.2rem;
      max-width: 800px;
      line-height: 1.6;
      text-align: center;
      margin: 0 auto;
    }

    .cta-container {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .cta-button {
      font-family: 'Inter', sans-serif; font-weight: 700; font-size: 1.1rem;
      color: var(--light-background); background-color: var(--text-color);
      border: none; border-radius: 50px; padding: 1rem 2.5rem; cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .cta-button:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); }
    .arrow-down { margin-bottom: 1.5rem; animation: bounce 2s infinite ease-in-out; }
    @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-20px); } 60% { transform: translateY(-10px); } }
    .scroll-indicator {
      position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
      width: 28px; height: 48px; border: 2px solid var(--light-background);
      border-radius: 14px; z-index: 10;
    }
    .scroll-indicator .wheel {
      position: absolute; top: 8px; left: 50%; transform: translateX(-50%);
      width: 4px; height: 10px; background: var(--light-background);
      border-radius: 2px; animation: scroll 2s infinite ease-in-out;
    }
    @keyframes scroll { 0% { transform: translate(-50%, 0); opacity: 1; } 50% { transform: translate(-50%, 15px); opacity: 1; } 100% { transform: translate(-50%, 15px); opacity: 0; } }
  `}</style>
);

//=============== COMPONENT LIBRARY ===============//
const Frame = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div className="frame" ref={ref}></div>
));
const ScrollIndicator = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div className="scroll-indicator" ref={ref}>
    <div className="wheel"></div>
  </div>
));
const IconFinal = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div className="icon-final" ref={ref}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="180"
      height="180"
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
));
const CtaButton: React.FC = () => (
  <button className="cta-button">Let's get started!</button>
);
const ArrowDown: React.FC = () => (
  <div className="arrow-down">
    <svg
      width="24"
      height="24"
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
const MainContent = React.forwardRef<HTMLElement>((props, ref) => (
  <section className="main-content" ref={ref}>
    <h2>Your project starts here.</h2>
    <p>
      Once an idea takes shape, the next step is execution. Our platform
      connects you with the tools and talent needed to transform a concept into
      a tangible reality. Explore, collaborate, and build without limits.
    </p>
    <div className="cta-container">
      <ArrowDown />
      <CtaButton />
    </div>
  </section>
));

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
      <GlobalStyles />
      <Frame ref={frameRef} />
      <section className="intro-section" ref={introSectionRef}>
        <div className="circle" ref={circleRef}></div>
        <div className="text-container" ref={textContainerRef}>
          <span ref={typingTextRef}></span>
          <span className="cursor" style={{ color: "var(--text-color)" }}>
            |
          </span>
        </div>
        <div className="logo-container" ref={logoContainerRef}>
          <IconFinal ref={iconFinalRef} />
          <div className="logo-text" ref={logoTextRef}>
            <span ref={logoTypingTextRef}></span>
            <span
              className="cursor"
              ref={logoCursorRef}
              style={{ color: "var(--text-color)" }}
            >
              |
            </span>
          </div>
        </div>
        <ScrollIndicator ref={scrollIndicatorRef} />
      </section>
      <div className="scroll-container" ref={scrollContainerRef}></div>
      <MainContent ref={mainContentRef} />
    </div>
  );
}

export default App;
