// const found = array1.find((element) => element > 10);
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import { capitalize } from "../utils/utils";
import { WhiteSectionBackdropLeft } from "../styled-components/SearchUtils";
import { WhiteSection } from "../styled-components/FlexStyles";
import Heading from "../styled-components/Heading";

const Spell = () => {
	const { slug } = useParams();
	const apiData = useContext(ApiContext);
	const currentSpell = JSON.parse(localStorage.getItem("currentSpell"));
	useEffect(() => {
		const localSpell = apiData.find((spell) => spell.slug === slug);
		localStorage.setItem("currentSpell", JSON.stringify(localSpell));
	}, [slug]);

	// const [currentSpell, setCurrentSpell] = useState(() => {
	// 	try {
	// 		const localSpell = apiData.find((spell) => spell.slug === slug);
	// 		localStorage.setItem("currentSpell", JSON.stringify(localSpell));
	// 		return;
	// 	} catch {
	// 		return;
	// 	}
	// });

	// const { name, desc, school } = currentSpell;
	// console.log(name, dnd_class, desc);

	// FIXME: State in local storage to avoid errors.
	return (
		<>
			<WhiteSection maxWidth="90ch">
				<Heading type="1">{currentSpell.name}</Heading>
				<WhiteSection>
					<p>{currentSpell.desc}</p>
				</WhiteSection>
			</WhiteSection>
			<WhiteSectionBackdropLeft
				school={capitalize(currentSpell.school)}
			></WhiteSectionBackdropLeft>
		</>
	);
};

export default Spell;
