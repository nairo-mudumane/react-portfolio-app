import styled from "styled-components";
import { GlobalColors } from "../../global";

export const HeaderStyles = styled.div`
    .header {
        background: ${GlobalColors.bgDark2};
        width: 100%;
        margin-bottom: 1rem;
        position: fixed;
        top: 0;
    }

    nav {
        padding: 1rem 2rem;
    }

    .menu {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: flex-start;
        align-items: flex-start;

        width: max-content;
        margin: 0 auto;
    }

    .item {
        list-style: none;
        margin: 0.5rem;
    }

    .link {
        text-decoration: none;

        &:hover {
            color: ${GlobalColors.blue1};
        }
    }

    .link.active {
        color: ${GlobalColors.blue1};
    }

    /* mobile */
    .mobile-menu-icon {
        width: 4rem;
        position: absolute;
        right: 1rem;
        top: 1rem;

        cursor: pointer;
        display: none;
        outline: none;
        * {
            pointer-events: none;
        }
    }

    @media only screen and (max-width: 768px) {
        .mobile-menu-icon {
            display: block;
        }
    }
`;
