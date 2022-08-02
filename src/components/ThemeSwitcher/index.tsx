import { Box, IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { StyledThemeSwitcher } from "./styles";
import { useTheme } from "../../hooks";

export function ThemeSwitcher() {
    const { isDark, changeTheme } = useTheme();

    return (
        <StyledThemeSwitcher isDark={isDark}>
            {isDark ? (
                <IconButton
                    className="btn"
                    onClick={() => changeTheme("Light")}
                >
                    <LightMode />
                </IconButton>
            ) : (
                <IconButton className="btn" onClick={() => changeTheme("Dark")}>
                    <DarkMode />
                </IconButton>
            )}
        </StyledThemeSwitcher>
    );
}
