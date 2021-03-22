import React from "react";
import {
  Hero,
  HeroTextWrapper,
  HeroText,
  AboutPageWrapper,
} from "./About.styles";

const About = () => (
  <AboutPageWrapper>
    <Hero>
      <HeroTextWrapper>
        <HeroText>
          This is a micro-frontend app using Angular and React microservices.
          The bridge between Angular and React is the{" "}
          <a href="https://single-spa.js.org">single-spa</a> router.
        </HeroText>
      </HeroTextWrapper>
    </Hero>
  </AboutPageWrapper>
);

export default About;
