import styled from "styled-components";
import { globalColors } from "../../global/Colors";
import { ICurrentTheme } from "../../types";

export const StyledService = styled.div<ICurrentTheme>`
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
