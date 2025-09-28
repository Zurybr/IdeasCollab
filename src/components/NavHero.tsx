import { NavLink } from "react-router";
import { LightBulbIcon } from "./ui";
import "./NavHero.css";

export const NavHero = () => {
  return (
    <nav className="nav-hero">
      <div className="nav-hero__container">
        <div className="nav-hero__logo">
          <NavLink to="/" className="logo-link">
            <LightBulbIcon size={28} className="navbar__logo-icon" />
            <h1>IdeaCollab</h1>
          </NavLink>
        </div>

        <div className="nav-hero__links">
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
        </div>

        <div className="nav-hero__auth">
          <NavLink to="/login" className="btn btn-text">
            Login
          </NavLink>
          <NavLink to="/signup" className="btn btn-primary">
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
