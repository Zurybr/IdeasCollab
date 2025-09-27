import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { LightBulbIcon } from "../ui";
import "./Navbar.css";

interface NavbarProps {
  onToggleSidebar?: () => void;
}

export const Navbar = ({ onToggleSidebar }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Mobile menu button & Sidebar toggle */}
        <div className="navbar__mobile-controls">
          <button
            className="navbar__sidebar-toggle"
            onClick={onToggleSidebar}
            aria-label="Toggle sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          </button>

          <button
            className="navbar__menu-toggle md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
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
            <h1 className="navbar__logo-text">IdeaCollab</h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar__nav hidden md:flex">
          <a href="/" className="navbar__nav-link">
            Dashboard
          </a>
          <a href="/projects" className="navbar__nav-link">
            Projects
          </a>
          <a href="/team" className="navbar__nav-link">
            Team
          </a>
          <a href="/settings" className="navbar__nav-link">
            Settings
          </a>
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
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
