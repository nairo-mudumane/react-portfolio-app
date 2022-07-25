import React from "react";
import { Header } from "./components/";
import { GlobalStyles } from "./global/Styles";
import { useTheme } from "./hooks";
import { AppRoutes } from "./routes";

export default function App() {
    const { isDark } = useTheme();
    return (
        <React.Fragment>
            <GlobalStyles isDark={isDark} />
            <Header />
            <AppRoutes />
        </React.Fragment>
    );
}
