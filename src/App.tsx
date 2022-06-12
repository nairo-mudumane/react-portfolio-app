import React from "react";
import { GlobalStyles } from "./global/Styles";
import { AppRoutes } from "./routes";

export default function App() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <AppRoutes />
        </React.Fragment>
    );
}
