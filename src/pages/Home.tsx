import { Container } from "../components/ui/Container";
import { Text } from "../components/ui/Text";
import { Button } from "../components/ui/Button";
import "../styles/home.css";

//=============== HOME PAGE COMPONENT ===============//
function Home() {
  const handleClearOnboarding = () => {
    localStorage.removeItem("userOnboarded");
    localStorage.removeItem("onboardingDate");
    window.location.reload();
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container center size="lg">
          <div className="hero-content">
            <Text
              as="h1"
              size="6xl"
              weight="bold"
              align="center"
              className="hero-title"
            >
              Welcome to IdeaCollab
            </Text>

            <Text size="xl" align="center" className="hero-subtitle">
              Transform your ideas into reality with our powerful collaboration
              platform. Connect, create, and build without limits.
            </Text>

            <div className="hero-actions">
              <Button variant="primary" size="lg" className="action-button">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="button-icon"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Start New Project
              </Button>

              <Button variant="outline" size="lg" className="action-button">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="button-icon"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
                View Projects
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <Container size="lg">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
              <Text as="h3" size="2xl" weight="bold" className="stat-number">
                12
              </Text>
              <Text size="sm" className="stat-label">
                Active Projects
              </Text>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <Text as="h3" size="2xl" weight="bold" className="stat-number">
                8
              </Text>
              <Text size="sm" className="stat-label">
                Team Members
              </Text>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                </svg>
              </div>
              <Text as="h3" size="2xl" weight="bold" className="stat-number">
                47
              </Text>
              <Text size="sm" className="stat-label">
                Completed Tasks
              </Text>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <Text as="h3" size="2xl" weight="bold" className="stat-number">
                3
              </Text>
              <Text size="sm" className="stat-label">
                Achievements
              </Text>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Actions */}
      <section className="actions-section">
        <Container size="lg">
          <Text
            as="h2"
            size="3xl"
            weight="bold"
            align="center"
            className="section-title"
          >
            Quick Actions
          </Text>

          <div className="actions-grid">
            <div className="action-card">
              <div className="action-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </div>
              <Text as="h3" size="lg" weight="semibold">
                Create Project
              </Text>
              <Text size="sm" className="action-description">
                Start a new collaborative project
              </Text>
            </div>

            <div className="action-card">
              <div className="action-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <Text as="h3" size="lg" weight="semibold">
                Invite Team
              </Text>
              <Text size="sm" className="action-description">
                Add collaborators to your workspace
              </Text>
            </div>

            <div className="action-card">
              <div className="action-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z" />
                </svg>
              </div>
              <Text as="h3" size="lg" weight="semibold">
                Resources
              </Text>
              <Text size="sm" className="action-description">
                Access tools and documentation
              </Text>
            </div>
          </div>

          {/* Debug Button */}
          <div className="debug-section">
            <Button variant="outline" size="sm" onClick={handleClearOnboarding}>
              Reset Onboarding (Debug)
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
