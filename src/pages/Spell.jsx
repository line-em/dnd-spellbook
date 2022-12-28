// const found = array1.find((element) => element > 10);
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { capitalize } from "../utils/utils";
import { WhiteSectionBackdropLeft } from "../styled-components/SearchUtils";
import { WhiteSection } from "../styled-components/FlexStyles";
import Heading from "../styled-components/Heading";
import useLocalStorage from "../hooks/useLocalStorage";

const Spell = () => {
	const { slug } = useParams();
	let currentSpell;
	if (localStorage.getItem("api")) {
		console.log(slug);
		const apiData = useContext(ApiContext);
		currentSpell = apiData.find((spell) => spell.slug === slug);
		console.log(currentSpell.name);
	} else {
		console.log("need new api call directly to spells");
	}

	// const { name, desc, school } = currentSpell;
	// console.log(name, dnd_class, desc);
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
