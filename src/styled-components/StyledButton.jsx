import styled from "styled-components";
import { Link } from "react-router-dom";
import { FilterGrid } from "./FlexStyles";

const StyledLink = styled(Link)`
	cursor: pointer;
	border-radius: 8px;
	border: 2px solid var(--black);
	padding: var(--xs) var(--s);
	font: 400 var(--s) inherit;
	background-color: var(--dark-gray);
	color: var(--white);
	transition: all 0.25s;

	&:hover {
		border-color: var(--dark-gray);
		background-color: var(--black);
	}

	&:focus,
	&:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	}

	${FilterGrid} > & {
		background-color: transparent;
		border-color: transparent;
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
