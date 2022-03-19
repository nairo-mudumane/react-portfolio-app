import React from "react";
import { Typography } from "@mui/material";

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
        </React.Fragment>
    );
};
