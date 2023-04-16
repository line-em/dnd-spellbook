import { FlexRowWrapper } from "../styled-components/FlexStyles";
import { StyledButton, StyledLinkButton } from "../styled-components/StyledButton";
import Loader from "./Loader";

const RowButtons = ({ loadingState, handleFunction, buttonText, disableButton }) => {
	return (
		<FlexRowWrapper>
			{disableButton ? (
				<Loader text={"Gathering tomes..."} />
			) : buttonText ? (
				<>
					<StyledLinkButton path="/">Home</StyledLinkButton>
					<StyledButton func={() => handleFunction()}>
						{loadingState ? (
							<Loader color="var(--black)" text={"Loading..."} />
						) : (
							buttonText
						)}
					</StyledButton>
				</>
			) : null}
		</FlexRowWrapper>
	);
};

export default RowButtons;
