import styled from "styled-components";

export const FlexColumnWrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	gap: var(--s);
	margin: var(--xs);

	@media screen and (max-width: 500px) {
		margin: 0;
	}
`;

export const CenterFlexColumn = styled(FlexColumnWrapper)`
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const FlexRowWrapper = styled(CenterFlexColumn)`
	flex-direction: row;
`;

export const FilterGrid = styled(CenterFlexColumn)`
	flex-direction: row;
	& *:not(:last-child) {
		flex-basis: 95px;
	}
`;

export const WhiteSection = styled(FlexColumnWrapper)`
	background-color: var(--transparent-white);
	padding: var(--s) var(--sm);
	border-radius: 8px;
	backdrop-filter: blur(3px);
	box-shadow: inset 0 0 20px #201f1f80;
	position: relative;
`;

export const SpellbookPage = styled(WhiteSection)`
	width: 65ch;
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
