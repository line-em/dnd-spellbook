import Heading from "../styled-components/Heading.jsx";
import {
	ClassInfo,
	SearchGrid,
	SearchWrapper,
	WhiteSectionBackdropLeft
} from "../styled-components/SearchUtils.jsx";
import { WhiteNavigation, WhiteSection } from "../styled-components/FlexStyles";
import { StyledButton, StyledLinkButton } from "../styled-components/StyledButton.jsx";
import { Pill, PillBox, SearchPills } from "../styled-components/Pills.jsx";
import { useLocation, Link } from "react-router-dom";

const SearchResultsMain = (props) => {
	const { state } = useLocation();
	console.log("Is receiving props");
	console.log(props);
	console.log("and state");
	console.log(state);

	return (
		<SearchWrapper>
			<Heading type="4">Search Results</Heading>
			<SearchPills>
				<div>
					<p>Your filters are...</p>
					<PillBox>
						<Pill>Bard</Pill>
						<Pill>Bard</Pill>
						<Pill>Druid</Pill>
						<Pill>Wizard</Pill>
					</PillBox>
				</div>
				<a href="">Reset filters</a>
			</SearchPills>
			<SearchGrid>
				<WhiteSection>
					<WhiteSectionBackdropLeft school="Abjuration"></WhiteSectionBackdropLeft>
					<Heading type="4">"Abhorrent Apparition"</Heading>
					<p>Lorem ipsum dolor sit amet consectetur...</p>
					<ClassInfo>
						<PillBox>
							<Pill>Bard</Pill>
							<Pill>Druid</Pill>
							<Pill>Wizard</Pill>
							<Pill>Wizard</Pill>
							<Pill>Wizard</Pill>
						</PillBox>
						<Pill>
							Transmutation <br /> Level 1
						</Pill>
					</ClassInfo>
					<StyledLinkButton>read more</StyledLinkButton>
				</WhiteSection>
			</SearchGrid>
			<WhiteNavigation>
				<StyledButton>Previous</StyledButton>
				<p>
					<strong>Page:</strong> 2 / 5
				</p>
				<StyledButton>Next</StyledButton>
			</WhiteNavigation>
		</SearchWrapper>
	);
};
export default SearchResultsMain;
