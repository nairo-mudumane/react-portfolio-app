import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components";
import { GlobalStyles } from "./global";
import { Home } from "./pages";

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route caseSensitive path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
};
