import { Link } from "react-router-dom";
import { Pill, PillBox, SearchPills } from "../styled-components/Pills";
import { StyledLinkButton } from "../styled-components/StyledButton";

const SelectedFiltersBox = ({ filters }) => {
	return (
		<SearchPills>
			<PillBox>
				{filters.map((el) => (
					<Pill key={el}>{el}</Pill>
				))}
				<Link to="/filters">Reset filters</Link>
			</PillBox>
		</SearchPills>
	);
};
export default SelectedFiltersBox;
