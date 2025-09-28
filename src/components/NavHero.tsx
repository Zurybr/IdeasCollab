import { useState } from "react";
import { NavLink } from "react-router";
import { LightBulbIcon } from "./ui"; // Asegúrate que la ruta a tu ícono sea correcta
import "./NavHero.css"; // Enlazamos el archivo de estilos

// --- Definición de Tipos para los Íconos ---
interface IconProps {
  size?: number;
  className?: string;
}

// --- Componente del Ícono del Menú (Hamburguesa) ---
const MenuIcon = ({ size = 24, className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// --- Componente del Ícono de Cierre (X) ---
const CloseIcon = ({ size = 24, className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// --- Componente Principal: NavHero ---
export const NavHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav-hero">
      <div className="nav-hero__container">
        <div className="nav-hero__logo">
          <NavLink to="/" className="logo-link">
            <LightBulbIcon size={28} className="navbar__logo-icon" />
            <h1>IdeaCollab</h1>
          </NavLink>
        </div>

        <div className={`nav-hero__links ${isMenuOpen ? "is-open" : ""}`}>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        <div className="nav-hero__auth">
          <NavLink to="/login" className="btn btn-text">
            Login
          </NavLink>
          <NavLink to="/signup" className="btn btn-primary">
            Sign Up
          </NavLink>
        </div>

        <button
          className="nav-hero__menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </nav>
  );
};
