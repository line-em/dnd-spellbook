import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import Heading from "../styled-components/Heading";
import {
	ErrorBox,
	FlexRowSpacedWrapper,
	FlexRowWrapper,
	SpellbookPage
} from "../styled-components/FlexStyles";
import { StyledButton, StyledLinkButton } from "../styled-components/StyledButton";
import { WhiteSection } from "../styled-components/FlexStyles";
import BasicFilters from "../components/BasicFilters";
import { ApiContext } from "../context/ApiContext";
import { paginate, sanitizeFilter } from "../utils/utils";
import { Ripples } from "@uiball/loaders";

const Filters = () => {
	const apiData = useContext(ApiContext);
	const [filterSchools, setFilterSchools] = useState({});
	const [filterClasses, setFilterClasses] = useState({});
	const [resultsPerPage, setResultsPerPage] = useState("6");
	const [showError, setShowError] = useState();
	const [isLoading, setIsLoading] = useState();
	const navigate = useNavigate();
	let filterData = {};

	const handleNavigate = (url, data, filters) => {
		setIsLoading(true);
		// console.log(data);
		// console.log(data.length);
		// {
		// 	stateData[0][0]?.map((title, index) => (
		// 		<Link to={`/searchresults/${index + 1}`}>{title.name}'s Page</Link>
		// 	));
		// }
		// generatePages(data.length)
		const pageIndexes = Array.from(data.length, (value, index) => index + 1);
		// create map of paths and only send relevant data to it
		// from web        to={generatePath(Routes.MESSAGES, { userId: Routes.NEW_ID_VALUE })}
		// generatePath('/user/:id', {
		//     id: 1,
		//     name: 'John',
		// })
		// Another possibility is the useSearchParams
		return setTimeout(() => {
			navigate(`${url}/1`, { state: { data, filters } });
		}, 2000);
	};

	// const generatePages = (numberOfPages) => {
	// 	while (i < numberOfPages) {

	// 	}
	// }

	const handleSearch = () => {
		setShowError(false);
		let schoolsArrFilter = sanitizeFilter(filterSchools);
		let classesArrFilter = sanitizeFilter(filterClasses);
		let allFilters = schoolsArrFilter.concat(classesArrFilter);

		try {
			if (schoolsArrFilter.length === 0 && classesArrFilter.length === 0) {
				filterData = paginate(apiData, resultsPerPage);
				handleNavigate("/searchresults", filterData, allFilters);
			} else {
				const searchClass = apiData.filter((spell) =>
					classesArrFilter.every((element) => spell["dnd_class"].includes(element))
				);
				const searchSchool = searchClass.filter((spell) =>
					schoolsArrFilter.some((element) => spell["school"].includes(element))
				);
				filterData = paginate(searchSchool, resultsPerPage);
				handleNavigate("/searchresults", filterData, allFilters);
			}
		} catch {
			setShowError(true);
		}
	};

	return (
		<>
			<SpellbookPage>
				<Heading type="2">The Spellbook</Heading>
				<p>Select the filters you'd like to apply, and click on Search.</p>
				<WhiteSection>
					<BasicFilters
						title="Classes"
						filterArray={classesData}
						filterClasses={filterClasses}
						setFilterClasses={setFilterClasses}
					/>
					<hr />
					<BasicFilters
						title="Schools of Magic"
						filterArray={schoolsData}
						filterSchools={filterSchools}
						setFilterSchools={setFilterSchools}
					/>
				</WhiteSection>
				<FlexRowSpacedWrapper>
					<Heading type="4">
						<label htmlFor="numberOfResults">Results per page</label>
						<select
							id="numberOfResults"
							value={resultsPerPage}
							onChange={(e) => setResultsPerPage(e.target.value)}
						>
							<option value="3">3</option>
							<option value="6">6</option>
							<option value="9">9</option>
							<option value="12">12</option>
						</select>
					</Heading>
					<FlexRowWrapper>
						<StyledLinkButton path="/">Home</StyledLinkButton>
						<StyledButton func={() => handleSearch()}>
							{isLoading ? (
								<>
									<Ripples size={30} color="var(--black)" /> Loading...
								</>
							) : (
								"Search"
							)}
						</StyledButton>
					</FlexRowWrapper>
				</FlexRowSpacedWrapper>
			</SpellbookPage>

			{showError && (
				<ErrorBox>
					<p>
						An error has occured during the Search. <strong>Please try again.</strong>
					</p>
				</ErrorBox>
			)}
		</>
	);
};

export default Filters;
