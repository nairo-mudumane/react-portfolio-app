import { createGlobalStyle } from "styled-components";
import { GlobalColors } from "./GlobalColors";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	transition: all .2s ease;
}

html,
body {
	background: ${GlobalColors.bgDark1};
	height:120vh;
}

img,
svg {
	width: 100%;
	height: 100;
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
