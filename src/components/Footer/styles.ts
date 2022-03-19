import styled from "styled-components";
import { GlobalColors } from "../../global";

export const CopyrightStyles = styled.div`
    background: ${GlobalColors.bgDark1};
    padding: 1rem 0;
`;

export const FooterStyles = styled.footer`
    background: ${GlobalColors.bgDark2};
    border-top-right-radius: 20rem;
    margin-top: 2rem;

    .content {
        padding-top: 3rem;
        padding-bottom: 1rem;
        padding-right: 2rem;
    }
    .heading {
        margin-bottom: 0.5rem;
    }

    & ul {
        padding: 0;
    }

    @media only screen and (max-width: 375px) {
        border-top-right-radius: 14rem;
        .text {
            text-align: left;
        }
        .container {
            padding-left: 0;
        }
        .heading {
            font-size: 2em;
        }
        .heading:not(.about) {
            font-size: 1.5em;
        }
    }
`;
