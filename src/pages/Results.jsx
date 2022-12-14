import { useLocation } from "react-router-dom";
import { useState } from "react";
import ResultGridItem from "../components/ResultGridItem.jsx";
import Pagination from "../components/Pagination.jsx";
import SelectedFiltersBox from "../components/SelectedFiltersBox.jsx";
import Heading from "../styled-components/Heading.jsx";
import { SearchGrid, SearchWrapper } from "../styled-components/SearchUtils.jsx";
import { paginate } from "../utils/utils.jsx";
import { FlexRowSpacedWrapper } from "../styled-components/FlexStyles.jsx";

const Results = () => {
	const { state } = useLocation();
	const [currentPage, setCurrentPage] = useState(1);

	localStorage.setItem("search", JSON.stringify(state));
	const [currentResults, setCurrentResults] = useState(
		JSON.parse(localStorage.getItem("search")) || []
	);

	const results = currentResults?.data;
	const resultsLength = currentResults?.data?.length;
	const resultsPerPage = currentResults?.resultsPerPage;
	const resultsFilters = currentResults?.filters;

	const changePage = (page) => setCurrentPage(page);
	const paginatedItems = paginate(results, Number(resultsPerPage), currentPage);

	return (
		<SearchWrapper results={resultsLength}>
			<FlexRowSpacedWrapper nowrap flexStart>
				<Heading type="2">Search Results</Heading>

				<div>
					{resultsFilters?.length === 0 && (
						<Heading type="2">Showing all spells ({resultsLength} spells)</Heading>
					)}
					{resultsFilters?.length !== 0 && (
						<Heading type="4">Spells Found: {resultsLength}</Heading>
					)}
					{resultsFilters?.length > 0 && <SelectedFiltersBox filters={resultsFilters} />}
				</div>
			</FlexRowSpacedWrapper>
			<SearchGrid>
				{paginatedItems.map((item) => (
					<ResultGridItem
						key={item.slug}
						slug={item.slug}
						name={item.name}
						description={item.desc}
						classes={item.dnd_class}
						school={item.school}
						level={item.level}
					/>
				))}
			</SearchGrid>

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
