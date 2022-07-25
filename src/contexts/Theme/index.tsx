import React from "react";
import { IChildren } from "../../types";
import { IThemeContext } from "./types";
import { getLocalTheme, setLocalTheme } from "./utils";

const previousTheme = getLocalTheme();

console.log(previousTheme);

const initialState: IThemeContext = {
    currentTheme: "Dark",
    isDark: true,
};

export const ThemeContext = React.createContext(initialState as IThemeContext);

export function ThemeProvider(props: IChildren) {
    const [theme, setTheme] = React.useState(initialState.currentTheme);
    const [isDark, setIsDark] = React.useState(initialState.isDark);

    function changeTheme(newTheme: "Dark" | "Light") {
        setTheme(newTheme);
        setLocalTheme({ currentTheme: newTheme });
        setIsDark(!isDark);
    }

    return (
        <ThemeContext.Provider
            value={{ currentTheme: theme, isDark, changeTheme }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
}
