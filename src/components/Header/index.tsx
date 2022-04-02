import React from "react";
import { HeaderStyles } from "./styles";
import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { AppPages } from "../../database";

export default function Header() {
    return (
        <HeaderStyles>
            <Box className="mobile-menu-icon">
                <IconButton aria-label="toggle menu btn" color="inherit">
                    <MenuIcon color="inherit" />
                </IconButton>
            </Box>

            <Box className="header" component="header">
                <Box component="nav">
                    <Box className="menu" component="ul">
                        {AppPages.map((page) => (
                            <Box
                                className="item"
                                component="li"
                                key={page.link}
                            >
                                <NavLink to={page.link} className="link">
                                    <Button color="inherit">
                                        {page.label}
                                    </Button>
                                </NavLink>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </HeaderStyles>
    );
}
