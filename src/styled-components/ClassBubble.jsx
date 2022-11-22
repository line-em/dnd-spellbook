import styled from "styled-components";

export const StyledFilter = ({ isImg, selected, children }) => {
	return isImg ? (
		<SchoolBubble isSelected={selected}>{children}</SchoolBubble>
	) : (
		<ClassBubble isSelected={selected}>{children}</ClassBubble>
	);
};

const ClassBubble = styled.button`
	border-radius: 50%;
	width: 50%;
	background-color: var(--transparent-black);
	border: ${({ isSelected }) =>
		isSelected ? "2px var(--lilac) solid" : "2px var(--dark-gray) solid"};
	transition: all 300ms;
	cursor: pointer;

	&:hover {
		background-color: var(--transparent-white);
		border-color: transparent;
	}

	&:hover * {
		filter: drop-shadow(0 0 10px #000);
	}

	&:active {
		border-color: var(--lilac);
	}
`;

const SchoolBubble = styled(ClassBubble)`
	border-radius: 8px;
	width: 100%;
	padding: var(--xxs) var(--xs);
	color: var(--lilac);
`;
