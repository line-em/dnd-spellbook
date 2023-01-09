import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import classesData from "../assets/classes/classesData";
import { capitalize, sanitizeClasses } from "../utils/utils";
import { WhiteSectionBackdropLeft } from "../styled-components/SearchUtils";
import { WhiteSection } from "../styled-components/FlexStyles";
import Heading from "../styled-components/Heading";
import RowButtons from "../components/RowButtons";
import { StyledFilter } from "../styled-components/ClassBubble";

const Spell = () => {
	const { slug } = useParams();
	const { navigate } = useNavigate();
	const [spell, setSpell] = useState([]);
	const { name, desc, school, dnd_class } = spell;

	const capitalizedSchool = () => (
		<WhiteSectionBackdropLeft school={capitalize(school)}></WhiteSectionBackdropLeft>
	);

	const descriptionArea = (
		<WhiteSection>
			<p>{desc}</p>
			<p>{school}</p>
		</WhiteSection>
	);

	useEffect(() => {
		if (localStorage.getItem("api")) {
			// FIXME:not tested
			const localSpells = JSON.parse(localStorage.getItem("api"));
			let spellObj = localSpells.find((spell) => spell.slug === slug);
			return setSpell(spellObj);
		} else {
			const getSpell = async () => {
				try {
					const url = `${import.meta.env.VITE_URL}?slug=${slug}`;
					const response = await axios.get(url);
					const results = await response.data.results;
					results[0].dnd_class = sanitizeClasses(results[0].dnd_class);
					return setSpell(results[0]);
				} catch (error) {
					console.log(error);
				}
			};
			getSpell();
		}
	}, []);

	const dndClassTags = dnd_class?.map((item) => (
		<div style={{ border: "red 5px solid" }}>
			{item}
			{/* {classesData.filter((dndClass) => dndClass.query === item)} */}
		</div>
	));

	return (
		<>
			<WhiteSection maxWidth="90ch">
				<Heading type="1">{name && name}</Heading>
				<WhiteSection>{dnd_class && dndClassTags}</WhiteSection>
				{desc && descriptionArea}
				<WhiteSection>
					{/* doesnt work */}
					{/* <RowButtons buttonText={"Return"} handleFunction={() => navigate("/results")} /> */}
				</WhiteSection>
			</WhiteSection>
			{school && capitalizedSchool}
		</>
	);
};

export default Spell;
