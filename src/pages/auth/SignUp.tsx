import { useState } from "react";
import { Link } from "react-router";
import { NavHero } from "../../components/NavHero";
import { useI18n } from "../../stores/i18n";
import "./Auth.css";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
  const { t } = useI18n();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up attempt:", { name, email, password });
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
            <h2 className="auth-title">{t("auth.brand")}</h2>
            <p className="auth-subtitle">{t("auth.signup.title")}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t("auth.signup.name")}</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t("auth.signup.email")}</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">{t("auth.signup.password")}</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary auth-btn">
              {t("auth.signup.submit")}
            </button>
          </form>

          <div className="auth-switch">
            <p>
              {t("auth.signup.haveAccount")}{" "}
              <Link to="/login">{t("auth.signup.login")}</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
