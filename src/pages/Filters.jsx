import Heading from "../styled-components/Heading";
import { WhiteSection } from "../styled-components/FlexStyles";

const Filters = (props) => {
	return (
		<WhiteSection>
			<Heading type="2">The Spellbook</Heading>
			<p>Please select the filters you'd like to apply, and click on Search.</p>
			<section>
				<div>Classes</div>
				<img src={Artificer} alt="" />
				<div>Schools</div>
			</section>
		</WhiteSection>
	);
};

export default Filters;
