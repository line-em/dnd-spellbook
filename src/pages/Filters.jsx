import { ApiContext } from "../context/ApiContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import classesData from "../assets/classes/classesData";
import schoolsData from "../assets/schools/schoolsData";
import Heading from "../styled-components/Heading";
import { FlexRowSpacedWrapper, SpellbookPage } from "../styled-components/FlexStyles";
import { WhiteSection } from "../styled-components/FlexStyles";
import { paginate, sanitizeFilter } from "../utils/utils";
import FilterGrid from "../components/FilterGrid";
import ErrorMessage from "../components/ErrorMessage.jsx";
import RowButtons from "../components/RowButtons.jsx";

const Filters = () => {
	const apiData = useContext(ApiContext);
	const [filterSchools, setFilterSchools] = useState({});
	const [filterClasses, setFilterClasses] = useState({});
	const [resultsPerPage, setResultsPerPage] = useState("6");
	const [showError, setShowError] = useState();
	const [isLoading, setIsLoading] = useState();
	const navigate = useNavigate();

	const handleSearch = () => {
		setShowError(false);
		let schoolsArrFilter = sanitizeFilter(filterSchools);
		let classesArrFilter = sanitizeFilter(filterClasses);
		let allFilters = schoolsArrFilter.concat(classesArrFilter);

		try {
			if (schoolsArrFilter.length === 0 && classesArrFilter.length === 0) {
				handleNavigate("/results", apiData, allFilters);
			} else {
				const searchClass = apiData.filter((spell) =>
					classesArrFilter.every((element) => spell["dnd_class"].includes(element))
				);
				const searchSchool = searchClass.filter((spell) =>
					schoolsArrFilter.some((element) => spell["school"].includes(element))
				);
				handleNavigate("/results", searchSchool, allFilters);
			}
		} catch {
			setShowError(true);
		}
	};

	const handleNavigate = (url, data, filters) => {
		setIsLoading(true);
		return setTimeout(() => {
			navigate(`${url}/`, { state: { data, filters } });
		}, 2000);
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
							<option value="3">3</option>
							<option value="6">6</option>
							<option value="9">9</option>
							<option value="12">12</option>
						</select>
					</Heading>
					<RowButtons
						loadingState={isLoading}
						handleFunction={handleSearch}
						buttonText="Search"
					/>
				</FlexRowSpacedWrapper>
			</SpellbookPage>

			{showError && <ErrorMessage typeOfError="search" />}
		</>
	);
};

export default Filters;
