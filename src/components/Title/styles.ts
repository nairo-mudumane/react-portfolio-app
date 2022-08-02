import styled from "styled-components";
import { globalColors } from "../../global/Colors";
import { IStyledTitle } from "./types";

export const StyledTitle = styled.div<IStyledTitle>`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;

    .icon {
        margin-right: 0.5rem;
    }

    .title {
        font-size: 2.5em;
        font-weight: bold;
        color: ${(props) =>
            props.isDark ? globalColors.white1 : globalColors.blue1};

        ${(props) => {
            if (!props.noMargin) {
                return `margin-bottom: 1rem`;
            }
        }};
    }
`;
