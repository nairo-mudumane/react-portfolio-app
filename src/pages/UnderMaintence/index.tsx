import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { LinkedIn, GitHub, Facebook } from "@mui/icons-material";
import { UnderMaintenceStyles } from "./styles";
import imageSrc from "../../assets/images/about-page-img.png";

export default function UnderMaintence() {
    return (
        <UnderMaintenceStyles>
            <Container>
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
                            Unfortunately, this portfolio is in the maintenance
                            process. Sorry for the inconvenience and I guarantee
                            that I will be making the new version available as
                            soon as I can.
                        </Typography>

                        <Box className="social-media">
                            <Typography variant="body1" className="text">
                                Please follow me on my social media bellow:
                            </Typography>

                            <Box className="links">
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
                    </Box>

                    <Box className="image">
                        <img
                            src="https://scontent.fmpm3-1.fna.fbcdn.net/v/t39.30808-6/269693196_2729651987335856_799489277980992897_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=gw3uYpLLftsAX_1Q6DT&_nc_ht=scontent.fmpm3-1.fna&oh=00_AT9Y-zalQbIi5AFvvG-nF2t-t9iWgv-x5jbq_LeC7qJq-g&oe=625C7FF4"
                            alt=""
                        />
                    </Box>
                </Box>
            </Container>
        </UnderMaintenceStyles>
    );
}
