import styled from "styled-components";
import blur1 from "../../assets/images/blur1.svg";

export const StyledHome = styled.div`
    .banner {
        height: 530px;

        & > img {
            object-fit: contain;
        }
    }
`;

export const StyledLanding = styled.div`
    background-color: rgba(0, 0, 0, 0.7);

    width: 100%;
    height: 80vh;
    position: relative;

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;

        background: url(${blur1}), transparent;
        background-size: 50%;
        background-repeat: no-repeat;
        background-position-x: 90%;
        background-position-y: 10%;
    }
`;
