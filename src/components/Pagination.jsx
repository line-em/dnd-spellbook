import { WhiteNavigation } from "../styled-components/FlexStyles";
import { StyledButton } from "../styled-components/StyledButton.jsx";

const Pagination = ({ items, currentPage, resultsPerPage, changePage }) => {
	const numberOfPages = Math.ceil(items / resultsPerPage);

	numberOfPages === 1 && null;

	const pages = Array.from({ length: numberOfPages }, (e, index) => index + 1);
	console.log(pages);
	return (
		<WhiteNavigation>
			<StyledButton>Previous</StyledButton>
			<strong>Page:</strong> 2 / 5<StyledButton>Next</StyledButton>
		</WhiteNavigation>
	);
};

export default Pagination;
