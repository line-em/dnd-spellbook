import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { capitalize, sanitizeClasses } from "../utils/utils";
import { WhiteSectionBackdropLeft } from "../styled-components/SearchUtils";
import { WhiteSection } from "../styled-components/FlexStyles";
import Heading from "../styled-components/Heading";
import RowButtons from "../components/RowButtons";
import SpellInfo from "../components/SpellInfo";
import SpellDetails from "../components/SpellDetails";

const Spell = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const [spell, setSpell] = useState([]);
	let { name, desc, school, dnd_class, casting_time, level_int, range, ritual, duration } = spell;

	useEffect(() => {
		if (localStorage.getItem("api")) {
			console.log("has api");
			const localSpells = JSON.parse(localStorage.getItem("api"));
			let spellObj = localSpells.find((spell) => spell.slug === slug);
			console.log(spellObj);
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
		<WhiteSection maxWidth="90ch" key={slug}>
			<Heading type="1">{name && name}</Heading>

			<SpellDetails
				dnd_class={dnd_class}
				casting_time={casting_time}
				level_int={level_int}
				range={range}
				ritual={ritual}
				duration={duration}
				school={school}
			/>
			<WhiteSection>{desc ?? <SpellInfo content={spell.desc} />}</WhiteSection>

			{localStorage.getItem("search") ? (
				<RowButtons buttonText={"Return"} handleFunction={handleNavigate} />
			) : (
				<RowButtons />
			)}

			{school && (
				<WhiteSectionBackdropLeft school={capitalize(school)}></WhiteSectionBackdropLeft>
			)}
		</WhiteSection>
	);
};

export default Spell;
