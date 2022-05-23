import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./global";
import { Home } from "./pages";

export function App() {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Routes>
                <Route caseSensitive path="/" element={<Home />} />
            </Routes>
        </React.Fragment>
    );
}
