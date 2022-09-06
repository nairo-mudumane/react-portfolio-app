import { Box, Button, Container } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import { NavLink } from "react-router-dom";
import { Section, Title } from "../../../components";
import { useTheme } from "../../../hooks";
import { StyledContact } from "../styles";

export function Contact() {
  const { isDark } = useTheme();

  return (
    <Container>
      <Section>
        <StyledContact isDark={isDark}>
          <Box className="bg-section">
            <ScrollAnimation
              animateOnce
              duration={0.8}
              animateIn="animate__fadeInDown"
            >
              <Title text="Let me help you" />
            </ScrollAnimation>

            <ScrollAnimation
              animateOnce
              duration={1}
              animateIn="animate__fadeInUp"
            >
              <NavLink to="/contacts" className="link">
                <Button variant="contained" className="btn">
                  Contact me
                </Button>
              </NavLink>
            </ScrollAnimation>
          </Box>
        </StyledContact>
      </Section>
    </Container>
  );
}
