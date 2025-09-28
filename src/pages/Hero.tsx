import React from "react";
import { NavHero } from "../components/NavHero"; // Asegúrate de que esta ruta sea correcta
import "./Hero.css";

// --- Íconos para las características ---
const BrainIcon = ({ size = 24, className = "" }) => (
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
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z"></path>
    <path d="M7 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"></path>
  </svg>
);

const ClockIcon = ({ size = 24, className = "" }) => (
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
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const ActivityIcon = ({ size = 24, className = "" }) => (
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
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

// --- ✨ NUEVO ÍCONO para la lista de capacidades ---
const CheckIcon = ({ size = 18, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

// --- Componente principal Hero ---
export const Hero = () => {
  return (
    <>
      <NavHero />
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">AI-Powered Team Organization</h1>
          <p className="hero-subtitle">
            Transform how you manage teams with our advanced AI technology.
            Automatically organize, optimize, and enhance team collaboration
            with intelligent insights.
          </p>
          <div className="hero-actions">
            <a href="/try-for-free" className="btn btn-primary">
              Try for Free
            </a>
            <a href="/demo" className="btn btn-secondary">
              Watch Demo
            </a>
          </div>

          <div className="mac-mockup">
            <div className="mac-screen">
              <div className="mac-header">
                <span className="mac-dot red"></span>
                <span className="mac-dot yellow"></span>
                <span className="mac-dot green"></span>
              </div>
              {/* ✨ CAMBIO: Interfaz de Webapp en lugar de código */}
              <div className="webapp-body">
                <div className="webapp-header">
                  <div className="webapp-title">IdeaCollab AI</div>
                  <div className="webapp-role">
                    ROLE: Scrum Master / Team Lead
                  </div>
                </div>
                <div className="webapp-capabilities">
                  <div className="capabilities-title">CAPABILITIES</div>
                  <ul className="capabilities-list">
                    <li className="capability-item">
                      <CheckIcon className="capability-icon" /> Propose
                      estimated dates
                    </li>
                    <li className="capability-item">
                      <CheckIcon className="capability-icon" /> Manage calendars
                      & timelines
                    </li>
                    <li className="capability-item">
                      <CheckIcon className="capability-icon" /> Assign tasks &
                      responsibilities
                    </li>
                    <li className="capability-item">
                      <CheckIcon className="capability-icon" /> Guide & lead
                      team workflow
                    </li>
                  </ul>
                </div>
                <div className="webapp-status">
                  <span className="status-indicator"></span>
                  <span>Current Action: Optimizing Team Performance</span>
                </div>
              </div>
            </div>
          </div>

          <section className="features-grid">
            <div className="feature-card">
              <BrainIcon size={32} className="feature-icon" />
              <h3 className="card-title">Smart Team Assignment</h3>
              <p className="card-description">
                Our AI analyzes skills, availability, and project requirements
                to create optimal team compositions automatically.
              </p>
            </div>
            <div className="feature-card">
              <ClockIcon size={32} className="feature-icon" />
              <h3 className="card-title">Workload Balancing</h3>
              <p className="card-description">
                Ensure fair distribution of tasks and prevent burnout with our
                intelligent workload management system.
              </p>
            </div>
            <div className="feature-card">
              <ActivityIcon size={32} className="feature-icon" />
              <h3 className="card-title">Performance Analytics</h3>
              <p className="card-description">
                Get real-time insights into team performance and identify areas
                for improvement with AI-driven analytics.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} IdeaCollab. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
};
