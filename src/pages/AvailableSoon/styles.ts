import styled from "styled-components";
import { ICurrentTheme } from "../../types";

// assets
import banner from "../../assets/images/not-found-banner.jpg";
import { globalColors } from "../../global/Colors";

export const StyledAvailableSoon = styled.div<ICurrentTheme>`
    background: url(${banner}), transparent;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;

    width: 100%;

    .root-container {
        background: ${(props) => (props.isDark ? "#0f172ab3" : "#ffffff60")};

        display: flex;
        align-items: flex-start;
        justify-content: center;

        width: 100%;
        min-height: 88vh;
    }

    .container {
        max-width: 760px;
        padding: 0 0.4rem;
        margin: 0 auto;
        margin-top: 5rem;
    }

    .box-title {
        margin-bottom: 1rem;
    }

    .title {
        color: ${globalColors.blue1};
        font-weight: 600;
        text-transform: uppercase;
    }

    .description {
        background: ${(props) => (props.isDark ? "#1e253cab" : "#ffffff90")};
        border-radius: 6px;

        width: max-content;
        padding: 0.5rem 1rem;
    }

    .text {
        color: ${(props) =>
            props.isDark ? globalColors.white2 : globalColors.gray3};
        font-weight: 450;
    }
`;
