import styled from "styled-components";
import { WhiteSection } from "./FlexStyles";
import Necromancy from "../assets/schools/Necromancy.png";
import Evocation from "../assets/schools/Evocation.png";
import Transmutation from "../assets/schools/Transmutation.png";
import Illusion from "../assets/schools/Illusion.png";

export const SearchGrid = styled.article`
	display: grid;
	gap: var(--xxs) var(--s);
	grid-template-columns: repeat(auto-fill, minmax(30%, auto));
	place-items: center;
`;

export const WhiteSectionBackdropLeft = styled.article`
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: ${({ school }) =>
		school === "Evocation"
			? `url(${Evocation})`
			: school === "Necromancy"
			? `url(${Necromancy})`
			: school === "Transmutation"
			? `url(${Transmutation})`
			: `url(${Illusion})`};
	/* background-image: url(${Necromancy}); */
	background-size: 20%;
	background-repeat: no-repeat;
	background-position: top left;
	opacity: 0.3;
`;
