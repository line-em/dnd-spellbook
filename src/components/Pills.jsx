import { Pill, PillBox } from "../styled-components/Pills";

const Pills = ({ items }) => {
	return (
		<PillBox>
			{items.map((item) => (
				<Pill>{item}</Pill>
			))}
		</PillBox>
	);
};

export default Pills;
