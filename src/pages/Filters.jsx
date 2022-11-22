import Heading from "../styled-components/Heading";
import { WhiteSection } from "../styled-components/FlexStyles";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import { StyledLinkButton } from "../styled-components/StyledButton";
import { StyledFilter } from "../styled-components/ClassBubble";
import styled from "styled-components";

const FilterGrid = styled.section`
	display: grid;
	gap: var(--xs);
	grid-template-columns: ${({ column }) => `repeat(${column}, minmax(100px, 120px))`};
`;

const Filters = (props) => {
	const classMap = classesData.map((clss, index) => (
		<div style={{ maxWidth: "150px" }}>
			<StyledFilter>
				<img src={clss.symbol} alt={clss.class} key={index} />
			</StyledFilter>
			<p style={{ fontSize: "14px" }}>{clss.class}</p>
		</div>
	));

	const schoolMap = schoolsData.map((clss, index) => (
		<div style={{ maxWidth: "150px" }}>
			<StyledFilter isImg>
				<img src={clss.symbol} alt={clss.class} key={index} />
			</StyledFilter>
			<p style={{ fontSize: "14px" }}>{clss.class}</p>
		</div>
	));

	return (
		<WhiteSection style={{ width: "100%" }}>
			<Heading type="2">The Spellbook</Heading>
			<p>Please select the filters you'd like to apply, and click on Search.</p>
			<WhiteSection style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)" }}>
				<div>
					<Heading type="4">Classes</Heading>
					<FilterGrid column="4">{classMap}</FilterGrid>
				</div>
				-
				<div>
					<Heading type="4">Schools</Heading>
					<FilterGrid column="4">{schoolMap}</FilterGrid>
				</div>
			</WhiteSection>
			<StyledLinkButton>Search</StyledLinkButton>
		</WhiteSection>
	);
};

export default Filters;
