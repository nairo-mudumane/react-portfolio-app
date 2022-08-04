import { useTheme } from "../../hooks";
import { About, Hero, Services } from "./sections";
import { StyledHome } from "./styles";

export const Home = () => {
    const { isDark } = useTheme();

    return (
        <StyledHome isDark={isDark}>
            <Hero />
            <Services />
            <About />
        </StyledHome>
    );
};
