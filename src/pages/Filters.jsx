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
	const [filterData, setFilterData] = useState({});
	const [runSearch, setRunSearch] = useState(false);

	const updateClasses = (filters) => {
		const classesArray = Object.keys(filters);
		const chosenClasses = classesArray.filter((item) => filters[item]);
		setFilterClasses(chosenClasses);
	};

	const updateSchools = (filters) => {
		const schoolArray = Object.keys(filters);
		const chosenSchool = schoolArray.filter((item) => filters[item]);
		if (chosenSchool.includes("♾️ All Filters")) {
			chosenSchool.pop();
			console.log("No All Filters!");
		}
		const stringifiedSchool = chosenSchool.toString();
		setFilterSchool(stringifiedSchool);
		console.log(`This is currently the school: ${filterSchool}`);
	};
	useEffect(() => {
		async function fetchAllPages(url) {
			const data = [];
			try {
				do {
					const response = await axios.get(url);
					const results = await response.data;
					url = results.next;
					data.push(...results.results);
					console.log(data);
				} while (url);
			} catch (err) {
				console.log(err);
			}
			// do {
			// 	let response = fetch(url);
			// 	const data = response.json();
			// 	url = response.next;
			// 	// data.push(...response.results);
			// 	console.log(response.data);
			// } while (url);

			return data;
		}
		fetchAllPages("https://api.open5e.com/spells/");
		// const options = {
		// 	method: "GET",
		// 	url: "https://api.open5e.com/spells/",
		// 	params: {
		// 		school__in: filterSchool,
		// 		// DOESNT WORK
		// 		ordering: ordering
		// 	}
		// };
		// try {
		// 	axios.request(options).then((res) => {
		// 		console.log(res.data);
		// 		console.log(`Now it's running. Results num ${res.data.results.length}`);
		// 		console.log(filterSchool);
		// 		console.log(res.data.results);
		// 		console.log("Now with the class filter.");
		// 		const queryClasses = res.data.results.filter((result) => {
		// 			const splitClasses = result.dnd_class.split(",");
		// 			const trimClasses = splitClasses.map((item) => item.trim());

		// 			return filterClasses.every((element) => trimClasses.includes(element));
		// 		});
		// 		setFilterData(queryClasses);
		// 		console.log(filterData);
		// 	});
		// } catch {
		// 	console.log("error");
		// }
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
					<option value="6" defaultValue>
						6
					</option>
					<option value="9">9</option>
				</select>

				<label htmlFor="ordering">Results per page</label>
				<select id="ordering" onChange={(e) => setOrdering(e.target.value)}>
					<option value="level" defaultValue>
						Level - ascending
					</option>
					<option value="-level">Level - descending</option>
					<option value="name">Name - ascending</option>
					<option value="-name">Name - descending</option>
				</select>

				<FlexRowWrapper>
					<StyledLinkButton path="/">Home</StyledLinkButton>
					{/* <StyledLinkButton
						path="/searchresults"
						onClick={() => setRunSearch(!runSearch)}
					>
						Search
					</StyledLinkButton> */}
					<StyledLinkButton onClick={(e) => setRunSearch(!runSearch)}>
						Search
					</StyledLinkButton>
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
