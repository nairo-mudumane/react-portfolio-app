import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	outline: none;
	box-sizing: border-box;
	transition: all .2s ease;
}

html,
body {
	font-weight: 400;
	
}


img,
svg {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`;
