export interface IPageTheme {
    currentTheme: "Dark" | "Light";
}

export interface IThemeContext extends IPageTheme {
    isDark: boolean;
    changeTheme: (newTheme: "Dark" | "Light") => void;
}

export interface ILocalThemeProps {
    theme: "Dark" | "Light";
}
