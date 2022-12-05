import Heading from "../styled-components/Heading.jsx";
import { SearchWrapper } from "../styled-components/SearchUtils.jsx";
import { WhiteNavigation } from "../styled-components/FlexStyles";
import { StyledButton } from "../styled-components/StyledButton.jsx";
import { Pill, PillBox, SearchPills } from "../styled-components/Pills.jsx";
import { useLocation, Link, Outlet, useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";

const SearchResultsMain = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	let stateData;
	let stateFilters;
	let pages;
	let lastPage;

	if (state) {
		stateData = state?.data;
		stateFilters = state?.filters;
		pages = stateData.length;
		lastPage = stateData[pages - 1];
	}

	return (
		<SearchWrapper>
			<Heading type="4">Search Results</Heading>
			<SearchPills>
				{!state ? (
					<>
						<Heading type="5">
							Your search haven't returned any data. Please try again.
						</Heading>{" "}
						<Link to="/filters">Reset filters</Link>
					</>
				) : (
					<>
						<p>Your filters are...</p>
						<PillBox>
							{stateFilters && stateFilters.map((el) => <Pill key={el}>{el}</Pill>)}
						</PillBox>
						<Link to="/filters">Reset filters</Link>
					</>
				)}
			</SearchPills>
			{state && (
				<>
					<Outlet />
					<WhiteNavigation>
						<StyledButton>Previous</StyledButton>
						<strong>Page:</strong> 2 / 5<StyledButton>Next</StyledButton>
					</WhiteNavigation>
				</>
			)}
		</SearchWrapper>
	);
};
export default SearchResultsMain;
