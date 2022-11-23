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
	const [isSelected, setIsSelected] = useState(false);
	const handleSelected = (selection) => console.log((prev) => [...prev, selection]);

	// useEffect(() => {
	// 	const options = {
	// 		method: "GET",
	// 		url: "https://api.open5e.com/spells/",
	// 		params: { school: "Transmutation" }
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
		<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
			<section>
				<SpellbookPage style={{ opacity: "1" }}>
					<Heading type="2">The Spellbook</Heading>
					<p>Select the filters you'd like to apply, and click on Search.</p>
					<WhiteSection>
						<BasicFilters title="Classes" filterArray={classesData} />
						<hr />
						<BasicFilters title="Schools of Magic" filterArray={schoolsData} />
					</WhiteSection>
					<FlexRowWrapper>
						<StyledLinkButton path="/">Home</StyledLinkButton>
						<StyledLinkButton>Search</StyledLinkButton>
					</FlexRowWrapper>
				</SpellbookPage>
				{/* <ErrorBox>
					<p>
						An error has occured during the Search. <strong>Please try again.</strong>
					</p>
				</ErrorBox> */}
			</section>
			<>
				<SpellbookPage>
					<Heading type="4">Search Results</Heading>
					<p>Filters: Druid, Bard, Divination</p>
					<BasicFilters title="Classes" filterArray={classesData} />
					<hr />
					<BasicFilters title="Schools of Magic" filterArray={schoolsData} />
				</SpellbookPage>
			</>
		</div>
	);
};

export default Filters;
