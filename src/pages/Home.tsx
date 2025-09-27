import { Container } from "../components/ui/Container";
import { Text } from "../components/ui/Text";
import { Button } from "../components/ui/Button";

//=============== HOME PAGE COMPONENT ===============//
function Home() {
  const handleClearOnboarding = () => {
    localStorage.removeItem("userOnboarded");
    localStorage.removeItem("onboardingDate");
    window.location.reload();
  };

  return (
    <div className="Home min-h-screen flex flex-col items-center justify-center gap-6">
      <Container center size="lg">
        <Text as="h1" size="4xl" weight="bold" align="center" className="mb-6">
          Welcome to IdeaCollab! 🎉
        </Text>

        <Text size="xl" align="center" className="mb-8 max-w-2xl">
          You've successfully completed the onboarding process. This is your
          dashboard where you can start building amazing projects.
        </Text>

        <div className="flex gap-4">
          <Button variant="primary" size="lg">
            Start New Project
          </Button>

          <Button variant="outline" size="lg" onClick={handleClearOnboarding}>
            Reset Onboarding
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Home;
