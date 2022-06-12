import styled from "styled-components";
import blur1 from "../../assets/images/blur1.svg";
import { globalColors } from "../../global/Colors";

export const StyledHome = styled.div``;

export const StyledLanding = styled.div`
    width: 100%;
    padding: 5rem 0;

    .content {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: flex-start;
        align-items: center;
    }

    .heading,
    .title,
    .description,
    .link-works {
        text-align: center;
        width: max-content;
        margin: 0.5rem auto;
    }

    .heading {
        margin-bottom: 0;
    }

    .title {
        color: ${globalColors.blue1};
        font-weight: 550;
    }

    .description {
        max-width: 600px;
    }

    .btn {
        background-color: ${globalColors.blue1};

        &:hover,
        &:focus {
            opacity: 0.7;
            background-color: ${globalColors.blue1};
        }
    }
`;
