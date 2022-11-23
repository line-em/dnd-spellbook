import Heading from "../styled-components/Heading.jsx";
import { SearchGrid, WhiteSectionBackdropLeft } from "../styled-components/SearchUtils.jsx";
import { WhiteSection } from "../styled-components/FlexStyles";
import { StyledButton, StyledLinkButton } from "../styled-components/StyledButton.jsx";
import { Pill, PillBox } from "../styled-components/Pills.jsx";

const SearchResultsMain = (props) => {
	return (
		<div style={{ width: "100%" }}>
			<Heading type="4">Search Results</Heading>
			<p>Your filters are...</p> - <a href="">Reset filters</a>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(400px,auto))"
				}}
			>
				<WhiteSection>
					<WhiteSectionBackdropLeft school="Abjuration2"></WhiteSectionBackdropLeft>
					<Heading type="4">"Abhorrent Apparition"</Heading>
					<p>Lorem ipsum dolor sit amet consectetur...</p>
					<SearchGrid>
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
					</SearchGrid>
					<StyledLinkButton>Read More</StyledLinkButton>
				</WhiteSection>
				<WhiteSection>
					<WhiteSectionBackdropLeft school="Necromancy"></WhiteSectionBackdropLeft>
					<Heading type="4">"Abhorrent Apparition"</Heading>
					<SearchGrid>
						<div>Bard,Druid</div>
						<div>Illusion</div>
						<StyledLinkButton>Read More</StyledLinkButton>
					</SearchGrid>
				</WhiteSection>
				<WhiteSection>
					<WhiteSectionBackdropLeft school="Illusion"></WhiteSectionBackdropLeft>
					<Heading type="4">"Abhorrent Apparition"</Heading>
					<SearchGrid>
						<div>Bard,Druid</div>
						<div>Illusion</div>
						<StyledLinkButton>Read More</StyledLinkButton>
					</SearchGrid>
				</WhiteSection>
				<WhiteSection>
					<WhiteSectionBackdropLeft school="Transmutation"></WhiteSectionBackdropLeft>
					<Heading type="4">"Abhorrent Apparition"</Heading>
					<SearchGrid>
						<div>Bard,Druid</div>
						<div>Illusion</div>
						<StyledLinkButton>Read More</StyledLinkButton>
					</SearchGrid>
				</WhiteSection>
				<WhiteSection>
					<WhiteSectionBackdropLeft school="Enchantment"></WhiteSectionBackdropLeft>
					<Heading type="4">"Abhorrent Apparition"</Heading>
					<SearchGrid>
						<div>Bard,Druid</div>
						<div>Illusion</div>
						<StyledLinkButton>Read More</StyledLinkButton>
					</SearchGrid>
				</WhiteSection>
				<WhiteSection>
					<WhiteSectionBackdropLeft school="Evocation"></WhiteSectionBackdropLeft>
					<Heading type="4">"Abhorrent Apparition"</Heading>
					<SearchGrid>
						<div>Bard,Druid</div>
						<div>Illusion</div>
						<StyledLinkButton>Read More</StyledLinkButton>
					</SearchGrid>
				</WhiteSection>
			</div>
			<hr />
			<StyledButton>Previous</StyledButton>
			<StyledButton>Next</StyledButton>
			<p>Page: 2 / 5</p>
			<hr />
		</div>
	);
};

export default SearchResultsMain;
