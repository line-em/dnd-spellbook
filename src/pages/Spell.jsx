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
	const apiData = useContext(ApiContext);

	const currentSpell = apiData.find((spell) => spell.slug === slug);

	// const { name, desc, school } = currentSpell;
	// console.log(name, dnd_class, desc);
	return (
		<>
			<WhiteSection maxWidth="90ch">
				<Heading type="1">{currentSpell.name}</Heading>
				<WhiteSection>
					<p>{currentSpell.desc}</p>
				</WhiteSection>
			</WhiteSection>
			<WhiteSectionBackdropLeft
			// school={capitalize(currentSpell.school)}
			></WhiteSectionBackdropLeft>
		</>
	);
};

export default Spell;
