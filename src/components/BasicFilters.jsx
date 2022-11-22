import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import { WhiteSection } from "../styled-components/FlexStyles";
import { useState } from "react";
import BasicFiltersLogic from "./BasicFiltersLogic.jsx";

const BasicFilters = () => {
	const [isSelected, setIsSelected] = useState(false);

	const handleSelected = (selection) => console.log((prev) => [...prev, selection]);

	return (
		<WhiteSection>
			<BasicFiltersLogic title="Classes" filterArray={classesData} initialState={true} />
			<hr />
			<BasicFiltersLogic
				title="Schools of Magic"
				filterArray={schoolsData}
				initialState={false}
			/>
		</WhiteSection>
	);
};

export default BasicFilters;
