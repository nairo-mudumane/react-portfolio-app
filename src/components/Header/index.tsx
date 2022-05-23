import React from "react";
import { ActiveLinkStyles, HeaderStyles } from "./styles";
import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { AppPages } from "../../database";
import { useMediaQuery } from "react-responsive";
import { DesktopHeader } from "./DesktopHeader";
import { PAGES_LINKS } from "./config";
import { TabletOrMobile } from "./TabletOrMobile";

export default function Header() {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
    const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });

    return (
        <HeaderStyles>
            <ActiveLinkStyles />
            {isTabletOrMobile && <TabletOrMobile pages={PAGES_LINKS} />}
            {isDesktopOrLaptop && <DesktopHeader pages={PAGES_LINKS} />}
        </HeaderStyles>
    );
}
