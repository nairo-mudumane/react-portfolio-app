import styled from "styled-components";
import blur1 from "../../assets/images/blur1.svg";
import { globalColors } from "../../global/Colors";
import { ICurrentTheme } from "../../types";

export const StyledHome = styled.div<ICurrentTheme>``;

export const StyledHero = styled.div<ICurrentTheme>`
    width: 100%;
    margin: 1rem 0;

    .content {
        padding: 2rem 0;
        margin: 0 auto;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: space-between;
        align-items: flex-start;
    }

    .image {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: transparent;
        border: 2px solid
            ${(props) =>
                props.isDark ? globalColors.gray1 : globalColors.blue2};
        overflow: hidden;

        max-width: 320px;
        height: 390px;
        padding: 0.2rem;

        & > img {
            height: 100%;
        }
    }

    .image,
    .image > img {
        object-fit: cover;
        border-radius: 6px;
    }

    .hero {
        flex: 1 1 460px;
        max-width: 460px;
        margin-bottom: 2rem;
    }

    .title {
        font-size: 3.6em;
        font-weight: bold;
        color: ${(props) =>
            props.isDark ? globalColors.white1 : globalColors.blue1};

        margin-bottom: 5rem;
    }

    .text {
        max-width: 30rem;
    }

    .social-media {
        margin-top: 1rem;
    }

    .link-item {
        background-color: ${(props) =>
            props.isDark ? globalColors.white1 : globalColors.gray1};
        color: ${(props) =>
            props.isDark ? globalColors.black1 : globalColors.black1};

        margin-top: 0.5rem;
        margin-right: 1rem;

        &:hover {
            background: #dfeaef;
            color: ${globalColors.blue2};
        }
    }

    @media only screen and (max-width: 768px) {
        .title {
            margin-bottom: 2.5rem;
        }
    }
`;

export const StyledServices = styled.div<ICurrentTheme>`
    .title {
        margin-bottom: 2rem;
    }
`;
