// Hero.tsx (VERSIÓN FINAL)

import { useEffect } from "react";
import { useLocation } from "react-router";
import { Button } from "../components/ui/Button";
import { NavHero } from "../components/NavHero";
import "./Hero.css";
import { useNavigate } from "react-router";
import { useI18n } from "../stores/i18n";

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
  const { t } = useI18n();
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
            <h1 className="hero-title">{t("heroPage.heroTitle")}</h1>
            <p className="hero-subtitle">
              {t("heroPage.heroSubtitle")}
            </p>
            <div className="hero-actions">
              <a href="/try-for-free" className="btn btn-primary">
                {t("heroPage.tryFree")}
              </a>
              <a href="/demo" className="btn btn-secondary">
                {t("heroPage.watchDemo")}
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
                    <div className="webapp-title">{t("heroPage.webappTitle")}</div>
                    <div className="webapp-role">
                      {t("heroPage.role")}
                    </div>
                  </div>
                  <div className="webapp-capabilities">
                    <div className="capabilities-title">{t("heroPage.capabilities")}</div>
                    <ul className="capabilities-list">
                      <li className="capability-item">
                        <CheckIcon className="capability-icon" /> {t("heroPage.cap1")}
                      </li>
                      <li className="capability-item">
                        <CheckIcon className="capability-icon" /> {t("heroPage.cap2")}
                      </li>
                      <li className="capability-item">
                        <CheckIcon className="capability-icon" /> {t("heroPage.cap3")}
                      </li>
                      <li className="capability-item">
                        <CheckIcon className="capability-icon" /> {t("heroPage.cap4")}
                      </li>
                    </ul>
                  </div>
                  <div className="webapp-status">
                    <span className="status-indicator"></span>
                    <span>{t("heroPage.currentAction")}</span>
                  </div>
                </div>
              </div>
            </div>

            <section className="features-grid">
              <div className="feature-card2">
                <BrainIcon size={32} className="feature-icon" />
                <h3 className="card-title">{t("heroPage.features.smartTitle")}</h3>
                <p className="card-description">
                  {t("heroPage.features.smartDesc")}
                </p>
              </div>
              <div className="feature-card2">
                <ClockIcon size={32} className="feature-icon" />
                <h3 className="card-title">{t("heroPage.features.workloadTitle")}</h3>
                <p className="card-description">
                  {t("heroPage.features.workloadDesc")}
                </p>
              </div>
              <div className="feature-card2">
                <ActivityIcon size={32} className="feature-icon" />
                <h3 className="card-title">{t("heroPage.features.analyticsTitle")}</h3>
                <p className="card-description">
                  {t("heroPage.features.analyticsDesc")}
                </p>
              </div>
            </section>
          </div>
        </section>

        {/* --- SECCIÓN 2: PRODUCTS --- */}
        <section id="products" className="hero-section alt-bg">
          <div className="hero-content">
            <h1 className="hero-title">{t("heroPage.productsTitle")}</h1>
            <p className="hero-subtitle">
              {t("heroPage.productsSubtitle")}
            </p>
            <section className="features-grid">
              <div className="feature-card2">
                <div className="mac-header">
                  <div className="mac-dots">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                  </div>
                </div>
                <div className="feature-card-body">
                  <PackageIcon size={32} className="feature-icon" />
                  <h3 className="card-title">{t("heroPage.productsList.assemblerTitle")}</h3>
                  <p className="card-description">
                    {t("heroPage.productsList.assemblerDesc")}
                  </p>
                </div>
              </div>
              <div className="feature-card2">
                <div className="mac-header">
                  <div className="mac-dots">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                  </div>
                </div>
                <div className="feature-card-body">
                  <PackageIcon size={32} className="feature-icon" />
                  <h3 className="card-title">{t("heroPage.productsList.plannerTitle")}</h3>
                  <p className="card-description">
                    {t("heroPage.productsList.plannerDesc")}
                  </p>
                </div>
              </div>
              <div className="feature-card2">
                <div className="mac-header">
                  <div className="mac-dots">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                  </div>
                </div>
                <div className="feature-card-body">
                  <PackageIcon size={32} className="feature-icon" />
                  <h3 className="card-title">{t("heroPage.productsList.hubTitle")}</h3>
                  <p className="card-description">
                    {t("heroPage.productsList.hubDesc")}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* --- SECCIÓN 3: SOLUTIONS --- */}
        <section id="solutions" className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">{t("heroPage.solutionsTitle")}</h1>
            <p className="hero-subtitle">
              {t("heroPage.solutionsSubtitle")}
            </p>
            <section className="features-grid">
              <div className="feature-card2">
                <div className="mac-header">
                  <div className="mac-dots">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                  </div>
                </div>
                <div className="feature-card-body">
                  <TargetIcon size={32} className="feature-icon" />
                  <h3 className="card-title">{t("heroPage.solutions.tech")}</h3>
                  <p className="card-description">
                    {t("heroPage.solutionsDesc.tech")}
                  </p>
                </div>
              </div>
              <div className="feature-card2">
                <div className="mac-header">
                  <div className="mac-dots">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                  </div>
                </div>
                <div className="feature-card-body">
                  <TargetIcon size={32} className="feature-icon" />
                  <h3 className="card-title">{t("heroPage.solutions.creative")}</h3>
                  <p className="card-description">
                    {t("heroPage.solutionsDesc.creative")}
                  </p>
                </div>
              </div>
              <div className="feature-card2">
                <div className="mac-header">
                  <div className="mac-dots">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                  </div>
                </div>
                <div className="feature-card-body">
                  <TargetIcon size={32} className="feature-icon" />
                  <h3 className="card-title">{t("heroPage.solutions.enterprise")}</h3>
                  <p className="card-description">
                    {t("heroPage.solutionsDesc.enterprise")}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* --- SECCIÓN 4: RESOURCES --- */}
        <section id="resources" className="hero-section alt-bg">
          <div className="hero-content">
            <h1 className="hero-title">{t("heroPage.resourcesTitle")}</h1>
            <p className="hero-subtitle">
              {t("heroPage.resourcesSubtitle")}
            </p>
            <section className="features-grid">
              <div className="feature-card2">
                <div className="mac-header">
                  <div className="mac-dots">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                  </div>
                </div>
                <div className="feature-card-body">
                  <BookOpenIcon size={32} className="feature-icon" />
                  <h3 className="card-title">{t("heroPage.resourcesList.blogTitle")}</h3>
                  <p className="card-description">
                    {t("heroPage.resourcesList.blogDesc")}
                  </p>
                </div>
              </div>
              <div className="feature-card2">
                <div className="mac-header">
                  <div className="mac-dots">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                  </div>
                </div>
                <div className="feature-card-body">
                  <BookOpenIcon size={32} className="feature-icon" />
                  <h3 className="card-title">{t("heroPage.resourcesList.docsTitle")}</h3>
                  <p className="card-description">
                    {t("heroPage.resourcesList.docsDesc")}
                  </p>
                </div>
              </div>
              <div className="feature-card2">
                <div className="mac-header">
                  <div className="mac-dots">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                  </div>
                </div>
                <div className="feature-card-body">
                  <BookOpenIcon size={32} className="feature-icon" />
                  <h3 className="card-title">{t("heroPage.resourcesList.caseTitle")}</h3>
                  <p className="card-description">
                    {t("heroPage.resourcesList.caseDesc")}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* --- SECCIÓN 5: PRICING --- */}
        {/* --- SECCIÓN 5: PRICING (VERSIÓN FINAL) --- */}
        <section id="pricing" className="hero-section alt-bg">
          <div className="hero-content">
            <h1 className="hero-title">Simple, Transparent Pricing</h1>
            <p className="hero-subtitle">
              Choose the plan that's right for your team. No hidden fees.
            </p>
            <div className="pricing-grid">
              {/* --- CARD 1: Starter --- */}
              <div className="pricing-card">
                <div className="mac-header">
                  <div className="mac-dots">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                  </div>
                </div>
                <div className="pricing-body">
                  <h3 className="pricing-tier">Starter</h3>
                  <p className="pricing-price">
                    $0 <span>/ month</span>
                  </p>
                  <p className="pricing-description">
                    For individuals and small teams just getting started.
                  </p>
                  <ul className="pricing-features">
                    <li>
                      <CheckIcon size={16} className="capability-icon" /> Up to
                      5 users
                    </li>
                    <li>
                      <CheckIcon size={16} className="capability-icon" /> Basic
                      analytics
                    </li>
                    <li>
                      <CheckIcon size={16} className="capability-icon" />{" "}
                      Community support
                    </li>
                  </ul>
                  <a
                    href="/try-for-free"
                    className="btn btn-secondary pricing-btn"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* --- CARD 2: Pro --- */}
              <div className="pricing-card featured">
                <div className="mac-header">
                  <div className="mac-dots">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                  </div>
                  <div className="featured-badge">Most Popular</div>
                </div>
                <div className="pricing-body">
                  <h3 className="pricing-tier">Pro</h3>
                  <p className="pricing-price">
                    $20 <span>/ user / month</span>
                  </p>
                  <p className="pricing-description">
                    For growing teams that need advanced features.
                  </p>
                  <ul className="pricing-features">
                    <li>
                      <CheckIcon size={16} className="capability-icon" />{" "}
                      Unlimited users
                    </li>
                    <li>
                      <CheckIcon size={16} className="capability-icon" />{" "}
                      Advanced AI analytics
                    </li>
                    <li>
                      <CheckIcon size={16} className="capability-icon" />{" "}
                      Priority support
                    </li>
                    <li>
                      <CheckIcon size={16} className="capability-icon" /> API
                      access
                    </li>
                  </ul>
                  <a
                    href="/try-for-free"
                    className="btn btn-primary pricing-btn"
                  >
                    Try for Free
                  </a>
                </div>
              </div>

              {/* --- CARD 3: Enterprise --- */}
              <div className="pricing-card">
                <div className="mac-header">
                  <div className="mac-dots">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                  </div>
                </div>
                <div className="pricing-body">
                  <h3 className="pricing-tier">Enterprise</h3>
                  <p className="pricing-price">Custom</p>
                  <p className="pricing-description">
                    For large organizations with specific security and support
                    needs.
                  </p>
                  <ul className="pricing-features">
                    <li>
                      <CheckIcon size={16} className="capability-icon" /> All
                      Pro features
                    </li>
                    <li>
                      <CheckIcon size={16} className="capability-icon" />{" "}
                      Dedicated account manager
                    </li>
                    <li>
                      <CheckIcon size={16} className="capability-icon" /> SSO
                      and advanced security
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
