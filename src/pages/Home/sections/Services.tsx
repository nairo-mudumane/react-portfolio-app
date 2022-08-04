import { Box, Container } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
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
                        {MY_SERVICES.map((service, index) => (
                            <Box className="item" key={service.uid}>
                                <ScrollAnimation
                                    animateOnce
                                    duration={index + 0.3}
                                    animateIn="animate__zoomIn"
                                >
                                    <Service service={service} />
                                </ScrollAnimation>
                            </Box>
                        ))}
                    </Box>
                </Section>
            </StyledServices>
        </Container>
    );
}
