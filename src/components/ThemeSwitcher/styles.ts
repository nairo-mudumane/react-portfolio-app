import styled from "styled-components";
import { globalColors } from "../../global/Colors";
import { ICurrentTheme } from "../../types";

export const StyledThemeSwitcher = styled.div<ICurrentTheme>`
    position: fixed;
    top: 2%;
    right: 4%;

    .btn {
        color: ${(props) =>
            props.isDark ? globalColors.white1 : globalColors.black1};
    }
`;
