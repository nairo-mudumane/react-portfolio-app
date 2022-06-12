import React from "react";
import { ThemeSwitcher } from "./components/";
import { GlobalStyles } from "./global/Styles";
import { AppRoutes } from "./routes";

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <ThemeSwitcher />
            <AppRoutes />
        </React.Fragment>
    );
}
