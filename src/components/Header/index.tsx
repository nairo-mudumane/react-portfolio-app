import React from "react";
import { HeaderStyles } from "./styles";
import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { AppPages } from "../../database";
import { useMediaQuery } from "react-responsive";
import { DesktopHeader } from "./DesktopHeader";
import { pages } from "./config";
import { TabletOrMobile } from "./TabletOrMobile";

export default function Header() {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
    const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

    return (
        <HeaderStyles>
            {isTabletOrMobile && <TabletOrMobile />}
            {isDesktopOrLaptop && <DesktopHeader pages={pages} />}
        </HeaderStyles>
    );
}
