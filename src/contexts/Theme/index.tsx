import React from "react";
import { IChildren } from "../../types";
import { IPageTheme, IThemeContext } from "./types";
import { getLocalTheme, setLocalTheme } from "./utils";

const prevState = getLocalTheme();
const initialState: IPageTheme = {
    currentTheme: prevState ? prevState : "Dark",
};

export const ThemeContext = React.createContext(initialState as IThemeContext);

export function ThemeProvider(props: IChildren) {
    const [currentTheme, setCurrentTheme] = React.useState(
        initialState.currentTheme
    );
    const [isDark, setIsDark] = React.useState<boolean>(
        prevState === "Dark" ? true : false
    );

    function changeTheme(newTheme: "Dark" | "Light") {
        setCurrentTheme(newTheme);
        setLocalTheme({ theme: newTheme });

        if (newTheme === "Dark") {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }

    return (
        <ThemeContext.Provider value={{ currentTheme, isDark, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}
