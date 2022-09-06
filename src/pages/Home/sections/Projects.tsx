import { Box, Container, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import ScrollAnimation from "react-animate-on-scroll";
import { CardProject, Section, Title } from "../../../components";
import { MY_PROJECTS } from "../../../database";
import { useTheme } from "../../../hooks";
import { StyledProjects } from "../styles";

export function Projects() {
  const { isDark } = useTheme();

  return (
    <Container>
      <Section>
        <StyledProjects isDark={isDark}>
          <ScrollAnimation
            animateOnce
            duration={0.8}
            animateIn="animate__fadeIn"
          >
            <Title text="Some Top Works" />
          </ScrollAnimation>

          <Masonry columns={2} spacing={2}>
            {MY_PROJECTS.slice(0, 5).map((project, index) => (
              <Box key={project.uid} className="item">
                <ScrollAnimation
                  animateOnce
                  duration={0.8}
                  animateIn={
                    index % 2 === 0
                      ? "animate__fadeInLeft"
                      : "animate__fadeInRight"
                  }
                >
                  <CardProject project={project} />
                </ScrollAnimation>
              </Box>
            ))}
          </Masonry>
        </StyledProjects>
      </Section>
    </Container>
  );
}
