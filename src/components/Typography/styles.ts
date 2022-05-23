import styled from "styled-components";
import { GlobalColors } from "../../global";
import { ITypographyStyle } from "./types";

export const StyledTypography = styled.div<ITypographyStyle>`
    width: max-content;

    & > .text {
        ${(props) => {
            if (props.textType === "muted") {
                return `opacity: 0.7`;
            }
        }}

        ${(props) => {
            if (props.textType === "title") {
                return `
                color: ${GlobalColors.gray1};
                font-size: 3em;
                `;
            }
        }}
    }
`;
