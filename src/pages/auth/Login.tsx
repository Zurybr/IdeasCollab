import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { NavHero } from "../../components/NavHero";
import "./Auth.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <>
      <NavHero />
      <div className="auth-container">
        <div className="auth-card">
          {/* --- BOTONES DE MAC AÑADIDOS --- */}
          <div className="mac-header">
            <span className="mac-dot red"></span>
            <span className="mac-dot yellow"></span>
            <span className="mac-dot green"></span>
          </div>

          <div className="auth-header">
            <h2 className="auth-title">IdeaCollab AI</h2>
            <p className="auth-subtitle">Welcome Back!</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary auth-btn">
              Log In
            </button>
          </form>

          <div className="auth-switch">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
