import { useContext, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { paginate } from "../utils/utils";

const Filters = () => {
	const apiData = useContext(ApiContext);
	const [filterSchools, setFilterSchools] = useState({});
	const [filterClasses, setFilterClasses] = useState({});
	const [resultsPerPage, setResultsPerPage] = useState("6");
	const [showError, setShowError] = useState();
	const navigate = useNavigate();

	const sanitize = (obj) => {
		// const filterObj = Object.keys(obj);
		// const chosenFilters = obj.filter((item) => filterClasses[item]);
		// if (setFilterClasses) {
		// 	setFilterClasses(chosenFilters);
		// } else {
		// 	const chosenFilters = filterObj.filter((item) => filterSchools[item]);
		// 	setFilterSchools(chosenFilters);
		// }
	};

	const handleSearch = async () => {
		let filterData = {};
		console.log("click");

		try {
			if (filterClasses.length === 0 && filterSchools.length === 0) {
				filterData = paginate(apiData, resultsPerPage);
				console.log(filterData);
			} else {
				const searchClass =
					filterClasses.length > 0
						? await apiData.filter((spell) =>
								filterClasses.every((element) =>
									spell["dnd_class"].includes(element)
								)
						  )
						: apiData;
				const searchSchool =
					filterSchool.length > 0
						? await searchClass.filter((spell) =>
								filterSchool.some((element) => spell["school"].includes(element))
						  )
						: searchClass;
				filterData = paginate(searchSchool, resultsPerPage);
				console.log(filterData);
			}
			navigate("/searchresults", { state: filterData });
		} catch {
			setShowError(true);
			console.log(
				"filterClasses.length === 0 && filterSchool.length === 0 is " +
					filterClasses.length ===
					0 && filterSchool.length === 0
			);
		}
	};

	return (
		<>
			<SpellbookPage>
				<Heading type="2">The Spellbook</Heading>
				<p>Select the filters you'd like to apply, and click on Search.</p>
				\\ Filters filters.
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
						<StyledButton func={() => handleSearch()}>Search</StyledButton>
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
