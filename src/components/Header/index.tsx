import React from "react";
import { HeaderStyles } from "./styles";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
    return (
        <HeaderStyles>
            <div className="mobile-menu-icon">
                <IconButton aria-label="toggle menu btn" color="inherit">
                    <MenuIcon color="inherit" />
                </IconButton>
            </div>
        </HeaderStyles>
    );
}
