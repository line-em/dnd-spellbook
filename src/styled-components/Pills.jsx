import styled from "styled-components";

export const PillBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 5px;
	justify-content: space-between;
	align-items: center;

	& > *:not(:only-child) {
		flex-grow: 1;
	}
`;

export const SearchPills = styled.div`
	margin: var(--xs) 0;
	& p {
		margin-bottom: 5px;
	}
`;

export const Pill = styled.span`
	display: inline-block;
	color: white;
	padding: 5px 8px;
	font-size: 0.9rem;
	border-radius: 8px;
	background-color: var(--neutral-purple);

	&:nth-child(3n + 1) {
		background-color: var(--steel);
	}

	&:nth-child(3n + 2) {
		background-color: var(--purple);
	}

	&.reset {
		background-color: var(--transparent-red);
		transition: ease 300ms;
		font-weight: 700;
	}

	&.reset > a::before {
		content: "X";
		margin-inline-end: 5px;
		border: 1px solid var(--transparent-white);
		border-radius: 8px;
		padding: 0 var(--xs);
	}

	&.reset:hover {
		background-color: var(--red);
		transition: ease 300ms;
	}
`;
