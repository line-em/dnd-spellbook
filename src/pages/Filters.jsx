import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import Heading from "../styled-components/Heading";
import { Ripples } from "@uiball/loaders";
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
		return setTimeout(() => {
			navigate(`${url}`, { state: { data, filters } });
		}, 2000);
	};

	const handleSearch = () => {
		setShowError(false);
		let schoolsArrFilter = sanitizeFilter(filterSchools);
		let classesArrFilter = sanitizeFilter(filterClasses);
		let allFilters = schoolsArrFilter.concat(classesArrFilter);

		try {
			if (schoolsArrFilter.length === 0 && classesArrFilter.length === 0) {
				filterData = paginate(apiData, resultsPerPage);
				handleNavigate("/searchresults/1", filterData, allFilters);
			} else {
				const searchClass = apiData.filter((spell) =>
					classesArrFilter.every((element) => spell["dnd_class"].includes(element))
				);
				const searchSchool = searchClass.filter((spell) =>
					schoolsArrFilter.some((element) => spell["school"].includes(element))
				);
				filterData = paginate(searchSchool, resultsPerPage);
				handleNavigate("/searchresults/1", filterData, allFilters);
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
						info="Only spells available to ALL selected classes will be shown."
					/>
					<hr />
					<BasicFilters
						title="Schools of Magic"
						filterArray={schoolsData}
						filterSchools={filterSchools}
						setFilterSchools={setFilterSchools}
						info="Spells included in the selected schools will be shown."
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
