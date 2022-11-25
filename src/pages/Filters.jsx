import { useEffect, useState } from "react";
import axios from "axios";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import Heading from "../styled-components/Heading";
import { ErrorBox, FlexRowWrapper, SpellbookPage } from "../styled-components/FlexStyles";
import { StyledLinkButton } from "../styled-components/StyledButton";
import { WhiteSection } from "../styled-components/FlexStyles";
import BasicFilters from "../components/BasicFilters";
import SearchResultsMain from "./SearchResultsMain.jsx";

const Filters = () => {
	const [filterSchool, setFilterSchool] = useState([]);
	const [filterClasses, setFilterClasses] = useState([]);

	const updateClasses = (filters) => {
		const classesArray = Object.keys(filters);
		const chosenClasses = classesArray.filter((item) => filters[item]);
		setFilterClasses(chosenClasses);
		console.log(chosenClasses);
	};

	const updateSchools = (filters) => {
		const schoolArray = Object.keys(filters);
		const chosenSchool = schoolArray.filter((item) => filters[item]);
		setFilterSchool(chosenSchool);
		console.log(chosenSchool);
	};

	// useEffect(() => {
	// 	const options = {
	// 		method: "GET",
	// 		url: "https://api.open5e.com/spells/",
	// 		params: { school: "Transmutation", limit: '2', page: '3', ordering: 'level' }
	// 	};

	// 	try {
	// 		axios.request(options).then((res) => {
	// 			const filteredData = res.data.results.filter((result) => {
	// 				const splitClasses = result.dnd_class.split(",");
	// 				const trimClasses = splitClasses.map((item) => item.trim());
	// 				const classesQuery = ["Bard", "Druid"];

	// 				// const containsQuery = (unfilteredData, query) =>
	// 				// 	query.every((element) => unfilteredData.includes(element));

	// 				return classesQuery.every((element) => trimClasses.includes(element));
	// 			});
	// 			console.log(filteredData);
	// 		});
	// 	} catch {
	// 		console.log("error");
	// 	}
	// }, []);

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
