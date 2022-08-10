import { ILocalThemeProps } from "./types";

export function setLocalTheme(config: ILocalThemeProps): void {
    return window.localStorage.setItem("theme", config.theme);
}

export function getLocalTheme(): "Dark" | "Light" | null {
    const theme = window.localStorage.getItem("theme");
    if (theme !== null) {
        return theme as "Dark" | "Light";
    }
    return null;
}
