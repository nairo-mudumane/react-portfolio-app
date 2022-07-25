import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../hooks";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { PAGES } from "./config";
import { StyledHeader } from "./styles";

export function Header() {
    const { isDark } = useTheme();
    return (
        <StyledHeader isDark={isDark}>
            <ThemeSwitcher />
            <Box className="header" component="header">
                <Box component="nav">
                    <Box component="ul" className="ul">
                        {PAGES.map((page) => (
                            <Box key={page.link} component="li" className="li">
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
    );
}
