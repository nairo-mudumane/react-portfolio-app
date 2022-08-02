import styled, { createGlobalStyle } from "styled-components";
import { globalColors } from "../../global/Colors";
import { ICurrentTheme } from "../../types";

export const StyledHeader = styled.div<ICurrentTheme>`
    &,
    .header,
    .nav {
        width: 100%;
    }

    .MuiBackdrop-root {
        background-color: transparent;
    }

    .header {
        padding: 2% 4%;
    }

    .ul {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .ul.mobile {
        background-color: ${globalColors.bgLight};
        box-shadow: ${"0px 3px 1px -1px rgb(0, 0, 0, 30%), 0px 1px 3px 0px rgb(0, 0, 0, 14%), 0px 1px 3px 3px rgb(0, 0, 0, 12%)"};
        border-radius: 2%;

        max-width: 210px;
        padding: 0.5rem 0;
        position: fixed;
        top: 2%;
    }

    .li {
        margin: 0 0.5rem;
    }

    .li.mobile {
        width: 100%;
        margin: 0;
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

    .link.mobile .btn {
        width: 100%;
    }

    .btn {
        border: 1px solid transparent;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .btn.mobile {
        display: none;
        border-radius: 50%;
        color: ${(props) =>
            props.isDark ? globalColors.white1 : globalColors.black1};
    }

    @media only screen and (max-width: 768px) {
        .ul.desktop {
            display: none;
        }

        .ul.mobile {
            display: block;
        }

        .btn.mobile {
            display: block;
        }
    }
`;
