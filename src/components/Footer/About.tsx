import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
    BubbleChartOutlined,
    GitHub,
    Instagram,
    LinkedIn,
} from "@mui/icons-material";

export const About = () => {
    return (
        <React.Fragment>
            <Typography variant="h3" className="heading about" sx={{ mb: 2 }}>
                Naíro Mudumane
            </Typography>

            <Typography
                variant="body1"
                className="text"
                sx={{ textAlign: "justify" }}
            >
                A front-end developer from Mozambique, Maputo. I've always
                created websites with unique designs and unique performance.
            </Typography>
            <Typography
                variant="body1"
                className="text"
                sx={{ textAlign: "justify" }}
            >
                Always concerned about the user experience.
            </Typography>

            <Box className="social-media">
                <a
                    href="https://www.linkedin.com/in/nairo-mudumane/"
                    target="_blank"
                    className="link"
                >
                    <IconButton color="inherit">
                        <LinkedIn color="inherit" />
                    </IconButton>
                </a>

                <a
                    href="https://github.com/nairo-mudumane"
                    target="_blank"
                    className="link"
                >
                    <IconButton color="inherit">
                        <GitHub color="inherit" />
                    </IconButton>
                </a>

                <a
                    href="https://www.instagram.com/nairo_mudumane/"
                    target="_blank"
                    className="link"
                >
                    <IconButton color="inherit">
                        <Instagram color="inherit" />
                    </IconButton>
                </a>
            </Box>
        </React.Fragment>
    );
};
