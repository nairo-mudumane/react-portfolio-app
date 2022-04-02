import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AppPages } from "../../database";

export const ImportantLinks = () => {
    return (
        <React.Fragment>
            <Typography variant="h5" className="heading" sx={{ mb: 2 }}>
                Important links
            </Typography>

            <Box component="nav">
                <Box className="menu" component="ul">
                    {AppPages.map((page) => (
                        <Box className="item" component="li" key={page.link}>
                            <NavLink to={page.link} className="link">
                                <Button color="inherit">{page.label}</Button>
                            </NavLink>
                        </Box>
                    ))}
                </Box>
            </Box>
        </React.Fragment>
    );
};
