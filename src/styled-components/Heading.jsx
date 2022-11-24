import styled from "styled-components";

const Heading = ({ type, children }) => {
	const htmlTag = `h${type}`;

	return (
		<Wrapper as={htmlTag} type={type}>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled.h1`
	display: block;
	font-family: ${({ type }) => (type === "5" || type === "6" ? "var(--sans)" : "var(--serif)")};
	font-style: ${({ type }) => (type === "3" ? "italic" : null)};
	font-weight: ${({ type }) =>
		type === "1" ? "700" : type === "2" ? "600" : type === "3" ? "200" : "600"};
	color: ${({ type }) =>
		type === "1" ? "var(--lilac)" : type === "3" ? "var(--steel)" : "var(--white)"};
	font-size: ${({ type }) => {
		switch (type) {
			case "1":
				return "clamp(1.5rem, 2.1vw + 1rem, 3rem)";
			case "2":
				return "clamp(1.1rem, 1vw + 1rem, 2.3rem)";
			case "3":
				return "clamp(0.9rem, 1vw + 1rem, 2rem)";
			case "4":
				return "clamp(0.8rem, 0.5vw + 1rem, 1.5rem)";
			case "5":
				return "clamp(0.8rem, 0.4vw + 0.9rem, 1.4rem)";
			default:
				return "clamp(0.6rem, 0.2vw + 0.9rem, 1rem)";
				break;
		}
	}};
	// h2 & h4 specific
	background-color: ${({ type }) => (type === "2" || type === "4" ? "var(--light-gray)" : null)};
	padding: ${({ type }) => (type === "2" ? "0 var(--s)" : null)};
	border-radius: 8px;
	box-shadow: ${({ type }) => (type === "2" || type === "4" ? "inset 0 0 3px #201f1f80" : null)};
`;

export default Heading;
