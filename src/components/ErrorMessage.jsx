import { ErrorBox } from "../styled-components/FlexStyles";

const ErrorMessage = ({ typeOfError }) => {
	return (
		<ErrorBox>
			<p>
				{typeOfError}. <strong>Please try again.</strong>
			</p>
		</ErrorBox>
	);
};

export default ErrorMessage;
