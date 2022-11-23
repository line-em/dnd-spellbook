import { useEffect, useState } from "react";
import axios from "axios";
import classesData from "../assets/classes/classesData.js";
import schoolsData from "../assets/schools/schoolsData";
import Heading from "../styled-components/Heading";
import { ErrorBox, FlexRowWrapper, SpellbookPage } from "../styled-components/FlexStyles";
import { StyledLinkButton } from "../styled-components/StyledButton";
import { WhiteSection } from "../styled-components/FlexStyles";
import BasicFilters from "../components/BasicFilters";
import {
	SearchGrid,
	WhiteSectionBackdropLeft,
	WhiteSectionBackdropRight
} from "../styled-components/SearchUtils.jsx";

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
		<>
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
			<div>
				<Heading type="4">Search Results</Heading>
				<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, 400px)" }}>
					<WhiteSection>
						<WhiteSectionBackdropLeft school="Abjuration2"></WhiteSectionBackdropLeft>
						<Heading type="4">"Abhorrent Apparition"</Heading>
						<WhiteSectionBackdropRight school="Abjuration2"></WhiteSectionBackdropRight>
						<SearchGrid>
							<div>Bard,Druid</div>
							<div>Illusion</div>
							<StyledLinkButton>Read More</StyledLinkButton>
						</SearchGrid>
					</WhiteSection>
					<WhiteSection>
						<WhiteSectionBackdropLeft school="Necromancy"></WhiteSectionBackdropLeft>
						<Heading type="4">"Abhorrent Apparition"</Heading>
						<WhiteSectionBackdropRight school="Necromancy"></WhiteSectionBackdropRight>
						<SearchGrid>
							<div>Bard,Druid</div>
							<div>Illusion</div>
							<StyledLinkButton>Read More</StyledLinkButton>
						</SearchGrid>
					</WhiteSection>
					<WhiteSection>
						<WhiteSectionBackdropLeft school="Illusion"></WhiteSectionBackdropLeft>
						<Heading type="4">"Abhorrent Apparition"</Heading>
						<SearchGrid>
							<div>Bard,Druid</div>
							<div>Illusion</div>
							<StyledLinkButton>Read More</StyledLinkButton>
						</SearchGrid>
					</WhiteSection>
					<WhiteSection>
						<WhiteSectionBackdropLeft school="Transmutation"></WhiteSectionBackdropLeft>
						<Heading type="4">"Abhorrent Apparition"</Heading>
						<SearchGrid>
							<div>Bard,Druid</div>
							<div>Illusion</div>
							<StyledLinkButton>Read More</StyledLinkButton>
						</SearchGrid>
					</WhiteSection>
					<WhiteSection>
						<WhiteSectionBackdropLeft school="Enchantment"></WhiteSectionBackdropLeft>
						<Heading type="4">"Abhorrent Apparition"</Heading>
						<SearchGrid>
							<div>Bard,Druid</div>
							<div>Illusion</div>
							<StyledLinkButton>Read More</StyledLinkButton>
						</SearchGrid>
					</WhiteSection>
					<WhiteSection>
						<WhiteSectionBackdropLeft school="Evocation"></WhiteSectionBackdropLeft>
						<Heading type="4">"Abhorrent Apparition"</Heading>
						<SearchGrid>
							<div>Bard,Druid</div>
							<div>Illusion</div>
							<StyledLinkButton>Read More</StyledLinkButton>
						</SearchGrid>
					</WhiteSection>
				</div>
			</div>
		</>
	);
};

export default Filters;
