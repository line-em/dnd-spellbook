import Heading from "../styled-components/Heading.jsx";
import { SearchWrapper } from "../styled-components/SearchUtils.jsx";
import { WhiteNavigation } from "../styled-components/FlexStyles";
import { StyledButton } from "../styled-components/StyledButton.jsx";
import { Pill, PillBox, SearchPills } from "../styled-components/Pills.jsx";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ResultGridItem from "../components/ResultGridItem.jsx";

const Results = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	let stateData;
	let stateFilters;
	let pages;
	let currentPage;
	let lastPage;
	console.log(state);

	if (state) {
		stateData = state?.data;
		// eachpage stateData[index] - length: 6 resultados
		// eachspell stateData[index][index] - state[0][0].name - titulo da skill
		stateFilters = state?.filters;
		pages = stateData.length;
		// currentPage = useParams?
		lastPage = stateData[pages - 1];
	}

	return (
		<SearchWrapper>
			<Heading type="4">Search Results</Heading>
			<SearchPills>
				{!state ? (
					<Heading type="5">
						Your search haven't returned any data. Please try again.
					</Heading>
				) : (
					<>
						<p>Your filters are...</p>
						<PillBox>
							{stateFilters && stateFilters.map((el) => <Pill key={el}>{el}</Pill>)}
						</PillBox>
					</>
				)}
				<Link to="/filters">Reset filters</Link>
			</SearchPills>
			{state && (
				<>
					<ResultGridItem />
					<WhiteNavigation>
						<StyledButton>Previous</StyledButton>
						<strong>Page:</strong> 2 / 5<StyledButton>Next</StyledButton>
					</WhiteNavigation>
				</>
			)}
		</SearchWrapper>
	);
};
export default Results;
