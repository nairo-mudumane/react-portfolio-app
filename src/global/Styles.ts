import { createGlobalStyle } from "styled-components";
import { useTheme } from "../hooks";
import { ICurrentTheme } from "../types";
import { globalColors } from "./Colors";

export const GlobalStyles = createGlobalStyle<ICurrentTheme>`
*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	outline: none;
	box-sizing: border-box;
}

html,
body {
	color: ${(props) => (props.isDark ? globalColors.white1 : globalColors.black1)};
	font-weight: 400;
	background-color: ${(props) =>
        props.isDark ? globalColors.bgDark : globalColors.bgLight};

	transition: background-color .2s ease;
}


img,
svg {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;
