import React from "react";
import { ThemeContext } from "../contexts";

export function useTheme() {
    const context = React.useContext(ThemeContext);
    return context;
}
