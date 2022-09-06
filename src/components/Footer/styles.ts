import styled from "styled-components";
import { globalColors } from "../../global/Colors";
import { ICurrentTheme } from "../../types";

export const StyledFooter = styled.footer<ICurrentTheme>`
  .footer-root {
    background-color: ${(props) =>
      props.isDark ? globalColors.gray3 : globalColors.gray1};
  }

  .icon {
    margin-right: 0.5rem;
  }
`;

export const StyledCopyright = styled.div<ICurrentTheme>`
  color: ${(props) =>
    props.isDark ? globalColors.white1 : globalColors.black1};
  background-color: transparent;

  width: 100%;
  padding: 1rem 0;

  .text-icon {
    display: flex;
    align-items: center;
    margin: 0;
  }
`;
