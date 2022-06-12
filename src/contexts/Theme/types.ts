export interface IThemeContext {
    currentTheme: "Dark" | "Light";
    changeTheme?: (newTheme: "Dark" | "Light") => void;
}
