import {
	ClassInfo,
	SearchGrid,
	WhiteSectionBackdropLeft
} from "../styled-components/SearchUtils.jsx";
import { WhiteSection } from "../styled-components/FlexStyles";
import { StyledLinkButton } from "../styled-components/StyledButton.jsx";
import Heading from "../styled-components/Heading.jsx";
import { Pill, PillBox } from "../styled-components/Pills.jsx";

const SearchResults = () => {
	return (
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
	);
};

export default SearchResults;
