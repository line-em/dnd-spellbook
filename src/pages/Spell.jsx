// const found = array1.find((element) => element > 10);
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { capitalize } from "../utils/utils";
import { WhiteSectionBackdropLeft } from "../styled-components/SearchUtils";
import { WhiteSection } from "../styled-components/FlexStyles";

const Spell = () => {
	const { slug } = useParams();
	let currentSpell;
	if (localStorage.getItem("api")) {
		const localSpells = JSON.parse(localStorage.getItem("api"));
		currentSpell = localSpells.find((spell) => spell.slug === slug);
		console.log(currentSpell);
	} else {
		console.log("need new api call directly to spells");
		// Only for avoiding problems, context is loading in the background.
		useEffect(() => {
			const fetchUniqueSpell = async () => {
				try {
					const url = `${import.meta.env.VITE_URL}?slug=${slug}`;
					const response = await axios.get(url);
					const results = await response.data.results[0];
					const parseResults = await results.dnd_class;
					console.log(parseResults);
				} catch (error) {
					console.log(error);
				}
			};
			fetchUniqueSpell();
		}, []);
	}

	return (
		<>
			<WhiteSection maxWidth="90ch">
				{/* <Heading type="1">{currentSpell.name}</Heading>
				<WhiteSection>
					<p>{currentSpell.desc}</p>
				</WhiteSection> */}
			</WhiteSection>
			<WhiteSectionBackdropLeft
			// school={capitalize(currentSpell.school)}
			></WhiteSectionBackdropLeft>
		</>
	);
};

export default Spell;
