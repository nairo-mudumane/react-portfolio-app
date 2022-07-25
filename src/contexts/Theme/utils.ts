import { ILocalThemeProps } from "./types";

export function setLocalTheme(config: ILocalThemeProps): void {
    if (config.currentTheme) {
        return window.localStorage.setItem("theme", config.currentTheme);
    }
    return;
}

export function getLocalTheme(): string | null {
    const str = window.localStorage.getItem("theme");
    if (str) {
        const json = JSON.parse(str);
        console.log(json);
        // return json.theme;
    }
    return null;
}
