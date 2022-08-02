import { Box, Container } from "@mui/material";
import { Section, Service, Title } from "../../../components";
import { MY_SERVICES } from "../../../database";
import { useTheme } from "../../../hooks";
import { StyledServices } from "../styles";

export function Services() {
    const { isDark } = useTheme();

    return (
        <Container>
            <StyledServices isDark={isDark}>
                <Section>
                    <Title text="My Services" />

                    <Box className="list">
                        {MY_SERVICES.map((service) => (
                            <Box key={service.uid} className="item">
                                <Service service={service} />
                            </Box>
                        ))}
                    </Box>
                </Section>
            </StyledServices>
        </Container>
    );
}
