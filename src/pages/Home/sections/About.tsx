import { Box, Container } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import { Section, Title } from "../../../components";
import { useTheme } from "../../../hooks";
import { StyledAbout } from "../styles";

import photoSrc from "../../../assets/images/my_photo.jpg";

export const About = () => {
    const { isDark } = useTheme();

    return (
        <Container>
            <StyledAbout isDark={isDark}>
                <Section>
                    <ScrollAnimation
                        animateOnce
                        duration={0.8}
                        animateIn="animate__fadeIn"
                    >
                        <Title text="About Me" />
                    </ScrollAnimation>

                    <Box className="content">
                        <Box className="image">
                            <img
                                src={photoSrc}
                                srcSet={photoSrc}
                                alt="Nairo Mudumane's photo"
                            />
                        </Box>
                    </Box>
                </Section>
            </StyledAbout>
        </Container>
    );
};
