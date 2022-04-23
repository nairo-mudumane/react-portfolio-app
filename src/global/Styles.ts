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
	background: ${GlobalColors.bgDark1};
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
