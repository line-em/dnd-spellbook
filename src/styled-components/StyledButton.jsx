import styled from "styled-components";

const Wrapper = styled.button`
	border-radius: 8px;
	border: 2px solid var(--black);
	padding: var(--xs) var(--s);
	font: 400 var(--s) inherit;
	background-color: var(--dark-gray);
	color: var(--white);
	cursor: pointer;
	transition: border-color 0.25s;

	&:hover {
		border-color: var(--purple);
	}

	&:focus,
	&:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	}
`;

const StyledButton = ({ func, children }) => {
	return (
		<Wrapper role="button" onClick={func}>
			{children}
		</Wrapper>
	);
};

export default StyledButton;

// <button
// 	className="accent-button
// 	start-margin"
// 	role="button"
// 	onClick={(e) => setIsCustomizationHidden(!isCustomizationHidden)}
// >
// 	Customize
// </button>
