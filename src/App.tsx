import React from "react";
import { ThemeSwitcher } from "./components/";
import { GlobalStyles } from "./global/Styles";
import { useTheme } from "./hooks";
import { AppRoutes } from "./routes";

export default function App() {
    const { isDark } = useTheme();
    return (
        <React.Fragment>
            <GlobalStyles isDark={isDark} />
            <ThemeSwitcher />
            <AppRoutes />
        </React.Fragment>
    );
}
