import styled, { createGlobalStyle } from "styled-components";
import { globalColors } from "../../global/Colors";
import { ICurrentTheme } from "../../types";

export const GlobalHomeStyles = createGlobalStyle<ICurrentTheme>`
.image {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
    border: 2px solid
        ${(props) => (props.isDark ? globalColors.gray1 : globalColors.blue1)};
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

@media only screen and (max-width: 425px) {
    .image {
        max-width: unset;
        width: 100%;
    }
}
`;

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

  .hero {
    flex: 1 1 420px;
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

    &.justify {
      text-align: justify;
    }
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
  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .item {
    flex: 0 1 380px;
    padding: 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    .item {
      flex: 0 1 340px;
    }
  }

  @media only screen and (max-width: 425px) {
    .item {
      flex: 0 1 100%;
    }
  }
`;

export const StyledAbout = styled.div<ICurrentTheme>`
  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .description {
    flex: 1 1 300px;
    padding: 0 1rem;
    padding-right: 3rem;
    margin-bottom: 1rem;
  }

  .text {
    margin-bottom: 0.5rem;

    text-align: justify;
  }

  .actions {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 1rem;
  }

  .btn {
    color: ${globalColors.white1};
    border-color: ${globalColors.blue1};

    &:not(last-child) {
      margin-right: 0.5rem;
    }

    &:hover,
    &:focus {
      color: ${globalColors.white1};
      border-color: ${globalColors.blue2};
    }
  }

  .btn.outlined {
    color: ${(props) =>
      props.isDark ? globalColors.white1 : globalColors.blue1};

    &:hover,
    &:focus {
      color: ${(props) =>
        props.isDark ? globalColors.blue1 : globalColors.blue2};
      border-color: ${(props) =>
        props.isDark ? globalColors.blue1 : globalColors.blue2};
    }
  }

  .image {
    max-width: unset;
    width: 440px;
  }

  @media only screen and (max-width: 768px) {
    .image {
      width: 100%;
    }

    .description {
      padding: 0 1rem;
    }
  }
`;

export const StyledProjects = styled.div<ICurrentTheme>`
  .item {
    width: 48%;
  }

  @media only screen and (max-width: 768px) {
    .item {
      width: 100%;
    }
  }

  @media only screen and (max-width: 425px) {
    .item {
      width: 100%;
    }
  }
`;

export const StyledContact = styled.div<ICurrentTheme>`
  .bg-section {
    width: 100%;
    padding: 2rem 1rem;
    margin: 1rem 0;

    background-color: ${(props) =>
      props.isDark ? globalColors.gray3 : globalColors.gray1};

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
`;
