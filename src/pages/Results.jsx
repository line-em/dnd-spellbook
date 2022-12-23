import Heading from "../styled-components/Heading.jsx";
import { SearchWrapper } from "../styled-components/SearchUtils.jsx";
import { WhiteNavigation } from "../styled-components/FlexStyles";
import { StyledButton, StyledLinkButton } from "../styled-components/StyledButton.jsx";
import { Pill, PillBox, SearchPills } from "../styled-components/Pills.jsx";
import { useLocation, Link } from "react-router-dom";
import ResultGridItem from "../components/ResultGridItem.jsx";
import { useState } from "react";

const Results = () => {
	const { state } = useLocation();
	const { currentPage, setCurrentPage } = useState();

	const pageSize = state?.resultsPerPage;
	const stateData = state?.data;
	const stateFilters = state?.filters;

	console.log(pageSize);

	return (
		<SearchWrapper>
			<Heading type="4">Search Results</Heading>
			<SearchPills>
				{!state ? (
					<Heading type="5">
						Your search haven't returned any data. Please try again.
					</Heading>
				) : (
					<PillBox>
						{stateFilters && stateFilters.map((el) => <Pill key={el}>{el}</Pill>)}
						<Pill className="reset">
							<StyledLinkButton to="/filters">Reset filters</StyledLinkButton>
						</Pill>
					</PillBox>
				)}
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
