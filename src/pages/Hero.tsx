import { NavHero } from "../components/NavHero";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-page">
      <NavHero />

      <main className="hero-content">
        <section className="hero-section">
          <div className="hero-section__container">
            <h1>AI-Powered Team Organization</h1>
            <p className="hero-subtitle">
              Transform how you manage teams with our advanced AI technology.
              Automatically organize, optimize, and enhance team collaboration
              with intelligent insights.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary btn-lg">Try it Free</button>
              <button className="btn btn-outline btn-lg">Watch Demo</button>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <h3>Smart Team Assignment</h3>
              <p>
                Our AI analyzes skills, availability, and project requirements
                to create optimal team compositions automatically.
              </p>
            </div>
            <div className="feature-card">
              <h3>Workload Balancing</h3>
              <p>
                Ensure fair distribution of tasks and prevent burnout with our
                intelligent workload management system.
              </p>
            </div>
            <div className="feature-card">
              <h3>Performance Analytics</h3>
              <p>
                Get real-time insights into team performance and identify areas
                for improvement with AI-driven analytics.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
