import { CenterFlexColumn } from "../styled-components/FlexStyles";
import { StyledLinkButton } from "../styled-components/StyledButton";
import styled from "styled-components";
import ErrorMessage from "../components/ErrorMessage";

const ErrorTitle = styled.h1`
	font-size: clamp(2.5rem, 3.5rem + 5vw, 4.5rem + 10vw);
	color: var(--red);
`;

const Margin = styled.div`
	margin-block: 2.5rem 2.2rem;
`;

export default function ErrorPage() {
	return (
		<CenterFlexColumn>
			<ErrorTitle>404</ErrorTitle>
			<ErrorMessage typeOfError="This page doesn't exist" />
			<Margin>
				<StyledLinkButton path="/">Go back</StyledLinkButton>
			</Margin>
		</CenterFlexColumn>
	);
}
