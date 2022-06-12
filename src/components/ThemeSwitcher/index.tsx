import { Box, IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { StyledThemeSwitcher } from "./styles";
import { useTheme } from "../../hooks";

export function ThemeSwitcher() {
    const { currentTheme, isDark, changeTheme } = useTheme();

    function toggleTheme() {
        if (currentTheme === "Dark") {
            changeTheme!("Light");
        }
        if (currentTheme === "Light") {
            changeTheme!("Dark");
        }
    }

    return (
        <StyledThemeSwitcher isDark={isDark}>
            <IconButton onClick={toggleTheme} className="btn">
                {isDark ? <DarkMode /> : <LightMode />}
            </IconButton>
        </StyledThemeSwitcher>
    );
}
