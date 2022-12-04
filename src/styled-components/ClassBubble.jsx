import styled from "styled-components";

export const StyledFilter = ({ isImg, isClear, selected, disabled, children }) => {
	return isImg ? (
		<SchoolBubble isSelected={selected} disabled={disabled} isClear={isClear}>
			{children}
		</SchoolBubble>
	) : (
		<ClassBubble isSelected={selected} disabled={disabled} isClear={isClear}>
			{children}
		</ClassBubble>
	);
};

const ClassBubble = styled.button`
	border-radius: 50%;
	width: 50%;
	opacity: 1;
	border: ${({ isSelected }) =>
		isSelected ? "2px var(--lilac) solid" : "2px var(--dark-gray) solid"};
	background-color: ${({ isSelected, isClear }) =>
		isClear
			? "var(--transparent-red)"
			: isSelected
			? "var(--transparent-white)"
			: "var(--transparent-black)"};
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

	&:disabled {
		opacity: 0.5;
	}
`;

const SchoolBubble = styled(ClassBubble)`
	border-radius: 8px;
	width: 100%;
	padding: var(--xxs) var(--xs);
	color: var(--lilac);
`;
