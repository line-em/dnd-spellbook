import { useContext, useEffect, useState } from "react";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import Heading from "../styled-components/Heading";
import { Ripples } from "@uiball/loaders";
import { ErrorBox, FlexRowWrapper, SpellbookPage } from "../styled-components/FlexStyles";
import { StyledButton, StyledLinkButton } from "../styled-components/StyledButton";
import { WhiteSection } from "../styled-components/FlexStyles";
import BasicFilters from "../components/BasicFilters";
import { ApiContext } from "../context/ApiContext";
import useToggle from "../hooks/useToggle.jsx";
import { useNavigate } from "react-router-dom";
import { paginate } from "../utils/utils";

const Filters = () => {
	const apiData = useContext(ApiContext);
	const [filterSchool, setFilterSchool] = useState([]);
	const [filterClasses, setFilterClasses] = useState([]);
	const [resultsPerPage, setResultsPerPage] = useState("6");
	const [filterData, setFilterData] = useState({});
	const [showError, setShowError] = useToggle();
	const [runSearch, setRunSearch] = useToggle(false);
	const navigate = useNavigate();

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

	useEffect(() => setFilterData(apiData), []);

	useEffect(() => {
		setShowError(false);
		if (filterClasses.length === 0 && filterSchool.length === 0) {
			setFilterData(paginate(apiData, resultsPerPage));
			console.log("no filter");
			navigate("/searchresults", { state: filterData });
		} else if (filterClasses.length !== 0 && filterSchool.length !== 0) {
			const searchClass =
				filterClasses.length > 0
					? apiData.filter((spell) =>
							filterClasses.every((element) => spell["dnd_class"].includes(element))
					  )
					: apiData;
			const searchSchool =
				filterSchool.length > 0
					? searchClass.filter((spell) =>
							filterSchool.some((element) => spell["school"].includes(element))
					  )
					: searchClass;
			setFilterData(paginate(searchSchool, resultsPerPage));
			navigate("/searchresults", { state: filterData });
		} else {
			setShowError(true);
		}
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
						info="Only spells available to ALL selected classes will be shown."
					/>
					<hr />
					<BasicFilters
						title="Schools of Magic"
						filterArray={schoolsData}
						getSchool={(school) => updateSchools(school)}
						info="Spells included in the selected schools will be shown."
					/>
				</WhiteSection>
				<FlexRowWrapper>
					<div>
						<label htmlFor="numberOfResults">
							<Heading type="4">Results per page</Heading>
						</label>
						<select
							id="numberOfResults"
							value={resultsPerPage}
							onChange={(e) => setResultsPerPage(e.target.value)}
						>
							<option value="3">3</option>
							<option value="6">6</option>
							<option value="9">9</option>
						</select>
					</div>
				</FlexRowWrapper>
				<FlexRowWrapper>
					<StyledLinkButton path="/">Home</StyledLinkButton>
					<StyledButton func={() => setRunSearch(!runSearch)}>Search</StyledButton>
				</FlexRowWrapper>
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
