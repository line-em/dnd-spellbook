import Heading from "../styled-components/Heading";
import { WhiteSection } from "../styled-components/FlexStyles";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import styled from "styled-components";

// Filter grid - 2 columns

const ClassBubble = styled.button`
	border-radius: 50%;
	width: 50%;
	background-color: var(--transparent-black);
	border: 2px var(--dark-gray) solid;
	transition: all 300ms;
	cursor: pointer;

	&:hover {
		background-color: var(--transparent-white);
		border-color: transparent;
	}

	&:hover * {
		filter: drop-shadow(0 0 10px #000);
	}
`;

const StyledFilter = ({ children }) => <ClassBubble>{children}</ClassBubble>;

const FilterGrid = styled.section`
	display: grid;
	gap: var(--xs);
	grid-template-columns: ${({ column }) => `repeat(${column}, minmax(100px, 150px))`};
`;

const Filters = (props) => {
	const classMap = classesData.map((clss, index) => (
		<div style={{ maxWidth: "150px" }}>
			<StyledFilter>
				<img src={clss.symbol} alt={clss.class} key={index} />
			</StyledFilter>
			<Heading type="6">{clss.class}</Heading>
		</div>
	));

	const schoolMap = schoolsData.map((clss, index) => (
		<div style={{ maxWidth: "150px" }}>
			<StyledFilter>
				<img src={clss.symbol} alt={clss.class} key={index} />
			</StyledFilter>
			<Heading type="6">{clss.class}</Heading>
		</div>
	));

	return (
		<WhiteSection style={{ width: "100%" }}>
			<Heading type="2">The Spellbook</Heading>
			<p>Please select the filters you'd like to apply, and click on Search.</p>
			<section style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)" }}>
				<div>
					<Heading type="4">Classes</Heading>
					<FilterGrid column="4">{classMap}</FilterGrid>
				</div>
				<div>
					<Heading type="4">Schools</Heading>
					<FilterGrid column="6">{schoolMap}</FilterGrid>
				</div>
			</section>
		</WhiteSection>
	);
};

export default Filters;
