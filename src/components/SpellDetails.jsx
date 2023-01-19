import Heading from "../styled-components/Heading";
import Pills from "../components/Pills";
import { Container } from "../styled-components/Pills";
import {
	IconContext,
	Clock,
	Crown,
	HourglassHigh,
	Compass,
	Scroll,
	UsersThree,
	GraduationCap
} from "phosphor-react";
import { capitalize } from "../utils/utils";

const SpellDetails = ({ type, value }) => {
	const getIcon = (type) => {
		switch (type) {
			case "casting_time":
				return <Clock />;
			case "level":
				return <Crown />;
			case "duration":
				return <HourglassHigh />;
			case "range":
				return <Compass />;
			case "ritual":
				return <Scroll />;
			case "school":
				return <UsersThree />;
			case "dnd_class":
				return <GraduationCap />;
		}
	};

	const title =
		type === "dnd_class" ? "Classes" : type === "casting_time" ? "Casting" : capitalize(type);

	return (
		<IconContext.Provider
			value={{
				color: "var(--lilac)",
				size: 40,
				weight: "duotone"
			}}
		>
			<Container
				span={
					(type === "dnd_class" && value.length > 2 && "span 2") ||
					(value.length > 90 && "span 2")
				}
			>
				{getIcon(type)}
				<div>
					<Heading type="4">{title}</Heading>
					{type && type === "dnd_class" ? <Pills items={value} /> : <p>{value}</p>}
				</div>
			</Container>
		</IconContext.Provider>
	);
};

export default SpellDetails;
