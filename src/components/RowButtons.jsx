import { FlexRowWrapper } from "../styled-components/FlexStyles";
import { StyledButton, StyledLinkButton } from "../styled-components/StyledButton";
import { Ripples } from "@uiball/loaders";

const RowButtons = ({ loadingState, handleFunction, buttonText }) => {
	return (
		<FlexRowWrapper>
			<StyledLinkButton path="/">Home</StyledLinkButton>
			{buttonText ? (
				<StyledButton func={() => handleFunction()}>
					{loadingState ? (
						<>
							<Ripples size={30} color="var(--black)" /> Loading...
						</>
					) : (
						buttonText
					)}
				</StyledButton>
			) : null}
		</FlexRowWrapper>
	);
};

export default RowButtons;
