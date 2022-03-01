import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { LinkedIn, GitHub, Facebook } from "@mui/icons-material";
import { UnderMaintenceStyles } from "./styles";
import imageSrc from "../../assets/images/about-page-img.png";

export default function UnderMaintence() {
    return (
        <UnderMaintenceStyles>
            <Container>
                <div className="content">
                    <div className="hero">
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

                        <div className="social-media">
                            <Typography variant="body1" className="text">
                                Please follow me on my social media bellow:
                            </Typography>

                            <div className="links">
                                <Button
                                    href="https://github.com/nairo-mudumane"
                                    target="_blank"
                                >
                                    <GitHub />
                                </Button>

                                <Button
                                    href="https://www.linkedin.com/in/nairo-mudumane"
                                    target="_blank"
                                >
                                    <LinkedIn />
                                </Button>

                                <Button
                                    href="https://www.facebook.com/nayro.mudumane/"
                                    target="_blank"
                                >
                                    <Facebook />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="image">
                        <img src={imageSrc} alt="" />
                    </div>
                </div>
            </Container>
        </UnderMaintenceStyles>
    );
}
