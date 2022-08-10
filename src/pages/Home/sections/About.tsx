import { Box, Button, Container, Typography } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import { Section, Title } from "../../../components";
import { useTheme } from "../../../hooks";
import { StyledAbout } from "../styles";

import photoSrc from "../../../assets/images/my_photo.jpg";
import { NavLink } from "react-router-dom";

export const About = () => {
    const { isDark } = useTheme();

    return (
        <Container>
            <Section>
                <StyledAbout isDark={isDark}>
                    <ScrollAnimation
                        animateOnce
                        duration={0.8}
                        animateIn="animate__fadeIn"
                    >
                        <Title text="About Me" />
                    </ScrollAnimation>

                    <Box className="content">
                        <Box className="description">
                            <ScrollAnimation
                                animateOnce
                                duration={0.8}
                                animateIn="animate__fadeIn"
                            >
                                <Typography variant="body1" className="text">
                                    I'm a fullstack web developer based in
                                    Mozambique with over 4 years of experience.
                                    I also have mobile development skills and a
                                    keen interest in cyber security.
                                </Typography>

                                <Typography variant="body1" className="text">
                                    I am very detail oriented, always attentive
                                    to the smallest errors in the code. work
                                    well under pressure and I have already
                                    noticed that I can produce quality code even
                                    working for short periods of time.
                                </Typography>

                                <Typography variant="body1" className="text">
                                    In the context of programming languages I
                                    currently work with JavaScript, PHP and a
                                    little bit of Python. I also have knowledge
                                    in technologies such as SQL, MySQL, React,
                                    Firebase, Next, WordPress, among others. I'm
                                    always looking for new challenges that allow
                                    me to use my programming skills to solve
                                    them.
                                </Typography>
                            </ScrollAnimation>

                            <Box className="actions">
                                <ScrollAnimation
                                    animateOnce
                                    duration={0.5}
                                    animateIn="animate__flipInX"
                                >
                                    <NavLink to="/works" className="link">
                                        <Button
                                            variant="contained"
                                            className="btn"
                                        >
                                            My Works
                                        </Button>
                                    </NavLink>
                                </ScrollAnimation>

                                <ScrollAnimation
                                    animateOnce
                                    duration={0.8}
                                    animateIn="animate__flipInX"
                                >
                                    <NavLink to="/about" className="link">
                                        <Button
                                            variant="outlined"
                                            className="btn outlined"
                                        >
                                            Read More
                                        </Button>
                                    </NavLink>
                                </ScrollAnimation>
                            </Box>
                        </Box>

                        <ScrollAnimation
                            animateOnce
                            duration={0.8}
                            animateIn="animate__fadeIn"
                        >
                            <Box className="image">
                                <img
                                    src={photoSrc}
                                    srcSet={photoSrc}
                                    alt="Nairo Mudumane's photo"
                                />
                            </Box>
                        </ScrollAnimation>
                    </Box>
                </StyledAbout>
            </Section>
        </Container>
    );
};
