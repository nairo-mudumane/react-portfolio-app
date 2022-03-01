import styled from "styled-components";

export const HeaderStyles = styled.div`
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
