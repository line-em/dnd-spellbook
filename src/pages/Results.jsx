import { useLocation } from "react-router-dom";
import { useState } from "react";
import ResultGridItem from "../components/ResultGridItem.jsx";
import Pagination from "../components/Pagination.jsx";
import Heading from "../styled-components/Heading.jsx";
import { SearchWrapper } from "../styled-components/SearchUtils.jsx";
import { StyledLinkButton } from "../styled-components/StyledButton.jsx";
import { Pill, PillBox, SearchPills } from "../styled-components/Pills.jsx";

const Results = () => {
	const { state } = useLocation();
	const { currentPage, setCurrentPage } = useState("1");
	const results = state?.data;
	const resultsLength = state?.data.length;
	const resultsPerPage = state?.resultsPerPage;
	const resultsFilters = state?.filters;
	console.log(resultsFilters.length === 0 && "All filters");

	const changePage = (page) => setCurrentPage(page);

	return (
		<SearchWrapper results={resultsLength}>
			<Heading type="4">Search Results</Heading>

			{resultsFilters?.length === 0 && <Heading type="3">Showing all spells.</Heading>}
			{resultsFilters?.length > 0 && (
				<SearchPills>
					<PillBox>
						{resultsFilters.map((el) => (
							<Pill key={el}>{el}</Pill>
						))}
						<Pill className="reset">
							<StyledLinkButton to="/home">Reset filters</StyledLinkButton>
						</Pill>
					</PillBox>
				</SearchPills>
			)}

			<ResultGridItem />
			{state && (
				<Pagination
					items={resultsLength}
					currentPage={currentPage}
					resultsPerPage={resultsPerPage}
					changePage={changePage}
				/>
			)}
		</SearchWrapper>
	);
};
export default Results;
