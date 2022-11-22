import Heading from "../styled-components/Heading";
import { FlexColumnWrapper, WhiteSection } from "../styled-components/FlexStyles";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import { StyledButton, StyledLinkButton } from "../styled-components/StyledButton";
import { StyledFilter } from "../styled-components/ClassBubble";
import styled from "styled-components";

const FilterGrid = styled.section`
	display: grid;
	gap: var(--xs);
	grid-template-columns: ${({ column }) => `repeat(${column}, minmax(100px, 120px))`};
`;

const Filters = (props) => {
	const mapFilters = (filterArray) =>
		filterArray.map((filter, index) => (
			<div>
				<StyledFilter isImg={filterArray === schoolsData}>
					<img src={filter.symbol} alt={filter.class} key={index} />
				</StyledFilter>
				<p>{filter.class}</p>
			</div>
		));

	return (
		<WhiteSection>
			<Heading type="2">The Spellbook</Heading>
			<p>Select the filters you'd like to apply, and click on Search.</p>
			<WhiteSection>
				<Heading type="4">Classes</Heading>
				<FilterGrid column="4">
					{mapFilters(classesData)}
					<StyledButton>All Classes</StyledButton>
				</FilterGrid>

				<hr />

				<Heading type="4">Schools of Magic</Heading>
				<FilterGrid column="4">
					{mapFilters(schoolsData)}
					<StyledButton>All Schools</StyledButton>
				</FilterGrid>
			</WhiteSection>
			<StyledLinkButton>Search</StyledLinkButton>
		</WhiteSection>
	);
};

export default Filters;
