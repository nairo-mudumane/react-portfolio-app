import React from "react";
import { Box, Button, Card, IconButton, Menu, Modal } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../hooks";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { PAGES } from "./config";
import { StyledHeader } from "./styles";
import { MenuOutlined } from "@mui/icons-material";

export function Header() {
    const { isDark } = useTheme();

    const [isModalMenuMobileOpen, setIsModalMenuMobileOpen] =
        React.useState(false);

    function toggleModalMobile() {
        setIsModalMenuMobileOpen(!isModalMenuMobileOpen);
    }

    return (
        <React.Fragment>
            <StyledHeader isDark={isDark}>
                <ThemeSwitcher />
                <Box className="header" component="header">
                    <Box component="nav">
                        <IconButton
                            onClick={toggleModalMobile}
                            className="btn mobile"
                        >
                            <MenuOutlined />
                        </IconButton>

                        {isModalMenuMobileOpen && (
                            <Box
                                component="ul"
                                className="ul mobile"
                                onBlur={toggleModalMobile}
                            >
                                {PAGES.map((page, index) => (
                                    <Box
                                        key={page.link}
                                        component="li"
                                        className="li mobile"
                                    >
                                        <NavLink
                                            to={page.link}
                                            onClick={toggleModalMobile}
                                            className="link mobile"
                                        >
                                            <Button
                                                variant="text"
                                                color="inherit"
                                                className="btn"
                                            >
                                                {page.label}
                                            </Button>
                                        </NavLink>
                                    </Box>
                                ))}
                            </Box>
                        )}

                        <Box component="ul" className="ul desktop">
                            {PAGES.map((page) => (
                                <Box
                                    key={page.link}
                                    component="li"
                                    className="li"
                                >
                                    <NavLink to={page.link} className="link">
                                        <Button
                                            variant="text"
                                            color="inherit"
                                            className="btn"
                                        >
                                            {page.label}
                                        </Button>
                                    </NavLink>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </StyledHeader>
        </React.Fragment>
    );
}
