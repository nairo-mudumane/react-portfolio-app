import { Box, Container, Typography } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import { CardProject, CardWork, Section, Title } from "../../../components";
import { useTheme } from "../../../hooks";
import { StyledWorks } from "../styles";

export function Works() {
    const { isDark } = useTheme();

    return (
        <Container>
            <Section>
                <StyledWorks isDark={isDark}>
                    <ScrollAnimation
                        animateOnce
                        duration={0.8}
                        animateIn="animate__fadeIn"
                    >
                        <Title text="Some Recent Works" />
                    </ScrollAnimation>

                    <Box className="section-description">
                        <Typography variant="body2" className="text-muted">
                            Fugiat aliqua est exercitation ad adipisicing
                            reprehenderit minim do sint ex occaecat.
                        </Typography>
                    </Box>

                    <Box className="works-list">
                        <CardProject />
                    </Box>
                </StyledWorks>
            </Section>
        </Container>
    );
}
