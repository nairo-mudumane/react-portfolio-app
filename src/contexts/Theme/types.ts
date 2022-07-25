export interface IThemeContext {
    currentTheme: "Dark" | "Light";
    isDark: boolean;
    changeTheme?: (newTheme: "Dark" | "Light") => void;
}

export interface ILocalThemeProps
    extends Omit<IThemeContext, "isDark" | "changeTheme"> {}
