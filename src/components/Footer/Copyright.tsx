import React from "react";
import { Container, Typography } from "@mui/material";
import { CopyrightStyles } from "./styles";

export const Copyright = () => {
    return (
        <section>
            <CopyrightStyles>
                <Container>
                    <Typography variant="body1">
                        &copy; Naíro Mudumane - 2021.
                    </Typography>
                </Container>
            </CopyrightStyles>
        </section>
    );
};
