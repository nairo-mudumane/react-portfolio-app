import styled from "styled-components";
import { globalColors } from "../../global/Colors";
import { ICurrentTheme } from "../../types";

export const StyledCardService = styled.div<ICurrentTheme>`
    background-color: ${(props) =>
        props.isDark ? globalColors.gray3 : globalColors.gray1};
    border-radius: 3%;

    height: 200px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: space-around;
    align-items: flex-start;

    transition: transform 0.2s ease;

    &:hover,
    &:focus {
        background-color: ${(props) =>
            props.isDark ? "#1e253c5c" : "#cbd5e182"};
        transform: translateY(-12px);
    }

    .title {
        color: ${(props) =>
            props.isDark ? globalColors.white1 : globalColors.black1};
        font-weight: 600;
        font-size: 1.5em;
    }

    .description {
        text-align: justify;
    }

    ${(props) => props.isDark && `.description{color: ${globalColors.white2};}`}

    @media only screen and (max-width: 425px) {
        height: max-content;
    }
`;

export const StyledCardProject = styled.article<ICurrentTheme>`
    &,
    .card {
        background-color: ${(props) =>
            props.isDark ? globalColors.gray3 : globalColors.white1};

        /* &:hover,
        &:focus {
            background-color: ${(props) =>
            props.isDark ? "#1e253c5c" : "#cbd5e182"};
        } */
    }

    .link {
        width: max-content;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: flex-start;
        justify-content: flex-start;
        align-items: center;

        &:hover,
        &:focus {
            text-decoration: underline;
        }
    }

    .icon {
        font: inherit;
        width: 1.5rem;
        margin-right: 0.5rem;
    }

    .banner-image {
        width: 100%;
        cursor: pointer;

        &:hover .link {
            text-decoration: underline;
        }
    }

    .project-title {
        margin: 0.5rem 0;
    }

    .link {
        color: ${(props) =>
            props.isDark ? globalColors.white1 : globalColors.blue1};

        .title {
            font-size: 1.5em;
            font-weight: bold;
        }
    }

    .git-data {
        margin: 1rem 0;

        color: ${(props) =>
            props.isDark ? globalColors.white3 : globalColors.black1};
    }

    .git-info {
        font-size: 0.8em;
        display: flex;
        margin: 0.3rem;

        .icon {
            width: 1rem;
        }
    }

    .description {
        color: ${(props) =>
            props.isDark ? globalColors.white3 : globalColors.black1};
        text-align: justify;
        margin: 1rem 0;
    }

    .tools {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: flex-start;
        align-items: flex-start;

        margin-top: 1rem;
    }

    .chip {
        color: ${(props) =>
            props.isDark ? globalColors.white3 : globalColors.black1};

        margin: 0.5rem 0;
        &:not(:last-child) {
            margin-right: 0.5rem;
        }
    }

    .git-data {
        margin-bottom: 1rem;
    }

    .git-info {
        display: flex;
        margin: 0.3rem;
    }
`;
