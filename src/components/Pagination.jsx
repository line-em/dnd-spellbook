import { FlexRowSpacedWrapper, WhiteNavigation } from "../styled-components/FlexStyles";
import { StyledButton, StyledLinkButton } from "../styled-components/StyledButton.jsx";

const Pagination = ({ items, currentPage, resultsPerPage, changePage }) => {
	const numberOfPages = Math.ceil(items / resultsPerPage);
	const pages = Array.from({ length: numberOfPages }, (e, index) => index + 1);

	return (
		<FlexRowSpacedWrapper>
			<WhiteNavigation>
				<StyledLinkButton path="/filters">Go Back</StyledLinkButton>
			</WhiteNavigation>
			<WhiteNavigation>
				{currentPage !== pages[0] && (
					<StyledButton func={() => changePage(currentPage - 1)}>Previous</StyledButton>
				)}
				{numberOfPages > 1 && (
					<>
						<strong>Page:</strong> {currentPage} / {numberOfPages}
					</>
				)}
				{numberOfPages !== currentPage && (
					<StyledButton func={() => changePage(currentPage + 1)}>Next</StyledButton>
				)}
			</WhiteNavigation>
		</FlexRowSpacedWrapper>
	);
};

export default Pagination;
