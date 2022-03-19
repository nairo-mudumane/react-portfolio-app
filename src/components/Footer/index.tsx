import React from "react";
import { Container, Grid } from "@mui/material";
import { About } from "./About";
import { Copyright } from "./Copyright";
import { FooterStyles } from "./styles";
import { ImportantLinks } from "./ImportantLinks";
import Contacts from "./Contacts";

const Footer = () => {
    return (
        <FooterStyles>
            <section className="content">
                <Container className="container">
                    <Grid container>
                        <Grid sx={{ mb: 2, pl: 1, pr: 3, flex: "0 1 420px" }}>
                            <About />
                        </Grid>
                        <Grid sx={{ mb: 2, pl: 1, pr: 3, flex: "0 1 220px" }}>
                            <ImportantLinks />
                        </Grid>
                        <Grid sx={{ mb: 2, pl: 1, pr: 3, flex: "0 1 220px" }}>
                            <Contacts />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <Copyright />
        </FooterStyles>
    );
};

export default Footer;
