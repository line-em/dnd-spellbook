import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { capitalize, sanitizeClasses } from "../utils/utils";
import { WhiteSectionBackdropLeft } from "../styled-components/SearchUtils";
import { WhiteSection, DetailsGrid } from "../styled-components/FlexStyles";
import Heading from "../styled-components/Heading";
import RowButtons from "../components/RowButtons";
import SpellInfo from "../components/SpellInfo";
import SpellDetails from "../components/SpellDetails";

const Spell = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const [spell, setSpell] = useState([]);
	const [detailedInfo, setDetailedInfo] = useState({});
	const [rawDescription, setRawDescription] = useState("");
	const { name, desc, school } = spell;

	const getInfo = (obj) => {
		return Object.keys(obj).map((key) => {
			return <SpellDetails value={obj[key]} type={key} key={key} />;
		});
	};

	useEffect(() => {
		if (localStorage.getItem("api")) {
			console.log("has api");
			const localSpells = JSON.parse(localStorage.getItem("api"));
			let spellObj = localSpells.find((spell) => spell.slug === slug);

			setRawDescription(spellObj.desc);

			setDetailedInfo({
				dnd_class: spellObj.dnd_class,
				casting_time: spellObj.casting_time,
				level: spellObj.level_int,
				range: spellObj.range,
				ritual: capitalize(spellObj.ritual),
				duration: spellObj.duration,
				school: capitalize(spellObj.school)
			});

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
				{/* animate-objects */}
				<DetailsGrid>{detailedInfo ? getInfo(detailedInfo) : "nothing"}</DetailsGrid>
				<WhiteSection margin="nomargin">
					<Heading type="2">About</Heading>
					{desc && <SpellInfo content={rawDescription} />}
				</WhiteSection>

				{localStorage.getItem("search") ? (
					<RowButtons buttonText={"Return"} handleFunction={handleNavigate} />
				) : (
					<RowButtons />
				)}
			</WhiteSection>
			{school && (
				<WhiteSectionBackdropLeft school={capitalize(school)}></WhiteSectionBackdropLeft>
			)}
		</>
	);
};

export default Spell;
