import { StyledSection } from "./styles";
import { ISectionProps } from "./types";

export function Section(props: ISectionProps) {
    return (
        <StyledSection styles={props.styles}>{props.children}</StyledSection>
    );
}
