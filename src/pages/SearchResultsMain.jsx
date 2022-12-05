import Heading from "../styled-components/Heading.jsx";
import { SearchWrapper } from "../styled-components/SearchUtils.jsx";
import { WhiteNavigation } from "../styled-components/FlexStyles";
import { StyledButton } from "../styled-components/StyledButton.jsx";
import { Pill, PillBox, SearchPills } from "../styled-components/Pills.jsx";
import { useLocation, Link } from "react-router-dom";
import SearchResults from "../components/SearchResults.jsx";

const SearchResultsMain = () => {
	const { state } = useLocation();
	const stateData = state.data;
	const stateFilters = state.filters;
	console.log(stateFilters);
	console.log(stateData.forEach((element) => console.log(element)));

	return (
		<SearchWrapper>
			<Heading type="4">Search Results</Heading>
			<SearchPills>
				<p>Your filters are...</p>
				<PillBox>
					{stateFilters.map((el) => (
						<Pill>{el}</Pill>
					))}
				</PillBox>

				<Link to="/filters">Reset filters</Link>
			</SearchPills>
			<SearchResults />
			<WhiteNavigation>
				<StyledButton>Previous</StyledButton>
				<strong>Page:</strong> 2 / 5<StyledButton>Next</StyledButton>
			</WhiteNavigation>
		</SearchWrapper>
	);
};
export default SearchResultsMain;
