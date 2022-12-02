import { useContext, useEffect, useState } from "react";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import Heading from "../styled-components/Heading";
import { ErrorBox, FlexRowWrapper, SpellbookPage } from "../styled-components/FlexStyles";
import { StyledLinkButton } from "../styled-components/StyledButton";
import { WhiteSection } from "../styled-components/FlexStyles";
import BasicFilters from "../components/BasicFilters";
import { ApiContext } from "../context/ApiContext";

const Filters = () => {
	const [filterSchool, setFilterSchool] = useState([]);
	const [filterClasses, setFilterClasses] = useState([]);
	const [numberOfResults, setNumberOfResults] = useState("6");
	const [ordering, setOrdering] = useState("level");
	const [filterData, setFilterData] = useState({});
	const [runSearch, setRunSearch] = useState(false);
	const apiData = useContext(ApiContext);

	const updateClasses = (filters) => {
		const classesArray = Object.keys(filters);
		const chosenClasses = classesArray.filter((item) => filters[item]);
		if (chosenClasses.includes("♾️ All Filters")) {
			chosenClasses.pop();
		}
		setFilterClasses(chosenClasses);
	};

	const updateSchools = (filters) => {
		const schoolArray = Object.keys(filters);
		const chosenSchool = schoolArray.filter((item) => filters[item]);
		if (chosenSchool.includes("♾️ All Filters")) {
			chosenSchool.pop();
		}
		const stringifiedSchool = chosenSchool.toString();
		setFilterSchool(stringifiedSchool);
	};

	useEffect(() => {
		console.log(apiData);
	}, [runSearch]);

	return (
		<>
			<SpellbookPage>
				<Heading type="2">The Spellbook</Heading>
				<p>Select the filters you'd like to apply, and click on Search.</p>
				<WhiteSection>
					<BasicFilters
						title="Classes"
						filterArray={classesData}
						getClasses={(classes) => updateClasses(classes)}
					/>
					<hr />
					<BasicFilters
						title="Schools of Magic"
						filterArray={schoolsData}
						getSchool={(school) => updateSchools(school)}
					/>
				</WhiteSection>
				<label htmlFor="numberOfResults">Results per page</label>
				<select id="numberOfResults" onChange={(e) => setNumberOfResults(e.target.value)}>
					<option value="3">3</option>
					<option value="6" defaultValue>
						6
					</option>
					<option value="9">9</option>
				</select>

				<label htmlFor="ordering">Results per page</label>
				<select id="ordering" onChange={(e) => setOrdering(e.target.value)}>
					<option value="level" defaultValue>
						Level - ascending
					</option>
					<option value="-level">Level - descending</option>
					<option value="name">Name - ascending</option>
					<option value="-name">Name - descending</option>
				</select>

				<FlexRowWrapper>
					<StyledLinkButton path="/">Home</StyledLinkButton>
					{/* <StyledLinkButton
						path="/searchresults"
						onClick={() => setRunSearch(!runSearch)}
					>
						Search
					</StyledLinkButton> */}
					<StyledLinkButton path="/searchresults">Search</StyledLinkButton>
				</FlexRowWrapper>
			</SpellbookPage>
			{/* <ErrorBox>
					<p>
						An error has occured during the Search. <strong>Please try again.</strong>
					</p>
				</ErrorBox> */}
		</>
	);
};

export default Filters;
