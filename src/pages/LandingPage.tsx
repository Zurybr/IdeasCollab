import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Components
import { Frame, ScrollContainer } from "../components/ui";
import { IntroSection, MainContent } from "../components/sections";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

//=============== LANDING PAGE COMPONENT ===============//
function LandingPage() {
  const navigate = useNavigate();
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

  // Control para saber si la animación ya se completó
  const animationCompletedRef = useRef(false);

  // Función para manejar el click en "Get Started"
  const handleGetStarted = () => {
    // Guardar en localStorage que el usuario ya se registró
    localStorage.setItem("userOnboarded", "true");
    localStorage.setItem("onboardingDate", new Date().toISOString());

    // Navegar al home
    navigate("/");
  };

  useLayoutEffect(() => {
    const handleBeforeUnload = () => window.scrollTo(0, 0);
    window.addEventListener("beforeunload", handleBeforeUnload);
    const enableScrollTimeout = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 2000);

    // Función para resetear el estado cuando se hace scroll hacia arriba
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Solo permitir reset si la animación ya se completó y estamos cerca del top
      if (scrollY < 100 && animationCompletedRef.current) {
        // Resetear clases CSS
        if (introSectionRef.current) {
          introSectionRef.current.classList.remove("hidden");
          // Resetear propiedades GSAP
          gsap.set(introSectionRef.current, {
            opacity: 1,
            backgroundColor: "var(--dark-background)",
          });
        }
        if (scrollContainerRef.current) {
          scrollContainerRef.current.classList.remove("hidden");
        }
        if (mainContentRef.current) {
          mainContentRef.current.classList.remove("visible");
          // Resetear propiedades GSAP
          gsap.set(mainContentRef.current, {
            opacity: 0,
            visibility: "hidden",
            force3D: true,
          });
        }
        if (frameRef.current) {
          // Resetear frame a su estado inicial
          gsap.set(frameRef.current, {
            borderColor: "var(--light-background)",
            boxShadow: "inset 0 0 25px rgba(244, 241, 234, 0.6)",
          });
        }
        if (circleRef.current) {
          // Resetear círculo
          gsap.set(circleRef.current, {
            scale: 1,
            transform: "translate(-50%, -50%) translateZ(-600px)",
          });
        }
        if (textContainerRef.current) {
          gsap.set(textContainerRef.current, { opacity: 0 });
        }
        if (logoTextRef.current) {
          gsap.set(logoTextRef.current, { opacity: 0 });
        }
        if (logoTypingTextRef.current) {
          gsap.set(logoTypingTextRef.current, { text: "" });
        }
        if (logoCursorRef.current) {
          gsap.set(logoCursorRef.current, { opacity: 1 });
        }
        if (iconFinalRef.current) {
          gsap.set(iconFinalRef.current, { y: 20, opacity: 0 });
        }
        if (scrollIndicatorRef.current) {
          gsap.set(scrollIndicatorRef.current, { opacity: 1 });
        }
        if (typingTextRef.current) {
          gsap.set(typingTextRef.current, { text: "" });
        }

        // Resetear la bandera para permitir que la animación funcione de nuevo
        animationCompletedRef.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    const ctx = gsap.context(() => {
      // Establecer estado inicial explícito para MainContent
      gsap.set(mainContentRef.current, {
        opacity: 0,
        visibility: "hidden",
        force3D: true,
      });

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
      tl.call(
        () => {
          // Ocultar completamente la intro section
          if (introSectionRef.current) {
            introSectionRef.current.classList.add("hidden");
          }
          // Ocultar el scroll container
          if (scrollContainerRef.current) {
            scrollContainerRef.current.classList.add("hidden");
          }
          // Activar la clase visible en main content
          if (mainContentRef.current) {
            mainContentRef.current.classList.add("visible");
          }
          // Marcar que la animación se completó
          animationCompletedRef.current = true;
        },
        [],
        "<0.8"
      );
      tl.to(
        mainContentRef.current,
        {
          opacity: 1,
          visibility: "visible",
          duration: 1.2,
          ease: "power2.out",
          force3D: true,
          onComplete: () => {
            // Asegurar que la opacity quede en 1
            if (mainContentRef.current) {
              gsap.set(mainContentRef.current, {
                opacity: 1,
                visibility: "visible",
                clearProps: "transform",
              });
            }
          },
        },
        "<0.2"
      );
    }, mainRef);

    return () => {
      ctx.revert();
      clearTimeout(enableScrollTimeout);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="LandingPage" ref={mainRef}>
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
      <MainContent ref={mainContentRef} onGetStarted={handleGetStarted} />
    </div>
  );
}

export default LandingPage;
