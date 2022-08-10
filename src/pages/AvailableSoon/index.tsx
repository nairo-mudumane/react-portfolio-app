import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../../hooks";
import { StyledAvailableSoon } from "./styles";
import { PageContainer } from "../../components";

export function AvailableSoon() {
    const { isDark } = useTheme();

    return (
        <React.Fragment>
            <StyledAvailableSoon isDark={isDark}>
                <Box className="root-container">
                    <PageContainer>
                        <Box className="hero">
                            <Box className="box-title">
                                <Typography variant="h1" className="title main">
                                    Not found!
                                </Typography>
                            </Box>

                            <Box className="description">
                                <Typography variant="body1" className="text">
                                    This page does not exist or is still under
                                    development.
                                </Typography>
                            </Box>
                        </Box>
                    </PageContainer>
                </Box>
            </StyledAvailableSoon>
        </React.Fragment>
    );
}
