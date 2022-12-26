import { Pill, PillBox, SearchPills } from "../styled-components/Pills";
import { StyledLinkButton } from "../styled-components/StyledButton";

const SelectedFiltersBox = ({ filters }) => {
	return (
		<SearchPills>
			<PillBox>
				{filters.map((el) => (
					<Pill key={el}>{el}</Pill>
				))}
				<Pill className="reset">
					<StyledLinkButton path="/filters">Reset filters</StyledLinkButton>
				</Pill>
			</PillBox>
		</SearchPills>
	);
};
export default SelectedFiltersBox;
