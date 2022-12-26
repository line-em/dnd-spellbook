import { useLocation } from "react-router-dom";
import { useState } from "react";
import ResultGridItem from "../components/ResultGridItem.jsx";
import Pagination from "../components/Pagination.jsx";
import Heading from "../styled-components/Heading.jsx";
import { SearchWrapper } from "../styled-components/SearchUtils.jsx";
import { StyledLinkButton } from "../styled-components/StyledButton.jsx";
import { Pill, PillBox, SearchPills } from "../styled-components/Pills.jsx";
import Home from "./Home.jsx";

const Results = () => {
	const { state } = useLocation();
	const [currentPage, setCurrentPage] = useState(1);
	const [currentResults, setCurrentResults] = useState(state || []);
	const resultsLength = currentResults.data.length;
	const resultsPerPage = currentResults.resultsPerPage;
	const resultsFilters = currentResults.filters;

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
							<StyledLinkButton path="/filters">Reset filters</StyledLinkButton>
						</Pill>
					</PillBox>
				</SearchPills>
			)}

			<ResultGridItem />

			<Pagination
				items={resultsLength}
				currentPage={currentPage}
				resultsPerPage={resultsPerPage}
				changePage={changePage}
			/>
		</SearchWrapper>
	);
};
export default Results;
