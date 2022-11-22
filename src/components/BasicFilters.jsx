import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import Heading from "../styled-components/Heading";
import { StyledButton } from "../styled-components/StyledButton";
import { StyledFilter } from "../styled-components/ClassBubble";
import { FilterGrid, WhiteSection } from "../styled-components/FlexStyles";

const BasicFilters = () => {
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
		<WhiteSection>
			<Heading type="4">Classes</Heading>
			<FilterGrid>
				{mapFilters(classesData)}
				<a>All Classes</a>
			</FilterGrid>
			<hr />
			<Heading type="4">Schools of Magic</Heading>
			<FilterGrid>
				{mapFilters(schoolsData)}
				<StyledButton>All Schools</StyledButton>
			</FilterGrid>
		</WhiteSection>
	);
};

export default BasicFilters;
