import Heading from "../styled-components/Heading.jsx";
import {
	ClassInfo,
	SearchGrid,
	SearchWrapper,
	WhiteSectionBackdropLeft
} from "../styled-components/SearchUtils.jsx";
import { WhiteNavigation, WhiteSection } from "../styled-components/FlexStyles";
import { StyledButton, StyledLinkButton } from "../styled-components/StyledButton.jsx";
import { Pill, PillBox } from "../styled-components/Pills.jsx";

const SearchResultsMain = (props) => {
	return (
		<SearchWrapper>
			<Heading type="4">Search Results</Heading>
			<p>Your filters are...</p> - <a href="">Reset filters</a>
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
				<WhiteSection>
					<WhiteSectionBackdropLeft school="Necromancy"></WhiteSectionBackdropLeft>
					<Heading type="4">"Abhorrent Apparition"</Heading>
					<ClassInfo>
						<div>Bard,Druid</div>
						<div>Illusion</div>
						<StyledLinkButton>Read More</StyledLinkButton>
					</ClassInfo>
				</WhiteSection>
				<WhiteSection>
					<WhiteSectionBackdropLeft school="Illusion"></WhiteSectionBackdropLeft>
					<Heading type="4">"Abhorrent Apparition"</Heading>
					<ClassInfo>
						<div>Bard,Druid</div>
						<div>Illusion</div>
						<StyledLinkButton>read more</StyledLinkButton>
					</ClassInfo>
				</WhiteSection>
				<WhiteSection>
					<WhiteSectionBackdropLeft school="Transmutation"></WhiteSectionBackdropLeft>
					<Heading type="4">"Abhorrent Apparition"</Heading>
					<ClassInfo>
						<div>Bard,Druid</div>
						<div>Illusion</div>
						<StyledLinkButton>Read More</StyledLinkButton>
					</ClassInfo>
				</WhiteSection>
				<WhiteSection>
					<WhiteSectionBackdropLeft school="Enchantment"></WhiteSectionBackdropLeft>
					<Heading type="4">"Abhorrent Apparition"</Heading>
					<ClassInfo>
						<div>Bard,Druid</div>
						<div>Illusion</div>
						<StyledLinkButton>Read More</StyledLinkButton>
					</ClassInfo>
				</WhiteSection>
				<WhiteSection>
					<WhiteSectionBackdropLeft school="Evocation"></WhiteSectionBackdropLeft>
					<Heading type="4">"Abhorrent Apparition"</Heading>
					<ClassInfo>
						<div>Bard,Druid</div>
						<div>Illusion</div>
						<StyledLinkButton>Read More</StyledLinkButton>
					</ClassInfo>
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
