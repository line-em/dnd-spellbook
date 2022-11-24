import styled from "styled-components";
import Abjuration from "../assets/schools/Abjuration2.png";
import Conjuration from "../assets/schools/Conjuration.png";
import Divination from "../assets/schools/Divination.png";
import Enchantment from "../assets/schools/Enchantment.png";
import Evocation from "../assets/schools/Evocation.png";
import Illusion from "../assets/schools/Illusion.png";
import Necromancy from "../assets/schools/Necromancy.png";
import Transmutation from "../assets/schools/Transmutation.png";

export const SearchWrapper = styled.main`
	width: 100%;
	margin-top: var(--s);

	@media screen and (min-width: 750px) {
		background-color: var(--transparent-white);
		padding: var(--xs) var(--s);
		border-radius: 8px;
		backdrop-filter: blur(3px);
		box-shadow: inset 0 0 20px #201f1f80;
		position: relative;
	}
`;

export const SearchGrid = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, auto));

	@media screen and (max-width: 420px) {
		grid-template-columns: 1fr;
	}
`;

export const ClassInfo = styled.article`
	display: flex;
	gap: var(--xxs) var(--s);
	place-items: center;
	justify-content: space-between;

	&:first-child {
		flex-grow: 1;
	}
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
