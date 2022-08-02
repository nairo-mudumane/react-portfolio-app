import styled from "styled-components";
import { globalColors } from "../../global/Colors";
import { ICurrentTheme } from "../../types";

export const StyledThemeSwitcher = styled.div<ICurrentTheme>`
    .btn {
        color: ${(props) =>
            props.isDark ? globalColors.white1 : globalColors.black1};
    }
`;
