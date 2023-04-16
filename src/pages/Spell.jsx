import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { capitalize } from "../utils/utils";
import { WhiteSectionBackdropLeft } from "../styled-components/SearchUtils";
import { WhiteSection, DetailsGrid } from "../styled-components/FlexStyles";
import Heading from "../styled-components/Heading";
import RowButtons from "../components/RowButtons";
import SpellInfo from "../components/SpellInfo";
import SpellDetails from "../components/SpellDetails";
import { useFetchUniqueSpell } from "../hooks/useFetch";
import Loader from "../components/Loader";

const Spell = () => {
	const { slug } = useParams();
	const navigate = useNavigate();
	const [info, setInfo] = useState({});
	const { spellObj, isLoading } = useFetchUniqueSpell(slug);
	const [detailedInfo, setDetailedInfo] = useState({});
	const { name, desc, school } = info;

	const getInfo = (obj) => {
		return Object.keys(obj).map((key) => {
			return <SpellDetails value={obj[key]} type={key} key={key} />;
		});
	};

	useEffect(() => {
		if (spellObj) {
			setInfo({
				desc: spellObj.desc,
				name: spellObj.name,
				school: spellObj.school
			});
			setDetailedInfo({
				dnd_class: spellObj.dnd_class,
				casting_time: spellObj.casting_time,
				level: spellObj.level_int,
				range: spellObj.range,
				ritual: capitalize(spellObj.ritual),
				duration: spellObj.duration,
				school: capitalize(spellObj.school)
			});
		}
	}, [isLoading]);

	const handleNavigate = () => {
		navigate(-1);
	};

	return (
		<>
			<WhiteSection maxWidth="90ch" key={slug}>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<Heading type="1">{name && name}</Heading>
						<DetailsGrid>
							{detailedInfo ? getInfo(detailedInfo) : ""}
						</DetailsGrid>
						<WhiteSection margin="nomargin">
							<Heading type="2">About</Heading>
							{desc && <SpellInfo content={desc} />}
						</WhiteSection>
						{localStorage.getItem("search") ? (
							<RowButtons
								buttonText={"Return"}
								handleFunction={handleNavigate}
							/>
						) : (
							<RowButtons />
						)}
					</>
				)}
			</WhiteSection>
			{school && (
				<WhiteSectionBackdropLeft
					school={capitalize(school)}
				></WhiteSectionBackdropLeft>
			)}
		</>
	);
};

export default Spell;
