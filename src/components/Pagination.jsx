import { FlexRowSpacedWrapper, WhiteNavigation } from "../styled-components/FlexStyles";
import { StyledButton, StyledLinkButton } from "../styled-components/StyledButton.jsx";

const Pagination = ({ items, currentPage, resultsPerPage, changePage }) => {
	const numberOfPages = Math.ceil(items / resultsPerPage);

	numberOfPages === 1 && null;

	const pages = Array.from({ length: numberOfPages }, (e, index) => index + 1);
	return (
		<FlexRowSpacedWrapper>
			<WhiteNavigation>
				<StyledLinkButton path="/filters">Go Back</StyledLinkButton>
			</WhiteNavigation>
			<WhiteNavigation>
				{currentPage !== pages[0] && <StyledButton>Previous</StyledButton>}
				<strong>Page:</strong> {currentPage} / {numberOfPages}
				{numberOfPages !== currentPage && <StyledButton>Next</StyledButton>}
			</WhiteNavigation>
		</FlexRowSpacedWrapper>
	);
};

export default Pagination;
