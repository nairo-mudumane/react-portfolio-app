import React from "react";
import { useTheme } from "../../hooks";
import { About, Hero, Services, Works } from "./sections";
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
                <Works />
            </StyledHome>
        </React.Fragment>
    );
};
