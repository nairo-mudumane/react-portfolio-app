import { useTheme } from "../../hooks";
import { StyledCardProject } from "./styles";
import { ICardProject } from "./types";

export function CardProject(props: ICardProject) {
    const { isDark } = useTheme();

    return (
        <StyledCardProject isDark={isDark}>
            <h2>{props.project.name}</h2>
        </StyledCardProject>
    );
}
