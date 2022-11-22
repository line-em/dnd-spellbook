import styled from "styled-components";

export const StyledFilter = ({ isImg, children }) =>
	isImg ? <SchoolBubble>{children}</SchoolBubble> : <ClassBubble>{children}</ClassBubble>;

const ClassBubble = styled.button`
	border-radius: 50%;
	aspect-ratio: 1 / 1;
	width: 50%;
	background-color: var(--transparent-black);
	border: 2px var(--dark-gray) solid;
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
	& img {
		width: 95%;
		height: auto;
	}
`;
