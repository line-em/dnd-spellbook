import { useEffect, useState } from "react";
import axios from "axios";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import Heading from "../styled-components/Heading";
import { FlexRowWrapper, SpellbookPage } from "../styled-components/FlexStyles";
import { StyledLinkButton } from "../styled-components/StyledButton";
import { WhiteSection } from "../styled-components/FlexStyles";
import BasicFilters from "../components/BasicFilters";

const Filters = () => {
	const [isSelected, setIsSelected] = useState(false);
	const handleSelected = (selection) => console.log((prev) => [...prev, selection]);

	useEffect(() => {
		const options = {
			method: "GET",
			url: "https://api.open5e.com/spells/",
			params: { school: "Transmutation" }
		};

		try {
			axios.request(options).then((res) => {
				const filteredData = res.data.results.filter((result) => {
					const splitClasses = result.dnd_class.split(",");
					const trimClasses = splitClasses.map((item) => item.trim());
					console.log(trimClasses);
					const classesQuery = ["Bard", "Druid"];

					// const containsQuery = (results, query) =>
					// 	query.every((element) => results.includes(element));

					return trimClasses.includes(classesQuery);
				});
				console.log(filteredData);
			});
		} catch {
			console.log("error");
		}
	}, []);

	return (
		<SpellbookPage>
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
	);
};

export default Filters;
