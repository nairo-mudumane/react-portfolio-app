import { Box, Container, Typography } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import { CardProject, Section, Title } from "../../../components";
import { MY_PROJECTS } from "../../../database";
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
                        <Title text="Some Top Works" />
                    </ScrollAnimation>

                    <Box className="section-description">
                        <Typography variant="body2" className="text-muted">
                            Fugiat aliqua est exercitation ad adipisicing
                            reprehenderit minim do sint ex occaecat.
                        </Typography>
                    </Box>

                    <Box className="works-list">
                        {MY_PROJECTS.map((project) => (
                            <Box key={project.uid} className="item">
                                <CardProject project={project} />
                            </Box>
                        ))}
                    </Box>
                </StyledWorks>
            </Section>
        </Container>
    );
}
