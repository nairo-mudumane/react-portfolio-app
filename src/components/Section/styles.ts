import styled from "styled-components";
import { ISectionProps } from "./types";

export const StyledSection = styled.div<ISectionProps>`
    padding: 2.5rem 0;

    ${(props) => {
        if (props.styles && props.styles.sizing) {
            return `padding: ${props.styles.sizing}rem;`;
        }
    }};

    ${(props) => {
        if (props.styles && props.styles.sizingX) {
            return `padding: 0 ${props.styles.sizingX}rem;`;
        }
    }};

    ${(props) => {
        if (props.styles && props.styles.sizingY) {
            return `padding: ${props.styles.sizingY}rem 0;`;
        }
    }};
`;
