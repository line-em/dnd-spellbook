import Heading from "../styled-components/Heading";
import { WhiteSection } from "../styled-components/FlexStyles";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import styled from "styled-components";
import { StyledLinkButton } from "../styled-components/StyledButton";

// Filter grid - 2 columns

const ClassBubble = styled.button`
	border-radius: 50%;
	aspect-ratio: 1 / 1;
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

const SchoolBubble = styled(ClassBubble)`
	& img {
		width: 95%;
		height: auto;
	}
`;

const StyledFilter = ({ children }) => <ClassBubble>{children}</ClassBubble>;
const StyledFilterSchool = ({ children }) => <SchoolBubble>{children}</SchoolBubble>;

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
			<StyledFilterSchool>
				<img src={clss.symbol} alt={clss.class} key={index} />
			</StyledFilterSchool>
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
