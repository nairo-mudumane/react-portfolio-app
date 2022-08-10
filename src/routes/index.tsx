import { Routes, Route } from "react-router-dom";
import { AvailableSoon, Home } from "../pages";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<AvailableSoon />} />
        </Routes>
    );
}
