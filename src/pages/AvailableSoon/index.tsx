import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../../hooks";
import { StyledAvailableSoon } from "./styles";

export function AvailableSoon() {
    const { isDark } = useTheme();

    return (
        <React.Fragment>
            <StyledAvailableSoon isDark={isDark}>
                <Box className="root-container">
                    <Box className="container">
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
                </Box>
            </StyledAvailableSoon>
        </React.Fragment>
    );
}
