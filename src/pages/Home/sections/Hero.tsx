import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { useTheme } from "../../../hooks";
import { StyledHero } from "../styles";

import bannerSrc from "../../../assets/images/nairo-mudumane.jpg";

export const Hero = () => {
    const { isDark } = useTheme();

    return (
        <Container>
            <StyledHero isDark={isDark}>
                <Box className="content">
                    <Box className="hero">
                        <Typography variant="body2" component="p">
                            Hey, I'm
                        </Typography>

                        <Typography
                            variant="h1"
                            component="h1"
                            className="title text"
                        >
                            Nairo Mudumane
                        </Typography>

                        <Typography variant="h4" className="subtitle text">
                            Thanks for visiting my portfolio.
                        </Typography>
                        <Typography variant="body1" className="text">
                            Ad mollit proident ea occaecat excepteur ad pariatur
                            minim. Lorem culpa enim deserunt consectetur. Enim
                            ex eiusmod ipsum incididunt reprehenderit quis
                            tempor qui id est.
                        </Typography>

                        <Box className="social-media">
                            <Button
                                href="https://github.com/nairo-mudumane"
                                target="_blank"
                                className="link-item"
                            >
                                <GitHub />
                            </Button>

                            <Button
                                href="https://www.linkedin.com/in/nairo-mudumane"
                                target="_blank"
                                className="link-item"
                            >
                                <LinkedIn />
                            </Button>

                            <Button
                                href="https://www.facebook.com/nayro.mudumane/"
                                target="_blank"
                                className="link-item"
                            >
                                <Facebook />
                            </Button>
                        </Box>
                    </Box>

                    <Box className="image">
                        <img
                            src={bannerSrc}
                            srcSet={bannerSrc}
                            alt="banner image"
                        />
                    </Box>
                </Box>
            </StyledHero>
        </Container>
    );
};
