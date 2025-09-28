// Hero.tsx (VERSIÓN FINAL)

import { useEffect } from "react";
import { useLocation } from "react-router";
import { Button } from "../components/ui/Button";
import { NavHero } from "../components/NavHero";
import "./Hero.css";
import { useNavigate } from "react-router";

// --- Tipos y Íconos (con los nuevos añadidos) ---
type IconProps = { size?: number; className?: string };
const BrainIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
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
const ClockIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
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
const ActivityIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
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
const CheckIcon: React.FC<IconProps> = ({ size = 18, className = "" }) => (
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
const PackageIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
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
    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v2"></path>
    <path d="M12 22V12"></path>
    <path d="m7 12-4.5 2.5a2 2 0 0 0 0 3.5L7 20.5"></path>
    <path d="m17 12 4.5 2.5a2 2 0 0 1 0 3.5L17 20.5"></path>
    <path d="M3.27 6.96 12 12.01l8.73-5.05"></path>
    <path d="m12 2.2-8.73 5.05"></path>
  </svg>
);
const TargetIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
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
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);
const BookOpenIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
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
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

export const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClearOnboarding = () => {
    try {
      localStorage.removeItem("userOnboarded");
      localStorage.removeItem("onboardingDate");
      navigate("/landing"); // Redirige a landing
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant" as ScrollBehavior,
        });
      });
    } catch (e) {
      console.error("Failed to clear onboarding state", e);
    }
  };

  useEffect(() => {
    const sectionId = location.pathname.substring(1);
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.pathname]);

  return (
    <>
      <NavHero />
      {/* Solo una etiqueta <main> para toda la página */}
      <main>
        {/* --- SECCIÓN 1: HERO (Tu código original) --- */}
        <section className="hero-section">
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
                        <CheckIcon className="capability-icon" /> Manage
                        calendars & timelines
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
                  Get real-time insights into team performance and identify
                  areas for improvement with AI-driven analytics.
                </p>
              </div>
            </section>
          </div>
        </section>

        {/* --- SECCIÓN 2: PRODUCTS --- */}
        <section id="products" className="hero-section alt-bg">
          <div className="hero-content">
            <h1 className="hero-title">Our Products</h1>
            <p className="hero-subtitle">
              A suite of tools designed to enhance team productivity and
              collaboration.
            </p>
            <section className="features-grid">
              <div className="feature-card">
                <PackageIcon size={32} className="feature-icon" />
                <h3 className="card-title">AI Team Assembler</h3>
                <p className="card-description">
                  Dynamically creates the perfect team for any project based on
                  skills, workload, and synergy.
                </p>
              </div>
              <div className="feature-card">
                <PackageIcon size={32} className="feature-icon" />
                <h3 className="card-title">Predictive Planner</h3>
                <p className="card-description">
                  Forecasts project timelines and potential bottlenecks using
                  machine learning algorithms.
                </p>
              </div>
              <div className="feature-card">
                <PackageIcon size={32} className="feature-icon" />
                <h3 className="card-title">Performance Hub</h3>
                <p className="card-description">
                  Centralized dashboard for real-time analytics and actionable
                  insights on team performance.
                </p>
              </div>
            </section>
          </div>
        </section>

        {/* --- SECCIÓN 3: SOLUTIONS --- */}
        <section id="solutions" className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Solutions for Your Industry</h1>
            <p className="hero-subtitle">
              Tailored AI strategies to meet the unique challenges of your
              business sector.
            </p>
            <section className="features-grid">
              <div className="feature-card">
                <TargetIcon size={32} className="feature-icon" />
                <h3 className="card-title">For Tech Startups</h3>
                <p className="card-description">
                  Accelerate development cycles and optimize resource allocation
                  in fast-paced environments.
                </p>
              </div>
              <div className="feature-card">
                <TargetIcon size={32} className="feature-icon" />
                <h3 className="card-title">For Creative Agencies</h3>
                <p className="card-description">
                  Enhance collaboration on creative projects and balance artist
                  workloads effectively.
                </p>
              </div>
              <div className="feature-card">
                <TargetIcon size={32} className="feature-icon" />
                <h3 className="card-title">For Enterprise</h3>
                <p className="card-description">
                  Scale team management across large organizations with robust
                  analytics and integration.
                </p>
              </div>
            </section>
          </div>
        </section>

        {/* --- SECCIÓN 4: RESOURCES --- */}
        <section id="resources" className="hero-section alt-bg">
          <div className="hero-content">
            <h1 className="hero-title">Knowledge & Resources</h1>
            <p className="hero-subtitle">
              Explore our guides, articles, and documentation to get the most
              out of IdeaCollab AI.
            </p>
            <section className="features-grid">
              <div className="feature-card">
                <BookOpenIcon size={32} className="feature-icon" />
                <h3 className="card-title">Blog</h3>
                <p className="card-description">
                  Read the latest on AI, team management, and productivity
                  trends from our experts.
                </p>
              </div>
              <div className="feature-card">
                <BookOpenIcon size={32} className="feature-icon" />
                <h3 className="card-title">Documentation</h3>
                <p className="card-description">
                  In-depth guides and API references for integrating and
                  customizing our tools.
                </p>
              </div>
              <div className="feature-card">
                <BookOpenIcon size={32} className="feature-icon" />
                <h3 className="card-title">Case Studies</h3>
                <p className="card-description">
                  Discover how leading companies are achieving success with
                  IdeaCollab AI.
                </p>
              </div>
            </section>
          </div>
        </section>

        {/* --- SECCIÓN 5: PRICING --- */}
        <section id="pricing" className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Simple, Transparent Pricing</h1>
            <p className="hero-subtitle">
              Choose the plan that's right for your team. No hidden fees.
            </p>
            <div className="pricing-grid">
              {/* --- CARD 1: Starter --- */}
              <div className="pricing-card">
                <h3 className="pricing-tier">Starter</h3>
                <p className="pricing-price">
                  $0 <span>/ month</span>
                </p>
                <p className="pricing-description">
                  For individuals and small teams just getting started.
                </p>
                <ul className="pricing-features">
                  <li>
                    <CheckIcon size={16} /> Up to 5 users
                  </li>
                  <li>
                    <CheckIcon size={16} /> Basic analytics
                  </li>
                  <li>
                    <CheckIcon size={16} /> Community support
                  </li>
                </ul>
                <a
                  href="/try-for-free"
                  className="btn btn-secondary pricing-btn"
                >
                  Get Started
                </a>
              </div>

              {/* --- CARD 2: Pro (Destacado) --- */}
              <div className="pricing-card featured">
                <div className="featured-badge">Most Popular</div>
                <h3 className="pricing-tier">Pro</h3>
                <p className="pricing-price">
                  $20 <span>/ user / month</span>
                </p>
                <p className="pricing-description">
                  For growing teams that need advanced features.
                </p>
                <ul className="pricing-features">
                  <li>
                    <CheckIcon size={16} /> Unlimited users
                  </li>
                  <li>
                    <CheckIcon size={16} /> Advanced AI analytics
                  </li>
                  <li>
                    <CheckIcon size={16} /> Priority support
                  </li>
                  <li>
                    <CheckIcon size={16} /> API access
                  </li>
                </ul>
                <a href="/try-for-free" className="btn btn-primary pricing-btn">
                  Try for Free
                </a>
              </div>

              {/* --- CARD 3: Enterprise --- */}
              <div className="pricing-card">
                <h3 className="pricing-tier">Enterprise</h3>
                <p className="pricing-price">Custom</p>
                <p className="pricing-description">
                  For large organizations with specific security and support
                  needs.
                </p>
                <ul className="pricing-features">
                  <li>
                    <CheckIcon size={16} /> All Pro features
                  </li>
                  <li>
                    <CheckIcon size={16} /> Dedicated account manager
                  </li>
                  <li>
                    <CheckIcon size={16} /> SSO and advanced security
                  </li>
                </ul>
                <a
                  href="/contact-sales"
                  className="btn btn-secondary pricing-btn"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
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
          <div className="footer-debug-reset">
            <Button variant="primary" size="sm" onClick={handleClearOnboarding}>
              Reset Onboarding (Debug)
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
};
