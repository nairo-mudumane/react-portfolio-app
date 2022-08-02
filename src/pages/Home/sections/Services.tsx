import { Container } from "@mui/material";
import { Section, Title } from "../../../components";
import { useTheme } from "../../../hooks";
import { StyledServices } from "../styles";

export function Services() {
    const { isDark } = useTheme();

    return (
        <Container>
            <StyledServices isDark={isDark}>
                <Section>
                    <Title text="My Services" />
                </Section>
            </StyledServices>
        </Container>
    );
}
