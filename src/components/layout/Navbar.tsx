import { useState } from "react";
import { useThemeStore } from "../../store/themeStore";
import { LightBulbIcon } from "../ui";
import { useI18n } from "../../stores/i18n";
import "./Navbar.css";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar = ({ onToggleSidebar }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeStore();
  const { t } = useI18n();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Mobile controls */}
        <div className="navbar__mobile-controls">
          {/* Sidebar toggle button */}
          <button
            className="navbar__sidebar-toggle"
            onClick={onToggleSidebar}
            aria-label={t("navbar.toggleSidebar")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 8V6h18v2H3zm0 5h18v-2H3v2zm0 5h18v-2H3v2z"
              />
            </svg>
          </button>
          {/* Menu toggle button */}
          <button
            className="navbar__menu-toggle md:hidden"
            onClick={toggleMenu}
            aria-label={t("navbar.toggleMenu")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              {isMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="navbar__logo">
          <a href="/" className="navbar__logo-link">
            <LightBulbIcon size={28} className="navbar__logo-icon" />
            <h1 className="navbar__logo-text">{t("app.brand")}</h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar__nav hidden md:flex">
          <a href="/" className="navbar__nav-link">
            {t("navbar.dashboard")}
          </a>
          <a href="/projects" className="navbar__nav-link">
            {t("navbar.projects")}
          </a>
          <a href="/team" className="navbar__nav-link">
            {t("navbar.team")}
          </a>
          <a href="/settings" className="navbar__nav-link">
            {t("navbar.settings")}
          </a>
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={t("navbar.themeSwitchTo", {
              mode: t(`navbar.mode.${theme === "light" ? "dark" : "light"}`),
            })}
          >
            {theme === "light" ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="m12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </button>

          <div className="navbar__profile">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="navbar__profile-image"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile-menu ${
          isMenuOpen ? "navbar__mobile-menu--open" : ""
        }`}
      >
        <a href="/" className="navbar__mobile-link">
          Dashboard
        </a>
        <a href="/projects" className="navbar__mobile-link">
          Projects
        </a>
        <a href="/team" className="navbar__mobile-link">
          Team
        </a>
        <a href="/settings" className="navbar__mobile-link">
          Settings
        </a>
      </div>
    </nav>
  );
};
