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
				<StyledFilter isImg={!filter.icon}>
					{filter.icon ? (
						<img src={filter.icon} alt={filter.class} key={index} />
					) : (
						<p>{filter.class}</p>
					)}
				</StyledFilter>
				{filter.icon ? <p>{filter.class}</p> : ""}
			</div>
		));
	return (
		<WhiteSection>
			<Heading type="4">Classes</Heading>
			<FilterGrid>{mapFilters(classesData)}</FilterGrid>
			<hr />
			<Heading type="4">Schools of Magic</Heading>
			<FilterGrid>{mapFilters(schoolsData)}</FilterGrid>
		</WhiteSection>
	);
};

export default BasicFilters;
