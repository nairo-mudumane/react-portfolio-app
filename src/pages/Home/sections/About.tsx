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
                            <Typography variant="body1" className="text">
                                Cupidatat enim fugiat et esse enim commodo enim
                                amet est quis esse velit sunt. Nisi minim fugiat
                                fugiat fugiat excepteur est sit et duis. Cillum
                                qui ullamco cupidatat dolore sit enim aliquip
                                mollit reprehenderit in. Do velit est culpa
                                veniam officia dolor aliquip excepteur ullamco
                                minim ad anim voluptate elit. Proident
                                exercitation reprehenderit occaecat nulla fugiat
                                aliqua sunt ea cupidatat eu. Mollit aliquip
                                nostrud adipisicing duis nisi laboris ad sit
                                veniam. Reprehenderit veniam reprehenderit
                                excepteur exercitation culpa aute do.
                            </Typography>

                            <Box className="actions">
                                <NavLink to="/works" className="link">
                                    <Button variant="contained" className="btn">
                                        My Works
                                    </Button>
                                </NavLink>

                                <NavLink to="/about" className="link">
                                    <Button
                                        variant="outlined"
                                        className="btn outlined"
                                    >
                                        Read More
                                    </Button>
                                </NavLink>
                            </Box>
                        </Box>

                        <Box className="image">
                            <img
                                src={photoSrc}
                                srcSet={photoSrc}
                                alt="Nairo Mudumane's photo"
                            />
                        </Box>
                    </Box>
                </StyledAbout>
            </Section>
        </Container>
    );
};
