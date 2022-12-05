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
import { useNavigate, Route, Routes } from "react-router-dom";
import SearchResultsMain from "./SearchResultsMain.jsx";

const paginate = (arr, pagination) => {
	const sliced = [];
	const arrCopy = arr;

	for (let i = 0; i < arr.length; i++) {
		sliced.push([arrCopy.slice(0, pagination)]);
		arrCopy.splice(0, pagination);
	}

	if (arrCopy.length !== 0) {
		sliced.push([arrCopy]);
	}
	return sliced;
};

const Filters = () => {
	const apiData = useContext(ApiContext);
	const [filterSchool, setFilterSchool] = useState([]);
	const [filterClasses, setFilterClasses] = useState([]);
	const [resultsPerPage, setResultsPerPage] = useState("6");
	const [filterData, setFilterData] = useState({});
	const [runSearch, setRunSearch] = useToggle();
	const [showError, setShowError] = useToggle();
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

	useEffect(() => {
		console.log(Object.values(filterData).length + " This is the initial length");
		console.log("Start");
		let searchClass = {};
		let searchSchool = {};
		if (filterClasses.length > 0) {
			searchClass = apiData.filter((spell) =>
				filterClasses.every((element) => spell["dnd_class"].includes(element))
			);
		}
		if (filterSchool.length > 0) {
			Object.values(searchClass).length > 0
				? (searchSchool = searchClass.filter((spell) =>
						filterSchool.some((element) => spell["school"].includes(element))
				  ))
				: (searchSchool = apiData.filter((spell) =>
						filterSchool.some((element) => spell["school"].includes(element))
				  ));
		}
		Object.values(searchClass).length > 0 && Object.values(searchSchool).length > 0
			? setFilterData(paginate(searchClass, resultsPerPage))
			: paginate(apiData, resultsPerPage);
	}, [runSearch]);

	const handleSearch = () => {
		setRunSearch(!runSearch);
		setShowError(false);
		console.log(filterData);
		console.log(Object.values(filterData).length + " This is the length");
		if (Object.values(filterData).length > 0) {
			setShowError(false);
			console.log("Generated");
			console.log(filterData);
			navigate("/searchresults", { state: filterData });
		} else {
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
					<StyledButton func={() => handleSearch()}>Search</StyledButton>
					{/* <div onClick={() => setRunSearch(!runSearch)}> */}
					{/* <StyledLinkButton path="/searchresults" state={{ filterData }}>
							Search
						</StyledLinkButton>
					</div> */}
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
