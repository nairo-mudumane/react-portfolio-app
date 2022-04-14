import styled from "styled-components";

export const UnderMaintenceStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    /* background-color: transparent;
    background-image: linear-gradient(180deg, rgba(1, 3, 38, 0) 52%, #010326),
        linear-gradient(95deg, #010326 43%, rgba(1, 3, 38, 0.15)); */

    width: 100%;
    height: 100vh;

    .content {
        width: 80%;
        padding: 2rem 1rem;
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

        background-color: #1c1d4f;
        border: 2px solid #45448c;

        overflow: hidden;

        max-width: 22rem;
        height: 390px;
        padding: 0.3rem;

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
        flex: 1 1 520px;
        width: 520px;
        margin-bottom: 2rem;
    }

    .title {
        font-size: 3.6em;
        font-weight: bold;
        margin-bottom: 5rem;
    }

    .text {
        max-width: 30rem;
    }

    .social-media {
        margin-top: 2rem;
    }

    .link-item {
        background: #dfeaef;
        color: #1c6ed2;

        margin-top: 0.5rem;
        margin-right: 1rem;

        &:hover {
            background: #dfeaef;
            color: #1c6ed2;
            opacity: 0.7;
        }
    }

    @media only screen and (max-width: 1024px) {
        .hero {
            flex: 1 1 380px;
            width: 380px;
        }
        .image {
            max-width: 18rem;
        }
    }

    @media only screen and (max-width: 768px) {
        .content {
            width: 100%;
        }
        .title {
            font-size: 2.5em;
            margin-bottom: 2rem;
        }
        .subtitle {
            font-size: 1.6em;
        }
    }

    @media only screen and (max-width: 425px) {
        .content {
            padding-top: 10rem;
        }

        .title {
            font-size: 1em;
            margin-bottom: 1rem;
        }
        .image {
            max-width: 100%;
        }
    }
`;
