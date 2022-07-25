import { ThemeSwitcher } from "../ThemeSwitcher";
import { StyledHeader } from "./styles";

export function Header() {
    return (
        <StyledHeader>
            <ThemeSwitcher />
            <header>
                <p>header</p>
            </header>
        </StyledHeader>
    );
}
