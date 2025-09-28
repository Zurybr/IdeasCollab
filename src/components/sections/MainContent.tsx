import React from "react";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";
import { ArrowDown } from "../ui/ArrowDown";
import { Container } from "../ui/Container";
import { useI18n } from "../../stores/i18n";
import "./MainContent.css";

export interface MainContentProps extends React.HTMLAttributes<HTMLElement> {
  onGetStarted?: () => void;
}

export const MainContent = React.forwardRef<HTMLElement, MainContentProps>(
  ({ className = "", onGetStarted, ...props }, ref) => {
    const classes = ["main-content", className].filter(Boolean).join(" ");
    const { t } = useI18n();

    return (
      <section ref={ref} className={classes} {...props}>
        <Container center size="md">
          <Text
            as="h1"
            size="6xl"
            weight="bold"
            align="center"
            className="main-content__title"
          >
            {t("landing.main.title")}
          </Text>

          <Text size="lg" align="center" className="main-content__description">
            {t("landing.main.description")}
          </Text>

          <div className="main-content__cta">
            <ArrowDown size={32} />
            <Button variant="primary" size="lg" onClick={onGetStarted}>
              {t("landing.main.cta")}
            </Button>
          </div>
        </Container>
      </section>
    );
  }
);

MainContent.displayName = "MainContent";
