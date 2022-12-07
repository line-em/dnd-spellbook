import Heading from "../styled-components/Heading.jsx";
import { SearchWrapper } from "../styled-components/SearchUtils.jsx";
import { WhiteNavigation } from "../styled-components/FlexStyles";
import { StyledButton } from "../styled-components/StyledButton.jsx";
import { Pill, PillBox, SearchPills } from "../styled-components/Pills.jsx";
import { useLocation, useNavigate, useParams, Link, Outlet } from "react-router-dom";

const SearchResultsMain = () => {
	const { state } = useLocation();
	const params = useParams();
	const navigate = useNavigate();
	let stateData;
	let stateFilters;
	let pages;
	let currentPage;
	let lastPage;
	console.log(params);

	if (state) {
		stateData = state?.data;
		// eachpage stateData[index] - length: 6 resultados
		// eachspell stateData[index][index] - state[0][0].name - titulo da skill
		stateFilters = state?.filters;
		pages = stateData.length;
		// currentPage = useParams?
		lastPage = stateData[pages - 1];
	}

	// IMPORT USEPARAMS ON SEARCH RESULTS MAIN (SEARCH RESULTS) TO MAKE DYNAMIC PAGING (SEARCHRESULTS/1, SEARCHRESULTS/2), ETC.
	// Params, ideally, will be current page. I will have to compare it with the total pages.
	// Separate and coordinate the stateData (the data received) to the corresponding page -> PAGE 1, ARRAY INDEX 0, PAGE 2, ARRAY INDEX 1, AND SO ON.
	// Make sure the App knows the last page/param.
	// Pass props to the Outlet component to match the current page. Remember, props here are called Context. Context={array[currentPage]}, possibly stateData[currentPage]
	// Outlet will have to map through the array. The READ MORE link will be another dynamic routing, using the spell SLUG, but leave it for later.
	// MAKE PAGINATION ITS OWN COMPONENT. IT WILL RECEIVE THE SAME PROPS AS OUTLET. - PAGES, LASTPAGE, CURRENTPAGE

	// Now in the component you render based on the route you can use useParams to get the params

	// const ViewCompany = () => {
	//    const { documentId } = useParams();
	//    // do what want with documentId
	// }

	// Depending on the PAGE (PARAM), load THIS (ARRAY[CURRENTPAGE]).

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
