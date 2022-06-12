import { Box, IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { StyledThemeSwitcher } from "./styles";
import { useTheme } from "../../hooks";

export function ThemeSwitcher() {
    const { currentTheme, changeTheme } = useTheme();

    function toggleTheme() {
        if (currentTheme === "Dark") {
            changeTheme!("Light");
        }
        if (currentTheme === "Light") {
            changeTheme!("Dark");
        }
    }

    return (
        <StyledThemeSwitcher>
            <Box className="container">
                <IconButton onClick={toggleTheme}>
                    {currentTheme === "Dark" && <DarkMode />}
                    {currentTheme === "Light" && <LightMode />}
                </IconButton>
            </Box>
        </StyledThemeSwitcher>
    );
}
