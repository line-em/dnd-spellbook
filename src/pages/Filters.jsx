import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classesData from "../assets/classes/classesData";
import schoolsData from "../assets/schools/schoolsData";
import { transformObj, getClasses, getSchools } from "../utils/utils";
import Heading from "../styled-components/Heading";
import {
	FlexRowSpacedWrapper,
	SpellbookPage,
	WhiteSection
} from "../styled-components/FlexStyles";
import FilterGrid from "../components/FilterGrid";
import ErrorMessage from "../components/ErrorMessage.jsx";
import RowButtons from "../components/RowButtons.jsx";
import { useFetchSpells } from "../hooks/useFetch";

const Filters = () => {
	const navigate = useNavigate();
	const { apiData, isLoading } = useFetchSpells();
	const [filters, setFilters] = useState({
		classes: {},
		schools: {},
		resultsPerPage: 6
	});
	const [status, setStatus] = useState({
		error: false,
		empty: false,
		emptySearch: "Your search hasn't wielded any results",
		errorMessage: "An error has occured during search",
		loading: false
	});

	const handleSearch = () => {
		setStatus((prev) => ({ ...prev, error: false }));
		const parsedSchools = transformObj(filters.schools);
		const parsedClasses = transformObj(filters.classes);
		const allFilters = parsedSchools.concat(parsedClasses);

		if (parsedSchools.length > 0 || parsedClasses.length > 0) {
			let searchResult;
			if (parsedSchools.length > 0 && parsedClasses.length > 0) {
				const filteredClasses = getClasses(apiData, parsedClasses, "dnd_class");
				searchResult = getSchools(filteredClasses, parsedSchools, "school");
			} else if (parsedSchools.length > 0) {
				searchResult = getSchools(apiData, parsedSchools, "school");
			} else if (parsedClasses.length > 0) {
				searchResult = getClasses(apiData, parsedClasses, "dnd_class");
			}
			handleNavigate("/results", searchResult, allFilters);
		} else {
			handleNavigate("/results", apiData, allFilters);
		}
	};

	const handleNavigate = (url, data, query) => {
		setStatus((prev) => ({ ...prev, loading: true }));
		const resultsPerPage = filters.resultsPerPage;

		if (data.length > 0)
			return setTimeout(() => {
				navigate(`${url}/`, { state: { data, query, resultsPerPage } });
			}, 1000);

		if (data.length === 0) {
			setStatus((prev) => ({ ...prev, error: true, empty: true, loading: false }));
			setFilters({
				classes: {},
				schools: {}
			});
		}
	};

	useEffect(() => {
		localStorage.removeItem("search");
	}, []);

	return (
		<>
			{status.error ? (
				<ErrorMessage typeOfError={status.errorMessage} />
			) : (
				<SpellbookPage>
					<Heading type="2">The Spellbook</Heading>
					<p>Select the filters you'd like to apply, and click on Search.</p>
					<WhiteSection>
						<FilterGrid
							title="Schools of Magic"
							filterArray={schoolsData}
							filters={filters}
							setFilters={setFilters}
						/>
						<hr />
						<FilterGrid
							title="Classes"
							filterArray={classesData}
							filters={filters}
							setFilters={setFilters}
						/>
					</WhiteSection>
					<FlexRowSpacedWrapper>
						<Heading type="4">
							<label htmlFor="numberOfResults">Results per page</label>
							<select
								id="numberOfResults"
								value={filters.resultsPerPage}
								onChange={(e) =>
									setFilters((prev) => ({
										...prev,
										resultsPerPage: e.target.value
									}))
								}
							>
								<option value={6}>6</option>
								<option value={9}>9</option>
								<option value={12}>12</option>
								<option value={15}>15</option>
							</select>
						</Heading>
						<RowButtons
							disableButton={isLoading}
							loadingState={status.loading}
							handleFunction={handleSearch}
							buttonText="Search"
						/>
					</FlexRowSpacedWrapper>
				</SpellbookPage>
			)}
			{status.error && (
				<ErrorMessage
					typeOfError={status.empty ? status.emptySearch : status.errorMessage}
				/>
			)}
		</>
	);
};

export default Filters;
