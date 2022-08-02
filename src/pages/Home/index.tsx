import { Section } from "../../components";
import { useTheme } from "../../hooks";
import { Hero } from "./sections";
import { StyledHome } from "./styles";

export function Home() {
    const { isDark } = useTheme();

    return (
        <StyledHome isDark={isDark}>
            <Hero />

            <Section styles={{ sizingY: 6 }}>
                <p>ksljd</p>
            </Section>
        </StyledHome>
    );
}
