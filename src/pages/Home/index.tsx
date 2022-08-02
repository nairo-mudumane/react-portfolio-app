import { useTheme } from "../../hooks";
import { Hero, Services } from "./sections";
import { StyledHome } from "./styles";

export function Home() {
    const { isDark } = useTheme();

    return (
        <StyledHome isDark={isDark}>
            <Hero />
            <Services />
        </StyledHome>
    );
}
