import { Box, Container } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import { Section, Service, Title } from "../../../components";
import { MY_SERVICES } from "../../../database";
import { useTheme } from "../../../hooks";
import { StyledServices } from "../styles";

export const Services = () => {
    const { isDark } = useTheme();

    return (
        <Container>
            <Section>
                <StyledServices isDark={isDark}>
                    <ScrollAnimation
                        animateOnce
                        duration={0.8}
                        animateIn="animate__fadeIn"
                    >
                        <Title text="My Services" />
                    </ScrollAnimation>

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
                </StyledServices>
            </Section>
        </Container>
    );
};
