import styled from "styled-components";
import { globalColors } from "../../global/Colors";
import { ICurrentTheme } from "../../types";

export const StyledHeader = styled.div<ICurrentTheme>`
    &,
    .header,
    .nav {
        width: 100%;
    }

    .header {
        padding: 1rem 0.5rem;
    }

    .ul {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: center;
    }

    .li {
        margin: 0 0.5rem;
    }

    .link {
        color: ${(props) =>
            props.isDark ? globalColors.white2 : globalColors.black1};

        &.active,
        &:hover,
        &:focus {
            color: ${globalColors.blue1};
        }

        &.active .btn,
        &:hover .btn,
        &:focus .btn {
            border-bottom: 1px solid ${globalColors.blue1};
        }
    }

    .btn {
        border: 1px solid transparent;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
`;
