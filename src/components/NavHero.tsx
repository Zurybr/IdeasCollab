/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { NavLink } from "react-router";
import { LightBulbIcon } from "./ui"; // Asegúrate que la ruta a tu ícono sea correcta
import { useI18n } from "../stores/i18n";
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
  const { t, locale, setLocale } = useI18n();

  return (
    <nav className="nav-hero">
      <div className="nav-hero__container">
        <div className="nav-hero__logo">
          <NavLink to="/" className="logo-link">
            <LightBulbIcon size={28} className="navbar__logo-icon" />
            <h1>{t("app.brand")}</h1>
          </NavLink>
        </div>

        <div className={`nav-hero__links ${isMenuOpen ? "is-open" : ""}`}>
          <NavLink to="/products">{t("navhero.products")}</NavLink>
          <NavLink to="/solutions">{t("navhero.solutions")}</NavLink>
          <NavLink to="/resources">{t("navhero.resources")}</NavLink>
          <NavLink to="/pricing">{t("navhero.pricing")}</NavLink>
          <NavLink to="/contact">{t("navhero.contact")}</NavLink>
        </div>

        <div
          className="nav-hero__auth"
          style={{ gap: "0.5rem", alignItems: "center" }}
        >
          <label htmlFor="lang-select" style={{ fontSize: 12 }}>
            {t("navhero.language")}:
          </label>
          <select
            id="lang-select"
            value={locale}
            onChange={(e) => setLocale(e.target.value as any)}
            style={{ padding: "0.25rem 0.5rem", borderRadius: 6 }}
            aria-label={t("navhero.language")}
          >
            <option value="es_mx">{t("navhero.mx")}</option>
            <option value="en_us">{t("navhero.us")}</option>
          </select>

          <NavLink to="/login" className="btn btn-text">
            {t("navhero.login")}
          </NavLink>
          <NavLink to="/signup" className="btn btn-primary">
            {t("navhero.signup")}
          </NavLink>
        </div>

        <button
          className="nav-hero__menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="menu"
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </nav>
  );
};
