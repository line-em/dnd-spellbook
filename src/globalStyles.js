import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
	--black: #11100f;
	--transparent-black: #11100f43;
	--dark-gray: #242121;
	--gray: #4a4048;
	--light-gray: #67717f;
	--white: #c9ddff;
	--transparent-white: #c9ddff30;
	--steel: #607b7d;
	--lilac: #d8c5d7;
	--purple: #6b2d5c;
	--neutral-purple: #8f5972;
	--transparent-red: #ab121277;
	--red: #ab1212;

	--sans: "Rubik", "Helvetica", "Arial", sans-serif;
	--serif: "Fraunces", "Georgia", "Times New Roman", serif;

	--xxs: 0.1rem;
	--xs: 0.5rem;
	--s: 1rem;
	--sm: 1.5rem;
	--m: 2rem;
	--sl: 2.5rem;
	--l: 3rem;
	--xxl: 5rem;

	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: 100%;
}

* {
	box-sizing: border-box;
}

@keyframes bg-fractal {
	from {
		background-position: top left;
	}
	to {
		background-position: bottom right;
	}
}

html {
	color: var(--lilac);
	background-color: var(--black);
	background-attachment: fixed;
	background-repeat: repeat;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='257' height='257' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%231A2121' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23293536'%3E%3Ccircle cx='769' cy='229' r='6'/%3E%3Ccircle cx='539' cy='269' r='6'/%3E%3Ccircle cx='603' cy='493' r='6'/%3E%3Ccircle cx='731' cy='737' r='6'/%3E%3Ccircle cx='520' cy='660' r='6'/%3E%3Ccircle cx='309' cy='538' r='6'/%3E%3Ccircle cx='295' cy='764' r='6'/%3E%3Ccircle cx='40' cy='599' r='6'/%3E%3Ccircle cx='102' cy='382' r='6'/%3E%3Ccircle cx='127' cy='80' r='6'/%3E%3Ccircle cx='370' cy='105' r='6'/%3E%3Ccircle cx='578' cy='42' r='6'/%3E%3Ccircle cx='237' cy='261' r='6'/%3E%3Ccircle cx='390' cy='382' r='6'/%3E%3C/g%3E%3C/svg%3E");
	animation: infinite alternate-reverse bg-fractal 20s;
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	display: grid;
	margin: auto;
	min-width: 300px;
	max-width: 1280px;
	min-height: 100vh;
	width: 80%;
	/* place-items: center; */
	align-items: center;
	font: 400 clamp(0.7rem, 0.1vw + 0.8rem, 1rem) / 1.5 var(--sans);
}

@media screen and (max-width: 500px) {
	body {
		width: 90%;
	}
}

/* some base styles */

p {
	font: 400 clamp(0.85rem, 0.2vw + 0.85rem, 1rem) / 1.5 var(--sans);
}

a {
	color: var(--white);
	transition: color 200ms;
}

a:hover {
	color: var(--neutral-purple);
}

select {
	padding: 0.3rem;
	color: var(--steel);
	margin: var(--xs) 0 var(--xs) var(--xs);
}

`;
