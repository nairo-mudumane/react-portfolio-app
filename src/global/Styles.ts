import { createGlobalStyle } from "styled-components";
import { GlobalColors } from "./Colors";

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
	color: ${GlobalColors.white1};
	font-family: 'Andada Pro', serif;
	font-weight: 400;
	background: ${GlobalColors.bgDark2};
}

a {
	color: inherit;
	font: inherit;
	&:hover {
		text-decoration: none;
	}
}

img,
svg {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.text {
	color: ${GlobalColors.white1};
	font-size: 1em;
	margin-bottom: 0.3rem;
}

.text.italic {
	font-style:italic;
}

.text.normal {
	font-weight: 400;
}

.text.bold {
	font-weight: 700;
}

[data-scrollbar] {
	height: 100vh;
	overflow: hidden;
	background-color: ${GlobalColors.gray1};
	
	.scroll-content {
		background-color: ${GlobalColors.bgDark1};
	}
	
	.scrollbar-track.scrollbar-track-y {
		background: ${GlobalColors.bgDark1};
		z-index: 101;
	}

	.scrollbar-thumb-y {
		background: ${GlobalColors.gray1};
	}
  }
`;
