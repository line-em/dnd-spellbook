import styled from "styled-components";

export const PillBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 5px;

	& > *:not(:only-child) {
		flex-grow: 1;
	}
`;

export const Pill = styled.span`
	display: inline-block;
	color: white;
	padding: var(--xxs) var(--xs);
	font-size: 0.7rem;
	border-radius: 8px;
	background-color: var(--neutral-purple);

	&:nth-child(3n + 1) {
		background-color: var(--steel);
	}

	&:nth-child(3n + 2) {
		background-color: var(--purple);
	}
`;
