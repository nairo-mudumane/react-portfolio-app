import { useTheme } from "../../hooks";
import { Hero } from "./sections";
import { StyledHome } from "./styles";

export function Home() {
    const { isDark } = useTheme();

    return (
        <StyledHome isDark={isDark}>
            <Hero />
        </StyledHome>
    );
}
