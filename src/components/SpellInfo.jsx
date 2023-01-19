import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const SpellDesctiption = styled.article`
	text-align: justify;

	& p:not(:is(:only-child, :last-child)) {
		border-bottom: 1px solid var(--lilac);
		padding: var(--xs) 0;
	}

	& p:last-child {
		padding: var(--xs) 0;
	}
`;

const SpellInfo = ({ content }) => {
	return (
		<SpellDesctiption>
			<ReactMarkdown>{content}</ReactMarkdown>
		</SpellDesctiption>
	);
};

export default SpellInfo;
