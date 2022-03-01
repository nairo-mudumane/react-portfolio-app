import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./global";
import { UnderMaintence } from "./pages";

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<UnderMaintence />} />
                <Route path="/*" element={<UnderMaintence />} />
            </Routes>
        </>
    );
};
