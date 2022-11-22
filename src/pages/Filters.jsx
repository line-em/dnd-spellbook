import Heading from "../styled-components/Heading";
import {
	FilterGrid,
	FlexRowWrapper,
	SpellbookPage,
	WhiteSection
} from "../styled-components/FlexStyles";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import { StyledButton, StyledLinkButton } from "../styled-components/StyledButton";
import { StyledFilter } from "../styled-components/ClassBubble";
import styled from "styled-components";

const Filters = (props) => {
	const mapFilters = (filterArray) =>
		filterArray.map((filter, index) => (
			<div>
				{/* selected */}
				<StyledFilter isImg={filterArray === schoolsData}>
					{filterArray === schoolsData ? (
						<p>{filter.class}</p>
					) : (
						<img src={filter.symbol} alt={filter.class} key={index} />
					)}
				</StyledFilter>
				{filterArray === schoolsData ? "" : <p>{filter.class}</p>}
			</div>
		));

	return (
		<SpellbookPage>
			<Heading type="2">The Spellbook</Heading>
			<p>Select the filters you'd like to apply, and click on Search.</p>
			<WhiteSection>
				<Heading type="4">Classes</Heading>
				<FilterGrid column="4">
					{mapFilters(classesData)}
					<a>All Classes</a>
				</FilterGrid>

				<hr />

				<Heading type="4">Schools of Magic</Heading>
				<FilterGrid column="4">
					{mapFilters(schoolsData)}
					<StyledButton>All Schools</StyledButton>
				</FilterGrid>
			</WhiteSection>
			<FlexRowWrapper>
				<StyledLinkButton path="/">Home</StyledLinkButton>
				<StyledLinkButton>Search</StyledLinkButton>
			</FlexRowWrapper>
		</SpellbookPage>
	);
};

export default Filters;
