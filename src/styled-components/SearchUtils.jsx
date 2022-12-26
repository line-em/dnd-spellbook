import styled from "styled-components";
import Abjuration from "../assets/schools/Abjuration2.png";
import Conjuration from "../assets/schools/Conjuration.png";
import Divination from "../assets/schools/Divination.png";
import Enchantment from "../assets/schools/Enchantment.png";
import Evocation from "../assets/schools/Evocation.png";
import Illusion from "../assets/schools/Illusion.png";
import Necromancy from "../assets/schools/Necromancy.png";
import Transmutation from "../assets/schools/Transmutation.png";
import { WhiteSection } from "./FlexStyles";

export const SearchWrapper = styled.main`
	width: ${({ results }) => (results <= 2 ? "null" : "100%")};
	/* max-width: 90ch; */
	margin-top: var(--s);

	@media screen and (min-width: 750px) {
		background-color: var(--transparent-white);
		padding: var(--xs) var(--s);
		border-radius: 8px;
		backdrop-filter: blur(3px);
		box-shadow: inset 0 0 20px #201f1f80;
		position: relative;
	}

	& ${WhiteSection} p {
		color: var(--white);
	}
`;

export const SearchGrid = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(420px, auto));
	margin-top: var(--sm);
	gap: 15px;

	@media screen and (max-width: 420px) {
		grid-template-columns: 1fr;
	}
`;

export const ClassInfo = styled.article`
	display: flex;
	gap: var(--xxs) var(--s);
	place-items: center;
	justify-content: space-between;

	@media screen and (max-width: 450px) {
		margin-top: 15px;
	}
`;

export const WhiteSectionBackdropLeft = styled.div`
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	background-image: ${({ school }) => {
		switch (school) {
			case "Necromancy":
				return `url(${Necromancy})`;
			case "Transmutation":
				return `url(${Transmutation})`;
			case "Abjuration":
				return `url(${Abjuration})`;
			case "Illusion":
				return `url(${Illusion})`;
			case "Conjuration":
				return `url(${Conjuration})`;
			case "Evocation":
				return `url(${Evocation})`;
			case "Enchantment":
				return `url(${Enchantment})`;
			default:
				return `url(${Divination})`;
		}
	}};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: left -74px center;
	opacity: 0.1;
`;

export const Info = styled.abbr`
	text-decoration: underline 2px var(--red);
`;
