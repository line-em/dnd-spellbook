import { useLocation } from "react-router-dom";
import { useState } from "react";
import ResultGridItem from "../components/ResultGridItem.jsx";
import Pagination from "../components/Pagination.jsx";
import SelectedFiltersBox from "../components/SelectedFiltersBox.jsx";
import Heading from "../styled-components/Heading.jsx";
import { SearchWrapper } from "../styled-components/SearchUtils.jsx";
import { paginate } from "../utils/utils.jsx";

const Results = () => {
	const { state } = useLocation();
	const [currentPage, setCurrentPage] = useState(1);
	const [currentResults, setCurrentResults] = useState(state || []);
	const results = currentResults?.data;
	const resultsLength = currentResults?.data?.length;
	const resultsPerPage = currentResults?.resultsPerPage;
	const resultsFilters = currentResults?.filters;

	const changePage = (page) => setCurrentPage(page);

	const paginatedItems = paginate(results, Number(resultsPerPage), currentPage);

	return (
		<SearchWrapper results={resultsLength}>
			<Heading type="4">Search Results</Heading>

			{resultsFilters?.length === 0 && <Heading type="3">Showing all spells.</Heading>}
			{resultsFilters?.length > 0 && <SelectedFiltersBox filters={resultsFilters} />}

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
