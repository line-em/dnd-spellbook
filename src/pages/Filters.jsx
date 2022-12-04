import { useContext, useEffect, useState } from "react";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import Heading from "../styled-components/Heading";
import { ErrorBox, FlexRowWrapper, SpellbookPage } from "../styled-components/FlexStyles";
import { StyledButton, StyledLinkButton } from "../styled-components/StyledButton";
import { WhiteSection } from "../styled-components/FlexStyles";
import BasicFilters from "../components/BasicFilters";
import { ApiContext } from "../context/ApiContext";
import useToggle from "../hooks/useToggle.jsx";

const Filters = () => {
	const [filterSchool, setFilterSchool] = useState([]);
	const [filterClasses, setFilterClasses] = useState([]);
	const [numberOfResults, setNumberOfResults] = useState("6");
	const [ordering, setOrdering] = useState("level");
	const [filterData, setFilterData] = useState({});
	const [runSearch, setRunSearch] = useToggle();
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

	console.log(runSearch);
	useEffect(() => {
		console.log(apiData);
		console.log(filterClasses);
		const filtered = apiData.filter((spell) =>
			filterClasses.every((element) => spell["dnd_class"].includes(element))
		);
		console.log(filtered);
		//  filterClasses.every((element) => trimClasses.includes(element))
		// useToggle
		// Filter by class, including "",
		// Filter by school
		// Sort via ordering
		// Slice correct quantity
		// Figure out route props
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
				<FlexRowWrapper>
					<div>
						<label htmlFor="numberOfResults">
							<Heading type="4">Results per page</Heading>
						</label>
						<select
							id="numberOfResults"
							onChange={(e) => setNumberOfResults(e.target.value)}
						>
							<option value="3">3</option>
							<option value="6" defaultValue>
								6
							</option>
							<option value="9">9</option>
						</select>
					</div>
					<div>
						<label htmlFor="ordering">
							<Heading type="4">Ordering</Heading>
						</label>
						<select id="ordering" onChange={(e) => setOrdering(e.target.value)}>
							<option value="level" defaultValue>
								Level - ascending
							</option>
							<option value="-level">Level - descending</option>
							<option value="name">Name - ascending</option>
							<option value="-name">Name - descending</option>
						</select>
					</div>
				</FlexRowWrapper>
				<FlexRowWrapper>
					<StyledLinkButton path="/">Home</StyledLinkButton>
					<StyledButton func={() => setRunSearch(!runSearch)}>Search</StyledButton>
					{/* <StyledLinkButton path="/searchresults">Search</StyledLinkButton> */}
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
