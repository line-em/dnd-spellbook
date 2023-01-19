import styled from "styled-components";

export const FlexColumnWrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	gap: var(--xs);
	margin: var(--xs);

	@media screen and (max-width: 500px) {
		margin: 0 auto;
	}
`;

export const CenterFlexColumn = styled(FlexColumnWrapper)`
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const FlexRowWrapper = styled(CenterFlexColumn)`
	flex-direction: row;
	flex-wrap: ${({ nowrap }) => (nowrap ? "nowrap" : "wrap")};

	@media screen and (max-width: 500px) {
		flex-wrap: wrap;
	}
`;

export const FlexRowSpacedWrapper = styled(FlexRowWrapper)`
	justify-content: space-between;
	text-align: justify;
	margin-inline: 0;
	margin-bottom: 0;
	gap: 20px;
	flex-wrap: ${({ nowrap }) => (nowrap ? "nowrap" : "wrap")};
	align-items: ${({ flexStart }) => (flexStart ? "flex-start" : "center")};

	@media screen and (max-width: 500px) {
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
`;

export const FilterFlexGrid = styled(CenterFlexColumn)`
	flex-direction: row;
	& *:not(:last-child) {
		flex-basis: 95px;
	}
`;

export const DetailsGrid = styled.section`
	display: grid;
	grid-template: 1fr / repeat(auto-fit, minmax(calc(4vw + 80px), 1fr));
	grid-auto-flow: dense;
	gap: 10px;
	margin: auto;
	width: 100%;

	@media screen and (max-width: 335px) {
		grid-template: 1fr / repeat(auto-fit, minmax(110px, 1fr));
	}
`;

export const WhiteSection = styled(FlexColumnWrapper)`
	background-color: var(--transparent-white);
	padding: var(--s) var(--sm);
	border-radius: 8px;
	backdrop-filter: blur(3px);
	box-shadow: inset 0 0 20px #201f1f80;
	position: relative;
	max-width: ${({ maxWidth }) => maxWidth};
	margin-inline: ${({ margin }) => (margin === "nomargin" ? 0 : " var(--xs)")};
	margin-top: var(--xs);

	p + & {
		margin-top: 0;
	}

	& + & {
		margin-top: var(--s);
	}
`;

export const WhiteNavigation = styled(WhiteSection)`
	align-items: center;
	justify-content: flex-end;
	flex-direction: row;
	width: fit-content;
	margin-top: var(--s);
	opacity: 0.5;
	transition: opacity 200ms;

	&:hover {
		opacity: 1;
	}
`;

export const SpellbookPage = styled(WhiteSection)`
	max-width: 65ch;
	@media screen and (max-width: 700px) {
		width: 90%;
	}
	@media screen and (max-width: 550px) {
		width: 100%;
	}
`;

export const ErrorBox = styled(SpellbookPage)`
	background-color: var(--red);
`;
