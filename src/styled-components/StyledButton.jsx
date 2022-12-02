import styled from "styled-components";
import { Link } from "react-router-dom";
import { SearchGrid } from "./SearchUtils";

const StyledLink = styled(Link)`
	cursor: pointer;
	border-radius: 8px;
	border: 2px solid var(--black);
	padding: var(--xs) var(--s);
	font: 400 var(--s) inherit;
	background-color: var(--dark-gray);
	color: var(--white);
	transition: all 0.25s;
	text-decoration: none;

	${SearchGrid} & {
		align-self: center;
		padding: var(--xxs) var(--xs);
		font-size: 0.85rem;
		border-color: transparent;
	}

	&:hover {
		color: var(--lilac);
		border-color: var(--dark-gray);
		background-color: var(--black);
	}

	${SearchGrid} &:hover {
		border-color: transparent;
	}

	&:focus,
	&:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	}
`;

const Wrapper = styled(StyledLink)`
	background-color: var(--white);
	color: var(--dark-gray);

	&:hover {
		color: var(--white);
		background-color: var(--transparent-white);
		border-color: var(--white);
	}
`;

export const StyledButton = ({ func, children }) => {
	return (
		<Wrapper role="button" onClick={func}>
			{children}
		</Wrapper>
	);
};

export const StyledLinkButton = ({ path, children }) => {
	return <StyledLink to={path}>{children}</StyledLink>;
};
