import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ResultGridItem from "../components/ResultGridItem.jsx";
import Pagination from "../components/Pagination.jsx";
import SelectedFiltersBox from "../components/SelectedFiltersBox.jsx";
import Heading from "../styled-components/Heading.jsx";
import { SearchGrid, SearchWrapper } from "../styled-components/SearchUtils.jsx";
import { paginate } from "../utils/utils.jsx";
import { FlexRowSpacedWrapper } from "../styled-components/FlexStyles.jsx";

const Results = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);
	const [currentResults, setCurrentResults] = useState(
		state || JSON.parse(localStorage.getItem("search")) || []
	);

	useEffect(() => {
		state && localStorage.setItem("search", JSON.stringify(state));
	}, []);

	const results = currentResults?.data;
	const resultsLength = currentResults?.data?.length;
	const resultsPerPage = currentResults?.resultsPerPage;
	const resultsFilters = currentResults?.filters;
	const changePage = (page) => setCurrentPage(page);
	const paginatedItems = paginate(results, Number(resultsPerPage), currentPage);

	if (!paginatedItems) {
		navigate("/404");
	}

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
