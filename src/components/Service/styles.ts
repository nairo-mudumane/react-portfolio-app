import styled from "styled-components";
import { globalColors } from "../../global/Colors";
import { ICurrentTheme } from "../../types";

export const StyledService = styled.div<ICurrentTheme>`
    background-color: ${globalColors.gray1};
    border-radius: 3%;

    height: 260px;
    padding: 1rem;

    @media only screen and (max-width: 425px) {
        height: max-content;
    }
`;
