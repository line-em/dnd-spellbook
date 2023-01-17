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
import Pills from "../components/Pills";

const Spell = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const [spell, setSpell] = useState([]);
	const { name, desc, school, dnd_class } = spell;

	useEffect(() => {
		if (localStorage.getItem("api")) {
			console.log("has api");
			const localSpells = JSON.parse(localStorage.getItem("api"));
			let spellObj = localSpells.find((spell) => spell.slug === slug);
			return setSpell(spellObj);
		} else {
			console.log("will call api");
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

	const handleNavigate = () => {
		navigate(-1);
	};

	return (
		<>
			<WhiteSection maxWidth="90ch" key={slug}>
				<Heading type="1">{name && name}</Heading>
				{dnd_class && <Pills items={dnd_class} />}
				<WhiteSection>
					{desc ?? (
						<>
							<p>{desc}</p>
							<p>{school}</p>
						</>
					)}
				</WhiteSection>
				<WhiteSection>
					{localStorage.getItem("search") ? (
						<RowButtons buttonText={"Return"} handleFunction={handleNavigate} />
					) : (
						<RowButtons />
					)}
				</WhiteSection>
			</WhiteSection>
			{school && (
				<WhiteSectionBackdropLeft school={capitalize(school)}></WhiteSectionBackdropLeft>
			)}
		</>
	);
};

export default Spell;
