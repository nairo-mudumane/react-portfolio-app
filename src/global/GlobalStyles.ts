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
	color: ${GlobalColors.white1};
	background: linear-gradient(180deg, rgba(1, 3, 38, 0) 52%, #010326),
        linear-gradient(95deg, #010326 66%, rgba(1, 3, 38, 0.10));
	background-repeat: no-repeat;
	min-height: 100vh;
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
