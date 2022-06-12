import styled from "styled-components";
import { globalColors } from "../../global/Colors";
import { ICurrentTheme } from "../../types";

export const StyledThemeSwitcher = styled.div<ICurrentTheme>`
    position: fixed;
    top: 1%;
    right: 1%;

    .btn {
        color: ${(props) =>
            props.isDark ? globalColors.white1 : globalColors.black1};
    }
`;
