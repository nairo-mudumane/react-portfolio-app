import React from "react";
import { IChildren } from "../../types";
import { IThemeContext } from "./types";

const initialState: IThemeContext = {
    currentTheme: "Dark",
};

export const ThemeContext = React.createContext(initialState as IThemeContext);

export function ThemeProvider(props: IChildren) {
    const [theme, setTheme] = React.useState(initialState.currentTheme);

    function changeTheme(newTheme: "Dark" | "Light") {
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ currentTheme: theme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}
