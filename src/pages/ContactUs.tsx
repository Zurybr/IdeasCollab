// pages/ContactUs.tsx

import { useState } from "react";
import { useNavigate } from "react-router";
import { NavHero } from "../components/NavHero";
import { useI18n } from "../stores/i18n";
import "./auth/Auth.css"; // Reutilizamos los estilos de autenticación

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { t } = useI18n();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el mensaje (ej. a una API o servicio de email)
    console.log("Contact form submitted:", { name, email, message });
    alert(t("contact.thanks"));
    navigate("/"); // Redirige al inicio después de enviar
  };

  return (
    <>
      <NavHero />
      <div className="auth-container">
        <div className="auth-card">
          {/* --- Botones de Mac --- */}
          <div className="mac-header">
            <span className="mac-dot red"></span>
            <span className="mac-dot yellow"></span>
            <span className="mac-dot green"></span>
          </div>

          <div className="auth-header">
            <h2 className="auth-title">{t("contact.title")}</h2>
            <p className="auth-subtitle">{t("contact.subtitle")}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t("contact.name")}</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t("contact.email")}</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t("contact.message")}</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary auth-btn">
              {t("contact.submit")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
