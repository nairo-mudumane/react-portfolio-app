import React from "react";
import { Home, Info, MenuOpen } from "@mui/icons-material";
import {
    Box,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Tooltip,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Container } from "../Container";
import { Text, Title } from "../Typography";
import { StyledPaperProps, StyledTabletOrMobile } from "./styles";
import { IHeaderProps, IPagesLinks } from "./types";
import { MOBILE_MENU_PROPS } from "./config";

export function TabletOrMobile(props: IHeaderProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);

    function openMenu(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    function closeMenu() {
        setAnchorEl(null);
    }

    return (
        <Container>
            <StyledTabletOrMobile>
                <IconButton
                    onClick={openMenu}
                    aria-controls={isMenuOpen ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={isMenuOpen ? "true" : undefined}
                >
                    <MenuOpen className="menu-icon" />
                </IconButton>

                <Menu
                    open={isMenuOpen}
                    anchorEl={anchorEl}
                    onClick={closeMenu}
                    onClose={closeMenu}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            ...StyledPaperProps,
                        },
                    }}
                    transformOrigin={{
                        horizontal: "right",
                        vertical: "top",
                    }}
                    anchorOrigin={{
                        horizontal: "right",
                        vertical: "bottom",
                    }}
                >
                    <NavLink to="/" className="link">
                        <MenuItem style={StyledPaperProps.MenuItem}>
                            <ListItemIcon className="link icon">
                                <Home fontSize="small" color="inherit" />
                            </ListItemIcon>

                            <Text className="link">Home</Text>
                        </MenuItem>
                    </NavLink>

                    <NavLink to="/about" className="link">
                        <MenuItem style={StyledPaperProps.MenuItem}>
                            <ListItemIcon className="link icon">
                                <Info fontSize="small" color="inherit" />
                            </ListItemIcon>

                            <Text className="link">About</Text>
                        </MenuItem>
                    </NavLink>
                </Menu>
            </StyledTabletOrMobile>
        </Container>
    );
}
