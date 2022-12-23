import { ApiContext } from "../context/ApiContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import classesData from "../assets/classes/classesData";
import schoolsData from "../assets/schools/schoolsData";
import Heading from "../styled-components/Heading";
import { FlexRowSpacedWrapper, SpellbookPage } from "../styled-components/FlexStyles";
import { WhiteSection } from "../styled-components/FlexStyles";
import { transformObj, getClasses, getSchools } from "../utils/utils";
import FilterGrid from "../components/FilterGrid";
import ErrorMessage from "../components/ErrorMessage.jsx";
import RowButtons from "../components/RowButtons.jsx";

const Filters = () => {
	const navigate = useNavigate();
	const apiData = useContext(ApiContext);
	const [filterSchools, setFilterSchools] = useState({});
	const [filterClasses, setFilterClasses] = useState({});
	const [resultsPerPage, setResultsPerPage] = useState("6");
	const [showError, setShowError] = useState(false);
	const [isLoading, setIsLoading] = useState();
	const [errorMessage, setErrorMessage] = useState("An error has occured during search");

	const handleSearch = () => {
		setShowError(false);
		const parsedSchools = transformObj(filterSchools);
		const parsedClasses = transformObj(filterClasses);
		const allFilters = parsedSchools.concat(parsedClasses);
		let searchResult = [];

		if (parsedSchools.length === 0 && parsedClasses.length === 0) {
			handleNavigate("/results", apiData, allFilters);
		} else {
			if (parsedSchools.length > 0 && parsedClasses.length > 0) {
				const filteredClasses = getClasses(apiData, parsedClasses, "dnd_class");
				searchResult = getSchools(filteredClasses, parsedSchools, "school");
			}

			if (parsedSchools.length > 0 && parsedClasses.length === 0) {
				searchResult = getSchools(apiData, parsedSchools, "school");
			}

			if (parsedClasses.length > 0 && parsedSchools.length === 0) {
				searchResult = getClasses(apiData, parsedClasses, "dnd_class");
			}

			handleNavigate("/results", searchResult, allFilters);
		}
	};

	const handleNavigate = (url, data, filters) => {
		console.log(data);
		setIsLoading(true);

		if (data.length > 0)
			return setTimeout(() => {
				navigate(`${url}/`, { state: { data, filters, resultsPerPage } });
			}, 2000);

		if (data.length === 0) {
			setShowError(true);
			setIsLoading(false);
			setFilterClasses({});
			setFilterSchools({});
			setErrorMessage("Your search hasn't wielded any results");
		}
	};

	return (
		<>
			<SpellbookPage>
				<Heading type="2">The Spellbook</Heading>
				<p>Select the filters you'd like to apply, and click on Search.</p>
				<WhiteSection>
					<FilterGrid
						title="Schools of Magic"
						filterArray={schoolsData}
						filterSchools={filterSchools}
						setFilterSchools={setFilterSchools}
					/>
					<hr />
					<FilterGrid
						title="Classes"
						filterArray={classesData}
						filterClasses={filterClasses}
						setFilterClasses={setFilterClasses}
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
							<option value="6">6</option>
							<option value="9">9</option>
							<option value="12">12</option>
							<option value="15">15</option>
						</select>
					</Heading>
					<RowButtons
						loadingState={isLoading}
						handleFunction={handleSearch}
						buttonText="Search"
					/>
				</FlexRowSpacedWrapper>
			</SpellbookPage>
			{showError && <ErrorMessage typeOfError={errorMessage} />}
		</>
	);
};

export default Filters;
