import React from "react";
import { useTheme } from "../../hooks";
import { About, Hero, Projects, Services } from "./sections";
import { GlobalHomeStyles, StyledHome } from "./styles";

export const Home = () => {
  const { isDark } = useTheme();

  return (
    <React.Fragment>
      <GlobalHomeStyles isDark={isDark} />

      <StyledHome isDark={isDark}>
        <Hero />
        <Services />
        <About />
        <Projects />
      </StyledHome>
    </React.Fragment>
  );
};
