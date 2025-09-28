import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { LandingPage, Home } from "./pages";

// Styles
import "./styles/globals.css";
import { Layout } from "./components/layout";

//=============== MAIN APP COMPONENT ===============//
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario ya pasó por el onboarding
    const userOnboarded = localStorage.getItem("userOnboarded");

    // Si el usuario está en la ruta raíz
    if (window.location.pathname === "/") {
      if (userOnboarded === "true") {
        // Usuario ya onboarded, mostrar home
        navigate("/hero");
      } else {
        // Usuario nuevo, redirigir a landing
        navigate("/landing");
      }
    }
  }, [navigate]);

  // Verificar localStorage para decidir qué mostrar
  const userOnboarded = localStorage.getItem("userOnboarded");

  // Si está en la ruta raíz y no está onboarded, redirigir
  if (window.location.pathname === "/" && userOnboarded !== "true") {
    return <Navigate to="/landing" replace />;
  }

  // Si está en la ruta raíz y ya está onboarded, mostrar Home
  if (window.location.pathname === "/" && userOnboarded === "true") {
    return (
      <>
        <Layout>
          <Home />
        </Layout>
      </>
    );
  }

  // Si está en /landing, mostrar LandingPage
  if (window.location.pathname === "/landing") {
    return <LandingPage />;
  }

  // Fallback - redirigir a landing
  return <Navigate to="/landing" replace />;
}

export default App;
