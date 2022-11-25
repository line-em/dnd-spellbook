import { useEffect, useState } from "react";
import axios from "axios";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import Heading from "../styled-components/Heading";
import { ErrorBox, FlexRowWrapper, SpellbookPage } from "../styled-components/FlexStyles";
import { StyledLinkButton } from "../styled-components/StyledButton";
import { WhiteSection } from "../styled-components/FlexStyles";
import BasicFilters from "../components/BasicFilters";

const Filters = () => {
	const [filterSchool, setFilterSchool] = useState([]);
	const [filterClasses, setFilterClasses] = useState([]);
	const [numberOfResults, setNumberOfResults] = useState("6");
	const [ordering, setOrdering] = useState("level");

	const updateClasses = (filters) => {
		const classesArray = Object.keys(filters);
		const chosenClasses = classesArray.filter((item) => filters[item]);
		setFilterClasses(chosenClasses);
	};

	const updateSchools = (filters) => {
		const schoolArray = Object.keys(filters);
		const chosenSchool = schoolArray.filter((item) => filters[item]);
		setFilterSchool(chosenSchool);
	};

	useEffect(() => {
		const options = {
			method: "GET",
			url: "https://api.open5e.com/spells/",
			params: {
				school: "Transmutation",
				limit: numberOfResults,
				page: "1",
				ordering: ordering
			}
		};
		try {
			axios.request(options).then((res) => {
				const queryClasses = res.data.results.filter((result) => {
					const splitClasses = result.dnd_class.split(",");
					const trimClasses = splitClasses.map((item) => item.trim());

					return filterClasses.every((element) => trimClasses.includes(element));
				});
				const querySchools = res.data.results.filter((result) => {
					const splitSchools = result.school.split(",");
					const trimSchools = splitSchools.map((item) => item.trim());

					return filterSchool.some((element) => trimSchools.includes(element));
				});
				console.log(queryClasses);
				console.log(querySchools);
			});
		} catch {
			console.log("error");
		}
	}, []);

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
					{/* <label htmlFor="everyClass">
						<input type="checkbox" /> Spells must be available for all/some selected classes
						// USE SELECTED FOR DROPDOWN
					</label> */}
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
					<option value="6">6</option>
					<option value="9">9</option>
				</select>

				<label htmlFor="ordering">Results per page</label>
				<select id="ordering" onChange={(e) => setOrdering(e.target.value)}>
					<option value="level">Level - ascending</option>
					<option value="-level">Level - descending</option>
					<option value="name">Name - ascending</option>
					<option value="-name">Name - descending</option>
				</select>

				<FlexRowWrapper>
					<StyledLinkButton path="/">Home</StyledLinkButton>
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
