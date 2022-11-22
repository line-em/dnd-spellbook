import Heading from "../styled-components/Heading";
import { FlexRowWrapper, SpellbookPage } from "../styled-components/FlexStyles";
import { StyledLinkButton } from "../styled-components/StyledButton";
import BasicFilters from "../components/BasicFilters";

const Filters = (props) => {
	return (
		<SpellbookPage>
			<Heading type="2">The Spellbook</Heading>
			<p>Select the filters you'd like to apply, and click on Search.</p>
			<BasicFilters />
			<FlexRowWrapper>
				<StyledLinkButton path="/">Home</StyledLinkButton>
				<StyledLinkButton>Search</StyledLinkButton>
			</FlexRowWrapper>
		</SpellbookPage>
	);
};

export default Filters;
