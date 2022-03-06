import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./global";
import { Home } from "./pages";

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
};
