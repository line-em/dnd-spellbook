import { Pill, PillBox } from "../styled-components/Pills";

const Pills = ({ items }) => {
	return (
		<PillBox>
			{items.map((item) => (
				<Pill>
					<span key={item}>{item}</span>
				</Pill>
			))}
		</PillBox>
	);
};

export default Pills;
