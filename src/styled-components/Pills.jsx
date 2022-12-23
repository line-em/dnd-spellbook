import styled from "styled-components";

export const PillBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 5px;

	& > *:not(:only-child) {
		/* flex-grow: 1; */
	}
`;

export const SearchPills = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 5px;
	margin: var(--m) 0 var(--sm) 0;
	justify-content: space-between;
	align-items: center;

	& p {
		margin-bottom: 5px;
	}
`;

export const Pill = styled.span`
	display: inline-block;
	color: white;
	padding: 2px 4px;
	font-size: 0.7rem;
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
