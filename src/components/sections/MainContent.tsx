import React from "react";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";
import { ArrowDown } from "../ui/ArrowDown";
import { Container } from "../ui/Container";
import "./MainContent.css";

export type MainContentProps = React.HTMLAttributes<HTMLElement>;

export const MainContent = React.forwardRef<HTMLElement, MainContentProps>(
  ({ className = "", ...props }, ref) => {
    const classes = ["main-content", className].filter(Boolean).join(" ");

    return (
      <section ref={ref} className={classes} {...props}>
        <Container center size="md">
          <Text
            as="h2"
            size="5xl"
            weight="bold"
            align="center"
            className="main-content__title"
          >
            Your project starts here.
          </Text>

          <Text size="xl" align="center" className="main-content__description">
            Once an idea takes shape, the next step is execution. Our platform
            connects you with the tools and talent needed to transform a concept
            into a tangible reality. Explore, collaborate, and build without
            limits.
          </Text>

          <div className="main-content__cta">
            <ArrowDown />
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                alert("Get Started clicked!");
              }}
            >
              Let's get started!
            </Button>
          </div>
        </Container>
      </section>
    );
  }
);

MainContent.displayName = "MainContent";
