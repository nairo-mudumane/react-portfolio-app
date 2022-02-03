import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
	--color-black-1: #141414;
	--color-black-2: #1414148c;
	--color-white-1: #f8f8f2;
	--color-white-2: #949495;
	--color-white-3: #636363;
	--gradient-primary: linear-gradient(-45deg,#4d19e6,#b219e6,#e73c7e,#23a6d5,#ee7752,#23d5ab, #e619b3);
}

*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	
	font-family: 'Gothic A1',sans-serif;
	font-size: 1em;
	color: var(--color-white-1);
}

html,
body,
#root {
  min-height: 160vh;
  scroll-behavior: smooth;
  background-color: var(--color-black-1);
}


/* Scrollbar */
::-webkit-scrollbar {
	width: .6rem;
	/* height: 5px; */
}

::-webkit-scrollbar-button {
	display: none;
}

::-webkit-scrollbar-thumb {
	background-color: var(--color-white-3);
	border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
	background-color: var(--color-white-2);
}

::-webkit-scrollbar-track {
	background-color: var(--color-black-2);
}

::-webkit-scrollbar-track-piece {
  background-color: var(--color-black-1);
}
`;
